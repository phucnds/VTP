import { connectWsgw, IWSGWClient } from "@elofun/vds-gami-2022-wsgw";
import LoadingCover from "../../common/LoadingCover";
import { ErrorHandleType, IAPIInterface } from "./APIDefine";

export const SERVICE_HOST = (/localhost/i.test(window.location.hostname) || /elofun.github.io/i.test(window.location.hostname))
    ? `wss://vtpost.beta.elofun.net/wsgw/`
    : (/.+cdn\..+/.test(window.location.hostname)
        ? window.location.href.replace(/^http/, 'ws').replace(/(.+)cdn\.(.+)/, '$1.$2')
        : (window.location.href.split('?')[0].replace('http', 'ws').replace('https', 'wss'))
    ) + 'wsgw/';

// const SERVICE_HOST = `wss://${window.location.host}/wsgw/`; // For production
// const SERVICE_HOST = `wss://gami-mvt.elofun.net/wsgw/`; // For development

export const apiNeedLoading = [
    'me',
    'exchangeCoin',
    'getAllRewardsHistory',
    'getTicketsHistory',
    'getCoinWinnerList',
    'hitSaveNowButton',
]

const TIMEOUT = {
    bookAndClaimReward: 60000,
    claimLoginReward: 60000,
};
const DEBUG = true
export enum ErrorCode {
    CONECTION_TIMEOUT = "01",
    SERVER_EXCEPTION = "02",
    CLIENT_EXCEPTION = "03",
    NOT_AUTHENTICATED = "04",
    OTHER_CASES = "05",
    TIMEOUT_TXT = "06",
}
interface IAPIResponse {
    status: number;
    data: any;
}
interface IUserRequestAPIInfo {
    api: IAPIInterface;
    data: any;
    onSuccess: any;
    onFailed: any;
}
export default new (class WSGW extends cc.SystemEvent {
    private wsgw: Promise<IWSGWClient>;
    public isAuthenticated: boolean = true;
    private token: string = "";
    private loading = 0;
    constructor() {
        super();
    }
    private userRequestedInfo: { [key: string]: IUserRequestAPIInfo } = {};
    getWsgw() {
        if (!this.wsgw) {
            this.wsgw = connectWsgw(SERVICE_HOST);
        }
        return this.wsgw;
    }
    public clearWsgw() {
        console.warn('Clear wsgw');
        this.wsgw = null;
    }
    setAuthToken(token: string) {
        if (this.token == token && this.isAuthenticated) return;
        this.token = token;
        return this.getWsgw().then(wsgw => wsgw.setAuthToken(token).then(() => this.isAuthenticated = true)).catch((e) => {
            this.isAuthenticated = false;
            this.setAuthToken(token);
        });
    }
    request(service: string, api: string, data: any, timeout?: number): Promise<IAPIResponse> {
        return this.getWsgw().then((wsgw) =>
            wsgw.request(service, api, data, timeout)
        );
    }
    // subscribe: (service: string, channel: string, cb?: (data: any) => void) => void;
    onPromiseResolve(res, onSuccess, onFailed, service, api, type = null, retryTimes = 0) {
        const { status, data } = res
        if (status === 200) {
            console.log(`${service}-${api} : sucess`)
            DEBUG && console.log(data)
            onSuccess && onSuccess(data);
        } else {
            console.log(`${service}-${api} : failed`)
            console.log(res)
            if (!this.isAuthenticated) {
                setTimeout(() => {
                    this.userRequest(type, data, onSuccess, onFailed, retryTimes - 1);
                }, 1000)
            } else {
                if (status == 500) {
                    if (res.data == "TIMEOUT") onFailed(ErrorCode.CONECTION_TIMEOUT)
                    else onFailed(ErrorCode.SERVER_EXCEPTION)
                }
                else {
                    onFailed(ErrorCode.OTHER_CASES, res)
                }
            }
        }
    }
    loadingCountUp(api: string) {
        if (apiNeedLoading.includes(api)) {
            this.loading += 1;
            LoadingCover.Instance.show();
        }
    }
    loadingCountCountdown(api: string) {
        if (apiNeedLoading.includes(api)) {
            this.loading -= 1;
            if (this.loading <= 0) {
                LoadingCover.Instance.hide();
            }
        }
    }
    async userRequest(type: IAPIInterface, data: any, onSuccess, onFailed = console.error, retryTimes: number = 45) {
        let apiType = `${type.service}-${type.api}`
        this.userRequestedInfo[apiType] = { api: type, onSuccess, onFailed, data }
        const { service, code, api } = type
        DEBUG && console.log(`request : ${service}-${api}`)
        const onFail = (reason: ErrorCode, res = null) => {
            this.errorHandling(type, reason, data, onSuccess, onFailed, res);
        }
        if (retryTimes < 0) {
            DEBUG && console.log("retry time out")
            onFail(ErrorCode.NOT_AUTHENTICATED)
            return
        }

        this.loadingCountUp(type.api)

        return this.request(service, api, data, TIMEOUT[api] || 15000)
            .then((data) => {
                this.loadingCountCountdown(type.api)

                this.onPromiseResolve(data, onSuccess, onFail, service, api, type, retryTimes)
            })
            .catch((e) => {
                console.error("errr")
                console.error(service, api)
                console.error(e)
                this.loadingCountCountdown(type.api)
                if (typeof (e) == "string" && e.indexOf("timeout") != -1) {
                    onFail(ErrorCode.TIMEOUT_TXT);
                    return;
                }
                onFail(ErrorCode.CLIENT_EXCEPTION)
                // onFailed && onFailed(e);
            });
    }
    retryApi(type: IAPIInterface, success, failed) {
        let apiInfo = this.userRequestedInfo[`${type.service}-${type.api}`]
        if (!apiInfo) return;
        const { api, data, onFailed, onSuccess } = apiInfo
        return this.userRequest(api, data, (e) => {
            success && success(e)
            onSuccess(e);
        }, (e) => {
            failed && failed(e)
            onFailed(e);
        })
    }
    errorHandling(type: IAPIInterface, reason: ErrorCode, data: any, onSuccess, onFailed = console.log, res = null) {
        onFailed && onFailed(res);
        const { service, code, api, errorHandleType } = type
        if (errorHandleType == ErrorHandleType.NOTHING) return
        this.emit("ELO_ERROR", { type: errorHandleType, errorCode: `${('0' + code).slice(-2)}-${reason}`, api: type, res });
    }
    public on<T extends Function>(type: string, callback: T, target?: any, useCapture?: boolean): T {
        return super.on(`${type}`, callback, target, useCapture);
    }

    public off(event: string | Symbol, listener: (...args: any[]) => void) {
        super.off(`${String(event)}`, listener);
        return this;
    }

    public once(event: string | symbol, listener: (...args: any[]) => void) {
        super.once(`${String(event)}`, listener);
        return this;
    }

    //---------noti bar-----
    subscribeCompleteMission(cb = null) {
        this.getWsgw().then((wsgw) => {
            wsgw.subscribe('game', 'completeMission', (data) => {
                cb && cb(data)
            });
        });
    }
    subscribeBuyTurn(cb = null) {
        this.getWsgw().then((wsgw) => {
            wsgw.subscribe('game', 'addTurn', (data) => {
                cb && cb(data)
            });
        });
    }
    createErrorCallBack(code: number | string, type, cb) {
        return { code, cb, type }
    }
})();

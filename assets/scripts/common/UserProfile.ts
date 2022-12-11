import { MsgSyncProfile } from "@elofun/elo-services-myid-v2";
import { EMsgTypes } from "@elofun/elo-services-myid-v2/EMsgTypes";
import APIDefine from "../src/app/APIDefine";
import store from "../src/app/store";
import wsgw from "../src/app/wsgw";
import { logEvent, setUserId, setUserProperties } from "../src/common/Analytics";
import { getCDN, isMyViettelDev } from "../src/common/utils";
import { syncBalances, syncProfile } from "../src/features/SliceUser";
export interface IUserProfilePayload {
    userId: string;
    avatarUrl: string;
    msisdn: string;
    accessToken: string;
    scopes: Array<string>;
    isNewUser: boolean;
    customerType?: string;
}

export interface IUserProfile {
    userId: string;
    avatar: string;
    credential: string;
    nickName: string;
    coinBalance: number;
    spinTicketBalance: number;
    greenCashBalance: number;
    wheelBalance: number;
    language?: string;
    isVip: boolean;
    isRedeemInviteCode: boolean;
    phoneNumber?: string
    omsToken: string;
    starBalance: number;
    verifiedUser: boolean;
}
export enum EUserProfileEventTypes {
    SYNC = 'SYNC'
}

export interface IUserBalancesPayload {
    coinBalance: number,
    turn: number,
}

export class UserProfile extends cc.SystemEvent implements IUserProfile {
    private userData: IUserProfile | any;
    private logged: boolean;
    constructor() {
        super();
    }

    public isLogged() {
        return this.logged;
    }
    public UpdateProfile(isUpdateInfor: boolean = false, success: Function = () => { }) {
        wsgw.userRequest(APIDefine.getProfile, {}, (e) => {
            const { info, profile } = e;

            this.onSyncProfile({ ...info, ...profile })

            success();
        }, console.error);
    }

    public UpdateBalance(syncCoin = true) {
        wsgw.userRequest(APIDefine.getBalances, {}, (e) => {
            this.onSyncBalances(e, syncCoin)
        }, console.error);
    }

    private onSyncProfile = (msg: IUserProfilePayload) => {
        const {
            userId,
            avatarUrl,
            msisdn,
            accessToken,
            customerType
        } = msg;
        this.userData = {
            userId,
            avatar: getCDN(avatarUrl || ''),
            phoneNumber: msisdn,
            omsToken: accessToken,
            verifiedUser: customerType !== null && customerType !== "-1"),
            ...msg,
        };

        this.logged = true;
        // setUserId(`userId:${userId}`);
        setUserProperties({
            ...this.userData
        });
        console.log('login', this.userData)
        store.dispatch(syncProfile(this.userData))
    };

    private onSyncBalances = (msg: IUserBalancesPayload, syncCoin = true) => {
        const {
            turn,
            coinBalance,
        } = msg;
        const newCoinBalance = syncCoin ? coinBalance : this.userData.coinBalance
        this.userData = {
            ...this.userData,
            spinTicketBalance: turn,
            coinBalance: newCoinBalance,
        };

        setUserProperties({
            ...this.userData
        });
        store.dispatch(syncBalances({
            spinTicketBalance: turn,
            coinBalance: newCoinBalance,
        }))
    };

    public get() {
        return { ...this.userData, isLogged: this.isLogged };
    }

    public get userId(): number {
        return this.userData[`userId`];
    }
    public get credential(): string {
        return this.userData[`credential`];
    }
    public get coinBalance(): number {
        return this.userData[`coinBalance`];
    }
    public get starBalance(): number {
        return this.userData[`starBalance`];
    }
    public get spinTicketBalance(): number {
        return this.userData[`spinTicketBalance`];
    }
    public get nickName(): string {
        return this.userData[`nickName`];
    }
    public get avatar(): string {
        return getCDN(this.userData[`avatar`]);
    }
    public get language(): string {
        return this.userData.language;
    }
    public get isVip(): boolean {
        return !!this.userData.isVip;
    }
    public get isRedeemInviteCode(): boolean {
        return !!this.userData.isRedeemInviteCode;
    }
    public get greenCashBalance(): number {
        return this.userData[`greenCashBalance`];
    }
    public get wheelBalance(): number {
        return this.userData[`wheelBalance`];
    }
    public get omsToken(): string {
        return this.userData[`omsToken`];
    }
}

export const userProfile = new UserProfile();

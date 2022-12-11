// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import * as R from 'ramda'
import SoundMgr from "../common/SoundMgr";
import { ErrorHandleType } from "../src/app/APIDefine";
import connect from "../src/app/connect";
import { AppDispatch, RootState } from "../src/app/store";
import wsgw, { ErrorCode } from "../src/app/wsgw";
import { EAppPages, PAGE_SHOW_EFFECT, popPopup, popToPage, pushPage } from "../src/features/SliceApp";
import { DeeplinkTypesToName, EDeeplinkTypes } from '../src/features/SliceDeeplinks';
import { refreshError } from "../src/features/SliceError";
import Helper from "../utils/Helper";
import Popup from './Popup';

const { ccclass, property } = cc._decorator;

export const errorCodeToMessage = {
    [ErrorCode.CLIENT_EXCEPTION]: 'Oops có trục trặc xảy ra. \nVui lòng thử lại sau.',
    [ErrorCode.CONECTION_TIMEOUT]: 'Không có phản hồi. \nVui lòng thử lại sau.',
    [ErrorCode.NOT_AUTHENTICATED]: 'Oops có trục trặc xảy ra. \nVui lòng thử lại sau.',
    [ErrorCode.OTHER_CASES]: 'Oops có trục trặc xảy ra. \nVui lòng thử lại sau.',
    [ErrorCode.SERVER_EXCEPTION]: 'Oops có trục trặc xảy ra. \nVui lòng thử lại sau.',
    [ErrorCode.TIMEOUT_TXT]: 'Không có phản hồi. \nVui lòng thử lại sau.',
}
export class PopupError extends Popup {
    props: RootState
    actions: any;
    @property(String) public descriptionTxt = 'Lỗi %s';
    @property(cc.Node) btnRetry: cc.Node = null;
    @property(cc.Node) btnExit: cc.Node = null;
    @property(cc.Node) btnClose: cc.Node = null;
    @property(cc.Label) errorCode: cc.Label = null;
    @property(cc.Label) message: cc.Label = null;
    @property(cc.Label) retryName: cc.Label = null;
    @property(cc.Label) exitName: cc.Label = null;
    private retryCB: any;
    private exitCB: any;
    private closeCB: any;
    // LIFE-CYCLE CALLBACKS:
    onEnable() {
        this.onStateChange();
        this.btnRetry.on(cc.Node.EventType.TOUCH_END, this.onRetry.bind(this))
        this.btnExit.on(cc.Node.EventType.TOUCH_END, this.onExit.bind(this))
        this.btnClose.on(cc.Node.EventType.TOUCH_END, this.onClose.bind(this))
    }
    onDisable() {
        this.btnRetry.off(cc.Node.EventType.TOUCH_END, this.onRetry.bind(this))
        this.btnExit.off(cc.Node.EventType.TOUCH_END, this.onExit.bind(this))
        this.btnClose.off(cc.Node.EventType.TOUCH_END, this.onClose.bind(this))
    }
    onStateChange() {
        let errCode = ""
        this.props.error.list.map((e, i) => {
            if (errCode.indexOf(e.errorCode) < 0)
                errCode += (e.errorCode + (i == this.props.error.list.length - 1 ? "." : "/"))
        })
        // this.errorCode.string = "Mã Lỗi : " + errCode
        this.message.string = this.descriptionTxt.replace('%s', errCode);

        this.createCallback();
    }
    onRedirectToHome() {
        SoundMgr.playSfx(SoundMgr.Instance.SFX_BUTTON)

        this.actions.refreshError()
        this.actions.popPopup();
        this.actions.popToPage({ page: EAppPages.PageHome, effect: PAGE_SHOW_EFFECT.LEFT })
    }
    onRetry() {
        SoundMgr.playSfx(SoundMgr.Instance.SFX_BUTTON)

        this.retryCB && this.retryCB()
    }
    onExit() {
        SoundMgr.playSfx(SoundMgr.Instance.SFX_BUTTON)

        this.exitCB && this.exitCB()
        this.actions.refreshError()
        this.actions.popPopup();
    }
    onClose() {
        SoundMgr.playSfx(SoundMgr.Instance.SFX_BUTTON)
        this.closeCB && this.closeCB()
        this.actions.refreshError()
        this.actions.popPopup();
    }
    activeButton(value: boolean) {
        this.btnRetry.active = value
        // this.btnExit.active = value
    }
    enableButton(enable: boolean) {
        this.btnRetry.getComponent(cc.Button).interactable = enable
        this.btnClose.getComponent(cc.Button).interactable = enable
        this.btnExit.getComponent(cc.Button).interactable = enable
    }
    createCallback() {
        this.btnRetry.active = true;
        this.btnClose.active = true;
        this.retryCB = () => {
            console.log('askljfghaslkghas')
            document.location.reload()
        }
        this.closeCB = () => {
            window.location.href = this.props.deeplinks.data[DeeplinkTypesToName[EDeeplinkTypes.CLOSE_GAME]];
        }
    }
}
const mapStateToProps = (state: RootState) => ({
    error: state.error,
    deeplinks: state.deeplinks,
})
const mapDispatchToAction = (dispatch: AppDispatch) => ({
    popPopup: () => dispatch(popPopup()),
    popToPage: (e) => dispatch(popToPage(e)),
    refreshError: () => dispatch(refreshError())
})
export default connect(mapStateToProps, mapDispatchToAction)(PopupError)
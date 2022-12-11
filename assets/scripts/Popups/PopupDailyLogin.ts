// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { userProfile } from "../common/UserProfile";
import APIDefine from "../src/app/APIDefine";
import store from "../src/app/store";
import wsgw from "../src/app/wsgw";
import { checkRewardPopup } from "../src/common/common";
import { trackUserInteract } from "../src/common/utils";
import { EAppPopups, popPopup, pushPopup } from "../src/features/SliceApp";
import { syncLoginStreak } from "../src/features/SliceLogin";
import Helper from "../utils/Helper";
import Popup from "./Popup";

const { ccclass, property } = cc._decorator;

@ccclass
export default class PopupDailyLogin extends Popup {
    @property(cc.Node)
    public btnBack2: cc.Node = null;
    @property(cc.Node)
    public btnSpin: cc.Node = null;

    @property(String)
    public coinAndTicketTxtPlaceholder: String = '';
    @property(String)
    public descriptionTxtPlaceholder: String = '';
    @property(cc.RichText)
    public coinAndTicketTxt: cc.RichText = null;
    @property(cc.RichText)
    public descriptionTxt: cc.RichText = null;

    onLoad() {
        if (this.btnBack2) {
            Helper.registerButtonEvent(this.btnBack2, () => store.dispatch(popPopup()));
        }
        if (this.btnSpin) {
            Helper.registerButtonEvent(this.btnSpin, () => store.dispatch(popPopup()));
        }
    }

    public init(coin: number, ticket: number, loginStreak: number) {
        this.coinAndTicketTxt.string = this.coinAndTicketTxtPlaceholder.replace('%s1', coin.toString()).replace('%s2', ticket.toString());
        this.descriptionTxt.string = this.descriptionTxtPlaceholder.replace('%s1', loginStreak.toString()).split('\\n').join('\n').replace('%dump', loginStreak > 1 ? ' liên tiếp' : '');
    }

    protected onDisable(): void {
        checkRewardPopup();
    }
}

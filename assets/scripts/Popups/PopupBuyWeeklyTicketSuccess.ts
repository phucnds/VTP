// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import moment = require("moment");
import SoundMgr from "../common/SoundMgr";
import store from "../src/app/store";
import { getRemanningTime } from "../src/common/utils";
import { popPopup } from "../src/features/SliceApp";
import Helper from "../utils/Helper";
import Popup from "./Popup";


const { ccclass, property } = cc._decorator;

@ccclass
export default class PopupBuyWeeklyTicketSuccess extends Popup {
    @property(String)
    public descriptionPlaceHolder: String = '<color=#7F2E2E>Hãy đón xem kết quả vào lúc <b>20:00\nChủ nhật</b> tuần này\n<b>%s</b> bạn nhé</color>';
    @property(cc.Node)
    public btnClose: cc.Node = null;
    @property(cc.RichText)
    public descriptionTxt: cc.RichText = null;

    onLoad() {
        super.onLoad()
        this.btnClose.on(cc.Node.EventType.TOUCH_END, () => {
            SoundMgr.playSfx(SoundMgr.Instance.SFX_BUTTON);
            store.dispatch(popPopup());
        });
    }

    protected onEnable(): void {
        super.onEnable();
        this.updateDescription();
    }

    updateDescription() {
        const rollPhaseDueDate = moment().endOf('isoWeek').startOf('day').add(20, "hours");
        this.descriptionTxt.string = this.descriptionPlaceHolder.replace('%s', rollPhaseDueDate.format('DD/MM/YYYY'));
    }
}

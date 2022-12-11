import SoundMgr from "../common/SoundMgr";
import APIDefine from "../src/app/APIDefine";
import store from "../src/app/store";
import wsgw from "../src/app/wsgw";
import GameDefine from "../src/common/GameDefine";
import TrackingDefine from "../src/common/TrackingDefine";
import { EAppPages, EAppPopups, PAGE_SHOW_EFFECT, popPage, pushPopup } from "../src/features/SliceApp";
import Helper from "../utils/Helper";
import { Missions, MissionsButtonText } from "./CompQuestsContainer";

const { ccclass, property, executeInEditMode } = cc._decorator;
@ccclass
export default class CompQuest extends cc.Component {

    @property(cc.Label)
    public progress: cc.Label = null;
    @property(cc.Label)
    public nameTxt: cc.Label = null;
    @property(cc.Label)
    public descriptionTxt: cc.Label = null;
    @property(cc.Label)
    public ticketTxt: cc.Label = null;
    @property(cc.Label)
    public coinTxt: cc.Label = null;
    @property(cc.Node)
    public btnDoit: cc.Node = null;
    @property(cc.Label)
    public btnTxt: cc.Label = null;
    @property(cc.Label)
    public completedTxt: cc.Label = null;
    @property(cc.Node)
    public rewardTurnContainer: cc.Node = null;
    @property(cc.Node)
    public rewardCoinContainer: cc.Node = null;

    init(
        progress: number,
        max: number,
        name: string,
        description: string,
        coin: number,
        turn: number,
        deeplink: string,
        btnCB: Function = null,
        questCode: '',
    ) {
        const verifiedUser = store.getState().user.verifiedUser;
        if (verifiedUser && questCode == Missions.XAC_THUC_THONG_TIN.toString()) {
            if (progress >= max) {
                this.node.active = true;
            } else {
                this.node.active = false;
            }
        }

        const customerSourceLinked = store.getState().user.customerSourceLinked;
        if (customerSourceLinked && questCode == Missions.LIEN_KET_THE.toString()) {
            if (progress >= max) {
                this.node.active = true;
            } else {
                this.node.active = false;
            }
        }

        this.progress.string = `${progress || '0'} / ${max || '0'}`;
        this.nameTxt.string = name || '-';
        this.descriptionTxt.string = description ? description.split('\\n').join('\n') : '-';
        this.ticketTxt.string = turn ? turn.toString() : '0';
        this.coinTxt.string = coin ? coin.toString() : '0';
        this.btnTxt.string = MissionsButtonText[questCode] || 'Tham gia';

        this.rewardCoinContainer.active = coin > 0;
        this.rewardTurnContainer.active = turn > 0;

        if (progress >= max) {
            this.btnDoit.getComponent(cc.Button).interactable = false;
            this.btnDoit.active = false;
            this.completedTxt.node.active = true;
        } else {
            this.btnDoit.getComponent(cc.Button).interactable = true;
            this.btnDoit.active = true;
            this.completedTxt.node.active = false;
        }

        if (!btnCB && deeplink) {
            this.btnDoit.on(cc.Node.EventType.TOUCH_END, () => {
                SoundMgr.playSfx(SoundMgr.Instance.SFX_BUTTON);
                window.location.href = deeplink;
                wsgw.userRequest(
                    APIDefine.track,
                    {
                        eventName: TrackingDefine.TrackingEvents.CLICK_ON_MISSION,
                        data: questCode
                    },
                    (e) => { console.log(`TRACKING - ${questCode}`) },
                    console.error
                );
            });
            return;
        }

        if (btnCB) {
            this.btnDoit.on(cc.Node.EventType.TOUCH_END, () => {
                SoundMgr.playSfx(SoundMgr.Instance.SFX_BUTTON);
                btnCB(deeplink);
                wsgw.userRequest(
                    APIDefine.track,
                    {
                        eventName: TrackingDefine.TrackingEvents.CLICK_ON_MISSION,
                        data: questCode
                    },
                    (e) => { console.log(`TRACKING - ${questCode}`) },
                    console.error
                );
            });
            return;
        }
    }
}

import SoundMgr from '../common/SoundMgr';
import GameDefine from '../src/common/GameDefine';

const { ccclass, property, executeInEditMode } = cc._decorator;

@ccclass
export default class CompBuyTurnItem extends cc.Component {
    @property(cc.Label)
    public descipritionTxt: cc.Label = null;
    @property(cc.Node)
    public selectedFX: cc.Node = null;

    init(ticketNum: number, price: number, unit: string) {
        this.descipritionTxt.string = `${ticketNum} = ${price}${unit}`;
    }

    setActive(isActive: boolean) {
        this.selectedFX.active = isActive;
        this.descipritionTxt.node.color = isActive ? GameDefine.COLOR_RED : GameDefine.COLOR_BROWN;
    }
}

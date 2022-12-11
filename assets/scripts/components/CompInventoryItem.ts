import * as moment from 'moment'
import FrameMgr from '../common/FrameMgr';
import SoundMgr from '../common/SoundMgr';
import { typeToUnit } from '../Popups/PopupReward';
import store from '../src/app/store';
import { convertToCurrency } from "../src/common/utils";
import { pushPopup, EAppPopups } from '../src/features/SliceApp';

const { ccclass, property, executeInEditMode } = cc._decorator;

@ccclass
export default class CompInventoryItem extends cc.Component {
    @property(cc.Sprite)
    public image: cc.Sprite = null;
    @property(cc.Label)
    public indexTxt: cc.Label = null;
    @property(cc.Label)
    public nameTxt: cc.Label = null;
    @property(cc.Label)
    public descriptionTxt: cc.Label = null;
    @property(cc.Label)
    public dateTxt: cc.Label = null;

    init(type: string, index: number, value: number, timestampz: number) {
        const sign = value > 0 ? '+' : '';
        const name = type === 'VOUCHER' ? 'Voucher' : value ? sign + convertToCurrency(value) + typeToUnit[type] : '';
        this.indexTxt.string = index.toString();
        this.nameTxt.string = name;
        this.descriptionTxt.string = `nạp điện thoại\n${convertToCurrency(value)}đ`
        this.descriptionTxt.node.active = type === 'VOUCHER';
        this.dateTxt.string = moment(timestampz).format('HH:mm:ss-DD/MM/YYYY').replace('-', '\n');
        this.image.spriteFrame = FrameMgr.Instance[`REWARD_${type}`];

        if (type === 'VOUCHER') {
            this.node.on(cc.Node.EventType.TOUCH_END, () => {
                SoundMgr.playSfx(SoundMgr.Instance.SFX_BUTTON);
                store.dispatch(pushPopup(EAppPopups.PopupGoToVoucher));
            });
        }
    }
}

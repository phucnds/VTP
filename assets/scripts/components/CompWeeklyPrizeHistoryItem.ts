import moment = require('moment');
import SoundMgr from '../common/SoundMgr';
import GameDefine from '../src/common/GameDefine';
import { formatMsisdn, truncatePhone } from '../src/common/utils';

const { ccclass, property, executeInEditMode } = cc._decorator;

@ccclass
export default class CompWeeklyPrizeHistoryItem extends cc.Component {
    @property(cc.Label)
    public phoneTxt: cc.Label = null;
    @property(cc.Label)
    public weekTxt: cc.Label = null;
    @property(cc.Label)
    public dateTxt: cc.Label = null;

    init(index: number, phone: string, date: string) {
        this.phoneTxt.string = truncatePhone(formatMsisdn(phone));
        this.weekTxt.string = (index).toString().padStart(2, '0');
        this.dateTxt.string = `${moment(date).startOf('isoWeek').format('DD/MM')} - ${moment(date).endOf('isoWeek').format('DD/MM')}`
    }
}

"use strict";
cc._RF.push(module, 'acb7bNMtv9PA46eXQ9SdIfW', 'GameDefine');
// scripts/src/common/GameDefine.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = new (/** @class */ (function () {
    function GameDefine() {
        this.GAME_DEBUG = false;
        this.TIME_SPIN = 3; // thời gian spin của cột đầu tiên
        this.STEP_TIME_SPIN = 2; // thời gian spin cộng thêm ở các cột sau VD: cột 2 sẽ là TIME_SPIN + STEP_TIME_SPIN
        this.TIME_API_TIMEOUT = 15;
        this.STRING_TIMEOUT = "TIMEOUT";
        this.SHAKE_DURATION = 0.5;
        this.QTY_BUY_TURN_COIN = 120;
        this.IDLE_TIMEOUT = 300;
        this.WEEKLY_EXCHANGE_AMOUNT = 5000;
        this.COLOR_RED = new cc.Color(228, 37, 23);
        this.COLOR_BROWN = new cc.Color(106, 13, 13);
        this.EVENT_END_DATE = '2022-12-31T17:00:00.000Z';
        this.questsToShow = [
            'MO_GAME',
            'MO_GAME_LAN_DAU',
            'XAC_THUC_THONG_TIN',
            'CHIA_SE_GAME',
            'THAM_QUAN_GUI_TIET_KIEM',
            'THAM_QUAN_VI_PAY_NOW',
            'THAM_QUAN_DAU_TU_SAVE_NOW',
            'LIEN_KET_THE',
            'CONG_DONG_SUC_KHOE',
            'THAM_QUAN_EASYVAY',
            'THAM_QUAN_TIEN_MAT_XOAY_VONG',
            'THAM_QUAN_MUA_TRUOC_TRA_SAU',
        ];
        // Gift
        this.GIFT_SPEED = 350;
        this.GIFT_SPEED_MIN = 100;
        this.GIFT_BREAK_A = 7000;
        this.GIFT_GAP = 250;
        this.GIFT_CHOSEN_ANIM_TIME = 1;
        this.GIFT_CHOSEN_SCALE = 2;
    }
    return GameDefine;
}()));

cc._RF.pop();
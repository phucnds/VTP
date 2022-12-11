
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/src/common/GameDefine.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3NyYy9jb21tb24vR2FtZURlZmluZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGtCQUFlLElBQUk7SUFBQztRQUNYLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsY0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLGtDQUFrQztRQUNqRCxtQkFBYyxHQUFHLENBQUMsQ0FBQyxDQUFDLG9GQUFvRjtRQUN4RyxxQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFDdEIsbUJBQWMsR0FBRyxTQUFTLENBQUM7UUFDM0IsbUJBQWMsR0FBRyxHQUFHLENBQUM7UUFDckIsc0JBQWlCLEdBQUcsR0FBRyxDQUFDO1FBQ3hCLGlCQUFZLEdBQUcsR0FBRyxDQUFDO1FBRW5CLDJCQUFzQixHQUFHLElBQUksQ0FBQztRQUU5QixjQUFTLEdBQUcsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDdEMsZ0JBQVcsR0FBRyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUV4QyxtQkFBYyxHQUFHLDBCQUEwQixDQUFDO1FBRTVDLGlCQUFZLEdBQUc7WUFDcEIsU0FBUztZQUNULGlCQUFpQjtZQUNqQixvQkFBb0I7WUFDcEIsY0FBYztZQUNkLHlCQUF5QjtZQUN6QixzQkFBc0I7WUFDdEIsMkJBQTJCO1lBQzNCLGNBQWM7WUFDZCxvQkFBb0I7WUFDcEIsbUJBQW1CO1lBQ25CLDhCQUE4QjtZQUM5Qiw2QkFBNkI7U0FDOUIsQ0FBQTtRQUVELE9BQU87UUFDQSxlQUFVLEdBQUcsR0FBRyxDQUFDO1FBQ2pCLG1CQUFjLEdBQUcsR0FBRyxDQUFDO1FBQ3JCLGlCQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLGFBQVEsR0FBRyxHQUFHLENBQUM7UUFDZiwwQkFBcUIsR0FBRyxDQUFDLENBQUM7UUFDMUIsc0JBQWlCLEdBQUcsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFBRCxpQkFBQztBQUFELENBdkNvQixBQXVDbkIsSUFBQyxDQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgbmV3IChjbGFzcyBHYW1lRGVmaW5lIHtcbiAgcHVibGljIEdBTUVfREVCVUcgPSBmYWxzZTtcbiAgcHVibGljIFRJTUVfU1BJTiA9IDM7IC8vIHRo4budaSBnaWFuIHNwaW4gY+G7p2EgY+G7mXQgxJHhuqd1IHRpw6puXG4gIHB1YmxpYyBTVEVQX1RJTUVfU1BJTiA9IDI7IC8vIHRo4budaSBnaWFuIHNwaW4gY+G7mW5nIHRow6ptIOG7nyBjw6FjIGPhu5l0IHNhdSBWRDogY+G7mXQgMiBz4bq9IGzDoCBUSU1FX1NQSU4gKyBTVEVQX1RJTUVfU1BJTlxuICBwdWJsaWMgVElNRV9BUElfVElNRU9VVCA9IDE1O1xuICBwdWJsaWMgU1RSSU5HX1RJTUVPVVQgPSBcIlRJTUVPVVRcIjtcbiAgcHVibGljIFNIQUtFX0RVUkFUSU9OID0gMC41O1xuICBwdWJsaWMgUVRZX0JVWV9UVVJOX0NPSU4gPSAxMjA7XG4gIHB1YmxpYyBJRExFX1RJTUVPVVQgPSAzMDA7XG5cbiAgcHVibGljIFdFRUtMWV9FWENIQU5HRV9BTU9VTlQgPSA1MDAwO1xuXG4gIHB1YmxpYyBDT0xPUl9SRUQgPSBuZXcgY2MuQ29sb3IoMjI4LCAzNywgMjMpO1xuICBwdWJsaWMgQ09MT1JfQlJPV04gPSBuZXcgY2MuQ29sb3IoMTA2LCAxMywgMTMpO1xuXG4gIHB1YmxpYyBFVkVOVF9FTkRfREFURSA9ICcyMDIyLTEyLTMxVDE3OjAwOjAwLjAwMFonO1xuXG4gIHB1YmxpYyBxdWVzdHNUb1Nob3cgPSBbXG4gICAgJ01PX0dBTUUnLFxuICAgICdNT19HQU1FX0xBTl9EQVUnLFxuICAgICdYQUNfVEhVQ19USE9OR19USU4nLFxuICAgICdDSElBX1NFX0dBTUUnLFxuICAgICdUSEFNX1FVQU5fR1VJX1RJRVRfS0lFTScsXG4gICAgJ1RIQU1fUVVBTl9WSV9QQVlfTk9XJyxcbiAgICAnVEhBTV9RVUFOX0RBVV9UVV9TQVZFX05PVycsXG4gICAgJ0xJRU5fS0VUX1RIRScsXG4gICAgJ0NPTkdfRE9OR19TVUNfS0hPRScsXG4gICAgJ1RIQU1fUVVBTl9FQVNZVkFZJyxcbiAgICAnVEhBTV9RVUFOX1RJRU5fTUFUX1hPQVlfVk9ORycsXG4gICAgJ1RIQU1fUVVBTl9NVUFfVFJVT0NfVFJBX1NBVScsXG4gIF1cblxuICAvLyBHaWZ0XG4gIHB1YmxpYyBHSUZUX1NQRUVEID0gMzUwO1xuICBwdWJsaWMgR0lGVF9TUEVFRF9NSU4gPSAxMDA7XG4gIHB1YmxpYyBHSUZUX0JSRUFLX0EgPSA3MDAwO1xuICBwdWJsaWMgR0lGVF9HQVAgPSAyNTA7XG4gIHB1YmxpYyBHSUZUX0NIT1NFTl9BTklNX1RJTUUgPSAxO1xuICBwdWJsaWMgR0lGVF9DSE9TRU5fU0NBTEUgPSAyO1xufSlcbiJdfQ==
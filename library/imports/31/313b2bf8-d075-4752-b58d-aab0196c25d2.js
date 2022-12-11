"use strict";
cc._RF.push(module, '313b2v40HVHUrWNqrAZbCXS', 'common');
// scripts/src/common/common.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkRewardPopup = void 0;
var R = require("ramda");
var APIDefine_1 = require("../app/APIDefine");
var wsgw_1 = require("../app/wsgw");
var RewardPopupsMgr_1 = require("../game/RewardPopupsMgr");
var checkRewardPopup = function () {
    wsgw_1.default.userRequest(APIDefine_1.default.checkRewardPopup, {}, function (e) {
        var data = e.data;
        RewardPopupsMgr_1.RewardPopupsMgr.Instance.setData(data);
        RewardPopupsMgr_1.RewardPopupsMgr.Instance.showPopup();
        wsgw_1.default.userRequest(APIDefine_1.default.doneShowingRewardPopup, {
            ids: R.map(R.prop('id'), data)
        }, function (e) { }, console.error);
    }, console.error);
};
exports.checkRewardPopup = checkRewardPopup;

cc._RF.pop();
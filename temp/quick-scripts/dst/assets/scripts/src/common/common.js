
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/src/common/common.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3NyYy9jb21tb24vY29tbW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlCQUE0QjtBQUM1Qiw4Q0FBeUM7QUFDekMsb0NBQStCO0FBQy9CLDJEQUEwRDtBQUVuRCxJQUFNLGdCQUFnQixHQUFHO0lBQzVCLGNBQUksQ0FBQyxXQUFXLENBQUMsbUJBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLEVBQUUsVUFBQyxDQUFDO1FBQ3ZDLElBQUEsSUFBSSxHQUFLLENBQUMsS0FBTixDQUFPO1FBQ25CLGlDQUFlLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QyxpQ0FBZSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNyQyxjQUFJLENBQUMsV0FBVyxDQUFDLG1CQUFTLENBQUMsc0JBQXNCLEVBQUU7WUFDL0MsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUM7U0FDakMsRUFBRSxVQUFDLENBQUMsSUFBTyxDQUFDLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xDLENBQUMsRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDdEIsQ0FBQyxDQUFBO0FBVFksUUFBQSxnQkFBZ0Isb0JBUzVCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFIgPSByZXF1aXJlKFwicmFtZGFcIik7XG5pbXBvcnQgQVBJRGVmaW5lIGZyb20gXCIuLi9hcHAvQVBJRGVmaW5lXCI7XG5pbXBvcnQgd3NndyBmcm9tIFwiLi4vYXBwL3dzZ3dcIjtcbmltcG9ydCB7IFJld2FyZFBvcHVwc01nciB9IGZyb20gXCIuLi9nYW1lL1Jld2FyZFBvcHVwc01nclwiO1xuXG5leHBvcnQgY29uc3QgY2hlY2tSZXdhcmRQb3B1cCA9ICgpID0+IHtcbiAgICB3c2d3LnVzZXJSZXF1ZXN0KEFQSURlZmluZS5jaGVja1Jld2FyZFBvcHVwLCB7fSwgKGUpID0+IHtcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBlO1xuICAgICAgICBSZXdhcmRQb3B1cHNNZ3IuSW5zdGFuY2Uuc2V0RGF0YShkYXRhKTtcbiAgICAgICAgUmV3YXJkUG9wdXBzTWdyLkluc3RhbmNlLnNob3dQb3B1cCgpO1xuICAgICAgICB3c2d3LnVzZXJSZXF1ZXN0KEFQSURlZmluZS5kb25lU2hvd2luZ1Jld2FyZFBvcHVwLCB7XG4gICAgICAgICAgICBpZHM6IFIubWFwKFIucHJvcCgnaWQnKSwgZGF0YSlcbiAgICAgICAgfSwgKGUpID0+IHsgfSwgY29uc29sZS5lcnJvcik7XG4gICAgfSwgY29uc29sZS5lcnJvcik7XG59Il19
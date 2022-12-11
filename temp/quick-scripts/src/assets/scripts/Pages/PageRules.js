"use strict";
cc._RF.push(module, 'f623aCLTRdPFJudc8owRz7C', 'PageRules');
// scripts/Pages/PageRules.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageRules = void 0;
var SoundMgr_1 = require("../common/SoundMgr");
var connect_1 = require("../src/app/connect");
var store_1 = require("../src/app/store");
var utils_1 = require("../src/common/utils");
var SliceApp_1 = require("../src/features/SliceApp");
var Page_1 = require("./Page");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PageRules = /** @class */ (function (_super) {
    __extends(PageRules, _super);
    function PageRules() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btnClose2 = null;
        _this.template = null;
        _this.content = null;
        _this.scrollView = null;
        return _this;
    }
    PageRules.prototype.onLoad = function () {
        var _this = this;
        this.btnClose2.on(cc.Node.EventType.TOUCH_END, function () {
            SoundMgr_1.default.playSfx(SoundMgr_1.default.Instance.SFX_BUTTON);
            store_1.default.dispatch(SliceApp_1.popPage());
        });
        var _loop_1 = function (i) {
            var index = i + 1;
            cc.assetManager.loadRemote(utils_1.getCDN("https://assets.elofun.com/vds-chiec-may-than-ky/rules%20(" + index + ").png"), function (err, tex) {
                if (!err) {
                    var newImage = cc.instantiate(_this.template);
                    newImage.active = true;
                    newImage.parent = _this.content;
                    newImage.name = "Image " + index;
                    newImage.zIndex = i;
                    newImage.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(tex);
                    _this.content.sortAllChildren();
                    if (_this.scrollPosition) {
                        if (_this.scrollPosition.y === -1) {
                            _this.scrollView.scrollToBottom();
                        }
                        else {
                            _this.scrollView.scrollToOffset(_this.scrollPosition, _this.time || 0);
                        }
                    }
                }
                else {
                    console.error(err);
                }
            });
        };
        for (var i = 0; i < 3; i++) {
            _loop_1(i);
        }
    };
    PageRules.prototype.scrollToOffset = function (position, time) {
        if (position.y === -1) {
            this.scrollView.scrollToBottom();
        }
        else {
            this.scrollView.scrollToOffset(position, time);
        }
        this.scrollPosition = position;
        this.time = time;
    };
    __decorate([
        property(cc.Node)
    ], PageRules.prototype, "btnClose2", void 0);
    __decorate([
        property(cc.Node)
    ], PageRules.prototype, "template", void 0);
    __decorate([
        property(cc.Node)
    ], PageRules.prototype, "content", void 0);
    __decorate([
        property(cc.ScrollView)
    ], PageRules.prototype, "scrollView", void 0);
    return PageRules;
}(Page_1.default));
exports.PageRules = PageRules;
var mapStateToProps = function (state) { return ({}); };
var mapDispatchToAction = function (dispatch) { return ({
    pushPage: function (payload) {
        return dispatch(SliceApp_1.pushPage(payload));
    },
    popPage: function () { return dispatch(SliceApp_1.popPage()); },
    pushPopup: function (payload) { return dispatch(SliceApp_1.pushPopup(payload)); },
}); };
exports.default = connect_1.default(mapStateToProps, mapDispatchToAction)(PageRules);

cc._RF.pop();
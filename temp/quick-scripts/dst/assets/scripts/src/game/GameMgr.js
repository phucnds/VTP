
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/src/game/GameMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '55a8fX1hJlD3pvYE+qOqZZi', 'GameMgr');
// scripts/src/game/GameMgr.ts

"use strict";
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
exports.GameStates = void 0;
var SoundMgr_1 = require("../../common/SoundMgr");
var TopUI_1 = require("../../common/TopUI");
var SingletonNode_1 = require("../../utils/SingletonNode");
var GiftsMgr_1 = require("./GiftsMgr");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameStates;
(function (GameStates) {
    GameStates["TUTORIAL"] = "TUTORIAL";
    GameStates["PLAYING"] = "PLAYING";
    GameStates["PAUSE"] = "PAUSE";
    GameStates["END"] = "END";
    GameStates["SELECT"] = "SELECT";
    GameStates["ROLLING"] = "ROLLING";
    GameStates["PICK_UP"] = "PICK_UP";
})(GameStates = exports.GameStates || (exports.GameStates = {}));
var GameMgr = /** @class */ (function (_super) {
    __extends(GameMgr, _super);
    function GameMgr() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.GiftMgr = null;
        _this.gameState = GameStates.TUTORIAL;
        // Score and level
        _this.score = -1;
        _this.reachedPlanet = -1;
        _this.level = 0;
        return _this;
    }
    GameMgr.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.mIsFirstPlay = false;
    };
    GameMgr.prototype.initEventListeners = function () {
        var _this = this;
        window.addEventListener("message", function (event) {
            var prefix = typeof event.data === 'string' ? event.data.split('-').shift() : '';
            if (prefix === 'game1SetFirstPlay') {
                var postFix = typeof event.data === 'string' ? event.data.split('-').pop() : '';
                _this.mIsFirstPlay = postFix === 'true';
            }
        });
    };
    GameMgr.prototype.init = function () {
        if (this.mIsFirstPlay) {
            this.setGameState(GameStates.TUTORIAL);
            this.mIsFirstPlay = false;
        }
        else {
            this.setGameState(GameStates.PLAYING);
        }
        this.score = 0;
        this.reachedPlanet = 0;
        this.level = 0;
        this.GiftMgr.init();
    };
    GameMgr.prototype.getLevel = function () {
        return this.level;
    };
    GameMgr.prototype.getScore = function () {
        return this.score;
    };
    GameMgr.prototype.addScore = function (score) {
        this.score += score;
    };
    GameMgr.prototype.getReachedPlanet = function () {
        return this.reachedPlanet;
    };
    GameMgr.prototype.increaseReachedPlanet = function () {
        this.reachedPlanet += 1;
    };
    GameMgr.prototype.getGameState = function () {
        return this.gameState;
    };
    GameMgr.prototype.setGameState = function (newGameState) {
        this.mPreviousState = this.gameState;
        this.gameState = newGameState;
        console.log('Game state: ', newGameState);
        switch (this.gameState) {
            case GameStates.TUTORIAL:
                break;
            case GameStates.PLAYING:
                TopUI_1.default.Instance.show(TopUI_1.EAppTopUIs.CompHeader, true, true);
                break;
            case GameStates.ROLLING:
                TopUI_1.default.Instance.hideAll();
                break;
            case GameStates.END:
                break;
        }
    };
    GameMgr.prototype.update = function (dt) {
    };
    GameMgr.prototype.pause = function () {
        this.setGameState(GameStates.PAUSE);
        SoundMgr_1.default.pauseMusic();
    };
    GameMgr.prototype.resume = function () {
        this.setGameState(this.mPreviousState);
        // SoundMgr.resumeMusic()
    };
    GameMgr.prototype.postMessage = function (msg) {
        if (!window.parent) {
            return;
        }
        window.parent.postMessage(msg, '*');
    };
    GameMgr.prototype.replay = function () {
        this.init();
    };
    __decorate([
        property(GiftsMgr_1.default)
    ], GameMgr.prototype, "GiftMgr", void 0);
    GameMgr = __decorate([
        ccclass
    ], GameMgr);
    return GameMgr;
}(SingletonNode_1.default()));
exports.default = GameMgr;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3NyYy9nYW1lL0dhbWVNZ3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLGtEQUE2QztBQUM3Qyw0Q0FBdUQ7QUFDdkQsMkRBQXNEO0FBRXRELHVDQUFpQztBQUUzQixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QyxJQUFZLFVBUVg7QUFSRCxXQUFZLFVBQVU7SUFDbEIsbUNBQXFCLENBQUE7SUFDckIsaUNBQW1CLENBQUE7SUFDbkIsNkJBQWUsQ0FBQTtJQUNmLHlCQUFXLENBQUE7SUFDWCwrQkFBaUIsQ0FBQTtJQUNqQixpQ0FBbUIsQ0FBQTtJQUNuQixpQ0FBbUIsQ0FBQTtBQUN2QixDQUFDLEVBUlcsVUFBVSxHQUFWLGtCQUFVLEtBQVYsa0JBQVUsUUFRckI7QUFHRDtJQUFxQywyQkFBd0I7SUFBN0Q7UUFBQSxxRUFpSEM7UUEvR1csYUFBTyxHQUFZLElBQUksQ0FBQztRQUd4QixlQUFTLEdBQWUsVUFBVSxDQUFDLFFBQVEsQ0FBQztRQUdwRCxrQkFBa0I7UUFDVixXQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDWCxtQkFBYSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ25CLFdBQUssR0FBRyxDQUFDLENBQUM7O0lBc0d0QixDQUFDO0lBcEdHLHdCQUFNLEdBQU47UUFDSSxpQkFBTSxNQUFNLFdBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO0lBQzlCLENBQUM7SUFFRCxvQ0FBa0IsR0FBbEI7UUFBQSxpQkFTQztRQVJHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsVUFBQyxLQUFLO1lBQ3JDLElBQU0sTUFBTSxHQUFHLE9BQU8sS0FBSyxDQUFDLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJ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bkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7WUFDaEIsT0FBTTtTQUNUO1FBRUQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFBO0lBQ3ZDLENBQUM7SUFFRCx3QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUE5R0Q7UUFEQyxRQUFRLENBQUMsa0JBQU8sQ0FBQzs0Q0FDYztJQUZmLE9BQU87UUFEM0IsT0FBTztPQUNhLE9BQU8sQ0FpSDNCO0lBQUQsY0FBQztDQWpIRCxBQWlIQyxDQWpIb0MsdUJBQWEsRUFBVyxHQWlINUQ7a0JBakhvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEV2ZW50cyBmcm9tIFwiLi4vLi4vY29tbW9uL0V2ZW50c1wiO1xuaW1wb3J0IExvYWRpbmdDb3ZlciBmcm9tIFwiLi4vLi4vY29tbW9uL0xvYWRpbmdDb3ZlclwiO1xuaW1wb3J0IFNvdW5kTWdyIGZyb20gXCIuLi8uLi9jb21tb24vU291bmRNZ3JcIjtcbmltcG9ydCBUb3BVSSwgeyBFQXBwVG9wVUlzIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9Ub3BVSVwiO1xuaW1wb3J0IFNpbmdsZXRvbk5vZGUgZnJvbSBcIi4uLy4uL3V0aWxzL1NpbmdsZXRvbk5vZGVcIjtcbmltcG9ydCBHYW1lRGVmaW5lIGZyb20gXCIuLi9jb21tb24vR2FtZURlZmluZVwiO1xuaW1wb3J0IEdpZnRNZ3IgZnJvbSBcIi4vR2lmdHNNZ3JcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuZXhwb3J0IGVudW0gR2FtZVN0YXRlcyB7XG4gICAgVFVUT1JJQUwgPSAnVFVUT1JJQUwnLFxuICAgIFBMQVlJTkcgPSAnUExBWUlORycsXG4gICAgUEFVU0UgPSAnUEFVU0UnLFxuICAgIEVORCA9ICdFTkQnLFxuICAgIFNFTEVDVCA9ICdTRUxFQ1QnLFxuICAgIFJPTExJTkcgPSAnUk9MTElORycsXG4gICAgUElDS19VUCA9ICdQSUNLX1VQJyxcbn1cblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVNZ3IgZXh0ZW5kcyBTaW5nbGV0b25Ob2RlPEdhbWVNZ3I+KCkge1xuICAgIEBwcm9wZXJ0eShHaWZ0TWdyKVxuICAgIHByaXZhdGUgR2lmdE1ncjogR2lmdE1nciA9IG51bGw7XG5cbiAgICBwcml2YXRlIG1Jc0ZpcnN0UGxheTogYm9vbGVhblxuICAgIHByaXZhdGUgZ2FtZVN0YXRlOiBHYW1lU3RhdGVzID0gR2FtZVN0YXRlcy5UVVRPUklBTDtcbiAgICBwcml2YXRlIG1QcmV2aW91c1N0YXRlOiBHYW1lU3RhdGVzO1xuXG4gICAgLy8gU2NvcmUgYW5kIGxldmVsXG4gICAgcHJpdmF0ZSBzY29yZSA9IC0xO1xuICAgIHByaXZhdGUgcmVhY2hlZFBsYW5ldCA9IC0xO1xuICAgIHByaXZhdGUgbGV2ZWwgPSAwO1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBzdXBlci5vbkxvYWQoKTtcbiAgICAgICAgdGhpcy5tSXNGaXJzdFBsYXkgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpbml0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByZWZpeCA9IHR5cGVvZiBldmVudC5kYXRhID09PSAnc3RyaW5nJyA/IGV2ZW50LmRhdGEuc3BsaXQoJy0nKS5zaGlmdCgpIDogJyc7XG5cbiAgICAgICAgICAgIGlmIChwcmVmaXggPT09ICdnYW1lMVNldEZpcnN0UGxheScpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwb3N0Rml4ID0gdHlwZW9mIGV2ZW50LmRhdGEgPT09ICdzdHJpbmcnID8gZXZlbnQuZGF0YS5zcGxpdCgnLScpLnBvcCgpIDogJyc7XG4gICAgICAgICAgICAgICAgdGhpcy5tSXNGaXJzdFBsYXkgPSBwb3N0Rml4ID09PSAndHJ1ZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbml0KCkge1xuICAgICAgICBpZiAodGhpcy5tSXNGaXJzdFBsYXkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0R2FtZVN0YXRlKEdhbWVTdGF0ZXMuVFVUT1JJQUwpXG4gICAgICAgICAgICB0aGlzLm1Jc0ZpcnN0UGxheSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRHYW1lU3RhdGUoR2FtZVN0YXRlcy5QTEFZSU5HKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zY29yZSA9IDA7XG4gICAgICAgIHRoaXMucmVhY2hlZFBsYW5ldCA9IDA7XG4gICAgICAgIHRoaXMubGV2ZWwgPSAwO1xuXG4gICAgICAgIHRoaXMuR2lmdE1nci5pbml0KCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldExldmVsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sZXZlbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0U2NvcmUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNjb3JlO1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGRTY29yZShzY29yZSkge1xuICAgICAgICB0aGlzLnNjb3JlICs9IHNjb3JlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRSZWFjaGVkUGxhbmV0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWFjaGVkUGxhbmV0O1xuICAgIH1cblxuICAgIHB1YmxpYyBpbmNyZWFzZVJlYWNoZWRQbGFuZXQoKSB7XG4gICAgICAgIHRoaXMucmVhY2hlZFBsYW5ldCArPSAxO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRHYW1lU3RhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdhbWVTdGF0ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0R2FtZVN0YXRlKG5ld0dhbWVTdGF0ZTogR2FtZVN0YXRlcykge1xuICAgICAgICB0aGlzLm1QcmV2aW91c1N0YXRlID0gdGhpcy5nYW1lU3RhdGU7XG4gICAgICAgIHRoaXMuZ2FtZVN0YXRlID0gbmV3R2FtZVN0YXRlO1xuICAgICAgICBjb25zb2xlLmxvZygnR2FtZSBzdGF0ZTogJywgbmV3R2FtZVN0YXRlKVxuXG5cbiAgICAgICAgc3dpdGNoICh0aGlzLmdhbWVTdGF0ZSkge1xuICAgICAgICAgICAgY2FzZSBHYW1lU3RhdGVzLlRVVE9SSUFMOlxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIEdhbWVTdGF0ZXMuUExBWUlORzpcbiAgICAgICAgICAgICAgICBUb3BVSS5JbnN0YW5jZS5zaG93KEVBcHBUb3BVSXMuQ29tcEhlYWRlciwgdHJ1ZSwgdHJ1ZSlcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSBHYW1lU3RhdGVzLlJPTExJTkc6XG4gICAgICAgICAgICAgICAgVG9wVUkuSW5zdGFuY2UuaGlkZUFsbCgpXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgR2FtZVN0YXRlcy5FTkQ6XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZShkdCkge1xuICAgIH1cblxuICAgIHBhdXNlKCkge1xuICAgICAgICB0aGlzLnNldEdhbWVTdGF0ZShHYW1lU3RhdGVzLlBBVVNFKVxuICAgICAgICBTb3VuZE1nci5wYXVzZU11c2ljKClcbiAgICB9XG5cbiAgICByZXN1bWUoKSB7XG4gICAgICAgIHRoaXMuc2V0R2FtZVN0YXRlKHRoaXMubVByZXZpb3VzU3RhdGUpXG4gICAgICAgIC8vIFNvdW5kTWdyLnJlc3VtZU11c2ljKClcbiAgICB9XG5cbiAgICBwb3N0TWVzc2FnZShtc2c6IHN0cmluZykge1xuICAgICAgICBpZiAoIXdpbmRvdy5wYXJlbnQpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LnBhcmVudC5wb3N0TWVzc2FnZShtc2csICcqJylcbiAgICB9XG5cbiAgICByZXBsYXkoKSB7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cbn1cbiJdfQ==
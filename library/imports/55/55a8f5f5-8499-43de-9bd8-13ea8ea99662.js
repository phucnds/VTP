"use strict";
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
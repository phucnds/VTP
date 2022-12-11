import Events from "../../common/Events";
import LoadingCover from "../../common/LoadingCover";
import SoundMgr from "../../common/SoundMgr";
import TopUI, { EAppTopUIs } from "../../common/TopUI";
import SingletonNode from "../../utils/SingletonNode";
import GameDefine from "../common/GameDefine";
import GiftMgr from "./GiftsMgr";

const { ccclass, property } = cc._decorator;

export enum GameStates {
    TUTORIAL = 'TUTORIAL',
    PLAYING = 'PLAYING',
    PAUSE = 'PAUSE',
    END = 'END',
    SELECT = 'SELECT',
    ROLLING = 'ROLLING',
    PICK_UP = 'PICK_UP',
}

@ccclass
export default class GameMgr extends SingletonNode<GameMgr>() {
    @property(GiftMgr)
    private GiftMgr: GiftMgr = null;

    private mIsFirstPlay: boolean
    private gameState: GameStates = GameStates.TUTORIAL;
    private mPreviousState: GameStates;

    // Score and level
    private score = -1;
    private reachedPlanet = -1;
    private level = 0;

    onLoad() {
        super.onLoad();
        this.mIsFirstPlay = false;
    }

    initEventListeners() {
        window.addEventListener("message", (event) => {
            const prefix = typeof event.data === 'string' ? event.data.split('-').shift() : '';

            if (prefix === 'game1SetFirstPlay') {
                const postFix = typeof event.data === 'string' ? event.data.split('-').pop() : '';
                this.mIsFirstPlay = postFix === 'true';
            }
        });
    }

    public init() {
        if (this.mIsFirstPlay) {
            this.setGameState(GameStates.TUTORIAL)
            this.mIsFirstPlay = false;
        }
        else {
            this.setGameState(GameStates.PLAYING)
        }

        this.score = 0;
        this.reachedPlanet = 0;
        this.level = 0;

        this.GiftMgr.init();
    }

    public getLevel() {
        return this.level;
    }

    public getScore() {
        return this.score;
    }

    public addScore(score) {
        this.score += score;
    }

    public getReachedPlanet() {
        return this.reachedPlanet;
    }

    public increaseReachedPlanet() {
        this.reachedPlanet += 1;
    }

    public getGameState() {
        return this.gameState;
    }

    public setGameState(newGameState: GameStates) {
        this.mPreviousState = this.gameState;
        this.gameState = newGameState;
        console.log('Game state: ', newGameState)


        switch (this.gameState) {
            case GameStates.TUTORIAL:
                break
            case GameStates.PLAYING:
                TopUI.Instance.show(EAppTopUIs.CompHeader, true, true)
                break
            case GameStates.ROLLING:
                TopUI.Instance.hideAll()
                break
            case GameStates.END:
                break
        }
    }

    update(dt) {
    }

    pause() {
        this.setGameState(GameStates.PAUSE)
        SoundMgr.pauseMusic()
    }

    resume() {
        this.setGameState(this.mPreviousState)
        // SoundMgr.resumeMusic()
    }

    postMessage(msg: string) {
        if (!window.parent) {
            return
        }

        window.parent.postMessage(msg, '*')
    }

    replay() {
        this.init();
    }
}

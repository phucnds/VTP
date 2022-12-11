import FrameMgr from "../../common/FrameMgr";
import Helper from "../../utils/Helper";
import GameDefine from "../common/GameDefine";
import { randomInt } from "../common/utils";
import PathFollowObject from "../Path/PathFollowObject";
import GameMgr, { GameStates } from "./GameMgr";
import GiftMgr from "./GiftsMgr";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Gift extends PathFollowObject {
    @property(cc.Node)
    public container: cc.Node = null;
    @property(cc.Node)
    public topView: cc.Node = null;
    @property(cc.Node)
    public cover: cc.Node = null;
    @property(cc.Node)
    public ui: cc.Node = null;
    @property(cc.Node)
    public selectPoint: cc.Node = null;
    @property(cc.Node)
    public btnClose: cc.Node = null;
    @property(cc.Sprite)
    public sprite: cc.Sprite = null;

    private isChosen = false;
    private clickable = true;

    protected onLoad(): void {
        // Helper.registerButtonEvent(this.sprite.node, () => {
        //     if (!this.clickable) return;
        //     GameMgr.Instance.setGameState(GameStates.OPEN_BOX);

        //     this.isChosen = true;
        //     this.clickable = false;
        //     this.node.parent = this.topView;

        //     cc.tween(this.cover)
        //         .set({ opacity: 0, active: true })
        //         .to(
        //             GameDefine.GIFT_CHOSEN_ANIM_TIME,
        //             { opacity: 170 },
        //             { easing: 'quartOut' }
        //         )
        //         .start();


        //     cc.tween(this.node)
        //         .set({ scale: 1 })
        //         .to(
        //             GameDefine.GIFT_CHOSEN_ANIM_TIME,
        //             { scale: GameDefine.GIFT_CHOSEN_SCALE, position: cc.Vec3.ZERO },
        //             { easing: 'quartOut' }
        //         )
        //         .call(() => {
        //             this.ui.active = true;
        //         })
        //         .start();
        // })

        Helper.registerButtonEvent(this.btnClose, () => {
            GameMgr.Instance.setGameState(GameStates.PLAYING);
            this.close()
        })
        this.init();
    }

    pickSelf() {
        GameMgr.Instance.setGameState(GameStates.SELECT);
        this.isChosen = true;
        this.clickable = false;
    }

    init() {
        this.isChosen = false;
        this.clickable = true;
        this.cover.active = false;
        this.sprite.node.active = true;
        this.node.scale = 1;
        this.sprite.spriteFrame = FrameMgr.Instance.GIFT_FRAMES[randomInt(0, FrameMgr.Instance.GIFT_FRAMES.length)];
    }

    setSpeed(speed: number) {
        const passedDistance = this.speed * this.time;
        this.speed = speed;
        this.time = this.pos ? passedDistance / this.speed : 0;
    }
    update(dt) {
        if (!this.running) return;
        if (
            GameMgr.Instance.getGameState() !== GameStates.PLAYING &&
            GameMgr.Instance.getGameState() !== GameStates.ROLLING &&
            GameMgr.Instance.getGameState() !== GameStates.SELECT
        ) {
            return;
        } else {
            if (!this.initiated) {
                // this.timer += dt;
                // if ((this.timer * this.speed) < this.delay) {
                //     return
                // } else {
                this.initiate();
                // };
            }
        }

        if (GameMgr.Instance.getGameState() === GameStates.ROLLING) {
            if (this.speed > GameDefine.GIFT_SPEED_MIN) {
                this.setSpeed(this.speed - GameDefine.GIFT_BREAK_A * dt * dt);
            } else {
                this.setSpeed(GameDefine.GIFT_SPEED_MIN);
                GiftMgr.Instance.choose();
            }
        } else if (GameMgr.Instance.getGameState() === GameStates.PLAYING) {
            this.setSpeed(GameDefine.GIFT_SPEED);
        };

        this.time += dt;
        if (this.time > this.distance / this.speed) {
            this.time = 0;
            this.initNextPoint()
            if (this.nextPoint === this.path.getStartPoint()) {
                this.completeLapCallback();
            }
        }

        const direction = this.GetBezierPosition(this.time / (this.distance / this.speed)).sub(this.pos).normalize();
        this.pos = this.pos.add(direction.mul(this.speed).mul(dt));
        this.node.setPosition(this.pos);
        if (this.isChosen && GameMgr.Instance.getGameState() === GameStates.SELECT) {
            if (this.currentPoint === this.selectPoint) {
                GameMgr.Instance.setGameState(GameStates.PICK_UP);

                setTimeout(() => {
                    this.isChosen = true;
                    this.clickable = false;
                    this.node.parent = this.topView;

                    cc.tween(this.cover)
                        .set({ opacity: 0, active: true })
                        .to(
                            GameDefine.GIFT_CHOSEN_ANIM_TIME,
                            { opacity: 170 },
                            { easing: 'quartOut' }
                        )
                        .start();


                    cc.tween(this.node)
                        .set({ scale: 1 })
                        .to(
                            GameDefine.GIFT_CHOSEN_ANIM_TIME,
                            { scale: GameDefine.GIFT_CHOSEN_SCALE, position: cc.Vec3.ZERO },
                            { easing: 'quartOut' }
                        )
                        .call(() => {
                            this.ui.active = true;
                        })
                        .start();
                }, 1000)
            }
        }
    }

    completeLapCallback() {
        if (!this.loop) {
            this.initiate()
        }

        if (this.isChosen) {
            return
        };

        this.sprite.node.active = true;
        this.sprite.spriteFrame = FrameMgr.Instance.GIFT_FRAMES[randomInt(0, FrameMgr.Instance.GIFT_FRAMES.length)];
    }

    close() {
        this.node.parent = this.container;
        this.cover.active = false;
        this.ui.active = false;
        this.sprite.node.active = false;
        this.node.scale = 1;
        this.isChosen = false;
        this.clickable = true;
    }
}

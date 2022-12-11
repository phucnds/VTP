// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import GameDefine from "../common/GameDefine";
import GameMgr, { GameStates } from "../game/GameMgr";
import Path from "./Path";
import Point from "./Point";

const { ccclass, property } = cc._decorator;

@ccclass
export default class PathFollowObject extends cc.Component {
    @property(Path)
    protected path: Path = null;
    @property(cc.Boolean)
    protected loop: Boolean = true;
    @property(Number)
    protected delay: number = 0;
    set Delay(delay: number) {
        this.delay = delay;
    }

    @property(cc.Node)
    protected currentPoint: cc.Node = null;
    protected nextPoint: cc.Node = null;
    protected distance: number = 0;
    protected time: number = 0;
    protected timer: number = 0;
    protected initiated: boolean = false;
    protected running: boolean = true;
    protected speed: number = GameDefine.GIFT_SPEED;
    protected pos: cc.Vec2;

    get Initiated() {
        return this.initiate;
    }

    pause() {
        this.running = false;
    }

    resume() {
        this.running = true;
    }

    GetBezierPosition(t: number) {
        const p0 = this.currentPoint.getPosition();
        const p0Forward = this.currentPoint.getComponent(Point).getForwardVector().mul(this.path.reverse ? -1 : 1);
        const p1 = p0.add(p0Forward);
        const p3 = this.nextPoint.getPosition();
        const p3Back = this.currentPoint.getComponent(Point).getBackVector().mul(this.path.reverse ? -1 : 1);
        const p2 = p3.sub(p3Back);

        const a = p0.mul(Math.pow(1 - t, 3));
        const b = p1.mul(3 * Math.pow(1 - t, 2) * t);
        const c = p2.mul(3 * (1 - t) * Math.pow(t, 2));
        const d = p3.mul(Math.pow(t, 3));
        return a.add(b).add(c).add(d);
    }

    initiate() {
        this.initiated = true;
        if (!this.currentPoint) {
            this.currentPoint = this.path.getStartPoint();
            this.pos = this.currentPoint.getPosition();
        } else {
            this.pos = this.node.getPosition();
        }

        this.nextPoint = this.path.getNextPoint(this.currentPoint);
        this.distance = this.nextPoint.position.sub(this.currentPoint.position).mag();
        const passedDistance = this.pos.sub(this.currentPoint.getPosition()).mag();
        this.time = passedDistance / this.speed;
    }

    initNextPoint() {
        this.currentPoint = this.nextPoint;
        this.nextPoint = this.path.getNextPoint(this.nextPoint);
        this.distance = this.nextPoint.position.sub(this.currentPoint.position).mag();
    }

    update(dt) {
        if (!this.running) return;

        if (!this.initiated) {
            this.timer += dt;
            if (this.timer < this.delay) {
                return
            } else {
                this.initiate();
            };
        }

        this.time += dt;
        if (this.time > this.distance / this.speed) {
            this.time = 0;
            this.initNextPoint()
            if (this.nextPoint === this.path.getStartPoint()) {
                this.completeLapCallback();
                if (this.loop) {
                } else {
                    this.initiate()
                }
            }
        }

        const direction = this.GetBezierPosition(this.time / (this.distance / this.speed)).sub(this.pos).normalize();
        this.pos = this.pos.add(direction.mul(this.speed).mul(dt));
        this.node.setPosition(this.pos);
    }

    completeLapCallback() {
    }
}

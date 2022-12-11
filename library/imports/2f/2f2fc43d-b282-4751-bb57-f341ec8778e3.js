"use strict";
cc._RF.push(module, '2f2fcQ9soJHUbtX80Hsh3jj', 'Timer');
// scripts/utils/Timer.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Timer = /** @class */ (function () {
    function Timer() {
        this.timer = 0;
        this.duration = 0;
        this.overhead = 0;
        this.isDone = true;
    }
    Timer.prototype.SetDuration = function (duration) {
        this.timer = duration;
        this.duration = duration;
        this.overhead = 0;
        this.isDone = false;
    };
    Timer.prototype.GetDuration = function () {
        return this.duration;
    };
    Timer.prototype.GetTime = function () {
        return this.timer;
    };
    Timer.prototype.GetPercent = function () {
        return this.timer / this.duration;
    };
    Timer.prototype.Reset = function () {
        this.timer = this.duration;
        this.overhead = 0;
        this.isDone = false;
    };
    Timer.prototype.IsDone = function () {
        return this.timer === 0;
    };
    Timer.prototype.FirstFinished = function () {
        if (this.timer > 0) {
            return false;
        }
        if (this.isDone) {
            return false;
        }
        this.isDone = true;
        return true;
    };
    Timer.prototype.GetOverhead = function () {
        return this.overhead;
    };
    Timer.prototype.Update = function (dt) {
        if (this.timer === 0) {
            return;
        }
        this.timer -= dt;
        if (this.timer < 0) {
            this.overhead = -this.timer;
            this.timer = 0;
        }
    };
    return Timer;
}());
exports.default = Timer;

cc._RF.pop();
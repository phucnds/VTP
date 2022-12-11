
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/utils/Timer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3V0aWxzL1RpbWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFBQTtRQUNVLFVBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsYUFBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixhQUFRLEdBQVcsQ0FBQyxDQUFDO1FBQ3JCLFdBQU0sR0FBWSxJQUFJLENBQUM7SUEwRGpDLENBQUM7SUF4REMsMkJBQVcsR0FBWCxVQUFhLFFBQVE7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7UUFDdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDbEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUVELDJCQUFXLEdBQVg7UUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQUVELHVCQUFPLEdBQVA7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUVELDBCQUFVLEdBQVY7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNwQyxDQUFDO0lBRUQscUJBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUNsQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBRUQsc0JBQU0sR0FBTjtRQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELDZCQUFhLEdBQWI7UUFDRSxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFO1lBQ2xCLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixPQUFPLEtBQUssQ0FBQztTQUNkO1FBRUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsMkJBQVcsR0FBWDtRQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBRUQsc0JBQU0sR0FBTixVQUFRLEVBQUU7UUFDUixJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssQ0FBQyxFQUFFO1lBQ3BCLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDO1FBQ2pCLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDNUIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7U0FDaEI7SUFDSCxDQUFDO0lBQ0gsWUFBQztBQUFELENBOURBLEFBOERDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBUaW1lciB7XG4gIHByaXZhdGUgdGltZXI6IG51bWJlciA9IDA7XG4gIHByaXZhdGUgZHVyYXRpb246IG51bWJlciA9IDA7XG4gIHByaXZhdGUgb3ZlcmhlYWQ6IG51bWJlciA9IDA7XG4gIHByaXZhdGUgaXNEb25lOiBib29sZWFuID0gdHJ1ZTtcblxuICBTZXREdXJhdGlvbiAoZHVyYXRpb24pIHtcbiAgICB0aGlzLnRpbWVyID0gZHVyYXRpb247XG4gICAgdGhpcy5kdXJhdGlvbiA9IGR1cmF0aW9uO1xuICAgIHRoaXMub3ZlcmhlYWQgPSAwO1xuICAgIHRoaXMuaXNEb25lID0gZmFsc2U7XG4gIH1cblxuICBHZXREdXJhdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZHVyYXRpb247XG4gIH1cblxuICBHZXRUaW1lICgpIHtcbiAgICByZXR1cm4gdGhpcy50aW1lcjtcbiAgfVxuXG4gIEdldFBlcmNlbnQgKCkge1xuICAgIHJldHVybiB0aGlzLnRpbWVyIC8gdGhpcy5kdXJhdGlvbjtcbiAgfVxuXG4gIFJlc2V0ICgpIHtcbiAgICB0aGlzLnRpbWVyID0gdGhpcy5kdXJhdGlvbjtcbiAgICB0aGlzLm92ZXJoZWFkID0gMDtcbiAgICB0aGlzLmlzRG9uZSA9IGZhbHNlO1xuICB9XG5cbiAgSXNEb25lICgpIHtcbiAgICByZXR1cm4gdGhpcy50aW1lciA9PT0gMDtcbiAgfVxuXG4gIEZpcnN0RmluaXNoZWQgKCkge1xuICAgIGlmICh0aGlzLnRpbWVyID4gMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAodGhpcy5pc0RvbmUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB0aGlzLmlzRG9uZSA9IHRydWU7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBHZXRPdmVyaGVhZCAoKSB7XG4gICAgcmV0dXJuIHRoaXMub3ZlcmhlYWQ7XG4gIH1cblxuICBVcGRhdGUgKGR0KSB7XG4gICAgaWYgKHRoaXMudGltZXIgPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnRpbWVyIC09IGR0O1xuICAgIGlmICh0aGlzLnRpbWVyIDwgMCkge1xuICAgICAgdGhpcy5vdmVyaGVhZCA9IC10aGlzLnRpbWVyO1xuICAgICAgdGhpcy50aW1lciA9IDA7XG4gICAgfVxuICB9XG59XG4iXX0=
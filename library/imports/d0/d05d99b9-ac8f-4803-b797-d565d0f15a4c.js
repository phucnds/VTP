"use strict";
cc._RF.push(module, 'd05d9m5rI9IA7eX1WXQ8VpM', 'Singleton');
// scripts/utils/Singleton.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Singleton() {
    var Singleton = /** @class */ (function () {
        function Singleton() {
            if (!Singleton.instance) {
                Singleton.instance = this;
            }
            else {
                throw Singleton.instance.constructor['name'] + " instance already exist";
            }
        }
        Object.defineProperty(Singleton, "Instance", {
            get: function () {
                return this.instance;
            },
            enumerable: false,
            configurable: true
        });
        return Singleton;
    }());
    return Singleton;
}
exports.default = Singleton;

cc._RF.pop();
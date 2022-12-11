
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/utils/Singleton.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3V0aWxzL1NpbmdsZXRvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLFNBQXdCLFNBQVM7SUFDN0I7UUFRSTtZQUVJLElBQUcsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUN0QjtnQkFDSSxTQUFTLENBQUMsUUFBUSxHQUFHLElBQVMsQ0FBQzthQUNsQztpQkFFRDtnQkFDSSxNQUFTLFNBQVMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyw0QkFBeUIsQ0FBQzthQUM1RTtRQUNMLENBQUM7UUFmRCxzQkFBVyxxQkFBUTtpQkFBbkI7Z0JBRUksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ3pCLENBQUM7OztXQUFBO1FBYUwsZ0JBQUM7SUFBRCxDQW5CQSxBQW1CQyxJQUFBO0lBRUQsT0FBTyxTQUFTLENBQUM7QUFDckIsQ0FBQztBQXZCRCw0QkF1QkMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpbmdsZXRvbjxUPigpIHtcbiAgICBjbGFzcyBTaW5nbGV0b24ge1xuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogVDtcblxuICAgICAgICBzdGF0aWMgZ2V0IEluc3RhbmNlKCk6IFRcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdHJ1Y3RvcigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKCFTaW5nbGV0b24uaW5zdGFuY2UpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgU2luZ2xldG9uLmluc3RhbmNlID0gdGhpcyBhcyBUO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRocm93IGAke1NpbmdsZXRvbi5pbnN0YW5jZS5jb25zdHJ1Y3RvclsnbmFtZSddfSBpbnN0YW5jZSBhbHJlYWR5IGV4aXN0YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICByZXR1cm4gU2luZ2xldG9uO1xufSJdfQ==
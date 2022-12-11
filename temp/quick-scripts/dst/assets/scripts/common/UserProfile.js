
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/common/UserProfile.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'da5b5bqho5BAZYh+055RwlL', 'UserProfile');
// scripts/common/UserProfile.ts

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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userProfile = exports.UserProfile = exports.EUserProfileEventTypes = void 0;
var APIDefine_1 = require("../src/app/APIDefine");
var store_1 = require("../src/app/store");
var wsgw_1 = require("../src/app/wsgw");
var Analytics_1 = require("../src/common/Analytics");
var utils_1 = require("../src/common/utils");
var SliceUser_1 = require("../src/features/SliceUser");
var EUserProfileEventTypes;
(function (EUserProfileEventTypes) {
    EUserProfileEventTypes["SYNC"] = "SYNC";
})(EUserProfileEventTypes = exports.EUserProfileEventTypes || (exports.EUserProfileEventTypes = {}));
var UserProfile = /** @class */ (function (_super) {
    __extends(UserProfile, _super);
    function UserProfile() {
        var _this = _super.call(this) || this;
        _this.onSyncProfile = function (msg) {
            var userId = msg.userId, avatarUrl = msg.avatarUrl, msisdn = msg.msisdn, accessToken = msg.accessToken, customerType = msg.customerType;
            _this.userData = __assign({ userId: userId, avatar: utils_1.getCDN(avatarUrl || ''), phoneNumber: msisdn, omsToken: accessToken, verifiedUser: customerType !== null && customerType !== "-1" }, msg);
            _this.logged = true;
            // setUserId(`userId:${userId}`);
            Analytics_1.setUserProperties(__assign({}, _this.userData));
            console.log('login', _this.userData);
            store_1.default.dispatch(SliceUser_1.syncProfile(_this.userData));
        };
        _this.onSyncBalances = function (msg, syncCoin) {
            if (syncCoin === void 0) { syncCoin = true; }
            var turn = msg.turn, coinBalance = msg.coinBalance;
            var newCoinBalance = syncCoin ? coinBalance : _this.userData.coinBalance;
            _this.userData = __assign(__assign({}, _this.userData), { spinTicketBalance: turn, coinBalance: newCoinBalance });
            Analytics_1.setUserProperties(__assign({}, _this.userData));
            store_1.default.dispatch(SliceUser_1.syncBalances({
                spinTicketBalance: turn,
                coinBalance: newCoinBalance,
            }));
        };
        return _this;
    }
    UserProfile.prototype.isLogged = function () {
        return this.logged;
    };
    UserProfile.prototype.UpdateProfile = function (isUpdateInfor, success) {
        var _this = this;
        if (isUpdateInfor === void 0) { isUpdateInfor = false; }
        if (success === void 0) { success = function () { }; }
        wsgw_1.default.userRequest(APIDefine_1.default.getProfile, {}, function (e) {
            var info = e.info, profile = e.profile;
            _this.onSyncProfile(__assign(__assign({}, info), profile));
            success();
        }, console.error);
    };
    UserProfile.prototype.UpdateBalance = function (syncCoin) {
        var _this = this;
        if (syncCoin === void 0) { syncCoin = true; }
        wsgw_1.default.userRequest(APIDefine_1.default.getBalances, {}, function (e) {
            _this.onSyncBalances(e, syncCoin);
        }, console.error);
    };
    UserProfile.prototype.get = function () {
        return __assign(__assign({}, this.userData), { isLogged: this.isLogged });
    };
    Object.defineProperty(UserProfile.prototype, "userId", {
        get: function () {
            return this.userData["userId"];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserProfile.prototype, "credential", {
        get: function () {
            return this.userData["credential"];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserProfile.prototype, "coinBalance", {
        get: function () {
            return this.userData["coinBalance"];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserProfile.prototype, "starBalance", {
        get: function () {
            return this.userData["starBalance"];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserProfile.prototype, "spinTicketBalance", {
        get: function () {
            return this.userData["spinTicketBalance"];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserProfile.prototype, "nickName", {
        get: function () {
            return this.userData["nickName"];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserProfile.prototype, "avatar", {
        get: function () {
            return utils_1.getCDN(this.userData["avatar"]);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserProfile.prototype, "language", {
        get: function () {
            return this.userData.language;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserProfile.prototype, "isVip", {
        get: function () {
            return !!this.userData.isVip;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserProfile.prototype, "isRedeemInviteCode", {
        get: function () {
            return !!this.userData.isRedeemInviteCode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserProfile.prototype, "greenCashBalance", {
        get: function () {
            return this.userData["greenCashBalance"];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserProfile.prototype, "wheelBalance", {
        get: function () {
            return this.userData["wheelBalance"];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserProfile.prototype, "omsToken", {
        get: function () {
            return this.userData["omsToken"];
        },
        enumerable: false,
        configurable: true
    });
    return UserProfile;
}(cc.SystemEvent));
exports.UserProfile = UserProfile;
exports.userProfile = new UserProfile();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2NvbW1vbi9Vc2VyUHJvZmlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxrREFBNkM7QUFDN0MsMENBQXFDO0FBQ3JDLHdDQUFtQztBQUNuQyxxREFBaUY7QUFDakYsNkNBQTZEO0FBQzdELHVEQUFzRTtBQTRCdEUsSUFBWSxzQkFFWDtBQUZELFdBQVksc0JBQXNCO0lBQzlCLHVDQUFhLENBQUE7QUFDakIsQ0FBQyxFQUZXLHNCQUFzQixHQUF0Qiw4QkFBc0IsS0FBdEIsOEJBQXNCLFFBRWpDO0FBT0Q7SUFBaUMsK0JBQWM7SUFHM0M7UUFBQSxZQUNJLGlCQUFPLFNBQ1Y7UUFxQk8sbUJBQWEsR0FBRyxVQUFDLEdBQXdCO1lBRXpDLElBQUEsTUFBTSxHQUtOLEdBQUcsT0FMRyxFQUNOLFNBQVMsR0FJVCxHQUFHLFVBSk0sRUFDVCxNQUFNLEdBR04sR0FBRyxPQUhHLEVBQ04sV0FBVyxHQUVYLEdBQUcsWUFGUSxFQUNYLFlBQVksR0FDWixHQUFHLGFBRFMsQ0FDUjtZQUNSLEtBQUksQ0FBQyxRQUFRLGNBQ1QsTUFBTSxRQUFBLEVBQ04sTUFBTSxFQUFFLGNBQU0sQ0FBQyxTQUFTLElBQUksRUFBRSxDQUFDLEVBQy9CLFdBQVcsRUFBRSxNQUFNLEVBQ25CLFFBQVEsRUFBRSxXQUFXLEVBQ3JCLFlBQVksRUFBRSxZQUFZLEtBQUssSUFBSSxJQUFJLFlBQVksS0FBSyxJQUFJLElBQ3pELEdBQUcsQ0FDVCxDQUFDO1lBRUYsS0FBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbkIsaUNBQWlDO1lBQ2pDLDZCQUFpQixjQUNWLEtBQUksQ0FBQyxRQUFRLEVBQ2xCLENBQUM7WUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7WUFDbkMsZUFBSyxDQUFDLFFBQVEsQ0FBQyx1QkFBVyxD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QUFqQjtZQUNJLE9BQU8sY0FBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUMzQyxDQUFDOzs7T0FBQTtJQUNELHNCQUFXLGlDQUFRO2FBQW5CO1lBQ0ksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQztRQUNsQyxDQUFDOzs7T0FBQTtJQUNELHNCQUFXLDhCQUFLO2FBQWhCO1lBQ0ksT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7UUFDakMsQ0FBQzs7O09BQUE7SUFDRCxzQkFBVywyQ0FBa0I7YUFBN0I7WUFDSSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDO1FBQzlDLENBQUM7OztPQUFBO0lBQ0Qsc0JBQVcseUNBQWdCO2FBQTNCO1lBQ0ksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDN0MsQ0FBQzs7O09BQUE7SUFDRCxzQkFBVyxxQ0FBWTthQUF2QjtZQUNJLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUN6QyxDQUFDOzs7T0FBQTtJQUNELHNCQUFXLGlDQUFRO2FBQW5CO1lBQ0ksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3JDLENBQUM7OztPQUFBO0lBQ0wsa0JBQUM7QUFBRCxDQXBIQSxBQW9IQyxDQXBIZ0MsRUFBRSxDQUFDLFdBQVcsR0FvSDlDO0FBcEhZLGtDQUFXO0FBc0hYLFFBQUEsV0FBVyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNc2dTeW5jUHJvZmlsZSB9IGZyb20gXCJAZWxvZnVuL2Vsby1zZXJ2aWNlcy1teWlkLXYyXCI7XG5pbXBvcnQgeyBFTXNnVHlwZXMgfSBmcm9tIFwiQGVsb2Z1bi9lbG8tc2VydmljZXMtbXlpZC12Mi9FTXNnVHlwZXNcIjtcbmltcG9ydCBBUElEZWZpbmUgZnJvbSBcIi4uL3NyYy9hcHAvQVBJRGVmaW5lXCI7XG5pbXBvcnQgc3RvcmUgZnJvbSBcIi4uL3NyYy9hcHAvc3RvcmVcIjtcbmltcG9ydCB3c2d3IGZyb20gXCIuLi9zcmMvYXBwL3dzZ3dcIjtcbmltcG9ydCB7IGxvZ0V2ZW50LCBzZXRVc2VySWQsIHNldFVzZXJQcm9wZXJ0aWVzIH0gZnJvbSBcIi4uL3NyYy9jb21tb24vQW5hbHl0aWNzXCI7XG5pbXBvcnQgeyBnZXRDRE4sIGlzTXlWaWV0dGVsRGV2IH0gZnJvbSBcIi4uL3NyYy9jb21tb24vdXRpbHNcIjtcbmltcG9ydCB7IHN5bmNCYWxhbmNlcywgc3luY1Byb2ZpbGUgfSBmcm9tIFwiLi4vc3JjL2ZlYXR1cmVzL1NsaWNlVXNlclwiO1xuZXhwb3J0IGludGVyZmFjZSBJVXNlclByb2ZpbGVQYXlsb2FkIHtcbiAgICB1c2VySWQ6IHN0cmluZztcbiAgICBhdmF0YXJVcmw6IHN0cmluZztcbiAgICBtc2lzZG46IHN0cmluZztcbiAgICBhY2Nlc3NUb2tlbjogc3RyaW5nO1xuICAgIHNjb3BlczogQXJyYXk8c3RyaW5nPjtcbiAgICBpc05ld1VzZXI6IGJvb2xlYW47XG4gICAgY3VzdG9tZXJUeXBlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElVc2VyUHJvZmlsZSB7XG4gICAgdXNlcklkOiBzdHJpbmc7XG4gICAgYXZhdGFyOiBzdHJpbmc7XG4gICAgY3JlZGVudGlhbDogc3RyaW5nO1xuICAgIG5pY2tOYW1lOiBzdHJpbmc7XG4gICAgY29pbkJhbGFuY2U6IG51bWJlcjtcbiAgICBzcGluVGlja2V0QmFsYW5jZTogbnVtYmVyO1xuICAgIGdyZWVuQ2FzaEJhbGFuY2U6IG51bWJlcjtcbiAgICB3aGVlbEJhbGFuY2U6IG51bWJlcjtcbiAgICBsYW5ndWFnZT86IHN0cmluZztcbiAgICBpc1ZpcDogYm9vbGVhbjtcbiAgICBpc1JlZGVlbUludml0ZUNvZGU6IGJvb2xlYW47XG4gICAgcGhvbmVOdW1iZXI/OiBzdHJpbmdcbiAgICBvbXNUb2tlbjogc3RyaW5nO1xuICAgIHN0YXJCYWxhbmNlOiBudW1iZXI7XG4gICAgdmVyaWZpZWRVc2VyOiBib29sZWFuO1xufVxuZXhwb3J0IGVudW0gRVVzZXJQcm9maWxlRXZlbnRUeXBlcyB7XG4gICAgU1lOQyA9ICdTWU5DJ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElVc2VyQmFsYW5jZXNQYXlsb2FkIHtcbiAgICBjb2luQmFsYW5jZTogbnVtYmVyLFxuICAgIHR1cm46IG51bWJlcixcbn1cblxuZXhwb3J0IGNsYXNzIFVzZXJQcm9maWxlIGV4dGVuZHMgY2MuU3lzdGVtRXZlbnQgaW1wbGVtZW50cyBJVXNlclByb2ZpbGUge1xuICAgIHByaXZhdGUgdXNlckRhdGE6IElVc2VyUHJvZmlsZSB8IGFueTtcbiAgICBwcml2YXRlIGxvZ2dlZDogYm9vbGVhbjtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaXNMb2dnZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvZ2dlZDtcbiAgICB9XG4gICAgcHVibGljIFVwZGF0ZVByb2ZpbGUoaXNVcGRhdGVJbmZvcjogYm9vbGVhbiA9IGZhbHNlLCBzdWNjZXNzOiBGdW5jdGlvbiA9ICgpID0+IHsgfSkge1xuICAgICAgICB3c2d3LnVzZXJSZXF1ZXN0KEFQSURlZmluZS5nZXRQcm9maWxlLCB7fSwgKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgaW5mbywgcHJvZmlsZSB9ID0gZTtcblxuICAgICAgICAgICAgdGhpcy5vblN5bmNQcm9maWxlKHsgLi4uaW5mbywgLi4ucHJvZmlsZSB9KVxuXG4gICAgICAgICAgICBzdWNjZXNzKCk7XG4gICAgICAgIH0sIGNvbnNvbGUuZXJyb3IpO1xuICAgIH1cblxuICAgIHB1YmxpYyBVcGRhdGVCYWxhbmNlKHN5bmNDb2luID0gdHJ1ZSkge1xuICAgICAgICB3c2d3LnVzZXJSZXF1ZXN0KEFQSURlZmluZS5nZXRCYWxhbmNlcywge30sIChlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9uU3luY0JhbGFuY2VzKGUsIHN5bmNDb2luKVxuICAgICAgICB9LCBjb25zb2xlLmVycm9yKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uU3luY1Byb2ZpbGUgPSAobXNnOiBJVXNlclByb2ZpbGVQYXlsb2FkKSA9PiB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIHVzZXJJZCxcbiAgICAgICAgICAgIGF2YXRhclVybCxcbiAgICAgICAgICAgIG1zaXNkbixcbiAgICAgICAgICAgIGFjY2Vzc1Rva2VuLFxuICAgICAgICAgICAgY3VzdG9tZXJUeXBlXG4gICAgICAgIH0gPSBtc2c7XG4gICAgICAgIHRoaXMudXNlckRhdGEgPSB7XG4gICAgICAgICAgICB1c2VySWQsXG4gICAgICAgICAgICBhdmF0YXI6IGdldENETihhdmF0YXJVcmwgfHwgJycpLFxuICAgICAgICAgICAgcGhvbmVOdW1iZXI6IG1zaXNkbixcbiAgICAgICAgICAgIG9tc1Rva2VuOiBhY2Nlc3NUb2tlbixcbiAgICAgICAgICAgIHZlcmlmaWVkVXNlcjogY3VzdG9tZXJUeXBlICE9PSBudWxsICYmIGN1c3RvbWVyVHlwZSAhPT0gXCItMVwiKSxcbiAgICAgICAgICAgIC4uLm1zZyxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmxvZ2dlZCA9IHRydWU7XG4gICAgICAgIC8vIHNldFVzZXJJZChgdXNlcklkOiR7dXNlcklkfWApO1xuICAgICAgICBzZXRVc2VyUHJvcGVydGllcyh7XG4gICAgICAgICAgICAuLi50aGlzLnVzZXJEYXRhXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zb2xlLmxvZygnbG9naW4nLCB0aGlzLnVzZXJEYXRhKVxuICAgICAgICBzdG9yZS5kaXNwYXRjaChzeW5jUHJvZmlsZSh0aGlzLnVzZXJEYXRhKSlcbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBvblN5bmNCYWxhbmNlcyA9IChtc2c6IElVc2VyQmFsYW5jZXNQYXlsb2FkLCBzeW5jQ29pbiA9IHRydWUpID0+IHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgdHVybixcbiAgICAgICAgICAgIGNvaW5CYWxhbmNlLFxuICAgICAgICB9ID0gbXNnO1xuICAgICAgICBjb25zdCBuZXdDb2luQmFsYW5jZSA9IHN5bmNDb2luID8gY29pbkJhbGFuY2UgOiB0aGlzLnVzZXJEYXRhLmNvaW5CYWxhbmNlXG4gICAgICAgIHRoaXMudXNlckRhdGEgPSB7XG4gICAgICAgICAgICAuLi50aGlzLnVzZXJEYXRhLFxuICAgICAgICAgICAgc3BpblRpY2tldEJhbGFuY2U6IHR1cm4sXG4gICAgICAgICAgICBjb2luQmFsYW5jZTogbmV3Q29pbkJhbGFuY2UsXG4gICAgICAgIH07XG5cbiAgICAgICAgc2V0VXNlclByb3BlcnRpZXMoe1xuICAgICAgICAgICAgLi4udGhpcy51c2VyRGF0YVxuICAgICAgICB9KTtcbiAgICAgICAgc3RvcmUuZGlzcGF0Y2goc3luY0JhbGFuY2VzKHtcbiAgICAgICAgICAgIHNwaW5UaWNrZXRCYWxhbmNlOiB0dXJuLFxuICAgICAgICAgICAgY29pbkJhbGFuY2U6IG5ld0NvaW5CYWxhbmNlLFxuICAgICAgICB9KSlcbiAgICB9O1xuXG4gICAgcHVibGljIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHsgLi4udGhpcy51c2VyRGF0YSwgaXNMb2dnZWQ6IHRoaXMuaXNMb2dnZWQgfTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHVzZXJJZCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy51c2VyRGF0YVtgdXNlcklkYF07XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgY3JlZGVudGlhbCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy51c2VyRGF0YVtgY3JlZGVudGlhbGBdO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGNvaW5CYWxhbmNlKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnVzZXJEYXRhW2Bjb2luQmFsYW5jZWBdO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IHN0YXJCYWxhbmNlKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnVzZXJEYXRhW2BzdGFyQmFsYW5jZWBdO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IHNwaW5UaWNrZXRCYWxhbmNlKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnVzZXJEYXRhW2BzcGluVGlja2V0QmFsYW5jZWBdO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IG5pY2tOYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnVzZXJEYXRhW2BuaWNrTmFtZWBdO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGF2YXRhcigpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gZ2V0Q0ROKHRoaXMudXNlckRhdGFbYGF2YXRhcmBdKTtcbiAgICB9XG4gICAgcHVibGljIGdldCBsYW5ndWFnZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy51c2VyRGF0YS5sYW5ndWFnZTtcbiAgICB9XG4gICAgcHVibGljIGdldCBpc1ZpcCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy51c2VyRGF0YS5pc1ZpcDtcbiAgICB9XG4gICAgcHVibGljIGdldCBpc1JlZGVlbUludml0ZUNvZGUoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAhIXRoaXMudXNlckRhdGEuaXNSZWRlZW1JbnZpdGVDb2RlO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGdyZWVuQ2FzaEJhbGFuY2UoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXNlckRhdGFbYGdyZWVuQ2FzaEJhbGFuY2VgXTtcbiAgICB9XG4gICAgcHVibGljIGdldCB3aGVlbEJhbGFuY2UoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXNlckRhdGFbYHdoZWVsQmFsYW5jZWBdO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IG9tc1Rva2VuKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnVzZXJEYXRhW2BvbXNUb2tlbmBdO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IHVzZXJQcm9maWxlID0gbmV3IFVzZXJQcm9maWxlKCk7XG4iXX0=
"use strict";
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
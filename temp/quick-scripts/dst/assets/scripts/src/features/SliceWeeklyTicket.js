
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/src/features/SliceWeeklyTicket.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '48739fIQZhC3oO2pZdy/1iB', 'SliceWeeklyTicket');
// scripts/src/features/SliceWeeklyTicket.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.syncWeeklyTicket = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initWeeklyTicketState = {
    bought: false,
};
var weeklyTicket = toolkit_1.createSlice({
    name: 'weeklyTicket',
    initialState: initWeeklyTicketState,
    reducers: {
        syncWeeklyTicket: function (state, _a) {
            var payload = _a.payload;
            var bought = payload.bought;
            state.bought = bought;
        },
    },
});
exports.syncWeeklyTicket = weeklyTicket.actions.syncWeeklyTicket;
exports.default = weeklyTicket.reducer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3NyYy9mZWF0dXJlcy9TbGljZVdlZWtseVRpY2tldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0Q0FBNkU7QUFPN0UsSUFBTSxxQkFBcUIsR0FBdUI7SUFDaEQsTUFBTSxFQUFFLEtBQUs7Q0FDZCxDQUFBO0FBQ0QsSUFBTSxZQUFZLEdBQUcscUJBQVcsQ0FBQztJQUMvQixJQUFJLEVBQUUsY0FBYztJQUNwQixZQUFZLEVBQUUscUJBQXFCO0lBQ25DLFFBQVEsRUFBRTtRQUNSLGdCQUFnQixZQUFDLEtBQUssRUFBRSxFQUFXO2dCQUFULE9BQU8sYUFBQTtZQUN2QixJQUFBLE1BQU0sR0FBSyxPQUFPLE9BQVosQ0FBWTtZQUMxQixLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUN4QixDQUFDO0tBQ0Y7Q0FDRixDQUFDLENBQUE7QUFFQSxRQUFBLGdCQUFnQixHQUNkLFlBQVksQ0FBQyxPQUFPLGtCQUFBO0FBQ3hCLGtCQUFlLFlBQVksQ0FBQyxPQUFPLENBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiwgY3JlYXRlU2VsZWN0b3IgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xuaW1wb3J0IEV2ZW50cyBmcm9tICcuLi8uLi9jb21tb24vRXZlbnRzJ1xuaW1wb3J0IHsgSVVzZXJQcm9maWxlIH0gZnJvbSAnLi4vLi4vY29tbW9uL1VzZXJQcm9maWxlJ1xuXG5leHBvcnQgaW50ZXJmYWNlIElXZWVrbHlUaWNrZXRTdGF0ZSB7XG4gIGJvdWdodDogQm9vbGVhbixcbn1cbmNvbnN0IGluaXRXZWVrbHlUaWNrZXRTdGF0ZTogSVdlZWtseVRpY2tldFN0YXRlID0ge1xuICBib3VnaHQ6IGZhbHNlLFxufVxuY29uc3Qgd2Vla2x5VGlja2V0ID0gY3JlYXRlU2xpY2Uoe1xuICBuYW1lOiAnd2Vla2x5VGlja2V0JyxcbiAgaW5pdGlhbFN0YXRlOiBpbml0V2Vla2x5VGlja2V0U3RhdGUsXG4gIHJlZHVjZXJzOiB7XG4gICAgc3luY1dlZWtseVRpY2tldChzdGF0ZSwgeyBwYXlsb2FkIH0pIHtcbiAgICAgIGNvbnN0IHsgYm91Z2h0IH0gPSBwYXlsb2FkXG4gICAgICBzdGF0ZS5ib3VnaHQgPSBib3VnaHQ7XG4gICAgfSxcbiAgfSxcbn0pXG5leHBvcnQgY29uc3Qge1xuICBzeW5jV2Vla2x5VGlja2V0XG59ID0gd2Vla2x5VGlja2V0LmFjdGlvbnNcbmV4cG9ydCBkZWZhdWx0IHdlZWtseVRpY2tldC5yZWR1Y2VyXG4iXX0=
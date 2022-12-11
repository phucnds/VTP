
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/src/features/SliceQuests.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '52a96e8z4JBlLxhfwv64e/v', 'SliceQuests');
// scripts/src/features/SliceQuests.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.syncQuests = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initQuestsState = {
    data: [],
};
var quest = toolkit_1.createSlice({
    name: 'quest',
    initialState: initQuestsState,
    reducers: {
        syncQuests: function (state, _a) {
            var payload = _a.payload;
            state.data = payload;
        },
    },
});
exports.syncQuests = quest.actions.syncQuests;
exports.default = quest.reducer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3NyYy9mZWF0dXJlcy9TbGljZVF1ZXN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0Q0FBNkU7QUFPN0UsSUFBTSxlQUFlLEdBQWlCO0lBQ3BDLElBQUksRUFBRSxFQUFFO0NBQ1QsQ0FBQTtBQUNELElBQU0sS0FBSyxHQUFHLHFCQUFXLENBQUM7SUFDeEIsSUFBSSxFQUFFLE9BQU87SUFDYixZQUFZLEVBQUUsZUFBZTtJQUM3QixRQUFRLEVBQUU7UUFDUixVQUFVLFlBQUMsS0FBSyxFQUFFLEVBQVc7Z0JBQVQsT0FBTyxhQUFBO1lBQ3pCLEtBQUssQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLENBQUM7S0FDRjtDQUNGLENBQUMsQ0FBQTtBQUVBLFFBQUEsVUFBVSxHQUNSLEtBQUssQ0FBQyxPQUFPLFlBQUE7QUFDakIsa0JBQWUsS0FBSyxDQUFDLE9BQU8sQ0FBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlLCBQYXlsb2FkQWN0aW9uLCBjcmVhdGVTZWxlY3RvciB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXG5pbXBvcnQgRXZlbnRzIGZyb20gJy4uLy4uL2NvbW1vbi9FdmVudHMnXG5pbXBvcnQgeyBJVXNlclByb2ZpbGUgfSBmcm9tICcuLi8uLi9jb21tb24vVXNlclByb2ZpbGUnXG5cbmV4cG9ydCBpbnRlcmZhY2UgSVF1ZXN0c1N0YXRlIHtcbiAgZGF0YTogQXJyYXk8UmVjb3JkPGFueSwgYW55Pj4sXG59XG5jb25zdCBpbml0UXVlc3RzU3RhdGU6IElRdWVzdHNTdGF0ZSA9IHtcbiAgZGF0YTogW10sXG59XG5jb25zdCBxdWVzdCA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZTogJ3F1ZXN0JyxcbiAgaW5pdGlhbFN0YXRlOiBpbml0UXVlc3RzU3RhdGUsXG4gIHJlZHVjZXJzOiB7XG4gICAgc3luY1F1ZXN0cyhzdGF0ZSwgeyBwYXlsb2FkIH0pIHtcbiAgICAgIHN0YXRlLmRhdGEgPSBwYXlsb2FkO1xuICAgIH0sXG4gIH0sXG59KVxuZXhwb3J0IGNvbnN0IHtcbiAgc3luY1F1ZXN0c1xufSA9IHF1ZXN0LmFjdGlvbnNcbmV4cG9ydCBkZWZhdWx0IHF1ZXN0LnJlZHVjZXJcbiJdfQ==
"use strict";
cc._RF.push(module, 'f3bf8glTNdBhbDDJRHbatlG', 'store');
// scripts/src/app/store.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var toolkit_1 = require("@reduxjs/toolkit");
var rootReducer_1 = require("./rootReducer");
var store = toolkit_1.configureStore({
    reducer: rootReducer_1.default,
});
exports.default = store;

cc._RF.pop();
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ErrorHandleType, IAPIInterface } from "../app/APIDefine";
export interface IErrorHanle {
    type: ErrorHandleType,
    errorCode: string,
    api: IAPIInterface,
}
export interface IErrorState {
    list: IErrorHanle[],
    currentHandle: IErrorHanle,
}

const initErrorState: IErrorState = {
    list: [],
    currentHandle: undefined
};
const error = createSlice({
    name: 'error',
    initialState: initErrorState,
    reducers: {
        pushError(state, { payload }: PayloadAction<IErrorHanle>) {
            state.list.push(payload);
            let handleMax = state.list[0]
            handleMax = state.list.find(e => e.type == ErrorHandleType.RELOAD)
            if (!handleMax) handleMax = state.list.find(e => e.type == ErrorHandleType.RETRY)
            if (!handleMax) handleMax = state.list.find(e => e.type == ErrorHandleType.CLOSE)
            if (!handleMax) handleMax = state.list.find(e => e.type == ErrorHandleType.BACK_TO_HOME)
            state.currentHandle = handleMax
        },
        refreshError(state) {
            state.list = []
            state.currentHandle = undefined
        }
    }
})

export const { pushError, refreshError } = error.actions;

export default error.reducer;
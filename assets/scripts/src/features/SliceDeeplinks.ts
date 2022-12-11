import * as R from 'ramda'
import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit'
import Events from '../../common/Events'
import { IUserProfile } from '../../common/UserProfile'

export enum EDeeplinkTypes {
  CLOSE_GAME,
  BUY_TURN,
  XAC_THUC_THONG_TIN,
  OPEN_VOUCHER,
  THAM_QUAN_GUI_TIET_KIEM,
  THAM_QUAN_VI_PAY_NOW,
  THAM_QUAN_DAU_TU_SAVE_NOW,
  THAM_QUAN_EASYVAY,
  THAM_QUAN_TIEN_MAT_XOAY_VONG,
  THAM_QUAN_MUA_TRUOC_TRA_SAU,
}

export const DeeplinkTypesToName = {
  [EDeeplinkTypes.CLOSE_GAME]: 'CLOSE_GAME',
  [EDeeplinkTypes.BUY_TURN]: 'BUY_TURN',
  [EDeeplinkTypes.XAC_THUC_THONG_TIN]: 'XAC_THUC_THONG_TIN',
  [EDeeplinkTypes.OPEN_VOUCHER]: 'OPEN_VOUCHER',
  [EDeeplinkTypes.THAM_QUAN_GUI_TIET_KIEM]: 'THAM_QUAN_GUI_TIET_KIEM',
  [EDeeplinkTypes.THAM_QUAN_VI_PAY_NOW]: 'THAM_QUAN_VI_PAY_NOW',
  [EDeeplinkTypes.THAM_QUAN_DAU_TU_SAVE_NOW]: 'THAM_QUAN_DAU_TU_SAVE_NOW',
  [EDeeplinkTypes.THAM_QUAN_EASYVAY]: 'THAM_QUAN_EASYVAY',
  [EDeeplinkTypes.THAM_QUAN_TIEN_MAT_XOAY_VONG]: 'THAM_QUAN_TIEN_MAT_XOAY_VONG',
  [EDeeplinkTypes.THAM_QUAN_MUA_TRUOC_TRA_SAU]: 'THAM_QUAN_MUA_TRUOC_TRA_SAU',
}

export interface IDeeplinksState {
  data: Record<any, any>,
}
const initDeeplinksState: IDeeplinksState = {
  data: {
    [DeeplinkTypesToName[EDeeplinkTypes.CLOSE_GAME]]: 'viettelpay://back',
    [DeeplinkTypesToName[EDeeplinkTypes.BUY_TURN]]: 'viettelpay://paypointtet2022',
    [DeeplinkTypesToName[EDeeplinkTypes.XAC_THUC_THONG_TIN]]: 'viettelpay.onelink.me://action/c=XACTHUCTHONGTINVT&t=WEBVIEW1',
    [DeeplinkTypesToName[EDeeplinkTypes.OPEN_VOUCHER]]: 'viettelpay.onelink.me://action/c=URBOX_SCR&t=URBOX',
    [DeeplinkTypesToName[EDeeplinkTypes.THAM_QUAN_GUI_TIET_KIEM]]: 'viettelpay.onelink.me://action/c=TKBAOVIET&t=FINANCE16',
    [DeeplinkTypesToName[EDeeplinkTypes.THAM_QUAN_VI_PAY_NOW]]: 'viettelpay.onelink.me://action/c=FELOANCRDT&t=LOAN_CRD_FE',
    [DeeplinkTypesToName[EDeeplinkTypes.THAM_QUAN_DAU_TU_SAVE_NOW]]: 'viettelpay.onelink.me://action/c=SAVENOW&t=WEBVIEW1',
    [DeeplinkTypesToName[EDeeplinkTypes.THAM_QUAN_EASYVAY]]: 'https://viettelpay.onelink.me/2dRm/easyvay4',
    [DeeplinkTypesToName[EDeeplinkTypes.THAM_QUAN_TIEN_MAT_XOAY_VONG]]: 'https://viettelpay.onelink.me/2dRm/tmxv01',
    [DeeplinkTypesToName[EDeeplinkTypes.THAM_QUAN_MUA_TRUOC_TRA_SAU]]: 'viettelpay://action/c=AMIGO&t=WEBVIEW1&',
  },
}
const deeplink = createSlice({
  name: 'deeplink',
  initialState: initDeeplinksState,
  reducers: {
    syncDeeplinks(state, { payload }) {
      state.data = {
        ...state.data,
        ...R.reject(R.equals(''))(payload)
      };
    },
  },
})
export const {
  syncDeeplinks
} = deeplink.actions
export default deeplink.reducer

import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit'
import Events from '../../common/Events'
import SoundMgr from '../../common/SoundMgr'
import { IUserProfile } from '../../common/UserProfile'
export enum PAGE_SHOW_EFFECT {
  APPEAR,
  SCALE,
  FADE,
  LEFT,
  RIGHT,
  UP,
  DOWN,
}
export enum EAppPages {
  PageHome = 'PageHome',
  PageRules = 'PageRules',
  PageBuyTurn = 'PageBuyTurn',
  PageInventory = 'PageInventory',
  PageReward = 'PageReward',
  PageSavenow = 'PageSavenow',
  PageWeeklyPrizeHistory = 'PageWeeklyPrizeHistory',
  PagePaynow = 'PagePaynow',
  PageGuiTietKiem = 'PageGuiTietKiem',
  PageEasyvay = 'PageEasyvay',
  PageTienMat = 'PageTienMat',
  PageMuaTruoc = 'PageMuaTruoc',
}
export enum EAppPopups {
  PopupCompleteQuest = 'PopupCompleteQuest',
  PopupConfirmDoQuest = 'PopupConfirmDoQuest',
  PopupDailyLogin = 'PopupDailyLogin',
  PopupNewUserReward = 'PopupNewUserReward',
  PopupError = 'PopupError',
  PopupSpinError = 'PopupSpinError',
  PopupOutOfTicket = 'PopupOutOfTicket',
  PopupBuyTurn = 'PopupBuyTurn',
  PopupBuyWeeklyTicket = 'PopupBuyWeeklyTicket',
  PopupBuyWeeklyTicketSuccess = 'PopupBuyWeeklyTicketSuccess',
  PopupDailySpinCapping = 'PopupDailySpinCapping',
  PopupExitGame = 'PopupExitGame',
  PopupReward = 'PopupReward',
  PopupGoToVoucher = 'PopupGoToVoucher',
  PopupIdleTooLong = 'PopupIdleTooLong',
  PopupLostConnection = 'PopupLostConnection',
  PopupSaveNowOverloaded = 'PopupSaveNowOverloaded',
  PopupBuyTurnSuccess = 'PopupBuyTurnSuccess',
  PopupWeeklyWinner = 'PopupWeeklyWinner',
  PopupUpdateInfo = 'PopupUpdateInfo',
  PopupErrorReload = 'PopupErrorReload',
  PopupSpinSuccess = 'PopupSpinSuccess',
  PopupLeaderboard = 'PopupLeaderboard',
}
export interface IPageWithEffect {
  page: EAppPages
  effect?: PAGE_SHOW_EFFECT
}
export interface IAppState {
  pageStack: EAppPages[]
  currentPage: EAppPages
  effectType: PAGE_SHOW_EFFECT
  tutorial: Boolean
  popups: EAppPopups[]
  popupEffect?: boolean
}
const initAppState: IAppState = {
  pageStack: [EAppPages.PageHome],
  currentPage: EAppPages.PageHome,
  effectType: PAGE_SHOW_EFFECT.APPEAR,
  tutorial: false,
  popups: [],
  popupEffect: false,
}
const app = createSlice({
  name: 'app',
  initialState: initAppState,
  reducers: {
    pushPage(state, { payload }: PayloadAction<EAppPages | IPageWithEffect>) {
      if (state.currentPage != payload) {
        if (typeof payload == 'object') {
          state.pageStack.push(payload.page)
          state.effectType = payload.effect || PAGE_SHOW_EFFECT.APPEAR
        } else {
          state.pageStack.push(payload)
        }
        state.currentPage = state.pageStack[state.pageStack.length - 1]
      }
    },
    popPage(state) {
      state.pageStack.pop()
      state.effectType = PAGE_SHOW_EFFECT.RIGHT
      if (state.pageStack.length <= 0) {
        state.pageStack.push(EAppPages.PageHome)
      }
      state.currentPage = state.pageStack[state.pageStack.length - 1]
    },
    pushPageFromMenu(state, { payload }: PayloadAction<EAppPages>) {
      if (state.currentPage != payload) {
        state.pageStack.push(payload)
        state.currentPage = payload
        state.effectType = PAGE_SHOW_EFFECT.LEFT
      }
    },
    popToPage(state, { payload }: PayloadAction<EAppPages | IPageWithEffect>) {
      if (state.currentPage != payload) {
        let page
        if (typeof payload == 'object') {
          page = payload.page
          state.effectType = payload.effect || PAGE_SHOW_EFFECT.APPEAR
        } else {
          page = payload
        }
        let index = state.pageStack.indexOf(page)
        if (index < 0) index = state.pageStack.indexOf(EAppPages.PageHome)
        if (index >= 0) state.pageStack = state.pageStack.slice(0, index + 1)
        state.currentPage = state.pageStack[state.pageStack.length - 1]
      }
    },
    pushPopup(state, { payload }: PayloadAction<EAppPopups>) {
      SoundMgr.playSfx(SoundMgr.Instance.SFX_POPUP);
      console.log('pushpopup', payload)
      if (
        state.popups.length > 0 &&
        state.popups[state.popups.length - 1] != payload
      ) {
        state.popups.push(payload)
      } else if (state.popups.length == 0) {
        state.popups.push(payload)
      }
    },
    popPopup(state, { payload }: PayloadAction<boolean> = null) {
      if (state.popups.length > 0) {
        if (payload) {
          state.popupEffect = payload
        }
        state.popups.pop()
      }
    },
    removeEffect(state) {
      // state.popupEffect = false
    },
  },
})
export const {
  pushPage,
  popPage,
  pushPageFromMenu,
  popToPage,
  pushPopup,
  popPopup,
  removeEffect,
} = app.actions
export default app.reducer

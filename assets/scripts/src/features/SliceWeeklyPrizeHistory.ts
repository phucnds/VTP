import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit'
import Events from '../../common/Events'
import { IUserProfile } from '../../common/UserProfile'

export interface IWeeklyPrizeHistoryState {
  data: Array<Record<any, any>>,
}
const initWeeklyPrizeHistoryState: IWeeklyPrizeHistoryState = {
  data: [],
}
const weeklyPrizeHistory = createSlice({
  name: 'weeklyPrizeHistory',
  initialState: initWeeklyPrizeHistoryState,
  reducers: {
    syncWeeklyPrizeHistory(state, { payload }) {
      state.data = payload.items;
    },
  },
})
export const {
  syncWeeklyPrizeHistory
} = weeklyPrizeHistory.actions
export default weeklyPrizeHistory.reducer

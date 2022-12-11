import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit'
import Events from '../../common/Events'
import { IUserProfile } from '../../common/UserProfile'

export interface IWeeklyTicketState {
  bought: Boolean,
}
const initWeeklyTicketState: IWeeklyTicketState = {
  bought: false,
}
const weeklyTicket = createSlice({
  name: 'weeklyTicket',
  initialState: initWeeklyTicketState,
  reducers: {
    syncWeeklyTicket(state, { payload }) {
      const { bought } = payload
      state.bought = bought;
    },
  },
})
export const {
  syncWeeklyTicket
} = weeklyTicket.actions
export default weeklyTicket.reducer

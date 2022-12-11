import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit'
import Events from '../../common/Events'
import { IUserProfile } from '../../common/UserProfile'

export interface ILoginState {
  loginStreak: number,
  milestones: Record<any, any>,
}
const initLoginState: ILoginState = {
  loginStreak: 0,
  milestones: {},
}
const login = createSlice({
  name: 'login',
  initialState: initLoginState,
  reducers: {
    syncLoginStreak(state, { payload }) {
      const { loginStreak } = payload;
      state.loginStreak = loginStreak;
    },
    syncLoginMilestones(state, { payload }) {
      state.milestones = payload;
    },
  },
})
export const {
  syncLoginStreak,
  syncLoginMilestones,
} = login.actions
export default login.reducer

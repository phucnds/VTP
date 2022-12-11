import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit'
import Events from '../../common/Events'
import { IUserProfile } from '../../common/UserProfile'

export interface IReward {
  type: string,
  amount: number,
}

export interface IRewardState {
  spinReward: IReward,
}
const initRewardState: IRewardState = {
  spinReward: null,
}
const reward = createSlice({
  name: 'reward',
  initialState: initRewardState,
  reducers: {
    syncReward(state, { payload }) {
      state.spinReward = payload;
    },
  },
})
export const {
  syncReward
} = reward.actions
export default reward.reducer

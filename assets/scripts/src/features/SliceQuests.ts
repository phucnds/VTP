import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit'
import Events from '../../common/Events'
import { IUserProfile } from '../../common/UserProfile'

export interface IQuestsState {
  data: Array<Record<any, any>>,
}
const initQuestsState: IQuestsState = {
  data: [],
}
const quest = createSlice({
  name: 'quest',
  initialState: initQuestsState,
  reducers: {
    syncQuests(state, { payload }) {
      state.data = payload;
    },
  },
})
export const {
  syncQuests
} = quest.actions
export default quest.reducer

import * as R from 'ramda';
import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit'
import Events from '../../common/Events'
import { IUserProfile } from '../../common/UserProfile'

export interface IInventoryState {
  rewards: Array<Record<any, any>>,
  tickets: Array<Record<any, any>>,
}
const initInventoryState: IInventoryState = {
  rewards: [],
  tickets: [],
}
const inventory = createSlice({
  name: 'inventory',
  initialState: initInventoryState,
  reducers: {
    syncInventory(state, { payload }) {
      state.rewards = payload.items;
    },
    resetInventory(state, { }) {
      state.rewards = [];
    },
    syncTickets(state, { payload }) {
      state.tickets = payload.items;
    },
    resetTickets(state, { }) {
      state.tickets = [];
    }
  },
})
export const {
  syncInventory,
  resetInventory,
  syncTickets,
  resetTickets,
} = inventory.actions
export default inventory.reducer

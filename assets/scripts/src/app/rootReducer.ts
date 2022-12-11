import { combineReducers } from '@reduxjs/toolkit'
import appReducer from '../features/SliceApp'
import loginReducer from '../features/SliceLogin'
import userReducer from '../features/SliceUser'
import questsReducer from '../features/SliceQuests'
import deeplinkReducer from '../features/SliceDeeplinks'
import rewardReducer from '../features/SliceReward'
import weeklyTicketReducer from '../features/SliceWeeklyTicket'
import errorReducer from '../features/SliceError'
import inventoryReducer from '../features/SliceInventory'
import weeklyPrizeHistoryReducer from '../features/SliceWeeklyPrizeHistory'

const rootReducer = combineReducers({
    app: appReducer,
    login: loginReducer,
    user: userReducer,
    quests: questsReducer,
    deeplinks: deeplinkReducer,
    reward: rewardReducer,
    weeklyTicket: weeklyTicketReducer,
    error: errorReducer,
    inventory: inventoryReducer,
    weeklyPrizeHistory: weeklyPrizeHistoryReducer,
})
export default rootReducer

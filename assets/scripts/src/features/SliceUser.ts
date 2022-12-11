import { ELOMessage, MsgUpdateAvatar } from "@elofun/elo-services-myid-v2";
import { EMsgTypes } from "@elofun/elo-services-myid-v2/EMsgTypes";
import { createSlice, PayloadAction, createSelector } from "@reduxjs/toolkit";
import Events from "../../common/Events";
import { EUserProfileEventTypes, IUserProfile, userProfile } from "../../common/UserProfile";
import store from "../app/store";
import { Buffer } from 'buffer/';
import wsgw from "../app/wsgw";

export interface IExchangeGreenCash {
    oldCash: number,
    voucherCode: string,
}
export interface IUserState extends IUserProfile {
    accumulatedCoinBalance: number;
    isLogged: Boolean;
    gameEvents: Array<number>,
    claimGreenCash?: IExchangeGreenCash,
    dailyReward?: any,
    dayPoint: number,
    dayRank: number,
    monthPoint: number,
    monthRank: number,
    globalRank: number,
    globalPoint: number,
    customerType: string,
    verifiedUser: boolean,
    isNewUser: boolean,
    customerSourceLinked: boolean,
}
export const initUserState: IUserState = {
    userId: "",
    avatar: 'n/a',
    nickName: 'n/a',
    coinBalance: 0,
    accumulatedCoinBalance: 0,
    isLogged: false,
    isVip: false,
    credential: 'n/a',
    spinTicketBalance: 0,
    greenCashBalance: 0,
    isRedeemInviteCode: false,
    omsToken: '',
    wheelBalance: 0,
    gameEvents: [],
    claimGreenCash: undefined,
    starBalance: 0,
    dayPoint: 0,
    dayRank: 1,
    monthPoint: 0,
    monthRank: 1,
    globalPoint: 0,
    globalRank: 1,
    customerType: '',
    verifiedUser: false,
    isNewUser: false,
    customerSourceLinked: false,
};
const user = createSlice({
    name: 'user',
    initialState: initUserState,
    reducers: {
        testUser(state, { payload }: PayloadAction<string>) {
            state.nickName = payload;
        },
        syncDailyReward(state, { payload }) {
            state.dailyReward = payload
        },
        selectAvatar(state, { payload }: PayloadAction<string>) {
            if (payload !== state.avatar) {
                // const msg = ELOMessage.get<MsgUpdateAvatar>(
                //     EMsgTypes.MSG_UPDATE_AVATAR
                // );
                // msg.url = Buffer.from(payload);
                // eloServices.send(msg);
                state.avatar = payload
            }
        },
        syncProfile(state, { payload }: PayloadAction<any>) {
            return {
                ...state,
                ...payload,
                nickName: payload.nickName ? payload.nickName.replace(/^\+?(84|0)/g, '0') : ''
            }
        },
        syncBalances(state, { payload }: PayloadAction<{ coinBalance: number, spinTicketBalance: number }>) {
            return {
                ...state,
                ...payload,
            }
        },
        syncCoins(state, { payload }: PayloadAction<number>) {
            state.coinBalance = payload
        },
        syncStars(state, { payload }: PayloadAction<number>) {
            state.starBalance = payload
        },
        exchangeGreenCash(state, { payload }: PayloadAction<IExchangeGreenCash>) {
            state.claimGreenCash = payload
        },
        claimGreenCash(state) {
            state.claimGreenCash = undefined
        },
        syncRegisterEvent(state, { payload }: PayloadAction<Array<number>>) {
            for (let game of payload) {
                if (!state.gameEvents.includes(game)) state.gameEvents.push(game)
            }
        },
        syncDayRank(state, { payload }: PayloadAction<{ rank: number, point: number }>) {
            const { point, rank } = payload
            state.dayRank = rank;
            state.dayPoint = point;
        },
        syncMonthRank(state, { payload }: PayloadAction<{ rank: number, point: number }>) {
            const { point, rank } = payload
            state.monthRank = rank;
            state.monthPoint = point;
        },
        syncGlobalRank(state, { payload }: PayloadAction<{ rank: number, point: number }>) {
            const { point, rank } = payload
            state.globalRank = rank;
            state.globalPoint = point;
        },
    }
})

export const { testUser, syncProfile, selectAvatar,
    syncRegisterEvent, exchangeGreenCash, claimGreenCash,
    syncDailyReward, syncBalances,
    syncCoins, syncStars, syncDayRank, syncMonthRank, syncGlobalRank
} = user.actions;
export default user.reducer;
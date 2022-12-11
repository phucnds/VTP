let n = 0;
export enum ErrorHandleType {
    NOTHING = "NOTHING",
    CLOSE = "CLOSE",
    RETRY = `RETRY`,
    RELOAD = `RELOAD`,
    BACK_TO_HOME = `BACK_TO_HOME`,
}
export interface IAPIInterface {
    service: string,
    api: string,
    code: number,
    errorHandleType?: ErrorHandleType
}
const createApiDefine = (service: string, api: string, errorHandleType: ErrorHandleType) => {
    // return { errorHandleType: ErrorHandleType.NOTHING }
    return { service, api, code: ++n, errorHandleType }
}
export enum apis {
    getProfile = 'getProfile',
    getBalances = 'getBalances',
    claimLoginReward = 'claimLoginReward',
    claimNewUserRewards = 'claimNewUserRewards',
    bookRewards = 'bookRewards',
    claimReward = 'claimReward',
    getMissionList = 'getMissionList',
    exchangeCoin = 'exchangeCoin',
    checkWeeklyTicket = 'checkWeeklyTicket',
    getAllRewardsHistory = 'getAllRewardsHistory',
    getTicketsHistory = 'getTicketsHistory',
    getCoinWinnerList = 'getCoinWinnerList',
    hitSaveNowButton = 'hitSaveNowButton',
    track = 'track',
    userInteract = 'userInteract',
    checkRewardPopup = 'checkRewardPopup',
    doneShowingRewardPopup = 'doneShowingRewardPopup',
    getDeeplinks = 'getDeeplinks',
    getLoginMilestones = 'getLoginMilestones',
}

const APIDefine = {
    getProfile: createApiDefine("auth", "me", ErrorHandleType.NOTHING), // 01
    getBalances: createApiDefine("game", "getBalances", ErrorHandleType.NOTHING), // 02
    claimLoginReward: createApiDefine("game", "claimLoginReward", ErrorHandleType.NOTHING), // 03
    claimNewUserRewards: createApiDefine("game", "claimNewUserRewards", ErrorHandleType.NOTHING), // 04
    bookRewards: createApiDefine("game", "bookAndClaimReward", ErrorHandleType.NOTHING), // 05
    claimReward: createApiDefine("game", "claimReward", ErrorHandleType.NOTHING), // 06
    getMissionList: createApiDefine("game", "getMissionList", ErrorHandleType.NOTHING), // 07
    exchangeCoin: createApiDefine("game", "exchangeCoin", ErrorHandleType.NOTHING), // 08
    checkWeeklyTicket: createApiDefine("game", "checkWeeklyVoucher", ErrorHandleType.NOTHING), // 09
    getAllRewardsHistory: createApiDefine("game", "getAllRewardsHistory", ErrorHandleType.NOTHING), // 10
    getTicketsHistory: createApiDefine("game", "getTicketsHistory", ErrorHandleType.NOTHING), // 11
    getCoinWinnerList: createApiDefine("game", "getCoinWinnerList", ErrorHandleType.NOTHING), // 12
    hitSaveNowButton: createApiDefine("game", "hitSaveNowButton", ErrorHandleType.NOTHING), // 13
    track: createApiDefine("game", "track", ErrorHandleType.NOTHING), // 14
    userInteract: createApiDefine("game", "userInteract", ErrorHandleType.NOTHING), // 15
    checkRewardPopup: createApiDefine("game", "checkRewardPopup", ErrorHandleType.NOTHING), // 16
    doneShowingRewardPopup: createApiDefine("game", "doneShowingRewardPopup", ErrorHandleType.NOTHING), // 17
    getDeeplinks: createApiDefine("game", "getDeeplinks", ErrorHandleType.NOTHING), // 18
    getLoginMilestones: createApiDefine("game", "getLoginMilestones", ErrorHandleType.NOTHING), // 19
}
export default APIDefine

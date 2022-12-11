import R = require("ramda");
import APIDefine from "../app/APIDefine";
import wsgw from "../app/wsgw";
import { RewardPopupsMgr } from "../game/RewardPopupsMgr";

export const checkRewardPopup = () => {
    wsgw.userRequest(APIDefine.checkRewardPopup, {}, (e) => {
        const { data } = e;
        RewardPopupsMgr.Instance.setData(data);
        RewardPopupsMgr.Instance.showPopup();
        wsgw.userRequest(APIDefine.doneShowingRewardPopup, {
            ids: R.map(R.prop('id'), data)
        }, (e) => { }, console.error);
    }, console.error);
}
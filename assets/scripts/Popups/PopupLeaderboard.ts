// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import * as R from 'ramda'
import SoundMgr from "../common/SoundMgr";
import { Missions } from '../components/CompQuestsContainer';
import connect from "../src/app/connect";
import store, { AppDispatch, RootState } from "../src/app/store";
import { EAppPages, EAppPopups, IPageWithEffect, popPopup, pushPage, pushPopup } from "../src/features/SliceApp";
import { DeeplinkTypesToName, EDeeplinkTypes } from '../src/features/SliceDeeplinks';
import Helper from "../utils/Helper";
import Popup from "./Popup";
import PopupUpdateInfo from './PopupUpdateInfo';


const { ccclass, property } = cc._decorator;

export class PopupLeaderboard extends Popup {
    actions: any
    props: any
}

const mapStateToProps = (state: RootState) => ({
})
const mapDispatchToAction = (dispatch: AppDispatch) => ({
    pushPage: (payload: EAppPages | IPageWithEffect) =>
        dispatch(pushPage(payload)),
    popPopup: () => dispatch(popPopup()),
    pushPopup: (payload: EAppPopups) => dispatch(pushPopup(payload)),
})
export default connect(mapStateToProps, mapDispatchToAction)(PopupLeaderboard)

// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import * as R from 'ramda'
import FrameMgr from '../../common/FrameMgr';
import connect from "../app/connect";
import { RootState, AppDispatch } from "../app/store";
import { EAppPages, IPageWithEffect, pushPage, popPage, EAppPopups, pushPopup } from "../features/SliceApp";

const { ccclass, property } = cc._decorator;

export class LoginProgressBar extends cc.Component {
    actions: any;
    props: any

    @property(cc.RichText)
    descriptionTxt: cc.RichText = null;
    @property(cc.Sprite)
    icon: cc.Sprite = null;
    @property(cc.ProgressBar)
    progressBar: cc.ProgressBar = null;

    onLoad() {
        this.onStateChange()
    }

    onStateChange() {
        const loginStreak = R.prop('loginStreak', this.props.login)
        const milestones = R.prop('milestones', this.props.login)

        const keys = R.keys(milestones);
        const values = R.values(milestones);
        const reachedMilestone = R.pipe(
            R.values,
            R.findLastIndex((milestone: number) => Number(loginStreak) - 1 >= milestone),
            (i) => keys[i]?.toString(),
        )(milestones || {})
        const level = R.pipe(
            R.split('_'),
            R.last,
            (levelStr: String) => {
                const level = Number(levelStr);
                return level <= 5 ? level : 5;
            },
        )(reachedMilestone || '')

        if (loginStreak <= 0) {
            this.icon.node.active = false;
        } else if (loginStreak < R.last(values)) {
            const expToLevelUp = Number(values[level]) - Number(values[level - 1]);
            this.progressBar.progress = (loginStreak - values[level - 1]) / expToLevelUp;
            this.icon.node.active = true;
        } else {
            this.progressBar.progress = 1;
            this.icon.node.active = true;
        }

        this.descriptionTxt.string = R.replace('%s', loginStreak, '<color=#ffffff>Chuỗi đăng nhập </c><color=#FFE02D>%s</color><color=#ffffff> ngày</color>');
        this.icon.spriteFrame = level > 0 && FrameMgr.Instance[`LOGIN_LEVEL_${level}`]
    }
}

const mapStateToProps = (state: RootState) => ({
    login: state.login
})
const mapDispatchToAction = (dispatch: AppDispatch) => ({
    pushPage: (payload: EAppPages | IPageWithEffect) =>
        dispatch(pushPage(payload)),
    popPage: () => dispatch(popPage()),
    pushPopup: (payload: EAppPopups) => dispatch(pushPopup(payload)),
})
export default connect(mapStateToProps, mapDispatchToAction)(LoginProgressBar)

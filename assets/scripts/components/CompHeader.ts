import FrameMgr from "../common/FrameMgr";
import SoundMgr from "../common/SoundMgr";
import { PageHome } from "../Pages/PageHome";
import connect from "../src/app/connect";
import store, { AppDispatch, RootState } from "../src/app/store";
import { EAppPages, EAppPopups, IPageWithEffect, popPage, pushPage, pushPopup } from "../src/features/SliceApp";
import Helper from "../utils/Helper";

const { ccclass, property, executeInEditMode } = cc._decorator;

export class CompHeader extends cc.Component {
    actions: any;
    props: any

    @property(cc.Node)
    public btnSound: cc.Node = null;
    @property(cc.Sprite)
    public btnSoundIcon: cc.Sprite = null;
    @property(cc.Node)
    public btnBack: cc.Node = null;

    onLoad() {
        const isMute = localStorage.getItem('mute');
        // SoundMgr.setMute(isMute === 'true');
        // this.btnSound.getComponent(cc.Button).interactable = isMute === 'false'
        this.btnSoundIcon.spriteFrame = isMute === 'true' ? FrameMgr.Instance.ICON_SOUND_OFF : FrameMgr.Instance.ICON_SOUND

        this.btnBack.on(cc.Node.EventType.TOUCH_END, () => {
            SoundMgr.playSfx(SoundMgr.Instance.SFX_BUTTON);
            // store.dispatch(pushPopup(EAppPopups.PopupExitGame));

            if ((<any>window).ReactNativeWebView) {
                (<any>window).ReactNativeWebView.postMessage('ON_EXIT_GAME', '*')
            } else {
                window.postMessage('ON_EXIT_GAME', '*')
            }
        });

        this.btnSound.on(cc.Node.EventType.TOUCH_END, () => {
            SoundMgr.playSfx(SoundMgr.Instance.SFX_BUTTON);
            const muteSetting = localStorage.getItem('mute');
            const newMuteSetting = muteSetting === 'false';
            SoundMgr.setMute(newMuteSetting);
            // this.btnSound.getComponent(cc.Button).interactable = !newMuteSetting;
            this.btnSoundIcon.spriteFrame = newMuteSetting ? FrameMgr.Instance.ICON_SOUND_OFF : FrameMgr.Instance.ICON_SOUND
            localStorage.setItem('mute', newMuteSetting ? 'true' : 'false');
        });
    }

    protected update(dt: number): void {
        const isMute = localStorage.getItem('mute');
        SoundMgr.setMute(isMute === 'true');
    }
}

const mapStateToProps = (state: RootState) => ({
    user: state.user,
})
const mapDispatchToAction = (dispatch: AppDispatch) => ({
    pushPage: (payload: EAppPages | IPageWithEffect) =>
        dispatch(pushPage(payload)),
    popPage: () => dispatch(popPage()),
    pushPopup: (payload: EAppPopups) => dispatch(pushPopup(payload)),
})
export default connect(mapStateToProps, mapDispatchToAction)(CompHeader)

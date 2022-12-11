import SoundMgr from "../common/SoundMgr";
import connect from "../src/app/connect";
import { AppDispatch, RootState } from "../src/app/store";
import { EAppPopups, removeEffect } from "../src/features/SliceApp";
import Helper from "../utils/Helper";
import Popup from "./Popup";

const { ccclass, property } = cc._decorator;

export class PopupManager extends Popup {

    actions: any;
    props: RootState;
    @property(cc.Node) private PopupBackground: cc.Node = null;
    @property(cc.Node) private PopupContainer: cc.Node = null;
    @property(cc.Node) private ShownPopups: cc.Node = null;
    @property(cc.Prefab) private PopupPrefabs: Array<cc.Prefab> = [];

    private mShowCallback;
    private mHideCallback;
    private popups: EAppPopups[] = []
    static Instance: PopupManager;
    static push(popupName: EAppPopups, useBg = true) {
        // const SoundInstance = SoundMgr.Instance
        const instance = this.Instance;
        const popup = instance.PopupContainer.getChildByName(EAppPopups[popupName]);
        if (popup) {
            // SoundMgr.playSfx(SoundInstance.SFX_POPUP);
            instance.usePopup(popup);
            instance.animate(true, popup);
            instance.PopupBackground.active = useBg;
        }
    }

    static pop(isFade = false) {
        const instance = this.Instance;
        if (instance.ShownPopups.children.length > 0) {
            const popup = instance.ShownPopups.children[instance.ShownPopups.children.length - 1];
            instance.PopupBackground.active = instance.ShownPopups.children.length - 1 > 0;
            instance.animate(false, popup, isFade);
        }
    }

    static hide(popupName: EAppPopups) {
        const instance = this.Instance;
        const popup = instance.ShownPopups.getChildByName(EAppPopups[popupName]);
        if (popup) {
            instance.animate(false, popup);
        }
    }

    static getPopup(popupName: EAppPopups) {
        const instance = this.Instance;
        let popup = instance.PopupContainer.getChildByName(EAppPopups[popupName]);
        if (popup) {
            return popup;
        }
        return instance.ShownPopups.getChildByName(EAppPopups[popupName]);
    }
    private animate(isShow: boolean, popup: cc.Node, isFade: boolean = false) {
        if (!isShow) {
            let randomEasing = ['bounceOut', 'quadOut', 'backOut']
            let easing = randomEasing[Helper.RandInt(0, randomEasing.length - 1)]
            if (isFade) {
                this.returnPopup(popup);
                return;
            }
            cc.tween(popup)
                .to(0.3, { scale: 0, }, { easing: 'quadIn' })
                .call(() => {
                    this.returnPopup(popup);
                    // this.PopupBackground.active = this.ShownPopups.children.length > 0;
                })
                .start()
        } else {
            let randomEasing = ['bounceOut', 'quadOut', 'backOut']
            let easing = randomEasing[Helper.RandInt(0, randomEasing.length - 1)]
            popup.setScale(0)
            cc.tween(popup)
                .by(0.3, { scale: 1, }, { easing: easing })
                .start()
        }
    }

    private usePopup(popup: cc.Node) {
        this.PopupContainer.removeChild(popup, false);
        this.ShownPopups.addChild(popup);
    }

    private returnPopup(popup: cc.Node) {
        this.ShownPopups.removeChild(popup, false);
        this.PopupContainer.addChild(popup);
    }

    onLoad() {
        PopupManager.Instance = this;
        for (let i = 0; i < this.PopupPrefabs.length; i++) {
            this.PopupContainer.addChild(cc.instantiate(this.PopupPrefabs[i]));
        }
    }
    onStateChange() {
        if (this.popups.length < this.props.app.popups.length) {
            PopupManager.push(this.props.app.popups[this.props.app.popups.length - 1])
        }
        else if (this.popups.length > this.props.app.popups.length) {
            PopupManager.pop(this.props.app.popupEffect)
            if (this.props.app.popupEffect) {
                this.actions.removeEffect();
            }
        }
        this.popups = [...this.props.app.popups]
    }
}
const mapStateToProps = (state: RootState) => ({
    app: state.app
})
const mapDispatchToAction = (dispatch: AppDispatch) => ({
    removeEffect: () => dispatch(removeEffect())
})
export default connect(mapStateToProps, mapDispatchToAction)(PopupManager)
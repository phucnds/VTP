import store from "../src/app/store";
import { popPage } from "../src/features/SliceApp";
import Helper from "../utils/Helper";

const { ccclass, property, executeInEditMode } = cc._decorator;

@ccclass
export default class CompHeaderSimple extends cc.Component {

    @property(cc.Node)
    public btnBack: cc.Node = null;

    onLoad() {
        Helper.registerButtonEvent(this.btnBack, () => store.dispatch(popPage()));
    }
}

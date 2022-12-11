
// setTimeout(() => {
//     connectWsgw(SERVICE_HOST).then((wsgw) => {
//       // current userId
//     });

import { ErrorHandleType } from "../src/app/APIDefine";
import store from "../src/app/store";
import wsgw from "../src/app/wsgw";
import { EAppPopups, pushPopup } from "../src/features/SliceApp";
import { IErrorHanle, pushError } from "../src/features/SliceError";

// let closePID: any;
// const scheduleClose = () => {
//     clearTimeout(closePID);
//     closePID = setTimeout(() => {
//         window.location.href = 'mytel://back';
//     }, 600000);
// };
// scheduleClose();
// window.addEventListener('click', scheduleClose);

const { ccclass, property } = cc._decorator;

@ccclass
export default class Global extends cc.Component {
    onLoad() {
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        const errorHanling = (err: IErrorHanle) => {
            store.dispatch(pushError(err))
            const { type } = err
            if (type == ErrorHandleType.NOTHING) return;

            setTimeout(() => {
                store.dispatch(pushPopup(EAppPopups.PopupError))
            }, 300);
        }
        wsgw.on("ELO_ERROR", errorHanling);

        // cc.dynamicAtlasManager.showDebug(true);

    }

}
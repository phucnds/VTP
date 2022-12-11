// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import internal = require("stream");
import store from "../app/store";
import { EAppPopups, pushPopup } from "../features/SliceApp";

const { ccclass, property } = cc._decorator;

@ccclass
export default class ConnectionDectect extends cc.Component {

    createCORSRequest(method, url) {
        var xhr = new XMLHttpRequest();
        if ("withCredentials" in xhr) {

            // Check if the XMLHttpRequest object has a "withCredentials" property.
            // "withCredentials" only exists on XMLHTTPRequest2 objects.
            xhr.open(method, url, true);

        } else {

            // Otherwise, CORS is not supported by the browser.
            xhr = null;

        }
        return xhr;
    }

    onLoad() {
        setInterval(() => {
            var oReq = this.createCORSRequest('HEAD', '')
            oReq.setRequestHeader("Cache-Control", "no-cache");
            oReq.addEventListener('error', () => {
                const { status } = oReq;
                store.dispatch(pushPopup(EAppPopups.PopupLostConnection))
            });
            oReq.send();
        }, 5000);
    }

}

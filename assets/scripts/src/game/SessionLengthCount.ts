// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import APIDefine from "../app/APIDefine";
import wsgw from "../app/wsgw";
import TrackingDefine from "../common/TrackingDefine";

const { ccclass, property } = cc._decorator;

@ccclass
export default class SessionLengthCount extends cc.Component {

    private sessionLength = 0;

    onLoad() {
        const lastSessionLength = localStorage.getItem('lastSessionLength');
        if (lastSessionLength && lastSessionLength !== 'null') {
            wsgw.userRequest(
                APIDefine.track,
                {
                    eventName: TrackingDefine.TrackingEvents.SESSION_LENGTH,
                    data: lastSessionLength
                },
                (e) => { console.log(`TRACKING - ${TrackingDefine.TrackingEvents.SESSION_LENGTH} - ${lastSessionLength}`) },
                console.error
            );
        }

        window.addEventListener('beforeunload', async (event) => {
            localStorage.setItem('lastSessionLength', this.sessionLength.toString());
        });
    }

    update(dt: number) {
        this.sessionLength += dt;
    }
}

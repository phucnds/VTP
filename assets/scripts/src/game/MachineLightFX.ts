import Singleton from "../../utils/Singleton";
import SingletonNode from "../../utils/SingletonNode";

const { ccclass, property } = cc._decorator;

@ccclass
export default class MachineLightFX extends SingletonNode<MachineLightFX>() {
    blink(speed: number) {
        for (let i = 0; i < this.node.childrenCount; i++) {
            const light = this.node.children[i];
            light.scale = 0;
            cc.tween(light)
                .delay(i / speed)
                .to(
                    10 / speed,
                    {
                        scale: 1.7
                    },
                    { easing: 'quadIn' }
                )
                .to(
                    10 / speed,
                    {
                        scale: 0
                    },
                    { easing: 'quadIn' }
                )
                .start();
        }
    }
}

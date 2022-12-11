import store from "./src/app/store";

const { ccclass, property } = cc._decorator;

cc.macro.ENABLE_WEBGL_ANTIALIAS = true;

// cc.macro.CLEANUP_IMAGE_CACHE = false;
// cc.dynamicAtlasManager.enabled = true;
// cc.dynamicAtlasManager.maxFrameSize = 512;
// window.dynamicAtlast = cc.dynamicAtlasManager
@ccclass
export default class Loader extends cc.Component {
    @property(cc.Prefab) private SystemPrefabs: Array<cc.Prefab> = [];
    @property(cc.Prefab) private PlaceHolderPrefabs: Array<cc.Prefab> = [];

    onLoad() {
        // cc.game.setFrameRate(60);
        for (let i = 0; i < this.SystemPrefabs.length; i++) {
            this.SystemPrefabs[i] && this.node.addChild(cc.instantiate(this.SystemPrefabs[i]));
        }
        for (let i = 0; i < this.PlaceHolderPrefabs.length; i++) {
            this.PlaceHolderPrefabs[i] && this.node.addChild(cc.instantiate(this.PlaceHolderPrefabs[i]));
        }
    }
}
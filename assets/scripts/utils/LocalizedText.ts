const { ccclass, property, executeInEditMode } = cc._decorator;
import Events from "../common/Events";
import Localization, { LOCALIZATION_ENUM, LOCALIZATION_KEYS, TextTransforms } from "../common/Localization";

interface IKeyParams {
    [key : string] : string
}
@ccclass
// @executeInEditMode
export default class LocalizedText extends cc.Component {
    // @property({type: LOCALIZATION_ENUM})
    private KeyIndex: number = 0;
    @property({ type: TextTransforms }) private TextTransform: number = 0;
    @property(cc.String)
    private Key: string = '';

    @property(cc.Vec2)
    fontSizeEn: cc.Vec2 = new cc.Vec2(0, 0);
    @property(cc.Vec2)
    fontSizeVi: cc.Vec2 = new cc.Vec2(0, 0);

    private mDefaultString: string;
    private keyParams : IKeyParams = null

    onLoad() {
        //runtime only
        try {
            Events.registerEvent(Events.EventLanguageChanged, this.localize.bind(this));
        } catch (e) { }

        this.mDefaultString = this.node.getComponent(cc.Label).string;
        // this.getComponent(cc.Label).cacheMode = cc.Label.CacheMode.BITMAP
    }
    replaceKeyParam(arg : IKeyParams)
    {
        this.keyParams = arg
        this.localize();
    }
    setKey(key : string)
    {
        this.Key = key;
        this.onEnable();
    }
    onEnable() {
        //include edit mode
        this.Key = this.Key.trim().toUpperCase();
        if (!this.Key) {
            if (this.KeyIndex != 0) {
                this.Key = LOCALIZATION_KEYS[this.KeyIndex] || '';
            }
        }
        else if (this.Key != LOCALIZATION_KEYS[this.KeyIndex]) {
            const index = LOCALIZATION_KEYS.indexOf(this.Key);
            this.KeyIndex = index != -1 ? index : 0;
            this.Key = LOCALIZATION_KEYS[this.KeyIndex] || '';
        }

        this.localize();
    }
    private replaceText(str : string)
    {
        if(!this.keyParams) return str
        let string = str
        let key = Object.keys(this.keyParams)[0]
        string = string.split(key).join(this.keyParams[key])

        // string = string.replace(key, this.keyParams[key])
        // this.keyParams.map(e => {
        // })
        return string
    }

    private localize() {
        let string = Localization.GetLocalizedString(LOCALIZATION_KEYS[this.KeyIndex]) || this.mDefaultString;
        string = this.replaceText(string);
        switch (this.TextTransform) {
            case TextTransforms.None:
                break;
            case TextTransforms.Upper:
                string = string.toUpperCase();
                break;
            case TextTransforms.Lower:
                string = string.toLowerCase();
                break;
        }
        let txt = this.node.getComponent(cc.Label)
        txt.string = string;
        // if(Manager.Instance)
        // {
        if ((window as any).language == "en" && this.fontSizeEn && this.fontSizeEn.x != 0) {
            txt.fontSize = this.fontSizeEn.x;
            if (this.fontSizeEn.y != 0) txt.lineHeight = this.fontSizeEn.y;
        }
        else if ((window as any).language == "vi" && this.fontSizeVi && this.fontSizeVi.x != 0) {
            txt.fontSize = this.fontSizeVi.x;
            if (this.fontSizeVi.y != 0) txt.lineHeight = this.fontSizeVi.y;
        }
        // }
    }
}

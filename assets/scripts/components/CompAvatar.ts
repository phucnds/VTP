import { getCDN } from "../src/common/utils";

const { ccclass, property, executeInEditMode } = cc._decorator;

@ccclass // <= remove it if using connect
@executeInEditMode
export default class CompAvatar extends cc.Component
{

    @property(Number) customSize: number = 0
    private avatarURL: string = "";
    // onLoad () {}

    start()
    {
        if (this.customSize > 0)
        {
            this.changeSize()
        }
    }
    changeSize()
    {
        this.node.setScale(this.customSize / this.node.width)
    }
    onEnable()
    {
        let avatar = cc.find("avt", this.node) || cc.find("Mask/avt", this.node)
        avatar && avatar.setContentSize(80, 80);
    }
    updateAvatar(url: string | cc.SpriteFrame, isDebug = false)
    {
        // url = "https://elo-games.elofun.com/avatars/+(119).png"
        if (typeof url == "string")
        {
            if (url != this.avatarURL && url.startsWith("http"))
            {
                this.avatarURL = getCDN(url)
                let avatar = cc.find("avt", this.node) || cc.find("Mask/avt", this.node)
                let avtSprite = avatar.getComponent(cc.Sprite)
                if (avatar && avtSprite)
                {
                    cc.assetManager.loadRemote(getCDN(url), (err: any, tex: any) =>
                    {
                        if (avatar && !err)
                        {
                            avatar.setScale(1)
                            avtSprite.spriteFrame = err ? null : new cc.SpriteFrame(tex);
                            avatar.setContentSize(80, 80);
                        }
                        else
                        {
                            console.error(err)
                        }
                    });
                }
            }
        }
        else
        {
            let avatar = cc.find("avt", this.node) || cc.find("Mask/avt", this.node)
            let avtSprite = avatar.getComponent(cc.Sprite)
            if (avatar && avtSprite)
            {
                avtSprite.spriteFrame = url
                setTimeout(() => {
                    avatar.setContentSize(80, 80);
                }, 200);
            }
        }
    }
    activeOpponentAvatar(isActive: boolean)
    {
        let avatar = cc.find("avt", this.node) || cc.find("Mask/avt", this.node)
        let question = cc.find("icon-question", this.node) || cc.find("Mask/icon-question", this.node)

        avatar.active = isActive
        if (question) question.active = !isActive
    }
    getAvtURL()
    {
        return this.avatarURL
    }
    // update (dt) {}
}


const { ccclass, property } = cc._decorator

const ResizeSpriteModes = cc.Enum({
  WIDTH: 0,
  HEIGHT: 1,
  BOTH: 2,
})

@ccclass
export default class ResizeSprite extends cc.Component {
  @property({ type: ResizeSpriteModes }) private MatchMode: number = 0
  @property(cc.Boolean) private UseUpdateMethod: boolean = false

  private mInitWidth: number
  private mInitHeight: number
  private mInitSpriteWidth: number
  private mInitSpriteHeight: number

  onLoad() {
    this.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.CUSTOM
    this.mInitWidth = this.node.width
    this.mInitHeight = this.node.height
    const rect = this.getComponent(cc.Sprite).spriteFrame.getRect()
    this.mInitSpriteWidth = rect.width
    this.mInitSpriteHeight = rect.height
  }

  onEnable() {
    this.resize()
  }

  update(dt) {
    if (this.UseUpdateMethod) {
      this.resize()
    }
  }

  private resize() {
    if (!this.getComponent(cc.Sprite).spriteFrame) {
      return
    }

    const rect = this.getComponent(cc.Sprite).spriteFrame.getRect()
    let width = this.mInitWidth
    let height = this.mInitHeight

    switch (this.MatchMode) {
      case ResizeSpriteModes.WIDTH:
        width = this.mInitWidth
        height = width * (rect.height / rect.width)
        if (height > this.mInitSpriteHeight) {
          height = this.mInitSpriteHeight
          width = height * (rect.width / rect.height)
        }
        break
      case ResizeSpriteModes.HEIGHT:
        height = this.mInitHeight
        width = height * (rect.width / rect.height)
        if (width > this.mInitSpriteWidth) {
          width = this.mInitSpriteWidth
          height = width * (rect.height / rect.width)
        }
        break
      case ResizeSpriteModes.BOTH:
        break

    }

    this.node.width = width
    this.node.height = height
  }
}

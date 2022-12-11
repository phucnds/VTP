import SingletonNode from "../utils/SingletonNode";

const { ccclass, property } = cc._decorator;

@ccclass
export default class SoundMgr extends SingletonNode<SoundMgr>()
{
  @property(cc.AudioClip) SFX_BUTTON: cc.AudioClip = null;
  @property(cc.AudioClip) SFX_POPUP: cc.AudioClip = null;
  @property(cc.AudioClip) SFX_SHOW_NUMBER: cc.AudioClip = null;
  @property(cc.AudioClip) SFX_SPINNING: cc.AudioClip = null;
  @property(cc.AudioClip) SFX_SPIN_TAP: cc.AudioClip = null;
  @property(cc.AudioClip) BGM: cc.AudioClip = null;

  static get IsMute() { return cc.audioEngine.getMusicVolume() == 0; }
  static get IsMusicPlaying() { return cc.audioEngine.isMusicPlaying(); }

  static playMusic(clip: cc.AudioClip, loop: boolean = true) {
    if (SoundMgr.IsMusicPlaying) return;
    cc.audioEngine.playMusic(clip, loop);
  }

  static playSfx(clip: cc.AudioClip, loop: boolean = false) {
    cc.audioEngine.playEffect(clip, loop);
  }

  static pauseMusic() {
    if (!this.Instance.BGM) return;
    cc.audioEngine.pauseMusic();
  }

  static pauseAll() {
    cc.audioEngine.pauseAll();
  }

  static stopMusic() {
    cc.audioEngine.stopMusic();
  }

  static stopAllSfx() {
    cc.audioEngine.stopAllEffects();
  }

  static stopAll() {
    cc.audioEngine.stopAll();
  }

  static setMute(value: boolean = true) {
    const volume = Number(!value);
    this.setMusicVolume(volume);
    this.setSfxVolume(volume);
  }

  static setMusicVolume(value) {
    cc.audioEngine.setMusicVolume(value);
  }

  static getMusicVolume() {
    return cc.audioEngine.getMusicVolume();
  }

  static setSfxVolume(value) {
    cc.audioEngine.setEffectsVolume(value);
  }

  static toggleSound() {
    this.setMute(!this.IsMute);
  }
  static fadeMusic(timer, type = "fadeIn", cb = null) {  // 0 = in, 1 : out
    let node = new cc.Node('Sprite');
    let initScale = 1;
    node.setScale(initScale)
    cc.tween(node)
      .to(timer, { scale: 2 }, {
        progress: (start, end, current, ratio) => {
          cc.audioEngine.setMusicVolume(type == "fadeIn" ? ratio : 1 - ratio);
          return start + (end - start) * ratio;
        }
      })
      .call(() => cb && cb())
      .start();
  }
  static fadeSfx(timer, type = "fadeIn", cb = null) { // 0 = in, 1 : out
    let node = new cc.Node('Sprite');
    let initScale = 1;
    node.setScale(initScale)
    cc.tween(node)
      .to(timer, { scale: 2 }, {
        progress: (start, end, current, ratio) => {
          cc.audioEngine.setEffectsVolume(type == "fadeIn" ? ratio : 1 - ratio);
          return start + (end - start) * ratio;
        }
      })
      .call(() => cb && cb())
      .start();
  }
}

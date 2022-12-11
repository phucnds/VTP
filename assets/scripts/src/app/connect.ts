import { shallowEqualObjects } from "shallow-equal";
import store from "./store";

function connect<T = any, A = any>(
  mapStateToProps: (state, props) => T,
  mapDispatchToProps?: (dispatch) => A
) {
  return function (target) {
    var res = cc.Class({
      ...((target &&
        target.__ccclassCache__ &&
        target.__ccclassCache__.proto) ||
        {}),
      extends: target,
      onLoad() {
        this.actions = mapDispatchToProps && mapDispatchToProps(store.dispatch);
        this.props = mapStateToProps(store.getState(), this.props);
        this.unsubcribe = store.subscribe(() => {
          const state = store.getState();
          const props = mapStateToProps(state, this.props);
          if (!shallowEqualObjects(props, this.props)) {
            this.props = props;
            if (this.node && this._active) {
              this.onStateChange && this.onStateChange();
            }
            else {
              this._needUpdate = true;
            }
          }
        });
        this._super && this._super();
      },
      onStateChange() {
        this._super && this._super();
      },
      onEnable() {
        this._active = true
        if (this._needUpdate) {
          this.onStateChange && this.onStateChange();
        }
        this._super && this._super();
      },
      onDisable() {
        this._active = false
        this._super && this._super();
      },
      onDestroy() {
        this.unsubcribe && this.unsubcribe();
        this._super && this._super();
      }
    });
    return res;
  };
}

export default connect;

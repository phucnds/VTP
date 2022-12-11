
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/lib/copy-to-clipboard.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}(function (global){
"use strict";
cc._RF.push(module, 'c0e60YLLKtDNJEeF1ZsaKso', 'copy-to-clipboard');
// scripts/lib/copy-to-clipboard.js

"use strict";

!function (e) {
  if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();else if ("function" == typeof define && define.amd) define([], e);else {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).copyToClipboard = e();
  }
}(function () {
  return function () {
    return function e(t, n, o) {
      function r(a, i) {
        if (!n[a]) {
          if (!t[a]) {
            var u = "function" == typeof require && require;
            if (!i && u) return u(a, !0);
            if (c) return c(a, !0);
            var l = new Error("Cannot find module '" + a + "'");
            throw l.code = "MODULE_NOT_FOUND", l;
          }

          var s = n[a] = {
            exports: {}
          };
          t[a][0].call(s.exports, function (e) {
            return r(t[a][1][e] || e);
          }, s, s.exports, e, t, n, o);
        }

        return n[a].exports;
      }

      for (var c = "function" == typeof require && require, a = 0; a < o.length; a++) {
        r(o[a]);
      }

      return r;
    };
  }()({
    1: [function (e, t, n) {
      "use strict";

      var o = e("toggle-selection"),
          r = "Copy to clipboard: #{key}, Enter";

      t.exports = function (e, t) {
        var n,
            c,
            a,
            i,
            u,
            l,
            s = !1;
        t || (t = {}), n = t.debug || !1;

        try {
          if (a = o(), i = document.createRange(), u = document.getSelection(), (l = document.createElement("span")).textContent = e, l.style.all = "unset", l.style.position = "fixed", l.style.top = 0, l.style.clip = "rect(0, 0, 0, 0)", l.style.whiteSpace = "pre", l.style.webkitUserSelect = "text", l.style.MozUserSelect = "text", l.style.msUserSelect = "text", l.style.userSelect = "text", document.body.appendChild(l), i.selectNode(l), u.addRange(i), !document.execCommand("copy")) throw new Error("copy command was unsuccessful");
          s = !0;
        } catch (o) {
          n && console.error("unable to copy using execCommand: ", o), n && console.warn("trying IE specific stuff");

          try {
            window.clipboardData.setData("text", e), s = !0;
          } catch (o) {
            n && console.error("unable to copy using clipboardData: ", o), n && console.error("falling back to prompt"), c = function (e) {
              var t = (/mac os x/i.test(navigator.userAgent) ? "âŒ˜" : "Ctrl") + "+C";
              return e.replace(/#{\s*key\s*}/g, t);
            }("message" in t ? t.message : r), window.prompt(c, e);
          }
        } finally {
          u && ("function" == typeof u.removeRange ? u.removeRange(i) : u.removeAllRanges()), l && document.body.removeChild(l), a();
        }

        return s;
      };
    }, {
      "toggle-selection": 2
    }],
    2: [function (e, t, n) {
      t.exports = function () {
        var e = document.getSelection();
        if (!e.rangeCount) return function () {};

        for (var t = document.activeElement, n = [], o = 0; o < e.rangeCount; o++) {
          n.push(e.getRangeAt(o));
        }

        switch (t.tagName.toUpperCase()) {
          case "INPUT":
          case "TEXTAREA":
            t.blur();
            break;

          default:
            t = null;
        }

        return e.removeAllRanges(), function () {
          "Caret" === e.type && e.removeAllRanges(), e.rangeCount || n.forEach(function (t) {
            e.addRange(t);
          }), t && t.focus();
        };
      };
    }, {}]
  }, {}, [1])(1);
});

cc._RF.pop();

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9hc3NldHMvc2NyaXB0cy9saWIvY29weS10by1jbGlwYm9hcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQ0FBQyxVQUFTLENBQVQsRUFBVztBQUFDLE1BQUcsWUFBVSxPQUFPLE9BQWpCLElBQTBCLGVBQWEsT0FBTyxNQUFqRCxFQUF3RCxNQUFNLENBQUMsT0FBUCxHQUFlLENBQUMsRUFBaEIsQ0FBeEQsS0FBZ0YsSUFBRyxjQUFZLE9BQU8sTUFBbkIsSUFBMkIsTUFBTSxDQUFDLEdBQXJDLEVBQXlDLE1BQU0sQ0FBQyxFQUFELEVBQUksQ0FBSixDQUFOLENBQXpDLEtBQTBEO0FBQUMsS0FBQyxlQUFhLE9BQU8sTUFBcEIsR0FBMkIsTUFBM0IsR0FBa0MsZUFBYSxPQUFPLE1BQXBCLEdBQTJCLE1BQTNCLEdBQWtDLGVBQWEsT0FBTyxJQUFwQixHQUF5QixJQUF6QixHQUE4QixJQUFuRyxFQUF5RyxlQUF6RyxHQUF5SCxDQUFDLEVBQTFIO0FBQTZIO0FBQUMsQ0FBclIsQ0FBc1IsWUFBVTtBQUFDLFNBQU8sWUFBVTtBQUFDLFdBQU8sU0FBUyxDQUFULENBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLEVBQWlCO0FBQUMsZUFBUyxDQUFULENBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZTtBQUFDLFlBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBRCxDQUFMLEVBQVM7QUFBQyxjQUFHLENBQUMsQ0FBQyxDQUFDLENBQUQsQ0FBTCxFQUFTO0FBQUMsZ0JBQUksQ0FBQyxHQUFDLGNBQVksT0FBTyxPQUFuQixJQUE0QixPQUFsQztBQUEwQyxnQkFBRyxDQUFDLENBQUQsSUFBSSxDQUFQLEVBQVMsT0FBTyxDQUFDLENBQUMsQ0FBRCxFQUFHLENBQUMsQ0FBSixDQUFSO0FBQWUsZ0JBQUcsQ0FBSCxFQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUQsRUFBRyxDQUFDLENBQUosQ0FBUjtBQUFlLGdCQUFJLENBQUMsR0FBQyxJQUFJ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RixDQUFXLENBQVg7QUFBYyxXQUFwQyxDQUFwRCxFQUEwRixDQUFDLElBQUUsQ0FBQyxDQUFDLEtBQUYsRUFBN0Y7QUFBdUcsU0FBN0k7QUFBOEksT0FBcFo7QUFBcVosS0FBdGEsRUFBdWEsRUFBdmE7QUFBenRDLEdBQWpjLEVBQXNrRSxFQUF0a0UsRUFBeWtFLENBQUMsQ0FBRCxDQUF6a0UsRUFBOGtFLENBQTlrRSxDQUFQO0FBQXdsRSxDQUF6M0UsQ0FBRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiIWZ1bmN0aW9uKGUpe2lmKFwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlKW1vZHVsZS5leHBvcnRzPWUoKTtlbHNlIGlmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZClkZWZpbmUoW10sZSk7ZWxzZXsoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz93aW5kb3c6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbD9nbG9iYWw6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHNlbGY/c2VsZjp0aGlzKS5jb3B5VG9DbGlwYm9hcmQ9ZSgpfX0oZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24gZSh0LG4sbyl7ZnVuY3Rpb24gcihhLGkpe2lmKCFuW2FdKXtpZighdFthXSl7dmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighaSYmdSlyZXR1cm4gdShhLCEwKTtpZihjKXJldHVybiBjKGEsITApO3ZhciBsPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrYStcIidcIik7dGhyb3cgbC5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGx9dmFyIHM9blthXT17ZXhwb3J0czp7fX07dFthXVswXS5jYWxsKHMuZXhwb3J0cyxmdW5jdGlvbihlKXtyZXR1cm4gcih0W2FdWzFdW2VdfHxlKX0scyxzLmV4cG9ydHMsZSx0LG4sbyl9cmV0dXJuIG5bYV0uZXhwb3J0c31mb3IodmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxhPTA7YTxvLmxlbmd0aDthKyspcihvW2FdKTtyZXR1cm4gcn19KCkoezE6W2Z1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjt2YXIgbz1lKFwidG9nZ2xlLXNlbGVjdGlvblwiKSxyPVwiQ29weSB0byBjbGlwYm9hcmQ6ICN7a2V5fSwgRW50ZXJcIjt0LmV4cG9ydHM9ZnVuY3Rpb24oZSx0KXt2YXIgbixjLGEsaSx1LGwscz0hMTt0fHwodD17fSksbj10LmRlYnVnfHwhMTt0cnl7aWYoYT1vKCksaT1kb2N1bWVudC5jcmVhdGVSYW5nZSgpLHU9ZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCksKGw9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIikpLnRleHRDb250ZW50PWUsbC5zdHlsZS5hbGw9XCJ1bnNldFwiLGwuc3R5bGUucG9zaXRpb249XCJmaXhlZFwiLGwuc3R5bGUudG9wPTAsbC5zdHlsZS5jbGlwPVwicmVjdCgwLCAwLCAwLCAwKVwiLGwuc3R5bGUud2hpdGVTcGFjZT1cInByZVwiLGwuc3R5bGUud2Via2l0VXNlclNlbGVjdD1cInRleHRcIixsLnN0eWxlLk1velVzZXJTZWxlY3Q9XCJ0ZXh0XCIsbC5zdHlsZS5tc1VzZXJTZWxlY3Q9XCJ0ZXh0XCIsbC5zdHlsZS51c2VyU2VsZWN0PVwidGV4dFwiLGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobCksaS5zZWxlY3ROb2RlKGwpLHUuYWRkUmFuZ2UoaSksIWRvY3VtZW50LmV4ZWNDb21tYW5kKFwiY29weVwiKSl0aHJvdyBuZXcgRXJyb3IoXCJjb3B5IGNvbW1hbmQgd2FzIHVuc3VjY2Vzc2Z1bFwiKTtzPSEwfWNhdGNoKG8pe24mJmNvbnNvbGUuZXJyb3IoXCJ1bmFibGUgdG8gY29weSB1c2luZyBleGVjQ29tbWFuZDogXCIsbyksbiYmY29uc29sZS53YXJuKFwidHJ5aW5nIElFIHNwZWNpZmljIHN0dWZmXCIpO3RyeXt3aW5kb3cuY2xpcGJvYXJkRGF0YS5zZXREYXRhKFwidGV4dFwiLGUpLHM9ITB9Y2F0Y2gobyl7biYmY29uc29sZS5lcnJvcihcInVuYWJsZSB0byBjb3B5IHVzaW5nIGNsaXBib2FyZERhdGE6IFwiLG8pLG4mJmNvbnNvbGUuZXJyb3IoXCJmYWxsaW5nIGJhY2sgdG8gcHJvbXB0XCIpLGM9ZnVuY3Rpb24oZSl7dmFyIHQ9KC9tYWMgb3MgeC9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk/XCLDosWSy5xcIjpcIkN0cmxcIikrXCIrQ1wiO3JldHVybiBlLnJlcGxhY2UoLyN7XFxzKmtleVxccyp9L2csdCl9KFwibWVzc2FnZVwiaW4gdD90Lm1lc3NhZ2U6ciksd2luZG93LnByb21wdChjLGUpfX1maW5hbGx5e3UmJihcImZ1bmN0aW9uXCI9PXR5cGVvZiB1LnJlbW92ZVJhbmdlP3UucmVtb3ZlUmFuZ2UoaSk6dS5yZW1vdmVBbGxSYW5nZXMoKSksbCYmZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChsKSxhKCl9cmV0dXJuIHN9fSx7XCJ0b2dnbGUtc2VsZWN0aW9uXCI6Mn1dLDI6W2Z1bmN0aW9uKGUsdCxuKXt0LmV4cG9ydHM9ZnVuY3Rpb24oKXt2YXIgZT1kb2N1bWVudC5nZXRTZWxlY3Rpb24oKTtpZighZS5yYW5nZUNvdW50KXJldHVybiBmdW5jdGlvbigpe307Zm9yKHZhciB0PWRvY3VtZW50LmFjdGl2ZUVsZW1lbnQsbj1bXSxvPTA7bzxlLnJhbmdlQ291bnQ7bysrKW4ucHVzaChlLmdldFJhbmdlQXQobykpO3N3aXRjaCh0LnRhZ05hbWUudG9VcHBlckNhc2UoKSl7Y2FzZVwiSU5QVVRcIjpjYXNlXCJURVhUQVJFQVwiOnQuYmx1cigpO2JyZWFrO2RlZmF1bHQ6dD1udWxsfXJldHVybiBlLnJlbW92ZUFsbFJhbmdlcygpLGZ1bmN0aW9uKCl7XCJDYXJldFwiPT09ZS50eXBlJiZlLnJlbW92ZUFsbFJhbmdlcygpLGUucmFuZ2VDb3VudHx8bi5mb3JFYWNoKGZ1bmN0aW9uKHQpe2UuYWRkUmFuZ2UodCl9KSx0JiZ0LmZvY3VzKCl9fX0se31dfSx7fSxbMV0pKDEpfSk7Il19
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
              var t = (/mac os x/i.test(navigator.userAgent) ? "??????" : "Ctrl") + "+C";
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
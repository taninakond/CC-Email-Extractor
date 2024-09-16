(function (t) {
    function e(e) {
        for (var s, n, o = e[0], l = e[1], c = e[2], u = 0, h = []; u < o.length; u++) (n = o[u]), Object.prototype.hasOwnProperty.call(i, n) && i[n] && h.push(i[n][0]), (i[n] = 0);
        for (s in l) Object.prototype.hasOwnProperty.call(l, s) && (t[s] = l[s]);
        p && p(e);
        while (h.length) h.shift()();
        return r.push.apply(r, c || []), a();
    }
    function a() {
        for (var t, e = 0; e < r.length; e++) {
            for (var a = r[e], s = !0, o = 1; o < a.length; o++) {
                var l = a[o];
                0 !== i[l] && (s = !1);
            }
            s && (r.splice(e--, 1), (t = n((n.s = a[0]))));
        }
        return t;
    }
    var s = {},
        i = { popup: 0 },
        r = [];
    function n(e) {
        if (s[e]) return s[e].exports;
        var a = (s[e] = { i: e, l: !1, exports: {} });
        return t[e].call(a.exports, a, a.exports, n), (a.l = !0), a.exports;
    }
    (n.m = t),
        (n.c = s),
        (n.d = function (t, e, a) {
            n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: a });
        }),
        (n.r = function (t) {
            "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
        }),
        (n.t = function (t, e) {
            if ((1 & e && (t = n(t)), 8 & e)) return t;
            if (4 & e && "object" === typeof t && t && t.__esModule) return t;
            var a = Object.create(null);
            if ((n.r(a), Object.defineProperty(a, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t))
                for (var s in t)
                    n.d(
                        a,
                        s,
                        function (e) {
                            return t[e];
                        }.bind(null, s)
                    );
            return a;
        }),
        (n.n = function (t) {
            var e =
                t && t.__esModule
                    ? function () {
                          return t["default"];
                      }
                    : function () {
                          return t;
                      };
            return n.d(e, "a", e), e;
        }),
        (n.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
        }),
        (n.p = "/");
    var o = (window["webpackJsonp"] = window["webpackJsonp"] || []),
        l = o.push.bind(o);
    (o.push = e), (o = o.slice());
    for (var c = 0; c < o.length; c++) e(o[c]);
    var p = l;
    r.push([1, "chunk-vendors", "chunk-common"]), a();
})({
    "0224": function (t, e, a) {},
    "0a3d": function (t, e, a) {
        "use strict";
        a.r(e);
        a("e260"), a("e6cf"), a("cca6"), a("a79d");
        var s = a("2b0e"),
            i = function () {
                console.log('this',this);
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                    t.subscription.isPro = true;
                return s("div", { staticClass: "wrapper" }, [
                    s("header", { staticClass: "is-flex is-align-items-center p-3 pl-4" }, [
                        t._m(0),
                        s("h1", { staticClass: "is-size-6 has-text-weight-semibold px-2" }, [t._v(" CC Email Extractor ")]),
                        s("span", { staticClass: "has-text-grey-light is-size-7" }, [t._v(t._s(t.version) + t._s(t.$config.IS_PRODUCTION ? "" : " [dev]"))]),
                        // t.user.id && (!t.subscription.isPro || (t.subscription.isPro && t.subscription.isCanceled)) && t.extractEmailCount >= 1 && "pro" !== t.tabType
                            false ? s(
                                  "a",
                                  {
                                      staticClass: "btn-pro is-flex is-justify-content-center is-align-items-center px-4 has-text-weight-semibold",
                                      class: { "btn-pro2": t.configs && t.configs.newProBtnStyle },
                                      on: {
                                          click: function (e) {
                                              return t.handleSwitchTab("pro");
                                          },
                                      },
                                  },
                                  [
                                      s("svg", { attrs: { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "18", height: "18" } }, [
                                          s("path", { attrs: { fill: "none", d: "M0 0h24v24H0z" } }),
                                          s("path", {
                                              attrs: {
                                                  d:
                                                      "M2.8 5.2L7 8l4.186-5.86a1 1 0 0 1 1.628 0L17 8l4.2-2.8a1 1 0 0 1 1.547.95l-1.643 13.967a1 1 0 0 1-.993.883H3.889a1 1 0 0 1-.993-.883L1.253 6.149A1 1 0 0 1 2.8 5.2zM12 15a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
                                                  fill: "currentColor",
                                              },
                                          }),
                                      ]),
                                      s("span", { staticClass: "pl-1" }, [t._v("Upgrade to Pro")]),
                                  ]
                              )
                            : t._e(),
                        // t.user.id && "pro" === t.tabType
                        true
                            ? s(
                                  "div",
                                  { staticStyle: { position: "absolute", right: "15px", top: "15px" } },
                                  [
                                      s(
                                          "b-dropdown",
                                          {
                                              attrs: { "aria-role": "list", "mobile-modal": !1, position: "is-bottom-left" },
                                              scopedSlots: t._u(
                                                  [
                                                      {
                                                          key: "trigger",
                                                          fn: function () {
                                                              return [
                                                                  s(
                                                                      "p",
                                                                      { staticClass: "btn-logout is-size-7 has-text-grey-light is-flex is-justify-content-center is-align-items-center", attrs: { role: "button" } },
                                                                      [
                                                                          s("b-icon", { attrs: { icon: "user", size: "is-small" } }),
                                                                          s("span", { staticClass: "username" }, [t._v(t._s(t.user.username))]),
                                                                          s("b-icon", { attrs: { icon: "angle-down", size: "is-small" } }),
                                                                      ],
                                                                      1
                                                                  ),
                                                              ];
                                                          },
                                                          proxy: !0,
                                                      },
                                                  ],
                                                  null,
                                                  !1,
                                                  4160029623
                                              ),
                                          },
                                          [
                                              s(
                                                  "b-dropdown-item",
                                                  { staticClass: "is-flex is-justify-content-center is-align-items-center", attrs: { "aria-role": "listitem" }, on: { click: t.handleLogout } },
                                                  [s("b-icon", { attrs: { icon: "sign-out-alt" } }), t._v(" Logout")],
                                                  1
                                              ),
                                          ],
                                          1
                                      ),
                                  ],
                                  1
                              )
                            : t._e(),
                    ]),
                    t.user.id
                        ? s("main", { staticClass: "is-flex is-flex-grow-1" }, [
                              s("div", { staticClass: "aside" }, [
                                  s("ul", [
                                      s("li", [
                                          s(
                                              "a",
                                              {
                                                  class: { current: "index" === t.tabType },
                                                  on: {
                                                      click: function (e) {
                                                          return t.handleSwitchTab("index");
                                                      },
                                                  },
                                              },
                                              [
                                                  s("svg", { attrs: { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "18", height: "18" } }, [
                                                      s("path", { attrs: { fill: "none", d: "M0 0h24v24H0z" } }),
                                                      s("path", { attrs: { d: "M19 21H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9a1 1 0 0 1-1 1zm-6-2h5V9.157l-6-5.454-6 5.454V19h5v-6h2v6z", fill: "rgba(51,51,51,1)" } }),
                                                  ]),
                                              ]
                                          ),
                                      ]),
                                      s("li", { staticClass: "aside-item-list" }, [
                                          s(
                                              "a",
                                              {
                                                  class: { current: "list" === t.tabType },
                                                  on: {
                                                      click: function (e) {
                                                        const adsss = t.handleSwitchTab("list");
                                                          adsss.then(res => console.log('res',res)).catch(err => console.log('err', err))
                                                          return adsss;
                                                      },
                                                  },
                                              },
                                              [
                                                  s("svg", { attrs: { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "18", height: "18" } }, [
                                                      s("path", { attrs: { fill: "none", d: "M0 0h24v24H0z" } }),
                                                      s("path", {
                                                          attrs: { d: "M20 22H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1zm-1-2V4H5v16h14zM8 7h8v2H8V7zm0 4h8v2H8v-2zm0 4h5v2H8v-2z", fill: "rgba(51,51,51,1)" },
                                                      }),
                                                  ]),
                                                  t.configs.HistoryListBadge && t.tabHistoryListShow ? s("span", { staticClass: "badge" }) : t._e(),
                                              ]
                                          ),
                                      ]),
                                      s("li", [
                                          s(
                                              "a",
                                              {
                                                  class: { current: "faq" === t.tabType },
                                                  on: {
                                                      click: function (e) {
                                                          return t.handleSwitchTab("faq");
                                                      },
                                                  },
                                              },
                                              [
                                                  s("svg", { attrs: { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "18", height: "18" } }, [
                                                      s("path", { attrs: { fill: "none", d: "M0 0h24v24H0z" } }),
                                                      s("path", {
                                                          attrs: {
                                                              d:
                                                                  "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-5h2v2h-2v-2zm2-1.645V14h-2v-1.5a1 1 0 0 1 1-1 1.5 1.5 0 1 0-1.471-1.794l-1.962-.393A3.501 3.501 0 1 1 13 13.355z",
                                                              fill: "rgba(51,51,51,1)",
                                                          },
                                                      }),
                                                  ]),
                                              ]
                                          ),
                                      ]),
                                      
                                  ]),
                              ]),
                              s(
                                  "div",
                                  { staticClass: "body is-flex-grow-1" },
                                  [
                                      s(
                                          "div",
                                          { directives: [{ name: "show", rawName: "v-show", value: "index" === t.tabType, expression: "tabType === 'index'" }], staticStyle: { padding: "24px 20px" } },
                                          [
                                              s(
                                                  "b-tabs",
                                                  {
                                                      staticClass: "tab-type",
                                                      attrs: { size: "is-small", type: "is-toggle", expanded: "" },
                                                      model: {
                                                          value: t.extractionType,
                                                          callback: function (e) {
                                                              t.extractionType = e;
                                                          },
                                                          expression: "extractionType",
                                                      },
                                                  },
                                                  [
                                                      s(
                                                          "b-tab-item",
                                                          { attrs: { label: "Followers", icon: "user-check" } },
                                                          [
                                                              s(
                                                                  "p",
                                                                  { staticClass: "pb-4 has-text-grey-dark has-text-weight-semibold", staticStyle: { "font-size": "14px" } },
                                                                  [
                                                                      t._v(" Extraction by followers "),
                                                                      s(
                                                                          "b-tooltip",
                                                                          {
                                                                              staticClass: "example-tip",
                                                                              attrs: { type: "is-light", position: "is-bottom" },
                                                                              scopedSlots: t._u(
                                                                                  [
                                                                                      {
                                                                                          key: "content",
                                                                                          fn: function () {
                                                                                              return [s("img", { attrs: { src: a("539e"), alt: "demo" } })];
                                                                                          },
                                                                                          proxy: !0,
                                                                                      },
                                                                                  ],
                                                                                  null,
                                                                                  !1,
                                                                                  2284364839
                                                                              ),
                                                                          },
                                                                          [
                                                                              s(
                                                                                  "span",
                                                                                  { staticClass: "ml-2 has-text-grey-light is-clickable is-size-7" },
                                                                                  [t._v("user name"), s("b-icon", { staticClass: "has-text-grey-lighter", staticStyle: { "font-size": "10px" }, attrs: { icon: "question-circle" } })],
                                                                                  1
                                                                              ),
                                                                          ]
                                                                      ),
                                                                  ],
                                                                  1
                                                              ),
                                                              s(
                                                                  "b-field",
                                                                  { attrs: { label: "User name", "label-position": "on-border" } },
                                                                  [
                                                                      s("b-input", {
                                                                          attrs: { icon: "at", placeholder: "e.g. shopify" },
                                                                          on: { input: t.handleInput },
                                                                          model: {
                                                                              value: t.insId,
                                                                              callback: function (e) {
                                                                                  t.insId = e;
                                                                              },
                                                                              expression: "insId",
                                                                          },
                                                                      }),
                                                                  ],
                                                                  1
                                                              ),
                                                          ],
                                                          1
                                                      ),
                                                      s(
                                                          "b-tab-item",
                                                          { attrs: { label: "Following", icon: "user-plus" } },
                                                          [
                                                              s(
                                                                  "p",
                                                                  { staticClass: "pb-4 has-text-grey-dark has-text-weight-semibold", staticStyle: { "font-size": "14px" } },
                                                                  [
                                                                      t._v(" Extraction by following "),
                                                                      s(
                                                                          "b-tooltip",
                                                                          {
                                                                              staticClass: "example-tip",
                                                                              attrs: { type: "is-light", position: "is-bottom" },
                                                                              scopedSlots: t._u(
                                                                                  [
                                                                                      {
                                                                                          key: "content",
                                                                                          fn: function () {
                                                                                              return [s("img", { attrs: { src: a("539e"), alt: "demo" } })];
                                                                                          },
                                                                                          proxy: !0,
                                                                                      },
                                                                                  ],
                                                                                  null,
                                                                                  !1,
                                                                                  2284364839
                                                                              ),
                                                                          },
                                                                          [
                                                                              s(
                                                                                  "span",
                                                                                  { staticClass: "ml-2 has-text-grey-light is-clickable is-size-7" },
                                                                                  [t._v("user name"), s("b-icon", { staticClass: "has-text-grey-lighter", staticStyle: { "font-size": "10px" }, attrs: { icon: "question-circle" } })],
                                                                                  1
                                                                              ),
                                                                          ]
                                                                      ),
                                                                  ],
                                                                  1
                                                              ),
                                                              s(
                                                                  "b-field",
                                                                  { attrs: { label: "User name", "label-position": "on-border" } },
                                                                  [
                                                                      s("b-input", {
                                                                          attrs: { icon: "at", placeholder: "e.g. shopify" },
                                                                          on: { input: t.handleInput },
                                                                          model: {
                                                                              value: t.insId,
                                                                              callback: function (e) {
                                                                                  t.insId = e;
                                                                              },
                                                                              expression: "insId",
                                                                          },
                                                                      }),
                                                                  ],
                                                                  1
                                                              ),
                                                          ],
                                                          1
                                                      ),
                                                      s(
                                                          "b-tab-item",
                                                          { attrs: { label: "Hashtag", icon: "hashtag" } },
                                                          [
                                                              s(
                                                                  "p",
                                                                  { staticClass: "pb-4 has-text-grey-dark has-text-weight-semibold", staticStyle: { "font-size": "14px" } },
                                                                  [
                                                                      t._v(" Extraction by hashtag "),
                                                                      s(
                                                                          "b-tooltip",
                                                                          {
                                                                              staticClass: "example-tip",
                                                                              attrs: { type: "is-light", position: "is-bottom" },
                                                                              scopedSlots: t._u(
                                                                                  [
                                                                                      {
                                                                                          key: "content",
                                                                                          fn: function () {
                                                                                              return [s("img", { attrs: { src: a("b473"), alt: "demo" } })];
                                                                                          },
                                                                                          proxy: !0,
                                                                                      },
                                                                                  ],
                                                                                  null,
                                                                                  !1,
                                                                                  468903334
                                                                              ),
                                                                          },
                                                                          [
                                                                              s(
                                                                                  "span",
                                                                                  { staticClass: "ml-2 has-text-grey-light is-clickable is-size-7" },
                                                                                  [t._v("hashtag"), s("b-icon", { staticClass: "has-text-grey-lighter", staticStyle: { "font-size": "10px" }, attrs: { icon: "question-circle" } })],
                                                                                  1
                                                                              ),
                                                                          ]
                                                                      ),
                                                                  ],
                                                                  1
                                                              ),
                                                              s(
                                                                  "b-field",
                                                                  { attrs: { label: "Hashtag", "label-position": "on-border" } },
                                                                  [
                                                                      s("b-input", {
                                                                          attrs: { icon: "hashtag", placeholder: "e.g. realtor" },
                                                                          on: { input: t.handleInput },
                                                                          model: {
                                                                              value: t.insHashtag,
                                                                              callback: function (e) {
                                                                                  t.insHashtag = e;
                                                                              },
                                                                              expression: "insHashtag",
                                                                          },
                                                                      }),
                                                                  ],
                                                                  1
                                                              ),
                                                          ],
                                                          1
                                                      ),
                                                      s(
                                                          "b-tab-item",
                                                          { attrs: { label: "Likes", icon: "heart" } },
                                                          [
                                                              s(
                                                                  "p",
                                                                  { staticClass: "pb-4 has-text-grey-dark has-text-weight-semibold", staticStyle: { "font-size": "14px" } },
                                                                  [
                                                                      t._v(" Extraction by post likers "),
                                                                      s(
                                                                          "b-tooltip",
                                                                          {
                                                                              staticClass: "example-tip",
                                                                              attrs: { type: "is-light", position: "is-bottom" },
                                                                              scopedSlots: t._u(
                                                                                  [
                                                                                      {
                                                                                          key: "content",
                                                                                          fn: function () {
                                                                                              return [s("img", { attrs: { src: a("e4a8"), alt: "demo" } })];
                                                                                          },
                                                                                          proxy: !0,
                                                                                      },
                                                                                  ],
                                                                                  null,
                                                                                  !1,
                                                                                  751465124
                                                                              ),
                                                                          },
                                                                          [
                                                                              s(
                                                                                  "span",
                                                                                  { staticClass: "ml-2 has-text-grey-light is-clickable is-size-7" },
                                                                                  [t._v("post link"), s("b-icon", { staticClass: "has-text-grey-lighter", staticStyle: { "font-size": "10px" }, attrs: { icon: "question-circle" } })],
                                                                                  1
                                                                              ),
                                                                          ]
                                                                      ),
                                                                  ],
                                                                  1
                                                              ),
                                                              s(
                                                                  "b-field",
                                                                  { attrs: { label: "Post link", "label-position": "on-border" } },
                                                                  [
                                                                      s("b-input", {
                                                                          attrs: { icon: "link", placeholder: "e.g. https://www.instagram.com/p/CMvKtZkBTPC" },
                                                                          on: { input: t.handleInput },
                                                                          model: {
                                                                              value: t.insPostUrl,
                                                                              callback: function (e) {
                                                                                  t.insPostUrl = e;
                                                                              },
                                                                              expression: "insPostUrl",
                                                                          },
                                                                      }),
                                                                  ],
                                                                  1
                                                              ),
                                                          ],
                                                          1
                                                      ),
                                                      s(
                                                          "b-tab-item",
                                                          { attrs: { label: "Comment", icon: "comment" } },
                                                          [
                                                              s(
                                                                  "p",
                                                                  { staticClass: "pb-4 has-text-grey-dark has-text-weight-semibold", staticStyle: { "font-size": "14px" } },
                                                                  [
                                                                      t._v(" Extraction by post commenters "),
                                                                      s(
                                                                          "b-tooltip",
                                                                          {
                                                                              staticClass: "example-tip",
                                                                              attrs: { type: "is-light", position: "is-bottom" },
                                                                              scopedSlots: t._u(
                                                                                  [
                                                                                      {
                                                                                          key: "content",
                                                                                          fn: function () {
                                                                                              return [s("img", { attrs: { src: a("e4a8"), alt: "demo" } })];
                                                                                          },
                                                                                          proxy: !0,
                                                                                      },
                                                                                  ],
                                                                                  null,
                                                                                  !1,
                                                                                  751465124
                                                                              ),
                                                                          },
                                                                          [
                                                                              s(
                                                                                  "span",
                                                                                  { staticClass: "ml-2 has-text-grey-light is-clickable is-size-7" },
                                                                                  [t._v("post link"), s("b-icon", { staticClass: "has-text-grey-lighter", staticStyle: { "font-size": "10px" }, attrs: { icon: "question-circle" } })],
                                                                                  1
                                                                              ),
                                                                          ]
                                                                      ),
                                                                  ],
                                                                  1
                                                              ),
                                                              s(
                                                                  "b-field",
                                                                  { attrs: { label: "Post link", "label-position": "on-border" } },
                                                                  [
                                                                      s("b-input", {
                                                                          attrs: { icon: "link", placeholder: "e.g. https://www.instagram.com/p/CMvKtZkBTPC" },
                                                                          on: { input: t.handleInput },
                                                                          model: {
                                                                              value: t.insPostUrl,
                                                                              callback: function (e) {
                                                                                  t.insPostUrl = e;
                                                                              },
                                                                              expression: "insPostUrl",
                                                                          },
                                                                      }),
                                                                  ],
                                                                  1
                                                              ),
                                                          ],
                                                          1
                                                      ),
                                                      s(
                                                          "b-tab-item",
                                                          { attrs: { label: "Location", icon: "map-marker-alt" } },
                                                          [
                                                              s(
                                                                  "p",
                                                                  { staticClass: "pb-4 has-text-grey-dark has-text-weight-semibold", staticStyle: { "font-size": "14px" } },
                                                                  [
                                                                      t._v(" Extraction by location "),
                                                                      s(
                                                                          "b-tooltip",
                                                                          {
                                                                              staticClass: "example-tip",
                                                                              attrs: { type: "is-light", position: "is-bottom" },
                                                                              scopedSlots: t._u(
                                                                                  [
                                                                                      {
                                                                                          key: "content",
                                                                                          fn: function () {
                                                                                              return [s("img", { attrs: { src: a("841f"), alt: "demo" } })];
                                                                                          },
                                                                                          proxy: !0,
                                                                                      },
                                                                                  ],
                                                                                  null,
                                                                                  !1,
                                                                                  2996917281
                                                                              ),
                                                                          },
                                                                          [
                                                                              s(
                                                                                  "span",
                                                                                  { staticClass: "ml-2 has-text-grey-light is-clickable is-size-7" },
                                                                                  [t._v("location link"), s("b-icon", { staticClass: "has-text-grey-lighter", staticStyle: { "font-size": "10px" }, attrs: { icon: "question-circle" } })],
                                                                                  1
                                                                              ),
                                                                          ]
                                                                      ),
                                                                  ],
                                                                  1
                                                              ),
                                                              s(
                                                                  "b-field",
                                                                  { attrs: { label: "Location link", "label-position": "on-border" } },
                                                                  [
                                                                      s("b-input", {
                                                                          attrs: { icon: "link", placeholder: "e.g. https://www.instagram.com/explore/locations/213385402" },
                                                                          on: { input: t.handleInput },
                                                                          model: {
                                                                              value: t.insLocationUrl,
                                                                              callback: function (e) {
                                                                                  t.insLocationUrl = e;
                                                                              },
                                                                              expression: "insLocationUrl",
                                                                          },
                                                                      }),
                                                                  ],
                                                                  1
                                                              ),
                                                          ],
                                                          1
                                                      ),
                                                      s(
                                                          "b-tab-item",
                                                          { attrs: { label: "User List", icon: "address-book" } },
                                                          [
                                                              s(
                                                                  "p",
                                                                  { staticClass: "pb-4 has-text-grey-dark has-text-weight-semibold", staticStyle: { "font-size": "14px" } },
                                                                  [
                                                                      t._v(" Extraction by custom user list "),
                                                                      s(
                                                                          "b-tooltip",
                                                                          {
                                                                              staticClass: "example-tip",
                                                                              attrs: { type: "is-light", position: "is-bottom" },
                                                                              scopedSlots: t._u(
                                                                                  [
                                                                                      {
                                                                                          key: "content",
                                                                                          fn: function () {
                                                                                              return [s("img", { attrs: { src: a("40fe"), alt: "demo" } })];
                                                                                          },
                                                                                          proxy: !0,
                                                                                      },
                                                                                  ],
                                                                                  null,
                                                                                  !1,
                                                                                  2702588064
                                                                              ),
                                                                          },
                                                                          [
                                                                              s(
                                                                                  "span",
                                                                                  { staticClass: "ml-2 has-text-grey-light is-clickable is-size-7" },
                                                                                  [t._v("user list"), s("b-icon", { staticClass: "has-text-grey-lighter", staticStyle: { "font-size": "10px" }, attrs: { icon: "question-circle" } })],
                                                                                  1
                                                                              ),
                                                                          ]
                                                                      ),
                                                                  ],
                                                                  1
                                                              ),
                                                              s(
                                                                  "b-field",
                                                                  { attrs: { label: "User list", "label-position": "on-border" } },
                                                                  [
                                                                      s("b-input", {
                                                                          attrs: { size: "is-small", type: "textarea", rows: "5", placeholder: "Please type or paste here. Separate each username with a space, comma, or newline." },
                                                                          on: { blur: t.handleInput },
                                                                          model: {
                                                                              value: t.userListVal,
                                                                              callback: function (e) {
                                                                                  t.userListVal = e;
                                                                              },
                                                                              expression: "userListVal",
                                                                          },
                                                                      }),
                                                                  ],
                                                                  1
                                                              ),
                                                          ],
                                                          1
                                                      ),
                                                  ],
                                                  1
                                              ),
                                              s(
                                                  "p",
                                                  { staticClass: "pb-1 has-text-grey-dark has-text-weight-semibold", staticStyle: { "font-size": "14px" } },
                                                  [
                                                      t._v(" Interval between requests "),
                                                      s(
                                                          "b-tooltip",
                                                          {
                                                              staticClass: "example-tip",
                                                              attrs: { type: "is-light", position: "is-bottom", size: "is-large", multilined: "" },
                                                              scopedSlots: t._u(
                                                                  [
                                                                      {
                                                                          key: "content",
                                                                          fn: function () {
                                                                              return [
                                                                                  s("div", { staticStyle: { padding: "4px 10px" } }, [
                                                                                      t._v(
                                                                                          " This is the amount of time you should wait after scraping each user's data. We recommend setting a relatively long time interval to avoid sending too many requests to the instagram api and causing problems. "
                                                                                      ),
                                                                                  ]),
                                                                              ];
                                                                          },
                                                                          proxy: !0,
                                                                      },
                                                                  ],
                                                                  null,
                                                                  !1,
                                                                  4087067580
                                                              ),
                                                          },
                                                          [s("b-icon", { staticClass: "has-text-grey-lighter", staticStyle: { "font-size": "10px" }, attrs: { icon: "question-circle" } })],
                                                          1
                                                      ),
                                                  ],
                                                  1
                                              ),
                                              s(
                                                  "div",
                                                  { staticClass: "px-3 pb-5" },
                                                  [
                                                      s(
                                                          "b-field",
                                                          [
                                                              s(
                                                                  "b-slider",
                                                                  {
                                                                      attrs: { min: 2, max: 20, step: 1, ticks: "" },
                                                                      on: { dragend: t.handleUpdateInterval },
                                                                      model: {
                                                                          value: t.intervals,
                                                                          callback: function (e) {
                                                                              t.intervals = e;
                                                                          },
                                                                          expression: "intervals",
                                                                      },
                                                                  },
                                                                  [
                                                                      s("b-slider-tick", { attrs: { value: 2 } }, [t._v("2s")]),
                                                                      s("b-slider-tick", { attrs: { value: 3 } }, [t._v("3s")]),
                                                                      s("b-slider-tick", { attrs: { value: 4 } }, [t._v("4s")]),
                                                                      s("b-slider-tick", { attrs: { value: 5 } }, [t._v("5s")]),
                                                                      s("b-slider-tick", { attrs: { value: 6 } }, [t._v("6s")]),
                                                                      s("b-slider-tick", { attrs: { value: 7 } }, [t._v("7s")]),
                                                                      s("b-slider-tick", { attrs: { value: 8 } }, [t._v("8s")]),
                                                                      s("b-slider-tick", { attrs: { value: 9 } }, [t._v("9s")]),
                                                                      s("b-slider-tick", { attrs: { value: 10 } }, [t._v("10s")]),
                                                                      s("b-slider-tick", { attrs: { value: 11 } }, [t._v("11s")]),
                                                                      s("b-slider-tick", { attrs: { value: 12 } }, [t._v("12s")]),
                                                                      s("b-slider-tick", { attrs: { value: 13 } }, [t._v("13s")]),
                                                                      s("b-slider-tick", { attrs: { value: 14 } }, [t._v("14s")]),
                                                                      s("b-slider-tick", { attrs: { value: 15 } }, [t._v("15s")]),
                                                                      s("b-slider-tick", { attrs: { value: 16 } }, [t._v("16s")]),
                                                                      s("b-slider-tick", { attrs: { value: 17 } }, [t._v("17s")]),
                                                                      s("b-slider-tick", { attrs: { value: 18 } }, [t._v("18s")]),
                                                                      s("b-slider-tick", { attrs: { value: 19 } }, [t._v("19s")]),
                                                                      s("b-slider-tick", { attrs: { value: 20 } }, [t._v("20s")]),
                                                                  ],
                                                                  1
                                                              ),
                                                          ],
                                                          1
                                                      ),
                                                  ],
                                                  1
                                              ),
                                              s(
                                                  "b-field",
                                                  { staticClass: "mx-3 mb-0" },
                                                  [
                                                      s(
                                                          "b-button",
                                                          { staticClass: "button is-uppercase has-text-weight-semibold btn-start", attrs: { type: "is-primary", "icon-left": "search", expanded: "" }, on: { click: t.handleStartWorking } },
                                                          [t._v(" Start Extracting ")]
                                                      ),
                                                  ],
                                                  1
                                              ),
                                          ],
                                          1
                                      ),
                                      s(
                                          "div",
                                          { directives: [{ name: "show", rawName: "v-show", value: "list" === t.tabType, expression: "tabType === 'list'" }], staticClass: "px-5 pt-3" },
                                          [
                                              t.localStorageLiveTipShow
                                                  ? s("b-notification", { staticClass: "download-tip", attrs: { "aria-close-label": "Close notification", role: "alert" }, on: { close: t.handleCloseLocalStorageLiveTip } }, [
                                                        s("div", { staticClass: "is-flex is-align-items-center" }, [
                                                            s("span", { staticClass: "is-size-5 mr-1" }, [t._v("🎉")]),
                                                            s("span", [
                                                                t._v("Local storage is now live! Data scraped afterwards will be available for download here! (Please don't remove IGEmailExtractor, otherwise local data will be lost.)"),
                                                            ]),
                                                        ]),
                                                    ])
                                                  : t._e(),
                                              s("p", { staticClass: "has-text-grey-dark is-size-7 has-text-weight-semibold is-uppercase px-2 pb-3" }, [
                                                  t._v(" Task Log "),
                                                  t.extractEmailCount > 0
                                                      ? s("span", { staticClass: "has-text-grey has-text-weight-normal is-lowercase", staticStyle: { float: "right" } }, [
                                                            t._v(" 🚀 total emails: "),
                                                            s("span", { staticClass: "has-text-weight-semibold" }, [t._v(t._s(t.extractEmailCount))]),
                                                        ])
                                                      : t._e(),
                                              ]),
                                              s(
                                                  "div",
                                                  { staticClass: "history-list" },
                                                  [
                                                      s("table", { staticClass: "table is-fullwidth", class: { "is-hoverable": t.historys.length > 0 }, staticStyle: { "margin-bottom": "15px" } }, [
                                                          t._m(1),
                                                          t.historysTotal > 0
                                                              ? s(
                                                                    "tbody",
                                                                    t._l(t.historys, function (e, a) {
                                                                        return s("tr", { key: e.id }, [
                                                                            s("td", [
                                                                                "followers" === e.extractionType
                                                                                    ? s(
                                                                                          "a",
                                                                                          {
                                                                                              staticClass: "data-item",
                                                                                              attrs: {
                                                                                                  href: "https://www.instagram.com/" + e.extractionData + "/followers/",
                                                                                                  title: "https://www.instagram.com/" + e.extractionData + "/followers/",
                                                                                                  target: "_blank",
                                                                                              },
                                                                                          },
                                                                                          [s("b-icon", { attrs: { icon: "user-check" } }), s("span", { staticClass: "text" }, [t._v(t._s(e.extractionData))])],
                                                                                          1
                                                                                      )
                                                                                    : t._e(),
                                                                                "following" === e.extractionType
                                                                                    ? s(
                                                                                          "a",
                                                                                          {
                                                                                              staticClass: "data-item",
                                                                                              attrs: {
                                                                                                  href: "https://www.instagram.com/" + e.extractionData + "/following/",
                                                                                                  title: "https://www.instagram.com/" + e.extractionData + "/following/",
                                                                                                  target: "_blank",
                                                                                              },
                                                                                          },
                                                                                          [s("b-icon", { attrs: { icon: "user-plus" } }), s("span", { staticClass: "text" }, [t._v(t._s(e.extractionData))])],
                                                                                          1
                                                                                      )
                                                                                    : t._e(),
                                                                                "hashtag" === e.extractionType
                                                                                    ? s(
                                                                                          "a",
                                                                                          {
                                                                                              staticClass: "data-item",
                                                                                              attrs: {
                                                                                                  href: "https://www.instagram.com/explore/tags/" + e.extractionData + "/",
                                                                                                  title: "https://www.instagram.com/explore/tags/" + e.extractionData + "/",
                                                                                                  target: "_blank",
                                                                                              },
                                                                                          },
                                                                                          [s("b-icon", { attrs: { icon: "hashtag" } }), s("span", { staticClass: "text" }, [t._v(t._s(e.extractionData))])],
                                                                                          1
                                                                                      )
                                                                                    : t._e(),
                                                                                "likes" === e.extractionType
                                                                                    ? s(
                                                                                          "a",
                                                                                          {
                                                                                              staticClass: "data-item",
                                                                                              attrs: {
                                                                                                  href: "https://www.instagram.com/p/" + e.extractionData + "/",
                                                                                                  title: "https://www.instagram.com/p/" + e.extractionData + "/",
                                                                                                  target: "_blank",
                                                                                              },
                                                                                          },
                                                                                          [s("b-icon", { attrs: { icon: "heart" } }), s("span", { staticClass: "text" }, [t._v(t._s(e.extractionData))])],
                                                                                          1
                                                                                      )
                                                                                    : t._e(),
                                                                                "comment" === e.extractionType
                                                                                    ? s(
                                                                                          "a",
                                                                                          {
                                                                                              staticClass: "data-item",
                                                                                              attrs: {
                                                                                                  href: "https://www.instagram.com/p/" + e.extractionData + "/",
                                                                                                  title: "https://www.instagram.com/p/" + e.extractionData + "/",
                                                                                                  target: "_blank",
                                                                                              },
                                                                                          },
                                                                                          [s("b-icon", { attrs: { icon: "comment" } }), s("span", { staticClass: "text" }, [t._v(t._s(e.extractionData))])],
                                                                                          1
                                                                                      )
                                                                                    : t._e(),
                                                                                "location" === e.extractionType
                                                                                    ? s(
                                                                                          "a",
                                                                                          {
                                                                                              staticClass: "data-item",
                                                                                              attrs: {
                                                                                                  href: "https://www.instagram.com/explore/locations/" + e.extractionData + "/",
                                                                                                  title: "https://www.instagram.com/explore/locations/" + e.extractionData + "/",
                                                                                                  target: "_blank",
                                                                                              },
                                                                                          },
                                                                                          [s("b-icon", { attrs: { icon: "map-marker-alt" } }), s("span", { staticClass: "text" }, [t._v(t._s(e.extractionData))])],
                                                                                          1
                                                                                      )
                                                                                    : t._e(),
                                                                                "userlist" === e.extractionType
                                                                                    ? s(
                                                                                          "a",
                                                                                          {
                                                                                              staticClass: "data-item",
                                                                                              attrs: { title: e.extractionData + ": " + t.customUsersTitle(e.customUserList) },
                                                                                              on: {
                                                                                                  click: function (a) {
                                                                                                      return t.showUserListModel(e.customUserList);
                                                                                                  },
                                                                                              },
                                                                                          },
                                                                                          [s("b-icon", { attrs: { icon: "address-book" } }), s("span", { staticClass: "text" }, [t._v(t._s(e.extractionData))])],
                                                                                          1
                                                                                      )
                                                                                    : t._e(),
                                                                            ]),
                                                                            s(
                                                                                "td",
                                                                                [
                                                                                    e.scrapedCount > 0 && t.extractLocalData[a] && t.extractLocalData[a].length > 0
                                                                                        ? s(
                                                                                              "b-dropdown",
                                                                                              {
                                                                                                  attrs: { "aria-role": "list" },
                                                                                                  scopedSlots: t._u(
                                                                                                      [
                                                                                                          {
                                                                                                              key: "trigger",
                                                                                                              fn: function () {
                                                                                                                  return [
                                                                                                                      s("p", { staticClass: "download-link", attrs: { role: "button" } }, [
                                                                                                                          s("span", [t._v(t._s(e.scrapedCount))]),
                                                                                                                          s("svg", { attrs: { width: "32", height: "32", viewBox: "0 0 24 24" } }, [
                                                                                                                              s("path", { attrs: { fill: "currentColor", d: "M19 9h-4V3H9v6H5l7 7l7-7zM5 18v2h14v-2H5z" } }),
                                                                                                                          ]),
                                                                                                                      ]),
                                                                                                                  ];
                                                                                                              },
                                                                                                              proxy: !0,
                                                                                                          },
                                                                                                      ],
                                                                                                      null,
                                                                                                      !0
                                                                                                  ),
                                                                                              },
                                                                                              [
                                                                                                  s("p", { staticClass: "export-type-title is-size-6 has-text-centered has-text-grey pt-2 pb-3 mb-1" }, [
                                                                                                      t._v(" " + t._s(t._f("dataTypeTitle")(e.extractionData, e.extractionType)) + " "),
                                                                                                  ]),
                                                                                                  s(
                                                                                                      "b-dropdown-item",
                                                                                                      {
                                                                                                          attrs: { "aria-role": "listitem" },
                                                                                                          on: {
                                                                                                              click: function (e) {
                                                                                                                  return t.handleDownload("all", t.extractLocalData[a], "xlsx");
                                                                                                              },
                                                                                                          },
                                                                                                      },
                                                                                                      [
                                                                                                          s("div", { staticClass: "export-menu-item" }, [
                                                                                                              s("span", { staticClass: "i-format" }, [
                                                                                                                  s(
                                                                                                                      "svg",
                                                                                                                      {
                                                                                                                          attrs: {
                                                                                                                              xmlns: "http://www.w3.org/2000/svg",
                                                                                                                              "aria-hidden": "true",
                                                                                                                              role: "img",
                                                                                                                              width: "1em",
                                                                                                                              height: "1em",
                                                                                                                              preserveAspectRatio: "xMidYMid meet",
                                                                                                                              viewBox: "0 0 512 512",
                                                                                                                          },
                                                                                                                      },
                                                                                                                      [
                                                                                                                          s("path", {
                                                                                                                              attrs: {
                                                                                                                                  fill: "currentColor",
                                                                                                                                  d:
                                                                                                                                      "M453.547 273.449H372.12v-40.714h81.427v40.714zm0 23.264H372.12v40.714h81.427v-40.714zm0-191.934H372.12v40.713h81.427V104.78zm0 63.978H372.12v40.713h81.427v-40.713zm0 191.934H372.12v40.714h81.427V360.69zm56.242 80.264c-2.326 12.098-16.867 12.388-26.58 12.796H302.326v52.345h-36.119L0 459.566V52.492L267.778 5.904h34.548v46.355h174.66c9.83.407 20.648-.291 29.197 5.583c5.991 8.608 5.41 19.543 5.817 29.43l-.233 302.791c-.29 16.925 1.57 34.2-1.978 50.892zm-296.51-91.256c-16.052-32.57-32.395-64.909-48.39-97.48c15.82-31.698 31.408-63.512 46.937-95.327c-13.203.64-26.406 1.454-39.55 2.385c-9.83 23.904-21.288 47.169-28.965 71.888c-7.154-23.323-16.634-45.774-25.3-68.515c-12.796.698-25.592 1.454-38.387 2.21c13.493 29.78 27.86 59.15 40.946 89.104c-15.413 29.081-29.837 58.57-44.785 87.825c12.737.523 25.475 1.047 38.212 1.221c9.074-23.148 20.357-45.424 28.267-69.038c7.096 25.359 19.135 48.798 29.023 73.051c14.017.99 27.976 1.862 41.993 2.676zM484.26 79.882H302.326v24.897h46.53v40.713h-46.53v23.265h46.53v40.713h-46.53v23.265h46.53v40.714h-46.53v23.264h46.53v40.714h-46.53v23.264h46.53v40.714h-46.53v26.897H484.26V79.882z",
                                                                                                                              },
                                                                                                                          }),
                                                                                                                      ]
                                                                                                                  ),
                                                                                                              ]),
                                                                                                              s("span", { staticClass: "export-desc" }, [t._v("export all to xlsx")]),
                                                                                                          ]),
                                                                                                      ]
                                                                                                  ),
                                                                                                  s(
                                                                                                      "b-dropdown-item",
                                                                                                      {
                                                                                                          attrs: { "aria-role": "listitem" },
                                                                                                          on: {
                                                                                                              click: function (e) {
                                                                                                                  return t.handleDownload("all", t.extractLocalData[a], "csv");
                                                                                                              },
                                                                                                          },
                                                                                                      },
                                                                                                      [
                                                                                                          s("div", { staticClass: "export-menu-item" }, [
                                                                                                              s("span", { staticClass: "i-format", staticStyle: { "font-size": "34px" } }, [
                                                                                                                  s(
                                                                                                                      "svg",
                                                                                                                      {
                                                                                                                          attrs: {
                                                                                                                              xmlns: "http://www.w3.org/2000/svg",
                                                                                                                              "aria-hidden": "true",
                                                                                                                              role: "img",
                                                                                                                              width: "1em",
                                                                                                                              height: "1em",
                                                                                                                              preserveAspectRatio: "xMidYMid meet",
                                                                                                                              viewBox: "0 0 40 40",
                                                                                                                          },
                                                                                                                      },
                                                                                                                      [
                                                                                                                          s("path", {
                                                                                                                              attrs: {
                                                                                                                                  fill: "currentColor",
                                                                                                                                  d:
                                                                                                                                      "M30.918 15.983h-.678v-3.271a.448.448 0 0 0-.006-.062a.541.541 0 0 0-.132-.358L24.66 6.075l-.004-.004a.566.566 0 0 0-.11-.092l-.036-.022a.548.548 0 0 0-.109-.046l-.03-.01a.539.539 0 0 0-.127-.016H10.867c-.611 0-1.107.497-1.107 1.107v8.99h-.678c-.874 0-1.582.708-1.582 1.582v8.228c0 .873.709 1.582 1.582 1.582h.678v5.632c0 .61.496 1.107 1.107 1.107h18.266c.61 0 1.107-.497 1.107-1.107v-5.632h.678c.873 0 1.582-.708 1.582-1.582v-8.228c0-.873-.708-1.581-1.582-1.581zM10.867 6.992H23.69v5.664c0 .306.248.553.554.553h4.89v2.773H10.867v-8.99zm8.282 15.168c-1.344-.48-2.231-1.224-2.231-2.399c0-1.379 1.164-2.422 3.059-2.422c.924 0 1.583.18 2.063.407l-.408 1.463a3.794 3.794 0 0 0-1.679-.383c-.792 0-1.176.371-1.176.779c0 .516.443.743 1.499 1.139c1.428.528 2.087 1.271 2.087 2.411c0 1.356-1.031 2.507-3.25 2.507c-.924 0-1.835-.252-2.291-.504l.372-1.499a4.613 4.613 0 0 0 2.026.504c.84 0 1.284-.349 1.284-.876c0-.504-.383-.791-1.355-1.127zm-9.526-.552c0-2.747 1.967-4.27 4.413-4.27c.948 0 1.667.191 1.991.348l-.384 1.451a3.85 3.85 0 0 0-1.535-.3c-1.439 0-2.566.875-2.566 2.674c0 1.607.959 2.627 2.578 2.627c.564 0 1.164-.107 1.535-.264l.265 1.439c-.324.155-1.092.348-2.063.348c-2.795.001-4.234-1.75-4.234-4.053zm19.51 11.1H10.867v-5.333h18.266v5.333zm-1.478-7.166H25.52l-2.59-8.084h2.003l.983 3.419c.275.971.527 1.883.719 2.89h.036a35.87 35.87 0 0 1 .731-2.854l1.032-3.454h1.942l-2.721 8.083z",
                                                                                                                              },
                                                                                                                          }),
                                                                                                                      ]
                                                                                                                  ),
                                                                                                              ]),
                                                                                                              s("span", { staticClass: "export-desc" }, [t._v("export all to csv")]),
                                                                                                          ]),
                                                                                                      ]
                                                                                                  ),
                                                                                              ],
                                                                                              1
                                                                                          )
                                                                                        : s("span", { staticClass: "number-text" }, [t._v(t._s(e.scrapedCount))]),
                                                                                ],
                                                                                1
                                                                            ),
                                                                            s(
                                                                                "td",
                                                                                [
                                                                                    e.emailCount > 0 && t.extractLocalData[a] && t.extractLocalData[a].length > 0
                                                                                        ? s(
                                                                                              "b-dropdown",
                                                                                              {
                                                                                                  attrs: { "aria-role": "list" },
                                                                                                  scopedSlots: t._u(
                                                                                                      [
                                                                                                          {
                                                                                                              key: "trigger",
                                                                                                              fn: function () {
                                                                                                                  return [
                                                                                                                      s("p", { staticClass: "download-link", attrs: { role: "button" } }, [
                                                                                                                          s("span", [t._v(t._s(e.emailCount))]),
                                                                                                                          s("svg", { attrs: { width: "32", height: "32", viewBox: "0 0 24 24" } }, [
                                                                                                                              s("path", { attrs: { fill: "currentColor", d: "M19 9h-4V3H9v6H5l7 7l7-7zM5 18v2h14v-2H5z" } }),
                                                                                                                          ]),
                                                                                                                      ]),
                                                                                                                  ];
                                                                                                              },
                                                                                                              proxy: !0,
                                                                                                          },
                                                                                                      ],
                                                                                                      null,
                                                                                                      !0
                                                                                                  ),
                                                                                              },
                                                                                              [
                                                                                                  s("p", { staticClass: "export-type-title is-size-6 has-text-centered has-text-grey pt-2 pb-3 mb-1" }, [
                                                                                                      t._v(" " + t._s(t._f("dataTypeTitle")(e.extractionData, e.extractionType)) + " "),
                                                                                                  ]),
                                                                                                  s(
                                                                                                      "b-dropdown-item",
                                                                                                      {
                                                                                                          attrs: { "aria-role": "listitem" },
                                                                                                          on: {
                                                                                                              click: function (e) {
                                                                                                                  return t.handleDownload("email", t.extractLocalData[a], "xlsx");
                                                                                                              },
                                                                                                          },
                                                                                                      },
                                                                                                      [
                                                                                                          s("div", { staticClass: "export-menu-item" }, [
                                                                                                              s("span", { staticClass: "i-format" }, [
                                                                                                                  s(
                                                                                                                      "svg",
                                                                                                                      {
                                                                                                                          attrs: {
                                                                                                                              xmlns: "http://www.w3.org/2000/svg",
                                                                                                                              "aria-hidden": "true",
                                                                                                                              role: "img",
                                                                                                                              width: "1em",
                                                                                                                              height: "1em",
                                                                                                                              preserveAspectRatio: "xMidYMid meet",
                                                                                                                              viewBox: "0 0 512 512",
                                                                                                                          },
                                                                                                                      },
                                                                                                                      [
                                                                                                                          s("path", {
                                                                                                                              attrs: {
                                                                                                                                  fill: "currentColor",
                                                                                                                                  d:
                                                                                                                                      "M453.547 273.449H372.12v-40.714h81.427v40.714zm0 23.264H372.12v40.714h81.427v-40.714zm0-191.934H372.12v40.713h81.427V104.78zm0 63.978H372.12v40.713h81.427v-40.713zm0 191.934H372.12v40.714h81.427V360.69zm56.242 80.264c-2.326 12.098-16.867 12.388-26.58 12.796H302.326v52.345h-36.119L0 459.566V52.492L267.778 5.904h34.548v46.355h174.66c9.83.407 20.648-.291 29.197 5.583c5.991 8.608 5.41 19.543 5.817 29.43l-.233 302.791c-.29 16.925 1.57 34.2-1.978 50.892zm-296.51-91.256c-16.052-32.57-32.395-64.909-48.39-97.48c15.82-31.698 31.408-63.512 46.937-95.327c-13.203.64-26.406 1.454-39.55 2.385c-9.83 23.904-21.288 47.169-28.965 71.888c-7.154-23.323-16.634-45.774-25.3-68.515c-12.796.698-25.592 1.454-38.387 2.21c13.493 29.78 27.86 59.15 40.946 89.104c-15.413 29.081-29.837 58.57-44.785 87.825c12.737.523 25.475 1.047 38.212 1.221c9.074-23.148 20.357-45.424 28.267-69.038c7.096 25.359 19.135 48.798 29.023 73.051c14.017.99 27.976 1.862 41.993 2.676zM484.26 79.882H302.326v24.897h46.53v40.713h-46.53v23.265h46.53v40.713h-46.53v23.265h46.53v40.714h-46.53v23.264h46.53v40.714h-46.53v23.264h46.53v40.714h-46.53v26.897H484.26V79.882z",
                                                                                                                              },
                                                                                                                          }),
                                                                                                                      ]
                                                                                                                  ),
                                                                                                              ]),
                                                                                                              s("span", { staticClass: "export-desc" }, [t._v("export email to xlsx")]),
                                                                                                          ]),
                                                                                                      ]
                                                                                                  ),
                                                                                                  s(
                                                                                                      "b-dropdown-item",
                                                                                                      {
                                                                                                          attrs: { "aria-role": "listitem" },
                                                                                                          on: {
                                                                                                              click: function (e) {
                                                                                                                  return t.handleDownload("email", t.extractLocalData[a], "csv");
                                                                                                              },
                                                                                                          },
                                                                                                      },
                                                                                                      [
                                                                                                          s("div", { staticClass: "export-menu-item" }, [
                                                                                                              s("span", { staticClass: "i-format", staticStyle: { "font-size": "34px" } }, [
                                                                                                                  s(
                                                                                                                      "svg",
                                                                                                                      {
                                                                                                                          attrs: {
                                                                                                                              xmlns: "http://www.w3.org/2000/svg",
                                                                                                                              "aria-hidden": "true",
                                                                                                                              role: "img",
                                                                                                                              width: "1em",
                                                                                                                              height: "1em",
                                                                                                                              preserveAspectRatio: "xMidYMid meet",
                                                                                                                              viewBox: "0 0 40 40",
                                                                                                                          },
                                                                                                                      },
                                                                                                                      [
                                                                                                                          s("path", {
                                                                                                                              attrs: {
                                                                                                                                  fill: "currentColor",
                                                                                                                                  d:
                                                                                                                                      "M30.918 15.983h-.678v-3.271a.448.448 0 0 0-.006-.062a.541.541 0 0 0-.132-.358L24.66 6.075l-.004-.004a.566.566 0 0 0-.11-.092l-.036-.022a.548.548 0 0 0-.109-.046l-.03-.01a.539.539 0 0 0-.127-.016H10.867c-.611 0-1.107.497-1.107 1.107v8.99h-.678c-.874 0-1.582.708-1.582 1.582v8.228c0 .873.709 1.582 1.582 1.582h.678v5.632c0 .61.496 1.107 1.107 1.107h18.266c.61 0 1.107-.497 1.107-1.107v-5.632h.678c.873 0 1.582-.708 1.582-1.582v-8.228c0-.873-.708-1.581-1.582-1.581zM10.867 6.992H23.69v5.664c0 .306.248.553.554.553h4.89v2.773H10.867v-8.99zm8.282 15.168c-1.344-.48-2.231-1.224-2.231-2.399c0-1.379 1.164-2.422 3.059-2.422c.924 0 1.583.18 2.063.407l-.408 1.463a3.794 3.794 0 0 0-1.679-.383c-.792 0-1.176.371-1.176.779c0 .516.443.743 1.499 1.139c1.428.528 2.087 1.271 2.087 2.411c0 1.356-1.031 2.507-3.25 2.507c-.924 0-1.835-.252-2.291-.504l.372-1.499a4.613 4.613 0 0 0 2.026.504c.84 0 1.284-.349 1.284-.876c0-.504-.383-.791-1.355-1.127zm-9.526-.552c0-2.747 1.967-4.27 4.413-4.27c.948 0 1.667.191 1.991.348l-.384 1.451a3.85 3.85 0 0 0-1.535-.3c-1.439 0-2.566.875-2.566 2.674c0 1.607.959 2.627 2.578 2.627c.564 0 1.164-.107 1.535-.264l.265 1.439c-.324.155-1.092.348-2.063.348c-2.795.001-4.234-1.75-4.234-4.053zm19.51 11.1H10.867v-5.333h18.266v5.333zm-1.478-7.166H25.52l-2.59-8.084h2.003l.983 3.419c.275.971.527 1.883.719 2.89h.036a35.87 35.87 0 0 1 .731-2.854l1.032-3.454h1.942l-2.721 8.083z",
                                                                                                                              },
                                                                                                                          }),
                                                                                                                      ]
                                                                                                                  ),
                                                                                                              ]),
                                                                                                              s("span", { staticClass: "export-desc" }, [t._v("export email to csv")]),
                                                                                                          ]),
                                                                                                      ]
                                                                                                  ),
                                                                                              ],
                                                                                              1
                                                                                          )
                                                                                        : s("span", { staticClass: "number-text" }, [t._v(t._s(e.emailCount))]),
                                                                                ],
                                                                                1
                                                                            ),
                                                                            s("td", [t._v(t._s(e.updatedAt))]),
                                                                            s("td", [
                                                                                e.isAllScraped
                                                                                    ? s("span", { staticClass: "i-completed has-text-mygreen" }, [
                                                                                          s("svg", { attrs: { width: "32", height: "32", viewBox: "0 0 16 16" } }, [
                                                                                              s("path", {
                                                                                                  attrs: {
                                                                                                      fill: "none",
                                                                                                      stroke: "currentColor",
                                                                                                      "stroke-linecap": "round",
                                                                                                      "stroke-linejoin": "round",
                                                                                                      "stroke-width": "1.5",
                                                                                                      d: "m1.75 9.75l2.5 2.5m3.5-4l2.5-2.5m-4.5 4l2.5 2.5l6-6.5",
                                                                                                  },
                                                                                              }),
                                                                                          ]),
                                                                                          s("span", [t._v("Completed")]),
                                                                                      ])
                                                                                    : s(
                                                                                          "a",
                                                                                          {
                                                                                              staticClass: "i-continue",
                                                                                              on: {
                                                                                                  click: function (a) {
                                                                                                      return t.handleContinueTask(e);
                                                                                                  },
                                                                                              },
                                                                                          },
                                                                                          [t._v("Continue >>")]
                                                                                      ),
                                                                            ]),
                                                                        ]);
                                                                    }),
                                                                    0
                                                                )
                                                              : s("tbody", [
                                                                    t.historysLoading
                                                                        ? t._e()
                                                                        : s("tr", [
                                                                              s("td", { staticStyle: { "text-align": "center", color: "#888" }, attrs: { colspan: "5" } }, [
                                                                                  s("svg", { staticStyle: { opacity: "0.1", margin: "70px 225px 5px" }, attrs: { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 512" } }, [
                                                                                      s("path", {
                                                                                          attrs: {
                                                                                              d:
                                                                                                  "M425.7 256c-16.9 0-32.8-9-41.4-23.4L320 126l-64.2 106.6c-8.7 14.5-24.6 23.5-41.5 23.5-4.5 0-9-.6-13.3-1.9L64 215v178c0 14.7 10 27.5 24.2 31l216.2 54.1c10.2 2.5 20.9 2.5 31 0L551.8 424c14.2-3.6 24.2-16.4 24.2-31V215l-137 39.1c-4.3 1.3-8.8 1.9-13.3 1.9zm212.6-112.2L586.8 41c-3.1-6.2-9.8-9.8-16.7-8.9L320 64l91.7 152.1c3.8 6.3 11.4 9.3 18.5 7.3l197.9-56.5c9.9-2.9 14.7-13.9 10.2-23.1zM53.2 41L1.7 143.8c-4.6 9.2.3 20.2 10.1 23l197.9 56.5c7.1 2 14.7-1 18.5-7.3L320 64 69.8 32.1c-6.9-.8-13.5 2.7-16.6 8.9z",
                                                                                          },
                                                                                      }),
                                                                                  ]),
                                                                                  s("p", [t._v("Logs empty")]),
                                                                                  s("p", { staticClass: "has-text-grey-light" }, [t._v(" records of the last 2 months ")]),
                                                                              ]),
                                                                          ]),
                                                                ]),
                                                      ]),
                                                      s("b-loading", {
                                                          attrs: { "is-full-page": !1 },
                                                          model: {
                                                              value: t.historysLoading,
                                                              callback: function (e) {
                                                                  t.historysLoading = e;
                                                              },
                                                              expression: "historysLoading",
                                                          },
                                                      }),
                                                      t.historysTotal > 10
                                                          ? s("b-pagination", {
                                                                attrs: { simple: !0, total: t.historysTotal, size: "is-small", "per-page": 10 },
                                                                on: { change: t.handleHistoryChangePage },
                                                                model: {
                                                                    value: t.historysPage,
                                                                    callback: function (e) {
                                                                        t.historysPage = e;
                                                                    },
                                                                    expression: "historysPage",
                                                                },
                                                            })
                                                          : t._e(),
                                                  ],
                                                  1
                                              ),
                                          ],
                                          1
                                      ),
                                      s(
                                          "div",
                                          { directives: [{ name: "show", rawName: "v-show", value: "faq" === t.tabType, expression: "tabType === 'faq'" }], staticClass: "px-5 py-2" },
                                          [
                                              t._l(t.collapses, function (e, a) {
                                                  return s(
                                                      "b-collapse",
                                                      {
                                                          key: a,
                                                          staticClass: "is-size-7",
                                                          attrs: { animation: "slide", open: t.isOpenFaq == a },
                                                          on: {
                                                              open: function (e) {
                                                                  t.isOpenFaq = a;
                                                              },
                                                              close: function (e) {
                                                                  t.isOpenFaq = -1;
                                                              },
                                                          },
                                                          scopedSlots: t._u(
                                                              [
                                                                  {
                                                                      key: "trigger",
                                                                      fn: function (a) {
                                                                          return [
                                                                              s("div", { staticClass: "is-flex py-2", staticStyle: { "border-bottom": "1px solid #f1f1f1" }, attrs: { role: "button" } }, [
                                                                                  s(
                                                                                      "p",
                                                                                      { staticClass: "is-flex is-flex-grow-1 has-text-grey-dark has-text-weight-semibold is-align-items-center" },
                                                                                      [s("b-icon", { staticClass: "has-text-grey-lighter", attrs: { icon: "question-circle" } }), t._v(" " + t._s(e.title) + " ")],
                                                                                      1
                                                                                  ),
                                                                                  s("a", { staticClass: "is-flex is-justify-content-center is-align-items-center" }, [s("b-icon", { attrs: { icon: a.open ? "angle-down" : "angle-up" } })], 1),
                                                                              ]),
                                                                          ];
                                                                      },
                                                                  },
                                                              ],
                                                              null,
                                                              !0
                                                          ),
                                                      },
                                                      [
                                                          0 === a
                                                              ? s("div", { staticClass: "px-1 py-2 has-text-grey" }, [
                                                                    t._v(
                                                                        ' After installing this extension, select the extraction type in the pop-up window of the extension, enter the corresponding username, hashtag, location link, and click the "'
                                                                    ),
                                                                    s("span", { staticClass: "has-text-grey-dark has-text-weight-semibold" }, [t._v("Start Extracting")]),
                                                                    t._v('" button to start working. '),
                                                                ])
                                                              : 1 === a
                                                              ? s("div", { staticClass: "px-1 py-2 has-text-grey" }, [
                                                                    t._v(" The bot is available for free trial extraction for the first "),
                                                                    s("span", { staticClass: "has-text-grey-dark has-text-weight-semibold" }, [t._v(t._s((t.configs && t.configs.trialCount) || 30))]),
                                                                    t._v(" email. After that, you must subscribe to continue using IGEmailExtractor. "),
                                                                ])
                                                              : 2 === a
                                                              ? s("div", { staticClass: "px-1 py-2 has-text-grey" }, [
                                                                    t._v(' You can continue the last extraction task instead of starting over each time. In the "'),
                                                                    s("span", { staticClass: "has-text-grey-dark has-text-weight-semibold" }, [t._v("Task Log")]),
                                                                    t._v('" tab of the extended pop-up panel, you can see the list of recently processed tasks and just click the "'),
                                                                    s("span", { staticClass: "has-text-grey-dark has-text-weight-semibold" }, [t._v("Continue")]),
                                                                    t._v('" button.'),
                                                                    s("br"),
                                                                    s("br"),
                                                                    t._v(' Also local storage is now online! The scraped data will be available for download in the "'),
                                                                    s("span", { staticClass: "has-text-grey-dark has-text-weight-semibold" }, [t._v("Task Log")]),
                                                                    t._v('" list! ('),
                                                                    s("span", { staticClass: "has-text-grey-dark has-text-weight-semibold" }, [t._v("Please do not delete IGEmailExtractor, otherwise local data will be lost.")]),
                                                                    t._v(") "),
                                                                ])
                                                              : 3 === a
                                                              ? s("div", { staticClass: "px-1 py-2 has-text-grey" }, [
                                                                    t._v(" Yes! We will never ask you for your IG password! All data is processed locally only and we do not store your extracted data. "),
                                                                ])
                                                              : 4 === a
                                                              ? s("div", { staticClass: "px-1 py-2 has-text-grey" }, [
                                                                    t._v(
                                                                        " Instagram (not IGEmailExtractor) limits the number of web requests in any given time period. Their limits are not exactly known, may change at any time, and will vary from account to account."
                                                                    ),
                                                                    s("br"),
                                                                    s("br"),
                                                                    t._v(" There are four main types of restrictions: "),
                                                                    s("ul", { staticStyle: { "list-style": "decimal", "padding-left": "12px", "padding-top": "5px" } }, [
                                                                        s("li", [
                                                                            t._v(" A "),
                                                                            s("span", { staticClass: "has-text-grey-dark has-text-weight-semibold" }, [t._v("429")]),
                                                                            t._v(" limit is very common. It usually takes between 10~60 minutes to clear. "),
                                                                        ]),
                                                                        s("li", [
                                                                            t._v(" A "),
                                                                            s("span", { staticClass: "has-text-grey-dark has-text-weight-semibold" }, [t._v("400")]),
                                                                            t._v(" restriction is occasionally hit and usually requires a simple account verification to be completed to be restored. "),
                                                                        ]),
                                                                        s("li", [t._v(" A soft restriction is occasionally hit and usually lasts about 10 minutes, after which it can be restored. ")]),
                                                                        s("li", [t._v(" Hard restrictions occur less frequently, but last longer, usually at least 12 hours, sometimes up to 48 hours. ")]),
                                                                    ]),
                                                                ])
                                                              : 5 === a
                                                              ? s("div", { staticClass: "px-1 py-2 has-text-grey" }, [
                                                                    t._v(' You can easily and quickly cancel your subscription at any time. Just click on "'),
                                                                    s("span", { staticClass: "has-text-grey-dark has-text-weight-semibold" }, [t._v("Unsubscribe")]),
                                                                    t._v('" in the "'),
                                                                    s("span", { staticClass: "has-text-grey-dark has-text-weight-semibold" }, [t._v("Pro")]),
                                                                    t._v('" tab of the IGEmailExtractor extension, or email us directly at '),
                                                                    s("span", { staticClass: "has-text-grey-dark has-text-weight-semibold" }, [t._v("hi@echobot.dev")]),
                                                                    t._v(" with the email address you registered your account with. If you cancel, you can still use it until the end of your current billing cycle. "),
                                                                ])
                                                              : t._e(),
                                                      ]
                                                  );
                                              }),
                                              s("div", { staticClass: "box is-size-7 has-text-grey-light m-4 py-3 px-4" }, [
                                                  s("p", { staticClass: "mb-2" }, [t._v(" Do you have an idea for making IGEmailExtractor better? We'd love to hear about it! ")]),
                                                  s(
                                                      "a",
                                                      {
                                                          staticClass: "is-flex is-align-items-center is-justify-content-center is-uppercase",
                                                          attrs: { href: "mailto:echobot.dev@gmail.com?subject=CC Email Extractor(" + t.version + ") issue" },
                                                      },
                                                      [s("b-icon", { attrs: { icon: "envelope-open-text" } }), t._v("echobot.dev@gmail.com ")],
                                                      1
                                                  ),
                                              ]),
                                          ],
                                          2
                                      ),
                                      s(
                                          "div",
                                          { directives: [{ name: "show", rawName: "v-show", value: true, expression: "tabType === 'pro'" }] },
                                          (console.log(t)),
                                          [true ? s("Pro", { attrs: { subscription: t.subscription, configs: t.configs } }) : t._e()],
                                          1
                                      ),
                                      s("div", { directives: [{ name: "show", rawName: "v-show", value: "index" === t.tabType, expression: "tabType === 'index'" }], staticClass: "copy" }, [
                                          t._v(" © 2022 "),
                                          s("a", { attrs: { href: "https://igemailextractor.echobot.dev", target: "_blank" } }, [t._v("echobot.dev")]),
                                      ]),
                                      s("div", { staticClass: "modal", class: { "is-active": false } }, [
                                          s("div", {
                                              staticClass: "modal-background",
                                              staticStyle: { "background-color": "rgba(10, 10, 10, 0.6)" },
                                              on: {
                                                  click: function (e) {
                                                      true
                                                  },
                                              },
                                          }),
                                          s("div", { staticClass: "modal-content", staticStyle: { width: "440px", margin: "0" } }, [
                                              s("div", { staticClass: "card pb-1", staticStyle: { "border-radius": "0.6rem" } }, [
                                                  s("div", { staticClass: "card-content" }, [
                                                      false
                                                          ? s(
                                                                "div",
                                                                { staticClass: "content has-text-centered px-5" },
                                                                [
                                                                    s("h3", { staticClass: "has-text-weight-semibold is-size-6 mb-4 is-flex is-justify-content-center is-align-items-center" }, [
                                                                        s("svg", { staticClass: "mr-2", attrs: { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "24", height: "24" } }, [
                                                                            s("path", { attrs: { fill: "none", d: "M0 0h24v24H0z" } }),
                                                                            s("path", {
                                                                                attrs: {
                                                                                    d:
                                                                                        "M2.8 5.2L7 8l4.186-5.86a1 1 0 0 1 1.628 0L17 8l4.2-2.8a1 1 0 0 1 1.547.95l-1.643 13.967a1 1 0 0 1-.993.883H3.889a1 1 0 0 1-.993-.883L1.253 6.149A1 1 0 0 1 2.8 5.2zM12 15a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
                                                                                    fill: "rgba(255,221,86,1)",
                                                                                },
                                                                            }),
                                                                        ]),
                                                                        t._v(" Upgrade Pro "),
                                                                    ]),
                                                                    s("p", { staticClass: "mb-4" }, [
                                                                        t._v(" You trial has ended (" + t._s(t.trialCount) + " emails). Upgrade the Pro version to extract "),
                                                                        s("span", { staticClass: "has-text-weight-semibold" }, [t._v("unlimited")]),
                                                                        t._v(" emails and unlock all features. "),
                                                                    ]),
                                                                    s(
                                                                        "b-button",
                                                                        {
                                                                            staticClass: "has-text-weight-semibold",
                                                                            attrs: { type: "is-primary", expanded: "" },
                                                                            on: {
                                                                                click: function (e) {
                                                                                    return t.handleSwitchTab("pro");
                                                                                },
                                                                            },
                                                                        },
                                                                        [t._v("Upgrade Now")]
                                                                    ),
                                                                ],
                                                                1
                                                            )
                                                          : s(
                                                                "div",
                                                                { staticClass: "content has-text-centered px-5" },
                                                                [
                                                                    s("h3", { staticClass: "has-text-weight-semibold is-size-6 mb-4 is-flex is-justify-content-center is-align-items-center" }, [
                                                                        s("svg", { staticClass: "mr-2", attrs: { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "24", height: "24" } }, [
                                                                            s("path", { attrs: { fill: "none", d: "M0 0h24v24H0z" } }),
                                                                            s("path", {
                                                                                attrs: {
                                                                                    d:
                                                                                        "M2.8 5.2L7 8l4.186-5.86a1 1 0 0 1 1.628 0L17 8l4.2-2.8a1 1 0 0 1 1.547.95l-1.643 13.967a1 1 0 0 1-.993.883H3.889a1 1 0 0 1-.993-.883L1.253 6.149A1 1 0 0 1 2.8 5.2zM12 15a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
                                                                                    fill: "#ccc",
                                                                                },
                                                                            }),
                                                                        ]),
                                                                        t._v(" Account subscription is overdue "),
                                                                    ]),
                                                                    s("p", { staticClass: "mb-4" }, [t._v(" Account suspended due to the failed payment. Please update the payment method to resume the subscription. ")]),
                                                                    s("b-button", { staticClass: "has-text-weight-semibold", attrs: { type: "is-primary", expanded: "" }, on: { click: t.handleUpdateBilling } }, [
                                                                        t._v("Update Billing Info"),
                                                                    ]),
                                                                ],
                                                                1
                                                            ),
                                                  ]),
                                              ]),
                                          ]),
                                      ]),
                                      s(
                                          "b-modal",
                                          {
                                              attrs: { width: 480 },
                                              model: {
                                                  value: t.modelUserListShow,
                                                  callback: function (e) {
                                                      t.modelUserListShow = e;
                                                  },
                                                  expression: "modelUserListShow",
                                              },
                                          },
                                          [s("div", { staticClass: "card p-4 is-size-7" }, [t._v(" " + t._s(t.currentUserListVal) + " ")])]
                                      ),
                                  ],
                                  1
                              ),
                          ])
                        : s("div", { staticClass: "px-6 py-5 m-6" }, [
                              s("div", { staticClass: "is-flex is-justify-content-center" }, [
                                  s("svg", { attrs: { width: "60", height: "60", viewBox: "0 0 60 60", fill: "none", xmlns: "http://www.w3.org/2000/svg" } }, [
                                      s("g", { attrs: { "clip-path": "url(#clip0)" } }, [
                                          s("path", {
                                              attrs: {
                                                  d:
                                                      "M24.3625 54.3625C13.27 51.805 5 41.8675 5 30C5 16.1925 16.1925 5 30 5C43.8075 5 55 16.1925 55 30C55 41.8675 46.73 51.805 35.6375 54.3625L30 60L24.3625 54.3625V54.3625ZM17.53 45.6425C19.8595 47.5055 22.5783 48.8205 25.485 49.49L26.885 49.8125L30 52.93L33.1175 49.8125L34.5175 49.4875C37.614 48.7737 40.4944 47.3284 42.9175 45.2725C41.2895 43.6014 39.3429 42.2738 37.1929 41.3682C35.0428 40.4626 32.733 39.9973 30.4 40C25.31 40 20.725 42.175 17.53 45.6425V45.6425ZM14.04 42.05C16.1411 39.8202 18.6767 38.0443 21.4904 36.8318C24.304 35.6193 27.3362 34.9959 30.4 35C33.3541 34.9962 36.2799 35.5759 39.0094 36.706C41.7388 37.836 44.2182 39.4941 46.305 41.585C48.4452 38.5728 49.7091 35.0266 49.9564 31.3398C50.2038 27.653 49.4249 23.9697 47.7062 20.6986C45.9876 17.4276 43.3963 14.6966 40.2199 12.8086C37.0435 10.9207 33.4062 9.9496 29.7115 10.0031C26.0168 10.0567 22.4092 11.1327 19.2888 13.1119C16.1685 15.0911 13.6574 17.896 12.0342 21.2155C10.4111 24.535 9.73924 28.2393 10.0933 31.9174C10.4473 35.5955 11.8134 39.1036 14.04 42.0525V42.05ZM30 32.5C27.3478 32.5 24.8043 31.4464 22.9289 29.5711C21.0536 27.6957 20 25.1522 20 22.5C20 19.8478 21.0536 17.3043 22.9289 15.4289C24.8043 13.5536 27.3478 12.5 30 12.5C32.6522 12.5 35.1957 13.5536 37.0711 15.4289C38.9464 17.3043 40 19.8478 40 22.5C40 25.1522 38.9464 27.6957 37.0711 29.5711C35.1957 31.4464 32.6522 32.5 30 32.5ZM30 27.5C31.3261 27.5 32.5979 26.9732 33.5355 26.0355C34.4732 25.0979 35 23.8261 35 22.5C35 21.1739 34.4732 19.9022 33.5355 18.9645C32.5979 18.0268 31.3261 17.5 30 17.5C28.6739 17.5 27.4022 18.0268 26.4645 18.9645C25.5268 19.9022 25 21.1739 25 22.5C25 23.8261 25.5268 25.0979 26.4645 26.0355C27.4022 26.9732 28.6739 27.5 30 27.5Z",
                                                  fill: "#DADADA",
                                              },
                                          }),
                                      ]),
                                      s("defs", [s("clipPath", { attrs: { id: "clip0" } }, [s("rect", { attrs: { width: "60", height: "60", fill: "white" } })])]),
                                  ]),
                              ]),
                              s("p", { staticClass: "is-size-6 has-text-grey-light py-4 has-text-centered" }, [t._v("CC Please sign in to save your settings. ")]),
                              s(
                                  "div",
                                  { staticClass: "px-6 pb-4" },
                                  [
                                      s("b-button", { staticClass: "mb-5 btn-g-login", attrs: { expanded: "", loading: t.loginLoading }, on: { click: t.handleLogin } }, [
                                          s("span", { staticClass: "is-flex is-justify-content-center is-align-items-center" }, [
                                              s("svg", { attrs: { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" } }, [
                                                  s("path", {
                                                      attrs: {
                                                          d:
                                                              "M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z",
                                                          fill: "#FFC107",
                                                      },
                                                  }),
                                                  s("path", {
                                                      attrs: {
                                                          d:
                                                              "M3.15302 7.3455L6.43851 9.755C7.32751 7.554 9.48052 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C8.15902 2 4.82802 4.1685 3.15302 7.3455Z",
                                                          fill: "#FF3D00",
                                                      },
                                                  }),
                                                  s("path", {
                                                      attrs: {
                                                          d:
                                                              "M12 22C14.583 22 16.93 21.0115 18.7045 19.404L15.6095 16.785C14.5717 17.5742 13.3037 18.001 12 18C9.39897 18 7.19047 16.3415 6.35847 14.027L3.09747 16.5395C4.75247 19.778 8.11347 22 12 22Z",
                                                          fill: "#4CAF50",
                                                      },
                                                  }),
                                                  s("path", {
                                                      attrs: {
                                                          d:
                                                              "M21.8055 10.0415H21V10H12V14H17.6515C17.2571 15.1082 16.5467 16.0766 15.608 16.7855L15.6095 16.7845L18.7045 19.4035C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z",
                                                          fill: "#1976D2",
                                                      },
                                                  }),
                                              ]),
                                              s("span", { staticClass: "is-size-6 pl-1" }, [t._v("Sign In with Google")]),
                                          ]),
                                      ]),
                                  ],
                                  1
                              ),
                          ]),
                ]);
            },
            r = [
                function () {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s("div", { staticClass: "logo" }, [s("img", { attrs: { width: "100%", src: a("cf05"), alt: "CC Email Extractor" } })]);
                },
                function () {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("thead", [
                        a("tr", [
                            a("th", { staticStyle: { width: "26%" } }, [t._v("Data")]),
                            a("th", { staticStyle: { width: "19%" } }, [t._v("Extracted")]),
                            a("th", { staticStyle: { width: "19%" } }, [t._v("Email")]),
                            a("th", { staticStyle: { width: "18%" } }, [t._v("Time")]),
                            a("th", [t._v("Status")]),
                        ]),
                    ]);
                },
            ],
            n = a("ade3"),
            o = a("1da1"),
            l =
                (a("96cf"),
                a("b64b"),
                a("d3b7"),
                a("25f0"),
                a("ac1f"),
                a("4d63"),
                a("c607"),
                a("2c3e"),
                a("466d"),
                a("498a"),
                a("5319"),
                a("1276"),
                a("4de4"),
                a("00b4"),
                a("159b"),
                a("caad"),
                a("99af"),
                a("a15b"),
                a("2532"),
                a("d81d"),
                a("fb6a"),
                a("5b81"),
                a("9845")),
            c = a.n(l),
            p = a("5a0c"),
            u = a.n(p),
            h = a("bc3a"),
            d = a.n(h),
            g = a("3452"),
            m = a.n(g),
            b = a("fa20"),
            v = a("fa7d"),
            x = a("a4af"),
            f = {
                name: "App",
                data: function () {
                    return {
                        insId: "codeconfig",
                        insHashtag: "",
                        insPostUrl: "",
                        insLocationUrl: "",
                        extractionType: 0,
                        tabType: "index",
                        user: {},
                        insLogged: 1,
                        intervals: [2, 6],
                        payType: 0,
                        isOpenFaq: -1,
                        collapses: [
                            { title: "How to get started?" },
                            { title: "Do you offer a trial?" },
                            { title: 'How to "continue" the last extraction task?' },
                            { title: "Is it safe to use IGEmailExtractor?" },
                            { title: "What are the limits of IG?" },
                            { title: "How to cancel my subscription?" },
                        ],
                        subscription: {},
                        version: "",
                        loginLoading: !1,
                        extractEmailCount: 0,
                        isShowProUpgradePop: 0,
                        trialCount: 30,
                        historys: [],
                        historysPage: 1,
                        historysTotal: 0,
                        historysLoading: !0,
                        loginType: "web",
                        configs: {},
                        extractLocalData: [],
                        tabHistoryListShow: !1,
                        localStorageLiveTipShow: !1,
                        historysCursor: {},
                        userListVal: "",
                        modelUserListShow: !1,
                        currentUserListVal: "",
                    };
                },
                filters: {
                    dataTypeTitle: function (t, e) {
                        if (!t) return "";
                        var a = "";
                        switch (e) {
                            case "followers":
                                a = "Export @".concat(t, "'s followers");
                                break;
                            case "following":
                                a = "Export @".concat(t, "'s following");
                                break;
                            case "hashtag":
                                a = "Export #".concat(t, " publishers");
                                break;
                            case "likes":
                                a = "Export ❤️".concat(t, " post's likers");
                                break;
                            case "comment":
                                a = "Export 📄".concat(t, " post's commenters");
                                break;
                            case "location":
                                a = "Export 📍".concat(t, " publishers");
                                break;
                            case "userlist":
                                a = "Export user list";
                                break;
                        }
                        return a;
                    },
                },
                created: function () {
                    var t = this,
                        e = c.a.runtime.getManifest(),
                        a = e.version;
                    (this.version = "v".concat(a)),
                        this.initData(),
                        c.a.storage.onChanged.addListener(
                            (function () {
                                var e = Object(o["a"])(
                                    regeneratorRuntime.mark(function e(a) {
                                        var s, i, r, n, o;
                                        return regeneratorRuntime.wrap(function (e) {
                                            while (1)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        (s = Object.keys(a)), (i = 0), (r = s);
                                                    case 2:
                                                        if (!(i < r.length)) {
                                                            e.next = 11;
                                                            break;
                                                        }
                                                        if (((n = r[i]), "webAuthData" !== n || !a[n].newValue || a[n].oldValue)) {
                                                            e.next = 8;
                                                            break;
                                                        }
                                                        if (((o = a[n].newValue), o && o.id))
                                                            try {
                                                                Object(b["i"])({ username: o.email, id: o.id }).then(function () {
                                                                    t.initData(), d.a.get("https://server.echobot.dev/auth/logout"), c.a.storage.local.remove("webAuthData");
                                                                });
                                                            } catch (l) {
                                                                console.log(l);
                                                            }
                                                        return e.abrupt("break", 11);
                                                    case 8:
                                                        i++, (e.next = 2);
                                                        break;
                                                    case 11:
                                                    case "end":
                                                        return e.stop();
                                                }
                                        }, e);
                                    })
                                );
                                return function (t) {
                                    return e.apply(this, arguments);
                                };
                            })()
                        );
                },
                methods: {
                    getInsConfigs: function () {
                        var t = this;
                        return Object(o["a"])(
                            regeneratorRuntime.mark(function e() {
                                var a, s, i, r, n;
                                return regeneratorRuntime.wrap(
                                    function (e) {
                                        while (1)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    return (a = {}), (e.prev = 1), (e.next = 4), Object(b["c"])();
                                                case 4:
                                                    (s = e.sent),
                                                        "ok" === s.status &&
                                                            (s.key
                                                                ? ((i = s.key),
                                                                  (r = s.value),
                                                                  (n = m.a.AES.decrypt(r, m.a.enc.Utf8.parse(t.$config.ENCRYPT_KEY), { iv: m.a.enc.Hex.parse(i), mode: m.a.mode.CBC, format: m.a.format.Hex }).toString(m.a.enc.Utf8)),
                                                                  (a = JSON.parse(n)))
                                                                : (a = s)),
                                                        (e.next = 11);
                                                    break;
                                                case 8:
                                                    (e.prev = 8), (e.t0 = e["catch"](1)), console.log(e.t0);
                                                case 11:
                                                    return e.abrupt("return", a);
                                                case 12:
                                                case "end":
                                                    return e.stop();
                                            }
                                    },
                                    e,
                                    null,
                                    [[1, 8]]
                                );
                            })
                        )();
                    },
                    initData: function () {
                        var t = this;
                        return Object(o["a"])(
                            regeneratorRuntime.mark(function e() {
                                var a, s, i, r, n, o, l, p, u, h, g, v, x, f;
                                return regeneratorRuntime.wrap(
                                    function (e) {
                                        while (1)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    return (t.tabType = "index"), (e.next = 3), t.getUserInfo();
                                                case 3:
                                                    if (t.user.id) {
                                                        e.next = 21;
                                                        break;
                                                    }
                                                    return (e.next = 6), c.a.storage.local.get("webAuthData");
                                                case 6:
                                                    if (((a = e.sent), (s = a.webAuthData), !s || !s.id)) {
                                                        e.next = 14;
                                                        break;
                                                    }
                                                    try {
                                                        (t.loginLoading = !0),
                                                            Object(b["i"])({ username: s.email, id: s.id }).then(function () {
                                                                t.initData(), d.a.get("https://server.echobot.dev/auth/logout"), (t.loginLoading = !1);
                                                            });
                                                    } catch (w) {
                                                        (t.loginLoading = !1), console.log(w);
                                                    }
                                                    return c.a.storage.local.remove("webAuthData"), e.abrupt("return", !1);
                                                case 14:
                                                    return (e.next = 16), d.a.get("https://server.echobot.dev/auth/info");
                                                case 16:
                                                    if (((i = e.sent), (i = i.data), !(200 === i.code && i.data && i.data.id && i.data.email))) {
                                                        e.next = 21;
                                                        break;
                                                    }
                                                    try {
                                                        (t.loginLoading = !0),
                                                            Object(b["i"])({ username: i.data.email, id: i.data.id }).then(function () {
                                                                t.initData(), d.a.get("https://server.echobot.dev/auth/logout"), (t.loginLoading = !1);
                                                            });
                                                    } catch (w) {
                                                        (t.loginLoading = !1), console.log(w);
                                                    }
                                                    return e.abrupt("return", !1);
                                                case 21:
                                                    if (t.configs.objectId) {
                                                        e.next = 25;
                                                        break;
                                                    }
                                                    return (e.next = 24), t.getInsConfigs();
                                                case 24:
                                                    t.configs = e.sent;
                                                case 25:
                                                    if (t.user.id) {
                                                        e.next = 27;
                                                        break;
                                                    }
                                                    return e.abrupt("return");
                                                case 27:
                                                    return (t.trialCount = t.configs.trialCount || 30), (e.next = 30), c.a.storage.local.get(["intervals", "tabHistoryListShow", "localStorageLiveTipShow"]);
                                                case 30:
                                                    return (
                                                        (r = e.sent),
                                                        r && ((t.intervals = r.intervals || [2, 6]), (t.tabHistoryListShow = void 0 === r.tabHistoryListShow), (t.localStorageLiveTipShow = void 0 === r.localStorageLiveTipShow)),
                                                        (e.prev = 32),
                                                        (e.next = 35),
                                                        Object(b["f"])()
                                                    );
                                                case 35:
                                                    (n = e.sent),
                                                        n.key
                                                            ? ((o = n.key),
                                                              (l = n.value),
                                                              (p = m.a.AES.decrypt(l, m.a.enc.Utf8.parse(t.$config.ENCRYPT_KEY), { iv: m.a.enc.Hex.parse(o), mode: m.a.mode.CBC, format: m.a.format.Hex }).toString(m.a.enc.Utf8)),
                                                              (t.subscription = JSON.parse(p)))
                                                            : (t.subscription = n),
                                                        (e.next = 45);
                                                    break;
                                                case 39:
                                                    if (((e.prev = 39), (e.t0 = e["catch"](32)), !e.t0 || 209 !== e.t0.code)) {
                                                        e.next = 45;
                                                        break;
                                                    }
                                                    return (
                                                        e.t0.message && t.$buefy.toast.open(e.t0.message),
                                                        Object(b["j"])().then(
                                                            function () {
                                                                t.getUserInfo();
                                                            },
                                                            function () {
                                                                t.getUserInfo();
                                                            }
                                                        ),
                                                        e.abrupt("return")
                                                    );
                                                case 45:
                                                    if (true) {
                                                        e.next = 53;
                                                        break;
                                                    }
                                                    return (e.next = 48), Object(b["g"])();
                                                case 48:
                                                    if (((t.extractEmailCount = e.sent), !(t.extractEmailCount >= t.trialCount))) {
                                                        e.next = 53;
                                                        break;
                                                    }
                                                    return (
                                                        (t.isShowProUpgradePop = false),
                                                        (t.tabType = "pro"),
                                                        e.abrupt("return")
                                                    );
                                                case 53:
                                                    return (e.next = 55), t.getInsUserStatus();
                                                case 55:
                                                    return (e.next = 57), c.a.tabs.query({ active: !0, currentWindow: !0 });
                                                case 57:
                                                    if (((u = e.sent), !(u.length > 0 && u[0].url && u[0].url.indexOf("instagram.com") > -1))) {
                                                        e.next = 82;
                                                        break;
                                                    }
                                                    return (e.next = 61), c.a.storage.local.get(["x_ig_www_claim"]);
                                                case 61:
                                                    if (((e.t1 = e.sent), e.t1)) {
                                                        e.next = 64;
                                                        break;
                                                    }
                                                    e.t1 = {};
                                                case 64:
                                                    (h = e.t1),
                                                        h.x_ig_www_claim || c.a.tabs.create({ url: "https://www.instagram.com/?_echobot=1&claim=".concat(encodeURIComponent(t.configs.ClaimSessionStorageKey)), active: !1 }),
                                                        (g = encodeURI(u[0].url)),
                                                        (v = /(?:https:\/\/|http:\/\/)(?:www\.)?instagram.com\/(?:p|reels|reel)\/([\w.-]+)\/?(?:\w*)?/gi),
                                                        (x = v.exec(g)),
                                                        x && 2 === x.length && x[1] && ((t.insPostUrl = decodeURI(decodeURI(x[0]))), (t.extractionType = 4)),
                                                        (v = /(?:https:\/\/|http:\/\/)(?:www\.)?instagram.com\/explore\/tags\/([\w%.-]+)\/?(?:\w*)?/gi),
                                                        (x = v.exec(g)),
                                                        x && 2 === x.length && x[1] && ((t.insHashtag = decodeURI(decodeURI(x[1]))), (t.extractionType = 2)),
                                                        (v = /(?:https:\/\/|http:\/\/)(?:www\.)?instagram.com\/explore\/locations\/([\w]+)\/?/gi),
                                                        (x = v.exec(g)),
                                                        x && 2 === x.length && x[1] && ((t.insLocationUrl = decodeURI(decodeURI(x[0]))), (t.extractionType = 5)),
                                                        (v = /(?:https:\/\/|http:\/\/)(?:www\.)?instagram.com\/([\w.]+)\/?(\w*)?/gi),
                                                        (x = v.exec(g)),
                                                        (f = ["p", "reel", "reels", "explore", "direct", "emails", "accounts", "push", "ads", "session", "settings"]),
                                                        x && 3 === x.length && x[1] && -1 === f.indexOf(x[1]) && ((t.insId = decodeURI(decodeURI(x[1]))), "following" === x[2] ? (t.extractionType = 1) : (t.extractionType = 0)),
                                                        (e.next = 83);
                                                    break;
                                                case 82:
                                                    c.a.tabs.create({ url: "https://www.instagram.com/?_echobot=1&claim=".concat(encodeURIComponent(t.configs.ClaimSessionStorageKey)), active: !1 });
                                                case 83:
                                                case "end":
                                                    return e.stop();
                                            }
                                    },
                                    e,
                                    null,
                                    [[32, 39]]
                                );
                            })
                        )();
                    },
                    getUserInfo: function () {
                        var t = this;
                        return Object(o["a"])(
                            regeneratorRuntime.mark(function e() {
                                var a, s;
                                return regeneratorRuntime.wrap(
                                    function (e) {
                                        while (1)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    return (a = {}), (e.prev = 1), (e.next = 4), Object(b["b"])();
                                                case 4:
                                                    (s = e.sent), "ok" === s.status && ((t.user = s.user), (a = t.user)), (e.next = 11);
                                                    break;
                                                case 8:
                                                    (e.prev = 8), (e.t0 = e["catch"](1)), t.$buefy.toast.open("".concat(e.t0));
                                                case 11:
                                                    return (t.loginLoading = !1), e.abrupt("return", a);
                                                case 13:
                                                case "end":
                                                    return e.stop();
                                            }
                                    },
                                    e,
                                    null,
                                    [[1, 8]]
                                );
                            })
                        )();
                    },
                    getInsUserStatus: function () {
                        var t = this;
                        return Object(o["a"])(
                            regeneratorRuntime.mark(function e() {
                                var a, s, i, r;
                                return regeneratorRuntime.wrap(
                                    function (e) {
                                        while (1)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    return (e.prev = 0), (e.next = 3), c.a.cookies.get({ url: t.configs.InsUserStatusFromCookie.url, name: t.configs.InsUserStatusFromCookie.cookieKey });
                                                case 3:
                                                    (a = e.sent), (t.insLogged = !!a.value), (e.next = 10);
                                                    break;
                                                case 7:
                                                    (e.prev = 7), (e.t0 = e["catch"](0)), console.log("🚀 get insUserStatusCookie error", e.t0);
                                                case 10:
                                                    if (t.insLogged) {
                                                        e.next = 24;
                                                        break;
                                                    }
                                                    return (e.prev = 11), (e.next = 14), d.a.get(t.configs.InsUserStatusFromHtml.url);
                                                case 14:
                                                    (s = e.sent), (s = s.data), (i = new RegExp(decodeURIComponent(t.configs.InsUserStatusFromHtml.reg))), (r = s.match(i)), r && r[1] && (t.insLogged = !0), (e.next = 24);
                                                    break;
                                                case 21:
                                                    (e.prev = 21), (e.t1 = e["catch"](11)), console.log(e.t1);
                                                case 24:
                                                case "end":
                                                    return e.stop();
                                            }
                                    },
                                    e,
                                    null,
                                    [
                                        [0, 7],
                                        [11, 21],
                                    ]
                                );
                            })
                        )();
                    },
                    loadExtractLocalData: function (t) {
                        var e = this;
                        return Object(o["a"])(
                            regeneratorRuntime.mark(function a() {
                                var s, i, r;
                                return regeneratorRuntime.wrap(function (a) {
                                    while (1)
                                        switch ((a.prev = a.next)) {
                                            case 0:
                                                (e.extractLocalData = []), (s = 0);
                                            case 2:
                                                if (!(s < t.length)) {
                                                    a.next = 11;
                                                    break;
                                                }
                                                return (i = t[s]), (a.next = 6), c.a.storage.local.get("extract_list_".concat(i.id));
                                            case 6:
                                                (r = a.sent), e.extractLocalData.push(r["extract_list_".concat(i.id)] || []);
                                            case 8:
                                                s++, (a.next = 2);
                                                break;
                                            case 11:
                                            case "end":
                                                return a.stop();
                                        }
                                }, a);
                            })
                        )();
                    },
                    handleSwitchTab: function (t) {
                        var e = this;
                        return Object(o["a"])(
                            regeneratorRuntime.mark(function a() {
                                return regeneratorRuntime.wrap(function (a) {
                                    while (1)
                                        switch ((a.prev = a.next)) {
                                            case 0:
                                                (e.tabType = t),
                                                    "list" === t && (0 === e.historysTotal && e.handleHistoryChangePage(1), (e.tabHistoryListShow = !1), c.a.storage.local.set({ tabHistoryListShow: !1 }));
                                            case 2:
                                            case "end":
                                                return a.stop();
                                        }
                                }, a);
                            })
                        )();
                    },
                    handleStartWorking: function () {
                        var t = this;
                        return Object(o["a"])(
                            regeneratorRuntime.mark(function e() {
                                var a, s, i, r, o, l, p, h, d, g, m, b, v, x;
                                return regeneratorRuntime.wrap(function (e) {
                                    while (1)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                if (true) {
                                                    e.next = 3;
                                                    break;
                                                }
                                                return (t.isShowProUpgradePop = 0), e.abrupt("return");
                                            case 3:
                                                if ((0 !== t.extractionType && 1 !== t.extractionType) || "" !== t.insId.trim()) {
                                                    e.next = 6;
                                                    break;
                                                }
                                                return t.$buefy.snackbar.open({ message: "Please enter username.", type: "is-danger", position: "is-bottom-right", queue: !1, duration: 3e3 }), e.abrupt("return");
                                            case 6:
                                                if (2 !== t.extractionType || "" !== t.insHashtag.trim()) {
                                                    e.next = 9;
                                                    break;
                                                }
                                                return t.$buefy.snackbar.open({ message: "Please enter hashtag.", type: "is-danger", position: "is-bottom-right", queue: !1, duration: 3e3 }), e.abrupt("return");
                                            case 9:
                                                if (3 !== t.extractionType && 4 !== t.extractionType) {
                                                    e.next = 18;
                                                    break;
                                                }
                                                if ("" !== t.insPostUrl.trim()) {
                                                    e.next = 13;
                                                    break;
                                                }
                                                return t.$buefy.snackbar.open({ message: "Please enter post url.", type: "is-danger", position: "is-bottom-right", queue: !1, duration: 3e3 }), e.abrupt("return");
                                            case 13:
                                                if (((a = /(?:https:\/\/|http:\/\/)(?:www\.)?instagram.com\/(?:p|reels|reel)\/([\w.-]+)\/?(?:\w*)?/gi), (s = a.exec(t.insPostUrl.trim())), s)) {
                                                    e.next = 18;
                                                    break;
                                                }
                                                return t.$buefy.snackbar.open({ message: "Invalid post link URL.", type: "is-danger", position: "is-bottom-right", queue: !1, duration: 3e3 }), e.abrupt("return");
                                            case 18:
                                                if (5 !== t.extractionType) {
                                                    e.next = 27;
                                                    break;
                                                }
                                                if ("" !== t.insLocationUrl.trim()) {
                                                    e.next = 22;
                                                    break;
                                                }
                                                return t.$buefy.snackbar.open({ message: "Please enter location link.", type: "is-danger", position: "is-bottom-right", queue: !1, duration: 3e3 }), e.abrupt("return");
                                            case 22:
                                                if (((i = /(?:https:\/\/|http:\/\/)(?:www\.)?instagram.com\/explore\/locations\/([\w]+)\/?/gi), (r = i.exec(t.insLocationUrl.trim())), r)) {
                                                    e.next = 27;
                                                    break;
                                                }
                                                return t.$buefy.snackbar.open({ message: "Invalid location link URL.", type: "is-danger", position: "is-bottom-right", queue: !1, duration: 3e3 }), e.abrupt("return");
                                            case 27:
                                                if (((o = []), 6 !== t.extractionType)) {
                                                    e.next = 37;
                                                    break;
                                                }
                                                if (
                                                    ((l = t.userListVal.trim()),
                                                    l &&
                                                        ((l = l.toLowerCase()),
                                                        (l = l.replace(/[\s\t\n\r]/g, ",")),
                                                        (o = l.split(",")),
                                                        (o = o.filter(function (t) {
                                                            return /^[a-z0-9._]{1,50}$/.test(t);
                                                        })),
                                                        (p = []),
                                                        o.forEach(function (t) {
                                                            p.includes(t) || p.push(t);
                                                        }),
                                                        (o = p)),
                                                    0 !== o.length)
                                                ) {
                                                    e.next = 34;
                                                    break;
                                                }
                                                return (
                                                    t.$buefy.snackbar.open({ message: "Please enter user list. e.g. username1 username2 username3", type: "is-danger", position: "is-bottom-right", queue: !1, duration: 3e3 }),
                                                    e.abrupt("return")
                                                );
                                            case 34:
                                                if (!(t.configs.customUserLimit > 0 && o.length > t.configs.customUserLimit)) {
                                                    e.next = 37;
                                                    break;
                                                }
                                                return (
                                                    t.$buefy.snackbar.open({
                                                        message: "The number of users processed in a single session cannot exceed ".concat(t.configs.customUserLimit),
                                                        type: "is-danger",
                                                        position: "is-bottom-right",
                                                        queue: !1,
                                                        duration: 3e3,
                                                    }),
                                                    e.abrupt("return")
                                                );
                                            case 37:
                                                if (t.insLogged) {
                                                    e.next = 41;
                                                    break;
                                                }
                                                return (
                                                    t.$buefy.snackbar.open({ message: "Please log in to Instagram and try again.", type: "is-danger", position: "is-bottom-right", queue: !1, duration: 3e3 }),
                                                    setTimeout(function () {
                                                        t.handleGotoIns();
                                                    }, 2e3),
                                                    e.abrupt("return")
                                                );
                                            case 41:
                                                (h = ""),
                                                    0 === t.extractionType || 1 === t.extractionType
                                                        ? (t.insId.indexOf("@") > -1 && (t.insId = t.insId.replace(/@/g, "")), (h = t.insId))
                                                        : 2 === t.extractionType
                                                        ? (t.insHashtag.indexOf("#") > -1 && (t.insHashtag = t.insHashtag.replace(/#/g, "")), (h = t.insHashtag))
                                                        : 3 === t.extractionType || 4 === t.extractionType
                                                        ? ((d = /(?:https:\/\/|http:\/\/)(?:www\.)?instagram.com\/(?:p|reels|reel)\/([\w.-]+)\/?(?:\w*)?/gi),
                                                          (g = d.exec(encodeURI(t.insPostUrl.trim()))),
                                                          g && 2 === g.length && g[1] && (h = decodeURI(decodeURI(g[1]))))
                                                        : 5 === t.extractionType
                                                        ? ((m = /(?:https:\/\/|http:\/\/)(?:www\.)?instagram.com\/explore\/locations\/([\w]+)\/?/gi),
                                                          (b = m.exec(encodeURI(t.insLocationUrl.trim()))),
                                                          b && 2 === b.length && b[1] && (h = decodeURI(decodeURI(b[1]))))
                                                        : 6 === t.extractionType && ((v = "userlist-".concat(o.length, "-").concat(u()().format("YYYYMMDDHHmmss"))), (h = v), c.a.storage.local.set(Object(n["a"])({}, v, o.join(",")))),
                                                    (h = h.trim()),
                                                    (x = "".concat(c.a.runtime.getURL("dashboard.html#/"), "?ins=").concat(encodeURIComponent(h), "&type=").concat(t.extractionType)),
                                                    c.a.tabs.create({ url: x });
                                            case 46:
                                            case "end":
                                                return e.stop();
                                        }
                                }, e);
                            })
                        )();
                    },
                    handleContinueTask: function (t) {
                        var e = this;
                        if (false) this.isShowProUpgradePop = !0;
                        else {
                            if (!this.insLogged)
                                return (
                                    this.$buefy.snackbar.open({ message: "Please log in to Instagram and try again.", type: "is-danger", position: "is-bottom-right", queue: !1, duration: 3e3 }),
                                    void setTimeout(function () {
                                        e.handleGotoIns();
                                    }, 2e3)
                                );
                            var a;
                            switch (t.extractionType) {
                                case "followers":
                                    a = 0;
                                    break;
                                case "following":
                                    a = 1;
                                    break;
                                case "hashtag":
                                    a = 2;
                                    break;
                                case "likes":
                                    a = 3;
                                    break;
                                case "comment":
                                    a = 4;
                                    break;
                                case "location":
                                    a = 5;
                                    break;
                                case "userlist":
                                    a = 6;
                                    break;
                            }
                            var s = "".concat(c.a.runtime.getURL("dashboard.html#/"), "?history=").concat(t.id, "&ins=").concat(encodeURIComponent(t.extractionData), "&type=").concat(a);
                            c.a.tabs.create({ url: s });
                        }
                    },
                    handleHistoryChangePage: function (t) {
                        var e = this;
                        return Object(o["a"])(
                            regeneratorRuntime.mark(function a() {
                                var s, i;
                                return regeneratorRuntime.wrap(function (a) {
                                    while (1)
                                        switch ((a.prev = a.next)) {
                                            case 0:
                                                return (e.historysLoading = !0), (a.next = 3), Object(b["e"])({ page: +t, cursor: e.historysCursor["page_".concat(t)] || "" });
                                            case 3:
                                                if (((s = a.sent), (e.historys = s.list || []), !(e.historys.length > 0))) {
                                                    a.next = 10;
                                                    break;
                                                }
                                                return (
                                                    (i = e.historys[e.historys.length - 1]),
                                                    (e.historysCursor = Object.assign(e.historysCursor, Object(n["a"])({}, "page_".concat(+t + 1), i.cursor))),
                                                    (a.next = 10),
                                                    e.loadExtractLocalData(e.historys)
                                                );
                                            case 10:
                                                if (((e.historysLoading = !1), 1 !== +t || 0 !== e.historysTotal)) {
                                                    a.next = 16;
                                                    break;
                                                }
                                                return (e.historysTotal = s.total), (a.next = 15), Object(b["g"])();
                                            case 15:
                                                e.extractEmailCount = a.sent;
                                            case 16:
                                            case "end":
                                                return a.stop();
                                        }
                                }, a);
                            })
                        )();
                    },
                    handleUpdateInterval: function () {
                        c.a.storage.local.set({ intervals: this.intervals });
                    },
                    handleGotoIns: function () {
                        c.a.tabs.create({ url: "https://www.instagram.com/" });
                    },
                    handleLogin: function () {
                        var t = this;
                        if (((this.loginLoading = !0), this.configs.nativeAuthLogin))
                            Object(b["h"])().then(
                                function (e) {
                                    e && e.id && t.initData();
                                },
                                function () {
                                    t.$buefy.snackbar.open({ message: "You did not complete the authorization or something went wrong.", type: "is-danger", position: "is-bottom-right", queue: !1, duration: 3e3 }), (t.loginLoading = !1);
                                }
                            );
                        else {
                            var e = c.a.windows.create({ url: "https://server.echobot.dev/passport/google_igemailextractor", type: "popup", height: 700, width: 520 });
                            e.then(function () {
                                t.loginLoading = !1;
                            });
                        }
                    },
                    handleLogout: function () {
                        var t = this;
                        this.$buefy.dialog.confirm({
                            message: '<div style="margin-top: 10px;">Are you sure you want to log out?</div>',
                            confirmText: "Log out",
                            cancelText: "Cancel",
                            type: "is-danger",
                            hasIcon: !0,
                            onConfirm: function () {
                                c.a.storage.local.remove("webAuthData"),
                                    Object(b["j"])().then(
                                        function () {
                                            t.getUserInfo();
                                        },
                                        function (e) {
                                            t.getUserInfo(), t.$buefy.toast.open("".concat(e));
                                        }
                                    );
                            },
                        });
                    },
                    handleDownload: function (t, e) {
                        var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "xlsx";
                        if (
                            ("email" === t &&
                                (e = e.filter(function (t) {
                                    return "" !== t.email;
                                })),
                            "xlsx" === a)
                        ) {
                            var s = [
                                    { label: "User Id", value: "userId" },
                                    { label: "User Name", value: "userName" },
                                    { label: "Full Name", value: "fullName" },
                                    { label: "Followers Count", value: "followers" },
                                    { label: "Following Count", value: "following" },
                                    { label: "Post Count", value: "post" },
                                    { label: "Public Email", value: "email" },
                                    { label: "Public Phone", value: "phone" },
                                    { label: "City", value: "city" },
                                    { label: "Address", value: "address" },
                                    { label: "Is Private", value: "isPrivate" },
                                    { label: "Is Verified", value: "isVerified" },
                                    { label: "Is Business", value: "isBusiness" },
                                    { label: "External Url", value: "externalUrl" },
                                    { label: "Biography", value: "bio" },
                                    { label: "Avatar Url", value: "avatar" },
                                    {
                                        label: "Profile Url",
                                        value: function (t) {
                                            return "https://www.instagram.com/" + t.userName;
                                        },
                                    },
                                ],
                                i = [{ sheet: t, columns: s, content: e }];
                            Object(v["c"])(i, "IGEmailExtractor-".concat(t, "-").concat(e.length, "-").concat(u()().format("YYYYMMDDHHmmss")));
                        } else {
                            var r = e.map(function (t) {
                                return {
                                    "User Id": t.userId + "",
                                    "User Name": t.userName + "",
                                    "Full Name": t.fullName + "",
                                    "Followers Count": t.followers + "",
                                    "Following Count": t.following + "",
                                    "Post Count": t.post + "",
                                    "Public Email": t.email + "",
                                    "Public Phone": t.phone + "",
                                    City: t.city + "",
                                    Address: t.address + "",
                                    "Is Private": t.isPrivate + "",
                                    "Is Verified": t.isVerified + "",
                                    "Is Business": t.isBusiness + "",
                                    "External Url": t.externalUrl + "",
                                    Biography: t.bio + "",
                                    "Avatar Url": t.avatar + "",
                                    "Profile Url": "https://www.instagram.com/" + t.userName,
                                };
                            });
                            Object(v["a"])(r, "IGEmailExtractor-".concat(t, "-").concat(e.length, "-").concat(u()().format("YYYYMMDDHHmmss")));
                        }
                    },
                    handleCloseLocalStorageLiveTip: function () {
                        (this.localStorageLiveTipShow = !1), c.a.storage.local.set({ localStorageLiveTipShow: !1 });
                    },
                    handleInput: function (t) {
                        var e = this;
                        if (6 === this.extractionType) {
                            var a = this.userListVal.toLowerCase();
                            a = a.replace(/[\s\t\n\r]/g, ",");
                            var s = a.split(",");
                            s = s.filter(function (t) {
                                return !!t;
                            });
                            var i = [];
                            return (
                                s.forEach(function (t) {
                                    i.includes(t) || i.push(t);
                                }),
                                void (this.userListVal = i.join("\n"))
                            );
                        }
                        t = encodeURI(t.trim());
                        var r = /(?:https:\/\/|http:\/\/)(?:www\.)?instagram.com\/(?:p|reel)\/([\w.-]+)\/?(?:\w*)?/gi,
                            n = r.exec(t);
                        if (n && 2 === n.length && n[1])
                            return (
                                setTimeout(function () {
                                    (e.insPostUrl = decodeURI(decodeURI(n[0]))), (e.insHashtag = ""), (e.insLocationUrl = ""), (e.insId = "");
                                }, 100),
                                void (3 !== this.extractionType && 4 !== this.extractionType && (this.extractionType = 4))
                            );
                        if (((r = /(?:https:\/\/|http:\/\/)(?:www\.)?instagram.com\/explore\/tags\/([\w%.-]+)\/?(?:\w*)?/gi), (n = r.exec(t)), n && 2 === n.length && n[1]))
                            return (
                                setTimeout(function () {
                                    (e.insHashtag = decodeURI(decodeURI(n[1]))), (e.insPostUrl = ""), (e.insLocationUrl = ""), (e.insId = "");
                                }, 100),
                                void (this.extractionType = 2)
                            );
                        if (((r = /(?:https:\/\/|http:\/\/)(?:www\.)?instagram.com\/explore\/locations\/([\w]+)\/?/gi), (n = r.exec(t)), n && 2 === n.length && n[1]))
                            return (
                                setTimeout(function () {
                                    (e.insLocationUrl = decodeURI(decodeURI(n[0]))), (e.insPostUrl = ""), (e.insHashtag = ""), (e.insId = "");
                                }, 100),
                                void (this.extractionType = 5)
                            );
                        (r = /(?:https:\/\/|http:\/\/)(?:www\.)?instagram.com\/([\w.]+)\/?(\w*)?/gi), (n = r.exec(t));
                        var o = ["p", "reel", "explore", "direct", "emails", "accounts", "push", "ads", "session", "settings"];
                        return n && 3 === n.length && n[1] && -1 === o.indexOf(n[1])
                            ? (setTimeout(function () {
                                  (e.insId = decodeURI(decodeURI(n[1]))), (e.insPostUrl = ""), (e.insHashtag = ""), (e.insLocationUrl = "");
                              }, 100),
                              void (0 !== this.extractionType && 1 !== this.extractionType && ("following" === n[2] ? (this.extractionType = 1) : (this.extractionType = 0))))
                            : void 0;
                    },
                    customUsersTitle: function (t) {
                        return t
                            ? ((t = t.split(",")),
                              t.length > 3
                                  ? t
                                        .slice(0, 3)
                                        .map(function (t) {
                                            return "@".concat(t);
                                        })
                                        .join(", ") + "... ".concat(t.length, " users")
                                  : t
                                        .map(function (t) {
                                            return "@".concat(t);
                                        })
                                        .join(", "))
                            : "";
                    },
                    showUserListModel: function (t) {
                        (this.currentUserListVal = t && t.replaceAll(",", ", ")), (this.modelUserListShow = !0);
                    },
                    handleUpdateBilling: function () {
                        c.a.tabs.create({ url: this.subscription.updateUrl });
                    },
                },
                components: { Pro: x["a"] },
            },
            w = f,
            y = (a("11aa"), a("2877")),
            C = Object(y["a"])(w, i, r, !1, null, null, null),
            k = C.exports,
            _ = (a("42e0"), a("ecee")),
            L = a("c074"),
            U = a("ad3d"),
            T = a("289d"),
            S = a("01ea");
        _["c"].add(
            L["k"],
            L["t"],
            L["s"],
            L["H"],
            L["K"],
            L["w"],
            L["B"],
            L["u"],
            L["g"],
            L["r"],
            L["G"],
            L["j"],
            L["F"],
            L["i"],
            L["v"],
            L["I"],
            L["b"],
            L["e"],
            L["A"],
            L["o"],
            L["n"],
            L["q"],
            L["J"],
            L["E"],
            L["d"],
            L["c"],
            L["p"],
            L["a"],
            L["C"]
        ),
            s["a"].component("vue-fontawesome", U["a"]),
            s["a"].use(T["a"], { defaultIconComponent: "vue-fontawesome", defaultIconPack: "fas" }),
            (s["a"].prototype.$config = S["a"]),
            new s["a"]({
                el: "#app",
                render: function (t) {
                    return t(k);
                },
            });
    },
    1: function (t, e, a) {
        t.exports = a("0a3d");
    },
    "11aa": function (t, e, a) {
        "use strict";
        a("0224");
    },
    "40fe": function (t, e, a) {
        t.exports = a.p + "img/tip5.fbabf4b7.png";
    },
    "539e": function (t, e, a) {
        t.exports = a.p + "img/tip2.4eed5b4e.png";
    },
    "841f": function (t, e, a) {
        t.exports = a.p + "img/tip4.08b232a5.png";
    },
    b473: function (t, e, a) {
        t.exports = a.p + "img/tip3.b9161305.png";
    },
    e4a8: function (t, e, a) {
        t.exports = a.p + "img/tip1.7a1d9d46.png";
    },
});

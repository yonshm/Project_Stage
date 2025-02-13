/*! DataTables 2.2.0
 * © SpryMedia Ltd - datatables.net/license
 */
!(function (n) {
    "use strict";
    var r;
    "function" == typeof define && define.amd
        ? define(["jquery"], function (e) {
              return n(e, window, document);
          })
        : "object" == typeof exports
        ? ((r = require("jquery")),
          "undefined" == typeof window
              ? (module.exports = function (e, t) {
                    return (
                        (e = e || window), (t = t || r(e)), n(t, e, e.document)
                    );
                })
              : (module.exports = n(r, window, window.document)))
        : (window.DataTable = n(jQuery, window, document));
})(function (H, W, L) {
    "use strict";
    function f(e) {
        var t = parseInt(e, 10);
        return !isNaN(t) && isFinite(e) ? t : null;
    }
    function s(e, t, n, r) {
        var a = typeof e,
            o = "string" == a;
        return (
            "number" == a ||
            "bigint" == a ||
            !(!r || !T(e)) ||
            (t && o && (e = E(e, t)),
            n && o && (e = e.replace(P, "")),
            !isNaN(parseFloat(e)) && isFinite(e))
        );
    }
    function c(e, t, n, r) {
        var a;
        return (
            !(!r || !T(e)) ||
            (("string" != typeof e || !e.match(/<(input|select)/i)) &&
                (T((a = e)) || "string" == typeof a) &&
                !!s(A(e), t, n, r)) ||
            null
        );
    }
    function m(e, t, n, r) {
        var a = [],
            o = 0,
            i = t.length;
        if (void 0 !== r)
            for (; o < i; o++) e[t[o]] && e[t[o]][n] && a.push(e[t[o]][n][r]);
        else for (; o < i; o++) e[t[o]] && a.push(e[t[o]][n]);
        return a;
    }
    function h(e, t) {
        var n,
            r = [];
        void 0 === t ? ((t = 0), (n = e)) : ((n = t), (t = e));
        for (var a = t; a < n; a++) r.push(a);
        return r;
    }
    function _(e) {
        for (var t = [], n = 0, r = e.length; n < r; n++) e[n] && t.push(e[n]);
        return t;
    }
    var I,
        X,
        t,
        e,
        B = function (e, P) {
            var E, k, M;
            return B.factory(e, P)
                ? B
                : this instanceof B
                ? H(e).DataTable(P)
                : ((k = void 0 === (P = e)),
                  (M = (E = this).length),
                  k && (P = {}),
                  (this.api = function () {
                      return new X(this);
                  }),
                  this.each(function () {
                      var e = 1 < M ? et({}, P, !0) : P,
                          t = 0,
                          n = this.getAttribute("id"),
                          r = B.defaults,
                          a = H(this);
                      if ("table" != this.nodeName.toLowerCase())
                          z(
                              null,
                              0,
                              "Non-table node initialisation (" +
                                  this.nodeName +
                                  ")",
                              2
                          );
                      else {
                          H(this).trigger("options.dt", e),
                              Q(r),
                              K(r.column),
                              V(r, r, !0),
                              V(r.column, r.column, !0),
                              V(r, H.extend(e, a.data()), !0);
                          var o = B.settings;
                          for (t = 0, j = o.length; t < j; t++) {
                              var i = o[t];
                              if (
                                  i.nTable == this ||
                                  (i.nTHead && i.nTHead.parentNode == this) ||
                                  (i.nTFoot && i.nTFoot.parentNode == this)
                              ) {
                                  var l = (void 0 !== e.bRetrieve ? e : r)
                                          .bRetrieve,
                                      s = (void 0 !== e.bDestroy ? e : r)
                                          .bDestroy;
                                  if (k || l) return i.oInstance;
                                  if (s) {
                                      new B.Api(i).destroy();
                                      break;
                                  }
                                  return void z(
                                      i,
                                      0,
                                      "Cannot reinitialise DataTable",
                                      3
                                  );
                              }
                              if (i.sTableId == this.id) {
                                  o.splice(t, 1);
                                  break;
                              }
                          }
                          (null !== n && "" !== n) ||
                              ((n = "DataTables_Table_" + B.ext._unique++),
                              (this.id = n));
                          var u,
                              c = H.extend(!0, {}, B.models.oSettings, {
                                  sDestroyWidth: a[0].style.width,
                                  sInstance: n,
                                  sTableId: n,
                                  colgroup: H("<colgroup>").prependTo(this),
                                  fastData: function (e, t, n) {
                                      return q(c, e, t, n);
                                  },
                              }),
                              n =
                                  ((c.nTable = this),
                                  (c.oInit = e),
                                  o.push(c),
                                  (c.api = new X(c)),
                                  (c.oInstance =
                                      1 === E.length ? E : a.dataTable()),
                                  Q(e),
                                  e.aLengthMenu &&
                                      !e.iDisplayLength &&
                                      (e.iDisplayLength = Array.isArray(
                                          e.aLengthMenu[0]
                                      )
                                          ? e.aLengthMenu[0][0]
                                          : H.isPlainObject(e.aLengthMenu[0])
                                          ? e.aLengthMenu[0].value
                                          : e.aLengthMenu[0]),
                                  (e = et(H.extend(!0, {}, r), e)),
                                  $(c.oFeatures, e, [
                                      "bPaginate",
                                      "bLengthChange",
                                      "bFilter",
                                      "bSort",
                                      "bSortMulti",
                                      "bInfo",
                                      "bProcessing",
                                      "bAutoWidth",
                                      "bSortClasses",
                                      "bServerSide",
                                      "bDeferRender",
                                  ]),
                                  $(c, e, [
                                      "ajax",
                                      "fnFormatNumber",
                                      "sServerMethod",
                                      "aaSorting",
                                      "aaSortingFixed",
                                      "aLengthMenu",
                                      "sPaginationType",
                                      "iStateDuration",
                                      "bSortCellsTop",
                                      "iTabIndex",
                                      "sDom",
                                      "fnStateLoadCallback",
                                      "fnStateSaveCallback",
                                      "renderer",
                                      "searchDelay",
                                      "rowId",
                                      "caption",
                                      "layout",
                                      "orderDescReverse",
                                      "typeDetect",
                                      ["iCookieDuration", "iStateDuration"],
                                      ["oSearch", "oPreviousSearch"],
                                      ["aoSearchCols", "aoPreSearchCols"],
                                      ["iDisplayLength", "_iDisplayLength"],
                                  ]),
                                  $(c.oScroll, e, [
                                      ["sScrollX", "sX"],
                                      ["sScrollXInner", "sXInner"],
                                      ["sScrollY", "sY"],
                                      ["bScrollCollapse", "bCollapse"],
                                  ]),
                                  $(c.oLanguage, e, "fnInfoCallback"),
                                  Y(c, "aoDrawCallback", e.fnDrawCallback),
                                  Y(
                                      c,
                                      "aoStateSaveParams",
                                      e.fnStateSaveParams
                                  ),
                                  Y(
                                      c,
                                      "aoStateLoadParams",
                                      e.fnStateLoadParams
                                  ),
                                  Y(c, "aoStateLoaded", e.fnStateLoaded),
                                  Y(c, "aoRowCallback", e.fnRowCallback),
                                  Y(c, "aoRowCreatedCallback", e.fnCreatedRow),
                                  Y(c, "aoHeaderCallback", e.fnHeaderCallback),
                                  Y(c, "aoFooterCallback", e.fnFooterCallback),
                                  Y(c, "aoInitComplete", e.fnInitComplete),
                                  Y(
                                      c,
                                      "aoPreDrawCallback",
                                      e.fnPreDrawCallback
                                  ),
                                  (c.rowIdFn = U(e.rowId)),
                                  c),
                              d =
                                  (B.__browser ||
                                      ((f = {}),
                                      (B.__browser = f),
                                      (p = H("<div/>")
                                          .css({
                                              position: "fixed",
                                              top: 0,
                                              left: -1 * W.pageXOffset,
                                              height: 1,
                                              width: 1,
                                              overflow: "hidden",
                                          })
                                          .append(
                                              H("<div/>")
                                                  .css({
                                                      position: "absolute",
                                                      top: 1,
                                                      left: 1,
                                                      width: 100,
                                                      overflow: "scroll",
                                                  })
                                                  .append(
                                                      H("<div/>").css({
                                                          width: "100%",
                                                          height: 10,
                                                      })
                                                  )
                                          )
                                          .appendTo("body")),
                                      (d = p.children()),
                                      (u = d.children()),
                                      (f.barWidth =
                                          d[0].offsetWidth - d[0].clientWidth),
                                      (f.bScrollbarLeft =
                                          1 !== Math.round(u.offset().left)),
                                      p.remove()),
                                  H.extend(n.oBrowser, B.__browser),
                                  (n.oScroll.iBarWidth = B.__browser.barWidth),
                                  c.oClasses),
                              f =
                                  (H.extend(d, B.ext.classes, e.oClasses),
                                  a.addClass(d.table),
                                  c.oFeatures.bPaginate ||
                                      (e.iDisplayStart = 0),
                                  void 0 === c.iInitDisplayStart &&
                                      ((c.iInitDisplayStart = e.iDisplayStart),
                                      (c._iDisplayStart = e.iDisplayStart)),
                                  e.iDeferLoading),
                              h =
                                  (null !== f &&
                                      ((c.deferLoading = !0),
                                      (u = Array.isArray(f)),
                                      (c._iRecordsDisplay = u ? f[0] : f),
                                      (c._iRecordsTotal = u ? f[1] : f)),
                                  []),
                              p = this.getElementsByTagName("thead"),
                              n = Ae(c, p[0]);
                          if (e.aoColumns) h = e.aoColumns;
                          else if (n.length)
                              for (j = n[(t = 0)].length; t < j; t++)
                                  h.push(null);
                          for (t = 0, j = h.length; t < j; t++) ee(c);
                          var g,
                              v,
                              m,
                              b,
                              y,
                              D,
                              x,
                              S = c,
                              w = e.aoColumnDefs,
                              T = h,
                              _ = n,
                              C = function (e, t) {
                                  te(c, e, t);
                              },
                              L = S.aoColumns;
                          if (T)
                              for (g = 0, v = T.length; g < v; g++)
                                  T[g] && T[g].name && (L[g].sName = T[g].name);
                          if (w)
                              for (g = w.length - 1; 0 <= g; g--) {
                                  var I =
                                      void 0 !== (x = w[g]).target
                                          ? x.target
                                          : void 0 !== x.targets
                                          ? x.targets
                                          : x.aTargets;
                                  for (
                                      Array.isArray(I) || (I = [I]),
                                          m = 0,
                                          b = I.length;
                                      m < b;
                                      m++
                                  ) {
                                      var A = I[m];
                                      if ("number" == typeof A && 0 <= A) {
                                          for (; L.length <= A; ) ee(S);
                                          C(A, x);
                                      } else if ("number" == typeof A && A < 0)
                                          C(L.length + A, x);
                                      else if ("string" == typeof A)
                                          for (y = 0, D = L.length; y < D; y++)
                                              "_all" === A
                                                  ? C(y, x)
                                                  : -1 !== A.indexOf(":name")
                                                  ? L[y].sName ===
                                                        A.replace(
                                                            ":name",
                                                            ""
                                                        ) && C(y, x)
                                                  : _.forEach(function (e) {
                                                        e[y] &&
                                                            ((e = H(e[y].cell)),
                                                            A.match(
                                                                /^[a-z][\w-]*$/i
                                                            ) && (A = "." + A),
                                                            e.is(A)) &&
                                                            C(y, x);
                                                    });
                                  }
                              }
                          if (T)
                              for (g = 0, v = T.length; g < v; g++) C(g, T[g]);
                          var N,
                              n = a.children("tbody").find("tr").eq(0),
                              F =
                                  (n.length &&
                                      ((N = function (e, t) {
                                          return null !==
                                              e.getAttribute("data-" + t)
                                              ? t
                                              : null;
                                      }),
                                      H(n[0])
                                          .children("th, td")
                                          .each(function (e, t) {
                                              var n,
                                                  r = c.aoColumns[e];
                                              r ||
                                                  z(
                                                      c,
                                                      0,
                                                      "Incorrect column count",
                                                      18
                                                  ),
                                                  r.mData === e &&
                                                      ((n =
                                                          N(t, "sort") ||
                                                          N(t, "order")),
                                                      (t =
                                                          N(t, "filter") ||
                                                          N(t, "search")),
                                                      (null === n &&
                                                          null === t) ||
                                                          ((r.mData = {
                                                              _: e + ".display",
                                                              sort:
                                                                  null !== n
                                                                      ? e +
                                                                        ".@data-" +
                                                                        n
                                                                      : void 0,
                                                              type:
                                                                  null !== n
                                                                      ? e +
                                                                        ".@data-" +
                                                                        n
                                                                      : void 0,
                                                              filter:
                                                                  null !== t
                                                                      ? e +
                                                                        ".@data-" +
                                                                        t
                                                                      : void 0,
                                                          }),
                                                          (r._isArrayHost = !0),
                                                          te(c, e)));
                                          })),
                                  Y(c, "aoDrawCallback", Qe),
                                  c.oFeatures);
                          if (
                              (e.bStateSave && (F.bStateSave = !0),
                              void 0 === e.aaSorting)
                          )
                              for (
                                  var O = c.aaSorting, t = 0, j = O.length;
                                  t < j;
                                  t++
                              )
                                  O[t][1] = c.aoColumns[t].asSorting[0];
                          Ze(c),
                              Y(c, "aoDrawCallback", function () {
                                  (c.bSorted ||
                                      "ssp" === J(c) ||
                                      F.bDeferRender) &&
                                      Ze(c);
                              });
                          var n = a.children("caption"),
                              n =
                                  (c.caption &&
                                      (n =
                                          0 === n.length
                                              ? H("<caption/>").appendTo(a)
                                              : n).html(c.caption),
                                  n.length &&
                                      ((n[0]._captionSide =
                                          n.css("caption-side")),
                                      (c.captionNode = n[0])),
                                  0 === p.length &&
                                      (p = H("<thead/>").appendTo(a)),
                                  (c.nTHead = p[0]),
                                  a.children("tbody")),
                              n =
                                  (0 === n.length &&
                                      (n = H("<tbody/>").insertAfter(p)),
                                  (c.nTBody = n[0]),
                                  a.children("tfoot")),
                              R =
                                  (0 === n.length &&
                                      (n = H("<tfoot/>").appendTo(a)),
                                  (c.nTFoot = n[0]),
                                  (c.aiDisplay = c.aiDisplayMaster.slice()),
                                  (c.bInitialised = !0),
                                  c.oLanguage);
                          H.extend(!0, R, e.oLanguage),
                              R.sUrl
                                  ? H.ajax({
                                        dataType: "json",
                                        url: R.sUrl,
                                        success: function (e) {
                                            V(r.oLanguage, e),
                                                H.extend(
                                                    !0,
                                                    R,
                                                    e,
                                                    c.oInit.oLanguage
                                                ),
                                                G(c, null, "i18n", [c], !0),
                                                Me(c);
                                        },
                                        error: function () {
                                            z(
                                                c,
                                                0,
                                                "i18n file loading error",
                                                21
                                            ),
                                                Me(c);
                                        },
                                    })
                                  : (G(c, null, "i18n", [c], !0), Me(c));
                      }
                  }),
                  (E = null),
                  this);
        },
        g =
            ((B.ext = I =
                {
                    buttons: {},
                    classes: {},
                    builder: "-source-",
                    errMode: "alert",
                    feature: [],
                    features: {},
                    search: [],
                    selector: { cell: [], column: [], row: [] },
                    legacy: { ajax: null },
                    pager: {},
                    renderer: { pageButton: {}, header: {} },
                    order: {},
                    type: {
                        className: {},
                        detect: [],
                        render: {},
                        search: {},
                        order: {},
                    },
                    _unique: 0,
                    fnVersionCheck: B.fnVersionCheck,
                    iApiIndex: 0,
                    sVersion: B.version,
                }),
            H.extend(I, {
                afnFiltering: I.search,
                aTypes: I.type.detect,
                ofnSearch: I.type.search,
                oSort: I.type.order,
                afnSortData: I.order,
                aoFeatures: I.feature,
                oStdClasses: I.classes,
                oPagination: I.pager,
            }),
            H.extend(B.ext.classes, {
                container: "dt-container",
                empty: { row: "dt-empty" },
                info: { container: "dt-info" },
                layout: {
                    row: "dt-layout-row",
                    cell: "dt-layout-cell",
                    tableRow: "dt-layout-table",
                    tableCell: "",
                    start: "dt-layout-start",
                    end: "dt-layout-end",
                    full: "dt-layout-full",
                },
                length: { container: "dt-length", select: "dt-input" },
                order: {
                    canAsc: "dt-orderable-asc",
                    canDesc: "dt-orderable-desc",
                    isAsc: "dt-ordering-asc",
                    isDesc: "dt-ordering-desc",
                    none: "dt-orderable-none",
                    position: "sorting_",
                },
                processing: { container: "dt-processing" },
                scrolling: {
                    body: "dt-scroll-body",
                    container: "dt-scroll",
                    footer: {
                        self: "dt-scroll-foot",
                        inner: "dt-scroll-footInner",
                    },
                    header: {
                        self: "dt-scroll-head",
                        inner: "dt-scroll-headInner",
                    },
                },
                search: { container: "dt-search", input: "dt-input" },
                table: "dataTable",
                tbody: { cell: "", row: "" },
                thead: { cell: "", row: "" },
                tfoot: { cell: "", row: "" },
                paging: {
                    active: "current",
                    button: "dt-paging-button",
                    container: "dt-paging",
                    disabled: "disabled",
                    nav: "",
                },
            }),
            {}),
        C = /[\r\n\u2028]/g,
        F = /<([^>]*>)/g,
        O = Math.pow(2, 28),
        j =
            /^\d{2,4}[./-]\d{1,2}[./-]\d{1,2}([T ]{1}\d{1,2}[:.]\d{2}([.:]\d{2})?)?$/,
        R = new RegExp(
            "(\\" +
                [
                    "/",
                    ".",
                    "*",
                    "+",
                    "?",
                    "|",
                    "(",
                    ")",
                    "[",
                    "]",
                    "{",
                    "}",
                    "\\",
                    "$",
                    "^",
                    "-",
                ].join("|\\") +
                ")",
            "g"
        ),
        P = /['\u00A0,$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfkɃΞ]/gi,
        T = function (e) {
            return !e || !0 === e || "-" === e;
        },
        E = function (e, t) {
            return (
                g[t] || (g[t] = new RegExp(Pe(t), "g")),
                "string" == typeof e && "." !== t
                    ? e.replace(/\./g, "").replace(g[t], ".")
                    : e
            );
        },
        b = function (e, t, n) {
            var r = [],
                a = 0,
                o = e.length;
            if (void 0 !== n)
                for (; a < o; a++) e[a] && e[a][t] && r.push(e[a][t][n]);
            else for (; a < o; a++) e[a] && r.push(e[a][t]);
            return r;
        },
        A = function (e) {
            if (!e || "string" != typeof e) return e;
            if (e.length > O) throw new Error("Exceeded max str len");
            var t;
            for (
                e = e.replace(F, "");
                (e = (t = e).replace(/<script/i, "")) !== t;

            );
            return t;
        },
        u = function (e) {
            return "string" == typeof (e = Array.isArray(e) ? e.join(",") : e)
                ? e
                      .replace(/&/g, "&amp;")
                      .replace(/</g, "&lt;")
                      .replace(/>/g, "&gt;")
                      .replace(/"/g, "&quot;")
                : e;
        },
        k = function (e, t) {
            var n;
            return "string" != typeof e
                ? e
                : (n = e.normalize ? e.normalize("NFD") : e).length !== e.length
                ? (!0 === t ? e + " " : "") + n.replace(/[\u0300-\u036f]/g, "")
                : n;
        },
        x = function (e) {
            if (Array.from && Set) return Array.from(new Set(e));
            if (
                (function (e) {
                    if (!(e.length < 2))
                        for (
                            var t = e.slice().sort(),
                                n = t[0],
                                r = 1,
                                a = t.length;
                            r < a;
                            r++
                        ) {
                            if (t[r] === n) return !1;
                            n = t[r];
                        }
                    return !0;
                })(e)
            )
                return e.slice();
            var t,
                n,
                r,
                a = [],
                o = e.length,
                i = 0;
            e: for (n = 0; n < o; n++) {
                for (t = e[n], r = 0; r < i; r++) if (a[r] === t) continue e;
                a.push(t), i++;
            }
            return a;
        },
        M = function (e, t) {
            if (Array.isArray(t)) for (var n = 0; n < t.length; n++) M(e, t[n]);
            else e.push(t);
            return e;
        };
    function y(t, e) {
        e &&
            e.split(" ").forEach(function (e) {
                e && t.classList.add(e);
            });
    }
    function Z(t) {
        var n,
            r,
            a = {};
        H.each(t, function (e) {
            (n = e.match(/^([^A-Z]+?)([A-Z])/)) &&
                -1 !== "a aa ai ao as b fn i m o s ".indexOf(n[1] + " ") &&
                ((r = e.replace(n[0], n[2].toLowerCase())),
                (a[r] = e),
                "o" === n[1]) &&
                Z(t[e]);
        }),
            (t._hungarianMap = a);
    }
    function V(t, n, r) {
        var a;
        t._hungarianMap || Z(t),
            H.each(n, function (e) {
                void 0 === (a = t._hungarianMap[e]) ||
                    (!r && void 0 !== n[a]) ||
                    ("o" === a.charAt(0)
                        ? (n[a] || (n[a] = {}),
                          H.extend(!0, n[a], n[e]),
                          V(t[a], n[a], r))
                        : (n[a] = n[e]));
            });
    }
    B.util = {
        diacritics: function (e, t) {
            if ("function" != typeof e) return k(e, t);
            k = e;
        },
        debounce: function (n, r) {
            var a;
            return function () {
                var e = this,
                    t = arguments;
                clearTimeout(a),
                    (a = setTimeout(function () {
                        n.apply(e, t);
                    }, r || 250));
            };
        },
        throttle: function (r, e) {
            var a,
                o,
                i = void 0 !== e ? e : 200;
            return function () {
                var e = this,
                    t = +new Date(),
                    n = arguments;
                a && t < a + i
                    ? (clearTimeout(o),
                      (o = setTimeout(function () {
                          (a = void 0), r.apply(e, n);
                      }, i)))
                    : ((a = t), r.apply(e, n));
            };
        },
        escapeRegex: function (e) {
            return e.replace(R, "\\$1");
        },
        set: function (r) {
            var f;
            return H.isPlainObject(r)
                ? B.util.set(r._)
                : null === r
                ? function () {}
                : "function" == typeof r
                ? function (e, t, n) {
                      r(e, "set", t, n);
                  }
                : "string" != typeof r ||
                  (-1 === r.indexOf(".") &&
                      -1 === r.indexOf("[") &&
                      -1 === r.indexOf("("))
                ? function (e, t) {
                      e[r] = t;
                  }
                : ((f = function (e, t, n) {
                      for (
                          var r,
                              a,
                              o,
                              i,
                              l = ge(n),
                              n = l[l.length - 1],
                              s = 0,
                              u = l.length - 1;
                          s < u;
                          s++
                      ) {
                          if ("__proto__" === l[s] || "constructor" === l[s])
                              throw new Error("Cannot set prototype values");
                          if (((r = l[s].match(pe)), (a = l[s].match(p)), r)) {
                              if (
                                  ((l[s] = l[s].replace(pe, "")),
                                  (e[l[s]] = []),
                                  (r = l.slice()).splice(0, s + 1),
                                  (i = r.join(".")),
                                  Array.isArray(t))
                              )
                                  for (var c = 0, d = t.length; c < d; c++)
                                      f((o = {}), t[c], i), e[l[s]].push(o);
                              else e[l[s]] = t;
                              return;
                          }
                          a && ((l[s] = l[s].replace(p, "")), (e = e[l[s]](t))),
                              (null !== e[l[s]] && void 0 !== e[l[s]]) ||
                                  (e[l[s]] = {}),
                              (e = e[l[s]]);
                      }
                      n.match(p)
                          ? e[n.replace(p, "")](t)
                          : (e[n.replace(pe, "")] = t);
                  }),
                  function (e, t) {
                      return f(e, t, r);
                  });
        },
        get: function (a) {
            var o, f;
            return H.isPlainObject(a)
                ? ((o = {}),
                  H.each(a, function (e, t) {
                      t && (o[e] = B.util.get(t));
                  }),
                  function (e, t, n, r) {
                      var a = o[t] || o._;
                      return void 0 !== a ? a(e, t, n, r) : e;
                  })
                : null === a
                ? function (e) {
                      return e;
                  }
                : "function" == typeof a
                ? function (e, t, n, r) {
                      return a(e, t, n, r);
                  }
                : "string" != typeof a ||
                  (-1 === a.indexOf(".") &&
                      -1 === a.indexOf("[") &&
                      -1 === a.indexOf("("))
                ? function (e) {
                      return e[a];
                  }
                : ((f = function (e, t, n) {
                      var r, a, o;
                      if ("" !== n)
                          for (var i = ge(n), l = 0, s = i.length; l < s; l++) {
                              if (
                                  ((d = i[l].match(pe)), (r = i[l].match(p)), d)
                              ) {
                                  if (
                                      ((i[l] = i[l].replace(pe, "")),
                                      "" !== i[l] && (e = e[i[l]]),
                                      (a = []),
                                      i.splice(0, l + 1),
                                      (o = i.join(".")),
                                      Array.isArray(e))
                                  )
                                      for (var u = 0, c = e.length; u < c; u++)
                                          a.push(f(e[u], t, o));
                                  var d = d[0].substring(1, d[0].length - 1);
                                  e = "" === d ? a : a.join(d);
                                  break;
                              }
                              if (r)
                                  (i[l] = i[l].replace(p, "")), (e = e[i[l]]());
                              else {
                                  if (null === e || null === e[i[l]])
                                      return null;
                                  if (void 0 === e || void 0 === e[i[l]])
                                      return;
                                  e = e[i[l]];
                              }
                          }
                      return e;
                  }),
                  function (e, t) {
                      return f(e, t, a);
                  });
        },
        stripHtml: function (e) {
            var t = typeof e;
            if ("function" != t) return "string" == t ? A(e) : e;
            A = e;
        },
        escapeHtml: function (e) {
            var t = typeof e;
            if ("function" != t)
                return "string" == t || Array.isArray(e) ? u(e) : e;
            u = e;
        },
        unique: x,
    };
    var a = function (e, t, n) {
        void 0 !== e[t] && (e[n] = e[t]);
    };
    function Q(e) {
        a(e, "ordering", "bSort"),
            a(e, "orderMulti", "bSortMulti"),
            a(e, "orderClasses", "bSortClasses"),
            a(e, "orderCellsTop", "bSortCellsTop"),
            a(e, "order", "aaSorting"),
            a(e, "orderFixed", "aaSortingFixed"),
            a(e, "paging", "bPaginate"),
            a(e, "pagingType", "sPaginationType"),
            a(e, "pageLength", "iDisplayLength"),
            a(e, "searching", "bFilter"),
            "boolean" == typeof e.sScrollX &&
                (e.sScrollX = e.sScrollX ? "100%" : ""),
            "boolean" == typeof e.scrollX &&
                (e.scrollX = e.scrollX ? "100%" : "");
        var t = e.aoSearchCols;
        if (t)
            for (var n = 0, r = t.length; n < r; n++)
                t[n] && V(B.models.oSearch, t[n]);
        e.serverSide && !e.searchDelay && (e.searchDelay = 400);
    }
    function K(e) {
        a(e, "orderable", "bSortable"),
            a(e, "orderData", "aDataSort"),
            a(e, "orderSequence", "asSorting"),
            a(e, "orderDataType", "sortDataType");
        var t = e.aDataSort;
        "number" != typeof t || Array.isArray(t) || (e.aDataSort = [t]);
    }
    function ee(e) {
        var t = B.defaults.column,
            n = e.aoColumns.length,
            t = H.extend({}, B.models.oColumn, t, {
                aDataSort: t.aDataSort || [n],
                mData: t.mData || n,
                idx: n,
                searchFixed: {},
                colEl: H("<col>").attr("data-dt-column", n),
            }),
            t = (e.aoColumns.push(t), e.aoPreSearchCols);
        t[n] = H.extend({}, B.models.oSearch, t[n]);
    }
    function te(e, t, n) {
        function r(e) {
            return "string" == typeof e && -1 !== e.indexOf("@");
        }
        var a = e.aoColumns[t],
            o =
                (null != n &&
                    (K(n),
                    V(B.defaults.column, n, !0),
                    void 0 === n.mDataProp ||
                        n.mData ||
                        (n.mData = n.mDataProp),
                    n.sType && (a._sManualType = n.sType),
                    n.className && !n.sClass && (n.sClass = n.className),
                    (t = a.sClass),
                    H.extend(a, n),
                    $(a, n, "sWidth", "sWidthOrig"),
                    t !== a.sClass && (a.sClass = t + " " + a.sClass),
                    void 0 !== n.iDataSort && (a.aDataSort = [n.iDataSort]),
                    $(a, n, "aDataSort")),
                a.mData),
            i = U(o);
        a.mRender &&
            Array.isArray(a.mRender) &&
            ((n = (t = a.mRender.slice()).shift()),
            (a.mRender = B.render[n].apply(W, t))),
            (a._render = a.mRender ? U(a.mRender) : null);
        (a._bAttrSrc =
            H.isPlainObject(o) && (r(o.sort) || r(o.type) || r(o.filter))),
            (a._setter = null),
            (a.fnGetData = function (e, t, n) {
                var r = i(e, t, void 0, n);
                return a._render && t ? a._render(r, t, e, n) : r;
            }),
            (a.fnSetData = function (e, t, n) {
                return v(o)(e, t, n);
            }),
            "number" == typeof o || a._isArrayHost || (e._rowReadObject = !0),
            e.oFeatures.bSort || (a.bSortable = !1);
    }
    function ne(e) {
        var t = e;
        if (t.oFeatures.bAutoWidth) {
            var n,
                r,
                a = t.nTable,
                o = t.aoColumns,
                i = t.oScroll,
                l = i.sY,
                s = i.sX,
                i = i.sXInner,
                u = ie(t, "bVisible"),
                c = a.getAttribute("width"),
                d = a.parentNode,
                f = a.style.width,
                f =
                    (f || c || ((a.style.width = "100%"), (f = "100%")),
                    f && -1 !== f.indexOf("%") && (c = f),
                    G(t, null, "column-calc", { visible: u }, !1),
                    H(a.cloneNode())
                        .css("visibility", "hidden")
                        .removeAttr("id")),
                h = (f.append("<tbody>"), H("<tr/>").appendTo(f.find("tbody")));
            for (
                f.append(H(t.nTHead).clone()).append(H(t.nTFoot).clone()),
                    f.find("tfoot th, tfoot td").css("width", ""),
                    f.find("thead th, thead td").each(function () {
                        var e = ce(t, this, !0, !1);
                        e
                            ? ((this.style.width = e),
                              s &&
                                  ((this.style.minWidth = e),
                                  H(this).append(
                                      H("<div/>").css({
                                          width: e,
                                          margin: 0,
                                          padding: 0,
                                          border: 0,
                                          height: 1,
                                      })
                                  )))
                            : (this.style.width = "");
                    }),
                    n = 0;
                n < u.length;
                n++
            ) {
                (p = u[n]), (r = o[p]);
                var p = (function (e, t) {
                        var n = e.aoColumns[t];
                        if (!n.maxLenString) {
                            for (
                                var r,
                                    a = "",
                                    o = -1,
                                    i = 0,
                                    l = e.aiDisplayMaster.length;
                                i < l;
                                i++
                            ) {
                                var s = e.aiDisplayMaster[i],
                                    s = De(e, s)[t],
                                    s =
                                        s && "object" == typeof s && s.nodeType
                                            ? s.innerHTML
                                            : s + "";
                                (s = s
                                    .replace(/id=".*?"/g, "")
                                    .replace(/name=".*?"/g, "")),
                                    (r = A(s).replace(/&nbsp;/g, " ")).length >
                                        o && ((a = s), (o = r.length));
                            }
                            n.maxLenString = a;
                        }
                        return n.maxLenString;
                    })(t, p),
                    g = I.type.className[r.sType],
                    v = p + r.sContentPadding,
                    p = -1 === p.indexOf("<") ? L.createTextNode(v) : v;
                H("<td/>").addClass(g).addClass(r.sClass).append(p).appendTo(h);
            }
            H("[name]", f).removeAttr("name");
            var m,
                b,
                y = H("<div/>")
                    .css(
                        s || l
                            ? {
                                  position: "absolute",
                                  top: 0,
                                  left: 0,
                                  height: 1,
                                  right: 0,
                                  overflow: "hidden",
                              }
                            : {}
                    )
                    .append(f)
                    .appendTo(d),
                D =
                    (s && i
                        ? f.width(i)
                        : s
                        ? (f.css("width", "auto"),
                          f.removeAttr("width"),
                          f.width() < d.clientWidth &&
                              c &&
                              f.width(d.clientWidth))
                        : l
                        ? f.width(d.clientWidth)
                        : c && f.width(c),
                    0),
                x = f.find("tbody tr").eq(0).children();
            for (n = 0; n < u.length; n++) {
                var S = x[n].getBoundingClientRect().width;
                (D += S), (o[u[n]].sWidth = N(S));
            }
            (a.style.width = N(D)),
                y.remove(),
                c && (a.style.width = N(c)),
                (!c && !s) ||
                    t._reszEvt ||
                    ((m = function () {
                        return H(t.nTableWrapper).is(":visible")
                            ? H(t.nTableWrapper).width()
                            : 0;
                    }),
                    (t.containerWidth = m()),
                    (b = B.util.throttle(function () {
                        var e = m();
                        t.bDestroying ||
                            t.containerWidth === e ||
                            0 === e ||
                            (ne(t), (t.containerWidth = e));
                    })),
                    W.ResizeObserver
                        ? ((t.resizeObserver = new ResizeObserver(function (e) {
                              e = e[0].contentBoxSize;
                              (Array.isArray(e) ? e[0] : e).inlineSize <
                                  t.containerWidth || b();
                          })),
                          t.resizeObserver.observe(t.nTableWrapper))
                        : H(W).on("resize.DT-" + t.sInstance, b),
                    (t._reszEvt = !0));
        }
        for (var w = e, T = w.aoColumns, _ = 0; _ < T.length; _++) {
            var C = ce(w, [_], !1, !1);
            T[_].colEl.css("width", C),
                w.oScroll.sX && T[_].colEl.css("min-width", C);
        }
        i = e.oScroll;
        ("" === i.sY && "" === i.sX) || qe(e), G(e, null, "column-sizing", [e]);
    }
    function re(e, t) {
        e = ie(e, "bVisible");
        return "number" == typeof e[t] ? e[t] : null;
    }
    function ae(e, t) {
        e = ie(e, "bVisible").indexOf(t);
        return -1 !== e ? e : null;
    }
    function oe(e) {
        var t = e.aoHeader,
            n = e.aoColumns,
            r = 0;
        if (t.length)
            for (var a = 0, o = t[0].length; a < o; a++)
                n[a].bVisible &&
                    "none" !== H(t[0][a].cell).css("display") &&
                    r++;
        return r;
    }
    function ie(e, n) {
        var r = [];
        return (
            e.aoColumns.map(function (e, t) {
                e[n] && r.push(t);
            }),
            r
        );
    }
    function le(e, t) {
        return !0 === t ? e._name : t;
    }
    function se(e) {
        for (
            var t,
                n,
                r,
                a,
                o,
                i,
                l = e.aoColumns,
                s = e.aoData,
                u = B.ext.type.detect,
                c = 0,
                d = l.length;
            c < d;
            c++
        ) {
            if (((i = []), !(o = l[c]).sType && o._sManualType))
                o.sType = o._sManualType;
            else if (!o.sType) {
                if (!e.typeDetect) return;
                for (t = 0, n = u.length; t < n; t++) {
                    var f = u[t],
                        h = f.oneOf,
                        p = f.allOf || f,
                        g = f.init,
                        v = !1,
                        m = null;
                    if (g && (m = le(f, g(e, o, c)))) {
                        o.sType = m;
                        break;
                    }
                    for (r = 0, a = s.length; r < a; r++)
                        if (s[r]) {
                            if (
                                (void 0 === i[r] && (i[r] = q(e, r, c, "type")),
                                h && !v && (v = le(f, h(i[r], e))),
                                !(m = le(f, p(i[r], e))) && t !== u.length - 3)
                            )
                                break;
                            if ("html" === m && !T(i[r])) break;
                        }
                    if ((h && v && m) || (!h && m)) {
                        o.sType = m;
                        break;
                    }
                }
                o.sType || (o.sType = "string");
            }
            var b = I.type.className[o.sType],
                b =
                    (b && (ue(e.aoHeader, c, b), ue(e.aoFooter, c, b)),
                    I.type.render[o.sType]);
            if (b && !o._render) {
                (o._render = B.util.get(b)), (y = w = S = x = D = void 0);
                for (
                    var y, D = e, x = c, S = D.aoData, w = 0;
                    w < S.length;
                    w++
                )
                    S[w].nTr &&
                        ((y = q(D, w, x, "display")),
                        (S[w].displayData[x] = y),
                        he(S[w].anCells[x], y));
            }
        }
    }
    function ue(e, t, n) {
        e.forEach(function (e) {
            e[t] && e[t].unique && y(e[t].cell, n);
        });
    }
    function ce(e, t, n, r) {
        Array.isArray(t) || (t = de(t));
        for (var a, o = 0, i = e.aoColumns, l = 0, s = t.length; l < s; l++) {
            var u = i[t[l]],
                c = n ? u.sWidthOrig : u.sWidth;
            if (r || !1 !== u.bVisible) {
                if (null == c) return null;
                "number" == typeof c
                    ? ((a = "px"), (o += c))
                    : (u = c.match(/([\d\.]+)([^\d]*)/)) &&
                      ((o += +u[1]), (a = 3 === u.length ? u[2] : "px"));
            }
        }
        return o + a;
    }
    function de(e) {
        e = H(e).closest("[data-dt-column]").attr("data-dt-column");
        return e
            ? e.split(",").map(function (e) {
                  return +e;
              })
            : [];
    }
    function D(e, t, n, r) {
        for (
            var a = e.aoData.length,
                o = H.extend(!0, {}, B.models.oRow, {
                    src: n ? "dom" : "data",
                    idx: a,
                }),
                i = ((o._aData = t), e.aoData.push(o), e.aoColumns),
                l = 0,
                s = i.length;
            l < s;
            l++
        )
            i[l].sType = null;
        e.aiDisplayMaster.push(a);
        t = e.rowIdFn(t);
        return (
            void 0 !== t && (e.aIds[t] = o),
            (!n && e.oFeatures.bDeferRender) || xe(e, a, n, r),
            a
        );
    }
    function fe(n, e) {
        var r;
        return (e = e instanceof H ? e : H(e)).map(function (e, t) {
            return (r = ye(n, t)), D(n, r.data, t, r.cells);
        });
    }
    function q(e, t, n, r) {
        "search" === r ? (r = "filter") : "order" === r && (r = "sort");
        var a = e.aoData[t];
        if (a) {
            var o = e.iDraw,
                i = e.aoColumns[n],
                a = a._aData,
                l = i.sDefaultContent,
                s = i.fnGetData(a, r, { settings: e, row: t, col: n });
            if (
                void 0 ===
                (s =
                    "display" !== r && s && "object" == typeof s && s.nodeName
                        ? s.innerHTML
                        : s)
            )
                return (
                    e.iDrawError != o &&
                        null === l &&
                        (z(
                            e,
                            0,
                            "Requested unknown parameter " +
                                ("function" == typeof i.mData
                                    ? "{function}"
                                    : "'" + i.mData + "'") +
                                " for row " +
                                t +
                                ", column " +
                                n,
                            4
                        ),
                        (e.iDrawError = o)),
                    l
                );
            if ((s !== a && null !== s) || null === l || void 0 === r) {
                if ("function" == typeof s) return s.call(a);
            } else s = l;
            return null === s && "display" === r
                ? ""
                : (s =
                      "filter" === r && (t = B.ext.type.search)[i.sType]
                          ? t[i.sType](s)
                          : s);
        }
    }
    function he(e, t) {
        t && "object" == typeof t && t.nodeName
            ? H(e).empty().append(t)
            : (e.innerHTML = t);
    }
    var pe = /\[.*?\]$/,
        p = /\(\)$/;
    function ge(e) {
        return (e.match(/(\\.|[^.])+/g) || [""]).map(function (e) {
            return e.replace(/\\\./g, ".");
        });
    }
    var U = B.util.get,
        v = B.util.set;
    function ve(e) {
        return b(e.aoData, "_aData");
    }
    function me(e) {
        (e.aoData.length = 0),
            (e.aiDisplayMaster.length = 0),
            (e.aiDisplay.length = 0),
            (e.aIds = {});
    }
    function be(e, t, n, r) {
        var a,
            o,
            i = e.aoData[t];
        if (
            ((i._aSortData = null),
            (i._aFilterData = null),
            (i.displayData = null),
            "dom" !== n && ((n && "auto" !== n) || "dom" !== i.src))
        ) {
            var l = i.anCells,
                s = De(e, t);
            if (l)
                if (void 0 !== r) he(l[r], s[r]);
                else for (a = 0, o = l.length; a < o; a++) he(l[a], s[a]);
        } else i._aData = ye(e, i, r, void 0 === r ? void 0 : i._aData).data;
        var u = e.aoColumns;
        if (void 0 !== r) (u[r].sType = null), (u[r].maxLenString = null);
        else {
            for (a = 0, o = u.length; a < o; a++)
                (u[a].sType = null), (u[a].maxLenString = null);
            Se(e, i);
        }
    }
    function ye(e, t, n, r) {
        function a(e, t) {
            var n;
            "string" == typeof e &&
                -1 !== (n = e.indexOf("@")) &&
                ((n = e.substring(n + 1)), v(e)(r, t.getAttribute(n)));
        }
        function o(e) {
            (void 0 !== n && n !== d) ||
                ((l = f[d]),
                (s = e.innerHTML.trim()),
                l && l._bAttrSrc
                    ? (v(l.mData._)(r, s),
                      a(l.mData.sort, e),
                      a(l.mData.type, e),
                      a(l.mData.filter, e))
                    : h
                    ? (l._setter || (l._setter = v(l.mData)), l._setter(r, s))
                    : (r[d] = s)),
                d++;
        }
        var i,
            l,
            s,
            u = [],
            c = t.firstChild,
            d = 0,
            f = e.aoColumns,
            h = e._rowReadObject;
        r = void 0 !== r ? r : h ? {} : [];
        if (c)
            for (; c; )
                ("TD" != (i = c.nodeName.toUpperCase()) && "TH" != i) ||
                    (o(c), u.push(c)),
                    (c = c.nextSibling);
        else for (var p = 0, g = (u = t.anCells).length; p < g; p++) o(u[p]);
        var t = t.firstChild ? t : t.nTr;
        return (
            t && (t = t.getAttribute("id")) && v(e.rowId)(r, t),
            { data: r, cells: u }
        );
    }
    function De(e, t) {
        var n = e.aoData[t],
            r = e.aoColumns;
        if (!n.displayData) {
            n.displayData = [];
            for (var a = 0, o = r.length; a < o; a++)
                n.displayData.push(q(e, t, a, "display"));
        }
        return n.displayData;
    }
    function xe(e, t, n, r) {
        var a,
            o,
            i,
            l,
            s,
            u,
            c = e.aoData[t],
            d = c._aData,
            f = [],
            h = e.oClasses.tbody.row;
        if (null === c.nTr) {
            for (
                a = n || L.createElement("tr"),
                    c.nTr = a,
                    c.anCells = f,
                    y(a, h),
                    a._DT_RowIndex = t,
                    Se(e, c),
                    l = 0,
                    s = e.aoColumns.length;
                l < s;
                l++
            ) {
                (i = e.aoColumns[l]),
                    (o = (u = !n || !r[l])
                        ? L.createElement(i.sCellType)
                        : r[l]) || z(e, 0, "Incorrect column count", 18),
                    (o._DT_CellIndex = { row: t, column: l }),
                    f.push(o);
                var p = De(e, t);
                (!u &&
                    ((!i.mRender && i.mData === l) ||
                        (H.isPlainObject(i.mData) &&
                            i.mData._ === l + ".display"))) ||
                    he(o, p[l]),
                    y(o, i.sClass),
                    i.bVisible && u
                        ? a.appendChild(o)
                        : i.bVisible || u || o.parentNode.removeChild(o),
                    i.fnCreatedCell &&
                        i.fnCreatedCell.call(
                            e.oInstance,
                            o,
                            q(e, t, l),
                            d,
                            t,
                            l
                        );
            }
            G(e, "aoRowCreatedCallback", "row-created", [a, d, t, f]);
        } else y(c.nTr, h);
    }
    function Se(e, t) {
        var n = t.nTr,
            r = t._aData;
        n &&
            ((e = e.rowIdFn(r)) && (n.id = e),
            r.DT_RowClass &&
                ((e = r.DT_RowClass.split(" ")),
                (t.__rowc = t.__rowc ? x(t.__rowc.concat(e)) : e),
                H(n).removeClass(t.__rowc.join(" ")).addClass(r.DT_RowClass)),
            r.DT_RowAttr && H(n).attr(r.DT_RowAttr),
            r.DT_RowData) &&
            H(n).data(r.DT_RowData);
    }
    function we(e, t) {
        var n,
            r,
            a,
            o = e.oClasses,
            i = e.aoColumns,
            l = "header" === t ? e.nTHead : e.nTFoot,
            s = "header" === t ? "sTitle" : t;
        if (l) {
            if (
                ("header" === t || b(e.aoColumns, s).join("")) &&
                1 ===
                    (a = (a = H("tr", l)).length ? a : H("<tr/>").appendTo(l))
                        .length
            ) {
                var u = 0;
                for (
                    H("td, th", a).each(function () {
                        u += this.colSpan;
                    }),
                        n = u,
                        r = i.length;
                    n < r;
                    n++
                )
                    H("<th/>")
                        .html(i[n][s] || "")
                        .appendTo(a);
            }
            var c = Ae(e, l, !0);
            "header" === t
                ? ((e.aoHeader = c), H("tr", l).addClass(o.thead.row))
                : ((e.aoFooter = c), H("tr", l).addClass(o.tfoot.row)),
                H(l)
                    .children("tr")
                    .children("th, td")
                    .each(function () {
                        rt(e, t)(e, H(this), o);
                    });
        }
    }
    function Te(e, t, n) {
        var r,
            a,
            o,
            i,
            l,
            s = [],
            u = [],
            c = e.aoColumns,
            e = c.length;
        if (t) {
            for (
                n =
                    n ||
                    h(e).filter(function (e) {
                        return c[e].bVisible;
                    }),
                    r = 0;
                r < t.length;
                r++
            )
                (s[r] = t[r].slice().filter(function (e, t) {
                    return n.includes(t);
                })),
                    u.push([]);
            for (r = 0; r < s.length; r++)
                for (a = 0; a < s[r].length; a++)
                    if (((l = i = 1), void 0 === u[r][a])) {
                        for (
                            o = s[r][a].cell;
                            void 0 !== s[r + i] &&
                            s[r][a].cell == s[r + i][a].cell;

                        )
                            (u[r + i][a] = null), i++;
                        for (
                            ;
                            void 0 !== s[r][a + l] &&
                            s[r][a].cell == s[r][a + l].cell;

                        ) {
                            for (var d = 0; d < i; d++) u[r + d][a + l] = null;
                            l++;
                        }
                        var f = H("span.dt-column-title", o);
                        u[r][a] = {
                            cell: o,
                            colspan: l,
                            rowspan: i,
                            title: (f.length ? f : H(o)).html(),
                        };
                    }
            return u;
        }
    }
    function _e(e, t) {
        for (var n, r, a = Te(e, t), o = 0; o < t.length; o++) {
            if ((n = t[o].row)) for (; (r = n.firstChild); ) n.removeChild(r);
            for (var i = 0; i < a[o].length; i++) {
                var l = a[o][i];
                l &&
                    H(l.cell)
                        .appendTo(n)
                        .attr("rowspan", l.rowspan)
                        .attr("colspan", l.colspan);
            }
        }
    }
    function S(e, t) {
        if (
            ((a = "ssp" == J((s = e))),
            void 0 !== (i = s.iInitDisplayStart) &&
                -1 !== i &&
                ((s._iDisplayStart = !a && i >= s.fnRecordsDisplay() ? 0 : i),
                (s.iInitDisplayStart = -1)),
            -1 !== G(e, "aoPreDrawCallback", "preDraw", [e]).indexOf(!1))
        )
            w(e, !1);
        else {
            var l,
                n = [],
                r = 0,
                a = "ssp" == J(e),
                o = e.aiDisplay,
                i = e._iDisplayStart,
                s = e.fnDisplayEnd(),
                u = e.aoColumns,
                c = H(e.nTBody);
            if (((e.bDrawing = !0), e.deferLoading))
                (e.deferLoading = !1), e.iDraw++, w(e, !1);
            else if (a) {
                if (!e.bDestroying && !t)
                    return (
                        0 === e.iDraw && c.empty().append(Ce(e)),
                        (l = e).iDraw++,
                        w(l, !0),
                        void Ne(
                            l,
                            (function (t) {
                                function n(e, t) {
                                    return "function" == typeof r[e][t]
                                        ? "function"
                                        : r[e][t];
                                }
                                var r = t.aoColumns,
                                    e = t.oFeatures,
                                    a = t.oPreviousSearch,
                                    o = t.aoPreSearchCols;
                                return {
                                    draw: t.iDraw,
                                    columns: r.map(function (t, e) {
                                        return {
                                            data: n(e, "mData"),
                                            name: t.sName,
                                            searchable: t.bSearchable,
                                            orderable: t.bSortable,
                                            search: {
                                                value: o[e].search,
                                                regex: o[e].regex,
                                                fixed: Object.keys(
                                                    t.searchFixed
                                                ).map(function (e) {
                                                    return {
                                                        name: e,
                                                        term: t.searchFixed[
                                                            e
                                                        ].toString(),
                                                    };
                                                }),
                                            },
                                        };
                                    }),
                                    order: Ge(t).map(function (e) {
                                        return {
                                            column: e.col,
                                            dir: e.dir,
                                            name: n(e.col, "sName"),
                                        };
                                    }),
                                    start: t._iDisplayStart,
                                    length: e.bPaginate
                                        ? t._iDisplayLength
                                        : -1,
                                    search: {
                                        value: a.search,
                                        regex: a.regex,
                                        fixed: Object.keys(t.searchFixed).map(
                                            function (e) {
                                                return {
                                                    name: e,
                                                    term: t.searchFixed[
                                                        e
                                                    ].toString(),
                                                };
                                            }
                                        ),
                                    },
                                };
                            })(l),
                            function (e) {
                                var t = l,
                                    n = Fe(t, (e = e)),
                                    r = Oe(t, "draw", e),
                                    a = Oe(t, "recordsTotal", e),
                                    e = Oe(t, "recordsFiltered", e);
                                if (void 0 !== r) {
                                    if (+r < t.iDraw) return;
                                    t.iDraw = +r;
                                }
                                (n = n || []),
                                    me(t),
                                    (t._iRecordsTotal = parseInt(a, 10)),
                                    (t._iRecordsDisplay = parseInt(e, 10));
                                for (var o = 0, i = n.length; o < i; o++)
                                    D(t, n[o]);
                                (t.aiDisplay = t.aiDisplayMaster.slice()),
                                    se(t),
                                    S(t, !0),
                                    He(t),
                                    w(t, !1);
                            }
                        )
                    );
            } else e.iDraw++;
            if (0 !== o.length)
                for (
                    var d = a ? e.aoData.length : s, f = a ? 0 : i;
                    f < d;
                    f++
                ) {
                    for (
                        var h = o[f],
                            p = e.aoData[h],
                            g = (null === p.nTr && xe(e, h), p.nTr),
                            v = 0;
                        v < u.length;
                        v++
                    ) {
                        var m = u[v],
                            b = p.anCells[v];
                        y(b, I.type.className[m.sType]),
                            y(b, e.oClasses.tbody.cell);
                    }
                    G(e, "aoRowCallback", null, [g, p._aData, r, f, h]),
                        n.push(g),
                        r++;
                }
            else n[0] = Ce(e);
            G(e, "aoHeaderCallback", "header", [
                H(e.nTHead).children("tr")[0],
                ve(e),
                i,
                s,
                o,
            ]),
                G(e, "aoFooterCallback", "footer", [
                    H(e.nTFoot).children("tr")[0],
                    ve(e),
                    i,
                    s,
                    o,
                ]),
                c[0].replaceChildren
                    ? c[0].replaceChildren.apply(c[0], n)
                    : (c.children().detach(), c.append(H(n))),
                H(e.nTableWrapper).toggleClass(
                    "dt-empty-footer",
                    0 === H("tr", e.nTFoot).length
                ),
                G(e, "aoDrawCallback", "draw", [e], !0),
                (e.bSorted = !1),
                (e.bFiltered = !1),
                (e.bDrawing = !1);
        }
    }
    function d(e, t, n) {
        var r = e.oFeatures,
            a = r.bSort,
            r = r.bFilter;
        (void 0 !== n && !0 !== n) ||
            (se(e),
            a && Je(e),
            r
                ? je(e, e.oPreviousSearch)
                : (e.aiDisplay = e.aiDisplayMaster.slice())),
            !0 !== t && (e._iDisplayStart = 0),
            (e._drawHold = t),
            S(e),
            (e._drawHold = !1);
    }
    function Ce(e) {
        var t = e.oLanguage,
            n = t.sZeroRecords,
            r = J(e);
        return (
            (e.iDraw < 1 && "ssp" === r) || (e.iDraw <= 1 && "ajax" === r)
                ? (n = t.sLoadingRecords)
                : t.sEmptyTable &&
                  0 === e.fnRecordsTotal() &&
                  (n = t.sEmptyTable),
            H("<tr/>").append(
                H("<td />", {
                    colSpan: oe(e),
                    class: e.oClasses.empty.row,
                }).html(n)
            )[0]
        );
    }
    function Le(e, t, a) {
        var o = [];
        H.each(t, function (e, t) {
            var n, r;
            null !== t &&
                ((n = (e = e.match(/^([a-z]+)([0-9]*)([A-Za-z]*)$/))[2]
                    ? +e[2]
                    : 0),
                (r = e[3] ? e[3].toLowerCase() : "full"),
                e[1] === a) &&
                (function e(t, n, r) {
                    if (Array.isArray(r))
                        for (var a = 0; a < r.length; a++) e(t, n, r[a]);
                    else {
                        var o = t[n];
                        H.isPlainObject(r)
                            ? r.features
                                ? (r.rowId && (t.id = r.rowId),
                                  r.rowClass && (t.className = r.rowClass),
                                  (o.id = r.id),
                                  (o.className = r.className),
                                  e(t, n, r.features))
                                : Object.keys(r).map(function (e) {
                                      o.contents.push({
                                          feature: e,
                                          opts: r[e],
                                      });
                                  })
                            : o.contents.push(r);
                    }
                })(
                    (function (e, t, n) {
                        for (var r, a = 0; a < e.length; a++)
                            if (
                                (r = e[a]).rowNum === t &&
                                (("full" === n && r.full) ||
                                    (("start" === n || "end" === n) &&
                                        (r.start || r.end)))
                            )
                                return r[n] || (r[n] = { contents: [] }), r;
                        return (
                            ((r = { rowNum: t })[n] = { contents: [] }),
                            e.push(r),
                            r
                        );
                    })(o, n, r),
                    r,
                    t
                );
        }),
            o.sort(function (e, t) {
                var n = e.rowNum,
                    r = t.rowNum;
                return n === r
                    ? ((e = e.full && !t.full ? -1 : 1),
                      "bottom" === a ? -1 * e : e)
                    : r - n;
            }),
            "bottom" === a && o.reverse();
        for (var n = 0; n < o.length; n++)
            delete o[n].rowNum,
                !(function (o, i) {
                    function l(e, t) {
                        return (
                            I.features[e] || z(o, 0, "Unknown feature: " + e),
                            I.features[e].apply(this, [o, t])
                        );
                    }
                    function e(e) {
                        if (i[e])
                            for (
                                var t, n = i[e].contents, r = 0, a = n.length;
                                r < a;
                                r++
                            )
                                n[r] &&
                                    ("string" == typeof n[r]
                                        ? (n[r] = l(n[r], null))
                                        : H.isPlainObject(n[r])
                                        ? (n[r] = l(n[r].feature, n[r].opts))
                                        : "function" == typeof n[r].node
                                        ? (n[r] = n[r].node(o))
                                        : "function" == typeof n[r] &&
                                          ((t = n[r](o)),
                                          (n[r] =
                                              "function" == typeof t.node
                                                  ? t.node()
                                                  : t)));
                    }
                    e("start"), e("end"), e("full");
                })(e, o[n]);
        return o;
    }
    function Ie(t) {
        var r,
            e = t.oClasses,
            n = H(t.nTable),
            a = H("<div/>")
                .attr({ id: t.sTableId + "_wrapper", class: e.container })
                .insertBefore(n);
        if (((t.nTableWrapper = a[0]), t.sDom))
            for (
                var o,
                    i,
                    l,
                    s,
                    u,
                    c,
                    d = t,
                    e = t.sDom,
                    f = a,
                    h = e.match(/(".*?")|('.*?')|./g),
                    p = 0;
                p < h.length;
                p++
            )
                (o = null),
                    "<" == (i = h[p])
                        ? ((l = H("<div/>")),
                          ("'" != (s = h[p + 1])[0] && '"' != s[0]) ||
                              ((s = s.replace(/['"]/g, "")),
                              (u = ""),
                              -1 != s.indexOf(".")
                                  ? ((c = s.split(".")), (u = c[0]), (c = c[1]))
                                  : "#" == s[0]
                                  ? (u = s)
                                  : (c = s),
                              l.attr("id", u.substring(1)).addClass(c),
                              p++),
                          f.append(l),
                          (f = l))
                        : ">" == i
                        ? (f = f.parent())
                        : "t" == i
                        ? (o = Ve(d))
                        : B.ext.feature.forEach(function (e) {
                              i == e.cFeature && (o = e.fnInit(d));
                          }),
                    o && f.append(o);
        else {
            var n = Le(t, t.layout, "top"),
                e = Le(t, t.layout, "bottom"),
                g = rt(t, "layout");
            n.forEach(function (e) {
                g(t, a, e);
            }),
                g(t, a, { full: { table: !0, contents: [Ve(t)] } }),
                e.forEach(function (e) {
                    g(t, a, e);
                });
        }
        var n = t,
            e = n.nTable,
            v = "" !== n.oScroll.sX || "" !== n.oScroll.sY;
        n.oFeatures.bProcessing &&
            ((r = H("<div/>", {
                id: n.sTableId + "_processing",
                class: n.oClasses.processing.container,
                role: "status",
            })
                .html(n.oLanguage.sProcessing)
                .append(
                    "<div><div></div><div></div><div></div><div></div></div>"
                )),
            v
                ? r.prependTo(H("div.dt-scroll", n.nTableWrapper))
                : r.insertBefore(e),
            H(e).on("processing.dt.DT", function (e, t, n) {
                r.css("display", n ? "block" : "none");
            }));
    }
    function Ae(e, t, n) {
        for (
            var r,
                a,
                o,
                i,
                l,
                s,
                u = e.aoColumns,
                c = H(t).children("tr"),
                d = t && "thead" === t.nodeName.toLowerCase(),
                f = [],
                h = 0,
                p = c.length;
            h < p;
            h++
        )
            f.push([]);
        for (h = 0, p = c.length; h < p; h++)
            for (a = (r = c[h]).firstChild; a; ) {
                if (
                    "TD" == a.nodeName.toUpperCase() ||
                    "TH" == a.nodeName.toUpperCase()
                ) {
                    var g,
                        v,
                        m,
                        b,
                        y,
                        D = [];
                    for (
                        b =
                            (b = +a.getAttribute("colspan")) && 0 != b && 1 != b
                                ? b
                                : 1,
                            y =
                                (y = +a.getAttribute("rowspan")) &&
                                0 != y &&
                                1 != y
                                    ? y
                                    : 1,
                            l = (function (e, t, n) {
                                for (var r = e[t]; r[n]; ) n++;
                                return n;
                            })(f, h, 0),
                            s = 1 == b,
                            n &&
                                (s &&
                                    (te(e, l, H(a).data()),
                                    (g = u[l]),
                                    (v = a.getAttribute("width") || null),
                                    (m = a.style.width.match(
                                        /width:\s*(\d+[pxem%]+)/
                                    )) && (v = m[1]),
                                    (g.sWidthOrig = g.sWidth || v),
                                    d
                                        ? (null === g.sTitle ||
                                              g.autoTitle ||
                                              (a.innerHTML = g.sTitle),
                                          !g.sTitle &&
                                              s &&
                                              ((g.sTitle = A(a.innerHTML)),
                                              (g.autoTitle = !0)))
                                        : g.footer && (a.innerHTML = g.footer),
                                    g.ariaTitle ||
                                        (g.ariaTitle =
                                            H(a).attr("aria-label") ||
                                            g.sTitle),
                                    g.className) &&
                                    H(a).addClass(g.className),
                                0 === H("span.dt-column-title", a).length &&
                                    H("<span>")
                                        .addClass("dt-column-title")
                                        .append(a.childNodes)
                                        .appendTo(a),
                                d) &&
                                0 === H("span.dt-column-order", a).length &&
                                H("<span>")
                                    .addClass("dt-column-order")
                                    .appendTo(a),
                            i = 0;
                        i < b;
                        i++
                    ) {
                        for (o = 0; o < y; o++)
                            (f[h + o][l + i] = { cell: a, unique: s }),
                                (f[h + o].row = r);
                        D.push(l + i);
                    }
                    a.setAttribute("data-dt-column", x(D).join(","));
                }
                a = a.nextSibling;
            }
        return f;
    }
    function Ne(n, e, r) {
        function t(e) {
            var t = n.jqXHR ? n.jqXHR.status : null;
            if (
                ((null === e || ("number" == typeof t && 204 == t)) &&
                    Fe(n, (e = {}), []),
                (t = e.error || e.sError) && z(n, 0, t),
                e.d && "string" == typeof e.d)
            )
                try {
                    e = JSON.parse(e.d);
                } catch (e) {}
            (n.json = e), G(n, null, "xhr", [n, e, n.jqXHR], !0), r(e);
        }
        var a,
            o = n.ajax,
            i = n.oInstance,
            l =
                (H.isPlainObject(o) &&
                    o.data &&
                    ((l = "function" == typeof (a = o.data) ? a(e, n) : a),
                    (e = "function" == typeof a && l ? l : H.extend(!0, e, l)),
                    delete o.data),
                {
                    url: "string" == typeof o ? o : "",
                    data: e,
                    success: t,
                    dataType: "json",
                    cache: !1,
                    type: n.sServerMethod,
                    error: function (e, t) {
                        -1 ===
                            G(n, null, "xhr", [n, null, n.jqXHR], !0).indexOf(
                                !0
                            ) &&
                            ("parsererror" == t
                                ? z(n, 0, "Invalid JSON response", 1)
                                : 4 === e.readyState &&
                                  z(n, 0, "Ajax error", 7)),
                            w(n, !1);
                    },
                });
        H.isPlainObject(o) && H.extend(l, o),
            (n.oAjaxData = e),
            G(n, null, "preXhr", [n, e, l], !0),
            "function" == typeof o
                ? (n.jqXHR = o.call(i, e, t, n))
                : "" === o.url
                ? ((i = {}), B.util.set(o.dataSrc)(i, []), t(i))
                : (n.jqXHR = H.ajax(l)),
            a && (o.data = a);
    }
    function Fe(e, t, n) {
        var r = "data";
        if (
            (H.isPlainObject(e.ajax) &&
                void 0 !== e.ajax.dataSrc &&
                ("string" == typeof (e = e.ajax.dataSrc) ||
                "function" == typeof e
                    ? (r = e)
                    : void 0 !== e.data && (r = e.data)),
            !n)
        )
            return "data" === r ? t.aaData || t[r] : "" !== r ? U(r)(t) : t;
        v(r)(t, n);
    }
    function Oe(e, t, n) {
        var e = H.isPlainObject(e.ajax) ? e.ajax.dataSrc : null;
        return e && e[t]
            ? U(e[t])(n)
            : ((e = ""),
              "draw" === t
                  ? (e = "sEcho")
                  : "recordsTotal" === t
                  ? (e = "iTotalRecords")
                  : "recordsFiltered" === t && (e = "iTotalDisplayRecords"),
              void 0 !== n[e] ? n[e] : n[t]);
    }
    function je(n, e) {
        var t = n.aoPreSearchCols;
        if ("ssp" != J(n)) {
            for (
                var r, a, o, i, l, s = n, u = s.aoColumns, c = s.aoData, d = 0;
                d < c.length;
                d++
            )
                if (c[d] && !(l = c[d])._aFilterData) {
                    for (o = [], r = 0, a = u.length; r < a; r++)
                        u[r].bSearchable
                            ? "string" !=
                                  typeof (i =
                                      null === (i = q(s, d, r, "filter"))
                                          ? ""
                                          : i) &&
                              i.toString &&
                              (i = i.toString())
                            : (i = ""),
                            i.indexOf &&
                                -1 !== i.indexOf("&") &&
                                ((Ee.innerHTML = i),
                                (i = ke ? Ee.textContent : Ee.innerText)),
                            i.replace && (i = i.replace(/[\r\n\u2028]/g, "")),
                            o.push(i);
                    (l._aFilterData = o), (l._sFilterRow = o.join("  ")), 0;
                }
            (n.aiDisplay = n.aiDisplayMaster.slice()),
                Re(n.aiDisplay, n, e.search, e),
                H.each(n.searchFixed, function (e, t) {
                    Re(n.aiDisplay, n, t, {});
                });
            for (var f = 0; f < t.length; f++) {
                var h = t[f];
                Re(n.aiDisplay, n, h.search, h, f),
                    H.each(n.aoColumns[f].searchFixed, function (e, t) {
                        Re(n.aiDisplay, n, t, {}, f);
                    });
            }
            for (
                var p,
                    g,
                    v = n,
                    m = B.ext.search,
                    b = v.aiDisplay,
                    y = 0,
                    D = m.length;
                y < D;
                y++
            ) {
                for (var x = [], S = 0, w = b.length; S < w; S++)
                    (g = b[S]),
                        (p = v.aoData[g]),
                        m[y](v, p._aFilterData, g, p._aData, S) && x.push(g);
                (b.length = 0), ot(b, x);
            }
        }
        (n.bFiltered = !0), G(n, null, "search", [n]);
    }
    function Re(e, t, n, r, a) {
        if ("" !== n) {
            for (
                var o = 0,
                    i = [],
                    l = "function" == typeof n ? n : null,
                    s =
                        n instanceof RegExp
                            ? n
                            : l
                            ? null
                            : (function (e, t) {
                                  var r = [],
                                      t = H.extend(
                                          {},
                                          {
                                              boundary: !1,
                                              caseInsensitive: !0,
                                              exact: !1,
                                              regex: !1,
                                              smart: !0,
                                          },
                                          t
                                      );
                                  "string" != typeof e && (e = e.toString());
                                  if (((e = k(e)), t.exact))
                                      return new RegExp(
                                          "^" + Pe(e) + "$",
                                          t.caseInsensitive ? "i" : ""
                                      );
                                  {
                                      var n, a, o;
                                      (e = t.regex ? e : Pe(e)),
                                          t.smart &&
                                              ((n = (
                                                  e.match(
                                                      /!?["\u201C][^"\u201D]+["\u201D]|[^ ]+/g
                                                  ) || [""]
                                              ).map(function (e) {
                                                  var t,
                                                      n = !1;
                                                  return (
                                                      "!" === e.charAt(0) &&
                                                          ((n = !0),
                                                          (e = e.substring(1))),
                                                      '"' === e.charAt(0)
                                                          ? (e = (t =
                                                                e.match(
                                                                    /^"(.*)"$/
                                                                ))
                                                                ? t[1]
                                                                : e)
                                                          : "“" ===
                                                                e.charAt(0) &&
                                                            (e = (t =
                                                                e.match(
                                                                    /^\u201C(.*)\u201D$/
                                                                ))
                                                                ? t[1]
                                                                : e),
                                                      n &&
                                                          (1 < e.length &&
                                                              r.push(
                                                                  "(?!" +
                                                                      e +
                                                                      ")"
                                                              ),
                                                          (e = "")),
                                                      e.replace(/"/g, "")
                                                  );
                                              })),
                                              (a = r.length ? r.join("") : ""),
                                              (o = t.boundary ? "\\b" : ""),
                                              (e =
                                                  "^(?=.*?" +
                                                  o +
                                                  n.join(")(?=.*?" + o) +
                                                  ")(" +
                                                  a +
                                                  ".)*$"));
                                  }
                                  return new RegExp(
                                      e,
                                      t.caseInsensitive ? "i" : ""
                                  );
                              })(n, r),
                    o = 0;
                o < e.length;
                o++
            ) {
                var u = t.aoData[e[o]],
                    c = void 0 === a ? u._sFilterRow : u._aFilterData[a];
                ((l && l(c, u._aData, e[o], a)) || (s && s.test(c))) &&
                    i.push(e[o]);
            }
            for (e.length = i.length, o = 0; o < i.length; o++) e[o] = i[o];
        }
    }
    var Pe = B.util.escapeRegex,
        Ee = H("<div>")[0],
        ke = void 0 !== Ee.textContent;
    function Me(i) {
        var l,
            t,
            n,
            e,
            s = i.oInit,
            u = i.deferLoading,
            c = J(i);
        i.bInitialised
            ? (we(i, "header"),
              we(i, "footer"),
              (n = function () {
                  _e(i, i.aoHeader), _e(i, i.aoFooter);
                  var n = i.iInitDisplayStart;
                  if (s.aaData)
                      for (l = 0; l < s.aaData.length; l++) D(i, s.aaData[l]);
                  else (!u && "dom" != c) || fe(i, H(i.nTBody).children("tr"));
                  (i.aiDisplay = i.aiDisplayMaster.slice()), Ie(i);
                  var e = i,
                      t = e.nTHead,
                      r = t.querySelectorAll("tr"),
                      a = e.bSortCellsTop,
                      o =
                          ':not([data-dt-order="disable"]):not([data-dt-order="icon-only"])';
                  !0 === a ? (t = r[0]) : !1 === a && (t = r[r.length - 1]),
                      ze(
                          e,
                          t,
                          t === e.nTHead
                              ? "tr" + o + " th" + o + ", tr" + o + " td" + o
                              : "th" + o + ", td" + o
                      ),
                      Ye(e, (a = []), e.aaSorting),
                      (e.aaSorting = a),
                      Ue(i),
                      w(i, !0),
                      G(i, null, "preInit", [i], !0),
                      d(i),
                      ("ssp" == c && !u) ||
                          ("ajax" == c
                              ? Ne(i, {}, function (e) {
                                    var t = Fe(i, e);
                                    for (l = 0; l < t.length; l++) D(i, t[l]);
                                    (i.iInitDisplayStart = n),
                                        d(i),
                                        w(i, !1),
                                        He(i);
                                })
                              : (He(i), w(i, !1)));
              }),
              (t = i).oFeatures.bStateSave
                  ? void 0 !==
                        (e = t.fnStateLoadCallback.call(
                            t.oInstance,
                            t,
                            function (e) {
                                Ke(t, e, n);
                            }
                        )) && Ke(t, e, n)
                  : n())
            : setTimeout(function () {
                  Me(i);
              }, 200);
    }
    function He(e) {
        var t;
        e._bInitComplete ||
            ((t = [e, e.json]),
            (e._bInitComplete = !0),
            ne(e),
            G(e, null, "plugin-init", t, !0),
            G(e, "aoInitComplete", "init", t, !0));
    }
    function We(e, t) {
        t = parseInt(t, 10);
        (e._iDisplayLength = t), nt(e), G(e, null, "length", [e, t]);
    }
    function Xe(e, t, n) {
        var r = e._iDisplayStart,
            a = e._iDisplayLength,
            o = e.fnRecordsDisplay();
        if (0 === o || -1 === a) r = 0;
        else if ("number" == typeof t) o < (r = t * a) && (r = 0);
        else if ("first" == t) r = 0;
        else if ("previous" == t) (r = 0 <= a ? r - a : 0) < 0 && (r = 0);
        else if ("next" == t) r + a < o && (r += a);
        else if ("last" == t) r = Math.floor((o - 1) / a) * a;
        else {
            if ("ellipsis" === t) return;
            z(e, 0, "Unknown paging action: " + t, 5);
        }
        o = e._iDisplayStart !== r;
        (e._iDisplayStart = r),
            G(e, null, o ? "page" : "page-nc", [e]),
            o && n && S(e);
    }
    function w(e, t) {
        (e.bDrawing && !1 === t) || G(e, null, "processing", [e, t]);
    }
    function Be(e, t, n) {
        t
            ? (w(e, !0),
              setTimeout(function () {
                  n(), w(e, !1);
              }, 0))
            : n();
    }
    function Ve(e) {
        var t,
            n,
            r,
            a,
            o,
            i,
            l,
            s,
            u,
            c,
            d,
            f,
            h,
            p = H(e.nTable),
            g = e.oScroll;
        return "" === g.sX && "" === g.sY
            ? e.nTable
            : ((t = g.sX),
              (n = g.sY),
              (r = e.oClasses.scrolling),
              (o = (a = e.captionNode) ? a._captionSide : null),
              (u = H(p[0].cloneNode(!1))),
              (i = H(p[0].cloneNode(!1))),
              (c = function (e) {
                  return e ? N(e) : null;
              }),
              (l = p.children("tfoot")).length || (l = null),
              (u = H((s = "<div/>"), { class: r.container })
                  .append(
                      H(s, { class: r.header.self })
                          .css({
                              overflow: "hidden",
                              position: "relative",
                              border: 0,
                              width: t ? c(t) : "100%",
                          })
                          .append(
                              H(s, { class: r.header.inner })
                                  .css({
                                      "box-sizing": "content-box",
                                      width: g.sXInner || "100%",
                                  })
                                  .append(
                                      u
                                          .removeAttr("id")
                                          .css("margin-left", 0)
                                          .append("top" === o ? a : null)
                                          .append(p.children("thead"))
                                  )
                          )
                  )
                  .append(
                      H(s, { class: r.body })
                          .css({
                              position: "relative",
                              overflow: "auto",
                              width: c(t),
                          })
                          .append(p)
                  )),
              l &&
                  u.append(
                      H(s, { class: r.footer.self })
                          .css({
                              overflow: "hidden",
                              border: 0,
                              width: t ? c(t) : "100%",
                          })
                          .append(
                              H(s, { class: r.footer.inner }).append(
                                  i
                                      .removeAttr("id")
                                      .css("margin-left", 0)
                                      .append("bottom" === o ? a : null)
                                      .append(p.children("tfoot"))
                              )
                          )
                  ),
              (c = u.children()),
              (d = c[0]),
              (f = c[1]),
              (h = l ? c[2] : null),
              H(f).on("scroll.DT", function () {
                  var e = this.scrollLeft;
                  (d.scrollLeft = e), l && (h.scrollLeft = e);
              }),
              H("th, td", d).on("focus", function () {
                  var e = d.scrollLeft;
                  (f.scrollLeft = e), l && (f.scrollLeft = e);
              }),
              H(f).css("max-height", n),
              g.bCollapse || H(f).css("height", n),
              (e.nScrollHead = d),
              (e.nScrollBody = f),
              (e.nScrollFoot = h),
              e.aoDrawCallback.push(qe),
              u[0]);
    }
    function qe(t) {
        var e = t.oScroll,
            n = e.iBarWidth,
            r = H(t.nScrollHead).children("div"),
            a = r.children("table"),
            o = t.nScrollBody,
            i = H(o),
            l = H(t.nScrollFoot).children("div"),
            s = l.children("table"),
            u = H(t.nTHead),
            c = H(t.nTable),
            d = t.nTFoot && H("th, td", t.nTFoot).length ? H(t.nTFoot) : null,
            f = t.oBrowser,
            h = o.scrollHeight > o.clientHeight;
        if (t.scrollBarVis !== h && void 0 !== t.scrollBarVis)
            (t.scrollBarVis = h), ne(t);
        else {
            if (
                ((t.scrollBarVis = h),
                c.children("thead, tfoot").remove(),
                (h = u.clone().prependTo(c))
                    .find("th, td")
                    .removeAttr("tabindex"),
                h.find("[id]").removeAttr("id"),
                d && (D = d.clone().prependTo(c)).find("[id]").removeAttr("id"),
                t.aiDisplay.length)
            ) {
                for (
                    var p = null,
                        g = "ssp" !== J(t) ? t._iDisplayStart : 0,
                        v = g;
                    v < g + t.aiDisplay.length;
                    v++
                ) {
                    var m = t.aiDisplay[v],
                        m = t.aoData[m].nTr;
                    if (m) {
                        p = m;
                        break;
                    }
                }
                if (p)
                    for (
                        var b = H(p)
                                .children("th, td")
                                .map(function (e) {
                                    return {
                                        idx: re(t, e),
                                        width: H(this).outerWidth(),
                                    };
                                }),
                            v = 0;
                        v < b.length;
                        v++
                    ) {
                        var y = t.aoColumns[b[v].idx].colEl[0];
                        y.style.width.replace("px", "") !== b[v].width &&
                            ((y.style.width = b[v].width + "px"), e.sX) &&
                            (y.style.minWidth = b[v].width + "px");
                    }
            }
            a.find("colgroup").remove(),
                a.append(t.colgroup.clone()),
                d &&
                    (s.find("colgroup").remove(), s.append(t.colgroup.clone())),
                H("th, td", h).each(function () {
                    H(this.childNodes).wrapAll(
                        '<div class="dt-scroll-sizing">'
                    );
                }),
                d &&
                    H("th, td", D).each(function () {
                        H(this.childNodes).wrapAll(
                            '<div class="dt-scroll-sizing">'
                        );
                    });
            var u =
                    Math.floor(c.height()) > o.clientHeight ||
                    "scroll" == i.css("overflow-y"),
                h = "padding" + (f.bScrollbarLeft ? "Left" : "Right"),
                D = c.outerWidth();
            a.css("width", N(D)),
                r.css("width", N(D)).css(h, u ? n + "px" : "0px"),
                d &&
                    (s.css("width", N(D)),
                    l.css("width", N(D)).css(h, u ? n + "px" : "0px")),
                c.children("colgroup").prependTo(c),
                i.trigger("scroll"),
                (!t.bSorted && !t.bFiltered) ||
                    t._drawHold ||
                    (o.scrollTop = 0);
        }
    }
    function N(e) {
        return null === e
            ? "0px"
            : "number" == typeof e
            ? e < 0
                ? "0px"
                : e + "px"
            : e.match(/\d$/)
            ? e + "px"
            : e;
    }
    function Ue(e) {
        var t = e.aoColumns;
        for (e.colgroup.empty(), r = 0; r < t.length; r++)
            t[r].bVisible && e.colgroup.append(t[r].colEl);
    }
    function ze(o, e, t, i, l) {
        tt(e, t, function (e) {
            var t = !1,
                n = void 0 === i ? de(e.target) : [i];
            if (n.length) {
                for (var r = 0, a = n.length; r < a; r++)
                    if (
                        (!1 !==
                            (function (e, t, n, r) {
                                function a(e, t) {
                                    var n = e._idx;
                                    return (n =
                                        void 0 === n ? s.indexOf(e[1]) : n) +
                                        1 <
                                        s.length
                                        ? n + 1
                                        : t
                                        ? null
                                        : 0;
                                }
                                var o,
                                    i = e.aoColumns[t],
                                    l = e.aaSorting,
                                    s = i.asSorting;
                                if (!i.bSortable) return !1;
                                "number" == typeof l[0] &&
                                    (l = e.aaSorting = [l]);
                                (r || n) && e.oFeatures.bSortMulti
                                    ? -1 !== (i = b(l, "0").indexOf(t))
                                        ? null ===
                                          (o =
                                              null === (o = a(l[i], !0)) &&
                                              1 === l.length
                                                  ? 0
                                                  : o)
                                            ? l.splice(i, 1)
                                            : ((l[i][1] = s[o]),
                                              (l[i]._idx = o))
                                        : (r
                                              ? l.push([t, s[0], 0])
                                              : l.push([t, l[0][1], 0]),
                                          (l[l.length - 1]._idx = 0))
                                    : l.length && l[0][0] == t
                                    ? ((o = a(l[0])),
                                      (l.length = 1),
                                      (l[0][1] = s[o]),
                                      (l[0]._idx = o))
                                    : ((l.length = 0),
                                      l.push([t, s[0]]),
                                      (l[0]._idx = 0));
                            })(o, n[r], r, e.shiftKey) && (t = !0),
                        1 === o.aaSorting.length && "" === o.aaSorting[0][1])
                    )
                        break;
                t &&
                    Be(o, !0, function () {
                        Je(o), $e(o, o.aiDisplay), d(o, !1, !1), l && l();
                    });
            }
        });
    }
    function $e(e, t) {
        if (!(t.length < 2)) {
            for (
                var n = e.aiDisplayMaster, r = {}, a = {}, o = 0;
                o < n.length;
                o++
            )
                r[n[o]] = o;
            for (o = 0; o < t.length; o++) a[t[o]] = r[t[o]];
            t.sort(function (e, t) {
                return a[e] - a[t];
            });
        }
    }
    function Ye(n, r, e) {
        function t(e) {
            var t;
            H.isPlainObject(e)
                ? void 0 !== e.idx
                    ? r.push([e.idx, e.dir])
                    : e.name &&
                      -1 !== (t = b(n.aoColumns, "sName").indexOf(e.name)) &&
                      r.push([t, e.dir])
                : r.push(e);
        }
        if (H.isPlainObject(e)) t(e);
        else if (e.length && "number" == typeof e[0]) t(e);
        else if (e.length) for (var a = 0; a < e.length; a++) t(e[a]);
    }
    function Ge(e) {
        var t,
            n,
            r,
            a,
            o,
            i,
            l,
            s = [],
            u = B.ext.type.order,
            c = e.aoColumns,
            d = e.aaSortingFixed,
            f = H.isPlainObject(d),
            h = [];
        if (e.oFeatures.bSort)
            for (
                Array.isArray(d) && Ye(e, h, d),
                    f && d.pre && Ye(e, h, d.pre),
                    Ye(e, h, e.aaSorting),
                    f && d.post && Ye(e, h, d.post),
                    t = 0;
                t < h.length;
                t++
            )
                if (c[(l = h[t][0])])
                    for (n = 0, r = (a = c[l].aDataSort).length; n < r; n++)
                        (i = c[(o = a[n])].sType || "string"),
                            void 0 === h[t]._idx &&
                                (h[t]._idx = c[o].asSorting.indexOf(h[t][1])),
                            h[t][1] &&
                                s.push({
                                    src: l,
                                    col: o,
                                    dir: h[t][1],
                                    index: h[t]._idx,
                                    type: i,
                                    formatter: u[i + "-pre"],
                                    sorter: u[i + "-" + h[t][1]],
                                });
        return s;
    }
    function Je(e, t, n) {
        var r,
            a,
            o,
            i,
            l,
            c,
            d = [],
            s = B.ext.type.order,
            f = e.aoData,
            u = e.aiDisplayMaster;
        for (
            void 0 !== t
                ? ((l = e.aoColumns[t]),
                  (c = [
                      {
                          src: t,
                          col: t,
                          dir: n,
                          index: 0,
                          type: l.sType,
                          formatter: s[l.sType + "-pre"],
                          sorter: s[l.sType + "-" + n],
                      },
                  ]),
                  (u = u.slice()))
                : (c = Ge(e)),
                r = 0,
                a = c.length;
            r < a;
            r++
        ) {
            (i = c[r]), (S = x = D = g = p = h = y = b = m = v = void 0);
            var h,
                p,
                g,
                v = e,
                m = i.col,
                b = v.aoColumns[m],
                y = B.ext.order[b.sSortDataType];
            y && (h = y.call(v.oInstance, v, m, ae(v, m)));
            for (
                var D = B.ext.type.order[b.sType + "-pre"], x = v.aoData, S = 0;
                S < x.length;
                S++
            )
                x[S] &&
                    ((p = x[S])._aSortData || (p._aSortData = []),
                    (p._aSortData[m] && !y) ||
                        ((g = y ? h[S] : q(v, S, m, "sort")),
                        (p._aSortData[m] = D ? D(g, v) : g)));
        }
        if ("ssp" != J(e) && 0 !== c.length) {
            for (r = 0, o = u.length; r < o; r++) d[r] = r;
            c.length &&
                "desc" === c[0].dir &&
                e.orderDescReverse &&
                d.reverse(),
                u.sort(function (e, t) {
                    for (
                        var n,
                            r,
                            a,
                            o,
                            i = c.length,
                            l = f[e]._aSortData,
                            s = f[t]._aSortData,
                            u = 0;
                        u < i;
                        u++
                    )
                        if (
                            ((n = l[(o = c[u]).col]), (r = s[o.col]), o.sorter)
                        ) {
                            if (0 !== (a = o.sorter(n, r))) return a;
                        } else if (0 !== (a = n < r ? -1 : r < n ? 1 : 0))
                            return "asc" === o.dir ? a : -a;
                    return (n = d[e]) < (r = d[t]) ? -1 : r < n ? 1 : 0;
                });
        } else
            0 === c.length &&
                u.sort(function (e, t) {
                    return e < t ? -1 : t < e ? 1 : 0;
                });
        return (
            void 0 === t &&
                ((e.bSorted = !0),
                (e.sortDetails = c),
                G(e, null, "order", [e, c])),
            u
        );
    }
    function Ze(e) {
        var t,
            n,
            r,
            a = e.aLastSort,
            o = e.oClasses.order.position,
            i = Ge(e),
            l = e.oFeatures;
        if (l.bSort && l.bSortClasses) {
            for (t = 0, n = a.length; t < n; t++)
                (r = a[t].src),
                    H(b(e.aoData, "anCells", r)).removeClass(
                        o + (t < 2 ? t + 1 : 3)
                    );
            for (t = 0, n = i.length; t < n; t++)
                (r = i[t].src),
                    H(b(e.aoData, "anCells", r)).addClass(
                        o + (t < 2 ? t + 1 : 3)
                    );
        }
        e.aLastSort = i;
    }
    function Qe(n) {
        var t, e;
        n._bLoadingState ||
            (Ye(n, (e = []), n.aaSorting),
            (t = n.aoColumns),
            (e = {
                time: +new Date(),
                start: n._iDisplayStart,
                length: n._iDisplayLength,
                order: e.map(function (e) {
                    return t[e[0]] && t[e[0]].sName
                        ? [t[e[0]].sName, e[1]]
                        : e.slice();
                }),
                search: H.extend({}, n.oPreviousSearch),
                columns: n.aoColumns.map(function (e, t) {
                    return {
                        name: e.sName,
                        visible: e.bVisible,
                        search: H.extend({}, n.aoPreSearchCols[t]),
                    };
                }),
            }),
            (n.oSavedState = e),
            G(n, "aoStateSaveParams", "stateSaveParams", [n, e]),
            n.oFeatures.bStateSave &&
                !n.bDestroying &&
                n.fnStateSaveCallback.call(n.oInstance, n, e));
    }
    function Ke(r, e, t) {
        var n,
            a,
            o = r.aoColumns,
            i = b(r.aoColumns, "sName"),
            l =
                ((r._bLoadingState = !0),
                r._bInitComplete ? new B.Api(r) : null);
        if (e && e.time) {
            var s = r.iStateDuration;
            if (0 < s && e.time < +new Date() - 1e3 * s) r._bLoadingState = !1;
            else if (
                -1 !==
                G(r, "aoStateLoadParams", "stateLoadParams", [r, e]).indexOf(!1)
            )
                r._bLoadingState = !1;
            else {
                if (
                    ((r.oLoadedState = H.extend(!0, {}, e)),
                    G(r, null, "stateLoadInit", [r, e], !0),
                    void 0 !== e.length &&
                        (l
                            ? l.page.len(e.length)
                            : (r._iDisplayLength = e.length)),
                    void 0 !== e.start &&
                        (null === l
                            ? ((r._iDisplayStart = e.start),
                              (r.iInitDisplayStart = e.start))
                            : Xe(r, e.start / r._iDisplayLength)),
                    void 0 !== e.order &&
                        ((r.aaSorting = []),
                        H.each(e.order, function (e, t) {
                            var n = [t[0], t[1]];
                            "string" == typeof t[0]
                                ? ((t = i.indexOf(t[0])),
                                  (n[0] = 0 <= t ? t : 0))
                                : n[0] >= o.length && (n[0] = 0),
                                r.aaSorting.push(n);
                        })),
                    void 0 !== e.search &&
                        H.extend(r.oPreviousSearch, e.search),
                    e.columns)
                ) {
                    var u,
                        c = e.columns,
                        d = b(e.columns, "name");
                    if (d.join("").length && d.join("") !== i.join(""))
                        for (c = [], n = 0; n < i.length; n++)
                            "" != i[n] && 0 <= (u = d.indexOf(i[n]))
                                ? c.push(e.columns[u])
                                : c.push({});
                    if (c.length === o.length) {
                        for (n = 0, a = c.length; n < a; n++) {
                            var f = c[n];
                            void 0 !== f.visible &&
                                (l
                                    ? l.column(n).visible(f.visible, !1)
                                    : (o[n].bVisible = f.visible)),
                                void 0 !== f.search &&
                                    H.extend(r.aoPreSearchCols[n], f.search);
                        }
                        l && l.columns.adjust();
                    }
                }
                (r._bLoadingState = !1),
                    G(r, "aoStateLoaded", "stateLoaded", [r, e]);
            }
        } else r._bLoadingState = !1;
        t();
    }
    function z(e, t, n, r) {
        if (
            ((n =
                "DataTables warning: " +
                (e ? "table id=" + e.sTableId + " - " : "") +
                n),
            r &&
                (n +=
                    ". For more information about this error, please see https://datatables.net/tn/" +
                    r),
            t)
        )
            W.console && console.log && console.log(n);
        else {
            (t = B.ext), (t = t.sErrMode || t.errMode);
            if ((e && G(e, null, "dt-error", [e, r, n], !0), "alert" == t))
                alert(n);
            else {
                if ("throw" == t) throw new Error(n);
                "function" == typeof t && t(e, r, n);
            }
        }
    }
    function $(n, r, e, t) {
        Array.isArray(e)
            ? H.each(e, function (e, t) {
                  Array.isArray(t) ? $(n, r, t[0], t[1]) : $(n, r, t);
              })
            : (void 0 === t && (t = e), void 0 !== r[e] && (n[t] = r[e]));
    }
    function et(e, t, n) {
        var r, a;
        for (a in t)
            Object.prototype.hasOwnProperty.call(t, a) &&
                ((r = t[a]),
                H.isPlainObject(r)
                    ? (H.isPlainObject(e[a]) || (e[a] = {}),
                      H.extend(!0, e[a], r))
                    : n && "data" !== a && "aaData" !== a && Array.isArray(r)
                    ? (e[a] = r.slice())
                    : (e[a] = r));
        return e;
    }
    function tt(e, t, n) {
        H(e)
            .on("click.DT", t, function (e) {
                n(e);
            })
            .on("keypress.DT", t, function (e) {
                13 === e.which && (e.preventDefault(), n(e));
            })
            .on("selectstart.DT", t, function () {
                return !1;
            });
    }
    function Y(e, t, n) {
        n && e[t].push(n);
    }
    function G(t, e, n, r, a) {
        var o = [];
        return (
            e &&
                (o = t[e]
                    .slice()
                    .reverse()
                    .map(function (e) {
                        return e.apply(t.oInstance, r);
                    })),
            null !== n &&
                ((e = H.Event(n + ".dt")),
                (n = H(t.nTable)),
                (e.dt = t.api),
                n[a ? "trigger" : "triggerHandler"](e, r),
                a && 0 === n.parents("body").length && H("body").trigger(e, r),
                o.push(e.result)),
            o
        );
    }
    function nt(e) {
        var t = e._iDisplayStart,
            n = e.fnDisplayEnd(),
            r = e._iDisplayLength;
        n <= t && (t = n - r),
            (t -= t % r),
            (e._iDisplayStart = t = -1 === r || t < 0 ? 0 : t);
    }
    function rt(e, t) {
        var e = e.renderer,
            n = B.ext.renderer[t];
        return H.isPlainObject(e) && e[t]
            ? n[e[t]] || n._
            : ("string" == typeof e && n[e]) || n._;
    }
    function J(e) {
        return e.oFeatures.bServerSide ? "ssp" : e.ajax ? "ajax" : "dom";
    }
    function at(e, t, n) {
        var r = e.fnFormatNumber,
            a = e._iDisplayStart + 1,
            o = e._iDisplayLength,
            i = e.fnRecordsDisplay(),
            l = e.fnRecordsTotal(),
            s = -1 === o;
        return t
            .replace(/_START_/g, r.call(e, a))
            .replace(/_END_/g, r.call(e, e.fnDisplayEnd()))
            .replace(/_MAX_/g, r.call(e, l))
            .replace(/_TOTAL_/g, r.call(e, i))
            .replace(/_PAGE_/g, r.call(e, s ? 1 : Math.ceil(a / o)))
            .replace(/_PAGES_/g, r.call(e, s ? 1 : Math.ceil(i / o)))
            .replace(/_ENTRIES_/g, e.api.i18n("entries", "", n))
            .replace(/_ENTRIES-MAX_/g, e.api.i18n("entries", "", l))
            .replace(/_ENTRIES-TOTAL_/g, e.api.i18n("entries", "", i));
    }
    function ot(e, t) {
        if (t)
            if (t.length < 1e4) e.push.apply(e, t);
            else for (r = 0; r < t.length; r++) e.push(t[r]);
    }
    var it = [],
        n = Array.prototype;
    (X = function (e, t) {
        if (!(this instanceof X)) return new X(e, t);
        function n(e) {
            (e = e), (t = B.settings), (r = b(t, "nTable"));
            var n,
                t,
                r,
                a = e
                    ? e.nTable && e.oFeatures
                        ? [e]
                        : e.nodeName && "table" === e.nodeName.toLowerCase()
                        ? -1 !== (a = r.indexOf(e))
                            ? [t[a]]
                            : null
                        : e && "function" == typeof e.settings
                        ? e.settings().toArray()
                        : ("string" == typeof e
                              ? (n = H(e).get())
                              : e instanceof H && (n = e.get()),
                          n
                              ? t.filter(function (e, t) {
                                    return n.includes(r[t]);
                                })
                              : void 0)
                    : [];
            a && o.push.apply(o, a);
        }
        var r,
            o = [];
        if (Array.isArray(e)) for (r = 0; r < e.length; r++) n(e[r]);
        else n(e);
        (this.context = 1 < o.length ? x(o) : o),
            ot(this, t),
            (this.selector = { rows: null, cols: null, opts: null }),
            X.extend(this, this, it);
    }),
        (B.Api = X),
        H.extend(X.prototype, {
            any: function () {
                return 0 !== this.count();
            },
            context: [],
            count: function () {
                return this.flatten().length;
            },
            each: function (e) {
                for (var t = 0, n = this.length; t < n; t++)
                    e.call(this, this[t], t, this);
                return this;
            },
            eq: function (e) {
                var t = this.context;
                return t.length > e ? new X(t[e], this[e]) : null;
            },
            filter: function (e) {
                e = n.filter.call(this, e, this);
                return new X(this.context, e);
            },
            flatten: function () {
                var e = [];
                return new X(this.context, e.concat.apply(e, this.toArray()));
            },
            get: function (e) {
                return this[e];
            },
            join: n.join,
            includes: function (e) {
                return -1 !== this.indexOf(e);
            },
            indexOf: n.indexOf,
            iterator: function (e, t, n, r) {
                var a,
                    o,
                    i,
                    l,
                    s,
                    u,
                    c,
                    d,
                    f = [],
                    h = this.context,
                    p = this.selector;
                for (
                    "string" == typeof e &&
                        ((r = n), (n = t), (t = e), (e = !1)),
                        o = 0,
                        i = h.length;
                    o < i;
                    o++
                ) {
                    var g = new X(h[o]);
                    if ("table" === t)
                        void 0 !== (a = n.call(g, h[o], o)) && f.push(a);
                    else if ("columns" === t || "rows" === t)
                        void 0 !== (a = n.call(g, h[o], this[o], o)) &&
                            f.push(a);
                    else if (
                        "every" === t ||
                        "column" === t ||
                        "column-rows" === t ||
                        "row" === t ||
                        "cell" === t
                    )
                        for (
                            c = this[o],
                                "column-rows" === t && (u = yt(h[o], p.opts)),
                                l = 0,
                                s = c.length;
                            l < s;
                            l++
                        )
                            (d = c[l]),
                                void 0 !==
                                    (a =
                                        "cell" === t
                                            ? n.call(
                                                  g,
                                                  h[o],
                                                  d.row,
                                                  d.column,
                                                  o,
                                                  l
                                              )
                                            : n.call(g, h[o], d, o, l, u)) &&
                                    f.push(a);
                }
                return f.length || r
                    ? (((e = (r = new X(h, e ? f.concat.apply([], f) : f))
                          .selector).rows = p.rows),
                      (e.cols = p.cols),
                      (e.opts = p.opts),
                      r)
                    : this;
            },
            lastIndexOf: n.lastIndexOf,
            length: 0,
            map: function (e) {
                e = n.map.call(this, e, this);
                return new X(this.context, e);
            },
            pluck: function (e) {
                var t = B.util.get(e);
                return this.map(function (e) {
                    return t(e);
                });
            },
            pop: n.pop,
            push: n.push,
            reduce: n.reduce,
            reduceRight: n.reduceRight,
            reverse: n.reverse,
            selector: null,
            shift: n.shift,
            slice: function () {
                return new X(this.context, this);
            },
            sort: n.sort,
            splice: n.splice,
            toArray: function () {
                return n.slice.call(this);
            },
            to$: function () {
                return H(this);
            },
            toJQuery: function () {
                return H(this);
            },
            unique: function () {
                return new X(this.context, x(this.toArray()));
            },
            unshift: n.unshift,
        }),
        (W.__apiStruct = it),
        (X.extend = function (e, t, n) {
            if (n.length && t && (t instanceof X || t.__dt_wrapper))
                for (var r, a = 0, o = n.length; a < o; a++)
                    "__proto__" !== (r = n[a]).name &&
                        ((t[r.name] =
                            "function" === r.type
                                ? (function (t, n, r) {
                                      return function () {
                                          var e = n.apply(t || this, arguments);
                                          return X.extend(e, e, r.methodExt), e;
                                      };
                                  })(e, r.val, r)
                                : "object" === r.type
                                ? {}
                                : r.val),
                        (t[r.name].__dt_wrapper = !0),
                        X.extend(e, t[r.name], r.propExt));
        }),
        (X.register = t =
            function (e, t) {
                if (Array.isArray(e))
                    for (var n = 0, r = e.length; n < r; n++)
                        X.register(e[n], t);
                else
                    for (
                        var a = e.split("."), o = it, i = 0, l = a.length;
                        i < l;
                        i++
                    ) {
                        var s,
                            u,
                            c = (function (e, t) {
                                for (var n = 0, r = e.length; n < r; n++)
                                    if (e[n].name === t) return e[n];
                                return null;
                            })(
                                o,
                                (u = (s = -1 !== a[i].indexOf("()"))
                                    ? a[i].replace("()", "")
                                    : a[i])
                            );
                        c ||
                            o.push(
                                (c = {
                                    name: u,
                                    val: {},
                                    methodExt: [],
                                    propExt: [],
                                    type: "object",
                                })
                            ),
                            i === l - 1
                                ? ((c.val = t),
                                  (c.type =
                                      "function" == typeof t
                                          ? "function"
                                          : H.isPlainObject(t)
                                          ? "object"
                                          : "other"))
                                : (o = s ? c.methodExt : c.propExt);
                    }
            }),
        (X.registerPlural = e =
            function (e, t, n) {
                X.register(e, n),
                    X.register(t, function () {
                        var e = n.apply(this, arguments);
                        return e === this
                            ? this
                            : e instanceof X
                            ? e.length
                                ? Array.isArray(e[0])
                                    ? new X(e.context, e[0])
                                    : e[0]
                                : void 0
                            : e;
                    });
            });
    function lt(e, t) {
        var n, r;
        return Array.isArray(e)
            ? ((n = []),
              e.forEach(function (e) {
                  e = lt(e, t);
                  ot(n, e);
              }),
              n.filter(function (e) {
                  return e;
              }))
            : "number" == typeof e
            ? [t[e]]
            : ((r = t.map(function (e) {
                  return e.nTable;
              })),
              H(r)
                  .filter(e)
                  .map(function () {
                      var e = r.indexOf(this);
                      return t[e];
                  })
                  .toArray());
    }
    function st(a, o, e) {
        var t, n;
        e &&
            (t = new X(a)).one("draw", function () {
                e(t.ajax.json());
            }),
            "ssp" == J(a)
                ? d(a, o)
                : (w(a, !0),
                  (n = a.jqXHR) && 4 !== n.readyState && n.abort(),
                  Ne(a, {}, function (e) {
                      me(a);
                      for (var t = Fe(a, e), n = 0, r = t.length; n < r; n++)
                          D(a, t[n]);
                      d(a, o), He(a), w(a, !1);
                  }));
    }
    function ut(e, t, n, r, a) {
        for (
            var o,
                i,
                l,
                s,
                u = [],
                c = typeof t,
                d = 0,
                f = (t =
                    t && "string" != c && "function" != c && void 0 !== t.length
                        ? t
                        : [t]).length;
            d < f;
            d++
        )
            for (
                l = 0,
                    s = (i =
                        t[d] && t[d].split && !t[d].match(/[[(:]/)
                            ? t[d].split(",")
                            : [t[d]]).length;
                l < s;
                l++
            )
                (o = (o = n(
                    "string" == typeof i[l] ? i[l].trim() : i[l]
                )).filter(function (e) {
                    return null != e;
                })) &&
                    o.length &&
                    (u = u.concat(o));
        var h = I.selector[e];
        if (h.length) for (d = 0, f = h.length; d < f; d++) u = h[d](r, a, u);
        return x(u);
    }
    function ct(e) {
        return (
            (e = e || {}).filter &&
                void 0 === e.search &&
                (e.search = e.filter),
            H.extend({ search: "none", order: "current", page: "all" }, e)
        );
    }
    function dt(e) {
        var t = new X(e.context[0]);
        return (
            e.length && t.push(e[0]),
            (t.selector = e.selector),
            t.length && 1 < t[0].length && t[0].splice(1),
            t
        );
    }
    t("tables()", function (e) {
        return null != e ? new X(lt(e, this.context)) : this;
    }),
        t("table()", function (e) {
            var e = this.tables(e),
                t = e.context;
            return t.length ? new X(t[0]) : e;
        }),
        [
            ["nodes", "node", "nTable"],
            ["body", "body", "nTBody"],
            ["header", "header", "nTHead"],
            ["footer", "footer", "nTFoot"],
        ].forEach(function (t) {
            e("tables()." + t[0] + "()", "table()." + t[1] + "()", function () {
                return this.iterator(
                    "table",
                    function (e) {
                        return e[t[2]];
                    },
                    1
                );
            });
        }),
        [
            ["header", "aoHeader"],
            ["footer", "aoFooter"],
        ].forEach(function (n) {
            t("table()." + n[0] + ".structure()", function (e) {
                var e = this.columns(e).indexes().flatten(),
                    t = this.context[0];
                return Te(t, t[n[1]], e);
            });
        }),
        e("tables().containers()", "table().container()", function () {
            return this.iterator(
                "table",
                function (e) {
                    return e.nTableWrapper;
                },
                1
            );
        }),
        t("tables().every()", function (n) {
            var r = this;
            return this.iterator("table", function (e, t) {
                n.call(r.table(t), t);
            });
        }),
        t("caption()", function (a, o) {
            var e,
                t = this.context;
            return void 0 === a
                ? (e = t[0].captionNode) && t.length
                    ? e.innerHTML
                    : null
                : this.iterator(
                      "table",
                      function (e) {
                          var t = H(e.nTable),
                              n = H(e.captionNode),
                              r = H(e.nTableWrapper);
                          n.length ||
                              ((n = H("<caption/>").html(a)),
                              (e.captionNode = n[0]),
                              o) ||
                              (t.prepend(n), (o = n.css("caption-side"))),
                              n.html(a),
                              o &&
                                  (n.css("caption-side", o),
                                  (n[0]._captionSide = o)),
                              (r.find("div.dataTables_scroll").length
                                  ? ((e = "top" === o ? "Head" : "Foot"),
                                    r.find(
                                        "div.dataTables_scroll" + e + " table"
                                    ))
                                  : t
                              ).prepend(n);
                      },
                      1
                  );
        }),
        t("caption.node()", function () {
            var e = this.context;
            return e.length ? e[0].captionNode : null;
        }),
        t("draw()", function (t) {
            return this.iterator("table", function (e) {
                "page" === t
                    ? S(e)
                    : d(
                          e,
                          !1 ===
                              (t = "string" == typeof t ? "full-hold" !== t : t)
                      );
            });
        }),
        t("page()", function (t) {
            return void 0 === t
                ? this.page.info().page
                : this.iterator("table", function (e) {
                      Xe(e, t);
                  });
        }),
        t("page.info()", function () {
            var e, t, n, r, a;
            if (0 !== this.context.length)
                return (
                    (t = (e = this.context[0])._iDisplayStart),
                    (n = e.oFeatures.bPaginate ? e._iDisplayLength : -1),
                    (r = e.fnRecordsDisplay()),
                    {
                        page: (a = -1 === n) ? 0 : Math.floor(t / n),
                        pages: a ? 1 : Math.ceil(r / n),
                        start: t,
                        end: e.fnDisplayEnd(),
                        length: n,
                        recordsTotal: e.fnRecordsTotal(),
                        recordsDisplay: r,
                        serverSide: "ssp" === J(e),
                    }
                );
        }),
        t("page.len()", function (t) {
            return void 0 === t
                ? 0 !== this.context.length
                    ? this.context[0]._iDisplayLength
                    : void 0
                : this.iterator("table", function (e) {
                      We(e, t);
                  });
        }),
        t("ajax.json()", function () {
            var e = this.context;
            if (0 < e.length) return e[0].json;
        }),
        t("ajax.params()", function () {
            var e = this.context;
            if (0 < e.length) return e[0].oAjaxData;
        }),
        t("ajax.reload()", function (t, n) {
            return this.iterator("table", function (e) {
                st(e, !1 === n, t);
            });
        }),
        t("ajax.url()", function (t) {
            var e = this.context;
            return void 0 === t
                ? 0 === e.length
                    ? void 0
                    : ((e = e[0]),
                      H.isPlainObject(e.ajax) ? e.ajax.url : e.ajax)
                : this.iterator("table", function (e) {
                      H.isPlainObject(e.ajax) ? (e.ajax.url = t) : (e.ajax = t);
                  });
        }),
        t("ajax.url().load()", function (t, n) {
            return this.iterator("table", function (e) {
                st(e, !1 === n, t);
            });
        });
    function ft(o, i, e, t) {
        function l(e, t) {
            var n;
            if (Array.isArray(e) || e instanceof H)
                for (var r = 0, a = e.length; r < a; r++) l(e[r], t);
            else
                e.nodeName && "tr" === e.nodeName.toLowerCase()
                    ? (e.setAttribute("data-dt-row", i.idx), s.push(e))
                    : ((n = H("<tr><td></td></tr>")
                          .attr("data-dt-row", i.idx)
                          .addClass(t)),
                      (H("td", n).addClass(t).html(e)[0].colSpan = oe(o)),
                      s.push(n[0]));
        }
        var s = [];
        l(e, t),
            i._details && i._details.detach(),
            (i._details = H(s)),
            i._detailsShow && i._details.insertAfter(i.nTr);
    }
    function ht(e, t) {
        var n = e.context;
        if (n.length && e.length) {
            var r = n[0].aoData[e[0]];
            if (r._details) {
                (r._detailsShow = t)
                    ? (r._details.insertAfter(r.nTr),
                      H(r.nTr).addClass("dt-hasChild"))
                    : (r._details.detach(),
                      H(r.nTr).removeClass("dt-hasChild")),
                    G(n[0], null, "childRow", [t, e.row(e[0])]);
                var i = n[0],
                    a = new X(i),
                    r = ".dt.DT_details",
                    t = "draw" + r,
                    e = "column-sizing" + r,
                    r = "destroy" + r,
                    l = i.aoData;
                if (
                    (a.off(t + " " + e + " " + r), b(l, "_details").length > 0)
                ) {
                    a.on(t, function (e, t) {
                        if (i !== t) return;
                        a.rows({ page: "current" })
                            .eq(0)
                            .each(function (e) {
                                var t = l[e];
                                if (t._detailsShow)
                                    t._details.insertAfter(t.nTr);
                            });
                    });
                    a.on(e, function (e, t) {
                        if (i !== t) return;
                        var n,
                            r = oe(t);
                        for (var a = 0, o = l.length; a < o; a++) {
                            n = l[a];
                            if (n && n._details)
                                n._details.each(function () {
                                    var e = H(this).children("td");
                                    if (e.length == 1) e.attr("colspan", r);
                                });
                        }
                    });
                    a.on(r, function (e, t) {
                        if (i !== t) return;
                        for (var n = 0, r = l.length; n < r; n++)
                            if (l[n] && l[n]._details) St(a, n);
                    });
                }
                xt(n);
            }
        }
    }
    function pt(e, t, n, r, a, o) {
        for (var i = [], l = 0, s = a.length; l < s; l++)
            i.push(q(e, a[l], t, o));
        return i;
    }
    function gt(e, t, n) {
        var r = e.aoHeader;
        return r[void 0 !== n ? n : e.bSortCellsTop ? 0 : r.length - 1][t].cell;
    }
    function vt(t, n) {
        return function (e) {
            return (
                T(e) ||
                    "string" != typeof e ||
                    ((e = e.replace(C, " ")),
                    t && (e = A(e)),
                    n && (e = k(e, !1))),
                e
            );
        };
    }
    var mt,
        bt,
        yt = function (e, t) {
            var n,
                r = [],
                a = e.aiDisplay,
                o = e.aiDisplayMaster,
                i = t.search,
                l = t.order,
                t = t.page;
            if ("ssp" == J(e)) return "removed" === i ? [] : h(0, o.length);
            if ("current" == t)
                for (u = e._iDisplayStart, c = e.fnDisplayEnd(); u < c; u++)
                    r.push(a[u]);
            else if ("current" == l || "applied" == l) {
                if ("none" == i) r = o.slice();
                else if ("applied" == i) r = a.slice();
                else if ("removed" == i) {
                    for (var s = {}, u = 0, c = a.length; u < c; u++)
                        s[a[u]] = null;
                    o.forEach(function (e) {
                        Object.prototype.hasOwnProperty.call(s, e) || r.push(e);
                    });
                }
            } else if ("index" == l || "original" == l)
                for (u = 0, c = e.aoData.length; u < c; u++)
                    e.aoData[u] &&
                        ("none" == i ||
                            (-1 === (n = a.indexOf(u)) && "removed" == i) ||
                            (0 <= n && "applied" == i)) &&
                        r.push(u);
            else if ("number" == typeof l) {
                var d = Je(e, l, "asc");
                if ("none" === i) r = d;
                else
                    for (u = 0; u < d.length; u++)
                        ((-1 === (n = a.indexOf(d[u])) && "removed" == i) ||
                            (0 <= n && "applied" == i)) &&
                            r.push(d[u]);
            }
            return r;
        },
        Dt =
            (t("rows()", function (n, r) {
                void 0 === n
                    ? (n = "")
                    : H.isPlainObject(n) && ((r = n), (n = "")),
                    (r = ct(r));
                var e = this.iterator(
                    "table",
                    function (e) {
                        return (
                            (t = ut(
                                "row",
                                (t = n),
                                function (n) {
                                    var e = f(n),
                                        r = a.aoData;
                                    if (null !== e && !o) return [e];
                                    if (
                                        ((i = i || yt(a, o)),
                                        null !== e && -1 !== i.indexOf(e))
                                    )
                                        return [e];
                                    if (null == n || "" === n) return i;
                                    if ("function" == typeof n)
                                        return i.map(function (e) {
                                            var t = r[e];
                                            return n(e, t._aData, t.nTr)
                                                ? e
                                                : null;
                                        });
                                    if (n.nodeName)
                                        return (
                                            (e = n._DT_RowIndex),
                                            (t = n._DT_CellIndex),
                                            void 0 !== e
                                                ? r[e] && r[e].nTr === n
                                                    ? [e]
                                                    : []
                                                : t
                                                ? r[t.row] &&
                                                  r[t.row].nTr === n.parentNode
                                                    ? [t.row]
                                                    : []
                                                : (e =
                                                      H(n).closest(
                                                          "*[data-dt-row]"
                                                      )).length
                                                ? [e.data("dt-row")]
                                                : []
                                        );
                                    if (
                                        "string" == typeof n &&
                                        "#" === n.charAt(0)
                                    ) {
                                        var t = a.aIds[n.replace(/^#/, "")];
                                        if (void 0 !== t) return [t.idx];
                                    }
                                    e = _(m(a.aoData, i, "nTr"));
                                    return H(e)
                                        .filter(n)
                                        .map(function () {
                                            return this._DT_RowIndex;
                                        })
                                        .toArray();
                                },
                                (a = e),
                                (o = r)
                            )),
                            ("current" !== o.order && "applied" !== o.order) ||
                                $e(a, t),
                            t
                        );
                        var a, t, o, i;
                    },
                    1
                );
                return (e.selector.rows = n), (e.selector.opts = r), e;
            }),
            t("rows().nodes()", function () {
                return this.iterator(
                    "row",
                    function (e, t) {
                        return e.aoData[t].nTr || void 0;
                    },
                    1
                );
            }),
            t("rows().data()", function () {
                return this.iterator(
                    !0,
                    "rows",
                    function (e, t) {
                        return m(e.aoData, t, "_aData");
                    },
                    1
                );
            }),
            e("rows().cache()", "row().cache()", function (n) {
                return this.iterator(
                    "row",
                    function (e, t) {
                        e = e.aoData[t];
                        return "search" === n ? e._aFilterData : e._aSortData;
                    },
                    1
                );
            }),
            e("rows().invalidate()", "row().invalidate()", function (n) {
                return this.iterator("row", function (e, t) {
                    be(e, t, n);
                });
            }),
            e("rows().indexes()", "row().index()", function () {
                return this.iterator(
                    "row",
                    function (e, t) {
                        return t;
                    },
                    1
                );
            }),
            e("rows().ids()", "row().id()", function (e) {
                for (
                    var t = [], n = this.context, r = 0, a = n.length;
                    r < a;
                    r++
                )
                    for (var o = 0, i = this[r].length; o < i; o++) {
                        var l = n[r].rowIdFn(n[r].aoData[this[r][o]]._aData);
                        t.push((!0 === e ? "#" : "") + l);
                    }
                return new X(n, t);
            }),
            e("rows().remove()", "row().remove()", function () {
                return (
                    this.iterator("row", function (e, t) {
                        var n = e.aoData,
                            r = n[t],
                            a = e.aiDisplayMaster.indexOf(t),
                            a =
                                (-1 !== a && e.aiDisplayMaster.splice(a, 1),
                                0 < e._iRecordsDisplay && e._iRecordsDisplay--,
                                nt(e),
                                e.rowIdFn(r._aData));
                        void 0 !== a && delete e.aIds[a], (n[t] = null);
                    }),
                    this
                );
            }),
            t("rows.add()", function (o) {
                var e = this.iterator(
                        "table",
                        function (e) {
                            for (var t, n = [], r = 0, a = o.length; r < a; r++)
                                (t = o[r]).nodeName &&
                                "TR" === t.nodeName.toUpperCase()
                                    ? n.push(fe(e, t)[0])
                                    : n.push(D(e, t));
                            return n;
                        },
                        1
                    ),
                    t = this.rows(-1);
                return t.pop(), ot(t, e), t;
            }),
            t("row()", function (e, t) {
                return dt(this.rows(e, t));
            }),
            t("row().data()", function (e) {
                var t,
                    n = this.context;
                return void 0 === e
                    ? n.length && this.length && this[0].length
                        ? n[0].aoData[this[0]]._aData
                        : void 0
                    : (((t = n[0].aoData[this[0]])._aData = e),
                      Array.isArray(e) &&
                          t.nTr &&
                          t.nTr.id &&
                          v(n[0].rowId)(e, t.nTr.id),
                      be(n[0], this[0], "data"),
                      this);
            }),
            t("row().node()", function () {
                var e = this.context;
                if (e.length && this.length && this[0].length) {
                    e = e[0].aoData[this[0]];
                    if (e && e.nTr) return e.nTr;
                }
                return null;
            }),
            t("row.add()", function (t) {
                t instanceof H && t.length && (t = t[0]);
                var e = this.iterator("table", function (e) {
                    return t.nodeName && "TR" === t.nodeName.toUpperCase()
                        ? fe(e, t)[0]
                        : D(e, t);
                });
                return this.row(e[0]);
            }),
            H(L).on("plugin-init.dt", function (e, t) {
                var r = new X(t);
                r.on("stateSaveParams.DT", function (e, t, n) {
                    for (
                        var r = t.rowIdFn, a = t.aiDisplayMaster, o = [], i = 0;
                        i < a.length;
                        i++
                    ) {
                        var l = a[i],
                            l = t.aoData[l];
                        l._detailsShow && o.push("#" + r(l._aData));
                    }
                    n.childRows = o;
                }),
                    r.on("stateLoaded.DT", function (e, t, n) {
                        Dt(r, n);
                    }),
                    Dt(r, r.state.loaded());
            }),
            function (e, t) {
                t &&
                    t.childRows &&
                    e
                        .rows(
                            t.childRows.map(function (e) {
                                return e.replace(
                                    /([^:\\]*(?:\\.[^:\\]*)*):/g,
                                    "$1\\:"
                                );
                            })
                        )
                        .every(function () {
                            G(e.settings()[0], null, "requestChild", [this]);
                        });
            }),
        xt = B.util.throttle(function (e) {
            Qe(e[0]);
        }, 500),
        St = function (e, t) {
            var n = e.context;
            n.length &&
                (t = n[0].aoData[void 0 !== t ? t : e[0]]) &&
                t._details &&
                (t._details.remove(),
                (t._detailsShow = void 0),
                (t._details = void 0),
                H(t.nTr).removeClass("dt-hasChild"),
                xt(n));
        },
        wt = "row().child",
        Tt = wt + "()",
        _t =
            (t(Tt, function (e, t) {
                var n = this.context;
                return void 0 === e
                    ? n.length && this.length && n[0].aoData[this[0]]
                        ? n[0].aoData[this[0]]._details
                        : void 0
                    : (!0 === e
                          ? this.child.show()
                          : !1 === e
                          ? St(this)
                          : n.length &&
                            this.length &&
                            ft(n[0], n[0].aoData[this[0]], e, t),
                      this);
            }),
            t([wt + ".show()", Tt + ".show()"], function () {
                return ht(this, !0), this;
            }),
            t([wt + ".hide()", Tt + ".hide()"], function () {
                return ht(this, !1), this;
            }),
            t([wt + ".remove()", Tt + ".remove()"], function () {
                return St(this), this;
            }),
            t(wt + ".isShown()", function () {
                var e = this.context;
                return (
                    (e.length &&
                        this.length &&
                        e[0].aoData[this[0]] &&
                        e[0].aoData[this[0]]._detailsShow) ||
                    !1
                );
            }),
            /^([^:]+)?:(name|title|visIdx|visible)$/),
        Tt =
            (t("columns()", function (n, r) {
                void 0 === n
                    ? (n = "")
                    : H.isPlainObject(n) && ((r = n), (n = "")),
                    (r = ct(r));
                var e = this.iterator(
                    "table",
                    function (e) {
                        return (
                            (t = n),
                            (l = r),
                            (s = (i = e).aoColumns),
                            (u = b(s, "sName")),
                            (c = b(s, "sTitle")),
                            (e = B.util.get("[].[].cell")(i.aoHeader)),
                            (d = x(M([], e))),
                            ut(
                                "column",
                                t,
                                function (n) {
                                    var r,
                                        e = f(n);
                                    if ("" === n) return h(s.length);
                                    if (null !== e)
                                        return [0 <= e ? e : s.length + e];
                                    if ("function" == typeof n)
                                        return (
                                            (r = yt(i, l)),
                                            s.map(function (e, t) {
                                                return n(
                                                    t,
                                                    pt(i, t, 0, 0, r),
                                                    gt(i, t)
                                                )
                                                    ? t
                                                    : null;
                                            })
                                        );
                                    var t,
                                        a,
                                        o =
                                            "string" == typeof n
                                                ? n.match(_t)
                                                : "";
                                    if (o)
                                        switch (o[2]) {
                                            case "visIdx":
                                            case "visible":
                                                return o[1] &&
                                                    o[1].match(/^\d+$/)
                                                    ? (t = parseInt(o[1], 10)) <
                                                      0
                                                        ? [
                                                              (a = s.map(
                                                                  function (
                                                                      e,
                                                                      t
                                                                  ) {
                                                                      return e.bVisible
                                                                          ? t
                                                                          : null;
                                                                  }
                                                              ))[a.length + t],
                                                          ]
                                                        : [re(i, t)]
                                                    : s.map(function (e, t) {
                                                          return e.bVisible &&
                                                              (!o[1] ||
                                                                  0 <
                                                                      H(
                                                                          d[t]
                                                                      ).filter(
                                                                          o[1]
                                                                      ).length)
                                                              ? t
                                                              : null;
                                                      });
                                            case "name":
                                                return u.map(function (e, t) {
                                                    return e === o[1]
                                                        ? t
                                                        : null;
                                                });
                                            case "title":
                                                return c.map(function (e, t) {
                                                    return e === o[1]
                                                        ? t
                                                        : null;
                                                });
                                            default:
                                                return [];
                                        }
                                    return n.nodeName && n._DT_CellIndex
                                        ? [n._DT_CellIndex.column]
                                        : (e = H(d)
                                              .filter(n)
                                              .map(function () {
                                                  return de(this);
                                              })
                                              .toArray()
                                              .sort(function (e, t) {
                                                  return e - t;
                                              })).length || !n.nodeName
                                        ? e
                                        : (e =
                                              H(n).closest("*[data-dt-column]"))
                                              .length
                                        ? [e.data("dt-column")]
                                        : [];
                                },
                                i,
                                l
                            )
                        );
                        var i, t, l, s, u, c, d;
                    },
                    1
                );
                return (e.selector.cols = n), (e.selector.opts = r), e;
            }),
            e("columns().header()", "column().header()", function (n) {
                return this.iterator(
                    "column",
                    function (e, t) {
                        return gt(e, t, n);
                    },
                    1
                );
            }),
            e("columns().footer()", "column().footer()", function (n) {
                return this.iterator(
                    "column",
                    function (e, t) {
                        return e.aoFooter.length
                            ? e.aoFooter[void 0 !== n ? n : 0][t].cell
                            : null;
                    },
                    1
                );
            }),
            e("columns().data()", "column().data()", function () {
                return this.iterator("column-rows", pt, 1);
            }),
            e("columns().render()", "column().render()", function (o) {
                return this.iterator(
                    "column-rows",
                    function (e, t, n, r, a) {
                        return pt(e, t, 0, 0, a, o);
                    },
                    1
                );
            }),
            e("columns().dataSrc()", "column().dataSrc()", function () {
                return this.iterator(
                    "column",
                    function (e, t) {
                        return e.aoColumns[t].mData;
                    },
                    1
                );
            }),
            e("columns().cache()", "column().cache()", function (o) {
                return this.iterator(
                    "column-rows",
                    function (e, t, n, r, a) {
                        return m(
                            e.aoData,
                            a,
                            "search" === o ? "_aFilterData" : "_aSortData",
                            t
                        );
                    },
                    1
                );
            }),
            e("columns().init()", "column().init()", function () {
                return this.iterator(
                    "column",
                    function (e, t) {
                        return e.aoColumns[t];
                    },
                    1
                );
            }),
            e("columns().nodes()", "column().nodes()", function () {
                return this.iterator(
                    "column-rows",
                    function (e, t, n, r, a) {
                        return m(e.aoData, a, "anCells", t);
                    },
                    1
                );
            }),
            e("columns().titles()", "column().title()", function (n, r) {
                return this.iterator(
                    "column",
                    function (e, t) {
                        "number" == typeof n && ((r = n), (n = void 0));
                        t = H("span.dt-column-title", this.column(t).header(r));
                        return void 0 !== n ? (t.html(n), this) : t.html();
                    },
                    1
                );
            }),
            e("columns().types()", "column().type()", function () {
                return this.iterator(
                    "column",
                    function (e, t) {
                        t = e.aoColumns[t].sType;
                        return t || se(e), t;
                    },
                    1
                );
            }),
            e("columns().visible()", "column().visible()", function (n, r) {
                var t = this,
                    a = [],
                    e = this.iterator("column", function (e, t) {
                        if (void 0 === n) return e.aoColumns[t].bVisible;
                        !(function (e, t, n) {
                            var r,
                                a,
                                o = e.aoColumns,
                                i = o[t],
                                l = e.aoData;
                            if (void 0 === n) return i.bVisible;
                            if (i.bVisible === n) return !1;
                            if (n)
                                for (
                                    var s = b(o, "bVisible").indexOf(!0, t + 1),
                                        u = 0,
                                        c = l.length;
                                    u < c;
                                    u++
                                )
                                    l[u] &&
                                        ((a = l[u].nTr),
                                        (r = l[u].anCells),
                                        a) &&
                                        a.insertBefore(r[t], r[s] || null);
                            else H(b(e.aoData, "anCells", t)).detach();
                            return (i.bVisible = n), Ue(e), !0;
                        })(e, t, n) || a.push(t);
                    });
                return (
                    void 0 !== n &&
                        this.iterator("table", function (e) {
                            _e(e, e.aoHeader),
                                _e(e, e.aoFooter),
                                e.aiDisplay.length ||
                                    H(e.nTBody)
                                        .find("td[colspan]")
                                        .attr("colspan", oe(e)),
                                Qe(e),
                                t.iterator("column", function (e, t) {
                                    a.includes(t) &&
                                        G(e, null, "column-visibility", [
                                            e,
                                            t,
                                            n,
                                            r,
                                        ]);
                                }),
                                a.length &&
                                    (void 0 === r || r) &&
                                    t.columns.adjust();
                        }),
                    e
                );
            }),
            e("columns().widths()", "column().width()", function () {
                var e = this.columns(":visible").count(),
                    e = H("<tr>").html(
                        "<td>" + Array(e).join("</td><td>") + "</td>"
                    ),
                    n =
                        (H(this.table().body()).append(e),
                        e.children().map(function () {
                            return H(this).outerWidth();
                        }));
                return (
                    e.remove(),
                    this.iterator(
                        "column",
                        function (e, t) {
                            e = ae(e, t);
                            return null !== e ? n[e] : 0;
                        },
                        1
                    )
                );
            }),
            e("columns().indexes()", "column().index()", function (n) {
                return this.iterator(
                    "column",
                    function (e, t) {
                        return "visible" === n ? ae(e, t) : t;
                    },
                    1
                );
            }),
            t("columns.adjust()", function () {
                return this.iterator(
                    "table",
                    function (e) {
                        ne(e);
                    },
                    1
                );
            }),
            t("column.index()", function (e, t) {
                var n;
                if (0 !== this.context.length)
                    return (
                        (n = this.context[0]),
                        "fromVisible" === e || "toData" === e
                            ? re(n, t)
                            : "fromData" === e || "toVisible" === e
                            ? ae(n, t)
                            : void 0
                    );
            }),
            t("column()", function (e, t) {
                return dt(this.columns(e, t));
            }),
            t("cells()", function (g, e, v) {
                var r, a, o, i, l, s, t;
                return (
                    H.isPlainObject(g) &&
                        (void 0 === g.row
                            ? ((v = g), (g = null))
                            : ((v = e), (e = null))),
                    H.isPlainObject(e) && ((v = e), (e = null)),
                    null == e
                        ? this.iterator("table", function (e) {
                              return (
                                  (r = e),
                                  (e = g),
                                  (t = ct(v)),
                                  (d = r.aoData),
                                  (f = yt(r, t)),
                                  (n = _(m(d, f, "anCells"))),
                                  (h = H(M([], n))),
                                  (p = r.aoColumns.length),
                                  ut(
                                      "cell",
                                      e,
                                      function (e) {
                                          var t,
                                              n = "function" == typeof e;
                                          if (null == e || n) {
                                              for (
                                                  o = [], i = 0, l = f.length;
                                                  i < l;
                                                  i++
                                              )
                                                  for (
                                                      a = f[i], s = 0;
                                                      s < p;
                                                      s++
                                                  )
                                                      (u = {
                                                          row: a,
                                                          column: s,
                                                      }),
                                                          (!n ||
                                                              ((c = d[a]),
                                                              e(
                                                                  u,
                                                                  q(r, a, s),
                                                                  c.anCells
                                                                      ? c
                                                                            .anCells[
                                                                            s
                                                                        ]
                                                                      : null
                                                              ))) &&
                                                              o.push(u);
                                              return o;
                                          }
                                          return H.isPlainObject(e)
                                              ? void 0 !== e.column &&
                                                void 0 !== e.row &&
                                                -1 !== f.indexOf(e.row)
                                                  ? [e]
                                                  : []
                                              : (t = h
                                                    .filter(e)
                                                    .map(function (e, t) {
                                                        return {
                                                            row: t._DT_CellIndex
                                                                .row,
                                                            column: t
                                                                ._DT_CellIndex
                                                                .column,
                                                        };
                                                    })
                                                    .toArray()).length ||
                                                !e.nodeName
                                              ? t
                                              : (c =
                                                    H(e).closest(
                                                        "*[data-dt-row]"
                                                    )).length
                                              ? [
                                                    {
                                                        row: c.data("dt-row"),
                                                        column: c.data(
                                                            "dt-column"
                                                        ),
                                                    },
                                                ]
                                              : [];
                                      },
                                      r,
                                      t
                                  )
                              );
                              var r, t, a, o, i, l, s, u, c, d, f, n, h, p;
                          })
                        : ((t = v
                              ? {
                                    page: v.page,
                                    order: v.order,
                                    search: v.search,
                                }
                              : {}),
                          (r = this.columns(e, t)),
                          (a = this.rows(g, t)),
                          (t = this.iterator(
                              "table",
                              function (e, t) {
                                  var n = [];
                                  for (o = 0, i = a[t].length; o < i; o++)
                                      for (l = 0, s = r[t].length; l < s; l++)
                                          n.push({
                                              row: a[t][o],
                                              column: r[t][l],
                                          });
                                  return n;
                              },
                              1
                          )),
                          (t = v && v.selected ? this.cells(t, v) : t),
                          H.extend(t.selector, { cols: e, rows: g, opts: v }),
                          t)
                );
            }),
            e("cells().nodes()", "cell().node()", function () {
                return this.iterator(
                    "cell",
                    function (e, t, n) {
                        e = e.aoData[t];
                        return e && e.anCells ? e.anCells[n] : void 0;
                    },
                    1
                );
            }),
            t("cells().data()", function () {
                return this.iterator(
                    "cell",
                    function (e, t, n) {
                        return q(e, t, n);
                    },
                    1
                );
            }),
            e("cells().cache()", "cell().cache()", function (r) {
                return (
                    (r = "search" === r ? "_aFilterData" : "_aSortData"),
                    this.iterator(
                        "cell",
                        function (e, t, n) {
                            return e.aoData[t][r][n];
                        },
                        1
                    )
                );
            }),
            e("cells().render()", "cell().render()", function (r) {
                return this.iterator(
                    "cell",
                    function (e, t, n) {
                        return q(e, t, n, r);
                    },
                    1
                );
            }),
            e("cells().indexes()", "cell().index()", function () {
                return this.iterator(
                    "cell",
                    function (e, t, n) {
                        return { row: t, column: n, columnVisible: ae(e, n) };
                    },
                    1
                );
            }),
            e("cells().invalidate()", "cell().invalidate()", function (r) {
                return this.iterator("cell", function (e, t, n) {
                    be(e, t, r, n);
                });
            }),
            t("cell()", function (e, t, n) {
                return dt(this.cells(e, t, n));
            }),
            t("cell().data()", function (e) {
                var t,
                    n,
                    r,
                    a,
                    o,
                    i = this.context,
                    l = this[0];
                return void 0 === e
                    ? i.length && l.length
                        ? q(i[0], l[0].row, l[0].column)
                        : void 0
                    : ((t = i[0]),
                      (n = l[0].row),
                      (r = l[0].column),
                      (a = t.aoColumns[r]),
                      (o = t.aoData[n]._aData),
                      a.fnSetData(o, e, { settings: t, row: n, col: r }),
                      be(i[0], l[0].row, "data", l[0].column),
                      this);
            }),
            t("order()", function (t, e) {
                var n = this.context,
                    r = Array.prototype.slice.call(arguments);
                return void 0 === t
                    ? 0 !== n.length
                        ? n[0].aaSorting
                        : void 0
                    : ("number" == typeof t
                          ? (t = [[t, e]])
                          : 1 < r.length && (t = r),
                      this.iterator("table", function (e) {
                          e.aaSorting = Array.isArray(t) ? t.slice() : t;
                      }));
            }),
            t("order.listener()", function (t, n, r) {
                return this.iterator("table", function (e) {
                    ze(e, t, {}, n, r);
                });
            }),
            t("order.fixed()", function (t) {
                var e;
                return t
                    ? this.iterator("table", function (e) {
                          e.aaSortingFixed = H.extend(!0, {}, t);
                      })
                    : ((e = (e = this.context).length
                          ? e[0].aaSortingFixed
                          : void 0),
                      Array.isArray(e) ? { pre: e } : e);
            }),
            t(["columns().order()", "column().order()"], function (n) {
                var r = this;
                return n
                    ? this.iterator("table", function (e, t) {
                          e.aaSorting = r[t].map(function (e) {
                              return [e, n];
                          });
                      })
                    : this.iterator(
                          "column",
                          function (e, t) {
                              for (
                                  var n = Ge(e), r = 0, a = n.length;
                                  r < a;
                                  r++
                              )
                                  if (n[r].col === t) return n[r].dir;
                              return null;
                          },
                          1
                      );
            }),
            e("columns().orderable()", "column().orderable()", function (n) {
                return this.iterator(
                    "column",
                    function (e, t) {
                        e = e.aoColumns[t];
                        return n ? e.asSorting : e.bSortable;
                    },
                    1
                );
            }),
            t("processing()", function (t) {
                return this.iterator("table", function (e) {
                    w(e, t);
                });
            }),
            t("search()", function (t, n, r, a) {
                var e = this.context;
                return void 0 === t
                    ? 0 !== e.length
                        ? e[0].oPreviousSearch.search
                        : void 0
                    : this.iterator("table", function (e) {
                          e.oFeatures.bFilter &&
                              je(
                                  e,
                                  "object" == typeof n
                                      ? H.extend(e.oPreviousSearch, n, {
                                            search: t,
                                        })
                                      : H.extend(e.oPreviousSearch, {
                                            search: t,
                                            regex: null !== n && n,
                                            smart: null === r || r,
                                            caseInsensitive: null === a || a,
                                        })
                              );
                      });
            }),
            t("search.fixed()", function (t, n) {
                var e = this.iterator(!0, "table", function (e) {
                    e = e.searchFixed;
                    return t
                        ? void 0 === n
                            ? e[t]
                            : (null === n ? delete e[t] : (e[t] = n), this)
                        : Object.keys(e);
                });
                return void 0 !== t && void 0 === n ? e[0] : e;
            }),
            e("columns().search()", "column().search()", function (r, a, o, i) {
                return this.iterator("column", function (e, t) {
                    var n = e.aoPreSearchCols;
                    if (void 0 === r) return n[t].search;
                    e.oFeatures.bFilter &&
                        ("object" == typeof a
                            ? H.extend(n[t], a, { search: r })
                            : H.extend(n[t], {
                                  search: r,
                                  regex: null !== a && a,
                                  smart: null === o || o,
                                  caseInsensitive: null === i || i,
                              }),
                        je(e, e.oPreviousSearch));
                });
            }),
            t(
                ["columns().search.fixed()", "column().search.fixed()"],
                function (n, r) {
                    var e = this.iterator(!0, "column", function (e, t) {
                        e = e.aoColumns[t].searchFixed;
                        return n
                            ? void 0 === r
                                ? e[n]
                                : (null === r ? delete e[n] : (e[n] = r), this)
                            : Object.keys(e);
                    });
                    return void 0 !== n && void 0 === r ? e[0] : e;
                }
            ),
            t("state()", function (e, t) {
                var n;
                return e
                    ? ((n = H.extend(!0, {}, e)),
                      this.iterator("table", function (e) {
                          !1 !== t && (n.time = +new Date() + 100),
                              Ke(e, n, function () {});
                      }))
                    : this.context.length
                    ? this.context[0].oSavedState
                    : null;
            }),
            t("state.clear()", function () {
                return this.iterator("table", function (e) {
                    e.fnStateSaveCallback.call(e.oInstance, e, {});
                });
            }),
            t("state.loaded()", function () {
                return this.context.length
                    ? this.context[0].oLoadedState
                    : null;
            }),
            t("state.save()", function () {
                return this.iterator("table", function (e) {
                    Qe(e);
                });
            }),
            (B.use = function (e, t) {
                var n = "string" == typeof e ? t : e,
                    t = "string" == typeof t ? t : e;
                if (void 0 === n && "string" == typeof t)
                    switch (t) {
                        case "lib":
                        case "jq":
                            return H;
                        case "win":
                            return W;
                        case "datetime":
                            return B.DateTime;
                        case "luxon":
                            return o;
                        case "moment":
                            return i;
                        case "bootstrap":
                            return mt || W.bootstrap;
                        case "foundation":
                            return bt || W.Foundation;
                        default:
                            return null;
                    }
                "lib" === t || "jq" === t || (n && n.fn && n.fn.jquery)
                    ? (H = n)
                    : "win" === t || (n && n.document)
                    ? (L = (W = n).document)
                    : "datetime" === t || (n && "DateTime" === n.type)
                    ? (B.DateTime = n)
                    : "luxon" === t || (n && n.FixedOffsetZone)
                    ? (o = n)
                    : "moment" === t || (n && n.isMoment)
                    ? (i = n)
                    : "bootstrap" === t ||
                      (n && n.Modal && "modal" === n.Modal.NAME)
                    ? (mt = n)
                    : ("foundation" === t || (n && n.Reveal)) && (bt = n);
            }),
            (B.factory = function (e, t) {
                var n = !1;
                return (
                    e && e.document && (L = (W = e).document),
                    t && t.fn && t.fn.jquery && ((H = t), (n = !0)),
                    n
                );
            }),
            (B.versionCheck = function (e, t) {
                for (
                    var n,
                        r,
                        a = (t || B.version).split("."),
                        o = e.split("."),
                        i = 0,
                        l = o.length;
                    i < l;
                    i++
                )
                    if (
                        (n = parseInt(a[i], 10) || 0) !==
                        (r = parseInt(o[i], 10) || 0)
                    )
                        return r < n;
                return !0;
            }),
            (B.isDataTable = function (e) {
                var a = H(e).get(0),
                    o = !1;
                return (
                    e instanceof B.Api ||
                    (H.each(B.settings, function (e, t) {
                        var n = t.nScrollHead
                                ? H("table", t.nScrollHead)[0]
                                : null,
                            r = t.nScrollFoot
                                ? H("table", t.nScrollFoot)[0]
                                : null;
                        (t.nTable !== a && n !== a && r !== a) || (o = !0);
                    }),
                    o)
                );
            }),
            (B.tables = function (t) {
                var e = !1,
                    n =
                        (H.isPlainObject(t) && ((e = t.api), (t = t.visible)),
                        B.settings
                            .filter(function (e) {
                                return !(t && !H(e.nTable).is(":visible"));
                            })
                            .map(function (e) {
                                return e.nTable;
                            }));
                return e ? new X(n) : n;
            }),
            (B.camelToHungarian = V),
            t("$()", function (e, t) {
                (t = this.rows(t).nodes()), (t = H(t));
                return H([].concat(t.filter(e).toArray(), t.find(e).toArray()));
            }),
            H.each(["on", "one", "off"], function (e, n) {
                t(n + "()", function () {
                    var e = Array.prototype.slice.call(arguments),
                        t =
                            ((e[0] = e[0]
                                .split(/\s/)
                                .map(function (e) {
                                    return e.match(/\.dt\b/) ? e : e + ".dt";
                                })
                                .join(" ")),
                            H(this.tables().nodes()));
                    return t[n].apply(t, e), this;
                });
            }),
            t("clear()", function () {
                return this.iterator("table", function (e) {
                    me(e);
                });
            }),
            t("error()", function (t) {
                return this.iterator("table", function (e) {
                    z(e, 0, t);
                });
            }),
            t("settings()", function () {
                return new X(this.context, this.context);
            }),
            t("init()", function () {
                var e = this.context;
                return e.length ? e[0].oInit : null;
            }),
            t("data()", function () {
                return this.iterator("table", function (e) {
                    return b(e.aoData, "_aData");
                }).flatten();
            }),
            t("trigger()", function (t, n, r) {
                return this.iterator("table", function (e) {
                    return G(e, null, t, n, r);
                }).flatten();
            }),
            t("ready()", function (e) {
                var t = this.context;
                return e
                    ? this.tables().every(function () {
                          this.context[0]._bInitComplete
                              ? e.call(this)
                              : this.on("init.dt.DT", function () {
                                    e.call(this);
                                });
                      })
                    : t.length
                    ? t[0]._bInitComplete || !1
                    : null;
            }),
            t("destroy()", function (c) {
                return (
                    (c = c || !1),
                    this.iterator("table", function (e) {
                        var t = e.oClasses,
                            n = e.nTable,
                            r = e.nTBody,
                            a = e.nTHead,
                            o = e.nTFoot,
                            i = H(n),
                            r = H(r),
                            l = H(e.nTableWrapper),
                            s = e.aoData.map(function (e) {
                                return e ? e.nTr : null;
                            }),
                            u = t.order,
                            o =
                                ((e.bDestroying = !0),
                                G(e, "aoDestroyCallback", "destroy", [e], !0),
                                c || new X(e).columns().visible(!0),
                                e.resizeObserver &&
                                    e.resizeObserver.disconnect(),
                                l.off(".DT").find(":not(tbody *)").off(".DT"),
                                H(W).off(".DT-" + e.sInstance),
                                n != a.parentNode &&
                                    (i.children("thead").detach(), i.append(a)),
                                o &&
                                    n != o.parentNode &&
                                    (i.children("tfoot").detach(), i.append(o)),
                                e.colgroup.remove(),
                                (e.aaSorting = []),
                                (e.aaSortingFixed = []),
                                Ze(e),
                                H("th, td", a)
                                    .removeClass(
                                        u.canAsc +
                                            " " +
                                            u.canDesc +
                                            " " +
                                            u.isAsc +
                                            " " +
                                            u.isDesc
                                    )
                                    .css("width", ""),
                                r.children().detach(),
                                r.append(s),
                                e.nTableWrapper.parentNode),
                            a = e.nTableWrapper.nextSibling,
                            u = c ? "remove" : "detach",
                            r =
                                (i[u](),
                                l[u](),
                                !c &&
                                    o &&
                                    (o.insertBefore(n, a),
                                    i
                                        .css("width", e.sDestroyWidth)
                                        .removeClass(t.table)),
                                B.settings.indexOf(e));
                        -1 !== r && B.settings.splice(r, 1);
                    })
                );
            }),
            H.each(["column", "row", "cell"], function (e, s) {
                t(s + "s().every()", function (r) {
                    var a,
                        o = this.selector.opts,
                        i = this,
                        l = 0;
                    return this.iterator("every", function (e, t, n) {
                        (a = i[s](t, o)),
                            "cell" === s
                                ? r.call(a, a[0][0].row, a[0][0].column, n, l)
                                : r.call(a, t, n, l),
                            l++;
                    });
                });
            }),
            t("i18n()", function (e, t, n) {
                var r = this.context[0],
                    e = U(e)(r.oLanguage);
                return "string" ==
                    typeof (e = H.isPlainObject((e = void 0 === e ? t : e))
                        ? void 0 !== n && void 0 !== e[n]
                            ? e[n]
                            : e._
                        : e)
                    ? e.replace("%d", n)
                    : e;
            }),
            (B.version = "2.2.0"),
            (B.settings = []),
            (B.models = {}),
            (B.models.oSearch = {
                caseInsensitive: !0,
                search: "",
                regex: !1,
                smart: !0,
                return: !1,
            }),
            (B.models.oRow = {
                nTr: null,
                anCells: null,
                _aData: [],
                _aSortData: null,
                _aFilterData: null,
                _sFilterRow: null,
                src: null,
                idx: -1,
                displayData: null,
            }),
            (B.models.oColumn = {
                idx: null,
                aDataSort: null,
                asSorting: null,
                bSearchable: null,
                bSortable: null,
                bVisible: null,
                _sManualType: null,
                _bAttrSrc: !1,
                fnCreatedCell: null,
                fnGetData: null,
                fnSetData: null,
                mData: null,
                mRender: null,
                sClass: null,
                sContentPadding: null,
                sDefaultContent: null,
                sName: null,
                sSortDataType: "std",
                sSortingClass: null,
                sTitle: null,
                sType: null,
                sWidth: null,
                sWidthOrig: null,
                maxLenString: null,
                searchFixed: null,
            }),
            (B.defaults = {
                aaData: null,
                aaSorting: [[0, "asc"]],
                aaSortingFixed: [],
                ajax: null,
                aLengthMenu: [10, 25, 50, 100],
                aoColumns: null,
                aoColumnDefs: null,
                aoSearchCols: [],
                bAutoWidth: !0,
                bDeferRender: !0,
                bDestroy: !1,
                bFilter: !0,
                bInfo: !0,
                bLengthChange: !0,
                bPaginate: !0,
                bProcessing: !1,
                bRetrieve: !1,
                bScrollCollapse: !1,
                bServerSide: !1,
                bSort: !0,
                bSortMulti: !0,
                bSortCellsTop: null,
                bSortClasses: !0,
                bStateSave: !1,
                fnCreatedRow: null,
                fnDrawCallback: null,
                fnFooterCallback: null,
                fnFormatNumber: function (e) {
                    return e
                        .toString()
                        .replace(
                            /\B(?=(\d{3})+(?!\d))/g,
                            this.oLanguage.sThousands
                        );
                },
                fnHeaderCallback: null,
                fnInfoCallback: null,
                fnInitComplete: null,
                fnPreDrawCallback: null,
                fnRowCallback: null,
                fnStateLoadCallback: function (e) {
                    try {
                        return JSON.parse(
                            (-1 === e.iStateDuration
                                ? sessionStorage
                                : localStorage
                            ).getItem(
                                "DataTables_" +
                                    e.sInstance +
                                    "_" +
                                    location.pathname
                            )
                        );
                    } catch (e) {
                        return {};
                    }
                },
                fnStateLoadParams: null,
                fnStateLoaded: null,
                fnStateSaveCallback: function (e, t) {
                    try {
                        (-1 === e.iStateDuration
                            ? sessionStorage
                            : localStorage
                        ).setItem(
                            "DataTables_" +
                                e.sInstance +
                                "_" +
                                location.pathname,
                            JSON.stringify(t)
                        );
                    } catch (e) {}
                },
                fnStateSaveParams: null,
                iStateDuration: 7200,
                iDisplayLength: 10,
                iDisplayStart: 0,
                iTabIndex: 0,
                oClasses: {},
                oLanguage: {
                    oAria: {
                        orderable: ": Activate to sort",
                        orderableReverse: ": Activate to invert sorting",
                        orderableRemove: ": Activate to remove sorting",
                        paginate: {
                            first: "First",
                            last: "Last",
                            next: "Next",
                            previous: "Previous",
                            number: "",
                        },
                    },
                    oPaginate: {
                        sFirst: "«",
                        sLast: "»",
                        sNext: "›",
                        sPrevious: "‹",
                    },
                    entries: { _: "entries", 1: "entry" },
                    sEmptyTable: "No data available in table",
                    sInfo: "Showing _START_ to _END_ of _TOTAL_ _ENTRIES-TOTAL_",
                    sInfoEmpty: "Showing 0 to 0 of 0 _ENTRIES-TOTAL_",
                    sInfoFiltered: "(filtered from _MAX_ total _ENTRIES-MAX_)",
                    sInfoPostFix: "",
                    sDecimal: "",
                    sThousands: ",",
                    sLengthMenu: "_MENU_ _ENTRIES_ per page",
                    sLoadingRecords: "Loading...",
                    sProcessing: "",
                    sSearch: "Search:",
                    sSearchPlaceholder: "",
                    sUrl: "",
                    sZeroRecords: "No matching records found",
                },
                orderDescReverse: !0,
                oSearch: H.extend({}, B.models.oSearch),
                layout: {
                    topStart: "pageLength",
                    topEnd: "search",
                    bottomStart: "info",
                    bottomEnd: "paging",
                },
                sDom: null,
                searchDelay: null,
                sPaginationType: "",
                sScrollX: "",
                sScrollXInner: "",
                sScrollY: "",
                sServerMethod: "GET",
                renderer: null,
                rowId: "DT_RowId",
                caption: null,
                iDeferLoading: null,
            }),
            Z(B.defaults),
            (B.defaults.column = {
                aDataSort: null,
                iDataSort: -1,
                ariaTitle: "",
                asSorting: ["asc", "desc", ""],
                bSearchable: !0,
                bSortable: !0,
                bVisible: !0,
                fnCreatedCell: null,
                mData: null,
                mRender: null,
                sCellType: "td",
                sClass: "",
                sContentPadding: "",
                sDefaultContent: null,
                sName: "",
                sSortDataType: "std",
                sTitle: null,
                sType: null,
                sWidth: null,
            }),
            Z(B.defaults.column),
            (B.models.oSettings = {
                oFeatures: {
                    bAutoWidth: null,
                    bDeferRender: null,
                    bFilter: null,
                    bInfo: !0,
                    bLengthChange: !0,
                    bPaginate: null,
                    bProcessing: null,
                    bServerSide: null,
                    bSort: null,
                    bSortMulti: null,
                    bSortClasses: null,
                    bStateSave: null,
                },
                oScroll: {
                    bCollapse: null,
                    iBarWidth: 0,
                    sX: null,
                    sXInner: null,
                    sY: null,
                },
                oLanguage: { fnInfoCallback: null },
                oBrowser: { bScrollbarLeft: !1, barWidth: 0 },
                ajax: null,
                aanFeatures: [],
                aoData: [],
                aiDisplay: [],
                aiDisplayMaster: [],
                aIds: {},
                aoColumns: [],
                aoHeader: [],
                aoFooter: [],
                oPreviousSearch: {},
                searchFixed: {},
                aoPreSearchCols: [],
                aaSorting: null,
                aaSortingFixed: [],
                sDestroyWidth: 0,
                aoRowCallback: [],
                aoHeaderCallback: [],
                aoFooterCallback: [],
                aoDrawCallback: [],
                aoRowCreatedCallback: [],
                aoPreDrawCallback: [],
                aoInitComplete: [],
                aoStateSaveParams: [],
                aoStateLoadParams: [],
                aoStateLoaded: [],
                sTableId: "",
                nTable: null,
                nTHead: null,
                nTFoot: null,
                nTBody: null,
                nTableWrapper: null,
                bInitialised: !1,
                aoOpenRows: [],
                sDom: null,
                searchDelay: null,
                sPaginationType: "two_button",
                pagingControls: 0,
                iStateDuration: 0,
                aoStateSave: [],
                aoStateLoad: [],
                oSavedState: null,
                oLoadedState: null,
                bAjaxDataGet: !0,
                jqXHR: null,
                json: void 0,
                oAjaxData: void 0,
                sServerMethod: null,
                fnFormatNumber: null,
                aLengthMenu: null,
                iDraw: 0,
                bDrawing: !1,
                iDrawError: -1,
                _iDisplayLength: 10,
                _iDisplayStart: 0,
                _iRecordsTotal: 0,
                _iRecordsDisplay: 0,
                oClasses: {},
                bFiltered: !1,
                bSorted: !1,
                bSortCellsTop: null,
                oInit: null,
                aoDestroyCallback: [],
                fnRecordsTotal: function () {
                    return "ssp" == J(this)
                        ? +this._iRecordsTotal
                        : this.aiDisplayMaster.length;
                },
                fnRecordsDisplay: function () {
                    return "ssp" == J(this)
                        ? +this._iRecordsDisplay
                        : this.aiDisplay.length;
                },
                fnDisplayEnd: function () {
                    var e = this._iDisplayLength,
                        t = this._iDisplayStart,
                        n = t + e,
                        r = this.aiDisplay.length,
                        a = this.oFeatures,
                        o = a.bPaginate;
                    return a.bServerSide
                        ? !1 === o || -1 === e
                            ? t + r
                            : Math.min(t + e, this._iRecordsDisplay)
                        : !o || r < n || -1 === e
                        ? r
                        : n;
                },
                oInstance: null,
                sInstance: null,
                iTabIndex: 0,
                nScrollHead: null,
                nScrollFoot: null,
                aLastSort: [],
                oPlugins: {},
                rowIdFn: null,
                rowId: null,
                caption: "",
                captionNode: null,
                colgroup: null,
                deferLoading: null,
                typeDetect: !0,
                resizeObserver: null,
                containerWidth: 0,
            }),
            B.ext.pager);
    H.extend(Tt, {
        simple: function () {
            return ["previous", "next"];
        },
        full: function () {
            return ["first", "previous", "next", "last"];
        },
        numbers: function () {
            return ["numbers"];
        },
        simple_numbers: function () {
            return ["previous", "numbers", "next"];
        },
        full_numbers: function () {
            return ["first", "previous", "numbers", "next", "last"];
        },
        first_last: function () {
            return ["first", "last"];
        },
        first_last_numbers: function () {
            return ["first", "numbers", "last"];
        },
        _numbers: Wt,
        numbers_length: 7,
    }),
        H.extend(!0, B.ext.renderer, {
            pagingButton: {
                _: function (e, t, n, r, a) {
                    var e = e.oClasses.paging,
                        o = [e.button];
                    return (
                        r && o.push(e.active),
                        a && o.push(e.disabled),
                        {
                            display: (r =
                                "ellipsis" === t
                                    ? H('<span class="ellipsis"></span>').html(
                                          n
                                      )[0]
                                    : H("<button>", {
                                          class: o.join(" "),
                                          role: "link",
                                          type: "button",
                                      }).html(n)),
                            clicker: r,
                        }
                    );
                },
            },
            pagingContainer: {
                _: function (e, t) {
                    return t;
                },
            },
        });
    function Ct(e, t, n, r, a) {
        return i ? e[t](a) : o ? e[n](a) : r ? e[r](a) : e;
    }
    var o,
        i,
        Lt = !1;
    function It(e, t, n) {
        var r;
        if (
            (W.luxon && !o && (o = W.luxon),
            (i = W.moment && !i ? W.moment : i))
        ) {
            if (!(r = i.utc(e, t, n, !0)).isValid()) return null;
        } else if (o) {
            if (
                !(r =
                    t && "string" == typeof e
                        ? o.DateTime.fromFormat(e, t)
                        : o.DateTime.fromISO(e)).isValid
            )
                return null;
            r = r.setLocale(n);
        } else
            t
                ? (Lt ||
                      alert(
                          "DataTables warning: Formatted date without Moment.js or Luxon - https://datatables.net/tn/17"
                      ),
                  (Lt = !0))
                : (r = new Date(e));
        return r;
    }
    function At(s) {
        return function (r, a, o, i) {
            0 === arguments.length
                ? ((o = "en"), (r = a = null))
                : 1 === arguments.length
                ? ((o = "en"), (a = r), (r = null))
                : 2 === arguments.length && ((o = a), (a = r), (r = null));
            var l = "datetime" + (a ? "-" + a : "");
            return (
                B.ext.type.order[l + "-pre"] ||
                    B.type(l, {
                        detect: function (e) {
                            return e === l && l;
                        },
                        order: {
                            pre: function (e) {
                                return e.valueOf();
                            },
                        },
                        className: "dt-right",
                    }),
                function (e, t) {
                    var n;
                    return (
                        null == e &&
                            (e =
                                "--now" === i
                                    ? ((n = new Date()),
                                      new Date(
                                          Date.UTC(
                                              n.getFullYear(),
                                              n.getMonth(),
                                              n.getDate(),
                                              n.getHours(),
                                              n.getMinutes(),
                                              n.getSeconds()
                                          )
                                      ))
                                    : ""),
                        "type" === t
                            ? l
                            : "" === e
                            ? "sort" !== t
                                ? ""
                                : It("0000-01-01 00:00:00", null, o)
                            : !(
                                  null === a ||
                                  r !== a ||
                                  "sort" === t ||
                                  "type" === t ||
                                  e instanceof Date
                              ) || null === (n = It(e, r, o))
                            ? e
                            : "sort" === t
                            ? n
                            : ((e =
                                  null === a
                                      ? Ct(n, "toDate", "toJSDate", "")[s]()
                                      : Ct(
                                            n,
                                            "format",
                                            "toFormat",
                                            "toISOString",
                                            a
                                        )),
                              "display" === t ? u(e) : e)
                    );
                }
            );
        };
    }
    var Nt = ",",
        Ft = ".";
    if (void 0 !== W.Intl)
        try {
            for (
                var Ot = new Intl.NumberFormat().formatToParts(100000.1), r = 0;
                r < Ot.length;
                r++
            )
                "group" === Ot[r].type
                    ? (Nt = Ot[r].value)
                    : "decimal" === Ot[r].type && (Ft = Ot[r].value);
        } catch (e) {}
    (B.datetime = function (n, r) {
        var a = "datetime-" + n;
        (r = r || "en"),
            B.ext.type.order[a] ||
                B.type(a, {
                    detect: function (e) {
                        var t = It(e, n, r);
                        return !("" !== e && !t) && a;
                    },
                    order: {
                        pre: function (e) {
                            return It(e, n, r) || 0;
                        },
                    },
                    className: "dt-right",
                });
    }),
        (B.render = {
            date: At("toLocaleDateString"),
            datetime: At("toLocaleString"),
            time: At("toLocaleTimeString"),
            number: function (a, o, i, l, s) {
                return (
                    null == a && (a = Nt),
                    null == o && (o = Ft),
                    {
                        display: function (e) {
                            if ("number" != typeof e && "string" != typeof e)
                                return e;
                            if ("" === e || null === e) return e;
                            var t = e < 0 ? "-" : "",
                                n = parseFloat(e),
                                r = Math.abs(n);
                            if (1e11 <= r || (r < 1e-4 && 0 !== r))
                                return (
                                    (r = n.toExponential(i).split(/e\+?/))[0] +
                                    " x 10<sup>" +
                                    r[1] +
                                    "</sup>"
                                );
                            if (isNaN(n)) return u(e);
                            (n = n.toFixed(i)), (e = Math.abs(n));
                            (r = parseInt(e, 10)),
                                (n = i
                                    ? o + (e - r).toFixed(i).substring(2)
                                    : "");
                            return (
                                (t = 0 === r && 0 === parseFloat(n) ? "" : t) +
                                (l || "") +
                                r
                                    .toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, a) +
                                n +
                                (s || "")
                            );
                        },
                    }
                );
            },
            text: function () {
                return { display: u, filter: u };
            },
        });
    function jt(e, t) {
        return (
            (e = null != e ? e.toString().toLowerCase() : ""),
            (t = null != t ? t.toString().toLowerCase() : ""),
            e.localeCompare(t, navigator.languages[0] || navigator.language, {
                numeric: !0,
                ignorePunctuation: !0,
            })
        );
    }
    function Rt(e, t) {
        return (e = A(e)), (t = A(t)), jt(e, t);
    }
    var l = B.ext.type,
        Pt =
            ((B.type = function (n, e, t) {
                if (!e)
                    return {
                        className: l.className[n],
                        detect: l.detect.find(function (e) {
                            return e._name === n;
                        }),
                        order: {
                            pre: l.order[n + "-pre"],
                            asc: l.order[n + "-asc"],
                            desc: l.order[n + "-desc"],
                        },
                        render: l.render[n],
                        search: l.search[n],
                    };
                function r(e, t) {
                    l[e][n] = t;
                }
                function a(e) {
                    Object.defineProperty(e, "_name", { value: n });
                    var t = l.detect.findIndex(function (e) {
                        return e._name === n;
                    });
                    -1 === t ? l.detect.unshift(e) : l.detect.splice(t, 1, e);
                }
                function o(e) {
                    (l.order[n + "-pre"] = e.pre),
                        (l.order[n + "-asc"] = e.asc),
                        (l.order[n + "-desc"] = e.desc);
                }
                void 0 === t && ((t = e), (e = null)),
                    "className" === e
                        ? r("className", t)
                        : "detect" === e
                        ? a(t)
                        : "order" === e
                        ? o(t)
                        : "render" === e
                        ? r("render", t)
                        : "search" === e
                        ? r("search", t)
                        : e ||
                          (t.className && r("className", t.className),
                          void 0 !== t.detect && a(t.detect),
                          t.order && o(t.order),
                          void 0 !== t.render && r("render", t.render),
                          void 0 !== t.search && r("search", t.search));
            }),
            (B.types = function () {
                return l.detect.map(function (e) {
                    return e._name;
                });
            }),
            B.type("string", {
                detect: function () {
                    return "string";
                },
                order: {
                    pre: function (e) {
                        return T(e) && "boolean" != typeof e
                            ? ""
                            : "string" == typeof e
                            ? e.toLowerCase()
                            : e.toString
                            ? e.toString()
                            : "";
                    },
                },
                search: vt(!1, !0),
            }),
            B.type("string-utf8", {
                detect: {
                    allOf: function (e) {
                        return !0;
                    },
                    oneOf: function (e) {
                        return (
                            !T(e) &&
                            navigator.languages &&
                            "string" == typeof e &&
                            e.match(/[^\x00-\x7F]/)
                        );
                    },
                },
                order: {
                    asc: jt,
                    desc: function (e, t) {
                        return -1 * jt(e, t);
                    },
                },
                search: vt(!1, !0),
            }),
            B.type("html", {
                detect: {
                    allOf: function (e) {
                        return (
                            T(e) ||
                            ("string" == typeof e && -1 !== e.indexOf("<"))
                        );
                    },
                    oneOf: function (e) {
                        return (
                            !T(e) &&
                            "string" == typeof e &&
                            -1 !== e.indexOf("<")
                        );
                    },
                },
                order: {
                    pre: function (e) {
                        return T(e)
                            ? ""
                            : e.replace
                            ? A(e).trim().toLowerCase()
                            : e + "";
                    },
                },
                search: vt(!0, !0),
            }),
            B.type("html-utf8", {
                detect: {
                    allOf: function (e) {
                        return (
                            T(e) ||
                            ("string" == typeof e && -1 !== e.indexOf("<"))
                        );
                    },
                    oneOf: function (e) {
                        return (
                            navigator.languages &&
                            !T(e) &&
                            "string" == typeof e &&
                            -1 !== e.indexOf("<") &&
                            "string" == typeof e &&
                            e.match(/[^\x00-\x7F]/)
                        );
                    },
                },
                order: {
                    asc: Rt,
                    desc: function (e, t) {
                        return -1 * Rt(e, t);
                    },
                },
                search: vt(!0, !0),
            }),
            B.type("date", {
                className: "dt-type-date",
                detect: {
                    allOf: function (e) {
                        var t;
                        return !e || e instanceof Date || j.test(e)
                            ? (null !== (t = Date.parse(e)) && !isNaN(t)) ||
                                  T(e)
                            : null;
                    },
                    oneOf: function (e) {
                        return (
                            e instanceof Date ||
                            ("string" == typeof e && j.test(e))
                        );
                    },
                },
                order: {
                    pre: function (e) {
                        e = Date.parse(e);
                        return isNaN(e) ? -1 / 0 : e;
                    },
                },
            }),
            B.type("html-num-fmt", {
                className: "dt-type-numeric",
                detect: {
                    allOf: function (e, t) {
                        t = t.oLanguage.sDecimal;
                        return c(e, t, !0, !1);
                    },
                    oneOf: function (e, t) {
                        t = t.oLanguage.sDecimal;
                        return c(e, t, !0, !1);
                    },
                },
                order: {
                    pre: function (e, t) {
                        t = t.oLanguage.sDecimal;
                        return Pt(e, t, F, P);
                    },
                },
                search: vt(!0, !0),
            }),
            B.type("html-num", {
                className: "dt-type-numeric",
                detect: {
                    allOf: function (e, t) {
                        t = t.oLanguage.sDecimal;
                        return c(e, t, !1, !0);
                    },
                    oneOf: function (e, t) {
                        t = t.oLanguage.sDecimal;
                        return c(e, t, !1, !1);
                    },
                },
                order: {
                    pre: function (e, t) {
                        t = t.oLanguage.sDecimal;
                        return Pt(e, t, F);
                    },
                },
                search: vt(!0, !0),
            }),
            B.type("num-fmt", {
                className: "dt-type-numeric",
                detect: {
                    allOf: function (e, t) {
                        t = t.oLanguage.sDecimal;
                        return s(e, t, !0, !0);
                    },
                    oneOf: function (e, t) {
                        t = t.oLanguage.sDecimal;
                        return s(e, t, !0, !1);
                    },
                },
                order: {
                    pre: function (e, t) {
                        t = t.oLanguage.sDecimal;
                        return Pt(e, t, P);
                    },
                },
            }),
            B.type("num", {
                className: "dt-type-numeric",
                detect: {
                    allOf: function (e, t) {
                        t = t.oLanguage.sDecimal;
                        return s(e, t, !1, !0);
                    },
                    oneOf: function (e, t) {
                        t = t.oLanguage.sDecimal;
                        return s(e, t, !1, !1);
                    },
                },
                order: {
                    pre: function (e, t) {
                        t = t.oLanguage.sDecimal;
                        return Pt(e, t);
                    },
                },
            }),
            function (e, t, n, r) {
                var a;
                return 0 === e || (e && "-" !== e)
                    ? "number" == (a = typeof e) || "bigint" == a
                        ? e
                        : +(e =
                              (e = t ? E(e, t) : e).replace &&
                              (n && (e = e.replace(n, "")), r)
                                  ? e.replace(r, "")
                                  : e)
                    : -1 / 0;
            });
    function Et(e, t, n) {
        n && (e[t] = n);
    }
    H.extend(!0, B.ext.renderer, {
        footer: {
            _: function (e, t, n) {
                t.addClass(n.tfoot.cell);
            },
        },
        header: {
            _: function (g, v, m) {
                v.addClass(m.thead.cell),
                    g.oFeatures.bSort || v.addClass(m.order.none);
                var e = g.bSortCellsTop,
                    t = v.closest("thead").find("tr"),
                    n = v.parent().index();
                "disable" === v.attr("data-dt-order") ||
                    "disable" === v.parent().attr("data-dt-order") ||
                    (!0 === e && 0 !== n) ||
                    (!1 === e && n !== t.length - 1) ||
                    H(g.nTable).on(
                        "order.dt.DT column-visibility.dt.DT",
                        function (e, t) {
                            if (g === t) {
                                var n = t.sortDetails;
                                if (n) {
                                    for (
                                        var r = m.order,
                                            a = t.api.columns(v),
                                            o = g.aoColumns[a.flatten()[0]],
                                            i = a.orderable().includes(!0),
                                            l = "",
                                            s = a.indexes(),
                                            u = a.orderable(!0).flatten(),
                                            c = b(n, "col"),
                                            d = g.iTabIndex,
                                            f =
                                                (v
                                                    .removeClass(
                                                        r.isAsc + " " + r.isDesc
                                                    )
                                                    .toggleClass(r.none, !i)
                                                    .toggleClass(
                                                        r.canAsc,
                                                        i && u.includes("asc")
                                                    )
                                                    .toggleClass(
                                                        r.canDesc,
                                                        i && u.includes("desc")
                                                    ),
                                                !0),
                                            h = 0;
                                        h < s.length;
                                        h++
                                    )
                                        c.includes(s[h]) || (f = !1);
                                    f &&
                                        ((u = a.order()),
                                        v.addClass(
                                            u.includes("asc")
                                                ? r.isAsc
                                                : "" + u.includes("desc")
                                                ? r.isDesc
                                                : ""
                                        ));
                                    var p = -1;
                                    for (h = 0; h < c.length; h++)
                                        if (g.aoColumns[c[h]].bVisible) {
                                            p = c[h];
                                            break;
                                        }
                                    s[0] == p
                                        ? ((a = n[0]),
                                          (u = o.asSorting),
                                          v.attr(
                                              "aria-sort",
                                              "asc" === a.dir
                                                  ? "ascending"
                                                  : "descending"
                                          ),
                                          (l = u[a.index + 1]
                                              ? "Reverse"
                                              : "Remove"))
                                        : v.removeAttr("aria-sort"),
                                        v.attr(
                                            "aria-label",
                                            i
                                                ? o.ariaTitle +
                                                      t.api.i18n(
                                                          "oAria.orderable" + l
                                                      )
                                                : o.ariaTitle
                                        ),
                                        i &&
                                            ((r =
                                                v.find(
                                                    ".dt-column-order"
                                                )).attr("role", "button"),
                                            -1 !== d) &&
                                            r.attr("tabindex", d);
                                }
                            }
                        }
                    );
            },
        },
        layout: {
            _: function (e, t, n) {
                var r = e.oClasses.layout,
                    a = H("<div/>")
                        .attr("id", n.id || null)
                        .addClass(n.className || r.row)
                        .appendTo(t);
                B.ext.renderer.layout._forLayoutRow(n, function (e, t) {
                    var n;
                    "id" !== e &&
                        "className" !== e &&
                        ((n = ""),
                        t.table &&
                            (a.addClass(r.tableRow), (n += r.tableCell + " ")),
                        (n +=
                            "start" === e
                                ? r.start
                                : "end" === e
                                ? r.end
                                : r.full),
                        H("<div/>")
                            .attr({
                                id: t.id || null,
                                class: t.className || r.cell + " " + n,
                            })
                            .append(t.contents)
                            .appendTo(a));
                });
            },
            _forLayoutRow: function (t, n) {
                function r(e) {
                    switch (e) {
                        case "":
                            return 0;
                        case "start":
                            return 1;
                        case "end":
                            return 2;
                        default:
                            return 3;
                    }
                }
                Object.keys(t)
                    .sort(function (e, t) {
                        return r(e) - r(t);
                    })
                    .forEach(function (e) {
                        n(e, t[e]);
                    });
            },
        },
    }),
        (B.feature = {}),
        (B.feature.register = function (e, t, n) {
            (B.ext.features[e] = t),
                n && I.feature.push({ cFeature: n, fnInit: t });
        }),
        B.feature.register("div", function (e, t) {
            var n = H("<div>")[0];
            return (
                t &&
                    (Et(n, "className", t.className),
                    Et(n, "id", t.id),
                    Et(n, "innerHTML", t.html),
                    Et(n, "textContent", t.text)),
                n
            );
        }),
        B.feature.register(
            "info",
            function (e, s) {
                var t, n, u;
                return e.oFeatures.bInfo
                    ? ((t = e.oLanguage),
                      (n = e.sTableId),
                      (u = H("<div/>", { class: e.oClasses.info.container })),
                      (s = H.extend(
                          {
                              callback: t.fnInfoCallback,
                              empty: t.sInfoEmpty,
                              postfix: t.sInfoPostFix,
                              search: t.sInfoFiltered,
                              text: t.sInfo,
                          },
                          s
                      )),
                      e.aoDrawCallback.push(function (e) {
                          var t = s,
                              n = u,
                              r = e._iDisplayStart + 1,
                              a = e.fnDisplayEnd(),
                              o = e.fnRecordsTotal(),
                              i = e.fnRecordsDisplay(),
                              l = i ? t.text : t.empty;
                          i !== o && (l += " " + t.search),
                              (l += t.postfix),
                              (l = at(e, l)),
                              t.callback &&
                                  (l = t.callback.call(
                                      e.oInstance,
                                      e,
                                      r,
                                      a,
                                      o,
                                      i,
                                      l
                                  )),
                              n.html(l),
                              G(e, null, "info", [e, n[0], l]);
                      }),
                      e._infoEl ||
                          (u.attr({
                              "aria-live": "polite",
                              id: n + "_info",
                              role: "status",
                          }),
                          H(e.nTable).attr("aria-describedby", n + "_info"),
                          (e._infoEl = u)),
                      u)
                    : null;
            },
            "i"
        );
    var kt = 0;
    function Mt(e) {
        var t = [];
        return (
            e.numbers && t.push("numbers"),
            e.previousNext && (t.unshift("previous"), t.push("next")),
            e.firstLast && (t.unshift("first"), t.push("last")),
            t
        );
    }
    function Ht(e, t, n, r) {
        var a = e.oLanguage.oPaginate,
            o = { display: "", active: !1, disabled: !1 };
        switch (t) {
            case "ellipsis":
                o.display = "&#x2026;";
                break;
            case "first":
                (o.display = a.sFirst), 0 === n && (o.disabled = !0);
                break;
            case "previous":
                (o.display = a.sPrevious), 0 === n && (o.disabled = !0);
                break;
            case "next":
                (o.display = a.sNext),
                    (0 !== r && n !== r - 1) || (o.disabled = !0);
                break;
            case "last":
                (o.display = a.sLast),
                    (0 !== r && n !== r - 1) || (o.disabled = !0);
                break;
            default:
                "number" == typeof t &&
                    ((o.display = e.fnFormatNumber(t + 1)), n === t) &&
                    (o.active = !0);
        }
        return o;
    }
    function Wt(e, t, n, r) {
        var a = [],
            o = Math.floor(n / 2),
            i = r ? 2 : 1,
            l = r ? 1 : 0;
        return (
            t <= n
                ? (a = h(0, t))
                : 1 === n
                ? (a = [e])
                : 3 === n
                ? e <= 1
                    ? (a = [0, 1, "ellipsis"])
                    : t - 2 <= e
                    ? (a = h(t - 2, t)).unshift("ellipsis")
                    : (a = ["ellipsis", e, "ellipsis"])
                : e <= o
                ? ((a = h(0, n - i)).push("ellipsis"), r && a.push(t - 1))
                : t - 1 - o <= e
                ? ((a = h(t - (n - i), t)).unshift("ellipsis"),
                  r && a.unshift(0))
                : ((a = h(e - o + i, e + o - l)).push("ellipsis"),
                  a.unshift("ellipsis"),
                  r && (a.push(t - 1), a.unshift(0))),
            a
        );
    }
    B.feature.register(
        "search",
        function (n, r) {
            var e, t, a, o, i, l, s, u, c, d;
            return n.oFeatures.bFilter
                ? ((e = n.oClasses.search),
                  (t = n.sTableId),
                  (c = n.oLanguage),
                  (a = n.oPreviousSearch),
                  (o = '<input type="search" class="' + e.input + '"/>'),
                  -1 ===
                      (r = H.extend(
                          {
                              placeholder: c.sSearchPlaceholder,
                              processing: !1,
                              text: c.sSearch,
                          },
                          r
                      )).text.indexOf("_INPUT_") && (r.text += "_INPUT_"),
                  (r.text = at(n, r.text)),
                  (c = r.text.match(/_INPUT_$/)),
                  (s = r.text.match(/^_INPUT_/)),
                  (i = r.text.replace(/_INPUT_/, "")),
                  (l = "<label>" + r.text + "</label>"),
                  s
                      ? (l = "_INPUT_<label>" + i + "</label>")
                      : c && (l = "<label>" + i + "</label>_INPUT_"),
                  (s = H("<div>")
                      .addClass(e.container)
                      .append(l.replace(/_INPUT_/, o)))
                      .find("label")
                      .attr("for", "dt-search-" + kt),
                  s.find("input").attr("id", "dt-search-" + kt),
                  kt++,
                  (u = function (e) {
                      var t = this.value;
                      (a.return && "Enter" !== e.key) ||
                          (t != a.search &&
                              Be(n, r.processing, function () {
                                  (a.search = t),
                                      je(n, a),
                                      (n._iDisplayStart = 0),
                                      S(n);
                              }));
                  }),
                  (c = null !== n.searchDelay ? n.searchDelay : 0),
                  (d = H("input", s)
                      .val(a.search)
                      .attr("placeholder", r.placeholder)
                      .on(
                          "keyup.DT search.DT input.DT paste.DT cut.DT",
                          c ? B.util.debounce(u, c) : u
                      )
                      .on("mouseup.DT", function (e) {
                          setTimeout(function () {
                              u.call(d[0], e);
                          }, 10);
                      })
                      .on("keypress.DT", function (e) {
                          if (13 == e.keyCode) return !1;
                      })
                      .attr("aria-controls", t)),
                  H(n.nTable).on("search.dt.DT", function (e, t) {
                      n === t &&
                          d[0] !== L.activeElement &&
                          d.val("function" != typeof a.search ? a.search : "");
                  }),
                  s)
                : null;
        },
        "f"
    ),
        B.feature.register(
            "paging",
            function (e, t) {
                if (!e.oFeatures.bPaginate) return null;
                t = H.extend(
                    {
                        buttons: B.ext.pager.numbers_length,
                        type: e.sPaginationType,
                        boundaryNumbers: !0,
                        firstLast: !0,
                        previousNext: !0,
                        numbers: !0,
                    },
                    t
                );
                function n() {
                    !(function e(t, n, r) {
                        if (!t._bInitComplete) return;
                        var a = r.type ? B.ext.pager[r.type] : Mt,
                            o = t.oLanguage.oAria.paginate || {},
                            i = t._iDisplayStart,
                            l = t._iDisplayLength,
                            s = t.fnRecordsDisplay(),
                            u = -1 === l,
                            c = u ? 0 : Math.ceil(i / l),
                            d = u ? 1 : Math.ceil(s / l),
                            f = [],
                            h = [],
                            i = a(r).map(function (e) {
                                return "numbers" === e
                                    ? Wt(c, d, r.buttons, r.boundaryNumbers)
                                    : e;
                            });
                        f = f.concat.apply(f, i);
                        for (var p = 0; p < f.length; p++) {
                            var g = f[p],
                                v = Ht(t, g, c, d),
                                m = rt(t, "pagingButton")(
                                    t,
                                    g,
                                    v.display,
                                    v.active,
                                    v.disabled
                                ),
                                b =
                                    "string" == typeof g
                                        ? o[g]
                                        : o.number
                                        ? o.number + (g + 1)
                                        : null;
                            H(m.clicker).attr({
                                "aria-controls": t.sTableId,
                                "aria-disabled": v.disabled ? "true" : null,
                                "aria-current": v.active ? "page" : null,
                                "aria-label": b,
                                "data-dt-idx": g,
                                tabIndex: v.disabled
                                    ? -1
                                    : t.iTabIndex &&
                                      "span" !==
                                          m.clicker[0].nodeName.toLowerCase()
                                    ? t.iTabIndex
                                    : null,
                            }),
                                "number" != typeof g &&
                                    H(m.clicker).addClass(g),
                                tt(m.clicker, { action: g }, function (e) {
                                    e.preventDefault(),
                                        Xe(t, e.data.action, !0);
                                }),
                                h.push(m.display);
                        }
                        u = rt(t, "pagingContainer")(t, h);
                        s = n.find(L.activeElement).data("dt-idx");
                        n.empty().append(u);
                        void 0 !== s &&
                            n.find("[data-dt-idx=" + s + "]").trigger("focus");
                        h.length &&
                            ((l = H(h[0]).outerHeight()), 1 < r.buttons) &&
                            0 < l &&
                            H(n).height() >= 2 * l - 10 &&
                            e(
                                t,
                                n,
                                H.extend({}, r, { buttons: r.buttons - 2 })
                            );
                    })(e, r.children(), t);
                }
                var r = H("<div/>")
                    .addClass(
                        e.oClasses.paging.container +
                            (t.type ? " paging_" + t.type : "")
                    )
                    .append(
                        H("<nav>")
                            .attr("aria-label", "pagination")
                            .addClass(e.oClasses.paging.nav)
                    );
                return (
                    e.aoDrawCallback.push(n),
                    H(e.nTable).on("column-sizing.dt.DT", n),
                    r
                );
            },
            "p"
        );
    var Xt = 0;
    return (
        B.feature.register(
            "pageLength",
            function (r, e) {
                var t = r.oFeatures;
                if (!t.bPaginate || !t.bLengthChange) return null;
                e = H.extend(
                    { menu: r.aLengthMenu, text: r.oLanguage.sLengthMenu },
                    e
                );
                var t = r.oClasses.length,
                    n = r.sTableId,
                    a = e.menu,
                    o = [],
                    i = [];
                if (Array.isArray(a[0])) (o = a[0]), (i = a[1]);
                else
                    for (p = 0; p < a.length; p++)
                        H.isPlainObject(a[p])
                            ? (o.push(a[p].value), i.push(a[p].label))
                            : (o.push(a[p]), i.push(a[p]));
                for (
                    var l = e.text.match(/_MENU_$/),
                        s = e.text.match(/^_MENU_/),
                        u = e.text.replace(/_MENU_/, ""),
                        e = "<label>" + e.text + "</label>",
                        s =
                            (s
                                ? (e = "_MENU_<label>" + u + "</label>")
                                : l && (e = "<label>" + u + "</label>_MENU_"),
                            "tmp-" + +new Date()),
                        c = H("<div/>")
                            .addClass(t.container)
                            .append(
                                e.replace(
                                    "_MENU_",
                                    '<span id="' + s + '"></span>'
                                )
                            ),
                        d = [],
                        f =
                            (Array.prototype.slice
                                .call(c.find("label")[0].childNodes)
                                .forEach(function (e) {
                                    e.nodeType === Node.TEXT_NODE &&
                                        d.push({ el: e, text: e.textContent });
                                }),
                            function (t) {
                                d.forEach(function (e) {
                                    e.el.textContent = at(r, e.text, t);
                                });
                            }),
                        h = H("<select/>", {
                            "aria-controls": n,
                            class: t.select,
                        }),
                        p = 0;
                    p < o.length;
                    p++
                )
                    h[0][p] = new Option(
                        "number" == typeof i[p] ? r.fnFormatNumber(i[p]) : i[p],
                        o[p]
                    );
                return (
                    c.find("label").attr("for", "dt-length-" + Xt),
                    h.attr("id", "dt-length-" + Xt),
                    Xt++,
                    c.find("#" + s).replaceWith(h),
                    H("select", c)
                        .val(r._iDisplayLength)
                        .on("change.DT", function () {
                            We(r, H(this).val()), S(r);
                        }),
                    H(r.nTable).on("length.dt.DT", function (e, t, n) {
                        r === t && (H("select", c).val(n), f(n));
                    }),
                    f(r._iDisplayLength),
                    c
                );
            },
            "l"
        ),
        (((H.fn.dataTable = B).$ = H).fn.dataTableSettings = B.settings),
        (H.fn.dataTableExt = B.ext),
        (H.fn.DataTable = function (e) {
            return H(this).dataTable(e).api();
        }),
        H.each(B, function (e, t) {
            H.fn.DataTable[e] = t;
        }),
        B
    );
});

var gf = { exports: {} }, as = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vv;
function Qb() {
  if (vv) return as;
  vv = 1;
  var a = Symbol.for("react.transitional.element"), l = Symbol.for("react.fragment");
  function o(r, c, m) {
    var h = null;
    if (m !== void 0 && (h = "" + m), c.key !== void 0 && (h = "" + c.key), "key" in c) {
      m = {};
      for (var y in c)
        y !== "key" && (m[y] = c[y]);
    } else m = c;
    return c = m.ref, {
      $$typeof: a,
      type: r,
      key: h,
      ref: c !== void 0 ? c : null,
      props: m
    };
  }
  return as.Fragment = l, as.jsx = o, as.jsxs = o, as;
}
var gv;
function Zb() {
  return gv || (gv = 1, gf.exports = Qb()), gf.exports;
}
var f = Zb(), xf = { exports: {} }, ls = {}, Sf = { exports: {} }, bf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xv;
function Kb() {
  return xv || (xv = 1, (function(a) {
    function l(Z, st) {
      var F = Z.length;
      Z.push(st);
      t: for (; 0 < F; ) {
        var G = F - 1 >>> 1, at = Z[G];
        if (0 < c(at, st))
          Z[G] = st, Z[F] = at, F = G;
        else break t;
      }
    }
    function o(Z) {
      return Z.length === 0 ? null : Z[0];
    }
    function r(Z) {
      if (Z.length === 0) return null;
      var st = Z[0], F = Z.pop();
      if (F !== st) {
        Z[0] = F;
        t: for (var G = 0, at = Z.length, kt = at >>> 1; G < kt; ) {
          var Oe = 2 * (G + 1) - 1, Ri = Z[Oe], C = Oe + 1, H = Z[C];
          if (0 > c(Ri, F))
            C < at && 0 > c(H, Ri) ? (Z[G] = H, Z[C] = F, G = C) : (Z[G] = Ri, Z[Oe] = F, G = Oe);
          else if (C < at && 0 > c(H, F))
            Z[G] = H, Z[C] = F, G = C;
          else break t;
        }
      }
      return st;
    }
    function c(Z, st) {
      var F = Z.sortIndex - st.sortIndex;
      return F !== 0 ? F : Z.id - st.id;
    }
    if (a.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var m = performance;
      a.unstable_now = function() {
        return m.now();
      };
    } else {
      var h = Date, y = h.now();
      a.unstable_now = function() {
        return h.now() - y;
      };
    }
    var x = [], S = [], p = 1, v = null, b = 3, A = !1, j = !1, _ = !1, w = !1, L = typeof setTimeout == "function" ? setTimeout : null, q = typeof clearTimeout == "function" ? clearTimeout : null, X = typeof setImmediate < "u" ? setImmediate : null;
    function Q(Z) {
      for (var st = o(S); st !== null; ) {
        if (st.callback === null) r(S);
        else if (st.startTime <= Z)
          r(S), st.sortIndex = st.expirationTime, l(x, st);
        else break;
        st = o(S);
      }
    }
    function I(Z) {
      if (_ = !1, Q(Z), !j)
        if (o(x) !== null)
          j = !0, ot || (ot = !0, xt());
        else {
          var st = o(S);
          st !== null && Ct(I, st.startTime - Z);
        }
    }
    var ot = !1, K = -1, Y = 5, lt = -1;
    function J() {
      return w ? !0 : !(a.unstable_now() - lt < Y);
    }
    function ft() {
      if (w = !1, ot) {
        var Z = a.unstable_now();
        lt = Z;
        var st = !0;
        try {
          t: {
            j = !1, _ && (_ = !1, q(K), K = -1), A = !0;
            var F = b;
            try {
              e: {
                for (Q(Z), v = o(x); v !== null && !(v.expirationTime > Z && J()); ) {
                  var G = v.callback;
                  if (typeof G == "function") {
                    v.callback = null, b = v.priorityLevel;
                    var at = G(
                      v.expirationTime <= Z
                    );
                    if (Z = a.unstable_now(), typeof at == "function") {
                      v.callback = at, Q(Z), st = !0;
                      break e;
                    }
                    v === o(x) && r(x), Q(Z);
                  } else r(x);
                  v = o(x);
                }
                if (v !== null) st = !0;
                else {
                  var kt = o(S);
                  kt !== null && Ct(
                    I,
                    kt.startTime - Z
                  ), st = !1;
                }
              }
              break t;
            } finally {
              v = null, b = F, A = !1;
            }
            st = void 0;
          }
        } finally {
          st ? xt() : ot = !1;
        }
      }
    }
    var xt;
    if (typeof X == "function")
      xt = function() {
        X(ft);
      };
    else if (typeof MessageChannel < "u") {
      var Ut = new MessageChannel(), Kt = Ut.port2;
      Ut.port1.onmessage = ft, xt = function() {
        Kt.postMessage(null);
      };
    } else
      xt = function() {
        L(ft, 0);
      };
    function Ct(Z, st) {
      K = L(function() {
        Z(a.unstable_now());
      }, st);
    }
    a.unstable_IdlePriority = 5, a.unstable_ImmediatePriority = 1, a.unstable_LowPriority = 4, a.unstable_NormalPriority = 3, a.unstable_Profiling = null, a.unstable_UserBlockingPriority = 2, a.unstable_cancelCallback = function(Z) {
      Z.callback = null;
    }, a.unstable_forceFrameRate = function(Z) {
      0 > Z || 125 < Z ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Y = 0 < Z ? Math.floor(1e3 / Z) : 5;
    }, a.unstable_getCurrentPriorityLevel = function() {
      return b;
    }, a.unstable_next = function(Z) {
      switch (b) {
        case 1:
        case 2:
        case 3:
          var st = 3;
          break;
        default:
          st = b;
      }
      var F = b;
      b = st;
      try {
        return Z();
      } finally {
        b = F;
      }
    }, a.unstable_requestPaint = function() {
      w = !0;
    }, a.unstable_runWithPriority = function(Z, st) {
      switch (Z) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          Z = 3;
      }
      var F = b;
      b = Z;
      try {
        return st();
      } finally {
        b = F;
      }
    }, a.unstable_scheduleCallback = function(Z, st, F) {
      var G = a.unstable_now();
      switch (typeof F == "object" && F !== null ? (F = F.delay, F = typeof F == "number" && 0 < F ? G + F : G) : F = G, Z) {
        case 1:
          var at = -1;
          break;
        case 2:
          at = 250;
          break;
        case 5:
          at = 1073741823;
          break;
        case 4:
          at = 1e4;
          break;
        default:
          at = 5e3;
      }
      return at = F + at, Z = {
        id: p++,
        callback: st,
        priorityLevel: Z,
        startTime: F,
        expirationTime: at,
        sortIndex: -1
      }, F > G ? (Z.sortIndex = F, l(S, Z), o(x) === null && Z === o(S) && (_ ? (q(K), K = -1) : _ = !0, Ct(I, F - G))) : (Z.sortIndex = at, l(x, Z), j || A || (j = !0, ot || (ot = !0, xt()))), Z;
    }, a.unstable_shouldYield = J, a.unstable_wrapCallback = function(Z) {
      var st = b;
      return function() {
        var F = b;
        b = st;
        try {
          return Z.apply(this, arguments);
        } finally {
          b = F;
        }
      };
    };
  })(bf)), bf;
}
var Sv;
function kb() {
  return Sv || (Sv = 1, Sf.exports = Kb()), Sf.exports;
}
var Tf = { exports: {} }, ct = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bv;
function Jb() {
  if (bv) return ct;
  bv = 1;
  var a = Symbol.for("react.transitional.element"), l = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), m = Symbol.for("react.consumer"), h = Symbol.for("react.context"), y = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), S = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), v = Symbol.for("react.activity"), b = Symbol.for("react.view_transition"), A = Symbol.iterator;
  function j(C) {
    return C === null || typeof C != "object" ? null : (C = A && C[A] || C["@@iterator"], typeof C == "function" ? C : null);
  }
  var _ = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, w = Object.assign, L = {};
  function q(C, H, nt) {
    this.props = C, this.context = H, this.refs = L, this.updater = nt || _;
  }
  q.prototype.isReactComponent = {}, q.prototype.setState = function(C, H) {
    if (typeof C != "object" && typeof C != "function" && C != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, C, H, "setState");
  }, q.prototype.forceUpdate = function(C) {
    this.updater.enqueueForceUpdate(this, C, "forceUpdate");
  };
  function X() {
  }
  X.prototype = q.prototype;
  function Q(C, H, nt) {
    this.props = C, this.context = H, this.refs = L, this.updater = nt || _;
  }
  var I = Q.prototype = new X();
  I.constructor = Q, w(I, q.prototype), I.isPureReactComponent = !0;
  var ot = Array.isArray;
  function K() {
  }
  var Y = { H: null, A: null, T: null, S: null }, lt = Object.prototype.hasOwnProperty;
  function J(C, H, nt) {
    var it = nt.ref;
    return {
      $$typeof: a,
      type: C,
      key: H,
      ref: it !== void 0 ? it : null,
      props: nt
    };
  }
  function ft(C, H) {
    return J(C.type, H, C.props);
  }
  function xt(C) {
    return typeof C == "object" && C !== null && C.$$typeof === a;
  }
  function Ut(C) {
    var H = { "=": "=0", ":": "=2" };
    return "$" + C.replace(/[=:]/g, function(nt) {
      return H[nt];
    });
  }
  var Kt = /\/+/g;
  function Ct(C, H) {
    return typeof C == "object" && C !== null && C.key != null ? Ut("" + C.key) : H.toString(36);
  }
  function Z(C) {
    switch (C.status) {
      case "fulfilled":
        return C.value;
      case "rejected":
        throw C.reason;
      default:
        switch (typeof C.status == "string" ? C.then(K, K) : (C.status = "pending", C.then(
          function(H) {
            C.status === "pending" && (C.status = "fulfilled", C.value = H);
          },
          function(H) {
            C.status === "pending" && (C.status = "rejected", C.reason = H);
          }
        )), C.status) {
          case "fulfilled":
            return C.value;
          case "rejected":
            throw C.reason;
        }
    }
    throw C;
  }
  function st(C, H, nt, it, bt) {
    var Tt = typeof C;
    (Tt === "undefined" || Tt === "boolean") && (C = null);
    var jt = !1;
    if (C === null) jt = !0;
    else
      switch (Tt) {
        case "bigint":
        case "string":
        case "number":
          jt = !0;
          break;
        case "object":
          switch (C.$$typeof) {
            case a:
            case l:
              jt = !0;
              break;
            case p:
              return jt = C._init, st(
                jt(C._payload),
                H,
                nt,
                it,
                bt
              );
          }
      }
    if (jt)
      return bt = bt(C), jt = it === "" ? "." + Ct(C, 0) : it, ot(bt) ? (nt = "", jt != null && (nt = jt.replace(Kt, "$&/") + "/"), st(bt, H, nt, "", function(On) {
        return On;
      })) : bt != null && (xt(bt) && (bt = ft(
        bt,
        nt + (bt.key == null || C && C.key === bt.key ? "" : ("" + bt.key).replace(
          Kt,
          "$&/"
        ) + "/") + jt
      )), H.push(bt)), 1;
    jt = 0;
    var tt = it === "" ? "." : it + ":";
    if (ot(C))
      for (var rt = 0; rt < C.length; rt++)
        it = C[rt], Tt = tt + Ct(it, rt), jt += st(
          it,
          H,
          nt,
          Tt,
          bt
        );
    else if (rt = j(C), typeof rt == "function")
      for (C = rt.call(C), rt = 0; !(it = C.next()).done; )
        it = it.value, Tt = tt + Ct(it, rt++), jt += st(
          it,
          H,
          nt,
          Tt,
          bt
        );
    else if (Tt === "object") {
      if (typeof C.then == "function")
        return st(
          Z(C),
          H,
          nt,
          it,
          bt
        );
      throw H = String(C), Error(
        "Objects are not valid as a React child (found: " + (H === "[object Object]" ? "object with keys {" + Object.keys(C).join(", ") + "}" : H) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return jt;
  }
  function F(C, H, nt) {
    if (C == null) return C;
    var it = [], bt = 0;
    return st(C, it, "", "", function(Tt) {
      return H.call(nt, Tt, bt++);
    }), it;
  }
  function G(C) {
    if (C._status === -1) {
      var H = C._result, nt = H();
      nt.then(
        function(it) {
          (C._status === 0 || C._status === -1) && (C._status = 1, C._result = it, nt.status === void 0 && (nt.status = "fulfilled", nt.value = it));
        },
        function(it) {
          (C._status === 0 || C._status === -1) && (C._status = 2, C._result = it, nt.status === void 0 && (nt.status = "rejected", nt.reason = it));
        }
      ), C._status === -1 && (C._status = 0, C._result = nt);
    }
    if (C._status === 1) return C._result.default;
    throw C._result;
  }
  var at = typeof reportError == "function" ? reportError : function(C) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var H = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof C == "object" && C !== null && typeof C.message == "string" ? String(C.message) : String(C),
        error: C
      });
      if (!window.dispatchEvent(H)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", C);
      return;
    }
    console.error(C);
  };
  function kt(C) {
    var H = Y.T, nt = {};
    nt.types = H !== null ? H.types : null, Y.T = nt;
    try {
      var it = C(), bt = Y.S;
      bt !== null && bt(nt, it), typeof it == "object" && it !== null && typeof it.then == "function" && it.then(K, at);
    } catch (Tt) {
      at(Tt);
    } finally {
      H !== null && nt.types !== null && (H.types = nt.types), Y.T = H;
    }
  }
  function Oe(C) {
    var H = Y.T;
    if (H !== null) {
      var nt = H.types;
      nt === null ? H.types = [C] : nt.indexOf(C) === -1 && nt.push(C);
    } else kt(Oe.bind(null, C));
  }
  var Ri = {
    map: F,
    forEach: function(C, H, nt) {
      F(
        C,
        function() {
          H.apply(this, arguments);
        },
        nt
      );
    },
    count: function(C) {
      var H = 0;
      return F(C, function() {
        H++;
      }), H;
    },
    toArray: function(C) {
      return F(C, function(H) {
        return H;
      }) || [];
    },
    only: function(C) {
      if (!xt(C))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return C;
    }
  };
  return ct.Activity = v, ct.Children = Ri, ct.Component = q, ct.Fragment = o, ct.Profiler = c, ct.PureComponent = Q, ct.StrictMode = r, ct.Suspense = x, ct.ViewTransition = b, ct.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Y, ct.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(C) {
      return Y.H.useMemoCache(C);
    }
  }, ct.addTransitionType = Oe, ct.cache = function(C) {
    return function() {
      return C.apply(null, arguments);
    };
  }, ct.cacheSignal = function() {
    return null;
  }, ct.cloneElement = function(C, H, nt) {
    if (C == null)
      throw Error(
        "The argument must be a React element, but you passed " + C + "."
      );
    var it = w({}, C.props), bt = C.key;
    if (H != null)
      for (Tt in H.key !== void 0 && (bt = "" + H.key), H)
        !lt.call(H, Tt) || Tt === "key" || Tt === "__self" || Tt === "__source" || Tt === "ref" && H.ref === void 0 || (it[Tt] = H[Tt]);
    var Tt = arguments.length - 2;
    if (Tt === 1) it.children = nt;
    else if (1 < Tt) {
      for (var jt = Array(Tt), tt = 0; tt < Tt; tt++)
        jt[tt] = arguments[tt + 2];
      it.children = jt;
    }
    return J(C.type, bt, it);
  }, ct.createContext = function(C) {
    return C = {
      $$typeof: h,
      _currentValue: C,
      _currentValue2: C,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, C.Provider = C, C.Consumer = {
      $$typeof: m,
      _context: C
    }, C;
  }, ct.createElement = function(C, H, nt) {
    var it, bt = {}, Tt = null;
    if (H != null)
      for (it in H.key !== void 0 && (Tt = "" + H.key), H)
        lt.call(H, it) && it !== "key" && it !== "__self" && it !== "__source" && (bt[it] = H[it]);
    var jt = arguments.length - 2;
    if (jt === 1) bt.children = nt;
    else if (1 < jt) {
      for (var tt = Array(jt), rt = 0; rt < jt; rt++)
        tt[rt] = arguments[rt + 2];
      bt.children = tt;
    }
    if (C && C.defaultProps)
      for (it in jt = C.defaultProps, jt)
        bt[it] === void 0 && (bt[it] = jt[it]);
    return J(C, Tt, bt);
  }, ct.createRef = function() {
    return { current: null };
  }, ct.forwardRef = function(C) {
    return { $$typeof: y, render: C };
  }, ct.isValidElement = xt, ct.lazy = function(C) {
    return {
      $$typeof: p,
      _payload: { _status: -1, _result: C },
      _init: G
    };
  }, ct.memo = function(C, H) {
    return {
      $$typeof: S,
      type: C,
      compare: H === void 0 ? null : H
    };
  }, ct.startTransition = kt, ct.unstable_useCacheRefresh = function() {
    return Y.H.useCacheRefresh();
  }, ct.use = function(C) {
    return Y.H.use(C);
  }, ct.useActionState = function(C, H, nt) {
    return Y.H.useActionState(C, H, nt);
  }, ct.useCallback = function(C, H) {
    return Y.H.useCallback(C, H);
  }, ct.useContext = function(C) {
    return Y.H.useContext(C);
  }, ct.useDebugValue = function() {
  }, ct.useDeferredValue = function(C, H) {
    return Y.H.useDeferredValue(C, H);
  }, ct.useEffect = function(C, H) {
    return Y.H.useEffect(C, H);
  }, ct.useEffectEvent = function(C) {
    return Y.H.useEffectEvent(C);
  }, ct.useId = function() {
    return Y.H.useId();
  }, ct.useImperativeHandle = function(C, H, nt) {
    return Y.H.useImperativeHandle(C, H, nt);
  }, ct.useInsertionEffect = function(C, H) {
    return Y.H.useInsertionEffect(C, H);
  }, ct.useLayoutEffect = function(C, H) {
    return Y.H.useLayoutEffect(C, H);
  }, ct.useMemo = function(C, H) {
    return Y.H.useMemo(C, H);
  }, ct.useOptimistic = function(C, H) {
    return Y.H.useOptimistic(C, H);
  }, ct.useReducer = function(C, H, nt) {
    return Y.H.useReducer(C, H, nt);
  }, ct.useRef = function(C) {
    return Y.H.useRef(C);
  }, ct.useState = function(C) {
    return Y.H.useState(C);
  }, ct.useSyncExternalStore = function(C, H, nt) {
    return Y.H.useSyncExternalStore(
      C,
      H,
      nt
    );
  }, ct.useTransition = function() {
    return Y.H.useTransition();
  }, ct.version = "19.3.0", ct;
}
var Tv;
function pd() {
  return Tv || (Tv = 1, Tf.exports = Jb()), Tf.exports;
}
var Ef = { exports: {} }, de = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ev;
function Fb() {
  if (Ev) return de;
  Ev = 1;
  var a = pd();
  function l(p) {
    var v = "https://react.dev/errors/" + p;
    if (1 < arguments.length) {
      v += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var b = 2; b < arguments.length; b++)
        v += "&args[]=" + encodeURIComponent(arguments[b]);
    }
    return "Minified React error #" + p + "; visit " + v + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function o() {
  }
  var r = {
    d: {
      f: o,
      r: function() {
        throw Error(l(522));
      },
      D: o,
      C: o,
      L: o,
      m: o,
      X: o,
      S: o,
      M: o
    },
    p: 0,
    findDOMNode: null
  }, c = Symbol.for("react.portal"), m = Symbol.for("react.recoverable"), h = Symbol.for("react.optimistic_key");
  function y(p, v, b) {
    var A = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: c,
      key: A == null ? null : A === h ? h : "" + A,
      children: p,
      containerInfo: v,
      implementation: b
    };
  }
  var x = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function S(p, v) {
    if (p === "font") return "";
    if (typeof v == "string")
      return v === "use-credentials" ? v : "";
  }
  return de.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, de.browser = function(p) {
    return { $$typeof: m, _reason: p };
  }, de.createPortal = function(p, v) {
    var b = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!v || v.nodeType !== 1 && v.nodeType !== 9 && v.nodeType !== 11)
      throw Error(l(299));
    return y(p, v, null, b);
  }, de.flushSync = function(p) {
    var v = x.T, b = r.p;
    try {
      if (x.T = null, r.p = 2, p) return p();
    } finally {
      x.T = v, r.p = b, r.d.f();
    }
  }, de.preconnect = function(p, v) {
    typeof p == "string" && (v ? (v = v.crossOrigin, v = typeof v == "string" ? v === "use-credentials" ? v : "" : void 0) : v = null, r.d.C(p, v));
  }, de.prefetchDNS = function(p) {
    typeof p == "string" && r.d.D(p);
  }, de.preinit = function(p, v) {
    if (typeof p == "string" && v && typeof v.as == "string") {
      var b = v.as, A = S(b, v.crossOrigin), j = typeof v.integrity == "string" ? v.integrity : void 0, _ = typeof v.fetchPriority == "string" ? v.fetchPriority : void 0;
      b === "style" ? r.d.S(
        p,
        typeof v.precedence == "string" ? v.precedence : void 0,
        {
          crossOrigin: A,
          integrity: j,
          fetchPriority: _
        }
      ) : b === "script" && r.d.X(p, {
        crossOrigin: A,
        integrity: j,
        fetchPriority: _,
        nonce: typeof v.nonce == "string" ? v.nonce : void 0
      });
    }
  }, de.preinitModule = function(p, v) {
    if (typeof p == "string")
      if (typeof v == "object" && v !== null) {
        if (v.as == null || v.as === "script") {
          var b = S(
            v.as,
            v.crossOrigin
          );
          r.d.M(p, {
            crossOrigin: b,
            integrity: typeof v.integrity == "string" ? v.integrity : void 0,
            nonce: typeof v.nonce == "string" ? v.nonce : void 0,
            fetchPriority: typeof v.fetchPriority == "string" ? v.fetchPriority : void 0
          });
        }
      } else v == null && r.d.M(p);
  }, de.preload = function(p, v) {
    if (typeof p == "string" && typeof v == "object" && v !== null && typeof v.as == "string") {
      var b = v.as, A = S(b, v.crossOrigin);
      r.d.L(p, b, {
        crossOrigin: A,
        integrity: typeof v.integrity == "string" ? v.integrity : void 0,
        nonce: typeof v.nonce == "string" ? v.nonce : void 0,
        type: typeof v.type == "string" ? v.type : void 0,
        fetchPriority: typeof v.fetchPriority == "string" ? v.fetchPriority : void 0,
        referrerPolicy: typeof v.referrerPolicy == "string" ? v.referrerPolicy : void 0,
        imageSrcSet: typeof v.imageSrcSet == "string" ? v.imageSrcSet : void 0,
        imageSizes: typeof v.imageSizes == "string" ? v.imageSizes : void 0,
        media: typeof v.media == "string" ? v.media : void 0
      });
    }
  }, de.preloadModule = function(p, v) {
    if (typeof p == "string")
      if (v) {
        var b = S(v.as, v.crossOrigin);
        r.d.m(p, {
          as: typeof v.as == "string" && v.as !== "script" ? v.as : void 0,
          crossOrigin: b,
          integrity: typeof v.integrity == "string" ? v.integrity : void 0,
          nonce: typeof v.nonce == "string" ? v.nonce : void 0,
          fetchPriority: typeof v.fetchPriority == "string" ? v.fetchPriority : void 0
        });
      } else r.d.m(p);
  }, de.requestFormReset = function(p) {
    r.d.r(p);
  }, de.unstable_batchedUpdates = function(p, v) {
    return p(v);
  }, de.useFormState = function(p, v, b) {
    return x.H.useFormState(p, v, b);
  }, de.useFormStatus = function() {
    return x.H.useHostTransitionStatus();
  }, de.version = "19.3.0", de;
}
var jv;
function Pb() {
  if (jv) return Ef.exports;
  jv = 1;
  function a() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (l) {
        console.error(l);
      }
  }
  return a(), Ef.exports = Fb(), Ef.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Av;
function Ib() {
  if (Av) return ls;
  Av = 1;
  var a = kb(), l = pd(), o = Pb();
  function r(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        e += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function c(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function m(t) {
    for (var e = t, n = e; n && !n.alternate; )
      e = n, (e.flags & 4098) !== 0 && (t = e.return), n = e.return;
    for (; e.return; ) e = e.return;
    return e.tag === 3 ? t : null;
  }
  function h(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function y(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function x(t) {
    if (m(t) !== t)
      throw Error(r(188));
  }
  function S(t) {
    var e = t.alternate;
    if (!e) {
      if (e = m(t), e === null) throw Error(r(188));
      return e !== t ? null : t;
    }
    for (var n = t, i = e; ; ) {
      var s = n.return;
      if (s === null) break;
      var u = s.alternate;
      if (u === null) {
        if (i = s.return, i !== null) {
          n = i;
          continue;
        }
        break;
      }
      if (s.child === u.child) {
        for (u = s.child; u; ) {
          if (u === n) return x(s), t;
          if (u === i) return x(s), e;
          u = u.sibling;
        }
        throw Error(r(188));
      }
      if (n.return !== i.return) n = s, i = u;
      else {
        for (var d = !1, g = s.child; g; ) {
          if (g === n) {
            d = !0, n = s, i = u;
            break;
          }
          if (g === i) {
            d = !0, i = s, n = u;
            break;
          }
          g = g.sibling;
        }
        if (!d) {
          for (g = u.child; g; ) {
            if (g === n) {
              d = !0, n = u, i = s;
              break;
            }
            if (g === i) {
              d = !0, i = u, n = s;
              break;
            }
            g = g.sibling;
          }
          if (!d) throw Error(r(189));
        }
      }
      if (n.alternate !== i) throw Error(r(190));
    }
    if (n.tag !== 3) throw Error(r(188));
    return n.stateNode.current === n ? t : e;
  }
  function p(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (e = p(t), e !== null) return e;
      t = t.sibling;
    }
    return null;
  }
  function v(t, e, n, i, s, u) {
    for (; t !== null; ) {
      if ((t.tag === 5 || t.tag === 27 || t.tag === 6) && n(t, i, s, u) || (t.tag !== 22 || t.memoizedState === null) && (e || t.tag !== 5 && t.tag !== 27) && v(
        t.child,
        e,
        n,
        i,
        s,
        u
      ))
        return !0;
      t = t.sibling;
    }
    return !1;
  }
  function b(t) {
    for (t = t.return; t !== null; ) {
      if (t.tag === 3 || t.tag === 5 || t.tag === 27) return t;
      t = t.return;
    }
    return null;
  }
  function A(t) {
    var e = !1;
    for (t = t.return; t !== null && (t.tag === 4 && (e = !0), !(t.tag === 3 || t.tag === 5 || t.tag === 27)); )
      t = t.return;
    return e;
  }
  function j(t) {
    var e = [null, null], n = b(t);
    return n === null || _(
      e,
      t,
      n.child,
      { foundSelf: !1 }
    ), e;
  }
  function _(t, e, n, i) {
    for (; n !== null; ) {
      if (n === e) i.foundSelf = !0;
      else if (n.tag === 5 || n.tag === 27 || n.tag === 6) {
        if (i.foundSelf) return t[1] = n, !0;
        t[0] = n;
      } else if ((n.tag !== 22 || n.memoizedState === null) && _(
        t,
        e,
        n.child,
        i
      ))
        return !0;
      n = n.sibling;
    }
    return !1;
  }
  function w(t) {
    switch (t.tag) {
      case 5:
      case 27:
      case 6:
        return t.stateNode;
      case 3:
        return t.stateNode.containerInfo;
      default:
        throw Error(r(559));
    }
  }
  var L = null, q = null;
  function X(t, e, n) {
    return t === n ? !0 : t === e ? (L = t, !0) : !1;
  }
  function Q(t, e, n) {
    return t === n ? (q = t, !1) : t === e ? (q !== null && (L = t), !0) : !1;
  }
  function I(t) {
    if (t === null) return null;
    do
      t = t === null ? null : t.return;
    while (t && t.tag !== 5 && t.tag !== 27 && t.tag !== 3);
    return t || null;
  }
  function ot(t, e, n) {
    for (var i = 0, s = t; s; s = n(s)) i++;
    s = 0;
    for (var u = e; u; u = n(u)) s++;
    for (; 0 < i - s; ) t = n(t), i--;
    for (; 0 < s - i; ) e = n(e), s--;
    for (; i--; ) {
      if (t === e || e !== null && t === e.alternate)
        return t;
      t = n(t), e = n(e);
    }
    return null;
  }
  var K = Object.assign, Y = Symbol.for("react.element"), lt = Symbol.for("react.transitional.element"), J = Symbol.for("react.portal"), ft = Symbol.for("react.fragment"), xt = Symbol.for("react.strict_mode"), Ut = Symbol.for("react.profiler"), Kt = Symbol.for("react.consumer"), Ct = Symbol.for("react.context"), Z = Symbol.for("react.forward_ref"), st = Symbol.for("react.suspense"), F = Symbol.for("react.suspense_list"), G = Symbol.for("react.memo"), at = Symbol.for("react.lazy"), kt = Symbol.for("react.activity"), Oe = Symbol.for("react.legacy_hidden"), Ri = Symbol.for("react.memo_cache_sentinel"), C = Symbol.for("react.view_transition"), H = Symbol.for("react.recoverable"), nt = Symbol.iterator;
  function it(t) {
    return t === null || typeof t != "object" ? null : (t = nt && t[nt] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var bt = Symbol.for("react.client.reference");
  function Tt(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === bt ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case ft:
        return "Fragment";
      case Ut:
        return "Profiler";
      case xt:
        return "StrictMode";
      case st:
        return "Suspense";
      case F:
        return "SuspenseList";
      case kt:
        return "Activity";
      case C:
        return "ViewTransition";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case J:
          return "Portal";
        case Ct:
          return t.displayName || "Context";
        case Kt:
          return (t._context.displayName || "Context") + ".Consumer";
        case Z:
          var e = t.render;
          return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case G:
          return e = t.displayName || null, e !== null ? e : Tt(t.type) || "Memo";
        case at:
          e = t._payload, t = t._init;
          try {
            return Tt(t(e));
          } catch {
          }
      }
    return null;
  }
  var jt = Array.isArray, tt = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, rt = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, On = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, Uo = [], ra = -1;
  function cn(t) {
    return { current: t };
  }
  function le(t) {
    0 > ra || (t.current = Uo[ra], Uo[ra] = null, ra--);
  }
  function Bt(t, e) {
    ra++, Uo[ra] = t.current, t.current = e;
  }
  var fn = cn(null), cl = cn(null), kn = cn(null), As = cn(null);
  function Cs(t, e) {
    switch (Bt(kn, e), Bt(cl, t), Bt(fn, null), e.nodeType) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? Cp(t) : 0;
        break;
      default:
        if (t = e.tagName, e = e.namespaceURI)
          e = Cp(e), t = Np(e, t);
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    le(fn), Bt(fn, t);
  }
  function ca() {
    le(fn), le(cl), le(kn);
  }
  function Bo(t) {
    var e = t.memoizedState;
    e !== null && (Ia._currentValue = e.memoizedState, Bt(As, t)), e = fn.current;
    var n = Np(e, t.type);
    e !== n && (Bt(cl, t), Bt(fn, n));
  }
  function Ns(t) {
    cl.current === t && (le(fn), le(cl)), As.current === t && (le(As), Ia._currentValue = On);
  }
  var Lo, kd;
  function Jn(t) {
    if (Lo === void 0)
      try {
        throw Error();
      } catch (n) {
        var e = n.stack.trim().match(/\n( *(at )?)/);
        Lo = e && e[1] || "", kd = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Lo + t + kd;
  }
  var Ho = !1;
  function Yo(t, e) {
    if (!t || Ho) return "";
    Ho = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var i = {
        DetermineComponentFrameRoot: function() {
          try {
            if (e) {
              var B = function() {
                throw Error();
              };
              if (Object.defineProperty(B.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(B, []);
                } catch (k) {
                  var N = k;
                }
                Reflect.construct(t, [], B);
              } else {
                try {
                  B.call();
                } catch (k) {
                  N = k;
                }
                B = !1;
                try {
                  var R = Object.getOwnPropertyDescriptor(
                    t.prototype,
                    "props"
                  );
                  Object.defineProperty(t.prototype, "props", {
                    configurable: !0,
                    set: function() {
                      throw Error();
                    }
                  }), B = !0, new t();
                } finally {
                  B && (R !== void 0 ? Object.defineProperty(t.prototype, "props", R) : delete t.prototype.props);
                }
              }
            } else {
              try {
                throw Error();
              } catch (k) {
                N = k;
              }
              (B = t()) && typeof B.catch == "function" && B.catch(function() {
              });
            }
          } catch (k) {
            if (k && N && typeof k.stack == "string")
              return [k.stack, N.stack];
          }
          return [null, null];
        }
      };
      i.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var s = Object.getOwnPropertyDescriptor(
        i.DetermineComponentFrameRoot,
        "name"
      );
      s && s.configurable && Object.defineProperty(
        i.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var u = i.DetermineComponentFrameRoot(), d = u[0], g = u[1];
      if (d && g) {
        var T = d.split(`
`), D = g.split(`
`);
        for (s = i = 0; i < T.length && !T[i].includes("DetermineComponentFrameRoot"); )
          i++;
        for (; s < D.length && !D[s].includes(
          "DetermineComponentFrameRoot"
        ); )
          s++;
        if (i === T.length || s === D.length)
          for (i = T.length - 1, s = D.length - 1; 1 <= i && 0 <= s && T[i] !== D[s]; )
            s--;
        for (; 1 <= i && 0 <= s; i--, s--)
          if (T[i] !== D[s]) {
            if (i !== 1 || s !== 1)
              do
                if (i--, s--, 0 > s || T[i] !== D[s]) {
                  var z = `
` + T[i].replace(" at new ", " at ");
                  return t.displayName && z.includes("<anonymous>") && (z = z.replace("<anonymous>", t.displayName)), z;
                }
              while (1 <= i && 0 <= s);
            break;
          }
      }
    } finally {
      Ho = !1, Error.prepareStackTrace = n;
    }
    return (n = t ? t.displayName || t.name : "") ? Jn(n) : "";
  }
  function J1(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Jn(t.type);
      case 16:
        return Jn("Lazy");
      case 13:
        return t.child !== e && e !== null ? Jn("Suspense Fallback") : Jn("Suspense");
      case 19:
        return Jn("SuspenseList");
      case 0:
      case 15:
        return Yo(t.type, !1);
      case 11:
        return Yo(t.type.render, !1);
      case 1:
        return Yo(t.type, !0);
      case 31:
        return Jn("Activity");
      case 30:
        return Jn("ViewTransition");
      default:
        return "";
    }
  }
  function Jd(t) {
    try {
      var e = "", n = null;
      do
        e += J1(t, n), n = t, t = t.return;
      while (t);
      return e;
    } catch (i) {
      return `
Error generating stack: ` + i.message + `
` + i.stack;
    }
  }
  var qo = Object.prototype.hasOwnProperty, Go = a.unstable_scheduleCallback, Xo = a.unstable_cancelCallback, F1 = a.unstable_shouldYield, P1 = a.unstable_requestPaint, Re = a.unstable_now, I1 = a.unstable_getCurrentPriorityLevel, Fd = a.unstable_ImmediatePriority, Pd = a.unstable_UserBlockingPriority, Ms = a.unstable_NormalPriority, $1 = a.unstable_LowPriority, Id = a.unstable_IdlePriority, W1 = a.log, tx = a.unstable_setDisableYieldValue, fl = null, ze = null;
  function Fn(t) {
    if (typeof W1 == "function" && tx(t), ze && typeof ze.setStrictMode == "function")
      try {
        ze.setStrictMode(fl, t);
      } catch {
      }
  }
  var we = Math.clz32 ? Math.clz32 : ix, ex = Math.log, nx = Math.LN2;
  function ix(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (ex(t) / nx | 0) | 0;
  }
  var Ds = 256, Os = 262144, Rs = 4194304;
  function zi(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return t & -t;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function zs(t, e, n) {
    var i = t.pendingLanes;
    if (i === 0) return 0;
    var s = 0, u = t.suspendedLanes, d = t.pingedLanes;
    t = t.warmLanes;
    var g = i & 134217727;
    return g !== 0 ? (i = g & ~u, i !== 0 ? s = zi(i) : (d &= g, d !== 0 ? s = zi(d) : n || (n = g & ~t, n !== 0 && (s = zi(n))))) : (g = i & ~u, g !== 0 ? s = zi(g) : d !== 0 ? s = zi(d) : n || (n = i & ~t, n !== 0 && (s = zi(n)))), s === 0 ? 0 : e !== 0 && e !== s && (e & u) === 0 && (u = s & -s, n = e & -e, u >= n || u === 32 && (n & 4194048) !== 0) ? e : s;
  }
  function dl(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function $d(t, e) {
    (e & 8) !== 0 && (e |= e & 32);
    var n = t.entangledLanes;
    if (n !== 0)
      for (t = t.entanglements, n &= e; 0 < n; ) {
        var i = 31 - we(n), s = 1 << i;
        e |= t[i], n &= ~s;
      }
    return e;
  }
  function ax(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Wd() {
    var t = Rs;
    return Rs <<= 1, (Rs & 62914560) === 0 && (Rs = 4194304), t;
  }
  function Qo(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e;
  }
  function hl(t, e) {
    t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function lx(t, e, n, i, s, u) {
    var d = t.pendingLanes;
    t.pendingLanes = n, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= n, t.entangledLanes &= n, t.errorRecoveryDisabledLanes &= n, t.shellSuspendCounter = 0;
    var g = t.entanglements, T = t.expirationTimes, D = t.hiddenUpdates;
    for (n = d & ~n; 0 < n; ) {
      var z = 31 - we(n), B = 1 << z;
      g[z] = 0, T[z] = -1;
      var N = D[z];
      if (N !== null)
        for (D[z] = null, z = 0; z < N.length; z++) {
          var R = N[z];
          R !== null && (R.lane &= -536870913);
        }
      n &= ~B;
    }
    i !== 0 && th(t, i, 0), u !== 0 && s === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(d & ~e));
  }
  function th(t, e, n) {
    t.pendingLanes |= e, t.suspendedLanes &= ~e;
    var i = 31 - we(e);
    t.entangledLanes |= e, t.entanglements[i] = t.entanglements[i] | 1073741824 | n & 261930;
  }
  function eh(t, e) {
    var n = t.entangledLanes |= e;
    for (t = t.entanglements; n; ) {
      var i = 31 - we(n), s = 1 << i;
      s & e | t[i] & e && (t[i] |= e), n &= ~s;
    }
  }
  function nh(t, e) {
    var n = e & -e;
    return n = (n & 42) !== 0 ? 1 : Zo(n), (n & (t.suspendedLanes | e)) !== 0 ? 0 : n;
  }
  function Zo(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function Ko(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function ih() {
    var t = rt.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : cv(t.type));
  }
  function ah(t, e) {
    var n = rt.p;
    try {
      return rt.p = t, e();
    } finally {
      rt.p = n;
    }
  }
  var Rn = Math.random().toString(36).slice(2), se = "__reactFiber$" + Rn, Te = "__reactProps$" + Rn, fa = "__reactContainer$" + Rn, lh = "__reactEvents$" + Rn, sx = "__reactListeners$" + Rn, ux = "__reactHandles$" + Rn, sh = "__reactResources$" + Rn, ml = "__reactMarker$" + Rn, ws = "__reactLoad$" + Rn;
  function _s(t) {
    delete t[se], delete t[Te], delete t[sx], delete t[ux];
  }
  function wi(t) {
    var e;
    if (e = t[se]) return e;
    for (var n = t.parentNode; n; ) {
      if (e = n[fa] || n[se]) {
        if (n = e.alternate, e.child !== null || n !== null && n.child !== null)
          for (t = Qp(t); t !== null; ) {
            if (n = t[se]) return n;
            t = Qp(t);
          }
        return e;
      }
      t = n, n = t.parentNode;
    }
    return null;
  }
  function da(t) {
    if (t = t[se] || t[fa]) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function yl(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(r(33));
  }
  function ha(t) {
    var e = t[sh];
    return e || (e = t[sh] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
  }
  function ee(t) {
    t[ml] = !0;
  }
  function uh(t) {
    t[ws] = void 0;
  }
  var oh = /* @__PURE__ */ new Set(), rh = {};
  function _i(t, e) {
    ma(t, e), ma(t + "Capture", e);
  }
  function ma(t, e) {
    for (rh[t] = e, t = 0; t < e.length; t++)
      oh.add(e[t]);
  }
  var ox = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), ch = {}, fh = {};
  function rx(t) {
    return qo.call(fh, t) ? !0 : qo.call(ch, t) ? !1 : ox.test(t) ? fh[t] = !0 : (ch[t] = !0, !1);
  }
  var Et = !1;
  function dh() {
    var t = Et;
    return Et = !1, t;
  }
  function Vs(t, e, n) {
    if (rx(e))
      if (n === null) t.removeAttribute(e);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var i = e.toLowerCase().slice(0, 5);
            if (i !== "data-" && i !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, n);
      }
  }
  function Us(t, e, n) {
    if (n === null) t.removeAttribute(e);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, n);
    }
  }
  function zn(t, e, n, i) {
    if (i === null) t.removeAttribute(n);
    else {
      switch (typeof i) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(n);
          return;
      }
      t.setAttributeNS(e, n, i);
    }
  }
  function _e(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function hh(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function cx(t, e, n) {
    var i = Object.getOwnPropertyDescriptor(
      t.constructor.prototype,
      e
    );
    if (!t.hasOwnProperty(e) && typeof i < "u" && typeof i.get == "function" && typeof i.set == "function") {
      var s = i.get, u = i.set;
      return Object.defineProperty(t, e, {
        configurable: !0,
        get: function() {
          return s.call(this);
        },
        set: function(d) {
          n = "" + d, u.call(this, d);
        }
      }), Object.defineProperty(t, e, {
        enumerable: i.enumerable
      }), {
        getValue: function() {
          return n;
        },
        setValue: function(d) {
          n = "" + d;
        },
        stopTracking: function() {
          t._valueTracker = null, delete t[e];
        }
      };
    }
  }
  function ko(t) {
    if (!t._valueTracker) {
      var e = hh(t) ? "checked" : "value";
      t._valueTracker = cx(
        t,
        e,
        "" + t[e]
      );
    }
  }
  function mh(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var n = e.getValue(), i = "";
    return t && (i = hh(t) ? t.checked ? "true" : "false" : t.value), t = i, t !== n ? (e.setValue(t), !0) : !1;
  }
  var fx = /[\n"\\]/g;
  function Ge(t) {
    return t.replace(
      fx,
      function(e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Jo(t, e, n, i, s, u, d, g) {
    t.name = "", d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? t.type = d : t.removeAttribute("type"), e != null ? d === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + _e(e)) : t.value !== "" + _e(e) && (t.value = "" + _e(e)) : d !== "submit" && d !== "reset" || t.removeAttribute("value"), e != null ? d === "number" && t.value == e ? Fo(t, _e(t.value)) : Fo(t, _e(e)) : n != null ? Fo(t, _e(n)) : i != null && t.removeAttribute("value"), s == null && u != null && (t.defaultChecked = !!u), s != null && (t.checked = s && typeof s != "function" && typeof s != "symbol"), g != null && typeof g != "function" && typeof g != "symbol" && typeof g != "boolean" ? t.name = "" + _e(g) : t.removeAttribute("name");
  }
  function yh(t, e, n, i, s, u, d, g) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (t.type = u), e != null || n != null) {
      if (!(u !== "submit" && u !== "reset" || e != null)) {
        ko(t);
        return;
      }
      n = n != null ? "" + _e(n) : "", e = e != null ? "" + _e(e) : n, g || e === t.value || (t.value = e), t.defaultValue = e;
    }
    i = i ?? s, i = typeof i != "function" && typeof i != "symbol" && !!i, t.checked = g ? t.checked : !!i, t.defaultChecked = !!i, d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (t.name = d), ko(t);
  }
  function Fo(t, e) {
    t.defaultValue !== "" + e && (t.defaultValue = "" + e);
  }
  function ya(t, e, n, i) {
    if (t = t.options, e) {
      e = {};
      for (var s = 0; s < n.length; s++)
        e["$" + n[s]] = !0;
      for (n = 0; n < t.length; n++)
        s = e.hasOwnProperty("$" + t[n].value), t[n].selected !== s && (t[n].selected = s), s && i && (t[n].defaultSelected = !0);
    } else {
      for (n = "" + _e(n), e = null, s = 0; s < t.length; s++) {
        if (t[s].value === n) {
          t[s].selected = !0, i && (t[s].defaultSelected = !0);
          return;
        }
        e !== null || t[s].disabled || (e = t[s]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function ph(t, e, n) {
    if (e != null && (e = "" + _e(e), e !== t.value && (t.value = e), n == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = n != null ? "" + _e(n) : "";
  }
  function vh(t, e, n, i) {
    if (e == null) {
      if (i != null) {
        if (n != null) throw Error(r(92));
        if (jt(i)) {
          if (1 < i.length) throw Error(r(93));
          i = i[0];
        }
        n = i;
      }
      n == null && (n = ""), e = n;
    }
    n = _e(e), t.defaultValue = n, i = t.textContent, i === n && i !== "" && i !== null && (t.value = i), ko(t);
  }
  function pa(t, e) {
    if (e) {
      var n = t.firstChild;
      if (n && n === t.lastChild && n.nodeType === 3) {
        n.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var dx = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function gh(t, e, n) {
    var i = e.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? i ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : i ? t.setProperty(e, n) : typeof n != "number" || n === 0 || dx.has(e) ? e === "float" ? t.cssFloat = n : t[e] = ("" + n).trim() : t[e] = n + "px";
  }
  function xh(t, e, n) {
    if (e != null && typeof e != "object")
      throw Error(r(62));
    if (t = t.style, n != null) {
      for (var i in n)
        !n.hasOwnProperty(i) || e != null && e.hasOwnProperty(i) || (i.indexOf("--") === 0 ? t.setProperty(i, "") : i === "float" ? t.cssFloat = "" : t[i] = "", Et = !0);
      for (var s in e)
        i = e[s], e.hasOwnProperty(s) && n[s] !== i && (gh(t, s, i), Et = !0);
    } else
      for (var u in e)
        e.hasOwnProperty(u) && gh(t, u, e[u]);
  }
  function Po(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var hx = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["maskType", "mask-type"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), mx = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Bs(t) {
    return mx.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function dn() {
  }
  var Io = null;
  function $o(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var va = null, ga = null;
  function Sh(t) {
    var e = da(t);
    if (e && (t = e.stateNode)) {
      var n = t[Te] || null;
      t: switch (t = e.stateNode, e.type) {
        case "input":
          if (Jo(
            t,
            n.value,
            n.defaultValue,
            n.defaultValue,
            n.checked,
            n.defaultChecked,
            n.type,
            n.name
          ), e = n.name, n.type === "radio" && e != null) {
            for (n = t; n.parentNode; ) n = n.parentNode;
            for (n = n.querySelectorAll(
              'input[name="' + Ge(
                "" + e
              ) + '"][type="radio"]'
            ), e = 0; e < n.length; e++) {
              var i = n[e];
              if (i !== t && i.form === t.form) {
                var s = i[Te] || null;
                if (!s) throw Error(r(90));
                Jo(
                  i,
                  s.value,
                  s.defaultValue,
                  s.defaultValue,
                  s.checked,
                  s.defaultChecked,
                  s.type,
                  s.name
                );
              }
            }
            for (e = 0; e < n.length; e++)
              i = n[e], i.form === t.form && mh(i);
          }
          break t;
        case "textarea":
          ph(t, n.value, n.defaultValue);
          break t;
        case "select":
          e = n.value, e != null && ya(t, !!n.multiple, e, !1);
      }
    }
  }
  var Wo = !1;
  function bh(t, e, n) {
    if (Wo) return t(e, n);
    Wo = !0;
    try {
      var i = t(e);
      return i;
    } finally {
      if (Wo = !1, (va !== null || ga !== null) && (Bu(), va && (e = va, t = ga, ga = va = null, Sh(e), t)))
        for (e = 0; e < t.length; e++) Sh(t[e]);
    }
  }
  function pl(t, e) {
    var n = t.stateNode;
    if (n === null) return null;
    var i = n[Te] || null;
    if (i === null) return null;
    n = i[e];
    t: switch (e) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (i = !i.disabled) || (t = t.type, i = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !i;
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (n && typeof n != "function")
      throw Error(
        r(231, e, typeof n)
      );
    return n;
  }
  var wn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), tr = !1;
  if (wn)
    try {
      var vl = {};
      Object.defineProperty(vl, "passive", {
        get: function() {
          tr = !0;
        }
      }), window.addEventListener("test", vl, vl), window.removeEventListener("test", vl, vl);
    } catch {
      tr = !1;
    }
  var Pn = null, er = null, Ls = null;
  function Th() {
    if (Ls) return Ls;
    var t, e = er, n = e.length, i, s = "value" in Pn ? Pn.value : Pn.textContent, u = s.length;
    for (t = 0; t < n && e[t] === s[t]; t++) ;
    var d = n - t;
    for (i = 1; i <= d && e[n - i] === s[u - i]; i++) ;
    return Ls = s.slice(t, 1 < i ? 1 - i : void 0);
  }
  function Hs(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function Ys() {
    return !0;
  }
  function Eh() {
    return !1;
  }
  function pe(t) {
    function e(n, i, s, u, d) {
      this._reactName = n, this._targetInst = s, this.type = i, this.nativeEvent = u, this.target = d, this.currentTarget = null;
      for (var g in t)
        t.hasOwnProperty(g) && (n = t[g], this[g] = n ? n(u) : u[g]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Ys : Eh, this.isPropagationStopped = Eh, this;
    }
    return K(e.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Ys);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Ys);
      },
      persist: function() {
      },
      isPersistent: Ys
    }), e;
  }
  var In = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, qs = pe(In), gl = K({}, In, { view: 0, detail: 0 }), yx = pe(gl), nr, ir, xl, Gs = K({}, gl, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: lr,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== xl && (xl && t.type === "mousemove" ? (nr = t.screenX - xl.screenX, ir = t.screenY - xl.screenY) : ir = nr = 0, xl = t), nr);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : ir;
    }
  }), jh = pe(Gs), px = K({}, Gs, { dataTransfer: 0 }), vx = pe(px), gx = K({}, gl, { relatedTarget: 0 }), ar = pe(gx), xx = K({}, In, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Sx = pe(xx), bx = K({}, In, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), Tx = pe(bx), Ex = K({}, In, { data: 0 }), Ah = pe(Ex), jx = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Ax = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Cx = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Nx(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = Cx[t]) ? !!e[t] : !1;
  }
  function lr() {
    return Nx;
  }
  var Mx = K({}, gl, {
    key: function(t) {
      if (t.key) {
        var e = jx[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress" ? (t = Hs(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? Ax[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: lr,
    charCode: function(t) {
      return t.type === "keypress" ? Hs(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? Hs(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), Dx = pe(Mx), Ox = K({}, Gs, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), Ch = pe(Ox), Rx = K({}, In, { submitter: 0 }), zx = pe(Rx), wx = K({}, gl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: lr
  }), _x = pe(wx), Vx = K({}, In, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Ux = pe(Vx), Bx = K({}, Gs, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Lx = pe(Bx), Hx = K({}, In, {
    newState: 0,
    oldState: 0,
    source: 0
  }), Yx = pe(Hx), qx = [9, 13, 27, 32], sr = wn && "CompositionEvent" in window, Sl = null;
  wn && "documentMode" in document && (Sl = document.documentMode);
  var Gx = wn && "TextEvent" in window && !Sl, Nh = wn && (!sr || Sl && 8 < Sl && 11 >= Sl), Mh = " ", Dh = !1;
  function Oh(t, e) {
    switch (t) {
      case "keyup":
        return qx.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Rh(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var xa = !1;
  function Xx(t, e) {
    switch (t) {
      case "compositionend":
        return Rh(e);
      case "keypress":
        return e.which !== 32 ? null : (Dh = !0, Mh);
      case "textInput":
        return t = e.data, t === Mh && Dh ? null : t;
      default:
        return null;
    }
  }
  function Qx(t, e) {
    if (xa)
      return t === "compositionend" || !sr && Oh(t, e) ? (t = Th(), Ls = er = Pn = null, xa = !1, t) : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
          if (e.char && 1 < e.char.length)
            return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return Nh && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var Zx = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function zh(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!Zx[t.type] : e === "textarea";
  }
  function wh(t, e, n, i) {
    va ? ga ? ga.push(i) : ga = [i] : va = i, e = Xu(e, "onChange"), 0 < e.length && (n = new qs(
      "onChange",
      "change",
      null,
      n,
      i
    ), t.push({ event: n, listeners: e }));
  }
  var bl = null, Tl = null;
  function Kx(t) {
    Sp(t, 0);
  }
  function Xs(t) {
    var e = yl(t);
    if (mh(e)) return t;
  }
  function _h(t, e) {
    if (t === "change") return e;
  }
  var Vh = !1;
  if (wn) {
    var ur;
    if (wn) {
      var or = "oninput" in document;
      if (!or) {
        var Uh = document.createElement("div");
        Uh.setAttribute("oninput", "return;"), or = typeof Uh.oninput == "function";
      }
      ur = or;
    } else ur = !1;
    Vh = ur && (!document.documentMode || 9 < document.documentMode);
  }
  function Bh() {
    bl && (bl.detachEvent("onpropertychange", Lh), Tl = bl = null);
  }
  function Lh(t) {
    if (t.propertyName === "value" && Xs(Tl)) {
      var e = [];
      wh(
        e,
        Tl,
        t,
        $o(t)
      ), bh(Kx, e);
    }
  }
  function kx(t, e, n) {
    t === "focusin" ? (Bh(), bl = e, Tl = n, bl.attachEvent("onpropertychange", Lh)) : t === "focusout" && Bh();
  }
  function Jx(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Xs(Tl);
  }
  function Fx(t, e) {
    if (t === "click") return Xs(e);
  }
  function Px(t, e) {
    if (t === "input" || t === "change")
      return Xs(e);
  }
  function Ix(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
  }
  var Ve = typeof Object.is == "function" ? Object.is : Ix;
  function El(t, e) {
    if (Ve(t, e)) return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null)
      return !1;
    var n = Object.keys(t), i = Object.keys(e);
    if (n.length !== i.length) return !1;
    for (i = 0; i < n.length; i++) {
      var s = n[i];
      if (!qo.call(e, s) || !Ve(t[s], e[s]))
        return !1;
    }
    return !0;
  }
  function rr(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  function Hh(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Yh(t, e) {
    var n = Hh(t);
    t = 0;
    for (var i; n; ) {
      if (n.nodeType === 3) {
        if (i = t + n.textContent.length, t <= e && i >= e)
          return { node: n, offset: e - t };
        t = i;
      }
      t: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break t;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Hh(n);
    }
  }
  function qh(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? qh(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1;
  }
  function Gh(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var e = rr(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var n = typeof e.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) t = e.contentWindow;
      else break;
      e = rr(t.document);
    }
    return e;
  }
  function cr(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
  }
  var $x = wn && "documentMode" in document && 11 >= document.documentMode, Sa = null, fr = null, jl = null, dr = !1;
  function Xh(t, e, n) {
    var i = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    dr || Sa == null || Sa !== rr(i) || (i = Sa, "selectionStart" in i && cr(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = {
      anchorNode: i.anchorNode,
      anchorOffset: i.anchorOffset,
      focusNode: i.focusNode,
      focusOffset: i.focusOffset
    }), jl && El(jl, i) || (jl = i, i = Xu(fr, "onSelect"), 0 < i.length && (e = new qs(
      "onSelect",
      "select",
      null,
      e,
      n
    ), t.push({ event: e, listeners: i }), e.target = Sa)));
  }
  function Vi(t, e) {
    var n = {};
    return n[t.toLowerCase()] = e.toLowerCase(), n["Webkit" + t] = "webkit" + e, n["Moz" + t] = "moz" + e, n;
  }
  var ba = {
    animationend: Vi("Animation", "AnimationEnd"),
    animationiteration: Vi("Animation", "AnimationIteration"),
    animationstart: Vi("Animation", "AnimationStart"),
    transitionrun: Vi("Transition", "TransitionRun"),
    transitionstart: Vi("Transition", "TransitionStart"),
    transitioncancel: Vi("Transition", "TransitionCancel"),
    transitionend: Vi("Transition", "TransitionEnd")
  }, hr = {}, Qh = {};
  wn && (Qh = document.createElement("div").style, "AnimationEvent" in window || (delete ba.animationend.animation, delete ba.animationiteration.animation, delete ba.animationstart.animation), "TransitionEvent" in window || delete ba.transitionend.transition);
  function Ui(t) {
    if (hr[t]) return hr[t];
    if (!ba[t]) return t;
    var e = ba[t], n;
    for (n in e)
      if (e.hasOwnProperty(n) && n in Qh)
        return hr[t] = e[n];
    return t;
  }
  var Zh = Ui("animationend"), Kh = Ui("animationiteration"), kh = Ui("animationstart"), Wx = Ui("transitionrun"), tS = Ui("transitionstart"), eS = Ui("transitioncancel"), Jh = Ui("transitionend"), Fh = /* @__PURE__ */ new Map(), mr = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  mr.push("scrollEnd");
  function We(t, e) {
    Fh.set(t, e), _i(e, [t]);
  }
  var nS = 0;
  function _n(t, e) {
    if (t.name != null && t.name !== "auto") return t.name;
    if (e.autoName !== null) return e.autoName;
    t = an.identifierPrefix;
    var n = nS++;
    return t = "_" + t + "t_" + n.toString(32) + "_", e.autoName = t;
  }
  function Ph(t) {
    if (t == null || typeof t == "string")
      return t;
    var e = null, n = qa;
    if (n !== null)
      for (var i = 0; i < n.length; i++) {
        var s = t[n[i]];
        if (s != null) {
          if (s === "none") return "none";
          e = e == null ? s : e + (" " + s);
        }
      }
    return e ?? t.default;
  }
  function Vn(t, e) {
    return t = Ph(t), e = Ph(e), e == null ? t === "auto" ? null : t : e === "auto" ? null : e;
  }
  var Qs = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var e = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
        error: t
      });
      if (!window.dispatchEvent(e)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  }, Xe = [], Ta = 0, yr = 0;
  function Zs() {
    for (var t = Ta, e = yr = Ta = 0; e < t; ) {
      var n = Xe[e];
      Xe[e++] = null;
      var i = Xe[e];
      Xe[e++] = null;
      var s = Xe[e];
      Xe[e++] = null;
      var u = Xe[e];
      if (Xe[e++] = null, i !== null && s !== null) {
        var d = i.pending;
        d === null ? s.next = s : (s.next = d.next, d.next = s), i.pending = s;
      }
      u !== 0 && Ih(n, s, u);
    }
  }
  function Ks(t, e, n, i) {
    Xe[Ta++] = t, Xe[Ta++] = e, Xe[Ta++] = n, Xe[Ta++] = i, yr |= i, t.lanes |= i, t = t.alternate, t !== null && (t.lanes |= i);
  }
  function pr(t, e, n, i) {
    return Ks(t, e, n, i), ks(t);
  }
  function Bi(t, e) {
    return Ks(t, null, null, e), ks(t);
  }
  function Ih(t, e, n) {
    t.lanes |= n;
    var i = t.alternate;
    i !== null && (i.lanes |= n);
    for (var s = !1, u = t.return; u !== null; )
      u.childLanes |= n, i = u.alternate, i !== null && (i.childLanes |= n), u.tag === 22 && (t = u.stateNode, t === null || t._visibility & 1 || (s = !0)), t = u, u = u.return;
    return t.tag === 3 ? (u = t.stateNode, s && e !== null && (s = 31 - we(n), t = u.hiddenUpdates, i = t[s], i === null ? t[s] = [e] : i.push(e), e.lane = n | 536870912), u) : null;
  }
  function ks(t) {
    if (50 < Kl)
      throw Kl = 0, Uu = null, Error(r(185));
    for (var e = t.return; e !== null; )
      t = e, e = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var Ea = {};
  function iS(t, e, n, i) {
    this.tag = t, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ee(t, e, n, i) {
    return new iS(t, e, n, i);
  }
  function vr(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function Un(t, e) {
    var n = t.alternate;
    return n === null ? (n = Ee(
      t.tag,
      e,
      t.key,
      t.mode
    ), n.elementType = t.elementType, n.type = t.type, n.stateNode = t.stateNode, n.alternate = t, t.alternate = n) : (n.pendingProps = e, n.type = t.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = t.flags & 1206910976, n.childLanes = t.childLanes, n.lanes = t.lanes, n.child = t.child, n.memoizedProps = t.memoizedProps, n.memoizedState = t.memoizedState, n.updateQueue = t.updateQueue, e = t.dependencies, n.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, n.sibling = t.sibling, n.index = t.index, n.ref = t.ref, n.refCleanup = t.refCleanup, n;
  }
  function $h(t, e) {
    t.flags &= 1206910978;
    var n = t.alternate;
    return n === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = n.childLanes, t.lanes = n.lanes, t.child = n.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = n.memoizedProps, t.memoizedState = n.memoizedState, t.updateQueue = n.updateQueue, t.type = n.type, e = n.dependencies, t.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }), t;
  }
  function Js(t, e, n, i, s, u) {
    var d = 0;
    if (i = t, typeof i == "function") vr(i) && (d = 1);
    else if (typeof i == "string")
      d = Rb(
        t,
        n,
        fn.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (i) {
        case kt:
          return t = Ee(31, n, e, s), t.elementType = kt, t.lanes = u, t;
        case ft:
          return Li(n.children, s, u, e);
        case xt:
          d = 8, s |= 24;
          break;
        case Ut:
          return t = Ee(12, n, e, s | 2), t.elementType = Ut, t.lanes = u, t;
        case st:
          return t = Ee(13, n, e, s), t.elementType = st, t.lanes = u, t;
        case F:
          return t = Ee(19, n, e, s), t.elementType = F, t.lanes = u, t;
        case Oe:
        case C:
          return t = s | 32, t = Ee(30, n, e, t), t.elementType = C, t.lanes = u, t.stateNode = {
            autoName: null,
            paired: null,
            clones: null,
            ref: null
          }, t;
        default:
          if (typeof i == "object" && i !== null)
            switch (i.$$typeof) {
              case Ct:
                d = 10;
                break t;
              case Kt:
                d = 9;
                break t;
              case Z:
                d = 11;
                break t;
              case G:
                d = 14;
                break t;
              case at:
                d = 16, i = null;
                break t;
            }
          d = 29, n = Error(
            r(130, t === null ? "null" : typeof t, "")
          ), i = null;
      }
    return e = Ee(d, n, e, s), e.elementType = t, e.type = i, e.lanes = u, e;
  }
  function Li(t, e, n, i) {
    return t = Ee(7, t, i, e), t.lanes = n, t;
  }
  function gr(t, e, n) {
    return t = Ee(6, t, null, e), t.lanes = n, t;
  }
  function Wh(t) {
    var e = Ee(18, null, null, 0);
    return e.stateNode = t, e;
  }
  function xr(t, e, n) {
    return e = Ee(
      4,
      t.children !== null ? t.children : [],
      t.key,
      e
    ), e.lanes = n, e.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation
    }, e;
  }
  var tm = /* @__PURE__ */ new WeakMap();
  function Qe(t, e) {
    if (typeof t == "object" && t !== null) {
      var n = tm.get(t);
      return n !== void 0 ? n : (e = {
        value: t,
        source: e,
        stack: Jd(e)
      }, tm.set(t, e), e);
    }
    return {
      value: t,
      source: e,
      stack: Jd(e)
    };
  }
  var ja = [], Aa = 0, Fs = null, Al = 0, Ze = [], Ke = 0, $n = null, hn = 1, mn = "";
  function Bn(t, e) {
    ja[Aa++] = Al, ja[Aa++] = Fs, Fs = t, Al = e;
  }
  function em(t, e, n) {
    Ze[Ke++] = hn, Ze[Ke++] = mn, Ze[Ke++] = $n, $n = t;
    var i = hn;
    t = mn;
    var s = 32 - we(i) - 1;
    i &= ~(1 << s), n += 1;
    var u = 32 - we(e) + s;
    if (30 < u) {
      var d = s - s % 5;
      u = (i & (1 << d) - 1).toString(32), i >>= d, s -= d, hn = 1 << 32 - we(e) + s | n << s | i, mn = u + t;
    } else
      hn = 1 << u | n << s | i, mn = t;
  }
  function Ps(t) {
    t.return !== null && (Bn(t, 1), em(t, 1, 0));
  }
  function Sr(t) {
    for (; t === Fs; )
      Fs = ja[--Aa], ja[Aa] = null, Al = ja[--Aa], ja[Aa] = null;
    for (; t === $n; )
      $n = Ze[--Ke], Ze[Ke] = null, mn = Ze[--Ke], Ze[Ke] = null, hn = Ze[--Ke], Ze[Ke] = null;
  }
  function nm(t, e) {
    Ze[Ke++] = hn, Ze[Ke++] = mn, Ze[Ke++] = $n, hn = e.id, mn = e.overflow, $n = t;
  }
  var ne = null, Lt = null, mt = !1, Wn = null, ke = !1, br = Error(r(519));
  function ti(t) {
    var e = Error(
      r(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Cl(Qe(e, t)), br;
  }
  function im(t) {
    var e = t.stateNode, n = t.type, i = t.memoizedProps;
    switch (e[se] = t, e[Te] = i, n) {
      case "dialog":
        pt("cancel", e), pt("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        pt("load", e);
        break;
      case "video":
      case "audio":
        for (n = 0; n < Jl.length; n++)
          pt(Jl[n], e);
        break;
      case "source":
        pt("error", e);
        break;
      case "img":
      case "image":
      case "link":
        pt("error", e), pt("load", e);
        break;
      case "details":
        pt("toggle", e);
        break;
      case "input":
        pt("invalid", e), yh(
          e,
          i.value,
          i.defaultValue,
          i.checked,
          i.defaultChecked,
          i.type,
          i.name,
          !0
        );
        break;
      case "select":
        pt("invalid", e);
        break;
      case "textarea":
        pt("invalid", e), vh(e, i.value, i.defaultValue, i.children);
    }
    n = i.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || e.textContent === "" + n || i.suppressHydrationWarning === !0 || jp(e.textContent, n) ? (i.popover != null && (pt("beforetoggle", e), pt("toggle", e)), i.onScroll != null && pt("scroll", e), i.onScrollEnd != null && pt("scrollend", e), i.onClick != null && (e.onclick = dn), e = !0) : e = !1, e || ti(t, !0);
  }
  function Is(t) {
    for (ne = t.return; ne; )
      switch (ne.tag) {
        case 5:
        case 31:
        case 13:
          ke = !1;
          return;
        case 27:
        case 3:
          ke = !0;
          return;
        default:
          ne = ne.return;
      }
  }
  function Ca(t) {
    if (t !== ne) return !1;
    if (!mt) return Is(t), mt = !0, !1;
    var e = t.tag, n;
    if ((n = e !== 3 && e !== 27) && ((n = e === 5) && (n = t.type, n = !(n !== "form" && n !== "button") || Ic(t.type, t.memoizedProps)), n = !n), n && Lt && ti(t), Is(t), e === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(317));
      Lt = Xp(t);
    } else if (e === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(317));
      Lt = Xp(t);
    } else
      e === 27 ? (e = Lt, pi(t.type) ? (t = uf, uf = null, Lt = t) : Lt = e) : Lt = ne ? Fe(t.stateNode.nextSibling) : null;
    return !0;
  }
  function Hi() {
    Lt = ne = null, mt = !1;
  }
  function Tr() {
    var t = Wn;
    return t !== null && (Ce === null ? Ce = t : Ce.push.apply(
      Ce,
      t
    ), Wn = null), t;
  }
  function Cl(t) {
    Wn === null ? Wn = [t] : Wn.push(t);
  }
  var Er = cn(null), Yi = null, Ln = null;
  function ei(t, e, n) {
    Bt(Er, e._currentValue), e._currentValue = n;
  }
  function Hn(t) {
    t._currentValue = Er.current, le(Er);
  }
  function $s(t, e, n) {
    for (; t !== null; ) {
      var i = t.alternate;
      if ((t.childLanes & e) !== e ? (t.childLanes |= e, i !== null && (i.childLanes |= e)) : i !== null && (i.childLanes & e) !== e && (i.childLanes |= e), t === n) break;
      t = t.return;
    }
  }
  function jr(t, e, n, i) {
    var s = t.child;
    for (s !== null && (s.return = t); s !== null; ) {
      var u = s.dependencies;
      if (u !== null) {
        var d = s.child;
        u = u.firstContext;
        t: for (; u !== null; ) {
          var g = u;
          u = s;
          for (var T = 0; T < e.length; T++)
            if (g.context === e[T]) {
              u.lanes |= n, g = u.alternate, g !== null && (g.lanes |= n), $s(
                u.return,
                n,
                t
              ), i || (d = null);
              break t;
            }
          u = g.next;
        }
      } else if (s.tag === 18) {
        if (d = s.return, d === null) throw Error(r(341));
        d.lanes |= n, u = d.alternate, u !== null && (u.lanes |= n), $s(d, n, t), d = null;
      } else
        s.tag === 13 && s.memoizedState !== null && s.memoizedState.dehydrated === null ? (s.lanes |= n, d = s.alternate, d !== null && (d.lanes |= n), $s(
          s.return,
          n,
          t
        ), d = s.child, d = d !== null ? d.sibling : null) : d = s.child;
      if (d !== null) d.return = s;
      else
        for (d = s; d !== null; ) {
          if (d === t) {
            d = null;
            break;
          }
          if (s = d.sibling, s !== null) {
            s.return = d.return, d = s;
            break;
          }
          d = d.return;
        }
      s = d;
    }
  }
  function qi(t, e, n, i) {
    t = null;
    for (var s = e, u = !1; s !== null; ) {
      if (!u) {
        if ((s.flags & 524288) !== 0) u = !0;
        else if ((s.flags & 262144) !== 0) break;
      }
      if (s.tag === 10) {
        var d = s.alternate;
        if (d === null) throw Error(r(387));
        if (d = d.memoizedProps, d !== null) {
          var g = s.type;
          Ve(s.pendingProps.value, d.value) || (t !== null ? t.push(g) : t = [g]);
        }
      } else if (s === As.current) {
        if (d = s.alternate, d === null) throw Error(r(387));
        d.memoizedState.memoizedState !== s.memoizedState.memoizedState && (t !== null ? t.push(Ia) : t = [Ia]);
      }
      s = s.return;
    }
    return t !== null && jr(
      e,
      t,
      n,
      i
    ), e.flags |= 262144, t !== null;
  }
  function Ws(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!Ve(
        t.context._currentValue,
        t.memoizedValue
      ))
        return !0;
      t = t.next;
    }
    return !1;
  }
  function Gi(t) {
    Yi = t, Ln = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function ue(t) {
    return am(Yi, t);
  }
  function tu(t, e) {
    return Yi === null && Gi(t), am(t, e);
  }
  function am(t, e) {
    var n = e._currentValue;
    if (e = { context: e, memoizedValue: n, next: null }, Ln === null) {
      if (t === null) throw Error(r(308));
      Ln = e, t.dependencies = { lanes: 0, firstContext: e }, t.flags |= 524288;
    } else Ln = Ln.next = e;
    return n;
  }
  var aS = typeof AbortController < "u" ? AbortController : function() {
    var t = [], e = this.signal = {
      aborted: !1,
      addEventListener: function(n, i) {
        t.push(i);
      }
    };
    this.abort = function() {
      e.aborted = !0, t.forEach(function(n) {
        return n();
      });
    };
  }, lS = a.unstable_scheduleCallback, sS = a.unstable_NormalPriority, Jt = {
    $$typeof: Ct,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Ar() {
    return {
      controller: new aS(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Nl(t) {
    t.refCount--, t.refCount === 0 && lS(sS, function() {
      t.controller.abort();
    });
  }
  function lm(t, e) {
    if ((t.pendingLanes & 4194048) !== 0) {
      var n = t.transitionTypes;
      for (n === null && (n = t.transitionTypes = []), t = 0; t < e.length; t++) {
        var i = e[t];
        n.indexOf(i) === -1 && n.push(i);
      }
    }
  }
  var Ml = null;
  function uS(t) {
    var e = t.transitionTypes;
    return t.transitionTypes = null, e;
  }
  var Dl = null, Cr = 0, Xi = 0, Na = null;
  function oS(t, e) {
    if (Dl === null) {
      var n = Dl = [];
      Cr = 0, Xi = Gc(), Na = {
        status: "pending",
        value: void 0,
        then: function(i) {
          n.push(i);
        }
      };
    }
    return Cr++, e.then(sm, sm), e;
  }
  function sm() {
    if (--Cr === 0 && (Ml = null, Dl !== null)) {
      Na !== null && (Na.status = "fulfilled");
      var t = Dl;
      Dl = null, Xi = 0, Na = null;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function rS(t, e) {
    var n = [], i = {
      status: "pending",
      value: null,
      reason: null,
      then: function(s) {
        n.push(s);
      }
    };
    return t.then(
      function() {
        i.status = "fulfilled", i.value = e;
        for (var s = 0; s < n.length; s++) (0, n[s])(e);
      },
      function(s) {
        for (i.status = "rejected", i.reason = s, s = 0; s < n.length; s++)
          (0, n[s])(void 0);
      }
    ), i;
  }
  var um = tt.S;
  tt.S = function(t, e) {
    if (Wy = Re(), typeof e == "object" && e !== null && typeof e.then == "function" && oS(t, e), Ml !== null)
      for (var n = Za; n !== null; )
        lm(n, Ml), n = n.next;
    if (n = t.types, n !== null) {
      for (var i = Za; i !== null; )
        lm(i, n), i = i.next;
      if (Xi !== 0) {
        i = Ml, i === null && (i = Ml = []);
        for (var s = 0; s < n.length; s++) {
          var u = n[s];
          i.indexOf(u) === -1 && i.push(u);
        }
      }
    }
    um !== null && um(t, e);
  };
  var Qi = cn(null);
  function Nr() {
    var t = Qi.current;
    return t !== null ? t : wt.pooledCache;
  }
  function eu(t, e) {
    e === null ? Bt(Qi, Qi.current) : Bt(Qi, e.pool);
  }
  function om() {
    var t = Nr();
    return t === null ? null : { parent: Jt._currentValue, pool: t };
  }
  var Ma = Error(r(460)), Mr = Error(r(474)), nu = Error(r(542)), iu = { then: function() {
  } };
  function rm(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function cm(t, e, n) {
    switch (n = t[n], n === void 0 ? t.push(e) : n !== e && (e.then(dn, dn), e = n), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw t = e.reason, dm(t), t === void 0 && !("reason" in e) ? Error(r(600)) : t;
      default:
        if (typeof e.status == "string") e.then(dn, dn);
        else {
          if (t = wt, t !== null && 100 < t.shellSuspendCounter)
            throw Error(r(482));
          t = e, t.status = "pending", t.then(
            function(i) {
              if (e.status === "pending") {
                var s = e;
                s.status = "fulfilled", s.value = i;
              }
            },
            function(i) {
              if (e.status === "pending") {
                var s = e;
                s.status = "rejected", s.reason = i;
              }
            }
          );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw t = e.reason, dm(t), t;
        }
        throw Ki = e, Ma;
    }
  }
  function Zi(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function" ? (Ki = n, Ma) : n;
    }
  }
  var Ki = null;
  function fm() {
    if (Ki === null) throw Error(r(459));
    var t = Ki;
    return Ki = null, t;
  }
  function dm(t) {
    if (t === Ma || t === nu)
      throw Error(r(483));
  }
  var Da = null, Ol = 0;
  function au(t) {
    var e = Ol;
    return Ol += 1, Da === null && (Da = []), cm(Da, t, e);
  }
  function ni(t, e) {
    e = e.props.ref, t.ref = e !== void 0 ? e : null;
  }
  function lu(t, e) {
    throw e.$$typeof === Y ? Error(r(525)) : (t = Object.prototype.toString.call(e), Error(
      r(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t
      )
    ));
  }
  function hm(t) {
    function e(M, E) {
      if (t) {
        var O = M.deletions;
        O === null ? (M.deletions = [E], M.flags |= 16) : O.push(E);
      }
    }
    function n(M, E) {
      if (!t) return null;
      for (; E !== null; )
        e(M, E), E = E.sibling;
      return null;
    }
    function i(M) {
      for (var E = /* @__PURE__ */ new Map(); M !== null; )
        M.key === null ? E.set(M.index, M) : E.set(M.key, M), M = M.sibling;
      return E;
    }
    function s(M, E) {
      return M = Un(M, E), M.index = 0, M.sibling = null, M;
    }
    function u(M, E, O) {
      return M.index = O, t ? (O = M.alternate, O !== null ? (O = O.index, O < E ? (M.flags |= 2, E) : O) : (M.flags |= 134217730, E)) : (M.flags |= 1048576, E);
    }
    function d(M) {
      return t && M.alternate === null && (M.flags |= 134217730), M;
    }
    function g(M, E, O, U) {
      return E === null || E.tag !== 6 ? (E = gr(O, M.mode, U), E.return = M, E) : (E = s(E, O), E.return = M, E);
    }
    function T(M, E, O, U) {
      var P = O.type;
      return P === ft ? (M = z(
        M,
        E,
        O.props.children,
        U,
        O.key
      ), ni(M, O), M) : E !== null && (E.elementType === P || typeof P == "object" && P !== null && P.$$typeof === at && Zi(P) === E.type) ? (E = s(E, O.props), ni(E, O), E.return = M, E) : (E = Js(
        O.type,
        O.key,
        O.props,
        null,
        M.mode,
        U
      ), ni(E, O), E.return = M, E);
    }
    function D(M, E, O, U) {
      return E === null || E.tag !== 4 || E.stateNode.containerInfo !== O.containerInfo || E.stateNode.implementation !== O.implementation ? (E = xr(O, M.mode, U), E.return = M, E) : (E = s(E, O.children || []), E.return = M, E);
    }
    function z(M, E, O, U, P) {
      return E === null || E.tag !== 7 ? (E = Li(
        O,
        M.mode,
        U,
        P
      ), E.return = M, E) : (E = s(E, O), E.return = M, E);
    }
    function B(M, E, O) {
      if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint")
        return E = gr(
          "" + E,
          M.mode,
          O
        ), E.return = M, E;
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case lt:
            return O = Js(
              E.type,
              E.key,
              E.props,
              null,
              M.mode,
              O
            ), ni(O, E), O.return = M, O;
          case J:
            return E = xr(
              E,
              M.mode,
              O
            ), E.return = M, E;
          case at:
            return E = Zi(E), B(M, E, O);
        }
        if (jt(E) || it(E))
          return E = Li(
            E,
            M.mode,
            O,
            null
          ), E.return = M, E;
        if (typeof E.then == "function")
          return B(M, au(E), O);
        if (E.$$typeof === Ct)
          return B(
            M,
            tu(M, E),
            O
          );
        lu(M, E);
      }
      return null;
    }
    function N(M, E, O, U) {
      var P = E !== null ? E.key : null;
      if (typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint")
        return P !== null ? null : g(M, E, "" + O, U);
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case lt:
            return O.key === P ? T(M, E, O, U) : null;
          case J:
            return O.key === P ? D(M, E, O, U) : null;
          case at:
            return O = Zi(O), N(M, E, O, U);
        }
        if (jt(O) || it(O))
          return P !== null ? null : z(M, E, O, U, null);
        if (typeof O.then == "function")
          return N(
            M,
            E,
            au(O),
            U
          );
        if (O.$$typeof === Ct)
          return N(
            M,
            E,
            tu(M, O),
            U
          );
        lu(M, O);
      }
      return null;
    }
    function R(M, E, O, U, P) {
      if (typeof U == "string" && U !== "" || typeof U == "number" || typeof U == "bigint")
        return M = M.get(O) || null, g(E, M, "" + U, P);
      if (typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case lt:
            return M = M.get(
              U.key === null ? O : U.key
            ) || null, T(E, M, U, P);
          case J:
            return M = M.get(
              U.key === null ? O : U.key
            ) || null, D(E, M, U, P);
          case at:
            return U = Zi(U), R(
              M,
              E,
              O,
              U,
              P
            );
        }
        if (jt(U) || it(U))
          return M = M.get(O) || null, z(E, M, U, P, null);
        if (typeof U.then == "function")
          return R(
            M,
            E,
            O,
            au(U),
            P
          );
        if (U.$$typeof === Ct)
          return R(
            M,
            E,
            O,
            tu(E, U),
            P
          );
        lu(E, U);
      }
      return null;
    }
    function k(M, E, O, U) {
      for (var P = null, gt = null, et = E, ut = E = 0, It = null; et !== null && ut < O.length; ut++) {
        et.index > ut ? (It = et, et = null) : It = et.sibling;
        var St = N(
          M,
          et,
          O[ut],
          U
        );
        if (St === null) {
          et === null && (et = It);
          break;
        }
        t && et && St.alternate === null && e(M, et), E = u(St, E, ut), gt === null ? P = St : gt.sibling = St, gt = St, et = It;
      }
      if (ut === O.length)
        return n(M, et), mt && Bn(M, ut), P;
      if (et === null) {
        for (; ut < O.length; ut++)
          et = B(M, O[ut], U), et !== null && (E = u(
            et,
            E,
            ut
          ), gt === null ? P = et : gt.sibling = et, gt = et);
        return mt && Bn(M, ut), P;
      }
      for (et = i(et); ut < O.length; ut++)
        It = R(
          et,
          M,
          ut,
          O[ut],
          U
        ), It !== null && (t && (St = It.alternate, St !== null && et.delete(St.key === null ? ut : St.key)), E = u(
          It,
          E,
          ut
        ), gt === null ? P = It : gt.sibling = It, gt = It);
      return t && et.forEach(function(bi) {
        return e(M, bi);
      }), mt && Bn(M, ut), P;
    }
    function $(M, E, O, U) {
      if (O == null) throw Error(r(151));
      for (var P = null, gt = null, et = E, ut = E = 0, It = null, St = O.next(); et !== null && !St.done; ut++, St = O.next()) {
        et.index > ut ? (It = et, et = null) : It = et.sibling;
        var bi = N(M, et, St.value, U);
        if (bi === null) {
          et === null && (et = It);
          break;
        }
        t && et && bi.alternate === null && e(M, et), E = u(bi, E, ut), gt === null ? P = bi : gt.sibling = bi, gt = bi, et = It;
      }
      if (St.done)
        return n(M, et), mt && Bn(M, ut), P;
      if (et === null) {
        for (; !St.done; ut++, St = O.next())
          St = B(M, St.value, U), St !== null && (E = u(St, E, ut), gt === null ? P = St : gt.sibling = St, gt = St);
        return mt && Bn(M, ut), P;
      }
      for (et = i(et); !St.done; ut++, St = O.next())
        St = R(et, M, ut, St.value, U), St !== null && (t && (It = St.alternate, It !== null && et.delete(
          It.key === null ? ut : It.key
        )), E = u(St, E, ut), gt === null ? P = St : gt.sibling = St, gt = St);
      return t && et.forEach(function(Xb) {
        return e(M, Xb);
      }), mt && Bn(M, ut), P;
    }
    function ht(M, E, O, U) {
      if (typeof O == "object" && O !== null && O.type === ft && O.key === null && O.props.ref === void 0 && (O = O.props.children), typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case lt:
            t: {
              for (var P = O.key; E !== null; ) {
                if (E.key === P) {
                  if (P = O.type, P === ft) {
                    if (E.tag === 7) {
                      n(
                        M,
                        E.sibling
                      ), U = s(
                        E,
                        O.props.children
                      ), ni(U, O), U.return = M, M = U;
                      break t;
                    }
                  } else if (E.elementType === P || typeof P == "object" && P !== null && P.$$typeof === at && Zi(P) === E.type) {
                    n(
                      M,
                      E.sibling
                    ), U = s(E, O.props), ni(U, O), U.return = M, M = U;
                    break t;
                  }
                  n(M, E);
                  break;
                } else e(M, E);
                E = E.sibling;
              }
              O.type === ft ? (U = Li(
                O.props.children,
                M.mode,
                U,
                O.key
              ), ni(U, O), U.return = M, M = U) : (U = Js(
                O.type,
                O.key,
                O.props,
                null,
                M.mode,
                U
              ), ni(U, O), U.return = M, M = U);
            }
            return d(M);
          case J:
            t: {
              for (P = O.key; E !== null; ) {
                if (E.key === P)
                  if (E.tag === 4 && E.stateNode.containerInfo === O.containerInfo && E.stateNode.implementation === O.implementation) {
                    n(
                      M,
                      E.sibling
                    ), U = s(E, O.children || []), U.return = M, M = U;
                    break t;
                  } else {
                    n(M, E);
                    break;
                  }
                else e(M, E);
                E = E.sibling;
              }
              U = xr(O, M.mode, U), U.return = M, M = U;
            }
            return d(M);
          case at:
            return O = Zi(O), ht(
              M,
              E,
              O,
              U
            );
        }
        if (jt(O))
          return k(
            M,
            E,
            O,
            U
          );
        if (it(O)) {
          if (P = it(O), typeof P != "function") throw Error(r(150));
          return O = P.call(O), $(
            M,
            E,
            O,
            U
          );
        }
        if (typeof O.then == "function")
          return ht(
            M,
            E,
            au(O),
            U
          );
        if (O.$$typeof === Ct)
          return ht(
            M,
            E,
            tu(M, O),
            U
          );
        lu(M, O);
      }
      return typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint" ? (O = "" + O, E !== null && E.tag === 6 ? (n(M, E.sibling), U = s(E, O), U.return = M, M = U) : (n(M, E), U = gr(O, M.mode, U), U.return = M, M = U), d(M)) : n(M, E);
    }
    return function(M, E, O, U) {
      try {
        Ol = 0;
        var P = ht(
          M,
          E,
          O,
          U
        );
        return Da = null, P;
      } catch (et) {
        if (et === Ma || et === nu) throw et;
        var gt = Ee(29, et, null, M.mode);
        return gt.lanes = U, gt.return = M, gt;
      } finally {
      }
    };
  }
  var ki = hm(!0), mm = hm(!1), ii = !1;
  function Dr(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Or(t, e) {
    t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    });
  }
  function ai(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function li(t, e, n) {
    var i = t.updateQueue;
    if (i === null) return null;
    if (i = i.shared, (At & 2) !== 0) {
      var s = i.pending;
      return s === null ? e.next = e : (e.next = s.next, s.next = e), i.pending = e, e = ks(t), Ih(t, null, n), e;
    }
    return Ks(t, i, e, n), ks(t);
  }
  function Rl(t, e, n) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (n & 4194048) !== 0)) {
      var i = e.lanes;
      i &= t.pendingLanes, n |= i, e.lanes = n, eh(t, n);
    }
  }
  function Rr(t, e) {
    var n = t.updateQueue, i = t.alternate;
    if (i !== null && (i = i.updateQueue, n === i)) {
      var s = null, u = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var d = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null
          };
          u === null ? s = u = d : u = u.next = d, n = n.next;
        } while (n !== null);
        u === null ? s = u = e : u = u.next = e;
      } else s = u = e;
      n = {
        baseState: i.baseState,
        firstBaseUpdate: s,
        lastBaseUpdate: u,
        shared: i.shared,
        callbacks: i.callbacks
      }, t.updateQueue = n;
      return;
    }
    t = n.lastBaseUpdate, t === null ? n.firstBaseUpdate = e : t.next = e, n.lastBaseUpdate = e;
  }
  var zr = !1;
  function zl() {
    if (zr) {
      var t = Na;
      if (t !== null) throw t;
    }
  }
  function wl(t, e, n, i) {
    zr = !1;
    var s = t.updateQueue;
    ii = !1;
    var u = s.firstBaseUpdate, d = s.lastBaseUpdate, g = s.shared.pending;
    if (g !== null) {
      s.shared.pending = null;
      var T = g, D = T.next;
      T.next = null, d === null ? u = D : d.next = D, d = T;
      var z = t.alternate;
      z !== null && (z = z.updateQueue, g = z.lastBaseUpdate, g !== d && (g === null ? z.firstBaseUpdate = D : g.next = D, z.lastBaseUpdate = T));
    }
    if (u !== null) {
      var B = s.baseState;
      d = 0, z = D = T = null, g = u;
      do {
        var N = g.lane & -536870913, R = N !== g.lane;
        if (R ? (vt & N) === N : (i & N) === N) {
          N !== 0 && N === Xi && (zr = !0), z !== null && (z = z.next = {
            lane: 0,
            tag: g.tag,
            payload: g.payload,
            callback: null,
            next: null
          });
          t: {
            var k = t, $ = g;
            N = e;
            var ht = n;
            switch ($.tag) {
              case 1:
                if (k = $.payload, typeof k == "function") {
                  B = k.call(ht, B, N);
                  break t;
                }
                B = k;
                break t;
              case 3:
                k.flags = k.flags & -65537 | 128;
              case 0:
                if (k = $.payload, N = typeof k == "function" ? k.call(ht, B, N) : k, N == null) break t;
                B = K({}, B, N);
                break t;
              case 2:
                ii = !0;
            }
          }
          N = g.callback, N !== null && (t.flags |= 64, R && (t.flags |= 8192), R = s.callbacks, R === null ? s.callbacks = [N] : R.push(N));
        } else
          R = {
            lane: N,
            tag: g.tag,
            payload: g.payload,
            callback: g.callback,
            next: null
          }, z === null ? (D = z = R, T = B) : z = z.next = R, d |= N;
        if (g = g.next, g === null) {
          if (g = s.shared.pending, g === null)
            break;
          R = g, g = R.next, R.next = null, s.lastBaseUpdate = R, s.shared.pending = null;
        }
      } while (!0);
      z === null && (T = B), s.baseState = T, s.firstBaseUpdate = D, s.lastBaseUpdate = z, u === null && (s.shared.lanes = 0), di |= d, t.lanes = d, t.memoizedState = B;
    }
  }
  function ym(t, e) {
    if (typeof t != "function")
      throw Error(r(191, t));
    t.call(e);
  }
  function pm(t, e) {
    var n = t.callbacks;
    if (n !== null)
      for (t.callbacks = null, t = 0; t < n.length; t++)
        ym(n[t], e);
  }
  var si = cn(null), su = cn(0);
  function vm(t, e) {
    t = Qn, Bt(su, t), Bt(si, e), Qn = t | e.baseLanes;
  }
  function wr() {
    Bt(su, Qn), Bt(si, si.current);
  }
  function _r() {
    Qn = su.current, le(si), le(su);
  }
  var oe = cn(null), ye = null;
  function ui(t) {
    var e = t.alternate;
    Bt(re, re.current & 1), Bt(oe, t), ye === null && (e === null || si.current !== null || e.memoizedState !== null) && (ye = t);
  }
  function Vr(t) {
    Bt(re, re.current), Bt(oe, t), ye === null && (ye = t);
  }
  function gm(t) {
    t.tag === 22 ? (Bt(re, re.current), Bt(oe, t), ye === null && (ye = t)) : oi();
  }
  function oi() {
    Bt(re, re.current), Bt(oe, oe.current);
  }
  function Ue(t) {
    le(oe), ye === t && (ye = null), le(re);
  }
  var re = cn(0);
  function _l(t, e) {
    Bt(oe, oe.current), Bt(re, e);
  }
  function Ur(t) {
    le(re), le(oe), ye === t && (ye = null);
  }
  function uu(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var n = e.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || lf(n) || sf(n)))
          return e;
      } else if (e.tag === 19 && e.memoizedProps.revealOrder !== "independent") {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    return null;
  }
  var Yn = 0, dt = null, Rt = null, Ft = null, ou = !1, Oa = !1, Ji = !1, ru = 0, Vl = 0, Ra = null, cS = 0;
  function Xt() {
    throw Error(r(321));
  }
  function Br(t, e) {
    if (e === null) return !1;
    for (var n = 0; n < e.length && n < t.length; n++)
      if (!Ve(t[n], e[n])) return !1;
    return !0;
  }
  function Lr(t, e, n, i, s, u) {
    return Yn = u, dt = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, tt.H = t === null || t.memoizedState === null ? ey : ny, Ji = !1, u = n(i, s), Ji = !1, Oa && (u = Sm(
      e,
      n,
      i,
      s
    )), xm(t), u;
  }
  function xm(t) {
    tt.H = pu;
    var e = Rt !== null && Rt.next !== null;
    if (Yn = 0, Ft = Rt = dt = null, ou = !1, Vl = 0, Ra = null, e) throw Error(r(300));
    t === null || Pt || (t = t.dependencies, t !== null && Ws(t) && (Pt = !0));
  }
  function Sm(t, e, n, i) {
    dt = t;
    var s = 0;
    do {
      if (Oa && (Ra = null), Vl = 0, Oa = !1, 25 <= s) throw Error(r(301));
      if (s += 1, Ft = Rt = null, t.updateQueue != null) {
        var u = t.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      tt.H = gS, u = e(n, i);
    } while (Oa);
    return u;
  }
  function fS() {
    var t = tt.H, e = t.useState()[0];
    return e = typeof e.then == "function" ? Ul(e) : e, t = t.useState()[0], (Rt !== null ? Rt.memoizedState : null) !== t && (dt.flags |= 1024), e;
  }
  function Hr() {
    var t = ru !== 0;
    return ru = 0, t;
  }
  function Yr(t, e, n) {
    e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~n;
  }
  function qr(t) {
    if (ou) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), t = t.next;
      }
      ou = !1;
    }
    Yn = 0, Ft = Rt = dt = null, Oa = !1, Vl = ru = 0, Ra = null;
  }
  function ve() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Ft === null ? dt.memoizedState = Ft = t : Ft = Ft.next = t, Ft;
  }
  function Zt() {
    if (Rt === null) {
      var t = dt.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Rt.next;
    var e = Ft === null ? dt.memoizedState : Ft.next;
    if (e !== null)
      Ft = e, Rt = t;
    else {
      if (t === null)
        throw dt.alternate === null ? Error(r(467)) : Error(r(310));
      Rt = t, t = {
        memoizedState: Rt.memoizedState,
        baseState: Rt.baseState,
        baseQueue: Rt.baseQueue,
        queue: Rt.queue,
        next: null
      }, Ft === null ? dt.memoizedState = Ft = t : Ft = Ft.next = t;
    }
    return Ft;
  }
  function cu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ul(t) {
    var e = Vl;
    return Vl += 1, Ra === null && (Ra = []), t = cm(Ra, t, e), e = dt, (Ft === null ? e.memoizedState : Ft.next) === null && (e = e.alternate, tt.H = e === null || e.memoizedState === null ? ey : ny), t;
  }
  function fu(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Ul(t);
      if (t.$$typeof === H) return;
      if (t.$$typeof === Ct) return ue(t);
    }
    throw Error(r(438, String(t)));
  }
  function Gr(t) {
    var e = null, n = dt.updateQueue;
    if (n !== null && (e = n.memoCache), e == null) {
      var i = dt.alternate;
      i !== null && (i = i.updateQueue, i !== null && (i = i.memoCache, i != null && (e = {
        data: i.data.map(function(s) {
          return s.slice();
        }),
        index: 0
      })));
    }
    if (e == null && (e = { data: [], index: 0 }), n === null && (n = cu(), dt.updateQueue = n), n.memoCache = e, n = e.data[e.index], n === void 0)
      for (n = e.data[e.index] = Array(t), i = 0; i < t; i++)
        n[i] = Ri;
    return e.index++, n;
  }
  function qn(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function du(t) {
    var e = Zt();
    return Xr(e, Rt, t);
  }
  function Xr(t, e, n) {
    var i = t.queue;
    if (i === null) throw Error(r(311));
    i.lastRenderedReducer = n;
    var s = t.baseQueue, u = i.pending;
    if (u !== null) {
      if (s !== null) {
        var d = s.next;
        s.next = u.next, u.next = d;
      }
      e.baseQueue = s = u, i.pending = null;
    }
    if (u = t.baseState, s === null) t.memoizedState = u;
    else {
      e = s.next;
      var g = d = null, T = null, D = e, z = !1;
      do {
        var B = D.lane & -536870913;
        if (B !== D.lane ? (vt & B) === B : (Yn & B) === B) {
          var N = D.revertLane;
          if (N === 0)
            T !== null && (T = T.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: D.action,
              hasEagerState: D.hasEagerState,
              eagerState: D.eagerState,
              next: null
            }), B === Xi && (z = !0);
          else if ((Yn & N) === N) {
            D = D.next, N === Xi && (z = !0);
            continue;
          } else
            B = {
              lane: 0,
              revertLane: D.revertLane,
              gesture: null,
              action: D.action,
              hasEagerState: D.hasEagerState,
              eagerState: D.eagerState,
              next: null
            }, T === null ? (g = T = B, d = u) : T = T.next = B, dt.lanes |= N, di |= N;
          B = D.action, Ji && n(u, B), u = D.hasEagerState ? D.eagerState : n(u, B);
        } else
          N = {
            lane: B,
            revertLane: D.revertLane,
            gesture: D.gesture,
            action: D.action,
            hasEagerState: D.hasEagerState,
            eagerState: D.eagerState,
            next: null
          }, T === null ? (g = T = N, d = u) : T = T.next = N, dt.lanes |= B, di |= B;
        D = D.next;
      } while (D !== null && D !== e);
      if (T === null ? d = u : T.next = g, !Ve(u, t.memoizedState) && (Pt = !0, z && (n = Na, n !== null)))
        throw n;
      t.memoizedState = u, t.baseState = d, t.baseQueue = T, i.lastRenderedState = u;
    }
    return s === null && (i.lanes = 0), [t.memoizedState, i.dispatch];
  }
  function Qr(t) {
    var e = Zt(), n = e.queue;
    if (n === null) throw Error(r(311));
    n.lastRenderedReducer = t;
    var i = n.dispatch, s = n.pending, u = e.memoizedState;
    if (s !== null) {
      n.pending = null;
      var d = s = s.next;
      do
        u = t(u, d.action), d = d.next;
      while (d !== s);
      Ve(u, e.memoizedState) || (Pt = !0), e.memoizedState = u, e.baseQueue === null && (e.baseState = u), n.lastRenderedState = u;
    }
    return [u, i];
  }
  function bm(t, e, n) {
    var i = dt, s = Zt(), u = mt;
    if (u) {
      if (n === void 0) throw Error(r(407));
      n = n();
    } else n = e();
    var d = !Ve(
      (Rt || s).memoizedState,
      n
    );
    if (d && (s.memoizedState = n, Pt = !0), s = s.queue, kr(jm.bind(null, i, s, t), [
      t
    ]), t = s.getSnapshot !== e || d || Ft !== null && (Ft.memoizedState.tag & 1) !== 0, za(
      t ? 9 : 8,
      { destroy: void 0 },
      Em.bind(null, i, s, n, e),
      null
    ), t) {
      if (i.flags |= 2048, wt === null) throw Error(r(349));
      u || (Yn & 127) !== 0 || Tm(i, e, n);
    }
    return n;
  }
  function Tm(t, e, n) {
    t.flags |= 16384, t = { getSnapshot: e, value: n }, e = dt.updateQueue, e === null ? (e = cu(), dt.updateQueue = e, e.stores = [t]) : (n = e.stores, n === null ? e.stores = [t] : n.push(t));
  }
  function Em(t, e, n, i) {
    e.value = n, e.getSnapshot = i, Am(e) && Cm(t);
  }
  function jm(t, e, n) {
    return n(function() {
      Am(e) && Cm(t);
    });
  }
  function Am(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var n = e();
      return !Ve(t, n);
    } catch {
      return !0;
    }
  }
  function Cm(t) {
    var e = Bi(t, 2);
    e !== null && Ne(e, t, 2);
  }
  function Zr(t) {
    var e = ve();
    if (typeof t == "function") {
      var n = t;
      if (t = n(), Ji) {
        Fn(!0);
        try {
          n();
        } finally {
          Fn(!1);
        }
      }
    }
    return e.memoizedState = e.baseState = t, e.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: qn,
      lastRenderedState: t
    }, e;
  }
  function Nm(t, e, n, i) {
    return t.baseState = n, Xr(
      t,
      Rt,
      typeof i == "function" ? i : qn
    );
  }
  function dS(t, e, n, i, s) {
    if (yu(t)) throw Error(r(485));
    if (t = e.action, t !== null) {
      var u = {
        payload: s,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(d) {
          u.listeners.push(d);
        }
      };
      tt.T !== null ? n(!0) : u.isTransition = !1, i(u), n = e.pending, n === null ? (u.next = e.pending = u, Mm(e, u)) : (u.next = n.next, e.pending = n.next = u);
    }
  }
  function Mm(t, e) {
    var n = e.action, i = e.payload, s = t.state;
    if (e.isTransition) {
      var u = tt.T, d = {};
      d.types = u !== null ? u.types : null, tt.T = d;
      try {
        var g = n(s, i), T = tt.S;
        T !== null && T(d, g), Dm(t, e, g);
      } catch (D) {
        Kr(t, e, D);
      } finally {
        u !== null && d.types !== null && (u.types = d.types), tt.T = u;
      }
    } else
      try {
        u = n(s, i), Dm(t, e, u);
      } catch (D) {
        Kr(t, e, D);
      }
  }
  function Dm(t, e, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(
      function(i) {
        Om(t, e, i);
      },
      function(i) {
        return Kr(t, e, i);
      }
    ) : Om(t, e, n);
  }
  function Om(t, e, n) {
    e.status = "fulfilled", e.value = n, Rm(e), t.state = n, e = t.pending, e !== null && (n = e.next, n === e ? t.pending = null : (n = n.next, e.next = n, Mm(t, n)));
  }
  function Kr(t, e, n) {
    var i = t.pending;
    if (t.pending = null, i !== null) {
      i = i.next;
      do
        e.status = "rejected", e.reason = n, Rm(e), e = e.next;
      while (e !== i);
    }
    t.action = null;
  }
  function Rm(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function zm(t, e) {
    return e;
  }
  function wm(t, e) {
    if (mt) {
      var n = wt.formState;
      if (n !== null) {
        t: {
          var i = dt;
          if (mt) {
            if (Lt) {
              e: {
                for (var s = Lt, u = ke; s.nodeType !== 8; ) {
                  if (!u) {
                    s = null;
                    break e;
                  }
                  if (s = Fe(
                    s.nextSibling
                  ), s === null) {
                    s = null;
                    break e;
                  }
                }
                u = s.data, s = u === "F!" || u === "F" ? s : null;
              }
              if (s) {
                Lt = Fe(
                  s.nextSibling
                ), i = s.data === "F!";
                break t;
              }
            }
            ti(i);
          }
          i = !1;
        }
        i && (e = n[0]);
      }
    }
    return n = ve(), n.memoizedState = n.baseState = e, i = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: zm,
      lastRenderedState: e
    }, n.queue = i, n = $m.bind(
      null,
      dt,
      i
    ), i.dispatch = n, i = Zr(!1), u = $r.bind(
      null,
      dt,
      !1,
      i.queue
    ), i = ve(), s = {
      state: e,
      dispatch: null,
      action: t,
      pending: null
    }, i.queue = s, n = dS.bind(
      null,
      dt,
      s,
      u,
      n
    ), s.dispatch = n, i.memoizedState = t, [e, n, !1];
  }
  function _m(t) {
    var e = Zt();
    return Vm(e, Rt, t);
  }
  function Vm(t, e, n) {
    if (e = Xr(
      t,
      e,
      zm
    )[0], t = du(qn)[0], typeof e == "object" && e !== null && typeof e.then == "function")
      try {
        var i = Ul(e);
      } catch (d) {
        throw d === Ma ? nu : d;
      }
    else i = e;
    e = Zt();
    var s = e.queue, u = s.dispatch;
    return n !== e.memoizedState && (dt.flags |= 2048, za(
      9,
      { destroy: void 0 },
      hS.bind(null, s, n),
      null
    )), [i, u, t];
  }
  function hS(t, e) {
    t.action = e;
  }
  function Um(t) {
    var e = Zt(), n = Rt;
    if (n !== null)
      return Vm(e, n, t);
    Zt(), e = e.memoizedState, n = Zt();
    var i = n.queue.dispatch;
    return n.memoizedState = t, [e, i, !1];
  }
  function za(t, e, n, i) {
    return t = { tag: t, create: n, deps: i, inst: e, next: null }, e = dt.updateQueue, e === null && (e = cu(), dt.updateQueue = e), n = e.lastEffect, n === null ? e.lastEffect = t.next = t : (i = n.next, n.next = t, t.next = i, e.lastEffect = t), t;
  }
  function Bm() {
    return Zt().memoizedState;
  }
  function hu(t, e, n, i) {
    var s = ve();
    dt.flags |= t, s.memoizedState = za(
      1 | e,
      { destroy: void 0 },
      n,
      i === void 0 ? null : i
    );
  }
  function mu(t, e, n, i) {
    var s = Zt();
    i = i === void 0 ? null : i;
    var u = s.memoizedState.inst;
    Rt !== null && i !== null && Br(i, Rt.memoizedState.deps) ? s.memoizedState = za(e, u, n, i) : (dt.flags |= t, s.memoizedState = za(
      1 | e,
      u,
      n,
      i
    ));
  }
  function Lm(t, e) {
    hu(8390656, 8, t, e);
  }
  function kr(t, e) {
    mu(2048, 8, t, e);
  }
  function mS(t) {
    dt.flags |= 4;
    var e = dt.updateQueue;
    if (e === null)
      e = cu(), dt.updateQueue = e, e.events = [t];
    else {
      var n = e.events;
      n === null ? e.events = [t] : n.push(t);
    }
  }
  function Hm(t) {
    var e = Zt().memoizedState;
    return mS({ ref: e, nextImpl: t }), function() {
      if ((At & 2) !== 0) throw Error(r(440));
      return e.impl.apply(void 0, arguments);
    };
  }
  function Ym(t, e) {
    return mu(4, 2, t, e);
  }
  function qm(t, e) {
    return mu(4, 4, t, e);
  }
  function Gm(t, e) {
    if (typeof e == "function") {
      t = t();
      var n = e(t);
      return function() {
        typeof n == "function" ? n() : e(null);
      };
    }
    if (e != null)
      return t = t(), e.current = t, function() {
        e.current = null;
      };
  }
  function Xm(t, e, n) {
    n = n != null ? n.concat([t]) : null, mu(4, 4, Gm.bind(null, e, t), n);
  }
  function Jr() {
  }
  function Qm(t, e) {
    var n = Zt();
    e = e === void 0 ? null : e;
    var i = n.memoizedState;
    return e !== null && Br(e, i[1]) ? i[0] : (n.memoizedState = [t, e], t);
  }
  function Zm(t, e) {
    var n = Zt();
    e = e === void 0 ? null : e;
    var i = n.memoizedState;
    if (e !== null && Br(e, i[1]))
      return i[0];
    if (i = t(), Ji) {
      Fn(!0);
      try {
        t();
      } finally {
        Fn(!1);
      }
    }
    return n.memoizedState = [i, e], i;
  }
  function Fr(t, e, n) {
    return n === void 0 || (Yn & 1073741824) !== 0 && (vt & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = n, t = ep(), dt.lanes |= t, di |= t, n);
  }
  function Km(t, e, n, i) {
    return Ve(n, e) ? n : si.current !== null ? (t = Fr(t, n, i), Ve(t, e) || (Pt = !0), t) : (Yn & 106) === 0 || (Yn & 1073741824) !== 0 && (vt & 261930) === 0 ? (Pt = !0, t.memoizedState = n) : (t = ep(), dt.lanes |= t, di |= t, e);
  }
  function km(t, e, n, i, s) {
    var u = rt.p;
    rt.p = u !== 0 && 8 > u ? u : 8;
    var d = tt.T, g = {};
    g.types = d !== null ? d.types : null, tt.T = g, $r(t, !1, e, n);
    try {
      var T = s(), D = tt.S;
      if (D !== null && D(g, T), T !== null && typeof T == "object" && typeof T.then == "function") {
        var z = rS(
          T,
          i
        );
        Bl(
          t,
          e,
          z,
          Ye(t)
        );
      } else
        Bl(
          t,
          e,
          i,
          Ye(t)
        );
    } catch (B) {
      Bl(
        t,
        e,
        { then: function() {
        }, status: "rejected", reason: B },
        Ye()
      );
    } finally {
      rt.p = u, d !== null && g.types !== null && (d.types = g.types), tt.T = d;
    }
  }
  function yS() {
  }
  function Pr(t, e, n, i) {
    if (t.tag !== 5) throw Error(r(476));
    var s = Jm(t).queue;
    km(
      t,
      s,
      e,
      On,
      n === null ? yS : function() {
        return Fm(t), n(i);
      }
    );
  }
  function Jm(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: On,
      baseState: On,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: qn,
        lastRenderedState: On
      },
      next: null
    };
    var n = {};
    return e.next = {
      memoizedState: n,
      baseState: n,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: qn,
        lastRenderedState: n
      },
      next: null
    }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
  }
  function Fm(t) {
    var e = Jm(t);
    e.next === null && (e = t.alternate.memoizedState), Bl(
      t,
      e.next.queue,
      {},
      Ye()
    );
  }
  function Ir() {
    return ue(Ia);
  }
  function Pm() {
    return Zt().memoizedState;
  }
  function Im() {
    return Zt().memoizedState;
  }
  function pS(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var n = Ye();
          t = ai(n);
          var i = li(e, t, n);
          i !== null && (Ne(i, e, n), Rl(i, e, n)), e = { cache: Ar() }, t.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function vS(t, e, n) {
    var i = Ye();
    n = {
      lane: i,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, yu(t) ? Wm(e, n) : (n = pr(t, e, n, i), n !== null && (Ne(n, t, i), ty(n, e, i)));
  }
  function $m(t, e, n) {
    var i = Ye();
    Bl(t, e, n, i);
  }
  function Bl(t, e, n, i) {
    var s = {
      lane: i,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (yu(t)) Wm(e, s);
    else {
      var u = t.alternate;
      if (t.lanes === 0 && (u === null || u.lanes === 0) && (u = e.lastRenderedReducer, u !== null))
        try {
          var d = e.lastRenderedState, g = u(d, n);
          if (s.hasEagerState = !0, s.eagerState = g, Ve(g, d))
            return Ks(t, e, s, 0), wt === null && Zs(), !1;
        } catch {
        } finally {
        }
      if (n = pr(t, e, s, i), n !== null)
        return Ne(n, t, i), ty(n, e, i), !0;
    }
    return !1;
  }
  function $r(t, e, n, i) {
    if (i = {
      lane: 2,
      revertLane: Gc(),
      gesture: null,
      action: i,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, yu(t)) {
      if (e) throw Error(r(479));
    } else
      e = pr(
        t,
        n,
        i,
        2
      ), e !== null && Ne(e, t, 2);
  }
  function yu(t) {
    var e = t.alternate;
    return t === dt || e !== null && e === dt;
  }
  function Wm(t, e) {
    Oa = ou = !0;
    var n = t.pending;
    n === null ? e.next = e : (e.next = n.next, n.next = e), t.pending = e;
  }
  function ty(t, e, n) {
    if ((n & 4194048) !== 0) {
      var i = e.lanes;
      i &= t.pendingLanes, n |= i, e.lanes = n, eh(t, n);
    }
  }
  var pu = {
    readContext: ue,
    use: fu,
    useCallback: Xt,
    useContext: Xt,
    useEffect: Xt,
    useImperativeHandle: Xt,
    useLayoutEffect: Xt,
    useInsertionEffect: Xt,
    useMemo: Xt,
    useReducer: Xt,
    useRef: Xt,
    useState: Xt,
    useDebugValue: Xt,
    useDeferredValue: Xt,
    useTransition: Xt,
    useSyncExternalStore: Xt,
    useId: Xt,
    useHostTransitionStatus: Xt,
    useFormState: Xt,
    useActionState: Xt,
    useOptimistic: Xt,
    useMemoCache: Xt,
    useCacheRefresh: Xt,
    useEffectEvent: Xt
  }, ey = {
    readContext: ue,
    use: fu,
    useCallback: function(t, e) {
      return ve().memoizedState = [
        t,
        e === void 0 ? null : e
      ], t;
    },
    useContext: ue,
    useEffect: Lm,
    useImperativeHandle: function(t, e, n) {
      n = n != null ? n.concat([t]) : null, hu(
        4194308,
        4,
        Gm.bind(null, e, t),
        n
      );
    },
    useLayoutEffect: function(t, e) {
      return hu(4194308, 4, t, e);
    },
    useInsertionEffect: function(t, e) {
      hu(4, 2, t, e);
    },
    useMemo: function(t, e) {
      var n = ve();
      e = e === void 0 ? null : e;
      var i = t();
      if (Ji) {
        Fn(!0);
        try {
          t();
        } finally {
          Fn(!1);
        }
      }
      return n.memoizedState = [i, e], i;
    },
    useReducer: function(t, e, n) {
      var i = ve();
      if (n !== void 0) {
        var s = n(e);
        if (Ji) {
          Fn(!0);
          try {
            n(e);
          } finally {
            Fn(!1);
          }
        }
      } else s = e;
      return i.memoizedState = i.baseState = s, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: s
      }, i.queue = t, t = t.dispatch = vS.bind(
        null,
        dt,
        t
      ), [i.memoizedState, t];
    },
    useRef: function(t) {
      var e = ve();
      return t = { current: t }, e.memoizedState = t;
    },
    useState: function(t) {
      t = Zr(t);
      var e = t.queue, n = $m.bind(null, dt, e);
      return e.dispatch = n, [t.memoizedState, n];
    },
    useDebugValue: Jr,
    useDeferredValue: function(t, e) {
      var n = ve();
      return Fr(n, t, e);
    },
    useTransition: function() {
      var t = Zr(!1);
      return t = km.bind(
        null,
        dt,
        t.queue,
        !0,
        !1
      ), ve().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, e, n) {
      var i = dt, s = ve();
      if (mt) {
        if (n === void 0)
          throw Error(r(407));
        n = n();
      } else {
        if (n = e(), wt === null)
          throw Error(r(349));
        (vt & 127) !== 0 || Tm(i, e, n);
      }
      s.memoizedState = n;
      var u = { value: n, getSnapshot: e };
      return s.queue = u, Lm(jm.bind(null, i, u, t), [
        t
      ]), i.flags |= 2048, za(
        9,
        { destroy: void 0 },
        Em.bind(
          null,
          i,
          u,
          n,
          e
        ),
        null
      ), n;
    },
    useId: function() {
      var t = ve(), e = wt.identifierPrefix;
      if (mt) {
        var n = mn, i = hn;
        n = (i & ~(1 << 32 - we(i) - 1)).toString(32) + n, e = "_" + e + "R_" + n, n = ru++, 0 < n && (e += "H" + n.toString(32)), e += "_";
      } else
        n = cS++, e = "_" + e + "r_" + n.toString(32) + "_";
      return t.memoizedState = e;
    },
    useHostTransitionStatus: Ir,
    useFormState: wm,
    useActionState: wm,
    useOptimistic: function(t) {
      var e = ve();
      e.memoizedState = e.baseState = t;
      var n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return e.queue = n, e = $r.bind(
        null,
        dt,
        !0,
        n
      ), n.dispatch = e, [t, e];
    },
    useMemoCache: Gr,
    useCacheRefresh: function() {
      return ve().memoizedState = pS.bind(
        null,
        dt
      );
    },
    useEffectEvent: function(t) {
      var e = ve(), n = { impl: t };
      return e.memoizedState = n, function() {
        if ((At & 2) !== 0)
          throw Error(r(440));
        return n.impl.apply(void 0, arguments);
      };
    }
  }, ny = {
    readContext: ue,
    use: fu,
    useCallback: Qm,
    useContext: ue,
    useEffect: kr,
    useImperativeHandle: Xm,
    useInsertionEffect: Ym,
    useLayoutEffect: qm,
    useMemo: Zm,
    useReducer: du,
    useRef: Bm,
    useState: function() {
      return du(qn);
    },
    useDebugValue: Jr,
    useDeferredValue: function(t, e) {
      var n = Zt();
      return Km(
        n,
        Rt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = du(qn)[0], e = Zt().memoizedState;
      return [
        typeof t == "boolean" ? t : Ul(t),
        e
      ];
    },
    useSyncExternalStore: bm,
    useId: Pm,
    useHostTransitionStatus: Ir,
    useFormState: _m,
    useActionState: _m,
    useOptimistic: function(t, e) {
      var n = Zt();
      return Nm(n, Rt, t, e);
    },
    useMemoCache: Gr,
    useCacheRefresh: Im,
    useEffectEvent: Hm
  }, gS = {
    readContext: ue,
    use: fu,
    useCallback: Qm,
    useContext: ue,
    useEffect: kr,
    useImperativeHandle: Xm,
    useInsertionEffect: Ym,
    useLayoutEffect: qm,
    useMemo: Zm,
    useReducer: Qr,
    useRef: Bm,
    useState: function() {
      return Qr(qn);
    },
    useDebugValue: Jr,
    useDeferredValue: function(t, e) {
      var n = Zt();
      return Rt === null ? Fr(n, t, e) : Km(
        n,
        Rt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = Qr(qn)[0], e = Zt().memoizedState;
      return [
        typeof t == "boolean" ? t : Ul(t),
        e
      ];
    },
    useSyncExternalStore: bm,
    useId: Pm,
    useHostTransitionStatus: Ir,
    useFormState: Um,
    useActionState: Um,
    useOptimistic: function(t, e) {
      var n = Zt();
      return Rt !== null ? Nm(n, Rt, t, e) : (n.baseState = t, [t, n.queue.dispatch]);
    },
    useMemoCache: Gr,
    useCacheRefresh: Im,
    useEffectEvent: Hm
  };
  function Wr(t, e, n, i) {
    e = t.memoizedState, n = n(i, e), n = n == null ? e : K({}, e, n), t.memoizedState = n, t.lanes === 0 && (t.updateQueue.baseState = n);
  }
  var tc = {
    enqueueSetState: function(t, e, n) {
      t = t._reactInternals;
      var i = Ye(), s = ai(i);
      s.payload = e, n != null && (s.callback = n), e = li(t, s, i), e !== null && (Ne(e, t, i), Rl(e, t, i));
    },
    enqueueReplaceState: function(t, e, n) {
      t = t._reactInternals;
      var i = Ye(), s = ai(i);
      s.tag = 1, s.payload = e, n != null && (s.callback = n), e = li(t, s, i), e !== null && (Ne(e, t, i), Rl(e, t, i));
    },
    enqueueForceUpdate: function(t, e) {
      t = t._reactInternals;
      var n = Ye(), i = ai(n);
      i.tag = 2, e != null && (i.callback = e), e = li(t, i, n), e !== null && (Ne(e, t, n), Rl(e, t, n));
    }
  };
  function iy(t, e, n, i, s, u, d) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(i, u, d) : e.prototype && e.prototype.isPureReactComponent ? !El(n, i) || !El(s, u) : !0;
  }
  function ay(t, e, n, i) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(n, i), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(n, i), e.state !== t && tc.enqueueReplaceState(e, e.state, null);
  }
  function Fi(t, e) {
    var n = e;
    if ("ref" in e) {
      n = {};
      for (var i in e)
        i !== "ref" && (n[i] = e[i]);
    }
    if (t = t.defaultProps) {
      n === e && (n = K({}, n));
      for (var s in t)
        n[s] === void 0 && (n[s] = t[s]);
    }
    return n;
  }
  function ly(t) {
    Qs(t);
  }
  function sy(t) {
    console.error(t);
  }
  function uy(t) {
    Qs(t);
  }
  function vu(t, e) {
    try {
      var n = t.onUncaughtError;
      n(e.value, { componentStack: e.stack });
    } catch (i) {
      setTimeout(function() {
        throw i;
      });
    }
  }
  function oy(t, e, n) {
    try {
      var i = t.onCaughtError;
      i(n.value, {
        componentStack: n.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null
      });
    } catch (s) {
      setTimeout(function() {
        throw s;
      });
    }
  }
  function ec(t, e, n) {
    return n = ai(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      vu(t, e);
    }, n;
  }
  function ry(t) {
    return t = ai(t), t.tag = 3, t;
  }
  function cy(t, e, n, i) {
    var s = n.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var u = i.value;
      t.payload = function() {
        return s(u);
      }, t.callback = function() {
        oy(e, n, i);
      };
    }
    var d = n.stateNode;
    d !== null && typeof d.componentDidCatch == "function" && (t.callback = function() {
      oy(e, n, i), typeof s != "function" && (hi === null ? hi = /* @__PURE__ */ new Set([this]) : hi.add(this));
      var g = i.stack;
      this.componentDidCatch(i.value, {
        componentStack: g !== null ? g : ""
      });
    });
  }
  function xS(t, e, n, i, s) {
    if (n.flags |= 32768, i !== null && typeof i == "object" && typeof i.then == "function") {
      if (e = n.alternate, e !== null && qi(
        e,
        n,
        s,
        !0
      ), n = oe.current, n !== null) {
        switch (n.tag) {
          case 31:
          case 13:
          case 19:
            return ye === null ? Lu() : n.alternate === null && Qt === 0 && (Qt = 3), n.flags &= -257, n.flags |= 65536, n.lanes = s, i === iu ? n.flags |= 16384 : (e = n.updateQueue, e === null ? n.updateQueue = /* @__PURE__ */ new Set([i]) : e.add(i), Hc(t, i, s)), !1;
          case 22:
            return n.flags |= 65536, i === iu ? n.flags |= 16384 : (e = n.updateQueue, e === null ? (e = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([i])
            }, n.updateQueue = e) : (n = e.retryQueue, n === null ? e.retryQueue = /* @__PURE__ */ new Set([i]) : n.add(i)), Hc(t, i, s)), !1;
        }
        throw Error(r(435, n.tag));
      }
      return Hc(t, i, s), Lu(), !1;
    }
    if (mt)
      return e = oe.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = s, i !== br && (t = Error(r(422), { cause: i }), Cl(Qe(t, n)))) : (i !== br && (e = Error(r(423), {
        cause: i
      }), Cl(
        Qe(e, n)
      )), t = t.current.alternate, t.flags |= 65536, s &= -s, t.lanes |= s, i = Qe(i, n), s = ec(
        t.stateNode,
        i,
        s
      ), Rr(t, s), Qt !== 4 && (Qt = 2)), !1;
    var u = Error(r(520), { cause: i });
    if (u = Qe(u, n), Zl === null ? Zl = [u] : Zl.push(u), Qt !== 4 && (Qt = 2), e === null) return !0;
    i = Qe(i, n), n = e;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, t = s & -s, n.lanes |= t, t = ec(n.stateNode, i, t), Rr(n, t), !1;
        case 1:
          if (e = n.type, u = n.stateNode, (n.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (hi === null || !hi.has(u))))
            return n.flags |= 65536, s &= -s, n.lanes |= s, s = ry(s), cy(
              s,
              t,
              n,
              i
            ), Rr(n, s), !1;
          break;
        case 22:
          if (n.memoizedState !== null)
            return n.flags |= 65536, !1;
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var nc = Error(r(461)), Pt = !1;
  function Wt(t, e, n, i) {
    e.child = t === null ? mm(e, null, n, i) : ki(
      e,
      t.child,
      n,
      i
    );
  }
  function fy(t, e, n, i, s) {
    n = n.render;
    var u = e.ref;
    if ("ref" in i) {
      var d = {};
      for (var g in i)
        g !== "ref" && (d[g] = i[g]);
    } else d = i;
    return Gi(e), i = Lr(
      t,
      e,
      n,
      d,
      u,
      s
    ), g = Hr(), t !== null && !Pt ? (Yr(t, e, s), Gn(t, e, s)) : (mt && g && Ps(e), e.flags |= 1, Wt(t, e, i, s), e.child);
  }
  function dy(t, e, n, i, s) {
    if (t === null) {
      var u = n.type;
      return typeof u == "function" && !vr(u) && u.defaultProps === void 0 && n.compare === null ? (e.tag = 15, e.type = u, hy(
        t,
        e,
        u,
        i,
        s
      )) : (t = Js(
        n.type,
        null,
        i,
        e,
        e.mode,
        s
      ), t.ref = e.ref, t.return = e, e.child = t);
    }
    if (u = t.child, !cc(t, s)) {
      var d = u.memoizedProps;
      if (n = n.compare, n = n !== null ? n : El, n(d, i) && t.ref === e.ref)
        return Gn(t, e, s);
    }
    return e.flags |= 1, t = Un(u, i), t.ref = e.ref, t.return = e, e.child = t;
  }
  function hy(t, e, n, i, s) {
    if (t !== null) {
      var u = t.memoizedProps;
      if (El(u, i) && t.ref === e.ref)
        if (Pt = !1, e.pendingProps = i = u, cc(t, s))
          (t.flags & 131072) !== 0 && (Pt = !0);
        else
          return e.lanes = t.lanes, Gn(t, e, s);
    }
    return ic(
      t,
      e,
      n,
      i,
      s
    );
  }
  function my(t, e, n, i) {
    var s = i.children, u = t !== null ? t.memoizedState : null;
    if (t === null && e.stateNode === null && (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), i.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (u = u !== null ? u.baseLanes | n : n, t !== null) {
          for (i = e.child = t.child, s = 0; i !== null; )
            s = s | i.lanes | i.childLanes, i = i.sibling;
          i = s & ~u;
        } else i = 0, e.child = null;
        return yy(
          t,
          e,
          u,
          n,
          i
        );
      }
      if ((n & 536870912) !== 0)
        e.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && eu(
          e,
          u !== null ? u.cachePool : null
        ), u !== null ? vm(e, u) : wr(), gm(e);
      else
        return i = e.lanes = 536870912, yy(
          t,
          e,
          u !== null ? u.baseLanes | n : n,
          n,
          i
        );
    } else
      u !== null ? (eu(e, u.cachePool), vm(e, u), oi(), e.memoizedState = null) : (t !== null && eu(e, null), wr(), oi());
    return Wt(t, e, s, n), e.child;
  }
  function Ll(t, e) {
    return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), e.sibling;
  }
  function yy(t, e, n, i, s) {
    var u = Nr();
    return u = u === null ? null : { parent: Jt._currentValue, pool: u }, e.memoizedState = {
      baseLanes: n,
      cachePool: u
    }, t !== null && eu(e, null), wr(), gm(e), t !== null && qi(t, e, i, !0), e.childLanes = s, null;
  }
  function gu(t, e) {
    return e = xu(
      { mode: e.mode, children: e.children },
      t.mode
    ), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function py(t, e, n) {
    return ki(e, t.child, null, n), t = gu(e, e.pendingProps), t.flags |= 2, Ue(e), e.memoizedState = null, t;
  }
  function SS(t, e, n) {
    var i = e.pendingProps, s = (e.flags & 128) !== 0;
    if (e.flags &= -129, t === null) {
      if (mt) {
        if (i.mode === "hidden")
          return t = gu(e, i), e.lanes = 536870912, t.memoizedState = { baseLanes: 0, cachePool: null }, Ll(null, t);
        if (Vr(e), (t = Lt) ? (t = Gp(
          t,
          ke
        ), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: $n !== null ? { id: hn, overflow: mn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = Wh(t), n.return = e, e.child = n, ne = e, Lt = null)) : t = null, t === null) throw ti(e);
        return e.lanes = 536870912, null;
      }
      return gu(e, i);
    }
    var u = t.memoizedState;
    if (u !== null) {
      var d = u.dehydrated;
      if (Vr(e), s)
        if (e.flags & 256)
          e.flags &= -257, e = py(
            t,
            e,
            n
          );
        else if (e.memoizedState !== null)
          e.child = t.child, e.flags |= 128, e = null;
        else throw Error(r(558));
      else if (Pt || qi(t, e, n, !1), s = (n & t.childLanes) !== 0, Pt || s) {
        if (si.current === null) {
          if (i = wt, i !== null && (d = nh(i, n), d !== 0 && d !== u.retryLane))
            throw u.retryLane = d, Bi(t, d), Ne(i, t, d), nc;
          Lu();
        }
        e = py(
          t,
          e,
          n
        );
      } else
        t = u.treeContext, Lt = Fe(d.nextSibling), ne = e, mt = !0, Wn = null, ke = !1, t !== null && nm(e, t), e = gu(e, i), e.flags |= 134221824;
      return e;
    }
    return t = Un(t.child, {
      mode: i.mode,
      children: i.children
    }), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function wa(t, e) {
    var n = e.ref;
    if (n === null)
      t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object")
        throw Error(r(284));
      (t === null || t.ref !== n) && (e.flags |= 4194816);
    }
  }
  function ic(t, e, n, i, s) {
    return Gi(e), n = Lr(
      t,
      e,
      n,
      i,
      void 0,
      s
    ), i = Hr(), t !== null && !Pt ? (Yr(t, e, s), Gn(t, e, s)) : (mt && i && Ps(e), e.flags |= 1, Wt(t, e, n, s), e.child);
  }
  function vy(t, e, n, i, s, u) {
    return Gi(e), e.updateQueue = null, n = Sm(
      e,
      i,
      n,
      s
    ), xm(t), i = Hr(), t !== null && !Pt ? (Yr(t, e, u), Gn(t, e, u)) : (mt && i && Ps(e), e.flags |= 1, Wt(t, e, n, u), e.child);
  }
  function gy(t, e, n, i, s) {
    if (Gi(e), e.stateNode === null) {
      var u = Ea, d = n.contextType;
      typeof d == "object" && d !== null && (u = ue(d)), u = new n(i, u), e.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = tc, e.stateNode = u, u._reactInternals = e, u = e.stateNode, u.props = i, u.state = e.memoizedState, u.refs = {}, Dr(e), d = n.contextType, u.context = typeof d == "object" && d !== null ? ue(d) : Ea, u.state = e.memoizedState, d = n.getDerivedStateFromProps, typeof d == "function" && (Wr(
        e,
        n,
        d,
        i
      ), u.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (d = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), d !== u.state && tc.enqueueReplaceState(u, u.state, null), wl(e, i, u, s), zl(), u.state = e.memoizedState), typeof u.componentDidMount == "function" && (e.flags |= 4194308), i = !0;
    } else if (t === null) {
      u = e.stateNode;
      var g = e.memoizedProps, T = Fi(n, g);
      u.props = T;
      var D = u.context, z = n.contextType;
      d = Ea, typeof z == "object" && z !== null && (d = ue(z));
      var B = n.getDerivedStateFromProps;
      z = typeof B == "function" || typeof u.getSnapshotBeforeUpdate == "function", g = e.pendingProps !== g, z || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (g || D !== d) && ay(
        e,
        u,
        i,
        d
      ), ii = !1;
      var N = e.memoizedState;
      u.state = N, wl(e, i, u, s), zl(), D = e.memoizedState, g || N !== D || ii ? (typeof B == "function" && (Wr(
        e,
        n,
        B,
        i
      ), D = e.memoizedState), (T = ii || iy(
        e,
        n,
        T,
        i,
        N,
        D,
        d
      )) ? (z || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = i, e.memoizedState = D), u.props = i, u.state = D, u.context = d, i = T) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), i = !1);
    } else {
      u = e.stateNode, Or(t, e), d = e.memoizedProps, z = Fi(n, d), u.props = z, B = e.pendingProps, N = u.context, D = n.contextType, T = Ea, typeof D == "object" && D !== null && (T = ue(D)), g = n.getDerivedStateFromProps, (D = typeof g == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (d !== B || N !== T) && ay(
        e,
        u,
        i,
        T
      ), ii = !1, N = e.memoizedState, u.state = N, wl(e, i, u, s), zl();
      var R = e.memoizedState;
      d !== B || N !== R || ii || t !== null && t.dependencies !== null && Ws(t.dependencies) ? (typeof g == "function" && (Wr(
        e,
        n,
        g,
        i
      ), R = e.memoizedState), (z = ii || iy(
        e,
        n,
        z,
        i,
        N,
        R,
        T
      ) || t !== null && t.dependencies !== null && Ws(t.dependencies)) ? (D || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(i, R, T), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
        i,
        R,
        T
      )), typeof u.componentDidUpdate == "function" && (e.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || d === t.memoizedProps && N === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || d === t.memoizedProps && N === t.memoizedState || (e.flags |= 1024), e.memoizedProps = i, e.memoizedState = R), u.props = i, u.state = R, u.context = T, i = z) : (typeof u.componentDidUpdate != "function" || d === t.memoizedProps && N === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || d === t.memoizedProps && N === t.memoizedState || (e.flags |= 1024), i = !1);
    }
    return u = i, wa(t, e), i = (e.flags & 128) !== 0, u || i ? (u = e.stateNode, n = i && typeof n.getDerivedStateFromError != "function" ? null : u.render(), e.flags |= 1, t !== null && i ? (e.child = ki(
      e,
      t.child,
      null,
      s
    ), e.child = ki(
      e,
      null,
      n,
      s
    )) : Wt(t, e, n, s), e.memoizedState = u.state, t = e.child) : t = Gn(
      t,
      e,
      s
    ), t;
  }
  function xy(t, e, n, i) {
    return Hi(), e.flags |= 256, Wt(t, e, n, i), e.child;
  }
  var ac = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function lc(t) {
    return { baseLanes: t, cachePool: om() };
  }
  function sc(t, e, n) {
    return t = t !== null ? t.childLanes & ~n : 0, e && (t |= He), t;
  }
  function Sy(t, e, n) {
    var i = e.pendingProps, s = !1, u = (e.flags & 128) !== 0, d;
    if ((d = u) || (d = t !== null && t.memoizedState === null ? !1 : (re.current & 2) !== 0), d && (s = !0, e.flags &= -129), d = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
      if (mt) {
        if (s ? ui(e) : oi(), (t = Lt) ? (t = Gp(
          t,
          ke
        ), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: $n !== null ? { id: hn, overflow: mn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = Wh(t), n.return = e, e.child = n, ne = e, Lt = null)) : t = null, t === null) throw ti(e);
        return sf(t) ? e.lanes = 32 : e.lanes = 536870912, null;
      }
      return u = i.children, i = i.fallback, s ? (oi(), s = e.mode, u = xu(
        { mode: "hidden", children: u },
        s
      ), i = Li(
        i,
        s,
        n,
        null
      ), u.return = e, i.return = e, u.sibling = i, e.child = u, i = e.child, i.memoizedState = lc(n), i.childLanes = sc(
        t,
        d,
        n
      ), e.memoizedState = ac, Ll(null, i)) : (ui(e), uc(e, u));
    }
    var g = t.memoizedState;
    if (g !== null) {
      var T = g.dehydrated;
      if (T !== null)
        return bS(
          t,
          e,
          u,
          d,
          i,
          T,
          g,
          n
        );
    }
    return s ? (oi(), s = i.fallback, u = e.mode, g = t.child, T = g.sibling, i = Un(g, {
      mode: "hidden",
      children: i.children
    }), i.subtreeFlags = g.subtreeFlags & 1206910976, T !== null ? s = Un(T, s) : (s = Li(
      s,
      u,
      n,
      null
    ), s.flags |= 2), s.return = e, i.return = e, i.sibling = s, e.child = i, Ll(null, i), i = e.child, s = t.child.memoizedState, s === null ? s = lc(n) : (u = s.cachePool, u !== null ? (g = Jt._currentValue, u = u.parent !== g ? { parent: g, pool: g } : u) : u = om(), s = {
      baseLanes: s.baseLanes | n,
      cachePool: u
    }), i.memoizedState = s, i.childLanes = sc(
      t,
      d,
      n
    ), e.memoizedState = ac, Ll(t.child, i)) : (ui(e), n = t.child, t = n.sibling, n = Un(n, {
      mode: "visible",
      children: i.children
    }), n.return = e, n.sibling = null, t !== null && (d = e.deletions, d === null ? (e.deletions = [t], e.flags |= 16) : d.push(t)), e.child = n, e.memoizedState = null, n);
  }
  function uc(t, e) {
    return e = xu(
      { mode: "visible", children: e },
      t.mode
    ), e.return = t, t.child = e;
  }
  function xu(t, e) {
    return t = Ee(22, t, null, e), t.lanes = 0, t;
  }
  function Su(t, e, n) {
    return ki(e, t.child, null, n), t = uc(
      e,
      e.pendingProps.children
    ), t.flags |= 2, e.memoizedState = null, t;
  }
  function bS(t, e, n, i, s, u, d, g) {
    if (n)
      return e.flags & 256 ? (ui(e), e.flags &= -257, Su(
        t,
        e,
        g
      )) : e.memoizedState !== null ? (oi(), e.child = t.child, e.flags |= 128, null) : (oi(), u = s.fallback, d = e.mode, s = xu(
        { mode: "visible", children: s.children },
        d
      ), u = Li(
        u,
        d,
        g,
        null
      ), u.flags |= 2, s.return = e, u.return = e, s.sibling = u, e.child = s, ki(e, t.child, null, g), s = e.child, s.memoizedState = lc(g), s.childLanes = sc(
        t,
        i,
        g
      ), e.memoizedState = ac, Ll(null, s));
    if (ui(e), sf(u)) {
      if (i = u.nextSibling && u.nextSibling.dataset, i) var T = i.dgst;
      return i = T, i !== "" && (s = Error(r(419)), s.stack = "", s.digest = i, Cl({ value: s, source: null, stack: null })), Su(
        t,
        e,
        g
      );
    }
    if (Pt || qi(t, e, g, !1), i = (g & t.childLanes) !== 0, Pt || i) {
      if (si.current !== null)
        return Su(
          t,
          e,
          g
        );
      if (i = wt, i !== null && (s = nh(
        i,
        g
      ), s !== 0 && s !== d.retryLane))
        throw d.retryLane = s, Bi(t, s), Ne(i, t, s), nc;
      return lf(u) || Lu(), Su(
        t,
        e,
        g
      );
    }
    return lf(u) ? (e.flags |= 192, e.child = t.child, null) : (t = d.treeContext, Lt = Fe(u.nextSibling), ne = e, mt = !0, Wn = null, ke = !1, t !== null && nm(e, t), e = uc(
      e,
      s.children
    ), e.flags |= 134221824, e);
  }
  function by(t, e, n) {
    t.lanes |= e;
    var i = t.alternate;
    i !== null && (i.lanes |= e), $s(t.return, e, n);
  }
  function Ty(t) {
    for (var e = null; t !== null; ) {
      var n = t.alternate;
      n !== null && uu(n) === null && (e = t), t = t.sibling;
    }
    return e;
  }
  function bu(t, e, n, i, s, u) {
    var d = t.memoizedState;
    d === null ? t.memoizedState = {
      isBackwards: e,
      rendering: null,
      renderingStartTime: 0,
      last: i,
      tail: n,
      tailMode: s,
      treeForkCount: u
    } : (d.isBackwards = e, d.rendering = null, d.renderingStartTime = 0, d.last = i, d.tail = n, d.tailMode = s, d.treeForkCount = u);
  }
  function oc(t) {
    var e = t.child;
    for (t.child = null; e !== null; ) {
      var n = e.sibling;
      e.sibling = t.child, t.child = e, e = n;
    }
  }
  function rc(t, e, n) {
    var i = e.pendingProps, s = i.revealOrder, u = i.tail;
    i = i.children;
    var d = re.current;
    if (e.flags & 128)
      return _l(e, d), null;
    var g = (d & 2) !== 0;
    if (g ? (d = d & 1 | 2, e.flags |= 128) : d &= 1, _l(e, d), s === "backwards" && t !== null ? (oc(t), Wt(t, e, i, n), oc(t)) : Wt(t, e, i, n), i = mt ? Al : 0, !g && t !== null && (t.flags & 128) !== 0)
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13)
          t.memoizedState !== null && by(t, n, e);
        else if (t.tag === 19)
          by(t, n, e);
        else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            break t;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    switch (s) {
      case "backwards":
        n = Ty(e.child), n === null ? (s = e.child, e.child = null) : (s = n.sibling, n.sibling = null, oc(e)), bu(
          e,
          !0,
          s,
          null,
          u,
          i
        );
        break;
      case "unstable_legacy-backwards":
        for (n = null, s = e.child, e.child = null; s !== null; ) {
          if (t = s.alternate, t !== null && uu(t) === null) {
            e.child = s;
            break;
          }
          t = s.sibling, s.sibling = n, n = s, s = t;
        }
        bu(
          e,
          !0,
          n,
          null,
          u,
          i
        );
        break;
      case "together":
        bu(
          e,
          !1,
          null,
          null,
          void 0,
          i
        );
        break;
      case "independent":
        e.memoizedState = null;
        break;
      default:
        n = Ty(e.child), n === null ? (s = e.child, e.child = null) : (s = n.sibling, n.sibling = null), bu(
          e,
          !1,
          s,
          n,
          u,
          i
        );
    }
    return e.child;
  }
  function Ey(t, e, n) {
    var i = e.pendingProps;
    return ei(e, e.type, i.value), Wt(t, e, i.children, n), e.child;
  }
  function Gn(t, e, n) {
    if (t !== null && (e.dependencies = t.dependencies), di |= e.lanes, (n & e.childLanes) === 0)
      if (t !== null) {
        if (qi(
          t,
          e,
          n,
          !1
        ), (n & e.childLanes) === 0)
          return null;
      } else return null;
    if (t !== null && e.child !== t.child)
      throw Error(r(153));
    if (e.child !== null) {
      for (t = e.child, n = Un(t, t.pendingProps), e.child = n, n.return = e; t.sibling !== null; )
        t = t.sibling, n = n.sibling = Un(t, t.pendingProps), n.return = e;
      n.sibling = null;
    }
    return e.child;
  }
  function cc(t, e) {
    return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && Ws(t)));
  }
  function TS(t, e, n) {
    switch (e.tag) {
      case 3:
        Cs(e, e.stateNode.containerInfo), ei(e, Jt, t.memoizedState.cache), Hi();
        break;
      case 27:
      case 5:
        Bo(e);
        break;
      case 4:
        Cs(e, e.stateNode.containerInfo);
        break;
      case 10:
        ei(
          e,
          e.type,
          e.memoizedProps.value
        );
        break;
      case 31:
        if (e.memoizedState !== null)
          return e.flags |= 128, Vr(e), null;
        break;
      case 13:
        var i = e.memoizedState;
        if (i !== null) {
          if (i.dehydrated !== null)
            return ui(e), e.flags |= 128, null;
          i = qi(
            t,
            e,
            n,
            !1
          );
          var s = e.child.childLanes;
          return i || (n & s) !== 0 ? Sy(t, e, n) : (ui(e), t = Gn(
            t,
            e,
            n
          ), t !== null ? t.sibling : null);
        }
        ui(e);
        break;
      case 19:
        if (e.flags & 128)
          return rc(
            t,
            e,
            n
          );
        if (s = (t.flags & 128) !== 0, i = (n & e.childLanes) !== 0, i || (qi(
          t,
          e,
          n,
          !1
        ), i = (n & e.childLanes) !== 0), s) {
          if (i)
            return rc(
              t,
              e,
              n
            );
          e.flags |= 128;
        }
        if (s = e.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), _l(e, re.current), i) break;
        return null;
      case 22:
        return e.lanes = 0, my(
          t,
          e,
          n,
          e.pendingProps
        );
      case 24:
        ei(e, Jt, t.memoizedState.cache);
    }
    return Gn(t, e, n);
  }
  function jy(t, e, n) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps)
        Pt = !0;
      else {
        if (!cc(t, n) && (e.flags & 128) === 0)
          return Pt = !1, TS(
            t,
            e,
            n
          );
        Pt = (t.flags & 131072) !== 0;
      }
    else
      Pt = !1, mt && (e.flags & 1048576) !== 0 && em(e, Al, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        t: {
          var i = e.pendingProps;
          if (t = Zi(e.elementType), e.type = t, typeof t == "function")
            vr(t) ? (i = Fi(t, i), e.tag = 1, e = gy(
              null,
              e,
              t,
              i,
              n
            )) : (e.tag = 0, e = ic(
              null,
              e,
              t,
              i,
              n
            ));
          else {
            if (t != null) {
              var s = t.$$typeof;
              if (s === Z) {
                e.tag = 11, e = fy(
                  null,
                  e,
                  t,
                  i,
                  n
                );
                break t;
              } else if (s === G) {
                e.tag = 14, e = dy(
                  null,
                  e,
                  t,
                  i,
                  n
                );
                break t;
              } else if (s === Ct) {
                e.tag = 10, e.type = t, e = Ey(
                  null,
                  e,
                  n
                );
                break t;
              }
            }
            throw e = Tt(t) || t, Error(r(306, e, ""));
          }
        }
        return e;
      case 0:
        return ic(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 1:
        return i = e.type, s = Fi(
          i,
          e.pendingProps
        ), gy(
          t,
          e,
          i,
          s,
          n
        );
      case 3:
        t: {
          if (Cs(
            e,
            e.stateNode.containerInfo
          ), t === null) throw Error(r(387));
          i = e.pendingProps;
          var u = e.memoizedState;
          s = u.element, Or(t, e), wl(e, i, null, n);
          var d = e.memoizedState;
          if (i = d.cache, ei(e, Jt, i), i !== u.cache && jr(
            e,
            [Jt],
            n,
            !0
          ), zl(), i = d.element, u.isDehydrated)
            if (u = {
              element: i,
              isDehydrated: !1,
              cache: d.cache
            }, e.updateQueue.baseState = u, e.memoizedState = u, e.flags & 256) {
              e = xy(
                t,
                e,
                i,
                n
              );
              break t;
            } else if (i !== s) {
              s = Qe(
                Error(r(424)),
                e
              ), Cl(s), e = xy(
                t,
                e,
                i,
                n
              );
              break t;
            } else {
              switch (t = e.stateNode.containerInfo, t.nodeType) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (Lt = Fe(t.firstChild), ne = e, mt = !0, Wn = null, ke = !0, n = mm(
                e,
                null,
                i,
                n
              ), e.child = n; n; )
                n.flags = n.flags & -3 | 134221824, n = n.sibling;
            }
          else {
            if (Hi(), i === s) {
              e = Gn(
                t,
                e,
                n
              );
              break t;
            }
            Wt(t, e, i, n);
          }
          e = e.child;
        }
        return e;
      case 26:
        return wa(t, e), t === null ? (n = Fp(
          e.type,
          null,
          e.pendingProps,
          null
        )) ? e.memoizedState = n : mt || (e.stateNode = Mp(
          e.type,
          e.pendingProps,
          kn.current,
          e
        )) : e.memoizedState = Fp(
          e.type,
          t.memoizedProps,
          e.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return Bo(e), t === null && mt && (i = e.stateNode = Zp(
          e.type,
          e.pendingProps,
          kn.current
        ), ne = e, ke = !0, s = Lt, pi(e.type) ? (uf = s, Lt = Fe(i.firstChild)) : Lt = s), Wt(
          t,
          e,
          e.pendingProps.children,
          n
        ), wa(t, e), t === null && (e.flags |= 4194304), e.child;
      case 5:
        return t === null && mt && ((s = i = Lt) && (i = pb(
          i,
          e.type,
          e.pendingProps,
          ke
        ), i !== null ? (e.stateNode = i, ne = e, Lt = Fe(i.firstChild), ke = !1, s = !0) : s = !1), s || ti(e)), Bo(e), s = e.type, u = e.pendingProps, d = t !== null ? t.memoizedProps : null, i = u.children, Ic(s, u) ? i = null : d !== null && Ic(s, d) && (e.flags |= 32), e.memoizedState !== null && (s = Lr(
          t,
          e,
          fS,
          null,
          null,
          n
        ), Ia._currentValue = s), wa(t, e), Wt(t, e, i, n), e.child;
      case 6:
        return t === null && mt && ((t = n = Lt) && (n = vb(
          n,
          e.pendingProps,
          ke
        ), n !== null ? (e.stateNode = n, ne = e, Lt = null, t = !0) : t = !1), t || ti(e)), null;
      case 13:
        return Sy(t, e, n);
      case 4:
        return Cs(
          e,
          e.stateNode.containerInfo
        ), i = e.pendingProps, t === null ? e.child = ki(
          e,
          null,
          i,
          n
        ) : Wt(t, e, i, n), e.child;
      case 11:
        return fy(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 7:
        return i = e.pendingProps, wa(t, e), Wt(t, e, i, n), e.child;
      case 8:
        return Wt(
          t,
          e,
          e.pendingProps.children,
          n
        ), e.child;
      case 12:
        return Wt(
          t,
          e,
          e.pendingProps.children,
          n
        ), e.child;
      case 10:
        return Ey(t, e, n);
      case 9:
        return s = e.type._context, i = e.pendingProps.children, Gi(e), s = ue(s), i = i(s), e.flags |= 1, Wt(t, e, i, n), e.child;
      case 14:
        return dy(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 15:
        return hy(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 19:
        return rc(t, e, n);
      case 31:
        return SS(t, e, n);
      case 22:
        return my(
          t,
          e,
          n,
          e.pendingProps
        );
      case 24:
        return Gi(e), i = ue(Jt), t === null ? (s = Nr(), s === null && (s = wt, u = Ar(), s.pooledCache = u, u.refCount++, u !== null && (s.pooledCacheLanes |= n), s = u), e.memoizedState = { parent: i, cache: s }, Dr(e), ei(e, Jt, s)) : ((t.lanes & n) !== 0 && (Or(t, e), wl(e, null, null, n), zl()), s = t.memoizedState, u = e.memoizedState, s.parent !== i ? (s = { parent: i, cache: i }, e.memoizedState = s, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = s), ei(e, Jt, i)) : (i = u.cache, ei(e, Jt, i), i !== s.cache && jr(
          e,
          [Jt],
          n,
          !0
        ))), Wt(
          t,
          e,
          e.pendingProps.children,
          n
        ), e.child;
      case 30:
        return e.stateNode === null && (e.stateNode = {
          autoName: null,
          paired: null,
          clones: null,
          ref: null
        }), i = e.pendingProps, i.name != null && i.name !== "auto" ? e.flags |= t === null ? 18882560 : 18874368 : mt && Ps(e), t !== null && t.memoizedProps.name !== i.name ? e.flags |= 4194816 : wa(t, e), Wt(t, e, i.children, n), e.child;
      case 29:
        throw e.pendingProps;
    }
    throw Error(r(156, e.tag));
  }
  function Xn(t) {
    t.flags |= 4;
  }
  function fc(t, e, n, i, s) {
    var u;
    if ((u = (t.mode & 32) !== 0) && (u = n === null ? Wp(e, i) : Wp(e, i) && (i.src !== n.src || i.srcSet !== n.srcSet)), u) {
      if (t.flags |= 16777216, (s & 335544128) === s)
        if (t.stateNode.complete) t.flags |= 8192;
        else if (lp()) t.flags |= 8192;
        else
          throw Ki = iu, Mr;
    } else t.flags &= -16777217;
  }
  function Ay(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !tv(e))
      if (lp()) t.flags |= 8192;
      else
        throw Ki = iu, Mr;
  }
  function Tu(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? Wd() : 536870912, t.lanes |= e, La |= e);
  }
  function Hl(t, e) {
    if (!mt)
      switch (t.tailMode) {
        case "visible":
          break;
        case "collapsed":
          for (var n = t.tail, i = null; n !== null; )
            n.alternate !== null && (i = n), n = n.sibling;
          i === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : i.sibling = null;
          break;
        default:
          for (e = t.tail, n = null; e !== null; )
            e.alternate !== null && (n = e), e = e.sibling;
          n === null ? t.tail = null : n.sibling = null;
      }
  }
  function Ht(t) {
    var e = t.alternate !== null && t.alternate.child === t.child, n = 0, i = 0;
    if (e)
      for (var s = t.child; s !== null; )
        n |= s.lanes | s.childLanes, i |= s.subtreeFlags & 1206910976, i |= s.flags & 1206910976, s.return = t, s = s.sibling;
    else
      for (s = t.child; s !== null; )
        n |= s.lanes | s.childLanes, i |= s.subtreeFlags, i |= s.flags, s.return = t, s = s.sibling;
    return t.subtreeFlags |= i, t.childLanes = n, e;
  }
  function ES(t, e, n) {
    var i = e.pendingProps;
    switch (Sr(e), e.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ht(e), null;
      case 1:
        return Ht(e), null;
      case 3:
        return n = e.stateNode, i = null, t !== null && (i = t.memoizedState.cache), e.memoizedState.cache !== i && (e.flags |= 2048), Hn(Jt), ca(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (t === null || t.child === null) && (Ca(e) ? Xn(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, Tr())), Ht(e), null;
      case 26:
        var s = e.type, u = e.memoizedState;
        return t === null ? (Xn(e), u !== null ? (Ht(e), Ay(e, u)) : (Ht(e), fc(
          e,
          s,
          null,
          i,
          n
        ))) : u ? u !== t.memoizedState ? (Xn(e), Ht(e), Ay(e, u)) : (Ht(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== i && Xn(e), Ht(e), fc(
          e,
          s,
          t,
          i,
          n
        )), null;
      case 27:
        if (Ns(e), n = kn.current, s = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== i && Xn(e);
        else {
          if (!i) {
            if (e.stateNode === null)
              throw Error(r(166));
            return Ht(e), e.subtreeFlags &= -33554433, null;
          }
          t = fn.current, Ca(e) ? im(e) : (t = Zp(s, i, n), e.stateNode = t, Xn(e));
        }
        return Ht(e), e.subtreeFlags &= -33554433, null;
      case 5:
        if (Ns(e), s = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== i && Xn(e);
        else {
          if (!i) {
            if (e.stateNode === null)
              throw Error(r(166));
            return Ht(e), e.subtreeFlags &= -33554433, null;
          }
          if (u = fn.current, Ca(e))
            im(e);
          else {
            var d = Pl(
              kn.current
            );
            switch (u) {
              case 1:
                u = d.createElementNS(
                  "http://www.w3.org/2000/svg",
                  s
                );
                break;
              case 2:
                u = d.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  s
                );
                break;
              default:
                switch (s) {
                  case "svg":
                    u = d.createElementNS(
                      "http://www.w3.org/2000/svg",
                      s
                    );
                    break;
                  case "math":
                    u = d.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      s
                    );
                    break;
                  case "script":
                    u = d.createElement("div"), u.innerHTML = "<script><\/script>", u = u.removeChild(
                      u.firstChild
                    );
                    break;
                  case "select":
                    u = typeof i.is == "string" ? d.createElement("select", {
                      is: i.is
                    }) : d.createElement("select"), i.multiple ? u.multiple = !0 : i.size && (u.size = i.size);
                    break;
                  default:
                    u = typeof i.is == "string" ? d.createElement(s, { is: i.is }) : d.createElement(s);
                }
            }
            u[se] = e, u[Te] = i;
            t: for (d = e.child; d !== null; ) {
              if (d.tag === 5 || d.tag === 6)
                u.appendChild(d.stateNode);
              else if (d.tag !== 4 && d.tag !== 27 && d.child !== null) {
                d.child.return = d, d = d.child;
                continue;
              }
              if (d === e) break t;
              for (; d.sibling === null; ) {
                if (d.return === null || d.return === e)
                  break t;
                d = d.return;
              }
              d.sibling.return = d.return, d = d.sibling;
            }
            e.stateNode = u;
            t: switch (fe(u, s, i), s) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                i = !!i.autoFocus;
                break t;
              case "img":
                i = !0;
                break t;
              default:
                i = !1;
            }
            i && Xn(e);
          }
        }
        return Ht(e), e.subtreeFlags &= -33554433, fc(
          e,
          e.type,
          t === null ? null : t.memoizedProps,
          e.pendingProps,
          n
        ), null;
      case 6:
        if (t && e.stateNode != null)
          t.memoizedProps !== i && Xn(e);
        else {
          if (typeof i != "string" && e.stateNode === null)
            throw Error(r(166));
          if (t = kn.current, Ca(e)) {
            if (t = e.stateNode, n = e.memoizedProps, i = null, s = ne, s !== null)
              switch (s.tag) {
                case 27:
                case 5:
                  i = s.memoizedProps;
              }
            t[se] = e, t = !!(t.nodeValue === n || i !== null && i.suppressHydrationWarning === !0 || jp(t.nodeValue, n)), t || ti(e, !0);
          } else
            t = Pl(t).createTextNode(
              i
            ), t[se] = e, e.stateNode = t;
        }
        return Ht(e), null;
      case 31:
        if (n = e.memoizedState, t === null || t.memoizedState !== null) {
          if (i = Ca(e), n !== null) {
            if (t === null) {
              if (!i) throw Error(r(318));
              if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(557));
              t[se] = e;
            } else
              Hi(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            Ht(e), t = !1;
          } else
            n = Tr(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n), t = !0;
          if (!t)
            return e.flags & 256 ? (Ue(e), e) : (Ue(e), null);
          if ((e.flags & 128) !== 0)
            throw Error(r(558));
        }
        return Ht(e), null;
      case 13:
        if (i = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (s = Ca(e), i !== null && i.dehydrated !== null) {
            if (t === null) {
              if (!s) throw Error(r(318));
              if (s = e.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(r(317));
              s[se] = e;
            } else
              Hi(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            Ht(e), s = !1;
          } else
            s = Tr(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = s), s = !0;
          if (!s)
            return e.flags & 256 ? (Ue(e), e) : (Ue(e), null);
        }
        return Ue(e), (e.flags & 128) !== 0 ? (e.lanes = n, e) : (n = i !== null, t = t !== null && t.memoizedState !== null, n && (i = e.child, s = null, i.alternate !== null && i.alternate.memoizedState !== null && i.alternate.memoizedState.cachePool !== null && (s = i.alternate.memoizedState.cachePool.pool), u = null, i.memoizedState !== null && i.memoizedState.cachePool !== null && (u = i.memoizedState.cachePool.pool), u !== s && (i.flags |= 2048)), n !== t && n && (e.child.flags |= 8192), Tu(e, e.updateQueue), Ht(e), null);
      case 4:
        return ca(), t === null && Kc(e.stateNode.containerInfo), e.flags |= 67108864, Ht(e), null;
      case 10:
        return Hn(e.type), Ht(e), null;
      case 19:
        if (Ur(e), i = e.memoizedState, i === null) return Ht(e), null;
        if (s = (e.flags & 128) !== 0, u = i.rendering, u === null)
          if (s) Hl(i, !1);
          else {
            if (Qt !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = e.child; t !== null; ) {
                if (u = uu(t), u !== null) {
                  for (e.flags |= 128, Hl(i, !1), t = u.updateQueue, e.updateQueue = t, Tu(e, t), e.subtreeFlags = 0, t = n, n = e.child; n !== null; )
                    $h(n, t), n = n.sibling;
                  return _l(
                    e,
                    re.current & 1 | 2
                  ), mt && Bn(e, i.treeForkCount), e.child;
                }
                t = t.sibling;
              }
            i.tail !== null && Re() > _u && (e.flags |= 128, s = !0, Hl(i, !1), e.lanes = 4194304);
          }
        else {
          if (!s)
            if (t = uu(u), t !== null) {
              if (e.flags |= 128, s = !0, t = t.updateQueue, e.updateQueue = t, Tu(e, t), Hl(i, !0), i.tail === null && i.tailMode !== "collapsed" && i.tailMode !== "visible" && !u.alternate && !mt)
                return Ht(e), null;
            } else
              2 * Re() - i.renderingStartTime > _u && n !== 536870912 && (e.flags |= 128, s = !0, Hl(i, !1), e.lanes = 4194304);
          i.isBackwards ? (u.sibling = e.child, e.child = u) : (t = i.last, t !== null ? t.sibling = u : e.child = u, i.last = u);
        }
        if (i.tail !== null) {
          t = i.tail;
          t: {
            for (n = t; n !== null; ) {
              if (n.alternate !== null) {
                n = !1;
                break t;
              }
              n = n.sibling;
            }
            n = !0;
          }
          return i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Re(), t.sibling = null, u = re.current, u = s ? u & 1 | 2 : u & 1, i.tailMode === "visible" || i.tailMode === "collapsed" || !n || mt ? _l(e, u) : (n = u, Bt(oe, e), Bt(re, n), ye === null && (ye = e)), mt && Bn(e, i.treeForkCount), t;
        }
        return Ht(e), null;
      case 22:
      case 23:
        return Ue(e), _r(), i = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== i && (e.flags |= 8192) : i && (e.flags |= 8192), i ? (n & 536870912) !== 0 && (e.flags & 128) === 0 && (Ht(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : Ht(e), n = e.updateQueue, n !== null && Tu(e, n.retryQueue), n = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), i = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (i = e.memoizedState.cachePool.pool), i !== n && (e.flags |= 2048), t !== null && le(Qi), null;
      case 24:
        return n = null, t !== null && (n = t.memoizedState.cache), e.memoizedState.cache !== n && (e.flags |= 2048), Hn(Jt), Ht(e), null;
      case 25:
        return null;
      case 30:
        return e.flags |= 33554432, Ht(e), null;
    }
    throw Error(r(156, e.tag));
  }
  function jS(t, e) {
    switch (Sr(e), e.tag) {
      case 1:
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 3:
        return Hn(Jt), ca(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
      case 26:
      case 27:
      case 5:
        return Ns(e), null;
      case 31:
        if (e.memoizedState !== null) {
          if (Ue(e), e.alternate === null)
            throw Error(r(340));
          Hi();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 13:
        if (Ue(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
          if (e.alternate === null)
            throw Error(r(340));
          Hi();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 19:
        return Ur(e), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, t = e.memoizedState, t !== null && (t.rendering = null, t.tail = null), e.flags |= 4, e) : null;
      case 4:
        return ca(), null;
      case 10:
        return Hn(e.type), null;
      case 22:
      case 23:
        return Ue(e), _r(), t !== null && le(Qi), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return Hn(Jt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Cy(t, e) {
    switch (Sr(e), e.tag) {
      case 3:
        Hn(Jt), ca();
        break;
      case 26:
      case 27:
      case 5:
        Ns(e);
        break;
      case 4:
        ca();
        break;
      case 31:
        e.memoizedState !== null && Ue(e);
        break;
      case 13:
        Ue(e);
        break;
      case 19:
        Ur(e);
        break;
      case 10:
        Hn(e.type);
        break;
      case 22:
      case 23:
        Ue(e), _r(), t !== null && le(Qi);
        break;
      case 24:
        Hn(Jt);
    }
  }
  function Yl(t, e) {
    try {
      var n = e.updateQueue, i = n !== null ? n.lastEffect : null;
      if (i !== null) {
        var s = i.next;
        n = s;
        do {
          if ((n.tag & t) === t) {
            i = void 0;
            var u = n.create, d = n.inst;
            i = u(), d.destroy = i;
          }
          n = n.next;
        } while (n !== s);
      }
    } catch (g) {
      Dt(e, e.return, g);
    }
  }
  function ri(t, e, n) {
    try {
      var i = e.updateQueue, s = i !== null ? i.lastEffect : null;
      if (s !== null) {
        var u = s.next;
        i = u;
        do {
          if ((i.tag & t) === t) {
            var d = i.inst, g = d.destroy;
            if (g !== void 0) {
              d.destroy = void 0, s = e;
              var T = n, D = g;
              try {
                D();
              } catch (z) {
                Dt(
                  s,
                  T,
                  z
                );
              }
            }
          }
          i = i.next;
        } while (i !== u);
      }
    } catch (z) {
      Dt(e, e.return, z);
    }
  }
  function Ny(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var n = t.stateNode;
      try {
        pm(e, n);
      } catch (i) {
        Dt(t, t.return, i);
      }
    }
  }
  function My(t, e, n) {
    n.props = Fi(
      t.type,
      t.memoizedProps
    ), n.state = t.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (i) {
      Dt(t, e, i);
    }
  }
  function yn(t, e) {
    try {
      var n = t.ref;
      if (n !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var i = t.stateNode;
            break;
          case 30:
            var s = t.stateNode, u = _n(t.memoizedProps, s);
            (s.ref === null || s.ref.name !== u) && (s.ref = Vp(u)), i = s.ref;
            break;
          case 7:
            if (t.stateNode === null) {
              var d = new qe(t);
              v(
                t.child,
                !1,
                mb,
                d,
                void 0,
                void 0
              ), t.stateNode = d;
            }
            i = t.stateNode;
            break;
          default:
            i = t.stateNode;
        }
        typeof n == "function" ? t.refCleanup = n(i) : n.current = i;
      }
    } catch (g) {
      Dt(t, e, g);
    }
  }
  function ce(t, e) {
    var n = t.ref, i = t.refCleanup;
    if (n !== null)
      if (typeof i == "function")
        try {
          i();
        } catch (s) {
          Dt(t, e, s);
        } finally {
          t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (s) {
          Dt(t, e, s);
        }
      else n.current = null;
  }
  function Eu(t, e) {
    if ((t.tag === 5 || t.tag === 27 || t.tag === 6) && t.alternate === null && e !== null)
      for (var n = 0; n < e.length; n++)
        qp(
          t.stateNode,
          e[n]
        );
  }
  function Dy(t) {
    for (var e = t.return; e !== null && (hc(e) && qp(t.stateNode, e.stateNode), !dc(e)); )
      e = e.return;
  }
  function ql(t) {
    for (var e = t.return; e !== null && (hc(e) && yb(t.stateNode, e.stateNode), !dc(e)); )
      e = e.return;
  }
  function dc(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 27;
  }
  function hc(t) {
    return t && t.tag === 7 && t.stateNode !== null;
  }
  function mc(t) {
    var e = t.type, n = t.memoizedProps, i = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && i.focus();
          break t;
        case "img":
          n.src ? i.src = n.src : n.srcSet && (i.srcset = n.srcSet);
      }
    } catch (s) {
      Dt(t, t.return, s);
    }
  }
  function yc(t, e, n) {
    try {
      var i = t.stateNode;
      PS(i, t.type, n, e), i[Te] = e;
    } catch (s) {
      Dt(t, t.return, s);
    }
  }
  function Oy(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && pi(t.type) || t.tag === 4;
  }
  function pc(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || Oy(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && pi(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function vc(t, e, n, i) {
    var s = t.tag;
    if (s === 5 || s === 6)
      s = t.stateNode, e ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(s, e) : (e = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, e.appendChild(s), n = n._reactRootContainer, n != null || e.onclick !== null || (e.onclick = dn)), Eu(t, i), Et = !0;
    else if (s !== 4 && (s === 27 && (Eu(t, i), i = null, pi(t.type) && (n = t.stateNode, e = null)), t = t.child, t !== null))
      for (vc(
        t,
        e,
        n,
        i
      ), t = t.sibling; t !== null; )
        vc(
          t,
          e,
          n,
          i
        ), t = t.sibling;
  }
  function ju(t, e, n, i) {
    var s = t.tag;
    if (s === 5 || s === 6)
      s = t.stateNode, e ? n.insertBefore(s, e) : n.appendChild(s), Eu(t, i), Et = !0;
    else if (s !== 4 && (s === 27 && (Eu(t, i), i = null, pi(t.type) && (n = t.stateNode)), t = t.child, t !== null))
      for (ju(
        t,
        e,
        n,
        i
      ), t = t.sibling; t !== null; )
        ju(
          t,
          e,
          n,
          i
        ), t = t.sibling;
  }
  function Ry(t) {
    var e = t.stateNode, n = t.memoizedProps;
    try {
      for (var i = t.type, s = e.attributes; s.length; )
        e.removeAttributeNode(s[0]);
      fe(e, i, n), e[se] = t, e[Te] = n;
    } catch (u) {
      Dt(t, t.return, u);
    }
  }
  var Au = !1, Be = null;
  function zy(t) {
    (t.tag === 30 || (t.subtreeFlags & 33554432) !== 0) && (Au = !0);
  }
  var pn = null;
  function wy() {
    var t = pn;
    return pn = null, t;
  }
  var je = 0;
  function _a(t, e, n, i, s) {
    return je = 0, _y(
      t.child,
      e,
      n,
      i,
      s
    );
  }
  function _y(t, e, n, i, s) {
    for (var u = !1; t !== null; ) {
      if (t.tag === 5) {
        var d = t.stateNode;
        if (i !== null) {
          var g = tf(d);
          i.push(g), g.view && (u = !0);
        } else
          u || tf(d).view && (u = !0);
        Au = !0, wp(
          d,
          je === 0 ? e : e + "_" + je,
          n
        ), je++;
      } else (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && s || _y(
        t.child,
        e,
        n,
        i,
        s
      ) && (u = !0));
      t = t.sibling;
    }
    return u;
  }
  function vn(t, e) {
    for (; t !== null; )
      t.tag === 5 ? _p(t.stateNode, t.memoizedProps) : (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && e || vn(
        t.child,
        e
      )), t = t.sibling;
  }
  function Cu(t) {
    if ((t.subtreeFlags & 18874368) !== 0)
      for (t = t.child; t !== null; ) {
        if ((t.tag !== 22 || t.memoizedState === null) && (Cu(t), t.tag === 30 && (t.flags & 18874368) !== 0 && t.stateNode.paired)) {
          var e = t.memoizedProps;
          if (e.name == null || e.name === "auto")
            throw Error(r(544));
          var n = e.name;
          e = Vn(e.default, e.share), e !== "none" && (_a(
            t,
            n,
            e,
            null,
            !1
          ) || vn(t.child, !1));
        }
        t = t.sibling;
      }
  }
  function gc(t, e) {
    if (t.tag === 30) {
      var n = t.stateNode, i = t.memoizedProps, s = _n(i, n), u = Vn(
        i.default,
        n.paired ? i.share : i.enter
      );
      u !== "none" ? _a(t, s, u, null, !1) ? (Cu(t), n.paired || e || Ga(t, i.onEnter)) : vn(t.child, !1) : Cu(t);
    } else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        gc(t, e), t = t.sibling;
    else Cu(t);
  }
  function xc(t) {
    if (Be !== null && Be.size !== 0) {
      var e = Be;
      if ((t.subtreeFlags & 18874368) !== 0)
        for (t = t.child; t !== null; ) {
          if (t.tag !== 22 || t.memoizedState === null) {
            if (t.tag === 30 && (t.flags & 18874368) !== 0) {
              var n = t.memoizedProps, i = n.name;
              if (i != null && i !== "auto") {
                var s = e.get(i);
                if (s !== void 0) {
                  var u = Vn(
                    n.default,
                    n.share
                  );
                  if (u !== "none" && (_a(
                    t,
                    i,
                    u,
                    null,
                    !1
                  ) ? (u = t.stateNode, s.paired = u, u.paired = s, Ga(t, n.onShare)) : vn(t.child, !1)), e.delete(i), e.size === 0) break;
                }
              }
            }
            xc(t);
          }
          t = t.sibling;
        }
    }
  }
  function Sc(t) {
    if (t.tag === 30) {
      var e = t.memoizedProps, n = _n(e, t.stateNode), i = Be !== null ? Be.get(n) : void 0, s = Vn(
        e.default,
        i !== void 0 ? e.share : e.exit
      );
      s !== "none" && (_a(t, n, s, null, !1) ? i !== void 0 ? (s = t.stateNode, i.paired = s, s.paired = i, Be.delete(n), Ga(t, e.onShare)) : Ga(t, e.onExit) : vn(t.child, !1)), Be !== null && xc(t);
    } else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        Sc(t), t = t.sibling;
    else
      Be !== null && xc(t);
  }
  function Vy(t) {
    for (t = t.child; t !== null; ) {
      if (t.tag === 30) {
        var e = t.memoizedProps, n = _n(e, t.stateNode);
        e = Vn(e.default, e.update), t.flags &= -5, e !== "none" && _a(
          t,
          n,
          e,
          t.memoizedState = [],
          !1
        );
      } else
        (t.subtreeFlags & 33554432) !== 0 && Vy(t);
      t = t.sibling;
    }
  }
  function bc(t) {
    if ((t.subtreeFlags & 18874368) !== 0)
      for (t = t.child; t !== null; ) {
        if (t.tag !== 22 || t.memoizedState === null) {
          if (t.tag === 30 && (t.flags & 18874368) !== 0) {
            var e = t.stateNode;
            e.paired !== null && (e.paired = null, vn(t.child, !1));
          }
          bc(t);
        }
        t = t.sibling;
      }
  }
  function Nu(t) {
    if (t.tag === 30)
      t.stateNode.paired = null, vn(t.child, !1), bc(t);
    else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        Nu(t), t = t.sibling;
    else bc(t);
  }
  function Uy(t) {
    for (t = t.child; t !== null; )
      t.tag === 30 ? vn(t.child, !1) : (t.subtreeFlags & 33554432) !== 0 && Uy(t), t = t.sibling;
  }
  function Tc(t, e, n, i, s, u, d) {
    for (var g = !1; e !== null; ) {
      if (e.tag === 5) {
        var T = e.stateNode;
        if (u !== null && je < u.length) {
          var D = u[je], z = tf(T);
          (D.view || z.view) && (g = !0);
          var B;
          if (B = (t.flags & 4) === 0)
            if (z.clip) B = !0;
            else {
              B = D.rect;
              var N = z.rect;
              B = B.y !== N.y || B.x !== N.x || B.height !== N.height || B.width !== N.width;
            }
          B && (t.flags |= 4), z.abs ? z = !D.abs : (D = D.rect, z = z.rect, z = D.height !== z.height || D.width !== z.width), z && (t.flags |= 32);
        } else t.flags |= 32;
        (t.flags & 4) !== 0 && wp(
          T,
          je === 0 ? n : n + "_" + je,
          s
        ), g && (t.flags & 4) !== 0 || (pn === null && (pn = []), pn.push(
          T,
          je === 0 ? i : i + "_" + je,
          e.memoizedProps
        )), je++;
      } else (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && d ? t.flags |= e.flags & 32 : Tc(
        t,
        e.child,
        n,
        i,
        s,
        u,
        d
      ) && (g = !0));
      e = e.sibling;
    }
    return g;
  }
  function By(t, e) {
    for (t = t.child; t !== null; ) {
      if (t.tag === 30) {
        var n = t.memoizedProps, i = t.stateNode, s = _n(n, i), u = Vn(n.default, n.update), d;
        d = t.memoizedState, t.memoizedState = null, i = t;
        var g = t.child;
        je = 0, s = Tc(
          i,
          g,
          s,
          s,
          u,
          d,
          !1
        ), (t.flags & 4) !== 0 && s && Ga(t, n.onUpdate);
      } else
        (t.subtreeFlags & 33554432) !== 0 && By(t);
      t = t.sibling;
    }
  }
  var ie = !1, Nt = !1, gn = !1, Ec = !1, Ly = typeof WeakSet == "function" ? WeakSet : Set, ae = null, xn = !1, Gl = !1, Mu = !1, jc = !1;
  function AS(t, e, n) {
    if (t = t.containerInfo, Fc = $a, t = Gh(t), cr(t)) {
      if ("selectionStart" in t)
        var i = {
          start: t.selectionStart,
          end: t.selectionEnd
        };
      else
        t: {
          i = (i = t.ownerDocument) && i.defaultView || window;
          var s = i.getSelection && i.getSelection();
          if (s && s.rangeCount !== 0) {
            i = s.anchorNode;
            var u = s.anchorOffset, d = s.focusNode;
            s = s.focusOffset;
            try {
              i.nodeType, d.nodeType;
            } catch {
              i = null;
              break t;
            }
            var g = 0, T = -1, D = -1, z = 0, B = 0, N = t, R = null;
            e: for (; ; ) {
              for (var k; N !== i || u !== 0 && N.nodeType !== 3 || (T = g + u), N !== d || s !== 0 && N.nodeType !== 3 || (D = g + s), N.nodeType === 3 && (g += N.nodeValue.length), (k = N.firstChild) !== null; )
                R = N, N = k;
              for (; ; ) {
                if (N === t) break e;
                if (R === i && ++z === u && (T = g), R === d && ++B === s && (D = g), (k = N.nextSibling) !== null) break;
                N = R, R = N.parentNode;
              }
              N = k;
            }
            i = T === -1 || D === -1 ? null : { start: T, end: D };
          } else i = null;
        }
      i = i || { start: 0, end: 0 };
    } else i = null;
    for (Pc = { focusedElem: t, selectionRange: i }, $a = !1, n = (n & 335544064) === n, ae = e, e = n ? 9270 : 1024; ae !== null; ) {
      if (t = ae, n && (i = t.deletions, i !== null))
        for (u = 0; u < i.length; u++)
          n && Sc(i[u]);
      if (t.alternate === null && (t.flags & 2) !== 0)
        n && zy(t), Du(n);
      else {
        if (t.tag === 22) {
          if (i = t.alternate, t.memoizedState !== null) {
            i !== null && i.memoizedState === null && n && Sc(i), Du(n);
            continue;
          } else if (i !== null && i.memoizedState !== null) {
            n && zy(t), Du(n);
            continue;
          }
        }
        i = t.child, (t.subtreeFlags & e) !== 0 && i !== null ? (i.return = t, ae = i) : (n && Vy(t), Du(n));
      }
    }
    Be = null;
  }
  function Du(t) {
    for (; ae !== null; ) {
      var e = ae, n = t, i = e.alternate, s = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if ((s & 1024) !== 0 && i !== null) {
            n = void 0, s = i.memoizedProps, i = i.memoizedState;
            var u = e.stateNode;
            try {
              var d = Fi(
                e.type,
                s
              );
              n = u.getSnapshotBeforeUpdate(
                d,
                i
              ), u.__reactInternalSnapshotBeforeUpdate = n;
            } catch (g) {
              Dt(e, e.return, g);
            }
          }
          break;
        case 3:
          if ((s & 1024) !== 0) {
            if (i = e.stateNode.containerInfo, n = i.nodeType, n === 9)
              af(i);
            else if (n === 1)
              switch (i.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  af(i);
                  break;
                default:
                  i.textContent = "";
              }
          }
          break;
        case 5:
        case 26:
        case 27:
        case 6:
        case 4:
        case 17:
          break;
        case 30:
          n && i !== null && (n = _n(
            i.memoizedProps,
            i.stateNode
          ), s = e.memoizedProps, s = Vn(s.default, s.update), s !== "none" && _a(
            i,
            n,
            s,
            i.memoizedState = [],
            !0
          ));
          break;
        default:
          if ((s & 1024) !== 0) throw Error(r(163));
      }
      if (i = e.sibling, i !== null) {
        i.return = e.return, ae = i;
        break;
      }
      ae = e.return;
    }
  }
  function Hy(t, e, n) {
    var i = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Sn(t, n), i & 4 && Yl(5, n);
        break;
      case 1:
        if (Sn(t, n), i & 4)
          if (t = n.stateNode, e === null)
            try {
              t.componentDidMount();
            } catch (d) {
              Dt(n, n.return, d);
            }
          else {
            var s = Fi(
              n.type,
              e.memoizedProps
            );
            e = e.memoizedState;
            try {
              t.componentDidUpdate(
                s,
                e,
                t.__reactInternalSnapshotBeforeUpdate
              );
            } catch (d) {
              Dt(
                n,
                n.return,
                d
              );
            }
          }
        i & 64 && Ny(n), i & 512 && yn(n, n.return);
        break;
      case 3:
        if (Sn(t, n), i & 64 && (t = n.updateQueue, t !== null)) {
          if (e = null, n.child !== null)
            switch (n.child.tag) {
              case 27:
              case 5:
                e = n.child.stateNode;
                break;
              case 1:
                e = n.child.stateNode;
            }
          try {
            pm(t, e);
          } catch (d) {
            Dt(n, n.return, d);
          }
        }
        break;
      case 27:
        e === null && i & 4 && Ry(n);
      case 26:
      case 5:
        Sn(t, n), e === null && i & 4 && mc(n), i & 512 && yn(n, n.return);
        break;
      case 12:
        Sn(t, n);
        break;
      case 31:
        Sn(t, n), i & 4 && Xy(t, n);
        break;
      case 13:
        Sn(t, n), i & 4 && Qy(t, n), i & 64 && (t = n.memoizedState, t !== null && (t = t.dehydrated, t !== null && (n = BS.bind(
          null,
          n
        ), gb(t, n))));
        break;
      case 22:
        if (i = n.memoizedState !== null || ie, !i) {
          var u = e !== null && e.memoizedState !== null || Nt;
          e = ie, s = Nt, ie = i, (Nt = u) && !s ? (i = 2, (n.subtreeFlags & 8772) !== 0 && (i |= 1), nn(
            t,
            n,
            i
          )) : Sn(t, n), ie = e, Nt = s;
        }
        break;
      case 30:
        Sn(t, n), i & 512 && yn(n, n.return);
        break;
      case 7:
        i & 512 && yn(n, n.return);
      default:
        Sn(t, n);
    }
  }
  function Ac(t, e) {
    for (t = t.child; t !== null; )
      Yy(t, e), t = t.sibling;
  }
  function Yy(t, e) {
    switch (t.tag) {
      case 5:
      case 26:
        try {
          var n = t.stateNode;
          if (e) {
            var i = n.style;
            typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none";
          } else {
            var s = t.stateNode, u = t.memoizedProps.style, d = u != null && u.hasOwnProperty("display") ? u.display : null;
            s.style.display = d == null || typeof d == "boolean" ? "" : ("" + d).trim();
          }
        } catch (T) {
          Dt(t, t.return, T);
        }
        Cc(t, e);
        break;
      case 6:
        try {
          t.stateNode.nodeValue = e ? "" : t.memoizedProps, Et = !0;
        } catch (T) {
          Dt(t, t.return, T);
        }
        break;
      case 18:
        try {
          var g = t.stateNode;
          e ? zp(g, !0) : zp(t.stateNode, !1);
        } catch (T) {
          Dt(t, t.return, T);
        }
        break;
      case 22:
      case 23:
        t.memoizedState === null && Ac(t, e);
        break;
      default:
        Ac(t, e);
    }
  }
  function Cc(t, e) {
    if (t.subtreeFlags & 67108864)
      for (t = t.child; t !== null; ) {
        t: {
          var n = t, i = e;
          switch (n.tag) {
            case 4:
              Yy(n, i);
              break t;
            case 22:
              n.memoizedState === null && Cc(n, i);
              break t;
            default:
              Cc(n, i);
          }
        }
        t = t.sibling;
      }
  }
  function qy(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, qy(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && _s(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var Yt = null, Ae = !1;
  function tn(t, e, n) {
    for (n = n.child; n !== null; )
      Gy(t, e, n), n = n.sibling;
  }
  function Gy(t, e, n) {
    if (ze && typeof ze.onCommitFiberUnmount == "function")
      try {
        ze.onCommitFiberUnmount(fl, n);
      } catch {
      }
    switch (n.tag) {
      case 26:
        Nt || ce(n, e), tn(
          t,
          e,
          n
        ), n.memoizedState ? n.memoizedState.count-- : n.stateNode && !Nt && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        Nt || ce(n, e), ql(n);
        var i = Yt, s = Ae;
        pi(n.type) && (Yt = n.stateNode, Ae = !1), tn(
          t,
          e,
          n
        ), Kp(
          n.stateNode,
          n.type,
          n.memoizedProps
        ), Yt = i, Ae = s;
        break;
      case 5:
        Nt || ce(n, e), ql(n);
      case 6:
        if (n.tag === 6 && ql(n), i = Yt, s = Ae, Yt = null, tn(
          t,
          e,
          n
        ), Yt = i, Ae = s, Yt !== null)
          if (Ae)
            try {
              (Yt.nodeType === 9 ? Yt.body : Yt.nodeName === "HTML" ? Yt.ownerDocument.body : Yt).removeChild(n.stateNode), Et = !0;
            } catch (u) {
              Dt(
                n,
                e,
                u
              );
            }
          else
            try {
              Yt.removeChild(n.stateNode), Et = !0;
            } catch (u) {
              Dt(
                n,
                e,
                u
              );
            }
        break;
      case 18:
        Yt !== null && (Ae ? (t = Yt, Rp(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          n.stateNode
        ), Wa(t)) : Rp(Yt, n.stateNode));
        break;
      case 4:
        i = Yt, s = Ae, Yt = n.stateNode.containerInfo, Ae = !0, tn(
          t,
          e,
          n
        ), Yt = i, Ae = s;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        ri(2, n, e), Nt || ri(4, n, e), tn(
          t,
          e,
          n
        );
        break;
      case 1:
        Nt || (ce(n, e), i = n.stateNode, typeof i.componentWillUnmount == "function" && My(
          n,
          e,
          i
        )), tn(
          t,
          e,
          n
        );
        break;
      case 21:
        tn(
          t,
          e,
          n
        );
        break;
      case 22:
        Nt = (i = Nt) || n.memoizedState !== null, tn(
          t,
          e,
          n
        ), Nt = i;
        break;
      case 30:
        ce(n, e), tn(
          t,
          e,
          n
        );
        break;
      case 7:
        Nt || ce(n, e), tn(
          t,
          e,
          n
        );
        break;
      default:
        tn(
          t,
          e,
          n
        );
    }
  }
  function Xy(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        Wa(t);
      } catch (n) {
        Dt(e, e.return, n);
      }
    }
  }
  function Qy(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        Wa(t);
      } catch (n) {
        Dt(e, e.return, n);
      }
  }
  function CS(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new Ly()), e;
      case 22:
        return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new Ly()), e;
      default:
        throw Error(r(435, t.tag));
    }
  }
  function Ou(t, e) {
    var n = CS(t);
    e.forEach(function(i) {
      if (!n.has(i)) {
        n.add(i);
        var s = LS.bind(null, t, i);
        i.then(s, s);
      }
    });
  }
  function ge(t, e, n) {
    var i = e.deletions;
    if (i !== null)
      for (var s = 0; s < i.length; s++) {
        var u = i[s], d = t, g = e, T = g;
        t: for (; T !== null; ) {
          switch (T.tag) {
            case 27:
              if (pi(T.type)) {
                Yt = T.stateNode, Ae = !1;
                break t;
              }
              break;
            case 5:
              Yt = T.stateNode, Ae = !1;
              break t;
            case 3:
            case 4:
              Yt = T.stateNode.containerInfo, Ae = !0;
              break t;
          }
          T = T.return;
        }
        if (Yt === null) throw Error(r(160));
        Gy(d, g, u), Yt = null, Ae = !1, d = u.alternate, d !== null && (d.return = null), u.return = null;
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; )
        Zy(e, t, n), e = e.sibling;
  }
  var en = null;
  function Zy(t, e, n) {
    var i = t.alternate, s = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (s & 4 && (i = t.updateQueue, i = i !== null ? i.events : null, i !== null))
          for (var u = 0; u < i.length; u++) {
            var d = i[u];
            d.ref.impl = d.nextImpl;
          }
        ge(e, t, n), xe(t), s & 4 && (ri(3, t, t.return), Yl(3, t), ri(5, t, t.return));
        break;
      case 1:
        ge(e, t, n), xe(t), s & 512 && (Nt || i === null || ce(i, i.return)), s & 64 && ie && (t = t.updateQueue, t !== null && (e = t.callbacks, e !== null && (n = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = n === null ? e : n.concat(e))));
        break;
      case 26:
        if (u = en, ge(e, t, n), xe(t), s & 512 && (Nt || i === null || ce(i, i.return)), s & 4)
          if (s = i !== null ? i.memoizedState : null, n = t.memoizedState, i === null)
            if (n === null)
              if (t.stateNode === null)
                if (ie)
                  t.stateNode = Mp(
                    t.type,
                    t.memoizedProps,
                    e.containerInfo,
                    t
                  );
                else {
                  t: {
                    e = t.type, n = t.memoizedProps, s = u.ownerDocument || u;
                    e: switch (e) {
                      case "title":
                        i = s.getElementsByTagName("title")[0], (!i || i[ml] || i[se] || i.namespaceURI === "http://www.w3.org/2000/svg" || i.hasAttribute("itemprop")) && (i = s.createElement(e), s.head.insertBefore(
                          i,
                          s.querySelector("head > title")
                        )), fe(i, e, n), i[se] = t, ee(i), e = i;
                        break t;
                      case "link":
                        if (u = $p(
                          "link",
                          "href",
                          s
                        ).get(e + (n.href || ""))) {
                          for (d = 0; d < u.length; d++)
                            if (i = u[d], i.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && i.getAttribute("rel") === (n.rel == null ? null : n.rel) && i.getAttribute("title") === (n.title == null ? null : n.title) && i.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                              u.splice(d, 1);
                              break e;
                            }
                        }
                        i = s.createElement(e), fe(i, e, n), s.head.appendChild(i);
                        break;
                      case "meta":
                        if (u = $p(
                          "meta",
                          "content",
                          s
                        ).get(e + (n.content || ""))) {
                          for (d = 0; d < u.length; d++)
                            if (i = u[d], i.getAttribute("content") === (n.content == null ? null : "" + n.content) && i.getAttribute("name") === (n.name == null ? null : n.name) && i.getAttribute("property") === (n.property == null ? null : n.property) && i.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && i.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                              u.splice(d, 1);
                              break e;
                            }
                        }
                        i = s.createElement(e), fe(i, e, n), s.head.appendChild(i);
                        break;
                      default:
                        throw Error(r(468, e));
                    }
                    i[se] = t, ee(i), e = i;
                  }
                  t.stateNode = e;
                }
              else
                ie || ff(u, t.type, t.stateNode);
            else
              t.stateNode = Ip(
                u,
                n,
                t.memoizedProps
              );
          else
            s !== n ? (s === null ? (e = i.stateNode, e === null || Nt || e.parentNode.removeChild(e)) : s.count--, n === null ? ie || ff(u, t.type, t.stateNode) : Ip(u, n, t.memoizedProps)) : n === null && t.stateNode !== null && yc(
              t,
              t.memoizedProps,
              i.memoizedProps
            );
        break;
      case 27:
        ge(e, t, n), xe(t), s & 512 && (Nt || i === null || ce(i, i.return)), i !== null && s & 4 && yc(
          t,
          t.memoizedProps,
          i.memoizedProps
        );
        break;
      case 5:
        if (u = gn, gn = !1, ge(e, t, n), gn = u, xe(t), s & 512 && (Nt || i === null || ce(i, i.return)), t.flags & 32) {
          e = t.stateNode;
          try {
            pa(e, ""), Et = !0;
          } catch (z) {
            Dt(t, t.return, z);
          }
        }
        s & 4 && t.stateNode != null && (e = t.memoizedProps, yc(
          t,
          e,
          i !== null ? i.memoizedProps : e
        )), s & 1024 && (Ec = !0);
        break;
      case 6:
        if (ge(e, t, n), xe(t), s & 4) {
          if (t.stateNode === null)
            throw Error(r(162));
          e = t.memoizedProps, n = t.stateNode;
          try {
            n.nodeValue = e, Et = !0;
          } catch (z) {
            Dt(t, t.return, z);
          }
        }
        break;
      case 3:
        if (Et = !1, Zu = null, u = en, en = Il(e.containerInfo), ge(e, t, n), en = u, xe(t), s & 4 && i !== null && i.memoizedState.isDehydrated)
          try {
            Wa(e.containerInfo);
          } catch (z) {
            Dt(t, t.return, z);
          }
        Ec && (Ec = !1, Ky(t)), Et = !1;
        break;
      case 4:
        s = gn, gn = ie, i = dh(), u = en, en = Il(
          t.stateNode.containerInfo
        ), ge(e, t, n), xe(t), en = u, Et && Gl && (Mu = !0), Et = i, gn = s;
        break;
      case 12:
        ge(e, t, n), xe(t);
        break;
      case 31:
        ge(e, t, n), xe(t), s & 4 && (e = t.updateQueue, e !== null && (t.updateQueue = null, Ou(t, e)));
        break;
      case 13:
        ge(e, t, n), xe(t), t.child.flags & 8192 && t.memoizedState !== null != (i !== null && i.memoizedState !== null) && (wu = Re()), s & 4 && (e = t.updateQueue, e !== null && (t.updateQueue = null, Ou(t, e)));
        break;
      case 22:
        u = t.memoizedState !== null, d = i !== null && i.memoizedState !== null;
        var g = ie, T = Nt, D = gn;
        ie = g || u, gn = D || u, Nt = T || d, ge(e, t, n), Nt = T, gn = D, ie = g, xe(t), s & 8192 && (e = t.stateNode, e._visibility = u ? e._visibility & -2 : e._visibility | 1, !u || i === null || d || ie || Nt || (e = d || Nt, n = ie, i = Nt, ie = u || ie, Nt = e, ci(t, 2), ie = n, Nt = i), !u && gn || Ac(t, u)), s & 4 && (e = t.updateQueue, e !== null && (n = e.retryQueue, n !== null && (e.retryQueue = null, Ou(t, n))));
        break;
      case 19:
        ge(e, t, n), xe(t), s & 4 && (e = t.updateQueue, e !== null && (t.updateQueue = null, Ou(t, e)));
        break;
      case 30:
        s & 512 && (Nt || i === null || ce(i, i.return)), s = dh(), u = Gl, d = (n & 335544064) === n, g = t.memoizedProps, Gl = d && Vn(
          g.default,
          g.update
        ) !== "none", ge(e, t, n), xe(t), d && i !== null && Et && (t.flags |= 4), Gl = u, Et = s;
        break;
      case 21:
        break;
      case 7:
        s & 512 && (Nt || i === null || ce(i, i.return)), i && i.stateNode !== null && (i.stateNode._fragmentFiber = t);
      default:
        ge(e, t, n), xe(t);
    }
  }
  function xe(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var n, i = t.return; i !== null; ) {
          if (Oy(i)) {
            n = i;
            break;
          }
          i = i.return;
        }
        i = null;
        for (var s = t.return; s !== null; ) {
          if (hc(s)) {
            var u = s.stateNode;
            i === null ? i = [u] : i.push(u);
          }
          if (dc(s)) break;
          s = s.return;
        }
        var d = i;
        if (n == null) throw Error(r(160));
        switch (n.tag) {
          case 27:
            var g = n.stateNode, T = pc(t);
            ju(
              t,
              T,
              g,
              d
            );
            break;
          case 5:
            var D = n.stateNode;
            n.flags & 32 && (pa(D, ""), n.flags &= -33);
            var z = pc(t);
            ju(
              t,
              z,
              D,
              d
            );
            break;
          case 3:
          case 4:
            var B = n.stateNode.containerInfo, N = pc(t);
            vc(
              t,
              N,
              B,
              d
            );
            break;
          default:
            throw Error(r(161));
        }
      } catch (R) {
        Dt(t, t.return, R);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function Ky(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        Ky(e), e.tag === 5 && e.flags & 1024 && (e = e.stateNode, $a = !0, e.reset(), $a = !1), t = t.sibling;
      }
  }
  function Va(t, e) {
    if (e.subtreeFlags & 9270)
      for (e = e.child; e !== null; )
        ky(e, t), e = e.sibling;
    else By(e);
  }
  function ky(t, e) {
    var n = t.alternate;
    if (n === null) gc(t, !1);
    else
      switch (t.tag) {
        case 3:
          if (jc = xn = !1, wy(), Va(e, t), !xn && !Mu) {
            if (t = pn, t !== null)
              for (var i = 0; i < t.length; i += 3) {
                n = t[i];
                var s = t[i + 1];
                _p(n, t[i + 2]), n = n.ownerDocument.documentElement, n !== null && n.animate(
                  { opacity: [0, 0], pointerEvents: ["none", "none"] },
                  {
                    duration: 0,
                    fill: "forwards",
                    pseudoElement: "::view-transition-group(" + s + ")"
                  }
                );
              }
            t = e.containerInfo, t = t.nodeType === 9 ? t.documentElement : t.ownerDocument.documentElement, t !== null && t.style.viewTransitionName === "" && (t.style.viewTransitionName = "none", t.animate(
              { opacity: [0, 0], pointerEvents: ["none", "none"] },
              {
                duration: 0,
                fill: "forwards",
                pseudoElement: "::view-transition-group(root)"
              }
            ), t.animate(
              { width: [0, 0], height: [0, 0] },
              {
                duration: 0,
                fill: "forwards",
                pseudoElement: "::view-transition"
              }
            )), jc = !0;
          }
          pn = null;
          break;
        case 5:
          Va(e, t);
          break;
        case 4:
          i = xn, xn = !1, Va(e, t), xn && (Mu = !0), xn = i;
          break;
        case 22:
          t.memoizedState === null && (n.memoizedState !== null ? gc(t, !1) : Va(e, t));
          break;
        case 30:
          i = xn, s = wy(), xn = !1, Va(e, t), xn && (t.flags |= 4);
          var u = t.memoizedProps, d = t.stateNode;
          e = _n(u, d), d = _n(n.memoizedProps, d);
          var g = Vn(u.default, u.update);
          g === "none" ? e = !1 : (u = n.memoizedState, n.memoizedState = null, n = t.child, je = 0, e = Tc(
            t,
            n,
            e,
            d,
            g,
            u,
            !0
          ), je !== (u === null ? 0 : u.length) && (t.flags |= 32)), (t.flags & 4) !== 0 && e ? (Ga(
            t,
            t.memoizedProps.onUpdate
          ), pn = s) : s !== null && (s.push.apply(s, pn), pn = s), xn = (t.flags & 32) !== 0 ? !0 : i;
          break;
        default:
          Va(e, t);
      }
  }
  function Sn(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; )
        Hy(t, e.alternate, e), e = e.sibling;
  }
  function ci(t, e) {
    for (t = t.child; t !== null; ) {
      var n = t, i = e;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ri(4, n, n.return), ci(
            n,
            i
          );
          break;
        case 1:
          ce(n, n.return);
          var s = n.stateNode;
          typeof s.componentWillUnmount == "function" && My(
            n,
            n.return,
            s
          ), ci(
            n,
            i
          );
          break;
        case 27:
          (i & 2) !== 0 && Kp(
            n.stateNode,
            n.type,
            n.memoizedProps
          );
        case 5:
          ce(n, n.return), n.tag !== 5 && n.tag !== 27 || ql(n), ci(
            n,
            i
          );
          break;
        case 6:
          ql(n);
          break;
        case 26:
          ce(n, n.return), s = n.stateNode, n.memoizedState !== null || s === null || Nt || s.parentNode.removeChild(s), ci(
            n,
            i
          );
          break;
        case 22:
          n.memoizedState === null && ci(
            n,
            i
          );
          break;
        case 30:
          ce(n, n.return), ci(
            n,
            i
          );
          break;
        case 7:
          ce(n, n.return);
        default:
          ci(
            n,
            i
          );
      }
      t = t.sibling;
    }
  }
  function nn(t, e, n) {
    for (n = (e.subtreeFlags & 8772) !== 0 ? n : n & -2, e = e.child; e !== null; ) {
      var i = e.alternate, s = t, u = e, d = u.flags, g = (n & 1) !== 0;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          nn(
            s,
            u,
            n
          ), Yl(4, u);
          break;
        case 1:
          if (nn(
            s,
            u,
            n
          ), i = u, s = i.stateNode, typeof s.componentDidMount == "function")
            try {
              s.componentDidMount();
            } catch (z) {
              Dt(i, i.return, z);
            }
          if (i = u, s = i.updateQueue, s !== null) {
            var T = i.stateNode;
            try {
              var D = s.shared.hiddenCallbacks;
              if (D !== null)
                for (s.shared.hiddenCallbacks = null, s = 0; s < D.length; s++)
                  ym(D[s], T);
            } catch (z) {
              Dt(i, i.return, z);
            }
          }
          g && d & 64 && Ny(u), yn(u, u.return);
          break;
        case 27:
          (n & 2) !== 0 && Ry(u);
        case 5:
          u.tag !== 5 && u.tag !== 27 || Dy(u), nn(
            s,
            u,
            n
          ), g && i === null && d & 4 && mc(u), yn(u, u.return);
          break;
        case 6:
          Dy(u);
          break;
        case 26:
          T = u.stateNode, u.memoizedState !== null || T === null || ie || ff(
            Il(T.ownerDocument),
            u.type,
            T
          ), nn(
            s,
            u,
            n
          ), g && i === null && d & 4 && mc(u), yn(u, u.return);
          break;
        case 12:
          nn(
            s,
            u,
            n
          );
          break;
        case 31:
          nn(
            s,
            u,
            n
          ), g && d & 4 && Xy(s, u);
          break;
        case 13:
          nn(
            s,
            u,
            n
          ), g && d & 4 && Qy(s, u);
          break;
        case 22:
          u.memoizedState === null && nn(
            s,
            u,
            n
          ), yn(u, u.return);
          break;
        case 30:
          nn(
            s,
            u,
            n
          ), yn(u, u.return);
          break;
        case 7:
          yn(u, u.return);
        default:
          nn(
            s,
            u,
            n
          );
      }
      e = e.sibling;
    }
  }
  function Nc(t, e) {
    var n = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== n && (t != null && t.refCount++, n != null && Nl(n));
  }
  function Mc(t, e) {
    t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Nl(t));
  }
  function Je(t, e, n, i) {
    var s = (n & 335544064) === n;
    if (e.subtreeFlags & (s ? 10262 : 10256))
      for (e = e.child; e !== null; )
        Jy(
          t,
          e,
          n,
          i
        ), e = e.sibling;
    else s && Uy(e);
  }
  function Jy(t, e, n, i) {
    var s = (n & 335544064) === n;
    s && e.alternate === null && e.return !== null && e.return.alternate !== null && Nu(e);
    var u = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Je(
          t,
          e,
          n,
          i
        ), u & 2048 && Yl(9, e);
        break;
      case 1:
        Je(
          t,
          e,
          n,
          i
        );
        break;
      case 3:
        Je(
          t,
          e,
          n,
          i
        ), s && jc && (t = t.containerInfo, t = t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, t.style.viewTransitionName === "root" && (t.style.viewTransitionName = ""), t = t.ownerDocument.documentElement, t !== null && t.style.viewTransitionName === "none" && (t.style.viewTransitionName = "")), u & 2048 && (u = null, e.alternate !== null && (u = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== u && (e.refCount++, u != null && Nl(u)));
        break;
      case 12:
        if (u & 2048) {
          Je(
            t,
            e,
            n,
            i
          ), u = e.stateNode;
          try {
            var d = e.memoizedProps, g = d.id, T = d.onPostCommit;
            typeof T == "function" && T(
              g,
              e.alternate === null ? "mount" : "update",
              u.passiveEffectDuration,
              -0
            );
          } catch (D) {
            Dt(e, e.return, D);
          }
        } else
          Je(
            t,
            e,
            n,
            i
          );
        break;
      case 31:
        Je(
          t,
          e,
          n,
          i
        );
        break;
      case 13:
        Je(
          t,
          e,
          n,
          i
        );
        break;
      case 23:
        break;
      case 22:
        d = e.stateNode, g = e.alternate, e.memoizedState !== null ? (s && g !== null && g.memoizedState === null && Nu(g), d._visibility & 2 ? Je(
          t,
          e,
          n,
          i
        ) : Xl(
          t,
          e
        )) : (s && g !== null && g.memoizedState !== null && Nu(e), d._visibility & 2 ? Je(
          t,
          e,
          n,
          i
        ) : (d._visibility |= 2, Ua(
          t,
          e,
          n,
          i,
          (e.subtreeFlags & 10256) !== 0 || !1
        ))), u & 2048 && Nc(g, e);
        break;
      case 24:
        Je(
          t,
          e,
          n,
          i
        ), u & 2048 && Mc(e.alternate, e);
        break;
      case 30:
        s && (u = e.alternate, u !== null && (vn(u.child, !0), vn(e.child, !0))), Je(
          t,
          e,
          n,
          i
        );
        break;
      default:
        Je(
          t,
          e,
          n,
          i
        );
    }
  }
  function Ua(t, e, n, i, s) {
    for (s = s && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child; e !== null; ) {
      var u = t, d = e, g = n, T = i, D = d.flags;
      switch (d.tag) {
        case 0:
        case 11:
        case 15:
          Ua(
            u,
            d,
            g,
            T,
            s
          ), Yl(8, d);
          break;
        case 23:
          break;
        case 22:
          var z = d.stateNode;
          d.memoizedState !== null ? z._visibility & 2 ? Ua(
            u,
            d,
            g,
            T,
            s
          ) : Xl(
            u,
            d
          ) : (z._visibility |= 2, Ua(
            u,
            d,
            g,
            T,
            s
          )), s && D & 2048 && Nc(
            d.alternate,
            d
          );
          break;
        case 24:
          Ua(
            u,
            d,
            g,
            T,
            s
          ), s && D & 2048 && Mc(d.alternate, d);
          break;
        default:
          Ua(
            u,
            d,
            g,
            T,
            s
          );
      }
      e = e.sibling;
    }
  }
  function Xl(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var n = t, i = e, s = i.flags;
        switch (i.tag) {
          case 22:
            Xl(n, i), s & 2048 && Nc(
              i.alternate,
              i
            );
            break;
          case 24:
            Xl(n, i), s & 2048 && Mc(i.alternate, i);
            break;
          default:
            Xl(n, i);
        }
        e = e.sibling;
      }
  }
  var Pi = 8192;
  function Ii(t, e, n) {
    if (t.subtreeFlags & Pi)
      for (t = t.child; t !== null; )
        Fy(
          t,
          e,
          n
        ), t = t.sibling;
  }
  function Fy(t, e, n) {
    switch (t.tag) {
      case 26:
        Ii(
          t,
          e,
          n
        ), t.flags & Pi && (t.memoizedState !== null ? zb(
          n,
          en,
          t.memoizedState,
          t.memoizedProps
        ) : (t = t.stateNode, (e & 335544128) === e && nv(n, t)));
        break;
      case 5:
        Ii(
          t,
          e,
          n
        ), t.flags & Pi && (t = t.stateNode, (e & 335544128) === e && nv(n, t));
        break;
      case 3:
      case 4:
        var i = en;
        en = Il(t.stateNode.containerInfo), Ii(
          t,
          e,
          n
        ), en = i;
        break;
      case 22:
        t.memoizedState === null && (i = t.alternate, i !== null && i.memoizedState !== null ? (i = Pi, Pi = 16777216, Ii(
          t,
          e,
          n
        ), Pi = i) : Ii(
          t,
          e,
          n
        ));
        break;
      case 30:
        if ((t.flags & Pi) !== 0 && (i = t.memoizedProps.name, i != null && i !== "auto")) {
          var s = t.stateNode;
          s.paired = null, Be === null && (Be = /* @__PURE__ */ new Map()), Be.set(i, s);
        }
        Ii(
          t,
          e,
          n
        );
        break;
      default:
        Ii(
          t,
          e,
          n
        );
    }
  }
  function Py(t) {
    var e = t.alternate;
    if (e !== null && (t = e.child, t !== null)) {
      e.child = null;
      do
        e = t.sibling, t.sibling = null, t = e;
      while (t !== null);
    }
  }
  function Ql(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          ae = i, $y(
            i,
            t
          );
        }
      Py(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Iy(t), t = t.sibling;
  }
  function Iy(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Ql(t), t.flags & 2048 && ri(9, t, t.return);
        break;
      case 3:
        Ql(t);
        break;
      case 12:
        Ql(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, Ru(t)) : Ql(t);
        break;
      default:
        Ql(t);
    }
  }
  function Ru(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          ae = i, $y(
            i,
            t
          );
        }
      Py(t);
    }
    for (t = t.child; t !== null; ) {
      switch (e = t, e.tag) {
        case 0:
        case 11:
        case 15:
          ri(8, e, e.return), Ru(e);
          break;
        case 22:
          n = e.stateNode, n._visibility & 2 && (n._visibility &= -3, Ru(e));
          break;
        default:
          Ru(e);
      }
      t = t.sibling;
    }
  }
  function $y(t, e) {
    for (; ae !== null; ) {
      var n = ae;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          ri(8, n, e);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var i = n.memoizedState.cachePool.pool;
            i != null && i.refCount++;
          }
          break;
        case 24:
          Nl(n.memoizedState.cache);
      }
      if (i = n.child, i !== null) i.return = n, ae = i;
      else
        t: for (n = t; ae !== null; ) {
          i = ae;
          var s = i.sibling, u = i.return;
          if (qy(i), i === n) {
            ae = null;
            break t;
          }
          if (s !== null) {
            s.return = u, ae = s;
            break t;
          }
          ae = u;
        }
    }
  }
  var NS = {
    getCacheForType: function(t) {
      var e = ue(Jt), n = e.data.get(t);
      return n === void 0 && (n = t(), e.data.set(t, n)), n;
    },
    cacheSignal: function() {
      return ue(Jt).controller.signal;
    }
  }, MS = typeof WeakMap == "function" ? WeakMap : Map, At = 0, wt = null, yt = null, vt = 0, Mt = 0, Le = null, fi = !1, Ba = !1, Dc = !1, Qn = 0, Qt = 0, di = 0, $i = 0, zu = 0, He = 0, La = 0, Zl = null, Ce = null, Oc = !1, wu = 0, Wy = 0, _u = 1 / 0, Vu = null, hi = null, qt = 0, an = null, Wi = null, bn = 0, Rc = 0, zc = null, tp = null, Ha = null, Ya = null, qa = null, Kl = 0, Uu = null;
  function Ye() {
    return (At & 2) !== 0 && vt !== 0 ? vt & -vt : tt.T !== null ? Gc() : ih();
  }
  function ep() {
    if (He === 0)
      if ((vt & 536870912) === 0 || mt) {
        var t = Os;
        Os <<= 1, (Os & 3932160) === 0 && (Os = 262144), He = t;
      } else He = 536870912;
    return t = oe.current, t !== null && (t.flags |= 32), He;
  }
  function Ga(t, e) {
    if (e != null) {
      var n = t.stateNode, i = n.ref;
      i === null && (i = n.ref = Vp(
        _n(t.memoizedProps, n)
      )), Ya === null && (Ya = []), Ya.push(e.bind(null, i));
    }
  }
  function Ne(t, e, n) {
    (t === wt && (Mt === 2 || Mt === 9) || t.cancelPendingCommit !== null) && (Xa(t, 0), mi(
      t,
      vt,
      He,
      !1
    )), hl(t, n), ((At & 2) === 0 || t !== wt) && (t === wt && ((At & 2) === 0 && ($i |= n), Qt === 4 && mi(
      t,
      vt,
      He,
      !1
    )), Tn(t));
  }
  function np(t, e, n) {
    if ((At & 6) !== 0) throw Error(r(327));
    var i = !n && (e & 127) === 0 && (e & t.expiredLanes) === 0 || dl(t, e), s = i ? RS(t, e) : _c(t, e, !0), u = i;
    do {
      if (s === 0) {
        Ba && !i && mi(t, e, 0, !1);
        break;
      } else {
        if (n = t.current.alternate, u && !DS(n)) {
          s = _c(t, e, !1), u = !1;
          continue;
        }
        if (s === 2) {
          if (u = e, t.errorRecoveryDisabledLanes & u)
            var d = 0;
          else
            d = t.pendingLanes & -536870913, d = d !== 0 ? d : d & 536870912 ? 536870912 : 0;
          if (d !== 0) {
            e = d;
            t: {
              var g = t;
              s = Zl;
              var T = g.current.memoizedState.isDehydrated;
              if (T && (Xa(g, d).flags |= 256), d = _c(
                g,
                d,
                !1
              ), d !== 2 && d !== 6) {
                if (Dc && !T) {
                  g.errorRecoveryDisabledLanes |= u, $i |= u, s = 4;
                  break t;
                }
                u = Ce, Ce = s, u !== null && (Ce === null ? Ce = u : Ce.push.apply(
                  Ce,
                  u
                ));
              }
              s = d;
            }
            if (u = !1, s !== 2) continue;
          }
        }
        if (s === 1) {
          Xa(t, 0), mi(t, e, 0, !0);
          break;
        }
        t: {
          switch (i = t, u = s, u) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((e & 4194048) !== e && (e & 62914560) !== e)
                break;
            case 6:
              mi(
                i,
                e,
                He,
                !fi
              );
              break t;
            case 2:
              Ce = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((e & 62914560) === e && (s = wu + 300 - Re(), 10 < s)) {
            if (mi(
              i,
              e,
              He,
              !fi
            ), zs(i, 0, !0) !== 0) break t;
            bn = e, i.timeoutHandle = Wc(
              ip.bind(
                null,
                i,
                n,
                Ce,
                Vu,
                Oc,
                e,
                He,
                $i,
                La,
                fi,
                u,
                "Throttled",
                -0,
                0
              ),
              s
            );
            break t;
          }
          ip(
            i,
            n,
            Ce,
            Vu,
            Oc,
            e,
            He,
            $i,
            La,
            fi,
            u,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Tn(t);
  }
  function ip(t, e, n, i, s, u, d, g, T, D, z, B, N, R) {
    t.timeoutHandle = -1;
    var k = e.subtreeFlags, $ = (u & 335544064) === u;
    if (B = null, ($ || k & 8192 || (k & 16785408) === 16785408) && (B = {
      stylesheets: null,
      count: 0,
      imgCount: 0,
      imgBytes: 0,
      suspenseyImages: [],
      waitingForImages: !0,
      waitingForViewTransition: !1,
      unsuspend: dn
    }, Be = null, Fy(
      e,
      u,
      B
    ), $ && (k = B, $ = t.containerInfo, $ = ($.nodeType === 9 ? $ : $.ownerDocument).__reactViewTransition, $ != null && (k.count++, k.waitingForViewTransition = !0, k = ts.bind(k), $.finished.then(k, k))), k = (u & 62914560) === u ? wu - Re() : (u & 4194048) === u ? Wy - Re() : 0, k = wb(
      B,
      k
    ), k !== null)) {
      bn = u, t.cancelPendingCommit = k(
        fp.bind(
          null,
          t,
          e,
          u,
          n,
          i,
          s,
          d,
          g,
          T,
          D,
          z,
          B,
          null,
          N,
          R
        )
      ), mi(t, u, d, !D);
      return;
    }
    fp(
      t,
      e,
      u,
      n,
      i,
      s,
      d,
      g,
      T,
      D,
      z,
      B
    );
  }
  function DS(t) {
    for (var e = t; ; ) {
      var n = e.tag;
      if ((n === 0 || n === 11 || n === 15) && e.flags & 16384 && (n = e.updateQueue, n !== null && (n = n.stores, n !== null)))
        for (var i = 0; i < n.length; i++) {
          var s = n[i], u = s.getSnapshot;
          s = s.value;
          try {
            if (!Ve(u(), s)) return !1;
          } catch {
            return !1;
          }
        }
      if (n = e.child, e.subtreeFlags & 16384 && n !== null)
        n.return = e, e = n;
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
    }
    return !0;
  }
  function mi(t, e, n, i) {
    e = $d(t, e), e &= ~zu, e &= ~$i, t.suspendedLanes |= e, t.pingedLanes &= ~e, i && (t.warmLanes |= e), i = t.expirationTimes;
    for (var s = e; 0 < s; ) {
      var u = 31 - we(s), d = 1 << u;
      i[u] = -1, s &= ~d;
    }
    n !== 0 && th(t, n, e);
  }
  function Bu() {
    return (At & 6) === 0 ? (kl(0), !1) : !0;
  }
  function wc() {
    if (yt !== null) {
      if (Mt === 0)
        var t = yt.return;
      else
        t = yt, Ln = Yi = null, qr(t), Da = null, Ol = 0, t = yt;
      for (; t !== null; )
        Cy(t.alternate, t), t = t.return;
      yt = null;
    }
  }
  function Xa(t, e) {
    var n = t.timeoutHandle;
    return n !== -1 && (t.timeoutHandle = -1, WS(n)), n = t.cancelPendingCommit, n !== null && (t.cancelPendingCommit = null, n()), bn = 0, wc(), wt = t, yt = n = Un(t.current, null), vt = e, Mt = 0, Le = null, fi = !1, Ba = dl(t, e), Dc = !1, La = He = zu = $i = di = Qt = 0, Ce = Zl = null, Oc = !1, Qn = $d(t, e), Zs(), n;
  }
  function ap(t, e) {
    dt = null, tt.H = pu, e === Ma || e === nu ? (e = fm(), Mt = 3) : e === Mr ? (e = fm(), Mt = 4) : Mt = e === nc ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, Le = e, yt === null && (Qt = 1, vu(
      t,
      Qe(e, t.current)
    ));
  }
  function lp() {
    var t = oe.current;
    return t === null ? !0 : (vt & 4194048) === vt ? ye === null : (vt & 62914560) === vt || (vt & 536870912) !== 0 ? t === ye : !1;
  }
  function sp() {
    var t = tt.H;
    return tt.H = pu, t === null ? pu : t;
  }
  function up() {
    var t = tt.A;
    return tt.A = NS, t;
  }
  function Lu() {
    Qt = 4, fi || (vt & 4194048) !== vt && oe.current !== null || (Ba = !0), (di & 134217727) === 0 && ($i & 134217727) === 0 || wt === null || mi(
      wt,
      vt,
      He,
      !1
    );
  }
  function _c(t, e, n) {
    var i = At;
    At |= 2;
    var s = sp(), u = up();
    (wt !== t || vt !== e) && (Vu = null, Xa(t, e)), e = !1;
    var d = Qt;
    t: do
      try {
        if (Mt !== 0 && yt !== null) {
          var g = yt, T = Le;
          switch (Mt) {
            case 8:
              wc(), d = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              oe.current === null && (e = !0);
              var D = Mt;
              if (Mt = 0, Le = null, Qa(t, g, T, D), n && Ba) {
                d = 0;
                break t;
              }
              break;
            default:
              D = Mt, Mt = 0, Le = null, Qa(t, g, T, D);
          }
        }
        OS(), d = Qt;
        break;
      } catch (z) {
        ap(t, z);
      }
    while (!0);
    return e && t.shellSuspendCounter++, Ln = Yi = null, At = i, tt.H = s, tt.A = u, yt === null && (wt = null, vt = 0, Zs()), d;
  }
  function OS() {
    for (; yt !== null; ) op(yt);
  }
  function RS(t, e) {
    var n = At;
    At |= 2;
    var i = sp(), s = up();
    wt !== t || vt !== e ? (Vu = null, _u = Re() + 500, Xa(t, e)) : Ba = dl(
      t,
      e
    );
    t: do
      try {
        if (Mt !== 0 && yt !== null) {
          e = yt;
          var u = Le;
          e: switch (Mt) {
            case 1:
              Mt = 0, Le = null, Qa(t, e, u, 1);
              break;
            case 2:
            case 9:
              if (rm(u)) {
                Mt = 0, Le = null, rp(e);
                break;
              }
              e = function() {
                Mt !== 2 && Mt !== 9 || wt !== t || (Mt = 7), Tn(t);
              }, u.then(e, e);
              break t;
            case 3:
              Mt = 7;
              break t;
            case 4:
              Mt = 5;
              break t;
            case 7:
              rm(u) ? (Mt = 0, Le = null, rp(e)) : (Mt = 0, Le = null, Qa(t, e, u, 7));
              break;
            case 5:
              var d = null;
              switch (yt.tag) {
                case 26:
                  d = yt.memoizedState;
                case 5:
                case 27:
                  var g = yt;
                  if (d ? tv(d) : g.stateNode.complete) {
                    Mt = 0, Le = null;
                    var T = g.sibling;
                    if (T !== null) yt = T;
                    else {
                      var D = g.return;
                      D !== null ? (yt = D, Hu(D)) : yt = null;
                    }
                    break e;
                  }
              }
              Mt = 0, Le = null, Qa(t, e, u, 5);
              break;
            case 6:
              Mt = 0, Le = null, Qa(t, e, u, 6);
              break;
            case 8:
              wc(), Qt = 6;
              break t;
            default:
              throw Error(r(462));
          }
        }
        zS();
        break;
      } catch (z) {
        ap(t, z);
      }
    while (!0);
    return Ln = Yi = null, tt.H = i, tt.A = s, At = n, yt !== null ? 0 : (wt = null, vt = 0, Zs(), Qt);
  }
  function zS() {
    for (; yt !== null && !F1(); )
      op(yt);
  }
  function op(t) {
    var e = jy(t.alternate, t, Qn);
    t.memoizedProps = t.pendingProps, e === null ? Hu(t) : yt = e;
  }
  function rp(t) {
    var e = t, n = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = vy(
          n,
          e,
          e.pendingProps,
          e.type,
          void 0,
          vt
        );
        break;
      case 11:
        e = vy(
          n,
          e,
          e.pendingProps,
          e.type.render,
          e.ref,
          vt
        );
        break;
      case 5:
        qr(e);
        var i = e;
        i === ne && (mt ? (Is(i), i.tag === 5 && i.stateNode != null && (Lt = i.stateNode)) : (Is(i), mt = !0));
      default:
        Cy(n, e), e = yt = $h(e, Qn), e = jy(n, e, Qn);
    }
    t.memoizedProps = t.pendingProps, e === null ? Hu(t) : yt = e;
  }
  function Qa(t, e, n, i) {
    Ln = Yi = null, qr(e), Da = null, Ol = 0;
    var s = e.return;
    try {
      if (xS(
        t,
        s,
        e,
        n,
        vt
      )) {
        Qt = 1, vu(
          t,
          Qe(n, t.current)
        ), yt = null;
        return;
      }
    } catch (u) {
      if (s !== null) throw yt = s, u;
      Qt = 1, vu(
        t,
        Qe(n, t.current)
      ), yt = null;
      return;
    }
    e.flags & 32768 ? (mt || i === 1 ? t = !0 : Ba || (vt & 536870912) !== 0 ? t = !1 : (fi = t = !0, (i === 2 || i === 9 || i === 3 || i === 6) && (i = oe.current, i !== null && i.tag === 13 && (i.flags |= 16384))), cp(e, t)) : Hu(e);
  }
  function Hu(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        cp(
          e,
          fi
        );
        return;
      }
      t = e.return;
      var n = ES(
        e.alternate,
        e,
        Qn
      );
      if (n !== null) {
        yt = n;
        return;
      }
      if (e = e.sibling, e !== null) {
        yt = e;
        return;
      }
      yt = e = t;
    } while (e !== null);
    Qt === 0 && (Qt = 5);
  }
  function cp(t, e) {
    do {
      var n = jS(t.alternate, t);
      if (n !== null) {
        n.flags &= 32767, yt = n;
        return;
      }
      if (n = t.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !e && (t = t.sibling, t !== null)) {
        yt = t;
        return;
      }
      yt = t = n;
    } while (t !== null);
    Qt = 6, yt = null;
  }
  function fp(t, e, n, i, s, u, d, g, T, D, z, B) {
    t.cancelPendingCommit = null;
    do
      Yu();
    while (qt !== 0);
    if ((At & 6) !== 0) throw Error(r(327));
    if (e !== null) {
      if (e === t.current) throw Error(r(177));
      t === wt && (yt = wt = null, vt = 0), Wi = e, an = t, bn = n, zc = s, tp = i, wS(
        t,
        e,
        n,
        d,
        g,
        T,
        B
      );
    }
  }
  function wS(t, e, n, i, s, u, d) {
    var g = e.lanes | e.childLanes;
    if (Rc = g, g |= yr, lx(
      t,
      n,
      g,
      i,
      s,
      u
    ), Ya = null, (n & 335544064) === n ? (qa = uS(t), i = 10262) : (qa = null, i = 10256), (e.subtreeFlags & i) !== 0 || (e.flags & i) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, HS(Ms, function() {
      return Lc(), null;
    })) : (t.callbackNode = null, t.callbackPriority = 0), Au = !1, i = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || i) {
      i = tt.T, tt.T = null, s = rt.p, rt.p = 2, u = At, At |= 4;
      try {
        AS(t, e, n);
      } finally {
        At = u, rt.p = s, tt.T = i;
      }
    }
    qt = 1, Au ? Ha = lb(
      d,
      t.containerInfo,
      qa,
      Vc,
      Uc,
      VS,
      Bc,
      Lc,
      _S
    ) : (Vc(), Uc(), Bc());
  }
  function _S(t) {
    if (qt !== 0) {
      var e = an.onRecoverableError;
      e(t, { componentStack: null });
    }
  }
  function VS() {
    qt === 3 && (qt = 0, ky(Wi, an), qt = 4);
  }
  function Vc() {
    if (qt === 1) {
      qt = 0;
      var t = an, e = Wi, n = bn, i = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || i) {
        i = tt.T, tt.T = null;
        var s = rt.p;
        rt.p = 2;
        var u = At;
        At |= 4;
        try {
          Gl = Mu = !1, Zy(e, t, n), n = Pc;
          var d = Gh(t.containerInfo), g = n.focusedElem, T = n.selectionRange;
          if (d !== g && g && g.ownerDocument && qh(
            g.ownerDocument.documentElement,
            g
          )) {
            if (T !== null && cr(g)) {
              var D = T.start, z = T.end;
              if (z === void 0 && (z = D), "selectionStart" in g)
                g.selectionStart = D, g.selectionEnd = Math.min(
                  z,
                  g.value.length
                );
              else {
                var B = g.ownerDocument || document, N = B && B.defaultView || window;
                if (N.getSelection) {
                  var R = N.getSelection(), k = g.textContent.length, $ = Math.min(T.start, k), ht = T.end === void 0 ? $ : Math.min(T.end, k);
                  !R.extend && $ > ht && (d = ht, ht = $, $ = d);
                  var M = Yh(
                    g,
                    $
                  ), E = Yh(
                    g,
                    ht
                  );
                  if (M && E && (R.rangeCount !== 1 || R.anchorNode !== M.node || R.anchorOffset !== M.offset || R.focusNode !== E.node || R.focusOffset !== E.offset)) {
                    var O = B.createRange();
                    O.setStart(M.node, M.offset), R.removeAllRanges(), $ > ht ? (R.addRange(O), R.extend(E.node, E.offset)) : (O.setEnd(E.node, E.offset), R.addRange(O));
                  }
                }
              }
            }
            for (B = [], R = g; R = R.parentNode; )
              R.nodeType === 1 && B.push({
                element: R,
                left: R.scrollLeft,
                top: R.scrollTop
              });
            for (typeof g.focus == "function" && g.focus(), g = 0; g < B.length; g++) {
              var U = B[g];
              U.element.scrollLeft = U.left, U.element.scrollTop = U.top;
            }
          }
          $a = !!Fc, Pc = Fc = null;
        } finally {
          At = u, rt.p = s, tt.T = i;
        }
      }
      t.current = e, qt = 2;
    }
  }
  function Uc() {
    if (qt === 2) {
      qt = 0;
      var t = an, e = Wi, n = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || n) {
        n = tt.T, tt.T = null;
        var i = rt.p;
        rt.p = 2;
        var s = At;
        At |= 4;
        try {
          Hy(t, e.alternate, e);
        } finally {
          At = s, rt.p = i, tt.T = n;
        }
      }
      qt = 3;
    }
  }
  function Bc() {
    if (qt === 4 || qt === 3) {
      qt = 0;
      var t = Ha;
      Ha = null, P1();
      var e = an, n = Wi, i = bn, s = tp, u = (i & 335544064) === i ? 10262 : 10256;
      if ((n.subtreeFlags & u) !== 0 || (n.flags & u) !== 0 ? qt = 5 : (qt = 0, Wi = an = null, dp(e, e.pendingLanes)), u = e.pendingLanes, u === 0 && (hi = null), Ko(i), n = n.stateNode, ze && typeof ze.onCommitFiberRoot == "function")
        try {
          ze.onCommitFiberRoot(
            fl,
            n,
            void 0,
            (n.current.flags & 128) === 128
          );
        } catch {
        }
      if (s !== null) {
        n = tt.T, u = rt.p, rt.p = 2, tt.T = null;
        try {
          for (var d = e.onRecoverableError, g = 0; g < s.length; g++) {
            var T = s[g];
            d(T.value, {
              componentStack: T.stack
            });
          }
        } finally {
          tt.T = n, rt.p = u;
        }
      }
      if (s = Ya, d = qa, qa = null, s !== null && (Ya = null, d === null && (d = []), t !== null))
        for (T = 0; T < s.length; T++)
          n = (0, s[T])(
            d
          ), n !== void 0 && t.finished.finally(n);
      (bn & 3) !== 0 && Yu(), Tn(e), u = e.pendingLanes, (i & 261930) !== 0 && (u & 42) !== 0 ? e === Uu ? Kl++ : (Kl = 0, Uu = e) : (Kl = 0, Uu = null), kl(0);
    }
  }
  function dp(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, Nl(e)));
  }
  function Yu() {
    return Ha !== null && (Ha.skipTransition(), Ha = null), Vc(), Uc(), Bc(), Lc();
  }
  function Lc() {
    if (qt !== 5) return !1;
    var t = an, e = Rc;
    Rc = 0;
    var n = Ko(bn), i = tt.T, s = rt.p;
    try {
      rt.p = 32 > n ? 32 : n, tt.T = null, n = zc, zc = null;
      var u = an, d = bn;
      if (qt = 0, Wi = an = null, bn = 0, (At & 6) !== 0) throw Error(r(331));
      var g = At;
      if (At |= 4, Iy(u.current), Jy(
        u,
        u.current,
        d,
        n
      ), At = g, kl(0, !1), ze && typeof ze.onPostCommitFiberRoot == "function")
        try {
          ze.onPostCommitFiberRoot(fl, u);
        } catch {
        }
      return !0;
    } finally {
      rt.p = s, tt.T = i, dp(t, e);
    }
  }
  function hp(t, e, n) {
    e = Qe(n, e), e = ec(t.stateNode, e, 2), t = li(t, e, 2), t !== null && (hl(t, 2), Tn(t));
  }
  function Dt(t, e, n) {
    if (t.tag === 3)
      hp(t, t, n);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          hp(
            e,
            t,
            n
          );
          break;
        } else if (e.tag === 1) {
          var i = e.stateNode;
          if (typeof e.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (hi === null || !hi.has(i))) {
            t = Qe(n, t), n = ry(2), i = li(e, n, 2), i !== null && (cy(
              n,
              i,
              e,
              t
            ), hl(i, 2), Tn(i));
            break;
          }
        }
        e = e.return;
      }
  }
  function Hc(t, e, n) {
    var i = t.pingCache;
    if (i === null) {
      i = t.pingCache = new MS();
      var s = /* @__PURE__ */ new Set();
      i.set(e, s);
    } else
      s = i.get(e), s === void 0 && (s = /* @__PURE__ */ new Set(), i.set(e, s));
    s.has(n) || (Dc = !0, s.add(n), t = US.bind(null, t, e, n), e.then(t, t));
  }
  function US(t, e, n) {
    var i = t.pingCache;
    i !== null && i.delete(e), t.pingedLanes |= t.suspendedLanes & n, t.warmLanes &= ~n, wt === t && (vt & n) === n && ((Qt === 4 || Qt === 3 && (vt & 62914560) === vt && 300 > Re() - wu) && (At & 2) === 0 ? Xa(t, 0) : zu |= n, La === vt && (La = 0)), Tn(t);
  }
  function mp(t, e) {
    e === 0 && (e = Wd()), t = Bi(t, e), t !== null && (hl(t, e), Tn(t));
  }
  function BS(t) {
    var e = t.memoizedState, n = 0;
    e !== null && (n = e.retryLane), mp(t, n);
  }
  function LS(t, e) {
    var n = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var i = t.stateNode, s = t.memoizedState;
        s !== null && (n = s.retryLane);
        break;
      case 19:
        i = t.stateNode;
        break;
      case 22:
        i = t.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    i !== null && i.delete(e), mp(t, n);
  }
  function HS(t, e) {
    return Go(t, e);
  }
  var Za = null, Ka = null, Yc = !1, qu = !1, qc = !1, yi = 0;
  function Tn(t) {
    t !== Ka && t.next === null && (Ka === null ? Za = Ka = t : Ka = Ka.next = t), qu = !0, Yc || (Yc = !0, qS());
  }
  function kl(t, e) {
    if (!qc && qu) {
      qc = !0;
      do
        for (var n = !1, i = Za; i !== null; ) {
          if (t !== 0) {
            var s = i.pendingLanes;
            if (s === 0) var u = 0;
            else {
              var d = i.suspendedLanes, g = i.pingedLanes;
              u = (1 << 31 - we(42 | t) + 1) - 1, u &= s & ~(d & ~g), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (n = !0, gp(i, u));
          } else
            u = vt, u = zs(
              i,
              i === wt ? u : 0,
              i.cancelPendingCommit !== null || i.timeoutHandle !== -1
            ), (u & 3) === 0 || dl(i, u) || (n = !0, gp(i, u));
          i = i.next;
        }
      while (n);
      qc = !1;
    }
  }
  function YS() {
    yp();
  }
  function yp() {
    qu = Yc = !1;
    var t = 0;
    yi !== 0 && $S() && (t = yi);
    for (var e = Re(), n = null, i = Za; i !== null; ) {
      var s = i.next, u = pp(i, e);
      u === 0 ? (i.next = null, n === null ? Za = s : n.next = s, s === null && (Ka = n)) : (n = i, (t !== 0 || (u & 3) !== 0) && (qu = !0)), i = s;
    }
    qt !== 0 && qt !== 5 || kl(t), yi !== 0 && (yi = 0);
  }
  function pp(t, e) {
    for (var n = t.suspendedLanes, i = t.pingedLanes, s = t.expirationTimes, u = t.pendingLanes & -62914561; 0 < u; ) {
      var d = 31 - we(u), g = 1 << d, T = s[d];
      T === -1 ? ((g & n) === 0 || (g & i) !== 0) && (s[d] = ax(g, e)) : T <= e && (t.expiredLanes |= g), u &= ~g;
    }
    if (e = wt, n = vt, n = zs(
      t,
      t === e ? n : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), i = t.callbackNode, n === 0 || t === e && (Mt === 2 || Mt === 9) || t.cancelPendingCommit !== null)
      return i !== null && i !== null && Xo(i), t.callbackNode = null, t.callbackPriority = 0;
    if ((n & 3) === 0 || dl(t, n)) {
      if (e = n & -n, e === t.callbackPriority) return e;
      switch (i !== null && Xo(i), Ko(n)) {
        case 2:
        case 8:
          n = Pd;
          break;
        case 32:
          n = Ms;
          break;
        case 268435456:
          n = Id;
          break;
        default:
          n = Ms;
      }
      return i = vp.bind(null, t), n = Go(n, i), t.callbackPriority = e, t.callbackNode = n, e;
    }
    return i !== null && i !== null && Xo(i), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function vp(t, e) {
    if (qt !== 0 && qt !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var n = t.callbackNode;
    if (Yu() && t.callbackNode !== n)
      return null;
    var i = vt;
    return i = zs(
      t,
      t === wt ? i : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), i === 0 ? null : (np(t, i, e), pp(t, Re()), t.callbackNode != null && t.callbackNode === n ? vp.bind(null, t) : null);
  }
  function gp(t, e) {
    if (Yu()) return null;
    np(t, e, !0);
  }
  function qS() {
    tb(function() {
      (At & 6) !== 0 ? Go(
        Fd,
        YS
      ) : yp();
    });
  }
  function Gc() {
    if (yi === 0) {
      var t = Xi;
      t === 0 && (t = Ds, Ds <<= 1, (Ds & 261888) === 0 && (Ds = 256)), yi = t;
    }
    return yi;
  }
  function xp(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : Bs(t);
  }
  function GS(t, e, n, i, s) {
    if (e === "submit" && n && n.stateNode === s) {
      var u = xp(
        (s[Te] || null).action
      ), d = i.submitter;
      d && (e = (e = d[Te] || null) ? xp(e.formAction) : d.getAttribute("formAction"), e !== null && (u = e, d = null));
      var g = new qs(
        "action",
        "action",
        null,
        i,
        s
      );
      t.push({
        event: g,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (i.defaultPrevented) {
                if (yi !== 0) {
                  var T = new FormData(s, d);
                  Pr(
                    n,
                    {
                      pending: !0,
                      data: T,
                      method: s.method,
                      action: u
                    },
                    null,
                    T
                  );
                }
              } else
                typeof u == "function" && (g.preventDefault(), T = new FormData(s, d), Pr(
                  n,
                  {
                    pending: !0,
                    data: T,
                    method: s.method,
                    action: u
                  },
                  u,
                  T
                ));
            },
            currentTarget: s
          }
        ]
      });
    }
  }
  for (var Xc = 0; Xc < mr.length; Xc++) {
    var Qc = mr[Xc], XS = Qc.toLowerCase(), QS = Qc[0].toUpperCase() + Qc.slice(1);
    We(
      XS,
      "on" + QS
    );
  }
  We(Zh, "onAnimationEnd"), We(Kh, "onAnimationIteration"), We(kh, "onAnimationStart"), We("dblclick", "onDoubleClick"), We("focusin", "onFocus"), We("focusout", "onBlur"), We(Wx, "onTransitionRun"), We(tS, "onTransitionStart"), We(eS, "onTransitionCancel"), We(Jh, "onTransitionEnd"), ma("onMouseEnter", ["mouseout", "mouseover"]), ma("onMouseLeave", ["mouseout", "mouseover"]), ma("onPointerEnter", ["pointerout", "pointerover"]), ma("onPointerLeave", ["pointerout", "pointerover"]), _i(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), _i(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), _i("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), _i(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), _i(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), _i(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Jl = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), ZS = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Jl)
  );
  function Sp(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
      var i = t[n], s = i.event;
      i = i.listeners;
      t: {
        var u = void 0;
        if (e)
          for (var d = i.length - 1; 0 <= d; d--) {
            var g = i[d], T = g.instance, D = g.currentTarget;
            if (g = g.listener, T !== u && s.isPropagationStopped())
              break t;
            u = g, s.currentTarget = D;
            try {
              u(s);
            } catch (z) {
              Qs(z);
            }
            s.currentTarget = null, u = T;
          }
        else
          for (d = 0; d < i.length; d++) {
            if (g = i[d], T = g.instance, D = g.currentTarget, g = g.listener, T !== u && s.isPropagationStopped())
              break t;
            u = g, s.currentTarget = D;
            try {
              u(s);
            } catch (z) {
              Qs(z);
            }
            s.currentTarget = null, u = T;
          }
      }
    }
  }
  function pt(t, e) {
    var n = e[lh];
    n === void 0 && (n = e[lh] = /* @__PURE__ */ new Set());
    var i = t + "__bubble";
    n.has(i) || (bp(e, t, 2, !1), n.add(i));
  }
  function Zc(t, e, n) {
    var i = 0;
    e && (i |= 4), bp(
      n,
      t,
      i,
      e
    );
  }
  var Gu = "_reactListening" + Math.random().toString(36).slice(2);
  function Kc(t) {
    if (!t[Gu]) {
      t[Gu] = !0, oh.forEach(function(n) {
        n !== "selectionchange" && (ZS.has(n) || Zc(n, !1, t), Zc(n, !0, t));
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Gu] || (e[Gu] = !0, Zc("selectionchange", !1, e));
    }
  }
  function bp(t, e, n, i) {
    switch (cv(e)) {
      case 2:
        var s = Bb;
        break;
      case 8:
        s = Lb;
        break;
      default:
        s = hf;
    }
    n = s.bind(
      null,
      e,
      n,
      t
    ), s = void 0, !tr || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (s = !0), i ? s !== void 0 ? t.addEventListener(e, n, {
      capture: !0,
      passive: s
    }) : t.addEventListener(e, n, !0) : s !== void 0 ? t.addEventListener(e, n, {
      passive: s
    }) : t.addEventListener(e, n, !1);
  }
  function kc(t, e, n, i, s) {
    var u = i;
    if ((e & 1) === 0 && (e & 2) === 0 && i !== null)
      t: for (; ; ) {
        if (i === null) return;
        var d = i.tag;
        if (d === 3 || d === 4) {
          var g = i.stateNode.containerInfo;
          if (g === s) break;
          if (d === 4)
            for (d = i.return; d !== null; ) {
              var T = d.tag;
              if ((T === 3 || T === 4) && d.stateNode.containerInfo === s)
                return;
              d = d.return;
            }
          for (; g !== null; ) {
            if (d = wi(g), d === null) return;
            if (T = d.tag, T === 5 || T === 6 || T === 26 || T === 27) {
              i = u = d;
              continue t;
            }
            g = g.parentNode;
          }
        }
        i = i.return;
      }
    bh(function() {
      var D = u, z = $o(n), B = [];
      t: {
        var N = Fh.get(t);
        if (N !== void 0) {
          var R = qs, k = t;
          switch (t) {
            case "keypress":
              if (Hs(n) === 0) break t;
            case "keydown":
            case "keyup":
              R = Dx;
              break;
            case "focusin":
              k = "focus", R = ar;
              break;
            case "focusout":
              k = "blur", R = ar;
              break;
            case "beforeblur":
            case "afterblur":
              R = ar;
              break;
            case "click":
              if (n.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              R = jh;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              R = vx;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              R = _x;
              break;
            case Zh:
            case Kh:
            case kh:
              R = Sx;
              break;
            case Jh:
              R = Ux;
              break;
            case "scroll":
            case "scrollend":
              R = yx;
              break;
            case "wheel":
              R = Lx;
              break;
            case "copy":
            case "cut":
            case "paste":
              R = Tx;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              R = Ch;
              break;
            case "submit":
              R = zx;
              break;
            case "toggle":
            case "beforetoggle":
              R = Yx;
          }
          var $ = (e & 4) !== 0, ht = !$ && (t === "scroll" || t === "scrollend"), M = $ ? N !== null ? N + "Capture" : null : N;
          $ = [];
          for (var E = D, O; E !== null; ) {
            var U = E;
            if (O = U.stateNode, U = U.tag, U !== 5 && U !== 26 && U !== 27 || O === null || M === null || (U = pl(E, M), U != null && $.push(
              Fl(E, U, O)
            )), ht) break;
            E = E.return;
          }
          0 < $.length && (N = new R(
            N,
            k,
            null,
            n,
            z
          ), B.push({ event: N, listeners: $ }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (R = t === "mouseover" || t === "pointerover", N = t === "mouseout" || t === "pointerout", R && n !== Io && (k = n.relatedTarget || n.fromElement) && (wi(k) || k[fa]))
            break t;
          (N || R) && (k = z.window === z ? z : (R = z.ownerDocument) ? R.defaultView || R.parentWindow : window, N ? (R = n.relatedTarget || n.toElement, N = D, R = R ? wi(R) : null, R !== null && (ht = m(R), $ = R.tag, R !== ht || $ !== 5 && $ !== 27 && $ !== 6) && (R = null)) : (N = null, R = D), N !== R && ($ = jh, U = "onMouseLeave", M = "onMouseEnter", E = "mouse", (t === "pointerout" || t === "pointerover") && ($ = Ch, U = "onPointerLeave", M = "onPointerEnter", E = "pointer"), ht = N == null ? k : yl(N), O = R == null ? k : yl(R), k = new $(
            U,
            E + "leave",
            N,
            n,
            z
          ), k.target = ht, k.relatedTarget = O, U = null, wi(z) === D && ($ = new $(
            M,
            E + "enter",
            R,
            n,
            z
          ), $.target = O, $.relatedTarget = ht, U = $), ht = U, $ = N && R ? ot(
            N,
            R,
            KS
          ) : null, N !== null && Tp(
            B,
            k,
            N,
            $,
            !1
          ), R !== null && ht !== null && Tp(
            B,
            ht,
            R,
            $,
            !0
          )));
        }
        t: {
          if (N = D ? yl(D) : window, R = N.nodeName && N.nodeName.toLowerCase(), R === "select" || R === "input" && N.type === "file")
            var P = _h;
          else if (zh(N))
            if (Vh)
              P = Px;
            else {
              P = Jx;
              var gt = kx;
            }
          else
            R = N.nodeName, !R || R.toLowerCase() !== "input" || N.type !== "checkbox" && N.type !== "radio" ? D && Po(D.elementType) && (P = _h) : P = Fx;
          if (P && (P = P(t, D))) {
            wh(
              B,
              P,
              n,
              z
            );
            break t;
          }
          gt && gt(t, N, D);
        }
        switch (gt = D ? yl(D) : window, t) {
          case "focusin":
            (zh(gt) || gt.contentEditable === "true") && (Sa = gt, fr = D, jl = null);
            break;
          case "focusout":
            jl = fr = Sa = null;
            break;
          case "mousedown":
            dr = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            dr = !1, Xh(B, n, z);
            break;
          case "selectionchange":
            if ($x) break;
          case "keydown":
          case "keyup":
            Xh(B, n, z);
        }
        var et;
        if (sr)
          t: {
            switch (t) {
              case "compositionstart":
                var ut = "onCompositionStart";
                break t;
              case "compositionend":
                ut = "onCompositionEnd";
                break t;
              case "compositionupdate":
                ut = "onCompositionUpdate";
                break t;
            }
            ut = void 0;
          }
        else
          xa ? Oh(t, n) && (ut = "onCompositionEnd") : t === "keydown" && n.keyCode === 229 && (ut = "onCompositionStart");
        ut && (Nh && n.locale !== "ko" && (xa || ut !== "onCompositionStart" ? ut === "onCompositionEnd" && xa && (et = Th()) : (Pn = z, er = "value" in Pn ? Pn.value : Pn.textContent, xa = !0)), gt = Xu(D, ut), 0 < gt.length && (ut = new Ah(
          ut,
          t,
          null,
          n,
          z
        ), B.push({ event: ut, listeners: gt }), et ? ut.data = et : (et = Rh(n), et !== null && (ut.data = et)))), (et = Gx ? Xx(t, n) : Qx(t, n)) && (ut = Xu(D, "onBeforeInput"), 0 < ut.length && (gt = new Ah(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          z
        ), B.push({
          event: gt,
          listeners: ut
        }), gt.data = et)), GS(
          B,
          t,
          D,
          n,
          z
        );
      }
      Sp(B, e);
    });
  }
  function Fl(t, e, n) {
    return {
      instance: t,
      listener: e,
      currentTarget: n
    };
  }
  function Xu(t, e) {
    for (var n = e + "Capture", i = []; t !== null; ) {
      var s = t, u = s.stateNode;
      if (s = s.tag, s !== 5 && s !== 26 && s !== 27 || u === null || (s = pl(t, n), s != null && i.unshift(
        Fl(t, s, u)
      ), s = pl(t, e), s != null && i.push(
        Fl(t, s, u)
      )), t.tag === 3) return i;
      t = t.return;
    }
    return [];
  }
  function KS(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Tp(t, e, n, i, s) {
    for (var u = e._reactName, d = []; n !== null && n !== i; ) {
      var g = n, T = g.alternate, D = g.stateNode;
      if (g = g.tag, T !== null && T === i) break;
      g !== 5 && g !== 26 && g !== 27 || D === null || (T = D, s ? (D = pl(n, u), D != null && d.unshift(
        Fl(n, D, T)
      )) : s || (D = pl(n, u), D != null && d.push(
        Fl(n, D, T)
      ))), n = n.return;
    }
    d.length !== 0 && t.push({ event: e, listeners: d });
  }
  var kS = /\r\n?/g, JS = /\u0000|\uFFFD/g;
  function Ep(t) {
    return (typeof t == "string" ? t : "" + t).replace(kS, `
`).replace(JS, "");
  }
  function jp(t, e) {
    return e = Ep(e), Ep(t) === e;
  }
  function Ot(t, e, n, i, s, u) {
    switch (n) {
      case "children":
        if (typeof i == "string")
          e === "body" || e === "textarea" && i === "" || pa(t, i);
        else if (typeof i == "number" || typeof i == "bigint")
          e !== "body" && pa(t, "" + i);
        else return;
        break;
      case "className":
        Us(t, "class", i);
        break;
      case "tabIndex":
        Us(t, "tabindex", i);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Us(t, n, i);
        break;
      case "style":
        xh(t, i, u);
        return;
      case "data":
        if (e !== "object") {
          Us(t, "data", i);
          break;
        }
      case "src":
      case "href":
        if (i === "" && (e !== "a" || n !== "href")) {
          t.removeAttribute(n);
          break;
        }
        if (i == null || typeof i == "function" || typeof i == "symbol" || typeof i == "boolean") {
          t.removeAttribute(n);
          break;
        }
        i = Bs(i), t.setAttribute(n, i);
        break;
      case "action":
      case "formAction":
        if (typeof i == "function") {
          t.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof u == "function" && (n === "formAction" ? (e !== "input" && Ot(t, e, "name", s.name, s, null), Ot(
            t,
            e,
            "formEncType",
            s.formEncType,
            s,
            null
          ), Ot(
            t,
            e,
            "formMethod",
            s.formMethod,
            s,
            null
          ), Ot(
            t,
            e,
            "formTarget",
            s.formTarget,
            s,
            null
          )) : (Ot(t, e, "encType", s.encType, s, null), Ot(t, e, "method", s.method, s, null), Ot(t, e, "target", s.target, s, null)));
        if (i == null || typeof i == "symbol" || typeof i == "boolean") {
          t.removeAttribute(n);
          break;
        }
        i = Bs(i), t.setAttribute(n, i);
        break;
      case "onClick":
        i != null && (t.onclick = dn);
        return;
      case "onScroll":
        i != null && pt("scroll", t);
        return;
      case "onScrollEnd":
        i != null && pt("scrollend", t);
        return;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i))
            throw Error(r(61));
          if (n = i.__html, n != null) {
            if (s.children != null) throw Error(r(60));
            (u != null ? u.__html : void 0) !== n && (t.innerHTML = n);
          }
        }
        break;
      case "multiple":
        t.multiple = i && typeof i != "function" && typeof i != "symbol";
        break;
      case "muted":
        t.muted = i && typeof i != "function" && typeof i != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (i == null || typeof i == "function" || typeof i == "boolean" || typeof i == "symbol") {
          t.removeAttribute("xlink:href");
          break;
        }
        n = Bs(i), t.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          n
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        i != null && typeof i != "function" && typeof i != "symbol" ? t.setAttribute(n, i) : t.removeAttribute(n);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "credentialless":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        i && typeof i != "function" && typeof i != "symbol" ? t.setAttribute(n, "") : t.removeAttribute(n);
        break;
      case "capture":
      case "download":
        i === !0 ? t.setAttribute(n, "") : i !== !1 && i != null && typeof i != "function" && typeof i != "symbol" ? t.setAttribute(n, i) : t.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        i != null && typeof i != "function" && typeof i != "symbol" && !isNaN(i) && 1 <= i ? t.setAttribute(n, i) : t.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i) ? t.removeAttribute(n) : t.setAttribute(n, i);
        break;
      case "popover":
        pt("beforetoggle", t), pt("toggle", t), Vs(t, "popover", i);
        break;
      case "xlinkActuate":
        zn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          i
        );
        break;
      case "xlinkArcrole":
        zn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          i
        );
        break;
      case "xlinkRole":
        zn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          i
        );
        break;
      case "xlinkShow":
        zn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          i
        );
        break;
      case "xlinkTitle":
        zn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          i
        );
        break;
      case "xlinkType":
        zn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          i
        );
        break;
      case "xmlBase":
        zn(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          i
        );
        break;
      case "xmlLang":
        zn(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          i
        );
        break;
      case "xmlSpace":
        zn(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          i
        );
        break;
      case "is":
        Vs(t, "is", i);
        break;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N")
          n = hx.get(n) || n, Vs(t, n, i);
        else return;
    }
    Et = !0;
  }
  function Jc(t, e, n, i, s, u) {
    switch (n) {
      case "style":
        xh(t, i, u);
        return;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i))
            throw Error(r(61));
          if (n = i.__html, n != null) {
            if (s.children != null) throw Error(r(60));
            (u != null ? u.__html : void 0) !== n && (t.innerHTML = n);
          }
        }
        break;
      case "children":
        if (typeof i == "string") pa(t, i);
        else if (typeof i == "number" || typeof i == "bigint")
          pa(t, "" + i);
        else return;
        break;
      case "onScroll":
        i != null && pt("scroll", t);
        return;
      case "onScrollEnd":
        i != null && pt("scrollend", t);
        return;
      case "onClick":
        i != null && (t.onclick = dn);
        return;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        return;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!rh.hasOwnProperty(n))
          t: {
            if (n[0] === "o" && n[1] === "n" && (s = n.endsWith("Capture"), u = n.slice(2, s ? n.length - 7 : void 0), e = t[Te] || null, e = e != null ? e[n] : null, typeof e == "function" && t.removeEventListener(u, e, s), typeof i == "function")) {
              typeof e != "function" && e !== null && (n in t ? t[n] = null : t.hasAttribute(n) && t.removeAttribute(n)), t.addEventListener(u, i, s);
              break t;
            }
            Et = !0, n in t ? t[n] = i : i === !0 ? t.setAttribute(n, "") : Vs(t, n, i);
          }
        return;
    }
    Et = !0;
  }
  function fe(t, e, n) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        pt("error", t), pt("load", t);
        var i = !1, s = !1, u;
        for (u in n)
          if (n.hasOwnProperty(u)) {
            var d = n[u];
            if (d != null)
              switch (u) {
                case "src":
                  i = !0;
                  break;
                case "srcSet":
                  s = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, e));
                default:
                  Ot(t, e, u, d, n, null);
              }
          }
        s && Ot(t, e, "srcSet", n.srcSet, n, null), i && Ot(t, e, "src", n.src, n, null);
        return;
      case "input":
        pt("invalid", t);
        var g = u = d = s = null, T = null, D = null;
        for (i in n)
          if (n.hasOwnProperty(i)) {
            var z = n[i];
            if (z != null)
              switch (i) {
                case "name":
                  s = z;
                  break;
                case "type":
                  d = z;
                  break;
                case "checked":
                  T = z;
                  break;
                case "defaultChecked":
                  D = z;
                  break;
                case "value":
                  u = z;
                  break;
                case "defaultValue":
                  g = z;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (z != null)
                    throw Error(r(137, e));
                  break;
                default:
                  Ot(t, e, i, z, n, null);
              }
          }
        yh(
          t,
          u,
          g,
          T,
          D,
          d,
          s,
          !1
        );
        return;
      case "select":
        pt("invalid", t), i = d = u = null;
        for (s in n)
          if (n.hasOwnProperty(s) && (g = n[s], g != null))
            switch (s) {
              case "value":
                u = g;
                break;
              case "defaultValue":
                d = g;
                break;
              case "multiple":
                i = g;
              default:
                Ot(t, e, s, g, n, null);
            }
        e = u, n = d, t.multiple = !!i, e != null ? ya(t, !!i, e, !1) : n != null && ya(t, !!i, n, !0);
        return;
      case "textarea":
        pt("invalid", t), u = s = i = null;
        for (d in n)
          if (n.hasOwnProperty(d) && (g = n[d], g != null))
            switch (d) {
              case "value":
                i = g;
                break;
              case "defaultValue":
                s = g;
                break;
              case "children":
                u = g;
                break;
              case "dangerouslySetInnerHTML":
                if (g != null) throw Error(r(91));
                break;
              default:
                Ot(t, e, d, g, n, null);
            }
        vh(t, i, s, u);
        return;
      case "option":
        for (T in n)
          if (n.hasOwnProperty(T) && (i = n[T], i != null))
            switch (T) {
              case "selected":
                t.selected = i && typeof i != "function" && typeof i != "symbol";
                break;
              default:
                Ot(t, e, T, i, n, null);
            }
        return;
      case "dialog":
        pt("beforetoggle", t), pt("toggle", t), pt("cancel", t), pt("close", t);
        break;
      case "iframe":
      case "object":
        pt("load", t);
        break;
      case "video":
      case "audio":
        for (i = 0; i < Jl.length; i++)
          pt(Jl[i], t);
        break;
      case "image":
        pt("error", t), pt("load", t);
        break;
      case "details":
        pt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        pt("error", t), pt("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (D in n)
          if (n.hasOwnProperty(D) && (i = n[D], i != null))
            switch (D) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, e));
              default:
                Ot(t, e, D, i, n, null);
            }
        return;
      default:
        if (Po(e)) {
          for (z in n)
            n.hasOwnProperty(z) && (i = n[z], i !== void 0 && Jc(
              t,
              e,
              z,
              i,
              n,
              void 0
            ));
          return;
        }
    }
    for (g in n)
      n.hasOwnProperty(g) && (i = n[g], i != null && Ot(t, e, g, i, n, null));
  }
  var FS = {};
  function PS(t, e, n, i) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var s = null, u = null, d = null, g = null, T = null, D = null, z = null;
        for (R in n) {
          var B = n[R];
          if (n.hasOwnProperty(R) && B != null)
            switch (R) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                T = B;
              default:
                i.hasOwnProperty(R) || Ot(t, e, R, null, i, B);
            }
        }
        for (var N in i) {
          var R = i[N];
          if (B = n[N], i.hasOwnProperty(N) && (R != null || B != null))
            switch (N) {
              case "type":
                R !== B && (Et = !0), u = R;
                break;
              case "name":
                R !== B && (Et = !0), s = R;
                break;
              case "checked":
                R !== B && (Et = !0), D = R;
                break;
              case "defaultChecked":
                R !== B && (Et = !0), z = R;
                break;
              case "value":
                R !== B && (Et = !0), d = R;
                break;
              case "defaultValue":
                R !== B && (Et = !0), g = R;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (R != null)
                  throw Error(r(137, e));
                break;
              default:
                R !== B && Ot(
                  t,
                  e,
                  N,
                  R,
                  i,
                  B
                );
            }
        }
        Jo(
          t,
          d,
          g,
          T,
          D,
          z,
          u,
          s
        );
        return;
      case "select":
        R = d = g = N = null;
        for (u in n)
          if (T = n[u], n.hasOwnProperty(u) && T != null)
            switch (u) {
              case "value":
                break;
              case "multiple":
                R = T;
              default:
                i.hasOwnProperty(u) || Ot(
                  t,
                  e,
                  u,
                  null,
                  i,
                  T
                );
            }
        for (s in i)
          if (u = i[s], T = n[s], i.hasOwnProperty(s) && (u != null || T != null))
            switch (s) {
              case "value":
                u !== T && (Et = !0), N = u;
                break;
              case "defaultValue":
                u !== T && (Et = !0), g = u;
                break;
              case "multiple":
                u !== T && (Et = !0), d = u;
              default:
                u !== T && Ot(
                  t,
                  e,
                  s,
                  u,
                  i,
                  T
                );
            }
        e = g, n = d, i = R, N != null ? ya(t, !!n, N, !1) : !!i != !!n && (e != null ? ya(t, !!n, e, !0) : ya(t, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        R = N = null;
        for (g in n)
          if (s = n[g], n.hasOwnProperty(g) && s != null && !i.hasOwnProperty(g))
            switch (g) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ot(t, e, g, null, i, s);
            }
        for (d in i)
          if (s = i[d], u = n[d], i.hasOwnProperty(d) && (s != null || u != null))
            switch (d) {
              case "value":
                s !== u && (Et = !0), N = s;
                break;
              case "defaultValue":
                s !== u && (Et = !0), R = s;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(r(91));
                break;
              default:
                s !== u && Ot(t, e, d, s, i, u);
            }
        ph(t, N, R);
        return;
      case "option":
        for (var k in n)
          if (N = n[k], n.hasOwnProperty(k) && N != null && !i.hasOwnProperty(k))
            switch (k) {
              case "selected":
                t.selected = !1;
                break;
              default:
                Ot(
                  t,
                  e,
                  k,
                  null,
                  i,
                  N
                );
            }
        for (T in i)
          if (N = i[T], R = n[T], i.hasOwnProperty(T) && N !== R && (N != null || R != null))
            switch (T) {
              case "selected":
                N !== R && (Et = !0), t.selected = N && typeof N != "function" && typeof N != "symbol";
                break;
              default:
                Ot(
                  t,
                  e,
                  T,
                  N,
                  i,
                  R
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var $ in n)
          N = n[$], n.hasOwnProperty($) && N != null && !i.hasOwnProperty($) && Ot(t, e, $, null, i, N);
        for (D in i)
          if (N = i[D], R = n[D], i.hasOwnProperty(D) && N !== R && (N != null || R != null))
            switch (D) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (N != null)
                  throw Error(r(137, e));
                break;
              default:
                Ot(
                  t,
                  e,
                  D,
                  N,
                  i,
                  R
                );
            }
        return;
      default:
        if (Po(e)) {
          for (var ht in n)
            N = n[ht], n.hasOwnProperty(ht) && N !== void 0 && !i.hasOwnProperty(ht) && Jc(
              t,
              e,
              ht,
              void 0,
              i,
              N
            );
          for (z in i)
            N = i[z], R = n[z], !i.hasOwnProperty(z) || N === R || N === void 0 && R === void 0 || Jc(
              t,
              e,
              z,
              N,
              i,
              R
            );
          return;
        }
    }
    for (var M in n)
      N = n[M], n.hasOwnProperty(M) && N != null && !i.hasOwnProperty(M) && Ot(t, e, M, null, i, N);
    for (B in i)
      N = i[B], R = n[B], !i.hasOwnProperty(B) || N === R || N == null && R == null || Ot(t, e, B, N, i, R);
  }
  function Ap(t) {
    switch (t) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function IS() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, e = 0, n = performance.getEntriesByType("resource"), i = 0; i < n.length; i++) {
        var s = n[i], u = s.transferSize, d = s.initiatorType, g = s.duration;
        if (u && g && Ap(d)) {
          for (d = 0, g = s.responseEnd, i += 1; i < n.length; i++) {
            var T = n[i], D = T.startTime;
            if (D > g) break;
            var z = T.transferSize, B = T.initiatorType;
            z && Ap(B) && (T = T.responseEnd, d += z * (T < g ? 1 : (g - D) / (T - D)));
          }
          if (--i, e += 8 * (u + d) / (s.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var Fc = null, Pc = null;
  function Pl(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Cp(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Np(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function Mp(t, e, n, i) {
    return n = Pl(
      n
    ).createElement(t), n[se] = i, n[Te] = e, fe(n, t, e), ee(n), n;
  }
  function Ic(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
  }
  var $c = null;
  function $S() {
    var t = window.event;
    return t && t.type === "popstate" ? t === $c ? !1 : ($c = t, !0) : ($c = null, !1);
  }
  var Wc = typeof setTimeout == "function" ? setTimeout : void 0, WS = typeof clearTimeout == "function" ? clearTimeout : void 0, Dp = typeof Promise == "function" ? Promise : void 0, Op = typeof requestAnimationFrame == "function" ? requestAnimationFrame : Wc, tb = typeof queueMicrotask == "function" ? queueMicrotask : typeof Dp < "u" ? function(t) {
    return Dp.resolve(null).then(t).catch(eb);
  } : Wc;
  function eb(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function pi(t) {
    return t === "head";
  }
  function Rp(t, e) {
    var n = e, i = 0;
    do {
      var s = n.nextSibling;
      if (t.removeChild(n), s && s.nodeType === 8)
        if (n = s.data, n === "/$" || n === "/&") {
          if (i === 0) {
            t.removeChild(s), Wa(e);
            return;
          }
          i--;
        } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&")
          i++;
        else if (n === "html")
          of(
            t.ownerDocument.documentElement
          );
        else if (n === "head") {
          n = t.ownerDocument.head, of(n);
          for (var u = n.firstChild; u; ) {
            var d = u.nextSibling, g = u.nodeName;
            u[ml] || g === "SCRIPT" || g === "STYLE" || g === "LINK" && u.rel.toLowerCase() === "stylesheet" || n.removeChild(u), u = d;
          }
        } else
          n === "body" && of(t.ownerDocument.body);
      n = s;
    } while (n);
    Wa(e);
  }
  function zp(t, e) {
    var n = t;
    t = 0;
    do {
      var i = n.nextSibling;
      if (n.nodeType === 1 ? e ? (n._stashedDisplay = n.style.display, n.style.display = "none") : (n.style.display = n._stashedDisplay || "", n.getAttribute("style") === "" && n.removeAttribute("style")) : n.nodeType === 3 && (e ? (n._stashedText = n.nodeValue, n.nodeValue = "") : n.nodeValue = n._stashedText || ""), i && i.nodeType === 8)
        if (n = i.data, n === "/$") {
          if (t === 0) break;
          t--;
        } else
          n !== "$" && n !== "$?" && n !== "$~" && n !== "$!" || t++;
      n = i;
    } while (n);
  }
  function wp(t, e, n) {
    if (e = CSS.escape(e) !== e ? "r-" + btoa(e).replace(/=/g, "") : e, t.style.viewTransitionName = e, n != null && (t.style.viewTransitionClass = n), n = getComputedStyle(t), n.display === "inline") {
      if (e = t.getClientRects(), e.length === 1) var i = 1;
      else
        for (var s = i = 0; s < e.length; s++) {
          var u = e[s];
          0 < u.width && 0 < u.height && i++;
        }
      i === 1 && (t = t.style, t.display = e.length === 1 ? "inline-block" : "block", t.marginTop = "-" + n.paddingTop, t.marginBottom = "-" + n.paddingBottom);
    }
  }
  function _p(t, e) {
    t = t.style, e = e.style;
    var n = e != null ? e.hasOwnProperty("viewTransitionName") ? e.viewTransitionName : e.hasOwnProperty("view-transition-name") ? e["view-transition-name"] : null : null;
    t.viewTransitionName = n == null || typeof n == "boolean" ? "" : ("" + n).trim(), n = e != null ? e.hasOwnProperty("viewTransitionClass") ? e.viewTransitionClass : e.hasOwnProperty("view-transition-class") ? e["view-transition-class"] : null : null, t.viewTransitionClass = n == null || typeof n == "boolean" ? "" : ("" + n).trim(), t.display === "inline-block" && (e == null ? t.display = t.margin = "" : (n = e.display, t.display = n == null || typeof n == "boolean" ? "" : n, n = e.margin, n != null ? t.margin = n : (n = e.hasOwnProperty("marginTop") ? e.marginTop : e["margin-top"], t.marginTop = n == null || typeof n == "boolean" ? "" : n, e = e.hasOwnProperty("marginBottom") ? e.marginBottom : e["margin-bottom"], t.marginBottom = e == null || typeof e == "boolean" ? "" : e)));
  }
  function nb(t, e, n) {
    return n = n.ownerDocument.defaultView, {
      rect: t,
      abs: e.position === "absolute" || e.position === "fixed",
      clip: e.clipPath !== "none" || e.overflow !== "visible" || e.filter !== "none" || e.mask !== "none" || e.mask !== "none" || e.borderRadius !== "0px",
      view: 0 <= t.bottom && 0 <= t.right && t.top <= n.innerHeight && t.left <= n.innerWidth
    };
  }
  function tf(t) {
    var e = t.getBoundingClientRect(), n = getComputedStyle(t);
    return nb(e, n, t);
  }
  function ib(t) {
    return t.documentElement.clientHeight;
  }
  function ab(t) {
    this.addEventListener("load", t), this.addEventListener("error", t);
  }
  function lb(t, e, n, i, s, u, d, g, T) {
    var D = e.nodeType === 9 ? e : e.ownerDocument;
    try {
      var z = D.startViewTransition({
        update: function() {
          var N = D.defaultView, R = N.navigation && N.navigation.transition, k = D.fonts.status;
          i();
          var $ = [];
          if (k === "loaded" && (ib(D), D.fonts.status === "loading" && $.push(D.fonts.ready)), k = $.length, t !== null)
            for (var ht = t.suspenseyImages, M = 0, E = 0; E < ht.length; E++) {
              var O = ht[E];
              if (!O.complete) {
                var U = O.getBoundingClientRect();
                if (0 < U.bottom && 0 < U.right && U.top < N.innerHeight && U.left < N.innerWidth) {
                  if (M += ev(O), M > Ku) {
                    $.length = k;
                    break;
                  }
                  O = new Promise(
                    ab.bind(O)
                  ), $.push(O);
                }
              }
            }
          if (0 < $.length)
            return N = Promise.race([
              Promise.all($),
              new Promise(function(P) {
                return setTimeout(P, 500);
              })
            ]).then(s, s), (R ? Promise.allSettled([R.finished, N]) : N).then(u, u);
          if (s(), R)
            return R.finished.then(
              u,
              u
            );
          u();
        },
        types: n
      });
      D.__reactViewTransition = z;
      var B = [];
      return z.ready.then(
        function() {
          for (var N = D.documentElement.getAnimations({
            subtree: !0
          }), R = 0; R < N.length; R++) {
            var k = N[R], $ = k.effect, ht = $.pseudoElement;
            if (ht != null && ht.startsWith("::view-transition")) {
              B.push(k), k = $.getKeyframes();
              for (var M = ht = void 0, E = !0, O = 0; O < k.length; O++) {
                var U = k[O], P = U.width;
                if (ht === void 0) ht = P;
                else if (ht !== P) {
                  E = !1;
                  break;
                }
                if (P = U.height, M === void 0) M = P;
                else if (M !== P) {
                  E = !1;
                  break;
                }
                delete U.width, delete U.height, U.transform === "none" && delete U.transform;
              }
              E && ht !== void 0 && M !== void 0 && ($.setKeyframes(k), E = getComputedStyle(
                $.target,
                $.pseudoElement
              ), E.width !== ht || E.height !== M) && (E = k[0], E.width = ht, E.height = M, E = k[k.length - 1], E.width = ht, E.height = M, $.setKeyframes(k));
            }
          }
          d();
        },
        function(N) {
          D.__reactViewTransition === z && (D.__reactViewTransition = null);
          try {
            if (typeof N == "object" && N !== null)
              switch (N.name) {
                case "InvalidStateError":
                  (N.message === "View transition was skipped because document visibility state is hidden." || N.message === "Skipping view transition because document visibility state has become hidden." || N.message === "Skipping view transition because viewport size changed." || N.message === "Transition was aborted because of invalid state") && (N = null);
              }
            N !== null && T(N);
          } finally {
            i(), s(), d();
          }
        }
      ), z.finished.finally(function() {
        for (var N = 0; N < B.length; N++)
          B[N].cancel();
        D.__reactViewTransition === z && (D.__reactViewTransition = null), g();
      }), z;
    } catch {
      return i(), s(), d(), null;
    }
  }
  function ta(t, e) {
    this._scope = document.documentElement, this._selector = "::view-transition-" + t + "(" + e + ")";
  }
  ta.prototype.animate = function(t, e) {
    return e = typeof e == "number" ? { duration: e } : K({}, e), e.pseudoElement = this._selector, this._scope.animate(t, e);
  }, ta.prototype.getAnimations = function() {
    for (var t = this._scope, e = this._selector, n = t.getAnimations({ subtree: !0 }), i = [], s = 0; s < n.length; s++) {
      var u = n[s].effect;
      u !== null && u.target === t && u.pseudoElement === e && i.push(n[s]);
    }
    return i;
  }, ta.prototype.getComputedStyle = function() {
    return getComputedStyle(this._scope, this._selector);
  };
  function Vp(t) {
    return {
      name: t,
      group: new ta("group", t),
      imagePair: new ta("image-pair", t),
      old: new ta("old", t),
      new: new ta("new", t)
    };
  }
  function qe(t) {
    this._fragmentFiber = t, this._observers = this._eventListeners = null;
  }
  qe.prototype.addEventListener = function(t, e, n) {
    var i = null, s = null;
    if (!(n != null && typeof n != "boolean" && (i = n.signal || null, i !== null && i.aborted))) {
      this._eventListeners === null && (this._eventListeners = []);
      var u = this._eventListeners;
      if (Bp(u, t, e, n) === -1) {
        var d = this, g = e;
        n != null && typeof n != "boolean" && n.once === !0 && (g = function(T) {
          d.removeEventListener(
            t,
            e,
            n
          ), typeof e == "function" ? e.call(this, T) : e.handleEvent(T);
        }), i !== null && (s = d.removeEventListener.bind(
          d,
          t,
          e,
          n
        ), i.addEventListener("abort", s, { once: !0 }), s = i.removeEventListener.bind(i, "abort", s)), i = ka(n), u.push({
          type: t,
          listener: e,
          optionsOrUseCapture: n,
          attachedListener: g,
          cleanup: s
        }), v(
          this._fragmentFiber.child,
          !1,
          sb,
          t,
          g,
          i
        );
      }
      this._eventListeners = u;
    }
  };
  function sb(t, e, n, i) {
    return w(t).addEventListener(
      e,
      n,
      i
    ), !1;
  }
  qe.prototype.removeEventListener = function(t, e, n) {
    var i = this._eventListeners;
    if (i !== null && (e = Bp(
      i,
      t,
      e,
      n
    ), e !== -1)) {
      var s = i[e];
      n = s.attachedListener;
      var u = s.cleanup;
      s = ka(s.optionsOrUseCapture), v(
        this._fragmentFiber.child,
        !1,
        ub,
        t,
        n,
        s
      ), i.splice(e, 1), u !== null && u();
    }
  };
  function ub(t, e, n, i) {
    return w(t).removeEventListener(
      e,
      n,
      i
    ), !1;
  }
  function ka(t) {
    return t != null && typeof t != "boolean" && (t.once === !0 || t.signal instanceof AbortSignal) ? { capture: t.capture, passive: t.passive } : t;
  }
  function Up(t) {
    return t == null ? "c=0" : typeof t == "boolean" ? "c=" + (t ? "1" : "0") : "c=" + (t.capture ? "1" : "0");
  }
  function Bp(t, e, n, i) {
    if (t.length === 0) return -1;
    i = Up(i);
    for (var s = 0; s < t.length; s++) {
      var u = t[s];
      if (u.type === e && u.listener === n && Up(u.optionsOrUseCapture) === i)
        return s;
    }
    return -1;
  }
  qe.prototype.dispatchEvent = function(t) {
    var e = b(
      this._fragmentFiber
    );
    if (e === null) return !0;
    e = w(e);
    var n = this._eventListeners;
    if (n !== null && 0 < n.length || !t.bubbles) {
      var i = e.nodeType === 9 ? e.createComment("") : document.createTextNode("");
      if (n)
        for (var s = 0; s < n.length; s++) {
          var u = n[s];
          i.addEventListener(
            u.type,
            u.attachedListener,
            ka(u.optionsOrUseCapture)
          );
        }
      if (e.appendChild(i), t = i.dispatchEvent(t), n)
        for (s = 0; s < n.length; s++)
          u = n[s], i.removeEventListener(
            u.type,
            u.attachedListener,
            ka(u.optionsOrUseCapture)
          );
      return e.removeChild(i), t;
    }
    return e.dispatchEvent(t);
  }, qe.prototype.focus = function(t) {
    v(
      this._fragmentFiber.child,
      !0,
      Lp,
      t,
      void 0,
      void 0
    );
  };
  function Lp(t, e) {
    return t.tag === 6 ? !1 : (t = w(t), xb(t, e));
  }
  qe.prototype.focusLast = function(t) {
    var e = [];
    v(
      this._fragmentFiber.child,
      !0,
      ef,
      e,
      void 0,
      void 0
    );
    for (var n = e.length - 1; 0 <= n && !Lp(e[n], t); n--) ;
  };
  function ef(t, e) {
    return e.push(t), !1;
  }
  qe.prototype.blur = function() {
    var t = b(
      this._fragmentFiber
    );
    t !== null && (t = w(t), t = Pl(t).activeElement, t !== null && v(
      this._fragmentFiber.child,
      !1,
      ob,
      t,
      void 0,
      void 0
    ));
  };
  function ob(t, e) {
    return t.tag === 6 ? !1 : (t = w(t), t === e || t.contains(e) ? (e.blur(), !0) : !1);
  }
  qe.prototype.observeUsing = function(t) {
    this._observers === null && (this._observers = /* @__PURE__ */ new Set()), this._observers.add(t), v(
      this._fragmentFiber.child,
      !1,
      rb,
      t,
      void 0,
      void 0
    );
  };
  function rb(t, e) {
    return t.tag === 6 || (t = w(t), e.observe(t)), !1;
  }
  qe.prototype.unobserveUsing = function(t) {
    var e = this._observers;
    if (e !== null && e.has(t)) {
      e.delete(t), v(
        this._fragmentFiber.child,
        !1,
        cb,
        t,
        void 0,
        void 0
      );
      for (var n = e = 0; n < ln.length; n++) {
        var i = ln[n];
        i.fragmentInstance === this && i.observer === t ? t.unobserve(i.instance) : ln[e++] = i;
      }
      ln.length = e;
    }
  };
  function cb(t, e) {
    return t.tag === 6 || (t = w(t), e.unobserve(t)), !1;
  }
  var ln = [], nf = !1;
  function fb(t, e, n) {
    ln.push({
      fragmentInstance: t,
      observer: e,
      instance: n
    }), nf || (nf = !0, Sb(function() {
      nf = !1;
      var i = ln;
      ln = [];
      for (var s = 0; s < i.length; s++) {
        var u = i[s];
        u.observer.unobserve(u.instance);
      }
    }));
  }
  qe.prototype.getClientRects = function() {
    var t = [];
    return v(
      this._fragmentFiber.child,
      !1,
      db,
      t,
      void 0,
      void 0
    ), t;
  };
  function db(t, e) {
    if (t.tag === 6) {
      t = t.stateNode;
      var n = t.ownerDocument.createRange();
      n.selectNodeContents(t), e.push.apply(e, n.getClientRects());
    } else
      t = w(t), e.push.apply(e, t.getClientRects());
    return !1;
  }
  qe.prototype.getRootNode = function(t) {
    var e = b(
      this._fragmentFiber
    );
    return e === null ? this : w(e).getRootNode(t);
  }, qe.prototype.compareDocumentPosition = function(t) {
    var e = b(
      this._fragmentFiber
    );
    if (e === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
    var n = [];
    v(
      this._fragmentFiber.child,
      !1,
      ef,
      n,
      void 0,
      void 0
    );
    var i = w(e);
    if (n.length === 0) {
      if (n = i, A(this._fragmentFiber)) {
        t: {
          for (e = this._fragmentFiber.return; e !== null; ) {
            if (e.tag === 4) {
              e = e.stateNode.containerInfo;
              break t;
            }
            if (e.tag === 3 || e.tag === 5 || e.tag === 27)
              break;
            e = e.return;
          }
          e = null;
        }
        e != null && (n = e);
      }
      e = this._fragmentFiber;
      var s = i = n.compareDocumentPosition(t);
      return n === t ? s = Node.DOCUMENT_POSITION_CONTAINS : i & Node.DOCUMENT_POSITION_CONTAINED_BY && (n = j(e)[1], n === null ? s = Node.DOCUMENT_POSITION_PRECEDING : (t = w(n).compareDocumentPosition(
        t
      ), s = t === 0 || t & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), s |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
    }
    e = w(n[0]), s = w(n[n.length - 1]);
    var u = A(this._fragmentFiber) ? e.parentElement : i;
    if (u == null)
      return Node.DOCUMENT_POSITION_DISCONNECTED;
    i = u.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_CONTAINED_BY, u = u.compareDocumentPosition(s) & Node.DOCUMENT_POSITION_CONTAINED_BY;
    var d = e.compareDocumentPosition(t), g = s.compareDocumentPosition(t), T = d & Node.DOCUMENT_POSITION_CONTAINED_BY || g & Node.DOCUMENT_POSITION_CONTAINED_BY;
    return g = i && u && d & Node.DOCUMENT_POSITION_FOLLOWING && g & Node.DOCUMENT_POSITION_PRECEDING, e = i && e === t || u && s === t || T || g ? Node.DOCUMENT_POSITION_CONTAINED_BY : !i && e === t || !u && s === t ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : d, e & Node.DOCUMENT_POSITION_DISCONNECTED || e & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || hb(
      e,
      this._fragmentFiber,
      n[0],
      n[n.length - 1],
      t
    ) ? e : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
  };
  function hb(t, e, n, i, s) {
    var u = wi(s);
    if (t & Node.DOCUMENT_POSITION_CONTAINED_BY) {
      if (n = !!u)
        t: {
          for (; u !== null; ) {
            if (u.tag === 7 && (u === e || u.alternate === e)) {
              n = !0;
              break t;
            }
            u = u.return;
          }
          n = !1;
        }
      return n;
    }
    if (t & Node.DOCUMENT_POSITION_CONTAINS) {
      if (u === null)
        return u = s.ownerDocument, s === u || s === u.documentElement || s === u.body;
      t: {
        for (u = e, e = b(e); u !== null; ) {
          if (!(u.tag !== 5 && u.tag !== 3 && u.tag !== 27 || u !== e && u.alternate !== e)) {
            u = !0;
            break t;
          }
          u = u.return;
        }
        u = !1;
      }
      return u;
    }
    return t & Node.DOCUMENT_POSITION_PRECEDING ? ((e = !!u) && !(e = u === n) && (e = ot(
      n,
      u,
      I
    ), e === null ? e = !1 : (v(
      e,
      !0,
      X,
      u,
      n
    ), u = L, L = null, e = u !== null)), e) : t & Node.DOCUMENT_POSITION_FOLLOWING ? ((e = !!u) && !(e = u === i) && (e = ot(
      i,
      u,
      I
    ), e === null ? e = !1 : (v(
      e,
      !0,
      Q,
      u,
      i
    ), u = L, q = L = null, e = u !== null)), e) : !1;
  }
  function Hp(t, e) {
    var n = t.ownerDocument.createRange();
    n.selectNodeContents(t), t = n.getBoundingClientRect(), window.scrollTo(
      window.scrollX + t.left,
      e ? window.scrollY + t.top : window.scrollY + t.bottom - window.innerHeight
    );
  }
  qe.prototype.scrollIntoView = function(t) {
    if (typeof t == "object") throw Error(r(566));
    var e = [];
    v(
      this._fragmentFiber.child,
      !1,
      ef,
      e,
      void 0,
      void 0
    );
    var n = t !== !1;
    if (e.length === 0) {
      var i = j(
        this._fragmentFiber
      );
      if (i = n ? i[1] || i[0] || b(this._fragmentFiber) : i[0] || i[1], i === null) return;
      if (i.tag === 6) {
        t = w(i), Hp(t, n);
        return;
      }
      if (i = w(i), i.nodeType !== 9) {
        if (i.nodeType === 11) {
          n = "host" in i ? i.host : null, n !== null && n.scrollIntoView(t);
          return;
        }
        i.scrollIntoView(t);
      }
    }
    for (i = n ? e.length - 1 : 0; i !== (n ? -1 : e.length); ) {
      var s = e[i];
      s.tag === 6 ? (s = w(s), Hp(s, n)) : w(s).scrollIntoView(t), i += n ? -1 : 1;
    }
  };
  function mb(t, e) {
    return t = w(t), Yp(t, e), !1;
  }
  function Yp(t, e) {
    t.reactFragments == null && (t.reactFragments = /* @__PURE__ */ new Set()), t.reactFragments.add(e);
  }
  function qp(t, e) {
    var n = e._eventListeners;
    if (n !== null)
      for (var i = 0; i < n.length; i++) {
        var s = n[i];
        t.addEventListener(
          s.type,
          s.attachedListener,
          ka(s.optionsOrUseCapture)
        );
      }
    t.nodeType !== 3 && (n = e._observers, n !== null && n.forEach(function(u) {
      for (var d = 0, g = 0; g < ln.length; g++) {
        var T = ln[g];
        (T.fragmentInstance !== e || T.observer !== u || T.instance !== t) && (ln[d++] = T);
      }
      ln.length = d, u.observe(t);
    }), Yp(t, e));
  }
  function yb(t, e) {
    var n = e._eventListeners;
    if (n !== null)
      for (var i = 0; i < n.length; i++) {
        var s = n[i];
        t.removeEventListener(
          s.type,
          s.attachedListener,
          ka(s.optionsOrUseCapture)
        );
      }
    t.nodeType !== 3 && (n = e._observers, n !== null && n.forEach(function(u) {
      typeof u.rootMargin == "string" ? fb(
        e,
        u,
        t
      ) : u.unobserve(t);
    }), t.reactFragments != null && t.reactFragments.delete(e));
  }
  function af(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var n = e;
      switch (e = e.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          af(n), _s(n);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(n);
    }
  }
  function pb(t, e, n, i) {
    for (; t.nodeType === 1; ) {
      var s = n;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!i && (t.nodeName !== "INPUT" || t.type !== "hidden"))
          break;
      } else if (i) {
        if (!t[ml])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (u = t.getAttribute("rel"), u === "stylesheet" && t.hasAttribute("data-precedence"))
                break;
              if (u !== s.rel || t.getAttribute("href") !== (s.href == null || s.href === "" ? null : s.href) || t.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin) || t.getAttribute("title") !== (s.title == null ? null : s.title))
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (u = t.getAttribute("src"), (u !== (s.src == null ? null : s.src) || t.getAttribute("type") !== (s.type == null ? null : s.type) || t.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin)) && u && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var u = s.name == null ? null : "" + s.name;
        if (s.type === "hidden" && t.getAttribute("name") === u)
          return t;
      } else return t;
      if (t = Fe(t.nextSibling), t === null) break;
    }
    return null;
  }
  function vb(t, e, n) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !n || (t = Fe(t.nextSibling), t === null)) return null;
    return t;
  }
  function Gp(t, e) {
    for (; t.nodeType !== 8; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = Fe(t.nextSibling), t === null)) return null;
    return t;
  }
  function lf(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function sf(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
  }
  function gb(t, e) {
    var n = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = e;
    else if (t.data !== "$?" || n.readyState !== "loading")
      e();
    else {
      var i = function() {
        e(), n.removeEventListener("DOMContentLoaded", i);
      };
      n.addEventListener("DOMContentLoaded", i), t._reactRetry = i;
    }
  }
  function Fe(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (e = t.data, e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&" || e === "F!" || e === "F")
          break;
        if (e === "/$" || e === "/&") return null;
      }
    }
    return t;
  }
  var uf = null;
  function Xp(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "/$" || n === "/&") {
          if (e === 0)
            return Fe(t.nextSibling);
          e--;
        } else
          n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function Qp(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
          if (e === 0) return t;
          e--;
        } else n !== "/$" && n !== "/&" || e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function xb(t, e) {
    function n() {
      i = !0;
    }
    if (t.ownerDocument.activeElement === t) return !0;
    var i = !1;
    try {
      t.ownerDocument.addEventListener("focus", n, !0), (t.focus || HTMLElement.prototype.focus).call(t, e);
    } finally {
      t.ownerDocument.removeEventListener("focus", n, !0);
    }
    return i;
  }
  function Sb(t) {
    Op(function() {
      Op(function(e) {
        return t(e);
      });
    });
  }
  function Zp(t, e, n) {
    switch (e = Pl(n), t) {
      case "html":
        if (t = e.documentElement, !t) throw Error(r(452));
        return t;
      case "head":
        if (t = e.head, !t) throw Error(r(453));
        return t;
      case "body":
        if (t = e.body, !t) throw Error(r(454));
        return t;
      default:
        throw Error(r(451));
    }
  }
  function Kp(t, e, n) {
    for (var i in n) {
      var s = n[i];
      n.hasOwnProperty(i) && s != null && Ot(t, e, i, null, FS, s);
    }
    n.dangerouslySetInnerHTML != null && (t.textContent = ""), t.onclick === dn && (t.onclick = null), _s(t);
  }
  function of(t) {
    for (var e = t.attributes; e.length; )
      t.removeAttributeNode(e[0]);
    _s(t);
  }
  var Pe = /* @__PURE__ */ new Map(), kp = /* @__PURE__ */ new Set();
  function Il(t) {
    if (typeof t.getRootNode == "function") {
      var e = t.getRootNode();
      if (e.nodeType === 9 || e.nodeType === 11) return e;
    }
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  var Zn = rt.d;
  rt.d = {
    f: bb,
    r: Tb,
    D: Eb,
    C: jb,
    L: Ab,
    m: Cb,
    X: Mb,
    S: Nb,
    M: Db
  };
  function bb() {
    var t = Zn.f(), e = Bu();
    return t || e;
  }
  function Tb(t) {
    var e = da(t);
    e !== null && e.tag === 5 && e.type === "form" ? Fm(e) : Zn.r(t);
  }
  var Ja = typeof document > "u" ? null : document;
  function Jp(t, e, n) {
    var i = Ja;
    if (i && typeof e == "string" && e) {
      var s = Ge(e);
      s = 'link[rel="' + t + '"][href="' + s + '"]', typeof n == "string" && (s += '[crossorigin="' + n + '"]'), kp.has(s) || (kp.add(s), t = { rel: t, crossOrigin: n, href: e }, i.querySelector(s) === null && (e = i.createElement("link"), fe(e, "link", t), ee(e), i.head.appendChild(e)));
    }
  }
  function Eb(t) {
    Zn.D(t), Jp("dns-prefetch", t, null);
  }
  function jb(t, e) {
    Zn.C(t, e), Jp("preconnect", t, e);
  }
  function Ab(t, e, n) {
    Zn.L(t, e, n);
    var i = Ja;
    if (i && t && e) {
      var s = 'link[rel="preload"][as="' + Ge(e) + '"]';
      e === "image" && n && n.imageSrcSet ? (s += '[imagesrcset="' + Ge(
        n.imageSrcSet
      ) + '"]', typeof n.imageSizes == "string" && (s += '[imagesizes="' + Ge(
        n.imageSizes
      ) + '"]')) : s += '[href="' + Ge(t) + '"]';
      var u = s;
      switch (e) {
        case "style":
          u = Fa(t);
          break;
        case "script":
          u = Pa(t);
      }
      if (!(Pe.has(u) || (t = K(
        {
          rel: "preload",
          href: e === "image" && n && n.imageSrcSet ? void 0 : t,
          as: e
        },
        n
      ), Pe.set(u, t), i.querySelector(s) !== null || e === "style" && i.querySelector($l(u)) || e === "script" && i.querySelector(Wl(u))))) {
        var d = i.createElement("link");
        fe(d, "link", t), e === "style" && (d[ws] = !0, d.onload = d.onerror = function() {
          uh(d);
        }), ee(d), i.head.appendChild(d);
      }
    }
  }
  function Cb(t, e) {
    Zn.m(t, e);
    var n = Ja;
    if (n && t) {
      var i = e && typeof e.as == "string" ? e.as : "script", s = 'link[rel="modulepreload"][as="' + Ge(i) + '"][href="' + Ge(t) + '"]', u = s;
      switch (i) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = Pa(t);
      }
      if (!Pe.has(u) && (t = K({ rel: "modulepreload", href: t }, e), Pe.set(u, t), n.querySelector(s) === null)) {
        switch (i) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(Wl(u)))
              return;
        }
        i = n.createElement("link"), fe(i, "link", t), ee(i), n.head.appendChild(i);
      }
    }
  }
  function Nb(t, e, n) {
    Zn.S(t, e, n);
    var i = Ja;
    if (i && t) {
      var s = ha(i).hoistableStyles, u = Fa(t);
      e = e || "default";
      var d = s.get(u);
      if (!d) {
        var g = { loading: 0, preload: null };
        if (d = i.querySelector(
          $l(u)
        ))
          g.loading = 5;
        else {
          t = K(
            { rel: "stylesheet", href: t, "data-precedence": e },
            n
          ), (n = Pe.get(u)) && rf(t, n);
          var T = d = i.createElement("link");
          ee(T), fe(T, "link", t), T._p = new Promise(function(D, z) {
            T.onload = D, T.onerror = z;
          }), T.addEventListener("load", function() {
            g.loading |= 1;
          }), T.addEventListener("error", function() {
            g.loading |= 2;
          }), g.loading |= 4, Qu(d, e, i);
        }
        d = {
          type: "stylesheet",
          instance: d,
          count: 1,
          state: g
        }, s.set(u, d);
      }
    }
  }
  function Mb(t, e) {
    Zn.X(t, e);
    var n = Ja;
    if (n && t) {
      var i = ha(n).hoistableScripts, s = Pa(t), u = i.get(s);
      u || (u = n.querySelector(Wl(s)), u || (t = K({ src: t, async: !0 }, e), (e = Pe.get(s)) && cf(t, e), u = n.createElement("script"), ee(u), fe(u, "link", t), n.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, i.set(s, u));
    }
  }
  function Db(t, e) {
    Zn.M(t, e);
    var n = Ja;
    if (n && t) {
      var i = ha(n).hoistableScripts, s = Pa(t), u = i.get(s);
      u || (u = n.querySelector(Wl(s)), u || (t = K({ src: t, async: !0, type: "module" }, e), (e = Pe.get(s)) && cf(t, e), u = n.createElement("script"), ee(u), fe(u, "link", t), n.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, i.set(s, u));
    }
  }
  function Fp(t, e, n, i) {
    var s = (s = kn.current) ? Il(s) : null;
    if (!s) throw Error(r(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (n = Fa(n.href), e = ha(
          s
        ).hoistableStyles, i = e.get(n), i || (i = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, e.set(n, i)), i) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          t = Fa(n.href);
          var u = ha(
            s
          ).hoistableStyles, d = u.get(t);
          if (d || (s = s.ownerDocument || s, d = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, u.set(t, d), (u = s.querySelector(
            $l(t)
          )) ? u._p || (d.instance = u, d.state.loading = 5) : (u = Pe.get(t), u || (u = {
            rel: "preload",
            as: "style",
            href: n.href,
            crossOrigin: n.crossOrigin,
            integrity: n.integrity,
            media: n.media,
            hrefLang: n.hrefLang,
            referrerPolicy: n.referrerPolicy
          }, Pe.set(t, u)), Ob(
            s,
            t,
            u,
            d.state
          ))), e && i === null)
            throw Error(r(528, ""));
          return d;
        }
        if (e && i !== null)
          throw Error(r(529, ""));
        return null;
      case "script":
        return e = n.async, n = n.src, typeof n == "string" && e && typeof e != "function" && typeof e != "symbol" ? (n = Pa(n), e = ha(
          s
        ).hoistableScripts, i = e.get(n), i || (i = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, e.set(n, i)), i) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(r(444, t));
    }
  }
  function Fa(t) {
    return 'href="' + Ge(t) + '"';
  }
  function $l(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function Pp(t) {
    return K({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function Ob(t, e, n, i) {
    if (e = t.querySelector(
      'link[rel="preload"][as="style"][' + e + "]"
    )) {
      if (e[ws] !== !0) {
        i.loading = 1;
        return;
      }
    } else
      e = t.createElement("link"), e[ws] = !0, e.onload = e.onerror = uh.bind(null, e), fe(e, "link", n), ee(e), t.head.appendChild(e);
    i.preload = e, e.addEventListener("load", function() {
      return i.loading |= 1;
    }), e.addEventListener("error", function() {
      return i.loading |= 2;
    });
  }
  function Pa(t) {
    return '[src="' + Ge(t) + '"]';
  }
  function Wl(t) {
    return "script[async]" + t;
  }
  function Ip(t, e, n) {
    if (e.count++, e.instance === null)
      switch (e.type) {
        case "style":
          var i = t.querySelector(
            'style[data-href~="' + Ge(n.href) + '"]'
          );
          if (i)
            return e.instance = i, ee(i), i;
          var s = K({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null
          });
          return i = (t.ownerDocument || t).createElement(
            "style"
          ), ee(i), fe(i, "style", s), Qu(i, n.precedence, t), e.instance = i;
        case "stylesheet":
          s = Fa(n.href);
          var u = t.querySelector(
            $l(s)
          );
          if (u)
            return e.state.loading |= 4, e.instance = u, ee(u), u;
          i = Pp(n), (s = Pe.get(s)) && rf(i, s), u = (t.ownerDocument || t).createElement("link"), ee(u);
          var d = u;
          return d._p = new Promise(function(g, T) {
            d.onload = g, d.onerror = T;
          }), fe(u, "link", i), e.state.loading |= 4, Qu(u, n.precedence, t), e.instance = u;
        case "script":
          return u = Pa(n.src), (s = t.querySelector(
            Wl(u)
          )) ? (e.instance = s, ee(s), s) : (i = n, (s = Pe.get(u)) && (i = K({}, n), cf(i, s)), t = t.ownerDocument || t, s = t.createElement("script"), ee(s), fe(s, "link", i), t.head.appendChild(s), e.instance = s);
        case "void":
          return null;
        default:
          throw Error(r(443, e.type));
      }
    else
      e.type === "stylesheet" && (e.state.loading & 4) === 0 && (i = e.instance, e.state.loading |= 4, Qu(i, n.precedence, t));
    return e.instance;
  }
  function Qu(t, e, n) {
    for (var i = n.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), s = i.length ? i[i.length - 1] : null, u = s, d = 0; d < i.length; d++) {
      var g = i[d];
      if (g.dataset.precedence === e) u = g;
      else if (u !== s) break;
    }
    u ? u.parentNode.insertBefore(t, u.nextSibling) : (e = n.nodeType === 9 ? n.head : n, e.insertBefore(t, e.firstChild));
  }
  function rf(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
  }
  function cf(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
  }
  var Zu = null;
  function $p(t, e, n) {
    if (Zu === null) {
      var i = /* @__PURE__ */ new Map(), s = Zu = /* @__PURE__ */ new Map();
      s.set(n, i);
    } else
      s = Zu, i = s.get(n), i || (i = /* @__PURE__ */ new Map(), s.set(n, i));
    if (i.has(t)) return i;
    for (i.set(t, null), n = n.getElementsByTagName(t), s = 0; s < n.length; s++) {
      var u = n[s];
      if (!(u[ml] || u[se] || t === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var d = u.getAttribute(e) || "";
        d = t + d;
        var g = i.get(d);
        g ? g.push(u) : i.set(d, [u]);
      }
    }
    return i;
  }
  function ff(t, e, n) {
    t = t.ownerDocument || t, t.head.insertBefore(
      n,
      e === "title" ? t.querySelector("head > title") : null
    );
  }
  function Rb(t, e, n) {
    if (n === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "")
          break;
        return !0;
      case "link":
        if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError)
          break;
        switch (e.rel) {
          case "stylesheet":
            return t = e.disabled, typeof e.precedence == "string" && t == null;
          default:
            return !0;
        }
      case "script":
        if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string")
          return !0;
    }
    return !1;
  }
  function Wp(t, e) {
    return t === "img" && e.src != null && e.src !== "" && e.onLoad == null && e.loading !== "lazy";
  }
  function tv(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function ev(t) {
    return (t.width || 100) * (t.height || 100) * (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) * 0.25;
  }
  function nv(t, e) {
    typeof e.decode == "function" && (t.imgCount++, e.complete || (t.imgBytes += ev(e), t.suspenseyImages.push(e)), t = _b.bind(t), e.decode().then(t, t));
  }
  function zb(t, e, n, i) {
    if (n.type === "stylesheet" && (typeof i.media != "string" || matchMedia(i.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var s = Fa(i.href), u = e.querySelector(
          $l(s)
        );
        if (u) {
          e = u._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = ts.bind(t), e.then(t, t)), n.state.loading |= 4, n.instance = u, ee(u);
          return;
        }
        u = e.ownerDocument || e, i = Pp(i), (s = Pe.get(s)) && rf(i, s), u = u.createElement("link"), ee(u);
        var d = u;
        d._p = new Promise(function(g, T) {
          d.onload = g, d.onerror = T;
        }), fe(u, "link", i), n.instance = u;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(n, e), (e = n.state.preload) && (n.state.loading & 3) === 0 && (t.count++, n = ts.bind(t), e.addEventListener("load", n), e.addEventListener("error", n));
    }
  }
  var Ku = 0;
  function wb(t, e) {
    return t.stylesheets && t.count === 0 && Ju(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(n) {
      var i = setTimeout(function() {
        if (t.stylesheets && Ju(t, t.stylesheets), t.unsuspend) {
          var u = t.unsuspend;
          t.unsuspend = null, u();
        }
      }, 6e4 + e);
      0 < t.imgBytes && Ku === 0 && (Ku = 62500 * IS());
      var s = setTimeout(
        function() {
          if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && Ju(t, t.stylesheets), t.unsuspend)) {
            var u = t.unsuspend;
            t.unsuspend = null, u();
          }
        },
        (t.imgBytes > Ku ? 50 : 800) + e
      );
      return t.unsuspend = n, function() {
        t.unsuspend = null, clearTimeout(i), clearTimeout(s);
      };
    } : null;
  }
  function iv(t) {
    if (t.count === 0 && (t.imgCount === 0 || !t.waitingForImages)) {
      if (t.stylesheets) Ju(t, t.stylesheets);
      else if (t.unsuspend) {
        var e = t.unsuspend;
        t.unsuspend = null, e();
      }
    }
  }
  function ts() {
    this.count--, iv(this);
  }
  function _b() {
    this.imgCount--, iv(this);
  }
  var ku = null;
  function Ju(t, e) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, ku = /* @__PURE__ */ new Map(), e.forEach(Vb, t), ku = null, ts.call(t));
  }
  function Vb(t, e) {
    if (!(e.state.loading & 4)) {
      var n = ku.get(t);
      if (n) var i = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), ku.set(t, n);
        for (var s = t.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), u = 0; u < s.length; u++) {
          var d = s[u];
          (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") && (n.set(d.dataset.precedence, d), i = d);
        }
        i && n.set(null, i);
      }
      s = e.instance, d = s.getAttribute("data-precedence"), u = n.get(d) || i, u === i && n.set(null, s), n.set(d, s), this.count++, i = ts.bind(this), s.addEventListener("load", i), s.addEventListener("error", i), u ? u.parentNode.insertBefore(s, u.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(s, t.firstChild)), e.state.loading |= 4;
    }
  }
  var Ia = {
    $$typeof: Ct,
    Provider: null,
    Consumer: null,
    _currentValue: On,
    _currentValue2: On,
    _threadCount: 0
  };
  function Ub(t, e, n, i, s, u, d, g, T) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Qo(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Qo(0), this.hiddenUpdates = Qo(null), this.identifierPrefix = i, this.onUncaughtError = s, this.onCaughtError = u, this.onRecoverableError = d, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = T, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function av(t, e, n, i, s, u, d, g, T, D, z, B) {
    return t = new Ub(
      t,
      e,
      n,
      d,
      T,
      D,
      z,
      B,
      g
    ), e = 1, u === !0 && (e |= 24), u = Ee(3, null, null, e), t.current = u, u.stateNode = t, e = Ar(), e.refCount++, t.pooledCache = e, e.refCount++, u.memoizedState = {
      element: i,
      isDehydrated: n,
      cache: e
    }, Dr(u), t;
  }
  function lv(t) {
    return t ? (t = Ea, t) : Ea;
  }
  function sv(t, e, n, i, s, u) {
    s = lv(s), i.context === null ? i.context = s : i.pendingContext = s, i = ai(e), i.payload = { element: n }, u = u === void 0 ? null : u, u !== null && (i.callback = u), n = li(t, i, e), n !== null && (Ne(n, t, e), Rl(n, t, e));
  }
  function uv(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var n = t.retryLane;
      t.retryLane = n !== 0 && n < e ? n : e;
    }
  }
  function df(t, e) {
    uv(t, e), (t = t.alternate) && uv(t, e);
  }
  function ov(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Bi(t, 67108864);
      e !== null && Ne(e, t, 67108864), df(t, 67108864);
    }
  }
  function rv(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Ye();
      e = Zo(e);
      var n = Bi(t, e);
      n !== null && Ne(n, t, e), df(t, e);
    }
  }
  var $a = !0;
  function Bb(t, e, n, i) {
    var s = tt.T;
    tt.T = null;
    var u = rt.p;
    try {
      rt.p = 2, hf(t, e, n, i);
    } finally {
      rt.p = u, tt.T = s;
    }
  }
  function Lb(t, e, n, i) {
    var s = tt.T;
    tt.T = null;
    var u = rt.p;
    try {
      rt.p = 8, hf(t, e, n, i);
    } finally {
      rt.p = u, tt.T = s;
    }
  }
  function hf(t, e, n, i) {
    if ($a) {
      var s = mf(i);
      if (s === null)
        kc(
          t,
          e,
          i,
          Fu,
          n
        ), fv(t, i);
      else if (Yb(
        s,
        t,
        e,
        n,
        i
      ))
        i.stopPropagation();
      else if (fv(t, i), e & 4 && -1 < Hb.indexOf(t)) {
        for (; s !== null; ) {
          var u = da(s);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var d = zi(u.pendingLanes);
                  if (d !== 0) {
                    var g = u;
                    for (g.pendingLanes |= 2, g.entangledLanes |= 2; d; ) {
                      var T = 1 << 31 - we(d);
                      g.entanglements[1] |= T, d &= ~T;
                    }
                    Tn(u), (At & 6) === 0 && (_u = Re() + 500, kl(0));
                  }
                }
                break;
              case 31:
              case 13:
                g = Bi(u, 2), g !== null && Ne(g, u, 2), Bu(), df(u, 2);
            }
          if (u = mf(i), u === null && kc(
            t,
            e,
            i,
            Fu,
            n
          ), u === s) break;
          s = u;
        }
        s !== null && i.stopPropagation();
      } else
        kc(
          t,
          e,
          i,
          null,
          n
        );
    }
  }
  function mf(t) {
    return t = $o(t), yf(t);
  }
  var Fu = null;
  function yf(t) {
    if (Fu = null, t = wi(t), t !== null) {
      var e = m(t);
      if (e === null) t = null;
      else {
        var n = e.tag;
        if (n === 13) {
          if (t = h(e), t !== null) return t;
          t = null;
        } else if (n === 31) {
          if (t = y(e), t !== null) return t;
          t = null;
        } else if (n === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return Fu = t, null;
  }
  function cv(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "fullscreenerror":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "resize":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (I1()) {
          case Fd:
            return 2;
          case Pd:
            return 8;
          case Ms:
          case $1:
            return 32;
          case Id:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var pf = !1, vi = null, gi = null, xi = null, es = /* @__PURE__ */ new Map(), ns = /* @__PURE__ */ new Map(), Si = [], Hb = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function fv(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        vi = null;
        break;
      case "dragenter":
      case "dragleave":
        gi = null;
        break;
      case "mouseover":
      case "mouseout":
        xi = null;
        break;
      case "pointerover":
      case "pointerout":
        es.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ns.delete(e.pointerId);
    }
  }
  function is(t, e, n, i, s, u) {
    return t === null || t.nativeEvent !== u ? (t = {
      blockedOn: e,
      domEventName: n,
      eventSystemFlags: i,
      nativeEvent: u,
      targetContainers: [s]
    }, e !== null && (e = da(e), e !== null && ov(e)), t) : (t.eventSystemFlags |= i, e = t.targetContainers, s !== null && e.indexOf(s) === -1 && e.push(s), t);
  }
  function Yb(t, e, n, i, s) {
    switch (e) {
      case "focusin":
        return vi = is(
          vi,
          t,
          e,
          n,
          i,
          s
        ), !0;
      case "dragenter":
        return gi = is(
          gi,
          t,
          e,
          n,
          i,
          s
        ), !0;
      case "mouseover":
        return xi = is(
          xi,
          t,
          e,
          n,
          i,
          s
        ), !0;
      case "pointerover":
        var u = s.pointerId;
        return es.set(
          u,
          is(
            es.get(u) || null,
            t,
            e,
            n,
            i,
            s
          )
        ), !0;
      case "gotpointercapture":
        return u = s.pointerId, ns.set(
          u,
          is(
            ns.get(u) || null,
            t,
            e,
            n,
            i,
            s
          )
        ), !0;
    }
    return !1;
  }
  function dv(t) {
    var e = wi(t.target);
    if (e !== null) {
      var n = m(e);
      if (n !== null) {
        if (e = n.tag, e === 13) {
          if (e = h(n), e !== null) {
            t.blockedOn = e, ah(t.priority, function() {
              rv(n);
            });
            return;
          }
        } else if (e === 31) {
          if (e = y(n), e !== null) {
            t.blockedOn = e, ah(t.priority, function() {
              rv(n);
            });
            return;
          }
        } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Pu(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var n = mf(t.nativeEvent);
      if (n === null) {
        n = t.nativeEvent;
        var i = new n.constructor(
          n.type,
          n
        );
        Io = i, n.target.dispatchEvent(i), Io = null;
      } else
        return e = da(n), e !== null && ov(e), t.blockedOn = n, !1;
      e.shift();
    }
    return !0;
  }
  function hv(t, e, n) {
    Pu(t) && n.delete(e);
  }
  function qb() {
    pf = !1, vi !== null && Pu(vi) && (vi = null), gi !== null && Pu(gi) && (gi = null), xi !== null && Pu(xi) && (xi = null), es.forEach(hv), ns.forEach(hv);
  }
  function Iu(t, e) {
    t.blockedOn === e && (t.blockedOn = null, pf || (pf = !0, a.unstable_scheduleCallback(
      a.unstable_NormalPriority,
      qb
    )));
  }
  var $u = null;
  function mv(t) {
    $u !== t && ($u = t, a.unstable_scheduleCallback(
      a.unstable_NormalPriority,
      function() {
        $u === t && ($u = null);
        for (var e = 0; e < t.length; e += 3) {
          var n = t[e], i = t[e + 1], s = t[e + 2];
          if (typeof i != "function") {
            if (yf(i || n) === null)
              continue;
            break;
          }
          var u = da(n);
          u !== null && (t.splice(e, 3), e -= 3, Pr(
            u,
            {
              pending: !0,
              data: s,
              method: n.method,
              action: i
            },
            i,
            s
          ));
        }
      }
    ));
  }
  function Wa(t) {
    function e(T) {
      return Iu(T, t);
    }
    vi !== null && Iu(vi, t), gi !== null && Iu(gi, t), xi !== null && Iu(xi, t), es.forEach(e), ns.forEach(e);
    for (var n = 0; n < Si.length; n++) {
      var i = Si[n];
      i.blockedOn === t && (i.blockedOn = null);
    }
    for (; 0 < Si.length && (n = Si[0], n.blockedOn === null); )
      dv(n), n.blockedOn === null && Si.shift();
    if (n = (t.ownerDocument || t).$$reactFormReplay, n != null)
      for (i = 0; i < n.length; i += 3) {
        var s = n[i], u = n[i + 1], d = s[Te] || null;
        if (typeof u == "function")
          d || mv(n);
        else if (d) {
          var g = null;
          if (u && u.hasAttribute("formAction")) {
            if (s = u, d = u[Te] || null)
              g = d.formAction;
            else if (yf(s) !== null) continue;
          } else g = d.action;
          typeof g == "function" ? n[i + 1] = g : (n.splice(i, 3), i -= 3), mv(n);
        }
      }
  }
  function yv() {
    function t(u) {
      u.canIntercept && u.info === "react-transition" && u.intercept({
        handler: function() {
          return new Promise(function(d) {
            return s = d;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function e() {
      s !== null && (s(), s = null), i || setTimeout(n, 20);
    }
    function n() {
      if (!i && !navigation.transition) {
        var u = navigation.currentEntry;
        u && u.url != null && navigation.navigate(u.url, {
          state: u.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var i = !1, s = null;
      return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", e), navigation.addEventListener("navigateerror", e), setTimeout(n, 100), function() {
        i = !0, navigation.removeEventListener("navigate", t), navigation.removeEventListener("navigatesuccess", e), navigation.removeEventListener("navigateerror", e), s !== null && (s(), s = null);
      };
    }
  }
  function vf(t) {
    this._internalRoot = t;
  }
  Wu.prototype.render = vf.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(r(409));
    var n = e.current, i = Ye();
    sv(n, i, t, e, null, null);
  }, Wu.prototype.unmount = vf.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      sv(t.current, 2, null, t, null, null), Bu(), e[fa] = null;
    }
  };
  function Wu(t) {
    this._internalRoot = t;
  }
  Wu.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var e = ih();
      t = { blockedOn: null, target: t, priority: e };
      for (var n = 0; n < Si.length && e !== 0 && e < Si[n].priority; n++) ;
      Si.splice(n, 0, t), n === 0 && dv(t);
    }
  };
  var pv = l.version;
  if (pv !== "19.3.0")
    throw Error(
      r(
        527,
        pv,
        "19.3.0"
      )
    );
  rt.findDOMNode = function(t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function" ? Error(r(188)) : (t = Object.keys(t).join(","), Error(r(268, t)));
    return t = S(e), t = t !== null ? p(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var Gb = {
    bundleType: 0,
    version: "19.3.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: tt,
    reconcilerVersion: "19.3.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var to = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!to.isDisabled && to.supportsFiber)
      try {
        fl = to.inject(
          Gb
        ), ze = to;
      } catch {
      }
  }
  return ls.createRoot = function(t, e) {
    if (!c(t)) throw Error(r(299));
    var n = !1, i = "", s = ly, u = sy, d = uy;
    return e != null && (e.unstable_strictMode === !0 && (n = !0), e.identifierPrefix !== void 0 && (i = e.identifierPrefix), e.onUncaughtError !== void 0 && (s = e.onUncaughtError), e.onCaughtError !== void 0 && (u = e.onCaughtError), e.onRecoverableError !== void 0 && (d = e.onRecoverableError)), e = av(
      t,
      1,
      !1,
      null,
      null,
      n,
      i,
      null,
      s,
      u,
      d,
      yv
    ), t[fa] = e.current, Kc(t), new vf(e);
  }, ls.hydrateRoot = function(t, e, n) {
    if (!c(t)) throw Error(r(299));
    var i = !1, s = "", u = ly, d = sy, g = uy, T = null;
    return n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (s = n.identifierPrefix), n.onUncaughtError !== void 0 && (u = n.onUncaughtError), n.onCaughtError !== void 0 && (d = n.onCaughtError), n.onRecoverableError !== void 0 && (g = n.onRecoverableError), n.formState !== void 0 && (T = n.formState)), e = av(
      t,
      1,
      !0,
      e,
      n ?? null,
      i,
      s,
      T,
      u,
      d,
      g,
      yv
    ), e.context = lv(null), n = e.current, i = Ye(), i = Zo(i), s = ai(i), s.callback = null, li(n, s, i), n = i, e.current.lanes = n, hl(e, n), Tn(e), t[fa] = e.current, Kc(t), new Wu(e);
  }, ls.version = "19.3.0", ls;
}
var Cv;
function $b() {
  if (Cv) return xf.exports;
  Cv = 1;
  function a() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (l) {
        console.error(l);
      }
  }
  return a(), xf.exports = Ib(), xf.exports;
}
var Wb = $b(), V = pd();
const vd = V.createContext({});
function Oo(a) {
  const l = V.useRef(null);
  return l.current === null && (l.current = a()), l.current;
}
const tT = typeof window < "u", gd = tT ? V.useLayoutEffect : V.useEffect, Ro = /* @__PURE__ */ V.createContext(null);
function xd(a, l) {
  a.indexOf(l) === -1 && a.push(l);
}
function po(a, l) {
  const o = a.indexOf(l);
  o > -1 && a.splice(o, 1);
}
const Mn = (a, l, o) => o > l ? l : o < a ? a : o;
function Nv(a, l) {
  return l ? `${a}. For more information and steps for solving, visit https://motion.dev/troubleshooting/${l}` : a;
}
let gs = () => {
}, Ai = () => {
};
var $g;
typeof process < "u" && (($g = process.env) == null ? void 0 : $g.NODE_ENV) !== "production" && (gs = (a, l, o) => {
  !a && typeof console < "u" && console.warn(Nv(l, o));
}, Ai = (a, l, o) => {
  if (!a)
    throw new Error(Nv(l, o));
});
const Ci = {}, Wg = (a) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(a), t0 = (a) => typeof a == "object" && a !== null, e0 = (a) => /^0[^.\s]+$/u.test(a);
// @__NO_SIDE_EFFECTS__
function n0(a) {
  let l;
  return () => (l === void 0 && (l = a()), l);
}
const $e = /* @__NO_SIDE_EFFECTS__ */ (a) => a, xs = (...a) => a.reduce((l, o) => (r) => o(l(r))), ds = /* @__NO_SIDE_EFFECTS__ */ (a, l, o) => {
  const r = l - a;
  return r ? (o - a) / r : 1;
};
class Sd {
  constructor() {
    this.subscriptions = [];
  }
  add(l) {
    return xd(this.subscriptions, l), () => po(this.subscriptions, l);
  }
  notify(l, o, r) {
    const c = this.subscriptions.length;
    if (c)
      if (c === 1)
        this.subscriptions[0](l, o, r);
      else
        for (let m = 0; m < c; m++) {
          const h = this.subscriptions[m];
          h && h(l, o, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const De = /* @__NO_SIDE_EFFECTS__ */ (a) => a * 1e3, Ie = /* @__NO_SIDE_EFFECTS__ */ (a) => a / 1e3, i0 = /* @__NO_SIDE_EFFECTS__ */ (a, l) => l ? a * (1e3 / l) : 0, a0 = (a, l, o) => (((1 - 3 * o + 3 * l) * a + (3 * o - 6 * l)) * a + 3 * l) * a, eT = 1e-7, nT = 12;
function iT(a, l, o, r, c) {
  let m, h, y = 0;
  do
    h = l + (o - l) / 2, m = a0(h, r, c) - a, m > 0 ? o = h : l = h;
  while (Math.abs(m) > eT && ++y < nT);
  return h;
}
// @__NO_SIDE_EFFECTS__
function Ss(a, l, o, r) {
  if (a === l && o === r)
    return $e;
  const c = (m) => iT(m, 0, 1, a, o);
  return (m) => m === 0 || m === 1 ? m : a0(c(m), l, r);
}
const l0 = /* @__NO_SIDE_EFFECTS__ */ (a) => (l) => l <= 0.5 ? a(2 * l) / 2 : (2 - a(2 * (1 - l))) / 2, s0 = /* @__NO_SIDE_EFFECTS__ */ (a) => (l) => 1 - a(1 - l), u0 = /* @__PURE__ */ Ss(0.33, 1.53, 0.69, 0.99), bd = /* @__PURE__ */ s0(u0), o0 = /* @__PURE__ */ l0(bd), r0 = (a) => a >= 1 ? 1 : (a *= 2) < 1 ? 0.5 * bd(a) : 0.5 * (2 - Math.pow(2, -10 * (a - 1))), Td = (a) => 1 - Math.sin(Math.acos(a)), c0 = /* @__PURE__ */ s0(Td), f0 = /* @__PURE__ */ l0(Td), aT = /* @__PURE__ */ Ss(0.42, 0, 1, 1), lT = /* @__PURE__ */ Ss(0, 0, 0.58, 1), d0 = /* @__PURE__ */ Ss(0.42, 0, 0.58, 1), sT = /* @__NO_SIDE_EFFECTS__ */ (a) => Array.isArray(a) && typeof a[0] != "number", h0 = /* @__NO_SIDE_EFFECTS__ */ (a) => Array.isArray(a) && typeof a[0] == "number", Mv = {
  linear: $e,
  easeIn: aT,
  easeInOut: d0,
  easeOut: lT,
  circIn: Td,
  circInOut: f0,
  circOut: c0,
  backIn: bd,
  backInOut: o0,
  backOut: u0,
  anticipate: r0
}, uT = (a) => typeof a == "string", Dv = (a) => {
  if (/* @__PURE__ */ h0(a)) {
    Ai(a.length === 4, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length");
    const [l, o, r, c] = a;
    return /* @__PURE__ */ Ss(l, o, r, c);
  } else if (uT(a))
    return Ai(Mv[a] !== void 0, `Invalid easing type '${a}'`, "invalid-easing-type"), Mv[a];
  return a;
}, eo = [
  "setup",
  // Compute
  "read",
  // Read
  "resolveKeyframes",
  // Write/Read/Write/Read
  "preUpdate",
  // Compute
  "update",
  // Compute
  "preRender",
  // Compute
  "render",
  // Write
  "postRender"
  // Compute
];
function oT(a) {
  let l = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set(), r = !1, c = !1;
  const m = /* @__PURE__ */ new WeakSet();
  let h = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  };
  function y(S) {
    m.has(S) && (x.schedule(S), a()), S(h);
  }
  const x = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (S, p = !1, v = !1) => {
      const A = v && r ? l : o;
      return p && m.add(S), A.add(S), S;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (S) => {
      o.delete(S), m.delete(S);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (S) => {
      if (h = S, r) {
        c = !0;
        return;
      }
      r = !0;
      const p = l;
      l = o, o = p, l.forEach(y), l.clear(), r = !1, c && (c = !1, x.process(S));
    }
  };
  return x;
}
const rT = 40;
function m0(a, l) {
  let o = !1, r = !0;
  const c = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, m = () => o = !0, h = eo.reduce((X, Q) => (X[Q] = oT(m), X), {}), { setup: y, read: x, resolveKeyframes: S, preUpdate: p, update: v, preRender: b, render: A, postRender: j } = h, _ = () => {
    const X = Ci.useManualTiming, Q = X ? c.timestamp : performance.now();
    o = !1, X || (c.delta = r ? 1e3 / 60 : Math.max(Math.min(Q - c.timestamp, rT), 1)), c.timestamp = Q, c.isProcessing = !0, y.process(c), x.process(c), S.process(c), p.process(c), v.process(c), b.process(c), A.process(c), j.process(c), c.isProcessing = !1, o && l && (r = !1, a(_));
  }, w = () => {
    o = !0, r = !0, c.isProcessing || a(_);
  };
  return { schedule: eo.reduce((X, Q) => {
    const I = h[Q];
    return X[Q] = (ot, K = !1, Y = !1) => (o || w(), I.schedule(ot, K, Y)), X;
  }, {}), cancel: (X) => {
    for (let Q = 0; Q < eo.length; Q++)
      h[eo[Q]].cancel(X);
  }, state: c, steps: h };
}
const { schedule: Vt, cancel: Ni, state: he, steps: jf } = /* @__PURE__ */ m0(typeof requestAnimationFrame < "u" ? requestAnimationFrame : $e, !0);
let uo;
function cT() {
  uo = void 0;
}
const Se = {
  now: () => (uo === void 0 && Se.set(he.isProcessing || Ci.useManualTiming ? he.timestamp : performance.now()), uo),
  set: (a) => {
    uo = a, queueMicrotask(cT);
  }
}, y0 = (a) => (l) => typeof l == "string" && l.startsWith(a), p0 = /* @__PURE__ */ y0("--"), fT = /* @__PURE__ */ y0("var(--"), Ed = (a) => fT(a) ? dT.test(a.split("/*")[0].trim()) : !1, dT = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function Ov(a) {
  return typeof a != "string" ? !1 : a.split("/*")[0].includes("var(--");
}
const ul = {
  test: (a) => typeof a == "number",
  parse: parseFloat,
  transform: (a) => a
}, hs = {
  ...ul,
  transform: (a) => Mn(0, 1, a)
}, no = {
  ...ul,
  default: 1
}, os = (a) => Math.round(a * 1e5) / 1e5, jd = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function hT(a) {
  return a == null;
}
const mT = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, Ad = (a, l) => (o) => !!(typeof o == "string" && mT.test(o) && o.startsWith(a) || l && !hT(o) && Object.prototype.hasOwnProperty.call(o, l)), v0 = (a, l, o) => (r) => {
  if (typeof r != "string")
    return r;
  const [c, m, h, y] = r.match(jd);
  return {
    [a]: parseFloat(c),
    [l]: parseFloat(m),
    [o]: parseFloat(h),
    alpha: y !== void 0 ? parseFloat(y) : 1
  };
}, yT = (a) => Mn(0, 255, a), Af = {
  ...ul,
  transform: (a) => Math.round(yT(a))
}, ia = {
  test: /* @__PURE__ */ Ad("rgb", "red"),
  parse: /* @__PURE__ */ v0("red", "green", "blue"),
  transform: ({ red: a, green: l, blue: o, alpha: r = 1 }) => "rgba(" + Af.transform(a) + ", " + Af.transform(l) + ", " + Af.transform(o) + ", " + os(hs.transform(r)) + ")"
};
function pT(a) {
  let l = "", o = "", r = "", c = "";
  return a.length > 5 ? (l = a.substring(1, 3), o = a.substring(3, 5), r = a.substring(5, 7), c = a.substring(7, 9)) : (l = a.substring(1, 2), o = a.substring(2, 3), r = a.substring(3, 4), c = a.substring(4, 5), l += l, o += o, r += r, c += c), {
    red: parseInt(l, 16),
    green: parseInt(o, 16),
    blue: parseInt(r, 16),
    alpha: c ? parseInt(c, 16) / 255 : 1
  };
}
const Yf = {
  test: /* @__PURE__ */ Ad("#"),
  parse: pT,
  transform: ia.transform
}, bs = /* @__NO_SIDE_EFFECTS__ */ (a) => ({
  test: (l) => typeof l == "string" && l.endsWith(a) && l.split(" ").length === 1,
  parse: parseFloat,
  transform: (l) => `${l}${a}`
}), Kn = /* @__PURE__ */ bs("deg"), Cn = /* @__PURE__ */ bs("%"), W = /* @__PURE__ */ bs("px"), vT = /* @__PURE__ */ bs("vh"), gT = /* @__PURE__ */ bs("vw"), Rv = {
  ...Cn,
  parse: (a) => Cn.parse(a) / 100,
  transform: (a) => Cn.transform(a * 100)
}, el = {
  test: /* @__PURE__ */ Ad("hsl", "hue"),
  parse: /* @__PURE__ */ v0("hue", "saturation", "lightness"),
  transform: ({ hue: a, saturation: l, lightness: o, alpha: r = 1 }) => "hsla(" + Math.round(a) + ", " + Cn.transform(os(l)) + ", " + Cn.transform(os(o)) + ", " + os(hs.transform(r)) + ")"
}, $t = {
  test: (a) => ia.test(a) || Yf.test(a) || el.test(a),
  parse: (a) => ia.test(a) ? ia.parse(a) : el.test(a) ? el.parse(a) : Yf.parse(a),
  transform: (a) => typeof a == "string" ? a : a.hasOwnProperty("red") ? ia.transform(a) : el.transform(a),
  getAnimatableNone: (a) => {
    const l = $t.parse(a);
    return l.alpha = 0, $t.transform(l);
  }
}, xT = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function ST(a) {
  var l, o;
  return isNaN(a) && typeof a == "string" && (((l = a.match(jd)) == null ? void 0 : l.length) || 0) + (((o = a.match(xT)) == null ? void 0 : o.length) || 0) > 0;
}
const g0 = "number", x0 = "color", bT = "var", TT = "var(", zv = "${}", ET = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function al(a) {
  const l = a.toString(), o = [], r = {
    color: [],
    number: [],
    var: []
  }, c = [];
  let m = 0;
  const y = l.replace(ET, (x) => ($t.test(x) ? (r.color.push(m), c.push(x0), o.push($t.parse(x))) : x.startsWith(TT) ? (r.var.push(m), c.push(bT), o.push(x)) : (r.number.push(m), c.push(g0), o.push(parseFloat(x))), ++m, zv)).split(zv);
  return { values: o, split: y, indexes: r, types: c };
}
function jT(a) {
  return al(a).values;
}
function S0({ split: a, types: l }) {
  const o = a.length;
  return (r) => {
    let c = "";
    for (let m = 0; m < o; m++)
      if (c += a[m], r[m] !== void 0) {
        const h = l[m];
        h === g0 ? c += os(r[m]) : h === x0 ? c += $t.transform(r[m]) : c += r[m];
      }
    return c;
  };
}
function AT(a) {
  return S0(al(a));
}
const CT = (a) => typeof a == "number" ? 0 : $t.test(a) ? $t.getAnimatableNone(a) : a, NT = (a, l) => typeof a == "number" ? l != null && l.trim().endsWith("/") ? a : 0 : CT(a);
function MT(a) {
  const l = al(a);
  return S0(l)(l.values.map((r, c) => NT(r, l.split[c])));
}
const on = {
  test: ST,
  parse: jT,
  createTransformer: AT,
  getAnimatableNone: MT
};
function Cf(a, l, o) {
  return o < 0 && (o += 1), o > 1 && (o -= 1), o < 1 / 6 ? a + (l - a) * 6 * o : o < 1 / 2 ? l : o < 2 / 3 ? a + (l - a) * (2 / 3 - o) * 6 : a;
}
function DT({ hue: a, saturation: l, lightness: o, alpha: r }) {
  a /= 360, l /= 100, o /= 100;
  let c = 0, m = 0, h = 0;
  if (!l)
    c = m = h = o;
  else {
    const y = o < 0.5 ? o * (1 + l) : o + l - o * l, x = 2 * o - y;
    c = Cf(x, y, a + 1 / 3), m = Cf(x, y, a), h = Cf(x, y, a - 1 / 3);
  }
  return {
    red: Math.round(c * 255),
    green: Math.round(m * 255),
    blue: Math.round(h * 255),
    alpha: r
  };
}
function vo(a, l) {
  return (o) => o > 0 ? l : a;
}
const _t = (a, l, o) => a + (l - a) * o, Nf = (a, l, o) => {
  const r = a * a, c = o * (l * l - r) + r;
  return c < 0 ? 0 : Math.sqrt(c);
}, OT = [Yf, ia, el], RT = (a) => OT.find((l) => l.test(a));
function wv(a) {
  const l = RT(a);
  if (gs(!!l, `'${a}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"), !l)
    return !1;
  let o = l.parse(a);
  return l === el && (o = DT(o)), o;
}
const _v = (a, l) => {
  const o = wv(a), r = wv(l);
  if (!o || !r)
    return vo(a, l);
  const c = { ...o };
  return (m) => (c.red = Nf(o.red, r.red, m), c.green = Nf(o.green, r.green, m), c.blue = Nf(o.blue, r.blue, m), c.alpha = _t(o.alpha, r.alpha, m), ia.transform(c));
}, qf = /* @__PURE__ */ new Set(["none", "hidden"]);
function zT(a, l) {
  return qf.has(a) ? (o) => o <= 0 ? a : l : (o) => o >= 1 ? l : a;
}
function wT(a, l) {
  return (o) => _t(a, l, o);
}
function Cd(a) {
  return typeof a == "number" ? wT : typeof a == "string" ? Ed(a) ? vo : $t.test(a) ? _v : UT : Array.isArray(a) ? b0 : typeof a == "object" ? $t.test(a) ? _v : _T : vo;
}
function b0(a, l) {
  const o = [...a], r = o.length, c = a.map((m, h) => Cd(m)(m, l[h]));
  return (m) => {
    for (let h = 0; h < r; h++)
      o[h] = c[h](m);
    return o;
  };
}
function _T(a, l) {
  const o = { ...a, ...l }, r = {};
  for (const c in o)
    a[c] !== void 0 && l[c] !== void 0 && (r[c] = Cd(a[c])(a[c], l[c]));
  return (c) => {
    for (const m in r)
      o[m] = r[m](c);
    return o;
  };
}
function VT(a, l) {
  const o = [], r = { color: 0, var: 0, number: 0 };
  for (let c = 0; c < l.values.length; c++) {
    const m = l.types[c], h = a.indexes[m][r[m]], y = a.values[h] ?? 0;
    o[c] = y, r[m]++;
  }
  return o;
}
const UT = (a, l) => {
  const o = on.createTransformer(l), r = al(a), c = al(l);
  return r.indexes.var.length === c.indexes.var.length && r.indexes.color.length === c.indexes.color.length && r.indexes.number.length >= c.indexes.number.length ? qf.has(a) && !c.values.length || qf.has(l) && !r.values.length ? zT(a, l) : xs(b0(VT(r, c), c.values), o) : (gs(!0, `Complex values '${a}' and '${l}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different"), vo(a, l));
};
function T0(a, l, o) {
  return typeof a == "number" && typeof l == "number" && typeof o == "number" ? _t(a, l, o) : Cd(a)(a, l);
}
const BT = (a) => {
  const l = ({ timestamp: o }) => a(o);
  return {
    start: (o = !0) => Vt.update(l, o),
    stop: () => Ni(l),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => he.isProcessing ? he.timestamp : Se.now()
  };
}, E0 = (a, l, o = 10) => {
  let r = "";
  const c = Math.max(Math.round(l / o), 2);
  for (let m = 0; m < c; m++)
    r += Math.round(a(m / (c - 1)) * 1e4) / 1e4 + ", ";
  return `linear(${r.substring(0, r.length - 2)})`;
}, go = 2e4;
function Nd(a) {
  let l = 0;
  const o = 50;
  let r = a.next(l);
  for (; !r.done && l < go; )
    l += o, r = a.next(l);
  return l >= go ? 1 / 0 : l;
}
function LT(a, l = 100, o) {
  const r = o({ ...a, keyframes: [0, l] }), c = Math.min(Nd(r), go);
  return {
    type: "keyframes",
    ease: (m) => r.next(c * m).value / l,
    duration: /* @__PURE__ */ Ie(c)
  };
}
const Gt = {
  // Default spring physics
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  // Default duration/bounce-based options
  duration: 800,
  // in ms
  bounce: 0.3,
  visualDuration: 0.3,
  // in seconds
  // Rest thresholds
  restSpeed: {
    granular: 0.01,
    default: 2
  },
  restDelta: {
    granular: 5e-3,
    default: 0.5
  },
  // Limits
  minDuration: 0.01,
  // in seconds
  maxDuration: 10,
  // in seconds
  minDamping: 0.05,
  maxDamping: 1
};
function Gf(a, l) {
  return a * Math.sqrt(1 - l * l);
}
const HT = 12;
function YT(a, l, o) {
  let r = o;
  for (let c = 1; c < HT; c++)
    r = r - a(r) / l(r);
  return r;
}
const Mf = 1e-3;
function qT({ duration: a = Gt.duration, bounce: l = Gt.bounce, velocity: o = Gt.velocity, mass: r = Gt.mass }) {
  let c, m;
  gs(a <= /* @__PURE__ */ De(Gt.maxDuration), "Spring duration must be 10 seconds or less", "spring-duration-limit");
  let h = 1 - l;
  h = Mn(Gt.minDamping, Gt.maxDamping, h), a = Mn(Gt.minDuration, Gt.maxDuration, /* @__PURE__ */ Ie(a)), h < 1 ? (c = (S) => {
    const p = S * h, v = p * a, b = p - o, A = Gf(S, h), j = Math.exp(-v);
    return Mf - b / A * j;
  }, m = (S) => {
    const v = S * h * a, b = v * o + o, A = Math.pow(h, 2) * Math.pow(S, 2) * a, j = Math.exp(-v), _ = Gf(Math.pow(S, 2), h);
    return (-c(S) + Mf > 0 ? -1 : 1) * ((b - A) * j) / _;
  }) : (c = (S) => {
    const p = Math.exp(-S * a), v = (S - o) * a + 1;
    return -Mf + p * v;
  }, m = (S) => {
    const p = Math.exp(-S * a), v = (o - S) * (a * a);
    return p * v;
  });
  const y = 5 / a, x = YT(c, m, y);
  if (a = /* @__PURE__ */ De(a), isNaN(x))
    return {
      stiffness: Gt.stiffness,
      damping: Gt.damping,
      duration: a
    };
  {
    const S = Math.pow(x, 2) * r;
    return {
      stiffness: S,
      damping: h * 2 * Math.sqrt(r * S),
      duration: a
    };
  }
}
const GT = ["duration", "bounce"], XT = ["stiffness", "damping", "mass"];
function Vv(a, l) {
  return l.some((o) => a[o] !== void 0);
}
function QT(a) {
  let l = {
    velocity: Gt.velocity,
    stiffness: Gt.stiffness,
    damping: Gt.damping,
    mass: Gt.mass,
    isResolvedFromDuration: !1,
    ...a
  };
  if (!Vv(a, XT) && Vv(a, GT))
    if (l.velocity = 0, a.visualDuration) {
      const o = a.visualDuration, r = 2 * Math.PI / (o * 1.2), c = r * r, m = 2 * Mn(0.05, 1, 1 - (a.bounce || 0)) * Math.sqrt(c);
      l = {
        ...l,
        mass: Gt.mass,
        stiffness: c,
        damping: m
      };
    } else {
      const o = qT({ ...a, velocity: 0 });
      l = {
        ...l,
        ...o,
        mass: Gt.mass
      }, l.isResolvedFromDuration = !0;
    }
  return l;
}
function xo(a = Gt.visualDuration, l = Gt.bounce) {
  const o = typeof a != "object" ? {
    visualDuration: a,
    keyframes: [0, 1],
    bounce: l
  } : a;
  let { restSpeed: r, restDelta: c } = o;
  const m = o.keyframes[0], h = o.keyframes[o.keyframes.length - 1], y = { done: !1, value: m }, { stiffness: x, damping: S, mass: p, duration: v, velocity: b, isResolvedFromDuration: A } = QT({
    ...o,
    velocity: -/* @__PURE__ */ Ie(o.velocity || 0)
  }), j = b || 0, _ = S / (2 * Math.sqrt(x * p)), w = h - m, L = /* @__PURE__ */ Ie(Math.sqrt(x / p)), q = Math.abs(w) < 5;
  r || (r = q ? Gt.restSpeed.granular : Gt.restSpeed.default), c || (c = q ? Gt.restDelta.granular : Gt.restDelta.default);
  let X, Q, I, ot, K, Y;
  if (_ < 1)
    I = Gf(L, _), ot = (j + _ * L * w) / I, X = (J) => {
      const ft = Math.exp(-_ * L * J);
      return h - ft * (ot * Math.sin(I * J) + w * Math.cos(I * J));
    }, K = _ * L * ot + w * I, Y = _ * L * w - ot * I, Q = (J) => Math.exp(-_ * L * J) * (K * Math.sin(I * J) + Y * Math.cos(I * J));
  else if (_ === 1) {
    X = (ft) => h - Math.exp(-L * ft) * (w + (j + L * w) * ft);
    const J = j + L * w;
    Q = (ft) => Math.exp(-L * ft) * (L * J * ft - j);
  } else {
    const J = L * Math.sqrt(_ * _ - 1);
    X = (Kt) => {
      const Ct = Math.exp(-_ * L * Kt), Z = Math.min(J * Kt, 300);
      return h - Ct * ((j + _ * L * w) * Math.sinh(Z) + J * w * Math.cosh(Z)) / J;
    };
    const ft = (j + _ * L * w) / J, xt = _ * L * ft - w * J, Ut = _ * L * w - ft * J;
    Q = (Kt) => {
      const Ct = Math.exp(-_ * L * Kt), Z = Math.min(J * Kt, 300);
      return Ct * (xt * Math.sinh(Z) + Ut * Math.cosh(Z));
    };
  }
  const lt = {
    calculatedDuration: A && v || null,
    velocity: (J) => /* @__PURE__ */ De(Q(J)),
    next: (J) => {
      if (!A && _ < 1) {
        const xt = Math.exp(-_ * L * J), Ut = Math.sin(I * J), Kt = Math.cos(I * J), Ct = h - xt * (ot * Ut + w * Kt), Z = /* @__PURE__ */ De(xt * (K * Ut + Y * Kt));
        return y.done = Math.abs(Z) <= r && Math.abs(h - Ct) <= c, y.value = y.done ? h : Ct, y;
      }
      const ft = X(J);
      if (A)
        y.done = J >= v;
      else {
        const xt = /* @__PURE__ */ De(Q(J));
        y.done = Math.abs(xt) <= r && Math.abs(h - ft) <= c;
      }
      return y.value = y.done ? h : ft, y;
    },
    toString: () => {
      const J = Math.min(Nd(lt), go), ft = E0((xt) => lt.next(J * xt).value, J, 30);
      return J + "ms " + ft;
    },
    toTransition: () => {
    }
  };
  return lt;
}
xo.applyToOptions = (a) => {
  const l = LT(a, 100, xo);
  return a.ease = l.ease, a.duration = /* @__PURE__ */ De(l.duration), a.type = "keyframes", a;
};
const ZT = 5;
function j0(a, l, o) {
  const r = Math.max(l - ZT, 0);
  return /* @__PURE__ */ i0(o - a(r), l - r);
}
function Xf({ keyframes: a, velocity: l = 0, power: o = 0.8, timeConstant: r = 325, bounceDamping: c = 10, bounceStiffness: m = 500, modifyTarget: h, min: y, max: x, restDelta: S = 0.5, restSpeed: p }) {
  const v = a[0], b = {
    done: !1,
    value: v
  }, A = (Y) => y !== void 0 && Y < y || x !== void 0 && Y > x, j = (Y) => y === void 0 ? x : x === void 0 || Math.abs(y - Y) < Math.abs(x - Y) ? y : x;
  let _ = o * l;
  const w = v + _, L = h === void 0 ? w : h(w);
  L !== w && (_ = L - v);
  const q = (Y) => -_ * Math.exp(-Y / r), X = (Y) => L + q(Y), Q = (Y) => {
    const lt = q(Y), J = X(Y);
    b.done = Math.abs(lt) <= S, b.value = b.done ? L : J;
  };
  let I, ot;
  const K = (Y) => {
    A(b.value) && (I = Y, ot = xo({
      keyframes: [b.value, j(b.value)],
      velocity: j0(X, Y, b.value),
      // TODO: This should be passing * 1000
      damping: c,
      stiffness: m,
      restDelta: S,
      restSpeed: p
    }));
  };
  return K(0), {
    calculatedDuration: null,
    next: (Y) => {
      let lt = !1;
      return !ot && I === void 0 && (lt = !0, Q(Y), K(Y)), I !== void 0 && Y >= I ? ot.next(Y - I) : (!lt && Q(Y), b);
    }
  };
}
function KT(a, l, o) {
  const r = [], c = o || Ci.mix || T0, m = a.length - 1;
  for (let h = 0; h < m; h++) {
    let y = c(a[h], a[h + 1]);
    if (l) {
      const x = Array.isArray(l) ? l[h] || $e : l;
      y = xs(x, y);
    }
    r.push(y);
  }
  return r;
}
function kT(a, l, { clamp: o = !0, ease: r, mixer: c } = {}) {
  const m = a.length;
  if (Ai(m === l.length, "Both input and output ranges must be the same length", "range-length"), m === 1)
    return () => l[0];
  if (m === 2 && l[0] === l[1])
    return () => l[1];
  const h = a[0] === a[1];
  a[0] > a[m - 1] && (a = [...a].reverse(), l = [...l].reverse());
  const y = KT(l, r, c), x = y.length, S = (p) => {
    if (h && p < a[0])
      return l[0];
    let v = 0;
    if (x > 1)
      for (; v < a.length - 2 && !(p < a[v + 1]); v++)
        ;
    const b = /* @__PURE__ */ ds(a[v], a[v + 1], p);
    return y[v](b);
  };
  return o ? (p) => S(Mn(a[0], a[m - 1], p)) : S;
}
function JT(a, l) {
  const o = a[a.length - 1];
  for (let r = 1; r <= l; r++) {
    const c = /* @__PURE__ */ ds(0, l, r);
    a.push(_t(o, 1, c));
  }
}
function FT(a) {
  const l = [0];
  return JT(l, a.length - 1), l;
}
function PT(a, l) {
  return a.map((o) => o * l);
}
function IT(a, l) {
  return a.map(() => l || d0).splice(0, a.length - 1);
}
function rs({ duration: a = 300, keyframes: l, times: o, ease: r = "easeInOut" }) {
  const c = /* @__PURE__ */ sT(r) ? r.map(Dv) : Dv(r), m = {
    done: !1,
    value: l[0]
  }, h = PT(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    o && o.length === l.length ? o : FT(l),
    a
  ), y = kT(h, l, {
    ease: Array.isArray(c) ? c : IT(l, c)
  });
  return {
    calculatedDuration: a,
    next: (x) => (m.value = y(x), m.done = x >= a, m)
  };
}
const $T = (a) => a !== null;
function zo(a, { repeat: l, repeatType: o = "loop" }, r, c = 1) {
  const m = a.filter($T), y = c < 0 || l && o !== "loop" && l % 2 === 1 ? 0 : m.length - 1;
  return !y || r === void 0 ? m[y] : r;
}
const WT = {
  decay: Xf,
  inertia: Xf,
  tween: rs,
  keyframes: rs,
  spring: xo
};
function A0(a) {
  typeof a.type == "string" && (a.type = WT[a.type]);
}
class Md {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((l) => {
      this.resolve = l;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  /**
   * Allows the animation to be awaited.
   *
   * @deprecated Use `finished` instead.
   */
  then(l, o) {
    return this.finished.then(l, o);
  }
}
const t2 = (a) => a / 100;
class So extends Md {
  constructor(l) {
    super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.delayState = {
      done: !1,
      value: void 0
    }, this.stop = () => {
      var r, c;
      const { motionValue: o } = this.options;
      o && o.updatedAt !== Se.now() && this.tick(Se.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), (c = (r = this.options).onStop) == null || c.call(r));
    }, this.options = l, this.initAnimation(), this.play(), l.autoplay === !1 && this.pause();
  }
  initAnimation() {
    const { options: l } = this;
    A0(l);
    const { type: o = rs, repeat: r = 0, repeatDelay: c = 0, repeatType: m, velocity: h = 0 } = l;
    let { keyframes: y } = l;
    const x = o || rs;
    x !== rs && typeof y[0] != "number" && (this.mixKeyframes = xs(t2, T0(y[0], y[1])), y = [0, 100]);
    const S = x({ ...l, keyframes: y });
    m === "mirror" && (this.mirroredGenerator = x({
      ...l,
      keyframes: [...y].reverse(),
      velocity: -h
    })), S.calculatedDuration === null && (S.calculatedDuration = Nd(S));
    const { calculatedDuration: p } = S;
    this.calculatedDuration = p, this.resolvedDuration = p + c, this.totalDuration = this.resolvedDuration * (r + 1) - c, this.generator = S;
  }
  updateTime(l) {
    const o = Math.round(l - this.startTime) * this.playbackSpeed;
    this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = o;
  }
  tick(l, o = !1) {
    const { generator: r, totalDuration: c, mixKeyframes: m, mirroredGenerator: h, resolvedDuration: y, calculatedDuration: x } = this;
    if (this.startTime === null)
      return r.next(0);
    const { delay: S = 0, keyframes: p, repeat: v, repeatType: b, repeatDelay: A, type: j, onUpdate: _, finalKeyframe: w } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, l) : this.speed < 0 && (this.startTime = Math.min(l - c / this.speed, this.startTime)), o ? this.currentTime = l : this.updateTime(l);
    const L = this.currentTime - S * (this.playbackSpeed >= 0 ? 1 : -1), q = this.playbackSpeed >= 0 ? L < 0 : L > c;
    this.currentTime = Math.max(L, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = c);
    let X = this.currentTime, Q = r;
    if (v) {
      const Y = Math.min(this.currentTime, c) / y;
      let lt = Math.floor(Y), J = Y % 1;
      !J && Y >= 1 && (J = 1), J === 1 && lt--, lt = Math.min(lt, v + 1), !!(lt % 2) && (b === "reverse" ? (J = 1 - J, A && (J -= A / y)) : b === "mirror" && (Q = h)), X = Mn(0, 1, J) * y;
    }
    let I;
    q ? (this.delayState.value = p[0], I = this.delayState) : I = Q.next(X), m && !q && (I.value = m(I.value));
    let { done: ot } = I;
    !q && x !== null && (ot = this.playbackSpeed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
    const K = this.holdTime === null && (this.state === "finished" || this.state === "running" && ot);
    return K && j !== Xf && (I.value = zo(p, this.options, w, this.speed)), _ && _(I.value), K && this.finish(), I;
  }
  /**
   * Allows the returned animation to be awaited or promise-chained. Currently
   * resolves when the animation finishes at all but in a future update could/should
   * reject if its cancels.
   */
  then(l, o) {
    return this.finished.then(l, o);
  }
  get duration() {
    return /* @__PURE__ */ Ie(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: l = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ Ie(l);
  }
  get time() {
    return /* @__PURE__ */ Ie(this.currentTime);
  }
  set time(l) {
    l = /* @__PURE__ */ De(l), this.currentTime = l, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = l : this.driver && (this.startTime = this.driver.now() - l / this.playbackSpeed), this.driver ? this.driver.start(!1) : (this.startTime = 0, this.state = "paused", this.holdTime = l, this.tick(l));
  }
  /**
   * Returns the generator's velocity at the current time in units/second.
   * Uses the analytical derivative when available (springs), avoiding
   * the MotionValue's frame-dependent velocity estimation.
   */
  getGeneratorVelocity() {
    const l = this.currentTime;
    if (l <= 0)
      return this.options.velocity || 0;
    if (this.generator.velocity)
      return this.generator.velocity(l);
    const o = this.generator.next(l).value;
    return j0((r) => this.generator.next(r).value, l, o);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(l) {
    const o = this.playbackSpeed !== l;
    o && this.driver && this.updateTime(Se.now()), this.playbackSpeed = l, o && this.driver && (this.time = /* @__PURE__ */ Ie(this.currentTime));
  }
  play() {
    var c, m;
    if (this.isStopped)
      return;
    const { driver: l = BT, startTime: o } = this.options;
    this.driver || (this.driver = l((h) => this.tick(h))), (m = (c = this.options).onPlay) == null || m.call(c);
    const r = this.driver.now();
    this.state === "finished" ? (this.updateFinished(), this.startTime = r) : this.holdTime !== null ? this.startTime = r - this.holdTime : this.startTime || (this.startTime = o ?? r), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    this.state = "paused", this.updateTime(Se.now()), this.holdTime = this.currentTime;
  }
  complete() {
    this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null;
  }
  finish() {
    var l, o;
    this.notifyFinished(), this.teardown(), this.state = "finished", (o = (l = this.options).onComplete) == null || o.call(l);
  }
  cancel() {
    var l, o;
    this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), (o = (l = this.options).onCancel) == null || o.call(l);
  }
  teardown() {
    this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null;
  }
  stopDriver() {
    this.driver && (this.driver.stop(), this.driver = void 0);
  }
  sample(l) {
    return this.startTime = 0, this.tick(l, !0);
  }
  attachTimeline(l) {
    var o;
    return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), (o = this.driver) == null || o.stop(), l.observe(this);
  }
}
function e2(a) {
  for (let l = 1; l < a.length; l++)
    a[l] ?? (a[l] = a[l - 1]);
}
const aa = (a) => a * 180 / Math.PI, Qf = (a) => {
  const l = aa(Math.atan2(a[1], a[0]));
  return Zf(l);
}, n2 = {
  x: 4,
  y: 5,
  translateX: 4,
  translateY: 5,
  scaleX: 0,
  scaleY: 3,
  scale: (a) => (Math.abs(a[0]) + Math.abs(a[3])) / 2,
  rotate: Qf,
  rotateZ: Qf,
  skewX: (a) => aa(Math.atan(a[1])),
  skewY: (a) => aa(Math.atan(a[2])),
  skew: (a) => (Math.abs(a[1]) + Math.abs(a[2])) / 2
}, Zf = (a) => (a = a % 360, a < 0 && (a += 360), a), Uv = Qf, Bv = (a) => Math.sqrt(a[0] * a[0] + a[1] * a[1]), Lv = (a) => Math.sqrt(a[4] * a[4] + a[5] * a[5]), i2 = {
  x: 12,
  y: 13,
  z: 14,
  translateX: 12,
  translateY: 13,
  translateZ: 14,
  scaleX: Bv,
  scaleY: Lv,
  scale: (a) => (Bv(a) + Lv(a)) / 2,
  rotateX: (a) => Zf(aa(Math.atan2(a[6], a[5]))),
  rotateY: (a) => Zf(aa(Math.atan2(-a[2], a[0]))),
  rotateZ: Uv,
  rotate: Uv,
  skewX: (a) => aa(Math.atan(a[4])),
  skewY: (a) => aa(Math.atan(a[1])),
  skew: (a) => (Math.abs(a[1]) + Math.abs(a[4])) / 2
};
function Kf(a) {
  return a.includes("scale") ? 1 : 0;
}
function kf(a, l) {
  if (!a || a === "none")
    return Kf(l);
  const o = a.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let r, c;
  if (o)
    r = i2, c = o;
  else {
    const y = a.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    r = n2, c = y;
  }
  if (!c)
    return Kf(l);
  const m = r[l], h = c[1].split(",").map(l2);
  return typeof m == "function" ? m(h) : h[m];
}
const a2 = (a, l) => {
  const { transform: o = "none" } = getComputedStyle(a);
  return kf(o, l);
};
function l2(a) {
  return parseFloat(a.trim());
}
const ol = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
], rl = /* @__PURE__ */ new Set([...ol, "pathRotation"]), Hv = (a) => a === ul || a === W, s2 = /* @__PURE__ */ new Set(["x", "y", "z"]), u2 = ol.filter((a) => !s2.has(a));
function o2(a) {
  const l = [];
  return u2.forEach((o) => {
    const r = a.getValue(o);
    r !== void 0 && (l.push([o, r.get()]), r.set(o.startsWith("scale") ? 1 : 0));
  }), l;
}
const Ei = {
  // Dimensions
  width: ({ x: a }, { paddingLeft: l = "0", paddingRight: o = "0", boxSizing: r }) => {
    const c = a.max - a.min;
    return r === "border-box" ? c : c - parseFloat(l) - parseFloat(o);
  },
  height: ({ y: a }, { paddingTop: l = "0", paddingBottom: o = "0", boxSizing: r }) => {
    const c = a.max - a.min;
    return r === "border-box" ? c : c - parseFloat(l) - parseFloat(o);
  },
  top: (a, { top: l }) => parseFloat(l),
  left: (a, { left: l }) => parseFloat(l),
  bottom: ({ y: a }, { top: l }) => parseFloat(l) + (a.max - a.min),
  right: ({ x: a }, { left: l }) => parseFloat(l) + (a.max - a.min),
  // Transform
  x: (a, { transform: l }) => kf(l, "x"),
  y: (a, { transform: l }) => kf(l, "y")
};
Ei.translateX = Ei.x;
Ei.translateY = Ei.y;
const la = /* @__PURE__ */ new Set();
let Jf = !1, Ff = !1, Pf = !1;
function C0() {
  if (Ff) {
    const a = Array.from(la).filter((r) => r.needsMeasurement), l = new Set(a.map((r) => r.element)), o = /* @__PURE__ */ new Map();
    l.forEach((r) => {
      const c = o2(r);
      c.length && (o.set(r, c), r.render());
    }), a.forEach((r) => r.measureInitialState()), l.forEach((r) => {
      r.render();
      const c = o.get(r);
      c && c.forEach(([m, h]) => {
        var y;
        (y = r.getValue(m)) == null || y.set(h);
      });
    }), a.forEach((r) => r.measureEndState()), a.forEach((r) => {
      r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
    });
  }
  Ff = !1, Jf = !1, la.forEach((a) => a.complete(Pf)), la.clear();
}
function N0() {
  la.forEach((a) => {
    a.readKeyframes(), a.needsMeasurement && (Ff = !0);
  });
}
function r2() {
  Pf = !0, N0(), C0(), Pf = !1;
}
class Dd {
  constructor(l, o, r, c, m, h = !1) {
    this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...l], this.onComplete = o, this.name = r, this.motionValue = c, this.element = m, this.isAsync = h;
  }
  scheduleResolve() {
    this.state = "scheduled", this.isAsync ? (la.add(this), Jf || (Jf = !0, Vt.read(N0), Vt.resolveKeyframes(C0))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: l, name: o, element: r, motionValue: c } = this;
    if (l[0] === null) {
      const m = c == null ? void 0 : c.get(), h = l[l.length - 1];
      if (m !== void 0)
        l[0] = m;
      else if (r && o) {
        const y = r.readValue(o, h);
        y != null && (l[0] = y);
      }
      l[0] === void 0 && (l[0] = h), c && m === void 0 && c.set(l[0]);
    }
    e2(l);
  }
  setFinalKeyframe() {
  }
  measureInitialState() {
  }
  renderEndStyles() {
  }
  measureEndState() {
  }
  complete(l = !1) {
    this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, l), la.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (la.delete(this), this.state = "pending");
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const c2 = (a) => a.startsWith("--");
function M0(a, l, o) {
  c2(l) ? a.style.setProperty(l, o) : a.style[l] = o;
}
const f2 = {};
function D0(a, l) {
  const o = /* @__PURE__ */ n0(a);
  return () => f2[l] ?? o();
}
const d2 = /* @__PURE__ */ D0(() => window.ScrollTimeline !== void 0, "scrollTimeline"), O0 = /* @__PURE__ */ D0(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), us = ([a, l, o, r]) => `cubic-bezier(${a}, ${l}, ${o}, ${r})`, Yv = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ us([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ us([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ us([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ us([0.33, 1.53, 0.69, 0.99])
};
function R0(a, l) {
  if (a)
    return typeof a == "function" ? O0() ? E0(a, l) : "ease-out" : /* @__PURE__ */ h0(a) ? us(a) : Array.isArray(a) ? a.map((o) => R0(o, l) || Yv.easeOut) : Yv[a];
}
function h2(a, l, o, { delay: r = 0, duration: c = 300, repeat: m = 0, repeatType: h = "loop", ease: y = "easeOut", times: x } = {}, S = void 0) {
  const p = {
    [l]: o
  };
  x && (p.offset = x);
  const v = R0(y, c);
  Array.isArray(v) && (p.easing = v);
  const b = {
    delay: r,
    duration: c,
    easing: Array.isArray(v) ? "linear" : v,
    fill: "both",
    iterations: m + 1,
    direction: h === "reverse" ? "alternate" : "normal"
  };
  return S && (b.pseudoElement = S), a.animate(p, b);
}
function z0(a) {
  return typeof a == "function" && "applyToOptions" in a;
}
function m2({ type: a, ...l }) {
  return z0(a) && O0() ? a.applyToOptions(l) : (l.duration ?? (l.duration = 300), l.ease ?? (l.ease = "easeOut"), l);
}
class w0 extends Md {
  constructor(l) {
    if (super(), this.finishedTime = null, this.isStopped = !1, this.manualStartTime = null, !l)
      return;
    const { element: o, name: r, keyframes: c, pseudoElement: m, allowFlatten: h = !1, finalKeyframe: y, onComplete: x } = l;
    this.isPseudoElement = !!m, this.allowFlatten = h, this.options = l, Ai(typeof l.type != "string", `Mini animate() doesn't support "type" as a string.`, "mini-spring");
    const S = m2(l);
    this.animation = h2(o, r, c, S, m), S.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
      if (this.finishedTime = this.time, !m) {
        const p = zo(c, this.options, y, this.speed);
        this.updateMotionValue && this.updateMotionValue(p), M0(o, r, p), this.animation.cancel();
      }
      x == null || x(), this.notifyFinished();
    };
  }
  play() {
    this.isStopped || (this.manualStartTime = null, this.animation.play(), this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    var l, o;
    (o = (l = this.animation).finish) == null || o.call(l);
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {
    }
  }
  stop() {
    if (this.isStopped)
      return;
    this.isStopped = !0;
    const { state: l } = this;
    l === "idle" || l === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel());
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * In this method, we commit styles back to the DOM before cancelling
   * the animation.
   *
   * This is designed to be overridden by NativeAnimationExtended, which
   * will create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to also correctly calculate velocity for any subsequent animation
   * while deferring the commit until the next animation frame.
   */
  commitStyles() {
    var o, r, c;
    const l = (o = this.options) == null ? void 0 : o.element;
    !this.isPseudoElement && (l != null && l.isConnected) && ((c = (r = this.animation).commitStyles) == null || c.call(r));
  }
  get duration() {
    var o, r;
    const l = ((r = (o = this.animation.effect) == null ? void 0 : o.getComputedTiming) == null ? void 0 : r.call(o).duration) || 0;
    return /* @__PURE__ */ Ie(Number(l));
  }
  get iterationDuration() {
    const { delay: l = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ Ie(l);
  }
  get time() {
    return /* @__PURE__ */ Ie(Number(this.animation.currentTime) || 0);
  }
  set time(l) {
    const o = this.finishedTime !== null;
    this.manualStartTime = null, this.finishedTime = null, this.animation.currentTime = /* @__PURE__ */ De(l), o && this.animation.pause();
  }
  /**
   * The playback speed of the animation.
   * 1 = normal speed, 2 = double speed, 0.5 = half speed.
   */
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(l) {
    l < 0 && (this.finishedTime = null), this.animation.playbackRate = l;
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return this.manualStartTime ?? Number(this.animation.startTime);
  }
  set startTime(l) {
    this.manualStartTime = this.animation.startTime = l;
  }
  /**
   * Attaches a timeline to the animation, for instance the `ScrollTimeline`.
   */
  attachTimeline({ timeline: l, rangeStart: o, rangeEnd: r, observe: c }) {
    var m;
    return this.allowFlatten && ((m = this.animation.effect) == null || m.updateTiming({ easing: "linear" })), this.animation.onfinish = null, l && d2() ? (this.animation.timeline = l, o && (this.animation.rangeStart = o), r && (this.animation.rangeEnd = r), $e) : c(this);
  }
}
const _0 = {
  anticipate: r0,
  backInOut: o0,
  circInOut: f0
};
function y2(a) {
  return a in _0;
}
function p2(a) {
  typeof a.ease == "string" && y2(a.ease) && (a.ease = _0[a.ease]);
}
const Df = 10;
class v2 extends w0 {
  constructor(l) {
    p2(l), A0(l), super(l), l.startTime !== void 0 && l.autoplay !== !1 && (this.startTime = l.startTime), this.options = l;
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * Rather than read committed styles back out of the DOM, we can
   * create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to calculate velocity for any subsequent animation.
   */
  updateMotionValue(l) {
    const { motionValue: o, onUpdate: r, onComplete: c, element: m, ...h } = this.options;
    if (!o)
      return;
    if (l !== void 0) {
      o.set(l);
      return;
    }
    const y = new So({
      ...h,
      autoplay: !1
    }), x = Math.max(Df, Se.now() - this.startTime), S = Mn(0, Df, x - Df), p = y.sample(x).value, { name: v } = this.options;
    m && v && M0(m, v, p), o.setWithVelocity(y.sample(Math.max(0, x - S)).value, p, S), y.stop();
  }
}
const qv = (a, l) => l === "zIndex" ? !1 : !!(typeof a == "number" || Array.isArray(a) || typeof a == "string" && // It's animatable if we have a string
(on.test(a) || a === "0") && // And it contains numbers and/or colors
!a.startsWith("url("));
function g2(a) {
  const l = a[0];
  if (a.length === 1)
    return !0;
  for (let o = 0; o < a.length; o++)
    if (a[o] !== l)
      return !0;
}
function x2(a, l, o, r) {
  const c = a[0];
  if (c === null)
    return !1;
  if (l === "display" || l === "visibility")
    return !0;
  const m = a[a.length - 1], h = qv(c, l), y = qv(m, l);
  return gs(h === y, `You are trying to animate ${l} from "${c}" to "${m}". "${h ? m : c}" is not an animatable value.`, "value-not-animatable"), !h || !y ? !1 : g2(a) || (o === "spring" || z0(o)) && r;
}
function If(a) {
  a.duration = 0, a.type = "keyframes";
}
const V0 = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform",
  "backgroundColor"
]), S2 = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function b2(a) {
  for (let l = 0; l < a.length; l++)
    if (typeof a[l] == "string" && S2.test(a[l]))
      return !0;
  return !1;
}
const T2 = /* @__PURE__ */ new Set([
  "color",
  "backgroundColor",
  "outlineColor",
  "fill",
  "stroke",
  "borderColor",
  "borderTopColor",
  "borderRightColor",
  "borderBottomColor",
  "borderLeftColor"
]), E2 = /* @__PURE__ */ n0(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function j2(a) {
  var v;
  const { motionValue: l, name: o, repeatDelay: r, repeatType: c, damping: m, type: h, keyframes: y } = a, x = (v = l == null ? void 0 : l.owner) == null ? void 0 : v.current;
  if (!(x instanceof HTMLElement) && !(x instanceof SVGElement))
    return !1;
  const { onUpdate: S, transformTemplate: p } = l.owner.getProps();
  return E2() && o && /**
   * Force WAAPI for color properties with browser-only color formats
   * (oklch, oklab, lab, lch, etc.) that the JS animation path can't parse.
   */
  (V0.has(o) || T2.has(o) && b2(y)) && (o !== "transform" || !p) && /**
   * If we're outputting values to onUpdate then we can't use WAAPI as there's
   * no way to read the value from WAAPI every frame.
   */
  !S && !r && c !== "mirror" && m !== 0 && h !== "inertia";
}
const A2 = 40;
class C2 extends Md {
  constructor({ autoplay: l = !0, delay: o = 0, type: r = "keyframes", repeat: c = 0, repeatDelay: m = 0, repeatType: h = "loop", keyframes: y, name: x, motionValue: S, element: p, ...v }) {
    var j;
    super(), this.stop = () => {
      var _, w;
      this._animation && (this._animation.stop(), (_ = this.stopTimeline) == null || _.call(this)), (w = this.keyframeResolver) == null || w.cancel();
    }, this.createdAt = Se.now();
    const b = {
      autoplay: l,
      delay: o,
      type: r,
      repeat: c,
      repeatDelay: m,
      repeatType: h,
      name: x,
      motionValue: S,
      element: p,
      ...v
    }, A = (p == null ? void 0 : p.KeyframeResolver) || Dd;
    this.keyframeResolver = new A(y, (_, w, L) => this.onKeyframesResolved(_, w, b, !L), x, S, p), (j = this.keyframeResolver) == null || j.scheduleResolve();
  }
  onKeyframesResolved(l, o, r, c) {
    var L, q;
    this.keyframeResolver = void 0;
    const { name: m, type: h, velocity: y, delay: x, isHandoff: S, onUpdate: p } = r;
    this.resolvedAt = Se.now();
    let v = !0;
    x2(l, m, h, y) || (v = !1, (Ci.instantAnimations || !x) && (p == null || p(zo(l, r, o))), l[0] = l[l.length - 1], If(r), r.repeat = 0);
    const A = {
      startTime: c ? this.resolvedAt ? this.resolvedAt - this.createdAt > A2 ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
      finalKeyframe: o,
      ...r,
      keyframes: l
    }, j = v && !S && j2(A), _ = (q = (L = A.motionValue) == null ? void 0 : L.owner) == null ? void 0 : q.current;
    let w;
    if (j)
      try {
        w = new v2({
          ...A,
          element: _
        });
      } catch {
        w = new So(A);
      }
    else
      w = new So(A);
    w.finished.then(() => {
      this.notifyFinished();
    }).catch($e), this.pendingTimeline && (this.stopTimeline = w.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = w;
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(l, o) {
    return this.finished.finally(l).then(() => {
    });
  }
  get animation() {
    var l;
    return this._animation || ((l = this.keyframeResolver) == null || l.resume(), r2()), this._animation;
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(l) {
    this.animation.time = l;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(l) {
    this.animation.speed = l;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(l) {
    return this._animation ? this.stopTimeline = this.animation.attachTimeline(l) : this.pendingTimeline = l, () => this.stop();
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    var l;
    this._animation && this.animation.cancel(), (l = this.keyframeResolver) == null || l.cancel();
  }
}
function U0(a, l, o, r = 0, c = 1) {
  const m = Array.from(a).sort((S, p) => S.sortNodePosition(p)).indexOf(l), h = a.size, y = (h - 1) * r;
  return typeof o == "function" ? o(m, h) : c === 1 ? m * r : y - m * r;
}
const Gv = 30, N2 = (a) => !isNaN(parseFloat(a));
class M2 {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   */
  constructor(l, o = {}) {
    this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (r) => {
      var m;
      const c = Se.now();
      if (this.updatedAt !== c && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(r), this.current !== this.prev && ((m = this.events.change) == null || m.notify(this.current), this.dependents))
        for (const h of this.dependents)
          h.dirty();
    }, this.hasAnimated = !1, this.setCurrent(l), this.owner = o.owner;
  }
  setCurrent(l) {
    this.current = l, this.updatedAt = Se.now(), this.canTrackVelocity === null && l !== void 0 && (this.canTrackVelocity = N2(this.current));
  }
  setPrevFrameValue(l = this.current) {
    this.prevFrameValue = l, this.prevUpdatedAt = this.updatedAt;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(l) {
    return this.on("change", l);
  }
  on(l, o) {
    this.events[l] || (this.events[l] = new Sd());
    const r = this.events[l].add(o);
    return l === "change" ? () => {
      r(), Vt.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : r;
  }
  clearListeners() {
    for (const l in this.events)
      this.events[l].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   */
  attach(l, o) {
    this.passiveEffect = l, this.stopPassiveEffect = o;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(l) {
    this.passiveEffect ? this.passiveEffect(l, this.updateAndNotify) : this.updateAndNotify(l);
  }
  setWithVelocity(l, o, r) {
    this.set(o), this.prev = void 0, this.prevFrameValue = l, this.prevUpdatedAt = this.updatedAt - r;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(l, o = !0) {
    this.updateAndNotify(l), this.prev = l, this.prevUpdatedAt = this.prevFrameValue = void 0, o && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  dirty() {
    var l;
    (l = this.events.change) == null || l.notify(this.current);
  }
  addDependent(l) {
    this.dependents || (this.dependents = /* @__PURE__ */ new Set()), this.dependents.add(l);
  }
  removeDependent(l) {
    this.dependents && this.dependents.delete(l);
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    return this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    const l = Se.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || l - this.updatedAt > Gv)
      return 0;
    const o = Math.min(this.updatedAt - this.prevUpdatedAt, Gv);
    return /* @__PURE__ */ i0(parseFloat(this.current) - parseFloat(this.prevFrameValue), o);
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   */
  start(l) {
    return this.stop(), new Promise((o) => {
      this.hasAnimated = !0, this.animation = l(o), this.events.animationStart && this.events.animationStart.notify();
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
    });
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    var l, o;
    (l = this.dependents) == null || l.clear(), (o = this.events.destroy) == null || o.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function ll(a, l) {
  return new M2(a, l);
}
function Od(a, l) {
  if (a != null && a.inherit && l) {
    const { inherit: o, ...r } = a;
    return { ...l, ...r };
  }
  return a;
}
function Rd(a, l) {
  const o = (a == null ? void 0 : a[l]) ?? (a == null ? void 0 : a.default) ?? a;
  return o !== a ? Od(o, a) : o;
}
const D2 = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, O2 = (a) => ({
  type: "spring",
  stiffness: 550,
  damping: a === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), R2 = {
  type: "keyframes",
  duration: 0.8
}, z2 = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, w2 = (a, { keyframes: l }) => l.length > 2 ? R2 : rl.has(a) ? a.startsWith("scale") ? O2(l[1]) : D2 : z2, _2 = /* @__PURE__ */ new Set([
  "when",
  "delay",
  "delayChildren",
  "staggerChildren",
  "staggerDirection",
  "repeat",
  "repeatType",
  "repeatDelay",
  "from",
  "elapsed"
]);
function V2(a) {
  for (const l in a)
    if (!_2.has(l))
      return !0;
  return !1;
}
const zd = (a, l, o, r = {}, c, m) => (h) => {
  const y = Rd(r, a) || {}, x = y.delay || r.delay || 0;
  let { elapsed: S = 0 } = r;
  S = S - /* @__PURE__ */ De(x);
  const p = {
    keyframes: Array.isArray(o) ? o : [null, o],
    ease: "easeOut",
    velocity: l.getVelocity(),
    ...y,
    delay: -S,
    onUpdate: (b) => {
      l.set(b), y.onUpdate && y.onUpdate(b);
    },
    onComplete: () => {
      h(), y.onComplete && y.onComplete();
    },
    name: a,
    motionValue: l,
    element: m ? void 0 : c
  };
  V2(y) || Object.assign(p, w2(a, p)), p.duration && (p.duration = /* @__PURE__ */ De(p.duration)), p.repeatDelay && (p.repeatDelay = /* @__PURE__ */ De(p.repeatDelay)), p.from !== void 0 && (p.keyframes[0] = p.from);
  let v = !1;
  if ((p.type === !1 || p.duration === 0 && !p.repeatDelay) && (If(p), p.delay === 0 && (v = !0)), (Ci.instantAnimations || Ci.skipAnimations || c != null && c.shouldSkipAnimations || y.skipAnimations) && (v = !0, If(p), p.delay = 0), p.allowFlatten = !y.type && !y.ease, v && !m && l.get() !== void 0) {
    const b = zo(p.keyframes, y);
    if (b !== void 0) {
      Vt.update(() => {
        p.onUpdate(b), p.onComplete();
      });
      return;
    }
  }
  return y.isSync ? new So(p) : new C2(p);
}, U2 = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function B2(a) {
  const l = U2.exec(a);
  if (!l)
    return [,];
  const [, o, r, c] = l;
  return [`--${o ?? r}`, c];
}
const L2 = 4;
function B0(a, l, o = 1) {
  Ai(o <= L2, `Max CSS variable fallback depth detected in property "${a}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
  const [r, c] = B2(a);
  if (!r)
    return;
  const m = window.getComputedStyle(l).getPropertyValue(r);
  if (m) {
    const h = m.trim();
    return Wg(h) ? parseFloat(h) : h;
  }
  return Ed(c) ? B0(c, l, o + 1) : c;
}
function Xv(a) {
  const l = [{}, {}];
  return a == null || a.values.forEach((o, r) => {
    l[0][r] = o.get(), l[1][r] = o.getVelocity();
  }), l;
}
function wd(a, l, o, r) {
  if (typeof l == "function") {
    const [c, m] = Xv(r);
    l = l(o !== void 0 ? o : a.custom, c, m);
  }
  if (typeof l == "string" && (l = a.variants && a.variants[l]), typeof l == "function") {
    const [c, m] = Xv(r);
    l = l(o !== void 0 ? o : a.custom, c, m);
  }
  return l;
}
function sa(a, l, o) {
  const r = a.getProps();
  return wd(r, l, o !== void 0 ? o : r.custom, a);
}
const L0 = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...ol
]), $f = (a) => Array.isArray(a);
function H2(a, l, o) {
  a.hasValue(l) ? a.getValue(l).set(o) : a.addValue(l, ll(o));
}
function Y2(a) {
  return $f(a) ? a[a.length - 1] || 0 : a;
}
function q2(a, l) {
  const o = sa(a, l);
  let { transitionEnd: r = {}, transition: c = {}, ...m } = o || {};
  m = { ...m, ...r };
  for (const h in m) {
    const y = Y2(m[h]);
    H2(a, h, y);
  }
}
const me = (a) => !!(a && a.getVelocity);
function G2(a) {
  return !!(me(a) && a.add);
}
function Wf(a, l) {
  const o = a.getValue("willChange");
  if (G2(o))
    return o.add(l);
  if (!o && Ci.WillChange) {
    const r = new Ci.WillChange("auto");
    a.addValue("willChange", r), r.add(l);
  }
}
function _d(a) {
  return a.replace(/([A-Z])/g, (l) => `-${l.toLowerCase()}`);
}
const X2 = "framerAppearId", H0 = "data-" + _d(X2);
function Y0(a) {
  return a.props[H0];
}
function Q2({ protectedKeys: a, needsAnimating: l }, o) {
  const r = a.hasOwnProperty(o) && l[o] !== !0;
  return l[o] = !1, r;
}
function q0(a, l, { delay: o = 0, transitionOverride: r, type: c } = {}) {
  let { transition: m, transitionEnd: h, ...y } = l;
  const x = a.getDefaultTransition();
  m = m ? Od(m, x) : x;
  const S = m == null ? void 0 : m.reduceMotion, p = m == null ? void 0 : m.skipAnimations;
  r && (m = r);
  const v = [], b = c && a.animationState && a.animationState.getState()[c], A = m == null ? void 0 : m.path;
  A && A.animateVisualElement(a, y, m, o, v);
  for (const j in y) {
    const _ = a.getValue(j, a.latestValues[j] ?? null), w = y[j];
    if (w === void 0 || b && Q2(b, j))
      continue;
    const L = {
      delay: o,
      ...Rd(m || {}, j)
    };
    p && (L.skipAnimations = !0);
    const q = _.get();
    if (q !== void 0 && !_.isAnimating() && !Array.isArray(w) && w === q && !L.velocity) {
      Vt.update(() => _.set(w));
      continue;
    }
    let X = !1;
    if (window.MotionHandoffAnimation) {
      const ot = Y0(a);
      if (ot) {
        const K = window.MotionHandoffAnimation(ot, j, Vt);
        K !== null && (L.startTime = K, X = !0);
      }
    }
    Wf(a, j);
    const Q = S ?? a.shouldReduceMotion;
    _.start(zd(j, _, w, Q && L0.has(j) ? { type: !1 } : L, a, X));
    const I = _.animation;
    I && v.push(I);
  }
  if (h) {
    const j = () => Vt.update(() => {
      h && q2(a, h);
    });
    v.length ? Promise.all(v).then(j) : j();
  }
  return v;
}
function td(a, l, o = {}) {
  var x;
  const r = sa(a, l, o.type === "exit" ? (x = a.presenceContext) == null ? void 0 : x.custom : void 0);
  let { transition: c = a.getDefaultTransition() || {} } = r || {};
  o.transitionOverride && (c = o.transitionOverride);
  const m = r ? () => Promise.all(q0(a, r, o)) : () => Promise.resolve(), h = a.variantChildren && a.variantChildren.size ? (S = 0) => {
    const { delayChildren: p = 0, staggerChildren: v, staggerDirection: b } = c;
    return Z2(a, l, S, p, v, b, o);
  } : () => Promise.resolve(), { when: y } = c;
  if (y) {
    const [S, p] = y === "beforeChildren" ? [m, h] : [h, m];
    return S().then(() => p());
  } else
    return Promise.all([m(), h(o.delay)]);
}
function Z2(a, l, o = 0, r = 0, c = 0, m = 1, h) {
  const y = [];
  for (const x of a.variantChildren)
    x.notify("AnimationStart", l), y.push(td(x, l, {
      ...h,
      delay: o + (typeof r == "function" ? 0 : r) + U0(a.variantChildren, x, r, c, m)
    }).then(() => x.notify("AnimationComplete", l)));
  return Promise.all(y);
}
function K2(a, l, o = {}) {
  a.notify("AnimationStart", l);
  let r;
  if (Array.isArray(l)) {
    const c = l.map((m) => td(a, m, o));
    r = Promise.all(c);
  } else if (typeof l == "string")
    r = td(a, l, o);
  else {
    const c = typeof l == "function" ? sa(a, l, o.custom) : l;
    r = Promise.all(q0(a, c, o));
  }
  return r.then(() => {
    a.notify("AnimationComplete", l);
  });
}
const k2 = {
  test: (a) => a === "auto",
  parse: (a) => a
}, G0 = (a) => (l) => l.test(a), X0 = [ul, W, Cn, Kn, gT, vT, k2], Qv = (a) => X0.find(G0(a));
function J2(a) {
  return typeof a == "number" ? a === 0 : a !== null ? a === "none" || a === "0" || e0(a) : !0;
}
const F2 = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function P2(a) {
  const [l, o] = a.slice(0, -1).split("(");
  if (l === "drop-shadow")
    return a;
  const [r] = o.match(jd) || [];
  if (!r)
    return a;
  const c = o.replace(r, "");
  let m = F2.has(l) ? 1 : 0;
  return r !== o && (m *= 100), l + "(" + m + c + ")";
}
const I2 = /\b([a-z-]*)\(.*?\)/gu, ed = {
  ...on,
  getAnimatableNone: (a) => {
    const l = a.match(I2);
    return l ? l.map(P2).join(" ") : a;
  }
}, nd = {
  ...on,
  getAnimatableNone: (a) => {
    const l = on.parse(a);
    return on.createTransformer(a)(l.map((r) => typeof r == "number" ? 0 : typeof r == "object" ? { ...r, alpha: 1 } : r));
  }
}, Zv = {
  ...ul,
  transform: Math.round
}, $2 = {
  rotate: Kn,
  /**
   * Internal channel for `transition.path` orientToPath. Composed onto
   * `rotate` at the transform-build sites so the user's `rotate` is
   * never read or overwritten. Not part of `transformPropOrder`.
   */
  pathRotation: Kn,
  rotateX: Kn,
  rotateY: Kn,
  rotateZ: Kn,
  scale: no,
  scaleX: no,
  scaleY: no,
  scaleZ: no,
  skew: Kn,
  skewX: Kn,
  skewY: Kn,
  distance: W,
  translateX: W,
  translateY: W,
  translateZ: W,
  x: W,
  y: W,
  z: W,
  perspective: W,
  transformPerspective: W,
  opacity: hs,
  originX: Rv,
  originY: Rv,
  originZ: W
}, bo = {
  // Border props
  borderWidth: W,
  borderTopWidth: W,
  borderRightWidth: W,
  borderBottomWidth: W,
  borderLeftWidth: W,
  borderRadius: W,
  borderTopLeftRadius: W,
  borderTopRightRadius: W,
  borderBottomRightRadius: W,
  borderBottomLeftRadius: W,
  // Positioning props
  width: W,
  maxWidth: W,
  height: W,
  maxHeight: W,
  top: W,
  right: W,
  bottom: W,
  left: W,
  inset: W,
  insetBlock: W,
  insetBlockStart: W,
  insetBlockEnd: W,
  insetInline: W,
  insetInlineStart: W,
  insetInlineEnd: W,
  // Spacing props
  padding: W,
  paddingTop: W,
  paddingRight: W,
  paddingBottom: W,
  paddingLeft: W,
  paddingBlock: W,
  paddingBlockStart: W,
  paddingBlockEnd: W,
  paddingInline: W,
  paddingInlineStart: W,
  paddingInlineEnd: W,
  margin: W,
  marginTop: W,
  marginRight: W,
  marginBottom: W,
  marginLeft: W,
  marginBlock: W,
  marginBlockStart: W,
  marginBlockEnd: W,
  marginInline: W,
  marginInlineStart: W,
  marginInlineEnd: W,
  // Typography
  fontSize: W,
  // Misc
  backgroundPositionX: W,
  backgroundPositionY: W,
  ...$2,
  zIndex: Zv,
  // SVG
  fillOpacity: hs,
  strokeOpacity: hs,
  numOctaves: Zv
}, W2 = {
  ...bo,
  // Color props
  color: $t,
  backgroundColor: $t,
  outlineColor: $t,
  fill: $t,
  stroke: $t,
  // Border props
  borderColor: $t,
  borderTopColor: $t,
  borderRightColor: $t,
  borderBottomColor: $t,
  borderLeftColor: $t,
  filter: ed,
  WebkitFilter: ed,
  mask: nd,
  WebkitMask: nd
}, Q0 = (a) => W2[a], tE = /* @__PURE__ */ new Set([ed, nd]);
function Z0(a, l) {
  let o = Q0(a);
  return tE.has(o) || (o = on), o.getAnimatableNone ? o.getAnimatableNone(l) : void 0;
}
const eE = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function nE(a, l, o) {
  let r = 0, c;
  for (; r < a.length && !c; ) {
    const m = a[r];
    typeof m == "string" && !eE.has(m) && al(m).values.length && (c = a[r]), r++;
  }
  if (c && o)
    for (const m of l)
      a[m] = Z0(o, c);
}
class iE extends Dd {
  constructor(l, o, r, c, m) {
    super(l, o, r, c, m, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: l, element: o, name: r } = this;
    if (!o || !o.current)
      return;
    super.readKeyframes();
    for (let p = 0; p < l.length; p++) {
      let v = l[p];
      if (typeof v == "string" && (v = v.trim(), Ed(v))) {
        const b = B0(v, o.current);
        b !== void 0 && (l[p] = b), p === l.length - 1 && (this.finalKeyframe = v);
      }
    }
    if (this.resolveNoneKeyframes(), !L0.has(r) || l.length !== 2)
      return;
    const [c, m] = l, h = Qv(c), y = Qv(m), x = Ov(c), S = Ov(m);
    if (x !== S && Ei[r]) {
      this.needsMeasurement = !0;
      return;
    }
    if (h !== y)
      if (Hv(h) && Hv(y))
        for (let p = 0; p < l.length; p++) {
          const v = l[p];
          typeof v == "string" && (l[p] = parseFloat(v));
        }
      else Ei[r] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: l, name: o } = this, r = [];
    for (let c = 0; c < l.length; c++)
      (l[c] === null || J2(l[c])) && r.push(c);
    r.length && nE(l, r, o);
  }
  measureInitialState() {
    const { element: l, unresolvedKeyframes: o, name: r } = this;
    if (!l || !l.current)
      return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = Ei[r](l.measureViewportBox(), window.getComputedStyle(l.current)), o[0] = this.measuredOrigin;
    const c = o[o.length - 1];
    c !== void 0 && l.getValue(r, c).jump(c, !1);
  }
  measureEndState() {
    var y;
    const { element: l, name: o, unresolvedKeyframes: r } = this;
    if (!l || !l.current)
      return;
    const c = l.getValue(o);
    c && c.jump(this.measuredOrigin, !1);
    const m = r.length - 1, h = r[m];
    r[m] = Ei[o](l.measureViewportBox(), window.getComputedStyle(l.current)), h !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = h), (y = this.removedTransforms) != null && y.length && this.removedTransforms.forEach(([x, S]) => {
      l.getValue(x).set(S);
    }), this.resolveNoneKeyframes();
  }
}
const Vd = [
  "borderTopLeftRadius",
  "borderTopRightRadius",
  "borderBottomRightRadius",
  "borderBottomLeftRadius"
];
function K0(a, l, o) {
  if (a == null)
    return [];
  if (a instanceof EventTarget)
    return [a];
  if (typeof a == "string") {
    let r = document;
    const c = (o == null ? void 0 : o[a]) ?? r.querySelectorAll(a);
    return c ? Array.from(c) : [];
  }
  return Array.from(a).filter((r) => r != null);
}
const id = (a, l) => l && typeof a == "number" ? l.transform(a) : a;
function oo(a) {
  return t0(a) && "offsetHeight" in a && !("ownerSVGElement" in a);
}
const { schedule: Ud } = /* @__PURE__ */ m0(queueMicrotask, !1), un = {
  x: !1,
  y: !1
};
function k0() {
  return un.x || un.y;
}
function aE(a) {
  return a === "x" || a === "y" ? un[a] ? null : (un[a] = !0, () => {
    un[a] = !1;
  }) : un.x || un.y ? null : (un.x = un.y = !0, () => {
    un.x = un.y = !1;
  });
}
function J0(a, l) {
  const o = K0(a), r = new AbortController(), c = {
    passive: !0,
    ...l,
    signal: r.signal
  };
  return [o, c, () => r.abort()];
}
function lE(a) {
  return !(a.pointerType === "touch" || k0());
}
function sE(a, l, o = {}) {
  const [r, c, m] = J0(a, o);
  return r.forEach((h) => {
    let y = !1, x = !1, S;
    const p = () => {
      h.removeEventListener("pointerleave", j);
    }, v = (w) => {
      S && (S(w), S = void 0), p();
    }, b = (w) => {
      y = !1, window.removeEventListener("pointerup", b), window.removeEventListener("pointercancel", b), x && (x = !1, v(w));
    }, A = () => {
      y = !0, window.addEventListener("pointerup", b, c), window.addEventListener("pointercancel", b, c);
    }, j = (w) => {
      if (w.pointerType !== "touch") {
        if (y) {
          x = !0;
          return;
        }
        v(w);
      }
    }, _ = (w) => {
      if (!lE(w))
        return;
      x = !1;
      const L = l(h, w);
      typeof L == "function" && (S = L, h.addEventListener("pointerleave", j, c));
    };
    h.addEventListener("pointerenter", _, c), h.addEventListener("pointerdown", A, c);
  }), m;
}
const F0 = (a, l) => l ? a === l ? !0 : F0(a, l.parentElement) : !1, Bd = (a) => a.pointerType === "mouse" ? typeof a.button != "number" || a.button <= 0 : a.isPrimary !== !1, uE = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function oE(a) {
  return uE.has(a.tagName) || a.isContentEditable === !0;
}
const rE = /* @__PURE__ */ new Set(["INPUT", "SELECT", "TEXTAREA"]);
function cE(a) {
  return rE.has(a.tagName) || a.isContentEditable === !0;
}
const ro = /* @__PURE__ */ new WeakSet();
function Kv(a) {
  return (l) => {
    l.key === "Enter" && a(l);
  };
}
function Of(a, l) {
  a.dispatchEvent(new PointerEvent("pointer" + l, { isPrimary: !0, bubbles: !0 }));
}
const fE = (a, l) => {
  const o = a.currentTarget;
  if (!o)
    return;
  const r = Kv(() => {
    if (ro.has(o))
      return;
    Of(o, "down");
    const c = Kv(() => {
      Of(o, "up");
    }), m = () => Of(o, "cancel");
    o.addEventListener("keyup", c, l), o.addEventListener("blur", m, l);
  });
  o.addEventListener("keydown", r, l), o.addEventListener("blur", () => o.removeEventListener("keydown", r), l);
};
function kv(a) {
  return Bd(a) && !k0();
}
const Jv = /* @__PURE__ */ new WeakSet();
function dE(a, l, o = {}) {
  const [r, c, m] = J0(a, o), h = (y) => {
    const x = y.currentTarget;
    if (!kv(y) || Jv.has(y))
      return;
    ro.add(x), o.stopPropagation && Jv.add(y);
    const S = l(x, y), p = { ...c, capture: !0 }, v = (j, _) => {
      window.removeEventListener("pointerup", b, p), window.removeEventListener("pointercancel", A, p), ro.has(x) && ro.delete(x), kv(j) && typeof S == "function" && S(j, { success: _ });
    }, b = (j) => {
      v(j, x === window || x === document || o.useGlobalTarget || F0(x, j.target));
    }, A = (j) => {
      v(j, !1);
    };
    window.addEventListener("pointerup", b, p), window.addEventListener("pointercancel", A, p);
  };
  return r.forEach((y) => {
    (o.useGlobalTarget ? window : y).addEventListener("pointerdown", h, c), oo(y) && (y.addEventListener("focus", (S) => fE(S, c)), !oE(y) && !y.hasAttribute("tabindex") && (y.tabIndex = 0));
  }), m;
}
function Ld(a) {
  return t0(a) && "ownerSVGElement" in a;
}
const co = /* @__PURE__ */ new WeakMap();
let Ti;
const P0 = (a, l, o) => (r, c) => c && c[0] ? c[0][a + "Size"] : Ld(r) && "getBBox" in r ? r.getBBox()[l] : r[o], hE = /* @__PURE__ */ P0("inline", "width", "offsetWidth"), mE = /* @__PURE__ */ P0("block", "height", "offsetHeight");
function yE({ target: a, borderBoxSize: l }) {
  var o;
  (o = co.get(a)) == null || o.forEach((r) => {
    r(a, {
      get width() {
        return hE(a, l);
      },
      get height() {
        return mE(a, l);
      }
    });
  });
}
function pE(a) {
  a.forEach(yE);
}
function vE() {
  typeof ResizeObserver > "u" || (Ti = new ResizeObserver(pE));
}
function gE(a, l) {
  Ti || vE();
  const o = K0(a);
  return o.forEach((r) => {
    let c = co.get(r);
    c || (c = /* @__PURE__ */ new Set(), co.set(r, c)), c.add(l), Ti == null || Ti.observe(r);
  }), () => {
    o.forEach((r) => {
      const c = co.get(r);
      c == null || c.delete(l), c != null && c.size || Ti == null || Ti.unobserve(r);
    });
  };
}
const fo = /* @__PURE__ */ new Set();
let nl;
function xE() {
  nl = () => {
    const a = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      }
    };
    fo.forEach((l) => l(a));
  }, window.addEventListener("resize", nl);
}
function SE(a) {
  return fo.add(a), nl || xE(), () => {
    fo.delete(a), !fo.size && typeof nl == "function" && (window.removeEventListener("resize", nl), nl = void 0);
  };
}
function Fv(a, l) {
  return typeof a == "function" ? SE(a) : gE(a, l);
}
function bE(a) {
  return Ld(a) && a.tagName === "svg";
}
const TE = [...X0, $t, on], EE = (a) => TE.find(G0(a)), Pv = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), il = () => ({
  x: Pv(),
  y: Pv()
}), Iv = () => ({ min: 0, max: 0 }), te = () => ({
  x: Iv(),
  y: Iv()
}), jE = /* @__PURE__ */ new WeakMap();
function wo(a) {
  return a !== null && typeof a == "object" && typeof a.start == "function";
}
function ms(a) {
  return typeof a == "string" || Array.isArray(a);
}
const Hd = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], Yd = ["initial", ...Hd];
function _o(a) {
  return wo(a.animate) || Yd.some((l) => ms(a[l]));
}
function I0(a) {
  return !!(_o(a) || a.variants);
}
function AE(a, l, o) {
  for (const r in l) {
    const c = l[r], m = o[r];
    if (me(c))
      a.addValue(r, c);
    else if (me(m))
      a.addValue(r, ll(c, { owner: a }));
    else if (m !== c)
      if (a.hasValue(r)) {
        const h = a.getValue(r);
        h.liveStyle === !0 ? h.jump(c) : h.hasAnimated || h.set(c);
      } else {
        const h = a.getStaticValue(r);
        a.addValue(r, ll(h !== void 0 ? h : c, { owner: a }));
      }
  }
  for (const r in o)
    l[r] === void 0 && a.removeValue(r);
  return l;
}
const ad = { current: null }, $0 = { current: !1 }, CE = typeof window < "u";
function NE() {
  if ($0.current = !0, !!CE)
    if (window.matchMedia) {
      const a = window.matchMedia("(prefers-reduced-motion)"), l = () => ad.current = a.matches;
      a.addEventListener("change", l), l();
    } else
      ad.current = !1;
}
const $v = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
let To = {};
function W0(a) {
  To = a;
}
function ME() {
  return To;
}
class DE {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(l, o, r) {
    return {};
  }
  constructor({ parent: l, props: o, presenceContext: r, reducedMotionConfig: c, skipAnimations: m, blockInitialAnimation: h, visualState: y }, x = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.shouldSkipAnimations = !1, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = Dd, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.hasBeenMounted = !1, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const A = Se.now();
      this.renderScheduledAt < A && (this.renderScheduledAt = A, Vt.render(this.render, !1, !0));
    };
    const { latestValues: S, renderState: p } = y;
    this.latestValues = S, this.baseTarget = { ...S }, this.initialValues = o.initial ? { ...S } : {}, this.renderState = p, this.parent = l, this.props = o, this.presenceContext = r, this.depth = l ? l.depth + 1 : 0, this.reducedMotionConfig = c, this.skipAnimationsConfig = m, this.options = x, this.blockInitialAnimation = !!h, this.isControllingVariants = _o(o), this.isVariantNode = I0(o), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(l && l.current);
    const { willChange: v, ...b } = this.scrapeMotionValuesFromProps(o, {}, this);
    for (const A in b) {
      const j = b[A];
      S[A] !== void 0 && me(j) && j.set(S[A]);
    }
  }
  mount(l) {
    var o, r;
    if (this.hasBeenMounted)
      for (const c in this.initialValues)
        (o = this.values.get(c)) == null || o.jump(this.initialValues[c]), this.latestValues[c] = this.initialValues[c];
    this.current = l, jE.set(l, this), this.projection && !this.projection.instance && this.projection.mount(l), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((c, m) => this.bindToMotionValue(m, c)), this.reducedMotionConfig === "never" ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = !0 : ($0.current || NE(), this.shouldReduceMotion = ad.current), this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1, (r = this.parent) == null || r.addChild(this), this.update(this.props, this.presenceContext), this.hasBeenMounted = !0;
  }
  unmount() {
    var l;
    this.projection && this.projection.unmount(), Ni(this.notifyUpdate), Ni(this.render), this.valueSubscriptions.forEach((o) => o()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), (l = this.parent) == null || l.removeChild(this);
    for (const o in this.events)
      this.events[o].clear();
    for (const o in this.features) {
      const r = this.features[o];
      r && (r.unmount(), r.isMounted = !1);
    }
    this.current = null;
  }
  addChild(l) {
    this.children.add(l), this.enteringChildren ?? (this.enteringChildren = /* @__PURE__ */ new Set()), this.enteringChildren.add(l);
  }
  removeChild(l) {
    this.children.delete(l), this.enteringChildren && this.enteringChildren.delete(l);
  }
  bindToMotionValue(l, o) {
    if (this.valueSubscriptions.has(l) && this.valueSubscriptions.get(l)(), o.accelerate && V0.has(l) && this.current instanceof HTMLElement) {
      const { factory: h, keyframes: y, times: x, ease: S, duration: p } = o.accelerate, v = new w0({
        element: this.current,
        name: l,
        keyframes: y,
        times: x,
        ease: S,
        duration: /* @__PURE__ */ De(p)
      }), b = h(v);
      this.valueSubscriptions.set(l, () => {
        b(), v.cancel();
      });
      return;
    }
    const r = rl.has(l);
    r && this.onBindTransform && this.onBindTransform();
    const c = o.on("change", (h) => {
      this.latestValues[l] = h, this.props.onUpdate && Vt.preRender(this.notifyUpdate), r && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender();
    });
    let m;
    typeof window < "u" && window.MotionCheckAppearSync && (m = window.MotionCheckAppearSync(this, l, o)), this.valueSubscriptions.set(l, () => {
      c(), m && m();
    });
  }
  sortNodePosition(l) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== l.type ? 0 : this.sortInstanceNodePosition(this.current, l.current);
  }
  updateFeatures() {
    let l = "animation";
    for (l in To) {
      const o = To[l];
      if (!o)
        continue;
      const { isEnabled: r, Feature: c } = o;
      if (!this.features[l] && c && r(this.props) && (this.features[l] = new c(this)), this.features[l]) {
        const m = this.features[l];
        m.isMounted ? m.update() : (m.mount(), m.isMounted = !0);
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : te();
  }
  getStaticValue(l) {
    return this.latestValues[l];
  }
  setStaticValue(l, o) {
    this.latestValues[l] = o;
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(l, o) {
    (l.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = l, this.prevPresenceContext = this.presenceContext, this.presenceContext = o;
    for (let r = 0; r < $v.length; r++) {
      const c = $v[r];
      this.propEventSubscriptions[c] && (this.propEventSubscriptions[c](), delete this.propEventSubscriptions[c]);
      const m = "on" + c, h = l[m];
      h && (this.propEventSubscriptions[c] = this.on(c, h));
    }
    this.prevMotionValues = AE(this, this.scrapeMotionValuesFromProps(l, this.prevProps || {}, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(l) {
    return this.props.variants ? this.props.variants[l] : void 0;
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(l) {
    const o = this.getClosestVariantNode();
    if (o)
      return o.variantChildren && o.variantChildren.add(l), () => o.variantChildren.delete(l);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(l, o) {
    const r = this.values.get(l);
    o !== r && (r && this.removeValue(l), this.bindToMotionValue(l, o), this.values.set(l, o), this.latestValues[l] = o.get());
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(l) {
    this.values.delete(l);
    const o = this.valueSubscriptions.get(l);
    o && (o(), this.valueSubscriptions.delete(l)), delete this.latestValues[l], this.removeValueFromRenderState(l, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(l) {
    return this.values.has(l);
  }
  getValue(l, o) {
    if (this.props.values && this.props.values[l])
      return this.props.values[l];
    let r = this.values.get(l);
    return r === void 0 && o !== void 0 && (r = ll(o === null ? void 0 : o, { owner: this }), this.addValue(l, r)), r;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(l, o) {
    let r = this.latestValues[l] !== void 0 || !this.current ? this.latestValues[l] : this.getBaseTargetFromProps(this.props, l) ?? this.readValueFromInstance(this.current, l, this.options);
    return r != null && (typeof r == "string" && (Wg(r) || e0(r)) ? r = parseFloat(r) : !EE(r) && on.test(o) && (r = Z0(l, o)), this.setBaseTarget(l, me(r) ? r.get() : r)), me(r) ? r.get() : r;
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(l, o) {
    this.baseTarget[l] = o;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(l) {
    var m;
    const { initial: o } = this.props;
    let r;
    if (typeof o == "string" || typeof o == "object") {
      const h = wd(this.props, o, (m = this.presenceContext) == null ? void 0 : m.custom);
      h && (r = h[l]);
    }
    if (o && r !== void 0)
      return r;
    const c = this.getBaseTargetFromProps(this.props, l);
    return c !== void 0 && !me(c) ? c : this.initialValues[l] !== void 0 && r === void 0 ? void 0 : this.baseTarget[l];
  }
  on(l, o) {
    return this.events[l] || (this.events[l] = new Sd()), this.events[l].add(o);
  }
  notify(l, ...o) {
    this.events[l] && this.events[l].notify(...o);
  }
  scheduleRenderMicrotask() {
    Ud.render(this.render);
  }
}
class t1 extends DE {
  constructor() {
    super(...arguments), this.KeyframeResolver = iE;
  }
  sortInstanceNodePosition(l, o) {
    return l.compareDocumentPosition(o) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(l, o) {
    const r = l.style;
    return r ? r[o] : void 0;
  }
  removeValueFromRenderState(l, { vars: o, style: r }) {
    delete o[l], delete r[l];
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: l } = this.props;
    me(l) && (this.childSubscription = l.on("change", (o) => {
      this.current && (this.current.textContent = `${o}`);
    }));
  }
}
class Di {
  constructor(l) {
    this.isMounted = !1, this.node = l;
  }
  update() {
  }
}
function e1({ top: a, left: l, right: o, bottom: r }) {
  return {
    x: { min: l, max: o },
    y: { min: a, max: r }
  };
}
function OE({ x: a, y: l }) {
  return { top: l.min, right: a.max, bottom: l.max, left: a.min };
}
function RE(a, l) {
  if (!l)
    return a;
  const o = l({ x: a.left, y: a.top }), r = l({ x: a.right, y: a.bottom });
  return {
    top: o.y,
    left: o.x,
    bottom: r.y,
    right: r.x
  };
}
function Rf(a) {
  return a === void 0 || a === 1;
}
function ld({ scale: a, scaleX: l, scaleY: o }) {
  return !Rf(a) || !Rf(l) || !Rf(o);
}
function na(a) {
  return ld(a) || n1(a) || a.z || a.rotate || a.rotateX || a.rotateY || a.skewX || a.skewY;
}
function n1(a) {
  return Wv(a.x) || Wv(a.y);
}
function Wv(a) {
  return a && a !== "0%";
}
function Eo(a, l, o) {
  const r = a - o, c = l * r;
  return o + c;
}
function tg(a, l, o, r, c) {
  return c !== void 0 && (a = Eo(a, c, r)), Eo(a, o, r) + l;
}
function sd(a, l = 0, o = 1, r, c) {
  a.min = tg(a.min, l, o, r, c), a.max = tg(a.max, l, o, r, c);
}
function i1(a, { x: l, y: o }) {
  sd(a.x, l.translate, l.scale, l.originPoint), sd(a.y, o.translate, o.scale, o.originPoint);
}
const eg = 0.999999999999, ng = 1.0000000000001;
function zE(a, l, o, r = !1) {
  var y;
  const c = o.length;
  if (!c)
    return;
  l.x = l.y = 1;
  let m, h;
  for (let x = 0; x < c; x++) {
    m = o[x], h = m.projectionDelta;
    const { visualElement: S } = m.options;
    S && S.props.style && S.props.style.display === "contents" || (r && m.options.layoutScroll && m.scroll && m !== m.root && (jn(a.x, -m.scroll.offset.x), jn(a.y, -m.scroll.offset.y)), h && (l.x *= h.x.scale, l.y *= h.y.scale, i1(a, h)), r && na(m.latestValues) && ho(a, m.latestValues, (y = m.layout) == null ? void 0 : y.layoutBox));
  }
  l.x < ng && l.x > eg && (l.x = 1), l.y < ng && l.y > eg && (l.y = 1);
}
function jn(a, l) {
  a.min += l, a.max += l;
}
function ig(a, l, o, r, c = 0.5) {
  const m = _t(a.min, a.max, c);
  sd(a, l, o, m, r);
}
function ag(a, l) {
  return typeof a == "string" ? parseFloat(a) / 100 * (l.max - l.min) : a;
}
function ho(a, l, o) {
  const r = o ?? a;
  ig(a.x, ag(l.x, r.x), l.scaleX, l.scale, l.originX), ig(a.y, ag(l.y, r.y), l.scaleY, l.scale, l.originY);
}
function a1(a, l) {
  return e1(RE(a.getBoundingClientRect(), l));
}
function wE(a, l, o) {
  const r = a1(a, o), { scroll: c } = l;
  return c && (jn(r.x, c.offset.x), jn(r.y, c.offset.y)), r;
}
const _E = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, VE = ol.length;
function UE(a, l, o) {
  let r = "", c = !0;
  for (let h = 0; h < VE; h++) {
    const y = ol[h], x = a[y];
    if (x === void 0)
      continue;
    let S = !0;
    if (typeof x == "number")
      S = x === (y.startsWith("scale") ? 1 : 0);
    else {
      const p = parseFloat(x);
      S = y.startsWith("scale") ? p === 1 : p === 0;
    }
    if (!S || o) {
      const p = id(x, bo[y]);
      if (!S) {
        c = !1;
        const v = _E[y] || y;
        r += `${v}(${p}) `;
      }
      o && (l[y] = p);
    }
  }
  const m = a.pathRotation;
  return m && (c = !1, r += `rotate(${id(m, bo.pathRotation)}) `), r = r.trim(), o ? r = o(l, c ? "" : r) : c && (r = "none"), r;
}
function qd(a, l, o) {
  const { style: r, vars: c, transformOrigin: m } = a;
  let h = !1, y = !1;
  for (const x in l) {
    const S = l[x];
    if (rl.has(x)) {
      h = !0;
      continue;
    } else if (p0(x)) {
      c[x] = S;
      continue;
    } else {
      const p = id(S, bo[x]);
      x.startsWith("origin") ? (y = !0, m[x] = p) : r[x] = p;
    }
  }
  if (l.transform || (h || o ? r.transform = UE(l, a.transform, o) : r.transform && (r.transform = "none")), y) {
    const { originX: x = "50%", originY: S = "50%", originZ: p = 0 } = m;
    r.transformOrigin = `${x} ${S} ${p}`;
  }
}
function l1(a, { style: l, vars: o }, r, c) {
  const m = a.style;
  let h;
  for (h in l)
    m[h] = l[h];
  c == null || c.applyProjectionStyles(m, r);
  for (h in o)
    m.setProperty(h, o[h]);
}
function lg(a, l) {
  return l.max === l.min ? 0 : a / (l.max - l.min) * 100;
}
const ss = {
  correct: (a, l) => {
    if (!l.target)
      return a;
    if (typeof a == "string")
      if (W.test(a))
        a = parseFloat(a);
      else
        return a;
    const o = lg(a, l.target.x), r = lg(a, l.target.y);
    return `${o}% ${r}%`;
  }
}, BE = {
  correct: (a, { treeScale: l, projectionDelta: o }) => {
    const r = a, c = on.parse(a);
    if (c.length > 5)
      return r;
    const m = on.createTransformer(a), h = typeof c[0] != "number" ? 1 : 0, y = o.x.scale * l.x, x = o.y.scale * l.y;
    c[0 + h] /= y, c[1 + h] /= x;
    const S = _t(y, x, 0.5);
    return typeof c[2 + h] == "number" && (c[2 + h] /= S), typeof c[3 + h] == "number" && (c[3 + h] /= S), m(c);
  }
}, ud = {
  borderRadius: {
    ...ss,
    applyTo: [...Vd]
  },
  borderTopLeftRadius: ss,
  borderTopRightRadius: ss,
  borderBottomLeftRadius: ss,
  borderBottomRightRadius: ss,
  boxShadow: BE
};
function s1(a, { layout: l, layoutId: o }) {
  return rl.has(a) || a.startsWith("origin") || (l || o !== void 0) && (!!ud[a] || a === "opacity");
}
function Gd(a, l, o) {
  var h;
  const r = a.style, c = l == null ? void 0 : l.style, m = {};
  if (!r)
    return m;
  for (const y in r)
    (me(r[y]) || c && me(c[y]) || s1(y, a) || ((h = o == null ? void 0 : o.getValue(y)) == null ? void 0 : h.liveStyle) !== void 0) && (m[y] = r[y]);
  return m;
}
function LE(a) {
  return window.getComputedStyle(a);
}
class HE extends t1 {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = l1;
  }
  mount(l) {
    Ai(!!l.style, "motion.create() components must forward their ref to a HTML or SVG element", "custom-component-ref"), super.mount(l);
  }
  readValueFromInstance(l, o) {
    var r;
    if (rl.has(o))
      return (r = this.projection) != null && r.isProjecting ? Kf(o) : a2(l, o);
    {
      const c = LE(l), m = (p0(o) ? c.getPropertyValue(o) : c[o]) || 0;
      return typeof m == "string" ? m.trim() : m;
    }
  }
  measureInstanceViewportBox(l, { transformPagePoint: o }) {
    return a1(l, o);
  }
  build(l, o, r) {
    qd(l, o, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(l, o, r) {
    return Gd(l, o, r);
  }
}
const YE = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, qE = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function GE(a, l, o = 1, r = 0, c = !0) {
  a.pathLength = 1;
  const m = c ? YE : qE;
  a[m.offset] = `${-r}`, a[m.array] = `${l} ${o}`;
}
const XE = [
  "offsetDistance",
  "offsetPath",
  "offsetRotate",
  "offsetAnchor"
];
function u1(a, {
  attrX: l,
  attrY: o,
  attrScale: r,
  pathLength: c,
  pathSpacing: m = 1,
  pathOffset: h = 0,
  // This is object creation, which we try to avoid per-frame.
  ...y
}, x, S, p) {
  if (qd(a, y, S), x) {
    a.style.viewBox && (a.attrs.viewBox = a.style.viewBox);
    return;
  }
  a.attrs = a.style, a.style = {};
  const { attrs: v, style: b } = a;
  v.transform && (b.transform = v.transform, delete v.transform), (b.transform || v.transformOrigin) && (b.transformOrigin = v.transformOrigin ?? "50% 50%", delete v.transformOrigin), b.transform && (b.transformBox = (p == null ? void 0 : p.transformBox) ?? "fill-box", delete v.transformBox);
  for (const A of XE)
    v[A] !== void 0 && (b[A] = v[A], delete v[A]);
  l !== void 0 && (v.x = l), o !== void 0 && (v.y = o), r !== void 0 && (v.scale = r), c !== void 0 && GE(v, c, m, h, !1);
}
const o1 = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust"
]), r1 = (a) => typeof a == "string" && a.toLowerCase() === "svg";
function QE(a, l, o, r) {
  l1(a, l, void 0, r);
  for (const c in l.attrs)
    a.setAttribute(o1.has(c) ? c : _d(c), l.attrs[c]);
}
function c1(a, l, o) {
  const r = Gd(a, l, o);
  for (const c in a)
    if (me(a[c]) || me(l[c])) {
      const m = ol.indexOf(c) !== -1 ? "attr" + c.charAt(0).toUpperCase() + c.substring(1) : c;
      r[m] = a[c];
    }
  return r;
}
class ZE extends t1 {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = te;
  }
  getBaseTargetFromProps(l, o) {
    return l[o];
  }
  readValueFromInstance(l, o) {
    if (rl.has(o)) {
      const r = Q0(o);
      return r && r.default || 0;
    }
    return o = o1.has(o) ? o : _d(o), l.getAttribute(o);
  }
  scrapeMotionValuesFromProps(l, o, r) {
    return c1(l, o, r);
  }
  build(l, o, r) {
    u1(l, o, this.isSVGTag, r.transformTemplate, r.style);
  }
  renderInstance(l, o, r, c) {
    QE(l, o, r, c);
  }
  mount(l) {
    this.isSVGTag = r1(l.tagName), super.mount(l);
  }
}
const KE = Yd.length;
function f1(a) {
  if (!a)
    return;
  if (!a.isControllingVariants) {
    const o = a.parent ? f1(a.parent) || {} : {};
    return a.props.initial !== void 0 && (o.initial = a.props.initial), o;
  }
  const l = {};
  for (let o = 0; o < KE; o++) {
    const r = Yd[o], c = a.props[r];
    (ms(c) || c === !1) && (l[r] = c);
  }
  return l;
}
function d1(a, l) {
  if (!Array.isArray(l))
    return !1;
  const o = l.length;
  if (o !== a.length)
    return !1;
  for (let r = 0; r < o; r++)
    if (l[r] !== a[r])
      return !1;
  return !0;
}
const kE = [...Hd].reverse(), JE = Hd.length;
function FE(a) {
  return (l) => Promise.all(l.map(({ animation: o, options: r }) => K2(a, o, r)));
}
function PE(a) {
  let l = FE(a), o = sg(), r = !0, c = !1;
  const m = (S) => (p, v) => {
    var A;
    const b = sa(a, v, S === "exit" ? (A = a.presenceContext) == null ? void 0 : A.custom : void 0);
    if (b) {
      const { transition: j, transitionEnd: _, ...w } = b;
      p = { ...p, ...w, ..._ };
    }
    return p;
  };
  function h(S) {
    l = S(a);
  }
  function y(S) {
    const { props: p } = a, v = f1(a.parent) || {}, b = [], A = /* @__PURE__ */ new Set();
    let j = {}, _ = 1 / 0;
    for (let L = 0; L < JE; L++) {
      const q = kE[L], X = o[q], Q = p[q] !== void 0 ? p[q] : v[q], I = ms(Q), ot = q === S ? X.isActive : null;
      ot === !1 && (_ = L);
      let K = Q === v[q] && Q !== p[q] && I;
      if (K && (r || c) && a.manuallyAnimateOnMount && (K = !1), X.protectedKeys = { ...j }, // If it isn't active and hasn't *just* been set as inactive
      !X.isActive && ot === null || // If we didn't and don't have any defined prop for this animation type
      !Q && !X.prevProp || // Or if the prop doesn't define an animation
      wo(Q) || typeof Q == "boolean")
        continue;
      if (q === "exit" && X.isActive && ot !== !0) {
        X.prevResolvedValues && (j = {
          ...j,
          ...X.prevResolvedValues
        });
        continue;
      }
      const Y = IE(X.prevProp, Q);
      let lt = Y || // If we're making this variant active, we want to always make it active
      q === S && X.isActive && !K && I || // If we removed a higher-priority variant (i is in reverse order)
      L > _ && I, J = !1;
      const ft = Array.isArray(Q) ? Q : [Q];
      let xt = ft.reduce(m(q), {});
      ot === !1 && (xt = {});
      const { prevResolvedValues: Ut = {} } = X, Kt = {
        ...Ut,
        ...xt
      }, Ct = (F) => {
        lt = !0, A.has(F) && (J = !0, A.delete(F)), X.needsAnimating[F] = !0;
        const G = a.getValue(F);
        G && (G.liveStyle = !1);
      };
      for (const F in Kt) {
        const G = xt[F], at = Ut[F];
        if (j.hasOwnProperty(F))
          continue;
        let kt = !1;
        $f(G) && $f(at) ? kt = !d1(G, at) || Y : kt = G !== at, kt ? G != null ? Ct(F) : A.add(F) : G !== void 0 && A.has(F) ? Ct(F) : X.protectedKeys[F] = !0;
      }
      X.prevProp = Q, X.prevResolvedValues = xt, X.isActive && (j = { ...j, ...xt }), (r || c) && a.blockInitialAnimation && (lt = !1);
      const Z = K && Y;
      lt && (!Z || J) && b.push(...ft.map((F) => {
        const G = { type: q };
        if (typeof F == "string" && (r || c) && !Z && a.manuallyAnimateOnMount && a.parent) {
          const { parent: at } = a, kt = sa(at, F);
          if (at.enteringChildren && kt) {
            const { delayChildren: Oe } = kt.transition || {};
            G.delay = U0(at.enteringChildren, a, Oe);
          }
        }
        return {
          animation: F,
          options: G
        };
      }));
    }
    if (A.size) {
      const L = {};
      if (typeof p.initial != "boolean") {
        const q = sa(a, Array.isArray(p.initial) ? p.initial[0] : p.initial);
        q && q.transition && (L.transition = q.transition);
      }
      A.forEach((q) => {
        const X = a.getBaseTarget(q), Q = a.getValue(q);
        Q && (Q.liveStyle = !0), L[q] = X ?? null;
      }), b.push({ animation: L });
    }
    let w = !!b.length;
    return r && (p.initial === !1 || p.initial === p.animate) && !a.manuallyAnimateOnMount && (w = !1), r = !1, c = !1, w ? l(b) : Promise.resolve();
  }
  function x(S, p) {
    var b;
    if (o[S].isActive === p)
      return Promise.resolve();
    (b = a.variantChildren) == null || b.forEach((A) => {
      var j;
      return (j = A.animationState) == null ? void 0 : j.setActive(S, p);
    }), o[S].isActive = p;
    const v = y(S);
    for (const A in o)
      o[A].protectedKeys = {};
    return v;
  }
  return {
    animateChanges: y,
    setActive: x,
    setAnimateFunction: h,
    getState: () => o,
    reset: () => {
      o = sg(), c = !0;
    }
  };
}
function IE(a, l) {
  return typeof l == "string" ? l !== a : Array.isArray(l) ? !d1(l, a) : !1;
}
function ea(a = !1) {
  return {
    isActive: a,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function sg() {
  return {
    animate: ea(!0),
    whileInView: ea(),
    whileHover: ea(),
    whileTap: ea(),
    whileDrag: ea(),
    whileFocus: ea(),
    exit: ea()
  };
}
function od(a, l) {
  a.min = l.min, a.max = l.max;
}
function sn(a, l) {
  od(a.x, l.x), od(a.y, l.y);
}
function ug(a, l) {
  a.translate = l.translate, a.scale = l.scale, a.originPoint = l.originPoint, a.origin = l.origin;
}
const h1 = 1e-4, $E = 1 - h1, WE = 1 + h1, m1 = 0.01, tj = 0 - m1, ej = 0 + m1;
function be(a) {
  return a.max - a.min;
}
function nj(a, l, o) {
  return Math.abs(a - l) <= o;
}
function og(a, l, o, r = 0.5) {
  a.origin = r, a.originPoint = _t(l.min, l.max, a.origin), a.scale = be(o) / be(l), a.translate = _t(o.min, o.max, a.origin) - a.originPoint, (a.scale >= $E && a.scale <= WE || isNaN(a.scale)) && (a.scale = 1), (a.translate >= tj && a.translate <= ej || isNaN(a.translate)) && (a.translate = 0);
}
function cs(a, l, o, r) {
  og(a.x, l.x, o.x, r ? r.originX : void 0), og(a.y, l.y, o.y, r ? r.originY : void 0);
}
function rg(a, l, o, r = 0) {
  const c = r ? _t(o.min, o.max, r) : o.min;
  a.min = c + l.min, a.max = a.min + be(l);
}
function ij(a, l, o, r) {
  rg(a.x, l.x, o.x, r == null ? void 0 : r.x), rg(a.y, l.y, o.y, r == null ? void 0 : r.y);
}
function cg(a, l, o, r = 0) {
  const c = r ? _t(o.min, o.max, r) : o.min;
  a.min = l.min - c, a.max = a.min + be(l);
}
function jo(a, l, o, r) {
  cg(a.x, l.x, o.x, r == null ? void 0 : r.x), cg(a.y, l.y, o.y, r == null ? void 0 : r.y);
}
function fg(a, l, o, r, c) {
  return a -= l, a = Eo(a, 1 / o, r), c !== void 0 && (a = Eo(a, 1 / c, r)), a;
}
function aj(a, l = 0, o = 1, r = 0.5, c, m = a, h = a) {
  if (Cn.test(l) && (l = parseFloat(l), l = _t(h.min, h.max, l / 100) - h.min), typeof l != "number")
    return;
  let y = _t(m.min, m.max, r);
  a === m && (y -= l), a.min = fg(a.min, l, o, y, c), a.max = fg(a.max, l, o, y, c);
}
function dg(a, l, [o, r, c], m, h) {
  aj(a, l[o], l[r], l[c], l.scale, m, h);
}
const lj = ["x", "scaleX", "originX"], sj = ["y", "scaleY", "originY"];
function hg(a, l, o, r) {
  dg(a.x, l, lj, o ? o.x : void 0, r ? r.x : void 0), dg(a.y, l, sj, o ? o.y : void 0, r ? r.y : void 0);
}
function mg(a) {
  return a.translate === 0 && a.scale === 1;
}
function y1(a) {
  return mg(a.x) && mg(a.y);
}
function yg(a, l) {
  return a.min === l.min && a.max === l.max;
}
function uj(a, l) {
  return yg(a.x, l.x) && yg(a.y, l.y);
}
function pg(a, l) {
  return Math.round(a.min) === Math.round(l.min) && Math.round(a.max) === Math.round(l.max);
}
function p1(a, l) {
  return pg(a.x, l.x) && pg(a.y, l.y);
}
function vg(a) {
  return be(a.x) / be(a.y);
}
function gg(a, l) {
  return a.translate === l.translate && a.scale === l.scale && a.originPoint === l.originPoint;
}
function En(a) {
  return [a("x"), a("y")];
}
function oj(a, l, o) {
  let r = "";
  const c = a.x.translate / l.x, m = a.y.translate / l.y, h = (o == null ? void 0 : o.z) || 0;
  if ((c || m || h) && (r = `translate3d(${c}px, ${m}px, ${h}px) `), (l.x !== 1 || l.y !== 1) && (r += `scale(${1 / l.x}, ${1 / l.y}) `), o) {
    const { transformPerspective: S, rotate: p, pathRotation: v, rotateX: b, rotateY: A, skewX: j, skewY: _ } = o;
    S && (r = `perspective(${S}px) ${r}`), p && (r += `rotate(${p}deg) `), v && (r += `rotate(${v}deg) `), b && (r += `rotateX(${b}deg) `), A && (r += `rotateY(${A}deg) `), j && (r += `skewX(${j}deg) `), _ && (r += `skewY(${_}deg) `);
  }
  const y = a.x.scale * l.x, x = a.y.scale * l.y;
  return (y !== 1 || x !== 1) && (r += `scale(${y}, ${x})`), r || "none";
}
const rj = Vd.length, xg = (a) => typeof a == "string" ? parseFloat(a) : a, Sg = (a) => typeof a == "number" || W.test(a);
function cj(a, l, o, r, c, m) {
  c ? (a.opacity = _t(0, o.opacity ?? 1, fj(r)), a.opacityExit = _t(l.opacity ?? 1, 0, dj(r))) : m && (a.opacity = _t(l.opacity ?? 1, o.opacity ?? 1, r));
  for (let h = 0; h < rj; h++) {
    const y = Vd[h];
    let x = bg(l, y), S = bg(o, y);
    if (x === void 0 && S === void 0)
      continue;
    x || (x = 0), S || (S = 0), x === 0 || S === 0 || Sg(x) === Sg(S) ? (a[y] = Math.max(_t(xg(x), xg(S), r), 0), (Cn.test(S) || Cn.test(x)) && (a[y] += "%")) : a[y] = S;
  }
  (l.rotate || o.rotate) && (a.rotate = _t(l.rotate || 0, o.rotate || 0, r));
}
function bg(a, l) {
  return a[l] !== void 0 ? a[l] : a.borderRadius;
}
const fj = /* @__PURE__ */ v1(0, 0.5, c0), dj = /* @__PURE__ */ v1(0.5, 0.95, $e);
function v1(a, l, o) {
  return (r) => r < a ? 0 : r > l ? 1 : o(/* @__PURE__ */ ds(a, l, r));
}
function hj(a, l, o) {
  const r = me(a) ? a : ll(a);
  return r.start(zd("", r, l, o)), r.animation;
}
function ys(a, l, o, r = { passive: !0 }) {
  return a.addEventListener(l, o, r), () => a.removeEventListener(l, o, r);
}
const mj = (a, l) => a.depth - l.depth;
class yj {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(l) {
    xd(this.children, l), this.isDirty = !0;
  }
  remove(l) {
    po(this.children, l), this.isDirty = !0;
  }
  forEach(l) {
    this.isDirty && this.children.sort(mj), this.isDirty = !1, this.children.forEach(l);
  }
}
function pj(a, l) {
  const o = Se.now(), r = ({ timestamp: c }) => {
    const m = c - o;
    m >= l && (Ni(r), a(m - l));
  };
  return Vt.setup(r, !0), () => Ni(r);
}
function mo(a) {
  return me(a) ? a.get() : a;
}
class vj {
  constructor() {
    this.members = [];
  }
  add(l) {
    xd(this.members, l);
    for (let o = this.members.length - 1; o >= 0; o--) {
      const r = this.members[o];
      if (r === l || r === this.lead || r === this.prevLead)
        continue;
      const c = r.instance;
      (!c || c.isConnected === !1) && !r.snapshot && (po(this.members, r), r.unmount());
    }
    l.scheduleRender();
  }
  remove(l) {
    if (po(this.members, l), l === this.prevLead && (this.prevLead = void 0), l === this.lead) {
      const o = this.members[this.members.length - 1];
      o && this.promote(o);
    }
  }
  relegate(l) {
    var o;
    for (let r = this.members.indexOf(l) - 1; r >= 0; r--) {
      const c = this.members[r];
      if (c.isPresent !== !1 && ((o = c.instance) == null ? void 0 : o.isConnected) !== !1)
        return this.promote(c), !0;
    }
    return !1;
  }
  promote(l, o) {
    var c;
    const r = this.lead;
    if (l !== r && (this.prevLead = r, this.lead = l, l.show(), r)) {
      r.updateSnapshot(), l.scheduleRender();
      const { layoutDependency: m } = r.options, { layoutDependency: h } = l.options;
      (m === void 0 || m !== h) && (l.resumeFrom = r, o && (r.preserveOpacity = !0), r.snapshot && (l.snapshot = r.snapshot, l.snapshot.latestValues = r.animationValues || r.latestValues), (c = l.root) != null && c.isUpdating && (l.isLayoutDirty = !0)), l.options.crossfade === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((l) => {
      var o, r, c, m, h;
      (r = (o = l.options).onExitComplete) == null || r.call(o), (h = (c = l.resumingFrom) == null ? void 0 : (m = c.options).onExitComplete) == null || h.call(m);
    });
  }
  scheduleRender() {
    this.members.forEach((l) => l.instance && l.scheduleRender(!1));
  }
  removeLeadSnapshot() {
    var l;
    (l = this.lead) != null && l.snapshot && (this.lead.snapshot = void 0);
  }
}
const yo = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: !0,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: !1
}, zf = ["", "X", "Y", "Z"], gj = 1e3;
let xj = 0;
function wf(a, l, o, r) {
  const { latestValues: c } = l;
  c[a] && (o[a] = c[a], l.setStaticValue(a, 0), r && (r[a] = 0));
}
function g1(a) {
  if (a.hasCheckedOptimisedAppear = !0, a.root === a)
    return;
  const { visualElement: l } = a.options;
  if (!l)
    return;
  const o = Y0(l);
  if (window.MotionHasOptimisedAnimation(o, "transform")) {
    const { layout: c, layoutId: m } = a.options;
    window.MotionCancelOptimisedAnimation(o, "transform", Vt, !(c || m));
  }
  const { parent: r } = a;
  r && !r.hasCheckedOptimisedAppear && g1(r);
}
function x1({ attachResizeListener: a, defaultParent: l, measureScroll: o, checkIsScrollRoot: r, resetTransform: c }) {
  return class {
    constructor(h = {}, y = l == null ? void 0 : l()) {
      this.id = xj++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.layoutVersion = 0, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, this.nodes.forEach(Tj), this.nodes.forEach(Mj), this.nodes.forEach(Dj), this.nodes.forEach(Ej);
      }, this.resolvedRelativeTargetAt = 0, this.linkedParentVersion = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = h, this.root = y ? y.root || y : this, this.path = y ? [...y.path, y] : [], this.parent = y, this.depth = y ? y.depth + 1 : 0;
      for (let x = 0; x < this.path.length; x++)
        this.path[x].shouldResetTransform = !0;
      this.root === this && (this.nodes = new yj());
    }
    addEventListener(h, y) {
      return this.eventHandlers.has(h) || this.eventHandlers.set(h, new Sd()), this.eventHandlers.get(h).add(y);
    }
    notifyListeners(h, ...y) {
      const x = this.eventHandlers.get(h);
      x && x.notify(...y);
    }
    hasListeners(h) {
      return this.eventHandlers.has(h);
    }
    /**
     * Lifecycles
     */
    mount(h) {
      if (this.instance)
        return;
      this.isSVG = Ld(h) && !bE(h), this.instance = h;
      const { layoutId: y, layout: x, visualElement: S } = this.options;
      if (S && !S.current && S.mount(h), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (x || y) && (this.isLayoutDirty = !0), a) {
        let p, v = 0;
        const b = () => this.root.updateBlockedByResize = !1;
        Vt.read(() => {
          v = window.innerWidth;
        }), a(h, () => {
          const A = window.innerWidth;
          A !== v && (v = A, this.root.updateBlockedByResize = !0, p && p(), p = pj(b, 250), yo.hasAnimatedSinceResize && (yo.hasAnimatedSinceResize = !1, this.nodes.forEach(jg)));
        });
      }
      y && this.root.registerSharedNode(y, this), this.options.animate !== !1 && S && (y || x) && this.addEventListener("didUpdate", ({ delta: p, hasLayoutChanged: v, hasRelativeLayoutChanged: b, layout: A }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const j = this.options.transition || S.getDefaultTransition() || _j, { onLayoutAnimationStart: _, onLayoutAnimationComplete: w } = S.getProps(), L = !this.targetLayout || !p1(this.targetLayout, A), q = !v && b;
        if (this.options.layoutRoot || this.resumeFrom || q || v && (L || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
          const X = {
            ...Rd(j, "layout"),
            onPlay: _,
            onComplete: w
          };
          (S.shouldReduceMotion || this.options.layoutRoot) && (X.delay = 0, X.type = !1), this.startAnimation(X), this.setAnimationOrigin(p, q, X.path);
        } else
          v || jg(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = A;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const h = this.getStack();
      h && h.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), Ni(this.updateProjection);
    }
    // only on the root
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
    }
    // Note: currently only running on root node
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(Oj), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: h } = this.options;
      return h && h.getProps().transformTemplate;
    }
    willUpdate(h = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && g1(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let p = 0; p < this.path.length; p++) {
        const v = this.path[p];
        v.shouldResetTransform = !0, (typeof v.latestValues.x == "string" || typeof v.latestValues.y == "string") && (v.isLayoutDirty = !0), v.updateScroll("snapshot"), v.options.layoutRoot && v.willUpdate(!1);
      }
      const { layoutId: y, layout: x } = this.options;
      if (y === void 0 && !x)
        return;
      const S = this.getTransformTemplate();
      this.prevTransformTemplateValue = S ? S(this.latestValues, "") : void 0, this.updateSnapshot(), h && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        const x = this.updateBlockedByResize;
        this.unblockUpdate(), this.updateBlockedByResize = !1, this.clearAllSnapshots(), x && this.nodes.forEach(Aj), this.nodes.forEach(Tg);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(Eg);
        return;
      }
      this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(Cj), this.nodes.forEach(Nj), this.nodes.forEach(Sj), this.nodes.forEach(bj)) : this.nodes.forEach(Eg), this.clearAllSnapshots();
      const y = Se.now();
      he.delta = Mn(0, 1e3 / 60, y - he.timestamp), he.timestamp = y, he.isProcessing = !0, jf.update.process(he), jf.preRender.process(he), jf.render.process(he), he.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, Ud.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(jj), this.sharedNodes.forEach(Rj);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, Vt.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      Vt.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !be(this.snapshot.measuredBox.x) && !be(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let x = 0; x < this.path.length; x++)
          this.path[x].updateScroll();
      const h = this.layout;
      this.layout = this.measure(!1), this.layoutVersion++, this.layoutCorrected || (this.layoutCorrected = te()), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: y } = this.options;
      y && y.notify("LayoutMeasure", this.layout.layoutBox, h ? h.layoutBox : void 0);
    }
    updateScroll(h = "measure") {
      let y = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === h && (y = !1), y && this.instance) {
        const x = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: h,
          isRoot: x,
          offset: o(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : x
        };
      }
    }
    resetTransform() {
      if (!c)
        return;
      const h = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, y = this.projectionDelta && !y1(this.projectionDelta), x = this.getTransformTemplate(), S = x ? x(this.latestValues, "") : void 0, p = S !== this.prevTransformTemplateValue;
      h && this.instance && (y || na(this.latestValues) || p) && (c(this.instance, S), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(h = !0) {
      const y = this.measurePageBox();
      let x = this.removeElementScroll(y);
      return h && (x = this.removeTransform(x)), Vj(x), {
        animationId: this.root.animationId,
        measuredBox: y,
        layoutBox: x,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      var S;
      const { visualElement: h } = this.options;
      if (!h)
        return te();
      const y = h.measureViewportBox();
      if (!(((S = this.scroll) == null ? void 0 : S.wasRoot) || this.path.some(Uj))) {
        const { scroll: p } = this.root;
        p && (jn(y.x, p.offset.x), jn(y.y, p.offset.y));
      }
      return y;
    }
    removeElementScroll(h) {
      var x;
      const y = te();
      if (sn(y, h), (x = this.scroll) != null && x.wasRoot)
        return y;
      for (let S = 0; S < this.path.length; S++) {
        const p = this.path[S], { scroll: v, options: b } = p;
        p !== this.root && v && b.layoutScroll && (v.wasRoot && sn(y, h), jn(y.x, v.offset.x), jn(y.y, v.offset.y));
      }
      return y;
    }
    applyTransform(h, y = !1, x) {
      var p, v;
      const S = x || te();
      sn(S, h);
      for (let b = 0; b < this.path.length; b++) {
        const A = this.path[b];
        !y && A.options.layoutScroll && A.scroll && A !== A.root && (jn(S.x, -A.scroll.offset.x), jn(S.y, -A.scroll.offset.y)), na(A.latestValues) && ho(S, A.latestValues, (p = A.layout) == null ? void 0 : p.layoutBox);
      }
      return na(this.latestValues) && ho(S, this.latestValues, (v = this.layout) == null ? void 0 : v.layoutBox), S;
    }
    removeTransform(h) {
      var x;
      const y = te();
      sn(y, h);
      for (let S = 0; S < this.path.length; S++) {
        const p = this.path[S];
        if (!na(p.latestValues))
          continue;
        let v;
        p.instance && (ld(p.latestValues) && p.updateSnapshot(), v = te(), sn(v, p.measurePageBox())), hg(y, p.latestValues, (x = p.snapshot) == null ? void 0 : x.layoutBox, v);
      }
      return na(this.latestValues) && hg(y, this.latestValues), y;
    }
    setTargetDelta(h) {
      this.targetDelta = h, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(h) {
      this.options = {
        ...this.options,
        ...h,
        crossfade: h.crossfade !== void 0 ? h.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== he.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(h = !1) {
      var A;
      const y = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = y.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = y.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = y.isSharedProjectionDirty);
      const x = !!this.resumingFrom || this !== y;
      if (!(h || x && this.isSharedProjectionDirty || this.isProjectionDirty || (A = this.parent) != null && A.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: p, layoutId: v } = this.options;
      if (!this.layout || !(p || v))
        return;
      this.resolvedRelativeTargetAt = he.timestamp;
      const b = this.getClosestProjectingParent();
      b && this.linkedParentVersion !== b.layoutVersion && !b.options.layoutRoot && this.removeRelativeTarget(), !this.targetDelta && !this.relativeTarget && (this.options.layoutAnchor !== !1 && b && b.layout ? this.createRelativeTarget(b, this.layout.layoutBox, b.layout.layoutBox) : this.removeRelativeTarget()), !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = te(), this.targetWithTransforms = te()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), ij(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || void 0)) : this.targetDelta ? (this.resumingFrom ? this.applyTransform(this.layout.layoutBox, !1, this.target) : sn(this.target, this.layout.layoutBox), i1(this.target, this.targetDelta)) : sn(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, this.options.layoutAnchor !== !1 && b && !!b.resumingFrom == !!this.resumingFrom && !b.options.layoutScroll && b.target && this.animationProgress !== 1 ? this.createRelativeTarget(b, this.target, b.target) : this.relativeParent = this.relativeTarget = void 0));
    }
    getClosestProjectingParent() {
      if (!(!this.parent || ld(this.parent.latestValues) || n1(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    createRelativeTarget(h, y, x) {
      this.relativeParent = h, this.linkedParentVersion = h.layoutVersion, this.forceRelativeParentToResolveTarget(), this.relativeTarget = te(), this.relativeTargetOrigin = te(), jo(this.relativeTargetOrigin, y, x, this.options.layoutAnchor || void 0), sn(this.relativeTarget, this.relativeTargetOrigin);
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      var j;
      const h = this.getLead(), y = !!this.resumingFrom || this !== h;
      let x = !0;
      if ((this.isProjectionDirty || (j = this.parent) != null && j.isProjectionDirty) && (x = !1), y && (this.isSharedProjectionDirty || this.isTransformDirty) && (x = !1), this.resolvedRelativeTargetAt === he.timestamp && (x = !1), x)
        return;
      const { layout: S, layoutId: p } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(S || p))
        return;
      sn(this.layoutCorrected, this.layout.layoutBox);
      const v = this.treeScale.x, b = this.treeScale.y;
      zE(this.layoutCorrected, this.treeScale, this.path, y), h.layout && !h.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (h.target = h.layout.layoutBox, h.targetWithTransforms = te());
      const { target: A } = h;
      if (!A) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (ug(this.prevProjectionDelta.x, this.projectionDelta.x), ug(this.prevProjectionDelta.y, this.projectionDelta.y)), cs(this.projectionDelta, this.layoutCorrected, A, this.latestValues), (this.treeScale.x !== v || this.treeScale.y !== b || !gg(this.projectionDelta.x, this.prevProjectionDelta.x) || !gg(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", A));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(h = !0) {
      var y;
      if ((y = this.options.visualElement) == null || y.scheduleRender(), h) {
        const x = this.getStack();
        x && x.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = il(), this.projectionDelta = il(), this.projectionDeltaWithTransform = il();
    }
    setAnimationOrigin(h, y = !1, x) {
      const S = this.snapshot, p = S ? S.latestValues : {}, v = { ...this.latestValues }, b = il();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !y;
      const A = te(), j = S ? S.source : void 0, _ = this.layout ? this.layout.source : void 0, w = j !== _, L = this.getStack(), q = !L || L.members.length <= 1, X = !!(w && !q && this.options.crossfade === !0 && !this.path.some(wj));
      this.animationProgress = 0;
      let Q;
      const I = x == null ? void 0 : x.interpolateProjection(h);
      this.mixTargetDelta = (ot) => {
        const K = ot / 1e3, Y = I == null ? void 0 : I(K);
        Y ? (b.x.translate = Y.x, b.x.scale = _t(h.x.scale, 1, K), b.x.origin = h.x.origin, b.x.originPoint = h.x.originPoint, b.y.translate = Y.y, b.y.scale = _t(h.y.scale, 1, K), b.y.origin = h.y.origin, b.y.originPoint = h.y.originPoint) : (Ag(b.x, h.x, K), Ag(b.y, h.y, K)), this.setTargetDelta(b), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (jo(A, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || void 0), zj(this.relativeTarget, this.relativeTargetOrigin, A, K), Q && uj(this.relativeTarget, Q) && (this.isProjectionDirty = !1), Q || (Q = te()), sn(Q, this.relativeTarget)), w && (this.animationValues = v, cj(v, p, this.latestValues, K, X, q)), Y && Y.rotate !== void 0 && (this.animationValues || (this.animationValues = v), this.animationValues.pathRotation = Y.rotate), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = K;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(h) {
      var y, x, S;
      this.notifyListeners("animationStart"), (y = this.currentAnimation) == null || y.stop(), (S = (x = this.resumingFrom) == null ? void 0 : x.currentAnimation) == null || S.stop(), this.pendingAnimation && (Ni(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = Vt.update(() => {
        yo.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = ll(0)), this.motionValue.jump(0, !1), this.currentAnimation = hj(this.motionValue, [0, 1e3], {
          ...h,
          velocity: 0,
          isSync: !0,
          onUpdate: (p) => {
            this.mixTargetDelta(p), h.onUpdate && h.onUpdate(p);
          },
          onComplete: () => {
            h.onComplete && h.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const h = this.getStack();
      h && h.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(gj), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const h = this.getLead();
      let { targetWithTransforms: y, target: x, layout: S, latestValues: p } = h;
      if (!(!y || !x || !S)) {
        if (this !== h && this.layout && S && S1(this.options.animationType, this.layout.layoutBox, S.layoutBox)) {
          x = this.target || te();
          const v = be(this.layout.layoutBox.x);
          x.x.min = h.target.x.min, x.x.max = x.x.min + v;
          const b = be(this.layout.layoutBox.y);
          x.y.min = h.target.y.min, x.y.max = x.y.min + b;
        }
        sn(y, x), ho(y, p), cs(this.projectionDeltaWithTransform, this.layoutCorrected, y, p);
      }
    }
    registerSharedNode(h, y) {
      this.sharedNodes.has(h) || this.sharedNodes.set(h, new vj()), this.sharedNodes.get(h).add(y);
      const S = y.options.initialPromotionConfig;
      y.promote({
        transition: S ? S.transition : void 0,
        preserveFollowOpacity: S && S.shouldPreserveFollowOpacity ? S.shouldPreserveFollowOpacity(y) : void 0
      });
    }
    isLead() {
      const h = this.getStack();
      return h ? h.lead === this : !0;
    }
    getLead() {
      var y;
      const { layoutId: h } = this.options;
      return h ? ((y = this.getStack()) == null ? void 0 : y.lead) || this : this;
    }
    getPrevLead() {
      var y;
      const { layoutId: h } = this.options;
      return h ? (y = this.getStack()) == null ? void 0 : y.prevLead : void 0;
    }
    getStack() {
      const { layoutId: h } = this.options;
      if (h)
        return this.root.sharedNodes.get(h);
    }
    promote({ needsReset: h, transition: y, preserveFollowOpacity: x } = {}) {
      const S = this.getStack();
      S && S.promote(this, x), h && (this.projectionDelta = void 0, this.needsReset = !0), y && this.setOptions({ transition: y });
    }
    relegate() {
      const h = this.getStack();
      return h ? h.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: h } = this.options;
      if (!h)
        return;
      let y = !1;
      const { latestValues: x } = h;
      if ((x.z || x.rotate || x.rotateX || x.rotateY || x.rotateZ || x.skewX || x.skewY) && (y = !0), !y)
        return;
      const S = {};
      x.z && wf("z", h, S, this.animationValues);
      for (let p = 0; p < zf.length; p++)
        wf(`rotate${zf[p]}`, h, S, this.animationValues), wf(`skew${zf[p]}`, h, S, this.animationValues);
      h.render();
      for (const p in S)
        h.setStaticValue(p, S[p]), this.animationValues && (this.animationValues[p] = S[p]);
      h.scheduleRender();
    }
    applyProjectionStyles(h, y) {
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible) {
        h.visibility = "hidden";
        return;
      }
      const x = this.getTransformTemplate();
      if (this.needsReset) {
        this.needsReset = !1, h.visibility = "", h.opacity = "", h.pointerEvents = mo(y == null ? void 0 : y.pointerEvents) || "", h.transform = x ? x(this.latestValues, "") : "none";
        return;
      }
      const S = this.getLead();
      if (!this.projectionDelta || !this.layout || !S.target) {
        this.options.layoutId && (h.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, h.pointerEvents = mo(y == null ? void 0 : y.pointerEvents) || ""), this.hasProjected && !na(this.latestValues) && (h.transform = x ? x({}, "") : "none", this.hasProjected = !1);
        return;
      }
      h.visibility = "";
      const p = S.animationValues || S.latestValues;
      this.applyTransformsToTarget();
      let v = oj(this.projectionDeltaWithTransform, this.treeScale, p);
      x && (v = x(p, v)), h.transform = v;
      const { x: b, y: A } = this.projectionDelta;
      h.transformOrigin = `${b.origin * 100}% ${A.origin * 100}% 0`, S.animationValues ? h.opacity = S === this ? p.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : p.opacityExit : h.opacity = S === this ? p.opacity !== void 0 ? p.opacity : "" : p.opacityExit !== void 0 ? p.opacityExit : 0;
      for (const j in ud) {
        if (p[j] === void 0)
          continue;
        const { correct: _, applyTo: w, isCSSVariable: L } = ud[j], q = v === "none" ? p[j] : _(p[j], S);
        if (w) {
          const X = w.length;
          for (let Q = 0; Q < X; Q++)
            h[w[Q]] = q;
        } else
          L ? this.options.visualElement.renderState.vars[j] = q : h[j] = q;
      }
      this.options.layoutId && (h.pointerEvents = S === this ? mo(y == null ? void 0 : y.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((h) => {
        var y;
        return (y = h.currentAnimation) == null ? void 0 : y.stop();
      }), this.root.nodes.forEach(Tg), this.root.sharedNodes.clear();
    }
  };
}
function Sj(a) {
  a.updateLayout();
}
function bj(a) {
  var o;
  const l = ((o = a.resumeFrom) == null ? void 0 : o.snapshot) || a.snapshot;
  if (a.isLead() && a.layout && l && a.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: c } = a.layout, { animationType: m } = a.options, h = l.source !== a.layout.source;
    if (m === "size")
      En((v) => {
        const b = h ? l.measuredBox[v] : l.layoutBox[v], A = be(b);
        b.min = r[v].min, b.max = b.min + A;
      });
    else if (m === "x" || m === "y") {
      const v = m === "x" ? "y" : "x";
      od(h ? l.measuredBox[v] : l.layoutBox[v], r[v]);
    } else S1(m, l.layoutBox, r) && En((v) => {
      const b = h ? l.measuredBox[v] : l.layoutBox[v], A = be(r[v]);
      b.max = b.min + A, a.relativeTarget && !a.currentAnimation && (a.isProjectionDirty = !0, a.relativeTarget[v].max = a.relativeTarget[v].min + A);
    });
    const y = il();
    cs(y, r, l.layoutBox);
    const x = il();
    h ? cs(x, a.applyTransform(c, !0), l.measuredBox) : cs(x, r, l.layoutBox);
    const S = !y1(y);
    let p = !1;
    if (!a.resumeFrom) {
      const v = a.getClosestProjectingParent();
      if (v && !v.resumeFrom) {
        const { snapshot: b, layout: A } = v;
        if (b && A) {
          const j = a.options.layoutAnchor || void 0, _ = te();
          jo(_, l.layoutBox, b.layoutBox, j);
          const w = te();
          jo(w, r, A.layoutBox, j), p1(_, w) || (p = !0), v.options.layoutRoot && (a.relativeTarget = w, a.relativeTargetOrigin = _, a.relativeParent = v);
        }
      }
    }
    a.notifyListeners("didUpdate", {
      layout: r,
      snapshot: l,
      delta: x,
      layoutDelta: y,
      hasLayoutChanged: S,
      hasRelativeLayoutChanged: p
    });
  } else if (a.isLead()) {
    const { onExitComplete: r } = a.options;
    r && r();
  }
  a.options.transition = void 0;
}
function Tj(a) {
  a.parent && (a.isProjecting() || (a.isProjectionDirty = a.parent.isProjectionDirty), a.isSharedProjectionDirty || (a.isSharedProjectionDirty = !!(a.isProjectionDirty || a.parent.isProjectionDirty || a.parent.isSharedProjectionDirty)), a.isTransformDirty || (a.isTransformDirty = a.parent.isTransformDirty));
}
function Ej(a) {
  a.isProjectionDirty = a.isSharedProjectionDirty = a.isTransformDirty = !1;
}
function jj(a) {
  a.clearSnapshot();
}
function Tg(a) {
  a.clearMeasurements();
}
function Aj(a) {
  a.isLayoutDirty = !0, a.updateLayout();
}
function Eg(a) {
  a.isLayoutDirty = !1;
}
function Cj(a) {
  a.isAnimationBlocked && a.layout && !a.isLayoutDirty && (a.snapshot = a.layout, a.isLayoutDirty = !0);
}
function Nj(a) {
  const { visualElement: l } = a.options;
  l && l.getProps().onBeforeLayoutMeasure && l.notify("BeforeLayoutMeasure"), a.resetTransform();
}
function jg(a) {
  a.finishAnimation(), a.targetDelta = a.relativeTarget = a.target = void 0, a.isProjectionDirty = !0;
}
function Mj(a) {
  a.resolveTargetDelta();
}
function Dj(a) {
  a.calcProjection();
}
function Oj(a) {
  a.resetSkewAndRotation();
}
function Rj(a) {
  a.removeLeadSnapshot();
}
function Ag(a, l, o) {
  a.translate = _t(l.translate, 0, o), a.scale = _t(l.scale, 1, o), a.origin = l.origin, a.originPoint = l.originPoint;
}
function Cg(a, l, o, r) {
  a.min = _t(l.min, o.min, r), a.max = _t(l.max, o.max, r);
}
function zj(a, l, o, r) {
  Cg(a.x, l.x, o.x, r), Cg(a.y, l.y, o.y, r);
}
function wj(a) {
  return a.animationValues && a.animationValues.opacityExit !== void 0;
}
const _j = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, Ng = (a) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(a), Mg = Ng("applewebkit/") && !Ng("chrome/") ? Math.round : $e;
function Dg(a) {
  a.min = Mg(a.min), a.max = Mg(a.max);
}
function Vj(a) {
  Dg(a.x), Dg(a.y);
}
function S1(a, l, o) {
  return a === "position" || a === "preserve-aspect" && !nj(vg(l), vg(o), 0.2);
}
function Uj(a) {
  var l;
  return a !== a.root && ((l = a.scroll) == null ? void 0 : l.wasRoot);
}
const Bj = x1({
  attachResizeListener: (a, l) => ys(a, "resize", l),
  measureScroll: () => {
    var a, l;
    return {
      x: document.documentElement.scrollLeft || ((a = document.body) == null ? void 0 : a.scrollLeft) || 0,
      y: document.documentElement.scrollTop || ((l = document.body) == null ? void 0 : l.scrollTop) || 0
    };
  },
  checkIsScrollRoot: () => !0
}), _f = {
  current: void 0
}, b1 = x1({
  measureScroll: (a) => ({
    x: a.scrollLeft,
    y: a.scrollTop
  }),
  defaultParent: () => {
    if (!_f.current) {
      const a = new Bj({});
      a.mount(window), a.setOptions({ layoutScroll: !0 }), _f.current = a;
    }
    return _f.current;
  },
  resetTransform: (a, l) => {
    a.style.transform = l !== void 0 ? l : "none";
  },
  checkIsScrollRoot: (a) => window.getComputedStyle(a).position === "fixed"
}), ps = V.createContext({
  transformPagePoint: (a) => a,
  isStatic: !1,
  reducedMotion: "never"
});
function Og(a, l) {
  if (typeof a == "function")
    return a(l);
  a != null && (a.current = l);
}
function Lj(...a) {
  return (l) => {
    let o = !1;
    const r = a.map((c) => {
      const m = Og(c, l);
      return !o && typeof m == "function" && (o = !0), m;
    });
    if (o)
      return () => {
        for (let c = 0; c < r.length; c++) {
          const m = r[c];
          typeof m == "function" ? m() : Og(a[c], null);
        }
      };
  };
}
function Hj(...a) {
  return V.useCallback(Lj(...a), a);
}
class Yj extends V.Component {
  getSnapshotBeforeUpdate(l) {
    const o = this.props.childRef.current;
    if (oo(o) && l.isPresent && !this.props.isPresent && this.props.pop !== !1) {
      const r = o.offsetParent, c = oo(r) && r.offsetWidth || 0, m = oo(r) && r.offsetHeight || 0, h = getComputedStyle(o), y = this.props.sizeRef.current;
      y.height = parseFloat(h.height), y.width = parseFloat(h.width), y.top = o.offsetTop, y.left = o.offsetLeft, y.right = c - y.width - y.left, y.bottom = m - y.height - y.top, y.direction = h.direction;
    }
    return null;
  }
  /**
   * Required with getSnapshotBeforeUpdate to stop React complaining.
   */
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
}
function qj({ children: a, isPresent: l, anchorX: o, anchorY: r, root: c, pop: m }) {
  var b;
  const h = V.useId(), y = V.useRef(null), x = V.useRef({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    direction: "ltr"
  }), { nonce: S } = V.useContext(ps), p = m !== !1 ? ((b = a.props) == null ? void 0 : b.ref) ?? (a == null ? void 0 : a.ref) : void 0, v = Hj(y, p);
  return V.useInsertionEffect(() => {
    const { width: A, height: j, top: _, left: w, right: L, bottom: q, direction: X } = x.current;
    if (l || m === !1 || !y.current || !A || !j)
      return;
    const Q = X === "rtl", I = o === "left" ? Q ? `right: ${L}` : `left: ${w}` : Q ? `left: ${w}` : `right: ${L}`, ot = r === "bottom" ? `bottom: ${q}` : `top: ${_}`;
    y.current.dataset.motionPopId = h;
    const K = document.createElement("style");
    S && (K.nonce = S);
    const Y = c ?? document.head;
    return Y.appendChild(K), K.sheet && K.sheet.insertRule(`
          [data-motion-pop-id="${h}"] {
            position: absolute !important;
            width: ${A}px !important;
            height: ${j}px !important;
            ${I}px !important;
            ${ot}px !important;
          }
        `), () => {
      var lt;
      (lt = y.current) == null || lt.removeAttribute("data-motion-pop-id"), Y.contains(K) && Y.removeChild(K);
    };
  }, [l]), f.jsx(Yj, { isPresent: l, childRef: y, sizeRef: x, pop: m, children: m === !1 ? a : V.cloneElement(a, { ref: v }) });
}
const Gj = ({ children: a, initial: l, isPresent: o, onExitComplete: r, custom: c, presenceAffectsLayout: m, mode: h, anchorX: y, anchorY: x, root: S }) => {
  const p = Oo(Xj), v = V.useId(), b = V.useRef(o), A = V.useRef(r);
  gd(() => {
    b.current = o, A.current = r;
  });
  let j = !0, _ = V.useMemo(() => (j = !1, {
    id: v,
    initial: l,
    isPresent: o,
    custom: c,
    onExitComplete: (w) => {
      p.set(w, !0);
      for (const L of p.values())
        if (!L)
          return;
      r && r();
    },
    register: (w) => (p.set(w, !1), () => {
      var L;
      p.delete(w), !b.current && !p.size && ((L = A.current) == null || L.call(A));
    })
  }), [o, p, r]);
  return m && j && (_ = { ..._ }), V.useMemo(() => {
    p.forEach((w, L) => p.set(L, !1));
  }, [o]), V.useEffect(() => {
    !o && !p.size && r && r();
  }, [o]), a = f.jsx(qj, { pop: h === "popLayout", isPresent: o, anchorX: y, anchorY: x, root: S, children: a }), f.jsx(Ro.Provider, { value: _, children: a });
};
function Xj() {
  return /* @__PURE__ */ new Map();
}
function T1(a = !0) {
  const l = V.useContext(Ro);
  if (l === null)
    return [!0, null];
  const { isPresent: o, onExitComplete: r, register: c } = l, m = V.useId();
  V.useEffect(() => {
    if (a)
      return c(m);
  }, [a]);
  const h = V.useCallback(() => a && r && r(m), [m, r, a]);
  return !o && r ? [!1, h] : [!0];
}
const io = (a) => a.key || "";
function Rg(a) {
  const l = [];
  return V.Children.forEach(a, (o) => {
    V.isValidElement(o) && l.push(o);
  }), l;
}
const zg = ({ children: a, custom: l, initial: o = !0, onExitComplete: r, presenceAffectsLayout: c = !0, mode: m = "sync", propagate: h = !1, anchorX: y = "left", anchorY: x = "top", root: S }) => {
  const [p, v] = T1(h), b = V.useMemo(() => Rg(a), [a]), A = h && !p ? [] : b.map(io), j = V.useRef(!0), _ = V.useRef(b), w = Oo(() => /* @__PURE__ */ new Map()), L = V.useRef(/* @__PURE__ */ new Set()), [q, X] = V.useState(b), [Q, I] = V.useState(b);
  gd(() => {
    j.current = !1, _.current = b;
    for (let Y = 0; Y < Q.length; Y++) {
      const lt = io(Q[Y]);
      A.includes(lt) ? (w.delete(lt), L.current.delete(lt)) : w.get(lt) !== !0 && w.set(lt, !1);
    }
  }, [Q, A.length, A.join("-")]);
  const ot = [];
  if (b !== q) {
    let Y = [...b];
    for (let lt = 0; lt < Q.length; lt++) {
      const J = Q[lt], ft = io(J);
      A.includes(ft) || (Y.splice(lt, 0, J), ot.push(J));
    }
    return m === "wait" && ot.length && (Y = ot), I(Rg(Y)), X(b), null;
  }
  const { forceRender: K } = V.useContext(vd);
  return f.jsx(f.Fragment, { children: Q.map((Y) => {
    const lt = io(Y), J = h && !p ? !1 : b === Q || A.includes(lt), ft = () => {
      if (L.current.has(lt))
        return;
      if (w.has(lt))
        L.current.add(lt), w.set(lt, !0);
      else
        return;
      let xt = !0;
      w.forEach((Ut) => {
        Ut || (xt = !1);
      }), xt && (K == null || K(), I(_.current), h && (v == null || v()), r && r());
    };
    return f.jsx(Gj, { isPresent: J, initial: !j.current || o ? void 0 : !1, custom: l, presenceAffectsLayout: c, mode: m, root: S, onExitComplete: J ? void 0 : ft, anchorX: y, anchorY: x, children: Y }, lt);
  }) });
}, E1 = V.createContext({ strict: !1 }), wg = {
  animation: [
    "animate",
    "variants",
    "whileHover",
    "whileTap",
    "exit",
    "whileInView",
    "whileFocus",
    "whileDrag"
  ],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
};
let _g = !1;
function Qj() {
  if (_g)
    return;
  const a = {};
  for (const l in wg)
    a[l] = {
      isEnabled: (o) => wg[l].some((r) => !!o[r])
    };
  W0(a), _g = !0;
}
function j1() {
  return Qj(), ME();
}
function Zj(a) {
  const l = j1();
  for (const o in a)
    l[o] = {
      ...l[o],
      ...a[o]
    };
  W0(l);
}
const Kj = /* @__PURE__ */ new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "propagate",
  "ignoreStrict",
  "viewport"
]);
function Ao(a) {
  return a.startsWith("while") || a.startsWith("drag") && a !== "draggable" || a.startsWith("layout") || a.startsWith("onTap") || a.startsWith("onPan") || a.startsWith("onLayout") || Kj.has(a);
}
let A1 = (a) => !Ao(a);
function C1(a) {
  typeof a == "function" && (A1 = (l) => l.startsWith("on") ? !Ao(l) : a(l));
}
try {
  C1(require("@emotion/is-prop-valid").default);
} catch {
}
function kj(a, l, o) {
  const r = {};
  for (const c in a)
    c === "values" && typeof a.values == "object" || me(a[c]) || (A1(c) || o === !0 && Ao(c) || !l && !Ao(c) || // If trying to use native HTML drag events, forward drag listeners
    a.draggable && c.startsWith("onDrag")) && (r[c] = a[c]);
  return r;
}
function Vg({ children: a, isValidProp: l, ...o }) {
  l && C1(l);
  const r = V.useContext(ps);
  o = { ...r, ...o }, o.transition = Od(o.transition, r.transition), o.isStatic = Oo(() => o.isStatic);
  const c = V.useMemo(() => o, [
    JSON.stringify(o.transition),
    o.transformPagePoint,
    o.reducedMotion,
    o.skipAnimations
  ]);
  return f.jsx(ps.Provider, { value: c, children: a });
}
const Vo = /* @__PURE__ */ V.createContext({});
function Jj(a, l) {
  if (_o(a)) {
    const { initial: o, animate: r } = a;
    return {
      initial: o === !1 || ms(o) ? o : void 0,
      animate: ms(r) ? r : void 0
    };
  }
  return a.inherit !== !1 ? l : {};
}
function Fj(a) {
  const { initial: l, animate: o } = Jj(a, V.useContext(Vo));
  return V.useMemo(() => ({ initial: l, animate: o }), [Ug(l), Ug(o)]);
}
function Ug(a) {
  return Array.isArray(a) ? a.join(" ") : a;
}
const Xd = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function N1(a, l, o) {
  for (const r in l)
    !me(l[r]) && !s1(r, o) && (a[r] = l[r]);
}
function Pj({ transformTemplate: a }, l) {
  return V.useMemo(() => {
    const o = Xd();
    return qd(o, l, a), Object.assign({}, o.vars, o.style);
  }, [l]);
}
function Ij(a, l) {
  const o = a.style || {}, r = {};
  return N1(r, o, a), Object.assign(r, Pj(a, l)), r;
}
function $j(a, l) {
  const o = {}, r = Ij(a, l);
  return a.drag && a.dragListener !== !1 && (o.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = a.drag === !0 ? "none" : `pan-${a.drag === "x" ? "y" : "x"}`), a.tabIndex === void 0 && (a.onTap || a.onTapStart || a.whileTap) && (o.tabIndex = 0), o.style = r, o;
}
const M1 = () => ({
  ...Xd(),
  attrs: {}
});
function Wj(a, l, o, r) {
  const c = V.useMemo(() => {
    const m = M1();
    return u1(m, l, r1(r), a.transformTemplate, a.style), {
      ...m.attrs,
      style: { ...m.style }
    };
  }, [l]);
  if (a.style) {
    const m = {};
    N1(m, a.style, a), c.style = { ...m, ...c.style };
  }
  return c;
}
const tA = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];
function Qd(a) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof a != "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    a.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!(tA.indexOf(a) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(a))
    )
  );
}
function eA(a, l, o, { latestValues: r }, c, m = !1, h) {
  const x = (h ?? Qd(a) ? Wj : $j)(l, r, c, a), S = kj(l, typeof a == "string", m), p = a !== V.Fragment ? { ...S, ...x, ref: o } : {}, { children: v } = l, b = V.useMemo(() => me(v) ? v.get() : v, [v]);
  return V.createElement(a, {
    ...p,
    children: b
  });
}
function nA({ scrapeMotionValuesFromProps: a, createRenderState: l }, o, r, c) {
  return {
    latestValues: iA(o, r, c, a),
    renderState: l()
  };
}
function iA(a, l, o, r) {
  const c = {}, m = r(a, {});
  for (const b in m)
    c[b] = mo(m[b]);
  let { initial: h, animate: y } = a;
  const x = _o(a), S = I0(a);
  l && S && !x && a.inherit !== !1 && (h === void 0 && (h = l.initial), y === void 0 && (y = l.animate));
  let p = o ? o.initial === !1 : !1;
  p = p || h === !1;
  const v = p ? y : h;
  if (v && typeof v != "boolean" && !wo(v)) {
    const b = Array.isArray(v) ? v : [v];
    for (let A = 0; A < b.length; A++) {
      const j = wd(a, b[A]);
      if (j) {
        const { transitionEnd: _, transition: w, ...L } = j;
        for (const q in L) {
          let X = L[q];
          if (Array.isArray(X)) {
            const Q = p ? X.length - 1 : 0;
            X = X[Q];
          }
          X !== null && (c[q] = X);
        }
        for (const q in _)
          c[q] = _[q];
      }
    }
  }
  return c;
}
const D1 = (a) => (l, o) => {
  const r = V.useContext(Vo), c = V.useContext(Ro), m = () => nA(a, l, r, c);
  return o ? m() : Oo(m);
}, aA = /* @__PURE__ */ D1({
  scrapeMotionValuesFromProps: Gd,
  createRenderState: Xd
}), lA = /* @__PURE__ */ D1({
  scrapeMotionValuesFromProps: c1,
  createRenderState: M1
}), sA = Symbol.for("motionComponentSymbol");
function uA(a, l, o) {
  const r = V.useRef(o);
  V.useInsertionEffect(() => {
    r.current = o;
  });
  const c = V.useRef(null);
  return V.useCallback((m) => {
    var y;
    m && ((y = a.onMount) == null || y.call(a, m)), l && (m ? l.mount(m) : l.unmount());
    const h = r.current;
    if (typeof h == "function")
      if (m) {
        const x = h(m);
        typeof x == "function" && (c.current = x);
      } else c.current ? (c.current(), c.current = null) : h(m);
    else h && (h.current = m);
  }, [l]);
}
const O1 = V.createContext({});
function tl(a) {
  return a && typeof a == "object" && Object.prototype.hasOwnProperty.call(a, "current");
}
function oA(a, l, o, r, c, m) {
  var X, Q;
  const { visualElement: h } = V.useContext(Vo), y = V.useContext(E1), x = V.useContext(Ro), S = V.useContext(ps), p = S.reducedMotion, v = S.skipAnimations, b = V.useRef(null), A = V.useRef(!1);
  r = r || y.renderer, !b.current && r && (b.current = r(a, {
    visualState: l,
    parent: h,
    props: o,
    presenceContext: x,
    blockInitialAnimation: x ? x.initial === !1 : !1,
    reducedMotionConfig: p,
    skipAnimations: v,
    isSVG: m
  }), A.current && b.current && (b.current.manuallyAnimateOnMount = !0));
  const j = b.current, _ = V.useContext(O1);
  j && !j.projection && c && (j.type === "html" || j.type === "svg") && rA(b.current, o, c, _);
  const w = V.useRef(!1);
  V.useInsertionEffect(() => {
    j && w.current && j.update(o, x);
  });
  const L = o[H0], q = V.useRef(!!L && typeof window < "u" && !((X = window.MotionHandoffIsComplete) != null && X.call(window, L)) && ((Q = window.MotionHasOptimisedAnimation) == null ? void 0 : Q.call(window, L)));
  return gd(() => {
    A.current = !0, j && (w.current = !0, window.MotionIsMounted = !0, j.updateFeatures(), j.scheduleRenderMicrotask(), q.current && j.animationState && j.animationState.animateChanges());
  }), V.useEffect(() => {
    j && (!q.current && j.animationState && j.animationState.animateChanges(), q.current && (queueMicrotask(() => {
      var I;
      (I = window.MotionHandoffMarkAsComplete) == null || I.call(window, L);
    }), q.current = !1), j.enteringChildren = void 0);
  }), j;
}
function rA(a, l, o, r) {
  const { layoutId: c, layout: m, drag: h, dragConstraints: y, layoutScroll: x, layoutRoot: S, layoutAnchor: p, layoutCrossfade: v } = l;
  a.projection = new o(a.latestValues, l["data-framer-portal-id"] ? void 0 : R1(a.parent)), a.projection.setOptions({
    layoutId: c,
    layout: m,
    alwaysMeasureLayout: !!h || y && tl(y),
    visualElement: a,
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof m == "string" ? m : "both",
    initialPromotionConfig: r,
    crossfade: v,
    layoutScroll: x,
    layoutRoot: S,
    layoutAnchor: p
  });
}
function R1(a) {
  if (a)
    return a.options.allowProjection !== !1 ? a.projection : R1(a.parent);
}
function Vf(a, { forwardMotionProps: l = !1, type: o } = {}, r, c) {
  r && Zj(r);
  const m = o ? o === "svg" : Qd(a), h = m ? lA : aA;
  function y(S, p) {
    let v;
    const b = {
      ...V.useContext(ps),
      ...S,
      layoutId: cA(S)
    }, { isStatic: A } = b, j = Fj(S), _ = h(S, A);
    if (!A && typeof window < "u") {
      fA();
      const w = dA(b);
      v = w.MeasureLayout, j.visualElement = oA(a, _, b, c, w.ProjectionNode, m);
    }
    return f.jsxs(Vo.Provider, { value: j, children: [v && j.visualElement ? f.jsx(v, { visualElement: j.visualElement, ...b }) : null, eA(a, S, uA(_, j.visualElement, p), _, A, l, m)] });
  }
  y.displayName = `motion.${typeof a == "string" ? a : `create(${a.displayName ?? a.name ?? ""})`}`;
  const x = V.forwardRef(y);
  return x[sA] = a, x;
}
function cA({ layoutId: a }) {
  const l = V.useContext(vd).id;
  return l && a !== void 0 ? l + "-" + a : a;
}
function fA(a, l) {
  V.useContext(E1).strict;
}
function dA(a) {
  const l = j1(), { drag: o, layout: r } = l;
  if (!o && !r)
    return {};
  const c = { ...o, ...r };
  return {
    MeasureLayout: o != null && o.isEnabled(a) || r != null && r.isEnabled(a) ? c.MeasureLayout : void 0,
    ProjectionNode: c.ProjectionNode
  };
}
function hA(a, l) {
  if (typeof Proxy > "u")
    return Vf;
  const o = /* @__PURE__ */ new Map(), r = (m, h) => Vf(m, h, a, l), c = (m, h) => r(m, h);
  return new Proxy(c, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (m, h) => h === "create" ? r : (o.has(h) || o.set(h, Vf(h, void 0, a, l)), o.get(h))
  });
}
const mA = (a, l) => l.isSVG ?? Qd(a) ? new ZE(l) : new HE(l, {
  allowProjection: a !== V.Fragment
});
class yA extends Di {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(l) {
    super(l), l.animationState || (l.animationState = PE(l));
  }
  updateAnimationControlsSubscription() {
    const { animate: l } = this.node.getProps();
    wo(l) && (this.unmountControls = l.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: l } = this.node.getProps(), { animate: o } = this.node.prevProps || {};
    l !== o && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var l;
    this.node.animationState.reset(), (l = this.unmountControls) == null || l.call(this);
  }
}
let pA = 0;
class vA extends Di {
  constructor() {
    super(...arguments), this.id = pA++, this.isExitComplete = !1;
  }
  update() {
    var m;
    if (!this.node.presenceContext)
      return;
    const { isPresent: l, onExitComplete: o } = this.node.presenceContext, { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || l === r)
      return;
    if (l && r === !1) {
      if (this.isExitComplete) {
        const { initial: h, custom: y } = this.node.getProps();
        if (typeof h == "string" || typeof h == "object" && h !== null && !Array.isArray(h)) {
          const x = sa(this.node, h, y);
          if (x) {
            const { transition: S, transitionEnd: p, ...v } = x;
            for (const b in v)
              (m = this.node.getValue(b)) == null || m.jump(v[b]);
          }
        }
        this.node.animationState.reset(), this.node.animationState.animateChanges();
      } else
        this.node.animationState.setActive("exit", !1);
      this.isExitComplete = !1;
      return;
    }
    const c = this.node.animationState.setActive("exit", !l);
    o && !l && c.then(() => {
      this.isExitComplete = !0, o(this.id);
    });
  }
  mount() {
    const { register: l, onExitComplete: o } = this.node.presenceContext || {};
    o && o(this.id), l && (this.unmount = l(this.id));
  }
  unmount() {
  }
}
const gA = {
  animation: {
    Feature: yA
  },
  exit: {
    Feature: vA
  }
};
function Ts(a) {
  return {
    point: {
      x: a.pageX,
      y: a.pageY
    }
  };
}
const xA = (a) => (l) => Bd(l) && a(l, Ts(l));
function fs(a, l, o, r) {
  return ys(a, l, xA(o), r);
}
const z1 = ({ current: a }) => a ? a.ownerDocument.defaultView : null, Bg = (a, l) => Math.abs(a - l);
function SA(a, l) {
  const o = Bg(a.x, l.x), r = Bg(a.y, l.y);
  return Math.sqrt(o ** 2 + r ** 2);
}
const Lg = /* @__PURE__ */ new Set(["auto", "scroll"]);
class w1 {
  constructor(l, o, { transformPagePoint: r, contextWindow: c = window, dragSnapToOrigin: m = !1, distanceThreshold: h = 3, element: y } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.lastRawMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.scrollPositions = /* @__PURE__ */ new Map(), this.removeScrollListeners = null, this.onElementScroll = (j) => {
      this.handleScroll(j.target);
    }, this.onWindowScroll = () => {
      this.handleScroll(window);
    }, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      this.lastRawMoveEventInfo && (this.lastMoveEventInfo = ao(this.lastRawMoveEventInfo, this.transformPagePoint));
      const j = Uf(this.lastMoveEventInfo, this.history), _ = this.startEvent !== null, w = SA(j.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
      if (!_ && !w)
        return;
      const { point: L } = j, { timestamp: q } = he;
      this.history.push({ ...L, timestamp: q });
      const { onStart: X, onMove: Q } = this.handlers;
      _ || (X && X(this.lastMoveEvent, j), this.startEvent = this.lastMoveEvent), Q && Q(this.lastMoveEvent, j);
    }, this.handlePointerMove = (j, _) => {
      this.lastMoveEvent = j, this.lastRawMoveEventInfo = _, this.lastMoveEventInfo = ao(_, this.transformPagePoint), Vt.update(this.updatePoint, !0);
    }, this.handlePointerUp = (j, _) => {
      this.end();
      const { onEnd: w, onSessionEnd: L, resumeAnimation: q } = this.handlers;
      if ((this.dragSnapToOrigin || !this.startEvent) && q && q(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const X = Uf(j.type === "pointercancel" ? this.lastMoveEventInfo : ao(_, this.transformPagePoint), this.history);
      this.startEvent && w && w(j, X), L && L(j, X);
    }, !Bd(l))
      return;
    this.dragSnapToOrigin = m, this.handlers = o, this.transformPagePoint = r, this.distanceThreshold = h, this.contextWindow = c || window;
    const x = Ts(l), S = ao(x, this.transformPagePoint), { point: p } = S, { timestamp: v } = he;
    this.history = [{ ...p, timestamp: v }];
    const { onSessionStart: b } = o;
    b && b(l, Uf(S, this.history));
    const A = { passive: !0, capture: !0 };
    this.removeListeners = xs(fs(this.contextWindow, "pointermove", this.handlePointerMove, A), fs(this.contextWindow, "pointerup", this.handlePointerUp, A), fs(this.contextWindow, "pointercancel", this.handlePointerUp, A)), y && this.startScrollTracking(y);
  }
  /**
   * Start tracking scroll on ancestors and window.
   */
  startScrollTracking(l) {
    let o = l.parentElement;
    for (; o; ) {
      const r = getComputedStyle(o);
      (Lg.has(r.overflowX) || Lg.has(r.overflowY)) && this.scrollPositions.set(o, {
        x: o.scrollLeft,
        y: o.scrollTop
      }), o = o.parentElement;
    }
    this.scrollPositions.set(window, {
      x: window.scrollX,
      y: window.scrollY
    }), window.addEventListener("scroll", this.onElementScroll, {
      capture: !0
    }), window.addEventListener("scroll", this.onWindowScroll), this.removeScrollListeners = () => {
      window.removeEventListener("scroll", this.onElementScroll, {
        capture: !0
      }), window.removeEventListener("scroll", this.onWindowScroll);
    };
  }
  /**
   * Handle scroll compensation during drag.
   *
   * For element scroll: adjusts history origin since pageX/pageY doesn't change.
   * For window scroll: adjusts lastMoveEventInfo since pageX/pageY would change.
   */
  handleScroll(l) {
    const o = this.scrollPositions.get(l);
    if (!o)
      return;
    const r = l === window, c = r ? { x: window.scrollX, y: window.scrollY } : {
      x: l.scrollLeft,
      y: l.scrollTop
    }, m = { x: c.x - o.x, y: c.y - o.y };
    m.x === 0 && m.y === 0 || (r ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += m.x, this.lastMoveEventInfo.point.y += m.y) : this.history.length > 0 && (this.history[0].x -= m.x, this.history[0].y -= m.y), this.scrollPositions.set(l, c), Vt.update(this.updatePoint, !0));
  }
  updateHandlers(l) {
    this.handlers = l;
  }
  end() {
    this.removeListeners && this.removeListeners(), this.removeScrollListeners && this.removeScrollListeners(), this.scrollPositions.clear(), Ni(this.updatePoint);
  }
}
function ao(a, l) {
  return l ? { point: l(a.point) } : a;
}
function Hg(a, l) {
  return { x: a.x - l.x, y: a.y - l.y };
}
function Uf({ point: a }, l) {
  return {
    point: a,
    delta: Hg(a, _1(l)),
    offset: Hg(a, bA(l)),
    velocity: TA(l, 0.1)
  };
}
function bA(a) {
  return a[0];
}
function _1(a) {
  return a[a.length - 1];
}
function TA(a, l) {
  if (a.length < 2)
    return { x: 0, y: 0 };
  let o = a.length - 1, r = null;
  const c = _1(a);
  for (; o >= 0 && (r = a[o], !(c.timestamp - r.timestamp > /* @__PURE__ */ De(l))); )
    o--;
  if (!r)
    return { x: 0, y: 0 };
  r === a[0] && a.length > 2 && c.timestamp - r.timestamp > /* @__PURE__ */ De(l) * 2 && (r = a[1]);
  const m = /* @__PURE__ */ Ie(c.timestamp - r.timestamp);
  if (m === 0)
    return { x: 0, y: 0 };
  const h = {
    x: (c.x - r.x) / m,
    y: (c.y - r.y) / m
  };
  return h.x === 1 / 0 && (h.x = 0), h.y === 1 / 0 && (h.y = 0), h;
}
function EA(a, { min: l, max: o }, r) {
  return l !== void 0 && a < l ? a = r ? _t(l, a, r.min) : Math.max(a, l) : o !== void 0 && a > o && (a = r ? _t(o, a, r.max) : Math.min(a, o)), a;
}
function Yg(a, l, o) {
  return {
    min: l !== void 0 ? a.min + l : void 0,
    max: o !== void 0 ? a.max + o - (a.max - a.min) : void 0
  };
}
function jA(a, { top: l, left: o, bottom: r, right: c }) {
  return {
    x: Yg(a.x, o, c),
    y: Yg(a.y, l, r)
  };
}
function qg(a, l) {
  let o = l.min - a.min, r = l.max - a.max;
  return l.max - l.min < a.max - a.min && ([o, r] = [r, o]), { min: o, max: r };
}
function AA(a, l) {
  return {
    x: qg(a.x, l.x),
    y: qg(a.y, l.y)
  };
}
function CA(a, l) {
  let o = 0.5;
  const r = be(a), c = be(l);
  return c > r ? o = /* @__PURE__ */ ds(l.min, l.max - r, a.min) : r > c && (o = /* @__PURE__ */ ds(a.min, a.max - c, l.min)), Mn(0, 1, o);
}
function NA(a, l) {
  const o = {};
  return l.min !== void 0 && (o.min = l.min - a.min), l.max !== void 0 && (o.max = l.max - a.min), o;
}
const rd = 0.35;
function MA(a = rd) {
  return a === !1 ? a = 0 : a === !0 && (a = rd), {
    x: Gg(a, "left", "right"),
    y: Gg(a, "top", "bottom")
  };
}
function Gg(a, l, o) {
  return {
    min: Xg(a, l),
    max: Xg(a, o)
  };
}
function Xg(a, l) {
  return typeof a == "number" ? a : a[l] || 0;
}
const DA = /* @__PURE__ */ new WeakMap();
class OA {
  constructor(l) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = te(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = l;
  }
  start(l, { snapToCursor: o = !1, distanceThreshold: r } = {}) {
    const { presenceContext: c } = this.visualElement;
    if (c && c.isPresent === !1)
      return;
    const m = (v) => {
      o && this.snapToCursor(Ts(v).point), this.stopAnimation();
    }, h = (v, b) => {
      const { drag: A, dragPropagation: j, onDragStart: _ } = this.getProps();
      if (A && !j && (this.openDragLock && this.openDragLock(), this.openDragLock = aE(A), !this.openDragLock))
        return;
      this.latestPointerEvent = v, this.latestPanInfo = b, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), En((L) => {
        let q = this.getAxisMotionValue(L).get() || 0;
        if (Cn.test(q)) {
          const { projection: X } = this.visualElement;
          if (X && X.layout) {
            const Q = X.layout.layoutBox[L];
            Q && (q = be(Q) * (parseFloat(q) / 100));
          }
        }
        this.originPoint[L] = q;
      }), _ && Vt.update(() => _(v, b), !1, !0), Wf(this.visualElement, "transform");
      const { animationState: w } = this.visualElement;
      w && w.setActive("whileDrag", !0);
    }, y = (v, b) => {
      this.latestPointerEvent = v, this.latestPanInfo = b;
      const { dragPropagation: A, dragDirectionLock: j, onDirectionLock: _, onDrag: w } = this.getProps();
      if (!A && !this.openDragLock)
        return;
      const { offset: L } = b;
      if (j && this.currentDirection === null) {
        this.currentDirection = zA(L), this.currentDirection !== null && _ && _(this.currentDirection);
        return;
      }
      this.updateAxis("x", b.point, L), this.updateAxis("y", b.point, L), this.visualElement.render(), w && Vt.update(() => w(v, b), !1, !0);
    }, x = (v, b) => {
      this.latestPointerEvent = v, this.latestPanInfo = b, this.stop(v, b), this.latestPointerEvent = null, this.latestPanInfo = null;
    }, S = () => {
      const { dragSnapToOrigin: v } = this.getProps();
      (v || this.constraints) && this.startAnimation({ x: 0, y: 0 });
    }, { dragSnapToOrigin: p } = this.getProps();
    this.panSession = new w1(l, {
      onSessionStart: m,
      onStart: h,
      onMove: y,
      onSessionEnd: x,
      resumeAnimation: S
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: p,
      distanceThreshold: r,
      contextWindow: z1(this.visualElement),
      element: this.visualElement.current
    });
  }
  /**
   * @internal
   */
  stop(l, o) {
    const r = l || this.latestPointerEvent, c = o || this.latestPanInfo, m = this.isDragging;
    if (this.cancel(), !m || !c || !r)
      return;
    const { velocity: h } = c;
    this.startAnimation(h);
    const { onDragEnd: y } = this.getProps();
    y && Vt.postRender(() => y(r, c));
  }
  /**
   * @internal
   */
  cancel() {
    this.isDragging = !1;
    const { projection: l, animationState: o } = this.visualElement;
    l && (l.isAnimationBlocked = !1), this.endPanSession();
    const { dragPropagation: r } = this.getProps();
    !r && this.openDragLock && (this.openDragLock(), this.openDragLock = null), o && o.setActive("whileDrag", !1);
  }
  /**
   * Clean up the pan session without modifying other drag state.
   * This is used during unmount to ensure event listeners are removed
   * without affecting projection animations or drag locks.
   * @internal
   */
  endPanSession() {
    this.panSession && this.panSession.end(), this.panSession = void 0;
  }
  updateAxis(l, o, r) {
    const { drag: c } = this.getProps();
    if (!r || !lo(l, c, this.currentDirection))
      return;
    const m = this.getAxisMotionValue(l);
    let h = this.originPoint[l] + r[l];
    this.constraints && this.constraints[l] && (h = EA(h, this.constraints[l], this.elastic[l])), m.set(h);
  }
  resolveConstraints() {
    var m;
    const { dragConstraints: l, dragElastic: o } = this.getProps(), r = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (m = this.visualElement.projection) == null ? void 0 : m.layout, c = this.constraints;
    l && tl(l) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : l && r ? this.constraints = jA(r.layoutBox, l) : this.constraints = !1, this.elastic = MA(o), c !== this.constraints && !tl(l) && r && this.constraints && !this.hasMutatedConstraints && En((h) => {
      this.constraints !== !1 && this.getAxisMotionValue(h) && (this.constraints[h] = NA(r.layoutBox[h], this.constraints[h]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: l, onMeasureDragConstraints: o } = this.getProps();
    if (!l || !tl(l))
      return !1;
    const r = l.current;
    Ai(r !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.", "drag-constraints-ref");
    const { projection: c } = this.visualElement;
    if (!c || !c.layout)
      return !1;
    c.root && (c.root.scroll = void 0, c.root.updateScroll());
    const m = wE(r, c.root, this.visualElement.getTransformPagePoint());
    let h = AA(c.layout.layoutBox, m);
    if (o) {
      const y = o(OE(h));
      this.hasMutatedConstraints = !!y, y && (h = e1(y));
    }
    return h;
  }
  startAnimation(l) {
    const { drag: o, dragMomentum: r, dragElastic: c, dragTransition: m, dragSnapToOrigin: h, onDragTransitionEnd: y } = this.getProps(), x = this.constraints || {}, S = En((p) => {
      if (!lo(p, o, this.currentDirection))
        return;
      let v = x && x[p] || {};
      (h === !0 || h === p) && (v = { min: 0, max: 0 });
      const b = c ? 200 : 1e6, A = c ? 40 : 1e7, j = {
        type: "inertia",
        velocity: r ? l[p] : 0,
        bounceStiffness: b,
        bounceDamping: A,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...m,
        ...v
      };
      return this.startAxisValueAnimation(p, j);
    });
    return Promise.all(S).then(y);
  }
  startAxisValueAnimation(l, o) {
    const r = this.getAxisMotionValue(l);
    return Wf(this.visualElement, l), r.start(zd(l, r, 0, o, this.visualElement, !1));
  }
  stopAnimation() {
    En((l) => this.getAxisMotionValue(l).stop());
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(l) {
    const o = `_drag${l.toUpperCase()}`, c = this.visualElement.getProps()[o];
    return c || this.visualElement.getValue(l, this.visualElement.latestValues[l] ?? 0);
  }
  snapToCursor(l) {
    En((o) => {
      const { drag: r } = this.getProps();
      if (!lo(o, r, this.currentDirection))
        return;
      const { projection: c } = this.visualElement, m = this.getAxisMotionValue(o);
      if (c && c.layout) {
        const { min: h, max: y } = c.layout.layoutBox[o], x = m.get() || 0;
        m.set(l[o] - _t(h, y, 0.5) + x);
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: l, dragConstraints: o } = this.getProps(), { projection: r } = this.visualElement;
    if (!tl(o) || !r || !this.constraints)
      return;
    this.stopAnimation();
    const c = { x: 0, y: 0 };
    En((h) => {
      const y = this.getAxisMotionValue(h);
      if (y && this.constraints !== !1) {
        const x = y.get();
        c[h] = CA({ min: x, max: x }, this.constraints[h]);
      }
    });
    const { transformTemplate: m } = this.visualElement.getProps();
    this.visualElement.current.style.transform = m ? m({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.constraints = !1, this.resolveConstraints(), En((h) => {
      if (!lo(h, l, null))
        return;
      const y = this.getAxisMotionValue(h), { min: x, max: S } = this.constraints[h];
      y.set(_t(x, S, c[h]));
    }), this.visualElement.render();
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    DA.set(this.visualElement, this);
    const l = this.visualElement.current, o = fs(l, "pointerdown", (S) => {
      const { drag: p, dragListener: v = !0 } = this.getProps(), b = S.target, A = b !== l && cE(b);
      p && v && !A && this.start(S);
    });
    let r;
    const c = () => {
      const { dragConstraints: S } = this.getProps();
      tl(S) && S.current && (this.constraints = this.resolveRefConstraints(), r || (r = RA(l, S.current, () => this.scalePositionWithinConstraints())));
    }, { projection: m } = this.visualElement, h = m.addEventListener("measure", c);
    m && !m.layout && (m.root && m.root.updateScroll(), m.updateLayout()), Vt.read(c);
    const y = ys(window, "resize", () => this.scalePositionWithinConstraints()), x = m.addEventListener("didUpdate", (({ delta: S, hasLayoutChanged: p }) => {
      this.isDragging && p && (En((v) => {
        const b = this.getAxisMotionValue(v);
        b && (this.originPoint[v] += S[v].translate, b.set(b.get() + S[v].translate));
      }), this.visualElement.render());
    }));
    return () => {
      y(), o(), h(), x && x(), r && r();
    };
  }
  getProps() {
    const l = this.visualElement.getProps(), { drag: o = !1, dragDirectionLock: r = !1, dragPropagation: c = !1, dragConstraints: m = !1, dragElastic: h = rd, dragMomentum: y = !0 } = l;
    return {
      ...l,
      drag: o,
      dragDirectionLock: r,
      dragPropagation: c,
      dragConstraints: m,
      dragElastic: h,
      dragMomentum: y
    };
  }
}
function Qg(a) {
  let l = !0;
  return () => {
    if (l) {
      l = !1;
      return;
    }
    a();
  };
}
function RA(a, l, o) {
  const r = Fv(a, Qg(o)), c = Fv(l, Qg(o));
  return () => {
    r(), c();
  };
}
function lo(a, l, o) {
  return (l === !0 || l === a) && (o === null || o === a);
}
function zA(a, l = 10) {
  let o = null;
  return Math.abs(a.y) > l ? o = "y" : Math.abs(a.x) > l && (o = "x"), o;
}
class wA extends Di {
  constructor(l) {
    super(l), this.removeGroupControls = $e, this.removeListeners = $e, this.controls = new OA(l);
  }
  mount() {
    const { dragControls: l } = this.node.getProps();
    l && (this.removeGroupControls = l.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || $e;
  }
  update() {
    const { dragControls: l } = this.node.getProps(), { dragControls: o } = this.node.prevProps || {};
    l !== o && (this.removeGroupControls(), l && (this.removeGroupControls = l.subscribe(this.controls)));
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners(), this.controls.isDragging || this.controls.endPanSession();
  }
}
const Bf = (a) => (l, o) => {
  a && Vt.update(() => a(l, o), !1, !0);
};
class _A extends Di {
  constructor() {
    super(...arguments), this.removePointerDownListener = $e;
  }
  onPointerDown(l) {
    this.session = new w1(l, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: z1(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: l, onPanStart: o, onPan: r, onPanEnd: c } = this.node.getProps();
    return {
      onSessionStart: Bf(l),
      onStart: Bf(o),
      onMove: Bf(r),
      onEnd: (m, h) => {
        delete this.session, c && Vt.postRender(() => c(m, h));
      }
    };
  }
  mount() {
    this.removePointerDownListener = fs(this.node.current, "pointerdown", (l) => this.onPointerDown(l));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
let Lf = !1;
class VA extends V.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: l, layoutGroup: o, switchLayoutGroup: r, layoutId: c } = this.props, { projection: m } = l;
    m && (o.group && o.group.add(m), r && r.register && c && r.register(m), Lf && m.root.didUpdate(), m.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), m.setOptions({
      ...m.options,
      layoutDependency: this.props.layoutDependency,
      onExitComplete: () => this.safeToRemove()
    })), yo.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(l) {
    const { layoutDependency: o, visualElement: r, drag: c, isPresent: m } = this.props, { projection: h } = r;
    return h && (h.isPresent = m, l.layoutDependency !== o && h.setOptions({
      ...h.options,
      layoutDependency: o
    }), Lf = !0, c || l.layoutDependency !== o || o === void 0 || l.isPresent !== m ? h.willUpdate() : this.safeToRemove(), l.isPresent !== m && (m ? h.promote() : h.relegate() || Vt.postRender(() => {
      const y = h.getStack();
      (!y || !y.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { visualElement: l, layoutAnchor: o } = this.props, { projection: r } = l;
    r && (r.options.layoutAnchor = o, r.root.didUpdate(), Ud.postRender(() => {
      !r.currentAnimation && r.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: l, layoutGroup: o, switchLayoutGroup: r } = this.props, { projection: c } = l;
    Lf = !0, c && (c.scheduleCheckAfterUnmount(), o && o.group && o.group.remove(c), r && r.deregister && r.deregister(c));
  }
  safeToRemove() {
    const { safeToRemove: l } = this.props;
    l && l();
  }
  render() {
    return null;
  }
}
function V1(a) {
  const [l, o] = T1(), r = V.useContext(vd);
  return f.jsx(VA, { ...a, layoutGroup: r, switchLayoutGroup: V.useContext(O1), isPresent: l, safeToRemove: o });
}
const UA = {
  pan: {
    Feature: _A
  },
  drag: {
    Feature: wA,
    ProjectionNode: b1,
    MeasureLayout: V1
  }
};
function Zg(a, l, o) {
  const { props: r } = a;
  a.animationState && r.whileHover && a.animationState.setActive("whileHover", o === "Start");
  const c = "onHover" + o, m = r[c];
  m && Vt.postRender(() => m(l, Ts(l)));
}
class BA extends Di {
  mount() {
    const { current: l } = this.node;
    l && (this.unmount = sE(l, (o, r) => (Zg(this.node, r, "Start"), (c) => Zg(this.node, c, "End"))));
  }
  unmount() {
  }
}
class LA extends Di {
  constructor() {
    super(...arguments), this.isActive = !1;
  }
  onFocus() {
    let l = !1;
    try {
      l = this.node.current.matches(":focus-visible");
    } catch {
      l = !0;
    }
    !l || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
  }
  mount() {
    this.unmount = xs(ys(this.node.current, "focus", () => this.onFocus()), ys(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function Kg(a, l, o) {
  const { props: r } = a;
  if (a.current instanceof HTMLButtonElement && a.current.disabled)
    return;
  a.animationState && r.whileTap && a.animationState.setActive("whileTap", o === "Start");
  const c = "onTap" + (o === "End" ? "" : o), m = r[c];
  m && Vt.postRender(() => m(l, Ts(l)));
}
class HA extends Di {
  mount() {
    const { current: l } = this.node;
    if (!l)
      return;
    const { globalTapTarget: o, propagate: r } = this.node.props;
    this.unmount = dE(l, (c, m) => (Kg(this.node, m, "Start"), (h, { success: y }) => Kg(this.node, h, y ? "End" : "Cancel")), {
      useGlobalTarget: o,
      stopPropagation: (r == null ? void 0 : r.tap) === !1
    });
  }
  unmount() {
  }
}
const cd = /* @__PURE__ */ new WeakMap(), Hf = /* @__PURE__ */ new WeakMap(), YA = (a) => {
  const l = cd.get(a.target);
  l && l(a);
}, qA = (a) => {
  a.forEach(YA);
};
function GA({ root: a, ...l }) {
  const o = a || document;
  Hf.has(o) || Hf.set(o, {});
  const r = Hf.get(o), c = JSON.stringify(l);
  return r[c] || (r[c] = new IntersectionObserver(qA, { root: a, ...l })), r[c];
}
function XA(a, l, o) {
  const r = GA(l);
  return cd.set(a, o), r.observe(a), () => {
    cd.delete(a), r.unobserve(a);
  };
}
const QA = {
  some: 0,
  all: 1
};
class ZA extends Di {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    var x;
    (x = this.stopObserver) == null || x.call(this);
    const { viewport: l = {} } = this.node.getProps(), { root: o, margin: r, amount: c = "some", once: m } = l, h = {
      root: o ? o.current : void 0,
      rootMargin: r,
      threshold: typeof c == "number" ? c : QA[c]
    }, y = (S) => {
      const { isIntersecting: p } = S;
      if (this.isInView === p || (this.isInView = p, m && !p && this.hasEnteredView))
        return;
      p && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", p);
      const { onViewportEnter: v, onViewportLeave: b } = this.node.getProps(), A = p ? v : b;
      A && A(S);
    };
    this.stopObserver = XA(this.node.current, h, y);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: l, prevProps: o } = this.node;
    ["amount", "margin", "root"].some(KA(l, o)) && this.startObserver();
  }
  unmount() {
    var l;
    (l = this.stopObserver) == null || l.call(this), this.hasEnteredView = !1, this.isInView = !1;
  }
}
function KA({ viewport: a = {} }, { viewport: l = {} } = {}) {
  return (o) => a[o] !== l[o];
}
const kA = {
  inView: {
    Feature: ZA
  },
  tap: {
    Feature: HA
  },
  focus: {
    Feature: LA
  },
  hover: {
    Feature: BA
  }
}, JA = {
  layout: {
    ProjectionNode: b1,
    MeasureLayout: V1
  }
}, FA = {
  ...gA,
  ...kA,
  ...UA,
  ...JA
}, PA = /* @__PURE__ */ hA(FA, mA), Me = PA;
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const IA = (a) => a.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), U1 = (...a) => a.filter((l, o, r) => !!l && l.trim() !== "" && r.indexOf(l) === o).join(" ").trim();
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var $A = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const WA = V.forwardRef(
  ({
    color: a = "currentColor",
    size: l = 24,
    strokeWidth: o = 2,
    absoluteStrokeWidth: r,
    className: c = "",
    children: m,
    iconNode: h,
    ...y
  }, x) => V.createElement(
    "svg",
    {
      ref: x,
      ...$A,
      width: l,
      height: l,
      stroke: a,
      strokeWidth: r ? Number(o) * 24 / Number(l) : o,
      className: U1("lucide", c),
      ...y
    },
    [
      ...h.map(([S, p]) => V.createElement(S, p)),
      ...Array.isArray(m) ? m : [m]
    ]
  )
);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zt = (a, l) => {
  const o = V.forwardRef(
    ({ className: r, ...c }, m) => V.createElement(WA, {
      ref: m,
      iconNode: l,
      className: U1(`lucide-${IA(a)}`, r),
      ...c
    })
  );
  return o.displayName = `${a}`, o;
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const B1 = zt("Activity", [
  [
    "path",
    {
      d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
      key: "169zse"
    }
  ]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kg = zt("ArrowDownToLine", [
  ["path", { d: "M12 17V3", key: "1cwfxf" }],
  ["path", { d: "m6 11 6 6 6-6", key: "12ii2o" }],
  ["path", { d: "M19 21H5", key: "150jfl" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mi = zt("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ji = zt("ArrowUpRight", [
  ["path", { d: "M7 7h10v10", key: "1tivn9" }],
  ["path", { d: "M7 17 17 7", key: "1vkiza" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const L1 = zt("BookOpen", [
  ["path", { d: "M12 7v14", key: "1akyts" }],
  [
    "path",
    {
      d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
      key: "ruj8y"
    }
  ]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const H1 = zt("Boxes", [
  [
    "path",
    {
      d: "M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",
      key: "lc1i9w"
    }
  ],
  ["path", { d: "m7 16.5-4.74-2.85", key: "1o9zyk" }],
  ["path", { d: "m7 16.5 5-3", key: "va8pkn" }],
  ["path", { d: "M7 16.5v5.17", key: "jnp8gn" }],
  [
    "path",
    {
      d: "M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",
      key: "8zsnat"
    }
  ],
  ["path", { d: "m17 16.5-5-3", key: "8arw3v" }],
  ["path", { d: "m17 16.5 4.74-2.85", key: "8rfmw" }],
  ["path", { d: "M17 16.5v5.17", key: "k6z78m" }],
  [
    "path",
    {
      d: "M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",
      key: "1xygjf"
    }
  ],
  ["path", { d: "M12 8 7.26 5.15", key: "1vbdud" }],
  ["path", { d: "m12 8 4.74-2.85", key: "3rx089" }],
  ["path", { d: "M12 13.5V8", key: "1io7kd" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const t3 = zt("CheckCheck", [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Co = zt("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const e3 = zt("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jg = zt("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const n3 = zt("CircleHelp", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const i3 = zt("Cloud", [
  ["path", { d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z", key: "p7xjir" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const a3 = zt("Earth", [
  ["path", { d: "M21.54 15H17a2 2 0 0 0-2 2v4.54", key: "1djwo0" }],
  [
    "path",
    {
      d: "M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17",
      key: "1tzkfa"
    }
  ],
  ["path", { d: "M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05", key: "14pb5j" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const l3 = zt("Fingerprint", [
  ["path", { d: "M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4", key: "1nerag" }],
  ["path", { d: "M14 13.12c0 2.38 0 6.38-1 8.88", key: "o46ks0" }],
  ["path", { d: "M17.29 21.02c.12-.6.43-2.3.5-3.02", key: "ptglia" }],
  ["path", { d: "M2 12a10 10 0 0 1 18-6", key: "ydlgp0" }],
  ["path", { d: "M2 16h.01", key: "1gqxmh" }],
  ["path", { d: "M21.8 16c.2-2 .131-5.354 0-6", key: "drycrb" }],
  ["path", { d: "M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2", key: "1tidbn" }],
  ["path", { d: "M8.65 22c.21-.66.45-1.32.57-2", key: "13wd9y" }],
  ["path", { d: "M9 6.8a6 6 0 0 1 9 5.2v2", key: "1fr1j5" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zd = zt("History", [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
  ["path", { d: "M12 7v5l4 2", key: "1fdv2h" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const s3 = zt("LayoutDashboard", [
  ["rect", { width: "7", height: "9", x: "3", y: "3", rx: "1", key: "10lvy0" }],
  ["rect", { width: "7", height: "5", x: "14", y: "3", rx: "1", key: "16une8" }],
  ["rect", { width: "7", height: "9", x: "14", y: "12", rx: "1", key: "1hutg5" }],
  ["rect", { width: "7", height: "5", x: "3", y: "16", rx: "1", key: "ldoo1y" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kd = zt("LoaderCircle", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Y1 = zt("LockKeyhole", [
  ["circle", { cx: "12", cy: "16", r: "1", key: "1au0dj" }],
  ["rect", { x: "3", y: "10", width: "18", height: "12", rx: "2", key: "6s8ecr" }],
  ["path", { d: "M7 10V7a5 5 0 0 1 10 0v3", key: "1pqi11" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const u3 = zt("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const o3 = zt("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const q1 = zt("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const G1 = zt("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const r3 = zt("Settings2", [
  ["path", { d: "M20 7h-9", key: "3s1dr2" }],
  ["path", { d: "M14 17H5", key: "gfn3mx" }],
  ["circle", { cx: "17", cy: "17", r: "3", key: "18b49y" }],
  ["circle", { cx: "7", cy: "7", r: "3", key: "dfmy0x" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sl = zt("ShieldCheck", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const X1 = zt("Shield", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Q1 = zt("Terminal", [
  ["polyline", { points: "4 17 10 11 4 5", key: "akl6gq" }],
  ["line", { x1: "12", x2: "20", y1: "19", y2: "19", key: "q2wloq" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const c3 = zt("Users", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Z1 = zt("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
let fd = "", vs = null;
function Fg(a) {
  vs = a;
}
function dd(a) {
  fd = a;
}
async function An(a, l = {}) {
  var r;
  if (vs)
    try {
      return await vs(a, {
        ...l,
        headers: { "X-CSRF-Token": fd, ...l.headers }
      });
    } catch (c) {
      throw String(c).includes("Sign in to continue") && a !== "/auth/me" && window.dispatchEvent(new Event("session-expired")), c;
    }
  const o = await fetch("/api" + a, {
    credentials: "same-origin",
    ...l,
    headers: {
      "Content-Type": "application/json",
      "X-CSRF-Token": fd,
      ...l.headers
    }
  });
  if (!o.ok) {
    const c = await o.json().catch(() => ({ detail: "The server could not complete this request" })), m = typeof c.detail == "string" ? c.detail : (r = c.detail) == null ? void 0 : r.map((h) => h.msg).join("; ");
    throw o.status === 401 && a !== "/auth/login" && a !== "/auth/me" && window.dispatchEvent(new Event("session-expired")), new Error(m || "Request failed");
  }
  return o.json();
}
function Es(a, l = {}) {
  return An(a, { method: "POST", body: JSON.stringify(l) });
}
async function f3(a, l) {
  if (vs) {
    const m = await vs(`/scans/${a.scan_id}/export/${l}`, {}), h = URL.createObjectURL(new Blob([m.content], { type: m.mime })), y = document.createElement("a");
    y.href = h, y.download = `mcscan-${a.scan_id}.${l}`, y.click(), URL.revokeObjectURL(h);
    return;
  }
  const o = await fetch(`/api/scans/${a.scan_id}/export/${l}`, {
    credentials: "same-origin"
  });
  if (!o.ok)
    throw new Error("Report download failed. Sign in and try again.");
  const r = URL.createObjectURL(await o.blob()), c = document.createElement("a");
  c.href = r, c.download = `mcscan-${a.scan_id}.${l}`, c.click(), URL.revokeObjectURL(r);
}
const ua = ["aws", "azure", "gcp"], hd = {
  aws: "Amazon Web Services",
  azure: "Microsoft Azure",
  gcp: "Google Cloud"
}, Nn = {
  aws: "AWS",
  azure: "Azure",
  gcp: "GCP"
}, K1 = ["CRITICAL", "HIGH", "MEDIUM", "LOW"], Pg = [
  { id: "overview", label: "Overview", icon: s3 },
  { id: "findings", label: "Findings", icon: X1 },
  { id: "resources", label: "Resources", icon: H1 },
  { id: "history", label: "Scan history", icon: Zd },
  { id: "rules", label: "Rule library", icon: L1 },
  { id: "clouds", label: "Cloud connections", icon: i3 },
  { id: "users", label: "Team members", icon: c3, admin: !0 },
  { id: "activity", label: "Activity log", icon: B1, admin: !0 }
], No = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
  transition: { duration: 0.25 }
}, Mo = (a) => new Date(typeof a == "number" ? a * 1e3 : a).toLocaleString(void 0, {
  month: "short",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit"
}), Dn = (a) => a.replaceAll("_", " ").replace(/\b\w/g, (l) => l.toUpperCase());
function md() {
  return /* @__PURE__ */ f.jsxs("span", { className: "brand", children: [
    /* @__PURE__ */ f.jsxs("span", { className: "brand-mark", children: [
      /* @__PURE__ */ f.jsx("i", {}),
      /* @__PURE__ */ f.jsx("i", {}),
      /* @__PURE__ */ f.jsx("i", {})
    ] }),
    "mcscan",
    /* @__PURE__ */ f.jsx("span", { className: "brand-dot", children: "." })
  ] });
}
function rn({
  provider: a,
  small: l = !1
}) {
  return /* @__PURE__ */ f.jsx(
    "span",
    {
      className: `cloud-mark ${a} ${l ? "small" : ""}`,
      "aria-label": Nn[a],
      children: a === "aws" ? /* @__PURE__ */ f.jsxs("span", { children: [
        "aws",
        /* @__PURE__ */ f.jsx("span", { className: "aws-smile", children: "⌣" })
      ] }) : a === "azure" ? /* @__PURE__ */ f.jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ f.jsx("path", { d: "M13 2 3 19h6l4-8 4 8h-6l-2 3h13L15 2z" }) }) : /* @__PURE__ */ f.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", strokeWidth: "5", "aria-hidden": "true", children: [
        /* @__PURE__ */ f.jsx("path", { stroke: "#4285f4", d: "M18 10a6 6 0 0 0-11-2" }),
        /* @__PURE__ */ f.jsx("path", { stroke: "#ea4335", d: "M10 6a6 6 0 0 0-4 6" }),
        /* @__PURE__ */ f.jsx("path", { stroke: "#fbbc04", d: "M6 10a5 5 0 0 0 0 10h5" }),
        /* @__PURE__ */ f.jsx("path", { stroke: "#34a853", d: "M10 20h7a5 5 0 0 0 1-10" })
      ] })
    }
  );
}
function Do({ value: a }) {
  return /* @__PURE__ */ f.jsxs("span", { className: `badge ${a.toLowerCase()}`, children: [
    /* @__PURE__ */ f.jsx("i", {}),
    a.toLowerCase()
  ] });
}
function oa({ error: a }) {
  return a ? /* @__PURE__ */ f.jsx("div", { className: "error", role: "alert", children: a }) : null;
}
function yd({ large: a = !1 }) {
  return /* @__PURE__ */ f.jsxs("div", { className: `mesh ${a ? "large" : ""}`, "aria-hidden": "true", children: [
    /* @__PURE__ */ f.jsxs("svg", { viewBox: "0 0 700 330", preserveAspectRatio: "xMidYMid slice", children: [
      /* @__PURE__ */ f.jsxs("defs", { children: [
        /* @__PURE__ */ f.jsxs("linearGradient", { id: "wave", children: [
          /* @__PURE__ */ f.jsx("stop", { stopColor: "#e4ff63" }),
          /* @__PURE__ */ f.jsx("stop", { offset: ".6", stopColor: "#a3b8ff" }),
          /* @__PURE__ */ f.jsx("stop", { offset: "1", stopColor: "#d380ff" })
        ] }),
        /* @__PURE__ */ f.jsxs("radialGradient", { id: "glow", children: [
          /* @__PURE__ */ f.jsx("stop", { stopColor: "#dbff63", stopOpacity: ".22" }),
          /* @__PURE__ */ f.jsx("stop", { offset: "1", stopColor: "#dbff63", stopOpacity: "0" })
        ] })
      ] }),
      /* @__PURE__ */ f.jsx("ellipse", { cx: "330", cy: "190", rx: "260", ry: "180", fill: "url(#glow)" }),
      Array.from({ length: 35 }, (l, o) => /* @__PURE__ */ f.jsx(
        Me.path,
        {
          d: `M ${-60 + o * 19} 350 Q ${95 + o * 16} ${-60 + Math.sin(o / 5) * 60} ${300 + o * 15} 140 T ${750 + o * 7} 100`,
          stroke: "url(#wave)",
          strokeWidth: ".7",
          opacity: 0.15 + Math.sin(o / 12) * 0.25,
          fill: "none",
          initial: { pathLength: 0 },
          animate: { pathLength: 1 },
          transition: { duration: 1.6, delay: o * 0.012 }
        },
        o
      )),
      Array.from({ length: 14 }, (l, o) => /* @__PURE__ */ f.jsx(
        "path",
        {
          d: `M -20 ${50 + o * 22} Q 240 ${-50 + o * 25} 400 ${140 + o * 9} T 730 ${40 + o * 25}`,
          stroke: "url(#wave)",
          strokeWidth: ".6",
          opacity: ".17",
          fill: "none"
        },
        "h" + o
      ))
    ] }),
    /* @__PURE__ */ f.jsx("div", { className: "mesh-node node-a", children: /* @__PURE__ */ f.jsx(rn, { provider: "aws", small: !0 }) }),
    /* @__PURE__ */ f.jsx("div", { className: "mesh-node node-b", children: /* @__PURE__ */ f.jsx(rn, { provider: "azure", small: !0 }) }),
    /* @__PURE__ */ f.jsx("div", { className: "mesh-node node-c", children: /* @__PURE__ */ f.jsx(rn, { provider: "gcp", small: !0 }) }),
    /* @__PURE__ */ f.jsx(
      Me.div,
      {
        className: "mesh-center",
        initial: { scale: 0 },
        animate: { scale: 1 },
        transition: { type: "spring", delay: 0.2 },
        children: /* @__PURE__ */ f.jsx(sl, { size: 30 })
      }
    )
  ] });
}
function js({
  title: a,
  children: l,
  onClose: o,
  wide: r = !1
}) {
  const c = V.useRef(null), m = V.useRef(o);
  return m.current = o, V.useEffect(() => {
    var p;
    const h = document.activeElement, y = c.current;
    (p = y == null ? void 0 : y.querySelector("button,input,select")) == null || p.focus();
    function x(v) {
      if (v.key === "Escape" && m.current(), v.key === "Tab" && y) {
        const b = Array.from(
          y.querySelectorAll(
            "button:not(:disabled),input,select,a[href],textarea"
          )
        );
        if (!b.length) return;
        const A = b[0], j = b.at(-1);
        v.shiftKey && document.activeElement === A ? (v.preventDefault(), j == null || j.focus()) : !v.shiftKey && document.activeElement === j && (v.preventDefault(), A.focus());
      }
    }
    document.addEventListener("keydown", x);
    const S = document.body.style.overflow;
    return document.body.style.overflow = "hidden", () => {
      document.removeEventListener("keydown", x), document.body.style.overflow = S, h == null || h.focus();
    };
  }, []), /* @__PURE__ */ f.jsx(
    Me.div,
    {
      className: "modal-backdrop",
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      onMouseDown: (h) => {
        h.target === h.currentTarget && o();
      },
      children: /* @__PURE__ */ f.jsxs(
        Me.div,
        {
          ref: c,
          className: `modal ${r ? "wide" : ""}`,
          role: "dialog",
          "aria-modal": "true",
          "aria-label": a,
          ...No,
          children: [
            /* @__PURE__ */ f.jsxs("div", { className: "modal-title", children: [
              /* @__PURE__ */ f.jsx("h2", { children: a }),
              /* @__PURE__ */ f.jsx(
                "button",
                {
                  className: "icon-button",
                  "aria-label": "Close dialog",
                  onClick: o,
                  children: /* @__PURE__ */ f.jsx(Z1, { size: 20 })
                }
              )
            ] }),
            l
          ]
        }
      )
    }
  );
}
function d3({ onLogin: a }) {
  const [l, o] = V.useState(""), [r, c] = V.useState(""), [m, h] = V.useState(""), [y, x] = V.useState(!1), [S, p] = V.useState(!1);
  V.useEffect(() => {
    An("/health").then((b) => p(b.demo_accounts)).catch(() => {
    });
  }, []);
  async function v(b, A) {
    b == null || b.preventDefault(), h(""), x(!0);
    try {
      const j = await Es("/auth/login", {
        email: A ? (A === "admin" ? "admin" : "analyst") + "@mcscan.local" : l,
        password: A ? A === "admin" ? "Mcscan-Demo-2026!" : "Analyst-Demo-2026!" : r
      });
      dd(j.csrf), a(j.user);
    } catch (j) {
      h(j.message);
    } finally {
      x(!1);
    }
  }
  return /* @__PURE__ */ f.jsxs("div", { className: "login-page", children: [
    /* @__PURE__ */ f.jsxs("div", { className: "login-art", children: [
      /* @__PURE__ */ f.jsx(md, {}),
      /* @__PURE__ */ f.jsxs("div", { className: "login-copy", children: [
        /* @__PURE__ */ f.jsxs("span", { className: "eyebrow", children: [
          /* @__PURE__ */ f.jsx("i", {}),
          " MULTI-CLOUD SECURITY, IN FOCUS"
        ] }),
        /* @__PURE__ */ f.jsxs("h1", { children: [
          "Three clouds.",
          /* @__PURE__ */ f.jsx("br", {}),
          "One clear view",
          /* @__PURE__ */ f.jsx("span", { children: "." })
        ] }),
        /* @__PURE__ */ f.jsxs("p", { children: [
          "Find the gaps. Understand the risk.",
          /* @__PURE__ */ f.jsx("br", {}),
          "Move forward with confidence."
        ] }),
        /* @__PURE__ */ f.jsx(yd, { large: !0 }),
        /* @__PURE__ */ f.jsx("div", { className: "login-providers", children: ua.map((b) => /* @__PURE__ */ f.jsxs("span", { children: [
          /* @__PURE__ */ f.jsx(rn, { provider: b, small: !0 }),
          Nn[b]
        ] }, b)) })
      ] }),
      /* @__PURE__ */ f.jsxs("div", { className: "login-foot", children: [
        "READ-ONLY BY DESIGN ",
        /* @__PURE__ */ f.jsx("span", { children: "BUILT FOR CLARITY" })
      ] })
    ] }),
    /* @__PURE__ */ f.jsx("div", { className: "login-form-wrap", children: /* @__PURE__ */ f.jsxs("form", { onSubmit: v, className: "login-form", children: [
      /* @__PURE__ */ f.jsx("span", { className: "eyebrow", children: "YOUR SECURITY WORKSPACE" }),
      /* @__PURE__ */ f.jsx("h2", { children: "Welcome back." }),
      /* @__PURE__ */ f.jsx("p", { children: "Sign in to see your cloud posture." }),
      /* @__PURE__ */ f.jsx(oa, { error: m }),
      /* @__PURE__ */ f.jsxs("label", { children: [
        "Email address",
        /* @__PURE__ */ f.jsx(
          "input",
          {
            type: "email",
            autoComplete: "username",
            required: !0,
            value: l,
            onChange: (b) => o(b.target.value),
            placeholder: "you@company.com"
          }
        )
      ] }),
      /* @__PURE__ */ f.jsxs("label", { children: [
        "Password",
        /* @__PURE__ */ f.jsx(
          "input",
          {
            type: "password",
            autoComplete: "current-password",
            required: !0,
            value: r,
            onChange: (b) => c(b.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ f.jsx("button", { className: "button primary full", disabled: y, children: y ? /* @__PURE__ */ f.jsx(Kd, { className: "spin", size: 18 }) : /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
        "Sign in ",
        /* @__PURE__ */ f.jsx(Mi, { size: 18 })
      ] }) }),
      /* @__PURE__ */ f.jsxs("div", { className: "secure-note", children: [
        /* @__PURE__ */ f.jsx(Y1, { size: 13 }),
        " Secure session · Private scan history"
      ] }),
      S && /* @__PURE__ */ f.jsxs("div", { className: "demo-login", children: [
        /* @__PURE__ */ f.jsx("div", { className: "eyebrow", children: "EXPLORE THE OFFLINE DEMO" }),
        /* @__PURE__ */ f.jsx("p", { children: "No cloud account needed. Real rules, synthetic resources." }),
        /* @__PURE__ */ f.jsxs(
          "button",
          {
            type: "button",
            className: "button secondary full",
            disabled: y,
            onClick: () => v(void 0, "admin"),
            children: [
              "Try as administrator ",
              /* @__PURE__ */ f.jsx(ji, { size: 16 })
            ]
          }
        ),
        /* @__PURE__ */ f.jsxs(
          "button",
          {
            type: "button",
            className: "text-button",
            disabled: y,
            onClick: () => v(void 0, "member"),
            children: [
              "Or explore as a team member ",
              /* @__PURE__ */ f.jsx(Mi, { size: 14 })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ f.jsx("p", { className: "contact-note", children: "Need access? Ask your workspace administrator." })
    ] }) })
  ] });
}
function h3({
  onClose: a,
  onScan: l
}) {
  const [o, r] = V.useState(ua), [c, m] = V.useState("baseline"), [h, y] = V.useState("production"), [x, S] = V.useState(!1), [p, v] = V.useState("");
  async function b(A) {
    A.preventDefault(), S(!0), v("");
    try {
      l(
        await Es("/scans", {
          providers: o,
          scenario: c,
          criticality: h,
          mode: "offline"
        })
      );
    } catch (j) {
      v(j.message), S(!1);
    }
  }
  return /* @__PURE__ */ f.jsx(
    js,
    {
      title: "Start a new scan",
      onClose: () => {
        x || a();
      },
      children: /* @__PURE__ */ f.jsxs("form", { onSubmit: b, children: [
        /* @__PURE__ */ f.jsx("p", { className: "muted", children: "Choose your scope. Every scan runs the shared rule engine." }),
        /* @__PURE__ */ f.jsxs("div", { className: "callout", children: [
          /* @__PURE__ */ f.jsx(Q1, { size: 18 }),
          /* @__PURE__ */ f.jsxs("div", { children: [
            /* @__PURE__ */ f.jsx("strong", { children: "Offline environment" }),
            /* @__PURE__ */ f.jsx("p", { children: "Synthetic fixtures for all three providers. No cloud API calls." })
          ] })
        ] }),
        /* @__PURE__ */ f.jsx("label", { className: "field-title", children: "CLOUD PROVIDERS" }),
        /* @__PURE__ */ f.jsx("div", { className: "provider-picker", children: ua.map((A) => /* @__PURE__ */ f.jsxs("label", { className: o.includes(A) ? "selected" : "", children: [
          /* @__PURE__ */ f.jsx(rn, { provider: A }),
          /* @__PURE__ */ f.jsx("span", { children: Nn[A] }),
          /* @__PURE__ */ f.jsx(
            "input",
            {
              type: "checkbox",
              checked: o.includes(A),
              onChange: () => r(
                (j) => j.includes(A) ? j.filter((_) => _ !== A) : [...j, A]
              )
            }
          )
        ] }, A)) }),
        /* @__PURE__ */ f.jsxs("label", { children: [
          "Scenario",
          /* @__PURE__ */ f.jsxs(
            "select",
            {
              value: c,
              onChange: (A) => m(A.target.value),
              children: [
                /* @__PURE__ */ f.jsx("option", { value: "baseline", children: "Baseline — seeded misconfigurations" }),
                /* @__PURE__ */ f.jsx("option", { value: "hardened", children: "Hardened — remediated fixtures" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ f.jsxs("label", { children: [
          "Asset criticality",
          /* @__PURE__ */ f.jsxs(
            "select",
            {
              value: h,
              onChange: (A) => y(A.target.value),
              children: [
                /* @__PURE__ */ f.jsx("option", { value: "production", children: "Production (1.5×)" }),
                /* @__PURE__ */ f.jsx("option", { value: "staging", children: "Staging (1×)" }),
                /* @__PURE__ */ f.jsx("option", { value: "dev", children: "Development (0.5×)" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ f.jsx("p", { className: "muted small-text", children: "Run baseline, then hardened with the same scope to see resolved findings in drift history." }),
        /* @__PURE__ */ f.jsx(oa, { error: p }),
        /* @__PURE__ */ f.jsx(
          "button",
          {
            className: "button primary full",
            disabled: x || !o.length,
            children: x ? /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
              /* @__PURE__ */ f.jsx(Kd, { className: "spin", size: 17 }),
              "Running rule engine…"
            ] }) : /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
              "Run scan ",
              /* @__PURE__ */ f.jsx(Mi, { size: 17 })
            ] })
          }
        )
      ] })
    }
  );
}
function k1({
  findings: a,
  onSelect: l,
  compact: o = !1
}) {
  return /* @__PURE__ */ f.jsxs("div", { className: "table-scroll", children: [
    /* @__PURE__ */ f.jsxs("table", { className: o ? "compact" : "", children: [
      /* @__PURE__ */ f.jsx("thead", { children: /* @__PURE__ */ f.jsxs("tr", { children: [
        /* @__PURE__ */ f.jsx("th", { children: "Finding / resource" }),
        /* @__PURE__ */ f.jsx("th", { children: "Severity" }),
        /* @__PURE__ */ f.jsx("th", { children: "Cloud" }),
        !o && /* @__PURE__ */ f.jsx("th", { children: "Rule" }),
        /* @__PURE__ */ f.jsx("th", { className: "numeric", children: "Risk" }),
        /* @__PURE__ */ f.jsx("th", { children: /* @__PURE__ */ f.jsx("span", { className: "sr-only", children: "Details" }) })
      ] }) }),
      /* @__PURE__ */ f.jsx("tbody", { children: a.map((r) => /* @__PURE__ */ f.jsxs("tr", { children: [
        /* @__PURE__ */ f.jsxs("td", { children: [
          /* @__PURE__ */ f.jsx("button", { className: "finding-title", onClick: () => l(r), children: r.title }),
          /* @__PURE__ */ f.jsx("div", { className: "resource-name", children: r.resource_name })
        ] }),
        /* @__PURE__ */ f.jsx("td", { children: /* @__PURE__ */ f.jsx(Do, { value: r.severity }) }),
        /* @__PURE__ */ f.jsx("td", { children: /* @__PURE__ */ f.jsxs("span", { className: "provider-inline", children: [
          /* @__PURE__ */ f.jsx(rn, { provider: r.provider, small: !0 }),
          Nn[r.provider]
        ] }) }),
        !o && /* @__PURE__ */ f.jsx("td", { className: "mono muted", children: r.rule_id }),
        /* @__PURE__ */ f.jsx("td", { className: "numeric mono", children: r.risk_score.toFixed(1) }),
        /* @__PURE__ */ f.jsx("td", { children: /* @__PURE__ */ f.jsx(
          "button",
          {
            className: "icon-button",
            onClick: () => l(r),
            "aria-label": `Inspect ${r.rule_id} on ${r.resource_name}`,
            children: /* @__PURE__ */ f.jsx(ji, { size: 16 })
          }
        ) })
      ] }, r.provider + r.resource_id + r.rule_id)) })
    ] }),
    !a.length && /* @__PURE__ */ f.jsxs("div", { className: "empty-inline", children: [
      /* @__PURE__ */ f.jsx(sl, { size: 30 }),
      /* @__PURE__ */ f.jsx("strong", { children: "No findings here." }),
      /* @__PURE__ */ f.jsx("p", { children: "Try a different filter or scan scope." })
    ] })
  ] });
}
function m3({
  finding: a,
  onClose: l
}) {
  return /* @__PURE__ */ f.jsxs(js, { title: "Finding details", onClose: l, wide: !0, children: [
    /* @__PURE__ */ f.jsxs("div", { className: "detail-tags", children: [
      /* @__PURE__ */ f.jsx(Do, { value: a.severity }),
      /* @__PURE__ */ f.jsx("span", { className: "tag mono", children: a.rule_id }),
      /* @__PURE__ */ f.jsx("span", { className: "tag", children: Nn[a.provider] })
    ] }),
    /* @__PURE__ */ f.jsx("h2", { className: "detail-heading", children: a.title }),
    /* @__PURE__ */ f.jsxs("div", { className: "detail-grid", children: [
      /* @__PURE__ */ f.jsxs("div", { children: [
        /* @__PURE__ */ f.jsx("label", { children: "RESOURCE" }),
        /* @__PURE__ */ f.jsx("strong", { children: a.resource_name })
      ] }),
      /* @__PURE__ */ f.jsxs("div", { children: [
        /* @__PURE__ */ f.jsx("label", { children: "RISK SCORE" }),
        /* @__PURE__ */ f.jsx("strong", { children: a.risk_score.toFixed(1) })
      ] }),
      /* @__PURE__ */ f.jsxs("div", { children: [
        /* @__PURE__ */ f.jsx("label", { children: "REGION" }),
        /* @__PURE__ */ f.jsx("strong", { children: a.region })
      ] }),
      /* @__PURE__ */ f.jsxs("div", { children: [
        /* @__PURE__ */ f.jsx("label", { children: "INTERNET EXPOSED" }),
        /* @__PURE__ */ f.jsx("strong", { children: a.internet_exposed ? "Yes" : "No" })
      ] })
    ] }),
    /* @__PURE__ */ f.jsxs("section", { className: "remediation", children: [
      /* @__PURE__ */ f.jsxs("h3", { children: [
        /* @__PURE__ */ f.jsx(t3, { size: 19 }),
        " How to remediate"
      ] }),
      /* @__PURE__ */ f.jsx("p", { children: a.remediation })
    ] }),
    /* @__PURE__ */ f.jsx("h3", { children: "Collected evidence" }),
    /* @__PURE__ */ f.jsx("pre", { children: JSON.stringify(a.evidence, null, 2) }),
    /* @__PURE__ */ f.jsx("p", { className: "muted small-text", children: "Offline fixture evidence. Remediation is guidance; this scanner does not modify cloud resources." })
  ] });
}
function y3({
  scan: a,
  history: l,
  rules: o,
  onNew: r,
  onView: c,
  onFinding: m
}) {
  if (!a)
    return /* @__PURE__ */ f.jsxs(Me.div, { ...No, children: [
      /* @__PURE__ */ f.jsxs("div", { className: "welcome-hero", children: [
        /* @__PURE__ */ f.jsxs("div", { children: [
          /* @__PURE__ */ f.jsx("span", { className: "eyebrow", children: "VISIBILITY IS YOUR FIRST DEFENSE" }),
          /* @__PURE__ */ f.jsxs("h1", { children: [
            "Your clouds.",
            /* @__PURE__ */ f.jsx("br", {}),
            "In the clear",
            /* @__PURE__ */ f.jsx("span", { children: "." })
          ] }),
          /* @__PURE__ */ f.jsxs("p", { children: [
            "One rule engine. Three clouds. A clear path from",
            /* @__PURE__ */ f.jsx("br", { className: "desktop" }),
            " misconfiguration to remediation."
          ] }),
          /* @__PURE__ */ f.jsxs("button", { className: "button primary", onClick: r, children: [
            "Run your first scan ",
            /* @__PURE__ */ f.jsx(Mi, { size: 17 })
          ] })
        ] }),
        /* @__PURE__ */ f.jsx(yd, {})
      ] }),
      /* @__PURE__ */ f.jsxs("div", { className: "section-heading", children: [
        /* @__PURE__ */ f.jsx("h2", { children: "A good place to start." }),
        /* @__PURE__ */ f.jsx("span", { className: "eyebrow", children: "01 / YOUR WORKSPACE" })
      ] }),
      /* @__PURE__ */ f.jsx("div", { className: "cloud-grid", children: ua.map((p) => /* @__PURE__ */ f.jsxs("div", { className: "panel cloud-card", children: [
        /* @__PURE__ */ f.jsx(rn, { provider: p }),
        /* @__PURE__ */ f.jsx("h3", { children: hd[p] }),
        /* @__PURE__ */ f.jsx("p", { children: "Storage, network, identity and encryption checks." }),
        /* @__PURE__ */ f.jsx("span", { className: "status-dot", children: "Offline fixtures ready" })
      ] }, p)) }),
      /* @__PURE__ */ f.jsxs("div", { className: "empty-guide panel", children: [
        /* @__PURE__ */ f.jsx(sl, { size: 28 }),
        /* @__PURE__ */ f.jsxs("div", { children: [
          /* @__PURE__ */ f.jsx("h3", { children: "Real detection. Zero cloud setup." }),
          /* @__PURE__ */ f.jsx("p", { children: "Start with seeded issues, then scan the hardened scenario to measure what changed." })
        ] }),
        /* @__PURE__ */ f.jsxs("span", { className: "tag", children: [
          o.length,
          " shared rules"
        ] })
      ] })
    ] });
  const h = a.severity_counts, y = h.CRITICAL || 0, x = l.find(
    (p) => p.scan_id === a.drift.previous_scan_id
  ), S = x ? a.account_score - x.account_score : null;
  return /* @__PURE__ */ f.jsxs(Me.div, { ...No, children: [
    /* @__PURE__ */ f.jsxs("div", { className: "page-heading", children: [
      /* @__PURE__ */ f.jsxs("div", { children: [
        /* @__PURE__ */ f.jsx("div", { className: "eyebrow", children: "YOUR CLOUDS, AT A GLANCE" }),
        /* @__PURE__ */ f.jsxs("h1", { children: [
          "Security posture",
          /* @__PURE__ */ f.jsx("span", { children: "." })
        ] }),
        /* @__PURE__ */ f.jsx("p", { children: "A little visibility. A lot more confidence." })
      ] }),
      /* @__PURE__ */ f.jsxs("span", { className: "timestamp", children: [
        /* @__PURE__ */ f.jsx("span", { className: "live-dot" }),
        " Last scanned ",
        Mo(a.started_at)
      ] })
    ] }),
    /* @__PURE__ */ f.jsxs("div", { className: "stat-grid", children: [
      /* @__PURE__ */ f.jsxs("div", { className: "stat panel risk-stat", children: [
        /* @__PURE__ */ f.jsxs("div", { className: "stat-label", children: [
          "Overall risk",
          " ",
          /* @__PURE__ */ f.jsx(n3, { size: 14, children: /* @__PURE__ */ f.jsx("title", { children: "Higher means more detected risk; not a probability." }) })
        ] }),
        /* @__PURE__ */ f.jsxs("div", { className: "stat-number", children: [
          a.account_score.toFixed(1),
          /* @__PURE__ */ f.jsx("span", { children: "/100" }),
          /* @__PURE__ */ f.jsxs("svg", { className: "mini-ring", viewBox: "0 0 56 56", children: [
            /* @__PURE__ */ f.jsx(
              "circle",
              {
                cx: "28",
                cy: "28",
                r: "23",
                fill: "none",
                stroke: "#30352c",
                strokeWidth: "4"
              }
            ),
            /* @__PURE__ */ f.jsx(
              Me.circle,
              {
                cx: "28",
                cy: "28",
                r: "23",
                fill: "none",
                stroke: "var(--accent)",
                strokeWidth: "4",
                strokeLinecap: "round",
                strokeDasharray: "144.5",
                initial: { strokeDashoffset: 144.5 },
                animate: {
                  strokeDashoffset: 144.5 * (1 - a.account_score / 100)
                },
                transform: "rotate(-90 28 28)"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ f.jsx("div", { className: "stat-note", children: S !== null ? /* @__PURE__ */ f.jsxs("span", { className: S <= 0 ? "good" : "warn", children: [
          S <= 0 ? "↓" : "↑",
          " ",
          Math.abs(S).toFixed(1),
          " since previous scan"
        ] }) : "Weighted, saturating risk score" })
      ] }),
      /* @__PURE__ */ f.jsxs("div", { className: "stat panel", children: [
        /* @__PURE__ */ f.jsxs("div", { className: "stat-label", children: [
          "Open findings ",
          /* @__PURE__ */ f.jsx(X1, { size: 16 })
        ] }),
        /* @__PURE__ */ f.jsxs("div", { className: "stat-number", children: [
          a.finding_count,
          /* @__PURE__ */ f.jsxs("span", { className: "stat-pill", children: [
            y,
            " critical"
          ] })
        ] }),
        /* @__PURE__ */ f.jsxs("div", { className: "stat-note", children: [
          "Across ",
          a.providers.length,
          " cloud providers"
        ] })
      ] }),
      /* @__PURE__ */ f.jsxs("div", { className: "stat panel", children: [
        /* @__PURE__ */ f.jsxs("div", { className: "stat-label", children: [
          "Resources scanned ",
          /* @__PURE__ */ f.jsx(H1, { size: 16 })
        ] }),
        /* @__PURE__ */ f.jsxs("div", { className: "stat-number", children: [
          a.resources_scanned,
          /* @__PURE__ */ f.jsx("span", { className: "tiny-check", children: /* @__PURE__ */ f.jsx(Co, { size: 15 }) })
        ] }),
        /* @__PURE__ */ f.jsx("div", { className: "stat-note", children: a.errors.length ? "Partial coverage — review warnings" : "All selected fixtures collected" })
      ] }),
      /* @__PURE__ */ f.jsxs("div", { className: "stat panel", children: [
        /* @__PURE__ */ f.jsxs("div", { className: "stat-label", children: [
          "Active rules ",
          /* @__PURE__ */ f.jsx(l3, { size: 16 })
        ] }),
        /* @__PURE__ */ f.jsxs("div", { className: "stat-number", children: [
          o.length,
          /* @__PURE__ */ f.jsxs("span", { className: "sub-number", children: [
            "/ ",
            o.length
          ] })
        ] }),
        /* @__PURE__ */ f.jsxs("div", { className: "stat-note", children: [
          new Set(o.map((p) => p.id.split("-")[0])).size,
          " security categories"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ f.jsxs("div", { className: "posture-grid", children: [
      /* @__PURE__ */ f.jsxs("div", { className: "panel posture-card", children: [
        /* @__PURE__ */ f.jsxs("div", { className: "panel-heading", children: [
          /* @__PURE__ */ f.jsx("h2", { children: "Finding distribution" }),
          /* @__PURE__ */ f.jsx("span", { className: "eyebrow", children: "BY SEVERITY" })
        ] }),
        /* @__PURE__ */ f.jsxs("div", { className: "severity-chart", children: [
          /* @__PURE__ */ f.jsxs("div", { className: "severity-total", children: [
            /* @__PURE__ */ f.jsx("strong", { children: a.finding_count }),
            /* @__PURE__ */ f.jsx("span", { children: "open findings" })
          ] }),
          /* @__PURE__ */ f.jsx("div", { className: "severity-bars", children: K1.map((p) => /* @__PURE__ */ f.jsxs("div", { className: "severity-row", children: [
            /* @__PURE__ */ f.jsxs("span", { children: [
              /* @__PURE__ */ f.jsx("i", { className: p.toLowerCase() }),
              Dn(p.toLowerCase())
            ] }),
            /* @__PURE__ */ f.jsx("div", { className: "bar-track", children: /* @__PURE__ */ f.jsx(
              Me.div,
              {
                className: p.toLowerCase(),
                initial: { width: 0 },
                animate: {
                  width: `${(h[p] || 0) / Math.max(a.finding_count, 1) * 100}%`
                }
              }
            ) }),
            /* @__PURE__ */ f.jsx("strong", { className: "mono", children: h[p] || 0 })
          ] }, p)) })
        ] }),
        /* @__PURE__ */ f.jsxs("div", { className: "panel-foot", children: [
          /* @__PURE__ */ f.jsx(sl, { size: 14 }),
          " Prioritize internet-exposed resources first."
        ] })
      ] }),
      /* @__PURE__ */ f.jsxs("div", { className: "signal-card panel", children: [
        /* @__PURE__ */ f.jsxs("div", { className: "signal-copy", children: [
          /* @__PURE__ */ f.jsx("span", { className: "eyebrow", children: "THREE CLOUDS. ONE STANDARD." }),
          /* @__PURE__ */ f.jsxs("h2", { children: [
            "Less noise.",
            /* @__PURE__ */ f.jsx("br", {}),
            "More signal",
            /* @__PURE__ */ f.jsx("span", { children: "." })
          ] }),
          /* @__PURE__ */ f.jsxs("p", { children: [
            "The same rules.",
            /* @__PURE__ */ f.jsx("br", {}),
            "A shared language for risk."
          ] })
        ] }),
        /* @__PURE__ */ f.jsx(yd, {})
      ] })
    ] }),
    /* @__PURE__ */ f.jsxs("div", { className: "section-heading", children: [
      /* @__PURE__ */ f.jsxs("h2", { children: [
        "Cloud coverage ",
        /* @__PURE__ */ f.jsx("span", { className: "count", children: a.providers.length })
      ] }),
      /* @__PURE__ */ f.jsxs("button", { className: "text-button", onClick: () => c("clouds"), children: [
        "View connections ",
        /* @__PURE__ */ f.jsx(ji, { size: 15 })
      ] })
    ] }),
    /* @__PURE__ */ f.jsx("div", { className: "cloud-grid", children: a.providers.map((p, v) => {
      const b = a.resources.filter(
        (j) => j.provider === p
      ).length, A = a.findings.filter((j) => j.provider === p).length;
      return /* @__PURE__ */ f.jsxs(
        Me.button,
        {
          whileHover: { y: -3 },
          className: "panel cloud-summary",
          onClick: () => c("findings:" + p),
          children: [
            /* @__PURE__ */ f.jsxs("div", { className: "cloud-title", children: [
              /* @__PURE__ */ f.jsx(rn, { provider: p }),
              /* @__PURE__ */ f.jsxs("div", { children: [
                /* @__PURE__ */ f.jsx("h3", { children: hd[p] }),
                /* @__PURE__ */ f.jsxs("span", { children: [
                  "OFFLINE / ",
                  String(v + 1).padStart(2, "0")
                ] })
              ] }),
              /* @__PURE__ */ f.jsx(ji, { size: 16 })
            ] }),
            /* @__PURE__ */ f.jsxs("div", { className: "cloud-stats", children: [
              /* @__PURE__ */ f.jsxs("div", { children: [
                /* @__PURE__ */ f.jsx("strong", { children: b }),
                /* @__PURE__ */ f.jsx("span", { children: "resources" })
              ] }),
              /* @__PURE__ */ f.jsxs("div", { children: [
                /* @__PURE__ */ f.jsx("strong", { children: A }),
                /* @__PURE__ */ f.jsx("span", { children: "findings" })
              ] }),
              /* @__PURE__ */ f.jsxs("div", { children: [
                /* @__PURE__ */ f.jsx("strong", { className: A ? "accent" : "good", children: a.score_by_provider[p] }),
                /* @__PURE__ */ f.jsx("span", { children: "risk score" })
              ] })
            ] }),
            /* @__PURE__ */ f.jsx("div", { className: "cloud-track", children: /* @__PURE__ */ f.jsx("div", { style: { width: `${a.score_by_provider[p]}%` } }) })
          ]
        },
        p
      );
    }) }),
    /* @__PURE__ */ f.jsxs("div", { className: "bottom-grid", children: [
      /* @__PURE__ */ f.jsxs("div", { className: "panel", children: [
        /* @__PURE__ */ f.jsxs("div", { className: "panel-heading", children: [
          /* @__PURE__ */ f.jsx("h2", { children: "Needs your attention" }),
          /* @__PURE__ */ f.jsxs("button", { className: "text-button", onClick: () => c("findings"), children: [
            "All findings ",
            /* @__PURE__ */ f.jsx(ji, { size: 15 })
          ] })
        ] }),
        /* @__PURE__ */ f.jsx(
          k1,
          {
            compact: !0,
            findings: a.findings.slice(0, 4),
            onSelect: m
          }
        )
      ] }),
      /* @__PURE__ */ f.jsxs("div", { className: "panel recent-panel", children: [
        /* @__PURE__ */ f.jsxs("div", { className: "panel-heading", children: [
          /* @__PURE__ */ f.jsx("h2", { children: "Recent scans" }),
          /* @__PURE__ */ f.jsx(Zd, { size: 16 })
        ] }),
        l.slice(0, 4).map((p) => /* @__PURE__ */ f.jsxs(
          "button",
          {
            className: "recent-scan",
            onClick: () => c("scan:" + p.scan_id),
            children: [
              /* @__PURE__ */ f.jsx("span", { className: "timeline-icon", children: /* @__PURE__ */ f.jsx(Co, { size: 15 }) }),
              /* @__PURE__ */ f.jsxs("span", { children: [
                /* @__PURE__ */ f.jsxs("strong", { children: [
                  Dn(p.scenario),
                  " scan"
                ] }),
                /* @__PURE__ */ f.jsxs("small", { children: [
                  Mo(p.started_at),
                  " · ",
                  p.providers.length,
                  " clouds"
                ] })
              ] }),
              /* @__PURE__ */ f.jsx("span", { className: "mono", children: p.account_score })
            ]
          },
          p.scan_id
        )),
        /* @__PURE__ */ f.jsxs(
          "button",
          {
            className: "text-button history-link",
            onClick: () => c("history"),
            children: [
              "View scan history ",
              /* @__PURE__ */ f.jsx(Mi, { size: 15 })
            ]
          }
        )
      ] })
    ] })
  ] });
}
function p3({
  scan: a,
  initialProvider: l,
  onFinding: o
}) {
  const [r, c] = V.useState(""), [m, h] = V.useState(l), [y, x] = V.useState("all"), S = ((a == null ? void 0 : a.findings) || []).filter(
    (p) => (m === "all" || p.provider === m) && (y === "all" || p.severity === y) && `${p.title} ${p.resource_name} ${p.rule_id}`.toLowerCase().includes(r.toLowerCase())
  );
  return /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
    /* @__PURE__ */ f.jsx(
      Oi,
      {
        eyebrow: "UNDERSTAND WHAT MATTERS",
        title: "Findings",
        text: "Evidence and a clear next step for every detected issue."
      }
    ),
    /* @__PURE__ */ f.jsxs("div", { className: "filters", children: [
      /* @__PURE__ */ f.jsxs("div", { className: "search-field", children: [
        /* @__PURE__ */ f.jsx(G1, { size: 16 }),
        /* @__PURE__ */ f.jsx(
          "input",
          {
            "aria-label": "Search findings",
            placeholder: "Search findings, resources or rules…",
            value: r,
            onChange: (p) => c(p.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ f.jsxs(
        "select",
        {
          "aria-label": "Filter cloud",
          value: m,
          onChange: (p) => h(p.target.value),
          children: [
            /* @__PURE__ */ f.jsx("option", { value: "all", children: "All clouds" }),
            ua.map((p) => /* @__PURE__ */ f.jsx("option", { value: p, children: Nn[p] }, p))
          ]
        }
      ),
      /* @__PURE__ */ f.jsxs(
        "select",
        {
          "aria-label": "Filter severity",
          value: y,
          onChange: (p) => x(p.target.value),
          children: [
            /* @__PURE__ */ f.jsx("option", { value: "all", children: "All severities" }),
            K1.map((p) => /* @__PURE__ */ f.jsx("option", { children: p }, p))
          ]
        }
      )
    ] }),
    /* @__PURE__ */ f.jsxs("div", { className: "panel", children: [
      /* @__PURE__ */ f.jsxs("div", { className: "panel-heading", children: [
        /* @__PURE__ */ f.jsxs("h2", { children: [
          "Detected issues ",
          /* @__PURE__ */ f.jsx("span", { className: "count", children: S.length })
        ] }),
        /* @__PURE__ */ f.jsx("span", { className: "muted small-text", children: "Sorted by weighted risk" })
      ] }),
      /* @__PURE__ */ f.jsx(k1, { findings: S, onSelect: o })
    ] })
  ] });
}
function Oi({
  eyebrow: a,
  title: l,
  text: o
}) {
  return /* @__PURE__ */ f.jsx("div", { className: "page-heading", children: /* @__PURE__ */ f.jsxs("div", { children: [
    /* @__PURE__ */ f.jsx("div", { className: "eyebrow", children: a }),
    /* @__PURE__ */ f.jsxs("h1", { children: [
      l,
      /* @__PURE__ */ f.jsx("span", { children: "." })
    ] }),
    /* @__PURE__ */ f.jsx("p", { children: o })
  ] }) });
}
function v3({ scan: a }) {
  const [l, o] = V.useState(""), [r, c] = V.useState("all"), [m, h] = V.useState(null), y = ((a == null ? void 0 : a.resources) || []).filter(
    (x) => (r === "all" || x.provider === r) && `${x.name} ${x.resource_type} ${x.region}`.toLowerCase().includes(l.toLowerCase())
  );
  return /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
    /* @__PURE__ */ f.jsx(
      Oi,
      {
        eyebrow: "KNOW YOUR SURFACE",
        title: "Resource inventory",
        text: "Normalized assets from your selected scan, in one place."
      }
    ),
    /* @__PURE__ */ f.jsxs("div", { className: "filters", children: [
      /* @__PURE__ */ f.jsxs("div", { className: "search-field", children: [
        /* @__PURE__ */ f.jsx(G1, { size: 16 }),
        /* @__PURE__ */ f.jsx(
          "input",
          {
            "aria-label": "Search resources",
            placeholder: "Search by name, type or region…",
            value: l,
            onChange: (x) => o(x.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ f.jsxs(
        "select",
        {
          "aria-label": "Filter resources by cloud",
          value: r,
          onChange: (x) => c(x.target.value),
          children: [
            /* @__PURE__ */ f.jsx("option", { value: "all", children: "All clouds" }),
            ua.map((x) => /* @__PURE__ */ f.jsx("option", { value: x, children: Nn[x] }, x))
          ]
        }
      )
    ] }),
    /* @__PURE__ */ f.jsxs("div", { className: "panel table-scroll", children: [
      /* @__PURE__ */ f.jsxs("table", { children: [
        /* @__PURE__ */ f.jsx("thead", { children: /* @__PURE__ */ f.jsxs("tr", { children: [
          /* @__PURE__ */ f.jsx("th", { children: "Resource" }),
          /* @__PURE__ */ f.jsx("th", { children: "Type" }),
          /* @__PURE__ */ f.jsx("th", { children: "Cloud" }),
          /* @__PURE__ */ f.jsx("th", { children: "Region" }),
          /* @__PURE__ */ f.jsx("th", { children: "Findings" })
        ] }) }),
        /* @__PURE__ */ f.jsx("tbody", { children: y.map((x) => {
          const S = a == null ? void 0 : a.findings.filter(
            (p) => p.resource_id === x.resource_id && p.provider === x.provider
          ).length;
          return /* @__PURE__ */ f.jsxs("tr", { children: [
            /* @__PURE__ */ f.jsx("td", { children: /* @__PURE__ */ f.jsx(
              "button",
              {
                className: "finding-title",
                onClick: () => h(x),
                children: x.name
              }
            ) }),
            /* @__PURE__ */ f.jsx("td", { className: "muted", children: Dn(x.resource_type) }),
            /* @__PURE__ */ f.jsx("td", { children: /* @__PURE__ */ f.jsxs("span", { className: "provider-inline", children: [
              /* @__PURE__ */ f.jsx(rn, { provider: x.provider, small: !0 }),
              Nn[x.provider]
            ] }) }),
            /* @__PURE__ */ f.jsx("td", { className: "mono muted", children: x.region }),
            /* @__PURE__ */ f.jsx("td", { children: /* @__PURE__ */ f.jsxs("span", { className: S ? "warn" : "good", children: [
              S || 0,
              " ",
              S ? "open" : "· clean"
            ] }) })
          ] }, x.resource_id);
        }) })
      ] }),
      !y.length && /* @__PURE__ */ f.jsx("div", { className: "empty-inline", children: "No resources match this view. Run a scan to populate your inventory." })
    ] }),
    m && /* @__PURE__ */ f.jsxs(js, { title: m.name, onClose: () => h(null), children: [
      /* @__PURE__ */ f.jsxs("span", { className: "tag", children: [
        Nn[m.provider],
        " /",
        " ",
        Dn(m.resource_type)
      ] }),
      /* @__PURE__ */ f.jsx("h3", { children: "Normalized properties" }),
      /* @__PURE__ */ f.jsx("pre", { children: JSON.stringify(m.properties, null, 2) }),
      /* @__PURE__ */ f.jsx("p", { className: "mono muted small-text", children: m.resource_id })
    ] })
  ] });
}
function g3({ rules: a }) {
  const [l, o] = V.useState(null);
  return /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
    /* @__PURE__ */ f.jsx(
      Oi,
      {
        eyebrow: "ONE ENGINE, SHARED STANDARDS",
        title: "Rule library",
        text: "Eight transparent YAML rules. Four security categories. No black box."
      }
    ),
    /* @__PURE__ */ f.jsxs("div", { className: "callout", children: [
      /* @__PURE__ */ f.jsx(L1, { size: 20 }),
      /* @__PURE__ */ f.jsxs("div", { children: [
        /* @__PURE__ */ f.jsx("strong", { children: "Coverage has boundaries." }),
        /* @__PURE__ */ f.jsx("p", { children: "Database checks are AWS-only. Azure and GCP disks are encrypted by default; ENC-001 can fire on AWS. These fixtures do not establish live-cloud accuracy." })
      ] })
    ] }),
    /* @__PURE__ */ f.jsx("div", { className: "rule-grid", children: a.map((r) => /* @__PURE__ */ f.jsxs(
      Me.button,
      {
        whileHover: { y: -3 },
        className: "panel rule-card",
        onClick: () => o(r),
        children: [
          /* @__PURE__ */ f.jsxs("div", { children: [
            /* @__PURE__ */ f.jsx("span", { className: "eyebrow", children: r.id }),
            /* @__PURE__ */ f.jsx(Do, { value: r.severity })
          ] }),
          /* @__PURE__ */ f.jsx("h3", { children: r.title }),
          /* @__PURE__ */ f.jsxs("div", { className: "rule-foot", children: [
            /* @__PURE__ */ f.jsx("span", { children: r.coverage }),
            /* @__PURE__ */ f.jsx(ji, { size: 17 })
          ] })
        ]
      },
      r.id
    )) }),
    l && /* @__PURE__ */ f.jsxs(js, { title: l.id, onClose: () => o(null), wide: !0, children: [
      /* @__PURE__ */ f.jsx(Do, { value: l.severity }),
      /* @__PURE__ */ f.jsx("h2", { children: l.title }),
      /* @__PURE__ */ f.jsxs("p", { className: "muted", children: [
        l.coverage,
        " · ",
        l.tests,
        " embedded test cases"
      ] }),
      /* @__PURE__ */ f.jsx("h3", { children: "Detection condition" }),
      /* @__PURE__ */ f.jsx("pre", { children: l.condition }),
      /* @__PURE__ */ f.jsx("h3", { children: "Remediation guidance" }),
      Object.entries(l.remediation).map(([r, c]) => /* @__PURE__ */ f.jsxs("div", { className: "rule-remediation", children: [
        /* @__PURE__ */ f.jsx("span", { className: "tag", children: r === "default" ? "All providers" : Nn[r] }),
        /* @__PURE__ */ f.jsx("p", { children: c })
      ] }, r))
    ] })
  ] });
}
function x3({
  history: a,
  onOpen: l
}) {
  return /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
    /* @__PURE__ */ f.jsx(
      Oi,
      {
        eyebrow: "PROGRESS, MADE VISIBLE",
        title: "Scan history",
        text: "Compare equivalent scopes and see new and resolved findings."
      }
    ),
    /* @__PURE__ */ f.jsxs("div", { className: "panel table-scroll", children: [
      /* @__PURE__ */ f.jsxs("table", { children: [
        /* @__PURE__ */ f.jsx("thead", { children: /* @__PURE__ */ f.jsxs("tr", { children: [
          /* @__PURE__ */ f.jsx("th", { children: "Scan" }),
          /* @__PURE__ */ f.jsx("th", { children: "Scope" }),
          /* @__PURE__ */ f.jsx("th", { children: "Risk" }),
          /* @__PURE__ */ f.jsx("th", { children: "Findings" }),
          /* @__PURE__ */ f.jsx("th", { children: "Drift" }),
          /* @__PURE__ */ f.jsx("th", {})
        ] }) }),
        /* @__PURE__ */ f.jsx("tbody", { children: a.map((o) => /* @__PURE__ */ f.jsxs("tr", { children: [
          /* @__PURE__ */ f.jsxs("td", { children: [
            /* @__PURE__ */ f.jsxs(
              "button",
              {
                className: "finding-title",
                onClick: () => l(o.scan_id),
                children: [
                  Dn(o.scenario),
                  " · ",
                  Dn(o.criticality)
                ]
              }
            ),
            /* @__PURE__ */ f.jsxs("div", { className: "resource-name", children: [
              Mo(o.started_at),
              " · ",
              o.scan_id.slice(0, 8)
            ] })
          ] }),
          /* @__PURE__ */ f.jsx("td", { children: /* @__PURE__ */ f.jsx("div", { className: "provider-stack", children: o.providers.map((r) => /* @__PURE__ */ f.jsx(rn, { provider: r, small: !0 }, r)) }) }),
          /* @__PURE__ */ f.jsx("td", { className: "mono", children: o.account_score }),
          /* @__PURE__ */ f.jsx("td", { className: "mono", children: o.finding_count }),
          /* @__PURE__ */ f.jsx("td", { children: o.drift.previous_scan_id ? /* @__PURE__ */ f.jsxs("div", { className: "drift-count", children: [
            /* @__PURE__ */ f.jsxs("span", { className: "warn", children: [
              "+",
              o.drift.new.length,
              " new"
            ] }),
            /* @__PURE__ */ f.jsxs("span", { className: "good", children: [
              "−",
              o.drift.resolved.length,
              " resolved"
            ] })
          ] }) : /* @__PURE__ */ f.jsx("span", { className: "muted small-text", children: "First in scope" }) }),
          /* @__PURE__ */ f.jsx("td", { children: /* @__PURE__ */ f.jsx(
            "button",
            {
              className: "icon-button",
              "aria-label": `Open scan ${o.scan_id}`,
              onClick: () => l(o.scan_id),
              children: /* @__PURE__ */ f.jsx(ji, { size: 17 })
            }
          ) })
        ] }, o.scan_id)) })
      ] }),
      !a.length && /* @__PURE__ */ f.jsx("div", { className: "empty-inline", children: "Your scan history starts with your first scan." })
    ] }),
    /* @__PURE__ */ f.jsxs("div", { className: "callout", children: [
      /* @__PURE__ */ f.jsx(Zd, { size: 19 }),
      /* @__PURE__ */ f.jsx("p", { children: "Drift compares your most recent scan with the same providers and criticality. Account and resource identities are included, so findings from different clouds stay distinct." })
    ] })
  ] });
}
function S3({ onScan: a }) {
  return /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
    /* @__PURE__ */ f.jsx(
      Oi,
      {
        eyebrow: "YOUR CLOUD LANDSCAPE",
        title: "Cloud connections",
        text: "Explore all three providers offline. Connect real accounts in the next phase."
      }
    ),
    /* @__PURE__ */ f.jsx("div", { className: "cloud-grid", children: ua.map((l) => /* @__PURE__ */ f.jsxs("div", { className: "panel connection-card", children: [
      /* @__PURE__ */ f.jsxs("div", { className: "connection-top", children: [
        /* @__PURE__ */ f.jsx(rn, { provider: l }),
        /* @__PURE__ */ f.jsx("span", { className: "tag", children: "OFFLINE" })
      ] }),
      /* @__PURE__ */ f.jsx("h2", { children: hd[l] }),
      /* @__PURE__ */ f.jsx("p", { children: "Synthetic storage, firewall, identity and disk resources, using a shared normalized schema." }),
      /* @__PURE__ */ f.jsxs("div", { className: "connection-row", children: [
        /* @__PURE__ */ f.jsx("span", { children: "Fixture source" }),
        /* @__PURE__ */ f.jsxs("span", { className: "good", children: [
          /* @__PURE__ */ f.jsx(Co, { size: 14 }),
          " Available"
        ] })
      ] }),
      /* @__PURE__ */ f.jsxs("div", { className: "connection-row", children: [
        /* @__PURE__ */ f.jsx("span", { children: "Cloud API access" }),
        /* @__PURE__ */ f.jsx("span", { className: "muted", children: "Not connected" })
      ] }),
      /* @__PURE__ */ f.jsxs("button", { className: "button secondary full", onClick: a, children: [
        "Scan offline fixtures ",
        /* @__PURE__ */ f.jsx(Mi, { size: 16 })
      ] })
    ] }, l)) }),
    /* @__PURE__ */ f.jsxs("div", { className: "panel live-info", children: [
      /* @__PURE__ */ f.jsx("div", { className: "tag", children: "NEXT PHASE" }),
      /* @__PURE__ */ f.jsx("h2", { children: "Ready for real-world validation." }),
      /* @__PURE__ */ f.jsx("p", { children: "The original read-only collectors and Terraform sandboxes are included. The CLI can use configured cloud identities when you're ready. This web release keeps live access disabled until individual user identities and account authorization are configured." }),
      /* @__PURE__ */ f.jsxs("div", { className: "code-line", children: [
        /* @__PURE__ */ f.jsx(Q1, { size: 15 }),
        /* @__PURE__ */ f.jsx("code", { children: "mcscan scan --provider aws --region us-east-1 --format cli json html" })
      ] })
    ] })
  ] });
}
function b3({ notify: a }) {
  const [l, o] = V.useState([]), [r, c] = V.useState(!1), [m, h] = V.useState(""), [y, x] = V.useState(!1), [S, p] = V.useState({ name: "", email: "", password: "" });
  async function v() {
    try {
      o(await An("/users"));
    } catch (j) {
      h(j.message);
    }
  }
  V.useEffect(() => {
    v();
  }, []);
  async function b(j) {
    j.preventDefault(), x(!0), h("");
    try {
      await Es("/users", S), await v(), c(!1), p({ name: "", email: "", password: "" }), a("Team member created");
    } catch (_) {
      h(_.message);
    } finally {
      x(!1);
    }
  }
  async function A(j) {
    try {
      await An("/users/" + j.id, {
        method: "PATCH",
        body: JSON.stringify({ active: !j.active })
      }), await v(), a(
        j.active ? "Member deactivated. Sessions revoked." : "Member reactivated."
      );
    } catch (_) {
      h(_.message);
    }
  }
  return /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
    /* @__PURE__ */ f.jsxs("div", { className: "split-title", children: [
      /* @__PURE__ */ f.jsx(
        Oi,
        {
          eyebrow: "ONE ADMIN. A SHARED MISSION.",
          title: "Team members",
          text: "Manage access. Every member has a private scan workspace."
        }
      ),
      /* @__PURE__ */ f.jsxs(
        "button",
        {
          className: "button primary",
          onClick: () => {
            h(""), c(!0);
          },
          children: [
            /* @__PURE__ */ f.jsx(q1, { size: 17 }),
            "Add member"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ f.jsx(oa, { error: r ? "" : m }),
    /* @__PURE__ */ f.jsx("div", { className: "panel table-scroll", children: /* @__PURE__ */ f.jsxs("table", { children: [
      /* @__PURE__ */ f.jsx("thead", { children: /* @__PURE__ */ f.jsxs("tr", { children: [
        /* @__PURE__ */ f.jsx("th", { children: "Member" }),
        /* @__PURE__ */ f.jsx("th", { children: "Role" }),
        /* @__PURE__ */ f.jsx("th", { children: "Status" }),
        /* @__PURE__ */ f.jsx("th", { children: "Scans" }),
        /* @__PURE__ */ f.jsx("th", { children: "Access" })
      ] }) }),
      /* @__PURE__ */ f.jsx("tbody", { children: l.map((j) => /* @__PURE__ */ f.jsxs("tr", { children: [
        /* @__PURE__ */ f.jsx("td", { children: /* @__PURE__ */ f.jsxs("div", { className: "member-name", children: [
          /* @__PURE__ */ f.jsx("span", { className: "avatar", children: j.name.split(" ").map((_) => _[0]).slice(0, 2).join("") }),
          /* @__PURE__ */ f.jsxs("div", { children: [
            /* @__PURE__ */ f.jsx("strong", { children: j.name }),
            /* @__PURE__ */ f.jsx("div", { className: "resource-name", children: j.email })
          ] })
        ] }) }),
        /* @__PURE__ */ f.jsx("td", { children: /* @__PURE__ */ f.jsx(
          "span",
          {
            className: `tag ${j.role === "admin" ? "accent-tag" : ""}`,
            children: j.role === "admin" ? "Administrator" : "Member"
          }
        ) }),
        /* @__PURE__ */ f.jsx("td", { children: /* @__PURE__ */ f.jsx("span", { className: j.active ? "status-dot" : "muted", children: j.active ? "Active" : "Inactive" }) }),
        /* @__PURE__ */ f.jsx("td", { className: "mono", children: j.scan_count }),
        /* @__PURE__ */ f.jsx("td", { children: j.role === "admin" ? /* @__PURE__ */ f.jsx("span", { className: "muted small-text", children: "Single admin" }) : /* @__PURE__ */ f.jsx(
          "button",
          {
            className: "button small secondary",
            onClick: () => A(j),
            children: j.active ? "Deactivate" : "Reactivate"
          }
        ) })
      ] }, j.id)) })
    ] }) }),
    /* @__PURE__ */ f.jsx("p", { className: "muted small-text", children: "Deactivating a member ends their active sessions and preserves their scans. Members cannot manage accounts or view other members’ scans." }),
    r && /* @__PURE__ */ f.jsx(js, { title: "Add a team member", onClose: () => c(!1), children: /* @__PURE__ */ f.jsxs("form", { onSubmit: b, children: [
      /* @__PURE__ */ f.jsx("p", { className: "muted", children: "Create a member account and share the initial credentials directly. Members can change their password in Settings." }),
      ["name", "email", "password"].map((j) => /* @__PURE__ */ f.jsxs("label", { children: [
        j === "name" ? "Full name" : j === "email" ? "Email address" : "Initial password",
        /* @__PURE__ */ f.jsx(
          "input",
          {
            required: !0,
            type: j === "password" ? "password" : j === "email" ? "email" : "text",
            minLength: j === "password" ? 12 : 1,
            maxLength: j === "name" ? 80 : j === "email" ? 254 : 256,
            autoComplete: "off",
            value: S[j],
            onChange: (_) => p({ ...S, [j]: _.target.value })
          }
        )
      ] }, j)),
      /* @__PURE__ */ f.jsx(oa, { error: m }),
      /* @__PURE__ */ f.jsxs("button", { className: "button primary full", disabled: y, children: [
        y ? "Creating…" : "Create member",
        /* @__PURE__ */ f.jsx(Mi, { size: 16 })
      ] })
    ] }) })
  ] });
}
function T3() {
  const [a, l] = V.useState([]), [o, r] = V.useState("");
  return V.useEffect(() => {
    An("/audit").then(l).catch((c) => r(c.message));
  }, []), /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
    /* @__PURE__ */ f.jsx(
      Oi,
      {
        eyebrow: "ACCOUNTABILITY, BUILT IN",
        title: "Activity log",
        text: "Workspace sign-ins, membership changes, scans and exports."
      }
    ),
    /* @__PURE__ */ f.jsx(oa, { error: o }),
    /* @__PURE__ */ f.jsx("div", { className: "panel", children: /* @__PURE__ */ f.jsx("div", { className: "audit-list", children: a.map((c) => /* @__PURE__ */ f.jsxs("div", { children: [
      /* @__PURE__ */ f.jsx("span", { className: "timeline-icon", children: /* @__PURE__ */ f.jsx(B1, { size: 16 }) }),
      /* @__PURE__ */ f.jsxs("div", { children: [
        /* @__PURE__ */ f.jsx("strong", { children: Dn(c.action) }),
        /* @__PURE__ */ f.jsxs("p", { children: [
          c.user_name || "Unknown member",
          " ",
          /* @__PURE__ */ f.jsx("span", { className: "mono", children: c.detail })
        ] })
      ] }),
      /* @__PURE__ */ f.jsx("time", { children: Mo(c.created_at) })
    ] }, c.id)) }) })
  ] });
}
function E3({
  user: a,
  onLogout: l
}) {
  const [o, r] = V.useState(""), [c, m] = V.useState(""), [h, y] = V.useState(""), [x, S] = V.useState(""), [p, v] = V.useState(!1);
  async function b(A) {
    if (A.preventDefault(), c !== h) {
      S("New passwords must match");
      return;
    }
    v(!0);
    try {
      await Es("/auth/password", {
        current_password: o,
        new_password: c
      }), l();
    } catch (j) {
      S(j.message);
    } finally {
      v(!1);
    }
  }
  return /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
    /* @__PURE__ */ f.jsx(
      Oi,
      {
        eyebrow: "MAKE IT YOURS",
        title: "Account settings",
        text: "Your profile and session security."
      }
    ),
    /* @__PURE__ */ f.jsxs("div", { className: "settings-grid", children: [
      /* @__PURE__ */ f.jsxs("div", { className: "panel settings-panel", children: [
        /* @__PURE__ */ f.jsx("h2", { children: "Profile" }),
        /* @__PURE__ */ f.jsxs("div", { className: "detail-grid", children: [
          /* @__PURE__ */ f.jsxs("div", { children: [
            /* @__PURE__ */ f.jsx("label", { children: "NAME" }),
            /* @__PURE__ */ f.jsx("strong", { children: a.name })
          ] }),
          /* @__PURE__ */ f.jsxs("div", { children: [
            /* @__PURE__ */ f.jsx("label", { children: "ROLE" }),
            /* @__PURE__ */ f.jsx("strong", { children: Dn(a.role) })
          ] }),
          /* @__PURE__ */ f.jsxs("div", { children: [
            /* @__PURE__ */ f.jsx("label", { children: "EMAIL" }),
            /* @__PURE__ */ f.jsx("strong", { children: a.email })
          ] })
        ] }),
        /* @__PURE__ */ f.jsxs("div", { className: "callout", children: [
          /* @__PURE__ */ f.jsx(Y1, { size: 18 }),
          /* @__PURE__ */ f.jsx("p", { children: "Your session expires after 12 hours. Scan data is private to your account." })
        ] })
      ] }),
      /* @__PURE__ */ f.jsxs("form", { className: "panel settings-panel", onSubmit: b, children: [
        /* @__PURE__ */ f.jsx("h2", { children: "Change password" }),
        /* @__PURE__ */ f.jsx("p", { className: "muted small-text", children: "Changing your password signs you out of all sessions." }),
        /* @__PURE__ */ f.jsxs("label", { children: [
          "Current password",
          /* @__PURE__ */ f.jsx(
            "input",
            {
              required: !0,
              type: "password",
              autoComplete: "current-password",
              value: o,
              onChange: (A) => r(A.target.value)
            }
          )
        ] }),
        /* @__PURE__ */ f.jsxs("label", { children: [
          "New password",
          /* @__PURE__ */ f.jsx(
            "input",
            {
              required: !0,
              type: "password",
              minLength: 12,
              maxLength: 256,
              autoComplete: "new-password",
              value: c,
              onChange: (A) => m(A.target.value)
            }
          )
        ] }),
        /* @__PURE__ */ f.jsxs("label", { children: [
          "Confirm new password",
          /* @__PURE__ */ f.jsx(
            "input",
            {
              required: !0,
              type: "password",
              autoComplete: "new-password",
              value: h,
              onChange: (A) => y(A.target.value)
            }
          )
        ] }),
        /* @__PURE__ */ f.jsx(oa, { error: x }),
        /* @__PURE__ */ f.jsxs("button", { className: "button primary", disabled: p, children: [
          "Update password ",
          /* @__PURE__ */ f.jsx(Mi, { size: 16 })
        ] })
      ] })
    ] })
  ] });
}
function j3() {
  var F;
  const [a, l] = V.useState(null), [o, r] = V.useState(!0), [c, m] = V.useState("overview"), [h, y] = V.useState(null), [x, S] = V.useState([]), [p, v] = V.useState([]), [b, A] = V.useState(!1), [j, _] = V.useState(null), [w, L] = V.useState(!1), [q, X] = V.useState(""), [Q, I] = V.useState(""), [ot, K] = V.useState(!1), [Y, lt] = V.useState("all"), J = V.useRef(null);
  function ft(G) {
    X(G), J.current && clearTimeout(J.current), J.current = setTimeout(() => X(""), 4500);
  }
  function xt() {
    l(null), y(null), S([]), v([]), dd(""), m("overview");
  }
  V.useEffect(() => {
    An("/auth/me").then((at) => {
      dd(at.csrf), l(at.user);
    }).catch(() => {
    }).finally(() => r(!1));
    const G = () => {
      xt(), I("Your session ended. Sign in again.");
    };
    return window.addEventListener("session-expired", G), () => {
      window.removeEventListener("session-expired", G), J.current && clearTimeout(J.current);
    };
  }, []), V.useEffect(() => {
    if (!a) return;
    let G = !0;
    return Promise.all([An("/scans"), An("/rules")]).then(async ([at, kt]) => {
      if (G && (S(at), v(kt), at.length)) {
        const Oe = await An("/scans/" + at[0].scan_id);
        G && y(Oe);
      }
    }).catch((at) => {
      G && I(at.message);
    }), () => {
      G = !1;
    };
  }, [a]);
  async function Ut(G) {
    if (K(!1), I(""), G.startsWith("scan:")) {
      try {
        y(await An("/scans/" + G.slice(5))), m("overview"), ft("Viewing selected scan");
      } catch (at) {
        I(at.message);
      }
      return;
    }
    G.startsWith("findings:") ? (lt(G.split(":")[1]), m("findings")) : (lt("all"), m(G));
  }
  async function Kt() {
    try {
      await Es("/auth/logout"), xt();
    } catch (G) {
      I(G.message);
    }
  }
  function Ct(G) {
    y(G), S((at) => [G, ...at]), A(!1), m("overview"), ft(
      `Scan complete · ${G.resources_scanned} resources · ${G.finding_count} findings`
    );
  }
  async function Z(G) {
    if (L(!1), !!h)
      try {
        await f3(h, G), ft(`${G.toUpperCase()} report downloaded`);
      } catch (at) {
        I(at.message);
      }
  }
  if (o)
    return /* @__PURE__ */ f.jsxs("div", { className: "loading-screen", children: [
      /* @__PURE__ */ f.jsx(md, {}),
      /* @__PURE__ */ f.jsx(Kd, { className: "spin" })
    ] });
  if (!a)
    return /* @__PURE__ */ f.jsx(Vg, { reducedMotion: "user", children: /* @__PURE__ */ f.jsx(
      d3,
      {
        onLogin: (G) => {
          I(""), l(G);
        }
      }
    ) });
  const st = ((F = Pg.find((G) => G.id === c)) == null ? void 0 : F.label) || "Settings";
  return /* @__PURE__ */ f.jsx(Vg, { reducedMotion: "user", children: /* @__PURE__ */ f.jsxs("div", { className: "app", children: [
    /* @__PURE__ */ f.jsx("a", { href: "#main-content", className: "skip-link", children: "Skip to content" }),
    ot && /* @__PURE__ */ f.jsx("div", { className: "mobile-scrim", onClick: () => K(!1) }),
    /* @__PURE__ */ f.jsxs("aside", { className: `sidebar ${ot ? "open" : ""}`, children: [
      /* @__PURE__ */ f.jsxs("div", { className: "sidebar-brand", children: [
        /* @__PURE__ */ f.jsx(md, {}),
        /* @__PURE__ */ f.jsx("span", { className: "version", children: "v1.0" })
      ] }),
      /* @__PURE__ */ f.jsxs(
        "button",
        {
          className: "workspace-switch",
          onClick: () => Ut("settings"),
          children: [
            /* @__PURE__ */ f.jsx("span", { className: "workspace-icon", children: /* @__PURE__ */ f.jsx(sl, { size: 18 }) }),
            /* @__PURE__ */ f.jsxs("span", { children: [
              /* @__PURE__ */ f.jsx("strong", { children: "Security workspace" }),
              /* @__PURE__ */ f.jsx("small", { children: a.role === "admin" ? "Administrator" : "Team member" })
            ] }),
            /* @__PURE__ */ f.jsx(Jg, { size: 14 })
          ]
        }
      ),
      /* @__PURE__ */ f.jsx("div", { className: "nav-label", children: "WORKSPACE" }),
      /* @__PURE__ */ f.jsx("nav", { children: Pg.filter((G) => !G.admin || a.role === "admin").map((G) => /* @__PURE__ */ f.jsxs(
        "button",
        {
          onClick: () => Ut(G.id),
          className: c === G.id ? "active" : "",
          children: [
            c === G.id && /* @__PURE__ */ f.jsx(
              Me.span,
              {
                layoutId: "nav-indicator",
                className: "nav-indicator"
              }
            ),
            /* @__PURE__ */ f.jsx(G.icon, { size: 17 }),
            /* @__PURE__ */ f.jsx("span", { children: G.label }),
            G.id === "findings" && !!(h != null && h.finding_count) && /* @__PURE__ */ f.jsx("small", { children: h.finding_count })
          ]
        },
        G.id
      )) }),
      /* @__PURE__ */ f.jsxs("div", { className: "sidebar-bottom", children: [
        /* @__PURE__ */ f.jsxs("div", { className: "offline-box", children: [
          /* @__PURE__ */ f.jsx("span", { className: "status-dot", children: "Offline demo" }),
          /* @__PURE__ */ f.jsxs("p", { children: [
            "All the signal.",
            /* @__PURE__ */ f.jsx("br", {}),
            "No cloud account required."
          ] }),
          /* @__PURE__ */ f.jsxs("button", { onClick: () => Ut("clouds"), children: [
            "Explore environments ",
            /* @__PURE__ */ f.jsx(ji, { size: 13 })
          ] })
        ] }),
        /* @__PURE__ */ f.jsxs(
          "button",
          {
            className: c === "settings" ? "bottom-nav active" : "bottom-nav",
            onClick: () => Ut("settings"),
            children: [
              /* @__PURE__ */ f.jsx(r3, { size: 17 }),
              "Settings"
            ]
          }
        ),
        /* @__PURE__ */ f.jsxs("button", { className: "user-profile", onClick: Kt, title: "Sign out", children: [
          /* @__PURE__ */ f.jsx("span", { className: "avatar", children: a.name.split(" ").map((G) => G[0]).slice(0, 2).join("") }),
          /* @__PURE__ */ f.jsxs("span", { children: [
            /* @__PURE__ */ f.jsx("strong", { children: a.name }),
            /* @__PURE__ */ f.jsx("small", { children: a.role === "admin" ? "Administrator" : "Member" })
          ] }),
          /* @__PURE__ */ f.jsx(u3, { size: 16 })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ f.jsxs("div", { className: "main-wrap", children: [
      /* @__PURE__ */ f.jsxs("header", { className: "topbar", children: [
        /* @__PURE__ */ f.jsxs("div", { className: "breadcrumb", children: [
          /* @__PURE__ */ f.jsx(
            "button",
            {
              className: "icon-button mobile-menu",
              "aria-label": "Open navigation",
              onClick: () => K(!0),
              children: /* @__PURE__ */ f.jsx(o3, { size: 20 })
            }
          ),
          /* @__PURE__ */ f.jsx(sl, { size: 16 }),
          /* @__PURE__ */ f.jsx("span", { children: "Workspace" }),
          /* @__PURE__ */ f.jsx(Jg, { size: 13 }),
          /* @__PURE__ */ f.jsx("strong", { children: st })
        ] }),
        /* @__PURE__ */ f.jsxs("div", { className: "topbar-right", children: [
          /* @__PURE__ */ f.jsxs("span", { className: "offline-indicator", children: [
            /* @__PURE__ */ f.jsx("i", {}),
            " OFFLINE ENVIRONMENT"
          ] }),
          /* @__PURE__ */ f.jsx(
            "button",
            {
              className: "icon-button",
              "aria-label": "View account settings",
              onClick: () => Ut("settings"),
              children: /* @__PURE__ */ f.jsx("span", { className: "avatar tiny", children: a.name[0] })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ f.jsxs("div", { className: "toolbar", children: [
        /* @__PURE__ */ f.jsxs("span", { className: "scope-label", children: [
          /* @__PURE__ */ f.jsx(a3, { size: 14 }),
          h ? `${h.providers.length} clouds / ${Dn(h.criticality)} / ${Dn(h.scenario)}` : "Multi-cloud security"
        ] }),
        /* @__PURE__ */ f.jsxs("div", { className: "toolbar-actions", children: [
          h && /* @__PURE__ */ f.jsxs("div", { className: "export-wrap", children: [
            /* @__PURE__ */ f.jsxs(
              "button",
              {
                className: "button secondary small",
                onClick: () => L(!w),
                "aria-expanded": w,
                children: [
                  /* @__PURE__ */ f.jsx(kg, { size: 14 }),
                  " Export report",
                  " ",
                  /* @__PURE__ */ f.jsx(e3, { size: 13 })
                ]
              }
            ),
            w && /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
              /* @__PURE__ */ f.jsx(
                "div",
                {
                  className: "dropdown-catcher",
                  onClick: () => L(!1)
                }
              ),
              /* @__PURE__ */ f.jsx("div", { className: "dropdown", children: ["html", "json", "sarif", "csv"].map((G) => /* @__PURE__ */ f.jsxs("button", { onClick: () => Z(G), children: [
                G.toUpperCase(),
                " report",
                " ",
                /* @__PURE__ */ f.jsx(kg, { size: 14 })
              ] }, G)) })
            ] })
          ] }),
          /* @__PURE__ */ f.jsxs(
            Me.button,
            {
              whileTap: { scale: 0.97 },
              className: "button primary small",
              onClick: () => A(!0),
              children: [
                /* @__PURE__ */ f.jsx(q1, { size: 16 }),
                "New scan"
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ f.jsxs("main", { id: "main-content", children: [
        /* @__PURE__ */ f.jsx(oa, { error: Q }),
        /* @__PURE__ */ f.jsx(zg, { mode: "wait", children: /* @__PURE__ */ f.jsxs(
          Me.div,
          {
            ...No,
            children: [
              c === "overview" && /* @__PURE__ */ f.jsx(
                y3,
                {
                  scan: h,
                  history: x,
                  rules: p,
                  onNew: () => A(!0),
                  onView: Ut,
                  onFinding: _
                }
              ),
              " ",
              c === "findings" && /* @__PURE__ */ f.jsx(
                p3,
                {
                  scan: h,
                  initialProvider: Y,
                  onFinding: _
                }
              ),
              " ",
              c === "resources" && /* @__PURE__ */ f.jsx(v3, { scan: h }),
              " ",
              c === "history" && /* @__PURE__ */ f.jsx(
                x3,
                {
                  history: x,
                  onOpen: (G) => Ut("scan:" + G)
                }
              ),
              " ",
              c === "rules" && /* @__PURE__ */ f.jsx(g3, { rules: p }),
              " ",
              c === "clouds" && /* @__PURE__ */ f.jsx(S3, { onScan: () => A(!0) }),
              " ",
              c === "users" && a.role === "admin" && /* @__PURE__ */ f.jsx(b3, { notify: ft }),
              " ",
              c === "activity" && a.role === "admin" && /* @__PURE__ */ f.jsx(T3, {}),
              " ",
              c === "settings" && /* @__PURE__ */ f.jsx(
                E3,
                {
                  user: a,
                  onLogout: () => {
                    xt(), ft(
                      "Password changed. Sign in with your new password."
                    );
                  }
                }
              )
            ]
          },
          c + (c === "findings" ? Y : "")
        ) })
      ] }),
      /* @__PURE__ */ f.jsxs("footer", { className: "app-footer", children: [
        /* @__PURE__ */ f.jsxs("span", { children: [
          /* @__PURE__ */ f.jsx("span", { className: "footer-mark", children: "///" }),
          " Visibility is your first defense."
        ] }),
        /* @__PURE__ */ f.jsx("span", { children: "READ-ONLY · FIXTURE-VALIDATED · v1.0.0" })
      ] })
    ] }),
    /* @__PURE__ */ f.jsxs(zg, { children: [
      b && /* @__PURE__ */ f.jsx(h3, { onClose: () => A(!1), onScan: Ct }),
      " ",
      j && /* @__PURE__ */ f.jsx(m3, { finding: j, onClose: () => _(null) }),
      " ",
      q && /* @__PURE__ */ f.jsxs(
        Me.div,
        {
          className: "toast",
          role: "status",
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: 10 },
          children: [
            /* @__PURE__ */ f.jsx(Co, { size: 17 }),
            q,
            /* @__PURE__ */ f.jsx(
              "button",
              {
                "aria-label": "Dismiss notification",
                onClick: () => X(""),
                children: /* @__PURE__ */ f.jsx(Z1, { size: 15 })
              }
            )
          ]
        }
      )
    ] })
  ] }) });
}
const so = /* @__PURE__ */ new WeakMap();
let A3 = 0;
function Ig(a) {
  !a.active && a.queue.length && (a.active = a.queue.shift(), a.send("request", a.active.message));
}
function N3(a) {
  var c, m;
  let l = so.get(a.parentElement);
  if (!l) {
    const h = a.parentElement.querySelector(".react-root");
    if (!h) throw new Error("Streamlit dashboard root was not mounted");
    l = {
      root: Wb.createRoot(h),
      queue: [],
      active: null,
      lastReplyId: 0,
      send: a.setTriggerValue
    }, so.set(a.parentElement, l);
  }
  l.send = a.setTriggerValue;
  const o = (c = a.data) == null ? void 0 : c.reply;
  if (o && o.id !== l.lastReplyId && ((m = l.active) == null ? void 0 : m.message.id) === o.id) {
    l.lastReplyId = o.id;
    const h = l.active;
    l.active = null, o.status >= 200 && o.status < 300 ? h.resolve(o.content !== void 0 ? o : o.body) : h.reject(new Error(o.error || "Request failed")), Ig(l);
  }
  const r = l;
  return Fg((h, y) => new Promise((x, S) => {
    const p = y.headers;
    r.queue.push({
      message: {
        id: ++A3,
        path: h,
        method: y.method || "GET",
        body: typeof y.body == "string" ? y.body : null,
        csrf: (p == null ? void 0 : p["X-CSRF-Token"]) || ""
      },
      resolve: x,
      reject: S
    }), Ig(r);
  })), l.root.render(/* @__PURE__ */ f.jsx(j3, {})), () => {
    const h = so.get(a.parentElement);
    h && (h.root.unmount(), so.delete(a.parentElement), Fg(null));
  };
}
export {
  N3 as default
};

!(function(t, e) {
  'object' == typeof exports && 'undefined' != typeof module
    ? e(exports, require('the-answer'))
    : 'function' == typeof define && define.amd
    ? define(['exports', 'the-answer'], e)
    : e(((t = t || self).mysecret = {}), t['yj-answer']);
})(this, function(t, e) {
  'use strict';
  function r(t, e) {
    return t === e || (t != t && e != e);
  }
  function n(t, e) {
    for (var n = t.length; n--; ) if (r(t[n][0], e)) return n;
    return -1;
  }
  e = e && e.hasOwnProperty('default') ? e.default : e;
  var o = Array.prototype.splice;
  function a(t) {
    var e = -1,
      r = null == t ? 0 : t.length;
    for (this.clear(); ++e < r; ) {
      var n = t[e];
      this.set(n[0], n[1]);
    }
  }
  (a.prototype.clear = function() {
    (this.__data__ = []), (this.size = 0);
  }),
    (a.prototype.delete = function(t) {
      var e = this.__data__,
        r = n(e, t);
      return (
        !(r < 0) &&
        (r == e.length - 1 ? e.pop() : o.call(e, r, 1), --this.size, !0)
      );
    }),
    (a.prototype.get = function(t) {
      var e = this.__data__,
        r = n(e, t);
      return r < 0 ? void 0 : e[r][1];
    }),
    (a.prototype.has = function(t) {
      return n(this.__data__, t) > -1;
    }),
    (a.prototype.set = function(t, e) {
      var r = this.__data__,
        o = n(r, t);
      return o < 0 ? (++this.size, r.push([t, e])) : (r[o][1] = e), this;
    });
  var u =
      'object' == typeof global && global && global.Object === Object && global,
    i = 'object' == typeof self && self && self.Object === Object && self,
    c = u || i || Function('return this')(),
    f = c.Symbol,
    s = Object.prototype,
    l = s.hasOwnProperty,
    p = s.toString,
    v = f ? f.toStringTag : void 0;
  var h = Object.prototype.toString;
  var y = '[object Null]',
    b = '[object Undefined]',
    _ = f ? f.toStringTag : void 0;
  function d(t) {
    return null == t
      ? void 0 === t
        ? b
        : y
      : _ && _ in Object(t)
      ? (function(t) {
          var e = l.call(t, v),
            r = t[v];
          try {
            t[v] = void 0;
            var n = !0;
          } catch (t) {}
          var o = p.call(t);
          return n && (e ? (t[v] = r) : delete t[v]), o;
        })(t)
      : (function(t) {
          return h.call(t);
        })(t);
  }
  function j(t) {
    var e = typeof t;
    return null != t && ('object' == e || 'function' == e);
  }
  var g = '[object AsyncFunction]',
    O = '[object Function]',
    w = '[object GeneratorFunction]',
    m = '[object Proxy]';
  function A(t) {
    if (!j(t)) return !1;
    var e = d(t);
    return e == O || e == w || e == g || e == m;
  }
  var z,
    S = c['__core-js_shared__'],
    P = (z = /[^.]+$/.exec((S && S.keys && S.keys.IE_PROTO) || ''))
      ? 'Symbol(src)_1.' + z
      : '';
  var $ = Function.prototype.toString;
  function x(t) {
    if (null != t) {
      try {
        return $.call(t);
      } catch (t) {}
      try {
        return t + '';
      } catch (t) {}
    }
    return '';
  }
  var k = /^\[object .+?Constructor\]$/,
    E = Function.prototype,
    M = Object.prototype,
    F = E.toString,
    T = M.hasOwnProperty,
    B = RegExp(
      '^' +
        F.call(T)
          .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            '$1.*?'
          ) +
        '$'
    );
  function D(t) {
    return !(!j(t) || ((e = t), P && P in e)) && (A(t) ? B : k).test(x(t));
    var e;
  }
  function I(t, e) {
    var r = (function(t, e) {
      return null == t ? void 0 : t[e];
    })(t, e);
    return D(r) ? r : void 0;
  }
  var U = I(c, 'Map'),
    C = I(Object, 'create');
  var L = '__lodash_hash_undefined__',
    N = Object.prototype.hasOwnProperty;
  var V = Object.prototype.hasOwnProperty;
  var R = '__lodash_hash_undefined__';
  function W(t) {
    var e = -1,
      r = null == t ? 0 : t.length;
    for (this.clear(); ++e < r; ) {
      var n = t[e];
      this.set(n[0], n[1]);
    }
  }
  function q(t, e) {
    var r,
      n,
      o = t.__data__;
    return ('string' == (n = typeof (r = e)) ||
    'number' == n ||
    'symbol' == n ||
    'boolean' == n
    ? '__proto__' !== r
    : null === r)
      ? o['string' == typeof e ? 'string' : 'hash']
      : o.map;
  }
  function G(t) {
    var e = -1,
      r = null == t ? 0 : t.length;
    for (this.clear(); ++e < r; ) {
      var n = t[e];
      this.set(n[0], n[1]);
    }
  }
  (W.prototype.clear = function() {
    (this.__data__ = C ? C(null) : {}), (this.size = 0);
  }),
    (W.prototype.delete = function(t) {
      var e = this.has(t) && delete this.__data__[t];
      return (this.size -= e ? 1 : 0), e;
    }),
    (W.prototype.get = function(t) {
      var e = this.__data__;
      if (C) {
        var r = e[t];
        return r === L ? void 0 : r;
      }
      return N.call(e, t) ? e[t] : void 0;
    }),
    (W.prototype.has = function(t) {
      var e = this.__data__;
      return C ? void 0 !== e[t] : V.call(e, t);
    }),
    (W.prototype.set = function(t, e) {
      var r = this.__data__;
      return (
        (this.size += this.has(t) ? 0 : 1),
        (r[t] = C && void 0 === e ? R : e),
        this
      );
    }),
    (G.prototype.clear = function() {
      (this.size = 0),
        (this.__data__ = {
          hash: new W(),
          map: new (U || a)(),
          string: new W(),
        });
    }),
    (G.prototype.delete = function(t) {
      var e = q(this, t).delete(t);
      return (this.size -= e ? 1 : 0), e;
    }),
    (G.prototype.get = function(t) {
      return q(this, t).get(t);
    }),
    (G.prototype.has = function(t) {
      return q(this, t).has(t);
    }),
    (G.prototype.set = function(t, e) {
      var r = q(this, t),
        n = r.size;
      return r.set(t, e), (this.size += r.size == n ? 0 : 1), this;
    });
  var H = 200;
  function J(t) {
    var e = (this.__data__ = new a(t));
    this.size = e.size;
  }
  (J.prototype.clear = function() {
    (this.__data__ = new a()), (this.size = 0);
  }),
    (J.prototype.delete = function(t) {
      var e = this.__data__,
        r = e.delete(t);
      return (this.size = e.size), r;
    }),
    (J.prototype.get = function(t) {
      return this.__data__.get(t);
    }),
    (J.prototype.has = function(t) {
      return this.__data__.has(t);
    }),
    (J.prototype.set = function(t, e) {
      var r = this.__data__;
      if (r instanceof a) {
        var n = r.__data__;
        if (!U || n.length < H - 1)
          return n.push([t, e]), (this.size = ++r.size), this;
        r = this.__data__ = new G(n);
      }
      return r.set(t, e), (this.size = r.size), this;
    });
  var K = '__lodash_hash_undefined__';
  function Q(t) {
    var e = -1,
      r = null == t ? 0 : t.length;
    for (this.__data__ = new G(); ++e < r; ) this.add(t[e]);
  }
  function X(t, e) {
    for (var r = -1, n = null == t ? 0 : t.length; ++r < n; )
      if (e(t[r], r, t)) return !0;
    return !1;
  }
  (Q.prototype.add = Q.prototype.push = function(t) {
    return this.__data__.set(t, K), this;
  }),
    (Q.prototype.has = function(t) {
      return this.__data__.has(t);
    });
  var Y = 1,
    Z = 2;
  function tt(t, e, r, n, o, a) {
    var u = r & Y,
      i = t.length,
      c = e.length;
    if (i != c && !(u && c > i)) return !1;
    var f = a.get(t);
    if (f && a.get(e)) return f == e;
    var s = -1,
      l = !0,
      p = r & Z ? new Q() : void 0;
    for (a.set(t, e), a.set(e, t); ++s < i; ) {
      var v = t[s],
        h = e[s];
      if (n) var y = u ? n(h, v, s, e, t, a) : n(v, h, s, t, e, a);
      if (void 0 !== y) {
        if (y) continue;
        l = !1;
        break;
      }
      if (p) {
        if (
          !X(e, function(t, e) {
            if (((u = e), !p.has(u) && (v === t || o(v, t, r, n, a))))
              return p.push(e);
            var u;
          })
        ) {
          l = !1;
          break;
        }
      } else if (v !== h && !o(v, h, r, n, a)) {
        l = !1;
        break;
      }
    }
    return a.delete(t), a.delete(e), l;
  }
  var et = c.Uint8Array;
  function rt(t) {
    var e = -1,
      r = Array(t.size);
    return (
      t.forEach(function(t, n) {
        r[++e] = [n, t];
      }),
      r
    );
  }
  function nt(t) {
    var e = -1,
      r = Array(t.size);
    return (
      t.forEach(function(t) {
        r[++e] = t;
      }),
      r
    );
  }
  var ot = 1,
    at = 2,
    ut = '[object Boolean]',
    it = '[object Date]',
    ct = '[object Error]',
    ft = '[object Map]',
    st = '[object Number]',
    lt = '[object RegExp]',
    pt = '[object Set]',
    vt = '[object String]',
    ht = '[object Symbol]',
    yt = '[object ArrayBuffer]',
    bt = '[object DataView]',
    _t = f ? f.prototype : void 0,
    dt = _t ? _t.valueOf : void 0;
  var jt = Array.isArray;
  var gt = Object.prototype.propertyIsEnumerable,
    Ot = Object.getOwnPropertySymbols,
    wt = Ot
      ? function(t) {
          return null == t
            ? []
            : ((t = Object(t)),
              (function(t, e) {
                for (
                  var r = -1, n = null == t ? 0 : t.length, o = 0, a = [];
                  ++r < n;

                ) {
                  var u = t[r];
                  e(u, r, t) && (a[o++] = u);
                }
                return a;
              })(Ot(t), function(e) {
                return gt.call(t, e);
              }));
        }
      : function() {
          return [];
        };
  function mt(t) {
    return null != t && 'object' == typeof t;
  }
  var At = '[object Arguments]';
  function zt(t) {
    return mt(t) && d(t) == At;
  }
  var St = Object.prototype,
    Pt = St.hasOwnProperty,
    $t = St.propertyIsEnumerable,
    xt = zt(
      (function() {
        return arguments;
      })()
    )
      ? zt
      : function(t) {
          return mt(t) && Pt.call(t, 'callee') && !$t.call(t, 'callee');
        };
  var kt = 'object' == typeof t && t && !t.nodeType && t,
    Et =
      kt && 'object' == typeof module && module && !module.nodeType && module,
    Mt = Et && Et.exports === kt ? c.Buffer : void 0,
    Ft =
      (Mt ? Mt.isBuffer : void 0) ||
      function() {
        return !1;
      },
    Tt = 9007199254740991,
    Bt = /^(?:0|[1-9]\d*)$/;
  function Dt(t, e) {
    var r = typeof t;
    return (
      !!(e = null == e ? Tt : e) &&
      ('number' == r || ('symbol' != r && Bt.test(t))) &&
      t > -1 &&
      t % 1 == 0 &&
      t < e
    );
  }
  var It = 9007199254740991;
  function Ut(t) {
    return 'number' == typeof t && t > -1 && t % 1 == 0 && t <= It;
  }
  var Ct = {};
  (Ct['[object Float32Array]'] = Ct['[object Float64Array]'] = Ct[
    '[object Int8Array]'
  ] = Ct['[object Int16Array]'] = Ct['[object Int32Array]'] = Ct[
    '[object Uint8Array]'
  ] = Ct['[object Uint8ClampedArray]'] = Ct['[object Uint16Array]'] = Ct[
    '[object Uint32Array]'
  ] = !0),
    (Ct['[object Arguments]'] = Ct['[object Array]'] = Ct[
      '[object ArrayBuffer]'
    ] = Ct['[object Boolean]'] = Ct['[object DataView]'] = Ct[
      '[object Date]'
    ] = Ct['[object Error]'] = Ct['[object Function]'] = Ct[
      '[object Map]'
    ] = Ct['[object Number]'] = Ct['[object Object]'] = Ct[
      '[object RegExp]'
    ] = Ct['[object Set]'] = Ct['[object String]'] = Ct[
      '[object WeakMap]'
    ] = !1);
  var Lt,
    Nt = 'object' == typeof t && t && !t.nodeType && t,
    Vt =
      Nt && 'object' == typeof module && module && !module.nodeType && module,
    Rt = Vt && Vt.exports === Nt && u.process,
    Wt = (function() {
      try {
        var t = Vt && Vt.require && Vt.require('util').types;
        return t || (Rt && Rt.binding && Rt.binding('util'));
      } catch (t) {}
    })(),
    qt = Wt && Wt.isTypedArray,
    Gt = qt
      ? ((Lt = qt),
        function(t) {
          return Lt(t);
        })
      : function(t) {
          return mt(t) && Ut(t.length) && !!Ct[d(t)];
        },
    Ht = Object.prototype.hasOwnProperty;
  function Jt(t, e) {
    var r = jt(t),
      n = !r && xt(t),
      o = !r && !n && Ft(t),
      a = !r && !n && !o && Gt(t),
      u = r || n || o || a,
      i = u
        ? (function(t, e) {
            for (var r = -1, n = Array(t); ++r < t; ) n[r] = e(r);
            return n;
          })(t.length, String)
        : [],
      c = i.length;
    for (var f in t)
      (!e && !Ht.call(t, f)) ||
        (u &&
          ('length' == f ||
            (o && ('offset' == f || 'parent' == f)) ||
            (a && ('buffer' == f || 'byteLength' == f || 'byteOffset' == f)) ||
            Dt(f, c))) ||
        i.push(f);
    return i;
  }
  var Kt = Object.prototype;
  var Qt = (function(t, e) {
      return function(r) {
        return t(e(r));
      };
    })(Object.keys, Object),
    Xt = Object.prototype.hasOwnProperty;
  function Yt(t) {
    if (
      ((r = (e = t) && e.constructor),
      e !== (('function' == typeof r && r.prototype) || Kt))
    )
      return Qt(t);
    var e,
      r,
      n = [];
    for (var o in Object(t)) Xt.call(t, o) && 'constructor' != o && n.push(o);
    return n;
  }
  function Zt(t) {
    return null != t && Ut(t.length) && !A(t);
  }
  function te(t) {
    return Zt(t) ? Jt(t) : Yt(t);
  }
  function ee(t) {
    return (function(t, e, r) {
      var n = e(t);
      return jt(t)
        ? n
        : (function(t, e) {
            for (var r = -1, n = e.length, o = t.length; ++r < n; )
              t[o + r] = e[r];
            return t;
          })(n, r(t));
    })(t, te, wt);
  }
  var re = 1,
    ne = Object.prototype.hasOwnProperty;
  var oe = I(c, 'DataView'),
    ae = I(c, 'Promise'),
    ue = I(c, 'Set'),
    ie = I(c, 'WeakMap'),
    ce = x(oe),
    fe = x(U),
    se = x(ae),
    le = x(ue),
    pe = x(ie),
    ve = d;
  ((oe && '[object DataView]' != ve(new oe(new ArrayBuffer(1)))) ||
    (U && '[object Map]' != ve(new U())) ||
    (ae && '[object Promise]' != ve(ae.resolve())) ||
    (ue && '[object Set]' != ve(new ue())) ||
    (ie && '[object WeakMap]' != ve(new ie()))) &&
    (ve = function(t) {
      var e = d(t),
        r = '[object Object]' == e ? t.constructor : void 0,
        n = r ? x(r) : '';
      if (n)
        switch (n) {
          case ce:
            return '[object DataView]';
          case fe:
            return '[object Map]';
          case se:
            return '[object Promise]';
          case le:
            return '[object Set]';
          case pe:
            return '[object WeakMap]';
        }
      return e;
    });
  var he = ve,
    ye = 1,
    be = '[object Arguments]',
    _e = '[object Array]',
    de = '[object Object]',
    je = Object.prototype.hasOwnProperty;
  function ge(t, e, n, o, a, u) {
    var i = jt(t),
      c = jt(e),
      f = i ? _e : he(t),
      s = c ? _e : he(e),
      l = (f = f == be ? de : f) == de,
      p = (s = s == be ? de : s) == de,
      v = f == s;
    if (v && Ft(t)) {
      if (!Ft(e)) return !1;
      (i = !0), (l = !1);
    }
    if (v && !l)
      return (
        u || (u = new J()),
        i || Gt(t)
          ? tt(t, e, n, o, a, u)
          : (function(t, e, n, o, a, u, i) {
              switch (n) {
                case bt:
                  if (
                    t.byteLength != e.byteLength ||
                    t.byteOffset != e.byteOffset
                  )
                    return !1;
                  (t = t.buffer), (e = e.buffer);
                case yt:
                  return !(
                    t.byteLength != e.byteLength || !u(new et(t), new et(e))
                  );
                case ut:
                case it:
                case st:
                  return r(+t, +e);
                case ct:
                  return t.name == e.name && t.message == e.message;
                case lt:
                case vt:
                  return t == e + '';
                case ft:
                  var c = rt;
                case pt:
                  var f = o & ot;
                  if ((c || (c = nt), t.size != e.size && !f)) return !1;
                  var s = i.get(t);
                  if (s) return s == e;
                  (o |= at), i.set(t, e);
                  var l = tt(c(t), c(e), o, a, u, i);
                  return i.delete(t), l;
                case ht:
                  if (dt) return dt.call(t) == dt.call(e);
              }
              return !1;
            })(t, e, f, n, o, a, u)
      );
    if (!(n & ye)) {
      var h = l && je.call(t, '__wrapped__'),
        y = p && je.call(e, '__wrapped__');
      if (h || y) {
        var b = h ? t.value() : t,
          _ = y ? e.value() : e;
        return u || (u = new J()), a(b, _, n, o, u);
      }
    }
    return (
      !!v &&
      (u || (u = new J()),
      (function(t, e, r, n, o, a) {
        var u = r & re,
          i = ee(t),
          c = i.length;
        if (c != ee(e).length && !u) return !1;
        for (var f = c; f--; ) {
          var s = i[f];
          if (!(u ? s in e : ne.call(e, s))) return !1;
        }
        var l = a.get(t);
        if (l && a.get(e)) return l == e;
        var p = !0;
        a.set(t, e), a.set(e, t);
        for (var v = u; ++f < c; ) {
          var h = t[(s = i[f])],
            y = e[s];
          if (n) var b = u ? n(y, h, s, e, t, a) : n(h, y, s, t, e, a);
          if (!(void 0 === b ? h === y || o(h, y, r, n, a) : b)) {
            p = !1;
            break;
          }
          v || (v = 'constructor' == s);
        }
        if (p && !v) {
          var _ = t.constructor,
            d = e.constructor;
          _ != d &&
            'constructor' in t &&
            'constructor' in e &&
            !(
              'function' == typeof _ &&
              _ instanceof _ &&
              'function' == typeof d &&
              d instanceof d
            ) &&
            (p = !1);
        }
        return a.delete(t), a.delete(e), p;
      })(t, e, n, o, a, u))
    );
  }
  function Oe(t, e, r, n, o) {
    return (
      t === e ||
      (null == t || null == e || (!mt(t) && !mt(e))
        ? t != t && e != e
        : ge(t, e, r, n, Oe, o))
    );
  }
  var we = 1,
    me = 2;
  function Ae(t) {
    return t == t && !j(t);
  }
  function ze(t, e) {
    return function(r) {
      return null != r && (r[t] === e && (void 0 !== e || t in Object(r)));
    };
  }
  function Se(t) {
    var e = (function(t) {
      for (var e = te(t), r = e.length; r--; ) {
        var n = e[r],
          o = t[n];
        e[r] = [n, o, Ae(o)];
      }
      return e;
    })(t);
    return 1 == e.length && e[0][2]
      ? ze(e[0][0], e[0][1])
      : function(r) {
          return (
            r === t ||
            (function(t, e, r, n) {
              var o = r.length,
                a = o,
                u = !n;
              if (null == t) return !a;
              for (t = Object(t); o--; ) {
                var i = r[o];
                if (u && i[2] ? i[1] !== t[i[0]] : !(i[0] in t)) return !1;
              }
              for (; ++o < a; ) {
                var c = (i = r[o])[0],
                  f = t[c],
                  s = i[1];
                if (u && i[2]) {
                  if (void 0 === f && !(c in t)) return !1;
                } else {
                  var l = new J();
                  if (n) var p = n(f, s, c, t, e, l);
                  if (!(void 0 === p ? Oe(s, f, we | me, n, l) : p)) return !1;
                }
              }
              return !0;
            })(r, t, e)
          );
        };
  }
  var Pe = '[object Symbol]';
  function $e(t) {
    return 'symbol' == typeof t || (mt(t) && d(t) == Pe);
  }
  var xe = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    ke = /^\w*$/;
  function Ee(t, e) {
    if (jt(t)) return !1;
    var r = typeof t;
    return (
      !(
        'number' != r &&
        'symbol' != r &&
        'boolean' != r &&
        null != t &&
        !$e(t)
      ) ||
      (ke.test(t) || !xe.test(t) || (null != e && t in Object(e)))
    );
  }
  var Me = 'Expected a function';
  function Fe(t, e) {
    if ('function' != typeof t || (null != e && 'function' != typeof e))
      throw new TypeError(Me);
    var r = function() {
      var n = arguments,
        o = e ? e.apply(this, n) : n[0],
        a = r.cache;
      if (a.has(o)) return a.get(o);
      var u = t.apply(this, n);
      return (r.cache = a.set(o, u) || a), u;
    };
    return (r.cache = new (Fe.Cache || G)()), r;
  }
  Fe.Cache = G;
  var Te = 500;
  var Be = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    De = /\\(\\)?/g,
    Ie = (function(t) {
      var e = Fe(t, function(t) {
          return r.size === Te && r.clear(), t;
        }),
        r = e.cache;
      return e;
    })(function(t) {
      var e = [];
      return (
        46 === t.charCodeAt(0) && e.push(''),
        t.replace(Be, function(t, r, n, o) {
          e.push(n ? o.replace(De, '$1') : r || t);
        }),
        e
      );
    });
  var Ue = 1 / 0,
    Ce = f ? f.prototype : void 0,
    Le = Ce ? Ce.toString : void 0;
  function Ne(t) {
    if ('string' == typeof t) return t;
    if (jt(t))
      return (
        (function(t, e) {
          for (
            var r = -1, n = null == t ? 0 : t.length, o = Array(n);
            ++r < n;

          )
            o[r] = e(t[r], r, t);
          return o;
        })(t, Ne) + ''
      );
    if ($e(t)) return Le ? Le.call(t) : '';
    var e = t + '';
    return '0' == e && 1 / t == -Ue ? '-0' : e;
  }
  function Ve(t, e) {
    return jt(t)
      ? t
      : Ee(t, e)
      ? [t]
      : Ie(
          (function(t) {
            return null == t ? '' : Ne(t);
          })(t)
        );
  }
  var Re = 1 / 0;
  function We(t) {
    if ('string' == typeof t || $e(t)) return t;
    var e = t + '';
    return '0' == e && 1 / t == -Re ? '-0' : e;
  }
  function qe(t, e) {
    for (var r = 0, n = (e = Ve(e, t)).length; null != t && r < n; )
      t = t[We(e[r++])];
    return r && r == n ? t : void 0;
  }
  function Ge(t, e) {
    return null != t && e in Object(t);
  }
  function He(t, e) {
    return (
      null != t &&
      (function(t, e, r) {
        for (var n = -1, o = (e = Ve(e, t)).length, a = !1; ++n < o; ) {
          var u = We(e[n]);
          if (!(a = null != t && r(t, u))) break;
          t = t[u];
        }
        return a || ++n != o
          ? a
          : !!(o = null == t ? 0 : t.length) &&
              Ut(o) &&
              Dt(u, o) &&
              (jt(t) || xt(t));
      })(t, e, Ge)
    );
  }
  var Je = 1,
    Ke = 2;
  function Qe(t, e) {
    return Ee(t) && Ae(e)
      ? ze(We(t), e)
      : function(r) {
          var n = (function(t, e, r) {
            var n = null == t ? void 0 : qe(t, e);
            return void 0 === n ? r : n;
          })(r, t);
          return void 0 === n && n === e ? He(r, t) : Oe(e, n, Je | Ke);
        };
  }
  function Xe(t) {
    return t;
  }
  function Ye(t) {
    return Ee(t)
      ? ((e = We(t)),
        function(t) {
          return null == t ? void 0 : t[e];
        })
      : (function(t) {
          return function(e) {
            return qe(e, t);
          };
        })(t);
    var e;
  }
  function Ze(t) {
    return 'function' == typeof t
      ? t
      : null == t
      ? Xe
      : 'object' == typeof t
      ? jt(t)
        ? Qe(t[0], t[1])
        : Se(t)
      : Ye(t);
  }
  var tr = NaN,
    er = /^\s+|\s+$/g,
    rr = /^[-+]0x[0-9a-f]+$/i,
    nr = /^0b[01]+$/i,
    or = /^0o[0-7]+$/i,
    ar = parseInt;
  var ur = 1 / 0,
    ir = 17976931348623157e292;
  function cr(t) {
    return t
      ? (t = (function(t) {
          if ('number' == typeof t) return t;
          if ($e(t)) return tr;
          if (j(t)) {
            var e = 'function' == typeof t.valueOf ? t.valueOf() : t;
            t = j(e) ? e + '' : e;
          }
          if ('string' != typeof t) return 0 === t ? t : +t;
          t = t.replace(er, '');
          var r = nr.test(t);
          return r || or.test(t)
            ? ar(t.slice(2), r ? 2 : 8)
            : rr.test(t)
            ? tr
            : +t;
        })(t)) === ur || t === -ur
        ? (t < 0 ? -1 : 1) * ir
        : t == t
        ? t
        : 0
      : 0 === t
      ? t
      : 0;
  }
  var fr = Math.max;
  var sr,
    lr =
      ((sr = function(t, e, r) {
        var n = null == t ? 0 : t.length;
        if (!n) return -1;
        var o,
          a,
          u =
            null == r
              ? 0
              : ((o = cr(r)), (a = o % 1), o == o ? (a ? o - a : o) : 0);
        return (
          u < 0 && (u = fr(n + u, 0)),
          (function(t, e, r, n) {
            for (var o = t.length, a = r + (n ? 1 : -1); n ? a-- : ++a < o; )
              if (e(t[a], a, t)) return a;
            return -1;
          })(t, Ze(e), u)
        );
      }),
      function(t, e, r) {
        var n = Object(t);
        if (!Zt(t)) {
          var o = Ze(e);
          (t = te(t)),
            (e = function(t) {
              return o(n[t], t, n);
            });
        }
        var a = sr(t, e, r);
        return a > -1 ? n[o ? t[a] : a] : void 0;
      }),
    pr = '0.1.0';
  (t.myanswer = function() {
    console.log('the answer is ' + e + lr('hello world', 'world')),
      console.log('version:', pr);
  }),
    Object.defineProperty(t, '__esModule', { value: !0 });
});
//# sourceMappingURL=secret.js.map

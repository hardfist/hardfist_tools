!(function(t, e) {
  'object' == typeof exports && 'undefined' != typeof module
    ? e(exports, require('the-answer'))
    : 'function' == typeof define && define.amd
    ? define(['exports', 'the-answer'], e)
    : e(((t = t || self).mysecret = {}), t['yj-answer']);
})(this, function(t, e) {
  'use strict';
  function r(t, e) {
    var r,
      n,
      o,
      a,
      u = {
        label: 0,
        sent: function() {
          if (1 & o[0]) throw o[1];
          return o[1];
        },
        trys: [],
        ops: [],
      };
    return (
      (a = { next: i(0), throw: i(1), return: i(2) }),
      'function' == typeof Symbol &&
        (a[Symbol.iterator] = function() {
          return this;
        }),
      a
    );
    function i(a) {
      return function(i) {
        return (function(a) {
          if (r) throw new TypeError('Generator is already executing.');
          for (; u; )
            try {
              if (
                ((r = 1),
                n &&
                  (o =
                    2 & a[0]
                      ? n.return
                      : a[0]
                      ? n.throw || ((o = n.return) && o.call(n), 0)
                      : n.next) &&
                  !(o = o.call(n, a[1])).done)
              )
                return o;
              switch (((n = 0), o && (a = [2 & a[0], o.value]), a[0])) {
                case 0:
                case 1:
                  o = a;
                  break;
                case 4:
                  return u.label++, { value: a[1], done: !1 };
                case 5:
                  u.label++, (n = a[1]), (a = [0]);
                  continue;
                case 7:
                  (a = u.ops.pop()), u.trys.pop();
                  continue;
                default:
                  if (
                    !(o = (o = u.trys).length > 0 && o[o.length - 1]) &&
                    (6 === a[0] || 2 === a[0])
                  ) {
                    u = 0;
                    continue;
                  }
                  if (3 === a[0] && (!o || (a[1] > o[0] && a[1] < o[3]))) {
                    u.label = a[1];
                    break;
                  }
                  if (6 === a[0] && u.label < o[1]) {
                    (u.label = o[1]), (o = a);
                    break;
                  }
                  if (o && u.label < o[2]) {
                    (u.label = o[2]), u.ops.push(a);
                    break;
                  }
                  o[2] && u.ops.pop(), u.trys.pop();
                  continue;
              }
              a = e.call(t, u);
            } catch (t) {
              (a = [6, t]), (n = 0);
            } finally {
              r = o = 0;
            }
          if (5 & a[0]) throw a[1];
          return { value: a[0] ? a[1] : void 0, done: !0 };
        })([a, i]);
      };
    }
  }
  function n(t, e) {
    return t === e || (t != t && e != e);
  }
  function o(t, e) {
    for (var r = t.length; r--; ) if (n(t[r][0], e)) return r;
    return -1;
  }
  e = e && e.hasOwnProperty('default') ? e.default : e;
  var a = Array.prototype.splice;
  function u(t) {
    var e = -1,
      r = null == t ? 0 : t.length;
    for (this.clear(); ++e < r; ) {
      var n = t[e];
      this.set(n[0], n[1]);
    }
  }
  (u.prototype.clear = function() {
    (this.__data__ = []), (this.size = 0);
  }),
    (u.prototype.delete = function(t) {
      var e = this.__data__,
        r = o(e, t);
      return (
        !(r < 0) &&
        (r == e.length - 1 ? e.pop() : a.call(e, r, 1), --this.size, !0)
      );
    }),
    (u.prototype.get = function(t) {
      var e = this.__data__,
        r = o(e, t);
      return r < 0 ? void 0 : e[r][1];
    }),
    (u.prototype.has = function(t) {
      return o(this.__data__, t) > -1;
    }),
    (u.prototype.set = function(t, e) {
      var r = this.__data__,
        n = o(r, t);
      return n < 0 ? (++this.size, r.push([t, e])) : (r[n][1] = e), this;
    });
  var i =
      'object' == typeof global && global && global.Object === Object && global,
    c = 'object' == typeof self && self && self.Object === Object && self,
    f = i || c || Function('return this')(),
    l = f.Symbol,
    s = Object.prototype,
    p = s.hasOwnProperty,
    v = s.toString,
    h = l ? l.toStringTag : void 0;
  var y = Object.prototype.toString;
  var b = '[object Null]',
    _ = '[object Undefined]',
    d = l ? l.toStringTag : void 0;
  function j(t) {
    return null == t
      ? void 0 === t
        ? _
        : b
      : d && d in Object(t)
      ? (function(t) {
          var e = p.call(t, h),
            r = t[h];
          try {
            t[h] = void 0;
            var n = !0;
          } catch (t) {}
          var o = v.call(t);
          return n && (e ? (t[h] = r) : delete t[h]), o;
        })(t)
      : (function(t) {
          return y.call(t);
        })(t);
  }
  function g(t) {
    var e = typeof t;
    return null != t && ('object' == e || 'function' == e);
  }
  var w = '[object AsyncFunction]',
    O = '[object Function]',
    m = '[object GeneratorFunction]',
    A = '[object Proxy]';
  function z(t) {
    if (!g(t)) return !1;
    var e = j(t);
    return e == O || e == m || e == w || e == A;
  }
  var S,
    P = f['__core-js_shared__'],
    x = (S = /[^.]+$/.exec((P && P.keys && P.keys.IE_PROTO) || ''))
      ? 'Symbol(src)_1.' + S
      : '';
  var k = Function.prototype.toString;
  function $(t) {
    if (null != t) {
      try {
        return k.call(t);
      } catch (t) {}
      try {
        return t + '';
      } catch (t) {}
    }
    return '';
  }
  var E = /^\[object .+?Constructor\]$/,
    M = Function.prototype,
    T = Object.prototype,
    F = M.toString,
    B = T.hasOwnProperty,
    D = RegExp(
      '^' +
        F.call(B)
          .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            '$1.*?'
          ) +
        '$'
    );
  function I(t) {
    return !(!g(t) || ((e = t), x && x in e)) && (z(t) ? D : E).test($(t));
    var e;
  }
  function U(t, e) {
    var r = (function(t, e) {
      return null == t ? void 0 : t[e];
    })(t, e);
    return I(r) ? r : void 0;
  }
  var C = U(f, 'Map'),
    L = U(Object, 'create');
  var N = '__lodash_hash_undefined__',
    V = Object.prototype.hasOwnProperty;
  var R = Object.prototype.hasOwnProperty;
  var W = '__lodash_hash_undefined__';
  function q(t) {
    var e = -1,
      r = null == t ? 0 : t.length;
    for (this.clear(); ++e < r; ) {
      var n = t[e];
      this.set(n[0], n[1]);
    }
  }
  function G(t, e) {
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
  function H(t) {
    var e = -1,
      r = null == t ? 0 : t.length;
    for (this.clear(); ++e < r; ) {
      var n = t[e];
      this.set(n[0], n[1]);
    }
  }
  (q.prototype.clear = function() {
    (this.__data__ = L ? L(null) : {}), (this.size = 0);
  }),
    (q.prototype.delete = function(t) {
      var e = this.has(t) && delete this.__data__[t];
      return (this.size -= e ? 1 : 0), e;
    }),
    (q.prototype.get = function(t) {
      var e = this.__data__;
      if (L) {
        var r = e[t];
        return r === N ? void 0 : r;
      }
      return V.call(e, t) ? e[t] : void 0;
    }),
    (q.prototype.has = function(t) {
      var e = this.__data__;
      return L ? void 0 !== e[t] : R.call(e, t);
    }),
    (q.prototype.set = function(t, e) {
      var r = this.__data__;
      return (
        (this.size += this.has(t) ? 0 : 1),
        (r[t] = L && void 0 === e ? W : e),
        this
      );
    }),
    (H.prototype.clear = function() {
      (this.size = 0),
        (this.__data__ = {
          hash: new q(),
          map: new (C || u)(),
          string: new q(),
        });
    }),
    (H.prototype.delete = function(t) {
      var e = G(this, t).delete(t);
      return (this.size -= e ? 1 : 0), e;
    }),
    (H.prototype.get = function(t) {
      return G(this, t).get(t);
    }),
    (H.prototype.has = function(t) {
      return G(this, t).has(t);
    }),
    (H.prototype.set = function(t, e) {
      var r = G(this, t),
        n = r.size;
      return r.set(t, e), (this.size += r.size == n ? 0 : 1), this;
    });
  var J = 200;
  function K(t) {
    var e = (this.__data__ = new u(t));
    this.size = e.size;
  }
  (K.prototype.clear = function() {
    (this.__data__ = new u()), (this.size = 0);
  }),
    (K.prototype.delete = function(t) {
      var e = this.__data__,
        r = e.delete(t);
      return (this.size = e.size), r;
    }),
    (K.prototype.get = function(t) {
      return this.__data__.get(t);
    }),
    (K.prototype.has = function(t) {
      return this.__data__.has(t);
    }),
    (K.prototype.set = function(t, e) {
      var r = this.__data__;
      if (r instanceof u) {
        var n = r.__data__;
        if (!C || n.length < J - 1)
          return n.push([t, e]), (this.size = ++r.size), this;
        r = this.__data__ = new H(n);
      }
      return r.set(t, e), (this.size = r.size), this;
    });
  var Q = '__lodash_hash_undefined__';
  function X(t) {
    var e = -1,
      r = null == t ? 0 : t.length;
    for (this.__data__ = new H(); ++e < r; ) this.add(t[e]);
  }
  function Y(t, e) {
    for (var r = -1, n = null == t ? 0 : t.length; ++r < n; )
      if (e(t[r], r, t)) return !0;
    return !1;
  }
  (X.prototype.add = X.prototype.push = function(t) {
    return this.__data__.set(t, Q), this;
  }),
    (X.prototype.has = function(t) {
      return this.__data__.has(t);
    });
  var Z = 1,
    tt = 2;
  function et(t, e, r, n, o, a) {
    var u = r & Z,
      i = t.length,
      c = e.length;
    if (i != c && !(u && c > i)) return !1;
    var f = a.get(t);
    if (f && a.get(e)) return f == e;
    var l = -1,
      s = !0,
      p = r & tt ? new X() : void 0;
    for (a.set(t, e), a.set(e, t); ++l < i; ) {
      var v = t[l],
        h = e[l];
      if (n) var y = u ? n(h, v, l, e, t, a) : n(v, h, l, t, e, a);
      if (void 0 !== y) {
        if (y) continue;
        s = !1;
        break;
      }
      if (p) {
        if (
          !Y(e, function(t, e) {
            if (((u = e), !p.has(u) && (v === t || o(v, t, r, n, a))))
              return p.push(e);
            var u;
          })
        ) {
          s = !1;
          break;
        }
      } else if (v !== h && !o(v, h, r, n, a)) {
        s = !1;
        break;
      }
    }
    return a.delete(t), a.delete(e), s;
  }
  var rt = f.Uint8Array;
  function nt(t) {
    var e = -1,
      r = Array(t.size);
    return (
      t.forEach(function(t, n) {
        r[++e] = [n, t];
      }),
      r
    );
  }
  function ot(t) {
    var e = -1,
      r = Array(t.size);
    return (
      t.forEach(function(t) {
        r[++e] = t;
      }),
      r
    );
  }
  var at = 1,
    ut = 2,
    it = '[object Boolean]',
    ct = '[object Date]',
    ft = '[object Error]',
    lt = '[object Map]',
    st = '[object Number]',
    pt = '[object RegExp]',
    vt = '[object Set]',
    ht = '[object String]',
    yt = '[object Symbol]',
    bt = '[object ArrayBuffer]',
    _t = '[object DataView]',
    dt = l ? l.prototype : void 0,
    jt = dt ? dt.valueOf : void 0;
  var gt = Array.isArray;
  var wt = Object.prototype.propertyIsEnumerable,
    Ot = Object.getOwnPropertySymbols,
    mt = Ot
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
                return wt.call(t, e);
              }));
        }
      : function() {
          return [];
        };
  function At(t) {
    return null != t && 'object' == typeof t;
  }
  var zt = '[object Arguments]';
  function St(t) {
    return At(t) && j(t) == zt;
  }
  var Pt = Object.prototype,
    xt = Pt.hasOwnProperty,
    kt = Pt.propertyIsEnumerable,
    $t = St(
      (function() {
        return arguments;
      })()
    )
      ? St
      : function(t) {
          return At(t) && xt.call(t, 'callee') && !kt.call(t, 'callee');
        };
  var Et = 'object' == typeof t && t && !t.nodeType && t,
    Mt =
      Et && 'object' == typeof module && module && !module.nodeType && module,
    Tt = Mt && Mt.exports === Et ? f.Buffer : void 0,
    Ft =
      (Tt ? Tt.isBuffer : void 0) ||
      function() {
        return !1;
      },
    Bt = 9007199254740991,
    Dt = /^(?:0|[1-9]\d*)$/;
  function It(t, e) {
    var r = typeof t;
    return (
      !!(e = null == e ? Bt : e) &&
      ('number' == r || ('symbol' != r && Dt.test(t))) &&
      t > -1 &&
      t % 1 == 0 &&
      t < e
    );
  }
  var Ut = 9007199254740991;
  function Ct(t) {
    return 'number' == typeof t && t > -1 && t % 1 == 0 && t <= Ut;
  }
  var Lt = {};
  (Lt['[object Float32Array]'] = Lt['[object Float64Array]'] = Lt[
    '[object Int8Array]'
  ] = Lt['[object Int16Array]'] = Lt['[object Int32Array]'] = Lt[
    '[object Uint8Array]'
  ] = Lt['[object Uint8ClampedArray]'] = Lt['[object Uint16Array]'] = Lt[
    '[object Uint32Array]'
  ] = !0),
    (Lt['[object Arguments]'] = Lt['[object Array]'] = Lt[
      '[object ArrayBuffer]'
    ] = Lt['[object Boolean]'] = Lt['[object DataView]'] = Lt[
      '[object Date]'
    ] = Lt['[object Error]'] = Lt['[object Function]'] = Lt[
      '[object Map]'
    ] = Lt['[object Number]'] = Lt['[object Object]'] = Lt[
      '[object RegExp]'
    ] = Lt['[object Set]'] = Lt['[object String]'] = Lt[
      '[object WeakMap]'
    ] = !1);
  var Nt,
    Vt = 'object' == typeof t && t && !t.nodeType && t,
    Rt =
      Vt && 'object' == typeof module && module && !module.nodeType && module,
    Wt = Rt && Rt.exports === Vt && i.process,
    qt = (function() {
      try {
        var t = Rt && Rt.require && Rt.require('util').types;
        return t || (Wt && Wt.binding && Wt.binding('util'));
      } catch (t) {}
    })(),
    Gt = qt && qt.isTypedArray,
    Ht = Gt
      ? ((Nt = Gt),
        function(t) {
          return Nt(t);
        })
      : function(t) {
          return At(t) && Ct(t.length) && !!Lt[j(t)];
        },
    Jt = Object.prototype.hasOwnProperty;
  function Kt(t, e) {
    var r = gt(t),
      n = !r && $t(t),
      o = !r && !n && Ft(t),
      a = !r && !n && !o && Ht(t),
      u = r || n || o || a,
      i = u
        ? (function(t, e) {
            for (var r = -1, n = Array(t); ++r < t; ) n[r] = e(r);
            return n;
          })(t.length, String)
        : [],
      c = i.length;
    for (var f in t)
      (!e && !Jt.call(t, f)) ||
        (u &&
          ('length' == f ||
            (o && ('offset' == f || 'parent' == f)) ||
            (a && ('buffer' == f || 'byteLength' == f || 'byteOffset' == f)) ||
            It(f, c))) ||
        i.push(f);
    return i;
  }
  var Qt = Object.prototype;
  var Xt = (function(t, e) {
      return function(r) {
        return t(e(r));
      };
    })(Object.keys, Object),
    Yt = Object.prototype.hasOwnProperty;
  function Zt(t) {
    if (
      ((r = (e = t) && e.constructor),
      e !== (('function' == typeof r && r.prototype) || Qt))
    )
      return Xt(t);
    var e,
      r,
      n = [];
    for (var o in Object(t)) Yt.call(t, o) && 'constructor' != o && n.push(o);
    return n;
  }
  function te(t) {
    return null != t && Ct(t.length) && !z(t);
  }
  function ee(t) {
    return te(t) ? Kt(t) : Zt(t);
  }
  function re(t) {
    return (function(t, e, r) {
      var n = e(t);
      return gt(t)
        ? n
        : (function(t, e) {
            for (var r = -1, n = e.length, o = t.length; ++r < n; )
              t[o + r] = e[r];
            return t;
          })(n, r(t));
    })(t, ee, mt);
  }
  var ne = 1,
    oe = Object.prototype.hasOwnProperty;
  var ae = U(f, 'DataView'),
    ue = U(f, 'Promise'),
    ie = U(f, 'Set'),
    ce = U(f, 'WeakMap'),
    fe = $(ae),
    le = $(C),
    se = $(ue),
    pe = $(ie),
    ve = $(ce),
    he = j;
  ((ae && '[object DataView]' != he(new ae(new ArrayBuffer(1)))) ||
    (C && '[object Map]' != he(new C())) ||
    (ue && '[object Promise]' != he(ue.resolve())) ||
    (ie && '[object Set]' != he(new ie())) ||
    (ce && '[object WeakMap]' != he(new ce()))) &&
    (he = function(t) {
      var e = j(t),
        r = '[object Object]' == e ? t.constructor : void 0,
        n = r ? $(r) : '';
      if (n)
        switch (n) {
          case fe:
            return '[object DataView]';
          case le:
            return '[object Map]';
          case se:
            return '[object Promise]';
          case pe:
            return '[object Set]';
          case ve:
            return '[object WeakMap]';
        }
      return e;
    });
  var ye = he,
    be = 1,
    _e = '[object Arguments]',
    de = '[object Array]',
    je = '[object Object]',
    ge = Object.prototype.hasOwnProperty;
  function we(t, e, r, o, a, u) {
    var i = gt(t),
      c = gt(e),
      f = i ? de : ye(t),
      l = c ? de : ye(e),
      s = (f = f == _e ? je : f) == je,
      p = (l = l == _e ? je : l) == je,
      v = f == l;
    if (v && Ft(t)) {
      if (!Ft(e)) return !1;
      (i = !0), (s = !1);
    }
    if (v && !s)
      return (
        u || (u = new K()),
        i || Ht(t)
          ? et(t, e, r, o, a, u)
          : (function(t, e, r, o, a, u, i) {
              switch (r) {
                case _t:
                  if (
                    t.byteLength != e.byteLength ||
                    t.byteOffset != e.byteOffset
                  )
                    return !1;
                  (t = t.buffer), (e = e.buffer);
                case bt:
                  return !(
                    t.byteLength != e.byteLength || !u(new rt(t), new rt(e))
                  );
                case it:
                case ct:
                case st:
                  return n(+t, +e);
                case ft:
                  return t.name == e.name && t.message == e.message;
                case pt:
                case ht:
                  return t == e + '';
                case lt:
                  var c = nt;
                case vt:
                  var f = o & at;
                  if ((c || (c = ot), t.size != e.size && !f)) return !1;
                  var l = i.get(t);
                  if (l) return l == e;
                  (o |= ut), i.set(t, e);
                  var s = et(c(t), c(e), o, a, u, i);
                  return i.delete(t), s;
                case yt:
                  if (jt) return jt.call(t) == jt.call(e);
              }
              return !1;
            })(t, e, f, r, o, a, u)
      );
    if (!(r & be)) {
      var h = s && ge.call(t, '__wrapped__'),
        y = p && ge.call(e, '__wrapped__');
      if (h || y) {
        var b = h ? t.value() : t,
          _ = y ? e.value() : e;
        return u || (u = new K()), a(b, _, r, o, u);
      }
    }
    return (
      !!v &&
      (u || (u = new K()),
      (function(t, e, r, n, o, a) {
        var u = r & ne,
          i = re(t),
          c = i.length;
        if (c != re(e).length && !u) return !1;
        for (var f = c; f--; ) {
          var l = i[f];
          if (!(u ? l in e : oe.call(e, l))) return !1;
        }
        var s = a.get(t);
        if (s && a.get(e)) return s == e;
        var p = !0;
        a.set(t, e), a.set(e, t);
        for (var v = u; ++f < c; ) {
          var h = t[(l = i[f])],
            y = e[l];
          if (n) var b = u ? n(y, h, l, e, t, a) : n(h, y, l, t, e, a);
          if (!(void 0 === b ? h === y || o(h, y, r, n, a) : b)) {
            p = !1;
            break;
          }
          v || (v = 'constructor' == l);
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
      })(t, e, r, o, a, u))
    );
  }
  function Oe(t, e, r, n, o) {
    return (
      t === e ||
      (null == t || null == e || (!At(t) && !At(e))
        ? t != t && e != e
        : we(t, e, r, n, Oe, o))
    );
  }
  var me = 1,
    Ae = 2;
  function ze(t) {
    return t == t && !g(t);
  }
  function Se(t, e) {
    return function(r) {
      return null != r && (r[t] === e && (void 0 !== e || t in Object(r)));
    };
  }
  function Pe(t) {
    var e = (function(t) {
      for (var e = ee(t), r = e.length; r--; ) {
        var n = e[r],
          o = t[n];
        e[r] = [n, o, ze(o)];
      }
      return e;
    })(t);
    return 1 == e.length && e[0][2]
      ? Se(e[0][0], e[0][1])
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
                  l = i[1];
                if (u && i[2]) {
                  if (void 0 === f && !(c in t)) return !1;
                } else {
                  var s = new K();
                  if (n) var p = n(f, l, c, t, e, s);
                  if (!(void 0 === p ? Oe(l, f, me | Ae, n, s) : p)) return !1;
                }
              }
              return !0;
            })(r, t, e)
          );
        };
  }
  var xe = '[object Symbol]';
  function ke(t) {
    return 'symbol' == typeof t || (At(t) && j(t) == xe);
  }
  var $e = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    Ee = /^\w*$/;
  function Me(t, e) {
    if (gt(t)) return !1;
    var r = typeof t;
    return (
      !(
        'number' != r &&
        'symbol' != r &&
        'boolean' != r &&
        null != t &&
        !ke(t)
      ) ||
      (Ee.test(t) || !$e.test(t) || (null != e && t in Object(e)))
    );
  }
  var Te = 'Expected a function';
  function Fe(t, e) {
    if ('function' != typeof t || (null != e && 'function' != typeof e))
      throw new TypeError(Te);
    var r = function() {
      var n = arguments,
        o = e ? e.apply(this, n) : n[0],
        a = r.cache;
      if (a.has(o)) return a.get(o);
      var u = t.apply(this, n);
      return (r.cache = a.set(o, u) || a), u;
    };
    return (r.cache = new (Fe.Cache || H)()), r;
  }
  Fe.Cache = H;
  var Be = 500;
  var De = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    Ie = /\\(\\)?/g,
    Ue = (function(t) {
      var e = Fe(t, function(t) {
          return r.size === Be && r.clear(), t;
        }),
        r = e.cache;
      return e;
    })(function(t) {
      var e = [];
      return (
        46 === t.charCodeAt(0) && e.push(''),
        t.replace(De, function(t, r, n, o) {
          e.push(n ? o.replace(Ie, '$1') : r || t);
        }),
        e
      );
    });
  var Ce = 1 / 0,
    Le = l ? l.prototype : void 0,
    Ne = Le ? Le.toString : void 0;
  function Ve(t) {
    if ('string' == typeof t) return t;
    if (gt(t))
      return (
        (function(t, e) {
          for (
            var r = -1, n = null == t ? 0 : t.length, o = Array(n);
            ++r < n;

          )
            o[r] = e(t[r], r, t);
          return o;
        })(t, Ve) + ''
      );
    if (ke(t)) return Ne ? Ne.call(t) : '';
    var e = t + '';
    return '0' == e && 1 / t == -Ce ? '-0' : e;
  }
  function Re(t, e) {
    return gt(t)
      ? t
      : Me(t, e)
      ? [t]
      : Ue(
          (function(t) {
            return null == t ? '' : Ve(t);
          })(t)
        );
  }
  var We = 1 / 0;
  function qe(t) {
    if ('string' == typeof t || ke(t)) return t;
    var e = t + '';
    return '0' == e && 1 / t == -We ? '-0' : e;
  }
  function Ge(t, e) {
    for (var r = 0, n = (e = Re(e, t)).length; null != t && r < n; )
      t = t[qe(e[r++])];
    return r && r == n ? t : void 0;
  }
  function He(t, e) {
    return null != t && e in Object(t);
  }
  function Je(t, e) {
    return (
      null != t &&
      (function(t, e, r) {
        for (var n = -1, o = (e = Re(e, t)).length, a = !1; ++n < o; ) {
          var u = qe(e[n]);
          if (!(a = null != t && r(t, u))) break;
          t = t[u];
        }
        return a || ++n != o
          ? a
          : !!(o = null == t ? 0 : t.length) &&
              Ct(o) &&
              It(u, o) &&
              (gt(t) || $t(t));
      })(t, e, He)
    );
  }
  var Ke = 1,
    Qe = 2;
  function Xe(t, e) {
    return Me(t) && ze(e)
      ? Se(qe(t), e)
      : function(r) {
          var n = (function(t, e, r) {
            var n = null == t ? void 0 : Ge(t, e);
            return void 0 === n ? r : n;
          })(r, t);
          return void 0 === n && n === e ? Je(r, t) : Oe(e, n, Ke | Qe);
        };
  }
  function Ye(t) {
    return t;
  }
  function Ze(t) {
    return Me(t)
      ? ((e = qe(t)),
        function(t) {
          return null == t ? void 0 : t[e];
        })
      : (function(t) {
          return function(e) {
            return Ge(e, t);
          };
        })(t);
    var e;
  }
  function tr(t) {
    return 'function' == typeof t
      ? t
      : null == t
      ? Ye
      : 'object' == typeof t
      ? gt(t)
        ? Xe(t[0], t[1])
        : Pe(t)
      : Ze(t);
  }
  var er = NaN,
    rr = /^\s+|\s+$/g,
    nr = /^[-+]0x[0-9a-f]+$/i,
    or = /^0b[01]+$/i,
    ar = /^0o[0-7]+$/i,
    ur = parseInt;
  var ir = 1 / 0,
    cr = 17976931348623157e292;
  function fr(t) {
    return t
      ? (t = (function(t) {
          if ('number' == typeof t) return t;
          if (ke(t)) return er;
          if (g(t)) {
            var e = 'function' == typeof t.valueOf ? t.valueOf() : t;
            t = g(e) ? e + '' : e;
          }
          if ('string' != typeof t) return 0 === t ? t : +t;
          t = t.replace(rr, '');
          var r = or.test(t);
          return r || ar.test(t)
            ? ur(t.slice(2), r ? 2 : 8)
            : nr.test(t)
            ? er
            : +t;
        })(t)) === ir || t === -ir
        ? (t < 0 ? -1 : 1) * cr
        : t == t
        ? t
        : 0
      : 0 === t
      ? t
      : 0;
  }
  var lr = Math.max;
  var sr,
    pr =
      ((sr = function(t, e, r) {
        var n = null == t ? 0 : t.length;
        if (!n) return -1;
        var o,
          a,
          u =
            null == r
              ? 0
              : ((o = fr(r)), (a = o % 1), o == o ? (a ? o - a : o) : 0);
        return (
          u < 0 && (u = lr(n + u, 0)),
          (function(t, e, r, n) {
            for (var o = t.length, a = r + (n ? 1 : -1); n ? a-- : ++a < o; )
              if (e(t[a], a, t)) return a;
            return -1;
          })(t, tr(e), u)
        );
      }),
      function(t, e, r) {
        var n = Object(t);
        if (!te(t)) {
          var o = tr(e);
          (t = ee(t)),
            (e = function(t) {
              return o(n[t], t, n);
            });
        }
        var a = sr(t, e, r);
        return a > -1 ? n[o ? t[a] : a] : void 0;
      }),
    vr = '0.1.0';
  (t.myanswer = function(t) {
    return (
      (n = this),
      (o = void 0),
      (u = function() {
        return r(this, function(t) {
          return (
            console.log('the answer is ' + e + pr('hello world', 'world')),
            console.log('version:', vr),
            [2]
          );
        });
      }),
      new ((a = void 0) || (a = Promise))(function(t, e) {
        function r(t) {
          try {
            c(u.next(t));
          } catch (t) {
            e(t);
          }
        }
        function i(t) {
          try {
            c(u.throw(t));
          } catch (t) {
            e(t);
          }
        }
        function c(e) {
          e.done
            ? t(e.value)
            : new a(function(t) {
                t(e.value);
              }).then(r, i);
        }
        c((u = u.apply(n, o || [])).next());
      })
    );
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    var n, o, a, u;
  }),
    Object.defineProperty(t, '__esModule', { value: !0 });
});
//# sourceMappingURL=secret.js.map

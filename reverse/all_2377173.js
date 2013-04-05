var SC = window.SC || (window.SC = {});
window.SC.version = "(no branch)/2377173";
window.SC.clientId = "2Kf29hhC5mgWf62708A";
window.SC.airbrake = {
    apiKey: "d8a11c5437ea4af7839f7f7c728f5ae7"
};
window.SC.deploy = {
    env: "production",
    version: "1.12.3"
};
(function (a, d) {
    function g(b, e, f) {
        if (f === d && b.nodeType === 1) {
            f = "data-" + e.replace(P, "$1-$2")
                .toLowerCase();
            f = b.getAttribute(f);
            if (typeof f === "string") {
                try {
                    f = f === "true" ? true : f === "false" ? false : f === "null" ? null : !c.isNaN(f) ? parseFloat(f) : J.test(f) ? c.parseJSON(f) : f
                } catch (h) {}
                c.data(b, e, f)
            } else f = d
        }
        return f
    }

    function i(b) {
        for (var e in b) if (e !== "toJSON") return false;
        return true
    }

    function n(b, e, f) {
        var h = e + "defer",
            j = e + "queue",
            k = e + "mark",
            o = c.data(b, h, d, true);
        if (o && (f === "queue" || !c.data(b, j, d, true)) && (f === "mark" || !c.data(b, k, d, true))) setTimeout(function () {
                if (!c.data(b, j, d, true) && !c.data(b, k, d, true)) {
                    c.removeData(b, h, true);
                    o.resolve()
                }
            }, 0)
    }

    function p() {
        return false
    }

    function t() {
        return true
    }

    function H(b, e, f) {
        var h = c.extend({}, f[0]);
        h.type = b;
        h.originalEvent = {};
        h.liveFired = d;
        c.event.handle.call(e, h);
        h.isDefaultPrevented() && f[0].preventDefault()
    }

    function B(b) {
        var e, f, h, j, k, o, w, y, z, M, fa, la = [];
        j = [];
        k = c._data(this, "events");
        if (!(b.liveFired === this || !k || !k.live || b.target.disabled || b.button && b.type === "click")) {
            if (b.namespace) fa =
                    RegExp("(^|\\.)" + b.namespace.split(".")
                    .join("\\.(?:.*\\.)?") + "(\\.|$)");
            b.liveFired = this;
            var ka = k.live.slice(0);
            for (w = 0; w < ka.length; w++) {
                k = ka[w];
                k.origType.replace(Va, "") === b.type ? j.push(k.selector) : ka.splice(w--, 1)
            }
            j = c(b.target)
                .closest(j, b.currentTarget);
            y = 0;
            for (z = j.length; y < z; y++) {
                M = j[y];
                for (w = 0; w < ka.length; w++) {
                    k = ka[w];
                    if (M.selector === k.selector && (!fa || fa.test(k.namespace)) && !M.elem.disabled) {
                        o = M.elem;
                        h = null;
                        if (k.preType === "mouseenter" || k.preType === "mouseleave") {
                            b.type = k.preType;
                            if ((h = c(b.relatedTarget)
                                .closest(k.selector)[0]) &&
                                c.contains(o, h)) h = o
                        }
                        if (!h || h !== o) la.push({
                                elem: o,
                                handleObj: k,
                                level: M.level
                            })
                    }
                }
            }
            y = 0;
            for (z = la.length; y < z; y++) {
                j = la[y];
                if (f && j.level > f) break;
                b.currentTarget = j.elem;
                b.data = j.handleObj.data;
                b.handleObj = j.handleObj;
                fa = j.handleObj.origHandler.apply(j.elem, arguments);
                if (fa === false || b.isPropagationStopped()) {
                    f = j.level;
                    if (fa === false) e = false;
                    if (b.isImmediatePropagationStopped()) break
                }
            }
            return e
        }
    }

    function D(b, e) {
        return (b && b !== "*" ? b + "." : "") + e.replace(zb, "`")
            .replace(Ab, "&")
    }

    function I(b, e, f) {
        e = e || 0;
        if (c.isFunction(e)) return c.grep(b, function (j, k) {
                return !!e.call(j, k, j) === f
            });
        else if (e.nodeType) return c.grep(b, function (j) {
                return j === e === f
            });
        else if (typeof e === "string") {
            var h = c.grep(b, function (j) {
                return j.nodeType === 1
            });
            if (Bb.test(e)) return c.filter(e, h, !f);
            else e = c.filter(e, h)
        }
        return c.grep(b, function (j) {
            return c.inArray(j, e) >= 0 === f
        })
    }

    function R(b, e) {
        if (!(e.nodeType !== 1 || !c.hasData(b))) {
            var f = c.expando,
                h = c.data(b),
                j = c.data(e, h);
            if (h = h[f]) {
                var k = h.events;
                j = j[f] = c.extend({}, h);
                if (k) {
                    delete j.handle;
                    j.events = {};
                    for (var o in k) {
                        f =
                            0;
                        for (h = k[o].length; f < h; f++) c.event.add(e, o + (k[o][f].namespace ? "." : "") + k[o][f].namespace, k[o][f], k[o][f].data)
                    }
                }
            }
        }
    }

    function S(b, e) {
        var f;
        if (e.nodeType === 1) {
            e.clearAttributes && e.clearAttributes();
            e.mergeAttributes && e.mergeAttributes(b);
            f = e.nodeName.toLowerCase();
            if (f === "object") e.outerHTML = b.outerHTML;
            else if (f === "input" && (b.type === "checkbox" || b.type === "radio")) {
                if (b.checked) e.defaultChecked = e.checked = b.checked;
                if (e.value !== b.value) e.value = b.value
            } else if (f === "option") e.selected = b.defaultSelected;
            else if (f === "input" || f === "textarea") e.defaultValue = b.defaultValue;
            e.removeAttribute(c.expando)
        }
    }

    function W(b) {
        return "getElementsByTagName" in b ? b.getElementsByTagName("*") : "querySelectorAll" in b ? b.querySelectorAll("*") : []
    }

    function da(b) {
        if (b.type === "checkbox" || b.type === "radio") b.defaultChecked = b.checked
    }

    function T(b) {
        if (c.nodeName(b, "input")) da(b);
        else b.getElementsByTagName && c.grep(b.getElementsByTagName("input"), da)
    }

    function V(b, e) {
        e.src ? c.ajax({
            url: e.src,
            async: false,
            dataType: "script"
        }) : c.globalEval((e.text ||
            e.textContent || e.innerHTML || "")
            .replace(Cb, "/*$0*/"));
        e.parentNode && e.parentNode.removeChild(e)
    }

    function ba(b, e, f) {
        var h = e === "width" ? b.offsetWidth : b.offsetHeight;
        if (f === "border") return h;
        c.each(e === "width" ? Db : Eb, function () {
            f || (h -= parseFloat(c.css(b, "padding" + this)) || 0);
            if (f === "margin") h += parseFloat(c.css(b, "margin" + this)) || 0;
            else h -= parseFloat(c.css(b, "border" + this + "Width")) || 0
        });
        return h
    }

    function qa(b) {
        return function (e, f) {
            if (typeof e !== "string") {
                f = e;
                e = "*"
            }
            if (c.isFunction(f)) for (var h = e.toLowerCase()
                    .split(eb),
                        j = 0, k = h.length, o, w; j < k; j++) {
                    o = h[j];
                    if (w = /^\+/.test(o)) o = o.substr(1) || "*";
                    o = b[o] = b[o] || [];
                    o[w ? "unshift" : "push"](f)
            }
        }
    }

    function m(b, e, f, h, j, k) {
        j = j || e.dataTypes[0];
        k = k || {};
        k[j] = true;
        j = b[j];
        for (var o = 0, w = j ? j.length : 0, y = b === Wa, z; o < w && (y || !z); o++) {
            z = j[o](e, f, h);
            if (typeof z === "string") if (!y || k[z]) z = d;
                else {
                    e.dataTypes.unshift(z);
                    z = m(b, e, f, h, z, k)
                }
        }
        if ((y || !z) && !k["*"]) z = m(b, e, f, h, "*", k);
        return z
    }

    function v(b, e, f, h) {
        if (c.isArray(e)) c.each(e, function (k, o) {
                f || Fb.test(b) ? h(b, o) : v(b + "[" + (typeof o === "object" || c.isArray(o) ?
                    k : "") + "]", o, f, h)
            });
        else if (!f && e != null && typeof e === "object") for (var j in e) v(b + "[" + j + "]", e[j], f, h);
        else h(b, e)
    }

    function E() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }

    function q() {
        setTimeout(L, 0);
        return Pa = c.now()
    }

    function L() {
        Pa = d
    }

    function Q(b, e) {
        var f = {};
        c.each(fb.concat.apply([], fb.slice(0, e)), function () {
            f[this] = b
        });
        return f
    }

    function ca(b) {
        if (!Xa[b]) {
            var e = c("<" + b + ">")
                .appendTo("body"),
                f = e.css("display");
            e.remove();
            if (f === "none" || f === "") {
                if (!wa) {
                    wa = K.createElement("iframe");
                    wa.frameBorder = wa.width =
                        wa.height = 0
                }
                K.body.appendChild(wa);
                if (!Ma || !wa.createElement) {
                    Ma = (wa.contentWindow || wa.contentDocument)
                        .document;
                    Ma.write("<!doctype><html><body></body></html>")
                }
                e = Ma.createElement(b);
                Ma.body.appendChild(e);
                f = c.css(e, "display");
                K.body.removeChild(wa)
            }
            Xa[b] = f
        }
        return Xa[b]
    }

    function aa(b) {
        return c.isWindow(b) ? b : b.nodeType === 9 ? b.defaultView || b.parentWindow : false
    }
    var K = a.document,
        ia = a.navigator,
        pa = a.location,
        c = function () {
            function b() {
                if (!e.isReady) {
                    try {
                        K.documentElement.doScroll("left")
                    } catch (s) {
                        setTimeout(b,
                            1);
                        return
                    }
                    e.ready()
                }
            }
            var e = function (s, O) {
                return new e.fn.init(s, O, j)
            }, f = a.jQuery,
                h = a.$,
                j, k = /^(?:[^<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
                o = /\S/,
                w = /^\s+/,
                y = /\s+$/,
                z = /\d/,
                M = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
                fa = /^[\],:{}\s]*$/,
                la = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                ka = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                na = /(?:^|:|,)(?:\s*\[)+/g,
                Aa = /(webkit)[ \/]([\w.]+)/,
                ra = /(opera)(?:.*version)?[ \/]([\w.]+)/,
                sa = /(msie) ([\w.]+)/,
                xa = /(mozilla)(?:.*? rv:([\w.]+))?/,
                l = ia.userAgent,
                r, C, G = Object.prototype.toString,
                A = Object.prototype.hasOwnProperty,
                F = Array.prototype.push,
                U = Array.prototype.slice,
                Z = String.prototype.trim,
                ha = Array.prototype.indexOf,
                ta = {};
            e.fn = e.prototype = {
                constructor: e,
                init: function (s, O, N) {
                    var X;
                    if (!s) return this;
                    if (s.nodeType) {
                        this.context = this[0] = s;
                        this.length = 1;
                        return this
                    }
                    if (s === "body" && !O && K.body) {
                        this.context = K;
                        this[0] = K.body;
                        this.selector = s;
                        this.length = 1;
                        return this
                    }
                    if (typeof s === "string") if ((X = s.charAt(0) === "<" && s.charAt(s.length - 1) === ">" && s.length >= 3 ? [null, s, null] : k.exec(s)) && (X[1] || !O)) if (X[1]) {
                                N =
                                    (O = O instanceof e ? O[0] : O) ? O.ownerDocument || O : K;
                                if (s = M.exec(s)) if (e.isPlainObject(O)) {
                                        s = [K.createElement(s[1])];
                                        e.fn.attr.call(s, O, true)
                                    } else s = [N.createElement(s[1])];
                                    else {
                                        s = e.buildFragment([X[1]], [N]);
                                        s = (s.cacheable ? e.clone(s.fragment) : s.fragment)
                                            .childNodes
                                    }
                                return e.merge(this, s)
                            } else {
                                if ((O = K.getElementById(X[2])) && O.parentNode) {
                                    if (O.id !== X[2]) return N.find(s);
                                    this.length = 1;
                                    this[0] = O
                                }
                                this.context = K;
                                this.selector = s;
                                return this
                            } else return !O || O.jquery ? (O || N)
                                    .find(s) : this.constructor(O)
                                    .find(s);
                            else if (e.isFunction(s)) return N.ready(s);
                    if (s.selector !== d) {
                        this.selector = s.selector;
                        this.context = s.context
                    }
                    return e.makeArray(s, this)
                },
                selector: "",
                jquery: "1.6.1",
                length: 0,
                size: function () {
                    return this.length
                },
                toArray: function () {
                    return U.call(this, 0)
                },
                get: function (s) {
                    return s == null ? this.toArray() : s < 0 ? this[this.length + s] : this[s]
                },
                pushStack: function (s, O, N) {
                    var X = this.constructor();
                    e.isArray(s) ? F.apply(X, s) : e.merge(X, s);
                    X.prevObject = this;
                    X.context = this.context;
                    if (O === "find") X.selector = this.selector + (this.selector ? " " : "") + N;
                    else if (O) X.selector =
                            this.selector + "." + O + "(" + N + ")";
                    return X
                },
                each: function (s, O) {
                    return e.each(this, s, O)
                },
                ready: function (s) {
                    e.bindReady();
                    r.done(s);
                    return this
                },
                eq: function (s) {
                    return s === -1 ? this.slice(s) : this.slice(s, +s + 1)
                },
                first: function () {
                    return this.eq(0)
                },
                last: function () {
                    return this.eq(-1)
                },
                slice: function () {
                    return this.pushStack(U.apply(this, arguments), "slice", U.call(arguments)
                        .join(","))
                },
                map: function (s) {
                    return this.pushStack(e.map(this, function (O, N) {
                        return s.call(O, N, O)
                    }))
                },
                end: function () {
                    return this.prevObject ||
                        this.constructor(null)
                },
                push: F,
                sort: [].sort,
                splice: [].splice
            };
            e.fn.init.prototype = e.fn;
            e.extend = e.fn.extend = function () {
                var s, O, N, X, ma, ga = arguments[0] || {}, ja = 1,
                    oa = arguments.length,
                    Ba = false;
                if (typeof ga === "boolean") {
                    Ba = ga;
                    ga = arguments[1] || {};
                    ja = 2
                }
                if (typeof ga !== "object" && !e.isFunction(ga)) ga = {};
                if (oa === ja) {
                    ga = this;
                    --ja
                }
                for (; ja < oa; ja++) if ((s = arguments[ja]) != null) for (O in s) {
                            N = ga[O];
                            X = s[O];
                            if (ga !== X) if (Ba && X && (e.isPlainObject(X) || (ma = e.isArray(X)))) {
                                    if (ma) {
                                        ma = false;
                                        N = N && e.isArray(N) ? N : []
                                    } else N = N && e.isPlainObject(N) ?
                                            N : {};
                                    ga[O] = e.extend(Ba, N, X)
                                } else if (X !== d) ga[O] = X
                    }
                return ga
            };
            e.extend({
                noConflict: function (s) {
                    if (a.$ === e) a.$ = h;
                    if (s && a.jQuery === e) a.jQuery = f;
                    return e
                },
                isReady: false,
                readyWait: 1,
                holdReady: function (s) {
                    if (s) e.readyWait++;
                    else e.ready(true)
                },
                ready: function (s) {
                    if (s === true && !--e.readyWait || s !== true && !e.isReady) {
                        if (!K.body) return setTimeout(e.ready, 1);
                        e.isReady = true;
                        if (!(s !== true && --e.readyWait > 0)) {
                            r.resolveWith(K, [e]);
                            e.fn.trigger && e(K)
                                .trigger("ready")
                                .unbind("ready")
                        }
                    }
                },
                bindReady: function () {
                    if (!r) {
                        r =
                            e._Deferred();
                        if (K.readyState === "complete") return setTimeout(e.ready, 1);
                        if (K.addEventListener) {
                            K.addEventListener("DOMContentLoaded", C, false);
                            a.addEventListener("load", e.ready, false)
                        } else if (K.attachEvent) {
                            K.attachEvent("onreadystatechange", C);
                            a.attachEvent("onload", e.ready);
                            var s = false;
                            try {
                                s = a.frameElement == null
                            } catch (O) {}
                            K.documentElement.doScroll && s && b()
                        }
                    }
                },
                isFunction: function (s) {
                    return e.type(s) === "function"
                },
                isArray: Array.isArray || function (s) {
                    return e.type(s) === "array"
                },
                isWindow: function (s) {
                    return s &&
                        typeof s === "object" && "setInterval" in s
                },
                isNaN: function (s) {
                    return s == null || !z.test(s) || isNaN(s)
                },
                type: function (s) {
                    return s == null ? String(s) : ta[G.call(s)] || "object"
                },
                isPlainObject: function (s) {
                    if (!s || e.type(s) !== "object" || s.nodeType || e.isWindow(s)) return false;
                    if (s.constructor && !A.call(s, "constructor") && !A.call(s.constructor.prototype, "isPrototypeOf")) return false;
                    for (var O in s);
                    return O === d || A.call(s, O)
                },
                isEmptyObject: function (s) {
                    for (var O in s) return false;
                    return true
                },
                error: function (s) {
                    throw s;
                },
                parseJSON: function (s) {
                    if (typeof s !== "string" || !s) return null;
                    s = e.trim(s);
                    if (a.JSON && a.JSON.parse) return a.JSON.parse(s);
                    if (fa.test(s.replace(la, "@")
                        .replace(ka, "]")
                        .replace(na, ""))) return (new Function("return " + s))();
                    e.error("Invalid JSON: " + s)
                },
                parseXML: function (s, O, N) {
                    if (a.DOMParser) {
                        N = new DOMParser;
                        O = N.parseFromString(s, "text/xml")
                    } else {
                        O = new ActiveXObject("Microsoft.XMLDOM");
                        O.async = "false";
                        O.loadXML(s)
                    }
                    N = O.documentElement;
                    if (!N || !N.nodeName || N.nodeName === "parsererror") e.error("Invalid XML: " +
                            s);
                    return O
                },
                noop: function () {},
                globalEval: function (s) {
                    if (s && o.test(s))(a.execScript || function (O) {
                            a.eval.call(a, O)
                        })(s)
                },
                nodeName: function (s, O) {
                    return s.nodeName && s.nodeName.toUpperCase() === O.toUpperCase()
                },
                each: function (s, O, N) {
                    var X, ma = 0,
                        ga = s.length,
                        ja = ga === d || e.isFunction(s);
                    if (N) if (ja) for (X in s) {
                                if (O.apply(s[X], N) === false) break
                        } else for (; ma < ga;) {
                                if (O.apply(s[ma++], N) === false) break
                        } else if (ja) for (X in s) {
                            if (O.call(s[X], X, s[X]) === false) break
                    } else for (; ma < ga;) if (O.call(s[ma], ma, s[ma++]) === false) break;
                    return s
                },
                trim: Z ? function (s) {
                    return s == null ? "" : Z.call(s)
                } : function (s) {
                    return s == null ? "" : s.toString()
                        .replace(w, "")
                        .replace(y, "")
                },
                makeArray: function (s, O) {
                    var N = O || [];
                    if (s != null) {
                        var X = e.type(s);
                        s.length == null || X === "string" || X === "function" || X === "regexp" || e.isWindow(s) ? F.call(N, s) : e.merge(N, s)
                    }
                    return N
                },
                inArray: function (s, O) {
                    if (ha) return ha.call(O, s);
                    for (var N = 0, X = O.length; N < X; N++) if (O[N] === s) return N;
                    return -1
                },
                merge: function (s, O) {
                    var N = s.length,
                        X = 0;
                    if (typeof O.length === "number") for (var ma = O.length; X <
                            ma; X++) s[N++] = O[X];
                    else for (; O[X] !== d;) s[N++] = O[X++];
                    s.length = N;
                    return s
                },
                grep: function (s, O, N) {
                    var X = [],
                        ma;
                    N = !! N;
                    for (var ga = 0, ja = s.length; ga < ja; ga++) {
                        ma = !! O(s[ga], ga);
                        N !== ma && X.push(s[ga])
                    }
                    return X
                },
                map: function (s, O, N) {
                    var X, ma, ga = [],
                        ja = 0,
                        oa = s.length;
                    if (s instanceof e || oa !== d && typeof oa === "number" && (oa > 0 && s[0] && s[oa - 1] || oa === 0 || e.isArray(s))) for (; ja < oa; ja++) {
                            X = O(s[ja], ja, N);
                            if (X != null) ga[ga.length] = X
                    } else for (ma in s) {
                            X = O(s[ma], ma, N);
                            if (X != null) ga[ga.length] = X
                    }
                    return ga.concat.apply([], ga)
                },
                guid: 1,
                proxy: function (s, O) {
                    if (typeof O === "string") {
                        var N = s[O];
                        O = s;
                        s = N
                    }
                    if (!e.isFunction(s)) return d;
                    var X = U.call(arguments, 2);
                    N = function () {
                        return s.apply(O, X.concat(U.call(arguments)))
                    };
                    N.guid = s.guid = s.guid || N.guid || e.guid++;
                    return N
                },
                access: function (s, O, N, X, ma, ga) {
                    var ja = s.length;
                    if (typeof O === "object") {
                        for (var oa in O) e.access(s, oa, O[oa], X, ma, N);
                        return s
                    }
                    if (N !== d) {
                        X = !ga && X && e.isFunction(N);
                        for (oa = 0; oa < ja; oa++) ma(s[oa], O, X ? N.call(s[oa], oa, ma(s[oa], O)) : N, ga);
                        return s
                    }
                    return ja ? ma(s[0], O) : d
                },
                now: function () {
                    return (new Date)
                        .getTime()
                },
                uaMatch: function (s) {
                    s = s.toLowerCase();
                    s = Aa.exec(s) || ra.exec(s) || sa.exec(s) || s.indexOf("compatible") < 0 && xa.exec(s) || [];
                    return {
                        browser: s[1] || "",
                        version: s[2] || "0"
                    }
                },
                sub: function () {
                    function s(N, X) {
                        return new s.fn.init(N, X)
                    }
                    e.extend(true, s, this);
                    s.superclass = this;
                    s.fn = s.prototype = this();
                    s.fn.constructor = s;
                    s.sub = this.sub;
                    s.fn.init = function (N, X) {
                        if (X && X instanceof e && !(X instanceof s)) X = s(X);
                        return e.fn.init.call(this, N, X, O)
                    };
                    s.fn.init.prototype = s.fn;
                    var O = s(K);
                    return s
                },
                browser: {}
            });
            e.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (s, O) {
                ta["[object " + O + "]"] = O.toLowerCase()
            });
            l = e.uaMatch(l);
            if (l.browser) {
                e.browser[l.browser] = true;
                e.browser.version = l.version
            }
            if (e.browser.webkit) e.browser.safari = true;
            if (o.test("\u00a0")) {
                w = /^[\s\xA0]+/;
                y = /[\s\xA0]+$/
            }
            j = e(K);
            if (K.addEventListener) C = function () {
                    K.removeEventListener("DOMContentLoaded", C, false);
                    e.ready()
            };
            else if (K.attachEvent) C = function () {
                    if (K.readyState === "complete") {
                        K.detachEvent("onreadystatechange", C);
                        e.ready()
                    }
            };
            return e
        }(),
        u = "done fail isResolved isRejected promise then always pipe".split(" "),
        x = [].slice;
    c.extend({
        _Deferred: function () {
            var b = [],
                e, f, h, j = {
                    done: function () {
                        if (!h) {
                            var k = arguments,
                                o, w, y, z, M;
                            if (e) {
                                M = e;
                                e = 0
                            }
                            o = 0;
                            for (w = k.length; o < w; o++) {
                                y = k[o];
                                z = c.type(y);
                                if (z === "array") j.done.apply(j, y);
                                else z === "function" && b.push(y)
                            }
                            M && j.resolveWith(M[0], M[1])
                        }
                        return this
                    },
                    resolveWith: function (k, o) {
                        if (!h && !e && !f) {
                            o = o || [];
                            f = 1;
                            try {
                                for (; b[0];) b.shift()
                                        .apply(k, o)
                            } finally {
                                e = [k, o];
                                f = 0
                            }
                        }
                        return this
                    },
                    resolve: function () {
                        j.resolveWith(this, arguments);
                        return this
                    },
                    isResolved: function () {
                        return !!(f || e)
                    },
                    cancel: function () {
                        h =
                            1;
                        b = [];
                        return this
                    }
                };
            return j
        },
        Deferred: function (b) {
            var e = c._Deferred(),
                f = c._Deferred(),
                h;
            c.extend(e, {
                then: function (j, k) {
                    e.done(j)
                        .fail(k);
                    return this
                },
                always: function () {
                    return e.done.apply(e, arguments)
                        .fail.apply(this, arguments)
                },
                fail: f.done,
                rejectWith: f.resolveWith,
                reject: f.resolve,
                isRejected: f.isResolved,
                pipe: function (j, k) {
                    return c.Deferred(function (o) {
                        c.each({
                            done: [j, "resolve"],
                            fail: [k, "reject"]
                        }, function (w, y) {
                            var z = y[0],
                                M = y[1],
                                fa;
                            if (c.isFunction(z)) e[w](function () {
                                    if ((fa = z.apply(this, arguments)) &&
                                        c.isFunction(fa.promise)) fa.promise()
                                            .then(o.resolve, o.reject);
                                    else o[M](fa)
                                });
                            else e[w](o[M])
                        })
                    })
                        .promise()
                },
                promise: function (j) {
                    if (j == null) {
                        if (h) return h;
                        h = j = {}
                    }
                    for (var k = u.length; k--;) j[u[k]] = e[u[k]];
                    return j
                }
            });
            e.done(f.cancel)
                .fail(e.cancel);
            delete e.cancel;
            b && b.call(e, e);
            return e
        },
        when: function (b) {
            function e(w) {
                return function (y) {
                    f[w] = arguments.length > 1 ? x.call(arguments, 0) : y;
                    --k || o.resolveWith(o, x.call(f, 0))
                }
            }
            var f = arguments,
                h = 0,
                j = f.length,
                k = j,
                o = j <= 1 && b && c.isFunction(b.promise) ? b : c.Deferred();
            if (j > 1) {
                for (; h < j; h++) if (f[h] && c.isFunction(f[h].promise)) f[h].promise()
                            .then(e(h), o.reject);
                    else --k;
                k || o.resolveWith(o, f)
            } else if (o !== b) o.resolveWith(o, j ? [b] : []);
            return o.promise()
        }
    });
    c.support = function () {
        var b = K.createElement("div"),
            e = K.documentElement,
            f, h, j, k, o, w;
        b.setAttribute("className", "t");
        b.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
        f = b.getElementsByTagName("*");
        h = b.getElementsByTagName("a")[0];
        if (!f || !f.length || !h) return {};
        j = K.createElement("select");
        k = j.appendChild(K.createElement("option"));
        f = b.getElementsByTagName("input")[0];
        o = {
            leadingWhitespace: b.firstChild.nodeType === 3,
            tbody: !b.getElementsByTagName("tbody")
                .length,
            htmlSerialize: !! b.getElementsByTagName("link")
                .length,
            style: /top/.test(h.getAttribute("style")),
            hrefNormalized: h.getAttribute("href") === "/a",
            opacity: /^0.55$/.test(h.style.opacity),
            cssFloat: !! h.style.cssFloat,
            checkOn: f.value === "on",
            optSelected: k.selected,
            getSetAttribute: b.className !== "t",
            submitBubbles: true,
            changeBubbles: true,
            focusinBubbles: false,
            deleteExpando: true,
            noCloneEvent: true,
            inlineBlockNeedsLayout: false,
            shrinkWrapBlocks: false,
            reliableMarginRight: true
        };
        f.checked = true;
        o.noCloneChecked = f.cloneNode(true)
            .checked;
        j.disabled = true;
        o.optDisabled = !k.disabled;
        try {
            delete b.test
        } catch (y) {
            o.deleteExpando = false
        }
        if (!b.addEventListener && b.attachEvent && b.fireEvent) {
            b.attachEvent("onclick", function z() {
                o.noCloneEvent = false;
                b.detachEvent("onclick", z)
            });
            b.cloneNode(true)
                .fireEvent("onclick")
        }
        f =
            K.createElement("input");
        f.value = "t";
        f.setAttribute("type", "radio");
        o.radioValue = f.value === "t";
        f.setAttribute("checked", "checked");
        b.appendChild(f);
        h = K.createDocumentFragment();
        h.appendChild(b.firstChild);
        o.checkClone = h.cloneNode(true)
            .cloneNode(true)
            .lastChild.checked;
        b.innerHTML = "";
        b.style.width = b.style.paddingLeft = "1px";
        h = K.createElement("body");
        j = {
            visibility: "hidden",
            width: 0,
            height: 0,
            border: 0,
            margin: 0,
            background: "none"
        };
        for (w in j) h.style[w] = j[w];
        h.appendChild(b);
        e.insertBefore(h, e.firstChild);
        o.appendChecked = f.checked;
        o.boxModel = b.offsetWidth === 2;
        if ("zoom" in b.style) {
            b.style.display = "inline";
            b.style.zoom = 1;
            o.inlineBlockNeedsLayout = b.offsetWidth === 2;
            b.style.display = "";
            b.innerHTML = "<div style='width:4px;'></div>";
            o.shrinkWrapBlocks = b.offsetWidth !== 2
        }
        b.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>";
        j = b.getElementsByTagName("td");
        f = j[0].offsetHeight === 0;
        j[0].style.display = "";
        j[1].style.display = "none";
        o.reliableHiddenOffsets = f && j[0].offsetHeight ===
            0;
        b.innerHTML = "";
        if (K.defaultView && K.defaultView.getComputedStyle) {
            f = K.createElement("div");
            f.style.width = "0";
            f.style.marginRight = "0";
            b.appendChild(f);
            o.reliableMarginRight = (parseInt((K.defaultView.getComputedStyle(f, null) || {
                marginRight: 0
            })
                .marginRight, 10) || 0) === 0
        }
        h.innerHTML = "";
        e.removeChild(h);
        if (b.attachEvent) for (w in {
                submit: 1,
                change: 1,
                focusin: 1
            }) {
                e = "on" + w;
                f = e in b;
                if (!f) {
                    b.setAttribute(e, "return;");
                    f = typeof b[e] === "function"
                }
                o[w + "Bubbles"] = f
        }
        return o
    }();
    c.boxModel = c.support.boxModel;
    var J = /^(?:\{.*\}|\[.*\])$/,
        P = /([a-z])([A-Z])/g;
    c.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + (c.fn.jquery + Math.random())
            .replace(/\D/g, ""),
        noData: {
            embed: true,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: true
        },
        hasData: function (b) {
            b = b.nodeType ? c.cache[b[c.expando]] : b[c.expando];
            return !!b && !i(b)
        },
        data: function (b, e, f, h) {
            if (c.acceptData(b)) {
                var j = c.expando,
                    k = typeof e === "string",
                    o = b.nodeType,
                    w = o ? c.cache : b,
                    y = o ? b[c.expando] : b[c.expando] && c.expando;
                if (!((!y || h && y && !w[y][j]) && k && f === d)) {
                    if (!y) if (o) b[c.expando] = y = ++c.uuid;
                        else y = c.expando;
                    if (!w[y]) {
                        w[y] = {};
                        if (!o) w[y].toJSON = c.noop
                    }
                    if (typeof e === "object" || typeof e === "function") if (h) w[y][j] = c.extend(w[y][j], e);
                        else w[y] = c.extend(w[y], e);
                    b = w[y];
                    if (h) {
                        b[j] || (b[j] = {});
                        b = b[j]
                    }
                    if (f !== d) b[c.camelCase(e)] = f;
                    if (e === "events" && !b[e]) return b[j] && b[j].events;
                    return k ? b[c.camelCase(e)] : b
                }
            }
        },
        removeData: function (b, e, f) {
            if (c.acceptData(b)) {
                var h = c.expando,
                    j = b.nodeType,
                    k = j ? c.cache : b,
                    o = j ? b[c.expando] : c.expando;
                if (k[o]) {
                    if (e) {
                        var w = f ? k[o][h] : k[o];
                        if (w) {
                            delete w[e];
                            if (!i(w)) return
                        }
                    }
                    if (f) {
                        delete k[o][h];
                        if (!i(k[o])) return
                    }
                    e = k[o][h];
                    if (c.support.deleteExpando || k != a) delete k[o];
                    else k[o] = null; if (e) {
                        k[o] = {};
                        if (!j) k[o].toJSON = c.noop;
                        k[o][h] = e
                    } else if (j) if (c.support.deleteExpando) delete b[c.expando];
                        else if (b.removeAttribute) b.removeAttribute(c.expando);
                    else b[c.expando] = null
                }
            }
        },
        _data: function (b, e, f) {
            return c.data(b, e, f, true)
        },
        acceptData: function (b) {
            if (b.nodeName) {
                var e = c.noData[b.nodeName.toLowerCase()];
                if (e) return !(e === true || b.getAttribute("classid") !== e)
            }
            return true
        }
    });
    c.fn.extend({
        data: function (b,
            e) {
            var f = null;
            if (typeof b === "undefined") {
                if (this.length) {
                    f = c.data(this[0]);
                    if (this[0].nodeType === 1) for (var h = this[0].attributes, j, k = 0, o = h.length; k < o; k++) {
                            j = h[k].name;
                            if (j.indexOf("data-") === 0) {
                                j = c.camelCase(j.substring(5));
                                g(this[0], j, f[j])
                            }
                    }
                }
                return f
            } else if (typeof b === "object") return this.each(function () {
                    c.data(this, b)
                });
            var w = b.split(".");
            w[1] = w[1] ? "." + w[1] : "";
            if (e === d) {
                f = this.triggerHandler("getData" + w[1] + "!", [w[0]]);
                if (f === d && this.length) {
                    f = c.data(this[0], b);
                    f = g(this[0], b, f)
                }
                return f === d && w[1] ?
                    this.data(w[0]) : f
            } else return this.each(function () {
                    var y = c(this),
                        z = [w[0], e];
                    y.triggerHandler("setData" + w[1] + "!", z);
                    c.data(this, b, e);
                    y.triggerHandler("changeData" + w[1] + "!", z)
                })
        },
        removeData: function (b) {
            return this.each(function () {
                c.removeData(this, b)
            })
        }
    });
    c.extend({
        _mark: function (b, e) {
            if (b) {
                e = (e || "fx") + "mark";
                c.data(b, e, (c.data(b, e, d, true) || 0) + 1, true)
            }
        },
        _unmark: function (b, e, f) {
            if (b !== true) {
                f = e;
                e = b;
                b = false
            }
            if (e) {
                f = f || "fx";
                var h = f + "mark";
                if (b = b ? 0 : (c.data(e, h, d, true) || 1) - 1) c.data(e, h, b, true);
                else {
                    c.removeData(e,
                        h, true);
                    n(e, f, "mark")
                }
            }
        },
        queue: function (b, e, f) {
            if (b) {
                e = (e || "fx") + "queue";
                var h = c.data(b, e, d, true);
                if (f) if (!h || c.isArray(f)) h = c.data(b, e, c.makeArray(f), true);
                    else h.push(f);
                return h || []
            }
        },
        dequeue: function (b, e) {
            e = e || "fx";
            var f = c.queue(b, e),
                h = f.shift();
            if (h === "inprogress") h = f.shift();
            if (h) {
                e === "fx" && f.unshift("inprogress");
                h.call(b, function () {
                    c.dequeue(b, e)
                })
            }
            if (!f.length) {
                c.removeData(b, e + "queue", true);
                n(b, e, "queue")
            }
        }
    });
    c.fn.extend({
        queue: function (b, e) {
            if (typeof b !== "string") {
                e = b;
                b = "fx"
            }
            if (e === d) return c.queue(this[0],
                    b);
            return this.each(function () {
                var f = c.queue(this, b, e);
                b === "fx" && f[0] !== "inprogress" && c.dequeue(this, b)
            })
        },
        dequeue: function (b) {
            return this.each(function () {
                c.dequeue(this, b)
            })
        },
        delay: function (b, e) {
            b = c.fx ? c.fx.speeds[b] || b : b;
            e = e || "fx";
            return this.queue(e, function () {
                var f = this;
                setTimeout(function () {
                    c.dequeue(f, e)
                }, b)
            })
        },
        clearQueue: function (b) {
            return this.queue(b || "fx", [])
        },
        promise: function (b) {
            function e() {
                --k || f.resolveWith(h, [h])
            }
            if (typeof b !== "string") b = d;
            b = b || "fx";
            var f = c.Deferred(),
                h = this,
                j = h.length,
                k = 1,
                o = b + "defer",
                w = b + "queue";
            b += "mark";
            for (var y; j--;) if (y = c.data(h[j], o, d, true) || (c.data(h[j], w, d, true) || c.data(h[j], b, d, true)) && c.data(h[j], o, c._Deferred(), true)) {
                    k++;
                    y.done(e)
                }
            e();
            return f.promise()
        }
    });
    var Y = /[\n\t\r]/g,
        ea = /\s+/,
        va = /\r/g,
        Ga = /^(?:button|input)$/i,
        Gb = /^(?:button|input|object|select|textarea)$/i,
        Hb = /^a(?:rea)?$/i,
        gb = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        Ib = /\:/,
        Ca, hb;
    c.fn.extend({
        attr: function (b,
            e) {
            return c.access(this, b, e, true, c.attr)
        },
        removeAttr: function (b) {
            return this.each(function () {
                c.removeAttr(this, b)
            })
        },
        prop: function (b, e) {
            return c.access(this, b, e, true, c.prop)
        },
        removeProp: function (b) {
            b = c.propFix[b] || b;
            return this.each(function () {
                try {
                    this[b] = d;
                    delete this[b]
                } catch (e) {}
            })
        },
        addClass: function (b) {
            if (c.isFunction(b)) return this.each(function (z) {
                    var M = c(this);
                    M.addClass(b.call(this, z, M.attr("class") || ""))
                });
            if (b && typeof b === "string") for (var e = (b || "")
                    .split(ea), f = 0, h = this.length; f < h; f++) {
                    var j =
                        this[f];
                    if (j.nodeType === 1) if (j.className) {
                            for (var k = " " + j.className + " ", o = j.className, w = 0, y = e.length; w < y; w++) if (k.indexOf(" " + e[w] + " ") < 0) o += " " + e[w];
                            j.className = c.trim(o)
                        } else j.className = b
            }
            return this
        },
        removeClass: function (b) {
            if (c.isFunction(b)) return this.each(function (y) {
                    var z = c(this);
                    z.removeClass(b.call(this, y, z.attr("class")))
                });
            if (b && typeof b === "string" || b === d) for (var e = (b || "")
                    .split(ea), f = 0, h = this.length; f < h; f++) {
                    var j = this[f];
                    if (j.nodeType === 1 && j.className) if (b) {
                            for (var k = (" " + j.className +
                                " ")
                                .replace(Y, " "), o = 0, w = e.length; o < w; o++) k = k.replace(" " + e[o] + " ", " ");
                            j.className = c.trim(k)
                        } else j.className = ""
            }
            return this
        },
        toggleClass: function (b, e) {
            var f = typeof b,
                h = typeof e === "boolean";
            if (c.isFunction(b)) return this.each(function (j) {
                    var k = c(this);
                    k.toggleClass(b.call(this, j, k.attr("class"), e), e)
                });
            return this.each(function () {
                if (f === "string") for (var j, k = 0, o = c(this), w = e, y = b.split(ea); j = y[k++];) {
                        w = h ? w : !o.hasClass(j);
                        o[w ? "addClass" : "removeClass"](j)
                } else if (f === "undefined" || f === "boolean") {
                    this.className &&
                        c._data(this, "__className__", this.className);
                    this.className = this.className || b === false ? "" : c._data(this, "__className__") || ""
                }
            })
        },
        hasClass: function (b) {
            b = " " + b + " ";
            for (var e = 0, f = this.length; e < f; e++) if ((" " + this[e].className + " ")
                    .replace(Y, " ")
                    .indexOf(b) > -1) return true;
            return false
        },
        val: function (b) {
            var e, f, h = this[0];
            if (!arguments.length) {
                if (h) {
                    if ((e = c.valHooks[h.nodeName.toLowerCase()] || c.valHooks[h.type]) && "get" in e && (f = e.get(h, "value")) !== d) return f;
                    return (h.value || "")
                        .replace(va, "")
                }
                return d
            }
            var j =
                c.isFunction(b);
            return this.each(function (k) {
                var o = c(this);
                if (this.nodeType === 1) {
                    k = j ? b.call(this, k, o.val()) : b;
                    if (k == null) k = "";
                    else if (typeof k === "number") k += "";
                    else if (c.isArray(k)) k = c.map(k, function (w) {
                            return w == null ? "" : w + ""
                        });
                    e = c.valHooks[this.nodeName.toLowerCase()] || c.valHooks[this.type];
                    if (!e || !("set" in e) || e.set(this, k, "value") === d) this.value = k
                }
            })
        }
    });
    c.extend({
        valHooks: {
            option: {
                get: function (b) {
                    var e = b.attributes.value;
                    return !e || e.specified ? b.value : b.text
                }
            },
            select: {
                get: function (b) {
                    var e, f = b.selectedIndex,
                        h = [],
                        j = b.options;
                    b = b.type === "select-one";
                    if (f < 0) return null;
                    for (var k = b ? f : 0, o = b ? f + 1 : j.length; k < o; k++) {
                        e = j[k];
                        if (e.selected && (c.support.optDisabled ? !e.disabled : e.getAttribute("disabled") === null) && (!e.parentNode.disabled || !c.nodeName(e.parentNode, "optgroup"))) {
                            e = c(e)
                                .val();
                            if (b) return e;
                            h.push(e)
                        }
                    }
                    if (b && !h.length && j.length) return c(j[f])
                            .val();
                    return h
                },
                set: function (b, e) {
                    var f = c.makeArray(e);
                    c(b)
                        .find("option")
                        .each(function () {
                        this.selected = c.inArray(c(this)
                            .val(), f) >= 0
                    });
                    if (!f.length) b.selectedIndex = -1;
                    return f
                }
            }
        },
        attrFn: {
            val: true,
            css: true,
            html: true,
            text: true,
            data: true,
            width: true,
            height: true,
            offset: true
        },
        attrFix: {
            tabindex: "tabIndex"
        },
        attr: function (b, e, f, h) {
            var j = b.nodeType;
            if (!b || j === 3 || j === 8 || j === 2) return d;
            if (h && e in c.attrFn) return c(b)[e](f);
            if (!("getAttribute" in b)) return c.prop(b, e, f);
            var k;
            e = (j = j !== 1 || !c.isXMLDoc(b)) && c.attrFix[e] || e;
            h = c.attrHooks[e];
            if (!h) if (gb.test(e) && (typeof f === "boolean" || f === d || f.toLowerCase() === e.toLowerCase())) h = hb;
                else if (Ca && (c.nodeName(b, "form") || Ib.test(e))) h =
                    Ca;
            if (f !== d) if (f === null) {
                    c.removeAttr(b, e);
                    return d
                } else if (h && "set" in h && j && (k = h.set(b, f, e)) !== d) return k;
            else {
                b.setAttribute(e, "" + f);
                return f
            } else if (h && "get" in h && j) return h.get(b, e);
            else {
                k = b.getAttribute(e);
                return k === null ? d : k
            }
        },
        removeAttr: function (b, e) {
            var f;
            if (b.nodeType === 1) {
                e = c.attrFix[e] || e;
                if (c.support.getSetAttribute) b.removeAttribute(e);
                else {
                    c.attr(b, e, "");
                    b.removeAttributeNode(b.getAttributeNode(e))
                } if (gb.test(e) && (f = c.propFix[e] || e) in b) b[f] = false
            }
        },
        attrHooks: {
            type: {
                set: function (b, e) {
                    if (Ga.test(b.nodeName) &&
                        b.parentNode) c.error("type property can't be changed");
                    else if (!c.support.radioValue && e === "radio" && c.nodeName(b, "input")) {
                        var f = b.value;
                        b.setAttribute("type", e);
                        if (f) b.value = f;
                        return e
                    }
                }
            },
            tabIndex: {
                get: function (b) {
                    var e = b.getAttributeNode("tabIndex");
                    return e && e.specified ? parseInt(e.value, 10) : Gb.test(b.nodeName) || Hb.test(b.nodeName) && b.href ? 0 : d
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function (b, e, f) {
            var h = b.nodeType;
            if (!b || h === 3 || h === 8 || h === 2) return d;
            var j;
            e = (h !== 1 || !c.isXMLDoc(b)) && c.propFix[e] || e;
            h = c.propHooks[e];
            return f !== d ? h && "set" in h && (j = h.set(b, f, e)) !== d ? j : b[e] = f : h && "get" in h && (j = h.get(b, e)) !== d ? j : b[e]
        },
        propHooks: {}
    });
    hb = {
        get: function (b, e) {
            return b[c.propFix[e] || e] ? e.toLowerCase() : d
        },
        set: function (b, e, f) {
            var h;
            if (e === false) c.removeAttr(b, f);
            else {
                h = c.propFix[f] ||
                    f;
                if (h in b) b[h] = e;
                b.setAttribute(f, f.toLowerCase())
            }
            return f
        }
    };
    c.attrHooks.value = {
        get: function (b, e) {
            if (Ca && c.nodeName(b, "button")) return Ca.get(b, e);
            return b.value
        },
        set: function (b, e, f) {
            if (Ca && c.nodeName(b, "button")) return Ca.set(b, e, f);
            b.value = e
        }
    };
    if (!c.support.getSetAttribute) {
        c.attrFix = c.propFix;
        Ca = c.attrHooks.name = c.valHooks.button = {
            get: function (b, e) {
                var f;
                return (f = b.getAttributeNode(e)) && f.nodeValue !== "" ? f.nodeValue : d
            },
            set: function (b, e, f) {
                if (b = b.getAttributeNode(f)) return b.nodeValue = e
            }
        };
        c.each(["width",
                "height"
        ], function (b, e) {
            c.attrHooks[e] = c.extend(c.attrHooks[e], {
                set: function (f, h) {
                    if (h === "") {
                        f.setAttribute(e, "auto");
                        return h
                    }
                }
            })
        })
    }
    c.support.hrefNormalized || c.each(["href", "src", "width", "height"], function (b, e) {
        c.attrHooks[e] = c.extend(c.attrHooks[e], {
            get: function (f) {
                f = f.getAttribute(e, 2);
                return f === null ? d : f
            }
        })
    });
    if (!c.support.style) c.attrHooks.style = {
            get: function (b) {
                return b.style.cssText.toLowerCase() || d
            },
            set: function (b, e) {
                return b.style.cssText = "" + e
            }
    };
    if (!c.support.optSelected) c.propHooks.selected =
            c.extend(c.propHooks.selected, {
            get: function () {}
        });
    c.support.checkOn || c.each(["radio", "checkbox"], function () {
        c.valHooks[this] = {
            get: function (b) {
                return b.getAttribute("value") === null ? "on" : b.value
            }
        }
    });
    c.each(["radio", "checkbox"], function () {
        c.valHooks[this] = c.extend(c.valHooks[this], {
            set: function (b, e) {
                if (c.isArray(e)) return b.checked = c.inArray(c(b)
                        .val(), e) >= 0
            }
        })
    });
    var Va = /\.(.*)$/,
        Ya = /^(?:textarea|input|select)$/i,
        zb = /\./g,
        Ab = / /g,
        Jb = /[^\w\s.|`]/g,
        Kb = function (b) {
            return b.replace(Jb, "\\$&")
        };
    c.event = {
        add: function (b,
            e, f, h) {
            if (!(b.nodeType === 3 || b.nodeType === 8)) {
                if (f === false) f = p;
                else if (!f) return;
                var j, k;
                if (f.handler) {
                    j = f;
                    f = j.handler
                }
                if (!f.guid) f.guid = c.guid++;
                if (k = c._data(b)) {
                    var o = k.events,
                        w = k.handle;
                    if (!o) k.events = o = {};
                    if (!w) k.handle = w = function (ka) {
                            return typeof c !== "undefined" && (!ka || c.event.triggered !== ka.type) ? c.event.handle.apply(w.elem, arguments) : d
                    };
                    w.elem = b;
                    e = e.split(" ");
                    for (var y, z = 0, M; y = e[z++];) {
                        k = j ? c.extend({}, j) : {
                            handler: f,
                            data: h
                        };
                        if (y.indexOf(".") > -1) {
                            M = y.split(".");
                            y = M.shift();
                            k.namespace = M.slice(0)
                                .sort()
                                .join(".")
                        } else {
                            M = [];
                            k.namespace = ""
                        }
                        k.type = y;
                        if (!k.guid) k.guid = f.guid;
                        var fa = o[y],
                            la = c.event.special[y] || {};
                        if (!fa) {
                            fa = o[y] = [];
                            if (!la.setup || la.setup.call(b, h, M, w) === false) if (b.addEventListener) b.addEventListener(y, w, false);
                                else b.attachEvent && b.attachEvent("on" + y, w)
                        }
                        if (la.add) {
                            la.add.call(b, k);
                            if (!k.handler.guid) k.handler.guid = f.guid
                        }
                        fa.push(k);
                        c.event.global[y] = true
                    }
                    b = null
                }
            }
        },
        global: {},
        remove: function (b, e, f, h) {
            if (!(b.nodeType === 3 || b.nodeType === 8)) {
                if (f === false) f = p;
                var j, k, o = 0,
                    w, y, z, M, fa, la, ka = c.hasData(b) && c._data(b),
                    na = ka && ka.events;
                if (ka && na) {
                    if (e && e.type) {
                        f = e.handler;
                        e = e.type
                    }
                    if (!e || typeof e === "string" && e.charAt(0) === ".") {
                        e = e || "";
                        for (j in na) c.event.remove(b, j + e)
                    } else {
                        for (e = e.split(" "); j = e[o++];) {
                            M = j;
                            w = j.indexOf(".") < 0;
                            y = [];
                            if (!w) {
                                y = j.split(".");
                                j = y.shift();
                                z = RegExp("(^|\\.)" + c.map(y.slice(0)
                                    .sort(), Kb)
                                    .join("\\.(?:.*\\.)?") + "(\\.|$)")
                            }
                            if (fa = na[j]) if (f) {
                                    M = c.event.special[j] || {};
                                    for (k = h || 0; k < fa.length; k++) {
                                        la = fa[k];
                                        if (f.guid === la.guid) {
                                            if (w || z.test(la.namespace)) {
                                                h == null && fa.splice(k--, 1);
                                                M.remove && M.remove.call(b,
                                                    la)
                                            }
                                            if (h != null) break
                                        }
                                    }
                                    if (fa.length === 0 || h != null && fa.length === 1) {
                                        if (!M.teardown || M.teardown.call(b, y) === false) c.removeEvent(b, j, ka.handle);
                                        delete na[j]
                                    }
                                } else for (k = 0; k < fa.length; k++) {
                                        la = fa[k];
                                        if (w || z.test(la.namespace)) {
                                            c.event.remove(b, M, la.handler, k);
                                            fa.splice(k--, 1)
                                        }
                                }
                        }
                        if (c.isEmptyObject(na)) {
                            if (e = ka.handle) e.elem = null;
                            delete ka.events;
                            delete ka.handle;
                            c.isEmptyObject(ka) && c.removeData(b, d, true)
                        }
                    }
                }
            }
        },
        customEvent: {
            getData: true,
            setData: true,
            changeData: true
        },
        trigger: function (b, e, f, h) {
            var j = b.type ||
                b,
                k = [],
                o;
            if (j.indexOf("!") >= 0) {
                j = j.slice(0, -1);
                o = true
            }
            if (j.indexOf(".") >= 0) {
                k = j.split(".");
                j = k.shift();
                k.sort()
            }
            if (!((!f || c.event.customEvent[j]) && !c.event.global[j])) {
                b = typeof b === "object" ? b[c.expando] ? b : new c.Event(j, b) : new c.Event(j);
                b.type = j;
                b.exclusive = o;
                b.namespace = k.join(".");
                b.namespace_re = RegExp("(^|\\.)" + k.join("\\.(?:.*\\.)?") + "(\\.|$)");
                if (h || !f) {
                    b.preventDefault();
                    b.stopPropagation()
                }
                if (f) {
                    if (!(f.nodeType === 3 || f.nodeType === 8)) {
                        b.result = d;
                        b.target = f;
                        e = e ? c.makeArray(e) : [];
                        e.unshift(b);
                        k = f;
                        h = j.indexOf(":") < 0 ? "on" + j : "";
                        do {
                            o = c._data(k, "handle");
                            b.currentTarget = k;
                            o && o.apply(k, e);
                            if (h && c.acceptData(k) && k[h] && k[h].apply(k, e) === false) {
                                b.result = false;
                                b.preventDefault()
                            }
                            k = k.parentNode || k.ownerDocument || k === b.target.ownerDocument && a
                        } while (k && !b.isPropagationStopped());
                        if (!b.isDefaultPrevented()) {
                            var w;
                            k = c.event.special[j] || {};
                            if ((!k._default || k._default.call(f.ownerDocument, b) === false) && !(j === "click" && c.nodeName(f, "a")) && c.acceptData(f)) {
                                try {
                                    if (h && f[j]) {
                                        if (w = f[h]) f[h] = null;
                                        c.event.triggered =
                                            j;
                                        f[j]()
                                    }
                                } catch (y) {}
                                if (w) f[h] = w;
                                c.event.triggered = d
                            }
                        }
                        return b.result
                    }
                } else c.each(c.cache, function () {
                        var z = this[c.expando];
                        z && z.events && z.events[j] && c.event.trigger(b, e, z.handle.elem)
                    })
            }
        },
        handle: function (b) {
            b = c.event.fix(b || a.event);
            var e = ((c._data(this, "events") || {})[b.type] || [])
                .slice(0),
                f = !b.exclusive && !b.namespace,
                h = Array.prototype.slice.call(arguments, 0);
            h[0] = b;
            b.currentTarget = this;
            for (var j = 0, k = e.length; j < k; j++) {
                var o = e[j];
                if (f || b.namespace_re.test(o.namespace)) {
                    b.handler = o.handler;
                    b.data = o.data;
                    b.handleObj = o;
                    o = o.handler.apply(this, h);
                    if (o !== d) {
                        b.result = o;
                        if (o === false) {
                            b.preventDefault();
                            b.stopPropagation()
                        }
                    }
                    if (b.isImmediatePropagationStopped()) break
                }
            }
            return b.result
        },
        props: "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
        fix: function (b) {
            if (b[c.expando]) return b;
            var e = b;
            b = c.Event(e);
            for (var f = this.props.length, h; f;) {
                h = this.props[--f];
                b[h] = e[h]
            }
            if (!b.target) b.target = b.srcElement || K;
            if (b.target.nodeType === 3) b.target = b.target.parentNode;
            if (!b.relatedTarget && b.fromElement) b.relatedTarget = b.fromElement === b.target ? b.toElement : b.fromElement;
            if (b.pageX == null && b.clientX != null) {
                f = b.target.ownerDocument || K;
                e = f.documentElement;
                f = f.body;
                b.pageX = b.clientX + (e && e.scrollLeft || f && f.scrollLeft || 0) - (e && e.clientLeft || f && f.clientLeft ||
                    0);
                b.pageY = b.clientY + (e && e.scrollTop || f && f.scrollTop || 0) - (e && e.clientTop || f && f.clientTop || 0)
            }
            if (b.which == null && (b.charCode != null || b.keyCode != null)) b.which = b.charCode != null ? b.charCode : b.keyCode;
            if (!b.metaKey && b.ctrlKey) b.metaKey = b.ctrlKey;
            if (!b.which && b.button !== d) b.which = b.button & 1 ? 1 : b.button & 2 ? 3 : b.button & 4 ? 2 : 0;
            return b
        },
        guid: 1E8,
        proxy: c.proxy,
        special: {
            ready: {
                setup: c.bindReady,
                teardown: c.noop
            },
            live: {
                add: function (b) {
                    c.event.add(this, D(b.origType, b.selector), c.extend({}, b, {
                        handler: B,
                        guid: b.handler.guid
                    }))
                },
                remove: function (b) {
                    c.event.remove(this, D(b.origType, b.selector), b)
                }
            },
            beforeunload: {
                setup: function (b, e, f) {
                    if (c.isWindow(this)) this.onbeforeunload = f
                },
                teardown: function (b, e) {
                    if (this.onbeforeunload === e) this.onbeforeunload = null
                }
            }
        }
    };
    c.removeEvent = K.removeEventListener ? function (b, e, f) {
        b.removeEventListener && b.removeEventListener(e, f, false)
    } : function (b, e, f) {
        b.detachEvent && b.detachEvent("on" + e, f)
    };
    c.Event = function (b, e) {
        if (!this.preventDefault) return new c.Event(b, e);
        if (b && b.type) {
            this.originalEvent = b;
            this.type =
                b.type;
            this.isDefaultPrevented = b.defaultPrevented || b.returnValue === false || b.getPreventDefault && b.getPreventDefault() ? t : p
        } else this.type = b;
        e && c.extend(this, e);
        this.timeStamp = c.now();
        this[c.expando] = true
    };
    c.Event.prototype = {
        preventDefault: function () {
            this.isDefaultPrevented = t;
            var b = this.originalEvent;
            if (b) if (b.preventDefault) b.preventDefault();
                else b.returnValue = false
        },
        stopPropagation: function () {
            this.isPropagationStopped = t;
            var b = this.originalEvent;
            if (b) {
                b.stopPropagation && b.stopPropagation();
                b.cancelBubble =
                    true
            }
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = t;
            this.stopPropagation()
        },
        isDefaultPrevented: p,
        isPropagationStopped: p,
        isImmediatePropagationStopped: p
    };
    var ib = function (b) {
        var e = b.relatedTarget;
        b.type = b.data;
        try {
            if (!(e && e !== K && !e.parentNode)) {
                for (; e && e !== this;) e = e.parentNode;
                e !== this && c.event.handle.apply(this, arguments)
            }
        } catch (f) {}
    }, jb = function (b) {
            b.type = b.data;
            c.event.handle.apply(this, arguments)
        };
    c.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function (b, e) {
        c.event.special[b] = {
            setup: function (f) {
                c.event.add(this, e, f && f.selector ? jb : ib, b)
            },
            teardown: function (f) {
                c.event.remove(this, e, f && f.selector ? jb : ib)
            }
        }
    });
    if (!c.support.submitBubbles) c.event.special.submit = {
            setup: function () {
                if (c.nodeName(this, "form")) return false;
                else {
                    c.event.add(this, "click.specialSubmit", function (b) {
                        var e = b.target,
                            f = e.type;
                        if ((f === "submit" || f === "image") && c(e)
                            .closest("form")
                            .length) H("submit", this, arguments)
                    });
                    c.event.add(this, "keypress.specialSubmit", function (b) {
                        var e = b.target,
                            f = e.type;
                        if ((f === "text" ||
                            f === "password") && c(e)
                            .closest("form")
                            .length && b.keyCode === 13) H("submit", this, arguments)
                    })
                }
            },
            teardown: function () {
                c.event.remove(this, ".specialSubmit")
            }
    };
    if (!c.support.changeBubbles) {
        var Na, kb = function (b) {
                var e = b.type,
                    f = b.value;
                if (e === "radio" || e === "checkbox") f = b.checked;
                else if (e === "select-multiple") f = b.selectedIndex > -1 ? c.map(b.options, function (h) {
                        return h.selected
                    })
                        .join("-") : "";
                else if (c.nodeName(b, "select")) f = b.selectedIndex;
                return f
            }, Qa = function (b, e) {
                var f = b.target,
                    h, j;
                if (!(!Ya.test(f.nodeName) ||
                    f.readOnly)) {
                    h = c._data(f, "_change_data");
                    j = kb(f);
                    if (b.type !== "focusout" || f.type !== "radio") c._data(f, "_change_data", j);
                    if (!(h === d || j === h)) if (h != null || j) {
                            b.type = "change";
                            b.liveFired = d;
                            c.event.trigger(b, e, f)
                        }
                }
            };
        c.event.special.change = {
            filters: {
                focusout: Qa,
                beforedeactivate: Qa,
                click: function (b) {
                    var e = b.target,
                        f = c.nodeName(e, "input") ? e.type : "";
                    if (f === "radio" || f === "checkbox" || c.nodeName(e, "select")) Qa.call(this, b)
                },
                keydown: function (b) {
                    var e = b.target,
                        f = c.nodeName(e, "input") ? e.type : "";
                    if (b.keyCode === 13 && !c.nodeName(e,
                        "textarea") || b.keyCode === 32 && (f === "checkbox" || f === "radio") || f === "select-multiple") Qa.call(this, b)
                },
                beforeactivate: function (b) {
                    b = b.target;
                    c._data(b, "_change_data", kb(b))
                }
            },
            setup: function () {
                if (this.type === "file") return false;
                for (var b in Na) c.event.add(this, b + ".specialChange", Na[b]);
                return Ya.test(this.nodeName)
            },
            teardown: function () {
                c.event.remove(this, ".specialChange");
                return Ya.test(this.nodeName)
            }
        };
        Na = c.event.special.change.filters;
        Na.focus = Na.beforeactivate
    }
    c.support.focusinBubbles || c.each({
        focus: "focusin",
        blur: "focusout"
    }, function (b, e) {
        function f(j) {
            var k = c.event.fix(j);
            k.type = e;
            k.originalEvent = {};
            c.event.trigger(k, null, k.target);
            k.isDefaultPrevented() && j.preventDefault()
        }
        var h = 0;
        c.event.special[e] = {
            setup: function () {
                h++ === 0 && K.addEventListener(b, f, true)
            },
            teardown: function () {
                --h === 0 && K.removeEventListener(b, f, true)
            }
        }
    });
    c.each(["bind", "one"], function (b, e) {
        c.fn[e] = function (f, h, j) {
            var k;
            if (typeof f === "object") {
                for (var o in f) this[e](o, h, f[o], j);
                return this
            }
            if (arguments.length === 2 || h === false) {
                j = h;
                h = d
            }
            if (e ===
                "one") {
                k = function (y) {
                    c(this)
                        .unbind(y, k);
                    return j.apply(this, arguments)
                };
                k.guid = j.guid || c.guid++
            } else k = j; if (f === "unload" && e !== "one") this.one(f, h, j);
            else {
                o = 0;
                for (var w = this.length; o < w; o++) c.event.add(this[o], f, k, h)
            }
            return this
        }
    });
    c.fn.extend({
        unbind: function (b, e) {
            if (typeof b === "object" && !b.preventDefault) for (var f in b) this.unbind(f, b[f]);
            else {
                f = 0;
                for (var h = this.length; f < h; f++) c.event.remove(this[f], b, e)
            }
            return this
        },
        delegate: function (b, e, f, h) {
            return this.live(e, f, h, b)
        },
        undelegate: function (b, e, f) {
            return arguments.length ===
                0 ? this.unbind("live") : this.die(e, null, f, b)
        },
        trigger: function (b, e) {
            return this.each(function () {
                c.event.trigger(b, e, this)
            })
        },
        triggerHandler: function (b, e) {
            if (this[0]) return c.event.trigger(b, e, this[0], true)
        },
        toggle: function (b) {
            var e = arguments,
                f = b.guid || c.guid++,
                h = 0,
                j = function (k) {
                    var o = (c.data(this, "lastToggle" + b.guid) || 0) % h;
                    c.data(this, "lastToggle" + b.guid, o + 1);
                    k.preventDefault();
                    return e[o].apply(this, arguments) || false
                };
            for (j.guid = f; h < e.length;) e[h++].guid = f;
            return this.click(j)
        },
        hover: function (b, e) {
            return this.mouseenter(b)
                .mouseleave(e ||
                b)
        }
    });
    var Za = {
        focus: "focusin",
        blur: "focusout",
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    };
    c.each(["live", "die"], function (b, e) {
        c.fn[e] = function (f, h, j, k) {
            var o = 0,
                w, y, z = k || this.selector,
                M = k ? this : c(this.context);
            if (typeof f === "object" && !f.preventDefault) {
                for (w in f) M[e](w, h, f[w], z);
                return this
            }
            if (e === "die" && !f && k && k.charAt(0) === ".") {
                M.unbind(k);
                return this
            }
            if (h === false || c.isFunction(h)) {
                j = h || p;
                h = d
            }
            for (f = (f || "")
                .split(" ");
            (k = f[o++]) != null;) {
                w = Va.exec(k);
                y = "";
                if (w) {
                    y = w[0];
                    k = k.replace(Va, "")
                }
                if (k === "hover") f.push("mouseenter" +
                        y, "mouseleave" + y);
                else {
                    w = k;
                    if (Za[k]) {
                        f.push(Za[k] + y);
                        k += y
                    } else k = (Za[k] || k) + y; if (e === "live") {
                        y = 0;
                        for (var fa = M.length; y < fa; y++) c.event.add(M[y], "live." + D(k, z), {
                                data: h,
                                selector: z,
                                handler: j,
                                origType: k,
                                origHandler: j,
                                preType: w
                            })
                    } else M.unbind("live." + D(k, z), j)
                }
            }
            return this
        }
    });
    c.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "), function (b, e) {
        c.fn[e] = function (f, h) {
            if (h == null) {
                h = f;
                f = null
            }
            return arguments.length > 0 ? this.bind(e, f, h) : this.trigger(e)
        };
        if (c.attrFn) c.attrFn[e] = true
    });
    (function () {
        function b(l, r, C, G, A, F) {
            A = 0;
            for (var U = G.length; A < U; A++) {
                var Z = G[A];
                if (Z) {
                    var ha = false;
                    for (Z = Z[l]; Z;) {
                        if (Z.sizcache === C) {
                            ha = G[Z.sizset];
                            break
                        }
                        if (Z.nodeType === 1 && !F) {
                            Z.sizcache = C;
                            Z.sizset = A
                        }
                        if (Z.nodeName.toLowerCase() === r) {
                            ha = Z;
                            break
                        }
                        Z = Z[l]
                    }
                    G[A] = ha
                }
            }
        }

        function e(l, r, C, G, A, F) {
            A = 0;
            for (var U = G.length; A < U; A++) {
                var Z = G[A];
                if (Z) {
                    var ha = false;
                    for (Z = Z[l]; Z;) {
                        if (Z.sizcache ===
                            C) {
                            ha = G[Z.sizset];
                            break
                        }
                        if (Z.nodeType === 1) {
                            if (!F) {
                                Z.sizcache = C;
                                Z.sizset = A
                            }
                            if (typeof r !== "string") {
                                if (Z === r) {
                                    ha = true;
                                    break
                                }
                            } else if (z.filter(r, [Z])
                                .length > 0) {
                                ha = Z;
                                break
                            }
                        }
                        Z = Z[l]
                    }
                    G[A] = ha
                }
            }
        }
        var f = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
            h = 0,
            j = Object.prototype.toString,
            k = false,
            o = true,
            w = /\\/g,
            y = /\W/;
        [0, 0].sort(function () {
            o = false;
            return 0
        });
        var z = function (l, r, C, G) {
            C = C || [];
            var A = r = r || K;
            if (r.nodeType !== 1 && r.nodeType !==
                9) return [];
            if (!l || typeof l !== "string") return C;
            var F, U, Z, ha, ta, s = true,
                O = z.isXML(r),
                N = [],
                X = l;
            do {
                f.exec("");
                if (F = f.exec(X)) {
                    X = F[3];
                    N.push(F[1]);
                    if (F[2]) {
                        ha = F[3];
                        break
                    }
                }
            } while (F);
            if (N.length > 1 && fa.exec(l)) if (N.length === 2 && M.relative[N[0]]) U = xa(N[0] + N[1], r);
                else for (U = M.relative[N[0]] ? [r] : z(N.shift(), r); N.length;) {
                        l = N.shift();
                        if (M.relative[l]) l += N.shift();
                        U = xa(l, U)
                } else {
                    if (!G && N.length > 1 && r.nodeType === 9 && !O && M.match.ID.test(N[0]) && !M.match.ID.test(N[N.length - 1])) {
                        F = z.find(N.shift(), r, O);
                        r = F.expr ? z.filter(F.expr,
                            F.set)[0] : F.set[0]
                    }
                    if (r) {
                        F = G ? {
                            expr: N.pop(),
                            set: na(G)
                        } : z.find(N.pop(), N.length === 1 && (N[0] === "~" || N[0] === "+") && r.parentNode ? r.parentNode : r, O);
                        U = F.expr ? z.filter(F.expr, F.set) : F.set;
                        if (N.length > 0) Z = na(U);
                        else s = false;
                        for (; N.length;) {
                            F = ta = N.pop();
                            if (M.relative[ta]) F = N.pop();
                            else ta = ""; if (F == null) F = r;
                            M.relative[ta](Z, F, O)
                        }
                    } else Z = []
                }
            Z || (Z = U);
            Z || z.error(ta || l);
            if (j.call(Z) === "[object Array]") if (s) if (r && r.nodeType === 1) for (l = 0; Z[l] != null; l++) {
                            if (Z[l] && (Z[l] === true || Z[l].nodeType === 1 && z.contains(r, Z[l]))) C.push(U[l])
                    } else for (l =
                            0; Z[l] != null; l++) Z[l] && Z[l].nodeType === 1 && C.push(U[l]);
                    else C.push.apply(C, Z);
                    else na(Z, C);
            if (ha) {
                z(ha, A, C, G);
                z.uniqueSort(C)
            }
            return C
        };
        z.uniqueSort = function (l) {
            if (ra) {
                k = o;
                l.sort(ra);
                if (k) for (var r = 1; r < l.length; r++) l[r] === l[r - 1] && l.splice(r--, 1)
            }
            return l
        };
        z.matches = function (l, r) {
            return z(l, null, null, r)
        };
        z.matchesSelector = function (l, r) {
            return z(r, null, null, [l])
                .length > 0
        };
        z.find = function (l, r, C) {
            var G;
            if (!l) return [];
            for (var A = 0, F = M.order.length; A < F; A++) {
                var U, Z = M.order[A];
                if (U = M.leftMatch[Z].exec(l)) {
                    var ha =
                        U[1];
                    U.splice(1, 1);
                    if (ha.substr(ha.length - 1) !== "\\") {
                        U[1] = (U[1] || "")
                            .replace(w, "");
                        G = M.find[Z](U, r, C);
                        if (G != null) {
                            l = l.replace(M.match[Z], "");
                            break
                        }
                    }
                }
            }
            G || (G = typeof r.getElementsByTagName !== "undefined" ? r.getElementsByTagName("*") : []);
            return {
                set: G,
                expr: l
            }
        };
        z.filter = function (l, r, C, G) {
            for (var A, F, U = l, Z = [], ha = r, ta = r && r[0] && z.isXML(r[0]); l && r.length;) {
                for (var s in M.filter) if ((A = M.leftMatch[s].exec(l)) != null && A[2]) {
                        var O, N, X = M.filter[s];
                        N = A[1];
                        F = false;
                        A.splice(1, 1);
                        if (N.substr(N.length - 1) !== "\\") {
                            if (ha ===
                                Z) Z = [];
                            if (M.preFilter[s]) if (A = M.preFilter[s](A, ha, C, Z, G, ta)) {
                                    if (A === true) continue
                                } else F = O = true;
                            if (A) for (var ma = 0;
                                (N = ha[ma]) != null; ma++) if (N) {
                                        O = X(N, A, ma, ha);
                                        var ga = G ^ !! O;
                                        if (C && O != null) if (ga) F = true;
                                            else ha[ma] = false;
                                            else if (ga) {
                                            Z.push(N);
                                            F = true
                                        }
                                    }
                            if (O !== d) {
                                C || (ha = Z);
                                l = l.replace(M.match[s], "");
                                if (!F) return [];
                                break
                            }
                        }
                    }
                if (l === U) if (F == null) z.error(l);
                    else break;
                U = l
            }
            return ha
        };
        z.error = function (l) {
            throw "Syntax error, unrecognized expression: " + l;
        };
        var M = z.selectors = {
            order: ["ID", "NAME", "TAG"],
            match: {
                ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
            },
            leftMatch: {},
            attrMap: {
                "class": "className",
                "for": "htmlFor"
            },
            attrHandle: {
                href: function (l) {
                    return l.getAttribute("href")
                },
                type: function (l) {
                    return l.getAttribute("type")
                }
            },
            relative: {
                "+": function (l, r) {
                    var C = typeof r === "string",
                        G = C && !y.test(r);
                    C = C && !G;
                    if (G) r = r.toLowerCase();
                    G = 0;
                    for (var A = l.length, F; G < A; G++) if (F = l[G]) {
                            for (;
                            (F = F.previousSibling) && F.nodeType !== 1;);
                            l[G] = C || F && F.nodeName.toLowerCase() === r ? F || false : F === r
                        }
                    C && z.filter(r, l, true)
                },
                ">": function (l, r) {
                    var C, G = typeof r === "string",
                        A = 0,
                        F = l.length;
                    if (G && !y.test(r)) for (r = r.toLowerCase(); A < F; A++) {
                            if (C = l[A]) {
                                C = C.parentNode;
                                l[A] = C.nodeName.toLowerCase() === r ? C : false
                            }
                    } else {
                        for (; A < F; A++) if (C = l[A]) l[A] = G ? C.parentNode : C.parentNode === r;
                        G && z.filter(r, l, true)
                    }
                },
                "": function (l, r, C) {
                    var G, A = h++,
                        F = e;
                    if (typeof r === "string" && !y.test(r)) {
                        G = r = r.toLowerCase();
                        F = b
                    }
                    F("parentNode", r, A, l, G, C)
                },
                "~": function (l, r, C) {
                    var G, A = h++,
                        F = e;
                    if (typeof r === "string" && !y.test(r)) {
                        G = r = r.toLowerCase();
                        F = b
                    }
                    F("previousSibling", r, A, l, G, C)
                }
            },
            find: {
                ID: function (l, r, C) {
                    if (typeof r.getElementById !==
                        "undefined" && !C) return (l = r.getElementById(l[1])) && l.parentNode ? [l] : []
                },
                NAME: function (l, r) {
                    if (typeof r.getElementsByName !== "undefined") {
                        for (var C = [], G = r.getElementsByName(l[1]), A = 0, F = G.length; A < F; A++) G[A].getAttribute("name") === l[1] && C.push(G[A]);
                        return C.length === 0 ? null : C
                    }
                },
                TAG: function (l, r) {
                    if (typeof r.getElementsByTagName !== "undefined") return r.getElementsByTagName(l[1])
                }
            },
            preFilter: {
                CLASS: function (l, r, C, G, A, F) {
                    l = " " + l[1].replace(w, "") + " ";
                    if (F) return l;
                    F = 0;
                    for (var U;
                    (U = r[F]) != null; F++) if (U) if (A ^
                                (U.className && (" " + U.className + " ")
                                .replace(/[\t\n\r]/g, " ")
                                .indexOf(l) >= 0)) C || G.push(U);
                            else if (C) r[F] = false;
                    return false
                },
                ID: function (l) {
                    return l[1].replace(w, "")
                },
                TAG: function (l) {
                    return l[1].replace(w, "")
                        .toLowerCase()
                },
                CHILD: function (l) {
                    if (l[1] === "nth") {
                        l[2] || z.error(l[0]);
                        l[2] = l[2].replace(/^\+|\s*/g, "");
                        var r = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(l[2] === "even" && "2n" || l[2] === "odd" && "2n+1" || !/\D/.test(l[2]) && "0n+" + l[2] || l[2]);
                        l[2] = r[1] + (r[2] || 1) - 0;
                        l[3] = r[3] - 0
                    } else l[2] && z.error(l[0]);
                    l[0] = h++;
                    return l
                },
                ATTR: function (l, r, C, G, A, F) {
                    r = l[1] = l[1].replace(w, "");
                    if (!F && M.attrMap[r]) l[1] = M.attrMap[r];
                    l[4] = (l[4] || l[5] || "")
                        .replace(w, "");
                    if (l[2] === "~=") l[4] = " " + l[4] + " ";
                    return l
                },
                PSEUDO: function (l, r, C, G, A) {
                    if (l[1] === "not") if ((f.exec(l[3]) || "")
                            .length > 1 || /^\w/.test(l[3])) l[3] = z(l[3], null, null, r);
                        else {
                            l = z.filter(l[3], r, C, true ^ A);
                            C || G.push.apply(G, l);
                            return false
                        } else if (M.match.POS.test(l[0]) || M.match.CHILD.test(l[0])) return true;
                    return l
                },
                POS: function (l) {
                    l.unshift(true);
                    return l
                }
            },
            filters: {
                enabled: function (l) {
                    return l.disabled ===
                        false && l.type !== "hidden"
                },
                disabled: function (l) {
                    return l.disabled === true
                },
                checked: function (l) {
                    return l.checked === true
                },
                selected: function (l) {
                    return l.selected === true
                },
                parent: function (l) {
                    return !!l.firstChild
                },
                empty: function (l) {
                    return !l.firstChild
                },
                has: function (l, r, C) {
                    return !!z(C[3], l)
                        .length
                },
                header: function (l) {
                    return /h\d/i.test(l.nodeName)
                },
                text: function (l) {
                    var r = l.getAttribute("type"),
                        C = l.type;
                    return l.nodeName.toLowerCase() === "input" && "text" === C && (r === C || r === null)
                },
                radio: function (l) {
                    return l.nodeName.toLowerCase() ===
                        "input" && "radio" === l.type
                },
                checkbox: function (l) {
                    return l.nodeName.toLowerCase() === "input" && "checkbox" === l.type
                },
                file: function (l) {
                    return l.nodeName.toLowerCase() === "input" && "file" === l.type
                },
                password: function (l) {
                    return l.nodeName.toLowerCase() === "input" && "password" === l.type
                },
                submit: function (l) {
                    var r = l.nodeName.toLowerCase();
                    return (r === "input" || r === "button") && "submit" === l.type
                },
                image: function (l) {
                    return l.nodeName.toLowerCase() === "input" && "image" === l.type
                },
                reset: function (l) {
                    var r = l.nodeName.toLowerCase();
                    return (r === "input" || r === "button") && "reset" === l.type
                },
                button: function (l) {
                    var r = l.nodeName.toLowerCase();
                    return r === "input" && "button" === l.type || r === "button"
                },
                input: function (l) {
                    return /input|select|textarea|button/i.test(l.nodeName)
                },
                focus: function (l) {
                    return l === l.ownerDocument.activeElement
                }
            },
            setFilters: {
                first: function (l, r) {
                    return r === 0
                },
                last: function (l, r, C, G) {
                    return r === G.length - 1
                },
                even: function (l, r) {
                    return r % 2 === 0
                },
                odd: function (l, r) {
                    return r % 2 === 1
                },
                lt: function (l, r, C) {
                    return r < C[3] - 0
                },
                gt: function (l,
                    r, C) {
                    return r > C[3] - 0
                },
                nth: function (l, r, C) {
                    return C[3] - 0 === r
                },
                eq: function (l, r, C) {
                    return C[3] - 0 === r
                }
            },
            filter: {
                PSEUDO: function (l, r, C, G) {
                    var A = r[1],
                        F = M.filters[A];
                    if (F) return F(l, C, r, G);
                    else if (A === "contains") return (l.textContent || l.innerText || z.getText([l]) || "")
                            .indexOf(r[3]) >= 0;
                    else if (A === "not") {
                        r = r[3];
                        C = 0;
                        for (G = r.length; C < G; C++) if (r[C] === l) return false;
                        return true
                    } else z.error(A)
                },
                CHILD: function (l, r) {
                    var C = r[1],
                        G = l;
                    switch (C) {
                        case "only":
                        case "first":
                            for (; G = G.previousSibling;) if (G.nodeType === 1) return false;
                            if (C === "first") return true;
                            G = l;
                        case "last":
                            for (; G = G.nextSibling;) if (G.nodeType === 1) return false;
                            return true;
                        case "nth":
                            C = r[2];
                            var A = r[3];
                            if (C === 1 && A === 0) return true;
                            var F = r[0],
                                U = l.parentNode;
                            if (U && (U.sizcache !== F || !l.nodeIndex)) {
                                var Z = 0;
                                for (G = U.firstChild; G; G = G.nextSibling) if (G.nodeType === 1) G.nodeIndex = ++Z;
                                U.sizcache = F
                            }
                            G = l.nodeIndex - A;
                            return C === 0 ? G === 0 : G % C === 0 && G / C >= 0
                    }
                },
                ID: function (l, r) {
                    return l.nodeType === 1 && l.getAttribute("id") === r
                },
                TAG: function (l, r) {
                    return r === "*" && l.nodeType === 1 || l.nodeName.toLowerCase() ===
                        r
                },
                CLASS: function (l, r) {
                    return (" " + (l.className || l.getAttribute("class")) + " ")
                        .indexOf(r) > -1
                },
                ATTR: function (l, r) {
                    var C = r[1];
                    C = M.attrHandle[C] ? M.attrHandle[C](l) : l[C] != null ? l[C] : l.getAttribute(C);
                    var G = C + "",
                        A = r[2],
                        F = r[4];
                    return C == null ? A === "!=" : A === "=" ? G === F : A === "*=" ? G.indexOf(F) >= 0 : A === "~=" ? (" " + G + " ")
                        .indexOf(F) >= 0 : !F ? G && C !== false : A === "!=" ? G !== F : A === "^=" ? G.indexOf(F) === 0 : A === "$=" ? G.substr(G.length - F.length) === F : A === "|=" ? G === F || G.substr(0, F.length + 1) === F + "-" : false
                },
                POS: function (l, r, C, G) {
                    var A = M.setFilters[r[2]];
                    if (A) return A(l, C, r, G)
                }
            }
        }, fa = M.match.POS,
            la = function (l, r) {
                return "\\" + (r - 0 + 1)
            }, ka;
        for (ka in M.match) {
            M.match[ka] = RegExp(M.match[ka].source + /(?![^\[]*\])(?![^\(]*\))/.source);
            M.leftMatch[ka] = RegExp(/(^(?:.|\r|\n)*?)/.source + M.match[ka].source.replace(/\\(\d+)/g, la))
        }
        var na = function (l, r) {
            l = Array.prototype.slice.call(l, 0);
            if (r) {
                r.push.apply(r, l);
                return r
            }
            return l
        };
        try {
            Array.prototype.slice.call(K.documentElement.childNodes, 0)
        } catch (Aa) {
            na = function (l, r) {
                var C = 0,
                    G = r || [];
                if (j.call(l) === "[object Array]") Array.prototype.push.apply(G,
                        l);
                else if (typeof l.length === "number") for (var A = l.length; C < A; C++) G.push(l[C]);
                else for (; l[C]; C++) G.push(l[C]);
                return G
            }
        }
        var ra, sa;
        if (K.documentElement.compareDocumentPosition) ra = function (l, r) {
                if (l === r) {
                    k = true;
                    return 0
                }
                if (!l.compareDocumentPosition || !r.compareDocumentPosition) return l.compareDocumentPosition ? -1 : 1;
                return l.compareDocumentPosition(r) & 4 ? -1 : 1
        };
        else {
            ra = function (l, r) {
                if (l === r) {
                    k = true;
                    return 0
                } else if (l.sourceIndex && r.sourceIndex) return l.sourceIndex - r.sourceIndex;
                var C, G, A = [],
                    F = [];
                C = l.parentNode;
                G = r.parentNode;
                var U = C;
                if (C === G) return sa(l, r);
                else if (C) {
                    if (!G) return 1
                } else return -1;
                for (; U;) {
                    A.unshift(U);
                    U = U.parentNode
                }
                for (U = G; U;) {
                    F.unshift(U);
                    U = U.parentNode
                }
                C = A.length;
                G = F.length;
                for (U = 0; U < C && U < G; U++) if (A[U] !== F[U]) return sa(A[U], F[U]);
                return U === C ? sa(l, F[U], -1) : sa(A[U], r, 1)
            };
            sa = function (l, r, C) {
                if (l === r) return C;
                for (l = l.nextSibling; l;) {
                    if (l === r) return -1;
                    l = l.nextSibling
                }
                return 1
            }
        }
        z.getText = function (l) {
            for (var r = "", C, G = 0; l[G]; G++) {
                C = l[G];
                if (C.nodeType === 3 || C.nodeType === 4) r += C.nodeValue;
                else if (C.nodeType !==
                    8) r += z.getText(C.childNodes)
            }
            return r
        };
        (function () {
            var l = K.createElement("div"),
                r = "script" + (new Date)
                    .getTime(),
                C = K.documentElement;
            l.innerHTML = "<a name='" + r + "'/>";
            C.insertBefore(l, C.firstChild);
            if (K.getElementById(r)) {
                M.find.ID = function (G, A, F) {
                    if (typeof A.getElementById !== "undefined" && !F) return (A = A.getElementById(G[1])) ? A.id === G[1] || typeof A.getAttributeNode !== "undefined" && A.getAttributeNode("id")
                            .nodeValue === G[1] ? [A] : d : []
                };
                M.filter.ID = function (G, A) {
                    var F = typeof G.getAttributeNode !== "undefined" &&
                        G.getAttributeNode("id");
                    return G.nodeType === 1 && F && F.nodeValue === A
                }
            }
            C.removeChild(l);
            C = l = null
        })();
        (function () {
            var l = K.createElement("div");
            l.appendChild(K.createComment(""));
            if (l.getElementsByTagName("*")
                .length > 0) M.find.TAG = function (r, C) {
                    var G = C.getElementsByTagName(r[1]);
                    if (r[1] === "*") {
                        for (var A = [], F = 0; G[F]; F++) G[F].nodeType === 1 && A.push(G[F]);
                        G = A
                    }
                    return G
            };
            l.innerHTML = "<a href='#'></a>";
            if (l.firstChild && typeof l.firstChild.getAttribute !== "undefined" && l.firstChild.getAttribute("href") !== "#") M.attrHandle.href = function (r) {
                    return r.getAttribute("href", 2)
            };
            l = null
        })();
        K.querySelectorAll && function () {
            var l = z,
                r = K.createElement("div");
            r.innerHTML = "<p class='TEST'></p>";
            if (!(r.querySelectorAll && r.querySelectorAll(".TEST")
                .length === 0)) {
                z = function (G, A, F, U) {
                    A = A || K;
                    if (!U && !z.isXML(A)) {
                        var Z = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(G);
                        if (Z && (A.nodeType === 1 || A.nodeType === 9)) if (Z[1]) return na(A.getElementsByTagName(G), F);
                            else if (Z[2] && M.find.CLASS && A.getElementsByClassName) return na(A.getElementsByClassName(Z[2]), F);
                        if (A.nodeType === 9) {
                            if (G === "body" && A.body) return na([A.body], F);
                            else if (Z && Z[3]) {
                                var ha = A.getElementById(Z[3]);
                                if (ha && ha.parentNode) {
                                    if (ha.id === Z[3]) return na([ha], F)
                                } else return na([], F)
                            }
                            try {
                                return na(A.querySelectorAll(G), F)
                            } catch (ta) {}
                        } else if (A.nodeType === 1 && A.nodeName.toLowerCase() !== "object") {
                            Z = A;
                            var s = (ha = A.getAttribute("id")) || "__sizzle__",
                                O = A.parentNode,
                                N = /^\s*[+~]/.test(G);
                            if (ha) s = s.replace(/'/g, "\\$&");
                            else A.setAttribute("id", s); if (N && O) A = A.parentNode;
                            try {
                                if (!N || O) return na(A.querySelectorAll("[id='" +
                                        s + "'] " + G), F)
                            } catch (X) {} finally {
                                ha || Z.removeAttribute("id")
                            }
                        }
                    }
                    return l(G, A, F, U)
                };
                for (var C in l) z[C] = l[C];
                r = null
            }
        }();
        (function () {
            var l = K.documentElement,
                r = l.matchesSelector || l.mozMatchesSelector || l.webkitMatchesSelector || l.msMatchesSelector;
            if (r) {
                var C = !r.call(K.createElement("div"), "div"),
                    G = false;
                try {
                    r.call(K.documentElement, "[test!='']:sizzle")
                } catch (A) {
                    G = true
                }
                z.matchesSelector = function (F, U) {
                    U = U.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
                    if (!z.isXML(F)) try {
                            if (G || !M.match.PSEUDO.test(U) && !/!=/.test(U)) {
                                var Z =
                                    r.call(F, U);
                                if (Z || !C || F.document && F.document.nodeType !== 11) return Z
                            }
                    } catch (ha) {}
                    return z(U, null, null, [F])
                        .length > 0
                }
            }
        })();
        (function () {
            var l = K.createElement("div");
            l.innerHTML = "<div class='test e'></div><div class='test'></div>";
            if (!(!l.getElementsByClassName || l.getElementsByClassName("e")
                .length === 0)) {
                l.lastChild.className = "e";
                if (l.getElementsByClassName("e")
                    .length !== 1) {
                    M.order.splice(1, 0, "CLASS");
                    M.find.CLASS = function (r, C, G) {
                        if (typeof C.getElementsByClassName !== "undefined" && !G) return C.getElementsByClassName(r[1])
                    };
                    l = null
                }
            }
        })();
        z.contains = K.documentElement.contains ? function (l, r) {
            return l !== r && (l.contains ? l.contains(r) : true)
        } : K.documentElement.compareDocumentPosition ? function (l, r) {
            return !!(l.compareDocumentPosition(r) & 16)
        } : function () {
            return false
        };
        z.isXML = function (l) {
            return (l = (l ? l.ownerDocument || l : 0)
                .documentElement) ? l.nodeName !== "HTML" : false
        };
        var xa = function (l, r) {
            for (var C, G = [], A = "", F = r.nodeType ? [r] : r; C = M.match.PSEUDO.exec(l);) {
                A += C[0];
                l = l.replace(M.match.PSEUDO, "")
            }
            l = M.relative[l] ? l + "*" : l;
            C = 0;
            for (var U = F.length; C <
                U; C++) z(l, F[C], G);
            return z.filter(A, G)
        };
        c.find = z;
        c.expr = z.selectors;
        c.expr[":"] = c.expr.filters;
        c.unique = z.uniqueSort;
        c.text = z.getText;
        c.isXMLDoc = z.isXML;
        c.contains = z.contains
    })();
    var Lb = /Until$/,
        Mb = /^(?:parents|prevUntil|prevAll)/,
        Nb = /,/,
        Bb = /^.[^:#\[\.,]*$/,
        Ob = Array.prototype.slice,
        lb = c.expr.match.POS,
        Pb = {
            children: true,
            contents: true,
            next: true,
            prev: true
        };
    c.fn.extend({
        find: function (b) {
            var e = this,
                f, h;
            if (typeof b !== "string") return c(b)
                    .filter(function () {
                    f = 0;
                    for (h = e.length; f < h; f++) if (c.contains(e[f], this)) return true
                });
            var j = this.pushStack("", "find", b),
                k, o, w;
            f = 0;
            for (h = this.length; f < h; f++) {
                k = j.length;
                c.find(b, this[f], j);
                if (f > 0) for (o = k; o < j.length; o++) for (w = 0; w < k; w++) if (j[w] === j[o]) {
                                j.splice(o--, 1);
                                break
                            }
            }
            return j
        },
        has: function (b) {
            var e = c(b);
            return this.filter(function () {
                for (var f = 0, h = e.length; f < h; f++) if (c.contains(this, e[f])) return true
            })
        },
        not: function (b) {
            return this.pushStack(I(this, b, false), "not", b)
        },
        filter: function (b) {
            return this.pushStack(I(this, b, true), "filter", b)
        },
        is: function (b) {
            return !!b && (typeof b === "string" ?
                c.filter(b, this)
                .length > 0 : this.filter(b)
                .length > 0)
        },
        closest: function (b, e) {
            var f = [],
                h, j, k = this[0];
            if (c.isArray(b)) {
                var o, w = {}, y = 1;
                if (k && b.length) {
                    h = 0;
                    for (j = b.length; h < j; h++) {
                        o = b[h];
                        w[o] || (w[o] = lb.test(o) ? c(o, e || this.context) : o)
                    }
                    for (; k && k.ownerDocument && k !== e;) {
                        for (o in w) {
                            h = w[o];
                            if (h.jquery ? h.index(k) > -1 : c(k)
                                .is(h)) f.push({
                                    selector: o,
                                    elem: k,
                                    level: y
                                })
                        }
                        k = k.parentNode;
                        y++
                    }
                }
                return f
            }
            o = lb.test(b) || typeof b !== "string" ? c(b, e || this.context) : 0;
            h = 0;
            for (j = this.length; h < j; h++) for (k = this[h]; k;) if (o ? o.index(k) > -1 : c.find.matchesSelector(k, b)) {
                        f.push(k);
                        break
                    } else {
                        k = k.parentNode;
                        if (!k || !k.ownerDocument || k === e || k.nodeType === 11) break
                    }
            f = f.length > 1 ? c.unique(f) : f;
            return this.pushStack(f, "closest", b)
        },
        index: function (b) {
            if (!b || typeof b === "string") return c.inArray(this[0], b ? c(b) : this.parent()
                    .children());
            return c.inArray(b.jquery ? b[0] : b, this)
        },
        add: function (b, e) {
            var f = typeof b === "string" ? c(b, e) : c.makeArray(b && b.nodeType ? [b] : b),
                h = c.merge(this.get(), f);
            return this.pushStack(!f[0] || !f[0].parentNode || f[0].parentNode.nodeType ===
                11 || !h[0] || !h[0].parentNode || h[0].parentNode.nodeType === 11 ? h : c.unique(h))
        },
        andSelf: function () {
            return this.add(this.prevObject)
        }
    });
    c.each({
        parent: function (b) {
            return (b = b.parentNode) && b.nodeType !== 11 ? b : null
        },
        parents: function (b) {
            return c.dir(b, "parentNode")
        },
        parentsUntil: function (b, e, f) {
            return c.dir(b, "parentNode", f)
        },
        next: function (b) {
            return c.nth(b, 2, "nextSibling")
        },
        prev: function (b) {
            return c.nth(b, 2, "previousSibling")
        },
        nextAll: function (b) {
            return c.dir(b, "nextSibling")
        },
        prevAll: function (b) {
            return c.dir(b,
                "previousSibling")
        },
        nextUntil: function (b, e, f) {
            return c.dir(b, "nextSibling", f)
        },
        prevUntil: function (b, e, f) {
            return c.dir(b, "previousSibling", f)
        },
        siblings: function (b) {
            return c.sibling(b.parentNode.firstChild, b)
        },
        children: function (b) {
            return c.sibling(b.firstChild)
        },
        contents: function (b) {
            return c.nodeName(b, "iframe") ? b.contentDocument || b.contentWindow.document : c.makeArray(b.childNodes)
        }
    }, function (b, e) {
        c.fn[b] = function (f, h) {
            var j = c.map(this, e, f),
                k = Ob.call(arguments);
            Lb.test(b) || (h = f);
            if (h && typeof h === "string") j =
                    c.filter(h, j);
            j = this.length > 1 && !Pb[b] ? c.unique(j) : j;
            if ((this.length > 1 || Nb.test(h)) && Mb.test(b)) j = j.reverse();
            return this.pushStack(j, b, k.join(","))
        }
    });
    c.extend({
        filter: function (b, e, f) {
            if (f) b = ":not(" + b + ")";
            return e.length === 1 ? c.find.matchesSelector(e[0], b) ? [e[0]] : [] : c.find.matches(b, e)
        },
        dir: function (b, e, f) {
            var h = [];
            for (b = b[e]; b && b.nodeType !== 9 && (f === d || b.nodeType !== 1 || !c(b)
                .is(f));) {
                b.nodeType === 1 && h.push(b);
                b = b[e]
            }
            return h
        },
        nth: function (b, e, f) {
            e = e || 1;
            for (var h = 0; b; b = b[f]) if (b.nodeType === 1 && ++h ===
                    e) break;
            return b
        },
        sibling: function (b, e) {
            for (var f = []; b; b = b.nextSibling) b.nodeType === 1 && b !== e && f.push(b);
            return f
        }
    });
    var Qb = / jQuery\d+="(?:\d+|null)"/g,
        $a = /^\s+/,
        mb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
        nb = /<([\w:]+)/,
        Rb = /<tbody/i,
        Sb = /<|&#?\w+;/,
        ob = /<(?:script|object|embed|option|style)/i,
        pb = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Tb = /\/(java|ecma)script/i,
        Cb = /^\s*<!(?:\[CDATA\[|\-\-)/,
        ua = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>",
                    "</fieldset>"
            ],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        };
    ua.optgroup = ua.option;
    ua.tbody = ua.tfoot = ua.colgroup = ua.caption = ua.thead;
    ua.th = ua.td;
    if (!c.support.htmlSerialize) ua._default = [1, "div<div>", "</div>"];
    c.fn.extend({
        text: function (b) {
            if (c.isFunction(b)) return this.each(function (e) {
                    var f = c(this);
                    f.text(b.call(this,
                        e, f.text()))
                });
            if (typeof b !== "object" && b !== d) return this.empty()
                    .append((this[0] && this[0].ownerDocument || K)
                    .createTextNode(b));
            return c.text(this)
        },
        wrapAll: function (b) {
            if (c.isFunction(b)) return this.each(function (f) {
                    c(this)
                        .wrapAll(b.call(this, f))
                });
            if (this[0]) {
                var e = c(b, this[0].ownerDocument)
                    .eq(0)
                    .clone(true);
                this[0].parentNode && e.insertBefore(this[0]);
                e.map(function () {
                    for (var f = this; f.firstChild && f.firstChild.nodeType === 1;) f = f.firstChild;
                    return f
                })
                    .append(this)
            }
            return this
        },
        wrapInner: function (b) {
            if (c.isFunction(b)) return this.each(function (e) {
                    c(this)
                        .wrapInner(b.call(this,
                        e))
                });
            return this.each(function () {
                var e = c(this),
                    f = e.contents();
                f.length ? f.wrapAll(b) : e.append(b)
            })
        },
        wrap: function (b) {
            return this.each(function () {
                c(this)
                    .wrapAll(b)
            })
        },
        unwrap: function () {
            return this.parent()
                .each(function () {
                c.nodeName(this, "body") || c(this)
                    .replaceWith(this.childNodes)
            })
                .end()
        },
        append: function () {
            return this.domManip(arguments, true, function (b) {
                this.nodeType === 1 && this.appendChild(b)
            })
        },
        prepend: function () {
            return this.domManip(arguments, true, function (b) {
                this.nodeType === 1 && this.insertBefore(b,
                    this.firstChild)
            })
        },
        before: function () {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, false, function (e) {
                    this.parentNode.insertBefore(e, this)
                });
            else if (arguments.length) {
                var b = c(arguments[0]);
                b.push.apply(b, this.toArray());
                return this.pushStack(b, "before", arguments)
            }
        },
        after: function () {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, false, function (e) {
                    this.parentNode.insertBefore(e, this.nextSibling)
                });
            else if (arguments.length) {
                var b = this.pushStack(this, "after", arguments);
                b.push.apply(b, c(arguments[0])
                    .toArray());
                return b
            }
        },
        remove: function (b, e) {
            for (var f = 0, h;
            (h = this[f]) != null; f++) if (!b || c.filter(b, [h])
                    .length) {
                    if (!e && h.nodeType === 1) {
                        c.cleanData(h.getElementsByTagName("*"));
                        c.cleanData([h])
                    }
                    h.parentNode && h.parentNode.removeChild(h)
                }
            return this
        },
        empty: function () {
            for (var b = 0, e;
            (e = this[b]) != null; b++) for (e.nodeType === 1 && c.cleanData(e.getElementsByTagName("*")); e.firstChild;) e.removeChild(e.firstChild);
            return this
        },
        clone: function (b, e) {
            b = b == null ? false : b;
            e = e == null ? b : e;
            return this.map(function () {
                return c.clone(this,
                    b, e)
            })
        },
        html: function (b) {
            if (b === d) return this[0] && this[0].nodeType === 1 ? this[0].innerHTML.replace(Qb, "") : null;
            else if (typeof b === "string" && !ob.test(b) && (c.support.leadingWhitespace || !$a.test(b)) && !ua[(nb.exec(b) || ["", ""])[1].toLowerCase()]) {
                b = b.replace(mb, "<$1></$2>");
                try {
                    for (var e = 0, f = this.length; e < f; e++) if (this[e].nodeType === 1) {
                            c.cleanData(this[e].getElementsByTagName("*"));
                            this[e].innerHTML = b
                        }
                } catch (h) {
                    this.empty()
                        .append(b)
                }
            } else c.isFunction(b) ? this.each(function (j) {
                    var k = c(this);
                    k.html(b.call(this,
                        j, k.html()))
                }) : this.empty()
                    .append(b);
            return this
        },
        replaceWith: function (b) {
            if (this[0] && this[0].parentNode) {
                if (c.isFunction(b)) return this.each(function (e) {
                        var f = c(this),
                            h = f.html();
                        f.replaceWith(b.call(this, e, h))
                    });
                if (typeof b !== "string") b = c(b)
                        .detach();
                return this.each(function () {
                    var e = this.nextSibling,
                        f = this.parentNode;
                    c(this)
                        .remove();
                    e ? c(e)
                        .before(b) : c(f)
                        .append(b)
                })
            } else return this.length ? this.pushStack(c(c.isFunction(b) ? b() : b), "replaceWith", b) : this
        },
        detach: function (b) {
            return this.remove(b, true)
        },
        domManip: function (b, e, f) {
            var h, j, k, o = b[0],
                w = [];
            if (!c.support.checkClone && arguments.length === 3 && typeof o === "string" && pb.test(o)) return this.each(function () {
                    c(this)
                        .domManip(b, e, f, true)
                });
            if (c.isFunction(o)) return this.each(function (M) {
                    var fa = c(this);
                    b[0] = o.call(this, M, e ? fa.html() : d);
                    fa.domManip(b, e, f)
                });
            if (this[0]) {
                h = o && o.parentNode;
                h = c.support.parentNode && h && h.nodeType === 11 && h.childNodes.length === this.length ? {
                    fragment: h
                } : c.buildFragment(b, this, w);
                k = h.fragment;
                if (j = k.childNodes.length === 1 ? k = k.firstChild :
                    k.firstChild) {
                    e = e && c.nodeName(j, "tr");
                    j = 0;
                    for (var y = this.length, z = y - 1; j < y; j++) f.call(e ? c.nodeName(this[j], "table") ? this[j].getElementsByTagName("tbody")[0] || this[j].appendChild(this[j].ownerDocument.createElement("tbody")) : this[j] : this[j], h.cacheable || y > 1 && j < z ? c.clone(k, true, true) : k)
                }
                w.length && c.each(w, V)
            }
            return this
        }
    });
    c.buildFragment = function (b, e, f) {
        var h, j, k;
        e = e && e[0] ? e[0].ownerDocument || e[0] : K;
        if (b.length === 1 && typeof b[0] === "string" && b[0].length < 512 && e === K && b[0].charAt(0) === "<" && !ob.test(b[0]) &&
            (c.support.checkClone || !pb.test(b[0]))) {
            j = true;
            if ((k = c.fragments[b[0]]) && k !== 1) h = k
        }
        if (!h) {
            h = e.createDocumentFragment();
            c.clean(b, e, h, f)
        }
        if (j) c.fragments[b[0]] = k ? h : 1;
        return {
            fragment: h,
            cacheable: j
        }
    };
    c.fragments = {};
    c.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (b, e) {
        c.fn[b] = function (f) {
            var h = [];
            f = c(f);
            var j = this.length === 1 && this[0].parentNode;
            if (j && j.nodeType === 11 && j.childNodes.length === 1 && f.length === 1) {
                f[e](this[0]);
                return this
            } else {
                j =
                    0;
                for (var k = f.length; j < k; j++) {
                    var o = (j > 0 ? this.clone(true) : this)
                        .get();
                    c(f[j])[e](o);
                    h = h.concat(o)
                }
                return this.pushStack(h, b, f.selector)
            }
        }
    });
    c.extend({
        clone: function (b, e, f) {
            var h = b.cloneNode(true),
                j, k, o;
            if ((!c.support.noCloneEvent || !c.support.noCloneChecked) && (b.nodeType === 1 || b.nodeType === 11) && !c.isXMLDoc(b)) {
                S(b, h);
                j = W(b);
                k = W(h);
                for (o = 0; j[o]; ++o) S(j[o], k[o])
            }
            if (e) {
                R(b, h);
                if (f) {
                    j = W(b);
                    k = W(h);
                    for (o = 0; j[o]; ++o) R(j[o], k[o])
                }
            }
            return h
        },
        clean: function (b, e, f, h) {
            e = e || K;
            if (typeof e.createElement === "undefined") e =
                    e.ownerDocument || e[0] && e[0].ownerDocument || K;
            for (var j = [], k, o = 0, w;
            (w = b[o]) != null; o++) {
                if (typeof w === "number") w += "";
                if (w) {
                    if (typeof w === "string") if (Sb.test(w)) {
                            w = w.replace(mb, "<$1></$2>");
                            k = (nb.exec(w) || ["", ""])[1].toLowerCase();
                            var y = ua[k] || ua._default,
                                z = y[0],
                                M = e.createElement("div");
                            for (M.innerHTML = y[1] + w + y[2]; z--;) M = M.lastChild;
                            if (!c.support.tbody) {
                                z = Rb.test(w);
                                y = k === "table" && !z ? M.firstChild && M.firstChild.childNodes : y[1] === "<table>" && !z ? M.childNodes : [];
                                for (k = y.length - 1; k >= 0; --k) c.nodeName(y[k],
                                        "tbody") && !y[k].childNodes.length && y[k].parentNode.removeChild(y[k])
                            }!c.support.leadingWhitespace && $a.test(w) && M.insertBefore(e.createTextNode($a.exec(w)[0]), M.firstChild);
                            w = M.childNodes
                        } else w = e.createTextNode(w);
                    var fa;
                    if (!c.support.appendChecked) if (w[0] && typeof (fa = w.length) === "number") for (k = 0; k < fa; k++) T(w[k]);
                        else T(w);
                    if (w.nodeType) j.push(w);
                    else j = c.merge(j, w)
                }
            }
            if (f) {
                b = function (la) {
                    return !la.type || Tb.test(la.type)
                };
                for (o = 0; j[o]; o++) if (h && c.nodeName(j[o], "script") && (!j[o].type || j[o].type.toLowerCase() ===
                        "text/javascript")) h.push(j[o].parentNode ? j[o].parentNode.removeChild(j[o]) : j[o]);
                    else {
                        if (j[o].nodeType === 1) {
                            e = c.grep(j[o].getElementsByTagName("script"), b);
                            j.splice.apply(j, [o + 1, 0].concat(e))
                        }
                        f.appendChild(j[o])
                    }
            }
            return j
        },
        cleanData: function (b) {
            for (var e, f, h = c.cache, j = c.expando, k = c.event.special, o = c.support.deleteExpando, w = 0, y;
            (y = b[w]) != null; w++) if (!(y.nodeName && c.noData[y.nodeName.toLowerCase()])) if (f = y[c.expando]) {
                        if ((e = h[f] && h[f][j]) && e.events) {
                            for (var z in e.events) k[z] ? c.event.remove(y, z) : c.removeEvent(y,
                                    z, e.handle);
                            if (e.handle) e.handle.elem = null
                        }
                        if (o) delete y[c.expando];
                        else y.removeAttribute && y.removeAttribute(c.expando);
                        delete h[f]
                    }
        }
    });
    var qb = /alpha\([^)]*\)/i,
        Ub = /opacity=([^)]*)/,
        Vb = /-([a-z])/ig,
        Wb = /([A-Z]|^ms)/g,
        rb = /^-?\d+(?:px)?$/i,
        Xb = /^-?\d/,
        Yb = /^[+\-]=/,
        Zb = /[^+\-\.\de]+/g,
        $b = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, Db = ["Left", "Right"],
        Eb = ["Top", "Bottom"],
        Ha, sb, Ra, ac = function (b, e) {
            return e.toUpperCase()
        };
    c.fn.css = function (b, e) {
        if (arguments.length === 2 && e === d) return this;
        return c.access(this,
            b, e, true, function (f, h, j) {
            return j !== d ? c.style(f, h, j) : c.css(f, h)
        })
    };
    c.extend({
        cssHooks: {
            opacity: {
                get: function (b, e) {
                    if (e) {
                        var f = Ha(b, "opacity", "opacity");
                        return f === "" ? "1" : f
                    } else return b.style.opacity
                }
            }
        },
        cssNumber: {
            zIndex: true,
            fontWeight: true,
            opacity: true,
            zoom: true,
            lineHeight: true,
            widows: true,
            orphans: true
        },
        cssProps: {
            "float": c.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (b, e, f, h) {
            if (!(!b || b.nodeType === 3 || b.nodeType === 8 || !b.style)) {
                var j, k = c.camelCase(e),
                    o = b.style,
                    w = c.cssHooks[k];
                e = c.cssProps[k] ||
                    k;
                if (f !== d) {
                    h = typeof f;
                    if (!(h === "number" && isNaN(f) || f == null)) {
                        if (h === "string" && Yb.test(f)) f = +f.replace(Zb, "") + parseFloat(c.css(b, e));
                        if (h === "number" && !c.cssNumber[k]) f += "px";
                        if (!w || !("set" in w) || (f = w.set(b, f)) !== d) try {
                                o[e] = f
                        } catch (y) {}
                    }
                } else {
                    if (w && "get" in w && (j = w.get(b, false, h)) !== d) return j;
                    return o[e]
                }
            }
        },
        css: function (b, e, f) {
            var h, j;
            e = c.camelCase(e);
            j = c.cssHooks[e];
            e = c.cssProps[e] || e;
            if (e === "cssFloat") e = "float";
            if (j && "get" in j && (h = j.get(b, true, f)) !== d) return h;
            else if (Ha) return Ha(b, e)
        },
        swap: function (b,
            e, f) {
            var h = {}, j;
            for (j in e) {
                h[j] = b.style[j];
                b.style[j] = e[j]
            }
            f.call(b);
            for (j in e) b.style[j] = h[j]
        },
        camelCase: function (b) {
            return b.replace(Vb, ac)
        }
    });
    c.curCSS = c.css;
    c.each(["height", "width"], function (b, e) {
        c.cssHooks[e] = {
            get: function (f, h, j) {
                var k;
                if (h) {
                    if (f.offsetWidth !== 0) k = ba(f, e, j);
                    else c.swap(f, $b, function () {
                            k = ba(f, e, j)
                        }); if (k <= 0) {
                        k = Ha(f, e, e);
                        if (k === "0px" && Ra) k = Ra(f, e, e);
                        if (k != null) return k === "" || k === "auto" ? "0px" : k
                    }
                    if (k < 0 || k == null) {
                        k = f.style[e];
                        return k === "" || k === "auto" ? "0px" : k
                    }
                    return typeof k ===
                        "string" ? k : k + "px"
                }
            },
            set: function (f, h) {
                if (rb.test(h)) {
                    h = parseFloat(h);
                    if (h >= 0) return h + "px"
                } else return h
            }
        }
    });
    if (!c.support.opacity) c.cssHooks.opacity = {
            get: function (b, e) {
                return Ub.test((e && b.currentStyle ? b.currentStyle.filter : b.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : e ? "1" : ""
            },
            set: function (b, e) {
                var f = b.style,
                    h = b.currentStyle;
                f.zoom = 1;
                var j = c.isNaN(e) ? "" : "alpha(opacity=" + e * 100 + ")";
                h = h && h.filter || f.filter || "";
                f.filter = qb.test(h) ? h.replace(qb, j) : h + " " + j
            }
    };
    c(function () {
        if (!c.support.reliableMarginRight) c.cssHooks.marginRight = {
                get: function (b, e) {
                    var f;
                    c.swap(b, {
                        display: "inline-block"
                    }, function () {
                        f = e ? Ha(b, "margin-right", "marginRight") : b.style.marginRight
                    });
                    return f
                }
        }
    });
    if (K.defaultView && K.defaultView.getComputedStyle) sb = function (b, e) {
            var f, h;
            e = e.replace(Wb, "-$1")
                .toLowerCase();
            if (!(h = b.ownerDocument.defaultView)) return d;
            if (h = h.getComputedStyle(b, null)) {
                f = h.getPropertyValue(e);
                if (f === "" && !c.contains(b.ownerDocument.documentElement, b)) f = c.style(b, e)
            }
            return f
    };
    if (K.documentElement.currentStyle) Ra = function (b, e) {
            var f, h = b.currentStyle &&
                    b.currentStyle[e],
                j = b.runtimeStyle && b.runtimeStyle[e],
                k = b.style;
            if (!rb.test(h) && Xb.test(h)) {
                f = k.left;
                if (j) b.runtimeStyle.left = b.currentStyle.left;
                k.left = e === "fontSize" ? "1em" : h || 0;
                h = k.pixelLeft + "px";
                k.left = f;
                if (j) b.runtimeStyle.left = j
            }
            return h === "" ? "auto" : h
    };
    Ha = sb || Ra;
    if (c.expr && c.expr.filters) {
        c.expr.filters.hidden = function (b) {
            var e = b.offsetHeight;
            return b.offsetWidth === 0 && e === 0 || !c.support.reliableHiddenOffsets && (b.style.display || c.css(b, "display")) === "none"
        };
        c.expr.filters.visible = function (b) {
            return !c.expr.filters.hidden(b)
        }
    }
    var bc =
        /%20/g,
        Fb = /\[\]$/,
        tb = /\r?\n/g,
        cc = /#.*$/,
        dc = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        ec = /^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        fc = /^(?:GET|HEAD)$/,
        gc = /^\/\//,
        ub = /\?/,
        hc = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        ic = /^(?:select|textarea)/i,
        eb = /\s+/,
        jc = /([?&])_=[^&]*/,
        vb = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
        wb = c.fn.load,
        Wa = {}, xb = {}, Da, Ea;
    try {
        Da = pa.href
    } catch (rc) {
        Da = K.createElement("a");
        Da.href = "";
        Da = Da.href
    }
    Ea = vb.exec(Da.toLowerCase()) || [];
    c.fn.extend({
        load: function (b, e, f) {
            if (typeof b !== "string" && wb) return wb.apply(this, arguments);
            else if (!this.length) return this;
            var h = b.indexOf(" ");
            if (h >= 0) {
                var j = b.slice(h, b.length);
                b = b.slice(0, h)
            }
            h = "GET";
            if (e) if (c.isFunction(e)) {
                    f = e;
                    e = d
                } else if (typeof e === "object") {
                e = c.param(e, c.ajaxSettings.traditional);
                h = "POST"
            }
            var k = this;
            c.ajax({
                url: b,
                type: h,
                dataType: "html",
                data: e,
                complete: function (o, w, y) {
                    y = o.responseText;
                    if (o.isResolved()) {
                        o.done(function (z) {
                            y = z
                        });
                        k.html(j ? c("<div>")
                            .append(y.replace(hc, ""))
                            .find(j) :
                            y)
                    }
                    f && k.each(f, [y, w, o])
                }
            });
            return this
        },
        serialize: function () {
            return c.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                return this.elements ? c.makeArray(this.elements) : this
            })
                .filter(function () {
                return this.name && !this.disabled && (this.checked || ic.test(this.nodeName) || ec.test(this.type))
            })
                .map(function (b, e) {
                var f = c(this)
                    .val();
                return f == null ? null : c.isArray(f) ? c.map(f, function (h) {
                    return {
                        name: e.name,
                        value: h.replace(tb, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: f.replace(tb, "\r\n")
                }
            })
                .get()
        }
    });
    c.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (b, e) {
        c.fn[e] = function (f) {
            return this.bind(e, f)
        }
    });
    c.each(["get", "post"], function (b, e) {
        c[e] = function (f, h, j, k) {
            if (c.isFunction(h)) {
                k = k || j;
                j = h;
                h = d
            }
            return c.ajax({
                type: e,
                url: f,
                data: h,
                success: j,
                dataType: k
            })
        }
    });
    c.extend({
        getScript: function (b, e) {
            return c.get(b, d, e, "script")
        },
        getJSON: function (b, e, f) {
            return c.get(b, e, f, "json")
        },
        ajaxSetup: function (b, e) {
            if (e) c.extend(true, b, c.ajaxSettings, e);
            else {
                e = b;
                b = c.extend(true,
                    c.ajaxSettings, e)
            }
            for (var f in {
                context: 1,
                url: 1
            }) if (f in e) b[f] = e[f];
                else if (f in c.ajaxSettings) b[f] = c.ajaxSettings[f];
            return b
        },
        ajaxSettings: {
            url: Da,
            isLocal: /^(?:about|app|app\-storage|.+\-extension|file|widget):$/.test(Ea[1]),
            global: true,
            type: "GET",
            contentType: "application/x-www-form-urlencoded",
            processData: true,
            async: true,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": "*/*"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": a.String,
                "text html": true,
                "text json": c.parseJSON,
                "text xml": c.parseXML
            }
        },
        ajaxPrefilter: qa(Wa),
        ajaxTransport: qa(xb),
        ajax: function (b, e) {
            function f(A, F, U, Z) {
                if (sa !== 2) {
                    sa = 2;
                    Aa && clearTimeout(Aa);
                    na = d;
                    la = Z || "";
                    r.readyState = A ? 4 : 0;
                    var ha, ta, s;
                    if (U) {
                        Z = h;
                        var O = r,
                            N = Z.contents,
                            X = Z.dataTypes,
                            ma = Z.responseFields,
                            ga, ja, oa, Ba;
                        for (ja in ma) if (ja in U) O[ma[ja]] = U[ja];
                        for (; X[0] === "*";) {
                            X.shift();
                            if (ga === d) ga = Z.mimeType || O.getResponseHeader("content-type")
                        }
                        if (ga) for (ja in N) if (N[ja] &&
                                    N[ja].test(ga)) {
                                    X.unshift(ja);
                                    break
                                }
                        if (X[0] in U) oa = X[0];
                        else {
                            for (ja in U) {
                                if (!X[0] || Z.converters[ja + " " + X[0]]) {
                                    oa = ja;
                                    break
                                }
                                Ba || (Ba = ja)
                            }
                            oa = oa || Ba
                        } if (oa) {
                            oa !== X[0] && X.unshift(oa);
                            U = U[oa]
                        } else U = void 0
                    } else U = d; if (A >= 200 && A < 300 || A === 304) {
                        if (h.ifModified) {
                            if (ga = r.getResponseHeader("Last-Modified")) c.lastModified[z] = ga;
                            if (ga = r.getResponseHeader("Etag")) c.etag[z] = ga
                        }
                        if (A === 304) {
                            F = "notmodified";
                            ha = true
                        } else try {
                                ga = h;
                                if (ga.dataFilter) U = ga.dataFilter(U, ga.dataType);
                                var ab = ga.dataTypes;
                                ja = {};
                                var Oa, Sa, kc = ab.length,
                                    Ta, ya = ab[0],
                                    Ia, bb, za, Fa, Ja;
                                for (Oa = 1; Oa < kc; Oa++) {
                                    if (Oa === 1) for (Sa in ga.converters) if (typeof Sa === "string") ja[Sa.toLowerCase()] = ga.converters[Sa];
                                    Ia = ya;
                                    ya = ab[Oa];
                                    if (ya === "*") ya = Ia;
                                    else if (Ia !== "*" && Ia !== ya) {
                                        bb = Ia + " " + ya;
                                        za = ja[bb] || ja["* " + ya];
                                        if (!za) {
                                            Ja = d;
                                            for (Fa in ja) {
                                                Ta = Fa.split(" ");
                                                if (Ta[0] === Ia || Ta[0] === "*") if (Ja = ja[Ta[1] + " " + ya]) {
                                                        Fa = ja[Fa];
                                                        if (Fa === true) za = Ja;
                                                        else if (Ja === true) za = Fa;
                                                        break
                                                    }
                                            }
                                        }
                                        za || Ja || c.error("No conversion from " + bb.replace(" ", " to "));
                                        if (za !== true) U = za ? za(U) : Ja(Fa(U))
                                    }
                                }
                                ta = U;
                                F =
                                    "success";
                                ha = true
                        } catch (lc) {
                            F = "parsererror";
                            s = lc
                        }
                    } else {
                        s = F;
                        if (!F || A) {
                            F = "error";
                            if (A < 0) A = 0
                        }
                    }
                    r.status = A;
                    r.statusText = F;
                    ha ? o.resolveWith(j, [ta, F, r]) : o.rejectWith(j, [r, F, s]);
                    r.statusCode(y);
                    y = d;
                    if (xa) k.trigger("ajax" + (ha ? "Success" : "Error"), [r, h, ha ? ta : s]);
                    w.resolveWith(j, [r, F]);
                    if (xa) {
                        k.trigger("ajaxComplete", [r, h]);
                        --c.active || c.event.trigger("ajaxStop")
                    }
                }
            }
            if (typeof b === "object") {
                e = b;
                b = d
            }
            e = e || {};
            var h = c.ajaxSetup({}, e),
                j = h.context || h,
                k = j !== h && (j.nodeType || j instanceof c) ? c(j) : c.event,
                o = c.Deferred(),
                w =
                    c._Deferred(),
                y = h.statusCode || {}, z, M = {}, fa = {}, la, ka, na, Aa, ra, sa = 0,
                xa, l, r = {
                    readyState: 0,
                    setRequestHeader: function (A, F) {
                        if (!sa) {
                            var U = A.toLowerCase();
                            A = fa[U] = fa[U] || A;
                            M[A] = F
                        }
                        return this
                    },
                    getAllResponseHeaders: function () {
                        return sa === 2 ? la : null
                    },
                    getResponseHeader: function (A) {
                        var F;
                        if (sa === 2) {
                            if (!ka) for (ka = {}; F = dc.exec(la);) ka[F[1].toLowerCase()] = F[2];
                            F = ka[A.toLowerCase()]
                        }
                        return F === d ? null : F
                    },
                    overrideMimeType: function (A) {
                        if (!sa) h.mimeType = A;
                        return this
                    },
                    abort: function (A) {
                        A = A || "abort";
                        na && na.abort(A);
                        f(0,
                            A);
                        return this
                    }
                };
            o.promise(r);
            r.success = r.done;
            r.error = r.fail;
            r.complete = w.done;
            r.statusCode = function (A) {
                if (A) {
                    var F;
                    if (sa < 2) for (F in A) y[F] = [y[F], A[F]];
                    else {
                        F = A[r.status];
                        r.then(F, F)
                    }
                }
                return this
            };
            h.url = ((b || h.url) + "")
                .replace(cc, "")
                .replace(gc, Ea[1] + "//");
            h.dataTypes = c.trim(h.dataType || "*")
                .toLowerCase()
                .split(eb);
            if (h.crossDomain == null) {
                ra = vb.exec(h.url.toLowerCase());
                h.crossDomain = !! (ra && (ra[1] != Ea[1] || ra[2] != Ea[2] || (ra[3] || (ra[1] === "http:" ? 80 : 443)) != (Ea[3] || (Ea[1] === "http:" ? 80 : 443))))
            }
            if (h.data &&
                h.processData && typeof h.data !== "string") h.data = c.param(h.data, h.traditional);
            m(Wa, h, e, r);
            if (sa === 2) return false;
            xa = h.global;
            h.type = h.type.toUpperCase();
            h.hasContent = !fc.test(h.type);
            xa && c.active++ === 0 && c.event.trigger("ajaxStart");
            if (!h.hasContent) {
                if (h.data) h.url += (ub.test(h.url) ? "&" : "?") + h.data;
                z = h.url;
                if (h.cache === false) {
                    ra = c.now();
                    var C = h.url.replace(jc, "$1_=" + ra);
                    h.url = C + (C === h.url ? (ub.test(h.url) ? "&" : "?") + "_=" + ra : "")
                }
            }
            if (h.data && h.hasContent && h.contentType !== false || e.contentType) r.setRequestHeader("Content-Type",
                    h.contentType);
            if (h.ifModified) {
                z = z || h.url;
                c.lastModified[z] && r.setRequestHeader("If-Modified-Since", c.lastModified[z]);
                c.etag[z] && r.setRequestHeader("If-None-Match", c.etag[z])
            }
            r.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + (h.dataTypes[0] !== "*" ? ", */*; q=0.01" : "") : h.accepts["*"]);
            for (l in h.headers) r.setRequestHeader(l, h.headers[l]);
            if (h.beforeSend && (h.beforeSend.call(j, r, h) === false || sa === 2)) {
                r.abort();
                return false
            }
            for (l in {
                success: 1,
                error: 1,
                complete: 1
            }) r[l](h[l]);
            if (na = m(xb, h, e, r)) {
                r.readyState = 1;
                xa && k.trigger("ajaxSend", [r, h]);
                if (h.async && h.timeout > 0) Aa = setTimeout(function () {
                        r.abort("timeout")
                    }, h.timeout);
                try {
                    sa = 1;
                    na.send(M, f)
                } catch (G) {
                    status < 2 ? f(-1, G) : c.error(G)
                }
            } else f(-1, "No Transport");
            return r
        },
        param: function (b, e) {
            var f = [],
                h = function (k, o) {
                    o = c.isFunction(o) ? o() : o;
                    f[f.length] = encodeURIComponent(k) + "=" + encodeURIComponent(o)
                };
            if (e === d) e = c.ajaxSettings.traditional;
            if (c.isArray(b) || b.jquery && !c.isPlainObject(b)) c.each(b, function () {
                    h(this.name, this.value)
                });
            else for (var j in b) v(j, b[j], e, h);
            return f.join("&")
                .replace(bc, "+")
        }
    });
    c.extend({
        active: 0,
        lastModified: {},
        etag: {}
    });
    var mc = c.now(),
        Ua = /(\=)\?(&|$)|\?\?/i;
    c.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            return c.expando + "_" + mc++
        }
    });
    c.ajaxPrefilter("json jsonp", function (b, e, f) {
        e = b.contentType === "application/x-www-form-urlencoded" && typeof b.data === "string";
        if (b.dataTypes[0] === "jsonp" || b.jsonp !== false && (Ua.test(b.url) || e && Ua.test(b.data))) {
            var h, j = b.jsonpCallback = c.isFunction(b.jsonpCallback) ?
                    b.jsonpCallback() : b.jsonpCallback,
                k = a[j],
                o = b.url,
                w = b.data,
                y = "$1" + j + "$2";
            if (b.jsonp !== false) {
                o = o.replace(Ua, y);
                if (b.url === o) {
                    if (e) w = w.replace(Ua, y);
                    if (b.data === w) o += (/\?/.test(o) ? "&" : "?") + b.jsonp + "=" + j
                }
            }
            b.url = o;
            b.data = w;
            a[j] = function (z) {
                h = [z]
            };
            f.always(function () {
                a[j] = k;
                if (h && c.isFunction(k)) a[j](h[0])
            });
            b.converters["script json"] = function () {
                h || c.error(j + " was not called");
                return h[0]
            };
            b.dataTypes[0] = "json";
            return "script"
        }
    });
    c.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function (b) {
                c.globalEval(b);
                return b
            }
        }
    });
    c.ajaxPrefilter("script", function (b) {
        if (b.cache === d) b.cache = false;
        if (b.crossDomain) {
            b.type = "GET";
            b.global = false
        }
    });
    c.ajaxTransport("script", function (b) {
        if (b.crossDomain) {
            var e, f = K.head || K.getElementsByTagName("head")[0] || K.documentElement;
            return {
                send: function (h, j) {
                    e = K.createElement("script");
                    e.async = "async";
                    if (b.scriptCharset) e.charset = b.scriptCharset;
                    e.src = b.url;
                    e.onload = e.onreadystatechange = function (k, o) {
                        if (o || !e.readyState || /loaded|complete/.test(e.readyState)) {
                            e.onload = e.onreadystatechange = null;
                            f && e.parentNode && f.removeChild(e);
                            e = d;
                            o || j(200, "success")
                        }
                    };
                    f.insertBefore(e, f.firstChild)
                },
                abort: function () {
                    if (e) e.onload(0, 1)
                }
            }
        }
    });
    var cb = a.ActiveXObject ? function () {
            for (var b in Ka) Ka[b](0, 1)
        } : false,
        nc = 0,
        Ka;
    c.ajaxSettings.xhr = a.ActiveXObject ? function () {
        var b;
        if (!(b = !this.isLocal && E())) a: {
                try {
                    b = new a.ActiveXObject("Microsoft.XMLHTTP");
                    break a
                } catch (e) {}
                b = void 0
        }
        return b
    } : E;
    (function (b) {
        c.extend(c.support, {
            ajax: !! b,
            cors: !! b && "withCredentials" in b
        })
    })(c.ajaxSettings.xhr());
    c.support.ajax && c.ajaxTransport(function (b) {
        if (!b.crossDomain || c.support.cors) {
            var e;
            return {
                send: function (f, h) {
                    var j = b.xhr(),
                        k, o;
                    b.username ? j.open(b.type, b.url, b.async, b.username, b.password) : j.open(b.type, b.url, b.async);
                    if (b.xhrFields) for (o in b.xhrFields) j[o] = b.xhrFields[o];
                    b.mimeType && j.overrideMimeType && j.overrideMimeType(b.mimeType);
                    if (!b.crossDomain && !f["X-Requested-With"]) f["X-Requested-With"] = "XMLHttpRequest";
                    try {
                        for (o in f) j.setRequestHeader(o,
                                f[o])
                    } catch (w) {}
                    j.send(b.hasContent && b.data || null);
                    e = function (y, z) {
                        var M, fa, la, ka, na;
                        try {
                            if (e && (z || j.readyState === 4)) {
                                e = d;
                                if (k) {
                                    j.onreadystatechange = c.noop;
                                    cb && delete Ka[k]
                                }
                                if (z) j.readyState !== 4 && j.abort();
                                else {
                                    M = j.status;
                                    la = j.getAllResponseHeaders();
                                    ka = {};
                                    if ((na = j.responseXML) && na.documentElement) ka.xml = na;
                                    ka.text = j.responseText;
                                    try {
                                        fa = j.statusText
                                    } catch (Aa) {
                                        fa = ""
                                    }
                                    if (!M && b.isLocal && !b.crossDomain) M = ka.text ? 200 : 404;
                                    else if (M === 1223) M = 204
                                }
                            }
                        } catch (ra) {
                            z || h(-1, ra)
                        }
                        ka && h(M, fa, ka, la)
                    };
                    if (!b.async || j.readyState ===
                        4) e();
                    else {
                        k = ++nc;
                        if (cb) {
                            if (!Ka) {
                                Ka = {};
                                c(a)
                                    .unload(cb)
                            }
                            Ka[k] = e
                        }
                        j.onreadystatechange = e
                    }
                },
                abort: function () {
                    e && e(0, 1)
                }
            }
        }
    });
    var Xa = {}, wa, Ma, oc = /^(?:toggle|show|hide)$/,
        pc = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
        La, fb = [
            ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
              ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
              ["opacity"]
        ],
        Pa, db = a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || a.oRequestAnimationFrame;
    c.fn.extend({
        show: function (b, e, f) {
            if (b || b === 0) return this.animate(Q("show",
                    3), b, e, f);
            else {
                f = 0;
                for (var h = this.length; f < h; f++) {
                    b = this[f];
                    if (b.style) {
                        e = b.style.display;
                        if (!c._data(b, "olddisplay") && e === "none") e = b.style.display = "";
                        e === "" && c.css(b, "display") === "none" && c._data(b, "olddisplay", ca(b.nodeName))
                    }
                }
                for (f = 0; f < h; f++) {
                    b = this[f];
                    if (b.style) {
                        e = b.style.display;
                        if (e === "" || e === "none") b.style.display = c._data(b, "olddisplay") || ""
                    }
                }
                return this
            }
        },
        hide: function (b, e, f) {
            if (b || b === 0) return this.animate(Q("hide", 3), b, e, f);
            else {
                b = 0;
                for (e = this.length; b < e; b++) if (this[b].style) {
                        f = c.css(this[b],
                            "display");
                        f !== "none" && !c._data(this[b], "olddisplay") && c._data(this[b], "olddisplay", f)
                    }
                for (b = 0; b < e; b++) if (this[b].style) this[b].style.display = "none";
                return this
            }
        },
        _toggle: c.fn.toggle,
        toggle: function (b, e, f) {
            var h = typeof b === "boolean";
            if (c.isFunction(b) && c.isFunction(e)) this._toggle.apply(this, arguments);
            else b == null || h ? this.each(function () {
                    var j = h ? b : c(this)
                        .is(":hidden");
                    c(this)[j ? "show" : "hide"]()
                }) : this.animate(Q("toggle", 3), b, e, f);
            return this
        },
        fadeTo: function (b, e, f, h) {
            return this.filter(":hidden")
                .css("opacity",
                0)
                .show()
                .end()
                .animate({
                opacity: e
            }, b, f, h)
        },
        animate: function (b, e, f, h) {
            var j = c.speed(e, f, h);
            if (c.isEmptyObject(b)) return this.each(j.complete, [false]);
            b = c.extend({}, b);
            return this[j.queue === false ? "each" : "queue"](function () {
                j.queue === false && c._mark(this);
                var k = c.extend({}, j),
                    o = this.nodeType === 1,
                    w = o && c(this)
                        .is(":hidden"),
                    y, z, M, fa, la;
                k.animatedProperties = {};
                for (M in b) {
                    y = c.camelCase(M);
                    if (M !== y) {
                        b[y] = b[M];
                        delete b[M]
                    }
                    z = b[y];
                    if (c.isArray(z)) {
                        k.animatedProperties[y] = z[1];
                        z = b[y] = z[0]
                    } else k.animatedProperties[y] =
                            k.specialEasing && k.specialEasing[y] || k.easing || "swing"; if (z === "hide" && w || z === "show" && !w) return k.complete.call(this);
                    if (o && (y === "height" || y === "width")) {
                        k.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY];
                        if (c.css(this, "display") === "inline" && c.css(this, "float") === "none") if (c.support.inlineBlockNeedsLayout) {
                                z = ca(this.nodeName);
                                if (z === "inline") this.style.display = "inline-block";
                                else {
                                    this.style.display = "inline";
                                    this.style.zoom = 1
                                }
                            } else this.style.display = "inline-block"
                    }
                }
                if (k.overflow !=
                    null) this.style.overflow = "hidden";
                for (M in b) {
                    o = new c.fx(this, k, M);
                    z = b[M];
                    if (oc.test(z)) o[z === "toggle" ? w ? "show" : "hide" : z]();
                    else {
                        y = pc.exec(z);
                        fa = o.cur();
                        if (y) {
                            z = parseFloat(y[2]);
                            la = y[3] || (c.cssNumber[M] ? "" : "px");
                            if (la !== "px") {
                                c.style(this, M, (z || 1) + la);
                                fa *= (z || 1) / o.cur();
                                c.style(this, M, fa + la)
                            }
                            if (y[1]) z = (y[1] === "-=" ? -1 : 1) * z + fa;
                            o.custom(fa, z, la)
                        } else o.custom(fa, z, "")
                    }
                }
                return true
            })
        },
        stop: function (b, e) {
            b && this.queue([]);
            this.each(function () {
                var f = c.timers,
                    h = f.length;
                for (e || c._unmark(true, this); h--;) if (f[h].elem ===
                        this) {
                        if (e) f[h](true);
                        f.splice(h, 1)
                    }
            });
            e || this.dequeue();
            return this
        }
    });
    c.each({
        slideDown: Q("show", 1),
        slideUp: Q("hide", 1),
        slideToggle: Q("toggle", 1),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (b, e) {
        c.fn[b] = function (f, h, j) {
            return this.animate(e, f, h, j)
        }
    });
    c.extend({
        speed: function (b, e, f) {
            var h = b && typeof b === "object" ? c.extend({}, b) : {
                complete: f || !f && e || c.isFunction(b) && b,
                duration: b,
                easing: f && e || e && !c.isFunction(e) && e
            };
            h.duration = c.fx.off ? 0 : typeof h.duration ===
                "number" ? h.duration : h.duration in c.fx.speeds ? c.fx.speeds[h.duration] : c.fx.speeds._default;
            h.old = h.complete;
            h.complete = function (j) {
                if (h.queue !== false) c.dequeue(this);
                else j !== false && c._unmark(this);
                c.isFunction(h.old) && h.old.call(this)
            };
            return h
        },
        easing: {
            linear: function (b, e, f, h) {
                return f + h * b
            },
            swing: function (b, e, f, h) {
                return (-Math.cos(b * Math.PI) / 2 + 0.5) * h + f
            }
        },
        timers: [],
        fx: function (b, e, f) {
            this.options = e;
            this.elem = b;
            this.prop = f;
            e.orig = e.orig || {}
        }
    });
    c.fx.prototype = {
        update: function () {
            this.options.step &&
                this.options.step.call(this.elem, this.now, this);
            (c.fx.step[this.prop] || c.fx.step._default)(this)
        },
        cur: function () {
            if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null)) return this.elem[this.prop];
            var b, e = c.css(this.elem, this.prop);
            return isNaN(b = parseFloat(e)) ? !e || e === "auto" ? 0 : e : b
        },
        custom: function (b, e, f) {
            function h(w) {
                return j.step(w)
            }
            var j = this,
                k = c.fx,
                o;
            this.startTime = Pa || q();
            this.start = b;
            this.end = e;
            this.unit = f || this.unit || (c.cssNumber[this.prop] ? "" : "px");
            this.now = this.start;
            this.pos = this.state = 0;
            h.elem = this.elem;
            if (h() && c.timers.push(h) && !La) if (db) {
                    La = 1;
                    o = function () {
                        if (La) {
                            db(o);
                            k.tick()
                        }
                    };
                    db(o)
                } else La = setInterval(k.tick, k.interval)
        },
        show: function () {
            this.options.orig[this.prop] = c.style(this.elem, this.prop);
            this.options.show = true;
            this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur());
            c(this.elem)
                .show()
        },
        hide: function () {
            this.options.orig[this.prop] = c.style(this.elem, this.prop);
            this.options.hide = true;
            this.custom(this.cur(), 0)
        },
        step: function (b) {
            var e = Pa ||
                q(),
                f = true,
                h = this.elem,
                j = this.options,
                k;
            if (b || e >= j.duration + this.startTime) {
                this.now = this.end;
                this.pos = this.state = 1;
                this.update();
                j.animatedProperties[this.prop] = true;
                for (k in j.animatedProperties) if (j.animatedProperties[k] !== true) f = false;
                if (f) {
                    j.overflow != null && !c.support.shrinkWrapBlocks && c.each(["", "X", "Y"], function (w, y) {
                        h.style["overflow" + y] = j.overflow[w]
                    });
                    j.hide && c(h)
                        .hide();
                    if (j.hide || j.show) for (var o in j.animatedProperties) c.style(h, o, j.orig[o]);
                    j.complete.call(h)
                }
                return false
            } else {
                if (j.duration ==
                    Infinity) this.now = e;
                else {
                    b = e - this.startTime;
                    this.state = b / j.duration;
                    this.pos = c.easing[j.animatedProperties[this.prop]](this.state, b, 0, 1, j.duration);
                    this.now = this.start + (this.end - this.start) * this.pos
                }
                this.update()
            }
            return true
        }
    };
    c.extend(c.fx, {
        tick: function () {
            for (var b = c.timers, e = 0; e < b.length; ++e) b[e]() || b.splice(e--, 1);
            b.length || c.fx.stop()
        },
        interval: 13,
        stop: function () {
            clearInterval(La);
            La = null
        },
        speeds: {
            slow: 600,
            fast: 200,
            _default: 400
        },
        step: {
            opacity: function (b) {
                c.style(b.elem, "opacity", b.now)
            },
            _default: function (b) {
                if (b.elem.style &&
                    b.elem.style[b.prop] != null) b.elem.style[b.prop] = (b.prop === "width" || b.prop === "height" ? Math.max(0, b.now) : b.now) + b.unit;
                else b.elem[b.prop] = b.now
            }
        }
    });
    if (c.expr && c.expr.filters) c.expr.filters.animated = function (b) {
            return c.grep(c.timers, function (e) {
                return b === e.elem
            })
                .length
    };
    var qc = /^t(?:able|d|h)$/i,
        yb = /^(?:body|html)$/i;
    c.fn.offset = "getBoundingClientRect" in K.documentElement ? function (b) {
        var e = this[0],
            f;
        if (b) return this.each(function (o) {
                c.offset.setOffset(this, b, o)
            });
        if (!e || !e.ownerDocument) return null;
        if (e === e.ownerDocument.body) return c.offset.bodyOffset(e);
        try {
            f = e.getBoundingClientRect()
        } catch (h) {}
        var j = e.ownerDocument,
            k = j.documentElement;
        if (!f || !c.contains(k, e)) return f ? {
                top: f.top,
                left: f.left
        }: {
            top: 0,
            left: 0
        };
        e = j.body;
        j = aa(j);
        return {
            top: f.top + (j.pageYOffset || c.support.boxModel && k.scrollTop || e.scrollTop) - (k.clientTop || e.clientTop || 0),
            left: f.left + (j.pageXOffset || c.support.boxModel && k.scrollLeft || e.scrollLeft) - (k.clientLeft || e.clientLeft || 0)
        }
    } : function (b) {
        var e = this[0];
        if (b) return this.each(function (z) {
                c.offset.setOffset(this,
                    b, z)
            });
        if (!e || !e.ownerDocument) return null;
        if (e === e.ownerDocument.body) return c.offset.bodyOffset(e);
        c.offset.initialize();
        var f, h = e.offsetParent,
            j = e.ownerDocument,
            k = j.documentElement,
            o = j.body;
        f = (j = j.defaultView) ? j.getComputedStyle(e, null) : e.currentStyle;
        for (var w = e.offsetTop, y = e.offsetLeft;
        (e = e.parentNode) && e !== o && e !== k;) {
            if (c.offset.supportsFixedPosition && f.position === "fixed") break;
            f = j ? j.getComputedStyle(e, null) : e.currentStyle;
            w -= e.scrollTop;
            y -= e.scrollLeft;
            if (e === h) {
                w += e.offsetTop;
                y += e.offsetLeft;
                if (c.offset.doesNotAddBorder && !(c.offset.doesAddBorderForTableAndCells && qc.test(e.nodeName))) {
                    w += parseFloat(f.borderTopWidth) || 0;
                    y += parseFloat(f.borderLeftWidth) || 0
                }
                h = e.offsetParent
            }
            if (c.offset.subtractsBorderForOverflowNotVisible && f.overflow !== "visible") {
                w += parseFloat(f.borderTopWidth) || 0;
                y += parseFloat(f.borderLeftWidth) || 0
            }
        }
        if (f.position === "relative" || f.position === "static") {
            w += o.offsetTop;
            y += o.offsetLeft
        }
        if (c.offset.supportsFixedPosition && f.position === "fixed") {
            w += Math.max(k.scrollTop, o.scrollTop);
            y += Math.max(k.scrollLeft, o.scrollLeft)
        }
        return {
            top: w,
            left: y
        }
    };
    c.offset = {
        initialize: function () {
            var b = K.body,
                e = K.createElement("div"),
                f, h, j, k = parseFloat(c.css(b, "marginTop")) || 0;
            c.extend(e.style, {
                position: "absolute",
                top: 0,
                left: 0,
                margin: 0,
                border: 0,
                width: "1px",
                height: "1px",
                visibility: "hidden"
            });
            e.innerHTML = "<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
            b.insertBefore(e, b.firstChild);
            f = e.firstChild;
            h = f.firstChild;
            j = f.nextSibling.firstChild.firstChild;
            this.doesNotAddBorder = h.offsetTop !== 5;
            this.doesAddBorderForTableAndCells = j.offsetTop === 5;
            h.style.position = "fixed";
            h.style.top = "20px";
            this.supportsFixedPosition = h.offsetTop === 20 || h.offsetTop === 15;
            h.style.position = h.style.top = "";
            f.style.overflow = "hidden";
            f.style.position = "relative";
            this.subtractsBorderForOverflowNotVisible = h.offsetTop === -5;
            this.doesNotIncludeMarginInBodyOffset = b.offsetTop !== k;
            b.removeChild(e);
            c.offset.initialize = c.noop
        },
        bodyOffset: function (b) {
            var e = b.offsetTop,
                f = b.offsetLeft;
            c.offset.initialize();
            if (c.offset.doesNotIncludeMarginInBodyOffset) {
                e += parseFloat(c.css(b, "marginTop")) || 0;
                f += parseFloat(c.css(b, "marginLeft")) || 0
            }
            return {
                top: e,
                left: f
            }
        },
        setOffset: function (b, e, f) {
            var h = c.css(b, "position");
            if (h === "static") b.style.position = "relative";
            var j = c(b),
                k = j.offset(),
                o = c.css(b, "top"),
                w = c.css(b, "left"),
                y = {}, z = {};
            if ((h === "absolute" || h === "fixed") && c.inArray("auto", [o, w]) > -1) {
                z = j.position();
                h = z.top;
                w = z.left
            } else {
                h = parseFloat(o) || 0;
                w = parseFloat(w) || 0
            } if (c.isFunction(e)) e = e.call(b, f, k);
            if (e.top != null) y.top = e.top - k.top + h;
            if (e.left != null) y.left = e.left - k.left + w;
            "using" in e ? e.using.call(b, y) : j.css(y)
        }
    };
    c.fn.extend({
        position: function () {
            if (!this[0]) return null;
            var b = this[0],
                e = this.offsetParent(),
                f = this.offset(),
                h = yb.test(e[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : e.offset();
            f.top -= parseFloat(c.css(b, "marginTop")) || 0;
            f.left -= parseFloat(c.css(b, "marginLeft")) || 0;
            h.top += parseFloat(c.css(e[0], "borderTopWidth")) || 0;
            h.left += parseFloat(c.css(e[0], "borderLeftWidth")) || 0;
            return {
                top: f.top - h.top,
                left: f.left - h.left
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var b = this.offsetParent || K.body; b && !yb.test(b.nodeName) && c.css(b, "position") === "static";) b = b.offsetParent;
                return b
            })
        }
    });
    c.each(["Left", "Top"], function (b, e) {
        var f = "scroll" + e;
        c.fn[f] = function (h) {
            var j, k;
            if (h === d) {
                j = this[0];
                if (!j) return null;
                return (k = aa(j)) ? "pageXOffset" in k ? k[b ? "pageYOffset" : "pageXOffset"] : c.support.boxModel && k.document.documentElement[f] ||
                    k.document.body[f] : j[f]
            }
            return this.each(function () {
                if (k = aa(this)) k.scrollTo(!b ? h : c(k)
                        .scrollLeft(), b ? h : c(k)
                        .scrollTop());
                else this[f] = h
            })
        }
    });
    c.each(["Height", "Width"], function (b, e) {
        var f = e.toLowerCase();
        c.fn["inner" + e] = function () {
            return this[0] ? parseFloat(c.css(this[0], f, "padding")) : null
        };
        c.fn["outer" + e] = function (h) {
            return this[0] ? parseFloat(c.css(this[0], f, h ? "margin" : "border")) : null
        };
        c.fn[f] = function (h) {
            var j = this[0];
            if (!j) return h == null ? null : this;
            if (c.isFunction(h)) return this.each(function (o) {
                    var w =
                        c(this);
                    w[f](h.call(this, o, w[f]()))
                });
            if (c.isWindow(j)) {
                var k = j.document.documentElement["client" + e];
                return j.document.compatMode === "CSS1Compat" && k || j.document.body["client" + e] || k
            } else if (j.nodeType === 9) return Math.max(j.documentElement["client" + e], j.body["scroll" + e], j.documentElement["scroll" + e], j.body["offset" + e], j.documentElement["offset" + e]);
            else if (h === d) {
                j = c.css(j, f);
                k = parseFloat(j);
                return c.isNaN(k) ? j : k
            } else return this.css(f, typeof h === "string" ? h : h + "px")
        }
    });
    a.jQuery = a.$ = c
})(window);
(function () {
    function a(c, u, x) {
        if (c === u) return c !== 0 || 1 / c == 1 / u;
        if (c == null || u == null) return c === u;
        if (c._chain) c = c._wrapped;
        if (u._chain) u = u._wrapped;
        if (c.isEqual && q.isFunction(c.isEqual)) return c.isEqual(u);
        if (u.isEqual && q.isFunction(u.isEqual)) return u.isEqual(c);
        var J = D.call(c);
        if (J != D.call(u)) return false;
        switch (J) {
            case "[object String]":
                return c == String(u);
            case "[object Number]":
                return c != +c ? u != +u : c == 0 ? 1 / c == 1 / u : c == +u;
            case "[object Date]":
            case "[object Boolean]":
                return +c == +u;
            case "[object RegExp]":
                return c.source ==
                    u.source && c.global == u.global && c.multiline == u.multiline && c.ignoreCase == u.ignoreCase
        }
        if (typeof c != "object" || typeof u != "object") return false;
        for (var P = x.length; P--;) if (x[P] == c) return true;
        x.push(c);
        P = 0;
        var Y = true;
        if (J == "[object Array]") {
            P = c.length;
            if (Y = P == u.length) for (; P--;) if (!(Y = P in c == P in u && a(c[P], u[P], x))) break
        } else {
            if ("constructor" in c != "constructor" in u || c.constructor != u.constructor) return false;
            for (var ea in c) if (I.call(c, ea)) {
                    P++;
                    if (!(Y = I.call(u, ea) && a(c[ea], u[ea], x))) break
                }
            if (Y) {
                for (ea in u) if (I.call(u,
                        ea) && !P--) break;
                Y = !P
            }
        }
        x.pop();
        return Y
    }
    var d = this,
        g = d._,
        i = {}, n = Array.prototype,
        p = Object.prototype,
        t = n.slice,
        H = n.concat,
        B = n.unshift,
        D = p.toString,
        I = p.hasOwnProperty,
        R = n.forEach,
        S = n.map,
        W = n.reduce,
        da = n.reduceRight,
        T = n.filter,
        V = n.every,
        ba = n.some,
        qa = n.indexOf,
        m = n.lastIndexOf;
    p = Array.isArray;
    var v = Object.keys,
        E = Function.prototype.bind,
        q = function (c) {
            return new K(c)
        };
    if (typeof exports !== "undefined") {
        if (typeof module !== "undefined" && module.exports) exports = module.exports = q;
        exports._ = q
    } else if (typeof define ===
        "function" && define.amd) define("underscore", function () {
            return q
        });
    else d._ = q;
    q.VERSION = "1.2.3";
    var L = q.each = q.forEach = function (c, u, x) {
        if (c != null) if (R && c.forEach === R) c.forEach(u, x);
            else if (c.length === +c.length) for (var J = 0, P = c.length; J < P; J++) {
                if (J in c && u.call(x, c[J], J, c) === i) break
        } else for (J in c) if (I.call(c, J)) if (u.call(x, c[J], J, c) === i) break
    };
    q.map = function (c, u, x) {
        var J = [];
        if (c == null) return J;
        if (S && c.map === S) return c.map(u, x);
        L(c, function (P, Y, ea) {
            J[J.length] = u.call(x, P, Y, ea)
        });
        return J
    };
    q.reduce = q.foldl =
        q.inject = function (c, u, x, J) {
        var P = arguments.length > 2;
        if (c == null) c = [];
        if (W && c.reduce === W) {
            if (J) u = q.bind(u, J);
            return P ? c.reduce(u, x) : c.reduce(u)
        }
        L(c, function (Y, ea, va) {
            if (P) x = u.call(J, x, Y, ea, va);
            else {
                x = Y;
                P = true
            }
        });
        if (!P) throw new TypeError("Reduce of empty array with no initial value");
        return x
    };
    q.reduceRight = q.foldr = function (c, u, x, J) {
        var P = arguments.length > 2;
        if (c == null) c = [];
        if (da && c.reduceRight === da) {
            if (J) u = q.bind(u, J);
            return P ? c.reduceRight(u, x) : c.reduceRight(u)
        }
        var Y = q.toArray(c)
            .reverse();
        if (J && !P) u =
                q.bind(u, J);
        return P ? q.reduce(Y, u, x, J) : q.reduce(Y, u)
    };
    q.find = q.detect = function (c, u, x) {
        var J;
        Q(c, function (P, Y, ea) {
            if (u.call(x, P, Y, ea)) {
                J = P;
                return true
            }
        });
        return J
    };
    q.filter = q.select = function (c, u, x) {
        var J = [];
        if (c == null) return J;
        if (T && c.filter === T) return c.filter(u, x);
        L(c, function (P, Y, ea) {
            if (u.call(x, P, Y, ea)) J[J.length] = P
        });
        return J
    };
    q.reject = function (c, u, x) {
        var J = [];
        if (c == null) return J;
        L(c, function (P, Y, ea) {
            u.call(x, P, Y, ea) || (J[J.length] = P)
        });
        return J
    };
    q.every = q.all = function (c, u, x) {
        var J = true;
        if (c ==
            null) return J;
        if (V && c.every === V) return c.every(u, x);
        L(c, function (P, Y, ea) {
            if (!(J = J && u.call(x, P, Y, ea))) return i
        });
        return J
    };
    var Q = q.some = q.any = function (c, u, x) {
        u || (u = q.identity);
        var J = false;
        if (c == null) return J;
        if (ba && c.some === ba) return c.some(u, x);
        L(c, function (P, Y, ea) {
            if (J || (J = u.call(x, P, Y, ea))) return i
        });
        return !!J
    };
    q.include = q.contains = function (c, u) {
        var x = false;
        if (c == null) return x;
        if (qa && c.indexOf === qa) return c.indexOf(u) != -1;
        return x = Q(c, function (J) {
            return J === u
        })
    };
    q.invoke = function (c, u) {
        var x = t.call(arguments,
            2);
        return q.map(c, function (J) {
            return (u.call ? u || J : J[u])
                .apply(J, x)
        })
    };
    q.pluck = function (c, u) {
        return q.map(c, function (x) {
            return x[u]
        })
    };
    q.max = function (c, u, x) {
        if (!u && q.isArray(c)) return Math.max.apply(Math, c);
        if (!u && q.isEmpty(c)) return -Infinity;
        var J = {
            computed: -Infinity
        };
        L(c, function (P, Y, ea) {
            Y = u ? u.call(x, P, Y, ea) : P;
            Y >= J.computed && (J = {
                value: P,
                computed: Y
            })
        });
        return J.value
    };
    q.min = function (c, u, x) {
        if (!u && q.isArray(c)) return Math.min.apply(Math, c);
        if (!u && q.isEmpty(c)) return Infinity;
        var J = {
            computed: Infinity
        };
        L(c, function (P, Y, ea) {
            Y = u ? u.call(x, P, Y, ea) : P;
            Y < J.computed && (J = {
                value: P,
                computed: Y
            })
        });
        return J.value
    };
    q.shuffle = function (c) {
        var u = [],
            x;
        L(c, function (J, P) {
            if (P == 0) u[0] = J;
            else {
                x = Math.floor(Math.random() * (P + 1));
                u[P] = u[x];
                u[x] = J
            }
        });
        return u
    };
    q.sortBy = function (c, u, x) {
        return q.pluck(q.map(c, function (J, P, Y) {
            return {
                value: J,
                criteria: u.call(x, J, P, Y)
            }
        })
            .sort(function (J, P) {
            var Y = J.criteria,
                ea = P.criteria;
            return Y < ea ? -1 : Y > ea ? 1 : 0
        }), "value")
    };
    q.groupBy = function (c, u) {
        var x = {}, J = q.isFunction(u) ? u : function (P) {
                return P[u]
            };
        L(c, function (P, Y) {
            var ea = J(P, Y);
            (x[ea] || (x[ea] = []))
                .push(P)
        });
        return x
    };
    q.sortedIndex = function (c, u, x) {
        x || (x = q.identity);
        for (var J = 0, P = c.length; J < P;) {
            var Y = J + P >> 1;
            x(c[Y]) < x(u) ? J = Y + 1 : P = Y
        }
        return J
    };
    q.toArray = function (c) {
        if (!c) return [];
        if (c.toArray) return c.toArray();
        if (q.isArray(c)) return t.call(c);
        if (q.isArguments(c)) return t.call(c);
        return q.values(c)
    };
    q.size = function (c) {
        return q.toArray(c)
            .length
    };
    q.first = q.head = function (c, u, x) {
        return u != null && !x ? t.call(c, 0, u) : c[0]
    };
    q.initial = function (c, u, x) {
        return t.call(c,
            0, c.length - (u == null || x ? 1 : u))
    };
    q.last = function (c, u, x) {
        return u != null && !x ? t.call(c, Math.max(c.length - u, 0)) : c[c.length - 1]
    };
    q.rest = q.tail = function (c, u, x) {
        return t.call(c, u == null || x ? 1 : u)
    };
    q.compact = function (c) {
        return q.filter(c, function (u) {
            return !!u
        })
    };
    q.flatten = function (c, u) {
        return q.reduce(c, function (x, J) {
            if (q.isArray(J)) return x.concat(u ? J : q.flatten(J));
            x[x.length] = J;
            return x
        }, [])
    };
    q.without = function (c) {
        return q.difference(c, t.call(arguments, 1))
    };
    q.uniq = q.unique = function (c, u, x) {
        x = x ? q.map(c, x) : c;
        var J = [];
        q.reduce(x, function (P, Y, ea) {
            if (0 == ea || (u === true ? q.last(P) != Y : !q.include(P, Y))) {
                P[P.length] = Y;
                J[J.length] = c[ea]
            }
            return P
        }, []);
        return J
    };
    q.union = function () {
        return q.uniq(q.flatten(arguments, true))
    };
    q.intersection = q.intersect = function (c) {
        var u = t.call(arguments, 1);
        return q.filter(q.uniq(c), function (x) {
            return q.every(u, function (J) {
                return q.indexOf(J, x) >= 0
            })
        })
    };
    q.difference = function (c) {
        var u = q.flatten(t.call(arguments, 1));
        return q.filter(c, function (x) {
            return !q.include(u, x)
        })
    };
    q.zip = function () {
        for (var c =
            t.call(arguments), u = q.max(q.pluck(c, "length")), x = Array(u), J = 0; J < u; J++) x[J] = q.pluck(c, "" + J);
        return x
    };
    q.indexOf = function (c, u, x) {
        if (c == null) return -1;
        var J;
        if (x) {
            x = q.sortedIndex(c, u);
            return c[x] === u ? x : -1
        }
        if (qa && c.indexOf === qa) return c.indexOf(u);
        x = 0;
        for (J = c.length; x < J; x++) if (x in c && c[x] === u) return x;
        return -1
    };
    q.lastIndexOf = function (c, u) {
        if (c == null) return -1;
        if (m && c.lastIndexOf === m) return c.lastIndexOf(u);
        for (var x = c.length; x--;) if (x in c && c[x] === u) return x;
        return -1
    };
    q.range = function (c, u, x) {
        if (arguments.length <=
            1) {
            u = c || 0;
            c = 0
        }
        x = arguments[2] || 1;
        for (var J = Math.max(Math.ceil((u - c) / x), 0), P = 0, Y = Array(J); P < J;) {
            Y[P++] = c;
            c += x
        }
        return Y
    };
    var ca = function () {};
    q.bind = function (c, u) {
        var x, J;
        if (c.bind === E && E) return E.apply(c, t.call(arguments, 1));
        if (!q.isFunction(c)) throw new TypeError;
        J = t.call(arguments, 2);
        return x = function () {
            if (!(this instanceof x)) return c.apply(u, J.concat(t.call(arguments)));
            ca.prototype = c.prototype;
            var P = new ca,
                Y = c.apply(P, J.concat(t.call(arguments)));
            if (Object(Y) === Y) return Y;
            return P
        }
    };
    q.bindAll = function (c) {
        var u =
            t.call(arguments, 1);
        if (u.length == 0) u = q.functions(c);
        L(u, function (x) {
            c[x] = q.bind(c[x], c)
        });
        return c
    };
    q.memoize = function (c, u) {
        var x = {};
        u || (u = q.identity);
        return function () {
            var J = u.apply(this, arguments);
            return I.call(x, J) ? x[J] : x[J] = c.apply(this, arguments)
        }
    };
    q.delay = function (c, u) {
        var x = t.call(arguments, 2);
        return setTimeout(function () {
            return c.apply(c, x)
        }, u)
    };
    q.defer = function (c) {
        return q.delay.apply(q, [c, 1].concat(t.call(arguments, 1)))
    };
    q.throttle = function (c, u) {
        var x, J, P, Y, ea, va = q.debounce(function () {
                ea =
                    Y = false
            }, u);
        return function () {
            x = this;
            J = arguments;
            var Ga;
            P || (P = setTimeout(function () {
                P = null;
                ea && c.apply(x, J);
                va()
            }, u));
            if (Y) ea = true;
            else c.apply(x, J);
            va();
            Y = true
        }
    };
    q.debounce = function (c, u) {
        var x;
        return function () {
            var J = this,
                P = arguments;
            clearTimeout(x);
            x = setTimeout(function () {
                x = null;
                c.apply(J, P)
            }, u)
        }
    };
    q.once = function (c) {
        var u = false,
            x;
        return function () {
            if (u) return x;
            u = true;
            return x = c.apply(this, arguments)
        }
    };
    q.wrap = function (c, u) {
        return function () {
            var x = H.apply([c], arguments);
            return u.apply(this, x)
        }
    };
    q.compose = function () {
        var c = arguments;
        return function () {
            for (var u = arguments, x = c.length - 1; x >= 0; x--) u = [c[x].apply(this, u)];
            return u[0]
        }
    };
    q.after = function (c, u) {
        if (c <= 0) return u();
        return function () {
            if (--c < 1) return u.apply(this, arguments)
        }
    };
    q.keys = v || function (c) {
        if (c !== Object(c)) throw new TypeError("Invalid object");
        var u = [],
            x;
        for (x in c) if (I.call(c, x)) u[u.length] = x;
        return u
    };
    q.values = function (c) {
        return q.map(c, q.identity)
    };
    q.functions = q.methods = function (c) {
        var u = [],
            x;
        for (x in c) q.isFunction(c[x]) && u.push(x);
        return u.sort()
    };
    q.extend = function (c) {
        L(t.call(arguments, 1), function (u) {
            for (var x in u) if (u[x] !== void 0) c[x] = u[x]
        });
        return c
    };
    q.defaults = function (c) {
        L(t.call(arguments, 1), function (u) {
            for (var x in u) if (c[x] == null) c[x] = u[x]
        });
        return c
    };
    q.clone = function (c) {
        if (!q.isObject(c)) return c;
        return q.isArray(c) ? c.slice() : q.extend({}, c)
    };
    q.tap = function (c, u) {
        u(c);
        return c
    };
    q.isEqual = function (c, u) {
        return a(c, u, [])
    };
    q.isEmpty = function (c) {
        if (q.isArray(c) || q.isString(c)) return c.length === 0;
        for (var u in c) if (I.call(c,
                u)) return false;
        return true
    };
    q.isElement = function (c) {
        return !!(c && c.nodeType == 1)
    };
    q.isArray = p || function (c) {
        return D.call(c) == "[object Array]"
    };
    q.isObject = function (c) {
        return c === Object(c)
    };
    q.isArguments = function (c) {
        return D.call(c) == "[object Arguments]"
    };
    if (!q.isArguments(arguments)) q.isArguments = function (c) {
            return !!(c && I.call(c, "callee"))
    };
    q.isFunction = function (c) {
        return D.call(c) == "[object Function]"
    };
    q.isString = function (c) {
        return D.call(c) == "[object String]"
    };
    q.isNumber = function (c) {
        return D.call(c) ==
            "[object Number]"
    };
    q.isNaN = function (c) {
        return c !== c
    };
    q.isBoolean = function (c) {
        return c === true || c === false || D.call(c) == "[object Boolean]"
    };
    q.isDate = function (c) {
        return D.call(c) == "[object Date]"
    };
    q.isRegExp = function (c) {
        return D.call(c) == "[object RegExp]"
    };
    q.isNull = function (c) {
        return c === null
    };
    q.isUndefined = function (c) {
        return c === void 0
    };
    q.noConflict = function () {
        d._ = g;
        return this
    };
    q.identity = function (c) {
        return c
    };
    q.times = function (c, u, x) {
        for (var J = 0; J < c; J++) u.call(x, J)
    };
    q.escape = function (c) {
        return ("" + c)
            .replace(/&/g,
            "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#x27;")
            .replace(/\//g, "&#x2F;")
    };
    q.mixin = function (c) {
        L(q.functions(c), function (u) {
            pa(u, q[u] = c[u])
        })
    };
    var aa = 0;
    q.uniqueId = function (c) {
        var u = aa++;
        return c ? c + u : u
    };
    q.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    q.template = function (c, u) {
        var x = q.templateSettings;
        x = "var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('" + c.replace(/\\/g,
            "\\\\")
            .replace(/'/g, "\\'")
            .replace(x.escape, function (P, Y) {
            return "',_.escape(" + Y.replace(/\\'/g, "'") + "),'"
        })
            .replace(x.interpolate, function (P, Y) {
            return "'," + Y.replace(/\\'/g, "'") + ",'"
        })
            .replace(x.evaluate || null, function (P, Y) {
            return "');" + Y.replace(/\\'/g, "'")
                .replace(/[\r\n\t]/g, " ") + ";__p.push('"
        })
            .replace(/\r/g, "\\r")
            .replace(/\n/g, "\\n")
            .replace(/\t/g, "\\t") + "');}return __p.join('');";
        var J = new Function("obj", "_", x);
        if (u) return J(u, q);
        return function (P) {
            return J.call(this, P, q)
        }
    };
    var K = function (c) {
        this._wrapped =
            c
    };
    q.prototype = K.prototype;
    var ia = function (c, u) {
        return u ? q(c)
            .chain() : c
    }, pa = function (c, u) {
            K.prototype[c] = function () {
                var x = t.call(arguments);
                B.call(x, this._wrapped);
                return ia(u.apply(q, x), this._chain)
            }
        };
    q.mixin(q);
    L(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (c) {
        var u = n[c];
        K.prototype[c] = function () {
            u.apply(this._wrapped, arguments);
            return ia(this._wrapped, this._chain)
        }
    });
    L(["concat", "join", "slice"], function (c) {
        var u = n[c];
        K.prototype[c] = function () {
            return ia(u.apply(this._wrapped,
                arguments), this._chain)
        }
    });
    K.prototype.chain = function () {
        this._chain = true;
        return this
    };
    K.prototype.value = function () {
        return this._wrapped
    }
})
    .call(this);
var JSON;
JSON || (JSON = {});
(function () {
    function a(D) {
        return D < 10 ? "0" + D : D
    }

    function d(D) {
        n.lastIndex = 0;
        return n.test(D) ? '"' + D.replace(n, function (I) {
            var R = H[I];
            return typeof R === "string" ? R : "\\u" + ("0000" + I.charCodeAt(0)
                .toString(16))
                .slice(-4)
        }) + '"' : '"' + D + '"'
    }

    function g(D, I) {
        var R, S, W, da, T = p,
            V, ba = I[D];
        if (ba && typeof ba === "object" && typeof ba.toJSON === "function") ba = ba.toJSON(D);
        if (typeof B === "function") ba = B.call(I, D, ba);
        switch (typeof ba) {
            case "string":
                return d(ba);
            case "number":
                return isFinite(ba) ? String(ba) : "null";
            case "boolean":
            case "null":
                return String(ba);
            case "object":
                if (!ba) return "null";
                p += t;
                V = [];
                if (Object.prototype.toString.apply(ba) === "[object Array]") {
                    da = ba.length;
                    for (R = 0; R < da; R += 1) V[R] = g(R, ba) || "null";
                    W = V.length === 0 ? "[]" : p ? "[\n" + p + V.join(",\n" + p) + "\n" + T + "]" : "[" + V.join(",") + "]";
                    p = T;
                    return W
                }
                if (B && typeof B === "object") {
                    da = B.length;
                    for (R = 0; R < da; R += 1) {
                        S = B[R];
                        if (typeof S === "string") if (W = g(S, ba)) V.push(d(S) + (p ? ": " : ":") + W)
                    }
                } else for (S in ba) if (Object.hasOwnProperty.call(ba, S)) if (W = g(S, ba)) V.push(d(S) + (p ? ": " : ":") + W); W = V.length === 0 ? "{}" : p ? "{\n" + p + V.join(",\n" +
                    p) + "\n" + T + "}" : "{" + V.join(",") + "}";
                p = T;
                return W
        }
    }
    if (typeof Date.prototype.toJSON !== "function") {
        Date.prototype.toJSON = function () {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + a(this.getUTCMonth() + 1) + "-" + a(this.getUTCDate()) + "T" + a(this.getUTCHours()) + ":" + a(this.getUTCMinutes()) + ":" + a(this.getUTCSeconds()) + "Z" : null
        };
        String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function () {
            return this.valueOf()
        }
    }
    var i = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        n = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        p, t, H = {
            "\u0008": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\u000c": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        }, B;
    if (typeof JSON.stringify !== "function") JSON.stringify = function (D, I, R) {
            var S;
            t = p = "";
            if (typeof R === "number") for (S = 0; S < R; S += 1) t += " ";
            else if (typeof R === "string") t = R;
            if ((B = I) && typeof I !== "function" && (typeof I !== "object" || typeof I.length !== "number")) throw Error("JSON.stringify");
            return g("", {
                "": D
            })
    };
    if (typeof JSON.parse !== "function") JSON.parse = function (D, I) {
            function R(W, da) {
                var T, V, ba = W[da];
                if (ba && typeof ba === "object") for (T in ba) if (Object.hasOwnProperty.call(ba, T)) {
                            V = R(ba, T);
                            if (V !== undefined) ba[T] = V;
                            else delete ba[T]
                        }
                return I.call(W, da, ba)
            }
            var S;
            D = String(D);
            i.lastIndex = 0;
            if (i.test(D)) D = D.replace(i, function (W) {
                    return "\\u" + ("0000" + W.charCodeAt(0)
                        .toString(16))
                        .slice(-4)
                });
            if (/^[\],:{}\s]*$/.test(D.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@")
                .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                "]")
                .replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
                S = eval("(" + D + ")");
                return typeof I === "function" ? R({
                    "": S
                }, "") : S
            }
            throw new SyntaxError("JSON.parse");
    }
})();
(function () {
    var a = this,
        d = a.Backbone,
        g;
    g = typeof exports !== "undefined" ? exports : a.Backbone = {};
    g.VERSION = "0.5.3";
    var i = a._;
    if (!i && typeof require !== "undefined") i = require("underscore")
            ._;
    var n = a.jQuery || a.Zepto;
    g.noConflict = function () {
        a.Backbone = d;
        return this
    };
    g.emulateHTTP = false;
    g.emulateJSON = false;
    g.Events = {
        bind: function (m, v, E) {
            var q = this._callbacks || (this._callbacks = {});
            (q[m] || (q[m] = []))
                .push([v, E]);
            return this
        },
        unbind: function (m, v) {
            var E;
            if (m) {
                if (E = this._callbacks) if (v) {
                        E = E[m];
                        if (!E) return this;
                        for (var q =
                            0, L = E.length; q < L; q++) if (E[q] && v === E[q][0]) {
                                E[q] = null;
                                break
                            }
                    } else E[m] = []
            } else this._callbacks = {};
            return this
        },
        trigger: function (m) {
            var v, E, q, L, Q = 2;
            if (!(E = this._callbacks)) return this;
            for (; Q--;) {
                v = Q ? m : "all";
                if (v = E[v]) for (var ca = 0, aa = v.length; ca < aa; ca++) if (q = v[ca]) {
                            L = Q ? Array.prototype.slice.call(arguments, 1) : arguments;
                            q[0].apply(q[1] || this, L)
                        } else {
                            v.splice(ca, 1);
                            ca--;
                            aa--
                        }
            }
            return this
        }
    };
    g.Model = function (m, v) {
        var E;
        m || (m = {});
        if (E = this.defaults) {
            if (i.isFunction(E)) E = E.call(this);
            m = i.extend({}, E, m)
        }
        this.attributes = {};
        this._escapedAttributes = {};
        this.cid = i.uniqueId("c");
        this.set(m, {
            silent: true
        });
        this._changed = false;
        this._previousAttributes = i.clone(this.attributes);
        if (v && v.collection) this.collection = v.collection;
        this.initialize(m, v)
    };
    i.extend(g.Model.prototype, g.Events, {
        _previousAttributes: null,
        _changed: false,
        idAttribute: "id",
        initialize: function () {},
        toJSON: function () {
            return i.clone(this.attributes)
        },
        get: function (m) {
            return this.attributes[m]
        },
        escape: function (m) {
            var v;
            if (v = this._escapedAttributes[m]) return v;
            v =
                this.attributes[m];
            return this._escapedAttributes[m] = (v == null ? "" : "" + v)
                .replace(/&(?!\w+;|#\d+;|#x[\da-f]+;)/gi, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#x27;")
                .replace(/\//g, "&#x2F;")
        },
        has: function (m) {
            return this.attributes[m] != null
        },
        set: function (m, v) {
            v || (v = {});
            if (!m) return this;
            if (m.attributes) m = m.attributes;
            var E = this.attributes,
                q = this._escapedAttributes;
            if (!v.silent && this.validate && !this._performValidation(m, v)) return false;
            if (this.idAttribute in
                m) this.id = m[this.idAttribute];
            var L = this._changing;
            this._changing = true;
            for (var Q in m) {
                var ca = m[Q];
                if (!i.isEqual(E[Q], ca)) {
                    E[Q] = ca;
                    delete q[Q];
                    this._changed = true;
                    v.silent || this.trigger("change:" + Q, this, ca, v)
                }
            }!L && !v.silent && this._changed && this.change(v);
            this._changing = false;
            return this
        },
        unset: function (m, v) {
            if (!(m in this.attributes)) return this;
            v || (v = {});
            var E = {};
            E[m] = void 0;
            if (!v.silent && this.validate && !this._performValidation(E, v)) return false;
            delete this.attributes[m];
            delete this._escapedAttributes[m];
            m == this.idAttribute && delete this.id;
            this._changed = true;
            if (!v.silent) {
                this.trigger("change:" + m, this, void 0, v);
                this.change(v)
            }
            return this
        },
        clear: function (m) {
            m || (m = {});
            var v, E = this.attributes,
                q = {};
            for (v in E) q[v] = void 0;
            if (!m.silent && this.validate && !this._performValidation(q, m)) return false;
            this.attributes = {};
            this._escapedAttributes = {};
            this._changed = true;
            if (!m.silent) {
                for (v in E) this.trigger("change:" + v, this, void 0, m);
                this.change(m)
            }
            return this
        },
        fetch: function (m) {
            m || (m = {});
            var v = this,
                E = m.success;
            m.success = function (q, L, Q) {
                if (!v.set(v.parse(q, Q), m)) return false;
                E && E(v, q)
            };
            m.error = qa(m.error, v, m);
            return (this.sync || g.sync)
                .call(this, "read", this, m)
        },
        save: function (m, v) {
            v || (v = {});
            if (m && !this.set(m, v)) return false;
            var E = this,
                q = v.success;
            v.success = function (Q, ca, aa) {
                if (!E.set(E.parse(Q, aa), v)) return false;
                q && q(E, Q, aa)
            };
            v.error = qa(v.error, E, v);
            var L = this.isNew() ? "create" : "update";
            return (this.sync || g.sync)
                .call(this, L, this, v)
        },
        destroy: function (m) {
            m || (m = {});
            if (this.isNew()) return this.trigger("destroy", this, this.collection,
                    m);
            var v = this,
                E = m.success;
            m.success = function (q) {
                v.trigger("destroy", v, v.collection, m);
                E && E(v, q)
            };
            m.error = qa(m.error, v, m);
            return (this.sync || g.sync)
                .call(this, "delete", this, m)
        },
        url: function () {
            var m = V(this.collection) || this.urlRoot || ba();
            if (this.isNew()) return m;
            return m + (m.charAt(m.length - 1) == "/" ? "" : "/") + encodeURIComponent(this.id)
        },
        parse: function (m) {
            return m
        },
        clone: function () {
            return new this.constructor(this)
        },
        isNew: function () {
            return this.id == null
        },
        change: function (m) {
            this.trigger("change", this, m);
            this._previousAttributes = i.clone(this.attributes);
            this._changed = false
        },
        hasChanged: function (m) {
            if (m) return this._previousAttributes[m] != this.attributes[m];
            return this._changed
        },
        changedAttributes: function (m) {
            m || (m = this.attributes);
            var v = this._previousAttributes,
                E = false,
                q;
            for (q in m) if (!i.isEqual(v[q], m[q])) {
                    E = E || {};
                    E[q] = m[q]
                }
            return E
        },
        previous: function (m) {
            if (!m || !this._previousAttributes) return null;
            return this._previousAttributes[m]
        },
        previousAttributes: function () {
            return i.clone(this._previousAttributes)
        },
        _performValidation: function (m, v) {
            var E = this.validate(m);
            if (E) {
                v.error ? v.error(this, E, v) : this.trigger("error", this, E, v);
                return false
            }
            return true
        }
    });
    g.Collection = function (m, v) {
        v || (v = {});
        if (v.comparator) this.comparator = v.comparator;
        i.bindAll(this, "_onModelEvent", "_removeReference");
        this._reset();
        m && this.reset(m, {
            silent: true
        });
        this.initialize.apply(this, arguments)
    };
    i.extend(g.Collection.prototype, g.Events, {
        model: g.Model,
        initialize: function () {},
        toJSON: function () {
            return this.map(function (m) {
                return m.toJSON()
            })
        },
        add: function (m, v) {
            if (i.isArray(m)) for (var E = 0, q = m.length; E < q; E++) this._add(m[E], v);
            else this._add(m, v);
            return this
        },
        remove: function (m, v) {
            if (i.isArray(m)) for (var E = 0, q = m.length; E < q; E++) this._remove(m[E], v);
            else this._remove(m, v);
            return this
        },
        get: function (m) {
            if (m == null) return null;
            return this._byId[m.id != null ? m.id : m]
        },
        getByCid: function (m) {
            return m && this._byCid[m.cid || m]
        },
        at: function (m) {
            return this.models[m]
        },
        sort: function (m) {
            m || (m = {});
            if (!this.comparator) throw Error("Cannot sort a set without a comparator");
            this.models = this.sortBy(this.comparator);
            m.silent || this.trigger("reset", this, m);
            return this
        },
        pluck: function (m) {
            return i.map(this.models, function (v) {
                return v.get(m)
            })
        },
        reset: function (m, v) {
            m || (m = []);
            v || (v = {});
            this.each(this._removeReference);
            this._reset();
            this.add(m, {
                silent: true
            });
            v.silent || this.trigger("reset", this, v);
            return this
        },
        fetch: function (m) {
            m || (m = {});
            var v = this,
                E = m.success;
            m.success = function (q, L, Q) {
                v[m.add ? "add" : "reset"](v.parse(q, Q), m);
                E && E(v, q)
            };
            m.error = qa(m.error, v, m);
            return (this.sync ||
                g.sync)
                .call(this, "read", this, m)
        },
        create: function (m, v) {
            var E = this;
            v || (v = {});
            m = this._prepareModel(m, v);
            if (!m) return false;
            var q = v.success;
            v.success = function (L, Q, ca) {
                E.add(L, v);
                q && q(L, Q, ca)
            };
            m.save(null, v);
            return m
        },
        parse: function (m) {
            return m
        },
        chain: function () {
            return i(this.models)
                .chain()
        },
        _reset: function () {
            this.length = 0;
            this.models = [];
            this._byId = {};
            this._byCid = {}
        },
        _prepareModel: function (m, v) {
            if (m instanceof g.Model) {
                if (!m.collection) m.collection = this
            } else {
                var E = m;
                m = new this.model(E, {
                    collection: this
                });
                if (m.validate && !m._performValidation(E, v)) m = false
            }
            return m
        },
        _add: function (m, v) {
            v || (v = {});
            m = this._prepareModel(m, v);
            if (!m) return false;
            var E = this.getByCid(m);
            if (E) throw Error(["Can't add the same model to a set twice", E.id]);
            this._byId[m.id] = m;
            this._byCid[m.cid] = m;
            this.models.splice(v.at != null ? v.at : this.comparator ? this.sortedIndex(m, this.comparator) : this.length, 0, m);
            m.bind("all", this._onModelEvent);
            this.length++;
            v.silent || m.trigger("add", m, this, v);
            return m
        },
        _remove: function (m, v) {
            v || (v = {});
            m = this.getByCid(m) ||
                this.get(m);
            if (!m) return null;
            delete this._byId[m.id];
            delete this._byCid[m.cid];
            this.models.splice(this.indexOf(m), 1);
            this.length--;
            v.silent || m.trigger("remove", m, this, v);
            this._removeReference(m);
            return m
        },
        _removeReference: function (m) {
            this == m.collection && delete m.collection;
            m.unbind("all", this._onModelEvent)
        },
        _onModelEvent: function (m, v, E, q) {
            if (!((m == "add" || m == "remove") && E != this)) {
                m == "destroy" && this._remove(v, q);
                if (v && m === "change:" + v.idAttribute) {
                    delete this._byId[v.previous(v.idAttribute)];
                    this._byId[v.id] =
                        v
                }
                this.trigger.apply(this, arguments)
            }
        }
    });
    i.each(["forEach", "each", "map", "reduce", "reduceRight", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "sortBy", "sortedIndex", "toArray", "size", "first", "rest", "last", "without", "indexOf", "lastIndexOf", "isEmpty", "groupBy"], function (m) {
        g.Collection.prototype[m] = function () {
            return i[m].apply(i, [this.models].concat(i.toArray(arguments)))
        }
    });
    g.Router = function (m) {
        m || (m = {});
        if (m.routes) this.routes = m.routes;
        this._bindRoutes();
        this.initialize.apply(this, arguments)
    };
    var p = /:([\w\d]+)/g,
        t = /\*([\w\d]+)/g,
        H = /[-[\]{}()+?.,\\^$|#\s]/g;
    i.extend(g.Router.prototype, g.Events, {
        initialize: function () {},
        route: function (m, v, E) {
            g.history || (g.history = new g.History);
            i.isRegExp(m) || (m = this._routeToRegExp(m));
            g.history.route(m, i.bind(function (q) {
                q = this._extractParameters(m, q);
                E.apply(this, q);
                this.trigger.apply(this, ["route:" + v].concat(q))
            }, this))
        },
        navigate: function (m, v) {
            g.history.navigate(m, v)
        },
        _bindRoutes: function () {
            if (this.routes) {
                var m = [],
                    v;
                for (v in this.routes) m.unshift([v, this.routes[v]]);
                v = 0;
                for (var E = m.length; v < E; v++) this.route(m[v][0], m[v][1], this[m[v][1]])
            }
        },
        _routeToRegExp: function (m) {
            m = m.replace(H, "\\$&")
                .replace(p, "([^/]*)")
                .replace(t, "(.*?)");
            return RegExp("^" + m + "$")
        },
        _extractParameters: function (m, v) {
            return m.exec(v)
                .slice(1)
        }
    });
    g.History = function () {
        this.handlers = [];
        i.bindAll(this, "checkUrl")
    };
    var B = /^#*/,
        D = /msie [\w.]+/,
        I = false;
    i.extend(g.History.prototype, {
        interval: 50,
        getFragment: function (m, v) {
            if (m == null) if (this._hasPushState ||
                    v) {
                    m = window.location.pathname;
                    var E = window.location.search;
                    if (E) m += E;
                    if (m.indexOf(this.options.root) == 0) m = m.substr(this.options.root.length)
                } else m = window.location.hash;
            return decodeURIComponent(m.replace(B, ""))
        },
        start: function (m) {
            if (I) throw Error("Backbone.history has already been started");
            this.options = i.extend({}, {
                root: "/"
            }, this.options, m);
            this._wantsPushState = !! this.options.pushState;
            this._hasPushState = !! (this.options.pushState && window.history && window.history.pushState);
            m = this.getFragment();
            var v =
                document.documentMode;
            if (v = D.exec(navigator.userAgent.toLowerCase()) && (!v || v <= 7)) {
                this.iframe = n('<iframe src="javascript:0" tabindex="-1" />')
                    .hide()
                    .appendTo("body")[0].contentWindow;
                this.navigate(m)
            }
            if (this._hasPushState) n(window)
                    .bind("popstate", this.checkUrl);
            else "onhashchange" in window && !v ? n(window)
                    .bind("hashchange", this.checkUrl) : setInterval(this.checkUrl, this.interval);
            this.fragment = m;
            I = true;
            m = window.location;
            v = m.pathname == this.options.root;
            if (this._wantsPushState && !this._hasPushState && !v) {
                this.fragment =
                    this.getFragment(null, true);
                window.location.replace(this.options.root + "#" + this.fragment);
                return true
            } else if (this._wantsPushState && this._hasPushState && v && m.hash) {
                this.fragment = m.hash.replace(B, "");
                window.history.replaceState({}, document.title, m.protocol + "//" + m.host + this.options.root + this.fragment)
            }
            if (!this.options.silent) return this.loadUrl()
        },
        route: function (m, v) {
            this.handlers.unshift({
                route: m,
                callback: v
            })
        },
        checkUrl: function () {
            var m = this.getFragment();
            if (m == this.fragment && this.iframe) m = this.getFragment(this.iframe.location.hash);
            if (m == this.fragment || m == decodeURIComponent(this.fragment)) return false;
            this.iframe && this.navigate(m);
            this.loadUrl() || this.loadUrl(window.location.hash)
        },
        loadUrl: function (m) {
            var v = this.fragment = this.getFragment(m);
            return i.any(this.handlers, function (E) {
                if (E.route.test(v)) {
                    E.callback(v);
                    return true
                }
            })
        },
        navigate: function (m, v) {
            var E = (m || "")
                .replace(B, "");
            if (!(this.fragment == E || this.fragment == decodeURIComponent(E))) {
                if (this._hasPushState) {
                    var q = window.location;
                    if (E.indexOf(this.options.root) != 0) E = this.options.root +
                            E;
                    this.fragment = E;
                    window.history.pushState({}, document.title, q.protocol + "//" + q.host + E)
                } else {
                    window.location.hash = this.fragment = E;
                    if (this.iframe && E != this.getFragment(this.iframe.location.hash)) {
                        this.iframe.document.open()
                            .close();
                        this.iframe.location.hash = E
                    }
                }
                v && this.loadUrl(m)
            }
        }
    });
    g.View = function (m) {
        this.cid = i.uniqueId("view");
        this._configure(m || {});
        this._ensureElement();
        this.delegateEvents();
        this.initialize.apply(this, arguments)
    };
    var R = /^(\S+)\s*(.*)$/,
        S = ["model", "collection", "el", "id", "attributes",
                "className", "tagName"
        ];
    i.extend(g.View.prototype, g.Events, {
        tagName: "div",
        $: function (m) {
            return n(m, this.el)
        },
        initialize: function () {},
        render: function () {
            return this
        },
        remove: function () {
            n(this.el)
                .remove();
            return this
        },
        make: function (m, v, E) {
            m = document.createElement(m);
            v && n(m)
                .attr(v);
            E && n(m)
                .html(E);
            return m
        },
        delegateEvents: function (m) {
            if (m || (m = this.events)) {
                if (i.isFunction(m)) m = m.call(this);
                n(this.el)
                    .unbind(".delegateEvents" + this.cid);
                for (var v in m) {
                    var E = this[m[v]];
                    if (!E) throw Error('Event "' + m[v] +
                            '" does not exist');
                    var q = v.match(R),
                        L = q[1];
                    q = q[2];
                    E = i.bind(E, this);
                    L += ".delegateEvents" + this.cid;
                    q === "" ? n(this.el)
                        .bind(L, E) : n(this.el)
                        .delegate(q, L, E)
                }
            }
        },
        _configure: function (m) {
            if (this.options) m = i.extend({}, this.options, m);
            for (var v = 0, E = S.length; v < E; v++) {
                var q = S[v];
                if (m[q]) this[q] = m[q]
            }
            this.options = m
        },
        _ensureElement: function () {
            if (this.el) {
                if (i.isString(this.el)) this.el = n(this.el)
                        .get(0)
            } else {
                var m = this.attributes || {};
                if (this.id) m.id = this.id;
                if (this.className) m["class"] = this.className;
                this.el = this.make(this.tagName,
                    m)
            }
        }
    });
    g.Model.extend = g.Collection.extend = g.Router.extend = g.View.extend = function (m, v) {
        var E = T(this, m, v);
        E.extend = this.extend;
        return E
    };
    var W = {
        create: "POST",
        update: "PUT",
        "delete": "DELETE",
        read: "GET"
    };
    g.sync = function (m, v, E) {
        var q = W[m];
        E = i.extend({
            type: q,
            dataType: "json"
        }, E);
        if (!E.url) E.url = V(v) || ba();
        if (!E.data && v && (m == "create" || m == "update")) {
            E.contentType = "application/json";
            E.data = JSON.stringify(v.toJSON())
        }
        if (g.emulateJSON) {
            E.contentType = "application/x-www-form-urlencoded";
            E.data = E.data ? {
                model: E.data
            } : {}
        }
        if (g.emulateHTTP) if (q === "PUT" || q === "DELETE") {
                if (g.emulateJSON) E.data._method = q;
                E.type = "POST";
                E.beforeSend = function (L) {
                    L.setRequestHeader("X-HTTP-Method-Override", q)
                }
            }
        if (E.type !== "GET" && !g.emulateJSON) E.processData = false;
        return n.ajax(E)
    };
    var da = function () {}, T = function (m, v, E) {
            var q;
            q = v && v.hasOwnProperty("constructor") ? v.constructor : function () {
                return m.apply(this, arguments)
            };
            i.extend(q, m);
            da.prototype = m.prototype;
            q.prototype = new da;
            v && i.extend(q.prototype, v);
            E && i.extend(q, E);
            q.prototype.constructor =
                q;
            q.__super__ = m.prototype;
            return q
        }, V = function (m) {
            if (!(m && m.url)) return null;
            return i.isFunction(m.url) ? m.url() : m.url
        }, ba = function () {
            throw Error('A "url" property or function must be specified');
        }, qa = function (m, v, E) {
            return function (q) {
                m ? m(v, q, E) : v.trigger("error", v, q, E)
            }
        }
})
    .call(this);
(function (a) {
    a.ui = a.ui || {};
    var d = /left|center|right/,
        g = /top|center|bottom/,
        i = a.fn.position,
        n = a.fn.offset;
    a.fn.position = function (p) {
        if (!p || !p.of) return i.apply(this, arguments);
        p = a.extend({}, p);
        var t = a(p.of),
            H = t[0],
            B = (p.collision || "flip")
                .split(" "),
            D = p.offset ? p.offset.split(" ") : [0, 0],
            I, R, S;
        if (H.nodeType === 9) {
            I = t.width();
            R = t.height();
            S = {
                top: 0,
                left: 0
            }
        } else if (a.isWindow(H)) {
            I = t.width();
            R = t.height();
            S = {
                top: t.scrollTop(),
                left: t.scrollLeft()
            }
        } else if (H.preventDefault) {
            p.at = "left top";
            I = R = 0;
            S = {
                top: p.of.pageY,
                left: p.of.pageX
            }
        } else {
            I = t.outerWidth();
            R = t.outerHeight();
            S = t.offset()
        }
        a.each(["my", "at"], function () {
            var W = (p[this] || "")
                .split(" ");
            if (W.length === 1) W = d.test(W[0]) ? W.concat(["center"]) : g.test(W[0]) ? ["center"].concat(W) : ["center", "center"];
            W[0] = d.test(W[0]) ? W[0] : "center";
            W[1] = g.test(W[1]) ? W[1] : "center";
            p[this] = W
        });
        if (B.length === 1) B[1] = B[0];
        D[0] = parseInt(D[0], 10) || 0;
        if (D.length === 1) D[1] = D[0];
        D[1] = parseInt(D[1], 10) || 0;
        if (p.at[0] === "right") S.left += I;
        else if (p.at[0] === "center") S.left += I / 2;
        if (p.at[1] === "bottom") S.top +=
                R;
        else if (p.at[1] === "center") S.top += R / 2;
        S.left += D[0];
        S.top += D[1];
        return this.each(function () {
            var W = a(this),
                da = W.outerWidth(),
                T = W.outerHeight(),
                V = parseInt(a.curCSS(this, "marginLeft", true)) || 0,
                ba = parseInt(a.curCSS(this, "marginTop", true)) || 0,
                qa = da + V + (parseInt(a.curCSS(this, "marginRight", true)) || 0),
                m = T + ba + (parseInt(a.curCSS(this, "marginBottom", true)) || 0),
                v = a.extend({}, S),
                E;
            if (p.my[0] === "right") v.left -= da;
            else if (p.my[0] === "center") v.left -= da / 2;
            if (p.my[1] === "bottom") v.top -= T;
            else if (p.my[1] === "center") v.top -=
                    T / 2;
            v.left = Math.round(v.left);
            v.top = Math.round(v.top);
            E = {
                left: v.left - V,
                top: v.top - ba
            };
            a.each(["left", "top"], function (q, L) {
                if (a.ui.position[B[q]]) a.ui.position[B[q]][L](v, {
                        targetWidth: I,
                        targetHeight: R,
                        elemWidth: da,
                        elemHeight: T,
                        collisionPosition: E,
                        collisionWidth: qa,
                        collisionHeight: m,
                        offset: D,
                        my: p.my,
                        at: p.at
                    })
            });
            a.fn.bgiframe && W.bgiframe();
            W.offset(a.extend(v, {
                using: p.using
            }))
        })
    };
    a.ui.position = {
        fit: {
            left: function (p, t) {
                var H = a(window);
                H = t.collisionPosition.left + t.collisionWidth - H.width() - H.scrollLeft();
                p.left = H > 0 ? p.left - H : Math.max(p.left - t.collisionPosition.left, p.left)
            },
            top: function (p, t) {
                var H = a(window);
                H = t.collisionPosition.top + t.collisionHeight - H.height() - H.scrollTop();
                p.top = H > 0 ? p.top - H : Math.max(p.top - t.collisionPosition.top, p.top)
            }
        },
        flip: {
            left: function (p, t) {
                if (t.at[0] !== "center") {
                    var H = a(window);
                    H = t.collisionPosition.left + t.collisionWidth - H.width() - H.scrollLeft();
                    var B = t.my[0] === "left" ? -t.elemWidth : t.my[0] === "right" ? t.elemWidth : 0,
                        D = t.at[0] === "left" ? t.targetWidth : -t.targetWidth,
                        I = -2 * t.offset[0];
                    p.left += t.collisionPosition.left < 0 ? B + D + I : H > 0 ? B + D + I : 0
                }
            },
            top: function (p, t) {
                if (t.at[1] !== "center") {
                    var H = a(window);
                    H = t.collisionPosition.top + t.collisionHeight - H.height() - H.scrollTop();
                    var B = t.my[1] === "top" ? -t.elemHeight : t.my[1] === "bottom" ? t.elemHeight : 0,
                        D = t.at[1] === "top" ? t.targetHeight : -t.targetHeight,
                        I = -2 * t.offset[1];
                    p.top += t.collisionPosition.top < 0 ? B + D + I : H > 0 ? B + D + I : 0
                }
            }
        }
    };
    if (!a.offset.setOffset) {
        a.offset.setOffset = function (p, t) {
            if (/static/.test(a.curCSS(p, "position"))) p.style.position = "relative";
            var H =
                a(p),
                B = H.offset(),
                D = parseInt(a.curCSS(p, "top", true), 10) || 0,
                I = parseInt(a.curCSS(p, "left", true), 10) || 0;
            B = {
                top: t.top - B.top + D,
                left: t.left - B.left + I
            };
            "using" in t ? t.using.call(p, B) : H.css(B)
        };
        a.fn.offset = function (p) {
            var t = this[0];
            if (!t || !t.ownerDocument) return null;
            if (p) return this.each(function () {
                    a.offset.setOffset(this, p)
                });
            return n.call(this)
        }
    }
})(jQuery);
(function (a, d, g) {
    function i(B) {
        B = B || location.href;
        return "#" + B.replace(/^[^#]*#?(.*)$/, "$1")
    }
    var n, p = a.event.special,
        t = document.documentMode,
        H = "onhashchange" in d && (t === g || t > 7);
    p.hashchange = a.extend(p.hashchange, {
        setup: function () {
            if (H) return false;
            a(n.start)
        },
        teardown: function () {
            if (H) return false;
            a(n.stop)
        }
    });
    n = function () {
        function B() {
            var T = i(),
                V = da(R);
            if (T !== R) {
                W(R = T, V);
                a(d)
                    .trigger("hashchange")
            } else if (V !== R) location.href = location.href.replace(/#.*/, "") + V;
            I = setTimeout(B, 50)
        }
        var D = {}, I, R = i(),
            S = function (T) {
                return T
            },
            W = S,
            da = S;
        D.start = function () {
            I || B()
        };
        D.stop = function () {
            I && clearTimeout(I);
            I = g
        };
        return D
    }()
})(jQuery, this);
(function (a) {
    function d(L, Q, ca, aa) {
        aa = {
            data: aa || (Q ? Q.data : {}),
            _wrap: Q ? Q._wrap : null,
            tmpl: null,
            parent: Q || null,
            nodes: [],
            calls: B,
            nest: D,
            wrap: I,
            html: R,
            update: S
        };
        L && a.extend(aa, L, {
            nodes: [],
            parent: Q
        });
        if (ca) {
            aa.tmpl = ca;
            aa._ctnt = aa._ctnt || aa.tmpl(a, aa);
            aa.key = ++v;
            (q.length ? ba : V)[v] = aa
        }
        return aa
    }

    function g(L, Q, ca) {
        var aa;
        ca = ca ? a.map(ca, function (K) {
            return typeof K === "string" ? L.key ? K.replace(/(<\w+)(?=[\s>])(?![^>]*_tmplitem)([^>]*)/g, "$1 " + da + '="' + L.key + '" $2') : K : g(K, L, K._ctnt)
        }) : L;
        if (Q) return ca;
        ca = ca.join("");
        ca.replace(/^\s*([^<\s][^<]*)?(<[\w\W]+>)([^>]*[^>\s])?\s*$/, function (K, ia, pa, c) {
            aa = a(pa)
                .get();
            H(aa);
            if (ia) aa = i(ia)
                    .concat(aa);
            if (c) aa = aa.concat(i(c))
        });
        return aa ? aa : i(ca)
    }

    function i(L) {
        var Q = document.createElement("div");
        Q.innerHTML = L;
        return a.makeArray(Q.childNodes)
    }

    function n(L) {
        return new Function("jQuery", "$item", "var $=jQuery,call,_=[],$data=$item.data;with($data){_.push('" + a.trim(L)
            .replace(/([\\'])/g, "\\$1")
            .replace(/[\r\t\n]/g, " ")
            .replace(/\$\{([^\}]*)\}/g, "{{= $1}}")
            .replace(/\{\{(\/?)(\w+|.)(?:\(((?:[^\}]|\}(?!\}))*?)?\))?(?:\s+(.*?)?)?(\(((?:[^\}]|\}(?!\}))*?)\))?\s*\}\}/g, function (Q, ca, aa, K, ia, pa, c) {
            Q = a.tmpl.tag[aa];
            if (!Q) throw "Template command not found: " + aa;
            aa = Q._default || [];
            if (pa && !/\w$/.test(ia)) {
                ia += pa;
                pa = ""
            }
            if (ia) {
                ia = t(ia);
                c = c ? "," + t(c) + ")" : pa ? ")" : "";
                c = pa ? ia.indexOf(".") > -1 ? ia + t(pa) : "(" + ia + ").call($item" + c : ia;
                pa = pa ? c : "(typeof(" + ia + ")==='function'?(" + ia + ").call($item):(" + ia + "))"
            } else pa = c = aa.$1 || "null";
            K = t(K);
            return "');" + Q[ca ? "close" : "open"].split("$notnull_1")
                .join(ia ? "typeof(" + ia + ")!=='undefined' && (" + ia + ")!=null" : "true")
                .split("$1a")
                .join(pa)
                .split("$1")
                .join(c)
                .split("$2")
                .join(K ?
                K.replace(/\s*([^\(]+)\s*(\((.*?)\))?/g, function (u, x, J, P) {
                return (P = P ? "," + P + ")" : J ? ")" : "") ? "(" + x + ").call($item" + P : u
            }) : aa.$2 || "") + "_.push('"
        }) + "');}return _;")
    }

    function p(L, Q) {
        L._wrap = g(L, true, a.isArray(Q) ? Q : [T.test(Q) ? Q : a(Q)
                .html()])
            .join("")
    }

    function t(L) {
        return L ? L.replace(/\\'/g, "'")
            .replace(/\\\\/g, "\\") : null
    }

    function H(L) {
        function Q(x) {
            function J(Ga) {
                Ga += ca;
                ea = ia[Ga] = ia[Ga] || d(ea, V[ea.parent.key + ca] || ea.parent)
            }
            var P, Y = x,
                ea, va;
            if (va = x.getAttribute(da)) {
                for (; Y.parentNode && (Y = Y.parentNode)
                    .nodeType ===
                    1 && !(P = Y.getAttribute(da)););
                if (P !== va) {
                    Y = Y.parentNode ? Y.nodeType === 11 ? 0 : Y.getAttribute(da) || 0 : 0;
                    if (!(ea = V[va])) {
                        ea = ba[va];
                        ea = d(ea, V[Y] || ba[Y]);
                        ea.key = ++v;
                        V[v] = ea
                    }
                    E && J(va)
                }
                x.removeAttribute(da)
            } else if (E && (ea = a.data(x, "tmplItem"))) {
                J(ea.key);
                V[ea.key] = ea;
                Y = (Y = a.data(x.parentNode, "tmplItem")) ? Y.key : 0
            }
            if (ea) {
                for (P = ea; P && P.key != Y;) {
                    P.nodes.push(x);
                    P = P.parent
                }
                delete ea._ctnt;
                delete ea._wrap;
                a.data(x, "tmplItem", ea)
            }
        }
        var ca = "_" + E,
            aa, K, ia = {}, pa, c, u;
        pa = 0;
        for (c = L.length; pa < c; pa++) if ((aa = L[pa])
                .nodeType ===
                1) {
                K = aa.getElementsByTagName("*");
                for (u = K.length - 1; u >= 0; u--) Q(K[u]);
                Q(aa)
            }
    }

    function B(L, Q, ca, aa) {
        if (!L) return q.pop();
        q.push({
            _: L,
            tmpl: Q,
            item: this,
            data: ca,
            options: aa
        })
    }

    function D(L, Q, ca) {
        return a.tmpl(a.template(L), Q, ca, this)
    }

    function I(L, Q) {
        var ca = L.options || {};
        ca.wrapped = Q;
        return a.tmpl(a.template(L.tmpl), L.data, ca, L.item)
    }

    function R(L, Q) {
        var ca = this._wrap;
        return a.map(a(a.isArray(ca) ? ca.join("") : ca)
            .filter(L || "*"), function (aa) {
            if (Q) aa = aa.innerText || aa.textContent;
            else {
                var K;
                if (!(K = aa.outerHTML)) {
                    K =
                        document.createElement("div");
                    K.appendChild(aa.cloneNode(true));
                    K = K.innerHTML
                }
                aa = K
            }
            return aa
        })
    }

    function S() {
        var L = this.nodes;
        a.tmpl(null, null, null, this)
            .insertBefore(L[0]);
        a(L)
            .remove()
    }
    var W = a.fn.domManip,
        da = "_tmplitem",
        T = /^[^<]*(<[\w\W]+>)[^>]*$|\{\{\! /,
        V = {}, ba = {}, qa, m = {
            key: 0,
            data: {}
        }, v = 0,
        E = 0,
        q = [];
    a.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (L, Q) {
        a.fn[L] = function (ca) {
            var aa = [];
            ca = a(ca);
            var K, ia, pa;
            K = this.length === 1 &&
                this[0].parentNode;
            qa = V || {};
            if (K && K.nodeType === 11 && K.childNodes.length === 1 && ca.length === 1) {
                ca[Q](this[0]);
                aa = this
            } else {
                ia = 0;
                for (pa = ca.length; ia < pa; ia++) {
                    E = ia;
                    K = (ia > 0 ? this.clone(true) : this)
                        .get();
                    a(ca[ia])[Q](K);
                    aa = aa.concat(K)
                }
                E = 0;
                aa = this.pushStack(aa, L, ca.selector)
            }
            ca = qa;
            qa = null;
            a.tmpl.complete(ca);
            return aa
        }
    });
    a.fn.extend({
        tmpl: function (L, Q, ca) {
            return a.tmpl(this[0], L, Q, ca)
        },
        tmplItem: function () {
            return a.tmplItem(this[0])
        },
        template: function (L) {
            return a.template(L, this[0])
        },
        domManip: function (L, Q,
            ca) {
            if (L[0] && a.isArray(L[0])) {
                for (var aa = a.makeArray(arguments), K = L[0], ia = K.length, pa = 0, c; pa < ia && !(c = a.data(K[pa++], "tmplItem")););
                if (c && E) aa[2] = function (u) {
                        a.tmpl.afterManip(this, u, ca)
                };
                W.apply(this, aa)
            } else W.apply(this, arguments);
            E = 0;
            qa || a.tmpl.complete(V);
            return this
        }
    });
    a.extend({
        tmpl: function (L, Q, ca, aa) {
            var K = !aa;
            if (K) {
                aa = m;
                L = a.template[L] || a.template(null, L);
                ba = {}
            } else if (!L) {
                L = aa.tmpl;
                V[aa.key] = aa;
                aa.nodes = [];
                aa.wrapped && p(aa, aa.wrapped);
                return a(g(aa, null, aa.tmpl(a, aa)))
            }
            if (!L) return [];
            if (typeof Q ===
                "function") Q = Q.call(aa || {});
            ca && ca.wrapped && p(ca, ca.wrapped);
            Q = a.isArray(Q) ? a.map(Q, function (ia) {
                return ia ? d(ca, aa, L, ia) : null
            }) : [d(ca, aa, L, Q)];
            return K ? a(g(aa, null, Q)) : Q
        },
        tmplItem: function (L) {
            var Q;
            if (L instanceof a) L = L[0];
            for (; L && L.nodeType === 1 && !(Q = a.data(L, "tmplItem")) && (L = L.parentNode););
            return Q || m
        },
        template: function (L, Q) {
            if (Q) {
                if (typeof Q === "string") Q = n(Q);
                else if (Q instanceof a) Q = Q[0] || {};
                if (Q.nodeType) Q = a.data(Q, "tmpl") || a.data(Q, "tmpl", n(Q.innerHTML));
                return typeof L === "string" ? a.template[L] =
                    Q : Q
            }
            return L ? typeof L !== "string" ? a.template(null, L) : a.template[L] || a.template(null, T.test(L) ? L : a(L)) : null
        },
        encode: function (L) {
            return ("" + L)
                .split("<")
                .join("&lt;")
                .split(">")
                .join("&gt;")
                .split('"')
                .join("&#34;")
                .split("'")
                .join("&#39;")
        }
    });
    a.extend(a.tmpl, {
        tag: {
            tmpl: {
                _default: {
                    $2: "null"
                },
                open: "if($notnull_1){_=_.concat($item.nest($1,$2));}"
            },
            wrap: {
                _default: {
                    $2: "null"
                },
                open: "$item.calls(_,$1,$2);_=[];",
                close: "call=$item.calls();_=call._.concat($item.wrap(call,_));"
            },
            each: {
                _default: {
                    $2: "$index, $value"
                },
                open: "if($notnull_1){$.each($1a,function($2){with(this){",
                close: "}});}"
            },
            "if": {
                open: "if(($notnull_1) && $1a){",
                close: "}"
            },
            "else": {
                _default: {
                    $1: "true"
                },
                open: "}else if(($notnull_1) && $1a){"
            },
            html: {
                open: "if($notnull_1){_.push($1a);}"
            },
            "=": {
                _default: {
                    $1: "$data"
                },
                open: "if($notnull_1){_.push($.encode($1a));}"
            },
            "!": {
                open: ""
            }
        },
        complete: function () {
            V = {}
        },
        afterManip: function (L, Q, ca) {
            var aa = Q.nodeType === 11 ? a.makeArray(Q.childNodes) : Q.nodeType === 1 ? [Q] : [];
            ca.call(L, Q);
            H(aa);
            E++
        }
    })
})(jQuery);
(function () {
    $.prettyDate = {
        now: function () {
            return new Date
        },
        format: function (a) {
            function d(i, n) {
                var p = i.getTime(),
                    t = n.getTime();
                p = Math.round(Math.round(Math.abs(p - t) / 1E3) / 60);
                return p <= 1 && "1 min" || p < 45 && p + " mins" || p < 90 && "1 hour" || p < 1440 && Math.round(p / 60) + " hours" || p < 2880 && "1 day" || p < 43200 && Math.round(p / 1440) + " days" || p < 86400 && "1 month" || p < 525600 && Math.round(p / 43200) + " months" || p < 1051200 && "1 year" || "+ " + Math.round(p / 525600) + " years"
            }
            var g = new Date(a);
            if (isNaN(g.getTime())) return "Invalid date: " + a;
            else {
                a =
                    $.prettyDate.now();
                return d(g, a)
            }
        }
    }
})();
/*
 MIT Licensed
 @preserve
*/
var Throbber = function () {
    function a(B) {
        var D = {}, I;
        for (I in B) if (B.hasOwnProperty(I)) D[I] = B[I];
        return D
    }

    function d(B) {
        var D, I, R;
        if (B) if (B.nodeName) if (B.nodeName.toLowerCase() === "canvas") {
                    /\bthrobber\b/.test(B.className) || (B.className += " throbber");
                    return B
                } else {
                    D = B.childNodes;
                    for (I = D.length - 1; I >= 0; I--) {
                        R = D[I];
                        if (R.nodeName.toLowerCase() === "canvas" && /\bthrobber\b/.test(R.className)) return R
                    }
                    D = document.createElement("canvas");
                    D.className = "throbber";
                    B.appendChild(D);
                    return D
                } else return typeof B === "object" &&
                        typeof B.jquery === "string" ? B.length ? d(B[0]) : false : false;
                else return false
    }

    function g() {
        var B, D = n.active.length;
        ++p;
        if (D && p % 50 === 0) {
            for (B = D - 1; B >= 0; --B) n.active[B].isInDocument() || n.active[B].stop();
            D = n.active.length
        }
        if (D) {
            t(g);
            B = 0;
            for (D = n.active.length; B < D; ++B) {
                var I = n.active[B].options,
                    R = I.context,
                    S = void 0,
                    W = void 0,
                    da = (new Date - H) / (6E4 / n.options.rpm),
                    T = void 0;
                R.clearRect(0, 0, I.size.canvas, I.size.canvas);
                R.save();
                R.scale(I.scale, I.scale);
                R.translate(I.center.x, I.center.y);
                for (S = 0; S < I.bars; ++S) {
                    T = 1 -
                        ((I.bars - S) / I.bars + da) % 1;
                    W = 2 * S * Math.PI / I.bars;
                    W = {
                        x: I.innerRadius * Math.sin(-W),
                        y: I.innerRadius * Math.cos(-W),
                        angle: W
                    };
                    R.save();
                    R.translate(W.x, W.y);
                    R.rotate(W.angle);
                    W = I.size.barWidth;
                    var V = I.size.barHeight,
                        ba = I.context;
                    ba.fillStyle = "rgba(0, 0, 0, " + T.toFixed(3) + ")";
                    ba.beginPath();
                    ba.moveTo(W / 2, 0);
                    ba.lineTo(-W / 2, 0);
                    ba.lineTo(-W / 2, V - W / 2);
                    ba.quadraticCurveTo(-W / 2, V, 0, V);
                    ba.quadraticCurveTo(W / 2, V, W / 2, V - W / 2);
                    ba.fill();
                    R.restore()
                }
                R.restore()
            }
        } else {
            p = 0;
            H = null
        }
    }
    var i, n, p = 0,
        t, H = null;
    i = function (B) {
        this.options =
            B
    };
    i.prototype.stop = function () {
        var B;
        if (this.isActive()) {
            for (B = n.active.length - 1; B >= 0; B--) if (n.active[B] === this) {
                    n.active.splice(B, 1);
                    break
                }
            if (n.active.length === 0) H = null;
            B = this.options.context.canvas;
            B.parentNode && B.parentNode.removeChild(B);
            this.options = null
        }
    };
    i.prototype.uses = function (B) {
        return B === this.options.context.canvas
    };
    i.prototype.isActive = function () {
        return this.options !== null
    };
    i.prototype.isInDocument = function () {
        for (var B = this.options.context.canvas; B = B.parentNode;) if (B.nodeName.toLowerCase() ===
                "html") return true;
        return false
    };
    n = {
        options: {
            bars: 12,
            innerRadius: 8,
            center: {
                x: 20,
                y: 20
            },
            size: {
                barWidth: 3,
                barHeight: 8,
                canvas: 40
            },
            rpm: 60
        },
        active: [],
        start: function (B, D) {
            var I = a(this.options);
            I.size = a(this.options.size);
            var R, S, W;
            if ((R = d(B)) && R.getContext) {
                S = 0;
                for (W = n.active.length; S < W; ++S) if (n.active[S].uses(R)) return n.active[S];
                if (D === "small") {
                    I.innerRadius = 3;
                    I.center = {
                        x: 10,
                        y: 10
                    };
                    I.size = {
                        barWidth: 2,
                        barHeight: 5,
                        canvas: 20
                    }
                }
                I.context = R.getContext("2d");
                I.scale = 1;
                if (window.devicePixelRatio >= 1.5) {
                    I.size.canvas *=
                        2;
                    I.scale = 2
                }
                I.context.canvas.width = I.context.canvas.height = I.size.canvas;
                I = new i(I);
                this.active.push(I);
                if (H === null) {
                    H = +new Date;
                    t(g)
                }
                return I
            }
        },
        stop: function () {
            var B = this.active[this.active.length - 1];
            B && B.stop()
        },
        stopAll: function () {
            for (var B = this.active.length - 1; B >= 0; B--) this.active[B].stop()
        },
        useLegacyAnimation: function (B) {
            var D = function (I) {
                window.setTimeout(I, 1E3 / 60)
            };
            t = B ? D : window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame ||
                window.msRequestAnimationFrame || D
        }
    };
    n.useLegacyAnimation(false);
    if (window.jQuery) window.jQuery.fn.throbber = function () {
            return this.each(function () {
                n.start(this)
            })
    };
    return n
}();
(function (a) {
    var d, g, i, n;
    g = {
        paragraphs: true,
        externalLinks: true,
        internalLinks: true,
        userLinks: true,
        whitelist: ["b", "i", "em"]
    };
    i = function (S) {
        var W, da, T, V, ba;
        V = [].slice.call(arguments, 1);
        W = 0;
        for (da = V.length; W < da; ++W) {
            T = V[W];
            for (ba in T) if (T[ba] !== void 0) S[ba] = T[ba]
        }
        return S
    };
    n = function (S) {
        return S.textContent || S.innerText || ""
    };
    var p = /\b((?:https?:\/\/|www\d{0,3}\.|(?:[a-z0-9\-]+\.)+[a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?\u00ab\u00bb\u201c\u201d\u2018\u2019]))/ig,
        t = /([a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,6})/gi,
        H = /^((?:https?:\/\/)?(?:www\.|m\.)?soundcloud\.(?:com|dev))\/?/i,
        B = /^(?:ht|f)tps?:\/\//i,
        D = /(\s|^)@([\w\-]+)/g,
        I = /(?:[ \t]*\r?\n[ \t]*){2,}/,
        R = /[ \t][ \t]+/g;
    d = function (S, W) {
        var da = i({}, g, W),
            T = document.createElement("div");
        if (typeof S !== "string") return "";
        p.lastIndex = D.lastIndex = t.lastIndex = 0;
        S = S.replace(/<\/?p>/g, "\n\n")
            .replace(/<br>/g, "\n");
        if (da.whitelist && da.whitelist.length) S = S.replace(RegExp("<(\\/?)(" + da.whitelist.join("|") + ")>", "g"), "[$1$2]");
        T.innerHTML = S.replace(/<(?:.|\n)*?>/gm, "");
        S = n(T)
            .trim()
            .replace(R, " ")
            .replace(/&|<|>/g, function (V) {
            return V === "<" ? "&lt;" : V === ">" ? "&gt;" : "&amp;"
        });
        if (da.whitelist && da.whitelist.length) S = S.replace(RegExp("\\[(\\/?)(" + da.whitelist.join("|") + ")\\]", "g"), "<$1$2>");
        if (da.internalLinks || da.externalLinks) {
            S = S.replace(p, function (V) {
                var ba;
                if (da.internalLinks && H.test(V)) return '<a href="' + V.replace(H, "/") + '">' + V + "</a>";
                else if (da.externalLinks) {
                    ba = B.test(V);
                    return '<a href="' + (ba ? V : "http://" + V) + '" rel="nofollow" target="_blank">' +
                        V + "</a>"
                } else return V
            });
            if (da.externalLinks) S = S.replace(t, '<a href="mailto:$1">$1</a>')
        }
        if (da.userLinks) S = S.replace(D, '$1@<a href="/$2">$2</a>');
        return S = da.paragraphs ? S.split(I)
            .map(function (V) {
            V = V.trim()
                .replace(/\r?\n/g, "<br>");
            return "<p>" + V + "</p>"
        })
            .join("") : S.replace(/[\r\n]+/g, " ")
            .replace(R, " ")
    };
    d.withDefaults = function (S) {
        var W = i({}, g, S);
        return function (da, T) {
            var V = T ? i({}, T, W) : W;
            return d.call(this, da, V)
        }
    };
    if (typeof module !== "undefined" && module.exports) module.exports = d;
    else {
        a.SC = a.SC || {};
        a.SC.usertext = d
    }
})(this);
(function () {
    var a = {
        getPurchaseTitle: function (d, g) {
            var i = d.purchase_url,
                n = this._shops;
            if (i && !d.purchase_title) {
                d.purchase_title = g || "Buy";
                for (var p in n) if (n["Getty Images"].test(i)) d.purchase_title = "License";
                    else if (n[p].test(i)) {
                    d.purchase_title += " on " + p;
                    break
                }
            }
            return d.purchase_title
        },
        _shops: {
            Amazon: /amazon\.(co\.(jp|uk)|com|de)/,
            Beatport: /beatport\.(com|it)/,
            iTunes: /apple\.com/,
            Juno: /juno(\.co\.uk|download\.com)/,
            "Digital Tunes": /digital-tunes\.net/,
            'zero"': /zero-inch\.com/,
            whatpeopleplay: /whatpeopleplay\.com/,
            DJdownload: /djdownload\.com/,
            Minno: /soundra\.in/,
            Flattr: /flattr\.com/,
            Ganxy: /ganxy\.com/,
            "Getty Images": /soundcloud\.(.*-)?gettyimages\.com/
        }
    };
    if (typeof module !== "undefined" && module.exports) module.exports = a;
    else {
        window.SC = window.SC || {};
        window.SC.OnlineStores = a
    }
})();
var xt1 = "",
    xtfirst = false,
    xtcode = "",
    xt46 = "1",
    xt50 = "1",
    xt48 = "",
    xt54 = false,
    xt58 = false,
    xtdocl = false,
    xtud = "undefined",
    xt2 = "1",
    xt3 = 3650,
    xtkwv = "xtmc",
    xtkwp = "xtnp",
    xtadch = [],
    xt4 = [];
xt4.sec = "20";
xt4.rss = "20";
xt4.epr = "20";
xt4.erec = "20";
xt4.adi = "20";
xt4.adc = "20";
xt4.al = "20";
xt4.es = "20";
xt4.ad = "20";
var xtoid = [],
    xtnop = true,
    xtkey = false,
    xt49 = null,
    xt5 = 30,
    xw = window,
    xd = document,
    xtg = navigator,
    xtv = xw.xtczv != null ? "42004-" + xw.xtczv : "42004";
xt1 = xw.xtdmc ? ";domain=" + xw.xtdmc : xt1 != "" ? ";domain=" + xw.xt1 : "";
var xt6 = xw.xtnv != null ? xw.xtnv : xd,
    xt7 = xw.xtsdi != null ? xw.xtsdi : xw.xtsd != null ? xw.xtsd + ".xiti.com/hit.xiti" + (xtfirst ? "f" : "") : (xd.location.protocol == "https:" ? "https://logs1252" : "http://logc252") + ".xiti.com/hit.xiti" + (xtfirst ? "f" : ""),
    xt36 = xw.xtsts != null ? xw.xtsts : 0,
    xt37 = "";
if (xt54) {
    var xturl = xt6 && xt6.location && xt6.location.href || xw.location.href;
    xt37 = (xt37 = xtestr(xturl, /#.*/, 1)) ? "&sta=" + encodeURIComponent(xtclURL(xt37)) : ""
}
var xt38 = xw.xtcustom != null ? xtserial(xw.xtcustom) : "",
    xt8 = xw.xtsite != null ? xw.xtsite : 0,
    xt9 = xw.xtn2 != null ? "&s2=" + xw.xtn2 : "",
    xt8b = (xt8 == 0 ? "" : "s=" + xt8) + (xt36 == 0 ? "" : xt8 == 0 ? "sts=" + xt36 : "&sts=" + xt36),
    xtp = xw.xtpage != null ? xw.xtpage : "",
    xt10 = xw.xto_force ? xw.xto_force.toLowerCase() : null,
    xt11 = xt8 == "redirect" ? true : false,
    xtdi = xw.xtdi ? "&di=" + xw.xtdi : "",
    xt12 = xw.xtidp ? "&idpays=" + xw.xtidp : "",
    xt13 = xw.xtidprov ? "&idprov=" + xw.xtidprov : "",
    xtm = xw.xtparam != null ? xw.xtparam : "";
xt46 = typeof xw.xtnopage != "undefined" && xw.xtnopage == "1" ? "0" : xt46;
xt50 = typeof xw.xtergo != "undefined" && xw.xtergo == "0" ? "0" : xt50;
var xtclzone = typeof xw.scriptOnClickZone != "undefined" && xt50 == "1" ? xw.scriptOnClickZone : 0,
    xt15 = xw.xt_orderid != null ? xw.xt_orderid : "",
    xt17 = xw.xtidcart != null ? xw.xtidcart : "",
    xt44 = xw.xtprod_load != null ? "&pdtl=" + xw.xtprod_load : "",
    xt47 = xw.xtcode != "" ? "&code=" + xw.xtcode : "";
if (xw.addEventListener) xw.addEventListener("unload", function () {}, false);
else xw.attachEvent && xw.attachEvent("onunload", function () {}); if (xd.addEventListener) {
    xd.addEventListener("keydown", function () {
        xtkey = true
    }, false);
    xd.addEventListener("keyup", function () {
        xtkey = false
    }, false)
} else if (xd.attachEvent) {
    xd.attachEvent("onkeydown", function () {
        xtkey = true
    });
    xd.attachEvent("onkeyup", function () {
        xtkey = false
    })
}
var xt18 = xw.roimt && xtm.indexOf("&roimt", 0) < 0 ? "&roimt=" + xw.roimt : "",
    xtmc = xtm.indexOf("&mc=", 0) < 0 ? xw.xtmc ? "&mc=" + xw.xtmc : xtf3(xtkwv) ? "&mc=" + xtf3(xtkwv) : xtf3("xtmc") ? "&mc=" + xtf3("xtmc") : "" : "",
    xtcr = xtf3("xtcr") ? "&mcrg=" + xtf3("xtcr") : "",
    xtac = xw.xtac && xtm.indexOf("&ac=", 0) < 0 ? "&ac=" + xw.xtac : "",
    xtat = xw.xtat && xtm.indexOf("&at=", 0) < 0 ? "&at=" + xw.xtat : "",
    xtan = xw.xtan && xtm.indexOf("&an=", 0) < 0 ? "&an=" + xw.xtan : "",
    xtnp = xtm.indexOf("&np=", 0) < 0 ? xw.xtnp ? "&np=" + xw.xtnp : xtf3(xtkwp) ? "&np=" + xtf3(xtkwp) : xtf3("xtnp") ? "&np=" +
        xtf3("xtnp") : "" : "",
    xt19 = xw.xtprm != null && xtm.indexOf("&x", 0) < 0 ? xw.xtprm : "";
xtm += xt18 + xtmc + xtcr + xtac + (xtan != "" ? xtan : xtat) + xtnp + xt19 + xt37;
var xt20 = "";
try {
    xt20 = top.document.referrer
} catch (e$$35) {
    try {
        xt20 = xt6.referrer
    } catch (e$$36) {}
}
var xts = screen,
    xt21 = new Date,
    xt22 = xt21.getTime() / 36E5;

function xtserial(a) {
    var d = typeof a;
    if (d != "object" || a === null) {
        if (d == "string") a = encodeURIComponent('"' + a + '"');
        return String(a)
    } else {
        var g, i, n = [],
            p = a && a.constructor == Array;
        for (g in a) {
            i = a[g];
            d = typeof i;
            if (d == "string") i = encodeURIComponent('"' + i + '"');
            else if (d == "object" && i !== null) i = xtserial(i);
            n.push((p ? "" : encodeURIComponent('"' + g + '":')) + String(i))
        }
        return (p ? "[" : "{") + String(n) + (p ? "]" : "}")
    }
}

function xtclURL(a) {
    return a.replace(/<|>|%3C|%3E/ig, "")
}

function xtf1(a, d) {
    d = d != null && d != xtud ? d : "0";
    var g = RegExp("(?:^| )" + a + "=([^;]+)")
        .exec(document.cookie) || null;
    if (g) {
        g = xtclURL(g[1]);
        if (d != "1") g = unescape(g)
    }
    return g
}
typeof xt_adch == "function" && xt_adch();

function xt_addchain(a, d) {
    xtvarch = d ? d : "abmv";
    itemp = !xtadch[xtvarch] ? 0 : xtadch[xtvarch];
    itemp++;
    xtm += "&" + xtvarch + "" + itemp + "=" + a;
    xtadch[xtvarch] = itemp
}

function wck(a, d, g, i, n) {
    d = n == 0 ? d : escape(d);
    xd.cookie = a + "=" + d + ";expires=" + g.toGMTString() + ";path=/" + i
}

function xtf3(a, d, g) {
    var i = xt6.location.href;
    d = d == null || d == xtud ? xtclURL(i.toLowerCase()
        .replace(/%3d/g, "=")) : d;
    if (d.indexOf(a + "=") > 0) {
        d = d.substr(1);
        d = d.substr(d.indexOf(a + "="));
        if (g != 1) d = decodeURIComponent(d);
        if (i = d.match(/(\[[^\]]*\])/g)) for (var n = "", p = 0, t = i.length; p < t; p++) {
                n = i[p].substring(1, i[p].length - 1);
                d = d.replace(n, encodeURIComponent(n))
        }
        i = d.search(/&.[^&]+=/gi);
        if (i == -1) i = d.length;
        if ((a == "xtor" || a == "xto") && d.charAt(i) == "#" || d.charAt(i - 1) == "#")--i;
        return g == 1 ? decodeURIComponent(d.substring(d.indexOf("=") +
            1, i)) : d.substring(d.indexOf("=") + 1, i)
            .replace("&", "%26")
    } else return null
}

function xt_med(a, d, g, i, n, p, t, H) {
    xt_ajout = a == "F" && (i == null || i == xtud) ? "" : a == "M" ? "&a=" + i + "&m1=" + n + "&m2=" + p + "&m3=" + t + "&m4=" + H : "&clic=" + i;
    xtf4(a, "&s2=" + d + "&p=" + g + xt_ajout, n, p)
}
if (xtfirst = xtg.userAgent.indexOf("Safari") != -1 && xtg.userAgent.indexOf("Chrome") < 0 || xtg.userAgent.indexOf("iPhone") != -1 || xtg.userAgent.indexOf("iPod") != -1 || xtg.userAgent.indexOf("iPad") != -1 || xtfirst) {
    var xt40 = xw.xtidc ? xw.xtidc : xtf1("xtidc");
    if (xt40 == null) {
        xt40 = Math.floor(Math.random() * 999999);
        var xtane = xt21.getYear();
        if (xtane < 100) xtane += 2E3;
        if (xtane > 100 && xtane < 2E3) xtane += 1900;
        var xt41 = f_nb(xtane) + "" + f_nb(xt21.getMonth()) + "" + f_nb(xt21.getDate()) + "" + f_nb(xt21.getHours()) + "" + f_nb(xt21.getMinutes()) + "" +
            f_nb(xt21.getSeconds());
        xt40 = xt41 + "" + xt40
    }
    var xtdrc = new Date;
    xtdrc.setTime(xtdrc.getTime() + 31536E7);
    wck("xtidc", xt40, xtdrc, xt1, 1);
    xt42 = xtf1("xtidc");
    xt40 += xt42 == null || xt42 != xt40 ? "-NO" : ""
}

function xt_ad(a, d, g) {
    xtf4("AT", "&atc=" + a + "&type=AT&patc=" + xtp + "&s2atc=" + xw.xtn2, d, g)
}

function xt_adc(a, d, g, i) {
    xtf4("AT", "&atc=" + d + "&type=AT&patc=" + xtp + "&s2atc=" + xw.xtn2);
    d = null;
    if (a.nodeName != "A") for (a = a.parentNode; a;) {
            if (a.nodeName == "A") {
                d = a;
                break
            }
            a = a.parentNode
    } else d = a; if (d) {
        d.target = d.target || "_self";
        if (g) {
            d.href = g;
            d.target = i ? "_blank" : "_self"
        }
        if (!xtkey) if (d.target.toLowerCase() == "_self") {
                setTimeout('self.location.href="' + d.href + '"', 500);
                return false
            } else if (d.target.toLowerCase() == "_top") {
            setTimeout('top.location.href="' + d.href + '"', 500);
            return false
        } else if (d.target.toLowerCase() ==
            "_parent") {
            setTimeout('parent.location.href="' + d.href + '"', 500);
            return false
        }
    } else if (g) i ? setTimeout('(xw.open("' + g + '","_blank")).focus();', 500) : setTimeout('self.location.href="' + g + '"', 500);
    xtkey = false;
    return true
}

function xt_click(a, d, g, i, n, p, t) {
    xt_ajout = d == "F" && (n == null || n == xtud) ? "" : "&clic=" + n;
    xtf4(d, "&s2=" + g + "&p=" + i + xt_ajout);
    d = null;
    if (a.nodeName != "A") for (a = a.parentNode; a;) {
            if (a.nodeName == "A") {
                d = a;
                break
            }
            a = a.parentNode
    } else d = a; if (d) {
        d.target = d.target || "_self";
        if (p) {
            d.href = p;
            d.target = t ? "_blank" : "_self"
        }
        if (!xtkey) if (d.target.toLowerCase() == "_self") {
                setTimeout('self.location.href="' + d.href + '"', 500);
                return false
            } else if (d.target.toLowerCase() == "_top") {
            setTimeout('top.location.href="' + d.href + '"', 500);
            return false
        } else if (d.target.toLowerCase() ==
            "_parent") {
            setTimeout('parent.location.href="' + d.href + '"', 500);
            return false
        }
    } else if (p) t ? setTimeout('(xw.open("' + p + '","_blank")).focus();', 500) : setTimeout('self.location.href="' + p + '"', 500);
    xtkey = false;
    return true
}

function xt_form(a, d, g, i, n, p) {
    xt_ajout = d == "F" && (n == null || n == xtud) ? "" : "&clic=" + n;
    xtf4(d, "&s2=" + g + "&p=" + i + xt_ajout);
    p && setTimeout(function () {
        a.submit()
    }, 500);
    return false
}

function xt_rm(a, d, g, i, n, p, t, H, B, D, I, R, S, W) {
    var da = "&p=" + g + "&s2=" + d + "&type=" + a + "&a=" + i + "&m5=" + I + "&m6=" + R;
    da += n != null && n != "0" ? "&" + n : "";
    da += t != null && i != "pause" && i != "stop" ? "&m1=" + t + "&" + H + "&m3=" + B + "&m4=" + D + "&m7=" + S + "&m8=" + W + "&prich=" + xtp + "&s2rich=" + xw.xtn2 : "";
    da += p != null && p != "0" && t != null ? "&rfsh=" + p : "";
    xtf4(a, da);
    if (p != null && p != "0" && (i == "play" || i == "play&buf=1" || i == "refresh")) {
        xtrmdl = Math.floor(p) > 1500 ? 15E5 : Math.floor(p) < 5 ? 5E3 : Math.floor(p) * 1E3;
        xtoid[a] = xw.setTimeout("xt_rm('" + a + "','" + d + "','" + g + "','refresh','0','" +
            p + "',null,'" + H + "','" + B + "','" + D + "','" + I + "','" + R + "')", xtrmdl)
    } else if ((i == "pause" || i == "stop") && xw.xtoid != null) xw.clearTimeout(xtoid[a])
}

function xtf4(a, d, g, i) {
    if ((xtclzone == 0 || xtclzone == 3 || a != "C") && a != "P") {
        if (d.indexOf("&ati=") > -1) {
            var n = xtf3("ati", d, 1) || "";
            if (n.length > 1500) {
                d = d.replace("&ati=" + n, "");
                xt_ParseUrl3(Xt_id + xt8b + d + "&type=AT" + (xtfirst ? "&idclient=" + xt40 : ""), "&ati=" + n.replace(/&/g, "%26"), 1, 1, "&ati=", ",")
            }
        }
        if (xtnop && xt46 == "0" && a == "F") {
            Xt_param = Xt_param.replace("&p=" + xtf3("p", Xt_param), "");
            Xt_param = Xt_param.replace("&s2=" + xtf3("s2", Xt_param), "");
            xt_ParseUrl(Xt_id, Xt_param + d + (xtfirst ? "&idclient=" + xt40 : ""), "&ref=" + Xt_r.replace(/&/g,
                "$"), "1");
            xtnop = false
        } else {
            n = new Date;
            d = xt8b + d + "&hl=" + n.getHours() + "x" + n.getMinutes() + "x" + n.getSeconds() + (xtfirst ? "&idclient=" + xt40 : "");
            if (parseFloat(xtg.appVersion) >= 4) try {
                    d += "&r=" + xts.width + "x" + xts.height + "x" + xts.pixelDepth + "x" + xts.colorDepth
            } catch (p) {}
            xt_ParseUrl(Xt_id, d + (xtfirst ? "&idclient=" + xt40 : ""), "", "1")
        }
    }
    if (g != null && g != xtud && a != "M") if (i == "" || i == null) xd.location = g;
        else {
            xfen = window.open(g, "xfen", "");
            xfen.focus()
        }
}

function f_nb(a) {
    a -= Math.floor(a / 100) * 100;
    return a < 10 ? "0" + a : a
}
var xtidpg = f_nb(xt21.getHours()) + "" + f_nb(xt21.getMinutes()) + "" + f_nb(xt21.getSeconds()) + "" + xt_rd(7),
    xt23 = 0,
    xt16 = "",
    xt43 = 0;

function xt_addProduct(a, d, g, i, n, p) {
    xt23++;
    xt16 += "&pdt" + xt23 + "=";
    xt16 += a ? a + "::" : "";
    xt16 += d ? d : "";
    xt16 += g ? "&qte" + xt23 + "=" + g : "";
    xt16 += i ? "&mt" + xt23 + "=" + i : "";
    xt16 += n ? "&dsc" + xt23 + "=" + n : "";
    xt16 += p ? "&pcode" + xt23 + "=" + p : ""
}

function xt_rd(a) {
    return Math.floor(Math.random() * Math.pow(10, a))
}

function xt_addProduct_v2(a, d, g, i, n, p, t, H, B) {
    xt23++;
    xt16 += "&pdt" + xt23 + "=";
    xt16 += a ? a + "::" : "";
    xt16 += d ? d : "";
    xt16 += g ? "&qte" + xt23 + "=" + g : "";
    xt16 += i ? "&mt" + xt23 + "=" + i : "";
    xt16 += n ? "&mtht" + xt23 + "=" + n : "";
    xt16 += p ? "&dsc" + xt23 + "=" + p : "";
    xt16 += t ? "&dscht" + xt23 + "=" + t : "";
    xt16 += B ? "&roimt" + xt23 + "=" + B : "";
    xt16 += H ? "&pcode" + xt23 + "=" + H : ""
}

function xt_addProduct_load(a, d, g) {
    if (d) {
        xt43++;
        xt44 += xt43 == 1 ? "&pdtl=" : "|";
        xt44 += a ? a + "::" : "";
        xt44 += d;
        xt44 += g ? ";" + g : ""
    }
}
if (typeof xt_cart == "function") xt_cart();
else xt16 = "";

function xt_ParseUrl(a, d, g, i) {
    var n = [];
    if (d.length > 0) {
        var p = 1600 - g.length,
            t = 0,
            H = 0;
        H = "";
        for (var B = 0; d.length > p && H != d && B == 0;) {
            H = d;
            var D = "&pdt";
            if (d.lastIndexOf(D, p) <= 0) if (d.lastIndexOf("&", p) <= 0) B = 1;
                else D = "&";
            if (B == 1) n[t] = d.substring(0, 1600) + "&mherr=1";
            else {
                n[t] = d.substring(0, d.lastIndexOf(D, p));
                d = d.substring(d.lastIndexOf(D, p), d.length);
                t++;
                p = 1600
            }
        }
        if (B == 0) {
            n[t] = d;
            if (xt38 != "") if (5 + xt38.length + d.length < p) n[t] += "&stc=" + xt38;
                else {
                    t++;
                    for (xt38 = "&stc=" + xt38; xt38.length > p && H != xt38;) {
                        H = xt38;
                        D = ",";
                        if (xt38.lastIndexOf(D,
                            p) <= 5) B = 1;
                        if (B == 1) n[t] = xt38.substring(0, 1600) + "&mherr=1";
                        else {
                            n[t] = xt38.substring(0, xt38.lastIndexOf(D, p));
                            xt38 = "&stc=" + xt38.substring(xt38.lastIndexOf(D, p), xt38.length);
                            t++;
                            p = 1600
                        }
                    }
                    if (B == 0) n[t] = xt38
                }
        }
        for (H = 0; H <= t; H++) {
            if (t > 0) n[H] += "&mh=" + (H + 1) + "-" + (t + 1) + "-" + xtidpg;
            if (H > 0) n[H] = xt15 != "" || xt17 != "" ? xt8b + "&cmd=" + xt15 + "&idcart=" + xt17 + n[H] : xt8b + n[H];
            else n[H] += g; if (i == "" || i == null) xd.write('<img width="1" height="1" src="' + a + n[H] + '">');
            else if (i == "1") {
                var I = new Image;
                I.src = a + n[H];
                I.onload = function () {
                    I.onload =
                        null
                }
            }
        }
    }
}

function xt_ParseUrl3(a, d, g, i, n, p, t) {
    t || (t = xtidpg.substring(0, 6) + xt_rd(8));
    var H = new Image,
        B = "&mh=" + g + "-" + i + "-" + t;
    if (d.length > 1500) {
        var D = d.split(RegExp("[" + p + "]", "gi")),
            I = "";
        B = D[0].length;
        for (var R = 0; B < 1500 && R < D.length;) {
            I += D[R] + p;
            if (R < D.length - 1) B += D[R + 1].length + 1;
            R += 1
        }
        i = i == 1 ? Math.ceil(d.length / 1500) : i;
        B = "&mh=" + g + "-" + i + "-" + t;
        if (I != "") {
            H.src = a + "&idp=" + t + B + I;
            H.onload = function () {
                H.onload = null
            };
            d = n;
            for (I = R; I < D.length; I++) d += D[I] + (I == D.length - 1 ? "" : p);
            xt_ParseUrl3(a, d, g + 1, i, n, p, t)
        } else {
            H.src = a + "&idp=" +
                t + B + d.substring(0, 1500) + "&mherr=1";
            H.onload = function () {
                H.onload = null
            }
        }
    } else if (d.length > n.length) {
        H.src = g == 1 ? a + "&idp=" + t + d : a + "&idp=" + t + B + d;
        H.onload = function () {
            H.onload = null
        }
    }
}

function xtestr(a, d, g) {
    return (a = a.match(d)) && a[g - 1]
}

function xtLhit() {
    if (!xtpre && xtone || !xd.webkitHidden && xtone) {
        xt_ParseUrl(Xt_id, Xt_param + (xtfirst ? "&idclient=" + xt40 : ""), "&ref=" + Xt_r.replace(/&/g, "$"), xt46);
        if (xt44 != "") xt_ParseUrl3(Xt_id + xt8b + "&p=" + xtp + (xtfirst ? "&idclient=" + xt40 : "") + (xw.xt_pageID ? "&pid=" + xw.xt_pageID + "&pchap=" + (xw.xt_chap || "") + "&pidt=" + (xw.xt_pageDate || "") : "") + "&type=PDT" + xthl, xt44, 1, 1, "&pdtl=", "|");
        if (xtati.length > 1500) xt_ParseUrl3(Xt_id + xt8b + "&p=" + xtp + "&s2=" + xw.xtn2 + "&type=AT" + (xtfirst ? "&idclient=" + xt40 : ""), "&ati=" + xtati.replace(/&/g,
                "%26"), 1, 1, "&ati=", ",");
        (function () {
            if (typeof xtscript != "undefined") {
                var a = document.createElement("script");
                a.type = "text/javascript";
                a.async = true;
                a.src = xtscript;
                (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0] || document.getElementsByTagName("script")[0].parentNode)
                    .insertBefore(a, null)
            }
        })();
        xtone = false
    }
}
if (xt8 != 0 || xt36 != 0 || xt11) {
    if (xt48 != "") {
        var xtvid = xtf1("xtvid");
        if (!xtvid) xt49 = xtvid = xt21.getTime() + "" + xt_rd(6);
        var xtexp = new Date;
        xtexp.setMinutes(xtexp.getMinutes() + 30);
        wck("xtvid", xtvid, xtexp, "", 1)
    }
    var xtpm = "xtor",
        xtpmd = "xtdate",
        xtpmc = "xtocl",
        xtpan = "xtan",
        xtpat = "xtat",
        xtpant = "xtant",
        xt24 = xtf3("xtor"),
        xtdtgo = xtf3("xtdt"),
        xt25 = xtf3("xtref"),
        xt26 = xtf3("xtan"),
        xt55 = xtf3("xtat"),
        xt27 = xtf3("an", xtm),
        xt56 = xtf3("at", xtm),
        xt28 = xtf3("ac", xtm),
        cookie_xtpmc = xtf1(xtpmc),
        cookie_xtgo = xtf1("xtgo"),
        cookie_xtord =
            xtf1("xtord"),
        cookie_xtvrn = xtf1("xtvrn"),
        xtocl = cookie_xtpmc != null ? cookie_xtpmc : "$",
        xtord = cookie_xtgo == "0" ? cookie_xtord : null,
        xtgord = cookie_xtgo != null ? cookie_xtgo : "0",
        xtvrn = cookie_xtvrn != null ? cookie_xtvrn : "$",
        xtgmt = xt21.getTime() / 6E4,
        xtgo = xtdtgo != null ? xtgmt - xtdtgo < 30 && xtgmt - xtdtgo >= 0 ? "2" : "1" : xtgord,
        xtpgt = xtgord == "1" ? "&pgt=" + cookie_xtord : xtgo == "1" && xt24 != null ? "&pgt=" + xt24 : "",
        xto = xt10 != null ? xt10 : xt24 != null && xtgo == "0" ? xt24 : !xt11 ? xtord : null;
    xto = xtocl.indexOf("$" + xto + "$") < 0 || xtocl == "$" ? xto : null;
    var xtock =
        xtgo == "0" ? xto : xtgord == "2" ? cookie_xtord : xtgo == "2" ? xt24 : null;
    if (xtock != null) {
        tmpxto = xtock.substring(0, xtock.indexOf("-"));
        var xtdrm = xt4[tmpxto]
    } else xtdrm = "1"; if (xtdrm == null || xtdrm == xtud) xtdrm = xt4.ad;
    if (xt26 == null && !xt11) xt26 = xtf1("xtanrd");
    if (xt55 == null && !xt11) xt55 = xtf1("xtatrd");
    var xtanc = xtf1(xtpan),
        xtattc = xtf1(xtpat),
        xtanct = xtf1(xtpant),
        xtxp = new Date,
        xt29 = new Date,
        xt30 = new Date;
    xt11 ? xtxp.setTime(xtxp.getTime() + xt5 * 1E3) : xtxp.setTime(xtxp.getTime() + xtdrm * 864E5);
    xt30.setTime(xt30.getTime() + 18E5);
    xt29.setTime(xt29.getTime() +
        xt3 * 864E5);
    var xt31 = xt26 != null ? xt26.indexOf("-") : 0,
        xt57 = xt55 != null ? xt55.indexOf("-") : 0,
        xtan2 = xt27 != null ? "" : xt26 != null && xt31 > 0 ? "&ac=" + xt26.substring(0, xt31) + "&ant=0&an=" + xt26.substring(xt31 + 1, xt26.length) : xtanc != null ? "&anc=" + xtanc + "&anct=" + xtanct : "",
        xtat2 = xt56 != null ? "" : xt55 != null && xt57 > 0 ? "&ac=" + xt55.substring(0, xt57) + "&ant=0&at=" + xt55.substring(xt57 + 1, xt55.length) : xtattc != null ? "&attc=" + xtattc + "&anct=" + xtanct : "",
        xt32 = xtvrn.indexOf("$" + xt8 + "$") < 0 ? "&vrn=1" : "",
        xt35 = xtf3("xtatc") != null && xtf3("atc", xtm) ==
            null ? "&atc=" + xtf3("xtatc") : "";
    xt32 != "" && wck("xtvrn", xtvrn + xt8 + "$", xt29, xt1, 0);
    xt32 += xto == null ? "" : "&xto=" + xto;
    xt32 += (xtan2 != "" ? xtan2 : xtat2) + xtpgt + xt35;
    if (xt27 != null) {
        wck(xtpan, xt28 + "-" + xt27, xt29, xt1, 1);
        wck(xtpant, "1", xt29, xt1, 1)
    } else if (xt26 != null && xtanct != "1") {
        wck(xtpan, xt26, xt29, xt1, 1);
        wck(xtpant, "0", xt29, xt1, 1)
    }
    if (xt56 != null) {
        wck(xtpat, xt28 + "-" + xt56, xt29, xt1, 1);
        wck(xtpant, "1", xt29, xt1, 1)
    } else if (xt55 != null && xtanct != "1") {
        wck(xtpat, xt55, xt29, xt1, 1);
        wck(xtpant, "0", xt29, xt1, 1)
    }
    var xtor = xtf1(xtpm),
        xtor_duree =
            xtf1(xtpmd),
        xtdate2 = xtor_duree != null ? new Date(xtor_duree) : new Date,
        xt34 = xtdate2.getTime() / 36E5,
        xtecart = Math.floor(xt22 - xt34) >= 0 ? Math.floor(xt22 - xt34) : 0;
    xt32 += xtor == null ? "" : "&xtor=" + xtor + "&roinbh=" + xtecart;
    var xt33 = "",
        Xt_r = xt25 != null ? xt25.replace(/[<>]/g, "") : xtf1("xtref");
    if (Xt_r == null) Xt_r = xt20.replace(/[<>]/g, "");
    if (Xt_r != null) Xt_r = Xt_r.substring(0, 1E3);
    if (xt11) {
        wck("xtgo", xtgo, xtxp, xt1, 1);
        xt24 != null && wck("xtord", xt24, xtxp, xt1, 1);
        xt26 != null && wck("xtanrd", xt26, xtxp, xt1, 1);
        xt55 != null && wck("xtatrd",
            xt55, xtxp, xt1, 1);
        Xt_r != "" && wck("xtref", Xt_r.replace(/&/g, "$"), xtxp, xt1, 0);
        if (xw.xtloc != null) xt6.location = xw.xtloc
    } else {
        if (xtock != null && (xtocl.indexOf("$" + escape(xtock) + "$") < 0 || xtocl == "$")) wck(xtpmc, xtocl + xtock + "$", xt30, xt1, 1);
        xt33 += xtg.javaEnabled() ? "&jv=1" : "&jv=0";
        var xtnav = xtg.appName + " " + xtg.appVersion,
            xtIE = xtnav.indexOf("MSIE");
        if (xtIE >= 0) {
            var xtvers = parseInt(xtnav.substr(xtIE + 5));
            xtIE = true
        } else {
            xtvers = parseFloat(xtg.appVersion);
            xtIE = false
        }
        var xtnet = xtnav.indexOf("Netscape") >= 0,
            xtmac = xtnav.indexOf("Mac") >=
                0,
            xtOP = xtg.userAgent.indexOf("Opera") >= 0;
        if (xtIE && xtvers >= 5 && !xtmac && !xtOP && !xt11) {
            try {
                xd.body.addBehavior("#default#clientCaps")
            } catch (e$$38) {}
            var xtconn = "&cn=" + xd.body.connectionType;
            xtconn += "&ul=" + xd.body.UserLanguage;
            try {
                xd.body.addBehavior("#default#homePage")
            } catch (e$$39) {}
            var xthome = "";
            try {
                xthome = xd.body.isHomePage(location.href) ? "&hm=1" : "&hm=0"
            } catch (e$$40) {}
            var xtresr = "&re=" + xd.body.offsetWidth + "x" + xd.body.offsetHeight
        } else {
            xthome = xtconn = "";
            xtresr = xtvers >= 5 ? "&re=" + xw.innerWidth + "x" + xw.innerHeight :
                ""
        }
        var xtlang = xtnet && xtvers >= 4 || xtOP ? "&lng=" + xtg.language : xtIE && xtvers >= 4 && !xtOP ? "&lng=" + xtg.userLanguage : "";
        wck("xtord", "", xt21, xt1, 1);
        if (xtock != null) if (xtor == null || xt2 == "1") {
                wck(xtpm, xtock, xtxp, xt1, 1);
                wck(xtpmd, xt21, xtxp, xt1, 1)
            }
        var xthl = "&hl=" + xt21.getHours() + "x" + xt21.getMinutes() + "x" + xt21.getSeconds(),
            xt45 = xtdocl ? "&docl=" + encodeURIComponent(xt6.location.href.replace(/&/g, "#ec#")) : "",
            Xt_param = xt8b + xt9 + "&p=" + xtp + xthl + xtdi + xt12 + xt13 + xt32 + xt45 + xt47 + xtm + xtconn + xthome + xtlang + "&vtag=" + xtv + "&idp=" + xtidpg,
            xtvalCZ = xtf1("xtvalCZ", 1);
        if (xtvalCZ != null) {
            Xt_param += xtvalCZ;
            var xtdateo = new Date;
            xtdateo.setTime(xtdateo.getTime() - 36E5);
            wck("xtvalCZ", xtvalCZ, xtdateo, xt1, 1)
        }
        var Xt_id = xt7 + "?";
        if (xtvers >= 4) try {
                xt33 += "&r=" + xts.width + "x" + xts.height + "x" + xts.pixelDepth + "x" + xts.colorDepth
        } catch (e$$41) {}
        var xtide = xtf1("xtide");
        if (xtock != null) switch (tmpxto.toLowerCase()) {
                case "erec":
                case "epr":
                case "es":
                    var xtmpide = xtestr(xtock, /(\[[^\]]*\])|([^\-]+)/g, 6);
                    if (xtmpide != null) {
                        xtide = xtmpide;
                        wck("xtide", xtide, xt29, "", 1)
                    }
        }
        Xt_param +=
            xt33 + xtresr + xt16 + (xtide != null ? "&ide=" + xtide : "");
        var Xt_i = Xt_id + Xt_param + "&ref=" + Xt_r.replace(/&/g, "$");
        if (xt49) Xt_param += "&lnk=" + xt48 + "&vid=" + xt49;
        var xtati = xtf3("ati", Xt_param, 1) || "";
        if (xtati.length > 1500) Xt_param = Xt_param.replace("&ati=" + xtati, "");
        var xtpre = false,
            xtone = true;
        if (xd.webkitVisibilityState == "prerender") {
            xtpre = true;
            xd.addEventListener("webkitvisibilitychange", xtLhit, false)
        } else xtLhit()
    }
}
if (xtclzone > 0 && typeof xtNodesload == "function") if (xt58) if (xw.addEventListener) xw.addEventListener("load", xtNodesload, false);
        else xw.attachEvent && xw.attachEvent("onload", xtNodesload);
        else xtNodesload();
window.SC = window.SC || {};
SC.extend = function (a, d, g) {
    g.type = "SC." + a;
    var i = SC,
        n = a.split(".");
    if (n.length > 1) {
        i = i[n[0]];
        a = n[1]
    }
    i[a] = d.extend(g)
};
SC.extend("Model", Backbone.Model, {
    toJSON: function () {
        var a = Backbone.Model.prototype.toJSON.apply(this, arguments);
        _.each(this.resources, function (d) {
            a[d] = this[d].toJSON()
        }, this);
        this.replaceDefaultArtwork(a);
        this.replaceDefaultAvatar(a);
        this.prepare(a);
        return a
    },
    addSharingLabel: function (a) {
        if (a.sharing === "private") {
            if (a.shared_to_count === 0) a.sharing_label = "You";
            else if (a.shared_to_count === 1) {
                a.sharing_label = "1 user";
                (new SC.Track.Permissions(a))
                    .fetch({
                    success: function (d, g) {
                        var i = g[0];
                        $(document)
                            .trigger("renderUsernameSharingLabel", [i, a])
                    }
                })
            } else a.sharing_label = a.shared_to_count + " people";
            a.shared_label_class = a.shared_to_count > 9 ? "many" : ""
        }
    },
    replaceDefaultArtwork: function (a) {
        var d = a.user || a.creator;
        SC.images.isDefault(a.artwork_url) && delete a.artwork_url;
        if (d && a.artwork_url === null && !SC.images.isDefault(d.avatar_url)) a.artwork_url = d.avatar_url
    },
    replaceDefaultAvatar: function (a) {
        SC.images.isDefault(a.avatar_url) && delete a.avatar_url
    },
    formatText: SC.usertext.withDefaults({
        whitelist: []
    }),
    prepare: $.noop
});
SC.extend("ModelContainer", SC.Model, {
    fetch: function () {
        this.trigger("change")
    }
});
SC.escapeRegex = function (a) {
    if (a) return a.replace(/\[\-[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
};
SC.Bugsense = {
    notify: function (a) {
        var d = this;
        this.notice = a;
        this.status = (this.notice && this.notice.request && this.notice.request.status)
            .toString();
        this.errors = this.notice && this.notice.request && this.notice.request.errors;
        a = this.notice.request || {
            message: "Unknown Error"
        };
        var g = this.notice.response && this.notice.response.stack;
        if (!this.errorFilters()) {
            this.defaults = {
                apiKey: SC.deploy && SC.deploy.env !== "development" ? "b934096e" : "e2861c90",
                url: "https://bugsense.appspot.com/api/errors?api_key="
            };
            if ((this.data = {
                application_environment: {
                    environment: SC.deploy && SC.deploy.env || "development",
                    appver: window.navigator.userAgent || "unknown",
                    osver: window.navigator.oscpu || "unknown"
                },
                client: {
                    name: "SC Mobile Bugsense Notifier",
                    protocol_version: 1,
                    version: "0.1"
                },
                exception: {
                    klass: d.notice.settings && d.notice.settings.modelType || "Unknown Component",
                    message: d.notice.error || a.message,
                    backtrace: d.generateBackTrace(g),
                    where: "n/a:0"
                },
                request: function () {
                    var i = {
                        remote_ip: "0.0.0.0",
                        url: window.location.href,
                        custom_data: {
                            document_referrer: d.escapeText(document.referrer),
                            http_status: d.escapeText(this.status),
                            navigator_user_agent: d.escapeText(navigator.userAgent),
                            navigator_platform: d.escapeText(navigator.platform),
                            navigator_vendor: d.escapeText(navigator.vendor),
                            navigator_language: d.escapeText(navigator.language),
                            screen_width: d.escapeText(screen.width),
                            screen_height: d.escapeText(screen.height),
                            response: d.escapeText(d.notice.request.responseText),
                            request: {}
                        }
                    };
                    d.notice.settings && _.each(d.notice.settings, function (n, p) {
                        if (/boolean|number|string/.test($.type(n))) i.custom_data.request[p] = n
                    });
                    i.custom_data.request =
                        JSON.stringify(i.custom_data.request);
                    return i
                }()
            }) && this.defaults.url && this.defaults.apiKey) {
                a = this.defaults.url + this.defaults.apiKey + "&data=" + escape(JSON.stringify(this.data));
                $("#bugsense-iframe")[0] ? $("#bugsense-iframe")
                    .attr("src", a) : $("body")
                    .append('<iframe id="bugsense-iframe" class="offset" src="' + a + '" width="1" height="1">')
            }
        }
    },
    errorFilters: function () {
        return _.any([this.status === "404", this.status === "422" && this.errors && this.errors[0].error_message === "Username has already been taken"])
    },
    escapeText: function (a) {
        a =
            a.toString() || "";
        return a.replace(/&/g, "&#38;")
            .replace(/</g, "&#60;")
            .replace(/>/g, "&#62;")
            .replace(/'/g, "&#39;")
            .replace(/"/g, "&#34;")
    },
    generateBackTrace: function (a) {
        if (a) return a.file + ":" + a.line;
        try {
            throw Error();
        } catch (d) {
            if (d.stack) {
                var g = /\s+at\s(.+)\s\((.+?):(\d+)(:\d+)?\)/;
                return $.map(d.stack.split("\n")
                    .slice(4), _.bind(function (i) {
                    i = i.match(g);
                    var n = this.escapeText(i[1]);
                    return this.escapeText(i[2]) + ":" + i[3] + "in" + n
                }, this))
                    .join("\n")
            } else if (d.sourceURL) return d.sourceURL + ":" + d.line
        }
        return "n/a:0"
    }
};
(function () {
    window.SC = window.SC || {};
    SC.localStorage = {};
    var a = true;
    try {
        window.localStorage.setItem("sc-test-private-browsing", "1");
        window.localStorage.removeItem("sc-test-private-browsing")
    } catch (d) {
        if (d.code === DOMException.QUOTA_EXCEEDED_ERR && window.localStorage.length === 0) a = false;
        else throw d;
    }["getItem", "setItem", "clear", "removeItem", "key"].forEach(function (g) {
        SC.localStorage[g] = a ? function () {
            return window.localStorage[g].apply(window.localStorage, arguments)
        } : $.noop
    })
})();
(function () {
    function a(g, i) {
        return function () {
            return g.apply(i, arguments)
        }
    }
    var d = 0;
    SC.OauthConnection = function (g) {
        this.host = g;
        this.requests = {};
        this.queue = [];
        this.listener = a(this.handler, this)
    };
    SC.OauthConnection.prototype = {
        init: function () {
            if (!this.iframe) {
                window.addEventListener("message", this.listener, false);
                this.iframe = document.createElement("iframe");
                this.iframe.setAttribute("style", "width : 1px; height: 1px;border: none; position: absolute;top: 0;left: 0");
                this.iframe.setAttribute("frameborder",
                    "0");
                this.iframe.setAttribute("src", this.host + "/proxy.html");
                this.waitForIframe = setTimeout(a(function () {
                    throw 'SC.OauthConnection: SSL iframe could not be loaded from "' + this.host + '". Check the certificate!';
                }, this), 12E3);
                this.iframe.onload = a(function () {
                    clearTimeout(this.waitForIframe)
                }, this);
                $("body")
                    .append(this.iframe)
            }
        },
        execute: function (g, i) {
            var n = "req" + d;
            d += 1;
            this.init();
            this.requests[n] = i;
            this.queue.push({
                requestId: n,
                data: i.data,
                url: i.url,
                method: g
            });
            this.processQueue()
        },
        processQueue: function () {
            for (; this.httpsWindow &&
                this.httpsWindow.postMessage && this.queue[0];) {
                this.httpsWindow.postMessage(JSON.stringify(this.queue[0]), this.host);
                this.queue.shift()
            }
        },
        handler: function (g) {
            if (g.origin !== this.host) /google.com$/.test(g.origin) || console.log("Rogue proxy attack!!!", g);
            else {
                var i = JSON.parse(g.data),
                    n = i.requestId && this.requests[i.requestId];
                i.isExpiringToken && !i.scope && Backbone.history.replaceLocation("/logout?return_to=" + Backbone.history.getFragment());
                if (i.status === "loaded") {
                    this.httpsWindow = g.source;
                    this.processQueue()
                } else {
                    if (i.data &&
                        i.data.access_token && typeof this.onToken === "function") this.onToken(i.data.access_token);
                    if (n) {
                        if (i.data) n.success(i.data);
                        else i.error && n.error(i);
                        delete this.requests[i.requestId]
                    }
                }
            }
        },
        destroy: function () {
            if (this.iframe) {
                this.iframe.parentNode.removeChild(this.iframe);
                this.iframe = null
            }
            window.removeEventListener("message", this.listener, false);
            this.requests = {};
            clearTimeout(this.waitForIframe)
        }
    }
})();
(function () {
    var a = Backbone.sync;
    $.ajaxTransport("+*", function (d, g) {
        if (d.sc_api_ssl) return {
                send: function () {
                    SC.authorization.https.execute(d.type, g)
                },
                abort: function () {
                    return $.noop
                }
        }
    });
    Backbone.sync = function (d, g, i) {
        i.url = "/_api" + (_.isFunction(g.url) ? g.url() : g.url);
        _.extend(i, {
            data: {
                client_id: SC.authorization.apiKey,
                format: "json"
            },
            modelType: g.type
        });
        if (d === "read") {
            var n = i.success,
                p = SC.cache.get(i.url);
            i.processData = true;
            if (p) {
                _.delay(function () {
                    i.success(p)
                }, 0);
                return
            }
            i.success = function (t) {
                d === "read" &&
                    t && !t.error && g.cache !== false && SC.cache.set(i.url, t);
                n.apply(this, arguments)
            }
        } else {
            SC.cache.remove(i.url);
            if (g instanceof SC.Track.Favorite) {
                SC.cache.remove("/_api/me");
                SC.cache.remove("/_api/me/favorites?order=favorited_at")
            } else if (g instanceof SC.Follow) {
                SC.cache.remove("/_api/me");
                SC.cache.remove("/_api/me/followings");
                SC.cache.remove("/_api/me/followings/ids")
            }
        } if (g.authorized || SC.authorization.isLoggedIn) {
            i.sc_api_ssl = true;
            i.data = d === "read" ? i.data : _.extend(i.data, g.attributes);
            i.error = function (t) {
                return function (H) {
                    if (!g.acceptErrors ||
                        g.acceptErrors !== "*" && _.indexOf(g.acceptErrors, H.status) === -1) $(document)
                            .trigger("ajaxError", [{
                                status: H.status,
                                statusText: "error",
                                responseText: H.responseText
                            },
                            i, H.error
                        ]);
                    t.apply(this, arguments)
                }
            }(i.error || $.noop)
        }
        a.apply(this, arguments)
    }
})();
(function () {
    var a = window.location,
        d = !! (window.history && window.history.pushState),
        g = /^#*/;
    _.extend(Backbone.History.prototype, {
        getFragment: function (i) {
            i = i || window.location;
            return d ? i.pathname + i.search : i.hash.replace(g, "") || "/"
        },
        start: function () {
            if (d) $(window)
                    .bind("popstate", this.checkUrl);
            else if (a.pathname === "/") $(window)
                    .bind("hashchange", this.checkUrl);
            else {
                var i = "/#" + SC.url.relativeUrl(a.href.split("#")[0]);
                a.replace(i);
                return
            }
            return this.loadUrl()
        },
        replaceLocation: function (i) {
            this.saveLocation(i,
                true)
        },
        saveLocation: function (i, n) {
            i = (i || "")
                .replace(g, "");
            if (this.fragment !== i) {
                if (d) {
                    this.fragment = i;
                    history[n ? "replaceState" : "pushState"]({
                        ts: (new Date)
                            .getTime()
                    }, document.title, a.protocol + "//" + a.host + i)
                } else if (/^https?:\/\//.test(i)) window.location = i;
                else window.location.hash = this.fragment = i;
                this.loadUrl(i)
            }
        },
        loadUrl: function (i) {
            i = this.fragment = i || this.getFragment();
            var n = _.any(this.handlers, function (p) {
                if (p.route.test(i)) {
                    p.callback(i);
                    return true
                }
            });
            if (i === this.fragment) {
                $(document)
                    .trigger("loadurl",
                    i);
                return n
            }
        }
    })
})();
SC.url = {
    relativeUrl: function (a) {
        return a.replace(/^https?:.+?\w\//, "/")
    },
    parseQueryString: function (a) {
        var d = {};
        a && a.replace(/([^?=&]+)(?:=([^&]*))?/g, function (g, i, n) {
            i = decodeURIComponent(i);
            n = decodeURIComponent(n || "");
            switch (typeof d[i]) {
                case "object":
                    d[i].push(n);
                    break;
                case "undefined":
                    d[i] = n;
                    break;
                default:
                    d[i] = [d[i], n]
            }
        });
        return d
    },
    getQueryParam: function (a) {
        return this.parseQueryString(window.location.search)[a]
    }
};
SC.time = {
    timecode: function (a) {
        if (isNaN(a)) return a;
        var d = [];
        a = {
            h: Math.floor(a / 36E5),
            m: Math.floor(a / 6E4 % 60),
            s: Math.floor(a / 1E3 % 60)
        };
        a.h > 0 && d.push(a.h);
        d.push(a.m < 10 && a.h > 0 ? "0" + a.m : a.m);
        d.push(a.s < 10 ? "0" + a.s : a.s);
        return d.join(".")
    }
};
SC.tmpl = function (a) {
    $.template[a] || $.ajax({
        url: "/" + a + "-tmpl.html",
        async: false,
        cache: false,
        success: function (d) {
            $.template(a, d)
        },
        error: function () {
            throw "Template is missing: " + a;
        }
    });
    return $.tmpl.apply(this, arguments)
};
SC.images = {
    makeHuge: function (a) {
        if (a) return a.replace(/large/, "t300x300")
    },
    makeSmall: function (a) {
        return a.replace(/large/, "small")
    },
    isDefault: function (a) {
        return /default_/.test(a)
    }
};
(function () {
    var a = {};
    SC.cache = {
        set: function (d, g) {
            a[d] = g
        },
        get: function (d) {
            return a[d]
        },
        remove: function (d) {
            delete a[d]
        },
        clear: function () {
            a = {}
        },
        extract: function (d) {
            return _.flatten(_.compact(_.map(a, function (g, i) {
                if (i.match(d)) return g
            })))
        }
    }
})();
SC.hasNativeAudio = function () {
    var a = false;
    try {
        var d = new Audio;
        a = d.canPlayType && /maybe|probably/.test(d.canPlayType("audio/mpeg"))
    } catch (g) {}
    return a
}();
SC.Audio = function () {
    var a = [{
            name: "audioStart",
            value: 0
        }, {
            name: "audioProgress10",
            value: 0.1
        }, {
            name: "audioProgress95",
            value: 0.95
        }
    ],
        d, g, i = null,
        n = $(document),
        p = {
            stream_url: ""
        }, t = function () {
            g && i.currentSrc && i.currentSrc === g.stream_url && n.trigger.apply(n, arguments)
        }, H, B = {
            onPlay: function (T) {
                T = T.target;
                t("audioTime", [g, T.currentTime / T.duration, T.currentTime * 1E3]);
                t("audioPlay", g)
            },
            onPause: function () {
                t("audioPause", g)
            },
            onFinish: function () {
                for (; d.length;) {
                    t(d[0].name, g);
                    d.shift()
                }
                d = a.slice();
                i.pause();
                i.currentTime =
                    0;
                t("audioFinish", g)
            },
            onTime: function (T) {
                if (!i.paused) {
                    var V = T.target,
                        ba = V.currentTime / V.duration;
                    t("audioTime", [g, ba, V.currentTime * 1E3]);
                    H(T);
                    if (d.length && ba >= d[0].value) {
                        t(d[0].name, g);
                        d.shift()
                    }
                }
            },
            onLoading: function (T) {
                T = T.target;
                t("audioLoad", [g, (T.seekable.length && T.seekable.end(0)) / T.duration])
            },
            onError: function () {
                t("audioError", g)
            }
        }, D = !/Android|IEMobile/.test(navigator.userAgent),
        I = function () {
            var T;
            if (SC.hasNativeAudio) {
                T = new Audio;
                T.addEventListener("play", B.onPlay, false);
                T.addEventListener("pause",
                    B.onPause, false);
                T.addEventListener("ended", B.onFinish, false);
                T.addEventListener("error", B.onError, false);
                T.addEventListener("timeupdate", B.onTime, false);
                T.addEventListener("progress", B.onLoading, false);
                T.addEventListener("loadedmetadata", B.onLoading, false);
                T.addEventListener("canplay", B.onLoading, false)
            } else T = {
                    paused: true,
                    currentTime: 0,
                    src: "",
                    play: function () {
                        B.onFinish();
                        window.location = T.src
                    },
                    load: function () {},
                    pause: function () {},
                    stop: function () {}
            };
            return T
        }, R = function (T) {
            if (i) {
                i.pause();
                i.src =
                    "";
                D && i.load()
            }
            g = T;
            if (!i || !D) i = I();
            i.src = T.stream_url;
            if (window.opera && window.opera.version() === "11.50") {
                i.controls = true;
                $("body")
                    .find("audio")
                    .remove();
                $("body")
                    .append(i)
            }
            D && i.load();
            d = a.slice()
        }, S = function (T) {
            if (SC.hasNativeAudio) if (g && g.id === T.id) i[i.paused ? "play" : "pause"]();
                else {
                    R(T);
                    i.play()
                }
        }, W = function (T, V) {
            SC.hasNativeAudio && !i && S(p);
            $(document)
                .trigger("audioFinalStreamRequired", {
                track: T,
                triggerEvent: V
            })
        }, da = function (T) {
            return /^https/.test(T.stream_url) && /Android [1-2]|IEMobile/i.test(navigator.userAgent)
        };
    H = B.onLoading;
    $(document)
        .bind("trackInit.audio", function (T, V) {
        g || (da(V) ? W(V, "trackInit") : R(V))
    })
        .bind("trackToggle.audio", function (T, V) {
        da(V) ? W(V, "trackToggle") : S(V)
    })
        .bind("trackListToggle.audio", function (T, V) {
        if (g && g.id === parseInt(V, 10)) S(g);
        else {
            SC.hasNativeAudio && !i && S(p);
            $(document)
                .trigger("audioTrackRequired", V)
        }
    })
        .bind("trackSeek.audio", function (T, V) {
        try {
            i.currentTime = i.duration * V;
            i.play()
        } catch (ba) {
            window.console && console.log && console.log("seek failed", ba)
        }
    })
};
SC.Tracker = {
    _levelMap: {
        "default": 0,
        dashboard: 1,
        tags: 2,
        search: 3,
        "you/tracks": 4,
        "you/favorites": 5,
        people: 6,
        you: 7,
        general: 8,
        sounds: 9,
        profiles: 10
    },
    _clientId: 3273,
    trackPage: function (a, d) {
        var g = SC.localStorage.getItem("sc-user-plan") || "anonymous";
        _gaq.push(["_setCustomVar", 1, "plan", g, 1]);
        _gaq.push(["_trackPageview", a]);
        if (typeof xt_med === "function") {
            a = a.replace(/\//, "");
            xt_med("F", this._levelMap[d], a)
        }
    },
    trackEvent: function (a, d, g, i) {
        i = i || {};
        _gaq.push(["_trackEvent", a, d, g]);
        i.excludeATI !== true && typeof xt_med ===
            "function" && xt_med("A", this._levelMap[this.getLevel(Backbone.history.getFragment())], a + "::" + d + "::" + g)
    },
    trackSignupConversion: function () {
        $("body")
            .append('<img src=" http://www.googleadservices.com/pagead/conversion/1014549368/?label=zEeoCJCauAIQ-Jbj4wM&amp;guid=ON&amp;script=0 " class="offset">')
    },
    trackAudioEvent: function (a, d) {
        var g = a.kind,
            i = this.getLevel(Backbone.history.getFragment()),
            n = this._levelMap[i],
            p = [g, Backbone.history.getFragment(), a.permalink_url].join("::"),
            t = (a.duration / 1E3)
                .toFixed(1),
            H = (t / 4)
                .toFixed(1),
            B = SC.localStorage.getItem("sc-auth-id") || null;
        g = g.replace("track", "sound");
        xt_rm("audio", n, p, d, "", H, t, "", "", "", "int", "clip", "");
        SC.EventLogger.audio(B, i, d, g, a.id, t)
    },
    getLevel: function (a) {
        var d = a.split("/");
        return d[0] === "dashboard" ? "dashboard" : d[0] === "tags" ? "tags" : /search\?q/.test(a) ? "search" : a === "you/tracks" || a === "you/favorites" ? a : d[0] === "you" ? "you" : d[0] === "people" ? "people" : $("#page > div")
            .children()
            .hasClass("track") ? "sounds" : $("#page > div")
            .children()
            .hasClass("user") ? "profiles" :
            "general"
    },
    init: function () {
        var a = $(document),
            d = this;
        SC.EventLogger.initialize({
            id: this._clientId
        });
        a.bind("loadurl.tracking", _.bind(function (g, i) {
            d.trackPage(i, this.getLevel(i.replace(/\//, "")));
            if (/\/signup\/details/.test(i) || /signed_up=1/.test(i)) d.trackSignupConversion()
        }, this));
        a.delegate(".share-links a", "click.tracking", function () {
            d.trackEvent("mshare", $(this)
                .data("action"), $(this)
                .data("permalink"))
        });
        a.bind("connectFacebook.tracking", function (g, i) {
            d.trackEvent("connect", "facebook", i)
        });
        a.bind("getNativeApp.tracking", function (g, i) {
            d.trackEvent("teasers", "Native App", i)
        });
        a.delegate("a.tracker-android", "click.tracking", function () {
            d.trackEvent("teasers", "Mobile Page Android", Backbone.history.getFragment())
        });
        a.delegate("a.tracker-ios", "click.tracking", function () {
            d.trackEvent("teasers", "Mobile Page iOS", Backbone.history.getFragment())
        });
        a.delegate(".home a.button-fb", "click.tracking", function () {
            d.trackEvent("convertion", "Homepage facebook link", "/")
        });
        a.delegate('.home a[href="/signup"]', "click.tracking", function () {
            d.trackEvent("convertion",
                "Homepage signup link", "/")
        });
        a.bind("audioStart.tracking", function (g, i) {
            d.trackEvent("tracks", "Track Play", i.permalink_url, {
                excludeATI: true
            })
        });
        a.bind("audioProgress10.tracking", function (g, i) {
            d.trackEvent("tracks", "10percent", i.permalink_url, {
                excludeATI: true
            })
        });
        a.bind("audioProgress95.tracking", function (g, i) {
            d.trackEvent("tracks", "95percent", i.permalink_url, {
                excludeATI: true
            })
        });
        a.bind("audioFinish.tracking", function (g, i) {
            d.trackEvent("tracks", "Track Complete", i.permalink_url, {
                excludeATI: true
            });
            d.trackAudioEvent(i, "stop")
        });
        a.bind("audioPlay.tracking", function (g, i) {
            d.trackAudioEvent(i, "play")
        });
        a.bind("audioPause.tracking", function (g, i) {
            d.trackAudioEvent(i, "pause")
        });
        a.bind("errorPage.tracking", function (g, i) {
            if (i.request.status !== 0) {
                if (i.error === "Gateway Time-out") i.error = "Gateway Timeout";
                d.trackEvent("error", i.request.status + " - " + i.error, "path: " + i.path + "; url: " + i.settings.url)
            }
        });
        a.delegate("#header .search", "click.tracking", function () {
            d.trackEvent("search", "box", "icon")
        });
        a.delegate("form.search input:text",
            "click.tracking", function () {
            d.trackEvent("search", "box", "input")
        });
        a.delegate("form.search button:submit", "click.tracking", function () {
            d.trackEvent("search", "box", "search_btn")
        });
        a.delegate("#search .page-tabs li", "click.tracking", function () {
            var g = $(this)
                .attr("data-sc-tab");
            g = g.replace("users", "people");
            d.trackEvent("search", "results", g)
        });
        a.delegate("#search .list-items.tracks li .tmb", "click.tracking", function () {
            var g = $(this)
                .closest("li")
                .index() + 1;
            d.trackEvent("search_tracks", "cover", g)
        });
        a.delegate("#search .list-items li a",
            "click.tracking", function () {
            var g = $(this)
                .closest(".list-items")
                .attr("class")
                .match(/(tracks|users|groups)/);
            if (g) {
                g = g[1];
                g = g.replace("users", "people");
                var i = $(this)
                    .closest("li")
                    .index() + 1;
                d.trackEvent("search_" + g, "title", i)
            }
        });
        a.delegate(".list-suggestions a:not(.clear)", "click.tracking", function () {
            var g = $(this)
                .closest("li"),
                i = g[0].className.match(/(track|user|group|search)/);
            if (i) {
                i = i[1];
                if ($("#wrapper")
                    .is(".suggesting")) {
                    g = g.index() + 1;
                    d.trackEvent("search", "suggestions", i);
                    d.trackEvent("search",
                        "suggestion_position", g)
                } else d.trackEvent("search", "recent", i)
            }
        });
        a.delegate(".playlist-share-view + .options a.button.buy", "click.tracking", function () {
            var g = $(this);
            d.trackEvent("buy_playlist", g.find("span")
                .text(), g.data("scPermalinkUrl"))
        });
        a.delegate(".track-share-view + .options a.button.buy", "click.tracking", function () {
            var g = $(this);
            d.trackEvent("buy_tracks", g.find("span")
                .text(), g.data("scPermalinkUrl"))
        });
        a.delegate(SC.OpenInApp.className, "click.tracking", function () {
            var g = $(this);
            d.trackEvent("open_in_app",
                g.find(".text")
                .text(), Backbone.history.getFragment())
        })
    },
    destroy: function () {
        $(document)
            .unbind(".tracking")
            .undelegate(".tracking")
    }
};
SC.PageView = Backbone.View.extend({
    initialize: function () {
        if (this.requiresAuthentication()) setTimeout(function () {
                Backbone.history.replaceLocation("/login?return_to=" + Backbone.history.getFragment())
            }, 0);
        else {
            _.bindAll(this, "renderPlaceHolder");
            var a = this;
            this.model.bind("change", function () {
                a.render()
            });
            this.model.fetch({
                error: this.modelErrorHandler
            })
        }
    },
    renderPlaceHolder: function (a, d) {
        d = SC.cachedListItem || d;
        delete SC.cachedListItem;
        this.renderModel(d, this.el, a);
        this.trigger("renderPlaceholder", d)
    },
    requiresAuthentication: function () {
        return this.model.authorized && !SC.authorization.isLoggedIn && !(this.model instanceof SC.Login || this.model instanceof SC.Signup)
    },
    bindToDocument: function (a) {
        var d = $(document);
        _.each(a.split(" "), function (g) {
            d.bind(g + "." + this.cid, _.bind(this[g], this))
        }, this)
    },
    unbindFromDocument: function () {
        $(document)
            .unbind("." + this.cid)
    },
    render: function () {
        var a = this.model.toJSON();
        this.renderModel(a, this.el, this.options.tmpl);
        this.decorate(a);
        this.trigger("render");
        return this
    },
    renderModel: function (a, d, g, i) {
        g = SC.tmpl(g, a);
        this.removeEmptyImages(g);
        this.decorateEmptyFields(g, a);
        $.isFunction(i) ? i(g) : $(d)
            .empty()
            .html(g);
        this.renderThrobber();
        return this
    },
    renderThrobber: function () {
        $(this.el)
            .find("canvas.throbber")
            .throbber()
    },
    sizeArtworkPlaceholder: function () {
        var a = this;
        _.defer(function () {
            var d = $(a.el)
                .find(".artwork");
            a.artworkWidth = d.width();
            d.css("min-height", a.artworkWidth)
        })
    },
    decorate: $.noop,
    decorateEmptyFields: function (a, d) {
        $(a)
            .find("[data-sc-field]")
            .each(function (g, i) {
            i = $(i);
            var n;
            n = i.data("scField")
                .split(".");
            for (var p = d, t; n.length >
                1;) {
                t = n.shift();
                p = p[t]
            }
            n = p[n[0]];
            if (!(n > 0)) if (!n || !n.length) i.addClass("empty")
        })
    },
    removeEmptyImages: function (a) {
        $('img[src=""]', $(a))
            .remove()
    },
    modelCached: function () {
        if (typeof this.model.url === "function") return !!SC.cache.get("/api" + this.model.url())
    },
    hideAddressBar: function () {
        _.defer(function () {
            window.scrollTo(0, 1)
        })
    }
});
SC.FormView = SC.PageView.extend({
    events: {
        "submit form": "onSubmit",
        "click input:submit": "onSubmit",
        "blur input": "onInputChange",
        "change input": "onInputChange",
        "click a.cancel": "onCancel",
        "point a.cancel": "onCancel"
    },
    initialize: function () {
        _.bindAll(this, "onSuccess", "onFailure");
        this.render();
        $(this.el)
            .delegate("textarea", "click keyup keydown keypress", this.textareaFitContent)
    },
    decorate: function () {
        $(this.el)
            .find("textarea")
            .each(this.textareaFitContent)
    },
    serializeForm: function (a) {
        var d = {};
        _.each($(a)
            .serializeArray(), function (g) {
            d[g.name] = g.value
        });
        return d
    },
    onCancel: function () {
        if (window.history.length > 1) {
            window.history.back();
            return false
        }
    },
    onSubmit: function (a) {
        a.preventDefault();
        window.scrollTo(0, 1);
        a = $("body");
        a.attr("tabindex", "-1");
        a.focus();
        a.removeAttr("tabindex");
        this.enableForm(false);
        this.indicateLoading(true);
        this.model.save(this.serializeForm($("form", this.el)), {
            success: this.onSuccess,
            error: this.onFailure,
            silent: true
        })
    },
    indicateLoading: function (a) {
        this.renderThrobber("small");
        $("form", this.el)
            .toggleClass("loading",
            a)
    },
    enableForm: function (a) {
        var d = $("input:submit", this.el);
        $("form", this.el)
            .toggleClass("submitting", !a);
        a ? d.removeAttr("disabled") : d.attr("disabled", "disabled")
    },
    onFailure: function (a, d) {
        var g = this;
        _.each(d, function (i, n) {
            g.showError('input[name="' + n + '"]', i)
        });
        this.enableForm(true);
        this.indicateLoading(false)
    },
    onSuccess: $.noop,
    showError: function (a, d) {
        var g = $(a, this.el);
        g.parent()
            .find("label.error")
            .remove();
        d && g.parent()
            .append('<label class="error" for="' + g.attr("id") + '">' + d.text + "<label>")
    },
    onInputChange: function (a) {
        if ($(a.target)
            .val()) {
            var d =
                this.model.validate(this.serializeForm($("form", this.el)));
            d = d && d[a.target.name];
            this.showError($(a.target), d)
        }
    },
    textareaFitContent: function () {
        for (; this.rows > 3 && this.scrollHeight < this.offsetHeight;) this.rows--;
        for (; this.scrollHeight > this.offsetHeight;) this.rows++
    }
});
SC.FollowingsView = Backbone.View.extend({
    initialize: function () {
        $(this.el)
            .delegate(".user-follow", "click", _.bind(this.toggleFollow, this))
    },
    decorate: function () {
        $(this.el)
            .find(".list-items .user-follow")
            .each(function () {
            var a = $(this)
                .data("user-id");
            SC.authorization.userIsMe({
                id: a
            }) && $(this)
                .hide();
            SC.followings.contains(a) && $(this)
                .addClass("active")
        });
        $(document.body)
            .addClass("followersLoaded")
    },
    toggleFollow: function (a) {
        a.preventDefault();
        a.stopPropagation();
        a = $(a.currentTarget);
        if (SC.authorization.isLoggedIn) {
            var d =
                a.is(".user-follow.active");
            (new SC.Follow({
                id: a.data("userId")
            }))[d ? "destroy" : "save"]();
            this.updateFollowButton(a);
            this.updateSCFollowings({
                remove: !! d,
                id: a.data("userId")
            })
        } else {
            a = Backbone.history.getFragment();
            Backbone.history.saveLocation("/login?return_to=" + a);
            window.sessionStorage.setItem("sc-logged-out-follow", a)
        }
    },
    updateFollowButton: function (a) {
        a.toggleClass("active")
            .css("visibility", "visible")
    },
    updateSCFollowings: function (a) {
        var d;
        if (a.remove) for (d in SC.followings.attributes) {
                if (SC.followings.attributes[d] ===
                    a.id) {
                    delete SC.followings.attributes[d];
                    break
                }
        } else {
            d = _.size(SC.followings.attributes);
            SC.followings.attributes[d] = a.id
        }
    }
});
SC.extend("Follow", Backbone.Model, {
    authorized: true,
    acceptErrors: [404],
    url: function () {
        return "/me/followings/" + this.attributes.id + "?_status_code_map[303]=200"
    }
});
SC.extend("Followings", Backbone.Model, {
    authorized: true,
    acceptError: [504],
    url: "/me/followings/ids",
    contains: function (a) {
        return _.include(this.attributes, a)
    }
});
(function () {
    SC.Followings.followings = function (a) {
        return a ? a === 1 ? "Follows 1 person" : "Follows " + a + " people" : "Isn't following anybody"
    };
    SC.Followings.followers = function (a) {
        return a ? a === 1 ? "Has 1 follower" : "Has " + a + " followers" : "Isn't followed by anybody"
    };
    SC.Followings.youFollowings = function (a) {
        return a ? a === 1 ? "You are following 1 person" : "You are following " + a + " people" : "You aren't following anybody"
    };
    SC.Followings.youFollowers = function (a) {
        return a ? a === 1 ? "You have 1 follower" : "You have " + a + " followers" :
            "You aren't followed by anybody"
    };
    SC.Followings.prototype.sortList = function (a) {
        var d = this;
        return _.sortBy(a, function (g) {
            return d.contains(g.id)
        })
    }
})();
SC.PageListView = SC.PageView.extend({
    events: {
        "click div.tmb": "onTmbClick",
        "click .inline-error .button": "retry"
    },
    initialize: function () {
        _.bindAll(this, "renderSubPage", "subModelErrorHandler", "appendSubPage", "appendError", "retry");
        if (this.requiresAuthentication()) setTimeout(function () {
                Backbone.history.replaceLocation("/login?return_to=" + Backbone.history.getFragment())
            }, 0);
        else {
            if (!this.model[this.options.subpage]) throw "No subpage model defined for this Page List View: " + this.options.subpage;
            _.bindAll(this,
                "render", "initSubPage");
            this.model.bind("change", this.render);
            this.model.bind("change", this.initSubPage);
            this.model.url && this.model.fetch({
                error: this.modelErrorHandler
            });
            this.bindToDocument("audioPlay audioPause audioFinish audioTrackRequired");
            this.bind("renderSub", function () {
                $(document)
                    .one("audioTime." + this.cid, _.bind(this.audioPlay, this))
            })
        }
    },
    modelErrorHandler: function (a, d) {
        window.console && console.error && console.error("Model error: " + JSON.stringify(arguments), arguments);
        if (d.status === 401 && JSON.parse(d.responseText)
            .error ===
            "invalid_grant") Backbone.history.replaceLocation("/logout?return_to=/login?return_to=" + Backbone.history.getFragment());
        else d.status === 401 && !SC.authorization.isLoggedIn && Backbone.history.replaceLocation("/login?return_to=" + Backbone.history.getFragment())
    },
    subModelErrorHandler: function () {
        return this.modelErrorHandler.apply(this, arguments)
    },
    initSubPage: function () {
        var a = this.model[this.options.subpage];
        a && !SC.cache.get("/_api" + a.url) && this.renderModel(this.model.toJSON(), $(".content", this.el), "placeholder");
        this.initTabs(this.options.subpage);
        a.fetch({
            error: this.subModelErrorHandler,
            success: this.renderSubPage
        })
    },
    renderSubPage: function () {
        this.renderModel(this.model.toJSON(), $(".content", this.el), this.options.tmpl + "-" + this.options.subpage);
        this.trigger("renderSub");
        return this
    },
    initTabs: function (a) {
        var d = this;
        $(".page-tabs li", this.el)
            .each(function () {
            var g = this.getAttribute("data-sc-tab");
            if (!g) throw "Page Tab <li> in " + d.options.tmpl + " needs a data-sc-tab attribute!";
            $(this)
                .toggleClass("active", g ===
                a)
        })
    },
    onTmbClick: function (a) {
        this.playItem(a.target)
    },
    playItem: function (a) {
        a = $(a)
            .closest("li");
        var d = a.attr("data-sc-track-id");
        d && !a.parent(".playlists")[0] ? $(document)
            .trigger("trackListToggle", d) : a.find("a")
            .click()
    },
    resetItem: function () {
        return $("li.playing", this.el)
            .removeClass("playing")
    },
    audioPlay: function (a, d) {
        $("li", this.el)
            .removeClass("playing")
            .filter('[data-sc-track-id="' + d.id + '"]')
            .addClass("playing")
    },
    audioPause: function () {
        this.resetItem()
    },
    audioFinish: function (a, d) {
        var g = $('li[data-sc-track-id="' +
            d.id + '"]', this.el)
            .next("li");
        this.resetItem();
        this.playItem(g)
    },
    audioTrackRequired: function (a, d) {
        var g = new SC.Track({
            id: d
        });
        g.bind("change", function () {
            $(document)
                .trigger("trackToggle", g.toJSON())
        });
        g.fetch()
    },
    verifyMoreContent: function () {
        var a = $(this.el)
            .find("li.more");
        a.data("scHref") ? $(document)
            .bind("scroll." + this.cid, _.throttle(_.bind(this.scroll, this), 250)) : a.remove()
    },
    scroll: function () {
        var a = $(document),
            d = $(this.el)
                .find("li.more"),
            g = a.scrollTop() + $(window)
                .height(),
            i = d.position()
                .top;
        if (g >
            i) {
            a.unbind("scroll." + this.cid);
            this.fetchNextPage(d.data("scHref"))
        }
    },
    fetchNextPage: function (a) {
        var d = this.model[this.options.subpage];
        d.url = a;
        d.acceptErrors = "*";
        d.fetch({
            error: this.appendError,
            success: this.appendSubPage
        })
    },
    appendError: function (a) {
        var d = $(this.el);
        d.find(".more")
            .hide();
        d.find(".list-items")
            .after(SC.tmpl("inlineerror", {
            url: a.url
        }));
        this.trigger("renderError")
    },
    retry: function (a) {
        a.preventDefault();
        var d = $(this.el);
        a = $(a.currentTarget)
            .data("url");
        d.find(".more")
            .show();
        d.find(".inline-error")
            .remove();
        this.fetchNextPage(a)
    },
    appendSubPage: function () {
        var a = this;
        $(this.el)
            .find("li.more")
            .remove();
        this.renderModel(this.model.toJSON(), this.el, this.options.tmpl + "-" + this.options.subpage, function (d) {
            $(".list-items", a.el)
                .append(d.find(".list-items")
                .andSelf()
                .children("li"))
        });
        this.trigger("renderSub")
    },
    toggleProfileImage: function () {
        var a = $(".page-fade", this.el);
        if (!a.hasClass("zoom-profile-image")) {
            var d = this.model.get("avatar_url") || this.model.get("artwork_url");
            d = SC.images.makeHuge(d);
            var g = $(".big-image",
                a);
            if (g.attr("src") === undefined) {
                var i = $("canvas", a);
                i.addClass("throbber");
                a.addClass("loading-big-profile-image");
                this.renderThrobber();
                g.attr("src", d)
                    .load(function () {
                    i.removeClass("throbber");
                    a.removeClass("loading-big-profile-image")
                })
            }
        }
        a.toggleClass("zoom-profile-image")
    }
});
SC.List = Backbone.Collection.extend({
    toJSON: function () {
        var a = Backbone.Collection.prototype.toJSON.apply(this, arguments);
        if (a.length > 0) this.setNextHref(a);
        else a.next_href = null;
        return a
    },
    setNextHref: function (a) {
        var d = this.url.match(/^(.*offset\=)(.*)$/),
            g;
        if (d) {
            g = d[1];
            d = parseInt(d[2], 10)
        } else {
            g = this.url + (/\?/.test(this.url) ? "&" : "?") + "offset=";
            d = 0
        }
        var i = /q=|tags=/.test(this.url);
        if (a.length % 50 === 0 || i && a.length > 40) {
            d += 50;
            this.next_href = a.next_href = g + d
        }
    }
});
SC.extend("Comment", Backbone.Model, {
    toJSON: function () {
        var a = _.clone(this.attributes);
        a.commented = $.prettyDate.format(a.created_at);
        a.position_timecode = SC.time.timecode(a.timestamp);
        a.user.avatar_url_small = SC.images.makeSmall(a.user.avatar_url);
        return a
    }
});
SC.extend("Authorization", Backbone.Model, {
    initialize: function (a) {
        _.bindAll(this, "storeToken", "fetchCurrentUser", "revoke");
        this.apiKey = a.clientId;
        this.redirectUri = location.protocol + "//" + location.hostname + "/login";
        this.authToken = SC.localStorage.getItem("sc-auth-token");
        this.authId = parseInt(SC.localStorage.getItem("sc-auth-id"), 10);
        this.isLoggedIn = !! this.authToken;
        this.allowedDomains = /^http(s)?:\/\/api\.(soundcloud|sandbox-soundcloud|staging-soundcloud)\.com/;
        this.https = new SC.OauthConnection("https://" +
            window.location.host);
        this.https.onToken = this.storeToken;
        var d = this;
        $(document)
            .bind("signupSuccess.authorization loginSuccess.authorization", function (g, i) {
            i && i.username && d.storeUserName(i.username);
            d.fetchCurrentUser(g);
            SC.followings = SC.followings || d.fetchFollowings()
        })
            .bind("logout.authorization", function () {
            d.revoke()
        })
    },
    fetchFollowings: function () {
        var a = new SC.Followings;
        a.fetch();
        return a
    },
    storeToken: function (a) {
        SC.localStorage.setItem("sc-auth-token", a);
        this.authToken = a;
        this.isLoggedIn = true
    },
    revoke: function () {
        SC.localStorage.removeItem("sc-auth-token");
        SC.localStorage.removeItem("sc-auth-id");
        SC.localStorage.removeItem("sc-user-plan");
        this.authToken = undefined;
        this.isLoggedIn = false
    },
    storeUserName: function (a) {
        a && SC.localStorage.setItem("sc-auth-username", a)
    },
    storeUserId: function (a) {
        if (a) {
            SC.localStorage.setItem("sc-auth-id", a.attributes.id);
            this.authId = a.attributes.id;
            a = a.attributes && a.attributes.plan ? a.attributes.plan.toLowerCase()
                .replace(" ", "-") : undefined;
            SC.localStorage.setItem("sc-user-plan",
                a);
            $(document)
                .trigger("currentUserUpdated")
        }
    },
    userIsMe: function (a) {
        var d = parseInt(SC.localStorage.getItem("sc-auth-id"), 10);
        return !!(this.isLoggedIn && d && d === a.id)
    },
    fetchCurrentUser: function () {
        (new SC.Authorization.Me({}))
            .fetch({
            success: _.bind(this.storeUserId, this),
            error: function () {
                console.error("fetchCurrentUser failed:", arguments)
            }
        })
    },
    signStream: function (a) {
        if (!a) return a;
        var d = this.isLoggedIn ? "oauth_token=" + this.authToken : "client_id=" + this.apiKey;
        if (this.isLoggedIn) a = a.replace(/^http:/, "https:");
        return this.allowedDomains.test(a) && !/(client_id|oauth_token)/.test(a) ? a + (/\?/.test(a) ? "&" : "?") + d : a
    },
    destroy: function () {
        $(document)
            .unbind(".authorization");
        this.https.destroy();
        this.revoke()
    }
});
SC.extend("Authorization.Me", Backbone.Model, {
    authorized: true,
    url: "/me"
});
SC.extend("Connections", SC.List, {
    authorized: true,
    cache: false,
    url: "/me/connections",
    facebookConnected: function () {
        return _.any(this.models, function (a) {
            return a.attributes.type === "facebook_profile"
        })
    },
    facebookConnection: function () {
        return _.detect(this.models, function (a) {
            return a.attributes.type === "facebook_profile"
        })
    },
    facebookName: function () {
        if (!this.facebookConnected()) throw "can't look for fb profile name when not connected to fb";
        return _.select(this.models, function (a) {
            return a.attributes.type === "facebook_profile"
        })[0].attributes.display_name
    }
});
(function (a) {
    function d(n) {
        n = {
            x: n.screenX || n.originalEvent.changedTouches[0].screenX,
            y: n.screenY || n.originalEvent.changedTouches[0].screenY
        };
        return {
            timestamp: Date.now(),
            x: n.x,
            y: n.y
        }
    }

    function g(n, p) {
        var t = p.handleObj.namespace;
        a(p.target)
            .trigger(n + "." + t, p)
    }

    function i(n, p) {
        var t = {
            x: Math.abs(n.x - p.x),
            y: Math.abs(n.y - p.y)
        };
        t = {
            delta: {
                x: n.x - p.x,
                y: n.y - p.y
            },
            distance: {
                x: Math.abs(n.x - p.x),
                y: Math.abs(n.y - p.y)
            },
            didMove: Math.max(t.x, t.y) > 10,
            duration: n.timestamp - p.timestamp
        };
        t.direction = t.delta.x < 0 ? "left" : "right";
        t.velocity = t.distance.x / t.duration;
        return t
    }
    jQuery.event.special.swipe = {
        setup: function (n, p) {
            var t = p[0];
            a(this)
                .bind("touchstart." + t, jQuery.event.special.swipe.touchDidStart);
            a(this)
                .bind("touchmove." + t, jQuery.event.special.swipe.touchDidMove);
            a(this)
                .bind("touchend." + t, jQuery.event.special.swipe.touchDidEnd)
        },
        teardown: function (n) {
            n = n[0];
            a(this)
                .unbind("touchstart." + n, jQuery.event.special.swipe.touchDidStart);
            a(this)
                .unbind("touchmove." + n, jQuery.event.special.swipe.touchDidMove);
            a(this)
                .unbind("touchend." +
                n, jQuery.event.special.swipe.touchDidEnd)
        },
        touchDidStart: function (n) {
            var p = a(this),
                t = n.handleObj.namespace;
            n = d(n);
            p.data("point." + t, n)
        },
        touchDidMove: function (n) {
            var p = a(this),
                t = n.handleObj.namespace,
                H = p.data("point." + t);
            if (H !== undefined) {
                var B = d(n);
                H.swipe = i(B, H);
                if (H.swipe.didMove && H.swipe.distance.x >= H.swipe.distance.y) {
                    n.preventDefault();
                    p.data("point." + t, H);
                    H.state = H.state === undefined ? "start" : "move";
                    n.point = H;
                    g("swipe", n)
                }
            }
        },
        touchDidEnd: function (n) {
            var p = a(this),
                t = n.handleObj.namespace,
                H = p.data("point." +
                    t);
            if (!(H === undefined || H.state === undefined)) {
                var B = d(n);
                H.swipe = i(B, H);
                H.state = "end";
                B = H.swipe.duration > 100 && H.swipe.duration < 500;
                H.swipe.accepted = (H.swipe.velocity > 0.2 && H.swipe.distance.x > 50 || H.swipe.distance.x > 160) && B;
                n.point = H;
                g("swipe", n);
                jQuery.removeData(p, "point." + t)
            }
        }
    }
})(jQuery);
(function () {
    var a = {
        a: /[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/ig,
        aa: /[\uA733]/ig,
        ae: /[\u00E6\u01FD\u01E3]/ig,
        ao: /[\uA735]/ig,
        au: /[\uA737]/ig,
        av: /[\uA739\uA73B]/ig,
        ay: /[\uA73D]/ig,
        b: /[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/ig,
        c: /[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/ig,
        d: /[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/ig,
        dz: /[\u01F3\u01C6]/ig,
        e: /[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/ig,
        f: /[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/ig,
        g: /[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/ig,
        h: /[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/ig,
        hv: /[\u0195]/ig,
        i: /[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/ig,
        j: /[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/ig,
        k: /[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/ig,
        l: /[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/ig,
        lj: /[\u01C9]/ig,
        m: /[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/ig,
        n: /[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/ig,
        nj: /[\u01CC]/ig,
        o: /[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/ig,
        oi: /[\u01A3]/ig,
        ou: /[\u0223]/ig,
        oo: /[\uA74F]/ig,
        p: /[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/ig,
        q: /[\u0071\u24E0\uFF51\u024B\uA757\uA759]/ig,
        r: /[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/ig,
        s: /[\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/ig,
        t: /[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/ig,
        tz: /[\uA729]/ig,
        u: /[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/ig,
        v: /[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/ig,
        vy: /[\uA761]/ig,
        w: /[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/ig,
        x: /[\u0078\u24E7\uFF58\u1E8B\u1E8D]/ig,
        y: /[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/ig,
        z: /[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/ig
    };
    SC.replaceDiacritics = function (d) {
        _.each(a, function (g, i) {
            d = d.replace(g, i)
        });
        return d
    }
})();
(function () {
    var a, d;
    d = $(document);
    a = {
        play: "goal_1"
    };
    SC.Awesm = {
        registerGoal: function (g, i) {
            var n = SC.url.getQueryParam("awesmId");
            g = a[g];
            i = i || 0;
            if (n) {
                g === undefined && window.console.warn("Awesm: The goal doesn't match any awe.sm goal");
                $.ajax({
                    url: "https://api.awe.sm/conversions/new",
                    type: "GET",
                    dataType: "jsonp",
                    cache: false,
                    complete: $.noop,
                    data: {
                        key: "13b67c3bd4bd04587787137901b0591b3d86ea2c59355a0486d2407397fc628a",
                        awesm_url: n,
                        conversion_type: g,
                        conversion_value: i,
                        ip: "0.0.0.0",
                        referrer: document.referrer,
                        user_agent: navigator.userAgent,
                        language: navigator.userLanguage || navigator.language || null
                    }
                })
            }
        }
    };
    d.bind("audioStart", function () {
        SC.Awesm.registerGoal("play")
    })
})();
SC.OpenInApp = {
    className: ".open-in-app",
    iTunesUrl: "itms://itunes.apple.com/us/app/soundcloud/id336353151?mt=8&uo=6",
    $el: null,
    clicked: null,
    initialize: function () {
        this.$el = $(this.className);
        _.bindAll(this, "onClick");
        this.decorate()
    },
    decorate: function () {
        $(document.body)
            .addClass("isWebView");
        $(document)
            .delegate(this.className, "click", this.onClick)
    },
    onClick: function () {
        this.clicked = new Date;
        var a = this.$el.find(".text"),
            d = this.$el.find(".loading");
        a.hide();
        d.show();
        setTimeout(_.bind(function () {
            d.hide();
            a.show();
            if (new Date - this.clicked < 4500) {
                window.location = this.iTunesUrl;
                this.clicked = null
            }
        }, this), 4E3)
    }
};
SC.version = SC.version || "dev";
SC.authorization = new SC.Authorization({
    clientId: SC.clientId || "050e2f7ccccfdcd1db3dd9acbc82f3e9"
});
SC.iOSWebView = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent);
SC.extend("Application", Backbone.Model, {
    getHost: function () {
        return location.hostname.replace(/^mt?\./, "")
    },
    getUA: function () {
        return navigator.userAgent
    },
    getPlatform: function () {
        var a = this.getUA();
        return /(iPhone|iPod)/i.test(a) ? "ios" : /(Android|Skyfire)/i.test(a) ? "android" : navigator.platform && navigator.platform.toLowerCase()
    },
    getAppUrl: function () {
        return {
            ios: "http://itunes.apple.com/us/app/soundcloud/id336353151?mt=8",
            android: "market://details?id=com.soundcloud.android"
        }[this.getPlatform()]
    },
    toJSON: function () {
        var a = {};
        a.mainHost = this.getHost();
        a.platform = this.getPlatform();
        a.appUrl = this.getAppUrl();
        a.authStatus = SC.authorization.isLoggedIn ? "loggedIn" : "loggedOut";
        return a
    }
});
SC.ApplicationController = Backbone.Router.extend({
    initialize: function () {
        var a = this,
            d, g, i;
        g = function () {
            return jQuery.ajax({
                url: "//ajaxhttpheaders.appspot.com",
                dataType: "jsonp"
            })
        };
        d = function (p, t, H) {
            return p + (RegExp("^" + t)
                .test(H) ? "-" + t : "")
        };
        i = function (p) {
            return p.split(",")[0]
        };
        $(document)
            .ajaxError(function (p, t, H, B) {
            $(document)
                .trigger("errorPage", {
                request: t,
                settings: H,
                error: B,
                path: Backbone.history.getFragment()
            });
            if (t.status === 404) a.statik("not-found");
            else t.status === 401 ? Backbone.history.replaceLocation("/logout?return_to=" +
                    Backbone.history.getFragment()) : a.statik("server-error");
            SC.Bugsense.notify({
                request: t,
                settings: H,
                error: B
            })
        });
        this.route(/^\/(?:$|\?)/, "home", function () {
            SC.authorization.isLoggedIn ? Backbone.history.replaceLocation("/dashboard") : a.home()
        });
        this.route(/^\/(tracks|users|groups)\/search(\?q=[\w_%\-+]+)?/, "search", function (p, t) {
            t = t || location.search;
            a.search(p, decodeURIComponent(t.replace(/^\?/, "")))
        });
        this.route(/^\/(tracks|users|groups)\/?$/, "search", function (p) {
            a.search(p, "", true)
        });
        this.route(/^\/search\/?$/,
            "search", function () {
            a.search("tracks", "")
        });
        this.route(/^\/(terms-of-use)\/?$/, "statik", function () {
            g()
                .done(function (p) {
                p = d("terms-of-use", "es", i(p["Accept-Language"]));
                a.statik(p)
            })
        });
        this.route(/^\/pages\/privacy\/?$/, "statik", function () {
            g()
                .done(function (p) {
                p = d("privacy", "es", i(p["Accept-Language"]));
                a.statik(p)
            })
        });
        this.route(/^\/(imprint|about|upload|sounds|mobile)\/?$/, "statik", this.statik);
        this.route(/^\/(upload)\/(?:[\w\-]+?)\/?$/, "statik", this.statik);
        this.route(/^\/pages\/status\/?$/, "statik", function () {
            a.statik("status")
        });
        this.route(/^\/pages\/contact\/?$/, "statik", function () {
            a.statik("about")
        });
        this.route(/^\/people(\/friends)?\/?$/, "peoplefinder", function (p) {
            p = p !== undefined ? p.split("/")[1] : undefined;
            SC.authorization.isLoggedIn ? a.peoplefinder(p) : Backbone.history.replaceLocation("/login?return_to=/people")
        });
        this.route(/^\/groups\/([\w\-]+?)\/(tracks|members|info|dropbox)\/?$/, "group", this.group);
        this.route(/^\/groups\/([\w\-]+?)\/?$/, "group", function (p) {
            a.group(p, "tracks")
        });
        this.route(/^\/tags\/?(.*)\/?$/,
            "tag", function (p) {
            a.tag(decodeURIComponent(p)
                .replace(/\+/, " "))
        });
        this.route(/^\/([\w\-]+?)\/sets\/([\w\-]+?)(?:\/|$|\?.*$)([\w\-]+?)?(?:\/|$|\?.*$)/, "playlist", function (p, t, H) {
            a.playlist(p, t, H)
        });
        this.route(/^\/login\?code=(.+)$/, "facebook-login", function (p) {
            a.facebookLogin(p)
        });
        this.route(/^\/login\?error=(.+)&error_description=(.+)$/, "facebook-login-error", function (p, t) {
            if (p === "access_denied") a.statik("access-denied");
            else {
                window.console && console.error && console.error("Unknown login error: " + p +
                    ", " + t.replace(/\+/g, " "));
                a.statik("server-error")
            }
        });
        this.route(/^\/login\/?$/, "login", function () {
            document.location = "https://soundcloud.com/connect?client_id=" + SC.authorization.apiKey + "&redirect_uri=" + SC.authorization.redirectUri + "&response_type=code&scope=non-expiring"
        });
        this.route(/^\/login\/forgot\/?$/, "login", function () {
            a.password()
        });
        this.route(/^\/login\/?\?return_to=(\/.*)$/, "login", function (p) {
            a.login(p)
        });
        this.route(/^\/login\/cookies_for_login\/?$/, "login", a.cookiesForLogin);
        this.route(/^\/signup\/?$/,
            "signup", function () {
            document.location = "https://soundcloud.com/connect?client_id=" + SC.authorization.apiKey + "&redirect_uri=" + SC.authorization.redirectUri + "&response_type=code&scope=non-expiring"
        });
        this.route(/^\/signup\?return_to=(\/.*)$/, "signup", function (p) {
            a.signup(p)
        });
        this.route(/^\/signup\/details\/?(?:\?return_to=(\/.*))?$/, "signupDetails", function (p) {
            a.signupDetails(p)
        });
        this.route(/^\/signup\/peoplefinder\/?(?:\?return_to=(\/.*))?$/, "signupPeoplefinder", function () {
            a.peoplefinder("peoplefinder")
        });
        this.route(/^\/logout(?:$|\/$|\/?\?return_to=(\/.*))$/, "logout", function (p) {
            a.logout(p)
        });
        this.route(/^\/you\/sets\/?($|\?)/, "you", function () {
            a.you("playlists")
        });
        this.route(/^\/you\/(followers|followings)(?:\/?$|\?)/, "you", a.youFollow);
        this.route(/^\/you\/([\w\-]+?)(?:$|\?)/, "you", a.you);
        this.route(/^\/you\/?$/, "youStart", a.youStart);
        this.route(/^\/settings\/?$/, "settings", a.settings);
        this.route(/^\/dashboard\/own-activities\/?$/, "activity", a.activity);
        this.route(/^\/dashboard\/([\w\-]*?)(?:\/?$|\?)/,
            "stream", a.stream);
        this.route(/^\/dashboard\/?$/, "stream", a.stream);
        this.route(/^\/redirecting\/?$/, "redirecting", function () {
            a.statik("redirecting")
        });
        this.route(/^\/([\w\-]+?)\/(tracks|favorites|info|comments|followings|followers|follow|groups|dropbox)(?:$|\/$|\?)/, "user", this.user);
        this.route(/^\/([\w\-]+?)\/(sets)\/?$/, "user", function (p) {
            a.user(p, "playlists")
        });
        this.route(/^\/([\w\-]+?)\/?$/, "user", function (p) {
            a.user(p, "tracks")
        });
        var n = /comment\-\d+/;
        this.route(/([\w\-\/]+?)($|\?)/, "track", function (p) {
            p =
                p.split("/");
            var t = p[1],
                H = p[2],
                B, D;
            if (!SC.authorization.isLoggedIn) {
                B = p[3];
                D = p[4]
            }
            a.track(t, H, n.test(B) ? null : B, D)
        });
        this.route(/(.+)/, "error", function (p) {
            window.console && console.error && console.error("Unmatched route: " + p);
            a.statik("not-found")
        });
        Backbone.history.handlers.reverse();
        this.view = new SC.ApplicationView({
            model: new SC.Application
        });
        if (SC.authorization.isLoggedIn) SC.followings = SC.followings || this.fetchFollowings();
        else !SC.authorization.isLoggedIn && SC.iOSWebView && SC.OpenInApp.initialize()
    },
    fetchFollowings: function () {
        var a = new SC.Followings;
        a.fetch();
        return a
    },
    cookiesForLogin: function () {
        SC.authorization.isLoggedIn ? Backbone.history.replaceLocation("/dashboard") : Backbone.history.replaceLocation("/login")
    },
    login: function (a, d) {
        if (SC.authorization.isLoggedIn) d = "login/login-logout";
        this.renderPage(new SC.LoginView({
            model: new SC.Login,
            returnTo: a,
            tmpl: d || "login/login"
        }))
    },
    password: function () {
        this.renderPage(new SC.PasswordView({
            model: new SC.Password({})
        }))
    },
    facebookLogin: function (a) {
        (new SC.Login.Facebook)
            .authorize(a)
    },
    signup: function (a) {
        this.renderPage(new SC.SignupView({
            model: new SC.Signup({}),
            returnTo: a,
            tmpl: SC.authorization.isLoggedIn ? "signup/signup-logout" : "signup/signup"
        }))
    },
    logout: function (a) {
        new SC.Logout({
            returnTo: a || "/"
        })
    },
    error: function (a) {
        this.renderPage(new SC.ErrorView({
            model: new SC.Error({
                text: a
            })
        }))
    },
    statik: function (a) {
        a = new SC.StaticView({
            model: new Backbone.Model,
            tmpl: "static/" + a
        });
        this.renderPage(a);
        a.render()
    },
    home: function () {
        this.renderPage(new SC.HomeView({
            model: new SC.Home,
            subpage: "tracks"
        }))
    },
    peoplefinder: function (a) {
        var d;
        d = a === "peoplefinder" ? new SC.PeopleFinder : a === "friends" ? new SC.FindFriends : new SC.SuggestedPeople;
        this.renderPage(new SC.PeopleFinderView({
            model: d,
            subpage: a
        }))
    },
    search: function (a, d, g) {
        g = !d && g ? true : false;
        if (this.isCurrent(SC.SearchView, "query", d)) {
            this.current.options.subpage = a;
            this.current.initSubPage()
        } else this.renderPage(new SC.SearchView({
                model: new SC.Search({
                    type: a,
                    query: d
                }),
                subpage: a,
                explore: g
            }))
    },
    track: function (a, d, g, i) {
        if (i && !SC.authorization.isLoggedIn && g ===
            "for") this.login("/" + a + "/" + d, "login/login-private-track", i);
        else {
            a = new SC.Track({
                user: a,
                permalink: d
            }, g);
            this.renderPage(new SC.TrackView({
                model: a,
                tmpl: "track/track"
            }))
        }
    },
    playlist: function (a, d, g) {
        this.renderPage(new SC.PlaylistView({
            model: new SC.Playlist({
                user: a,
                permalink: d
            }, g)
        }))
    },
    tag: function (a) {
        this.renderPage(new SC.TagView({
            model: new SC.Tag({
                name: a
            }),
            subpage: "tracks"
        }))
    },
    user: function (a, d) {
        d = d === "follow" ? "tracks" : d;
        if (this.isCurrent(SC.UserView, "permalink", a)) {
            this.current.options.subpage = d;
            this.current.initSubPage()
        } else this.renderPage(new SC.UserView({
                model: new SC.User({
                    permalink: a
                }),
                subpage: d
            }))
    },
    settings: function () {
        SC.authorization.isLoggedIn ? this.renderPage(new SC.SettingsView({
            model: new SC.Settings
        })) : Backbone.history.saveLocation("/login?return_to=" + Backbone.history.getFragment())
    },
    signupDetails: function () {
        this.renderPage(new SC.SettingsView({
            tmpl: "signup/details",
            model: new SC.Settings,
            newUser: true
        }))
    },
    youFollow: function (a) {
        this.renderPage(new SC.YouFollowView({
            model: new SC.You({}),
            tmpl: "you/you",
            subpage: a || "followers"
        }))
    },
    youStart: function () {
        this.renderPage(new SC.YouStartView({
            model: new SC.You({})
        }))
    },
    you: function (a) {
        if (this.isCurrent(SC.YouView)) {
            this.current.options.subpage = a;
            this.current.initSubPage()
        } else this.renderPage(new SC.YouView({
                model: new SC.You({}),
                subpage: a || "tracks"
            }))
    },
    stream: function (a) {
        a = a || "all";
        if (this.isCurrent(SC.StreamView)) {
            this.current.options.subpage = a;
            this.current.initSubPage()
        } else this.renderPage(new SC.StreamView({
                model: new SC.StreamList,
                subpage: a
            }))
    },
    activity: function (a) {
        a = a || "all";
        if (this.isCurrent(SC.ActivitiesView)) {
            this.current.options.subpage = a;
            this.current.initSubPage()
        } else this.renderPage(new SC.ActivitiesView({
                model: new SC.ActivitiesList,
                subpage: a
            }))
    },
    group: function (a, d) {
        if (this.isCurrent(SC.GroupView, "permalink", a)) {
            this.current.options.subpage = d;
            this.current.initSubPage()
        } else this.renderPage(new SC.GroupView({
                model: new SC.Group({
                    permalink: a
                }),
                subpage: d
            }))
    },
    renderPage: function (a) {
        this.current && this.current.unbindFromDocument();
        this.current = a;
        this.view.renderPage(a)
    },
    isCurrent: function (a, d, g) {
        return this.current && this.current.constructor === a && this.current.model.attributes[d] === g
    }
});
SC.ApplicationView = SC.PageView.extend({
    el: "#wrapper",
    events: {
        "click .list-items li a": "listItemClick",
        "click a[href^='/']": "pageClick",
        "click a.main-site": "mainSiteClick",
        "click .app-text": "getNativeApp",
        "click .record-teaser": "getNativeApp",
        "click a[href='#wrapper']": "scrollToTop"
    },
    delegateTouchEvents: function () {
        $(this.el)
            .delegate('a[href^="/"], #header a.search, a.main-site, .button-sc:not(a[href^="http"])', "touchstart", _.bind(this.touchStart, this))
            .delegate("a.touchStart", "touchmove", _.bind(this.touchMoved,
            this))
            .delegate("a.touchStart", "touchend", _.bind(this.touchHighlight, this))
            .delegate("a.touchStart", "click", _.bind(this.pageClick, this))
    },
    initialize: function () {
        this.header = $("#header");
        document.documentElement.hasOwnProperty("ontouchstart") && this.delegateTouchEvents();
        SC.tmpl("trackitem", []);
        SC.tmpl("useritem", []);
        SC.tmpl("groupitem", []);
        SC.tmpl("playlistitem", []);
        this.updateLoginStatus();
        this.audioFinish = this.audioPause;
        this.bindToDocument("audioPlay audioPause audioFinish");
        _.bindAll(this, "updateNavigation",
            "mainSiteClick", "updateLoginStatus", "resolveAndroidStream", "renderUsernameSharingLabel");
        $(document)
            .bind("loadurl", this.updateNavigation)
            .bind("audioFinalStreamRequired", this.resolveAndroidStream)
            .bind("loginSuccess", this.updateLoginStatus)
            .bind("signupSuccess", this.updateLoginStatus)
            .bind("renderUsernameSharingLabel", this.renderUsernameSharingLabel)
            .bind("renderUserCommentsDetails", this.renderUserCommentsDetails);
        $(this.el)
            .addClass(this.model.getPlatform());
        SC.authorization.isLoggedIn && this.getUserImage();
        this.appSearchView = new SC.ApplicationSearchView({
            model: new Backbone.Model
        })
    },
    audioPlay: function (a, d) {
        var g = d.uri.split("secret_token=")[1] || "";
        if (g) g = "/" + g;
        g = "/" + d.user.permalink + "/" + d.permalink + g;
        $("#now-playing")
            .attr("href", g);
        this.header.addClass("playing");
        this.updateNavigation(a, g)
    },
    audioPause: function () {
        this.header.removeClass("playing")
    },
    updateLoginStatus: function () {
        var a = this.model.toJSON()
            .authStatus;
        $(document.body)
            .removeClass("loggedIn loggedOut")
            .addClass(a);
        a === "loggedIn" && this.getUserImage()
    },
    getUserImage: function () {
        (new SC.You)
            .fetch({
            success: function (a) {
                $(".labelled-icon-you img", this.el)
                    .attr("src", a.toJSON()
                    .avatar_url)
            }
        })
    },
    touchStart: function (a) {
        a = $(a.target)
            .closest("a");
        a.addClass("touchStart");
        if (a.attr("href")) {
            a.data("href", a.attr("href"));
            a.removeAttr("href")
        }
    },
    touchHighlight: function (a) {
        a = $(a.target)
            .closest("a");
        var d = a.closest("li");
        a.addClass("pressed");
        d[0] && d.addClass("pressed")
    },
    touchMoved: function (a) {
        this.touchEnd($(a.target)
            .closest("a"))
    },
    touchEnd: function (a) {
        a.removeClass("touchStart");
        a.data("href") && a.attr("href", a.data("href"))
            .removeData("href");
        _.delay(function () {
            a.removeClass("pressed");
            var d = a.closest("li");
            d.length === 1 && d.removeClass("pressed")
        }, 300)
    },
    pageClick: function (a) {
        var d = $(a.target)
            .closest("a"),
            g = d.data("href") || d.attr("href");
        if (d) this.touchEnd(d);
        else g = d.attr("href"); if (/^https?:\/\//.test(g) || d.attr("target") || a.metaKey || a.shiftKey || a.ctrlKey) return true;
        g && Backbone.history.saveLocation(g);
        a.preventDefault()
    },
    renderPage: function (a) {
        var d = this;
        $("#page")
            .empty()
            .append(a.el);
        this.hideAddressBar();
        a.bind("render", this.hideAddressBar);
        a.bind("renderSubScroll", function () {
            a.unbind("renderSubScroll");
            d.hideAddressBar()
        });
        this.appSearchView.initSearchForm(a)
    },
    renderUsernameSharingLabel: function (a, d, g) {
        if (d && d.permalink) {
            a = $('a[href="' + ("/" + g.user.permalink + "/" + g.permalink) + '"]');
            g = $('a[href="/' + g.user.permalink + '"]');
            a.find(".sharing-label")
                .text(d.permalink);
            g.siblings(".sharing-label")
                .text(d.permalink)
        }
    },
    scrollToTop: function (a) {
        this.hideAddressBar();
        a.preventDefault()
    },
    getNativeApp: function () {
        $(document)
            .trigger("getNativeApp", Backbone.history.getFragment());
        window.open(this.model.toJSON()
            .appUrl)
    },
    mainSiteClick: function () {
        var a = new Date;
        a.setMonth(a.getMonth() + 1);
        document.cookie = "nomob=1; path=/; domain=" + this.model.toJSON()
            .mainHost + "; expires=" + a.toUTCString()
    },
    updateNavigation: function (a, d) {
        $("a.main-site", this.el)
            .attr("href", "http://" + this.model.toJSON()
            .mainHost + d);
        var g = function (i) {
            d = '[href="' + i + '"]'
        };
        if (this.header.hasClass("playing") && $(".page-content")
            .hasClass("track") ||
            /activities/.test(d)) g(d);
        else if (d === "/login") g("/signup");
        else if (/\/people/.test(d)) g("/you");
        else if (/search/.test(d)) d = ".search";
        else g(d.replace(/\/(.+?)\/.+/, "/$1"));
        $("#header a")
            .removeClass("active")
            .filter(d)
            .addClass("active")
    },
    resolveAndroidStream: function (a, d) {
        (new SC.Track.AndroidStreaming({
            stream_url: d.track.stream_url
        }))
            .fetch({
            success: function (g, i) {
                d.track.stream_url = i.streamUrl;
                $(document)
                    .trigger(d.triggerEvent, d.track)
            }
        })
    },
    listItemClick: function (a) {
        a = $(a.currentTarget);
        if (!(a.closest("ul")
            .hasClass("list-suggestions") ||
            a.closest(".activities")
            .hasClass("own"))) SC.cachedListItem = a.tmplItem()
                .data
    },
    renderUserCommentsDetails: function (a, d) {
        _.each(d.tracks, function (g) {
            if (g.error && g.error.status && g.error.id) $("body")
                    .find("li[data-sc-track-id=" + g.error.id + "]")
                    .addClass("empty");
            else {
                var i = $("body")
                    .find("li[data-sc-track-id=" + g.id + "]");
                if (i.find(".title")
                    .text()
                    .length === 0) {
                    var n = i.find(".user"),
                        p = i.find(".title");
                    n.text(g.user.username + "'s")
                        .attr("href", encodeURI("/" + g.user.permalink));
                    p.text(g.title + "'s")
                        .attr("href",
                        "/" + g.user.permalink + "/" + g.permalink);
                    g = SC.authorization.isLoggedIn && g.user.username === SC.localStorage.getItem("sc-auth-username") ? "active owner" : "active";
                    i.addClass(g)
                }
            }
        })
    }
});
SC.ApplicationSearchView = SC.PageView.extend({
    el: "#wrapper",
    options: {
        tmpl: "search/search-view"
    },
    events: {
        "click #header a.search": "searchClick",
        "click .search-placeholder a.close": "closeSearch",
        "click .searchword": "searchClick",
        "focus #q": "searchUserFocus",
        "submit form.search": "runSearch",
        "touchstart ul.list-suggestions": "hideKeyboard"
    },
    initialize: function () {
        var a = this;
        this.renderModel(this.model.toJSON(), $(".search-placeholder", this.el), this.options.tmpl);
        _.defer(function () {
            a.initSuggestionsView()
        });
        $(document)
            .bind("loginSuccess", function () {
            a.initSuggestionsModel()
        })
    },
    initSearchForm: function (a) {
        this.searchView = a;
        var d = $(this.el);
        if (a instanceof SC.SearchView) {
            d.addClass("search");
            this.query = a.model.toJSON()
                .query.replace(/q=/, "")
                .replace(/\+/g, " ");
            $(".searchword span", this.el)
                .text(this.query);
            if (!a.options.explore && !this.query) {
                d.addClass("no-query");
                $("a.search", this.el)
                    .click()
            }
            if (this.query) {
                d.removeClass("no-query");
                this.toggleSearch(false)
            }
        } else {
            this.toggleSearch(false);
            d.removeClass("no-query search")
        }
        this.render()
    },
    initSuggestionsView: function () {
        this.SuggestionsView = new SC.SuggestionsView({
            model: new SC.Suggestions
        })
    },
    initSuggestionsModel: function () {
        this.SuggestionsView && this.SuggestionsView.model && this.SuggestionsView.model.toJSON()
    },
    render: function () {
        this.trigger("render")
    },
    hideKeyboard: function () {
        var a = this;
        $(document.activeElement)
            .filter("#q")
            .each(function () {
            var d = $(this);
            d.css("display", "none");
            _.delay(function () {
                d.css("display", "");
                d.blur()
            }, 50);
            $(a.el)
                .addClass("user-interaction")
        })
    },
    updateSearchForm: function () {
        var a =
            this.searchView;
        a instanceof SC.SearchView && $("form.search")
            .attr("action", function (d, g) {
            return g.replace(/^\/\w+?\//, "/" + a.options.subpage + "/")
        })
    },
    closeSearch: function () {
        var a = this;
        $(this.el)
            .removeClass("searching");
        _.defer(function () {
            a.initSuggestionsView()
        })
    },
    toggleSearch: function (a) {
        $(this.el)
            .toggleClass("searching", a)
    },
    searchClick: function (a) {
        this.toggleSearch();
        $(a.target)
            .is("a.search, .searchword span") ? this.updateSearchForm() : this.hideKeyboard();
        $(".searching #q")
            .one("focus", this.searchAutoFocus)
            .focus();
        this.render()
    },
    searchAutoFocus: function (a) {
        a.preventDefault();
        var d = $(this);
        d.addClass("outside")
            .one("focus", function () {
            _.defer(function () {
                d.removeClass("outside")
            })
        });
        d.focus()
    },
    searchUserFocus: function () {
        $(this.el)
            .removeClass("user-interaction")
    },
    convertToSearchItem: function (a) {
        a = a.match(/^q=(.*)/)[1];
        if (a = SC.usertext.withDefaults({
            whitelist: [],
            paragraphs: false,
            externalLinks: false,
            userLinks: false,
            internalLinks: false
        })(a)) {
            var d = decodeURIComponent(a.replace(/\+/g, " "));
            return {
                title: d,
                matchedTitle: d,
                link: "/tracks/search?q=" + encodeURIComponent(a),
                type: "search"
            }
        }
    },
    saveSearch: function (a) {
        if (a) {
            var d = SC.localStorage.getItem("sc-search");
            d = d ? JSON.parse(d) : [];
            d.unshift(this.convertToSearchItem(a));
            d = _.uniq(d, false, function (g) {
                if (g.type) return g.title + g.type;
                return g
            })
                .slice(0, 20);
            SC.localStorage.setItem("sc-search", JSON.stringify(d))
        }
    },
    runSearch: function (a) {
        a.preventDefault();
        $(this.el)
            .removeClass("suggesting searching");
        var d = $(a.target);
        a = d.attr("action");
        d = decodeURIComponent(d.serialize());
        this.saveSearch(d);
        Backbone.history.saveLocation(a + "?" + d);
        this.hideKeyboard();
        this.closeSearch()
    }
});
SC.TrackView = SC.PageView.extend({
    options: {
        tmpl: "track/track"
    },
    events: {
        "touchstart .controls button": "pressPlay",
        "click .controls button": "toggleAudio",
        "click div.scrubber": "seekAudio",
        "touchmove div.scrubber": "seekAudio",
        "touchend div.scrubber": "seekAudio",
        "click .favorite": "toggleFavorite",
        "click .artwork": "toggleArtwork"
    },
    initialize: function () {
        this.viewState = {};
        this.bind("renderPlaceholder", this.placeholderRendered);
        this.bind("render", this.showInfo);
        SC.PageView.prototype.initialize.apply(this, arguments);
        this.bindToDocument("audioStart audioPlay audioPause audioFinish audioLoad audioTime");
        this.modelCached() || this.renderPlaceHolder("track/track-loading", {
            track: {
                user: {}
            }
        });
        _.bindAll(this, "renderComments", "placeholderRendered", "showInfo");
        this.model.bind("change", this.renderComments);
        this.sizeArtworkPlaceholder()
    },
    renderPlaceHolder: function (a, d) {
        var g = SC.cachedListItem;
        d = g && g.track ? g : g ? {
            track: g
        } : d;
        delete SC.cachedListItem;
        this.renderModel(d, this.el, a);
        this.trigger("renderPlaceholder", d)
    },
    placeholderRendered: function (a) {
        if (a.title !==
            undefined) {
            $(".info", this.el)
                .removeClass("hidden");
            this.viewState.prerendered = true
        } else this.viewState.prerendered = false
    },
    showInfo: function () {
        var a = $(".info", this.el);
        if (this.viewState.prerendered) {
            a.removeClass("transition");
            _.delay(function () {
                a.addClass("transition")
            }, 300)
        }
        a.removeClass("hidden")
    },
    renderComments: function () {
        var a = this;
        (new SC.Track.Comments(this.model.toJSON()))
            .bind("reset", function (d) {
            a.renderModel(d.toJSON(), $(".comments ul", a.el), "track/track-comments");
            a.trigger("renderComments")
        })
            .fetch();
        this.model.unbind("change", this.renderComments)
    },
    audioStart: function (a, d) {
        if (this.isOurTrack(d)) {
            $(this.el)
                .addClass("active playing");
            this.updateProgress(0, 0)
        }
    },
    audioPlay: function (a, d, g, i) {
        if (this.isOurTrack(d)) {
            $(this.el)
                .addClass("active playing");
            this.updateProgress(g * 100 + "%", i)
        }
    },
    audioPause: function (a, d) {
        this.isOurTrack(d) && $(this.el)
            .removeClass("playing")
    },
    audioFinish: function (a, d) {
        if (this.isOurTrack(d)) {
            $(this.el)
                .removeClass("playing");
            this.updateProgress(0, 0)
        }
    },
    audioLoad: function (a, d, g) {
        this.isOurTrack(d) &&
            this.updateLoad(g)
    },
    audioTime: function (a, d, g, i) {
        if (this.isOurTrack(d)) {
            $(this.el)
                .addClass("active playing");
            this.updateProgress(g * 100 + "%", i)
        } else $(this.el)
                .removeClass("active playing")
    },
    isOurTrack: function (a) {
        return a.id === this.model.attributes.id
    },
    updateLoad: function (a) {
        $("div.progress-load:first", this.el)
            .css({
            width: Math.floor(a * 100) + "%"
        })
    },
    updateProgress: function (a, d) {
        var g = $(".artwork", this.el)
            .width() === 180,
            i = $("div.progress-play:first", this.el)
                .css("width", parseFloat(a, 10)
                .toFixed(2) + "%");
        $("b.duration", this.el)
            .hide();
        $("b.position", this.el)
            .position({
            my: g ? "center top" : "center bottom",
            at: g ? "right bottom" : "right top",
            collision: "fit",
            of: i
        })
            .find("span.current")
            .text(SC.time.timecode(d))
    },
    decorate: function (a) {
        $(document)
            .trigger("trackInit", a);
        $(this.el);
        _.defer(function () {
            $(".player", this.el)
                .removeClass("hide")
        }, this);
        $(".waveform", this.el)
            .load(function () {
            $(this)
                .removeClass("hide")
        });
        $(".artwork .huge", this.el)
            .load(function () {
            $(this)
                .removeClass("hide")
        });
        $(this.el)
            .find(".artwork")
            .css("min-height",
            this.artworkWidth);
        this.shareView = new SC.ShareView({
            model: new SC.Share(a),
            el: $(".share-view", this.el)
        });
        $("b.duration", this.el)
            .position({
            my: "right bottom",
            at: "right top",
            of: $(".waveform", this.el)
        });
        this.model.attributes.genre && $(this.el)
            .find(".tag:first")
            .addClass("genre-tag");
        $(this.el)
            .find(".artwork img")
            .load(function () {
            $(this)
                .removeClass("fade")
        });
        SC.authorization.isLoggedIn && (new SC.Track.Favorite({
            id: this.model.attributes.id
        }))
            .fetch({
            success: _.bind(function () {
                this.updateFavoriteButton()
            },
                this),
            error: _.bind(function () {
                if (window.sessionStorage.getItem("sc-logged-out-favorite") === Backbone.history.getFragment()) {
                    window.sessionStorage.removeItem("sc-logged-out-favorite");
                    $(".favorite", this.el)
                        .click()
                }
            }, this)
        });
        if (SC.iOSWebView) {
            a = this.model.secret ? "?secret_token=" + this.model.secret : "";
            SC.OpenInApp.$el.find(".text")
                .text("Play in App");
            SC.OpenInApp.$el.attr("href", "soundcloud:sounds:" + this.model.attributes.id + "#play" + a)
        }
    },
    toggleFavorite: function (a) {
        if (SC.authorization.isLoggedIn) {
            a = $(a.currentTarget)
                .is(".favorite-active");
            (new SC.Track.Favorite({
                id: this.favoriteId()
            }))[a ? "destroy" : "save"]();
            this.updateFavoriteButton()
        } else {
            a = Backbone.history.getFragment();
            Backbone.history.saveLocation("/login?return_to=" + a);
            window.sessionStorage.setItem("sc-logged-out-favorite", a)
        }
    },
    favoriteId: function () {
        return this.model.attributes.id
    },
    updateFavoriteButton: function () {
        $(this.el)
            .find(".favorite")
            .toggleClass("favorite-active")
            .find(".stats .favorites")
            .toggleClass("favorited")
    },
    pressPlay: function (a) {
        $(a.target)
            .addClass("pressed")
            .closest(".controls")
            .addClass("pressed")
    },
    toggleAudio: function (a) {
        $(a.target)
            .removeClass("pressed")
            .closest(".controls")
            .removeClass("pressed");
        $(document)
            .trigger("trackToggle", this.model.toJSON());
        this.loadSharingWidgets()
    },
    loadSharingWidgets: function () {
        if (!$(".sharing-widgets", this.el)[0]) this.sharingWidgets = new SC.SharingWidgets({
                model: this.model,
                el: $(".sharing-widgets-container", this.el)
            })
    },
    seekAudio: function (a) {
        var d = $(a.currentTarget);
        if (d.closest(".playing")[0]) {
            var g = d.find("div.progress-load"),
                i = 0;
            i = /touch/.test(a.originalEvent.type) ?
                a.originalEvent.changedTouches[0].clientX : a.pageX;
            a = g.width() === 0 ? d.width() : g.width();
            d = Math.min(i - d.offset()
                .left, a) / d.width();
            $(document)
                .trigger("trackSeek", d)
        } else d.closest(".player")
                .find(".play")
                .click()
    },
    toggleArtwork: function () {
        if (!$(".track .artwork", this.el)
            .hasClass("swiping")) {
            clearTimeout(this.artworkTimeout);
            var a = $(".track", this.el);
            if (a.hasClass("show-artwork")) this.viewState.showArtwork = false;
            else {
                this.viewState.showArtwork = true;
                this.artworkTimeout = setTimeout(function () {
                    a.removeClass("show-artwork")
                },
                    5E3)
            }
            a.toggleClass("show-artwork")
        }
    }
});
SC.extend("Track", SC.Model, {
    defaults: {},
    initialize: function (a, d) {
        this.secret = d;
        if (!this.attributes.id) if (this.attributes.permalink) {
                if (!this.attributes.user) throw "SC.Track needs user attribute passed";
            } else throw "SC.Track needs permalink attribute passed";
    },
    prepare: function (a, d) {
        if (!(a.tracks || d)) {
            if (!a.artwork_url && !SC.images.isDefault(a.user.avatar_url)) a.artwork_url = a.user.avatar_url;
            a.artwork_url_huge = a.artwork_url ? SC.images.makeHuge(a.artwork_url) : null
        }
        a.user.avatar_url = SC.images.isDefault(a.user.avatar_url) ?
            undefined : a.user.avatar_url;
        a.shared = $.prettyDate.format(a.created_at);
        a.duration_timecode = SC.time.timecode(a.duration);
        a.released = a.release_year ? $.prettyDate.format((new Date(a.release_year, a.release_month, a.release_day))
            .toString()) : null;
        this.addSharingLabel(a);
        a.stream_url = SC.authorization.signStream(a.stream_url);
        if (a.tag_list) {
            var g = /(\w+)\:(\w+)=(.+)/,
                i = _.map((a.tag_list || "")
                    .match(/[\w'\-\:\=\.]+|"[^"]+"/g), function (n) {
                    return n.replace(/^\s*"\s*|\s*"\s*$/g, "")
                });
            a.genre && i.unshift(a.genre);
            i = _.select(i, function (n) {
                return !g.test(n)
            });
            a.tags = _.map(i, function (n) {
                return n.replace(/"/g, "")
            })
        } else if (a.genre) a.tags = [a.genre];
        if (a.description) a.formatted_description = this.formatText(a.description);
        if (a.created_with) a.formatted_created_with = 'Created with <a href="' + a.created_with.permalink_url + '">' + a.created_with.name + "</a>";
        if (typeof a.tracks === "undefined") a.purchase_title = SC.OnlineStores.getPurchaseTitle(a);
        a.canPlayTrack = SC.hasNativeAudio
    },
    url: function () {
        var a = "http://soundcloud.com/" + this.attributes.user +
            "/" + this.attributes.permalink + (this.secret ? "/" + this.secret : "");
        return this.attributes.id ? "/tracks/" + this.attributes.id : "/resolve?url=" + a
    }
});
SC.extend("Track.AndroidStreaming", Backbone.Model, {
    authorized: true,
    url: function () {
        return "/../_androidStream/resolve?url=" + this.attributes.stream_url
    }
});
SC.extend("Track.Comments", Backbone.Collection, {
    model: SC.Comment,
    initialize: function (a) {
        this.url = a.uri.replace(/(http|https):\/\/api\.soundcloud\.com/, "")
            .replace(a.id, a.id + "/comments")
    }
});
SC.extend("Track.Favorite", Backbone.Model, {
    authorized: true,
    acceptErrors: [404],
    url: function () {
        return "/me/favorites/" + this.attributes.id
    }
});
SC.extend("Track.Permissions", Backbone.Model, {
    url: function () {
        var a = this.attributes;
        return SC.url.relativeUrl(a.uri)
            .replace(a.id, a.id + "/permissions")
    }
});
SC.PlaylistView = SC.TrackView.extend({
    options: {
        tmpl: "playlist/playlist"
    },
    initialize: function () {
        this.viewState = {};
        this.bind("renderPlaceholder", this.placeholderRendered);
        SC.PageView.prototype.initialize.apply(this, arguments);
        this.modelCached() || this.renderPlaceHolder("playlist/playlist-loading", {
            user: {},
            tracks: [{}]
        });
        this.bindToDocument("audioStart audioPlay audioPause audioFinish audioLoad audioTime");
        $(this.el)
            .delegate(".toggle-list", "click", _.bind(this.togglePlaylist, this));
        $(this.el)
            .delegate(".playlist-tracks li",
            "click", _.bind(this.selectTrack, this));
        $(document)
            .one("audioTime." + this.cid, _.bind(this.audioPlaying, this));
        this.sizeArtworkPlaceholder();
        $(this.el)
            .delegate(".artwork", "swipe", _.bind(this.swipeTrack, this));
        this.artwork = {}
    },
    isWithinPlaylist: function (a) {
        a = this.model.current + a;
        return 0 <= a && a < this.model.attributes.tracks.length
    },
    swipeTrack: function (a, d) {
        if (this.viewState.transitioning !== false) {
            var g = d.point.swipe,
                i = d.point.state,
                n = g.direction === "left" ? 1 : -1,
                p = this.isWithinPlaylist(n);
            if (i === "start") {
                $(".track .artwork")
                    .addClass("swiping");
                this.trackInfo = $(this.el)
                    .find(".track .now-playing .info-wrap");
                this.viewState.swiping = true;
                this.viewState.swiped = false
            }
            if (this.viewState.swiping === true) {
                if (i === "move") {
                    this.trackInfo.removeClass("transition")
                        .css("-webkit-transform", "translate3d(0, " + g.distance.x * -0.5 + "px, 0)");
                    this.artwork.current.css("-webkit-transform", "translate3d(" + g.delta.x + "px, 0, 0)");
                    this.artwork.next && this.artwork.next.css("-webkit-transition-duration", "0ms")
                        .css("-webkit-transform", "translate3d(" + (g.delta.x + 340) + "px, 0, 0)");
                    this.artwork.prev && this.artwork.prev.css("-webkit-transition-duration", "0ms")
                        .css("-webkit-transform", "translate3d(" + (g.delta.x + -340) + "px, 0, 0)")
                }
                if (i === "end") {
                    this.viewState.transitioning = false;
                    this.viewState.swiping = false;
                    var t = this;
                    if (g.accepted === true && p) {
                        this.viewState.prerendered = false;
                        this.viewState.swiped = true;
                        this.skipTrackWithTransition(n, true, g.velocity, function () {
                            $(".track .artwork")
                                .removeClass("swiping");
                            t.viewState.transitioning = true
                        })
                    } else {
                        i = $(this.el)
                            .find(".track .artwork .huge");
                        n = $(".track .artwork ." + (n === 1 ? "next" : "prev"));
                        t.trackInfo.addClass("transition")
                            .css("-webkit-transform", "translate3d(0, 0, 0)");
                        this.returnViewsWithTransition(i, n, g.direction, true, function () {
                            $(".track .artwork")
                                .removeClass("swiping");
                            t.viewState.transitioning = true
                        })
                    }
                }
            }
        }
    },
    makeSkipPlaceholder: function (a, d) {
        this.model.current += d;
        var g = this.model.toJSON()
            .track;
        if (g !== undefined) {
            var i = d === 1 ? "105%" : "-105%";
            return $("<img>")
                .attr("src", g.artwork_url)
                .attr("class", d === 1 ? "next" : "prev")
                .css("-webkit-transform",
                "translate3d(" + i + ", 0, 0)")
                .prependTo(".track .artwork", this.el)
        }
    },
    skipTrackWithTransition: function (a, d, g, i) {
        var n = this.model.current + a,
            p = a === 1 ? "left" : "right",
            t = this;
        $(document)
            .trigger("trackPause", this.currentTrack);
        if (d) {
            var H = $(this.el)
                .find(".track .artwork .huge");
            a = $(".track .artwork ." + (a === 1 ? "next" : "prev"));
            this.popViewWithTransition(H, p, g, function () {
                H.remove()
            });
            t.pushViewWithTransition(a, p, g, function () {
                t.model.current = n;
                t.render();
                typeof i !== undefined && i()
            })
        } else {
            this.model.current = n;
            this.render()
        }
    },
    popViewWithTransition: function (a, d, g, i) {
        var n = d === "left" ? "-105%" : "105%";
        a.css("-webkit-transition", "-webkit-transform cubic-bezier(0, " + Math.min(g * 0.75, 1) + ", 0.5, 1) 500ms");
        _.defer(function () {
            a.css("-webkit-transform", "translate3d(" + n + ", 0, 0)")
        });
        _.delay(function () {
            typeof i !== undefined && i()
        }, 500)
    },
    pushViewWithTransition: function (a, d, g, i) {
        var n = "-webkit-transform cubic-bezier(0, " + Math.min(g * 0.75, 1) + ", 0.5, 1) 500ms";
        a.css("-webkit-transition-duration", "0ms");
        _.defer(function () {
            a.css("-webkit-transition",
                n)
                .css("-webkit-transform", "translate3d(0, 0, 0)")
        });
        _.delay(function () {
            a.css("-webkit-transition-duration", "0ms");
            typeof i !== undefined && i()
        }, 500)
    },
    returnViewsWithTransition: function (a, d, g, i, n) {
        g = g === "left" ? "105%" : "-105%";
        if (i) {
            a.css("-webkit-transition-duration", "400ms")
                .css("-webkit-transform", "translate3d(0, 0, 0)");
            d.css("-webkit-transition-duration", "400ms")
                .css("-webkit-transform", "translate3d(" + g + ", 0, 0)");
            _.delay(function () {
                a.css("-webkit-transition-duration", "0ms");
                d.css("-webkit-transition-duration",
                    "0ms");
                typeof n !== undefined && n()
            }, 400)
        } else {
            a.css("-webkit-transition-duration", "0ms")
                .css("-webkit-transform", "translate3d(0, 0, 0)");
            d.css("-webkit-transition-duration", "400ms")
                .css("-webkit-transform", "translate3d(" + g + ", 0, 0)")
        }
    },
    renderPlaceHolder: function (a, d) {
        d = SC.cachedListItem || d;
        d.track = d.tracks[0];
        if (SC.cachedListItem !== undefined) d.artwork_url = this.model.selectSetArtwork(d);
        delete SC.cachedListItem;
        this.renderModel(d, this.el, a);
        this.trigger("renderPlaceholder", d)
    },
    isOurTrack: function (a) {
        return a.id ===
            this.model.attributes.tracks[this.model.current].id
    },
    toggleAudio: function (a) {
        $(a.target)
            .removeClass("pressed")
            .closest(".controls")
            .removeClass("pressed");
        $(document)
            .trigger("trackToggle", this.currentTrack);
        this.loadSharingWidgets()
    },
    togglePlaylist: function () {
        var a = $(this.el);
        a.toggleClass("open-playlist");
        a.find(".playlist-details")
            .css("min-height", a.find(".artwork")
            .height())
    },
    audioPlaying: function (a, d) {
        var g;
        _.each(this.model.attributes.tracks, function (i, n) {
            if (i.id === d.id) {
                g = n;
                return false
            }
        },
            this);
        if (this.model.current !== g) {
            this.model.current = g;
            this.render()
        }
        this.audioPlay(a, d)
    },
    audioFinish: function (a) {
        SC.TrackView.prototype.audioFinish.apply(this, arguments);
        var d = this.model.current + 1;
        if (this.model.attributes.tracks.length === d) d = 0;
        this.selectTrack(a, d)
    },
    selectTrack: function (a, d) {
        a.preventDefault();
        a.stopPropagation();
        d = d !== undefined ? d : +$(a.currentTarget)
            .find("a")
            .data("scIndex");
        this.model.current = d;
        this.render();
        this.toggleAudio(a)
    },
    favoriteId: function () {
        return this.model.toJSON()
            .track.id
    },
    decorate: function (a) {
        this.currentTrack = a.track;
        $(document)
            .trigger("trackInit", a.track);
        var d = this;
        this.viewState.prerendered && $(".info", this.el)
            .removeClass("transition");
        if (this.viewState.swiped) {
            $(".info", this.el)
                .removeClass("transition");
            $(".player", this.el)
                .removeClass("transition")
        }
        this.viewState.showArtwork && $(".track", this.el)
            .addClass("show-artwork");
        _.defer(function () {
            $(".info", this.el)
                .removeClass("hidden");
            $(".now-playing .info-wrap", this.el)
                .removeClass("hidden");
            $(".player", this.el)
                .removeClass("hide");
            _.defer(function () {
                $(".info", this.el)
                    .addClass("transition");
                $(".player", this.el)
                    .addClass("transition")
            }, this)
        }, this);
        $(".waveform", this.el)
            .load(function () {
            $(this)
                .removeClass("hide")
        });
        $(".artwork .huge", this.el)
            .load(function () {
            var g = $(this);
            g.removeClass("hide");
            d.artwork.current = g;
            setTimeout(function () {
                g.removeClass("transition");
                $(".artwork img:not(.huge)", this.el)
                    .hide();
                var i = d.model.current;
                d.artwork.next = d.makeSkipPlaceholder(d.model, 1);
                d.model.current = i;
                d.artwork.prev = d.makeSkipPlaceholder(d.model, -1);
                d.model.current = i
            }, 500)
        });
        $(this.el)
            .find(".artwork")
            .css("min-height", this.artworkWidth);
        this.model.attributes.genre && $(this.el)
            .find(".tag:first")
            .addClass("genre-tag");
        this.trackShareView = new SC.ShareView({
            model: new SC.Share(a.track),
            el: $(".track-share-view", this.el)
        });
        this.playlistShareView = new SC.ShareView({
            model: new SC.Share(a),
            el: $(".playlist-share-view", this.el)
        });
        this.playlistShareView.el.find("button span")
            .text("Share this set");
        $("b.duration", this.el)
            .position({
            my: "right bottom",
            at: "right top",
            of: $(".waveform", this.el)
        });
        $(this.el)
            .find(".playlist-tracks li:eq(" + this.model.current + ")")
            .addClass("now-playing-track")
            .find("a")
            .prepend('<label class="now-playing-icon">Now playing: </label>');
        if (SC.iOSWebView) {
            a = this.model.secret ? "?secret_token=" + this.model.secret : "";
            SC.OpenInApp.$el.find(".text")
                .text("Play in App");
            SC.OpenInApp.$el.attr("href", "soundcloud:sounds:" + this.model.attributes.tracks[0].id + "#play" + a)
        }
    }
});
SC.extend("Playlist", SC.Track, {
    current: 0,
    url: function () {
        return "/resolve?url=http://soundcloud.com/" + this.attributes.user + "/sets/" + this.attributes.permalink + (this.secret ? "/" + this.secret : "")
    },
    toJSON: function () {
        if (!this.attributes.user.username) return {};
        var a = SC.Track.prototype.toJSON.apply(this, arguments);
        a.tracks_count = a.tracks.length === 1 ? "1 sound" : a.tracks.length + " sounds";
        if (a.description) a.formatted_description = this.formatText(a.description);
        _.each(a.tracks, function (d) {
            this.prepare(d, true);
            d.artwork_url =
                this.selectSetArtwork(a, d);
            d.artwork_url_huge = SC.images.makeHuge(d.artwork_url);
            d.permalink_relative = SC.url.relativeUrl(d.permalink_url);
            if (this.secret) d.permalink_relative += "/" + this.secret
        }, this);
        a.track = a.tracks[this.current];
        a.purchase_title = SC.OnlineStores.getPurchaseTitle(a, "Buy all");
        return a
    },
    selectSetArtwork: function (a, d) {
        d = d || a.track;
        if (!a.artwork_url && !d.artwork_url && !SC.images.isDefault(a.user.avatar_url)) return a.user.avatar_url;
        else if (a.artwork_url && !d.artwork_url) return a.artwork_url;
        return d.artwork_url
    }
});
SC.UserView = SC.PageListView.extend({
    options: {
        tmpl: "user/user"
    },
    initialize: function () {
        SC.PageListView.prototype.initialize.apply(this);
        _.bindAll(this, "setContentTab");
        if (!this.modelCached()) {
            this.renderPlaceHolder("user/user", {});
            this.initTabs()
        }
        this.followingsView = new SC.FollowingsView({
            el: this.el
        });
        this.bind("renderSub", this.decorateSub, this);
        this.model.bind("change", this.setContentTab, this);
        $(this.el)
            .delegate(".profile img, .page-fade", "click", _.bind(this.toggleProfileImage, this))
    },
    renderPlaceHolder: function (a,
        d) {
        d = SC.cachedListItem || d;
        delete SC.cachedListItem;
        this.renderModel(d, this.el, a);
        this.setContentTab(d)
    },
    initTabs: function () {
        var a = this.options.subpage.replace(/^(?:followers|followings|groups|dropbox|comments)$/, "info");
        SC.PageListView.prototype.initTabs.call(this, a)
    },
    decorate: function (a) {
        var d = $(".user-follow", this.el);
        if (SC.authorization.isLoggedIn && !a.isMe) if (_.include(SC.followings.attributes, a.id)) this.followingsView.updateFollowButton(d);
            else {
                if (window.sessionStorage.getItem("sc-logged-out-follow") ===
                    Backbone.history.getFragment()) {
                    window.sessionStorage.removeItem("sc-logged-out-follow");
                    d.click()
                }
            } else SC.authorization.isLoggedIn && a.isMe && d.hide();
        SC.iOSWebView && SC.OpenInApp.$el.attr("href", "soundcloud:people:" + this.model.attributes.id)
    },
    decorateSub: function () {
        this.verifyMoreContent();
        SC.authorization.isLoggedIn && /followers|followings/.test(this.options.subpage) && this.followingsView.decorate()
    },
    setContentTab: function (a) {
        if (a.cid === undefined) a = new SC.User(a);
        var d = this.options.subpage,
            g = {
                tracks: a.get("track_count"),
                favorites: a.get("public_favorites_count"),
                playlists: a.get("playlist_count")
            };
        if (g.tracks !== undefined) {
            _.each(["info", "playlists", "favorites", "tracks"], function (i) {
                if (i === "info" || g[i] > 0) d = i;
                else $('.page-tabs li[data-sc-tab="' + i + '"]', this.el)
                        .addClass("no-content")
            }, this);
            if (this.options.subpage === "tracks") {
                this.options.subpage = d;
                this.initTabs()
            }
        }
    }
});
SC.extend("User", SC.Model, {
    initialize: function () {
        var a = this.resources = ["tracks", "favorites", "playlists", "followers", "followings", "groups", "comments"];
        _.each(a, function (d) {
            var g = this[d] = new SC.List;
            g.acceptErrors = "*";
            if (d === "playlists") d = "sets";
            g.url = "/resolve?url=http://soundcloud.com/" + this.attributes.permalink + "/" + d;
            if (d === "followings") g.url = "/users/" + this.attributes.permalink + "/" + d
        }, this);
        this.info = this;
        this.dropbox = this
    },
    url: function () {
        return "/resolve?url=http://soundcloud.com/" + this.attributes.permalink
    },
    prepare: function (a) {
        _.each(["tracks", "playlists", "favorites", "groups", "comments"], function (i) {
            this[i].url = "/users/" + this.attributes.id + "/" + i;
            if (i === "favorites") this[i].url += "/?order=favorited_at"
        }, this);
        a.isMe = SC.authorization.userIsMe(a);
        _.each([a.tracks, a.playlists, a.favorites], function (i) {
            _.each(i, function (n) {
                this.addSharingLabel(n);
                this.replaceDefaultArtwork(n);
                n.shared = $.prettyDate.format(n.created_at)
            }, this)
        }, this);
        if (a.comments[0]) {
            var d;
            for (d = 0; d < 10; d++) {
                var g = a.comments.slice(d * 5, d * 5 + 5);
                g[0] && this.commentsDetails(g)
            }
            _.each(a.comments, function (i) {
                i.position_timecode = SC.time.timecode(i.timestamp);
                i.shared = $.prettyDate.format(i.created_at);
                i.formatted_body = this.formatText(i.body)
            }, this)
        }
        _.each(a.followers, this.replaceDefaultAvatar);
        _.each(a.followings, this.replaceDefaultAvatar);
        a.share = a.username;
        a.favorite_count = a.favorite_count || a.favorites.length;
        if (a.description) a.formatted_description = this.formatText(a.description)
    },
    commentsDetails: function (a) {
        var d = "";
        _.each(a, function (g) {
            g = "id=" +
                g.track_id;
            d += /\?/.test(d) ? "&" : "?";
            d += g
        });
        (new SC.User.CommentsDetails({
            trackIds: d
        }))
            .fetch({
            success: function (g, i) {
                $(document)
                    .trigger("renderUserCommentsDetails", {
                    tracks: i
                })
            }
        })
    }
});
SC.extend("User.CommentsDetails", Backbone.Model, {
    url: function () {
        return "/../_multiple/tracks/" + this.attributes.trackIds
    }
});
SC.HomeView = SC.PageListView.extend({
    options: {
        tmpl: "home/home"
    }
});
SC.extend("Home", SC.ModelContainer, {
    initialize: function () {
        this.tracks = new SC.List;
        this.tracks.url = "/tracks?limit=25";
        this.set({
            connectUrl: SC.Facebook.connectUrl()
        }, {
            silent: true
        })
    },
    toJSON: function () {
        var a = _.clone(this.attributes);
        a.tracks = this.tracks.toJSON();
        _.each(a.tracks, function (d) {
            (new SC.Model)
                .replaceDefaultArtwork(d);
            d.shared = $.prettyDate.format(d.created_at)
        });
        return a
    }
});
SC.SearchView = SC.PageListView.extend({
    options: {
        tmpl: "search/search"
    },
    initialize: function () {
        SC.PageListView.prototype.initialize.apply(this);
        this.followingsView = new SC.FollowingsView({
            el: this.el
        });
        this.bind("renderSub", this.decorateSub, this)
    },
    decorateSub: function () {
        this.verifyMoreContent();
        !SC.authorization.isLoggedIn || this.options.subpage !== "users" || this.followingsView.decorate()
    }
});
SC.extend("Search", SC.ModelContainer, {
    initialize: function () {
        var a = this.resources = ["tracks", "users", "groups"];
        _.each(a, function (d) {
            (this[d] = new SC.List)
                .url = "/" + d + "/?" + this.attributes.query
        }, this)
    },
    prepare: function (a) {
        var d = this;
        a.tracks && _.each(a.tracks, function (g) {
            d.replaceDefaultArtwork(g);
            g.shared = $.prettyDate.format(g.created_at)
        });
        a.users && _.each(a.users, this.replaceDefaultAvatar);
        _.each(this.resources, function (g) {
            a[g + "_count"] = a[g].length
        });
        a.keywords = this.attributes.query.replace(/q=/g, "")
    }
});
SC.SuggestionsView = SC.ApplicationSearchView.extend({
    options: {
        tmpl: "suggestions/suggestions"
    },
    events: {
        "keyup .search-input": "suggest",
        "click .list-suggestions li a.clear-history": "clearHistory",
        "click .list-suggestions li a": "saveSuggestions"
    },
    initialize: function () {
        this.renderModel(this.model.toJSON(), $(".suggestions", this.el), this.options.tmpl);
        this.input = $("#q", this.el);
        this.suggestions = $(".suggestions", this.el);
        this.button = $("button span", this.suggestions);
        this.previousSearches();
        this.input.val("");
        this.model.bind("change", _.bind(this.suggest, this))
    },
    initStyles: function () {
        $(this.el)
            .toggleClass("suggesting", !! this.input[0].value.length)
    },
    render: function (a) {
        this.renderedList = a;
        var d = "";
        _.each(a, function (g) {
            d += g.el.innerHTML
        });
        $(".list-suggestions", this.suggestions)
            .empty()
            .append(d);
        this.trigger("render")
    },
    createItemView: function (a) {
        return new SC.SuggestionsItemView({
            model: new Backbone.Model({
                attributes: a
            }),
            tmpl: "suggestions/suggestions-item"
        })
    },
    previousSearches: function () {
        if (this.model) {
            var a = [],
                d = this.model.attributes.suggestionsPreviousSearches,
                g = this;
            if (d[0]) {
                _.each(d, function (i) {
                    i.matchedTitle = i.title;
                    a.push(g.createItemView(i))
                });
                a.push(g.createItemView({
                    className: "clear-history",
                    matchedTitle: "Clear History",
                    title: "Clear History",
                    type: "search clear",
                    link: ""
                }))
            } else a = [];
            this.render(a)
        }
    },
    suggest: function () {
        var a = this;
        this.initStyles();
        var d = this.input[0].value;
        if (d) {
            this.button.text(d);
            this.render(this.sortList(_(this.model.attributes.suggestionsList)
                .chain()
                .map(function (g) {
                var i =
                    RegExp("^" + SC.escapeRegex(SC.replaceDiacritics(d)), "i");
                if (g.title.match(i)) {
                    g.matchedTitle = "<b>" + g.title.substr(0, d.length) + "</b>" + g.title.split(i)[1];
                    return a.createItemView(g)
                }
            })
                .compact()
                .flatten()
                .groupBy(function (g) {
                return g.model.attributes.type
            })
                .value()))
        } else this.previousSearches()
    },
    sortList: function (a) {
        var d = [];
        _.each(["search", "user", "track", "group"], function (g) {
            a[g] && d.push(a[g])
        });
        return _.flatten(d)
    },
    saveSuggestions: function (a) {
        if ($(this.el)
            .hasClass("suggesting")) {
            var d = this.renderedList[$(".list-suggestions li",
                this.suggestions)
                .index($(a.target)
                .closest("li")[0])].model.toJSON(),
                g = SC.localStorage.getItem("sc-search");
            g = g ? JSON.parse(g) : [];
            g.unshift(d);
            g = _.uniq(g, false, function (i) {
                if (i.type) return i.title + i.type;
                return i
            })
                .slice(0, 20);
            SC.localStorage.setItem("sc-search", JSON.stringify(g));
            $(a.target)
                .closest("a")
                .filter(".clear-history")
                .length === 0 && this.closeSearch()
        } else this.closeSearch()
    },
    clearHistory: function (a) {
        a.preventDefault();
        SC.localStorage.removeItem("sc-search");
        this.model.attributes.suggestionsList = [];
        this.model.attributes.suggestionsPreviousSearches = [];
        this.model.prepare();
        this.render()
    }
});
SC.extend("Suggestions", SC.Model, {
    apiToSuggestions: {
        followings: {
            title: "username",
            image: "avatar_url",
            type: "user"
        },
        favorites: {
            title: "title",
            image: "artwork_url",
            type: "track"
        },
        groups: {
            title: "name",
            image: "artwork_url",
            type: "group"
        }
    },
    initialize: function () {
        this.attributes.suggestionsList = [];
        this.attributes.suggestionsPreviousSearches = []
    },
    prepare: function () {
        var a = this;
        a.searches();
        SC.authorization.isLoggedIn && _.each(["followings", "favorites", "groups"], function (d) {
            a.resources(d)
        })
    },
    mapToSuggestion: function (a,
        d) {
        var g = this.apiToSuggestions[d];
        if (d === undefined) return a;
        return {
            title: a[g.title],
            artwork_url: a[g.image],
            type: g.type,
            link: a.link
        }
    },
    save: function (a, d) {
        var g = this.attributes.suggestionsList;
        $.isArray(a) || (a = [a]);
        _.each(a, function (i) {
            if (i.permalink_url) i.link = SC.url.relativeUrl(i.permalink_url);
            g.push(this.mapToSuggestion(i, d))
        }, this);
        this.attributes.suggestionsList = _.uniq(g, false, function (i) {
            return i.title + i.link
        });
        this.cached || this.change()
    },
    searches: function () {
        var a = SC.localStorage.getItem("sc-search");
        if (a) {
            a = JSON.parse(a);
            this.attributes.suggestionsPreviousSearches = a;
            this.save(a)
        }
    },
    resources: function (a) {
        var d = SC.cache.extract(RegExp("\\/_api\\/me\\/" + a + "\\?offset")),
            g = this;
        if (d[0]) {
            this.cached = true;
            this.save(d, a)
        } else {
            this.cached = false;
            d = new Backbone.Model;
            d.authorized = true;
            d.acceptErrors = "*";
            d.url = "/me/" + a;
            d.fetch({
                success: function (i, n) {
                    g.save(n, a)
                }
            })
        }
    }
});
SC.SuggestionsItemView = SC.PageView.extend({
    initialize: function () {
        this.render()
    }
});
SC.TagView = SC.PageListView.extend({
    options: {
        tmpl: "tag/tag"
    },
    initialize: function () {
        SC.PageListView.prototype.initialize.apply(this, arguments);
        $(this.el)
            .delegate("form", "submit", _.bind(this.searchTag, this));
        this.bind("renderSub", this.decorateSub, this)
    },
    decorateSub: function () {
        this.verifyMoreContent()
    },
    searchTag: function (a) {
        var d = $("input", this.el)
            .val()
            .trim();
        a.preventDefault();
        Backbone.history.saveLocation("/tags/" + encodeURIComponent(d))
    }
});
SC.extend("Tag", Backbone.Model, {
    initialize: function () {
        this.tracks = new SC.List;
        this.tracks.url = "/tracks?order=hotness";
        if (this.attributes.name) this.tracks.url = this.tracks.url + "&tags=" + this.attributes.name
    },
    fetch: function () {
        var a = this;
        _.defer(function () {
            a.trigger("change")
        })
    },
    toJSON: function () {
        var a = _.clone(this.attributes);
        a.tracks_count = this.tracks.length === 50 ? "50+" : this.tracks.length;
        a.tracks = this.tracks.toJSON();
        return a
    }
});
SC.GroupView = SC.PageListView.extend({
    options: {
        tmpl: "group/group"
    },
    initialize: function () {
        SC.PageListView.prototype.initialize.apply(this);
        if (!this.modelCached()) {
            this.renderPlaceHolder("group/group", {});
            this.initTabs()
        }
        this.followingsView = new SC.FollowingsView({
            el: this.el
        });
        this.bind("renderSub", this.decorateSub, this);
        $(this.el)
            .delegate(".profile img, .page-fade", "click", _.bind(this.toggleProfileImage, this))
    },
    decorateSub: function () {
        this.verifyMoreContent();
        !SC.authorization.isLoggedIn || this.options.subpage !==
            "members" || this.followingsView.decorate()
    },
    initTabs: function () {
        var a = this.options.subpage.replace(/^(?:dropbox)$/, "info");
        SC.PageListView.prototype.initTabs.call(this, a)
    }
});
SC.extend("Group", SC.Model, {
    initialize: function () {
        var a = this.resources = ["tracks", "members"];
        _.each(a, function (d) {
            (this[d] = new SC.List)
                .url = "/resolve?url=http://soundcloud.com/groups/" + this.attributes.permalink + "/" + d + "?offset=0"
        }, this);
        this.info = this;
        this.dropbox = this
    },
    url: function () {
        return "/resolve?url=http://soundcloud.com/groups/" + this.attributes.permalink
    },
    prepare: function (a) {
        _.each(this.resources, function (g) {
            this[g].url = "/groups/" + this.attributes.id + "/" + g
        }, this);
        var d = this;
        a.tracks && _.each(a.tracks, function (g) {
            d.replaceDefaultArtwork(g);
            g.shared = $.prettyDate.format(g.created_at)
        });
        a.members && _.each(a.members, function (g) {
            d.replaceDefaultAvatar(g)
        });
        a.share = a.name;
        a.track_count = a.track_count || a.tracks.length;
        if (a.description) a.formatted_description = this.formatText(a.description)
    }
});
SC.StaticView = SC.PageView.extend({
    initialize: function () {
        this.render()
    }
});
SC.ShareView = SC.PageView.extend({
    options: {
        tmpl: "share/share"
    },
    events: {
        "click .share button": "toggleSharing",
        "click a.show-more": "toggleMore"
    },
    initialize: function () {
        this.model.attributes.share ? this.render() : $(this.el)
            .remove()
    },
    toggleSharing: function (a) {
        a.preventDefault();
        a = $(".share", this.el)
            .toggleClass("active");
        var d = $(document.body),
            g = a.scrollTop() + a.height();
        a.hasClass("active") && d.scrollTop() < g && d.scrollTop(g)
    },
    toggleMore: function (a) {
        a.preventDefault();
        $(".share-links")
            .addClass("more")
    }
});
SC.extend("Share", Backbone.Model, {
    initialize: function () {
        var a = this.attributes;
        if (a.sharing === "public" || SC.authorization.userIsMe(a.user)) {
            a.share = a.title + " by " + a.user.username;
            _.each(["twitter", "facebook", "email", "tumblr", "stumbleupon", "reddit", "buzz", "blogger"], function (d) {
                var g = a.permalink_url + (a.sharing === "private" ? "/" + a.secret_token : "");
                a["share_url_" + d] = encodeURIComponent(g + "?utm_source=soundcloud&utm_campaign=mshare&utm_medium=" + d + "&utm_content=" + g)
            })
        }
    }
});
SC.SharingWidgets = SC.PageView.extend({
    options: {
        tmpl: "share/sharing-widgets"
    },
    initialize: function () {
        this.render()
    },
    decorate: function () {
        var a = this.el;
        $(".facebook-share-button", a)
            .bind("load", function () {
            /IEMobile/.test(navigator.userAgent) || $(".hack-0", a)
                .css("visibility", "visible");
            $(a)
                .addClass("transition")
        })
    }
});
SC.FacebookView = SC.PageView.extend({
    options: {
        tmpl: "facebook/facebook"
    },
    events: {
        "click .button-fb": "connectClick"
    },
    initialize: function () {
        this.render();
        $(this.el)
            .trigger("renderFacebook")
    },
    connectClick: function () {
        $(document)
            .trigger("connectFacebook", Backbone.history.getFragment());
        SC.localStorage.setItem("sc-private-track", Backbone.history.getFragment());
        return true
    }
});
SC.extend("Facebook", Backbone.Model, {
    initialize: function () {
        this.attributes.connectUrl = SC.Facebook.connectUrl()
    }
});
SC.Facebook.connectUrl = function () {
    return "https://soundcloud.com/connect/via/facebook?scope=non-expiring&client_id=" + encodeURIComponent(SC.authorization.apiKey) + "&response_type=code&redirect_uri=" + encodeURIComponent(SC.authorization.redirectUri)
};
SC.extend("Facebook.Redirect", SC.Facebook, {
    initialize: function () {
        this.connections = new SC.Connections;
        this.connections.fetch({
            success: _.bind(this.connectionsUpdate, this),
            error: SC.Login.Redirect
        })
    },
    connectionsUpdate: function () {
        this.connections.facebookConnection();
        SC.Login.Redirect()
    }
});
SC.LoginView = SC.FormView.extend({
    options: {
        tmpl: "login/login",
        returnTo: "/you"
    },
    initialize: function () {
        var a = this;
        SC.FormView.prototype.initialize.apply(this, arguments);
        this.facebookView = new SC.FacebookView({
            model: new SC.Facebook({}),
            el: $(".fb-container", this.el)
        });
        _.defer(function () {
            $('input[value=""]:first', a.el)
                .focus()
        })
    },
    onSuccess: function () {
        var a = {
            username: $("#email")
                .val()
        };
        $(document)
            .trigger("loginSuccess", a);
        SC.cache.clear();
        Backbone.history.replaceLocation(this.options.returnTo)
    },
    onFailure: function (a,
        d) {
        SC.FormView.prototype.onFailure.apply(this, arguments);
        d.status === 401 && this.showError('input[name="username"]', {
            text: "Please check your email and password"
        });
        this.enableForm(true)
    }
});
SC.extend("Login", Backbone.Model, {
    authorized: true,
    acceptErrors: [401],
    initialize: function () {
        var a = SC.localStorage.getItem("sc-auth-username");
        if (a) this.attributes.username = a;
        this.attributes.scope = "non-expiring"
    },
    validate: function (a) {
        var d = {}, g = /\S/;
        if (!g.test(a.username)) d.username = {
                text: "Please add your email!"
        };
        if (!g.test(a.password)) d.password = {
                text: "Please add your password!"
        };
        return _.keys(d)
            .length ? d : undefined
    },
    url: "/oauth2/token"
});
SC.extend("Login.Facebook", SC.Login, {
    authorize: function (a) {
        this.save({
            grant_type: "authorization_code",
            code: a,
            redirect_uri: SC.authorization.redirectUri
        }, {
            success: function () {
                $(document)
                    .trigger("loginSuccess");
                new SC.Facebook.Redirect
            }
        })
    }
});
SC.Login.Redirect = function () {
    var a = new SC.You({});
    Backbone.history.replaceLocation("/redirecting");
    a.fetch({
        success: function (d) {
            d = d.get("followings_count");
            var g = SC.localStorage.getItem("sc-private-track");
            if (g) {
                Backbone.history.replaceLocation(g);
                SC.localStorage.removeItem("sc-private-track")
            } else d < 5 ? Backbone.history.replaceLocation("/signup/peoplefinder") : Backbone.history.replaceLocation("/dashboard")
        },
        error: function () {
            Backbone.history.replaceLocation("/")
        }
    })
};
SC.PasswordView = SC.FormView.extend({
    options: {
        tmpl: "password/password"
    },
    initialize: function () {
        var a = this;
        SC.FormView.prototype.initialize.apply(this, arguments);
        this.facebookView = new SC.FacebookView({
            model: new SC.Facebook({}),
            el: $(".fb-container", a.el)
        });
        _.defer(function () {
            $('input[value=""]:first', a.el)
                .focus()
        })
    },
    onSuccess: function () {
        $(this.el)
            .addClass("password-sent");
        $(document)
            .trigger("logout")
    },
    onFailure: function (a, d) {
        SC.FormView.prototype.onFailure.apply(this, arguments);
        d.status === 404 && this.showError('input[name="email"]', {
            text: "Sorry, we couldn't recognize this email address."
        });
        this.enableForm(true)
    },
    decorate: function () {
        var a = SC.localStorage.getItem("sc-auth-username") || "",
            d = !! a.split("@")[1];
        a && d && $('input[name="email"]', this.el)
            .val(a)
    }
});
SC.extend("Password", Backbone.Model, {
    authorized: true,
    acceptErrors: [404],
    validate: function (a) {
        var d = {};
        if (!/\S/.test(a.email)) d.email = {
                text: "Please add your email!"
        };
        return _.keys(d)
            .length ? d : undefined
    },
    authorizeForPassword: function (a, d) {
        var g = this;
        this.passwordsEnabled ? d() : a.save(a.attributes, {
            success: function () {
                g.passwordsEnabled = true;
                d()
            },
            error: function (i, n) {
                console.error("API client can't get password reset link", n);
                throw "Can't get password reset link from API, check the client authorization:" +
                    n.status;
            }
        })
    },
    save: function (a, d) {
        var g = this;
        if (this.validate && !this._performValidation(a, d)) return false;
        this.authorizeForPassword(new SC.Signup.Credentials({}), function () {
            var i = new Backbone.Model;
            i.silent = true;
            i.url = "/passwords/reset-instructions";
            i.attributes.scope = "signup";
            i.acceptErrors = g.acceptErrors;
            i.validate = g.validate;
            i.save.apply(i, [a, d])
        });
        return this
    }
});
SC.SignupView = SC.FormView.extend({
    options: {
        tmpl: "signup/signup",
        returnTo: "/signup/peoplefinder"
    },
    initialize: function () {
        SC.FormView.prototype.initialize.apply(this, arguments);
        this.facebookView = new SC.FacebookView({
            model: new SC.Facebook({}),
            el: $(".fb-container", this.el)
        })
    },
    onSuccess: function (a, d) {
        var g = {
            attributes: a.attributes,
            username: d["user[email]"]
        };
        $(document)
            .trigger("signupSuccess", g);
        Backbone.history.saveLocation("/signup/details/?return_to=" + this.options.returnTo)
    },
    onFailure: function (a, d) {
        SC.FormView.prototype.onFailure.apply(this,
            arguments);
        SC.localStorage.removeItem("sc-auth-token");
        d.status === 422 && this.showError('input[name="user[email]"]', {
            text: "Email has already been taken"
        });
        this.enableForm(true)
    }
});
SC.extend("Signup", Backbone.Model, {
    authorized: true,
    acceptErrors: [422],
    initialize: function () {
        var a = SC.localStorage.getItem("sc-auth-username");
        if (a) this.attributes.username = a
    },
    validate: function (a) {
        var d = {}, g = /\S/,
            i = /^[a-zA-Z0-9_.+\-]+@[a-zA-Z0-9\-]+.[a-zA-Z0-9\-.]+$/i;
        if (g.test(a["user[email]"])) i.test(a["user[email]"]) || (d["user[email]"] = {
                text: "Please verify the email address!"
            });
        else d["user[email]"] = {
                text: "Please add your email!"
        }; if (g.test(a["user[password]"])) {
            if (a["user[password_confirmation]"] &&
                a["user[password_confirmation]"] !== a["user[password]"]) d["user[password_confirmation]"] = {
                    text: "Please check if the password is correct!"
            }
        } else d["user[password]"] = {
                text: "Please add your password!"
        };
        g.test(a["user[password_confirmation]"]) || (d["user[password_confirmation]"] = {
            text: "Please confirm the password!"
        });
        if (!a["user[terms_of_use]"] || a["user[terms_of_use]"] !== "1") d["user[terms_of_use]"] = {
                text: "Please accept the terms of use!"
        };
        return _.keys(d)
            .length ? d : undefined
    },
    authorizeForSignup: function (a,
        d) {
        var g = this;
        this.signupsEnabled ? d() : a.save(a.attributes, {
            success: function () {
                g.signupsEnabled = true;
                d()
            },
            error: function (i, n) {
                console.error("API client can't create users", n);
                throw "Can't create accounts on API, check the client authorization:" + n.status;
            }
        })
    },
    save: function (a, d) {
        if (this.validate && !this._performValidation(a, d)) return false;
        var g = this,
            i = d.success;
        d.success = function (n) {
            g.authorizeNewUser(g, n, i)
        };
        this.authorizeForSignup(new SC.Signup.Credentials({}), function () {
            var n = new Backbone.Model;
            n.silent =
                true;
            n.url = "/users";
            n.acceptErrors = g.acceptErrors;
            n.validate = g.validate;
            n.save.apply(n, [a, d])
        });
        return this
    },
    authorizeNewUser: function (a, d, g) {
        (new SC.Login({}))
            .save({
            username: d.attributes["user[email]"],
            password: d.attributes["user[password]"],
            grant_type: "password"
        }, {
            success: function () {
                g.apply(a, [a, d.attributes])
            }
        })
    }
});
SC.extend("Signup.Credentials", Backbone.Model, {
    authorized: true,
    defaults: {
        grant_type: "client_credentials"
    },
    url: "/oauth2/token"
});
SC.extend("Logout", Backbone.Model, {
    authorized: true,
    initialize: function () {
        var a = this;
        this.save({}, {
            success: function () {
                $(document)
                    .trigger("logout");
                SC.cache.clear();
                SC.localStorage.removeItem("sc-search");
                location.replace(a.attributes.returnTo)
            }
        })
    },
    url: "/logout"
});
SC.SettingsView = SC.FormView.extend({
    options: {
        tmpl: "settings/settings",
        returnTo: "/you"
    },
    initialize: function () {
        var a = this;
        this.model.bind("change", function () {
            a.render();
            a.connections = new SC.Connections;
            a.connections.fetch({
                success: _.bind(a.connectionsUpdate, a)
            })
        });
        this.model.fetch();
        _.bindAll(this, "onSuccess", "onFailure");
        $(this.el)
            .delegate("textarea", "click keyup keydown keypress", this.textareaFitContent)
    },
    connectionsUpdate: function () {
        if (!this.connections.facebookConnected()) this.facebookView = new SC.FacebookView({
                model: new SC.Facebook({}),
                tmpl: this.options.newUser ? "facebook/facebook-details" : "facebook/facebook-settings",
                el: $(".fb-container", this.el)
            })
    },
    onSuccess: function (a, d) {
        $(document)
            .trigger("userSettingsSuccess", this.model.attributes, d);
        Backbone.history.saveLocation(this.options.returnTo)
    }
});
SC.extend("Settings", Backbone.Model, {
    url: "/me",
    authorized: true,
    validate: function (a) {
        var d = {}, g = /[a-z]/i,
            i = /^.{3,25}$/;
        if (/\S/.test(a["user[username]"])) if (g.test(a["user[username]"])) i.test(a["user[username]"]) || (d["user[username]"] = {
                    text: "Your username should have between 3 and 25 characters!"
                });
            else d["user[username]"] = {
                    text: "At least one letter please!"
            };
            else d["user[username]"] = {
                    text: "Please enter a username!"
            };
        return _.keys(d)
            .length ? d : undefined
    }
});
SC.YouStartView = SC.PageView.extend({
    options: {
        tmpl: "you/you"
    },
    initialize: function () {
        SC.PageView.prototype.initialize.apply(this);
        $(this.el)
            .addClass("page-content")
            .append('<div class="content"></div>');
        this.renderModel(this.model.toJSON(), $(".content", this.el), "placeholder")
    }
});
SC.YouView = SC.UserView.extend({
    decorate: function () {
        SC.UserView.prototype.decorate.apply(this, arguments);
        $(this.el)
            .addClass("you")
    },
    modelErrorHandler: function () {
        Backbone.history.saveLocation("/login?return_to=" + Backbone.history.getFragment())
    }
});
SC.YouFollowView = SC.UserView.extend({
    renderPlaceHolder: $.noop,
    initialize: function () {
        SC.UserView.prototype.initialize.apply(this);
        $(this.el)
            .addClass("page-content")
            .append('<div class="content"></div>');
        this.renderModel(this.model.toJSON(), $(".content", this.el), "placeholder")
    },
    initSubPage: function () {
        this.model[this.options.subpage].fetch({
            error: this.modelErrorHandler,
            success: this.renderSubPage
        })
    },
    render: function () {}
});
SC.extend("You", SC.User, {
    authorized: true,
    initialize: function () {
        var a = this.resources = ["tracks", "favorites", "playlists", "followers", "followings", "groups", "comments"];
        _.each(a, function (d) {
            var g = this[d] = new SC.List;
            g.authorized = true;
            g.url = "/me/" + d + "?offset=0"
        }, this);
        this.info = this
    },
    toJSON: function () {
        var a = SC.User.prototype.toJSON.apply(this, arguments);
        a.permalink = "you";
        return a
    },
    url: "/me"
});
SC.ActivitiesView = SC.PageListView.extend({
    options: {
        tmpl: "activities/activities"
    },
    subViews: {},
    initialize: function () {
        if (this.options.subpage === "exclusive") this.model.url += "/tracks/exclusive";
        SC.PageListView.prototype.initialize.apply(this);
        this.model.unbind("change", this.render);
        this.model.unbind("change", this.initSubPage);
        _.bindAll(this, "reset", "addSubView", "removeSubView", "decorateSub", "appendError", "appendSuccess", "removePreviousThrobber", "fetchLimiter");
        this.bind("renderSub", this.decorateSub, this);
        this.model.bind("add", this.addSubView);
        this.model.bind("remove", this.removeSubView);
        this.model.bind("reset", this.reset);
        this.model.bind("reset", this.decorateSub);
        this.render()
    },
    unbindFromDocument: function () {
        SC.PageListView.prototype.unbindFromDocument.call(this);
        this.removeScrollFetchHandler()
    },
    addSubView: function (a) {
        var d = $(this.el)
            .find(".list-items"),
            g = a.get("type")
                .replace("-sharing", ""),
            i = "activities/activity-" + g;
        if (!/own-activities/.test(Backbone.history.getFragment()) && g === "favoriting") i = i.replace("activity",
                "stream");
        d = new SC.ActivityItemView({
            model: a,
            el: d,
            tmpl: i
        });
        this.subViews[a.cid] = d
    },
    decorate: function () {
        $(".activities", this.el)
            .addClass("own")
    },
    removeSubView: function (a) {
        this.subViews[a.cid].remove()
    },
    reset: function (a) {
        var d = this;
        this.addScrollFetchHandler();
        $(this.el)
            .find(".more")
            .remove();
        _.each(a.models, function (g) {
            d.addSubView(g)
        })
    },
    decorateSub: function () {
        $(".activities", this.el)
            .toggleClass("welcome", !_.size(this.model.models));
        this.verifyMoreContent();
        this.model.models.length < 30 && this.fetchNextPage($(this.el)
            .find("li.more")
            .data("scHref"))
    },
    addScrollFetchHandler: function () {
        $(document)
            .unbind("scroll.fetchTracks")
            .bind("scroll.fetchTracks", _.throttle(this.fetchLimiter, 250))
    },
    removeScrollFetchHandler: function () {
        $(document)
            .unbind("scroll.fetchTracks")
    },
    fetchLimiter: function (a) {
        var d, g, i, n;
        if (typeof a !== "number") a = $(document)
                .scrollTop();
        d = $(".pending", this.el);
        g = 0;
        n = $(window)
            .height();
        i = a + n * 1.5;
        if (d.length > 0) {
            d.each(function (p, t) {
                if ($(t)
                    .position()
                    .top < i) g++;
                else return false
            });
            this.model.keepPending = d.length - g;
            this.model.fetchNextModel()
        } else this.removeScrollFetchHandler()
    },
    fetchNextPage: function (a) {
        if (a) {
            this.renderThrobber();
            this.model.url = a;
            this.model.acceptErrors = "*";
            this.model.fetchLimit = 50;
            this.model.fetch({
                add: true,
                error: this.appendError,
                success: this.appendSuccess
            })
        }
    },
    appendSuccess: function (a) {
        this.removePreviousThrobber();
        this.addScrollFetchHandler();
        this.verifyMoreContent();
        this.trigger("newPage");
        a.trigger("appendingRefresh")
    },
    removePreviousThrobber: function () {
        this.model.remove(_.detect(this.model.models, function (a) {
            return a.get("type") === "next"
        }))
    }
});
SC.ActivityItemView = SC.PageView.extend({
    initialize: function () {
        _.bindAll(this, "render");
        this.model.bind("add", this.render);
        this.model.bind("fetch", this.load);
        this.model.bind("change", this.render);
        this.render(this, "init")
    },
    pending: function () {
        $(this.el)
            .addClass("pending")
    },
    load: function () {
        $(this.el)
            .removeClass("pending")
            .addClass("loading")
    },
    complete: function () {
        var a = $(this.el)
            .find(".details")
            .width(),
            d = $(this.el)
                .find(".stats")
                .width(),
            g = $(this.el)
                .find(".stats .user span")
                .width();
        a -= d - g;
        $(this.el)
            .find(".stats .user span")
            .css("max-width",
            a - 15 + "px");
        $(this.el)
            .removeClass("pending")
            .removeClass("loading")
    },
    render: function (a, d) {
        var g = this.model.toJSON(),
            i = this;
        this.renderModel(g, this.el, this.options.tmpl, function (n) {
            $(i.el)
                .hasClass("list-items") ? $(i.el)
                .append(n) : $(i.el)
                .replaceWith(n);
            i.el = n;
            if (g.track && g.track.permalink === undefined || (g.track && g.track.user || g.user || {})
                .permalink === undefined) $("a", i.el)
                    .removeAttr("href")
                    .addClass("no-href");
            if (d === "init") i.model.get("type") === "favoriting" && i.pending();
            else if (d === "uploader") i.pending();
            else d.modelType && i.complete()
        });
        this.decorate(g);
        this.trigger("render")
    }
});
SC.extend("ActivityModel", SC.Model, {
    initialize: function () {
        var a = this.get("type");
        if (a === "favoriting") {
            _.bindAll(this, "duplicateUploader");
            this.bind("change", this.duplicateUploader);
            a = this.get("origin")
                .track.user_id;
            var d = this.collection.uploaderStack;
            if (d[a] === undefined) d[a] = [];
            d[a].push(this.cid);
            this.url = "/tracks/" + this.get("origin")
                .track.id;
            this.collection.fetchQueue.push(this.cid)
        } else if (a === "comment") if (a = SC.cache.get("/_api/me")) this.get("origin")
                    .track.uploader_permalink = a.permalink
    },
    duplicateUploader: function () {
        var a =
            this.collection.uploaderStack,
            d = this.get("origin")
                .user.id,
            g = this;
        a[d].length > 1 && _.each(a[d], function (i) {
            if (i !== g.cid) {
                i = g.collection.getByCid(i);
                i.attributes.origin.track.user.username = g.get("origin")
                    .user.username;
                i.attributes.origin.track.user.permalink = g.get("origin")
                    .user.permalink;
                i.trigger("add", i, "uploader")
            }
        });
        a[d].length = 0
    },
    parse: function (a) {
        a.liked_by = this.get("origin")
            .track.liked_by;
        return a = {
            created_at: this.get("created_at"),
            origin: a,
            type: "track"
        }
    },
    toJSON: function () {
        var a = Backbone.Model.prototype.toJSON.apply(this,
            arguments);
        if (a.type === "next") return a;
        if (!a.origin.track) a.origin = {
                track: a.origin
        };
        a.origin.shared = $.prettyDate.format(a.created_at);
        this.addSharingLabel(a.origin.track);
        this.replaceDefaultArtwork(a.origin.track);
        return a.origin
    }
});
SC.extend("ActivitiesList", SC.List, {
    authorized: true,
    model: SC.ActivityModel,
    initialize: function () {
        this.fetchQueue = [];
        this.uploaderStack = {};
        this.singleTrackIDs = {};
        this.bind("reset", this.fetchNextModel);
        this.bind("change", this.fetchNextModel);
        this.bind("appendingRefresh", this.fetchNextModel);
        this.url = "/me/activities/all/own"
    },
    parse: function (a) {
        var d = this;
        _.each(a.collection, function (g, i) {
            if (g.type === "favoriting") {
                g.origin.track.user = {};
                g.origin.track.liked_by = g.origin.user
            }
            if (g.origin) {
                var n;
                if (g.origin.id) n =
                        g.origin.id;
                else if (g.origin.track && g.origin.track.id) n = g.origin.track.id;
                if (d.singleTrackIDs[n]) delete a.collection[i];
                else d.singleTrackIDs[n] = true
            }
        });
        a.collection = _.compact(a.collection);
        a.next_href && a.collection.push({
            next_href: SC.url.relativeUrl(a.next_href),
            type: "next"
        });
        return a.collection
    },
    fetchNextModel: function () {
        if (this.keepPending === undefined) this.keepPending = this.fetchQueue.length - 7;
        if (Math.max(this.keepPending, 0) < this.fetchQueue.length) {
            var a = this.getByCid(_.first(this.fetchQueue));
            this.fetchQueue.shift();
            a.fetch()
        }
    },
    toJSON: function () {
        return this.models.length === 0 ? {} : Backbone.Collection.prototype.toJSON.apply(this, arguments)
    }
});
SC.extend("StreamList", SC.ActivitiesList, {
    initialize: function () {
        SC.ActivitiesList.prototype.initialize.apply(this, arguments);
        this.url = "/me/activities"
    },
    exclusive: {},
    parse: function (a) {
        var d = this;
        _.each(a.collection, function (g, i) {
            if (g.type === "favoriting") {
                g.origin.track.user = {};
                g.origin.track.liked_by = g.origin.user
            } else if (g.type !== "track" && g.type !== "track-sharing") {
                delete a.collection[i];
                return
            }
            if (g.origin) {
                var n;
                if (g.origin.id) n = g.origin.id;
                else if (g.origin.track && g.origin.track.id) n = g.origin.track.id;
                if (d.singleTrackIDs[n]) delete a.collection[i];
                else d.singleTrackIDs[n] = true
            }
        });
        a.collection = _.compact(a.collection);
        a.next_href && a.collection.push({
            next_href: SC.url.relativeUrl(a.next_href),
            type: "next"
        });
        return a.collection
    }
});
SC.extend("StreamView", SC.ActivitiesView, {
    options: {
        tmpl: "activities/activities"
    },
    decorate: function () {
        $(".activities", this.el)
            .addClass("stream")
    }
});
SC.PeopleFinderView = SC.PageListView.extend({
    options: {
        tmpl: "peoplefinder/peoplefinder",
        subpage: "suggested",
        subViewElement: ".list-items"
    },
    initialize: function () {
        SC.PageListView.prototype.initialize.apply(this);
        this.model.unbind("change", this.render);
        this.model.unbind("change", this.initSubPage);
        _.bindAll(this, "decorateSub", "update", "connectionsUpdate");
        this.model.bind("change", this.update);
        this.model.bind("change", this.decorateSub);
        this.model.bind("connected", this.connectionsUpdate);
        this.followingsView =
            new SC.FollowingsView({
            el: this.el
        });
        this.render();
        if (this.options.subpage === "suggested") $(".friends", this.el)
                .hide();
        else this.options.subpage === "friends" && $(".suggested", this.el)
                .hide()
    },
    update: function (a) {
        $("content", this.el)
            .removeClass("placeholder");
        var d = a.friends ? "friends" : "suggested";
        this.renderModel(a.toJSON(), "." + d, "peoplefinder/peoplefinder-" + d)
    },
    decorateSub: function () {
        this.followingsView.decorate()
    },
    connectionsUpdate: function (a) {
        a.connections.facebookConnected() || this.renderModel(a.toJSON(),
            ".friends", "peoplefinder/peoplefinder-connect")
    }
});
SC.extend("PeopleModel", SC.Model, {
    initialize: function () {
        this.followings = SC.followings
    },
    sortFollowings: function (a) {
        if (this.followings && a.length > 0) a = this.followings.sortList(a);
        return a
    }
});
SC.extend("SuggestedPeople", SC.PeopleModel, {
    suggested: {},
    url: function () {
        return "/users/suggested"
    },
    parse: function (a) {
        return {
            suggested: this.sortFollowings(a)
        }
    }
});
SC.extend("FindFriends", SC.PeopleModel, {
    authorized: true,
    friends: {},
    initialize: function () {
        SC.PeopleModel.prototype.initialize.apply(this, arguments);
        this.connections = new SC.Connections;
        this.connections.fetch({
            success: _.bind(this.connectionsUpdate, this),
            error: this.modelErrorHandler
        })
    },
    url: "",
    connectionsUpdate: function (a) {
        if (a.facebookConnected()) {
            this.url = "/me/connections/friends?linked_partitioning=1";
            this.set({
                header: "Friends via " + a.facebookName()
            }, {
                silent: true
            });
            this.fetch()
        } else this.set({
                connectUrl: SC.Facebook.connectUrl()
            }, {
                silent: true
            });
        this.trigger("connected", this)
    },
    parse: function (a) {
        var d = _.map(a.collection, function (g) {
            return g.user
        });
        d = this.sortFollowings(d);
        a.next_href && this.set({
            next_href: SC.url.relativeUrl(a.next_href),
            silent: true
        });
        return {
            friends: d
        }
    }
});
SC.extend("PeopleFinder", SC.Model, {
    peoplefinder: {},
    initialize: function () {
        this.followings = SC.followings;
        var a = this.resources = ["friends", "suggested"];
        _.bindAll(this, "change", "isConnected");
        _.each(a, function (d) {
            this[d] = d === "friends" ? new SC.FindFriends : new SC.SuggestedPeople;
            this[d].bind("change", this.change);
            this[d].bind("connected", this.isConnected)
        }, this)
    },
    fetch: function () {
        this.suggested.fetch()
    },
    change: function (a) {
        this.trigger("change", a)
    },
    isConnected: function (a) {
        this.trigger("connected", a)
    }
});
(function () {
    function a(D) {
        var I = "." + window.location.hostname.replace(/.*\.(.+\..+)/, "$1"),
            R = new Date;
        R.setTime(R.getTime() + 31536E7);
        R = "; expires=" + R.toGMTString();
        document.cookie = B + "=" + D + R + "; path=/; domain=" + I
    }

    function d() {
        var D = document.cookie.split(B + "=");
        return D.length > 1 && D[1].split(";")[0]
    }
    var g, i, n, p, t, H, B = "sc-eventlogger";
    p = function (D, I, R, S) {
        var W = new Image,
            da, T;
        da = [];
        D = "https://eventlogger.soundcloud.com" + D + "?";
        D += ["user=" + encodeURIComponent(I), "level=" + R, "client_id=" + H, "ts=" + Date.now(),
                "url=" + window.location.href.split("/")
                .map(encodeURIComponent)
                .join("/")
        ].join("&");
        for (T in S) da.push(T + "=" + S[T]);
        D += "&" + da.join("&");
        W.src = D
    };
    n = function () {
        var D = d(),
            I = function () {
                return Math.floor(Math.random() * 1E6)
            };
        if (!D) {
            D = [I(), I(), I(), I()].join("-");
            a(D)
        }
        return ["anonymous", D].join(":")
    };
    t = function (D) {
        return D ? "soundcloud:users:" + D : n()
    };
    g = {
        initialize: function (D) {
            if (D.id) {
                i = true;
                H = D.id
            } else throw Error("EventLogger: You need to pass an id");
        },
        pageview: function (D, I, R) {
            if (!i) throw Error("EventLogger must be initialized");
            D = t(D);
            p("/pageview", D, I, {
                chapter: R.join("::")
            })
        },
        click: function (D, I, R) {
            if (!i) throw Error("EventLogger must be initialized");
            D = t(D);
            p("/click", D, I, {
                chapter: R.join("::")
            })
        },
        audio: function (D, I, R, S, W, da) {
            if (!i) throw Error("EventLogger must be initialized");
            var T = (S === "sound" ? "soundcloud:sounds:" : "soundcloud:sets:") + W,
                V = t(D),
                ba = Math.floor(da * 1E3),
                qa;
            p("/audio", V, I, {
                action: R,
                sound: T,
                duration: ba
            });
            clearInterval(this.interval);
            if (S === "sound" && R === "play") {
                qa = Date.now();
                this.interval = setInterval(function () {
                    Date.now() <
                        qa + ba ? p("/audio", V, I, {
                        action: "checkpoint",
                        sound: T,
                        duration: ba
                    }) : clearInterval(g.interval)
                }, 3E4)
            }
        }
    };
    if (typeof module !== "undefined" && module.exports) module.exports = g;
    else {
        window.SC = window.SC || {};
        window.SC.EventLogger = g
    }
})();
setTimeout(function () {
    new SC.ApplicationController;
    SC.Tracker.init();
    new SC.Audio;
    Backbone.history.start()
}, 0);
(function ($) {
    $.template["activities/activities"] = function anonymous(jQuery, $item) {
        var $ = jQuery,
            call, _ = [],
            $data = $item.data;
        with($data) {
            _.push('<div class="activities"><div class="you-welcome"><div class="text-content"><h1>Welcome to SoundCloud!</h1><p>You don\'t have any activities yet, start exploring some <a href="/users">people</a>, <a href="/groups">groups</a> or <a href="/tracks">sounds</a> - you\'ve got millions at your fingertips.</p></div><div class="app-teaser"><p class="text-content">Record sounds with our App, it\'s free!</p><p class="mobile-text"></p><p class="app-text"></p></div></div><div class="content page-content"><div class="dashboard"><ul class="list-items tracks"><li class="more" data-sc-href="');
            if (typeof (next_href) !== 'undefined' && (next_href) != null) {
                _.push($.encode((typeof (next_href) === 'function' ? (next_href)
                    .call($item) : (next_href))));
            }
            _.push('"><canvas class="throbber">Loading…</canvas></li></ul></div></div></div>');
        }
        return _;
    }
    $.template["activities/activity-comment"] = function anonymous(jQuery, $item) {
        var $ = jQuery,
            call, _ = [],
            $data = $item.data;
        with($data) {
            _.push('<li><div class="inner"><div class="tmb"><span><img src="');
            if (typeof (user.avatar_url) !== 'undefined' && (user.avatar_url) != null) {
                _.push($.encode((typeof (user.avatar_url) === 'function' ? (user.avatar_url)
                    .call($item) : (user.avatar_url))));
            }
            _.push('"></span></div><a href="/');
            if (typeof (track.uploader_permalink) !== 'undefined' && (track.uploader_permalink) != null) {
                _.push($.encode((typeof (track.uploader_permalink) === 'function' ? (track.uploader_permalink)
                    .call($item) : (track.uploader_permalink))));
            }
            _.push('/');
            if (typeof (track.permalink) !== 'undefined' && (track.permalink) != null) {
                _.push($.encode((typeof (track.permalink) === 'function' ? (track.permalink)
                    .call($item) : (track.permalink))));
            }
            _.push('"><h3 class="uploader">');
            if (typeof (user.username) !== 'undefined' && (user.username) != null) {
                _.push($.encode((typeof (user.username) === 'function' ? (user.username)
                    .call($item) : (user.username))));
            }
            _.push('</h3><p class="title"><span class="comment-icon"></span>');
            if (typeof (track.title) !== 'undefined' && (track.title) != null) {
                _.push($.encode((typeof (track.title) === 'function' ? (track.title)
                    .call($item) : (track.title))));
            }
            _.push(': <span class="comment-body">"');
            if (typeof (body) !== 'undefined' && (body) != null) {
                _.push($.encode((typeof (body) === 'function' ? (body)
                    .call($item) : (body))));
            }
            _.push('"</span></p><span class="uploaded">');
            if (typeof (shared) !== 'undefined' && (shared) != null) {
                _.push($.encode((typeof (shared) === 'function' ? (shared)
                    .call($item) : (shared))));
            }
            _.push('</span></a></div></li>');
        }
        return _;
    }
    $.template["activities/activity-favoriting"] = function anonymous(jQuery, $item) {
        var $ = jQuery,
            call, _ = [],
            $data = $item.data;
        with($data) {
            _.push('<li data-sc-track-id="');
            if (typeof (track.id) !== 'undefined' && (track.id) != null) {
                _.push($.encode((typeof (track.id) === 'function' ? (track.id)
                    .call($item) : (track.id))));
            }
            _.push('" class="streamable-');
            if (typeof (track.streamable) !== 'undefined' && (track.streamable) != null) {
                _.push($.encode((typeof (track.streamable) === 'function' ? (track.streamable)
                    .call($item) : (track.streamable))));
            }
            _.push('"><div class="inner"><div class="tmb"><span><img src="');
            if (typeof (track.liked_by.avatar_url) !== 'undefined' && (track.liked_by.avatar_url) != null) {
                _.push($.encode((typeof (track.liked_by.avatar_url) === 'function' ? (track.liked_by.avatar_url)
                    .call($item) : (track.liked_by.avatar_url))));
            }
            _.push('"></span></div><a href="/');
            if (typeof (track.user.permalink) !== 'undefined' && (track.user.permalink) != null) {
                _.push($.encode((typeof (track.user.permalink) === 'function' ? (track.user.permalink)
                    .call($item) : (track.user.permalink))));
            }
            _.push('/');
            if (typeof (track.permalink) !== 'undefined' && (track.permalink) != null) {
                _.push($.encode((typeof (track.permalink) === 'function' ? (track.permalink)
                    .call($item) : (track.permalink))));
            }
            _.push('"><h3 class="uploader">');
            if (typeof (track.liked_by.username) !== 'undefined' && (track.liked_by.username) != null) {
                _.push($.encode((typeof (track.liked_by.username) === 'function' ? (track.liked_by.username)
                    .call($item) : (track.liked_by.username))));
            }
            _.push('</h3><p class="title"><span class="favorite-icon"></span>');
            if (typeof (track.title) !== 'undefined' && (track.title) != null) {
                _.push($.encode((typeof (track.title) === 'function' ? (track.title)
                    .call($item) : (track.title))));
            }
            _.push('</p><div class="details"><span class="sharing-label secondary ');
            if (typeof (track.shared_label_class) !== 'undefined' && (track.shared_label_class) != null) {
                _.push($.encode((typeof (track.shared_label_class) === 'function' ? (track.shared_label_class)
                    .call($item) : (track.shared_label_class))));
            }
            _.push('">');
            if (typeof (track.sharing_label) !== 'undefined' && (track.sharing_label) != null) {
                _.push($.encode((typeof (track.sharing_label) === 'function' ? (track.sharing_label)
                    .call($item) : (track.sharing_label))));
            }
            _.push('</span></div><span class="uploaded">');
            if (typeof (shared) !== 'undefined' && (shared) != null) {
                _.push($.encode((typeof (shared) === 'function' ? (shared)
                    .call($item) : (shared))));
            }
            _.push('</span></a></div></li>');
        }
        return _;
    }
    $.template["activities/activity-next"] = function anonymous(jQuery, $item) {
        var $ = jQuery,
            call, _ = [],
            $data = $item.data;
        with($data) {
            _.push('<li class="more" data-sc-href="');
            if (typeof (next_href) !== 'undefined' && (next_href) != null) {
                _.push($.encode((typeof (next_href) === 'function' ? (next_href)
                    .call($item) : (next_href))));
            }
            _.push('"><canvas class="throbber">Loading…</canvas></li>');
        }
        return _;
    }
    $.template["activities/activity-track"] = function anonymous(jQuery, $item) {
        var $ = jQuery,
            call, _ = [],
            $data = $item.data;
        with($data) {
            _.push('<li data-sc-track-id="');
            if (typeof (track.id) !== 'undefined' && (track.id) != null) {
                _.push($.encode((typeof (track.id) === 'function' ? (track.id)
                    .call($item) : (track.id))));
            }
            _.push('" class="streamable-');
            if (typeof (track.streamable) !== 'undefined' && (track.streamable) != null) {
                _.push($.encode((typeof (track.streamable) === 'function' ? (track.streamable)
                    .call($item) : (track.streamable))));
            }
            _.push('"><div class="inner"><div class="tmb"><span><img src="');
            if (typeof (track.artwork_url) !== 'undefined' && (track.artwork_url) != null) {
                _.push($.encode((typeof (track.artwork_url) === 'function' ? (track.artwork_url)
                    .call($item) : (track.artwork_url))));
            }
            _.push('"></span></div><a href="/');
            if (typeof (track.user.permalink) !== 'undefined' && (track.user.permalink) != null) {
                _.push($.encode((typeof (track.user.permalink) === 'function' ? (track.user.permalink)
                    .call($item) : (track.user.permalink))));
            }
            _.push('/');
            if (typeof (track.permalink) !== 'undefined' && (track.permalink) != null) {
                _.push($.encode((typeof (track.permalink) === 'function' ? (track.permalink)
                    .call($item) : (track.permalink))));
            }
            _.push('"><h3 class="uploader">');
            if (typeof (track.user.username) !== 'undefined' && (track.user.username) != null) {
                _.push($.encode((typeof (track.user.username) === 'function' ? (track.user.username)
                    .call($item) : (track.user.username))));
            }
            _.push('</h3><p class="title">');
            if (typeof (track.title) !== 'undefined' && (track.title) != null) {
                _.push($.encode((typeof (track.title) === 'function' ? (track.title)
                    .call($item) : (track.title))));
            }
            _.push('</p><div class="details"><span class="sharing-label secondary ');
            if (typeof (track.shared_label_class) !== 'undefined' && (track.shared_label_class) != null) {
                _.push($.encode((typeof (track.shared_label_class) === 'function' ? (track.shared_label_class)
                    .call($item) : (track.shared_label_class))));
            }
            _.push('">');
            if (typeof (track.sharing_label) !== 'undefined' && (track.sharing_label) != null) {
                _.push($.encode((typeof (track.sharing_label) === 'function' ? (track.sharing_label)
                    .call($item) : (track.sharing_label))));
            }
            _.push('</span><ul class="stats mini"><li class="favorites favorites-');
            if (typeof (track.favoritings_count) !== 'undefined' && (track.favoritings_count) != null) {
                _.push($.encode((typeof (track.favoritings_count) === 'function' ? (track.favoritings_count)
                    .call($item) : (track.favoritings_count))));
            }
            _.push('">');
            if (typeof (track.favoritings_count) !== 'undefined' && (track.favoritings_count) != null) {
                _.push($.encode((typeof (track.favoritings_count) === 'function' ? (track.favoritings_count)
                    .call($item) : (track.favoritings_count))));
            }
            _.push('</li><li class="comments comments-');
            if (typeof (track.comment_count) !== 'undefined' && (track.comment_count) != null) {
                _.push($.encode((typeof (track.comment_count) === 'function' ? (track.comment_count)
                    .call($item) : (track.comment_count))));
            }
            _.push('">');
            if (typeof (track.comment_count) !== 'undefined' && (track.comment_count) != null) {
                _.push($.encode((typeof (track.comment_count) === 'function' ? (track.comment_count)
                    .call($item) : (track.comment_count))));
            }
            _.push('</li><li class="plays plays-');
            if (typeof (track.playback_count) !== 'undefined' && (track.playback_count) != null) {
                _.push($.encode((typeof (track.playback_count) === 'function' ? (track.playback_count)
                    .call($item) : (track.playback_count))));
            }
            _.push('">');
            if (typeof (track.playback_count) !== 'undefined' && (track.playback_count) != null) {
                _.push($.encode((typeof (track.playback_count) === 'function' ? (track.playback_count)
                    .call($item) : (track.playback_count))));
            }
            _.push('</li></ul></div><span class="uploaded">');
            if (typeof (shared) !== 'undefined' && (shared) != null) {
                _.push($.encode((typeof (shared) === 'function' ? (shared)
                    .call($item) : (shared))));
            }
            _.push('</span></a></div></li>');
        }
        return _;
    }
    $.template["activities/stream-favoriting"] = function anonymous(jQuery, $item) {
        var $ = jQuery,
            call, _ = [],
            $data = $item.data;
        with($data) {
            _.push('<li data-sc-track-id="');
            if (typeof (track.id) !== 'undefined' && (track.id) != null) {
                _.push($.encode((typeof (track.id) === 'function' ? (track.id)
                    .call($item) : (track.id))));
            }
            _.push('" class="streamable-');
            if (typeof (track.streamable) !== 'undefined' && (track.streamable) != null) {
                _.push($.encode((typeof (track.streamable) === 'function' ? (track.streamable)
                    .call($item) : (track.streamable))));
            }
            _.push('"><div class="inner"><div class="tmb"><span><img src="');
            if (typeof (track.artwork_url) !== 'undefined' && (track.artwork_url) != null) {
                _.push($.encode((typeof (track.artwork_url) === 'function' ? (track.artwork_url)
                    .call($item) : (track.artwork_url))));
            }
            _.push('"></span></div><a href="/');
            if (typeof (track.user.permalink) !== 'undefined' && (track.user.permalink) != null) {
                _.push($.encode((typeof (track.user.permalink) === 'function' ? (track.user.permalink)
                    .call($item) : (track.user.permalink))));
            }
            _.push('/');
            if (typeof (track.permalink) !== 'undefined' && (track.permalink) != null) {
                _.push($.encode((typeof (track.permalink) === 'function' ? (track.permalink)
                    .call($item) : (track.permalink))));
            }
            _.push('"><h3 class="uploader">');
            if (typeof (track.user.username) !== 'undefined' && (track.user.username) != null) {
                _.push($.encode((typeof (track.user.username) === 'function' ? (track.user.username)
                    .call($item) : (track.user.username))));
            }
            _.push('</h3><p class="title">');
            if (typeof (track.title) !== 'undefined' && (track.title) != null) {
                _.push($.encode((typeof (track.title) === 'function' ? (track.title)
                    .call($item) : (track.title))));
            }
            _.push('</p><div class="details"><span class="sharing-label secondary ');
            if (typeof (track.shared_label_class) !== 'undefined' && (track.shared_label_class) != null) {
                _.push($.encode((typeof (track.shared_label_class) === 'function' ? (track.shared_label_class)
                    .call($item) : (track.shared_label_class))));
            }
            _.push('">');
            if (typeof (track.sharing_label) !== 'undefined' && (track.sharing_label) != null) {
                _.push($.encode((typeof (track.sharing_label) === 'function' ? (track.sharing_label)
                    .call($item) : (track.sharing_label))));
            }
            _.push('</span><ul class="stats mini"><li class="user liked-by"><span>');
            if (typeof (track.liked_by.username) !== 'undefined' && (track.liked_by.username) != null) {
                _.push($.encode((typeof (track.liked_by.username) === 'function' ? (track.liked_by.username)
                    .call($item) : (track.liked_by.username))));
            }
            _.push('</span> liked it</li><li class="favorites favorites-');
            if (typeof (track.favoritings_count) !== 'undefined' && (track.favoritings_count) != null) {
                _.push($.encode((typeof (track.favoritings_count) === 'function' ? (track.favoritings_count)
                    .call($item) : (track.favoritings_count))));
            }
            _.push('">');
            if (typeof (track.favoritings_count) !== 'undefined' && (track.favoritings_count) != null) {
                _.push($.encode((typeof (track.favoritings_count) === 'function' ? (track.favoritings_count)
                    .call($item) : (track.favoritings_count))));
            }
            _.push('</li><li class="comments comments-');
            if (typeof (track.comment_count) !== 'undefined' && (track.comment_count) != null) {
                _.push($.encode((typeof (track.comment_count) === 'function' ? (track.comment_count)
                    .call($item) : (track.comment_count))));
            }
            _.push('">');
            if (typeof (track.comment_count) !== 'undefined' && (track.comment_count) != null) {
                _.push($.encode((typeof (track.comment_count) === 'function' ? (track.comment_count)
                    .call($item) : (track.comment_count))));
            }
            _.push('</li><li class="plays plays-');
            if (typeof (track.playback_count) !== 'undefined' && (track.playback_count) != null) {
                _.push($.encode((typeof (track.playback_count) === 'function' ? (track.playback_count)
                    .call($item) : (track.playback_count))));
            }
            _.push('">');
            if (typeof (track.playback_count) !== 'undefined' && (track.playback_count) != null) {
                _.push($.encode((typeof (track.playback_count) === 'function' ? (track.playback_count)
                    .call($item) : (track.playback_count))));
            }
            _.push('</li></ul></div><span class="uploaded">');
            if (typeof (shared) !== 'undefined' && (shared) != null) {
                _.push($.encode((typeof (shared) === 'function' ? (shared)
                    .call($item) : (shared))));
            }
            _.push('</span></a></div></li>');
        }
        return _;
    }
    $.template["facebook/facebook-details"] = function anonymous(jQuery, $item) {
        var $ = jQuery,
            call, _ = [],
            $data = $item.data;
        with($data) {
            _.push('<div class="fb-login"><h1>Welcome! Tell us a bit more.</h1><p>Fastest option would be to connect with Facebook. You\'d get an image as well!</p><div class="inner"><a href="');
            if (typeof (connectUrl) !== 'undefined' && (connectUrl) != null) {
                _.push($.encode((typeof (connectUrl) === 'function' ? (connectUrl)
                    .call($item) : (connectUrl))));
            }
            _.push('" class="button-sc button-blue button-fb"><span>With Facebook</span></a><small>By signing in you accept our<a href="/terms-of-use" target="tos">terms of use.</a></small></div></div>');
        }
        return _;
    }
    $.template["facebook/facebook-settings"] = function anonymous(jQuery, $item) {
        var $ = jQuery,
            call, _ = [],
            $data = $item.data;
        with($data) {
            _.push('<div class="fb-login"><p>Your account is not yet connected.</p><div class="inner"><a href="');
            if (typeof (connectUrl) !== 'undefined' && (connectUrl) != null) {
                _.push($.encode((typeof (connectUrl) === 'function' ? (connectUrl)
                    .call($item) : (connectUrl))));
            }
            _.push('" class="button-sc button-blue button-fb"><span>Connect With Facebook</span></a></div></div>');
        }
        return _;
    }
    $.template["facebook/facebook"] = function anonymous(jQuery, $item) {
        var $ = jQuery,
            call, _ = [],
            $data = $item.data;
        with($data) {
            _.push('<div class="fb-login"><div class="inner"><a href="');
            if (typeof (connectUrl) !== 'undefined' && (connectUrl) != null) {
                _.push($.encode((typeof (connectUrl) === 'function' ? (connectUrl)
                    .call($item) : (connectUrl))));
            }
            _.push('" class="button-sc button-blue button-fb"><span>With Facebook</span></a><small>By signing in you accept our <a href="/terms-of-use" target="tos">terms of use.</a></small></div></div>');
        }
        return _;
    }
    $.template["group/group-dropbox"] = function anonymous(jQuery, $item) {
        var $ = jQuery,
            call, _ = [],
            $data = $item.data;
        with($data) {
            _.push('<div class="text-content upload"><p>Want to record and share your sounds with this group? <b>There\'s an app for that!</b></p><div class="record-teaser"></div></div>');
        }
        return _;
    }
    $.template["group/group-info"] = function anonymous(jQuery, $item) {
        var $ = jQuery,
            call, _ = [],
            $data = $item.data;
        with($data) {
            _.push('<div class="page-content text-content"><div class="description">');
            if (typeof (formatted_description) !== 'undefined' && (formatted_description) != null) {
                _.push((typeof (formatted_description) === 'function' ? (formatted_description)
                    .call($item) : (formatted_description)));
            }
            _.push('</div></div>');
        }
        return _;
    }
    $.template["group/group-members"] = function anonymous(jQuery, $item) {
        var $ = jQuery,
            call, _ = [],
            $data = $item.data;
        with($data) {
            _.push('<ul class="list-items users">');
            if (typeof (members) !== 'undefined' && (members) != null) {
                $.each((typeof (members) === 'function' ? (members)
                    .call($item) : (members)), function (index, user) {
                    with(this) {
                        _.push('');
                        if (typeof ("useritem") !== 'undefined' && ("useritem") != null) {
                            _ = _.concat($item.nest("useritem", user));
                        }
                        _.push('');
                    }
                });
            }
            _.push('<li class="more" data-sc-href="');
            if (typeof (members.next_href) !== 'undefined' && (members.next_href) != null) {
                _.push($.encode((typeof (members.next_href) === 'function' ? (members.next_href)
                    .call($item) : (members.next_href))));
            }
            _.push('"><canvas class="throbber">Loading…</canvas></li></ul>');
        }
        return _;
    }
    $.template["group/group"] = function anonymous(jQuery, $item) {
        var $ = jQuery,
            call, _ = [],
            $data = $item.data;
        with($data) {
            _.push('<div class="group"><div class="profile"><img src="');
            if (typeof (artwork_url) !== 'undefined' && (artwork_url) != null) {
                _.push($.encode((typeof (artwork_url) === 'function' ? (artwork_url)
                    .call($item) : (artwork_url))));
            }
            _.push('" class="artwork"><h1>');
            if (typeof (name) !== 'undefined' && (name) != null) {
                _.push($.encode((typeof (name) === 'function' ? (name)
                    .call($item) : (name))));
            }
            _.push('</h1><p class="secondary">');
            if (typeof (short_description) !== 'undefined' && (short_description) != null) {
                _.push($.encode((typeof (short_description) === 'function' ? (short_description)
                    .call($item) : (short_description))));
            }
            _.push('</p></div><ul class="page-tabs"><li data-sc-tab="tracks"><a href="/groups/');
            if (typeof (permalink) !== 'undefined' && (permalink) != null) {
                _.push($.encode((typeof (permalink) === 'function' ? (permalink)
                    .call($item) : (permalink))));
            }
            _.push('/tracks">Sounds</a></li><li data-sc-tab="members"><a href="/groups/');
            if (typeof (permalink) !== 'undefined' && (permalink) != null) {
                _.push($.encode((typeof (permalink) === 'function' ? (permalink)
                    .call($item) : (permalink))));
            }
            _.push('/members">Members</a></li><li data-sc-tab="info"><a href="/groups/');
            if (typeof (permalink) !== 'undefined' && (permalink) != null) {
                _.push($.encode((typeof (permalink) === 'function' ? (permalink)
                    .call($item) : (permalink))));
            }
            _.push('/info">Info</a></li></ul><div class="content page-content"><div class="placeholder"><canvas class="throbber">Loading…</canvas></div></div><div class="page-fade"><img class="drop-shadow" src="');
            if (typeof (artwork_url) !== 'undefined' && (artwork_url) != null) {
                _.push($.encode((typeof (artwork_url) === 'function' ? (artwork_url)
                    .call($item) : (artwork_url))));
            }
            _.push('"><canvas>Loading…</canvas><img class="big-image drop-shadow"></div></div>');
        }
        return _;
    }
    $.template["group/group-tracks"] = function anonymous(jQuery, $item) {
        var $ = jQuery,
            call, _ = [],
            $data = $item.data;
        with($data) {
            _.push('<div class="page-inner-header sub-content sub-content-');
            if (typeof (track_count) !== 'undefined' && (track_count) != null) {
                _.push($.encode((typeof (track_count) === 'function' ? (track_count)
                    .call($item) : (track_count))));
            }
            _.push('">No-one has added sounds to this group yet.</div><ul class="list-items tracks">');
            if (typeof (tracks) !== 'undefined' && (tracks) != null) {
                $.each((typeof (tracks) === 'function' ? (tracks)
                    .call($item) : (tracks)), function (index, track) {
                    with(this) {
                        _.push('');
                        if (typeof ("trackitem") !== 'undefined' && ("trackitem") != null) {
                            _ = _.concat($item.nest("trackitem", track));
                        }
                        _.push('');
                    }
                });
            }
            _.push('<li class="more" data-sc-href="');
            if (typeof (tracks.next_href) !== 'undefined' && (tracks.next_href) != null) {
                _.push($.encode((typeof (tracks.next_href) === 'function' ? (tracks.next_href)
                    .call($item) : (tracks.next_href))));
            }
            _.push('"><canvas class="throbber">Loading…</canvas></li></ul>');
        }
        return _;
    }
    $.template["groupitem"] = function anonymous(jQuery, $item) {
        var $ = jQuery,
            call, _ = [],
            $data = $item.data;
        with($data) {
            _.push('<li><div class="tmb"><span><img src="');
            if (typeof (artwork_url) !== 'undefined' && (artwork_url) != null) {
                _.push($.encode((typeof (artwork_url) === 'function' ? (artwork_url)
                    .call($item) : (artwork_url))));
            }
            _.push('"></span></div><a href="/groups/');
            if (typeof (permalink) !== 'undefined' && (permalink) != null) {
                _.push($.encode((typeof (permalink) === 'function' ? (permalink)
                    .call($item) : (permalink))));
            }
            _.push('"> <span class="title">');
            if (typeof (name) !== 'undefined' && (name) != null) {
                _.push($.encode((typeof (name) === 'function' ? (name)
                    .call($item) : (name))));
            }
            _.push('</span></a></li>');
        }
        return _;
    }
    $.template["home/home"] = function anonymous(jQuery, $item) {
        var $ = jQuery,
            call, _ = [],
            $data = $item.data;
        with($data) {
            _.push('<div class="home"><div class="page-content text-content static-content drop-shadow"><h1>Share Your Sounds</h1><p>SoundCloud is the world\'s fastest<br> growing sound platform that lets anyone<br> <strong>capture, create</strong> and <strong>share sounds</strong><br> everywhere on the web.</p><div class="signup"><a href="');
            if (typeof (connectUrl) !== 'undefined' && (connectUrl) != null) {
                _.push($.encode((typeof (connectUrl) === 'function' ? (connectUrl)
                    .call($item) : (connectUrl))));
            }
            _.push('" class="button-sc button-blue button-fb"><span>Sign in with Facebook</span></a><a href="/signup" class="button-sc button-orange"><span>Sign Up</span></a></div><p class="native-apps">We have native mobile apps as well,<br> <a href="/mobile">check them out.</a></p></div><div class="content page-content"><div class="placeholder"><canvas class="throbber">Loading…</canvas></div></div></div>');
        }
        return _;
    }
    $.template["home/home-tracks"] = function anonymous(jQuery, $item) {
        var $ = jQuery,
            call, _ = [],
            $data = $item.data;
        with($data) {
            _.push('<h2 class="page-inner-header">Explore the newest sounds on SoundCloud:</h2><ul class="list-items tracks">');
            if (typeof (tracks) !== 'undefined' && (tracks) != null) {
                $.each((typeof (tracks) === 'function' ? (tracks)
                    .call($item) : (tracks)), function (index, track) {
                    with(this) {
                        _.push('');
                        if (typeof ("trackitem") !== 'undefined' && ("trackitem") != null) {
                            _ = _.concat($item.nest("trackitem", track));
                        }
                        _.push('');
                    }
                });
            }
            _.push('</ul>');
        }
        return _;
    }
    $.template["inlineerror"] = function anonymous(jQuery, $item) {
        var $ = jQuery,
            call, _ = [],
            $data = $item.data;
        with($data) {
            _.push('<div class="inline-error"><span class="message">Sorry, something went wrong.</span><a href="" data-url="');
            if (typeof (url) !== 'undefined' && (url) != null) {
                _.push($.encode((typeof (url) === 'function' ? (url)
                    .call($item) : (url))));
            }
            _.push('" class="button">Retry</a></div>');
        }
        return _;
    }
    $.template["login/login-logout"] = function anonymous(jQuery, $item) {
        var $ = jQuery,
            call, _ = [],
            $data = $item.data;
        with($data) {
            _.push('<div class="login"><ul class="page-tabs page-tabs-2"><li data-sc-tab="login" class="active"><a href="/login">Log In</a></li><li data-sc-tab="signup"><a href="/signup">Sign Up</a></li></ul><div class="page-content text-content text-readability"><p>You are logged in as <strong>');
            if (typeof (username) !== 'undefined' && (username) != null) {
                _.push($.encode((typeof (username) === 'function' ? (username)
                    .call($item) : (username))));
            }
            _.push('.</strong></p><p class="logout"><a href="/logout?return_to=/login"><strong>Click here</a></strong> to log in as a different user.</p></div></div>');
        }
        return _;
    }
    $.template["login/login-private-track"] = function anonymous(jQuery, $item) {
        var $ = jQuery,
            call, _ = [],
            $data = $item.data;
        with($data) {
            _.push('<div class="login"><ul class="page-tabs page-tabs-2"><li data-sc-tab="login" class="active"><a href="/login">Log In</a></li><li data-sc-tab="signup"><a href="/signup">Sign Up</a></li></ul><div class="fb-container page-inner-header"></div><div class="page-content text-content"><p>This is a private track. To make sure things stay private you\'ll need to log in to your SoundCloud account to have a listen.</p><br><p>Don\'t have a SoundCloud account? <a href="/signup">Sign up</a> now!</p><br><form action="/login" method="POST" accept-charset="utf-8" novalidate><div class="block"><label for="email">Username</label><input type="email" name="username" id="email" value="');
            if (typeof (username) !== 'undefined' && (username) != null) {
                _.push($.encode((typeof (username) === 'function' ? (username)
                    .call($item) : (username))));
            }
            _.push('"></div><div class="block"><label for="password">Password</label> <a href="/login/forgot">Forgot password?</a><input type="password" name="password" id="password"></div><input type="hidden" name="grant_type" value="password"><div class="block buttons"><canvas class="throbber throbber-small"></canvas><a href="/" class="cancel">Cancel</a><input type="submit" value="Log In" class="icon-button"></div></form></div></div>');
        }
        return _;
    }
    $.template["login/login"] = function anonymous(jQuery, $item) {
        var $ = jQuery,
            call, _ = [],
            $data = $item.data;
        with($data) {
            _.push('<div class="login"><ul class="page-tabs page-tabs-2"><li data-sc-tab="login" class="active"><a href="/login">Log In</a></li><li data-sc-tab="signup"><a href="/signup">Sign Up</a></li></ul><div class="fb-container page-inner-header"></div><div class="page-content text-content"><p>Don\'t have a SoundCloud account? <a href="/signup">Sign up</a> now!</p><br><form action="/login" method="POST" accept-charset="utf-8" novalidate><div class="block"><label for="email">Email</label><input type="email" name="username" id="email" value="');
            if (typeof (username) !== 'undefined' && (username) != null) {
                _.push($.encode((typeof (username) === 'function' ? (username)
                    .call($item) : (username))));
            }
            _.push('"></div><div class="block"><label for="password">Password</label> <a href="/login/forgot">Forgot password?</a><input type="password" name="password" id="password"></div><input type="hidden" name="grant_type" value="password"><div class="block buttons"><canvas class="throbber throbber-small"></canvas><a href="/" class="cancel">Cancel</a><input type="submit" value="Log In" class="icon-button"></div></form></div></div>');
        }
        return _;
    }
    $.template["password/password"] = function anonymous(jQuery, $item) {
        var $ = jQuery,
            call, _ = [],
            $data = $item.data;
        with($data) {
            _.push('<div class="login"><ul class="page-tabs page-tabs-2"><li data-sc-tab="login" class="active"><a href="/login">Log In</a></li><li data-sc-tab="signup"><a href="/signup">Sign Up</a></li></ul><div class="fb-container page-inner-header"></div><div class="page-content text-content"><form action="/login/forgot" method="POST" accept-charset="utf-8" novalidate><p>Don\'t have a SoundCloud account? <a href="/signup">Sign up</a> now!</p><br><p>Enter your <strong>email address</strong> and we\'ll <strong>send you a link</strong> that\'ll allow you to <strong>change your password.</strong> Problems? Contact <a href="http://support.soundcloud.com">support</a>.</p><br><div class="block"><label for="email">Your email address</label> <a href="/login">Oh, I remember it!</a><input type="email" name="email" id="email" value="');
            if (typeof (username) !== 'undefined' && (username) != null) {
                _.push($.encode((typeof (username) === 'function' ? (username)
                    .call($item) : (username))));
            }
            _.push('"></div><div class="block buttons"><canvas class="throbber throbber-small"></canvas><input type="submit" value="Submit" class="icon-button"></div></form></div><div id="password-sent-msg" class="page-content text-content">A password recovery email has been sent to you!<br>Go back to the <a href="/login">login page</a>.</div></div>');
        }
        return _;
    }
    $.template["peoplefinder/peoplefinder-connect"] = function anonymous(jQuery, $item) {
        var $ = jQuery,
            call, _ = [],
            $data = $item.data;
        with($data) {
            _.push('<div class="not-connected"><p>Connect with your Friends from Facebook or follow some other interesting people.SoundCloud will be much more fun!</p><a href="');
            if (typeof (connectUrl) !== 'undefined' && (connectUrl) != null) {
                _.push($.encode((typeof (connectUrl) === 'function' ? (connectUrl)
                    .call($item) : (connectUrl))));
            }
            _.push('" class="button-sc button-blue button-fb"><span>Find Friends from Facebook</span></a></div>');
        }
        return _;
    }
    $.template["peoplefinder/peoplefinder-friends"] = function anonymous(jQuery, $item) {
        var $ = jQuery,
            call, _ = [],
            $data = $item.data;
        with($data) {
            _.push('<h2 class="page-inner-header friends">');
            if (typeof (header) !== 'undefined' && (header) != null) {
                _.push($.encode((typeof (header) === 'function' ? (header)
                    .call($item) : (header))));
            }
            _.push('</h2><ul class="list-items users friends">');
            if (typeof (friends) !== 'undefined' && (friends) != null) {
                $.each((typeof (friends) === 'function' ? (friends)
                    .call($item) : (friends)), function (index, user) {
                    with(this) {
                        _.push('');
                        if (typeof ("useritem") !== 'undefined' && ("useritem") != null) {
                            _ = _.concat($item.nest("useritem", user));
                        }
                        _.push('');
                    }
                });
            }
            _.push('</ul>');
        }
        return _;
    }
    $.template["peoplefinder/peoplefinder-suggested"] = function anonymous(jQuery, $item) {
        var $ = jQuery,
            call, _ = [],
            $data = $item.data;
        with($data) {
            _.push('<h2 class="page-inner-header suggested">Suggested People</h2><ul class="list-items users suggested">');
            if (typeof (suggested) !== 'undefined' && (suggested) != null) {
                $.each((typeof (suggested) === 'function' ? (suggested)
                    .call($item) : (suggested)), function (index, user) {
                    with(this) {
                        _.push('');
                        if (typeof ("useritem") !== 'undefined' && ("useritem") != null) {
                            _ = _.concat($item.nest("useritem", user));
                        }
                        _.push('');
                    }
                });
            }
            _.push('</ul>');
        }
        return _;
    }
    $.template["peoplefinder/peoplefinder"] = function anonymous(jQuery, $item) {
        var $ = jQuery,
            call, _ = [],
            $data = $item.data;
        with($data) {
            _.push('<div class="content page-content peoplefinder"><div class="friends"><h2 class="page-inner-header friends">Looking for your Facebook friends…</h2><canvas class="throbber">Loading…</canvas></div><div class="suggested"><h2 class="page-inner-header suggested">Loading suggested people…</h2><canvas class="throbber">Loading…</canvas></div></div>');
        }
        return _;
    }
    $.template["placeholder"] = function anonymous(jQuery, $item) {
        var $ = jQuery,
            call, _ = [],
            $data = $item.data;
        with($data) {
            _.push('<div class="placeholder"><canvas class="throbber">Loading…</canvas></div>');
        }
        return _;
    }
    $.template["playlist/playlist-loading"] = function anonymous(jQuery, $item) {
        var $ = jQuery,
            call, _ = [],
            $data = $item.data;
        with($data) {
            _.push('<div class="track loading playlist page-content"><div class="info hidden"><div class="info-wrap drop-shadow"><h1 class="title">');
            if (typeof (title) !== 'undefined' && (title) != null) {
                _.push($.encode((typeof (title) === 'function' ? (title)
                    .call($item) : (title))));
            }
            _.push('</h1><div class="playlist-info"><span class="trackcount">');
            if (typeof (tracks_count) !== 'undefined' && (tracks_count) != null) {
                _.push($.encode((typeof (tracks_count) === 'function' ? (tracks_count)
                    .call($item) : (tracks_count))));
            }
            _.push('</span><span class="by">by</span> <a href="" class="user">');
            if (typeof (user.username) !== 'undefined' && (user.username) != null) {
                _.push($.encode((typeof (user.username) === 'function' ? (user.username)
                    .call($item) : (user.username))));
            }
            _.push('</a><span class="uploaded">');
            if (typeof (shared) !== 'undefined' && (shared) != null) {
                _.push($.encode((typeof (shared) === 'function' ? (shared)
                    .call($item) : (shared))));
            }
            _.push('</span><div class="details"><ul class="stats mini"><li class="favorites favorites-');
            if (typeof (favoritings_count) !== 'undefined' && (favoritings_count) != null) {
                _.push($.encode((typeof (favoritings_count) === 'function' ? (favoritings_count)
                    .call($item) : (favoritings_count))));
            }
            _.push('">');
            if (typeof (favoritings_count) !== 'undefined' && (favoritings_count) != null) {
                _.push($.encode((typeof (favoritings_count) === 'function' ? (favoritings_count)
                    .call($item) : (favoritings_count))));
            }
            _.push('</li><li class="comments comments-');
            if (typeof (comment_count) !== 'undefined' && (comment_count) != null) {
                _.push($.encode((typeof (comment_count) === 'function' ? (comment_count)
                    .call($item) : (comment_count))));
            }
            _.push('">');
            if (typeof (comment_count) !== 'undefined' && (comment_count) != null) {
                _.push($.encode((typeof (comment_count) === 'function' ? (comment_count)
                    .call($item) : (comment_count))));
            }
            _.push('</li><li class="plays plays-');
            if (typeof (playback_count) !== 'undefined' && (playback_count) != null) {
                _.push($.encode((typeof (playback_count) === 'function' ? (playback_count)
                    .call($item) : (playback_count))));
            }
            _.push('">');
            if (typeof (playback_count) !== 'undefined' && (playback_count) != null) {
                _.push($.encode((typeof (playback_count) === 'function' ? (playback_count)
                    .call($item) : (playback_count))));
            }
            _.push('</li></ul></div></div><a class="toggle-list flip-transition"><div class="hide"></div></a></div><div class="now-playing"><div class="info-wrap drop-shadow hidden"><label class="now-playing-icon">Now playing: </label><!-- <a href="">');
            if (typeof (title) !== 'undefined' && (title) != null) {
                _.push($.encode((typeof (title) === 'function' ? (title)
                    .call($item) : (title))));
            }
            _.push('</a> --></div></div></div><div class="artwork"><img class="tmb" src="');
            if (typeof (track.artwork_url) !== 'undefined' && (track.artwork_url) != null) {
                _.push($.encode((typeof (track.artwork_url) === 'function' ? (track.artwork_url)
                    .call($item) : (track.artwork_url))));
            }
            _.push('"></div><div class="player"></div><div class="throbber-placeholder"><canvas class="throbber">Loading…</canvas></div></div>');
        }
        return _;
    }
    $.template["playlist/playlist"] = function anonymous(jQuery, $item) {
        var $ = jQuery,
            call, _ = [],
            $data = $item.data;
        with($data) {
            _.push('<div class="track playlist page-content"><div class="info transition hidden"><div class="info-wrap drop-shadow"><h1 class="title">');
            if (typeof (title) !== 'undefined' && (title) != null) {
                _.push($.encode((typeof (title) === 'function' ? (title)
                    .call($item) : (title))));
            }
            _.push('</h1><div class="playlist-info"><span class="trackcount">');
            if (typeof (tracks_count) !== 'undefined' && (tracks_count) != null) {
                _.push($.encode((typeof (tracks_count) === 'function' ? (tracks_count)
                    .call($item) : (tracks_count))));
            }
            _.push('</span>by <a href="/');
            if (typeof (user.permalink) !== 'undefined' && (user.permalink) != null) {
                _.push($.encode((typeof (user.permalink) === 'function' ? (user.permalink)
                    .call($item) : (user.permalink))));
            }
            _.push('" class="user">');
            if (typeof (user.username) !== 'undefined' && (user.username) != null) {
                _.push($.encode((typeof (user.username) === 'function' ? (user.username)
                    .call($item) : (user.username))));
            }
            _.push('</a><span class="uploaded">');
            if (typeof (shared) !== 'undefined' && (shared) != null) {
                _.push($.encode((typeof (shared) === 'function' ? (shared)
                    .call($item) : (shared))));
            }
            _.push('</span><span class="sharing-label secondary ');
            if (typeof (shared_label_class) !== 'undefined' && (shared_label_class) != null) {
                _.push($.encode((typeof (shared_label_class) === 'function' ? (shared_label_class)
                    .call($item) : (shared_label_class))));
            }
            _.push('">');
            if (typeof (sharing_label) !== 'undefined' && (sharing_label) != null) {
                _.push($.encode((typeof (sharing_label) === 'function' ? (sharing_label)
                    .call($item) : (sharing_label))));
            }
            _.push('</span></div><a class="toggle-list flip-transition"><div class="hide" style="background-image: url(');
            if (typeof (track.artwork_url) !== 'undefined' && (track.artwork_url) != null) {
                _.push($.encode((typeof (track.artwork_url) === 'function' ? (track.artwork_url)
                    .call($item) : (track.artwork_url))));
            }
            _.push(')"></div></a></div><div class="now-playing"><div class="info-wrap transition drop-shadow hidden"><label class="now-playing-icon">Now playing: </label><a href="');
            if (typeof (track.permalink_relative) !== 'undefined' && (track.permalink_relative) != null) {
                _.push($.encode((typeof (track.permalink_relative) === 'function' ? (track.permalink_relative)
                    .call($item) : (track.permalink_relative))));
            }
            _.push('">');
            if (typeof (track.title) !== 'undefined' && (track.title) != null) {
                _.push($.encode((typeof (track.title) === 'function' ? (track.title)
                    .call($item) : (track.title))));
            }
            _.push('</a></div></div></div><div class="artwork"><img class="tmb" src="');
            if (typeof (track.artwork_url) !== 'undefined' && (track.artwork_url) != null) {
                _.push($.encode((typeof (track.artwork_url) === 'function' ? (track.artwork_url)
                    .call($item) : (track.artwork_url))));
            }
            _.push('"><img class="huge transition hide" src="');
            if (typeof (track.artwork_url_huge) !== 'undefined' && (track.artwork_url_huge) != null) {
                _.push($.encode((typeof (track.artwork_url_huge) === 'function' ? (track.artwork_url_huge)
                    .call($item) : (track.artwork_url_huge))));
            }
            _.push('"></div><div class="player mini transition hide drop-shadow"><div class="controls"><button class="play">Play</button><button class="pause">Pause</button><button class="play-pressed">Play</button><button class="pause-pressed">Pause</button></div><div class="scrubber"><img class="waveform transition hide" src="');
            if (typeof (track.waveform_url) !== 'undefined' && (track.waveform_url) != null) {
                _.push($.encode((typeof (track.waveform_url) === 'function' ? (track.waveform_url)
                    .call($item) : (track.waveform_url))));
            }
            _.push('"><div class="progress-load"></div><div class="progress-play"></div><b class="indicator duration">');
            if (typeof (track.duration_timecode) !== 'undefined' && (track.duration_timecode) != null) {
                _.push($.encode((typeof (track.duration_timecode) === 'function' ? (track.duration_timecode)
                    .call($item) : (track.duration_timecode))));
            }
            _.push('</b><b class="indicator position"><span class="current">0.00</span> / <span class="total">');
            if (typeof (track.duration_timecode) !== 'undefined' && (track.duration_timecode) != null) {
                _.push($.encode((typeof (track.duration_timecode) === 'function' ? (track.duration_timecode)
                    .call($item) : (track.duration_timecode))));
            }
            _.push('</span></b></div></div><div class="details transition"><div class="track-meta"><div class="share-view track-share-view"></div><div class="options"><button class="button icon favorite"><span>Like</span></button><a data-sc-field="purchase_url" data-sc-permalink-url="');
            if (typeof (track.permalink_url) !== 'undefined' && (track.permalink_url) != null) {
                _.push($.encode((typeof (track.permalink_url) === 'function' ? (track.permalink_url)
                    .call($item) : (track.permalink_url))));
            }
            _.push('" class="button buy" href="');
            if (typeof (track.purchase_url) !== 'undefined' && (track.purchase_url) != null) {
                _.push($.encode((typeof (track.purchase_url) === 'function' ? (track.purchase_url)
                    .call($item) : (track.purchase_url))));
            }
            _.push('" target="_blank"><span>');
            if (typeof (track.purchase_title) !== 'undefined' && (track.purchase_title) != null) {
                _.push($.encode((typeof (track.purchase_title) === 'function' ? (track.purchase_title)
                    .call($item) : (track.purchase_title))));
            }
            _.push('</span></a></div><div class="sharing-widgets-container"></div><div class="description">');
            if (typeof (track.formatted_description) !== 'undefined' && (track.formatted_description) != null) {
                _.push((typeof (track.formatted_description) === 'function' ? (track.formatted_description)
                    .call($item) : (track.formatted_description)));
            }
            _.push('</div><p data-sc-field="track.tags" class="tags"><strong>Tags:</strong>');
            if (typeof (track.tags) !== 'undefined' && (track.tags) != null) {
                $.each((typeof (track.tags) === 'function' ? (track.tags)
                    .call($item) : (track.tags)), function (index, tag) {
                    with(this) {
                        _.push('<a class="tag" href="/tags/');
                        if (typeof (tag) !== 'undefined' && (tag) != null) {
                            _.push($.encode((typeof (tag) === 'function' ? (tag)
                                .call($item) : (tag))));
                        }
                        _.push('">');
                        if (typeof (tag) !== 'undefined' && (tag) != null) {
                            _.push($.encode((typeof (tag) === 'function' ? (tag)
                                .call($item) : (tag))));
                        }
                        _.push('</a>');
                    }
                });
            }
            _.push('</p><ul><li data-sc-field="track.label_name"><strong>Released by:</strong> ');
            if (typeof (track.label_name) !== 'undefined' && (track.label_name) != null) {
                _.push($.encode((typeof (track.label_name) === 'function' ? (track.label_name)
                    .call($item) : (track.label_name))));
            }
            _.push('</li><li data-sc-field="track.release"><strong>Release/catalogue number:</strong> ');
            if (typeof (track.release) !== 'undefined' && (track.release) != null) {
                _.push($.encode((typeof (track.release) === 'function' ? (track.release)
                    .call($item) : (track.release))));
            }
            _.push('</li><li data-sc-field="track.released"><strong>Released date:</strong> ');
            if (typeof (track.released) !== 'undefined' && (track.released) != null) {
                _.push($.encode((typeof (track.released) === 'function' ? (track.released)
                    .call($item) : (track.released))));
            }
            _.push('</li></ul></div></div><div class="playlist-details"><div class="share-view playlist-share-view"></div><div class="options"><a data-sc-field="purchase_url" data-sc-permalink-url="');
            if (typeof (permalink_url) !== 'undefined' && (permalink_url) != null) {
                _.push($.encode((typeof (permalink_url) === 'function' ? (permalink_url)
                    .call($item) : (permalink_url))));
            }
            _.push('" class="button buy" href="');
            if (typeof (purchase_url) !== 'undefined' && (purchase_url) != null) {
                _.push($.encode((typeof (purchase_url) === 'function' ? (purchase_url)
                    .call($item) : (purchase_url))));
            }
            _.push('" target="_blank"><span>');
            if (typeof (purchase_title) !== 'undefined' && (purchase_title) != null) {
                _.push($.encode((typeof (purchase_title) === 'function' ? (purchase_title)
                    .call($item) : (purchase_title))));
            }
            _.push('</span></a></div><ol class="playlist-tracks">');
            if (typeof (tracks) !== 'undefined' && (tracks) != null) {
                $.each((typeof (tracks) === 'function' ? (tracks)
                    .call($item) : (tracks)), function (index, track) {
                    with(this) {
                        _.push('<li><span class="track-number">');
                        if (typeof (index + 1) !== 'undefined' && (index + 1) != null) {
                            _.push($.encode((typeof (index + 1) === 'function' ? (index + 1)
                                .call($item) : (index + 1))));
                        }
                        _.push('. </span><span class="track-details"><a href="');
                        if (typeof (track.permalink_relative) !== 'undefined' && (track.permalink_relative) != null) {
                            _.push($.encode((typeof (track.permalink_relative) === 'function' ? (track.permalink_relative)
                                .call($item) : (track.permalink_relative))));
                        }
                        _.push('" data-sc-index="');
                        if (typeof (index) !== 'undefined' && (index) != null) {
                            _.push($.encode((typeof (index) === 'function' ? (index)
                                .call($item) : (index))));
                        }
                        _.push('">');
                        if (typeof (track.title) !== 'undefined' && (track.title) != null) {
                            _.push($.encode((typeof (track.title) === 'function' ? (track.title)
                                .call($item) : (track.title))));
                        }
                        _.push('</a> <span>');
                        if (typeof (duration_timecode) !== 'undefined' && (duration_timecode) != null) {
                            _.push($.encode((typeof (duration_timecode) === 'function' ? (duration_timecode)
                                .call($item) : (duration_timecode))));
                        }
                        _.push('</span></span></li>');
                    }
                });
            }
            _.push('</ol><div class="description">');
            if (typeof (formatted_description) !== 'undefined' && (formatted_description) != null) {
                _.push((typeof (formatted_description) === 'function' ? (formatted_description)
                    .call($item) : (formatted_description)));
            }
            _.push('</div></div></div>');
        }
        return _;
    }
    $.template["playlistitem"] = function anonymous(jQuery, $item) {
        var $ = jQuery,
            call, _ = [],
            $data = $item.data;
        with($data) {
            _.push('<li data-sc-track-id="');
            if (typeof (id) !== 'undefined' && (id) != null) {
                _.push($.encode((typeof (id) === 'function' ? (id)
                    .call($item) : (id))));
            }
            _.push('"><div class="inner"><div class="tmb"><span><img src="');
            if (typeof (artwork_url) !== 'undefined' && (artwork_url) != null) {
                _.push($.encode((typeof (artwork_url) === 'function' ? (artwork_url)
                    .call($item) : (artwork_url))));
            }
            _.push('"></span></div><a href="/');
            if (typeof (user.permalink) !== 'undefined' && (user.permalink) != null) {
                _.push($.encode((typeof (user.permalink) === 'function' ? (user.permalink)
                    .call($item) : (user.permalink))));
            }
            _.push('/sets/');
            if (typeof (permalink) !== 'undefined' && (permalink) != null) {
                _.push($.encode((typeof (permalink) === 'function' ? (permalink)
                    .call($item) : (permalink))));
            }
            _.push('"><h3 class="uploader">');
            if (typeof (user.username) !== 'undefined' && (user.username) != null) {
                _.push($.encode((typeof (user.username) === 'function' ? (user.username)
                    .call($item) : (user.username))));
            }
            _.push('</h3><p class="title">');
            if (typeof (title) !== 'undefined' && (title) != null) {
                _.push($.encode((typeof (title) === 'function' ? (title)
                    .call($item) : (title))));
            }
            _.push('</p><div class="details"><span class="sharing-label secondary ');
            if (typeof (shared_label_class) !== 'undefined' && (shared_label_class) != null) {
                _.push($.encode((typeof (shared_label_class) === 'function' ? (shared_label_class)
                    .call($item) : (shared_label_class))));
            }
            _.push('">');
            if (typeof (sharing_label) !== 'undefined' && (sharing_label) != null) {
                _.push($.encode((typeof (sharing_label) === 'function' ? (sharing_label)
                    .call($item) : (sharing_label))));
            }
            _.push('</span><span class="tracks">');
            if (typeof (tracks.length) !== 'undefined' && (tracks.length) != null) {
                _.push($.encode((typeof (tracks.length) === 'function' ? (tracks.length)
                    .call($item) : (tracks.length))));
            }
            _.push(' sounds</span></div><span class="uploaded">');
            if (typeof (shared) !== 'undefined' && (shared) != null) {
                _.push($.encode((typeof (shared) === 'function' ? (shared)
                    .call($item) : (shared))));
            }
            _.push('</span></a></div></li>');
        }
        return _;
    }
    $.template["search/search-groups"] = function anonymous(jQuery, $item) {
        var $ = jQuery,
            call, _ = [],
            $data = $item.data;
        with($data) {
            _.push('<div class="page-inner-header sub-content sub-content-');
            if (typeof (groups_count) !== 'undefined' && (groups_count) != null) {
                _.push($.encode((typeof (groups_count) === 'function' ? (groups_count)
                    .call($item) : (groups_count))));
            }
            _.push('">Sorry, we couldn\'t find any groups matching <strong>“');
            if (typeof (keywords) !== 'undefined' && (keywords) != null) {
                _.push($.encode((typeof (keywords) === 'function' ? (keywords)
                    .call($item) : (keywords))));
            }
            _.push('”.</strong></div><ul class="list-items groups">');
            if (typeof (groups) !== 'undefined' && (groups) != null) {
                $.each((typeof (groups) === 'function' ? (groups)
                    .call($item) : (groups)), function (index, group) {
                    with(this) {
                        _.push('');
                        if (typeof ("groupitem") !== 'undefined' && ("groupitem") != null) {
                            _ = _.concat($item.nest("groupitem", group));
                        }
                        _.push('');
                    }
                });
            }
            _.push('<li class="more" data-sc-href="');
            if (typeof (groups.next_href) !== 'undefined' && (groups.next_href) != null) {
                _.push($.encode((typeof (groups.next_href) === 'function' ? (groups.next_href)
                    .call($item) : (groups.next_href))));
            }
            _.push('"><canvas class="throbber">Loading…</canvas></li></ul>');
        }
        return _;
    }
    $.template["search/search"] = function anonymous(jQuery, $item) {
        var $ = jQuery,
            call, _ = [],
            $data = $item.data;
        with($data) {
            _.push('<div id="search"><div class="searchword"><span></span></div><ul class="page-tabs"><li data-sc-tab="tracks"><a href="/tracks/search?');
            if (typeof (query) !== 'undefined' && (query) != null) {
                _.push($.encode((typeof (query) === 'function' ? (query)
                    .call($item) : (query))));
            }
            _.push('">Sounds</a></li><li data-sc-tab="users"><a href="/users/search?');
            if (typeof (query) !== 'undefined' && (query) != null) {
                _.push($.encode((typeof (query) === 'function' ? (query)
                    .call($item) : (query))));
            }
            _.push('">People</a></li><li data-sc-tab="groups"><a href="/groups/search?');
            if (typeof (query) !== 'undefined' && (query) != null) {
                _.push($.encode((typeof (query) === 'function' ? (query)
                    .call($item) : (query))));
            }
            _.push('">Groups</a></li></ul><div class="start-searching page-content text-content">Enter a search term above to start your search.</div><div class="content page-content"><div class="placeholder"><canvas class="throbber">Loading…</canvas></div></div></div>');
        }
        return _;
    }
    $.template["search/search-tracks"] = function anonymous(jQuery, $item) {
        var $ = jQuery,
            call, _ = [],
            $data = $item.data;
        with($data) {
            _.push('<div class="page-inner-header sub-content sub-content-');
            if (typeof (tracks_count) !== 'undefined' && (tracks_count) != null) {
                _.push($.encode((typeof (tracks_count) === 'function' ? (tracks_count)
                    .call($item) : (tracks_count))));
            }
            _.push('">Sorry, we couldn\'t find any sounds matching <strong>“');
            if (typeof (keywords) !== 'undefined' && (keywords) != null) {
                _.push($.encode((typeof (keywords) === 'function' ? (keywords)
                    .call($item) : (keywords))));
            }
            _.push('”.</strong></div><ul class="list-items tracks">');
            if (typeof (tracks) !== 'undefined' && (tracks) != null) {
                $.each((typeof (tracks) === 'function' ? (tracks)
                    .call($item) : (tracks)), function (index, track) {
                    with(this) {
                        _.push('');
                        if (typeof ("trackitem") !== 'undefined' && ("trackitem") != null) {
                            _ = _.concat($item.nest("trackitem", track));
                        }
                        _.push('');
                    }
                });
            }
            _.push('<li class="more" data-sc-href="');
            if (typeof (tracks.next_href) !== 'undefined' && (tracks.next_href) != null) {
                _.push($.encode((typeof (tracks.next_href) === 'function' ? (tracks.next_href)
                    .call($item) : (tracks.next_href))));
            }
            _.push('"><canvas class="throbber">Loading…</canvas></li></ul>');
        }
        return _;
    }
    $.template["search/search-users"] = function anonymous(jQuery, $item) {
        var $ = jQuery,
            call, _ = [],
            $data = $item.data;
        with($data) {
            _.push('<div class="page-inner-header sub-content sub-content-');
            if (typeof (users_count) !== 'undefined' && (users_count) != null) {
                _.push($.encode((typeof (users_count) === 'function' ? (users_count)
                    .call($item) : (users_count))));
            }
            _.push('">Sorry, we couldn\'t find any people matching <strong>“');
            if (typeof (keywords) !== 'undefined' && (keywords) != null) {
                _.push($.encode((typeof (keywords) === 'function' ? (keywords)
                    .call($item) : (keywords))));
            }
            _.push('”.</strong></div><ul class="list-items users">');
            if (typeof (users) !== 'undefined' && (users) != null) {
                $.each((typeof (users) === 'function' ? (users)
                    .call($item) : (users)), function (index, user) {
                    with(this) {
                        _.push('');
                        if (typeof ("useritem") !== 'undefined' && ("useritem") != null) {
                            _ = _.concat($item.nest("useritem", user));
                        }
                        _.push('');
                    }
                });
            }
            _.push('<li class="more" data-sc-href="');
            if (typeof (users.next_href) !== 'undefined' && (users.next_href) != null) {
                _.push($.encode((typeof (users.next_href) === 'function' ? (users.next_href)
                    .call($item) : (users.next_href))));
            }
            _.push('"><canvas class="throbber">Loading…</canvas></li></ul>');
        }
        return _;
    }
    $.template["search/search-view"] = function anonymous(jQuery, $item) {
        var $ = jQuery,
            call, _ = [],
            $data = $item.data;
        with($data) {
            _.push('<form class="search" method="get" action="/tracks/search"><span class="search-input-wrap drop-shadow"><span><input type="search" class="search-input" name="q" id="q" autocomplete="off" autocorrect="off"></span></span><span class="search-submit-wrap"><button type="submit">Search</button></span><a class="close">Close</a><div class="suggestions"></div></form>');
        }
        return _;
    }
    $.template["settings/settings"] = function anonymous(jQuery, $item) {
        var $ = jQuery,
            call, _ = [],
            $data = $item.data;
        with($data) {
            _.push('<div class="settings"><div class="fb-container page-inner-header"></div><div class="page-content text-content"><form action="/me" method="POST" accept-charset="utf-8" novalidate class="clearfix"><h3>Your account settings</h3><br><div class="block"><label for="username">Your username</label><input type="text" name="user[username]" id="username" value="');
            if (typeof (username) !== 'undefined' && (username) != null) {
                _.push($.encode((typeof (username) === 'function' ? (username)
                    .call($item) : (username))));
            }
            _.push('"></div><div class="block"><label for="city">Where do you live?</label><input type="text" name="user[city]" id="city" value="');
            if (typeof (city) !== 'undefined' && (city) != null) {
                _.push($.encode((typeof (city) === 'function' ? (city)
                    .call($item) : (city))));
            }
            _.push('"></div><div class="block"><label for="description">More about you?</label><textarea name="user[description]" id="description" rows="3">');
            if (typeof (description) !== 'undefined' && (description) != null) {
                _.push($.encode((typeof (description) === 'function' ? (description)
                    .call($item) : (description))));
            }
            _.push('</textarea></div><div class="block buttons"><a href="/" class="cancel">Cancel</a><input type="submit" value="Save" class="icon-button"></div></form></div></div>');
        }
        return _;
    }
    $.template["share/share"] = function anonymous(jQuery, $item) {
        var $ = jQuery,
            call, _ = [],
            $data = $item.data;
        with($data) {
            _.push('<div class="share"><button class="button icon"><span>Share</span></button><div class="share-links"><div><a data-action="facebook" data-permalink="');
            if (typeof (permalink_url) !== 'undefined' && (permalink_url) != null) {
                _.push($.encode((typeof (permalink_url) === 'function' ? (permalink_url)
                    .call($item) : (permalink_url))));
            }
            _.push('" href="https://m.facebook.com/dialog/feed?display=touch&amp;app_id=19507961798&amp;link=');
            if (typeof (share_url_facebook) !== 'undefined' && (share_url_facebook) != null) {
                _.push($.encode((typeof (share_url_facebook) === 'function' ? (share_url_facebook)
                    .call($item) : (share_url_facebook))));
            }
            _.push('&amp;redirect_uri=');
            if (typeof (permalink_url) !== 'undefined' && (permalink_url) != null) {
                _.push($.encode((typeof (permalink_url) === 'function' ? (permalink_url)
                    .call($item) : (permalink_url))));
            }
            _.push('" class="facebook button icon" target="sc-new"><span>Facebook</span></a><a data-action="twitter" data-permalink="');
            if (typeof (permalink_url) !== 'undefined' && (permalink_url) != null) {
                _.push($.encode((typeof (permalink_url) === 'function' ? (permalink_url)
                    .call($item) : (permalink_url))));
            }
            _.push('" href="http://twitter.com/share?text=');
            if (typeof (share) !== 'undefined' && (share) != null) {
                _.push($.encode((typeof (share) === 'function' ? (share)
                    .call($item) : (share))));
            }
            _.push(' via %23soundcloud&amp;url=');
            if (typeof (share_url_twitter) !== 'undefined' && (share_url_twitter) != null) {
                _.push($.encode((typeof (share_url_twitter) === 'function' ? (share_url_twitter)
                    .call($item) : (share_url_twitter))));
            }
            _.push('" class="twitter button icon" target="sc-new"><span>Twitter</span></a><a data-action="tubmlr" data-permalink="');
            if (typeof (permalink_url) !== 'undefined' && (permalink_url) != null) {
                _.push($.encode((typeof (permalink_url) === 'function' ? (permalink_url)
                    .call($item) : (permalink_url))));
            }
            _.push('" href="http://www.tumblr.com/share/audio?externally_hosted_url=');
            if (typeof (share_url_tumblr) !== 'undefined' && (share_url_tumblr) != null) {
                _.push($.encode((typeof (share_url_tumblr) === 'function' ? (share_url_tumblr)
                    .call($item) : (share_url_tumblr))));
            }
            _.push('" class="tumblr button icon" target="sc-new"><span>Tumblr</span></a></div><a href="#" class="show-more">Show more</a><div><a data-action="email" data-permalink="');
            if (typeof (permalink_url) !== 'undefined' && (permalink_url) != null) {
                _.push($.encode((typeof (permalink_url) === 'function' ? (permalink_url)
                    .call($item) : (permalink_url))));
            }
            _.push('" href="mailto:?subject=');
            if (typeof (share) !== 'undefined' && (share) != null) {
                _.push($.encode((typeof (share) === 'function' ? (share)
                    .call($item) : (share))));
            }
            _.push(' - SoundCloud&amp;body=');
            if (typeof (share_url_email) !== 'undefined' && (share_url_email) != null) {
                _.push($.encode((typeof (share_url_email) === 'function' ? (share_url_email)
                    .call($item) : (share_url_email))));
            }
            _.push('" class="email button icon" target="sc-new"><span>Email</span></a><a data-action="reddit" data-permalink="');
            if (typeof (permalink_url) !== 'undefined' && (permalink_url) != null) {
                _.push($.encode((typeof (permalink_url) === 'function' ? (permalink_url)
                    .call($item) : (permalink_url))));
            }
            _.push('" href="http://www.reddit.com/submit?url=');
            if (typeof (share_url_reddit) !== 'undefined' && (share_url_reddit) != null) {
                _.push($.encode((typeof (share_url_reddit) === 'function' ? (share_url_reddit)
                    .call($item) : (share_url_reddit))));
            }
            _.push('&amp;title=');
            if (typeof (share) !== 'undefined' && (share) != null) {
                _.push($.encode((typeof (share) === 'function' ? (share)
                    .call($item) : (share))));
            }
            _.push('" class="reddit button icon" target="sc-new"><span>reddit</span></a><a data-action="buzz" data-permalink="');
            if (typeof (permalink_url) !== 'undefined' && (permalink_url) != null) {
                _.push($.encode((typeof (permalink_url) === 'function' ? (permalink_url)
                    .call($item) : (permalink_url))));
            }
            _.push('" href="http://www.google.com/buzz/post?url=');
            if (typeof (share_url_buzz) !== 'undefined' && (share_url_buzz) != null) {
                _.push($.encode((typeof (share_url_buzz) === 'function' ? (share_url_buzz)
                    .call($item) : (share_url_buzz))));
            }
            _.push('" class="buzz button icon" target="sc-new"><span>buzz</span></a></div><div><a data-action="blogger" data-permalink="');
            if (typeof (permalink_url) !== 'undefined' && (permalink_url) != null) {
                _.push($.encode((typeof (permalink_url) === 'function' ? (permalink_url)
                    .call($item) : (permalink_url))));
            }
            _.push('" href="http://www.blogger.com/blog_this.pyra?t=&amp;u=');
            if (typeof (share_url_blogger) !== 'undefined' && (share_url_blogger) != null) {
                _.push($.encode((typeof (share_url_blogger) === 'function' ? (share_url_blogger)
                    .call($item) : (share_url_blogger))));
            }
            _.push('&amp;n=');
            if (typeof (share) !== 'undefined' && (share) != null) {
                _.push($.encode((typeof (share) === 'function' ? (share)
                    .call($item) : (share))));
            }
            _.push('" class="blogger button icon" target="sc-new"><span>blogger</span></a><a data-action="stumbleupon" data-permalink="');
            if (typeof (permalink_url) !== 'undefined' && (permalink_url) != null) {
                _.push($.encode((typeof (permalink_url) === 'function' ? (permalink_url)
                    .call($item) : (permalink_url))));
            }
            _.push('" href="http://www.stumbleupon.com/submit?url=');
            if (typeof (share_url_stumbleupon) !== 'undefined' && (share_url_stumbleupon) != null) {
                _.push($.encode((typeof (share_url_stumbleupon) === 'function' ? (share_url_stumbleupon)
                    .call($item) : (share_url_stumbleupon))));
            }
            _.push('&amp;title=');
            if (typeof (share) !== 'undefined' && (share) != null) {
                _.push($.encode((typeof (share) === 'function' ? (share)
                    .call($item) : (share))));
            }
            _.push('" class="stumbleupon button icon" target="sc-new"><span>StumbleUpon</span></a></div></div></div>');
        }
        return _;
    }
    $.template["share/sharing-widgets"] = function anonymous(jQuery, $item) {
        var $ = jQuery,
            call, _ = [],
            $data = $item.data;
        with($data) {
            _.push('<div class="sharing-widgets"><div class="inner"><div class="col"><div class="facebook"><span class="hack-0"></span><iframe allowtransparency="true" class="facebook-share-button" frameborder="0" scrolling="no" src="http://www.facebook.com/plugins/like.php?href=');
            if (typeof (permalink_url) !== 'undefined' && (permalink_url) != null) {
                _.push($.encode((typeof (permalink_url) === 'function' ? (permalink_url)
                    .call($item) : (permalink_url))));
            }
            _.push('&amp;send=false&amp;layout=button_count&amp;show_faces=false&amp;action=like&amp;colorscheme=light&amp;font&amp;height=21&amp;locale=en_US"></iframe></div></div><div class="col"><a class="twitter-share-button" data-count="horizontal" data-text="');
            if (typeof (title) !== 'undefined' && (title) != null) {
                _.push($.encode((typeof (title) === 'function' ? (title)
                    .call($item) : (title))));
            }
            _.push(' by ');
            if (typeof (user.username) !== 'undefined' && (user.username) != null) {
                _.push($.encode((typeof (user.username) === 'function' ? (user.username)
                    .call($item) : (user.username))));
            }
            _.push(' via #soundcloud" data-url="');
            if (typeof (permalink_url) !== 'undefined' && (permalink_url) != null) {
                _.push($.encode((typeof (permalink_url) === 'function' ? (permalink_url)
                    .call($item) : (permalink_url))));
            }
            _.push('" href="http://twitter.com/share">Tweet</a><script src="http://platform.twitter.com/widgets.js" type="text/javascript"></script></div><div class="col"><g:plusone size="medium" url="');
            if (typeof (permalink_url) !== 'undefined' && (permalink_url) != null) {
                _.push($.encode((typeof (permalink_url) === 'function' ? (permalink_url)
                    .call($item) : (permalink_url))));
            }
            _.push('"></g:plusone><script type="text/javascript">(function() {var po = document.createElement(\'script\'); po.async = true;po.src = \'https://apis.google.com/js/plusone.js\';var s = document.getElementsByTagName(\'script\')[0]; s.parentNode.insertBefore(po, s);})();</script></div></div></div>');
        }
        return _;
    }
    $.template["signup/details"] = function anonymous(jQuery, $item) {
        var $ = jQuery,
            call, _ = [],
            $data = $item.data;
        with($data) {
            _.push('<div class="settings"><div class="fb-container page-inner-header"></div><div class="page-content text-content"><form action="/me" method="POST" accept-charset="utf-8" novalidate class="clearfix"><div class="block"><label for="username">Your username</label><input type="text" name="user[username]" id="username" value="');
            if (typeof (username) !== 'undefined' && (username) != null) {
                _.push($.encode((typeof (username) === 'function' ? (username)
                    .call($item) : (username))));
            }
            _.push('"></div><div class="block"><label for="city">Where do you live?</label><input type="text" name="user[city]" id="city" value="');
            if (typeof (city) !== 'undefined' && (city) != null) {
                _.push($.encode((typeof (city) === 'function' ? (city)
                    .call($item) : (city))));
            }
            _.push('"></div><div class="block"><label for="description">More about you?</label><textarea name="user[description]" id="description" rows="3">');
            if (typeof (description) !== 'undefined' && (description) != null) {
                _.push($.encode((typeof (description) === 'function' ? (description)
                    .call($item) : (description))));
            }
            _.push('</textarea></div><div class="block buttons"><a href="/" class="cancel">Thanks, later</a><input type="submit" value="Save" class="icon-button"></div></form></div></div>');
        }
        return _;
    }
    $.template["signup/signup-logout"] = function anonymous(jQuery, $item) {
        var $ = jQuery,
            call, _ = [],
            $data = $item.data;
        with($data) {
            _.push('<div class="signup"><ul class="page-tabs page-tabs-2"><li data-sc-tab="login"><a href="/login">Log In</a></li><li data-sc-tab="signup" class="active"><a href="/signup">Sign Up</a></li></ul><div class="page-content text-content text-readability"><p>You are logged in as <strong>');
            if (typeof (username) !== 'undefined' && (username) != null) {
                _.push($.encode((typeof (username) === 'function' ? (username)
                    .call($item) : (username))));
            }
            _.push('.</strong></p><p class="logout"><a href="/logout?return_to=/signup"><strong>Click here</a></strong> to sign up as a different user.</p></div></div>');
        }
        return _;
    }
    $.template["signup/signup"] = function anonymous(jQuery, $item) {
        var $ = jQuery,
            call, _ = [],
            $data = $item.data;
        with($data) {
            _.push('<div class="signup"><ul class="page-tabs page-tabs-2"><li data-sc-tab="login"><a href="/login">Log In</a></li><li data-sc-tab="signup" class="active"><a href="/signup">Sign Up</a></li></ul><div class="fb-container page-inner-header"></div></div>');
        }
        return _;
    }
    $.template["static/about"] = function anonymous(jQuery, $item) {
        var $ = jQuery,
            call, _ = [],
            $data = $item.data;
        with($data) {
            _.push('<div class="page-content text-content static-content" id="about"><h1>Who We Are</h1><div class="context-item"><p>SoundCloud is an audio platform that enables anyone to upload, record, promote and share their originally-created sounds across the internet, in a simple, accessible and feature-rich way. From sample to symphony and soundbite to soliloquy, SoundCloud allows sound creators anywhere to instantly record audio on the site or via mobile applications and share them publicly or privately; to embed sound across websites, social networks and blogs and receive feedback from the community.</p></div><div class="context-item"><h2>Get in touch</h2><ul class="bullet"><li>Support &amp; Help: <a href="http://soundcloud.com/pages/support">click here</a></li><li>Sales &amp; Billing questions: <a href="mailto:sales@soundcloud.com">sales@soundcloud.com</a></li><li>Are you RESTful or what? <a href="mailto:api@soundcloud.com">api@soundcloud.com</a></li><li>General enquiries (for support requests, see above): <a href="mailto:contact@soundcloud.com">contact@soundcloud.com</a></li><li>Wanna work with us? Check our <a href="http://soundcloud.com/pages/jobs">current openings</a></li></ul></div><div class="context-item"><h2>Elsewhere on the web</h2><ul class="bullet"><li><a href="http://blog.soundcloud.com/">The blog</a></li><li><a href="http://twitter.com/soundcloud">Twitter</a></li><li><a href="http://soundcloud.tumblr.com">Tumblr</a></li><li><a href="http://www.facebook.com/soundcloud">Facebook</a></li><li><a href="http://status.soundcloud.com">SoundCloud Status</a></li><li><a href="http://www.last.fm/user/SoundCloud_com">Last.fm</a></li><li><a href="http://myspace.com/soundcloudcom">MySpace</a></li></ul></div></div>');
        }
        return _;
    }
    $.template["static/access-denied"] = function anonymous(jQuery, $item) {
        var $ = jQuery,
            call, _ = [],
            $data = $item.data;
        with($data) {
            _.push('<div class="page-content text-content"><h1>Sorry, we don\'t have the permission to access your Facebook account.</h1><p><a href="/login">Go back to login.</a></p></div>');
        }
        return _;
    }
    $.template["static/imprint"] = function anonymous(jQuery, $item) {
        var $ = jQuery,
            call, _ = [],
            $data = $item.data;
        with($data) {
            _.push('<div class="page-content text-content static-content" id="imprint"><h1>Imprint</h1><h2>Contact Information</h2><p class="address">SoundCloud Limited<br>Rosenthaler Straße 13<br>10119 Berlin<br>Phone: +49 30 577 098 860<br>E-Mail: <a href="mailto:contact@soundcloud.com">contact@soundcloud.com </a><br>Web: <a href="http://soundcloud.com">soundcloud.com</a></p><h2>Additional Information</h2><p class="impressum"><strong>Vertretungsberechtigte Geschäftsführer/Managing Directors:</strong><br>Alexander Ljung</p><p><strong>Sitz der Gesellschaft/Registered Office: London, GB</strong><br>Registergericht/Court of Registration: Companies House, Cardiff, GB<br>Registernummer/Registration Number: 6343600</p><p><strong>Zweigniederlassung Deutschland/Branch Office Germany:</strong><br>Registergericht/Court of Registration: Amtsgericht Charlottenburg<br>Registernummer/Registration Number: HRB 110657B<br>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz/VAT ID Number Germany: DE258657906</p><p><strong>Haftungshinweis:</strong>Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich</p><p><strong>Disclaimer:</strong>This Website may contain links to external websites. SoundCloud is not responsible for the content presented by external websites, which you use at your own risk. The providers of these external websites are solely responsible for the content presented by these websites.</p><p><strong>For any content related matters, please refer to our Terms of Use and the contact information stated <a href="/terms-of-use">here</a>. Please refer to <a href="mailto:copyrights@soundcloud.com">copyrights@soundcloud.com</a> for reporting an infringement of copyright.</strong></p></div>');
        }
        return _;
    }
    $.template["static/mobile"] = function anonymous(jQuery, $item) {
        var $ = jQuery,
            call, _ = [],
            $data = $item.data;
        with($data) {
            _.push('<div class="page-content text-content mobile-page"><h1>Go Mobile with SoundCloud</h1><h2>Download the official apps for free!</h2><img class="hero-image" src="/assets/images/teasers/mobile-apps@2x.png" width="300" height="150"><p><a class="button-sc button-orange tracker-android" href="https://market.android.com/details?id=com.soundcloud.android">Get the Android App</a><a class="button-sc button-orange tracker-ios" href="http://itunes.apple.com/us/app/soundcloud/id336353151">Get the iPad + iPhone App</a></p><h3>Listen to the latest sounds. Capture your own.<br>Share your sounds wherever you are.</h3><h3><em>Now includes iPad!</em> Discover a new way to experience SoundCloud. <a href="http://vimeo.com/31084756">Watch the video</a>.</h3><hr><div class="video"><iframe src="http://player.vimeo.com/video/31084756?title=0&amp;byline=0&amp;portrait=0&amp;color=ff9933" width="294" height="165" frameborder="0" webkitAllowFullScreen allowFullScreen></iframe></div><hr><div class="share"><iframe allowtransparency="true" class="facebook-share-button" frameborder="0" scrolling="no" src="http://www.facebook.com/plugins/like.php?href=http://soundcloud.com/mobile&amp;send=false&amp;layout=button_count&amp;show_faces=false&amp;action=like&amp;colorscheme=light&amp;font&amp;height=21&amp;locale=en_US"></iframe><a class="twitter-share-button" data-count="horizontal" data-text="Introducing the SoundCloud iPad app - a new way to experience SoundCloud. Download for free!:" data-url="http://soundcloud.com/mobile" href="http://twitter.com/share">Tweet</a><script src="http://platform.twitter.com/widgets.js" type="text/javascript"></script><g:plusone size="medium" url="http://soundcloud.com/mobile"></g:plusone><script type="text/javascript">(function() {var po = document.createElement(\'script\'); po.async = true;po.src = \'https://apis.google.com/js/plusone.js\';var s = document.getElementsByTagName(\'script\')[0]; s.parentNode.insertBefore(po, s);})();</script></div></div>');
        }
        return _;
    }
    $.template["static/not-found"] = function anonymous(jQuery, $item) {
        var $ = jQuery,
            call, _ = [],
            $data = $item.data;
        with($data) {
            _.push('<div class="page-content text-content error-content"><div class="error-notfound"><h1>Oops, looks like<br> we can\'t find that page!</h1><div class="content-item"><ul class="bullet"><li>Did you try to access a private track, but were not logged in? <a href="/login">LogIn</a> or <a href="/signup">Sign Up</a></li><li>Or just <a href="/tracks/search">use the search</a> to find what you were looking for</li></ul></div></div></div>');
        }
        return _;
    }
    $.template["static/privacy-es"] = function anonymous(jQuery, $item) {
        var $ = jQuery,
            call, _ = [],
            $data = $item.data;
        with($data) {
            _.push('<div class="page-content text-content static-content"><h1>Política de Privacidad de SoundCloud</h1><div class="content-item"><p>Bienvenido a SoundCloud®, un servicio prestado por SoundCloud Limited (<strong>“SoundCloud”</strong>, <strong>“nosotros”</strong>, <strong>“nuestro”</strong> o <strong>“nos”</strong>).Su privacidad es importante para nosotros.En esta Política de Privacidad se explica cómo recogemos, almacenamos, utilizamos y revelamos sus datos personales cuando usted utiliza SoundCloud.com (el <strong>“Sitio Web”</strong>) y los sitios, reproductores, widgets, herramientas, apps, datos, software, interfaces de programación de aplicaciones (API) y otros servicios prestados por SoundCloud (los <strong>“Servicios”</strong>).En la Política de Privacidad se explican, entre otros, los siguientes aspectos:</p><ul class="bullet"><li><a href="#principles">Nuestros principios con respecto a sus datos y su privacidad</a></li><li><a href="#collection">La información que recogemos sobre usted</a></li><li><a href="#information">Cómo utilizamos su información personal</a></li><li><a href="#sharing">Cómo compartimos su información personal</a></li><li><a href="#cookies">Cómo utilizamos cookies y otras tecnologías similaresy</a></li><li><a href="#choices">Sus opciones en relación con su información personal</a></li><li><a href="#contact">Cómo ponerse en contacto con nosotros en relación con cuestiones de privacidad</a></li></ul><p>Al utilizar el Sitio Web o cualquiera de los Servicios, y en particular al registrar una cuenta SoundCloud®, usted autoriza el uso de su información personal con arreglo a lo establecido en esta Política de Privacidad.Por favor, léala y asegúrese de que está conforme con nuestro uso y revelación de su información personal. <strong>Si no está de acuerdo con alguna de las estipulaciones de esta Política de Privacidad, no debe utilizar el Sitio Web ni los Servicios.</strong>Si tiene alguna pregunta u otra cuestión, puede ponerse en contacto con nosotros en privacy@soundcloud.com.Tenga en cuenta que esta Política de Privacidad sólo es de aplicación al Sitio Web y a los Servicios (colectivamente, la <strong>“Plataforma”</strong>).Al utilizar la Plataforma, puede encontrar vínculos a otros sitios web y servicios o herramientas que le permitan compartir información con otros sitios web y servicios.SoundCloud no es responsable de las prácticas en materia de privacidad de estos otros sitios web y servicios, por lo que le recomendamos que compruebe siempre sus políticas de privacidad antes de vincular su cuenta SoundCloud o compartir información personal.</p></div><div class="content-item"><h2 id="principles">Nuestros principios</h2><p>Tenemos un planteamiento bastante sencillo respecto a la protección de datos y la privacidad, que puede resumirse del siguiente modo:</p><h3>Somos partidarios de la plena transparencia</h3><p>Esta Política de Privacidad está diseñada para ofrecerle plena transparencia sobre nuestras políticas de protección de datos.Si tiene alguna duda respecto a la Política de Privacidad, no dude en comunicárnoslo por correo electrónico a <a href="mailto:privacy@soundcloud.com">privacy@soundcloud.com</a>.</p><h3>Usted debe tener pleno control sobre sus datos</h3><p>Hemos diseñado el Sitio Web para ofrecerle el control sobre la información que publique y comparta en SoundCloud® u otros sitios y servicios a los que conecte su cuenta SoundCloud®.Aproveche todas las posibilidades de estas herramientas y asegúrese de compartir únicamente lo que desee.</p></div><div class="content-item"><h2 id="collection">Información que recogemos sobre usted</h2><p>Recogemos información personal sobre usted de varias fuentes:</p><h3>Información suministrada por usted</h3><p>No necesita proporcionarnos ninguna información personal para visitar el Sitio Web.No obstante, algunos Servicios sí requieren que se registre en una cuenta SoundCloud®, y al hacerlo nos proporcionará cierta información personal:</p><ul class="bullet"><li>Información básica:Para registrar cualquier clase de cuenta SoundCloud®, tendrá que proporcionar su dirección de correo electrónico y elegir una clave.Si registra una cuenta premium, tendrá que proporcionar también su auténtico nombre, dirección y datos de verificación de pagos.</li><li>Información sobre el perfil:Usted podrá proporcionar, si lo desea, información adicional para su perfil público en SoundCloud®; por ejemplo:<ul><li>su nombre real</li><li>un nombre de usuario (que puede ser su nombre real o un pseudónimo)</li><li>la ciudad y el país donde vive</li><li>una fotografía o avatar del perfil</li><li>información sobre cómo se cataloga a sí mismo con respecto a sus contenidos (por ejemplo, si es un músico, un sello discográfico u otra categoría de creador)</li><li>datos de sus otros sitios web y perfiles de medios sociales, incluidos los vínculos a los mismos</li></ul>Esta información no es obligatoria y podrá eliminarla, editarla o modificarla siempre en cualquier momento.Puede obtener más información al respecto en el apartado <a href="#choices">Opciones y control</a></li><li>Información de su correspondencia:nos proporcionará cierta información personal si se pone en contacto con nosotros por correo electrónico, utiliza alguno de nuestros formularios web del Sitio Web o se pone en contacto por correo postal, fax u otro medio no en línea.</li><li>Información de encuestas:si participa en una encuesta, nos proporcionará cierta información personal en sus respuestas, a menos que lo haga de forma anónima.</li><li>Información que coloque en el Sitio Web:puede proporcionar información personal al cargar sonidos a la Plataforma, colocar comentarios en el Sitio Web o participar en debates de la comunidad.</li></ul><br /><h3>Información que recogemos automáticamente</h3><p>Recogemos automáticamente cierta información cuando usted utiliza la Plataforma o los servicios de análisis web descritos más adelante en el apartado Cookies y <a href="#cookies">otras tecnologías similares</a>.Esta información incluye:</p><ul class="bullet"><li>la dirección de protocolo de Internet (IP) del dispositivo desde el que accede a la Plataforma (esto puede utilizarse en ocasiones para averiguar el país o la ciudad desde la que accede)</li><li>el sitio visitado inmediatamente antes de visitar el Sitio Web</li><li>las acciones concretas que realice en la Plataforma, incluidas las páginas que visite, la descarga o streaming de sonidos, la carga o grabación de sonidos, la conexión a su cuenta de Facebook, el compartir una pieza con otros usuarios, el seguimiento o no seguimiento de otros usuarios, la incorporación o el abandono de un grupo, la colocación de un comentario o la realización de una búsqueda </li><li>los términos de búsqueda que introduzca en el Sitio Web</li><li>el momento, la frecuencia y la duración de sus visitas a la Plataforma</li><li>su tipo de navegador y sistema operativo</li><li>la naturaleza del dispositivo desde el que accede a la Plataforma, como, por ejemplo, si accede desde un ordenador personal o un dispositivo móvil</li><li>la información recogida a través de <a href="#cookies">cookies y otras tecnologías similares</a>, como se explica más adelante</li><li>información sobre su interacción con mensajes de correo electrónico, como, por ejemplo, si abre, pulsa o reenvía el mensaje</li></ul><br /><h3>Información de otras fuentes</h3><p>SoundCloud le permite apuntarse y entrar usando su cuenta de Facebook.Si se apunta a través de Facebook, Facebook le pedirá su autorización para compartir con SoundCloud cierta información de su cuenta de Facebook.Esta información incluye su nombre y apellidos, sexo, ubicación general, un vínculo a su perfil de Facebook, su zona horaria, la imagen de su perfil y su lista de amigos.</p><p>Facebook recoge y nos proporciona esta información con arreglo a su propia <a href="http://www.facebook.com/policy.php">política de privacidad</a>. Usted puede controlar la información que recibimos de Facebook mediante los ajustes de privacidad de su cuenta de Facebook.</p><p>Si se apunta a SoundCloud® a través de Facebook, su cuenta de SoundCloud® se conectará automáticamente a su cuenta de Facebook y la información sobre su actividad en SoundCloud®, en particular los sonidos que escuche, se compartirán con Facebook y se publicarán en los newsfeeds de sus amigos de Facebook.Si no desea compartir su actividad de SoundCloud® con sus amigos de Facebook, puede controlarlo en la página de “Ajustes”; puede obtener más información en el apartado <a href="#choices">Opciones y control</a>.</p></div><div class="content-item"><h2 id="information">Cómo utilizamos su información personal</h2><p>Utilizamos la información sobre usted que recogemos para los siguientes fines:</p><ul class="bullet"><li>Empleamos su dirección de correo electrónico y su clave para identificarle cuando entra en la Plataforma.</li><li>Cualquier otra información que nos proporcione en el marco de su perfil público, como su nombre real y los vínculos a su sitio web y otros perfiles de medios sociales (pero no su dirección de correo electrónico), se publicará en la página de su perfil.Esta información será de acceso público y podrá ser contemplada por cualquiera que acceda al Sitio Web o utilice nuestra API.Tenga esto en cuenta al decidir si proporciona información adicional sobre usted.</li><li>Si suscribe una cuenta premium, se utilizarán su nombre y sus datos de verificación de pagos para tramitar su suscripción a la cuenta y cobrar el pago.Todos los datos de verificación de pagos se transmiten empleando encriptación de capa de conexión segura (SSL, Secure Socket Layer) estándar en el sector.SoundCloud cumple también las Normas de Seguridad de la Industria de Tarjetas de Pago.</li><li>Utilizaremos su dirección de correo electrónico para enviarle actualizaciones del servicio y notificaciones sobre su cuenta (se ha optado por recibirlas empleando sus preferencias de cuenta), circulares informativas, mensajes de marketing y notificaciones de correo electrónico.Puede obtener información sobre el modo de cambiar sus preferencias y cancelar la suscripción a las circulares, los mensajes de marketing y las notificaciones de correo electrónico en el apartado <a href="#choices">Opciones y control</a> de este documento.</li><li>Si es usuario de Facebook y alguno de sus amigos de Facebook registra una cuenta de SoundCloud®, le sugeriremos al amigo en cuestión que usted puede ser alguien a quien puede desear seguir en SoundCloud.</li></ul><p>Utilizamos también su información personal para los siguientes fines:</p><ul class="bullet"><li>para operar y mantener su cuenta de SoundCloud® y proporcionarle acceso al Sitio Web y uso de los Servicios que solicite en cada momento;</li><li>para identificarle como creador de los sonidos que cargue, los comentarios que coloque y otras aportaciones que realice a la Plataforma;</li><li>para solicitar su participación en encuestas, realizarlas y analizar los resultados de, si decide participar;</li><li>para prestarle asistencia técnica;</li><li>para proporcionar a otros usuarios datos sobre las personas que realizan descargas o streaming de sus sonidos;</li><li>para analizar el uso de la Plataforma y las personas que visitan el Sitio Web y utilizan los Servicios, con el fin de mejorar SoundCloud®;</li><li>para responder a sus comentarios o consultas;</li><li>para personalizar su uso de la Plataforma o los contenidos de circulares por correo electrónico u otros materiales que podamos enviarle en cada momento;</li><li>para evitar actividades contrarias a nuestras <a href="/terms-of-use">Condiciones de Uso</a> y <a href="http://soundcloud.com/community-guidelines">Normas de la Comunidad</a> o a la ley aplicable y adoptar medidas frente a ellas;</li><li>para cualquier otro fin que le comuniquemos en el momento oportuno, siempre que usted autorice el uso propuesto de su información personal.</li></ul></div><div class="content-item"><h2 id="sharing">Cómo compartimos su información personal</h2><p><strong>Sólo compartiremos su información personal con terceros en los términos establecidos en esta Política de Privacidad.</strong>Necesitaremos compartir alguna información personal que recojamos sobre usted o que usted nos proporcione en los siguientes casos:</p><ul class="bullet underlined"><li><em>Otros usuarios:</em>toda la información personal de su perfil público (excepto su dirección de correo electrónico) será accesible para los usuarios de la Plataforma, quienes podrán ver la información de su perfil, escuchar y comentar sus sonidos públicos, incluirse en su lista de seguidores y enviarle mensajes.Si escucha sonidos cargados por un usuario premium, este hecho se compartirá con el usuario para que éste pueda realizar un seguimiento de la popularidad de sus sonidos.Del mismo modo, sus comentarios sobre sonidos de la Plataforma estarán a disposición de todos los usuarios de la misma.</li><li><em>Con su autorización:</em>revelaremos su información personal si usted nos lo autoriza expresamente.En particular, si decide conectar su cuenta de SoundCloud® a otras redes sociales o publicar su actividad en la Plataforma en otras redes como Facebook.Puede obtener más información sobre el modo de controlar la información que comparte en el apartado <a href="#choices">Opciones y control</a>.</li><li><em>Prestadores de servicios:</em>empleamos a terceros de prestigio, algunos de los cuales pueden estar situados fuera del Espacio Económico Europeo, para prestarnos ciertos servicios especializados en relación con la Plataforma.Estos terceros tendrán acceso a cierta información sobre usted únicamente cuando ello sea necesario para prestarnos sus servicios.Si les transferimos información personal, les exigimos que apliquen medidas de seguridad técnicas y de organización adecuadas para protegerla frente a su revelación no autorizada y que únicamente la traten con arreglo a nuestras instrucciones y en la medida necesaria para prestarnos sus servicios.</li><li><em>Usuarios de nuestra API:</em>SoundCloud tiene una interfaz de programación de aplicaciones (API) abierta que permite a los desarrolladores de aplicaciones integrar elementos de la Plataforma en interesantes nuevas apps.Algunos de estos desarrolladores pueden estar situados fuera del Espacio Económico Europeo.Toda la información que usted decida hacer pública en la Plataforma, incluida su información de perfil público y sus sonidos públicos, estarán al acceso de estos desarrolladores en la API.Puede obtener más información sobre el modo de limitar la información disponible en la API en el apartado <a href="#choices">Opciones y control</a></li><li><em>En forma de datos agregados:</em>podemos agregar sus datos personales con otros similares referentes a otros usuarios de la Plataforma para elaborar datos estadísticos sobre ésta y su uso, que podemos también facilitar a continuación a terceros o al público en general.Esta información no incluye la dirección de correo electrónico u otros datos de contacto ni nada que pueda utilizarse para identificarle individualmente a usted, ya sea en línea o en la vida real.</li><li><em>Por imperativo legal:</em>revelaremos su información personal si consideramos de buena fe que la ley lo permite o autoriza, como a requerimiento judicial o de otra clase;</li><li><em>Para proteger nuestros intereses:</em>podemos revelar su información personal si lo consideramos necesario para proteger o defender nuestros derechos e intereses legítimos o los de nuestros usuarios, empleados, consejeros o accionistas y para asegurar la seguridad de la Plataforma y la comunidad de SoundCloud®.</li><li><em>En el contexto de un traspaso de negocio:</em>podemos revelar su información personal a las personas o sociedades que adquieran la totalidad o la práctica totalidad de los activos o negocios de SoundCloud o en caso de fusión de nuestra empresa o de insolvencia.</li></ul></div><div class="content-item"><h2 id="cookies">Cookies y otras tecnologías similares</h2><p>Al igual que la mayoría de los sitios web, empleamos cookies para ayudarnos a mejorar el Sitio Web y los Servicios que prestamos.Los cookies son pequeños archivos de texto que instalan en su ordenador los sitios web que usted visita.Estos ficheros sólo pueden leerlos dichos sitios web y les permiten identificarle cuando vuelve a entrar en ellos.Los cookies pueden ser “permanentes” o “de sesión”.Los primeros permanecen en su ordenador cuando usted sale de la conexión, mientras los primeros se borran en cuanto usted cierra el navegador.<br>Además de nuestros propios cookies, las siguientes empresas de prestigio colocan también cookies desde nuestro Sitio Web y apps móviles:</p><h3>Google Analytics:</h3><p> Google Analytics es un servicio de análisis de web prestado por Google, Inc. (“Google”).Google Analytics utiliza cookies para ayudarnos a analizar cómo utilizan la Plataforma los usuarios, incluidos los reproductores de SoundCloud® integrados en sitios de terceros.La información generada por el cookie sobre su uso de la Plataforma (incluida su dirección IP truncada) se transmite a Google, quien la almacena en servidores de Estados Unidos.Google empleará esta información para evaluar el uso que usted y otros usuarios hagan de la Plataforma, elaborar informes para nosotros sobre la actividad en el sitio web y prestar otros servicios relacionados con la actividad de éste y el uso de Internet.Tenga en cuenta que Google sólo recibirá su dirección IP truncada.Esto es suficiente para que Google identifique (aproximadamente) el país desde el que usted visita el Sitio Web, pero no para identificarle individualmente a usted ni a su ordenador o dispositivo móvil.Puede obtener más información sobre Google Analytics <a href="http://www.google.com/intl/en/analytics/privacyoverview.html">aquí</a>, incluido un vínculo a la <a href="http://www.google.com/intl/en/privacy/privacy-policy.html">política de privacidad de Google</a>.</p><p>Puede obtener más información sobre el modo de solicitar que Google no recoja sus datos en el subapartado titulado "Cookies" del apartado <a href="#choices">Opciones y control</a>.</p><h3>Quantcast Measurement:</h3><p>Quantcast Measurement es un servicio de medición de audiencias prestado por Quantcast Corporation (“Quantcast”).Quantcast emplea cookies para ayudarnos a conocer mejor a nuestros usuarios y a mantener SoundCloud® y nuestros mensajes de marketing relacionados con su uso de la plataforma. La información generada por el cookie sobre su uso del Sitio Web (incluida su dirección IP) se transmite a Quantcast, quien la almacena en servidores de Estados Unidos.Quantcast empleará esta información, junto con la que recoja de otros sitios web que usted pueda visitar, para evaluar su comportamiento en el conjunto de la red y elaborar informes para nosotros sobre su actividad en el sitio web.Toda la información proporcionada por Quantcast es de carácter agregado, y Quantcast no nos proporciona ninguna información sobre su actividad en otros sitios web.Puede obtener más información sobre la recogida de datos por Quantcast <a href="http://www.quantcast.com/how-we-do-it">aquí</a>, incluido un vínculo a su <a href="http://www.quantcast.com/privacy">política de privacidad</a>.<p>Puede obtener más información sobre el modo de solicitar que Quantcast no recoja sus datos en el subapartado titulado "Cookies" del apartado <a href="#choices">Opciones y control</a>.</p><h3>ATInternet:</h3><p>ATInternet GmbH (“ATInternet”) presta un servicio de análisis de web para ayudarnos a analizar cómo utilizan los usuarios nuestras apps móviles.ATInternet emplea cookies para recoger información sobre el uso que usted realiza de nuestras apps móviles, y la información generada por ellos (incluida su dirección IP truncada) se transmite a ATInternet, quien la almacena en servidores de la Unión Europea.ATInternet emplea esta información para evaluar el uso que usted y otros usuarios hagan de nuestras apps móviles, elaborar informes para nosotros sobre la actividad en apps y prestar otros servicios relacionados con la actividad y el uso de apps.Tenga en cuenta que ATInternet sólo recibirá su dirección IP truncada.Esto es suficiente para que ATInternet identifique (aproximadamente) el país desde el que usted visita la Plataforma, pero no para identificarle individualmente a usted ni a su ordenador o dispositivo móvil.ATInternet tiene su sede en la Unión Europea y está sujeta a las normas europeas de protección de datos y de privacidad.Puede obtener más información sobre ATInternet <a href="http://www.atinternet.com/en/data_protection_policy/">aquí</a>, incluido un vínculo a <a href="http://www.atinternet.com/en/data_protection_policy/">política de privacidad</a>.Puede obtener más información sobre el modo de solicitar que ATInternet no recoja sus datos en el subapartado titulado "Cookies" del apartado <a href="#choices">Opciones y control</a>.</p><p>Además de los cookies, empleamos la siguiente tecnología estándar de Internet en relación con su uso de la Plataforma:</p><ul class="bullet underlined"><li><em>Clear GIFs:</em>Utilizamos “clear GIFs”, conocidos en ocasiones como “web bugs”, que son pequeños ficheros de imágenes que incluimos en nuestras circulares de noticias por correo electrónico.Estos elementos nos dicen si usted ha abierto la circular, ha pulsado alguno de los contenidos o la ha reenviado a otra persona.Esto nos proporciona información útil sobre la eficacia de nuestras circulares informativas por correo electrónico, que podemos utilizar para asegurarnos de enviar información de interés para nuestros usuarios.</li><li><em>Cookies flash:</em>Empleamos cookies flash para sincronizar la información entre varios reproductores de SoundCloud®.Esto asegura que se detenga un reproductor cuando se inicia otro.A diferencia de otros sitios web, <strong>no utilizamos cookies Flash para recoger datos personales ni para reponer los cookies que usted pueda haber eliminado.</strong></li><li><em>Almacenamiento local HTML5:</em>Empleamos almacenamiento local HTML5 para almacenar su volumen de escucha por defecto (es decir, el volumen al que prefiere escuchar los sonidos en SoundCloud®) y, en el caso de los usuarios premium, para establecer el color de control del widget.Si accede a la versión móvil del Sitio Web, utilizamos almacenamiento local HTML5 para almacenar ciertos datos de cookies, como su plan de usuario, sus datos de autenticación, su nombre de usuario y sus preferencias de presentación.<strong>No utilizamos almacenamiento local HTML5 para recoger datos personales ni hacer un seguimiento de sus actividades en nuestros sitios web.</strong></li></ul><p>Puede obtener más información sobre sus opciones en materia de cookies y tecnologías similares en el apartado <a href="#choices">Opciones y control</a>.</p></div><div class="content-item"><h2 id="choices">Opciones y control</h2><p>Hacemos todo lo posible para ofrecerle las mayores opciones posibles respecto a la cantidad de información personal que desea proporcionarnos y el control que desea tener sobre ella.</p><p>No es necesario que nos proporcione ninguna información para visitar el Sitio Web, aunque en caso de visitarla se recogerá automáticamente cierta información (como se ha explicado anteriormente).No obstante, si decide registrar una cuenta de SoundCloud®, podrá controlar su información personal de las siguientes formas.</p><h3>Preferencias de correo electrónico</h3><p>Comprueba la página de “Correo electrónico” (“Email”) en el apartado de “Ajustes” (“Settings”) del Sitio Web.Cuando entre en su cuenta, podrá acceder a Ajustes en la parte superior derecha de la pantalla, y una vez dentro de la página de Ajustes, encontrará el vínculo a la página de Correo electrónico en el lado inferior derecho.</p><p>Desde la página de Correo electrónico puede indicarnos:<ul class="bullet"><li>qué notificaciones de correo electrónico (en su caso) desea que le enviemos y con qué frecuencia y</li><li>otras direcciones de correo electrónico adicionales o alternativas que desee que empleemos para comunicarnos con usted.</li></ul></p><p>También puede cancelar las notificaciones de correo electrónico en la página de “Cuenta" (“Account”) dentro de sus Ajustes.Pulsando el vínculo de la página de Cuenta, deshabilitará inmediatamente todas las notificaciones por correo electrónico, excepto las notificaciones esenciales de la cuenta, como las actualizaciones importantes de servicio, los informes de vulneración de derechos de autor y otra información fundamental sobre su cuenta y su uso de la Plataforma.</p><p>También puede cancelar la suscripción a las circulares de noticias y las notificaciones por correo electrónico (excepto las notificaciones esenciales de la cuenta) en cualquier momento pulsando el vínculo que figura al final de todos los correos electrónicos.</p><h3>Compartir con otras redes</h3><p>La pestaña de “Conexiones” (“Connections”) dentro de sus Ajustes en el Sitio Web le permite controlar la información que comparte con otras redes y aplicaciones.Además de seleccionar a cuáles de sus redes sociales desea compartir, también puede controlar el acceso a otros servicios y aplicaciones a las que haya conectado su cuenta de SoundCloud®.</p><p>Si se apunta a SoundCloud® a través de su cuenta de Facebook, su cuenta de SoundCloud® y su cuenta de Facebook se conectarán automáticamente y la información sobre los sonidos que escuche en SoundCloud® se compartirá con Facebook y aparecerá en los newsfeeds de sus amigos de Facebook. <strong>Si no desea compartir esta información con Facebook, cambie sus Ajustes.</strong></p><p>Tenga en cuenta que esta Política de Privacidad no es de aplicación a los sitios y las aplicaciones de terceros, cuyas actividades no podemos controlar.Le recomendamos que lea las políticas de privacidad de estos sitios y aplicaciones antes de compartir información o conectar su cuenta de SoundCloud® con cualquiera de ellos.</p><h3>Compartir con otros usuarios</h3><p>SoundCloud® es un lugar muy social, pero si usted prefiere navegar por el Sitio Web y usar los Servicios de forma anónima, puede hacerlo marcando la casilla “Escucha anónima” (“Anonymous Listening”) de la pestaña “Cuenta“ dentro de “Ajustes” en el Sitio Web.Si marca esta casilla, los demás usuarios no podrán ver los sonidos que usted escuche, pero nosotros continuaremos teniendo acceso a esta información.</p><p>Si alguno de los sonidos contiene información personal suya, puede controlar quién tiene acceso a ellos empleando los ajustes de la página de sonido (pulse el icono “lápiz” (“pencil”) en el reproductor de forma de onda para marcar los sonidos correspondientes).Si ajusta sus sonidos como “privados”, en lugar de “públicos”, puede limitar quién accede a ellos.</p><h3>Compartir con desarrolladores de apps</h3><p>SoundCloud® tiene una API abierta que permite a terceros desarrolladores crear apps realmente interesantes como extensión de la Plataforma.Si prefiere que sus sonidos no se pongan a disposición de terceros desarrolladores de apps, puede deshabilitar el acceso a la API dentro de la página de sonido para todos los sonidos que cargue.Pulse el icono “lápiz” en el reproductor de forma de onda y cancele la casilla “Apps habilitadas” (“Apps enabled”) en la parte inferior de la página.</p><h3>Cookies</h3><p>Puede utilizar los ajustes de su navegador para controlar los cookies instalados en su ordenador.No obstante, tenga en cuenta que los cookies son importantes para muchos aspectos del Sitio Web y si su navegador los rechaza, usted no podrá disfrutar de todas las funciones de la Plataforma.Para obtener más información sobre los cookies, incluido el modo de ver cuáles se han instalado y cómo rechazarlos o eliminarlos, visite <a href="http://www.allaboutcookies.org">http://www.allaboutcookies.org</a>.</p><P>Para desactivar el seguimiento de Google Analytics en el Sitio Web y otros sitios web, visite <a href="http://tools.google.com/dlpage/gaoptout">http://tools.google.com/dlpage/gaoptout.</a></P><p>Para desactivar el seguimiento de Quantcast en el Sitio Web y otros sitios web, visite <a href="http://www.quantcast.com/opt-out">http://www.quantcast.com/opt-out</a>.</p><p>Para desactivar el seguimiento de ATInternet en nuestras apps móviles, visite <a href="http://en.atinternet.com/Company/Data-protection-policy.aspx">http://en.atinternet.com/Company/Data-protection-policy.aspx</a>.</p><p>Tenga en cuenta lo siguiente:hemos hecho todo lo posible para ofrecerle información clara y completa sobre nuestro uso de los cookies y otras tecnologías similares.Si decide usar el Sitio Web sin bloquear o deshabilitar estas tecnologías, estará autorizando nuestro uso, con arreglo a esta Política de Privacidad, de la información personal que recojamos utilizando estas tecnologías.</p><h3>Eliminar su cuenta</h3><p>Puede eliminar su cuenta desde la página “Cuenta” en sus Ajustes del Sitio Web.Tenga en consideración que si elimina su cuenta, todos los datos asociados a ella, incluidos los sonidos que haya cargado y los datos de uso de los mismos, se eliminarán y pueden no ser recuperablesPor este motivo, le recomendamos que haga una copia o respaldo de todos los contenidos cargados a su cuenta antes de eliminarla.</p><p>Tenga en cuenta que al eliminar alguna de nuestras aplicaciones no se eliminará su cuenta.Si desea eliminar su cuenta, tendrá que hacerlo desde la página de la Cuenta en el Sitio Web.Del mismo modo, si elimina una app de terceros conectada a su cuenta SoundCloud en nuestra API, ello no eliminará necesariamente todos los datos de dicha app.Para saber cómo eliminar sus datos de las apps de terceros tendrá que consultar las condiciones de uso y la política de privacidad de su proveedor.</p></div><div class="content-item"><h2>Acceso a sus datos</h2><p>Como ya se ha explicado, puede acceder a la mayor parte de la información personal que usted nos proporcione y modificarla en la página de“Ajustes” de su cuenta SoundCloud®.Si desea ejercer sus derechos de acceso, rectificación y oposición respecto a los datos personales que tengamos sobre usted o tiene alguna objeción a su tratamiento, póngase en contacto con nosotros en <a href="mailto:privacy@soundcloud.com">privacy@soundcloud.com</a> o en la dirección señalada más abajo.</p><p>Si solicita que eliminemos su cuenta (a través de la página de Ajustes o por correo electrónico), lo haremos en un plazo razonable, pero podemos tener que conservar alguna información personal suya para cumplir nuestras obligaciones legales o por otros motivos legítimos.</p></div><div class="content-item"><h2>Transferencia internacional de los datos</h2><p>SoundCloud tiene su sede en Europa y la información personal relativa a usted se recoge, almacena, utiliza y comparte con arreglo a las leyes europeas.No obstante, en distintos momentos puede ser necesario para nosotros transferir sus datos personales a Estados Unidos.Tenga en cuenta que las leyes de privacidad de Estados Unidos pueden no ser equivalentes a las de su país y que al utilizar la Plataforma usted autoriza la transferencia, el almacenamiento y el tratamiento de su información personal en Estados Unidos con arreglo a esta Política de Privacidad y a la ley aplicable.</p></div><div class="content-item"><h2>Niños</h2><p>SoundCloud® no está dirigido a los niños.Los menores de 14 años no están autorizados a utilizar la Plataforma y no deben tratar de registrar una cuenta ni enviarnos información personal.No recogemos a sabiendas ninguna información personal de niños de edad inferior a 14 años ni les permitimos registrar una cuenta.Si tenemos conocimiento de que hemos recogido datos personales de una persona de edad inferior a 14 años, la eliminaremos lo más rápidamente posible.Si tiene motivos para creer que podemos haber recogido estos datos, le rogamos que nos lo comunique inmediatamente a <a href="mailto:privacy@soundcloud.com">privacy@soundcloud.com</a>.</p></div><div class="content-item"><h2>Modificación y actualización de esta Política de Privacidad</h2><p>Si actualizamos ocasionalmente esta Política de Privacidad, modificaremos también la fecha de eficacia abajo indicada.Cualquier modificación de la Política de Privacidad estará siempre disponible aquí, de modo que los usuarios de SoundCloud® conozcan siempre qué información recogemos y cómo podemos utilizarla y compartirla.Asegúrese de comprobarla aquí de vez en cuando para mantenerse al tanto de los cambios.Los cambios sustanciales se comunicarán a los usuarios registrados por correo electrónico (a la dirección de correo electrónico vigente proporcionada en su cuenta) mediante notificación a su cuenta o colocación de un aviso en el Sitio Web. Si en un plazo de treinta (30) días los usuarios no aceptan su desacuerdo con las modificaciones efectuadas por los procedimientos establecidos en esta Política de Privacidad, entenderemos que los cambios han sido aceptados. </p></div><div class="content-item"><h2 id="contact">¿Alguna pregunta?</h2><p>Si tiene alguna duda sobre esta Política de Privacidad, desea proponer modificaciones o desea conocer qué información suya almacenamos, póngase en contacto con nosotros por correo electrónico a <a href="mailto:privacy@soundcloud.com">privacy@soundcloud.com</a> o por correo postal a:</p><p>SoundCloud Limited <br>Rosenthaler Str. 13<br>10119 Berlin <br>Germany <br>Attention: Legal Department <br></p></div><div class="content-item"><h2>¿No desea proporcionarnos información suya?</h2><p>Si decide que no desea que mantengamos su información personal de la forma expuesta en la Política de Privacidad, no utilice la Plataforma.Si ya ha registrado una cuenta, puede encontrar el modo de cerrarla o cancelarla aquí. <a href="/terms-of-use#termination">‘Extinción del Contrato y derecho de cancelación’</a>.</p></div><div class="content-item"><strong>Fecha de eficacia:</strong>1 May 2012</div></div></div>');
        }
        return _;
    }
    $.template["static/privacy"] = function anonymous(jQuery, $item) {
        var $ = jQuery,
            call, _ = [],
            $data = $item.data;
        with($data) {
            _.push('<div class="page-content text-content static-content"><h1>SoundCloud Privacy Policy</h1><div class="content-item"><p>Welcome to SoundCloud®, a service provided by SoundCloud Limited (“<strong>SoundCloud</strong>”, “<strong>we</strong>” “<strong>our</strong>”, “<strong>us</strong>”).<br />Your privacy is important to us.This Privacy Policy explains how we collect, store, use and disclose your personal information when you use SoundCloud.com (the “<strong>Website</strong>”), and all related players, widgets, tools, apps, data, software, APIs and other services provided by SoundCloud (the “<strong>Services</strong>”).<br />This Privacy Policy explains the following, amongst other things:</p><ul class="bullet"><li><a href="#principles">Our principles with respect to your data and your privacy</a></li><li><a href="#collection">The information we collect about you</a></li><li><a href="#information">How we use your personal information</a></li><li><a href="#sharing">How we share your personal information</a></li><li><a href="#cookies">How we use cookies and similar technology</a></li><li><a href="#choices">Your choices with respect to your personal information</a></li><li><a href="#contact">How to contact us regarding privacy issues</a></li></ul><p>By using the Website or any of the Services, and in particular by registering a SoundCloud® account, you are consenting to the use of your personal information in the manner set out in this Privacy Policy.Please take some time to read this Privacy Policy, and make sure you are happy with our use and disclosure of your personal information.<strong>If you do not agree to any of the provisions of this Privacy Policy, you should not use the Website or any of the Services</strong>.If you have any questions or concerns, you can contact us at <a href="mailto:privacy@soundcloud.com">privacy@soundcloud.com</a>.</p><p>Please note that this Privacy Policy only applies to the Website and the Services (together, the “<strong>Platform</strong>”).When using the Platform, you may find links to other websites to services, or tools that enable you to share information with other websites and services.SoundCloud is not responsible for the privacy practices of these other websites and services and we recommend that you review the privacy policies of each of these websites or services before linking your SoundCloud account or sharing any personal information.</p></div><div class="content-item"><h2 id="principles">Our Principles</h2><p>We have a pretty simple approach to data protection and privacy, which can be summarised as follows:</p><h3>We believe in full disclosure</h3><p>This Privacy Policy is designed to give you full transparency regarding our data protection practices.If there’s anything that’s not clear from this Privacy Policy, please feel free to email us at <a href="mailto:privacy@soundcloud.com">privacy@soundcloud.com</a>.</p><h3>You should have full control over your data</h3><p>We’ve designed the Website to give you control over the information you publish and share on SoundCloud® and other sites and services to which you connect your SoundCloud® account.Please take full advantage of these tools and make sure you only share what you want to share.</p></div><div class="content-item"><h2 id="collection">Information we collect about you</h2><p>We collect personal information about you from various sources:</p><h3>Information provided by you</h3><p>You don’t need to provide us with any personal information in order to visit the Website.However, certain Services do require that you register for a SoundCloud® account and, by doing so, you will provide us with certain personal information:</p><ul class="bullet"><li>Essential Information:When you register any kind of SoundCloud® account, you will need to provide your email address and choose a password.In addition, if you register a premium account, you will also need to provide your real name, address and payment verification information.</li><li>Profile Information:You may choose, at your discretion, to provide additional information for your public profile on SoundCloud® – for example:<ul><li>your real name</li><li>a user name (which may be your real name or a pseudonym)</li><li>the city and country in which you live</li><li>a profile picture or avatar</li><li>information about how you categorise yourself with respect to your content (for example, whether you are a musician, a label or some other category of creator)</li><li>details of your other websites and social media profiles, including links to those websites and profiles</li></ul>None of this profile information is mandatory, and any information you do provide may be deleted, edited, changed or amended by you at any time.For more information, see the <a href="#choices">Choice and Control</a> section below.</li><li>Information from Correspondence:You will provide certain personal information if you contact us by email, use any of the webforms on the Website, or contact us by mail, fax or other offline means.</li><li>Survey Information:If you participate in any survey, you will provide certain personal information as part of your response, unless you respond anonymously.</li><li>Information that you post on the Website:You may provide personal information when you upload sounds to the Platform, or when you post comments on the Website, or contribute to community discussions.</li></ul><br /><h3>Information we collect automatically</h3><p>There is certain information that we collect automatically as the result of your use of the Platform, or through the use of web analytics services as described in the<a href="#cookies">Cookies and Similar Technology</a> section below.This information includes:</p><ul class="bullet"><li>the Internet Protocol (IP) address of the device from which you access the Platform (this can sometimes be used to derive the country or city from which you are accessing the Platform)</li><li>the site that you visited immediately prior to visiting the Website</li><li>the specific actions that you take on the Website, including the pages that you visit, streaming or downloading sounds, uploading or recording sounds, connecting your Facebook account, sharing a track with another user, following or unfollowing another user, joining or leaving a group, posting a comment, or performing a search</li><li>any search terms that you may enter on the Website</li><li>the time, frequency and duration of your visits to the Website</li><li>your browser type and operating system</li><li>the nature of the device from which you are accessing the Platform, for example, whether you are accessing the Platform from a personal computer or from a mobile device</li><li>information collected through <a href="#cookies">cookies and similar technology</a>, as described below</li><li>information regarding your interaction with email messages, for example, whether you opened, clicked on, or forwarded the email message</li></ul><br /><h3>Information from Other Sources</h3><p>SoundCloud allows you to sign up and log in using your Facebook account.If you sign up using Facebook, Facebook will ask your permission to share certain information from your Facebook account with SoundCloud.This includes your first name, last name, gender, general location, a link to your Facebook profile, your timezone, birthday, profile picture and your list of friends.</p><p>This information is collected by Facebook and is provided to us under the terms of <a href="http://www.facebook.com/policy.php">Facebook’s privacy policy</a>. You can control the information that we receive from Facebook using the privacy settings in your Facebook account.</p><p>If you sign up to SoundCloud® using Facebook, your SoundCloud® account will be connected automatically to your Facebook account, and information regarding your activity on SoundCloud®, specifically the sounds that you listen to on SoundCloud®, will be shared with Facebook and will be published in your Facebook friends’ newsfeeds.If you do not wish to share your SoundCloud® activity with your Facebook friends, you can control this from the “Settings” page – for more information, see the <a href="#choices">Choice and Control</a> section below.</p></div><div class="content-item"><h2 id="information">How we use your personal information</h2><p>We use the information that we collect about you for the following purposes:</p><ul class="bullet"><li>our email address and password are used to identify you when you log into the Platform.</li><li>Any additional information that you provide as part of your public profile, such as your real name, and links to your website and other social media profiles (but not your email address), will be published on your profile page.This information will be publicly accessible and may be viewed by anyone accessing the Website, or using our API.Please bear this in mind when considering whether to provide any additional information about yourself.</li><li>If you subscribe to a premium account, your name, address and payment verification information will be used to process your account subscription and to collect your payment.All payment verification information is transmitted using industry-standard SSL (Secure Socket Layer) encryption.SoundCloud also complies with the Payment Card Industry Security Standards.</li><li>Your email address will be used to send you newsletters and email notifications if you have elected to receive them using your account preferences.For information about how to change your preference, and to unsubscribe from newsletters and email notifications, please see the <a href="#choices">Choice and Control</a> section, below.</li><li>If you are a Facebook user, and one of your Facebook friends registers a SoundCloud® account, we will suggest to your Facebook friend that you might be someone they may wish to follow on SoundCloud.</li></ul><p>Your personal information is also used for the following general purposes:</p><ul class="bullet"><li>To operate and maintain your SoundCloud® account, and to provide you with access to the Website and use of those Services that you may request from time to time.</li><li>To identify you as the creator of the sounds that you upload, the comments that you post and/or the other contributions that you make to the Platform.</li><li>To seek your participation in surveys, and to conduct and analyse the results of those surveys if you choose to participate.</li><li>To provide other users with data regarding people streaming and downloading their sounds.</li><li>To analyse the use of the Platform, and the people visiting the Website and using the Services, in order to improve SoundCloud®.</li><li>To respond to you about any comment or enquiry you have submitted.</li><li>To customize your use of the Platform and/or the content of any email newsletter or other material that we may send to you from time to time.</li><li>To prevent or take action against activities that are, or may be, in breach of our <a href="/terms-of-use">Terms of Use</a>, <a href="http://soundcloud.com/community-guidelines">Community Guidelines</a> or applicable law.</li><li>For other purposes, provided we disclose this to you at the relevant time, and provided that you agree to the proposed use of your personal information.</li></ul></div><div class="content-item"><h2 id="sharing">Sharing of your personal information</h2><p><strong>We will not share your personal information with any third party, except as described in this Privacy Policy.</strong>There are circumstances where we may need to share some of the personal information we collect about you or which you provide to us - these circumstances are as follows:</p><ul class="bullet underlined"><li><em>Other Users:</em>Any personal information in your public profile (other than your email address) will be accessible by other users of the Platform, who may view your profile information, listen to and comment on any of your public sounds, add themselves to your list of followers, and send you messages.If you listen to any sounds uploaded by a premium user, the fact that you have listened to those sounds will be shared with that premium user, so that they can track the popularity of their sounds.Similarly, if you comment on any sounds on the Platform, your comments will be available to all users of the Platform.</li><li><em>With your consent:</em>We will disclose your personal information if you have explicitly agreed that we may do so.In particular, we will disclose personal information where you have elected to connect your SoundCloud® account to other social networks, or have elected to have your activity on the Platform published to other networks such as Facebook.For information on how to control the information that your share, please see the <a href="#choices">Choice and Control</a> section below.</li><li><em>Service Providers:</em>We use certain reputable third parties, some of whom may be located outside of the European Economic Area, to provide us with certain specialized services related to the Platform.These third parties will have access to certain information about you, but only where this is necessary in order for those third parties to provide their services to us.Where we transfer personal information to these third parties, we ask and require these third parties to implement appropriate organisational and technical security measures to protect against unauthorised disclosure of personal information, and only to process personal information in accordance with our instructions and to the extent necessary to provide their services to us.</li><li><em>Users of our API:</em>SoundCloud has an open API, which enables application developers to integrate elements of the Platform into exciting new apps.Some of these developers may be located outside of the European Economic Area.Any personal information that you choose to make public on the Platform, including your public profile information and any public sounds, may be accessible to these developers over the API.For information on how to limit the information that is available over the API, please see the <a href="#choices">Choice and Control</a> section below.</li><li><em>As aggregated data:</em>We may aggregate your personal data with similar data relating to other users of the Platform in order to create statistical information regarding the Platform and its use, which we may then share with third parties.None of this information would include any email address or other contact information, or anything that could be used to identify you in real life.</li><li><em>If required by law:</em>We will disclose your personal information if we believe in good faith that we are permitted or required to do so by law, including in response to a court order, subpoena or other legal demand or request.</li><li><em>To protect our interests:</em>We may disclose your personal information if we feel this is necessary in order to protect or defend our legitimate rights and interests, or those of our users, employees, directors or shareholders, and/or to ensure the safety and security of the Platform and/or the SoundCloud® community.</li><li><em>In the context of a business transfer:</em>We may disclose your personal information to any person or company that acquires all or substantially all of the assets or business of SoundCloud, or on a merger of our business, or in the event of our insolvency.</li></ul></div><div class="content-item"><h2 id="cookies">Cookies and similar technology</h2><p>In common with most other websites, we use cookies to help us improve the Website and the Services we provide.Cookies are small text files that are placed on your computer by websites that you visit.These text files can be read by these websites and help to identify you when you return to a website.Cookies can be “persistent” or “session” cookies.Persistent cookies remain on your computer when you have gone offline, while session cookies are deleted as soon as you close your web browser.</p><h3>Google Analytics</h3><p>Google Analytics is a web analytics service provided by Google, Inc. (“<strong>Google</strong>”).Google Analytics uses cookies to help us analyze how users use the Website, and any SoundCloud® players embedded on third party sites.The information generated by the cookie about your use of the Website and SoundCloud® players (including your truncated IP address) is transmitted to and stored by Google on servers in the United States.Google will use this information for the purpose of evaluating your, and other users’, use of the Website and SoundCloud® players, compiling reports for us on website activity and providing other services relating to website activity and Internet usage.Please note that Google only receives your truncated IP address.This is sufficient for Google to identify (approximately) the country from which you are visiting the Website, but is not sufficient to identify you, or your computer or mobile device, individually.You can find more information on Google Analytics <a href="http://www.google.com/intl/en/analytics/privacyoverview.html">here</a>, including a link to <a href="http://www.google.com/intl/en/privacy/privacy-policy.html">Google’s privacy policy</a>.</p><p>For information on how to opt-out of having your data collected by Google, please see the “Cookies” paragraph in the <a href="#choices">Choice and Control</a> section below.</p><h3>Quantcast Measurement</h3><p>Quantcast Measurement is an audience measurement service provided by Quantcast Corporation (“<strong>Quantcast</strong>”).Quantcast uses cookies to help us better understand our users, and to help us keep SoundCloud® and our marketing messages relevant to your use of the platform. The information generated by the cookie about your use of the Website (including your IP address) is transmitted to and stored by Quantcast on servers in the United States.Quantcast will use this information, together with information it collects from other websites that you may visit, for the purpose of evaluating your behaviour across the web and compiling reports for us on your website activity.All information provided by Quantcast is aggregated and Quantcast does not provide us with any information relating to your activity on any other website.You can find more information on Quantcast’s collection and use of data <a href="http://www.quantcast.com/how-we-do-it">here</a>, including a link to <a href="http://www.quantcast.com/privacy">Quantcast’s privacy policy</a>.</p><p>For information on how to opt-out of having your data collected by Quantcast, please see the “Cookies” paragraph in the <a href="#choices">Choice and Control</a> section below.</p><p>In addition to cookies, we use the following standard Internet technology in connection with your use of the Platform:</p><ul class="bullet underlined"><li><em>Clear GIFs:</em>We use “clear GIFs”, sometimes known as “web bugs”, which are small image files that we embed into our email newsletters.These clear GIFs tell us whether you opened the newsletter, clicked on any of the content or forwarded the newsletter to someone else.This provides us with useful information regarding the effectiveness of our email newsletters, which we can use to ensure that we are delivering information that is relevant to our users.</li><li><em>Flash cookies:</em>We use Flash cookies to synchronise information between multiple SoundCloud® players.This ensures that one player is stopped when another player starts.Unlike some other websites, <strong>we do not use Flash cookies for the purposes of collecting any personal data, and do not use Flash cookies to respawn any cookies that you might previously have deleted.</strong></li><li><em>HTML5 Local Storage:</em>We use HTML5 local storage to store your default listening volume (i.e. the volume at which you prefer to hear sounds on SoundCloud®) and, in the case of premium users, to set the widget control colour.If you access the mobile version of Website, we use HTML5 local storage to store certain cookie data, including your user plan, authentication data, your username and your display preferences.<strong>We do not use HTML5 local storage to collect any personal data or to track your activity on our websites.</strong></li></ul><p>For information on your choices regarding cookies and similar technologies, please see the <a href="#choices">Choice and Control</a> section below.</p></div><div class="content-item"><h2 id="choices">Choice and Control</h2><p>We do our best to give you as much choice as possible regarding the amount of personal information you provide to us, and the control you have over that information.</p><p>It is not necessary for you to provide us with any information in order to visit the Website, although certain information will be collected automatically by virtue of your visit (as described above).However, if you do decide to register a SoundCloud® account, you can control your personal information in the following ways.</p><h3>Email preferences</h3><p>Check out the “Email” page within “Settings”.When you are logged in to your account, you can access your Settings at the top left of the screen, and you’ll find the link to the Email page down the right side of the Settings page.</p><p>From the Email page you can tell us:<ul class="bullet"><li>which email notifications (if any) you would like to receive from us, and how often; and</li><li>any additional or alternative email addresses that you may wish us to use to communicate with you.</li></ul></p><p>You can also turn off email notifications from the “Account” page within your Settings.By clicking on the link on the Account page, you will immediately disable all email notifications, other than essential account notifications such as important service updates, reports of copyright infringement and other essential information relating to your account and your use of the Platform.</p><p>It is also possible to unsubscribe from email newsletters and notifications (other than essential account notifications) at any time by clicking on the link at the end of each email.</p><h3>Sharing with other networks</h3><p>The “Connections” tab within your Settings enables you to control the information you share with other networks and applications.As well as selecting those of your social networks you wish to share to, you can also control access to other services and applications to which you have connected your SoundCloud® account.</p><p>If you sign up for SoundCloud® via your Facebook account, your SoundCloud® account and your Facebook account will be connected automatically, and information regarding the sounds that you listen to on SoundCloud®, will be shared with Facebook and will appear in your Facebook friends’ newsfeeds. <strong>If you do not want this information shared with Facebook, please change your Settings.</strong></p><p>Please note that this Privacy Policy does not apply to any third party sites or applications, and we cannot control the activities of those sites or applications.You are advised to read the privacy policies of those sites or applications before sharing your information with, or connecting your SoundCloud® account to, any of these third party sites or applications.</p><h3>Sharing with other users</h3><p>SoundCloud® is a very social place, but if you would prefer to browse the Website and use the Services anonymously, you can do so by checking the “Anonymous Listening” box in the “Account” tab within “Settings”.By checking this box, other users will not be able to see the sounds that you listened to, but we will still have access to this information.</p><p>If any of your sounds contain any personal information, you can control who has access to these sounds using the settings in the sound page (click on the “pencil” icon in the waveform player for the relevant sounds).By setting your sounds to “private”, rather than “public”, you can limit who has access to your sounds.</p><h3>Sharing with app developers</h3><p>SoundCloud® has an open API, which allows third party developers to build some really cool apps as an extension of the Platform.If you would prefer that your sounds are not made available to third party app developers, you can disable API access within the sound page for each of the sounds that you upload.Click on the “pencil” icon in the waveform player, and uncheck the “Apps enabled” box at the bottom of the page.</p><h3>Cookies</h3><p>You can use the settings within your browser to control the cookies that are set on your computer.However, please be aware that cookies are important to many aspects for the Website – if you set your browser to reject cookies, you may not be able to enjoy all of the features of the Platform.To find out more about cookies, including how to see what cookies have been set and how to reject and delete cookies, please visit <a href="http://www.allaboutcookies.org">http://www.allaboutcookies.org</a>.</p><P>To opt-out of being tracked by Google Analytics on the Website and other websites, please visit <a href="http://tools.google.com/dlpage/gaoptout">http://tools.google.com/dlpage/gaoptout.</a></P><p>To opt-out of being tracked by Quantcast on the Website and other websites, please visit <a href="http://www.quantcast.com/opt-out">http://www.quantcast.com/opt-out</a>.</p><p>Please Note:We have done our best to provide you with clear and comprehensive information about our use of cookies and similar technologies.If you choose to use the Website without blocking or disabling these technologies, you consent to our use, in accordance with this Privacy Policy, of any personal information that we collect using these technologies.</p><h3>Deleting your account</h3><p>You can delete your account from the “Account” page within your Settings.Please bear in mind that, if you delete your account, all data associated with your account, including the sounds that you uploaded and the usage data associated with those sounds, will be deleted and may not be recoverable.You are therefore advised to copy or back up all content uploaded to your account before you delete your account.</p></div><div class="content-item"><h2>Access to your Data</h2><p>As described above, most of the personal information you provide to us can be accessed and updated in the “Settings” page of your SoundCloud® account.If you wish to access, amend or delete any other personal information we hold about you, or if you have any objection to the processing of any information that we hold about you, please contact us at <a href="mailto:privacy@soundcloud.com">privacy@soundcloud.com</a>, or the address provided below.</p><p>If you ask us to delete your account (either via the Settings page or by email), we will do so within a reasonable period of time, but we may need to retain some of your personal information in order to satisfy our legal obligations, or where we have a legitimate reason for doing so.</p></div><div class="content-item"><h2>International data transfers</h2><p>SoundCloud is based in Europe, and your personal information is collected, stored, used and shared in accordance with European laws.However, from time to time, it may be necessary for us to transfer your personal data to the United States.You should be aware that privacy laws in the United States may not be equivalent to the laws in your country, and by using the Platform, you consent to the transfer, storage and processing of your personal information in the United States in accordance with this Privacy Policy and applicable law.</p></div><div class="content-item"><h2>Children</h2><p>SoundCloud® is not intended for use by children.Anyone under the age of 13 is not permitted to use the Platform and must not attempt to register an account or submit any personal information to us.We do not knowingly collect any personal information from any person who is under the age of 13 or allow them to register an account.If it comes to our attention that we have collected personal data from a person under the age of 13, we will delete this information as quickly as possible.If you have reason to believe that we may have collected any such data, please notify us immediately at privacy@soundcloud.com.</p></div><div class="content-item"><h2>Changes and Updates to this Privacy Policy</h2><p>We may occasionally update this Privacy Policy, and when we do so, we will also revise the Effective Date set out below.Any changes to our Privacy Policy will always be available here so that SoundCloud® users are always aware of what information we gather, and how we might use and share that information.Please be sure to check back here from time to time to ensure that you are aware of any changes to this Privacy Policy.Any material changes to this Privacy Policy will be communicated to registered users by email (to the then current email address provided in their account), by a notification to their account, and/or by posting a notice of the change on the Website.</p></div><div class="content-item"><h2 id="contact">Questions?</h2><p>If you have questions about this Privacy Policy, want to suggest changes to this Privacy Policy or want to know, what information we store about you, please contact us by email at <a href="mailto:privacy@soundcloud.com">privacy@soundcloud.com</a>, or write to us at:</p><p>SoundCloud Limited <br>Rosenthaler Str. 13<br>10119 Berlin <br>Germany <br>Attention: Legal Department <br></p></div><div class="content-item"><h2>Don’t want to give us your information?</h2><p>If you decide that you do not want us to you your personal information in the manner described in the Privacy Policy, please do not use the Platform.If you have already registered an account, you can find out how to terminate or cancel your account <a href="/terms-of-use#termination">here</a>.</p></div><div class="content-item"><strong>Effective Date:</strong>22 September 2011</div></div></div>');
        }
        return _;
    }
    $.template["static/redirecting"] = function anonymous(jQuery, $item) {
        var $ = jQuery,
            call, _ = [],
            $data = $item.data;
        with($data) {
            _.push('<div class="page-content text-content"><div class="placeholder"><canvas class="throbber">Loading…</canvas></div></div>');
        }
        return _;
    }
    $.template["static/server-error"] = function anonymous(jQuery, $item) {
        var $ = jQuery,
            call, _ = [],
            $data = $item.data;
        with($data) {
            _.push('<div class="page-content text-content error-content"><div class="error-yikes"><h1>Yikes, we were unable to process your request in time.</h1><p>Please <a href="">reload the page</a> or try again in a moment.</p></div></div>');
        }
        return _;
    }
    $.template["static/sounds"] = function anonymous(jQuery, $item) {
        var $ = jQuery,
            call, _ = [],
            $data = $item.data;
        with($data) {
            _.push('<div class="page-content text-content sound-page"><h1>Why sound?</h1><br/><div class="video"><iframe src="http://player.vimeo.com/video/30419922?title=0&amp;byline=0&amp;portrait=0&amp;color=ff9933" width="294" height="165" frameborder="0" webkitAllowFullScreen allowFullScreen></iframe></div><h2>At SoundCloud we’re passionate about helping people find new ways to capture and share their sounds. Hear from sound experts and friends of SoundCloud why sound is so important to all of our lives.</h2><div class="share"><iframe allowtransparency="true" class="facebook-share-button" frameborder="0" scrolling="no" src="http://www.facebook.com/plugins/like.php?href=http://soundcloud.com/sounds&amp;send=false&amp;layout=button_count&amp;show_faces=false&amp;action=like&amp;colorscheme=light&amp;font&amp;height=21&amp;locale=en_US"></iframe><a class="twitter-share-button" data-count="horizontal" data-text="Hear experts talk about why sound is so important to our lives:" data-url="http://soundcloud.com/sounds" href="http://twitter.com/share">Tweet</a><script src="http://platform.twitter.com/widgets.js" type="text/javascript"></script><a href="http://www.tumblr.com/share/link?url=http%3A%2F%2Fsoundcloud.com%2Fsounds&amp;name=Sound%20by%20SoundCloud&amp;description=Hear%20experts%20talk%20about%20why%20sound%20is%20so%20important%20to%20our%20lives" style="display:inline-block; text-indent:-9999px; overflow:hidden; width:64px; height:20px; background:url(\'http://platform.tumblr.com/v1/share_2.png\') top left no-repeat transparent;" title="Share on Tumblr"></a></div><ul class="peeps"><h2>A big thank you to everyone who contributed!</h2><li class="peep-description"><a href="http://earstudio.com"><img height="50" src="/assets/images/soundpage/ben_rubin@2x.png" width="50"></a><h3><a href="http://earstudio.com">Ben Rubin</a></h3><h4>Multimedia Artist, Sound Researcher and Founder of EAR Studio</h4></li><li class="peep-description"><a href="http://soundcloud.com/thesoundagency"><img height="50" src="/assets/images/soundpage/julian_treasure@2x.png" width="50"></a><h3><a href="http://soundcloud.com/thesoundagency">Julian Treasure</a></h3><h4>Author of Sound Business, Chairman of The Sound Agency</h4></li><li class="peep-description"><a href="http://bruceodland.net"><img height="50" src="/assets/images/soundpage/bruce_odland@2x.png" width="50"></a><h3><a href="http://bruceodland.net">Bruce Odland</a></h3><h4>Sonic Thinker, Composer and Sound Artist</h4></li><li class="peep-description"><a href="http://en.wikipedia.org/wiki/Martyn_Ware"><img height="50" src="/assets/images/soundpage/martyn_ware@2x.png" width="50"></a><h3><a href="http://en.wikipedia.org/wiki/Martyn_Ware">Martyn Ware</a></h3><h4>Soundscape Composer, Musician and Founder of The Illustrious Company</h4></li><li class="peep-description"><a href="http://soundcloud.com/imogenheap"><img height="50" src="/assets/images/soundpage/imogen_heap@2x.png" width="50"></a><h3><a href="http://soundcloud.com/imogenheap">Imogen Heap</a></h3><h4>Musician, Composer, Pioneer of Crowdsourced Performance</h4></li><li class="peep-description"><a href="http://destroyed.moby.com"><img height="50" src="/assets/images/soundpage/moby@2x.png" width="50"></a><h3><a href="http://destroyed.moby.com">Moby</a></h3><h4>Musician, Producer and Composer</h4></li><li class="peep-description"><a href="http://soundcloud.com/radiolab"><img height="50" src="/assets/images/soundpage/jad_abumrad@2x.png" width="50"></a><h3><a href="http://soundcloud.com/radiolab">Jad Abumrad</a></h3><h4>Radio Host and Producer,2011 MacArthur Fellow</h4></li><li class="peep-description"><a href="http://salvatp.com/about"><img height="50" src="/assets/images/soundpage/salvatore_principato@2x.png" width="50"></a><h3><a href="http://salvatp.com/about">Salvatore Principato</a></h3><h4>Vocalist, Percussionist and Sound Collaborator</h4></li><li class="peep-description"><a href="http://www.gold.ac.uk/music/staff/drever"><img height="50" src="/assets/images/soundpage/dr_john_levack_drever@2x.png" width="50"></a><h3><a href="http://www.gold.ac.uk/music/staff/drever">Dr John Levack Drever</a></h3><h4>Head of Sound Practice Research at Goldsmiths University</h4></li><li class="peep-description"><a href="http://soundcloud.com/timexile"><img height="50" src="/assets/images/soundpage/tim_exile@2x.png" width="50"></a><h3><a href="http://soundcloud.com/timexile">Tim Exile</a></h3><h4>Electronic Producer and Performer, Pioneer of Crowd Jamming</h4></li></ul></div>');
        }
        return _;
    }
    $.template["static/status"] = function anonymous(jQuery, $item) {
        var $ = jQuery,
            call, _ = [],
            $data = $item.data;
        with($data) {
            _.push('<div class="page-content text-content"><ul><li><strong>SC.version</strong>: ');
            if (typeof (SC.version) !== 'undefined' && (SC.version) != null) {
                _.push($.encode((typeof (SC.version) === 'function' ? (SC.version)
                    .call($item) : (SC.version))));
            }
            _.push('</li><li><strong>SC.clientId</strong>: ');
            if (typeof (SC.authorization.attributes.clientId) !== 'undefined' && (SC.authorization.attributes.clientId) != null) {
                _.push($.encode((typeof (SC.authorization.attributes.clientId) === 'function' ? (SC.authorization.attributes.clientId)
                    .call($item) : (SC.authorization.attributes.clientId))));
            }
            _.push('</li><li><strong>host</strong>: ');
            if (typeof (new SC.Application) !== 'undefined' && (new SC.Application) != null) {
                _.push($.encode(new SC.Application()
                    .getHost()));
            }
            _.push('</li><li><strong>ua</strong>: ');
            if (typeof (new SC.Application) !== 'undefined' && (new SC.Application) != null) {
                _.push($.encode(new SC.Application()
                    .getUA()));
            }
            _.push('</li><li><strong>platform</strong>: ');
            if (typeof (new SC.Application) !== 'undefined' && (new SC.Application) != null) {
                _.push($.encode(new SC.Application()
                    .getPlatform()));
            }
            _.push('</li></ul></div>');
        }
        return _;
    }
    $.template["static/upload"] = function anonymous(jQuery, $item) {
        var $ = jQuery,
            call, _ = [],
            $data = $item.data;
        with($data) {
            _.push('<div class="text-content upload"><p>Want to record and share your sounds wherever you go? <b>There\'s an app for that!</b></p><div class="record-teaser"></div></div>');
        }
        return _;
    }
    $.template["suggestions/suggestions-item"] = function anonymous(jQuery, $item) {
        var $ = jQuery,
            call, _ = [],
            $data = $item.data;
        with($data) {
            _.push('<li class="');
            if (typeof (type) !== 'undefined' && (type) != null) {
                _.push($.encode((typeof (type) === 'function' ? (type)
                    .call($item) : (type))));
            }
            _.push('"><div class="inner"><div class="tmb"><span><img src="');
            if (typeof (artwork_url) !== 'undefined' && (artwork_url) != null) {
                _.push($.encode((typeof (artwork_url) === 'function' ? (artwork_url)
                    .call($item) : (artwork_url))));
            }
            _.push('"></span></div><a href="');
            if (typeof (link) !== 'undefined' && (link) != null) {
                _.push($.encode((typeof (link) === 'function' ? (link)
                    .call($item) : (link))));
            }
            _.push('" class="');
            if (typeof (className) !== 'undefined' && (className) != null) {
                _.push($.encode((typeof (className) === 'function' ? (className)
                    .call($item) : (className))));
            }
            _.push('"><h3>');
            if (typeof (matchedTitle) !== 'undefined' && (matchedTitle) != null) {
                _.push((typeof (matchedTitle) === 'function' ? (matchedTitle)
                    .call($item) : (matchedTitle)));
            }
            _.push('</h3></a></div></li>');
        }
        return _;
    }
    $.template["suggestions/suggestions"] = function anonymous(jQuery, $item) {
        var $ = jQuery,
            call, _ = [],
            $data = $item.data;
        with($data) {
            _.push('<div class="label-input"><label>Find artists, music and audio</label><button type="submit"><span></span></button></div><ul class="list-items list-suggestions"></ul>');
        }
        return _;
    }
    $.template["tag/tag"] = function anonymous(jQuery, $item) {
        var $ = jQuery,
            call, _ = [],
            $data = $item.data;
        with($data) {
            _.push('<div class="tag"><div class="info"><form action="/tags"><h1>Explore / Tags / <input type="text" value="');
            if (typeof (name) !== 'undefined' && (name) != null) {
                _.push($.encode((typeof (name) === 'function' ? (name)
                    .call($item) : (name))));
            }
            _.push('"/></h1></form></div><div class="content page-content"><h2>Loading...</h2><ul class="list-items"><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ul></div></div>');
        }
        return _;
    }
    $.template["tag/tag-tracks"] = function anonymous(jQuery, $item) {
        var $ = jQuery,
            call, _ = [],
            $data = $item.data;
        with($data) {
            _.push('<h2 class="page-inner-header">');
            if (typeof (tracks_count) !== 'undefined' && (tracks_count) != null) {
                _.push($.encode((typeof (tracks_count) === 'function' ? (tracks_count)
                    .call($item) : (tracks_count))));
            }
            _.push(' sounds found</h2><ul class="list-items tracks">');
            if (typeof (tracks) !== 'undefined' && (tracks) != null) {
                $.each((typeof (tracks) === 'function' ? (tracks)
                    .call($item) : (tracks)), function (index, track) {
                    with(this) {
                        _.push('');
                        if (typeof ("trackitem") !== 'undefined' && ("trackitem") != null) {
                            _ = _.concat($item.nest("trackitem", track));
                        }
                        _.push('');
                    }
                });
            }
            _.push('<li class="more" data-sc-href="');
            if (typeof (tracks.next_href) !== 'undefined' && (tracks.next_href) != null) {
                _.push($.encode((typeof (tracks.next_href) === 'function' ? (tracks.next_href)
                    .call($item) : (tracks.next_href))));
            }
            _.push('"><canvas class="throbber">Loading…</canvas></li></ul>');
        }
        return _;
    }
    $.template["track/track-comments"] = function anonymous(jQuery, $item) {
        var $ = jQuery,
            call, _ = [],
            $data = $item.data;
        with($data) {
            _.push('<li><div class="tmb"><img src="');
            if (typeof (user.avatar_url_small) !== 'undefined' && (user.avatar_url_small) != null) {
                _.push($.encode((typeof (user.avatar_url_small) === 'function' ? (user.avatar_url_small)
                    .call($item) : (user.avatar_url_small))));
            }
            _.push('" /></div><a href="/');
            if (typeof (user.permalink) !== 'undefined' && (user.permalink) != null) {
                _.push($.encode((typeof (user.permalink) === 'function' ? (user.permalink)
                    .call($item) : (user.permalink))));
            }
            _.push('">');
            if (typeof (user.username) !== 'undefined' && (user.username) != null) {
                _.push($.encode((typeof (user.username) === 'function' ? (user.username)
                    .call($item) : (user.username))));
            }
            _.push('</a> <span class="position">at ');
            if (typeof (position_timecode) !== 'undefined' && (position_timecode) != null) {
                _.push($.encode((typeof (position_timecode) === 'function' ? (position_timecode)
                    .call($item) : (position_timecode))));
            }
            _.push('</span> <span class="commented">');
            if (typeof (commented) !== 'undefined' && (commented) != null) {
                _.push($.encode((typeof (commented) === 'function' ? (commented)
                    .call($item) : (commented))));
            }
            _.push('</span> <p class="body">');
            if (typeof (body) !== 'undefined' && (body) != null) {
                _.push($.encode((typeof (body) === 'function' ? (body)
                    .call($item) : (body))));
            }
            _.push('</p></li>');
        }
        return _;
    }
    $.template["track/track-loading"] = function anonymous(jQuery, $item) {
        var $ = jQuery,
            call, _ = [],
            $data = $item.data;
        with($data) {
            _.push('<div class="track loading page-content"><div class="info hidden drop-shadow"><ul class="list-items tracks"><li data-sc-track-id=""><div class="inner"><div class="tmb"><a href="/');
            if (typeof (track.user.permalink) !== 'undefined' && (track.user.permalink) != null) {
                _.push($.encode((typeof (track.user.permalink) === 'function' ? (track.user.permalink)
                    .call($item) : (track.user.permalink))));
            }
            _.push('"><img src=""></a></div><a href="/');
            if (typeof (track.user.permalink) !== 'undefined' && (track.user.permalink) != null) {
                _.push($.encode((typeof (track.user.permalink) === 'function' ? (track.user.permalink)
                    .call($item) : (track.user.permalink))));
            }
            _.push('"><h3 class="uploader">');
            if (typeof (track.user.username) !== 'undefined' && (track.user.username) != null) {
                _.push($.encode((typeof (track.user.username) === 'function' ? (track.user.username)
                    .call($item) : (track.user.username))));
            }
            _.push('</h3><h1 class="title">');
            if (typeof (track.title) !== 'undefined' && (track.title) != null) {
                _.push($.encode((typeof (track.title) === 'function' ? (track.title)
                    .call($item) : (track.title))));
            }
            _.push('</h1><div class="details"><ul class="stats mini"><li class="favorites favorites-');
            if (typeof (track.favoritings_count) !== 'undefined' && (track.favoritings_count) != null) {
                _.push($.encode((typeof (track.favoritings_count) === 'function' ? (track.favoritings_count)
                    .call($item) : (track.favoritings_count))));
            }
            _.push('">');
            if (typeof (track.favoritings_count) !== 'undefined' && (track.favoritings_count) != null) {
                _.push($.encode((typeof (track.favoritings_count) === 'function' ? (track.favoritings_count)
                    .call($item) : (track.favoritings_count))));
            }
            _.push('</li><li class="comments comments-');
            if (typeof (track.comment_count) !== 'undefined' && (track.comment_count) != null) {
                _.push($.encode((typeof (track.comment_count) === 'function' ? (track.comment_count)
                    .call($item) : (track.comment_count))));
            }
            _.push('">');
            if (typeof (track.comment_count) !== 'undefined' && (track.comment_count) != null) {
                _.push($.encode((typeof (track.comment_count) === 'function' ? (track.comment_count)
                    .call($item) : (track.comment_count))));
            }
            _.push('</li><li class="plays plays-');
            if (typeof (track.playback_count) !== 'undefined' && (track.playback_count) != null) {
                _.push($.encode((typeof (track.playback_count) === 'function' ? (track.playback_count)
                    .call($item) : (track.playback_count))));
            }
            _.push('">');
            if (typeof (track.playback_count) !== 'undefined' && (track.playback_count) != null) {
                _.push($.encode((typeof (track.playback_count) === 'function' ? (track.playback_count)
                    .call($item) : (track.playback_count))));
            }
            _.push('</li></ul></div><span class="uploaded">');
            if (typeof (track.shared) !== 'undefined' && (track.shared) != null) {
                _.push($.encode((typeof (track.shared) === 'function' ? (track.shared)
                    .call($item) : (track.shared))));
            }
            _.push('</span></a></div></li></ul></div><div class="artwork"><img class="tmb" src="');
            if (typeof (track.artwork_url) !== 'undefined' && (track.artwork_url) != null) {
                _.push($.encode((typeof (track.artwork_url) === 'function' ? (track.artwork_url)
                    .call($item) : (track.artwork_url))));
            }
            _.push('"><img class="huge" src="');
            if (typeof (track.artwork_url_huge) !== 'undefined' && (track.artwork_url_huge) != null) {
                _.push($.encode((typeof (track.artwork_url_huge) === 'function' ? (track.artwork_url_huge)
                    .call($item) : (track.artwork_url_huge))));
            }
            _.push('"></div><div class="player"></div><div class="throbber-placeholder"><canvas class="throbber">Loading…</canvas></div></div>');
        }
        return _;
    }
    $.template["track/track"] = function anonymous(jQuery, $item) {
        var $ = jQuery,
            call, _ = [],
            $data = $item.data;
        with($data) {
            _.push('<div class="track page-content"><div class="info transition hidden drop-shadow"><ul class="list-items tracks"><li data-sc-track-id="');
            if (typeof (id) !== 'undefined' && (id) != null) {
                _.push($.encode((typeof (id) === 'function' ? (id)
                    .call($item) : (id))));
            }
            _.push('"><div class="inner"><div class="tmb"><a href="/');
            if (typeof (user.permalink) !== 'undefined' && (user.permalink) != null) {
                _.push($.encode((typeof (user.permalink) === 'function' ? (user.permalink)
                    .call($item) : (user.permalink))));
            }
            _.push('"><img src="');
            if (typeof (user.avatar_url) !== 'undefined' && (user.avatar_url) != null) {
                _.push($.encode((typeof (user.avatar_url) === 'function' ? (user.avatar_url)
                    .call($item) : (user.avatar_url))));
            }
            _.push('"></a></div><a href="/');
            if (typeof (user.permalink) !== 'undefined' && (user.permalink) != null) {
                _.push($.encode((typeof (user.permalink) === 'function' ? (user.permalink)
                    .call($item) : (user.permalink))));
            }
            _.push('"><h3 class="uploader">');
            if (typeof (user.username) !== 'undefined' && (user.username) != null) {
                _.push($.encode((typeof (user.username) === 'function' ? (user.username)
                    .call($item) : (user.username))));
            }
            _.push('</h3><h1 class="title">');
            if (typeof (title) !== 'undefined' && (title) != null) {
                _.push($.encode((typeof (title) === 'function' ? (title)
                    .call($item) : (title))));
            }
            _.push('</h1><div class="details"><span class="sharing-label secondary ');
            if (typeof (shared_label_class) !== 'undefined' && (shared_label_class) != null) {
                _.push($.encode((typeof (shared_label_class) === 'function' ? (shared_label_class)
                    .call($item) : (shared_label_class))));
            }
            _.push('">');
            if (typeof (sharing_label) !== 'undefined' && (sharing_label) != null) {
                _.push($.encode((typeof (sharing_label) === 'function' ? (sharing_label)
                    .call($item) : (sharing_label))));
            }
            _.push('</span><ul class="stats mini"><li class="favorites favorites-');
            if (typeof (favoritings_count) !== 'undefined' && (favoritings_count) != null) {
                _.push($.encode((typeof (favoritings_count) === 'function' ? (favoritings_count)
                    .call($item) : (favoritings_count))));
            }
            _.push('">');
            if (typeof (favoritings_count) !== 'undefined' && (favoritings_count) != null) {
                _.push($.encode((typeof (favoritings_count) === 'function' ? (favoritings_count)
                    .call($item) : (favoritings_count))));
            }
            _.push('</li><li class="comments comments-');
            if (typeof (comment_count) !== 'undefined' && (comment_count) != null) {
                _.push($.encode((typeof (comment_count) === 'function' ? (comment_count)
                    .call($item) : (comment_count))));
            }
            _.push('">');
            if (typeof (comment_count) !== 'undefined' && (comment_count) != null) {
                _.push($.encode((typeof (comment_count) === 'function' ? (comment_count)
                    .call($item) : (comment_count))));
            }
            _.push('</li><li class="plays plays-');
            if (typeof (playback_count) !== 'undefined' && (playback_count) != null) {
                _.push($.encode((typeof (playback_count) === 'function' ? (playback_count)
                    .call($item) : (playback_count))));
            }
            _.push('">');
            if (typeof (playback_count) !== 'undefined' && (playback_count) != null) {
                _.push($.encode((typeof (playback_count) === 'function' ? (playback_count)
                    .call($item) : (playback_count))));
            }
            _.push('</li></ul></div><span class="uploaded">');
            if (typeof (shared) !== 'undefined' && (shared) != null) {
                _.push($.encode((typeof (shared) === 'function' ? (shared)
                    .call($item) : (shared))));
            }
            _.push('</span></a></div></li></ul></div><div class="artwork"><img class="tmb" src="');
            if (typeof (artwork_url) !== 'undefined' && (artwork_url) != null) {
                _.push($.encode((typeof (artwork_url) === 'function' ? (artwork_url)
                    .call($item) : (artwork_url))));
            }
            _.push('"><img class="huge transition hide" src="');
            if (typeof (artwork_url_huge) !== 'undefined' && (artwork_url_huge) != null) {
                _.push($.encode((typeof (artwork_url_huge) === 'function' ? (artwork_url_huge)
                    .call($item) : (artwork_url_huge))));
            }
            _.push('"></div><div class="player mini transition hide drop-shadow streamable-');
            if (typeof (streamable) !== 'undefined' && (streamable) != null) {
                _.push($.encode((typeof (streamable) === 'function' ? (streamable)
                    .call($item) : (streamable))));
            }
            _.push(' canplay-');
            if (typeof (canPlayTrack) !== 'undefined' && (canPlayTrack) != null) {
                _.push($.encode((typeof (canPlayTrack) === 'function' ? (canPlayTrack)
                    .call($item) : (canPlayTrack))));
            }
            _.push('"><div class="controls"><button class="play">Play</button><button class="pause">Pause</button><button class="play-pressed">Play</button><button class="pause-pressed">Pause</button></div><div class="scrubber"><img class="waveform transition hide" src="');
            if (typeof (waveform_url) !== 'undefined' && (waveform_url) != null) {
                _.push($.encode((typeof (waveform_url) === 'function' ? (waveform_url)
                    .call($item) : (waveform_url))));
            }
            _.push('"><div class="progress-load"></div><div class="progress-play"></div><b class="indicator duration">');
            if (typeof (duration_timecode) !== 'undefined' && (duration_timecode) != null) {
                _.push($.encode((typeof (duration_timecode) === 'function' ? (duration_timecode)
                    .call($item) : (duration_timecode))));
            }
            _.push('</b><b class="indicator position"><span class="current">0.00</span> / <span class="total">');
            if (typeof (duration_timecode) !== 'undefined' && (duration_timecode) != null) {
                _.push($.encode((typeof (duration_timecode) === 'function' ? (duration_timecode)
                    .call($item) : (duration_timecode))));
            }
            _.push('</span></b></div><div class="streamable-msg">This sound is not available on mobile</div><div class="canplay-msg">Oops! SoundCloud doesn’t fully support your browser yet.</div></div><div class="details transition"><div class="track-meta"><div class="share-view track-share-view"></div><div class="options"><button class="button icon favorite"><span>Like</span></button><a data-sc-field="purchase_url" data-sc-permalink-url="');
            if (typeof (permalink_url) !== 'undefined' && (permalink_url) != null) {
                _.push($.encode((typeof (permalink_url) === 'function' ? (permalink_url)
                    .call($item) : (permalink_url))));
            }
            _.push('" class="button buy" href="');
            if (typeof (purchase_url) !== 'undefined' && (purchase_url) != null) {
                _.push($.encode((typeof (purchase_url) === 'function' ? (purchase_url)
                    .call($item) : (purchase_url))));
            }
            _.push('" target="_blank"><span>');
            if (typeof (purchase_title) !== 'undefined' && (purchase_title) != null) {
                _.push($.encode((typeof (purchase_title) === 'function' ? (purchase_title)
                    .call($item) : (purchase_title))));
            }
            _.push('</span></a></div><div class="sharing-widgets-container"></div><div class="created-with">');
            if (typeof (formatted_created_with) !== 'undefined' && (formatted_created_with) != null) {
                _.push((typeof (formatted_created_with) === 'function' ? (formatted_created_with)
                    .call($item) : (formatted_created_with)));
            }
            _.push('</div><div class="description">');
            if (typeof (formatted_description) !== 'undefined' && (formatted_description) != null) {
                _.push((typeof (formatted_description) === 'function' ? (formatted_description)
                    .call($item) : (formatted_description)));
            }
            _.push('</div><p data-sc-field="tags" class="tags"><strong>Tags:</strong>');
            if (typeof (tags) !== 'undefined' && (tags) != null) {
                $.each((typeof (tags) === 'function' ? (tags)
                    .call($item) : (tags)), function (index, tag) {
                    with(this) {
                        _.push('<a class="tag" href="/tags/');
                        if (typeof (tag) !== 'undefined' && (tag) != null) {
                            _.push($.encode((typeof (tag) === 'function' ? (tag)
                                .call($item) : (tag))));
                        }
                        _.push('">');
                        if (typeof (tag) !== 'undefined' && (tag) != null) {
                            _.push($.encode((typeof (tag) === 'function' ? (tag)
                                .call($item) : (tag))));
                        }
                        _.push('</a>');
                    }
                });
            }
            _.push('</p><ul><li data-sc-field="label_name"><strong>Released by:</strong> ');
            if (typeof (label_name) !== 'undefined' && (label_name) != null) {
                _.push($.encode((typeof (label_name) === 'function' ? (label_name)
                    .call($item) : (label_name))));
            }
            _.push('</li><li data-sc-field="release"><strong>Release/catalogue number:</strong> ');
            if (typeof (release) !== 'undefined' && (release) != null) {
                _.push($.encode((typeof (release) === 'function' ? (release)
                    .call($item) : (release))));
            }
            _.push('</li><li data-sc-field="released"><strong>Released date:</strong> ');
            if (typeof (released) !== 'undefined' && (released) != null) {
                _.push($.encode((typeof (released) === 'function' ? (released)
                    .call($item) : (released))));
            }
            _.push('</li></ul></div><div class="comments"><h2 data-sc-field="comment_count">');
            if (typeof (comment_count) !== 'undefined' && (comment_count) != null) {
                _.push($.encode((typeof (comment_count) === 'function' ? (comment_count)
                    .call($item) : (comment_count))));
            }
            _.push(' comments</h2><ul></ul></div></div></div>');
        }
        return _;
    }
    $.template["trackitem"] = function anonymous(jQuery, $item) {
        var $ = jQuery,
            call, _ = [],
            $data = $item.data;
        with($data) {
            _.push('<li data-sc-track-id="');
            if (typeof (id) !== 'undefined' && (id) != null) {
                _.push($.encode((typeof (id) === 'function' ? (id)
                    .call($item) : (id))));
            }
            _.push('" class="streamable-');
            if (typeof (streamable) !== 'undefined' && (streamable) != null) {
                _.push($.encode((typeof (streamable) === 'function' ? (streamable)
                    .call($item) : (streamable))));
            }
            _.push('"><div class="inner"><div class="tmb"><span><img src="');
            if (typeof (artwork_url) !== 'undefined' && (artwork_url) != null) {
                _.push($.encode((typeof (artwork_url) === 'function' ? (artwork_url)
                    .call($item) : (artwork_url))));
            }
            _.push('"></span></div><a href="/');
            if (typeof (user.permalink) !== 'undefined' && (user.permalink) != null) {
                _.push($.encode((typeof (user.permalink) === 'function' ? (user.permalink)
                    .call($item) : (user.permalink))));
            }
            _.push('/');
            if (typeof (permalink) !== 'undefined' && (permalink) != null) {
                _.push($.encode((typeof (permalink) === 'function' ? (permalink)
                    .call($item) : (permalink))));
            }
            _.push('"><h3 class="uploader">');
            if (typeof (user.username) !== 'undefined' && (user.username) != null) {
                _.push($.encode((typeof (user.username) === 'function' ? (user.username)
                    .call($item) : (user.username))));
            }
            _.push('</h3><p class="title">');
            if (typeof (title) !== 'undefined' && (title) != null) {
                _.push($.encode((typeof (title) === 'function' ? (title)
                    .call($item) : (title))));
            }
            _.push('</p><div class="details"><span class="sharing-label secondary ');
            if (typeof (shared_label_class) !== 'undefined' && (shared_label_class) != null) {
                _.push($.encode((typeof (shared_label_class) === 'function' ? (shared_label_class)
                    .call($item) : (shared_label_class))));
            }
            _.push('">');
            if (typeof (sharing_label) !== 'undefined' && (sharing_label) != null) {
                _.push($.encode((typeof (sharing_label) === 'function' ? (sharing_label)
                    .call($item) : (sharing_label))));
            }
            _.push('</span><ul class="stats mini"><li class="favorites favorites-');
            if (typeof (favoritings_count) !== 'undefined' && (favoritings_count) != null) {
                _.push($.encode((typeof (favoritings_count) === 'function' ? (favoritings_count)
                    .call($item) : (favoritings_count))));
            }
            _.push('">');
            if (typeof (favoritings_count) !== 'undefined' && (favoritings_count) != null) {
                _.push($.encode((typeof (favoritings_count) === 'function' ? (favoritings_count)
                    .call($item) : (favoritings_count))));
            }
            _.push('</li><li class="comments comments-');
            if (typeof (comment_count) !== 'undefined' && (comment_count) != null) {
                _.push($.encode((typeof (comment_count) === 'function' ? (comment_count)
                    .call($item) : (comment_count))));
            }
            _.push('">');
            if (typeof (comment_count) !== 'undefined' && (comment_count) != null) {
                _.push($.encode((typeof (comment_count) === 'function' ? (comment_count)
                    .call($item) : (comment_count))));
            }
            _.push('</li><li class="plays plays-');
            if (typeof (playback_count) !== 'undefined' && (playback_count) != null) {
                _.push($.encode((typeof (playback_count) === 'function' ? (playback_count)
                    .call($item) : (playback_count))));
            }
            _.push('">');
            if (typeof (playback_count) !== 'undefined' && (playback_count) != null) {
                _.push($.encode((typeof (playback_count) === 'function' ? (playback_count)
                    .call($item) : (playback_count))));
            }
            _.push('</li></ul></div><span class="uploaded">');
            if (typeof (shared) !== 'undefined' && (shared) != null) {
                _.push($.encode((typeof (shared) === 'function' ? (shared)
                    .call($item) : (shared))));
            }
            _.push('</span></a></div></li>');
        }
        return _;
    }
    $.template["user/user-comments"] = function anonymous(jQuery, $item) {
        var $ = jQuery,
            call, _ = [],
            $data = $item.data;
        with($data) {
            _.push('<div class="page-inner-header sub-content sub-content-');
            if (typeof (comments.length) !== 'undefined' && (comments.length) != null) {
                _.push($.encode((typeof (comments.length) === 'function' ? (comments.length)
                    .call($item) : (comments.length))));
            }
            _.push('">');
            if (typeof (username) !== 'undefined' && (username) != null) {
                _.push($.encode((typeof (username) === 'function' ? (username)
                    .call($item) : (username))));
            }
            _.push(' hasn\'t made any comments yet.</div><ul class="list-items comments">');
            if (typeof (comments) !== 'undefined' && (comments) != null) {
                $.each((typeof (comments) === 'function' ? (comments)
                    .call($item) : (comments)), function (index, comment) {
                    with(this) {
                        _.push('<li data-sc-track-id="');
                        if (typeof (track_id) !== 'undefined' && (track_id) != null) {
                            _.push($.encode((typeof (track_id) === 'function' ? (track_id)
                                .call($item) : (track_id))));
                        }
                        _.push('"><div class="inner"><p class="track"><strong>at ');
                        if (typeof (position_timecode) !== 'undefined' && (position_timecode) != null) {
                            _.push($.encode((typeof (position_timecode) === 'function' ? (position_timecode)
                                .call($item) : (position_timecode))));
                        }
                        _.push('</strong> on <a class="user">…</a> <a class="title"></a></p><div class="body">');
                        if (typeof (formatted_body) !== 'undefined' && (formatted_body) != null) {
                            _.push((typeof (formatted_body) === 'function' ? (formatted_body)
                                .call($item) : (formatted_body)));
                        }
                        _.push('</div><span class="uploaded">');
                        if (typeof (shared) !== 'undefined' && (shared) != null) {
                            _.push($.encode((typeof (shared) === 'function' ? (shared)
                                .call($item) : (shared))));
                        }
                        _.push('</span></div></li>');
                    }
                });
            }
            _.push('<li class="more" data-sc-href="');
            if (typeof (comments.next_href) !== 'undefined' && (comments.next_href) != null) {
                _.push($.encode((typeof (comments.next_href) === 'function' ? (comments.next_href)
                    .call($item) : (comments.next_href))));
            }
            _.push('"><canvas class="throbber">Loading…</canvas></li></ul>');
        }
        return _;
    }
    $.template["user/user-dropbox"] = function anonymous(jQuery, $item) {
        var $ = jQuery,
            call, _ = [],
            $data = $item.data;
        with($data) {
            _.push('<div class="text-content upload"><p>Want to record and share your sounds with this user? <b>There\'s an app for that!</b></p><div class="record-teaser"></div></div>');
        }
        return _;
    }
    $.template["user/user-favorites"] = function anonymous(jQuery, $item) {
        var $ = jQuery,
            call, _ = [],
            $data = $item.data;
        with($data) {
            _.push('<div class="page-inner-header sub-content sub-content-');
            if (typeof (favorite_count) !== 'undefined' && (favorite_count) != null) {
                _.push($.encode((typeof (favorite_count) === 'function' ? (favorite_count)
                    .call($item) : (favorite_count))));
            }
            _.push('">');
            if (typeof (username) !== 'undefined' && (username) != null) {
                _.push($.encode((typeof (username) === 'function' ? (username)
                    .call($item) : (username))));
            }
            _.push(' has no likes</div><ul class="list-items tracks">');
            if (typeof (favorites) !== 'undefined' && (favorites) != null) {
                $.each((typeof (favorites) === 'function' ? (favorites)
                    .call($item) : (favorites)), function (index, track) {
                    with(this) {
                        _.push('');
                        if (typeof ("trackitem") !== 'undefined' && ("trackitem") != null) {
                            _ = _.concat($item.nest("trackitem", track));
                        }
                        _.push('');
                    }
                });
            }
            _.push('<li class="more" data-sc-href="');
            if (typeof (favorites.next_href) !== 'undefined' && (favorites.next_href) != null) {
                _.push($.encode((typeof (favorites.next_href) === 'function' ? (favorites.next_href)
                    .call($item) : (favorites.next_href))));
            }
            _.push('"><canvas class="throbber">Loading…</canvas></li></ul>');
        }
        return _;
    }
    $.template["user/user-followers"] = function anonymous(jQuery, $item) {
        var $ = jQuery,
            call, _ = [],
            $data = $item.data;
        with($data) {
            _.push('<h2 class="page-inner-header">');
            if (typeof (SC.Followings.followers) !== 'undefined' && (SC.Followings.followers) != null) {
                _.push($.encode(SC.Followings.followers(followers_count)));
            }
            _.push('</h2><ul class="list-items users">');
            if (typeof (followers) !== 'undefined' && (followers) != null) {
                $.each((typeof (followers) === 'function' ? (followers)
                    .call($item) : (followers)), function (index, follower) {
                    with(this) {
                        _.push('');
                        if (typeof ("useritem") !== 'undefined' && ("useritem") != null) {
                            _ = _.concat($item.nest("useritem", follower));
                        }
                        _.push('');
                    }
                });
            }
            _.push('<li class="more" data-sc-href="');
            if (typeof (followers.next_href) !== 'undefined' && (followers.next_href) != null) {
                _.push($.encode((typeof (followers.next_href) === 'function' ? (followers.next_href)
                    .call($item) : (followers.next_href))));
            }
            _.push('"><canvas class="throbber">Loading…</canvas></li></ul>');
        }
        return _;
    }
    $.template["user/user-followings"] = function anonymous(jQuery, $item) {
        var $ = jQuery,
            call, _ = [],
            $data = $item.data;
        with($data) {
            _.push('<h2 class="page-inner-header">');
            if (typeof (SC.Followings.followings) !== 'undefined' && (SC.Followings.followings) != null) {
                _.push($.encode(SC.Followings.followings(followings_count)));
            }
            _.push('</h2><ul class="list-items users">');
            if (typeof (followings) !== 'undefined' && (followings) != null) {
                $.each((typeof (followings) === 'function' ? (followings)
                    .call($item) : (followings)), function (index, follower) {
                    with(this) {
                        _.push('');
                        if (typeof ("useritem") !== 'undefined' && ("useritem") != null) {
                            _ = _.concat($item.nest("useritem", follower));
                        }
                        _.push('');
                    }
                });
            }
            _.push('<li class="more" data-sc-href="');
            if (typeof (followings.next_href) !== 'undefined' && (followings.next_href) != null) {
                _.push($.encode((typeof (followings.next_href) === 'function' ? (followings.next_href)
                    .call($item) : (followings.next_href))));
            }
            _.push('"><canvas class="throbber">Loading…</canvas></li></ul>');
        }
        return _;
    }
    $.template["user/user-groups"] = function anonymous(jQuery, $item) {
        var $ = jQuery,
            call, _ = [],
            $data = $item.data;
        with($data) {
            _.push('<h2 class="page-inner-header">');
            if (typeof (username) !== 'undefined' && (username) != null) {
                _.push($.encode((typeof (username) === 'function' ? (username)
                    .call($item) : (username))));
            }
            _.push(' is in ');
            if (typeof (groups.length) !== 'undefined' && (groups.length) != null) {
                _.push($.encode((typeof (groups.length) === 'function' ? (groups.length)
                    .call($item) : (groups.length))));
            }
            _.push(' groups</h2><ul class="list-items groups">');
            if (typeof (groups) !== 'undefined' && (groups) != null) {
                $.each((typeof (groups) === 'function' ? (groups)
                    .call($item) : (groups)), function (index, group) {
                    with(this) {
                        _.push('');
                        if (typeof ("groupitem") !== 'undefined' && ("groupitem") != null) {
                            _ = _.concat($item.nest("groupitem", group));
                        }
                        _.push('');
                    }
                });
            }
            _.push('<li class="more" data-sc-href="');
            if (typeof (groups.next_href) !== 'undefined' && (groups.next_href) != null) {
                _.push($.encode((typeof (groups.next_href) === 'function' ? (groups.next_href)
                    .call($item) : (groups.next_href))));
            }
            _.push('"><canvas class="throbber">Loading…</canvas></li></ul>');
        }
        return _;
    }
    $.template["user/user-info"] = function anonymous(jQuery, $item) {
        var $ = jQuery,
            call, _ = [],
            $data = $item.data;
        with($data) {
            _.push('<ul class="list-items list-items-nav list-arrows"><li><a href="/');
            if (typeof (permalink) !== 'undefined' && (permalink) != null) {
                _.push($.encode((typeof (permalink) === 'function' ? (permalink)
                    .call($item) : (permalink))));
            }
            _.push('/followers">');
            if (typeof (followers_count) !== 'undefined' && (followers_count) != null) {
                _.push($.encode((typeof (followers_count) === 'function' ? (followers_count)
                    .call($item) : (followers_count))));
            }
            _.push(' Followers</a></li><li><a href="/');
            if (typeof (permalink) !== 'undefined' && (permalink) != null) {
                _.push($.encode((typeof (permalink) === 'function' ? (permalink)
                    .call($item) : (permalink))));
            }
            _.push('/followings">');
            if (typeof (followings_count) !== 'undefined' && (followings_count) != null) {
                _.push($.encode((typeof (followings_count) === 'function' ? (followings_count)
                    .call($item) : (followings_count))));
            }
            _.push(' Following</a></li><li><a href="/');
            if (typeof (permalink) !== 'undefined' && (permalink) != null) {
                _.push($.encode((typeof (permalink) === 'function' ? (permalink)
                    .call($item) : (permalink))));
            }
            _.push('/groups">');
            if (typeof (username) !== 'undefined' && (username) != null) {
                _.push($.encode((typeof (username) === 'function' ? (username)
                    .call($item) : (username))));
            }
            _.push('\'s Groups</a></li><li><a href="/');
            if (typeof (permalink) !== 'undefined' && (permalink) != null) {
                _.push($.encode((typeof (permalink) === 'function' ? (permalink)
                    .call($item) : (permalink))));
            }
            _.push('/comments">');
            if (typeof (username) !== 'undefined' && (username) != null) {
                _.push($.encode((typeof (username) === 'function' ? (username)
                    .call($item) : (username))));
            }
            _.push('\'s Comments</a></li></ul><p><a href="');
            if (typeof (website) !== 'undefined' && (website) != null) {
                _.push($.encode((typeof (website) === 'function' ? (website)
                    .call($item) : (website))));
            }
            _.push('" title="');
            if (typeof (website_title) !== 'undefined' && (website_title) != null) {
                _.push($.encode((typeof (website_title) === 'function' ? (website_title)
                    .call($item) : (website_title))));
            }
            _.push('">');
            if (typeof (website) !== 'undefined' && (website) != null) {
                _.push($.encode((typeof (website) === 'function' ? (website)
                    .call($item) : (website))));
            }
            _.push('</a></p><div class="description">');
            if (typeof (formatted_description) !== 'undefined' && (formatted_description) != null) {
                _.push((typeof (formatted_description) === 'function' ? (formatted_description)
                    .call($item) : (formatted_description)));
            }
            _.push('</div>');
        }
        return _;
    }
    $.template["user/user-playlists"] = function anonymous(jQuery, $item) {
        var $ = jQuery,
            call, _ = [],
            $data = $item.data;
        with($data) {
            _.push('<div class="page-inner-header sub-content sub-content-');
            if (typeof (playlist_count) !== 'undefined' && (playlist_count) != null) {
                _.push($.encode((typeof (playlist_count) === 'function' ? (playlist_count)
                    .call($item) : (playlist_count))));
            }
            _.push('">');
            if (typeof (username) !== 'undefined' && (username) != null) {
                _.push($.encode((typeof (username) === 'function' ? (username)
                    .call($item) : (username))));
            }
            _.push(' has no sets</div><ul class="list-items playlists">');
            if (typeof (playlists) !== 'undefined' && (playlists) != null) {
                $.each((typeof (playlists) === 'function' ? (playlists)
                    .call($item) : (playlists)), function (index, set) {
                    with(this) {
                        _.push('');
                        if (typeof ("playlistitem") !== 'undefined' && ("playlistitem") != null) {
                            _ = _.concat($item.nest("playlistitem", set));
                        }
                        _.push('');
                    }
                });
            }
            _.push('<li class="more" data-sc-href="');
            if (typeof (playlists.next_href) !== 'undefined' && (playlists.next_href) != null) {
                _.push($.encode((typeof (playlists.next_href) === 'function' ? (playlists.next_href)
                    .call($item) : (playlists.next_href))));
            }
            _.push('"><canvas class="throbber">Loading…</canvas></li></ul>');
        }
        return _;
    }
    $.template["user/user"] = function anonymous(jQuery, $item) {
        var $ = jQuery,
            call, _ = [],
            $data = $item.data;
        with($data) {
            _.push('<div class="user myself-');
            if (typeof (isMe) !== 'undefined' && (isMe) != null) {
                _.push($.encode((typeof (isMe) === 'function' ? (isMe)
                    .call($item) : (isMe))));
            }
            _.push('"><div class="profile"><img src="');
            if (typeof (avatar_url) !== 'undefined' && (avatar_url) != null) {
                _.push($.encode((typeof (avatar_url) === 'function' ? (avatar_url)
                    .call($item) : (avatar_url))));
            }
            _.push('"><h1>');
            if (typeof (username) !== 'undefined' && (username) != null) {
                _.push($.encode((typeof (username) === 'function' ? (username)
                    .call($item) : (username))));
            }
            _.push('</h1><p class="secondary">');
            if (typeof (full_name) !== 'undefined' && (full_name) != null) {
                _.push($.encode((typeof (full_name) === 'function' ? (full_name)
                    .call($item) : (full_name))));
            }
            _.push('</p><p><button class="button user-follow" data-user-id="');
            if (typeof (id) !== 'undefined' && (id) != null) {
                _.push($.encode((typeof (id) === 'function' ? (id)
                    .call($item) : (id))));
            }
            _.push('"><span class="label-inactive">Follow</span><span class="label-active">Following</span></button><span class="badges"><a href="/');
            if (typeof (permalink) !== 'undefined' && (permalink) != null) {
                _.push($.encode((typeof (permalink) === 'function' ? (permalink)
                    .call($item) : (permalink))));
            }
            _.push('/tracks" class="badge tracks-count" title="');
            if (typeof (track_count) !== 'undefined' && (track_count) != null) {
                _.push($.encode((typeof (track_count) === 'function' ? (track_count)
                    .call($item) : (track_count))));
            }
            _.push(' tracks">');
            if (typeof (track_count) !== 'undefined' && (track_count) != null) {
                _.push($.encode((typeof (track_count) === 'function' ? (track_count)
                    .call($item) : (track_count))));
            }
            _.push('</a><a href="/');
            if (typeof (permalink) !== 'undefined' && (permalink) != null) {
                _.push($.encode((typeof (permalink) === 'function' ? (permalink)
                    .call($item) : (permalink))));
            }
            _.push('/followers" class="badge followers" title="');
            if (typeof (followers_count) !== 'undefined' && (followers_count) != null) {
                _.push($.encode((typeof (followers_count) === 'function' ? (followers_count)
                    .call($item) : (followers_count))));
            }
            _.push(' followers">');
            if (typeof (followers_count) !== 'undefined' && (followers_count) != null) {
                _.push($.encode((typeof (followers_count) === 'function' ? (followers_count)
                    .call($item) : (followers_count))));
            }
            _.push('</a></span></p></div><ul class="page-tabs page-tabs-4"><li data-sc-tab="tracks"><a href="/');
            if (typeof (permalink) !== 'undefined' && (permalink) != null) {
                _.push($.encode((typeof (permalink) === 'function' ? (permalink)
                    .call($item) : (permalink))));
            }
            _.push('/tracks">Sounds</a></li><li data-sc-tab="playlists"><a href="/');
            if (typeof (permalink) !== 'undefined' && (permalink) != null) {
                _.push($.encode((typeof (permalink) === 'function' ? (permalink)
                    .call($item) : (permalink))));
            }
            _.push('/sets">Sets</a></li><li data-sc-tab="favorites"><a href="/');
            if (typeof (permalink) !== 'undefined' && (permalink) != null) {
                _.push($.encode((typeof (permalink) === 'function' ? (permalink)
                    .call($item) : (permalink))));
            }
            _.push('/favorites">Likes</a></li><li data-sc-tab="info"><a href="/');
            if (typeof (permalink) !== 'undefined' && (permalink) != null) {
                _.push($.encode((typeof (permalink) === 'function' ? (permalink)
                    .call($item) : (permalink))));
            }
            _.push('/info">Info</a></li></ul><div class="content page-content"><div class="placeholder"><canvas class="throbber">Loading…</canvas></div></div><div class="details"></div><div class="page-fade"><img class="drop-shadow" src="');
            if (typeof (avatar_url) !== 'undefined' && (avatar_url) != null) {
                _.push($.encode((typeof (avatar_url) === 'function' ? (avatar_url)
                    .call($item) : (avatar_url))));
            }
            _.push('"><canvas>Loading…</canvas><img class="big-image drop-shadow"></div></div>');
        }
        return _;
    }
    $.template["user/user-tracks"] = function anonymous(jQuery, $item) {
        var $ = jQuery,
            call, _ = [],
            $data = $item.data;
        with($data) {
            _.push('<div class="page-inner-header sub-content sub-content-');
            if (typeof (track_count) !== 'undefined' && (track_count) != null) {
                _.push($.encode((typeof (track_count) === 'function' ? (track_count)
                    .call($item) : (track_count))));
            }
            _.push('">');
            if (typeof (username) !== 'undefined' && (username) != null) {
                _.push($.encode((typeof (username) === 'function' ? (username)
                    .call($item) : (username))));
            }
            _.push(' hasn\'t made any sounds public yet.</div><ul class="list-items tracks">');
            if (typeof (tracks) !== 'undefined' && (tracks) != null) {
                $.each((typeof (tracks) === 'function' ? (tracks)
                    .call($item) : (tracks)), function (index, track) {
                    with(this) {
                        _.push('');
                        if (typeof ("trackitem") !== 'undefined' && ("trackitem") != null) {
                            _ = _.concat($item.nest("trackitem", track));
                        }
                        _.push('');
                    }
                });
            }
            _.push('<li class="more" data-sc-href="');
            if (typeof (tracks.next_href) !== 'undefined' && (tracks.next_href) != null) {
                _.push($.encode((typeof (tracks.next_href) === 'function' ? (tracks.next_href)
                    .call($item) : (tracks.next_href))));
            }
            _.push('"><canvas class="throbber">Loading…</canvas></li></ul>');
        }
        return _;
    }
    $.template["useritem"] = function anonymous(jQuery, $item) {
        var $ = jQuery,
            call, _ = [],
            $data = $item.data;
        with($data) {
            _.push('<li><div class="tmb"><span><img src="');
            if (typeof (avatar_url) !== 'undefined' && (avatar_url) != null) {
                _.push($.encode((typeof (avatar_url) === 'function' ? (avatar_url)
                    .call($item) : (avatar_url))));
            }
            _.push('"></span></div><a href="/');
            if (typeof (permalink) !== 'undefined' && (permalink) != null) {
                _.push($.encode((typeof (permalink) === 'function' ? (permalink)
                    .call($item) : (permalink))));
            }
            _.push('"><span class="title">');
            if (typeof (username) !== 'undefined' && (username) != null) {
                _.push($.encode((typeof (username) === 'function' ? (username)
                    .call($item) : (username))));
            }
            _.push('</span><div class="details"><span class="badge tracks-count" title="');
            if (typeof (track_count) !== 'undefined' && (track_count) != null) {
                _.push($.encode((typeof (track_count) === 'function' ? (track_count)
                    .call($item) : (track_count))));
            }
            _.push(' tracks">');
            if (typeof (track_count) !== 'undefined' && (track_count) != null) {
                _.push($.encode((typeof (track_count) === 'function' ? (track_count)
                    .call($item) : (track_count))));
            }
            _.push('</span><span class="badge followers" title="');
            if (typeof (followers_count) !== 'undefined' && (followers_count) != null) {
                _.push($.encode((typeof (followers_count) === 'function' ? (followers_count)
                    .call($item) : (followers_count))));
            }
            _.push(' followers">');
            if (typeof (followers_count) !== 'undefined' && (followers_count) != null) {
                _.push($.encode((typeof (followers_count) === 'function' ? (followers_count)
                    .call($item) : (followers_count))));
            }
            _.push('</span></div></a><div class="col"><button class="button user-follow" data-user-id="');
            if (typeof (id) !== 'undefined' && (id) != null) {
                _.push($.encode((typeof (id) === 'function' ? (id)
                    .call($item) : (id))));
            }
            _.push('"><span class="label-inactive">Follow</span><span class="label-active">Following</span></button></div></li>');
        }
        return _;
    }
    $.template["you/you-followers"] = function anonymous(jQuery, $item) {
        var $ = jQuery,
            call, _ = [],
            $data = $item.data;
        with($data) {
            _.push('<div class="page-content"><h2 class="page-inner-header people">');
            if (typeof (SC.Followings.youFollowers) !== 'undefined' && (SC.Followings.youFollowers) != null) {
                _.push($.encode(SC.Followings.youFollowers(followers_count)));
            }
            _.push('</h2><ul class="list-items users">');
            if (typeof (followers) !== 'undefined' && (followers) != null) {
                $.each((typeof (followers) === 'function' ? (followers)
                    .call($item) : (followers)), function (index, follower) {
                    with(this) {
                        _.push('');
                        if (typeof ("useritem") !== 'undefined' && ("useritem") != null) {
                            _ = _.concat($item.nest("useritem", follower));
                        }
                        _.push('');
                    }
                });
            }
            _.push('<li class="more" data-sc-href="');
            if (typeof (followers.next_href) !== 'undefined' && (followers.next_href) != null) {
                _.push($.encode((typeof (followers.next_href) === 'function' ? (followers.next_href)
                    .call($item) : (followers.next_href))));
            }
            _.push('"><canvas class="throbber">Loading…</canvas></li></ul></div>');
        }
        return _;
    }
    $.template["you/you-followings"] = function anonymous(jQuery, $item) {
        var $ = jQuery,
            call, _ = [],
            $data = $item.data;
        with($data) {
            _.push('<div class="page-content"><h2 class="page-inner-header people">');
            if (typeof (SC.Followings.youFollowings) !== 'undefined' && (SC.Followings.youFollowings) != null) {
                _.push($.encode(SC.Followings.youFollowings(followings_count)));
            }
            _.push('</h2><ul class="list-items users">');
            if (typeof (followings) !== 'undefined' && (followings) != null) {
                $.each((typeof (followings) === 'function' ? (followings)
                    .call($item) : (followings)), function (index, follower) {
                    with(this) {
                        _.push('');
                        if (typeof ("useritem") !== 'undefined' && ("useritem") != null) {
                            _ = _.concat($item.nest("useritem", follower));
                        }
                        _.push('');
                    }
                });
            }
            _.push('<li class="more" data-sc-href="');
            if (typeof (followings.next_href) !== 'undefined' && (followings.next_href) != null) {
                _.push($.encode((typeof (followings.next_href) === 'function' ? (followings.next_href)
                    .call($item) : (followings.next_href))));
            }
            _.push('"><canvas class="throbber">Loading…</canvas></li></ul></div>');
        }
        return _;
    }
    $.template["you/you"] = function anonymous(jQuery, $item) {
        var $ = jQuery,
            call, _ = [],
            $data = $item.data;
        with($data) {
            _.push('<div class="page-content text-content you-content"><ul class="list-navigation"><li><a href="/you/tracks">Your sounds <span class="count">(');
            if (typeof (track_count) !== 'undefined' && (track_count) != null) {
                _.push($.encode((typeof (track_count) === 'function' ? (track_count)
                    .call($item) : (track_count))));
            }
            _.push(')</span></a></li><li><a href="/you/favorites">Your likes <span class="count">(');
            if (typeof (public_favorites_count) !== 'undefined' && (public_favorites_count) != null) {
                _.push($.encode((typeof (public_favorites_count) === 'function' ? (public_favorites_count)
                    .call($item) : (public_favorites_count))));
            }
            _.push(')</span></a></li><li><a href="/you/sets">Your sets <span class="count">(');
            if (typeof (playlist_count) !== 'undefined' && (playlist_count) != null) {
                _.push($.encode((typeof (playlist_count) === 'function' ? (playlist_count)
                    .call($item) : (playlist_count))));
            }
            _.push(')</span></a></li></ul><ul class="list-navigation"><li><a href="/people/friends">Find Friends</a></li><li><a href="/people">Suggested People</a></li><li><a href="/you/followings">People you follow <span class="count">(');
            if (typeof (followings_count) !== 'undefined' && (followings_count) != null) {
                _.push($.encode((typeof (followings_count) === 'function' ? (followings_count)
                    .call($item) : (followings_count))));
            }
            _.push(')</span></a></li><li><a href="/you/followers">People who follow you <span class="count">(');
            if (typeof (followers_count) !== 'undefined' && (followers_count) != null) {
                _.push($.encode((typeof (followers_count) === 'function' ? (followers_count)
                    .call($item) : (followers_count))));
            }
            _.push(')</span></a></li></ul><ul class="list-navigation"><li><a href="/settings">Account info</a></li><li class="logout"><a href="/logout">Log out</a></li></ul></div>');
        }
        return _;
    }
    $.template["static/terms-of-use-es"] = function anonymous(jQuery, $item) {
        var $ = jQuery,
            call, _ = [],
            $data = $item.data;
        with($data) {
            _.push('<div id="terms-of-use" class="page-content text-content static-content"><div class="content-item"><h1>Condiciones de uso de SoundCloud</h1><p>Bienvenido a SoundCloud®, un servicio prestado por SoundCloud Limited (<strong>“SoundCloud”</strong>, <strong>“nosotros”</strong>, <strong>“nuestro”</strong> o <strong>“nos”</strong>), inscrita en [], con CIF [] y domicilio en [].</p><p>Estas Condiciones de Uso regirán su uso de SoundCloud.com (el <strong>“Sitio Web”</strong>) y todos los correspondientes reproductores, widgets, herramientas, aplicaciones informáticas, datos, software, interfaces de programación de aplicaciones (‘API’, que podrán estar sujetas a sus propias Condiciones de Uso específicas) y otros servicios prestados por SoundCloud (los <strong>“Servicios”</strong>).</p><p>Estas Condiciones de Uso, junto con nuestra Política de Privacidad y nuestras Normas de la Comunidad, constituyen un contrato jurídicamente vinculante (el <strong>“Contrato”</strong>) entre usted y SoundCloud en relación con su uso del Sitio Web y los Servicios (colectivamente, la <strong>“Plataforma”</strong>).</p><p>Las Condiciones de Uso están divididas en los siguientes apartados:</p><ul class="bullet"><li><a href="#acceptance">Aceptación de las Condiciones de Uso</a><p>Básicamente, al utilizar SoundCloud®, usted acepta nuestras Condiciones de Uso, la <a href="/pages/privacy">Política de Privacidad</a> y las <a href="http://soundcloud.com/community-guidelines">Normas de la Comunidad</a> y se compromete a cumplirlas.</p></li><li><a href="#changes">Modificación de las Condiciones de Uso</a><p>Este apartado explica que nuestras Condiciones de Uso pueden cambiar en distintos momentos.</p></li><li><a href="#platform">Descripción de la Plataforma</a><p>Descripción general de la Plataforma, sus características y su funcionalidad.</p></li><li><a href="#account">Su cuenta de SoundCloud</a><p>En este apartado se explican sus responsabilidades si optar por registrar una cuenta de SoundCloud®.</p></li><li><a href="#use">Uso de la Plataforma</a><p>En este apartado se expone su derecho a utilizar la Plataforma y las condiciones aplicables a su utilización.</p></li><li><a href="#content">Sus Contenidos</a><p>Este apartado trata de la propiedad de sus contenidos e incluye su compromiso de no cargar nada que vulnere derechos de terceros.</p></li><li><a href="#license">Otorgamiento de licencia</a><p>En este apartado se explica cómo se utilizarán sus contenidos en SoundCloud® y las autorizaciones que usted concede al cargar sus contenidos, como, por ejemplo, el derecho de otros usuarios a escuchar sus sonidos.</p></li><li><a href="#representations">Declaraciones y garantías</a><p>Este apartado incluye importantes compromisos y garantías que usted formula al cargar contenidos en SoundCloud®; en particular, su promesa de que todo lo que cargue y comparta es de su propiedad y no vulnerar derechos de terceros.</p></li><li><a href="#liability">Responsabilidad por los contenidos</a><p>En este apartado se explica que SoundCloud es un servicio de hosting y que los usuarios sólo son responsables del material que cargan en SoundCloud®.</p></li><li><a href="#infringements">Denuncia de infracciones</a><p>En este apartado se explica cómo informarnos de cualquier contenido de SoundCloud® que, a su juicio, vulnere sus derechos de autor u otros derechos de propiedad intelectual o sea de naturaleza ofensiva, insultante, difamatoria o contrario de otro modo a nuestras <a href="http://soundcloud.com/community-guidelines">Normas de la Comunidad</a>.Puede encontrar más información sobre la denuncia de vulneraciones de los derechos de autor en nuestras páginas sobre <a href="http://soundcloud.com/pages/copyright">Información sobre Derechos de Autor</a>.</p></li><li><a href="#thirdparty">Sitios web y servicios de terceros</a><p>Usted puede tener acceso a otros sitios web y servicios a través de SoundCloud®.En este apartado se explica que éstos son servicios independientes de terceros no sujetos al control de SoundCloud.</p></li><li><a href="#blocking">Bloqueo y retirada de contenidos</a><p>En este apartado se advierte que SoundCloud podrá bloquear y retirar contenidos de la Plataforma.</p></li><li><a href="#repeated_infringement">Infractores reiterados</a><p>Las cuentas de SoundCloud® de los usuarios que reiteradamente vulneren derechos de terceros o incumplan nuestras <a href="http://soundcloud.com/community-guidelines">Normas de la Comunidad</a> pueden ser suspendidas o canceladas, como se explica en este apartado.</p></li><li><a href="#disclaimer">Exclusión de garantías</a><p>En este apartado se explica que SoundCloud® no puede garantizar que la Plataforma esté siempre disponible; incluso una plataforma tan formidable como la nuestra puede sufrir problemas en ocasiones.</p></li><li><a href="#limitation_of_liability">Limitación de la responsabilidad</a><p>En este apartado se explican algunas cosas por las que SoundCloud no será responsable.Asegúrese de leerlo y entenderlo.</p></li><li><a href="#indemnification">Obligación de indemnizar</a><p>Si su uso de la Plataforma nos causa perjuicios, deberá asumir la responsabilidad correspondiente.</p></li><li><a href="#dataprotection">Protección de datos y privacidad</a><p>Es muy importante para nosotros que usted conozca cómo utilizamos sus datos personales.Todos los datos se recogen, almacenan y utilizan con arreglo a nuestra <a href="http://soundcloud.com/pages/privacy">Política de Privacidad</a>; asegúrese de leerla y entenderla.</p></li><li><a href="#meetups">Encuentros</a><p>Este apartado hace referencia a los encuentros de SoundCloud® y explica que no son actos “oficiales’ de SoundCloud, por lo que no somos responsables de lo que ocurra en ellos.</p></li><li><a href="#competitions">Competiciones y otras promociones</a><p>Este apartado trata de las competiciones, concursos y sorteos de SoundCloud®.SoundCloud no es quien los realiza y, por tanto, no podemos hacernos responsables de ellos.</p></li><li><a href="#use_of_player">Uso del reproductor y el widget de SoundCloud</a><p>Este apartado incluye algunas restricciones al modo en que puede utilizar nuestros reproductores y widgets; básicamente, no trate de utilizar nuestros reproductores para crear un nuevo servicio de música en streaming.</p></li><li><a href="#premium">Cuentas premium</a><p>En este apartado se explica lo que ocurre cuando usted abre una cuenta premium.</p></li><li><a href="#changes_to_platform">Cambios en la Plataforma, las cuentas y los precios</a><p>En ocasiones podemos tener que realizar algunos cambios en SoundCloud®.En este apartado se explican cuáles son sus derechos en esos casos.</p></li><li><a href="#termination">Extinción del Contrato y derecho de cancelación</a><p>En este apartado se explica cómo puede cerrar su cuenta de SoundCloud® y los motivos por los que podemos suspender su uso de SoundCloud®.Si usted es un consumidor de la Unión Europea y ha registrado una cuenta premium, en este apartado se explica también su derecho a cancelarla en ciertos casos, su <strong>derecho de revocación</strong> (en alemán: “widerrufsbelehrung”)</p></li><li><a href="#assignment">Cesión a terceros</a><p>Este apartado trata del derecho de SoundCloud a ceder este Contrato a un tercero.</p></li><li><a href="#severability">Exclusión de cláusulas</a><p>Esta es una cláusula legal estándar que establece que si alguna estipulación no es válida, podrá eliminarse sin afectar a la validez del resto del contrato.</p></li><li><a href="#entire_agreement">Integridad del Contrato</a><p>Su uso de SoundCloud® se rige únicamente por estas Condiciones de Uso, nuestra <a href="http://soundcloud.com/pages/privacy">Política de Privacidad</a> y nuestras <a href="http://soundcloud.com/community-guidelines">Normas de la Comunidad</a>, y cualquier modificación deberá hacerse por escrito.</p></li><li><a href="#applicable_law">Ley aplicable y jurisdicción competente</a><p>Todos nuestros documentos se rigen generalmente por el derecho alemán.</p></li><li><a href="#Información">Disclosures</a><p>En este apartado se ofrece información sobre SoundCloud, incluido el modo de ponerse en contacto con nosotros.</p></li></ul></div><div class="content-item"><h2 id="acceptance">Aceptación de las Condiciones de Uso</h2><p>Lea muy detenidamente estas Condiciones de Uso y nuestras <a href="http://soundcloud.com/pages/privacy">Política de Privacidad</a> y <a href="http://soundcloud.com/community-guidelines">Normas de la Comunidad</a>.Si no está de acuerdo con alguna de las estipulaciones de estos documentos, no debe utilizar el Sitio Web ni los Servicios.Al acceder a la Plataforma, registrar una cuenta o ver, acceder, practicar streaming, cargar o descargar cualquier información o contenido desde o hacia la Plataforma, usted declara y garantiza que ha leído y entiende las Condiciones de Uso, la <a href="http://soundcloud.com/pages/privacy">Política de Privacidad</a> y las <a href="http://soundcloud.com/community-guidelines">Normas de la Comunidad</a>, que se atendrá a las mismas y que tiene al menos 18 años de edad o bien tiene al menos 14 años de edad y cuenta con la autorización de sus padres o tutores legales para utilizar la Plataforma.</p></div><div class="content-item"><h2 id="changes">Modificación de las Condiciones de Uso</h2><p>Nos reservamos el derecho a modificar de cualquier modo y en cualquier momento estas Condiciones de Uso y nuestras <a href="http://soundcloud.com/community-guidelines">Normas de la Comunidad</a> y <a href="http://soundcloud.com/pages/privacy">Política de Privacidad</a>.La fecha de la última modificación figura al término de estas Condiciones de Uso.Usted deberá comprobar de vez en cuando esta página para conocer las actualizaciones.</p><p>Cuando realicemos actualizaciones de las Condiciones de Uso, lo advertiremos en el Sitio Web.Por otra parte, si usted registra una cuenta y posteriormente se modifican estas Condiciones de Uso en algún aspecto importante (por ejemplo, por razones de seguridad, jurídicas o reglamentarias), se lo notificaremos por anticipado enviándole un mensaje a su cuenta de SoundCloud® y un correo electrónico a la dirección que nos haya suministrado, y las nuevas Condiciones de Uso entrarán en vigor a las seis (6) semanas de esta notificación.Usted no tendrá obligación de continuar utilizando la Plataforma tras la notificación, pero si no cierra su cuenta conforme a lo expuesto más adelante en el apartado de <a href="#termination">Extinción del Contrato y derecho de cancelación</a> durante este período de seis (6) semanas, la continuación del uso de la Plataforma una vez transcurrido dicho período supondrá su aceptación de las nuevas Condiciones de Uso.</p></div><div class="content-item"><h2 id="platform">Descripción de la Plataforma</h2><p>La Plataforma es un servicio de hosting.Sus usuarios registrados pueden enviar, cargar y colocar audio, texto, fotos, imágenes, gráficos, comentarios u otros contenidos, datos e información (los <strong>“Contenidos”</strong>), que serán almacenados por SoundCloud en la dirección de dichos usuarios registrados y podrán ser compartidos y distribuidos por estos u otros usuarios de la Plataforma, empleando las herramientas y funciones ofrecidas en el marco de los Servicios y accesibles a través del Sitio Web u otros medios.La Plataforma permite también a los usuarios registrados interaccionar entre sí y participar en las discusiones y permite a los usuarios del Sitio Web y de ciertos Servicios (sean o no usuarios registrados de la Plataforma) ver, escuchar y compartir Contenidos cargados y puestos a disposición por los usuarios registrados.</p><p>Nosotros podremos incluir en distintos momentos nuevas herramientas y recursos en el Sitio Web, y otros servicios y funciones para la Plataforma.Los nuevos servicios y funciones estarán sujetos a estas Condiciones de Uso y a cualesquiera otras condiciones de uso adicionales que podamos establecer para ellos.</p></div><div class="content-item"><h2 id="account">Su cuenta de SoundCloud</h2><p>No está obligado a registrarse para utilizar la Plataforma.No obstante, el acceso a ciertos Servicios está reservado a los usuarios registrados.</p><p>Al registrarse para utilizar la Plataforma, nos proporcionará su dirección de correo electrónico y elegirá un nombre de usuario y una clave para su cuenta.Debe asegurarse de que la dirección de correo electrónico que facilite sea y se mantenga válida.Esta dirección y cualquier otro dato que nos proporcione sobre usted se tratarán con arreglo a nuestra <a href="http://soundcloud.com/pages/privacy">Política de Privacidad</a>.</p><p>Usted es el único responsable de mantener la confidencialidad y la seguridad de su nombre de usuario y su clave y será responsable de cualquier uso que se haga de los mismos y de todas las actividades que emanen de su cuenta, hayan sido o no autorizadas por usted.</p><p>En caso de pérdida o robo de su nombre de usuario o su clave o si considera que un tercero no autorizado ha accedido a su cuenta, deberá notificarlo por escrito a SoundCloud y cambiar su clave tan pronto como sea posible.</p><p>Nos reservamos el derecho a desautorizar, cancelar, retirar o reasignar nombres de usuario en ciertos casos a nuestra exclusiva discreción, y podremos, con o sin notificación previa, suspender o cerrar su cuenta si se realizan en ella actividades que, a nuestra exclusiva discreción, puedan constituir una vulneración de estas Condiciones de Uso, de nuestras <a href="http://soundcloud.com/community-guidelines">Normas de la Comunidad</a> o una violación o vulneración de los derechos de terceros o de las normas legales y reglamentarias aplicables.</p><p>Usted podrá cerrar su cuenta en cualquier momento conforme a lo expuesto más adelante en el apartado <a href="#termination">Extinción del Contrato y derecho de cancelación</a>.Cualquier intento de cerrar su cuenta por otros medios no se considerará como un cierre debidamente realizado.</p><p>Una vez cerrada o cancelada su cuenta, los Contenidos existentes en ella o correspondientes a actividades realizadas desde la misma (por ejemplo, los datos relativos a la distribución o el consumo de sus sonidos) serán irrecuperablemente borrados por SoundCloud, excepto en la medida en que estemos obligados o autorizados a conservar tales contenidos, datos o información durante un determinado período de tiempo con arreglo a las normas legales y reglamentarias aplicables o para proteger nuestros intereses comerciales legítimos.Le recomendamos que guarde o realice una copia de seguridad de los materiales que cargue en su cuenta antes de cerrarla o cancelarla, puesSoundCloud no asume ninguna responsabilidad por los materiales irrecuperablemente borrados tras dicho cierre o cancelación.SoundCloud no puede proporcionarle ningún fichero .csv u otro fichero de datos similar referente a la actividad asociada a su cuenta antes ni después de su cierre o cancelación.Estos datos se proporcionan y están accesibles únicamente para visionarlos a través de la página de su cuenta en el Sitio Web mientras la cuenta esté activa.</p><p>Si accede a la Plataforma a través de una app móvil, al eliminar la app no se eliminará su cuenta. Si desea eliminar su cuenta, tendrá que hacerlo desde la página de la Cuenta dentro de sus Ajustes en el Sitio Web.</p></div><div class="content-item"><h2 id="use">Uso de la Plataforma</h2><p>SoundCloud le concede, sujeta a su estricto cumplimiento de estas Condiciones de Uso y nuestras <a href="http://soundcloud.com/community-guidelines">Normas de la Comunidad</a>, una licencia limitada, personal, no exclusiva, revocable, no susceptible de cesión e intransferible de uso de la Plataforma para visionar los Contenidos cargados y colocados en el Sitio Web, escuchar el Contenidos audio en streaming desde la Plataforma y compartir y descargar Contenidos de audio si el usuario que los haya cargado habilita la funcionalidad correspondiente (el “Cargador”).</p><p>Si se registra para utilizar la Plataforma y con sujeción a su estricto cumplimiento de estas Condiciones de Uso y nuestras <a href="http://soundcloud.com/community-guidelines">Normas de la Comunidad</a>, SoundCloud le concede una licencia limitada, personal, no exclusiva, revocable, no susceptible de cesión e intransferible para:</p><ol class="roman"><li>enviar, cargar o colocar Contenidos en la Plataforma estrictamente con arreglo a lo autorizado en estas Condiciones de Uso u otras condiciones aplicables expuestas en el Sitio Web en cada momento;</li><li>participar en las áreas comunitarias y comunicarse con otros miembros de la comunidad de SoundCloud® estrictamente con arreglo a estas Condiciones de Uso y nuestras <a href="http://soundcloud.com/community-guidelines">Normas de la Comunidad</a>; y</li><li>utilizar los Servicios prestados en el marco de la Plataforma estrictamente con arreglo a lo autorizado en estas Condiciones de Uso u otras condiciones aplicables a los mismos en cada momento.</li></ol><p>Estas licencias están condicionadas al estricto cumplimiento por usted de estas Condiciones de Uso y nuestras <a href="http://soundcloud.com/community-guidelines">Normas de la Comunidad</a>, incluido, entre otras cosas, lo siguiente:</p><ol class="roman"><li>No deberá copiar, extraer o tomar ni tratar de copiar, extraer o tomar Contenidos de audio de la Plataforma o de cualquier parte de la misma por medios distintos a su descarga cuando el correspondiente Cargador haya habilitado la funcionalidad de descarga respecto al elemento de los Contenidos en cuestión.</li><li>No deberá adaptar, copiar, republicar, facilitar o comunicar de otro modo al público, exponer, reproducir, transferir, compartir, distribuir o utilizar o explotar de otro modo Contenidos de o desde la Plataforma, a menos que (i) se trate de Sus Contenidos o (ii) lo autoricen estas Condiciones de Uso, y dentro de los parámetros establecidos por el Cargador (por ejemplo, conforme a las condiciones de las licencias deCreative Commons seleccionadas por el Cargador).</li><li>No deberá utilizar Contenidos (excepto Sus Contenidos) de modo dirigido a crear otro servicio de contenidos o que replique cualquier parte de la oferta de la Plataforma.</li><li>No deberá tratar de emplear técnicas de scraping u otras técnicas similares para agregar, orientar a otro fin, republicar o utilizar de otro modo cualquier Contenido.</li><li>No deberá utilizar bots, botnets, spiders, herramientas de minado de datos, guiones automáticos, apps, plugins o extensiones con respecto a la Plataforma y los Contenidos, con independencia de su configuración o modo de funcionamiento, incluidos, entre otros, cualesquiera de los anteriores que generen automáticamente mensajes, reproduzcan Contenidos de audio, generen comentarios o favoritos de Contenidos o coloquen cualquier actividad.Esto no será de aplicación a las apps, plugins y extensiones oficialmente emitidas por SoundCloud e integrantes de los Servicios objeto de estas Condiciones de Uso u otros medios legítimos empleados con el fin exclusivo de utilizar y conectarse a la API (interfaz de programación de aplicaciones) de SoundCloud®, siempre que la conexión se ajuste estrictamente a las propias Condiciones de Uso específicas de la API que pudieran existir.</li><li>No deberá modificar ni retirar o tratar de modificar o retirar las advertencias de marca, derechos de autor u otras menciones sobre derechos reservados o advertencias legales que figuren o aparezcan en la Plataforma o en los Contenidos ofrecidos en la Plataforma (excepto Sus Contenidos).</li><li>No deberá realizar ni permitir que terceros realicen lo siguiente: copiar o adaptar el código objeto del Sitio Web o los Servicios, someter a ingeniería inversa, desmontar, descompilar, modificar o tratar de descubrir el código fuente u objeto de cualquier parte de la Plataforma, esquivar o tratar de esquivar o copiar cualquier clase de mecanismos de protección frente a la copia o acceder a información de gestión de derechos referentes a Contenidos distintos de Sus Contenidos.</li><li>No deberá utilizar la Plataforma para cargar, colocar, almacenar, transmitir, exponer, copiar, distribuir, promover, facilitar o comunicar de otro modo al público:<ol><li>Contenidos ofensivos, insultantes, injuriosos, difamatorios, obscenos, racistas, sexualmente explícitos, étnica o culturalmente ofensivos, indecentes, que promuevan la violencia, el terrorismo o actos ilegales o inciten al odio por razones de raza, sexo, religión u orientación sexual o sean cuestionables de otro modo a razonable discreción de SoundCloud;</li><li>cualquier información, Contenidos u otros materiales que vulneren, plagien, se apropien indebidamente o violen los derechos de terceros, incluidos, entre otros, los de autor, de marca, de privacidad o publicidad, la información confidencial o cualquier otro derecho;</li><li>materiales de cualquier clase que contengan virus, troyanos, spyware, adware, malware, bot, bombas de tiempo, gusanos u otros componentes perjudiciales o maliciosos que puedan sobrecargar, obstaculizar o perturbar la Plataforma o los servidores y redes integrados o conectados con ella o que puedan restringir o inhibir el uso y disfrute de la Plataforma por otros usuarios</li><li>publicidad, mensajes promocionales, spam u otras clases de ofertas no solicitadas o autorizadas.</li></ol></li><li>No deberá cometer ni participar, incitar, inducir, solicitar o promover actos constitutivos de infracción penal, que den lugar a responsabilidad civil o que vulneren de otro modo normas legales o reglamentarias.</li><li>No deberá alquilar ni vender el acceso a la Plataforma o los Contenidos de la misma, si bien esto no le impedirá incluir vínculos desde Sus Contenidos a tiendas de descarga en línea legítimas desde las cuales pueda adquirirse cualquier elemento de éstos.</li><li>No deberá utilizar bots, botnets, guiones automáticos, apps, plugins o extensiones u otros medios electrónicos o automatizados para incrementar artificialmente el recuento de su cuenta, añadir seguidores o falsear de otro modo la popularidad deSus Contenidos en la Plataforma u ofrecer o promover la disponibilidad de tales medios a otros usuarios de la Plataforma.</li><li>No deberá hacerse pasar deliberadamente por cualquier persona o entidad o hacer falsas declaraciones sobre su vinculación a una persona o entidad, por ejemplo, registrando una cuenta a nombre de otra persona o sociedad o enviando mensajes o realizando comentarios empleando el nombre de otra persona.</li><li>No deberá hablar, explotar, amenazar, insultar o acosar de otro modo a otros usuarios ni a empleados de SoundCloud.</li><li>No deberá utilizar ni tratar de utilizar la cuenta, la clave u otros datos de otras personas sin su autorización expresa.</li><li>You must not sell or transfer, or offer to sell or transfer, any SoundCloud account to any third party without the prior written approval of SoundCloud.</li><li>No deberá tratar de vender o ceder ni ofrecer la venta o cesión de cuentas de SoundCloud a terceros sin la previa aprobación escrita de SoundCloud.</li><li>No deberá recoger ni tratar de recoger datos personales o cualquier otra clase de información sobre otros usuarios, incluidos, entre otros medios, los de spidering o cualquier forma de scraping.</li><li>No deberá tratar de utilizar medios automáticos de acceso, entrada o registro de cuentas en la Plataforma.</li></ol><li>No deberá infringir o esquivar ni tratar de infringir o esquivar las medidas de seguridad empleadas por SoundCloud o por cualquier Cargador; acceder o tratar de acceder a datos o materiales no destinados a su uso por usted; entrar o tratar de entrar en servidores o cuentas a los que no esté autorizado a acceder; tratar de escanear o probar la vulnerabilidad de los servidores, el sistema o la red de SoundCloud o de infringir los procedimientos de autenticación o de seguridad de los datos de SoundCloud; tratar de interferir en el Sitio Web o los Servicios por cualquier medio, incluidos, entre otros, los de hackear los servidores o sistemas de SoundCloud, enviar virus, sobrecargar, enviar bombas o crashing.Sin limitar otros derechos y reparaciones que puedan corresponderle en virtud de estas Condiciones de Uso, SoundCloud se reserva el derecho a investigar cualquier situación que parezca implicar cualquiera de los supuestos anteriores y podrá denunciar estas cuestiones y cooperar con las autoridades encargadas del cumplimiento de la ley en la persecución de los usuarios que participen en tales infracciones.</li></ol><p>Usted se compromete a cumplir las condiciones anteriormente expuestas y conoce y acepta que SoundCloud que está facultada, a su exclusiva discreción, para cerrar su cuenta o adoptar otras medidas que consideremos pertinentes si incumple dichas condiciones u otras estipulaciones de las presentes Condiciones de Uso.Estas medidas podrán incluir las reclamaciones ante los tribunales y la denuncia de los usuarios infractores ante las autoridades competentes.</p></div><div class="content-item"><h2 id="content">Sus Contenidos</h2><p>Todos los textos, audio, fotografías, imágenes, gráficos, comentarios y otros contenidos, datos e información que usted cargue, almacene, transmita, envíe, intercambie o ponga a disposición de la Plataforma o a través de ella (en adelante, <strong>"Sus Contenidos"</strong>) son generados, poseídos y controlados únicamente por usted y no por SoundCloud.</p><p>SoundCloud no reclama ningún derecho de propiedad sobre Sus Contenidos y usted declara y acepta expresamente que éstos están bajo su exclusiva responsabilidad.</p><p>Sin perjuicio de las condiciones establecidas en el apartado <a href="#use">Uso de la Plataforma</a>, usted no debe cargar, almacenar, distribuir, enviar, transmitir, exponer, representar, facilitar o comunicar de otro modo al público ningún Contenido para el cual no posea los derechos necesarios. <strong>En particular, el uso no autorizado de materiales protegidos por derechos de autor en Sus Contenidos (incluida la reproducción, distribución, modificación, adaptación, exposición pública, representación pública, elaboración de obras derivadas, puesta a disposición u otra forma de comunicación al público a través de la Plataforma) puede constituir una vulneración de derechos de terceros y queda estrictamente prohibida.</strong>Estas vulneraciones pueden dar lugar al cierre de su acceso a la Plataforma conforme a lo expuesto más adelante en el apartado de <a href="#repeated_infringement">Infractores reiterados</a>, así como a reclamaciones civiles y penales del correspondiente titular de los derechos o en nombre de éste.</p><p>Nosotros podremos invitarle en distintos momentos a facilitar información sobre la Plataforma o proporcionarle medios para que la facilite, en cuyo caso la información que usted proporcione se considerará no confidencial y SoundCloud tendrá el derecho, aunque no la obligación, de emplearla sin restricciones.</p></div><div class="content-item"><h2 id="license">Otorgamiento de licencia</h2><p>Al cargar o colocar Sus Contenidos en la Plataforma, usted inicia un procedimiento automático para transcodificar los Contenidos de audio y encargar a SoundCloud que almacene Sus Contenidos en nuestros servidores, desde donde usted podrá controlar y autorizar el uso, la reproducción, la transmisión, la distribución, la exposición pública, la reproducción pública, la puesta a disposición u otra forma de comunicación al público de Sus Contenidos en la Plataforma u otros lugares empleando los Servicios.En la medida necesaria para que SoundCloud le preste estos servicios de hosting, realice las tareas señaladas en estas Condiciones de Uso o permita su uso de la Plataforma, usted otorga en este acto tales licencias a SoundCloud con carácter limitado, mundial, no exclusivo, gratuito y plenamente pagado.</p><p>Al cargar Sus Contenidos en la Plataforma, usted concede también una licencia limitada, mundial, no exclusiva, gratuita y plenamente pagada a otros usuarios de la Plataforma y a los usuarios de otros sitios web, apps y plataformas en las que se hayan compartido o incluido Sus Contenidos empleando los Servicios (los <strong>“Servicios Vinculados”</strong>) para utilizar, copiar, transmitir o distribuir de otro modo, exponer públicamente, reproducir públicamente, elaborar obras derivadas, poner a disposición o comunicar de otro modo al público Sus Contenidos dentro de los parámetros establecidos por usted utilizando los Servicios.Usted podrá limitar y restringir en cualquier momento la disponibilidad de ciertos de Sus Contenidos a otros usuarios de la Plataforma y a usuarios de los Servicios Vinculados empleando los ajustes de la página de sonido de cada sonido que cargue, con sujeción a lo establecido más adelante en el apartado de <a href="#disclaimer">Exclusión de garantías</a>.</p><p>Las licencias otorgadas en este apartado se conceden independientemente para cada elemento de Sus Contenidos que usted cargue a la Plataforma.Las licencias relativas a Contenidos de audio e imágenes o textos dentro de su cuenta quedarán automáticamente canceladas (con sujeción a lo establecido en el párrafo siguiente de estas Condiciones de Uso) cuando usted los retire de su cuenta.Las licencias relativas a los comentarios u otras aportaciones que usted realice en el Sitio Web serán perpetuas e irrevocables y subsistirán tras el cierre de su cuenta.</p><p>La retirada de Contenidos de audio de su cuenta provocará automáticamente la supresión de los ficheros correspondientes de los sistemas y servidores de SoundCloud.No obstante, sin perjuicio de lo anterior, usted declara y acepta en este acto que una vez distribuidos Sus Contenidos a Servicios Vinculados, SoundCloud no estará obligada a asegurar su supresión de los servidores y sistemas gestionados por los operadores de los Servicios Vinculados ni a exigir que los supriman a los usuarios de la Plataforma o los Servicios Vinculados.</p><p>Los Contenidos distintos de Sus Contenidos son propiedad del correspondiente Cargador y están o pueden estar sujetos a derechos de autor, de marca u otros derechos de propiedad intelectual o derechos reservados.Estos Contenidos no podrán descargarse, reproducirse, distribuirse, transmitirse, recargarse, republicarse, exponerse, venderse, concederse bajo licencia, ponerse a disposición o comunicarse de otro modo al público o explotarse para cualquier fin, excepto dentro de los parámetros establecidos por el Cargador en la Plataforma o con la autorización expresa de dicho Cargador.</p></div><div class="content-item"><h2 id="representations">Declaraciones y garantías</h2><p>Usted declara y garantiza a SoundCloud que:</p><ol class="roman"><li>Sus Contenidos y todos los elementos de ellos son obra original suya o bien usted ha obtenido todos los derechos, licencias, autorizaciones y permisos necesarios para utilizar y (cuando así proceda) autorizar a SoundCloud a utilizar Sus Contenidos con arreglo a estas Condiciones de Uso, incluidos, entre otros, el derecho a cargar, reproducir, almacenar, transmitir, distribuir, compartir, exponer públicamente, representar públicamente, poner a disposición o comunicar de otro modo al público Sus Contenidos o cualquier parte de los mismos en o a través del Sitio Web y los Servicios y los posibles Servicios Vinculados.</li><li>Sus Contenidos y la disponibilidad de los mismos en la Plataforma no vulneran ni vulnerarán en el futuro los derechos de terceros, incluidos, entre otros, los derechos de propiedad intelectual, derechos de intérpretes, derechos de privacidad o publicidad y derechos sobre la información confidencial. </li><li>Ha obtenido todas las autorizaciones, permisos y exenciones necesarias de todas las personas que aparecen en Sus Contenidos para incluir su nombre, voz, actuación o apariencia en Sus Contenidos y para hacerlos públicos en la Plataforma y a través de los Servicios Vinculados.</li><li>Sus Contenidos, incluidos los comentarios que usted pueda colocar en el Sitio Web, no son ni serán ofensivos, insultantes, injuriosos, difamatorios, obscenos, racistas, sexualmente explícitos, étnica o culturalmente ofensivos, indecentes, no promoverán la violencia, el terrorismo o actos ilegales ni incitarán al odio por razones de raza, sexo, religión u orientación sexual.</li><li>Sus Contenidos no crean ni crearán ninguna responsabilidad para SoundCloud y sus filiales, entidades vinculadas, sucesores y cesionarios y sus respectivos empleados, agentes, consejeros, directivos y accionistas.</li></ol><p>SoundCloud se reserva el derecho a retirar Sus Contenidos, suspender o poner fin a su acceso a la Plataforma y adoptar todas las medidas legales si consideramos que alguno de Sus Contenidos incumple las anteriores declaraciones y garantías, los derechos de terceros o las normas legales y reglamentarias.</p></div><div class="content-item"><h2 id="liability">Responsabilidad por los Contenidos</h2><p>Usted reconoce y acepta que SoundCloud (i) almacena Contenidos y otra información a indicación y solicitud y con la autorización de sus usuarios, (ii) actúa meramente como vehículo pasivo o anfitrión para la carga, el almacenamiento y la distribución de estos Contenidos y (iii) no desempeña ningún papel ni presta ninguna asistencia en la presentación o el uso de los Contenidos.Usted es exclusivamente responsable de todos Sus Contenidos que cargue, envíe o distribuya a, en o a través de la Plataforma y, en la medida legalmente autorizada, SoundCloud excluye toda responsabilidad respecto a la totalidad de los Contenidos (incluidos Sus Contenidos) y las actividades de sus usuarios al respecto.</p><p>Usted reconoce y acepta que SoundCloud no puede revisar y no revisa los Contenidos creados o cargados por sus usuarios y que ni SoundCloud ni sus filiales, entidades vinculadas, sucesores, cesionarios, empleados, agentes, directivos, consejeros y accionistas tienen ni asumen ninguna obligación de controlar la Plataforma respecto a Contenidos inadecuados, que vulneren o puedan vulnerar los derechos de terceros o se hayan cargado en contravención de estas Condiciones de Uso o la ley aplicable.</p><p>SoundCloud y sus filiales, entidades vinculadas, sucesores, cesionarios, empleados, agentes, directivos, consejeros y accionistas excluyen en la máxima medida legalmente autorizada cualquier responsabilidad que pueda derivarse de los Contenidos cargados en la Plataforma por los usuarios, incluidas, entre otras, las reclamaciones por vulneración de derechos de propiedad intelectual, de privacidad o de publicidad o relativas a la publicación de materiales difamatorios, pornográficos, obscenos u ofensivos o a la integridad, corrección, vigencia o fiabilidad de la información suministrada por los usuarios en elSitio Web.Al utilizar la Plataforma, usted renuncia irrevocablemente al derecho a reclamar por los motivos anteriores contra SoundCloud y sus filiales, entidades vinculadas, sucesores, cesionarios, empleados, agentes, directivos, consejeros y accionistas.</p></div><div class="content-item"><h2 id="infringements">Denuncia de infracciones</h2><p>Si descubre en la Plataforma Contenidos que a su juicio vulneren sus derechos de autor, comuníquelo a través de los métodos indicados en nuestras páginas de <a href="http://soundcloud.com/pages/copyright/report">Información sobre derechos de autor</a>.</p><p>Si prefiere enviarnos su propia notificación escrita, asegúrese de incluir los datos siguientes:</p><ul class="bullet"><li>una declaración en la que exponga que ha descubierto Contenidos en SoundCloud® que vulneran sus derechos de autor o los de terceros en cuyo nombre está facultado para actuar;</li><li>la descripción de las obras sujetas a derechos de autor supuestamente vulnerados;</li><li>la descripción de los Contenidos supuestamente vulneradores y las URL de SoundCloud en las que pueden encontrarse; </li><li>su nombre completo, dirección y número de teléfono, una dirección de correo electrónico válida en la que sea posible ponerse en contacto con usted y su nombre de usuario de SoundCloud®, si lo tiene;</li><li>una declaración en la que exponga que considera de buena fe que el uso controvertido del material no está autorizado por el propietario de los derechos de autor o su agente o por disposición legal y</li><li>una declaración en la que exponga que la información de su denuncia es correcta y que está autorizado para actuar en nombre del propietario del derecho exclusivo supuestamente vulnerado.</li></ul><p>Si desea que su denuncia se considere como tal a los efectos de la Ley estadounidense de Derechos de Autor Digitales del Milenio 17 U.S.C. §512(c), incluya también lo siguiente:</p><ul class="bullet"><li>con respecto a su declaración de estar autorizado para actuar en nombre del propietario del derecho exclusivo supuestamente vulnerado, la confirmación de que esta declaración se realiza bajo pena de perjurio, y</li><li>su firma electrónica o física (que podrá estar escaneada).</li></ul><p>La denuncia deberá enviarla por correo electrónico a <a href="mailto:copyright@soundcloud.com">copyright@soundcloud.com</a> o por correo postal a la siguiente dirección:</p><p>SoundCloud Ltd <br>Rosenthaler Straße 13 <br>10119 Berlin <br>Germany <br>Attn: Copyright Team</p><p>Si desea que su denuncia se considere como tal a los efectos de la Ley estadounidense de Derechos de Autor Digitales del Milenio17 U.S.C. §512(c), deberá enviarla al agente de derechos de autor designado por SoundCloud mediante correo electrónico a <a href="mailto:copyrightagent@soundcloud.com">copyrightagent@soundcloud.com</a> o por correo postal a la siguiente dirección:</p><p>SoundCloud Ltd <br>c/o Music Reports Inc <br>21122 Erwin Street <br>Woodland Hills <br>CA 91367 <br>USA <br>Attn: Copyright Agent <br>Tel: +1 818 558 1400 <br>Fax: +1 818 558 3484</p><p>Este proceso únicamente es de aplicación a los derechos de autor.Si descubre Contenidos que a su juicio violen sus derechos de marca u otros derechos de propiedad intelectual o sus derechos de privacidad o publicidad o sean difamatorios, pornográficos, obscenos o racistas, incurran de otro modo en una infracción generalizada, constituyan una suplantación de identidad, acoso o spam o vulneren de otro modo estas Condiciones de Uso, nuestras <a href="http://soundcloud.com/community-guidelines">Normas de la Comunidad</a> o la ley aplicable, comuníquenoslo en legal@soundcloud.com.</p></div><div class="content-item"><h2 id="thirdparty">Sitios web y servicios de terceros</h2><p>La Plataforma puede proporcionarle acceso a sitios web, bases de datos, redes, servidores, información, software, programas, sistemas, directorios, aplicaciones, productos y servicios de terceros, incluidos, entre otros los Servicios Vinculados (en adelante, los “Servicios Externos”).</p><p>SoundCloud no tiene ni ejerce ningún control sobre los Servicios Externos y no es ni puede ser responsable de su contenido, funcionamiento o uso.Al ofrecer vínculos o proporcionar otro acceso a los Servicios Externos, SoundCloud no formula ninguna declaración, garantía o aval expreso o implícito sobre la legalidad, corrección, calidad o autenticidad de los contenidos, la información y los servicios proporcionados por éstos.</p><p>Los Servicios Externos pueden tener sus propias condiciones de uso o políticas de privacidad, así como distintas prácticas y requisitos que los operados por SoundCloud con respecto a la Plataforma.Usted será exclusivamente responsable de revisar las condiciones de uso, la política de privacidad y otras condiciones que regulen su uso de estos Servicios Externos, los cuales utilizará a su propio riesgo.Le recomendamos realizar las investigaciones y averiguaciones razonablemente necesarias antes de efectuar cualquier operación económica o de otra clase, en línea o no, con terceros relacionados con los Servicios Externos.</p><p>Usted será exclusivamente responsable de adoptar las precauciones necesarias para protegerse frente al fraude al utilizar los Servicios Externos y para proteger sus sistemas informáticos frente a virus, gusanos troyanos u otros contenidos y materiales perjudiciales o destructivos que puedan estar incluidos en los Servicios Externos o emanar de ellos.</p><p>SoundCloud excluye cualquier responsabilidad por los perjuicios resultantes del uso que usted realice de los Servicios Externos y usted renuncia irrevocablemente en este acto a cualquier reclamación contra SoundCloud en relación con el contenido o el funcionamiento de los Servicios Externos.</p></div><div class="content-item"><h2 id="blocking">Bloqueo y retirada de Contenidos</h2><p>Sin perjuicio del hecho de que SoundCloud no tenga obligación legal de controlar los Contenidos de la Plataforma, SoundCloud se reserva el derecho a bloquear, retirar o suprimir cualquier Contenido en cualquier momento y a limitar o restringir el acceso a cualquier Contenido por cualquier motivo y sin responsabilidad si tenemos razones para creer que vulneran o pueden vulnerar los derechos de terceros, se han cargado o colocado en contravención de estas Condiciones de Uso, nuestras <a href="http://soundcloud.com/community-guidelines">Normas de la Comunidad</a> o la ley aplicable o resultan inaceptables de otro modo para SoundCloud.</p><p>Tenga también en cuenta que cada Cargador tiene el control sobre los Contenidos de audio que almacenan en su propia cuenta en cada momento y pueden retirarlos en su totalidad o en parte sin previo aviso.Usted no tiene derecho a mantener el acceso a ningún elemento concreto de los Contenidos y SoundCloud no tendrá ninguna responsabilidad si usted no pudiera acceder a un elemento de los Contenidos por haber sido retirado de la Plataforma por la propia SoundCloud o por el correspondiente Cargador.</p></div><div class="content-item"><h2 id="repeated_infringement">Infractores reiterados</h2><p>SoundCloud suspenderá o cerrará su acceso a la Plataforma si considera, a su razonable discreción, que usted ha incumplido reiteradamente estas Condiciones de Uso o nuestras <a href="http://soundcloud.com/community-guidelines">Normas de la Comunidad</a>.</p><p>Si recibimos una denuncia válida de terceros con arreglo a nuestro procedimiento de denuncia o a la ley aplicable relativa a que alguno de Sus Contenidos vulnera los derechos de autor u otros derechos de dicho tercero o consideramos que su comportamiento es inadecuado y vulnera nuestras <a href="http://soundcloud.com/community-guidelines">Normas de la Comunidad</a>, le enviaremos una advertencia escrita al efecto.Los usuarios que reciban más de dos advertencias en un período de doce meses podrán sufrir el cierre inmediato de su acceso a la Plataforma.</p><p>También suspenderemos o cerraremos su cuenta sin previo aviso por orden judicial o en otros supuestos pertinentes a discreción de SoundCloud.</p><p>Tenga en cuenta que no ofrecemos devoluciones a los usuarios premium cuyas cuentas se cierren por incumplimiento reiterado de estas Condiciones de Uso o nuestras Normas de la Comunidad.</p></div><div class="content-item"><h2 id="disclaimer">Exclusión de garantías</h2><p>LAPLATAFORMA, INCLUIDOS, ENTRE OTRAS COSAS, EL SITIO WEB Y LA TOTALIDAD DE LOS CONTENIDOS Y LOS SERVICIOS A LOS QUE SE ACCEDA A TRAVÉS DEL SITIO WEB O DE OTRO MODO, SE PROPORCIONAN <strong>“TAL CUAL”</strong>, <strong>“SEGÚN ESTÉN DISPONIBLES”</strong> Y <strong>“CON TODOS SUS DEFECTOS”</strong>.</p><p>AUNQUE SOUNDCLOUD HACE CUANTO RAZONABLEMENTE ESTÁ EN SU MANO PARA CORREGIR LOS ERRORES Y OMISIONES DE LA PLATAFORMA LO MÁS PRONTO POSIBLE UNA VEZ LLEGADOS A SU CONOCIMIENTO, NO FORMULA NINGUNA PROMESA, GARANTÍA, DECLARACIÓN DE NINGUNA CLASE (EXPRESA O IMPLÍCITA) SOBRE EL SITIO WEB, LOS SERVICIOS Y CUALQUIER PARTE DE ELLOS, LOS CONTENIDOS Y LOS SERVICIOS VINCULADOS U OTROS SERVICIOS EXTERNOS.SOUNDCLOUD NO GARANTIZA QUE EL USO QUE USTED REALICE DE LA PLATAFORMA SEA ININTERRUMPIDO, PUNTUAL, SEGURO Y SIN ERRORES, QUE SE CORRIJAN LOS DEFECTOS NI QUE LA PLATAFORMA O CUALQUIER PARTE DE ELLA, LOS CONTENIDOS Y LOS SERVIDORES EN LOS QUE OPERA LA PLATAFORMA ESTÉN LIBRES DE VIRUS U OTROS ELEMENTOS PERJUDICIALES.SOUNDCLOUD NO GARANTIZA QUE LA TRANSMISIÓN DE LOS CONTENIDOS CARGADOS EN LA PLATAFORMA SEA SEGURA, QUE LOS ELEMENTOS DE LA PLATAFORMA DISEÑADOS PARA EVITAR EL ACCESO, EL USO O LA DESCARGA NO AUTORIZADOS DE LOS CONTENIDOS SEAN EFICACES EN TODOS LOS CASOS NI QUE EL USO QUE USTED REALICE DE LA PLATAFORMA SEA LEGAL EN UNA DETERMINADA JURISDICCIÓN.</p><p>SOUNDCLOUD Y SUS FILIALES, ENTIDADES VINCULADAS, SUCESORES Y CESIONARIOS Y SUS RESPECTIVOS EMPELADOS, AGENTES, CONSEJEROS, DIRECTIVOS Y ACCIONISTAS EXCLUYEN ESPECÍFICAMENTE TODAS LAS GARANTÍAS ANTERIORES EN LA MÁXIMA MEDIDA LEGALMENTE AUTORIZADA, ASÍ COMO CUALQUIER GARANTÍA EXPRESA O IMPLÍCITA RESPECTO A LA INEXISTENCIA DE VULNERACIONES, LA COMERCIABILIDAD Y LA IDONEIDAD PARA UN DETERMINADO FIN.</p><p>SI LA LEY DE UNA DETERMINADA JURISDICCIÓN LIMITA O PROHIBE LA EXCLUSIÓN DE LAS GARANTÍAS IMPLÍCITAS O DE OTRA CLASE ANTERIORMENTE ESTIPULADAS, LAS EXCLUSIONES ANTERIORES NO SERÁN DE APLICACIÓN EN LA MEDIDA EN QUE LA LEY DE DICHA JURISDICCIÓN SEA APLICABLE A ESTE CONTRATO.</p></div><div class="content-item"><h2 id="limitation_of_liability">Limitación de la responsabilidad</h2><p>SI TIENE UNA CUENTA PREMIUM, LA RESPONSABILIDAD TOTAL DE SOUNDCLOUD FRENTE A USTED NO EXCEDERÁ DE LAS CANTIDADES TOTALES ABONADAS POR USTED A SOUNDCLOUD DURANTE LOS DOCE (12) MESES ANTERIORES A SU RECLAMACIÓN.EN TODOS LOS DEMÁS CASOS, SI NO ESTÁ SATISFECHO CON LA PLATAFORMA, SU ÚNICA REPARACIÓN SERÁ DEJAR DE ACCEDER A LA PLATAFORMA Y DE UTILIZARLA.</p><p>SOUNDCLOUD Y SUS FILIALES, ENTIDADES VINCULADAS, SUCESORES Y CESIONARIOS Y SUS RESPECTIVOS EMPLEADOS, AGENTES, CONSEJEROS, DIRECTIVOS Y ACCIONISTAS NO TENDRÁN NINGUNA RESPONSABILIDAD POR:</p><ol class="roman"><li>LOS DAÑOS Y PERJUICIOS DERIVADOS DE:<ol><li>LA IMPOSIBILIDAD PARA USTED DE ACCEDER O UTILIZAR LA PLATAFORMA O PARTES DE LA MISMA O DE ACCEDER A CONTENIDOS O SERVICIOS EXTERNOS A TRAVÉS DE ELLA;</li><li>LOS CAMBIOS QUE SOUNDCLOUD PUEDA REALIZAR EN LA PLATAFORMA O CUALQUIER PARTE DE LA MISMA O LA SUSPENSIÓN O CESACIÓN TEMPORAL O PERMANENTE DEL ACCESO A LA PLATAFORMA EN O DESDE CUALESQUIERA TERRITORIOS;</li><li>LAS ACCIONES CONTRA USTED DE TERCEROS TITULARES DE DERECHOS POR SUPUESTA VIOLACIÓN DE SUS DERECHOS EN RELACIÓN CON SUS CONTENIDOS O SU USO DE LA PLATAFORMA O LAS ACCIONES ADOPTADAS EN EL MARCO DE UNA INVESTIGACIÓN DE SOUNDCLOUD O LAS AUTORIDADES COMPETENTES DE CUMPLIMIENTO DE LA LEY EN RELACIÓN CON SU USO DE LA PLATAFORMA;</li><li>ERRORES U OMISIONES EN EL FUNCIONAMIENTO TÉCNICO DE LA PLATAFORMA O POR INCORRECCIÓN O DEFECTOS EN LOS CONTENIDOS;</li><li>POR NO PROPORCIONAR USTED A SOUNDCLOUD INFORMACIÓN CORRECTA Y COMPLETA O NO MANTENER SU NOMBRE DE USUARIO Y SU CLAVE DEBIDAMENTE CONFIDENCIALES;</li></ol></li><li>LOS DAÑOS Y PERJUICIOS EN EL HARDWARE O SOFTWARE INFOMÁTICO, LA PÉRDIDA DE DATOS (INCLUIDOS SUS CONTENIDOS) Y LOS DAÑOS Y PERJUICIOS DERIVADOS DE INCUMPLIMIENTOS DE SEGURIDAD, O</li><li>LOS DAÑOS Y PJERUICIOS DE CUALQUIER CLASE O LOS PERJUICIOS QUE USTED SUFRA Y NO SEAN CONSECUENCIA PREVISIBLE DEL INCUMPLIMIENTO DE ESTAS CONDICIONES DE USO POR SOUNDCLOUD.SE CONSIDERARÁN PREVISIBLES AQUELLOS PERJUICIOS QUE PUDIERAN SER PREVISTOS POR USTED Y POR SOUNDCLOUD EN EL MOMENTO EN QUE USTED ACEPTE ESTAS CONDICIONES DE USO Y, POR TANTO, NO SE INCLUYEN LOS PERJUICIOS INDIRECTOS, COMO LA PÉRDIDA DE OPORTUNIDADES.</li></ol><p>LAS RECLAMACIONES Y ACCIONES DERIVADAS DE SU USO DE LA PLATAFORMA O RELACIONADAS CON EL MISMO DEBEN COMUNICARSE A SOUNDCLOUD A LA MAYOR BREVEDAD POSIBLE.</p><p>NADA DE LO ESTIPULADO EN ESTAS CONDICIONES DE USO LIMITA NI EXCLUYE LA RESPONSABILIDAD DE SOUNDCLOUD Y SUS FILIALES, ENTIDADES VINCULADAS, SUCESORES Y CESIONARIOS Y SUS RESPECTIVOS EMPLEADOS, AGENTES, CONSEJEROS, DIRECTIVOS Y ACCIONISTAS POR FALLECIMIENTO O LESIONES DEBIDOS A NEGLIGENCIA O A ACTOS U OMISIONES DELIBERADOS DE LOS ANTERIORES, POR CUALQUIER FORMA DE FRAUDE O ENGAÑO O POR CUALQUIER CLASE DE RESPONSABILIDAD QUE NO PUEDA LIMITARSE O EXCLUIRSE LEGALMENTE</p><p>LA LEY APLICABLE PUEDE NO PERMITIR TAMPOCO LA LIMITACIÓN O EXCLUSIÓN DE RESPONSABILIDAD POR PERJUICIOS INCIDENTALES O EMERGENTES, POR LO QUE LAS LIMITACIONES ANTERIORES PUEDEN NO SERLE DE APLICACIÓN A USTED.EN TALES CASOS, USTED RECONOCE Y ACEPTA QUE ESTAS LIMITACIONES Y EXCLUSIONES REFLEJAN UNA DISTRIBUCIÓN RAZONABLE Y EQUITATIVA DE LOS RIESGOS ENTRE USTED Y SOUNDCLOUD Y SON ELEMENTOS ESENCIALES DE LA NEGOCIACIÓN ENTRE AMBOS Y QUE LA RESPONSABILIDAD DE SOUNDCLOUD SE LIMITARÁ EN LA MÁXIMA MEDIDA LEGALMENTE AUTORIZADA.</p></div><div class="content-item"><h2 id="indemnification">Obligación de indemnización</h2><p>Usted se compromete a indemnizar, defender y mantener indemne a SoundCloud y a sus sucesores, cesionarios, entidades vinculadas, agentes, consejeros, directivos, empleados y accionistas frente a todas las reclamaciones, obligaciones, daños y perjuicios, pérdidas, gastos y costes, incluidos los honorarios razonables de abogados, derivados de:</p><ol class="roman"><li>su vulneración de estas Condiciones de Uso o nuestras <a href="http://soundcloud.com/community-guidelines">Normas de la Comunidad</a>;</li><li>las reclamaciones de terceros por vulneración de los derechos de autor u otros derechos de propiedad intelectual o la invasión de la privacidad a causa del hosting de Sus Contenidos en la Plataforma o de la puesta de los mismos a disposición de otros usuarios por usted en la Plataforma y del uso de Sus Contenidos por otros usuarios de la Plataforma o los Servicios Vinculados con arreglo a estas Condiciones de Uso y a los parámetros establecidos por usted para distribuir y compartir Sus Contenidos;</li><li>cualquier actividad relacionada con su cuenta, sea a cargo de usted o de otra persona que acceda a ella con o sin su consentimiento.</li></ol></div><div class="content-item"><h2 id="dataprotection">Protección de datos y privacidad</h2><p>Todos los datos personales que nos proporcione en relación con su uso de la Plataforma serán recogidos, almacenados, utilizados y revelados por SoundCloud con arreglo a nuestra <a href="http://soundcloud.com/pages/privacy">Política de Privacidad</a>.Al aceptar estas Condiciones de Uso y utilizar la Plataforma, usted acepta también los términos de la <a href="http://soundcloud.com/pages/privacy">Política de Privacidad</a>, que quedan incorporados al presente Contrato por referencia.</p></div><div class="content-item"><h2 id="meetups">Encuentros</h2><p>SoundCloud tiene una comunidad activa de usuarios, muchos de los cuales organizan y asisten a encuentros cara a cara en distintos lugares del mundo (los “Encuentros”).Aunque SoundCloud respalda en general estos Encuentros y puede proporcionar materiales promocionales de marca para ayudar a los organizadores a promoverlos, no los patrocina, supervisa ni controla en modo alguno.Usted declara y conviene que su asistencia y participación en los Encuentros queda enteramente a su propio riesgo y que SoundCloud no tiene ninguna responsabilidad por los actos de sus usuarios o de terceros que organicen, asistan o intervengan de cualquier otro modo en estos Encuentros.</p></div><div class="content-item"><h2 id="competitions">Competiciones y otras promociones</h2><p>Los usuarios de SoundCloud® pueden promover en distintos momentos competiciones, promociones, sorteos de premios y otras oportunidades similares en la Plataforma (las <strong>“Competiciones de Terceros”</strong>).SoundCloud no es el patrocinador ni el promotor de estas Competiciones de Terceros y no asumirá ninguna responsabilidad por los actos u omisiones de terceros que organicen, gestionen o intervengan de otro modo en su promoción.Si desea participara en alguna de estas Competiciones de Terceros, es responsabilidad suya leer los términos y condiciones aplicables a la actividad en cuestión y asegurarse de que entiende las reglas y los requisitos de participación y está legalmente facultado para participar en tales Competiciones de Terceros en su país de residencia.</p></div><div class="content-item"><h2 id="use_of_player">Uso del reproductor y el widget de SoundCloud</h2><p>Los Servicios incluyen la posibilidad para los usuarios de integrar el reproductor de forma de onda de SoundCloud y un reproductor plenamente personalizable (<strong>“Widget”</strong>) en otros sitios web, incluidos, entre otros, su propio sitio web o el sitio web de un tercero o un perfil de medios sociales, sea o no un Servicio Vinculado.La finalidad de esta funcionalidad es permitir a los Cargadores colocar sus Contenidos donde deseen y permitir a otros usuarios de la Plataforma compartir y distribuir Contenidos dentro de los parámetros establecidos por el Cargador.</p><p>Usted no podrá integrar el reproductor de forma de onda ni usar el Widget sin la previa autorización escrita de SoundCloud para incluir Contenidos de la Plataforma (excepto Sus Contenidos) en otro destino que replique sustancialmente la oferta del Sitio Web o incluya un servicio de contenidos del cual formen parte sustancial los Contenidos de la Plataforma.Del mismo modo, usted no podrá utilizar sin la previa autorización escrita de SoundCloud el reproductor de forma de onda ni el Widget para incluir Contenidos de la Plataforma (excepto Sus Contenidos) en cualquier sitio web o en otro destino dedicado a un artista o género concreto ni utilizar el reproductor de forma de onda o el Widget de cualquier modo que indique que SoundCloud o cualquier artista u otro tercero avala o respalda su sitio web o su uso del reproductor de forma de onda o el Widget.Lo anterior será de aplicación con independencia de que el uso sea o no de naturaleza comercial.</p><p>SoundCloud se reserva el derecho a bloquear el uso del Widget por usted en cualquier momento y por cualquier motivo, a su exclusiva discreción.</p></div><div class="content-item"><h2 id="premium">Cuentas premium</h2><p>Algunas funciones de la Plataforma sólo están disponibles para los usuarios que registren y paguen una cuenta premium.Puede obtenerse <a href="http://soundcloud.com/premium?ref=top">aquí</a> una descripción detallada de nuestras cuentas premium, incluidos los precios y las funciones incluidas en cada tipo de cuenta.</p><p>Las cuotas de las cuentas premium se pagan al inicio del período de suscripción, y el primer pago, en el momento de celebrar el contrato, a menos que se indique otra cosa.Si elige alguna de nuestras cuentas mensuales, su cuenta se renovará automáticamente al final de cada período mensual, realizándose en ese momento el pago del siguiente período mensual, a menos que usted cancele o cierre su cuenta con arreglo a lo establecidomás adelante en el apartado <a href="#termination">Extinción del Contrato y derecho de cancelación</a>.Las cuentas anuales tienen una duración de doce meses desde la fecha de celebración del contrato y expiran automáticamente al término de este período, a menos que usted opte por renovar su suscripción.Si renueva su suscripción anual, pagará en ese momento el siguiente período de doce meses.</p><p>Los pagos vencen sin necesidad de factura y pueden realizarse a través de Visa, Mastercard o PayPal.Todos los pagos incluyen el IVA u otro impuesto de ventas aplicable.Si el gestor de la tarjeta de crédito impone tasas de gestión para tramitar su pago, podremos añadir el importe de dichas tasas a la cuantía total pagada por el servicio (las tasas de gestión suelen ser del 1% al 3% de la suma a pagar).</p><p>Si tiene un código de obsequio, simplemente consígnelo en la casilla de “Su código de promoción” durante el proceso de registro de la cuenta premium.Los códigos de obsequio pueden utilizarse durante un período de tres años.SoundCloud no puede ofrecer ninguna clase de devolución o cambio por los códigos de obsequio no empleados en este período.</p><p>Una vez realizado el pago o aceptado el código de obsequio, enviaremos un correo electrónico de confirmación a la dirección que usted facilite en el proceso de registro.No se habrá celebrado ningún contrato hasta que reciba este correo electrónico de confirmación.La realización del proceso de registro es meramente una oferta de celebrar de contrato y no constituye en sí misma la celebración del contrato.El idioma del contrato será el inglés.</p><p>Si desea elevar la categoría de su cuenta, puede hacerlo en cualquier momento.Si desea reducirla, puede hacerlo al término del período de suscripción en curso.</p><p>Los consumidores de la Unión Europea tienen derecho a cancelar las cuentas premium durante un período de siete (7) días desde su formalización.La descripción detallada figura más adelante en el apartado <a href="#termination">Extinción del Contrato y derecho de cancelación</a>.</p></div><div class="content-item"><h2 id="changes_to_platform">Cambios en la Plataforma, las cuentas y los precio</h2><p>SoundCloud se reserva el derecho a cambiar, modificar, retirar o interrumpir cualquiera de las funciones o características, los servicios y las funcionalidades de la Plataforma en cualquier momento y por cualquier motivo, con o sin previo aviso.SoundCloud se reserva también el derecho a suspender, interrumpir, cerrar o dejar de proporcionar acceso a la Plataforma o a cualquier parte de la misma en cualquier momento y por cualquier motivo, de forma temporal o permanente, en su totalidad o únicamente para determinados territorios.En caso de suspensión, interrupción, cierre o fin del acceso de carácter temporal o permanente, SoundCloud tratará razonablemente de comunicar previamente su propósito a los usuarios registrados.</p><p>Usted acepta en este acto que SoundCloud y sus filiales, entidades vinculadas, sucesores, cesionarios, empleados, agentes, consejeros, directivos y accionistas no serán responsables frente a usted ni frente a terceros por los cambios y modificaciones del Sitio Web o los Servicios que SoundCloud pueda desear realizar en cada momento ni por las decisiones de suspender, interrumpir o cerrar el Sitio Web, los Servicios o cualquier parte de los mismos o su posibilidad de acceder a ellos o utilizarlos desde cualesquiera territorios o dentro de éstos.</p><p>SoundCloud podrá cambiar las características o funciones de cualquier tipo de cuenta, retirar o introducir nuevos tipos de cuentas en cualquier momento y por cualquier motivo y cambiar los precios cobrados por sus cuentas premium en cada momento.En caso de cambios en los precios o las funciones o características de una cuenta premium suscrita por usted, dichos cambios se le comunicarán y sólo surtirán efecto en la siguiente renovación de su suscripción.En todos los demás casos, si SoundCloud tuviera el propósito de realizar cambios en cualquier tipo de cuenta suscrita por usted y estos cambios fueran sustanciales y perjudiciales para usted, SoundCloud se los comunicará con al menos seis (6) semanas de antelación mediante el envío de un mensaje a su cuenta SoundCloud® y un correo electrónico a la dirección vigente que tengamos para su cuenta.Usted no tendrá obligación de continuar utilizando la Plataforma tras la notificación, pero si no cierra su cuenta conforme a lo expuesto más adelante en el apartado de <a href="#termination">Extinción del Contrato y derecho de cancelación</a> durante este período de seis (6) semanas, la continuación del uso de la cuenta una vez transcurrido dicho período constituirá una aceptación por usted de los cambios introducidos en ella.</p></div><div class="content-item"><h2 id="termination">Extinción del Contrato y derecho de cancelación (“Widerrufsrecht”)</h2><h3>Extinción del Contrato:</h3><p>Usted podrá resolver este Contrato en cualquier momento mediante notificación escrita a SoundCloud en Rosenthalerstr 13, 10119 Berlín, Alemania, en la que confirme la extinción del Contrato, o retirando la totalidad de Sus Contenidos de su cuenta, eliminando dicha cuenta y cesando en lo sucesivo de utilizar la Plataforma.Si tiene una cuenta premium, dejaremos de cobrarle desde el primer día del mes siguiente a la recepción de su notificación de extinción del Contrato, pero no podemos ofrecer ninguna devolución por el período no transcurrido de su suscripción.</p><p>SoundCloud podrá suspender su acceso a la Plataforma y/o resolver el Contrato en cualquier momento si (i) usted tiene la consideración de <a href="#repeated_infringement">Infractores reiterado</a> en los términos anteriormente descritos; (ii) usted incumple alguna estipulación sustancial de estas Condiciones de Uso o nuestras <a href="http://soundcloud.com/community-guidelines">Normas de la Comunidad</a>, incluidas, entre otras, las de los siguientes apartados: <a href="#use">Uso de la Plataforma</a>, <a href="#content">Sus Contenidos</a>, <a href="#license">Otorgamiento de licencia</a> y <a href="#representations">Declaraciones y garantías</a>; (iii) SoundCloud decide, a su exclusiva discreción, dejar de proporcionar acceso a la Plataforma en la jurisdicción en que usted reside o desde la que trata de acceder a ella, o (iv) en otros supuestos razonables que SoundCloud determine a su discreción.Si tiene una cuenta premium suspendida o cerrada por SoundCloud en aplicación de los anteriores subapartados (i) o (ii), no tendrá derecho a ninguna devolución por el período no transcurrido de su suscripción.En caso de cierre de su cuenta por los supuestos (iii) o (iv), podrá abonarse un reembolso a razonable discreción de SoundCloud.</p><h3>Cancelación:</h3><p>Si usted es un consumidor de la Unión Europea, dispondrá además de un plazo de siete (7) días para cancelar las cuentas que haya registrado con nosotros o los códigos de obsequio que haya adquirido.Deberá ponerse en contacto con nosotros por correo electrónico, carta o fax para confirmar la cancelación, sin necesidad de indicar los motivos.</p><p>Por otra parte, si usted cambia de una cuenta gratuita a una cuenta premium, dispondrá de siete (7) días desde la fecha del cambio para cancelar su cuenta premium.También en este caso deberá ponerse en contacto con nosotros por correo electrónico, carta o fax, sin necesidad de indicar los motivos de la cancelación.</p><p>En ambos casos, el plazo de cancelación de siete (7) días comenzará a contarse en la fecha en la que se confirme el registro de su cuenta o el cambio de cuenta o la compra de su código de obsequio.</p><p>Para ejercitar su derecho de cancelación, debe ponerse en contacto con nosotros en la dirección siguiente:</p><p>SoundCloud Ltd. <br>Rosenthaler Straße 13 <br>10119 Berlin<br>Fax: +49 30 577 098 860 <br><a href="mailto:contact@soundcloud.com">contact@soundcloud.com</a></p><p>Si cancela una cuenta premium o la compra de un código de obsequio con arreglo a este procedimiento, le devolveremos los pagos que haya realizado por la cuenta o la compra en el plazo de treinta (30) días desde la fecha de recepción de su notificación válida de cancelación.</p><p><strong>Tenga en cuenta que perderá su derecho a cancelar su cuenta si entra en ella o utiliza su código de obsequio durante el período de siete (7) días de cancelación.</strong></p><p>Para los consumidores de Alemania, este derecho de revocación se denomina widerruftsrecht.Puede obtenerse más información en alemán sobre este derecho en <a href="http://soundcloud.com/premium/widerrufsrecht">http://soundcloud.com/premium/widerrufsrecht</a>.</p><p>Una vez recibida la notificación de cancelación, SoundCloud eliminará su cuenta y todos los Contenidos y datos asociados a ella.Por tanto, le recomendamos que retire, copie o haga una copia de respaldo de los Contenidos de su cuenta antes de enviarnos su notificación de cancelación.</p><p>Las estipulaciones de estas Condiciones de Uso que por su naturaleza deban subsistir tras la extinción o cancelación del Contrato subsistirán una vez extinguido éste, entre otras las tituladas <a href="#account">Su cuenta SoundCloud</a>, <a href="#content">Sus Contenidos</a>, <a href="#license">Otorgamiento de licencia</a>, <a href="#representations">Declaraciones y garantías</a>, <a href="#liability">Responsabilidad por los Contenidos</a>, <a href="#disclaimer">Exclusión de garantías</a>, <a href="#liability">Limitación de la responsabilidad</a>, <a href="#indemnification">Obligación de indemnización</a>, <a href="#termination">Extinción del Contrato y derecho de cancelación</a>, <a href="#assignment">Cesión a terceros</a>, <a href="#severability">Exclusión de cláusulas</a>, <a href="#entire_agreement">Integridad del Contrato</a>, and <a href="#applicable_law">y Ley aplicable y jurisdicción competente</a>, respectivamente.</p></div><div class="content-item"><h2 id="assignment">Cesión a terceros</h2><p>SoundCloud podrá ceder en cualquier momento sin necesidad de notificación la totalidad o parte de sus derechos y (cuando así lo autorice la ley) sus obligaciones derivados de este Contrato a terceros, incluidos, entre otros, cualquier persona o entidad que adquiera la totalidad o parte sustancial de sus activos o su negocio.Usted no podrá ceder total o parcialmente a terceros el Contrato ni los derechos y las obligaciones derivados del mismo sin la previa autorización escrita de SoundCloud.</p></div><div class="content-item"><h2 id="severability">Exclusión de cláusulas</h2><p>Si alguna estipulación de estas Condiciones de Uso resultara ilegal, nula o inaplicable, se considerará eliminable y no afectará a la validez y aplicabilidad de las restantes, que conservarán plena vigencia y eficacia.</p></div><div class="content-item"><h2 id="entire_agreement">Integridad del Contrato</h2><p>Estas Condiciones de Uso, junto con las <a href="http://soundcloud.com/community-guidelines">Normas de la Comunidad</a> y la <a href="http://soundcloud.com/pages/privacy">Política de Privacidad</a> (las cuales quedan incorporadas a las presentes Condiciones de Uso por referencia), constituyen la totalidad del acuerdo entre usted y SoundCloud con respecto a su uso de la Plataforma (excepto el uso de las API de SoundCloud sujetas a Condiciones de Uso específicas) y sustituyen a cualquier otro acuerdo previo entre usted y SoundCloud.Las modificaciones del presente Contrato deberán hacerse en todo caso por escrito.</p></div><div class="content-item"><h2 id="third_party_rights">Derechos de terceros</h2><p>Estas Condiciones de Uso no tienen por objeto conferir derechos a terceros distintos de usted y SoundCloud.Ello no afecta a nuestra facultad de ceder nuestros derechos y obligaciones a terceros conforme a lo establecido en el apartado <a href="#assignment">Cesión a terceros</a></p></div><div class="content-item"><h2 id="applicable_law">Ley aplicable y jurisdicción competente</h2><p>A menos que la ley imperativa de Estados Unidos o algún Estado miembro de la Unión Europea exija otra cosa:</p><ol class="roman"><li>este Contrato está sujeto a la ley de la República Federal de Alemania, excluida la Convención de las Naciones Unidas sobre los Contratos de Compraventa Internacional de Mercaderías y los principios de conflicto de leyes (derecho internacional privado), y</li><li>usted acepta expresamente y SoundCloud conviene someterse a la jurisdicción exclusiva de los tribunales de Berlín, Alemania, para la resolución de todas las controversias, acciones y procedimientos que pudieran surgir en relación con el presente Contrato.</li></ol><p>Las estipulaciones anteriores de este apartado no son de aplicación a las reclamaciones en las que SoundCloud solicite una reparación de equidad de cualquier clase.Usted reconoce que en caso de incumplimiento de estas Condiciones de Uso por SoundCloud o por terceros, los daños y perjuicios que, en su caso, pudieran causársele a usted no le facultarán para solicitar medidas judiciales cautelares o provisionales de protección u otras reparaciones de equidad contra SoundCloud, entre otras cosas con respecto a Sus Contenidos, y que su única reparación será la indemnización económica, con las limitaciones de responsabilidad establecidas en estas Condiciones de Uso.</p></div><div class="content-item"><h2 id="disclosures">Información</h2><p>Los servicios objeto de este Contrato están ofrecidos por SoundCloud Limited, con sede en Rosenthaler Straße 13, 10119 Berlín, Alemania.Puede obtener más información sobre SoundCloud <a href="http://soundcloud.com/imprint">aquí</a>.Puede ponerse en contacto con nosotros por correo postal en la dirección anterior o por correo electrónico en contact@soundcloud.com.Si reside en el Estado de California, puede solicitar el envío electrónico de estas Condiciones de Uso enviando una carta a la dirección anteriormente señalada e indicando en ella su dirección de correo electrónico y solicitando las Condiciones de Uso.</p></div><div class="content-item">Fecha de eficacia: 1 May 2012</div></div>');
        }
        return _;
    }
    $.template["static/terms-of-use"] = function anonymous(jQuery, $item) {
        var $ = jQuery,
            call, _ = [],
            $data = $item.data;
        with($data) {
            _.push('<div id="terms-of-use" class="page-content text-content static-content"><div class="content-item"><h1>SoundCloud Terms of Use</h1><p>Welcome to SoundCloud®, a service provided by SoundCloud Limited (“<strong>SoundCloud</strong>”, “<strong>we</strong>” “<strong>our</strong>”, or “<strong>us</strong>”).</p><p>These Terms of Use govern your use of SoundCloud.com (the “<strong>Website</strong>”), and all related players, widgets, tools, apps, data, software, APIs (which may also be subject to separate API Terms of Use) and other services provided by SoundCloud (the “<strong>Services</strong>”).</p><p>These Terms of Use, together with our Privacy Policy and Community Guidelines, constitute a legally binding agreement (the “<strong>Agreement</strong>”) between you and SoundCloud in relation to your use of the Website and the Services (together, the “<strong>Platform</strong>”).</p><p>These Terms of Use are divided into the following sections:</p><ul class="bullet"><li><a href="#acceptance">Acceptance of Terms of Use</a><p>Basically, by using SoundCloud® you accept our Terms of Use, <a href="/pages/privacy">Privacy Policy</a> and <a href="http://soundcloud.com/community-guidelines">Community Guidelines</a> and agree to abide by them.</p></li><li><a href="#changes">Changes to Terms of Use</a><p>This section explains that our Terms of Use may change from time to time.</p></li><li><a href="#platform">Description of the Platform</a><p>This provides a general description of the Platform, its features and functionality.</p></li><li><a href="#account">Your SoundCloud Account</a><p>This section explains your responsibilities should you choose to register for a SoundCloud® account.</p></li><li><a href="#use">Your Use of the Platform</a><p>This section sets out your right to use the Platform, and the conditions that apply to your use of the Platform.</p></li><li><a href="#content">Your Content</a><p>This section deals with ownership of your content, and includes your agreement not to upload anything that infringes on anyone else’s rights.</p></li><li><a href="#license">Grant of Licence</a><p>This section explains how your content will be used on SoundCloud® and the permissions that you grant by uploading your content - for example, the right for other users to listen to your sounds.</p></li><li><a href="#representations">Representations and Warranties</a><p>This section includes important promises and guarantees that you give when uploading content to SoundCloud® - in particular, your promise that everything you upload and share is owned by you and won’t infringe anyone else’s rights.</p></li><li><a href="#liability">Liability for Content</a><p>This section explains that SoundCloud is a hosting service and that its users are solely liable for material that they upload to SoundCloud®.</p></li><li><a href="#infringements">Reporting Infringements</a><p>This section explains how to notify us of any content on SoundCloud® that you believe infringes your copyright or any other intellectual property right, or that is offensive, abusive, defamatory or otherwise contrary to our <a href="http://soundcloud.com/community-guidelines">Community Guidelines</a>. You can find further information on reporting copyright infringement on our <a href="http://soundcloud.com/pages/copyright">Copyright Information</a> pages.</p></li><li><a href="#thirdparty">Third Party Websites and Services</a><p>Through SoundCloud® you may have access to other websites and services. This section explains that these are separate third party services that are not under the control of SoundCloud.</p></li><li><a href="#blocking">Blocking and Removal of Content </a><p>This section makes it clear that SoundCloud may block or remove content from the Platform.</p></li><li><a href="#repeated_infringement">Repeat Infringers</a><p>Users who repeatedly infringe third party rights or breach our <a href="http://soundcloud.com/community-guidelines">Community Guidelines</a> risk having their SoundCloud® accounts suspended or terminated, as explained in this section.</p></li><li><a href="#disclaimer">Disclaimer </a><p>This section explains that SoundCloud® cannot give any guarantees that the Platform will always be available – sometimes even a platform as awesome as ours will have a few problems.</p></li><li><a href="#limitation_of_liability">Limitation of Liability</a><p>This section explains some of those things that SoundCloud will not be liable for. Please make sure you read and understand this section.</p></li><li><a href="#indemnification">Indemnification</a><p>If you use the Platform in a way that results in damage to us, you will need to take responsibility for that.</p></li><li><a href="#dataprotection">Data Protection and Privacy</a><p>It is really important to us that you understand how we use your personal information. All information is collected, stored and used in accordance with our <a href="/pages/privacy">Privacy Policy</a>, so please make sure that you read and understand that policy.</p></li><li><a href="#meetups">Meetups</a><p>This section deals with SoundCloud® meetups and explains that these are not “official’ SoundCloud events, so we cannot be responsible for anything that happens at meetups.</p></li><li><a href="#competitions">Competitions and Other Promotions</a><p>This section deals with competitions, contests and sweepstakes on SoundCloud®. These are not run by SoundCloud, and therefore we cannot be responsible for them.</p></li><li><a href="#use_of_player">Use of SoundCloud Player and Widget</a><p>This section includes a few restrictions on how you can use our players and widgets – basically, don’t try to use our players to create a new music streaming service.</p></li><li><a href="#premium">Premium Accounts</a><p>This section explains what happens when you set up a premium account.</p></li><li><a href="#changes_to_platform">Changes to the Platform, Accounts and Pricing</a><p>From time to time, we may need to make some changes to SoundCloud®. This section explains your rights in this situation.</p></li><li><a href="#termination">Termination and Right of Cancellation</a><p>This section explains how you can terminate your SoundCloud® account, and the grounds on which we can terminate your use of SoundCloud®. If you are a consumer in the European Union and have registered for a premium account, this section also explains your right to cancel your premium account in certain circumstances - your right of revocation (in German: “widerrufsbelehrung”)</p></li><li><a href="#assignment">Assignment to Third Parties</a><p>This section deals with SoundCloud’s right to transfer this agreement to someone else.</p></li><li><a href="#severability">Severability</a><p>This is a standard legal provision, which says that any term that is not valid will be removed from the agreement without affecting the validity of the rest of the agreement.</p></li><li><a href="#entire_agreement">Entire Agreement</a><p>Your use of SoundCloud® is governed by these Terms of Use, our <a href="/pages/privacy">Privacy Policy</a> and our <a href="http://soundcloud.com/community-guidelines">Community Guidelines</a>only, and any changes need to be made in writing.</p></li><li><a href="#third_party_rights">Third Party Rights</a><p>These Terms of Use apply to the relationship between you and SoundCloud only.</p></li><li><a href="#applicable_law">Applicable Law and Jurisdiction</a><p>All of our documents are generally governed by German law.</p></li><li><a href="#disclosures">Disclosures</a><p>This section provides information about SoundCloud, including how to contact us.</p></li></ul></div><div class="content-item"><h2 id="acceptance">Acceptance of Terms of Use</h2><p>Please read these Terms of Use, and our <a href="/pages/privacy">Privacy Policy</a>and <a href="http://soundcloud.com/community-guidelines">Community Guidelines</a> , very carefully. <strong>If you do not agree to any of the provisions set out in those documents, you should not use the Website or any of the Services</strong>. By accessing or using the Platform, registering an account, or by viewing, accessing, streaming, uploading or downloading any information or content from or to the Platform, you represent and warrant that you have read and understood the Terms of Use, <a href="/pages/privacy">Privacy Policy</a> and <a href="http://soundcloud.com/community-guidelines">Community Guidelines</a>, will abide by them, and that you are either 18 years of age or more, or you are 13 years of age or more and have your parent(s)’ or legal guardian(s)’ permission to use the Platform.</p></div><div class="content-item"><h2 id="changes">Changes to Terms of Use</h2><p>We reserve the right to change, alter, replace or otherwise modify these Terms of Use, and our <a href="http://soundcloud.com/community-guidelines">Community Guidelines</a> and <a href="/pages/privacy">Privacy Policy</a>, at any time. The date of last modification is stated at the end of these Terms of Use. It is your responsibility to check this page from time to time for updates.</p><p>When we make any updates to these Terms of Use, we will highlight this fact on the Website. In addition, if you register an account and these Terms of Use are subsequently changed in any material respect (for example, for security, legal, or regulatory reasons), we will notify you in advance by sending a message to your SoundCloud® account and an email to the email address that you have provided to us, and the revised Terms of Use will become effective six (6) weeks after such notification. You will have no obligation to continue using the Platform following any such notification, but if you do not terminate your account as described in the <a href="#termination">Termination and Right of Cancellation</a> section below during such six (6) week period, your continued use of the Platform after the end of that six (6) week period will constitute your acceptance of the revised Terms of Use.</p></div><div class="content-item"><h2 id="platform">Description of the Platform</h2><p>The Platform is a hosting service. Registered users of the Platform may submit, upload and post audio, text, photos, pictures, graphics, comments, and other content, data or information (“<strong>Content</strong>”), which will be stored by SoundCloud at the direction of such registered users, and may be shared and distributed by such registered users, and other users of the Platform, using the tools and features provided as part of the Services and accessible via the Website and elsewhere. The Platform also enables registered users to interact with one another and to contribute to discussions, and enables any user of the Website or certain Services (whether or not registered users of the Platform) to view, listen to and share Content uploaded and made available by registered users.</p><p>We may, from time to time, release new tools and resources on the Website, or other services and/or features for the Platform. Any new services and features will be subject to these Terms of Use as well as any additional terms of use that we may release for those specific services or features.</p></div><div class="content-item"><h2 id="account">Your SoundCloud Account</h2><p>You are not obliged to register to use the Platform. However, access to certain Services is only available to registered users.</p><p>When you register to use the Platform, you will provide us with your email address, and will choose a username and password for your account. You must ensure that the email address that you provide is, and remains, valid. Your email address and any other information you chose to provide about yourself will be treated in accordance with our <a href="/pages/privacy">Privacy Policy</a>.</p><p>You are solely responsible for maintaining the confidentiality and security of your username and password, and you will remain responsible for all use of your username and password, and all activity emanating from your account, whether or not such activity was authorized by you.</p><p>If your username or password is lost or stolen, or if you believe that your account has been accessed by unauthorized third parties, you are advised to notify SoundCloud in writing, and should change your password at the earliest possible opportunity.</p><p>We reserve the right to disallow, cancel, remove or reassign certain usernames in appropriate circumstances, as determined by us in our sole discretion, and may, with or without prior notice, suspend or terminate your account if activities occur on that account which, in our sole discretion, would or might constitute a violation of these Terms of Use or our <a href="http://soundcloud.com/community-guidelines">Community Guidelines</a>, or an infringement or violation of the rights of any third party, or of any applicable laws or regulations.</p><p>You may terminate your account at any time as described in the <a href="#termination">Termination and Right of Cancellation</a> section below. Any attempt to terminate your account by means other than those described in the <a href="#termination">Termination and Right of Cancellation</a> section will not be considered a proper termination.</p><p>Once your account has been terminated or cancelled, any and all Content residing in your account, or pertaining to activity from your account (for example, data relating to the distribution or consumption of your sounds), will be irretrievably deleted by SoundCloud, except to the extent that we are obliged or permitted to retain such content, data or information for a certain period of time in accordance with applicable laws and regulations and/or to protect our legitimate business interests. You are advised to save or back up any material that you have uploaded to your account before terminating or cancelling your account, as SoundCloud assumes no liability for any material that is irretrievably deleted following any cancellation of your account. SoundCloud is not able to provide you with any .csv or other similar file of data relating to activity associated with your account, whether before or after termination or cancellation. This data is provided and is accessible only for viewing via your account page on the Website for as long as your account is active.</p></div><div class="content-item"><h2 id="use">Your Use of the Platform</h2><p>Subject to your strict compliance with these Terms of Use and our <a href="http://soundcloud.com/community-guidelines">Community Guidelines</a>, SoundCloud grants you a limited, personal, non-exclusive, revocable, non-assignable and non-transferable right and licence to use the Platform in order to view Content uploaded and posted to the Website, to listen to audio Content streamed from the Platform and to share and download audio Content where the appropriate functionality has been enabled by the user who uploaded the relevant Content (the “<strong>Uploader</strong>”).</p><p>In addition, if you register to use the Platform, and subject to your strict compliance with these Terms of Use and our <a href="http://soundcloud.com/community-guidelines">Community Guidelines</a>, SoundCloud grants you a limited, personal, non-exclusive, revocable, non-assignable and non-transferable right and licence to:</p><ol class="roman"><li>submit, upload or post Content to the Platform strictly as permitted in accordance with these Terms of Use and any other applicable terms posted on the Website from time to time;</li><li>participate in the community areas and communicate with other members of the SoundCloud® community strictly in accordance with these Terms of Use and our <a href="http://soundcloud.com/community-guidelines">Community Guidelines</a>; and</li><li>use the Services provided as part of the Platform strictly as permitted in accordance with these Terms of Use and any other terms applicable to those Services from time to time.</li></ol><p>The above licences are conditional upon your strict compliance with these Terms of Use and our <a href="http://soundcloud.com/community-guidelines">Community Guidelines</a>, including, without limitation, the following:</p><ol class="roman"><li>You must not copy, rip or capture, or attempt to copy, rip or capture, any audio Content from the Platform or any part of the Platform, other than by means of download in circumstances where the relevant Uploader has enabled the download functionality with respect to the relevant item of Content.</li><li>You must not adapt, copy, republish, make available or otherwise communicate to the public, display, perform, transfer, share, distribute or otherwise use or exploit any Content on or from the Platform, except (i) where such Content is Your Content, or (ii) as permitted under these Terms of Use, and within the parameters set by the Uploader (for example, under the terms of Creative Commons licences selected by the Uploader).</li><li>You must not use any Content (other than Your Content) in any way that is designed to create a separate content service or that replicates any part of the Platform offering.</li><li>You must not employ scraping or similar techniques to aggregate, repurpose, republish or otherwise make use of any Content.</li><li>You must not make use of any bots, botnets, spiders, data mining tools, automated scripts, apps, plugins or extensions with respect to the Platform or any Content regardless of the configuration or mode of operation of the same, including without limitation any of the foregoing that automatically generates messages, plays audio Content, generates comments or favourites any Content or posts any activities. This does not apply to any apps, plugins or extensions officially released by SoundCloud and constituting Services hereunder, or any legitimate means employed solely for using and connecting to the SoundCloud® API (Application Programming Interface), provide such connection is strictly in accordance with any separate API Terms of Use.</li><li>You must not alter or remove, attempt to alter or remove, any trademark, copyright or other proprietary or legal notices contained in, or appearing on, the Platform or any Content appearing on the Platform (other than Your Content).</li><li>You must not, and must not permit any third party to, copy or adapt the object code of the Website or any of the Services, or reverse engineer, reverse assemble, decompile, modify or attempt to discover any source or object code of any part of the Platform, or circumvent or attempt to circumvent or copy any copy protection mechanism or access any rights management information pertaining to Content other than Your Content.</li><li>You must not use the Platform to upload, post, store, transmit, display, copy, distribute, promote, make available or otherwise communicate to the public:<ol><li>any Content that is offensive, abusive, libellous, defamatory, obscene, racist, sexually explicit, ethnically or culturally offensive, indecent, that promotes violence, terrorism, or illegal acts, incites hatred on grounds of race, gender, religion or sexual orientation, or is otherwise objectionable in SoundCloud’s reasonable discretion;</li><li>any information, Content or other material that violates, plagiarises, misappropriates or infringes the rights of third parties including, without limitation, copyright, trademark rights, rights of privacy or publicity, confidential information or any other right; or</li><li>any material of any kind that contains any virus, Trojan horse, spyware, adware, malware, bot, time bomb, worm, or other harmful or malicious component, which or might overburden, impair or disrupt the Platform or servers or networks forming part of, or connected to, the Platform, or which does or might restrict or inhibit any other user\'s use and enjoyment of the Platform; or</li><li>any unsolicited or unauthorised advertising, promotional messages, spam or any other form of solicitation.</li></ol></li><li>You must not commit or engage in, or encourage, induce, solicit or promote, any conduct that would constitute a criminal offence, give rise to civil liability or otherwise violate any law or regulation.</li><li>You must not rent, sell or lease access to the Platform, or any Content on the Platform, although this shall not prevent you from including links from Your Content to any legitimate online download store from where any item of Your Content may be purchased.</li><li>You must not make use of any bots, botnets, automated scripts, apps, plugins or extensions or other automated or electronic means to artificially increase your playcount, add followers or otherwise to misrepresent the popularity of Your Content on the Platform, or offer or promote the availability of any such means to any other users of the Platform.</li><li>You must not deliberately impersonate any person or entity or otherwise misrepresent your affiliation with a person or entity, for example, by registering an account in the name of another person or company, or sending messages or making comments using the name of another person.</li><li>You must not stalk, exploit, threaten, abuse or otherwise harass another user, or any SoundCloud employee.</li><li>You must not use or attempt to use another person\'s account, password, or other information, unless you have express permission from that other person.</li><li>You must not sell or transfer, or offer to sell or transfer, any SoundCloud account to any third party without the prior written approval of SoundCloud.</li><li>You must not collect or attempt to collect personal data, or any other kind of information about other users, including without limitation, through spidering or any form of scraping.</li><li>You must not use any automatic means of accessing, logging-in or registering accounts on the Platform.</li><li>You must not violate, circumvent or attempt to violate or circumvent any data security measures employed by SoundCloud or any Uploader; access or attempt to access data or materials which are not intended for your use; log into, or attempt to log into, a server or account which you are not authorized to access; attempt to scan or test the vulnerability of SoundCloud’s servers, system or network or attempt to breach SoundCloud’s data security or authentication procedures; attempt to interfere with the Website or the Services by any means including, without limitation, hacking SoundCloud’s servers or systems, submitting a virus, overloading, mail-bombing or crashing. Without limitation to any other rights or remedies of SoundCloud under these Terms of Use, SoundCloud reserves the right to investigate any situation that appears to involve any of the above, and may report such matters to, and co-operate with, appropriate law enforcement authorities in prosecuting any users who have participated in any such violations.</li></ol><p>You agree to comply with the above conditions, and acknowledge and agree that SoundCloud has the right, in its sole discretion, to terminate your account or take such other action as we see fit if you breach the above conditions or any of the other terms of these Terms of Use. This may include taking court action and/or to report offending users to the relevant authorities.</p></div><div class="content-item"><h2 id="content">Your Content</h2><p>Any and all audio, text, photos, pictures, graphics, comments, and other content, data or information that you upload, store, transmit, submit, exchange or make available to or via the Platform (hereinafter "<strong>Your Content</strong>") is generated, owned and controlled solely by you, and not by SoundCloud.</p><p>SoundCloud does not claim any ownership rights in Your Content, and you hereby expressly acknowledge and agree that Your Content remains your sole responsibility.</p><p>Without prejudice to the conditions set forth in <a href="#use">Your Use of the Platform</a>, you must not upload, store, distribute, send, transmit, display, perform, make available or otherwise communicate to the public any Content to which you do not hold the necessary rights. In particular, <strong>any unauthorized use of copyright protected material within Your Content (including by way of reproduction, distribution, modification, adaptation, public display, public performance, preparation of derivative works, making available or otherwise communicating to the public via the Platform) may constitute an infringement of third party rights and is <em>strictly prohibited</em></strong>. Any such infringements may result in termination of your access to the Platform as described in the <a href="#repeated_infringement">Repeat Infringers</a> section below, and may also result in civil litigation or criminal prosecution by or on behalf of the relevant rightsholder.</p><p>We may, from time to time, invite or provide you with means to provide feedback regarding the Platform, and in such circumstances, any feedback you provide will be deemed non-confidential and SoundCloud shall have the right, but not the obligation, to use such feedback on an unrestricted basis.</p></div><div class="content-item"><h2 id="license">Grant of Licence</h2><p>By uploading or posting Your Content to the Platform, you initiate an automated process to transcode any audio Content and direct SoundCloud to store Your Content on our servers, from where you may control and authorise the use, reproduction, transmission, distribution, public display, public performance, making available and other communication to the public of Your Content on the Platform and elsewhere using the Services. To the extent it is necessary in order for SoundCloud to provide you with any of the aforementioned hosting services, to undertake any of the tasks set forth in these Terms of Use and/or to enable your use of the Platform, you hereby grant such licences to SoundCloud on a limited, worldwide, non-exclusive, royalty-free and fully paid basis.</p>By uploading Your Content to the Platform, you also grant a limited, worldwide, non-exclusive, royalty-free, fully paid up, licence to other users of the Platform, and to users of any other websites, apps and/or platforms to which Your Content has been shared or embedded using the Services (“<strong>Linked Services</strong>”), to use, copy, transmit or otherwise distribute, publicly display, publicly perform, prepare derivative works of, make available and otherwise communicate to the public Your Content within the parameters set by you using the Services. You can limit and restrict the availability of certain of Your Content to other users of the Platform, and to users of Linked Services, at any time using the settings on the sound page for each sound you upload, subject to the provisions of the <a href="#disclaimer">Disclaimer</a> section below.<p>The licences granted in this section are granted separately with respect to each item of Your Content that you upload to the Platform. Licences with respect to audio Content, and any images or text within your account, will (subject to the following paragraph of these Terms of Use) terminate automatically when you remove such Content from your account. Licences with respect to comments or other contributions that you make on the Website will be perpetual and irrevocable, and will continue notwithstanding any termination of your account.</p><p>Removal of audio Content from your account will automatically result in the deletion of the relevant files from SoundCloud’s systems and servers. However, notwithstanding the foregoing, you hereby acknowledge and agree that once Your Content is distributed to a Linked Service, SoundCloud is not obligated to ensure the deletion of Your Content from any servers or systems operated by the operators of any Linked Service, or to require that any user of the Platform or any Linked Service deletes any item of Your Content.</p><p>Any Content other than Your Content is the property of the relevant Uploader, and is or may be subject to copyright, trademark rights or other intellectual property or proprietary rights. Such Content may not be downloaded, reproduced, distributed, transmitted, re-uploaded, republished, displayed, sold, licensed, made available or otherwise communicated to the public or exploited for any purposes except within the parameters set by the Uploader on the Platform or with the express written consent of the Uploader.</p></div><div class="content-item"><h2 id="representations">Representations and Warranties</h2><p>You hereby represent and warrant to SoundCloud as follows:</p><ol class="roman"><li>Your Content, and each and every part thereof, is an original work by you, or you have obtained all rights, licences, consents and permissions necessary in order to use, and (if and where relevant) to authorise SoundCloud to use, Your Content pursuant to these Terms of Use, including, without limitation, the right to upload, reproduce, store, transmit, distribute, share, publicly display, publicly perform, make available and otherwise communicate to the public Your Content, and each and every part thereof, on, through or via the Website, any and all Services and any Linked Services.</li><li>Your Content and the availability thereof on the Platform does not and will not infringe or violate the rights of any third party, including, without limitation, any intellectual property rights, performers’ rights, rights of privacy or publicity, or rights in confidential information.</li><li>You have obtained any and all necessary consents, permissions and/or releases from any and all persons appearing in Your Content in order to include their name, voice, performance or likeness in Your Content and to publish the same on the Platform and via any Linked Services.</li><li>Your Content, including any comments that you may post on the Website, is not and will not be offensive, abusive, libellous, defamatory, obscene, racist, sexually explicit, ethnically or culturally offensive, indecent, will not promote violence, terrorism, or illegal acts, or incite hatred on grounds of race, gender, religion or sexual orientation.</li><li>Your Content does not and will not create any liability on the part of SoundCloud, its subsidiaries, affiliates, successors, and assigns, and their respective employees, agents, directors, officers and/or shareholders.</li></ol><p>SoundCloud reserves the right to remove Your Content, suspend or terminate your access to the Platform and/or pursue all legal remedies if we believe that any of Your Content breaches any of the foregoing representations or warranties, or otherwise infringes another person\'s rights or violates any law, rule or regulation.</p></div><div class="content-item"><h2 id="liability">Liability for Content</h2><p>You hereby acknowledge and agree that SoundCloud (i) stores Content and other information at the direction, request and with the authorisation of its users, (ii) acts merely as a passive conduit and/or host for the uploading, storage and distribution of such Content, and (iii) plays no active role and gives no assistance in the presentation or use of the Content. You are solely responsible for all of Your Content that you upload, post or distribute to, on or through the Platform, and to the extent permissible by law, SoundCloud excludes all liability with respect to all Content (including Your Content) and the activities of its users with respect thereto.</p><p>You hereby acknowledge and agree that SoundCloud cannot and does not review the Content created or uploaded by its users, and neither SoundCloud nor its subsidiaries, affiliates, successors, assigns, employees, agents, directors, officers and shareholders has any obligation, and does not undertake or assume any duty, to monitor the Platform for Content that is inappropriate, that does or might infringe any third party rights, or has otherwise been uploaded in breach of these Terms of Use or applicable law.</p><p>SoundCloud and its subsidiaries, affiliates, successors, assigns, employees, agents, directors, officers and shareholders hereby exclude, to the fullest extent permitted by law, any and all liability which may arise from any Content uploaded to the Platform by users, including, but not limited to, any claims for infringement of intellectual property rights, rights of privacy or publicity rights, any claims relating to publication of defamatory, pornographic, obscene or offensive material, or any claims relating to the completeness, accuracy, currency or reliability of any information provided by users on the Website. By using the Platform, you irrevocably waive the right to assert any claim with respect to any of the foregoing against SoundCloud or any of its subsidiaries, affiliates, successors, assigns, employees, agents, directors, officers or shareholders.</p></div><div class="content-item"><h2 id="infringements">Reporting Infringements</h2><p>If you discover any Content on the Platform that you believe infringes your copyright, please report this to us using any of the methods outlined on our <a href="http://soundcloud.com/pages/copyright">Copyright Information</a> pages.</p><p>If you would prefer to send us your own written notification, please make sure that you include the following information:</p><ul class="bullet"><li>a statement that you have identified Content on SoundCloud® that infringes your copyright or the copyright of a third party on whose behalf you are entitled to act;</li><li>a description of the copyright work(s) that you claim have been infringed;</li><li>a description of the Content that you claim is infringing and the SoundCloud URL(s) where such Content can be located;</li><li>your full name, address and telephone number, a valid email address on which you can be contacted, and your SoundCloud® user name if you have one;</li><li>a statement by you that you have a good faith belief that the disputed use of the material is not authorized by the copyright owner, its agent, or the law; and</li><li>a statement by you that the information in your notice is accurate and that you are authorized to act on behalf of the owner of the exclusive right that is allegedly infringed;</li></ul><p>In addition, if you wish for your notice to be considered as a notice pursuant to the United States Digital Millennium Copyright Act 17 U.S.C. §512(c), please also include the following:</p><ul class="bullet"><li>with respect to your statement that you are authorized to act on behalf of the owner of the exclusive right that is allegedly infringed, confirmation that such statement is made under penalty of perjury; and</li><li>your electronic or physical signature (which may be a scanned copy).</li></ul><p>Your notice should be sent to us by email to <a href="mailto:copyright@soundcloud.com">copyright@soundcloud.com</a>and/or by mail to the following address:</p><p>SoundCloud Ltd <br>Rosenthaler Straße 13 <br>10119 Berlin <br>Germany <br>Attn: Copyright Team</p><p>If you wish for your notice to be considered as a notice pursuant to the United States Digital Millennium Copyright Act 17 U.S.C. §512(c), your notice should be sent to SoundCloud’s designated copyright agent by email to <a href="mailto:copyrightagent@soundcloud.com">copyrightagent@soundcloud.com</a> and/or by mail to the following address:</p><p>SoundCloud Ltd <br>c/o Music Reports Inc <br>21122 Erwin Street <br>Woodland Hills <br>CA 91367 <br>USA <br>Attn: Copyright Agent <br>Tel: +1 818 558 1400 <br>Fax: +1 818 558 3484</p><p>The foregoing process applies to copyright only. If you discover any Content that you believe to be in violation of your trademark or other intellectual property rights, which you believe violates your rights of privacy or publicity, which you believe is defamatory, pornographic, obscene, racist or otherwise liable to cause widespread offence, or which constitutes impersonation, harassment, spam or otherwise violates these Terms of Use, our <a href="http://soundcloud.com/community-guidelines">Community Guidelines</a> or applicable law, please report this to us at <a href="mailto:legal@soundcloud.com">legal@soundcloud.com</a>.</p></div><div class="content-item"><h2 id="thirdparty">Third Party Websites and Services</h2><p>The Platform may provide you with access to third party websites, databases, networks, servers, information, software, programs, systems, directories, applications, products or services, including without limitation, Linked Services (hereinafter “<strong>External Services</strong>”).</p><p>SoundCloud does not have or maintain any control over External Services, and is not and cannot be responsible for their content, operation or use. By linking or otherwise providing access to any External Services, SoundCloud does not give any representation, warranty or endorsement, express or implied, with respect to the legality, accuracy, quality or authenticity of content, information or services provided by such External Services.</p><p>External Services may have their own terms of use and/or privacy policy, and may have different practices and requirements to those operated by SoundCloud with respect to the Platform. You are solely responsible for reviewing any terms of use, privacy policy or other terms governing your use of these External Services, which you use at your own risk. You are advised to make reasonable enquiries and investigations before entering into any transaction, financial or otherwise, and whether online or offline, with any third party related to any External Services.</p><p>You are solely responsible for taking the precautions necessary to protect yourself from fraud when using External Services, and to protect your computer systems from viruses, worms, Trojan horses, and other harmful or destructive content and material that may be included on or may emanate from any External Services.</p><p>SoundCloud disclaims any and all responsibility or liability for any harm resulting from your use of External Services, and you hereby irrevocably waive any claim against SoundCloud with respect to the content or operation of any External Services.</p></div><div class="content-item"><h2 id="blocking">Blocking and Removal of Content</h2><p>Notwithstanding the fact that SoundCloud has no legal obligation to monitor the Content on the Platform, SoundCloud reserves the right to block, remove or delete any Content at any time, and to limit or restrict access to any Content, for any reason and without liability, including without limitation, if we have reason to believe that such Content does or might infringe the rights of any third party, has been uploaded or posted in breach of these Terms of Use, our <a href="http://soundcloud.com/community-guidelines">Community Guidelines</a> or applicable law, or is otherwise unacceptable to SoundCloud.</p><p>Please also note that individual Uploaders have control over the audio Content that they store in their account from time to time, and may remove any or all audio Content or other Content without notice. You have no right of continued access to any particular item of Content and SoundCloud shall have no liability in the event that you are unable to access an item of Content due to its removal from the Platform, whether by SoundCloud or the relevant Uploader.</p></div><div class="content-item"><h2 id="repeated_infringement">Repeat Infringers</h2><p>SoundCloud will suspend or terminate your access to the Platform if SoundCloud determines, in its reasonable discretion, that you have repeatedly breached these Terms of Use or our <a href="http://soundcloud.com/community-guidelines">Community Guidelines</a>.</p><p>If we receive a valid notification from a third party in accordance with our reporting processes or applicable law that any of Your Content infringes the copyright or other rights of such third party, or if we believe that your behaviour is inappropriate and violates our <a href="http://soundcloud.com/community-guidelines">Community Guidelines</a>, we will send you a written warning to this effect. Any user that receives more than two of these warnings within any twelve month period is liable to have their access to the Platform terminated forthwith.</p><p>We will also suspend or terminate your account without warning if ordered to do so by a court, and/or in other appropriate circumstances, as determined by SoundCloud at its discretion.</p></div><div class="content-item"><h2 id="disclaimer">Disclaimer</h2><p>THE PLATFORM, INCLUDING, WITHOUT LIMITATION, THE WEBSITE AND ALL CONTENT AND SERVICES ACCESSED THROUGH OR VIA THE WEBSITE OR OTHERWISE, ARE PROVIDED “AS IS”, “AS AVAILABLE”, AND “WITH ALL FAULTS”.</p><p>WHILST SOUNDCLOUD USES ALL REASONABLE ENDEAVOURS TO CORRECT ANY ERRORS OR OMISSIONS ON THE PLATFORM AS SOON AS PRACTICABLE ONCE THEY HAVE BEEN BROUGHT TO SOUNDCLOUD’S ATTENTION, SOUNDCLOUD MAKES NO PROMISES, GUARANTEES, REPRESENTATIONS OR WARRANTIES OF ANY KIND WHATSOEVER (EXPRESS OR IMPLIED) REGARDING THE WEBSITE, THE SERVICES OR ANY PART OR PARTS THEREOF, ANY CONTENT, OR ANY LINKED SERVICES OR OTHER EXTERNAL SERVICES. SOUNDCLOUD DOES NOT WARRANT THAT YOUR USE OF THE PLATFORM WILL BE UNINTERRUPTED, TIMELY, SECURE OR ERROR-FREE, THAT DEFECTS WILL BE CORRECTED, OR THAT THE PLATFORM OR ANY PART OR PARTS THEREOF, THE CONTENT, OR THE SERVERS ON WHICH THE PLATFORM OPERATES ARE OR WILL BE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. SOUNDCLOUD DOES NOT WARRANT THAT ANY TRANSMISSION OF CONTENT UPLOADED TO THE PLATFORM WILL BE SECURE OR THAT ANY ELEMENTS OF THE PLATFORM DESIGNED TO PREVENT UNAUTHORISED ACCESS, SHARING OR DOWNLOAD OF CONTENT WILL BE EFFECTIVE IN ANY AND ALL CASES, AND DOES NOT WARRANT THAT YOUR USE OF THE PLATFORM IS LAWFUL IN ANY PARTICULAR JURISDICTION.</p><p>SOUNDCLOUD AND ITS SUBSIDIARIES, AFFILIATES, SUCCESSORS, AND ASSIGNS, AND THEIR RESPECTIVE EMPLOYEES, AGENTS, DIRECTORS, OFFICERS AND SHAREHOLDERS, SPECIFICALLY DISCLAIM ALL OF THE FOREGOING WARRANTIES TO THE FULLEST EXTENT PERMITTED BY LAW, TOGETHER WITH ANY EXPRESS OR IMPLIED WARRANTIES REGARDING NON-INFRINGEMENT, MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.</p><p>WHERE THE LAW OF ANY JURISDICTION LIMITS OR PROHIBITS THE DISCLAIMER OF IMPLIED OR OTHER WARRANTIES AS SET OUT ABOVE, THE ABOVE DISCLAIMERS SHALL NOT APPLY TO THE EXTENT THAT THE LAW OF SUCH JURISDICTION APPLIES TO THIS AGREEMENT.</p></div><div class="content-item"><h2 id="limitation_of_liability">Limitation of Liability</h2><p>IF YOU HAVE A PREMIUM ACCOUNT, THEN SOUNDCLOUD’S TOTAL LIABILITY TO YOU SHALL NOT EXCEED THE TOTAL AMOUNTS YOU HAVE PAID TO SOUNDCLOUD DURING THE TWELVE (12) MONTHS PRIOR TO YOUR CLAIM. IN ALL OTHER CASES, IF YOU ARE DISSATISFIED WITH THE PLATFORM, YOUR SOLE AND EXCLUSIVE REMEDY IS TO DISCONTINUE ACCESSING AND USING THE PLATFORM.</p><p>SOUNDCLOUD AND ITS SUBSIDIARIES, AFFILIATES, SUCCESSORS, AND ASSIGNS, AND THEIR RESPECTIVE EMPLOYEES, AGENTS, DIRECTORS, OFFICERS AND SHAREHOLDERS, SHALL HAVE NO LIABILITY FOR:</p><ol class="roman"><li>ANY LOSS OR DAMAGE ARISING FROM:<ol><li>YOUR INABILITY TO ACCESS OR USE THE PLATFORM OR ANY PART OR PARTS THEREOF, OR TO ACCESS ANY CONTENT OR ANY EXTERNAL SERVICES VIA THE PLATFORM;</li><li>ANY CHANGES THAT SOUNDCLOUD MAY MAKE TO THE PLATFORM OR ANY PART THEREOF, OR ANY TEMPORARY OR PERMANENT SUSPENSION OR CESSATION OF ACCESS TO THE PLATFORM IN OR FROM ANY OR ALL TERRITORIES;</li><li>ANY ACTION TAKEN AGAINST YOU BY THIRD PARTY RIGHTSHOLDERS WITH RESPECT TO ANY ALLEGED INFRINGEMENT OF SUCH THIRD PARTY’S RIGHTS RELATING TO YOUR CONTENT OR YOUR USE OF THE PLATFORM, OR ANY ACTION TAKEN AS PART OF AN INVESTIGATION BY SOUNDCLOUD OR ANY RELEVANT LAW ENFORCEMENT AUTHORITY REGARDING YOUR USE OF THE PLATFORM;</li><li>ANY ERRORS OR OMISSIONS IN THE PLATFORM’S TECHNICAL OPERATION, OR FROM ANY INACCURACY OR DEFECT IN ANY CONTENT;</li><li>YOUR FAILURE TO PROVIDE SOUNDCLOUD WITH ACCURATE OR COMPLETE INFORMATION, OR YOUR FAILURE TO KEEP YOUR USERNAME OR PASSWORD SUITABLY CONFIDENTIAL;</li></ol></li><li>ANY LOSS OR DAMAGE TO ANY COMPUTER HARDWARE OR SOFTWARE, ANY LOSS OF DATA (INCLUDING YOUR CONTENT), OR ANY LOSS OR DAMAGE FROM ANY SECURITY BREACH; AND/OR</li><li>ANY LOSS OF PROFITS, OR ANY LOSS YOU SUFFER WHICH IS NOT A FORESEEABLE CONSEQUENCE OF SOUNDCLOUD BREACHING THESE TERMS OF USE. LOSSES ARE FORESEEABLE WHERE THEY COULD BE CONTEMPLATED BY YOU AND SOUNDCLOUD AT THE TIME YOU AGREE TO THESE TERMS OF USE, AND THEREFORE DO NOT INCLUDE ANY INDIRECT LOSSES, SUCH AS LOSS OF OPPORTUNITY.</li></ol><p>ANY CLAIM OR CAUSE OF ACTION ARISING OUT OF OR RELATED TO YOUR USE OF THE PLATFORM MUST BE NOTIFIED TO SOUNDCLOUD AS SOON AS POSSIBLE.</p><p>NOTHING IN THESE TERMS OF USE LIMITS OR EXCLUDES THE LIABILITY OF SOUNDCLOUD, ITS SUBSIDIARIES, AFFILIATES, SUCCESSORS, ASSIGNS, EMPLOYEES, AGENTS, DIRECTORS, OFFICERS AND/OR SHAREHOLDERS FOR ANY DEATH OR PERSONAL INJURY CAUSED BY ITS NEGLIGENCE OR DELIBERATE ACTS OR OMISSIONS, FOR ANY FORM OF FRAUD OR DECEIT, OR FOR ANY FORM OF LIABILITY WHICH CANNOT BE LIMITED OR EXCLUDED BY LAW.</p><p>ADDITIONALLY, APPLICABLE LAW MAY NOT ALLOW THE LIMITATION OR EXCLUSION OF LIABILITY FOR INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE ABOVE LIMITATIONS OR EXCLUSIONS MAY NOT APPLY TO YOU. IN SUCH CASES, YOU ACKNOWLEDGE AND AGREE THAT SUCH LIMITATIONS AND EXCLUSIONS REFLECT A REASONABLE AND FAIR ALLOCATION OF RISK BETWEEN YOU AND SOUNDCLOUD AND ARE FUNDAMENTAL ELEMENTS OF THE BARGAIN BETWEEN YOU AND SOUNDCLOUD, AND THAT SOUNDCLOUD’S LIABILITY WILL BE LIMITED TO THE MAXIMUM EXTENT PERMITTED BY LAW.</p></div><div class="content-item"><h2 id="indemnification">Indemnification</h2><p>You hereby agree to indemnify, defend and hold harmless SoundCloud, its successors, assigns, affiliates, agents, directors, officers, employees and shareholders from and against any and all claims, obligations, damages, losses, expenses, and costs, including reasonable attorneys\' fees, resulting from:</p><ol class="roman"><li>any violation by you of these Terms of Use or our <a href="http://soundcloud.com/community-guidelines">Community Guidelines</a>;</li><li>any third party claim of infringement of copyright or other intellectual property rights or invasion of privacy arising from the hosting of Your Content on the Platform, and/or your making available thereof to other users of the Platform, and/or the actual use of Your Content by other users of the Platform or Linked Services in accordance with these Terms of Use and the parameters set by you with respect to the distribution and sharing of Your Content;</li><li>any activity related to your account, be it by you or by any other person accessing your account with or without your consent.</li></ol></div><div class="content-item"><h2 id="dataprotection">Data Protection and Privacy</h2><p>All personal data that you provide to us in connection with your use of the Platform is collected, stored, used and disclosed by SoundCloud in accordance with our <a href="/pages/privacy">Privacy Policy</a>. By accepting these Terms of Use and using the Platform, you also accept the terms of the <a href="/pages/privacy">Privacy Policy</a>, which are incorporated into this Agreement by reference.</p></div><div class="content-item"><h2 id="meetups">Meetups</h2><p>SoundCloud has an active community of users, many of whom organize and attend face-to-face meetings at venues all over the world (“<strong>Meetups</strong>”). While SoundCloud is generally supportive of Meetups and may provide branded promotional materials to help organisers promote their Meetups, SoundCloud does not sponsor, oversee or in any way control such Meetups. You hereby acknowledge and agree that your attendance and participation in any Meetups is entirely at your own risk and SoundCloud does not bear any responsibility or liability for the actions of any SoundCloud users or any third parties who organize, attend or are otherwise involved in any Meetups.</p></div><div class="content-item"><h2 id="competitions">Competitions and Other Promotions</h2>From time to time, some SoundCloud® users may promote competitions, promotions, prize draws and other similar opportunities on the Platform (“<strong>Third Party Competitions</strong>”). SoundCloud is not the sponsor or promoter of these Third Party Competitions, and does not bear any responsibility or liability for the actions or inactions of any third parties who organize, administer or are otherwise involved in any of promotion of these Third Party Competitions. If you wish to participate in any of these Third Party Competitions, it is your responsibility to read the terms and conditions applicable to the relevant Third Party Competition and to ensure that you understand the rules and any eligibility requirements, and are lawfully able to participate in such Third Party Competitions in your country of residence.</div><div class="content-item"><h2 id="use_of_player">Use of SoundCloud Player and Widget</h2><p>The Services include the ability for users to embed the SoundCloud waveform player and a fully customisable player (“<strong>Widget</strong>”) into other websites, including without limitation, their own website or a third party website or social media profile, whether or not a Linked Service. This functionality is provided to enable Uploaders to put their Content wherever they wish, and to enable other users of the Platform to share and distribute Content within the parameters set by the Uploader.</p><p>You may not, without the prior written consent of SoundCloud, embed the waveform player or use the Widget in such a way that you aggregate Content from the Platform (other than Your Content) into a separate destination that replicates substantially the offering of the Website, or comprises a content service of which Content from the Platform forms a material part. Similarly, you may not, without the prior written consent of SoundCloud, use the waveform player or Widget to embed Content (other than Your Content) into any website or other destination dedicated to a particular artist or genre, or use the waveform player or Widget in any way that suggests that SoundCloud or any artist or other third party endorses or supports your website, or your use of the waveform player or Widget. The foregoing shall apply whether or not such use is commercial or non-commercial.</p><p>SoundCloud reserves the right to block your use of the Widget at any time and for any reason in its sole discretion.</p></div><div class="content-item"><h2 id="premium">Premium Accounts</h2><p>Certain features of the Platform are only available to users who register and pay for a premium account.A detailed description of our premium accounts, including the prices and the features associated with each type of account, is available <a href="http://soundcloud.com/premium/">here</a>.</p><p>Fees for premium accounts are payable at the commencement of the subscription period, and your first payment will be taken at the time the contract is concluded unless stated otherwise.If you choose any of our monthly accounts, your account will renew automatically at the end of each monthly period, and payment for the next monthly period will be taken at that time, unless and until you cancel or terminate your account in the manner described in the <a href="#termination">Termination and Right of Cancellation</a> section below.Annual accounts run for twelve months from the date on which the contract is concluded, and will expire automatically at the end of that twelve month period unless you elect to renew your subscription.If you renew your annual subscription, payment for the next twelve month period will be taken at the time you renew.</p><p>Payments are due without the need for an invoice, and can be made by Visa, Mastercard or PayPal.All payments include VAT or other sales tax where applicable.If a credit card processor imposes handling charges in order to process your payment, we may add such charges to the total amount paid for the service – handling charges are typically 1% to 3% of the amount to be paid.</p><p>If you have a gift code, simply add this in the “Your Promo Code” box during the premium account registration process.Gift codes should be used within three years.SoundCloud is unable to offer any kind of refund or exchange for any gift code not redeemed within this period.</p><p>Once payment has been made or the gift code accepted, we will send a confirmation email to the email address provide by you as part of the registration process.Until you receive this confirmation email, no contract is concluded.Completion of the registration process is merely an offer to conclude a contract, and does not constitute the conclusion of a contract.The language of the contract is English.</p><p>If you wish to upgrade your account, you may do so at any time.If you wish to downgrade your account, you may do so at the end of your then current subscription period.</p><p>Consumers in the European Union have a right to cancel premium accounts for a period of fourteen (14) days after they are concluded.Details are provided below in the <a href="#termination">Termination and Right of Cancellation</a> section.</p></div><div class="content-item"><h2 id="changes_to_platform">Changes to the Platform, Accounts and Pricing</h2><p>SoundCloud reserves the right to change, modify, withdraw or discontinue any of the features, services and functionalities of the Platform at any time and for any reason with or without notice.SoundCloud also reserves the right at any time and for any reason to suspend, discontinue, terminate or cease providing access to the Platform or any part thereof, temporarily or permanently, and whether in its entirety or with respect to individual territories only.In the case of any temporary or permanent suspension, discontinuation, termination or cessation of access, SoundCloud shall use its reasonable endeavours to notify registered users of such decision in advance.</p><p>You hereby agree that SoundCloud and its subsidiaries, affiliates, successors, assigns, employees, agents, directors, officers and shareholders shall not be liable to you or to any third party for any changes or modifications to the Website and/or any Services that SoundCloud may wish to make from time to time, or for any decision to suspend, discontinue or terminate the Website, the Services or any part or parts thereof, or your possibility to use or access the same from or within any territory or territories.</p><p>SoundCloud may change the features of any type of account, may withdraw or, or introduce new types of account at any time and for any reason, and may change the prices charged for any of its premium accounts from time to time.In the event of any change(s) to the pricing or features of any premium account to which you have subscribed, such change(s) will be communicated to you and will only take effect with respect to any subsequent renewal of your subscription.In all other cases, where SoundCloud proposes to make changes to any type of account to which you subscribe, and these changes are material and to your disadvantage, SoundCloud will notify you of the proposed changes by sending a message to your SoundCloud® account and an email to the then current email address that we have for your account, at least six (6) weeks in advance.You will have no obligation to continue using the Platform following any such notification, but if you do not terminate your account as described in the <a href="#termination">Termination and Right of Cancellation</a> section below during such six (6) week period, your continued use of your account after the end of that six (6) week period will constitute your acceptance of the changes to your account.</p></div><div class="content-item"><h2 id="termination">Termination and Right of Cancellation (“Widerrufsrecht”)</h2><h3>Termination:</h3><p>You may terminate this Agreement at any time by sending notice in writing to SoundCloud at Rosenthalerstr. 13, 10119 Berlin, Germany confirming such termination, by removing all of Your Content from your account, by deleting your account and thereafter by ceasing to use the Platform.If you have a premium account, then we will cease to charge you from the first day of the month following receipt of notice of termination from you, but cannot offer any refund for any unexpired period of your subscription.</p><p>SoundCloud may suspend your access to the Platform and/or terminate this Agreement at any time if (i) you are deemed to be a <a href="#repeated_infringement">Repeat Infringer</a> as described above; (ii) you are in breach of any of the material provision of these Terms of Use or our <a href="http://soundcloud.com/community-guidelines">Community Guidelines</a>, including without limitation, the provisions of the following sections: <a href="#use">Your Use of the Platform</a>, <a href="#content">Your Content</a>, <a href="#license">Grant of Licence</a>, and <a href="#representations">Your Representations and Warranties</a>; (iii) SoundCloud elects at its discretion to cease providing access to the Platform in the jurisdiction where you reside or from where you are attempting to access the Platform, or (iv) in other reasonable circumstances as determined by SoundCloud at its discretion.</p><h3>Cancellation:</h3>In addition, if you are a consumer in the European Union, you will have fourteen (14) days in which to cancel any account that you may have registered with us, or any gift code that you may have purchased. You should contact us by email, letter or fax to confirm your cancellation, but do not have to provide any reason for your cancellation.<p>Furthermore, if you upgrade from a free to a premium account, you have fourteen (14) days from the date of your upgrade in which to cancel your premium account.Again, you should contact us by email, letter or fax, but do not have to provide any reason for your cancellation.</p><p>In either case, the fourteen (14) day cancellation period begins with the date on which the registration of your account or your upgrade, or the purchase of your gift code, is confirmed.</p><p>If you wish to exercise your right of cancellation, you should contact us at:</p><p>SoundCloud Ltd. <br>Rosenthaler Straße 13 <br>10119 Berlin<br>Fax: +49 30 577 098 860 <br><a href="mailto:contact@soundcloud.com">contact@soundcloud.com</a></p><p>If you cancel a premium account or gift code purchase in accordance with this process, we will refund you for any payments you have made with respect to your premium account or gift code purchase, and will do so within thirty (30) days of the date of receipt of your valid notice of cancellation.</p><p><strong>Please be aware that you will lose your right to cancel your account, if you have logged into your account or redeemed your gift code during the fourteen (14) day cancellation period.</strong></p><p>For consumers in Germany, your right of revocation is known as widerruftsrecht.Further information about this right is available in German at <a href="http://soundcloud.com/premium/widerrufsrecht">http://soundcloud.com/premium/widerrufsrecht</a>.</p><p>Following receipt of your notice of cancellation, SoundCloud will delete your account and all associated Content and data.You are therefore advised to remove, copy or back up any Content in your account before sending us your notice of cancellation.</p><p>The provisions of these Terms of Use that are intended by their nature to survive the termination or cancellation of this Agreement will survive the termination of this Agreement, including, but not limited to, those Sections entitled <a href="#account">Your SoundCloud Account</a>, <a href="#content">Your Content</a>, <a href="#license">Grant of Licence</a>, <a href="#representations">Representations and Warranties</a>, <a href="#liability">Liability for Content</a>, <a href="#disclaimer">Disclaimer</a>, <a href="#liability">Limitation of Liability</a>, <a href="#indemnification">Indemnification</a>, <a href="#termination">Termination and Right of Cancellation</a>, <a href="#assignment">Assignment to Third Parties</a>, <a href="#severability">Severability</a>, <a href="#entire_agreement">Entire Agreement</a>, and <a href="#applicable_law">Applicable Law and Jurisdiction</a>, respectively.</p></div><div class="content-item"><h2 id="assignment">Assignment to Third Parties</h2><p>SoundCloud may assign its rights and (where permissible by law) its obligations under this Agreement, in whole or in part, to any third party at any time without notice, including without limitation, to any person or entity acquiring all or substantially all of the assets or business of SoundCloud.You may not assign this Agreement or the rights and duties hereunder, in whole or in part, to any third party without the prior written consent of SoundCloud.</p></div><div class="content-item"><h2 id="severability">Severability</h2><p>Should one or more provisions of these Terms of Use be found to be unlawful, void or unenforceable, such provision(s) shall be deemed severable and will not affect the validity and/or enforceability of the remaining provisions of the Terms of Use, which will remain in full force and effect.</p></div><div class="content-item"><h2 id="entire_agreement">Entire Agreement</h2><p>These Terms of Use, together with the <a href="http://soundcloud.com/community-guidelines">Community Guidelines</a> and <a href="/pages/privacy">Privacy Policy</a> (which are hereby incorporated by this reference), constitute the entire agreement between you and SoundCloud with respect to your use of the Platform (other than any use of SoundCloud’s APIs which may also be subject to separate API Terms of Use), and supersede any prior agreement between you and SoundCloud.Any modifications to this Agreement must be made in writing.</p></div><div class="content-item"><h2 id="third_party_rights">Third Party Rights</h2><p>These Terms of Use are not intended to give rights to anyone except you and SoundCloud.This does not affect our right to transfer our rights or obligations to a third party as described in the <a href="#assignment">Assignment to Third Parties</a> section.</p></div><div class="content-item"><h2 id="applicable_law">Applicable Law and Jurisdiction</h2><p>Except where otherwise required by the mandatory law of the United States or any member state of the European Union:</p><ol class="roman"><li>this Agreement is subject to the laws of the Federal Republic of Germany, excluding the UN Convention on Contracts for the International Sale of Goods (CISG) and excluding the principles of conflict of laws (international private law); and</li><li>you hereby agree, and SoundCloud agrees, to submit to the exclusive jurisdiction of the courts in Berlin, Germany for resolution of any dispute, action or proceeding arising in connection with this Agreement.</li></ol><p>The foregoing provisions of this Applicable Law and Jurisdiction section do not apply to any claim in which SoundCloud seeks equitable relief of any kind.You acknowledge that, in the event of a breach of these Terms of Use by SoundCloud or any third party, the damage or harm, if any, caused to you will not entitle you to seek injunctive or other equitable relief against SoundCloud, including with respect to Your Content, and your only remedy shall be for monetary damages, subject to the limitations of liability set forth in these Terms of Use.</p></div><div class="content-item"><h2 id="disclosures">Disclosures</h2><p>The services hereunder are offered by SoundCloud Limited, located at Rosenthaler Straße 13, 10119 Berlin, Germany.More information about SoundCloud is available <a href="/imprint">here</a>.You may contact us by sending correspondence to the foregoing address or by emailing us at contact@soundcloud.com.If you are a resident of the State of California, you may have these Terms of Use mailed to you electronically by sending a letter to the foregoing address with your electronic mail address and a request for these Terms of Use.</p></div><div class="content-item">Effective Date: 22 September 2011</div></div>');
        }
        return _;
    }
})(jQuery);
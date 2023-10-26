/*
 Highmaps JS v11.1.0 (2023-06-05)

 Highmaps as a plugin for Highcharts or Highcharts Stock.

 (c) 2011-2021 Torstein Honsi

 License: www.highcharts.com/license
*/
'use strict'; (function (a) { "object" === typeof module && module.exports ? (a["default"] = a, module.exports = a) : "function" === typeof define && define.amd ? define("highcharts/modules/map", ["highcharts"], function (y) { a(y); a.Highcharts = y; return a }) : a("undefined" !== typeof Highcharts ? Highcharts : void 0) })(function (a) {
    function y(a, n, q, z) { a.hasOwnProperty(n) || (a[n] = z.apply(null, q), "function" === typeof CustomEvent && window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded", { detail: { path: n, module: a[n] } }))) } a = a ? a._modules :
        {}; y(a, "Core/Axis/Color/ColorAxisComposition.js", [a["Core/Color/Color.js"], a["Core/Utilities.js"]], function (a, n) {
            const { parse: q } = a, { addEvent: g, extend: k, merge: l, pick: A, splat: w } = n; var x; (function (t) {
                function h() { const b = this.options; this.colorAxis = []; b.colorAxis && (b.colorAxis = w(b.colorAxis), b.colorAxis.forEach(b => { new v(this, b) })) } function a(b) {
                    const u = u => { u = b.allItems.indexOf(u); -1 !== u && (this.destroyItem(b.allItems[u]), b.allItems.splice(u, 1)) }; let d = [], p, e; (this.chart.colorAxis || []).forEach(function (b) {
                        (p =
                            b.options) && p.showInLegend && (p.dataClasses && p.visible ? d = d.concat(b.getDataClassLegendSymbols()) : p.visible && d.push(b), b.series.forEach(function (b) { if (!b.options.showInLegend || p.dataClasses) "point" === b.options.legendType ? b.points.forEach(function (b) { u(b) }) : u(b) }))
                    }); for (e = d.length; e--;)b.allItems.unshift(d[e])
                } function f(b) { b.visible && b.item.legendColor && b.item.legendItem.symbol.attr({ fill: b.item.legendColor }) } function c() { const b = this.chart.colorAxis; b && b.forEach(function (b, d, p) { b.update({}, p) }) } function e() {
                    (this.chart.colorAxis &&
                        this.chart.colorAxis.length || this.colorAttribs) && this.translateColors()
                } function b() { const b = this.axisTypes; b ? -1 === b.indexOf("colorAxis") && b.push("colorAxis") : this.axisTypes = ["colorAxis"] } function d(b) { const u = this, d = b ? "show" : "hide"; u.visible = u.options.visible = !!b;["graphic", "dataLabel"].forEach(function (b) { if (u[b]) u[b][d]() }); this.series.buildKDTree() } function E() {
                    const b = this, u = this.options.nullColor, d = this.colorAxis, p = this.colorKey; (this.data.length ? this.data : this.points).forEach(e => {
                        var c = e.getNestedProperty(p);
                        (c = e.options.color || (e.isNull || null === e.value ? u : d && "undefined" !== typeof c ? d.toColor(c, e) : e.color || b.color)) && e.color !== c && (e.color = c, "point" === b.options.legendType && e.legendItem && e.legendItem.label && b.chart.legend.colorizeItem(e, e.visible))
                    })
                } function p(b) {
                    const u = b.prototype.createAxis; b.prototype.createAxis = function (b, d) {
                        if ("colorAxis" !== b) return u.apply(this, arguments); const e = new v(this, l(d.axis, { index: this[b].length, isX: !1 })); this.isDirtyLegend = !0; this.axes.forEach(function (b) { b.series = [] });
                        this.series.forEach(function (b) { b.bindAxes(); b.isDirtyData = !0 }); A(d.redraw, !0) && this.redraw(d.animation); return e
                    }
                } function C() { this.elem.attr("fill", q(this.start).tweenTo(q(this.end), this.pos), void 0, !0) } function m() { this.elem.attr("stroke", q(this.start).tweenTo(q(this.end), this.pos), void 0, !0) } const r = []; let v; t.compose = function (t, u, B, D, H) {
                    v || (v = t); n.pushUnique(r, u) && (t = u.prototype, t.collectionsWithUpdate.push("colorAxis"), t.collectionsWithInit.colorAxis = [t.addColorAxis], g(u, "afterGetAxes", h), p(u));
                    n.pushUnique(r, B) && (u = B.prototype, u.fillSetter = C, u.strokeSetter = m); n.pushUnique(r, D) && (g(D, "afterGetAllItems", a), g(D, "afterColorizeItem", f), g(D, "afterUpdate", c)); n.pushUnique(r, H) && (k(H.prototype, { optionalAxis: "colorAxis", translateColors: E }), k(H.prototype.pointClass.prototype, { setVisible: d }), g(H, "afterTranslate", e, { order: 1 }), g(H, "bindAxes", b))
                }; t.pointSetVisible = d
            })(x || (x = {})); return x
        }); y(a, "Core/Axis/Color/ColorAxisDefaults.js", [], function () {
            return {
                lineWidth: 0, minPadding: 0, maxPadding: 0, gridLineColor: "#ffffff",
                gridLineWidth: 1, tickPixelInterval: 72, startOnTick: !0, endOnTick: !0, offset: 0, marker: { animation: { duration: 50 }, width: .01, color: "#999999" }, labels: { distance: 8, overflow: "justify", rotation: 0 }, minColor: "#e6e9ff", maxColor: "#0022ff", tickLength: 5, showInLegend: !0
            }
        }); y(a, "Core/Axis/Color/ColorAxis.js", [a["Core/Axis/Axis.js"], a["Core/Color/Color.js"], a["Core/Axis/Color/ColorAxisComposition.js"], a["Core/Axis/Color/ColorAxisDefaults.js"], a["Core/Legend/LegendSymbol.js"], a["Core/Series/SeriesRegistry.js"], a["Core/Utilities.js"]],
            function (a, n, q, z, k, l, A) {
                const { parse: g } = n, { series: x } = l, { extend: t, isArray: h, isNumber: F, merge: f, pick: c } = A; class e extends a {
                    static compose(b, d, c, p) { q.compose(e, b, d, c, p) } constructor(b, d) { super(b, d); this.beforePadding = !1; this.chart = void 0; this.coll = "colorAxis"; this.stops = this.options = this.dataClasses = void 0; this.visible = !0; this.init(b, d) } init(b, d) {
                        var c = b.options.legend || {}; const p = d.layout ? "vertical" !== d.layout : "vertical" !== c.layout, C = d.visible; c = f(e.defaultColorAxisOptions, d, {
                            showEmpty: !1, title: null,
                            visible: c.enabled && !1 !== C
                        }); this.side = d.side || p ? 2 : 1; this.reversed = d.reversed || !p; this.opposite = !p; super.init(b, c, "colorAxis"); this.userOptions = d; h(b.userOptions.colorAxis) && (b.userOptions.colorAxis[this.index] = d); d.dataClasses && this.initDataClasses(d); this.initStops(); this.horiz = p; this.zoomEnabled = !1
                    } initDataClasses(b) {
                        const d = this.chart, e = this.legendItem = this.legendItem || {}, p = b.dataClasses.length, c = this.options; let m, r = 0, v = d.options.chart.colorCount; this.dataClasses = m = []; e.labels = []; (b.dataClasses ||
                            []).forEach(function (b, u) { b = f(b); m.push(b); if (d.styledMode || !b.color) "category" === c.dataClassColor ? (d.styledMode || (u = d.options.colors, v = u.length, b.color = u[r]), b.colorIndex = r, r++, r === v && (r = 0)) : b.color = g(c.minColor).tweenTo(g(c.maxColor), 2 > p ? .5 : u / (p - 1)) })
                    } hasData() { return !!(this.tickPositions || []).length } setTickPositions() { if (!this.dataClasses) return super.setTickPositions() } initStops() {
                        this.stops = this.options.stops || [[0, this.options.minColor], [1, this.options.maxColor]]; this.stops.forEach(function (b) {
                            b.color =
                            g(b[1])
                        })
                    } setOptions(b) { super.setOptions(b); this.options.crosshair = this.options.marker } setAxisSize() { var b = this.legendItem && this.legendItem.symbol; const d = this.chart; var c = d.options.legend || {}; let p, f; b ? (this.left = c = b.attr("x"), this.top = p = b.attr("y"), this.width = f = b.attr("width"), this.height = b = b.attr("height"), this.right = d.chartWidth - c - f, this.bottom = d.chartHeight - p - b, this.len = this.horiz ? f : b, this.pos = this.horiz ? c : p) : this.len = (this.horiz ? c.symbolWidth : c.symbolHeight) || e.defaultLegendLength } normalizedValue(b) {
                        this.logarithmic &&
                        (b = this.logarithmic.log2lin(b)); return 1 - (this.max - b) / (this.max - this.min || 1)
                    } toColor(b, d) { const e = this.dataClasses; var c = this.stops; let f, m, r, v; if (e) for (v = e.length; v--;) { if (r = e[v], f = r.from, c = r.to, ("undefined" === typeof f || b >= f) && ("undefined" === typeof c || b <= c)) { m = r.color; d && (d.dataClass = v, d.colorIndex = r.colorIndex); break } } else { b = this.normalizedValue(b); for (v = c.length; v-- && !(b > c[v][0]);); f = c[v] || c[v + 1]; c = c[v + 1] || f; b = 1 - (c[0] - b) / (c[0] - f[0] || 1); m = f.color.tweenTo(c.color, b) } return m } getOffset() {
                        const b =
                            this.legendItem && this.legendItem.group, d = this.chart.axisOffset[this.side]; if (b) { this.axisParent = b; super.getOffset(); const c = this.chart.legend; c.allItems.forEach(function (b) { b instanceof e && b.drawLegendSymbol(c, b) }); c.render(); this.chart.getMargins(!0); this.added || (this.added = !0, this.labelLeft = 0, this.labelRight = this.width); this.chart.axisOffset[this.side] = d }
                    } setLegendColor() {
                        var b = this.reversed, d = b ? 1 : 0; b = b ? 0 : 1; d = this.horiz ? [d, 0, b, 0] : [0, b, 0, d]; this.legendColor = {
                            linearGradient: {
                                x1: d[0], y1: d[1], x2: d[2],
                                y2: d[3]
                            }, stops: this.stops
                        }
                    } drawLegendSymbol(b, d) {
                        var f; d = d.legendItem || {}; const p = b.padding, h = b.options, m = this.options.labels, r = c(h.itemDistance, 10), v = this.horiz, t = c(h.symbolWidth, v ? e.defaultLegendLength : 12), u = c(h.symbolHeight, v ? 12 : e.defaultLegendLength), B = c(h.labelPadding, v ? 16 : 30); this.setLegendColor(); d.symbol || (d.symbol = this.chart.renderer.symbol("roundedRect", 0, b.baseline - 11, t, u, { r: null !== (f = h.symbolRadius) && void 0 !== f ? f : 3 }).attr({ zIndex: 1 }).add(d.group)); d.labelWidth = t + p + (v ? r : c(m.x, m.distance) +
                            this.maxLabelLength); d.labelHeight = u + p + (v ? B : 0)
                    } setState(b) { this.series.forEach(function (d) { d.setState(b) }) } setVisible() { } getSeriesExtremes() {
                        const b = this.series; let d; let e, p, f = b.length, m, r; this.dataMin = Infinity; for (this.dataMax = -Infinity; f--;) {
                            p = b[f]; d = p.colorKey = c(p.options.colorKey, p.colorKey, p.pointValKey, p.zoneAxis, "y"); var v = p.pointArrayMap; e = p[d + "Min"] && p[d + "Max"]; if (p[d + "Data"]) var h = p[d + "Data"]; else if (v) { if (h = [], v = v.indexOf(d), m = p.yData, 0 <= v && m) for (r = 0; r < m.length; r++)h.push(c(m[r][v], m[r])) } else h =
                                p.yData; e ? (p.minColorValue = p[d + "Min"], p.maxColorValue = p[d + "Max"]) : (h = x.prototype.getExtremes.call(p, h), p.minColorValue = h.dataMin, p.maxColorValue = h.dataMax); "undefined" !== typeof p.minColorValue && (this.dataMin = Math.min(this.dataMin, p.minColorValue), this.dataMax = Math.max(this.dataMax, p.maxColorValue)); e || x.prototype.applyExtremes.call(p)
                        }
                    } drawCrosshair(b, d) {
                        const c = this.legendItem || {}, e = d && d.plotX, f = d && d.plotY, m = this.pos, h = this.len; let v; d && (v = this.toPixels(d.getNestedProperty(d.series.colorKey)), v <
                            m ? v = m - 2 : v > m + h && (v = m + h + 2), d.plotX = v, d.plotY = this.len - v, super.drawCrosshair(b, d), d.plotX = e, d.plotY = f, this.cross && !this.cross.addedToColorAxis && c.group && (this.cross.addClass("highcharts-coloraxis-marker").add(c.group), this.cross.addedToColorAxis = !0, this.chart.styledMode || "object" !== typeof this.crosshair || this.cross.attr({ fill: this.crosshair.color })))
                    } getPlotLinePath(b) {
                        const d = this.left, c = b.translatedValue, e = this.top; return F(c) ? this.horiz ? [["M", c - 4, e - 6], ["L", c + 4, e - 6], ["L", c, e], ["Z"]] : [["M", d, c], ["L",
                            d - 6, c + 6], ["L", d - 6, c - 6], ["Z"]] : super.getPlotLinePath(b)
                    } update(b, d) { const c = this.chart.legend; this.series.forEach(b => { b.isDirtyData = !0 }); (b.dataClasses && c.allItems || this.dataClasses) && this.destroyItems(); super.update(b, d); this.legendItem && this.legendItem.label && (this.setLegendColor(), c.colorizeItem(this, !0)) } destroyItems() { const b = this.chart, d = this.legendItem || {}; if (d.label) b.legend.destroyItem(this); else if (d.labels) for (const c of d.labels) b.legend.destroyItem(c); b.isDirtyLegend = !0 } destroy() {
                        this.chart.isDirtyLegend =
                        !0; this.destroyItems(); super.destroy(...[].slice.call(arguments))
                    } remove(b) { this.destroyItems(); super.remove(b) } getDataClassLegendSymbols() {
                        const b = this, d = b.chart, e = b.legendItem && b.legendItem.labels || [], f = d.options.legend, h = c(f.valueDecimals, -1), m = c(f.valueSuffix, ""), r = d => b.series.reduce((b, c) => { b.push(...c.points.filter(b => b.dataClass === d)); return b }, []); let v; e.length || b.dataClasses.forEach((c, u) => {
                            const f = c.from, p = c.to, { numberFormatter: a } = d; let C = !0; v = ""; "undefined" === typeof f ? v = "< " : "undefined" ===
                                typeof p && (v = "> "); "undefined" !== typeof f && (v += a(f, h) + m); "undefined" !== typeof f && "undefined" !== typeof p && (v += " - "); "undefined" !== typeof p && (v += a(p, h) + m); e.push(t({ chart: d, name: v, options: {}, drawLegendSymbol: k.rectangle, visible: !0, isDataClass: !0, setState: b => { for (const c of r(u)) c.setState(b) }, setVisible: function () { this.visible = C = b.visible = !C; for (const b of r(u)) b.setVisible(C); d.legend.colorizeItem(this, C) } }, c))
                        }); return e
                    }
                } e.defaultColorAxisOptions = z; e.defaultLegendLength = 200; e.keepProps = ["legendItem"];
                Array.prototype.push.apply(a.keepProps, e.keepProps); ""; return e
            }); y(a, "Maps/MapNavigationDefaults.js", [a["Core/Defaults.js"], a["Core/Utilities.js"]], function (a, n) {
                ({ extend: n } = n); const g = {
                    buttonOptions: { alignTo: "plotBox", align: "left", verticalAlign: "top", x: 0, width: 18, height: 18, padding: 5, style: { color: "#666666", fontSize: "1em", fontWeight: "bold" }, theme: { fill: "#ffffff", stroke: "#e6e6e6", "stroke-width": 1, "text-align": "center" } }, buttons: {
                        zoomIn: { onclick: function () { this.mapZoom(.5) }, text: "+", y: 0 }, zoomOut: {
                            onclick: function () { this.mapZoom(2) },
                            text: "-", y: 28
                        }
                    }, mouseWheelSensitivity: 1.1
                }; n(a.defaultOptions.lang, { zoomIn: "Zoom in", zoomOut: "Zoom out" }); return a.defaultOptions.mapNavigation = g
            }); y(a, "Maps/MapNavigation.js", [a["Core/Chart/Chart.js"], a["Core/Globals.js"], a["Core/Utilities.js"]], function (a, n, q) {
                function g(f) { f && (f.preventDefault && f.preventDefault(), f.stopPropagation && f.stopPropagation(), f.cancelBubble = !0) } function k(f) { this.navButtons = []; this.init(f) } const { doc: l } = n, { addEvent: A, extend: w, isNumber: x, merge: t, objectEach: h, pick: F } = q;
                k.prototype.init = function (f) { this.chart = f }; k.prototype.update = function (f) {
                    let c = this, e = this.chart, b = e.options.mapNavigation, d, a = function (b) { this.handler.call(e, b); g(b) }, p = c.navButtons; f && (b = e.options.mapNavigation = t(e.options.mapNavigation, f)); for (; p.length;)p.pop().destroy(); F(b.enableButtons, b.enabled) && !e.renderer.forExport && (c.navButtonsGroup || (c.navButtonsGroup = e.renderer.g().attr({ zIndex: 4 }).add()), h(b.buttons, function (f, m) {
                        var h; f = t(b.buttonOptions, f); !e.styledMode && f.theme && (d = f.theme, d.style =
                            t(f.theme.style, f.style)); const { text: v, width: E = 0, height: u = 0, padding: B = 0 } = f, D = e.renderer.button("+" !== v && "-" !== v && v || "", 0, 0, a, d, void 0, void 0, void 0, "zoomIn" === m ? "topbutton" : "bottombutton").addClass("highcharts-map-navigation highcharts-" + { zoomIn: "zoom-in", zoomOut: "zoom-out" }[m]).attr({ width: E, height: u, title: e.options.lang[m], padding: f.padding, zIndex: 5 }).add(c.navButtonsGroup); if ("+" === v || "-" === v) {
                                m = E + 1; const b = [["M", B + 3, B + u / 2], ["L", B + m - 3, B + u / 2]]; "+" === v && b.push(["M", B + m / 2, B + 3], ["L", B + m / 2, B + u - 3]);
                                e.renderer.path(b).addClass("highcharts-button-symbol").attr(e.styledMode ? {} : { stroke: null === (h = f.style) || void 0 === h ? void 0 : h.color, "stroke-width": 3, "stroke-linecap": "round" }).add(D)
                            } D.handler = f.onclick; A(D.element, "dblclick", g); p.push(D); w(f, { width: D.width, height: 2 * D.height }); if (e.hasLoaded) D.align(f, !1, f.alignTo); else { const b = A(e, "load", () => { D.element && D.align(f, !1, f.alignTo); b() }) }
                    }), f = function () {
                        var d = e.exportingGroup && e.exportingGroup.getBBox(); if (d) {
                            const e = c.navButtonsGroup.getBBox(); if (!(e.x >=
                                d.x + d.width || e.x + e.width <= d.x || e.y >= d.y + d.height || e.y + e.height <= d.y)) { const f = -e.y - e.height + d.y - 5; d = d.y + d.height - e.y + 5; c.navButtonsGroup.attr({ translateY: "bottom" === (b.buttonOptions && b.buttonOptions.verticalAlign) ? f : d }) }
                        }
                    }, e.hasLoaded || A(e, "render", f)); this.updateEvents(b)
                }; k.prototype.updateEvents = function (f) {
                    const c = this.chart; F(f.enableDoubleClickZoom, f.enabled) || f.enableDoubleClickZoomTo ? this.unbindDblClick = this.unbindDblClick || A(c.container, "dblclick", function (e) { c.pointer.onContainerDblClick(e) }) :
                        this.unbindDblClick && (this.unbindDblClick = this.unbindDblClick()); F(f.enableMouseWheelZoom, f.enabled) ? this.unbindMouseWheel = this.unbindMouseWheel || A(c.container, void 0 !== l.onwheel ? "wheel" : void 0 !== l.onmousewheel ? "mousewheel" : "DOMMouseScroll", function (e) { c.pointer.inClass(e.target, "highcharts-no-mousewheel") || (c.pointer.onContainerMouseWheel(e), g(e)); return !1 }) : this.unbindMouseWheel && (this.unbindMouseWheel = this.unbindMouseWheel())
                }; w(a.prototype, {
                    fitToBox: function (f, c) {
                        [["x", "width"], ["y", "height"]].forEach(function (e) {
                            const b =
                                e[0]; e = e[1]; f[b] + f[e] > c[b] + c[e] && (f[e] > c[e] ? (f[e] = c[e], f[b] = c[b]) : f[b] = c[b] + c[e] - f[e]); f[e] > c[e] && (f[e] = c[e]); f[b] < c[b] && (f[b] = c[b])
                        }); return f
                    }, mapZoom: function (f, c, e, b, d) { this.mapView && (x(f) && (f = Math.log(f) / Math.log(.5)), this.mapView.zoomBy(f, x(c) && x(e) ? this.mapView.projection.inverse([c, e]) : void 0, x(b) && x(d) ? [b, d] : void 0)) }
                }); A(a, "beforeRender", function () { this.mapNavigation = new k(this); this.mapNavigation.update() }); n.MapNavigation = k
            }); y(a, "Maps/MapPointer.js", [a["Core/Pointer.js"], a["Core/Utilities.js"]],
                function (a, n) {
                    const { defined: g, extend: z, pick: k, wrap: l } = n, A = a.prototype.normalize; let w = 0, x; z(a.prototype, {
                        normalize: function (t, h) { const a = this.chart; t = A.call(this, t, h); a && a.mapView && (h = a.mapView.pixelsToLonLat({ x: t.chartX - a.plotLeft, y: t.chartY - a.plotTop })) && z(t, h); return t }, onContainerDblClick: function (a) {
                            const h = this.chart; a = this.normalize(a); h.options.mapNavigation.enableDoubleClickZoomTo ? h.pointer.inClass(a.target, "highcharts-tracker") && h.hoverPoint && h.hoverPoint.zoomTo() : h.isInsidePlot(a.chartX -
                                h.plotLeft, a.chartY - h.plotTop) && h.mapZoom(.5, void 0, void 0, a.chartX, a.chartY)
                        }, onContainerMouseWheel: function (a) { const h = this.chart; a = this.normalize(a); const t = g(a.wheelDelta) && -a.wheelDelta / 120 || a.deltaY || a.detail; 1 <= Math.abs(t) && (w += Math.abs(t), x && clearTimeout(x), x = setTimeout(() => { w = 0 }, 50)); 10 > w && h.isInsidePlot(a.chartX - h.plotLeft, a.chartY - h.plotTop) && h.mapView && h.mapView.zoomBy((h.options.mapNavigation.mouseWheelSensitivity - 1) * -t, void 0, [a.chartX, a.chartY], 1 > Math.abs(t) ? !1 : void 0) }
                    }); l(a.prototype,
                        "zoomOption", function (a) { const h = this.chart.options.mapNavigation; k(h.enableTouchZoom, h.enabled) && (this.chart.zooming.pinchType = "xy"); a.apply(this, [].slice.call(arguments, 1)) }); l(a.prototype, "pinchTranslate", function (a, h, k, f, c, e, b) { a.call(this, h, k, f, c, e, b); "map" === this.chart.options.chart.type && this.hasZoom && (a = f.scaleX > f.scaleY, this.pinchTranslateDirection(!a, h, k, f, c, e, b, a ? f.scaleX : f.scaleY)) })
                }); y(a, "Series/ColorMapComposition.js", [a["Core/Series/SeriesRegistry.js"], a["Core/Utilities.js"]], function (a,
                    n) {
                        const { column: { prototype: g } } = a.seriesTypes, { addEvent: z, defined: k } = n; var l; (function (a) {
                            function l(a) { this.moveToTopOnHover && this.graphic && this.graphic.attr({ zIndex: a && "hover" === a.state ? 1 : 0 }) } const q = []; a.pointMembers = { dataLabelOnNull: !0, moveToTopOnHover: !0, isValid: function () { return null !== this.value && Infinity !== this.value && -Infinity !== this.value && (void 0 === this.value || !isNaN(this.value)) } }; a.seriesMembers = {
                                colorKey: "value", axisTypes: ["xAxis", "yAxis", "colorAxis"], parallelArrays: ["x", "y", "value"],
                                pointArrayMap: ["value"], trackerGroups: ["group", "markerGroup", "dataLabelsGroup"], colorAttribs: function (a) { const h = {}; !k(a.color) || a.state && "normal" !== a.state || (h[this.colorProp || "fill"] = a.color); return h }, pointAttribs: g.pointAttribs
                            }; a.compose = function (a) { const h = a.prototype.pointClass; n.pushUnique(q, h) && z(h, "afterSetState", l); return a }
                        })(l || (l = {})); return l
                }); y(a, "Maps/MapSymbols.js", [a["Core/Renderer/SVG/SVGRenderer.js"]], function (a) {
                    const { prototype: { symbols: g } } = a; g.bottombutton = function (a, n, k,
                        l, A) { if (A) { const a = (null === A || void 0 === A ? void 0 : A.r) || 0; A.brBoxY = n - a; A.brBoxHeight = l + a } return g.roundedRect(a, n, k, l, A) }; g.topbutton = function (a, n, k, l, A) { A && (A.brBoxHeight = l + ((null === A || void 0 === A ? void 0 : A.r) || 0)); return g.roundedRect(a, n, k, l, A) }; return g
                }); y(a, "Core/Chart/MapChart.js", [a["Core/Chart/Chart.js"], a["Core/Defaults.js"], a["Core/Renderer/SVG/SVGRenderer.js"], a["Core/Utilities.js"]], function (a, n, q, z) {
                    const { getOptions: k } = n, { merge: g, pick: A } = z; class w extends a {
                        init(a, t) {
                            const h = k().credits;
                            a = g({ chart: { panning: { enabled: !0, type: "xy" }, type: "map" }, credits: { mapText: A(h.mapText, ' \u00a9 <a href="{geojson.copyrightUrl}">{geojson.copyrightShort}</a>'), mapTextFull: A(h.mapTextFull, "{geojson.copyright}") }, mapView: {}, tooltip: { followTouchMove: !1 } }, a); super.init(a, t)
                        }
                    } (function (a) {
                        a.maps = {}; a.mapChart = function (t, h, k) { return new a(t, h, k) }; a.splitPath = function (a) {
                            "string" === typeof a && (a = a.replace(/([A-Za-z])/g, " $1 ").replace(/^\s*/, "").replace(/\s*$/, ""), a = a.split(/[ ,;]+/).map(a => /[A-za-z]/.test(a) ?
                                a : parseFloat(a))); return q.prototype.pathToSegments(a)
                        }
                    })(w || (w = {})); return w
                }); y(a, "Maps/MapUtilities.js", [], function () {
                    return {
                        boundsFromPath: function (a) { let g = -Number.MAX_VALUE, q = Number.MAX_VALUE, z = -Number.MAX_VALUE, k = Number.MAX_VALUE, l; a.forEach(a => { const w = a[a.length - 2]; a = a[a.length - 1]; "number" === typeof w && "number" === typeof a && (q = Math.min(q, w), g = Math.max(g, w), k = Math.min(k, a), z = Math.max(z, a), l = !0) }); if (l) return { x1: q, y1: k, x2: g, y2: z } }, pointInPolygon: function (a, n) {
                            let g, z, k, l = !1, A = a.x, w = a.y; a = 0; for (g =
                                n.length - 1; a < n.length; g = a++)z = n[a][1] > w, k = n[g][1] > w, z !== k && A < (n[g][0] - n[a][0]) * (w - n[a][1]) / (n[g][1] - n[a][1]) + n[a][0] && (l = !l); return l
                        }
                    }
                }); y(a, "Series/Map/MapPoint.js", [a["Series/ColorMapComposition.js"], a["Maps/MapUtilities.js"], a["Core/Series/SeriesRegistry.js"], a["Core/Utilities.js"]], function (a, n, q, z) {
                    const { boundsFromPath: k } = n; ({ seriesTypes: { scatter: n } } = q); const { extend: l, isNumber: g, pick: w } = z; class x extends n.prototype.pointClass {
                        constructor() {
                            super(...arguments); this.series = this.path = this.options =
                                void 0
                        } static getProjectedPath(a, h) { a.projectedPath || (h && a.geometry ? (h.hasCoordinates = !0, a.projectedPath = h.path(a.geometry)) : a.projectedPath = a.path); return a.projectedPath || [] } applyOptions(a, h) { const k = this.series; a = super.applyOptions.call(this, a, h); h = k.joinBy; k.mapData && k.mapMap && (h = super.getNestedProperty.call(a, h[1]), (h = "undefined" !== typeof h && k.mapMap[h]) ? l(a, h) : -1 !== k.pointArrayMap.indexOf("value") && (a.value = a.value || null)); return a } getProjectedBounds(a) {
                            var h = x.getProjectedPath(this, a); h = k(h);
                            var l = this.properties; const f = this.series.chart.mapView; if (h) { const c = l && l["hc-middle-lon"], e = l && l["hc-middle-lat"]; f && g(c) && g(e) ? (a = a.forward([c, e]), h.midX = a[0], h.midY = a[1]) : (a = l && l["hc-middle-x"], l = l && l["hc-middle-y"], h.midX = h.x1 + (h.x2 - h.x1) * w(this.middleX, g(a) ? a : .5), a = w(this.middleY, g(l) ? l : .5), this.geometry || (a = 1 - a), h.midY = h.y2 - (h.y2 - h.y1) * a); return h }
                        } onMouseOver(a) {
                            z.clearTimeout(this.colorInterval); if (!this.isNull && this.visible || this.series.options.nullInteraction) super.onMouseOver.call(this,
                                a); else this.series.onMouseOut(a)
                        } setVisible(a) { const h = a ? "show" : "hide"; this.visible = this.options.visible = !!a; if (this.dataLabel) this.dataLabel[h](); this.graphic && this.graphic.attr(this.series.pointAttribs(this)) } zoomTo(a) {
                            const h = this.series.chart, k = h.mapView; var f = this.bounds; if (k && f) {
                                const e = g(this.insetIndex) && k.insets[this.insetIndex]; if (e) {
                                    var c = e.projectedUnitsToPixels({ x: f.x1, y: f.y1 }); f = e.projectedUnitsToPixels({ x: f.x2, y: f.y2 }); c = k.pixelsToProjectedUnits({ x: c.x, y: c.y }); f = k.pixelsToProjectedUnits({
                                        x: f.x,
                                        y: f.y
                                    }); f = { x1: c.x, y1: c.y, x2: f.x, y2: f.y }
                                } k.fitToBounds(f, void 0, !1); this.series.isDirty = !0; h.redraw(a)
                            }
                        }
                    } l(x.prototype, { dataLabelOnNull: a.pointMembers.dataLabelOnNull, moveToTopOnHover: a.pointMembers.moveToTopOnHover, isValid: a.pointMembers.isValid }); return x
                }); y(a, "Maps/MapViewOptionsDefault.js", [], function () { return { center: [0, 0], fitToGeometry: void 0, maxZoom: void 0, padding: 0, projection: { name: void 0, parallels: void 0, rotation: void 0 }, zoom: void 0 } }); y(a, "Maps/MapViewInsetsOptionsDefault.js", [], function () {
                    return {
                        borderColor: "#cccccc",
                        borderWidth: 1, center: [0, 0], padding: "10%", relativeTo: "mapBoundingBox", units: "percent"
                    }
                }); y(a, "Extensions/GeoJSON.js", [a["Core/Chart/Chart.js"], a["Core/Templating.js"], a["Core/Globals.js"], a["Core/Utilities.js"]], function (a, n, q, z) {
                    function k(a, c) {
                        c || (c = Object.keys(a.objects)[0]); c = a.objects[c]; if (c["hc-decoded-geojson"]) return c["hc-decoded-geojson"]; let e = a.arcs; if (a.transform) {
                            const { scale: b, translate: d } = a.transform; e = a.arcs.map(a => {
                                let c = 0, e = 0; return a.map(a => {
                                    a = a.slice(); a[0] = (c += a[0]) * b[0] + d[0];
                                    a[1] = (e += a[1]) * b[1] + d[1]; return a
                                })
                            })
                        } const b = a => "number" === typeof a[0] ? a.reduce((b, a, d) => { let c = 0 > a ? e[~a] : e[a]; 0 > a ? (c = c.slice(0, 0 === d ? c.length : c.length - 1), c.reverse()) : d && (c = c.slice(1)); return b.concat(c) }, []) : a.map(b), d = c.geometries.map(a => ({ type: "Feature", properties: a.properties, geometry: { type: a.type, coordinates: a.coordinates || b(a.arcs) } })); a = {
                            type: "FeatureCollection", copyright: a.copyright, copyrightShort: a.copyrightShort, copyrightUrl: a.copyrightUrl, features: d, "hc-recommended-mapview": c["hc-recommended-mapview"],
                            bbox: a.bbox, title: a.title
                        }; return c["hc-decoded-geojson"] = a
                    } function l(a, c = "map", e) {
                        const b = []; a = "Topology" === a.type ? k(a) : a; a.features.forEach(function (a) {
                            var d = a.geometry || {}, e = d.type; d = d.coordinates; a = a.properties; let f; "map" !== c && "mapbubble" !== c || "Polygon" !== e && "MultiPolygon" !== e ? "mapline" !== c || "LineString" !== e && "MultiLineString" !== e ? "mappoint" === c && "Point" === e && d.length && (f = { geometry: { coordinates: d, type: e } }) : d.length && (f = { geometry: { coordinates: d, type: e } }) : d.length && (f = {
                                geometry: {
                                    coordinates: d,
                                    type: e
                                }
                            }); if (f) { e = a && (a.name || a.NAME); d = a && a.lon; const c = a && a.lat; b.push(t(f, { lat: "number" === typeof c ? c : void 0, lon: "number" === typeof d ? d : void 0, name: "string" === typeof e ? e : void 0, properties: a })) }
                        }); e && a.copyrightShort && (e.chart.mapCredits = g(e.chart.options.credits.mapText, { geojson: a }), e.chart.mapCreditsFull = g(e.chart.options.credits.mapTextFull, { geojson: a })); return b
                    } const { format: g } = n, { win: w } = q, { error: x, extend: t, merge: h, wrap: F } = z; ""; a.prototype.transformFromLatLon = function (a, c) {
                        var e = this.options.chart.proj4 ||
                            w.proj4; if (e) { var { jsonmarginX: b = 0, jsonmarginY: d = 0, jsonres: f = 1, scale: h = 1, xoffset: k = 0, xpan: m = 0, yoffset: r = 0, ypan: v = 0 } = c; a = e(c.crs, [a.lon, a.lat]); e = c.cosAngle || c.rotation && Math.cos(c.rotation); var l = c.sinAngle || c.rotation && Math.sin(c.rotation); c = c.rotation ? [a[0] * e + a[1] * l, -a[0] * l + a[1] * e] : a; return { x: ((c[0] - k) * h + m) * f + b, y: -(((r - c[1]) * h + v) * f - d) } } x(21, !1, this)
                    }; a.prototype.transformToLatLon = function (a, c) {
                        const e = this.options.chart.proj4 || w.proj4; if (!e) x(21, !1, this); else if (null !== a.y) {
                            var { jsonmarginX: b = 0,
                                jsonmarginY: d = 0, jsonres: f = 1, scale: h = 1, xoffset: k = 0, xpan: m = 0, yoffset: r = 0, ypan: v = 0 } = c; a = { x: ((a.x - b) / f - m) / h + k, y: ((a.y - d) / f + v) / h + r }; var l = c.cosAngle || c.rotation && Math.cos(c.rotation), u = c.sinAngle || c.rotation && Math.sin(c.rotation); c = e(c.crs, "WGS84", c.rotation ? { x: a.x * l + a.y * -u, y: a.x * u + a.y * l } : a); return { lat: c.y, lon: c.x }
                        }
                    }; a.prototype.fromPointToLatLon = function (a) { return this.mapView && this.mapView.projectedUnitsToLonLat(a) }; a.prototype.fromLatLonToPoint = function (a) { return this.mapView && this.mapView.lonLatToProjectedUnits(a) };
                    F(a.prototype, "addCredits", function (a, c) { c = h(!0, this.options.credits, c); this.mapCredits && (c.href = null); a.call(this, c); this.credits && this.mapCreditsFull && this.credits.attr({ title: this.mapCreditsFull }) }); q.geojson = l; q.topo2geo = k; return { geojson: l, topo2geo: k }
                }); y(a, "Core/Geometry/PolygonClip.js", [], function () {
                    const a = (a, k, l) => (k[0] - a[0]) * (l[1] - a[1]) > (k[1] - a[1]) * (l[0] - a[0]), n = (a, k, l, g) => {
                        var w = [a[0] - k[0], a[1] - k[1]]; const q = [l[0] - g[0], l[1] - g[1]]; a = a[0] * k[1] - a[1] * k[0]; l = l[0] * g[1] - l[1] * g[0]; g = 1 / (w[0] * q[1] -
                            w[1] * q[0]); w = [(a * q[0] - l * w[0]) * g, (a * q[1] - l * w[1]) * g]; w.isIntersection = !0; return w
                    }; var q; (function (g) {
                        g.clipLineString = (a, l) => { const k = []; a = g.clipPolygon(a, l, !1); for (l = 1; l < a.length; l++)a[l].isIntersection && a[l - 1].isIntersection && (k.push(a.splice(0, l)), l = 0), l === a.length - 1 && k.push(a); return k }; g.clipPolygon = (k, l, g = !0) => {
                            let q = l[l.length - 1], x, t, h = k; for (let w = 0; w < l.length; w++) {
                                const f = h; k = l[w]; h = []; x = g ? f[f.length - 1] : f[0]; for (let c = 0; c < f.length; c++)t = f[c], a(q, k, t) ? (a(q, k, x) || h.push(n(q, k, x, t)), h.push(t)) :
                                    a(q, k, x) && h.push(n(q, k, x, t)), x = t; q = k
                            } return h
                        }
                    })(q || (q = {})); return q
                }); y(a, "Maps/Projections/LambertConformalConic.js", [], function () {
                    const a = Math.sign || (a => 0 === a ? 0 : 0 < a ? 1 : -1), n = Math.PI / 180, q = Math.PI / 2; class z {
                        constructor(k) {
                            var l, g = (k.parallels || []).map(a => a * n); const w = g[0] || 0; g = null !== (l = g[1]) && void 0 !== l ? l : w; l = Math.cos(w); "object" === typeof k.projectedBounds && (this.projectedBounds = k.projectedBounds); k = w === g ? Math.sin(w) : Math.log(l / Math.cos(g)) / Math.log(Math.tan((q + g) / 2) / Math.tan((q + w) / 2)); 1e-10 > Math.abs(k) &&
                                (k = 1e-10 * (a(k) || 1)); this.n = k; this.c = l * Math.pow(Math.tan((q + w) / 2), k) / k
                        } forward(a) { var l = a[0] * n; const { c: k, n: g, projectedBounds: x } = this; a = a[1] * n; 0 < k ? a < -q + .000001 && (a = -q + .000001) : a > q - .000001 && (a = q - .000001); var t = k / Math.pow(Math.tan((q + a) / 2), g); a = t * Math.sin(g * l) * 63.78137; l = 63.78137 * (k - t * Math.cos(g * l)); t = [a, l]; x && (a < x.x1 || a > x.x2 || l < x.y1 || l > x.y2) && (t.outside = !0); return t } inverse(k) {
                            const l = k[0] / 63.78137; k = k[1] / 63.78137; const { c: g, n: w } = this; k = g - k; const x = a(w) * Math.sqrt(l * l + k * k); let t = Math.atan2(l, Math.abs(k)) *
                                a(k); 0 > k * w && (t -= Math.PI * a(l) * a(k)); return [t / w / n, (2 * Math.atan(Math.pow(g / x, 1 / w)) - q) / n]
                        }
                    } return z
                }); y(a, "Maps/Projections/EqualEarth.js", [], function () {
                    const a = Math.sqrt(3) / 2; class n {
                        constructor() { this.bounds = { x1: -200.37508342789243, x2: 200.37508342789243, y1: -97.52595454902263, y2: 97.52595454902263 } } forward(g) {
                            const q = Math.PI / 180, k = Math.asin(a * Math.sin(g[1] * q)), l = k * k, n = l * l * l; return [g[0] * q * Math.cos(k) * 74.03120656864502 / (a * (1.340264 + 3 * -.081106 * l + n * (7 * .000893 + .034164 * l))), 74.03120656864502 * k * (1.340264 + -.081106 *
                                l + n * (.000893 + .003796 * l))]
                        } inverse(g) { const q = g[0] / 74.03120656864502; g = g[1] / 74.03120656864502; const k = 180 / Math.PI; let l = g; let n; let w; for (w = 0; 12 > w; ++w) { var x = l * l; n = x * x * x; var t = l * (1.340264 + -.081106 * x + n * (.000893 + .003796 * x)) - g; x = 1.340264 + 3 * -.081106 * x + n * (7 * .000893 + .034164 * x); l -= t /= x; if (1e-9 > Math.abs(t)) break } x = l * l; return [k * a * q * (1.340264 + 3 * -.081106 * x + x * x * x * (7 * .000893 + .034164 * x)) / Math.cos(l), k * Math.asin(Math.sin(l) / a)] }
                    } return n
                }); y(a, "Maps/Projections/Miller.js", [], function () {
                    const a = Math.PI / 4, n = Math.PI /
                        180; class q { constructor() { this.bounds = { x1: -200.37508342789243, x2: 200.37508342789243, y1: -146.91480769173063, y2: 146.91480769173063 } } forward(g) { return [g[0] * n * 63.78137, 79.7267125 * Math.log(Math.tan(a + .4 * g[1] * n))] } inverse(g) { return [g[0] / 63.78137 / n, 2.5 * (Math.atan(Math.exp(g[1] / 63.78137 * .8)) - a) / n] } } return q
                }); y(a, "Maps/Projections/Orthographic.js", [], function () {
                    const a = Math.PI / 180; class n {
                        constructor() {
                            this.antimeridianCutting = !1; this.bounds = {
                                x1: -63.78460826781007, x2: 63.78460826781007, y1: -63.78460826781007,
                                y2: 63.78460826781007
                            }
                        } forward(g) { const n = g[0]; g = g[1] * a; g = [Math.cos(g) * Math.sin(n * a) * 63.78460826781007, 63.78460826781007 * Math.sin(g)]; if (-90 > n || 90 < n) g.outside = !0; return g } inverse(g) { const n = g[0] / 63.78460826781007; g = g[1] / 63.78460826781007; const k = Math.sqrt(n * n + g * g), l = Math.asin(k), q = Math.sin(l); return [Math.atan2(n * q, k * Math.cos(l)) / a, Math.asin(k && g * q / k) / a] }
                    } return n
                }); y(a, "Maps/Projections/WebMercator.js", [], function () {
                    const a = Math.PI / 180; class n {
                        constructor() {
                            this.bounds = {
                                x1: -200.37508342789243, x2: 200.37508342789243,
                                y1: -200.3750834278071, y2: 200.3750834278071
                            }; this.maxLatitude = 85.0511287798
                        } forward(g) { var n = Math.sin(g[1] * a); n = [63.78137 * g[0] * a, 63.78137 * Math.log((1 + n) / (1 - n)) / 2]; 85.0511287798 < Math.abs(g[1]) && (n.outside = !0); return n } inverse(g) { return [g[0] / (63.78137 * a), (2 * Math.atan(Math.exp(g[1] / 63.78137)) - Math.PI / 2) / a] }
                    } return n
                }); y(a, "Maps/Projections/ProjectionRegistry.js", [a["Maps/Projections/LambertConformalConic.js"], a["Maps/Projections/EqualEarth.js"], a["Maps/Projections/Miller.js"], a["Maps/Projections/Orthographic.js"],
                a["Maps/Projections/WebMercator.js"]], function (a, n, q, z, k) { return { EqualEarth: n, LambertConformalConic: a, Miller: q, Orthographic: z, WebMercator: k } }); y(a, "Maps/Projection.js", [a["Core/Geometry/PolygonClip.js"], a["Maps/Projections/ProjectionRegistry.js"], a["Core/Utilities.js"]], function (a, n, q) {
                    const { clipLineString: g, clipPolygon: k } = a, { clamp: l, erase: A } = q, w = 2 * Math.PI / 360, x = a => { -180 > a && (a += 360); 180 < a && (a -= 360); return a }; class t {
                        static add(a, g) { t.registry[a] = g } static greatCircle(a, g, f) {
                            const { atan2: c, cos: e, sin: b,
                                sqrt: d } = Math, h = a[1] * w, p = a[0] * w, l = g[1] * w, m = g[0] * w; var r = l - h, v = m - p; r = b(r / 2) * b(r / 2) + e(h) * e(l) * b(v / 2) * b(v / 2); r = 2 * c(d(r), d(1 - r)); var k = Math.round(6371E3 * r / 5E5); v = []; f && v.push(a); if (1 < k) for (a = 1 / k, k = a; .999 > k; k += a) { var u = b((1 - k) * r) / b(r); const a = b(k * r) / b(r); var B = u * e(h) * e(p) + a * e(l) * e(m); const f = u * e(h) * b(p) + a * e(l) * b(m); u = u * b(h) + a * b(l); u = c(u, d(B * B + f * f)); B = c(f, B); v.push([B / w, u / w]) } f && v.push(g); return v
                        } static insertGreatCircles(a) {
                            let h = a.length - 1; for (; h--;)if (10 < Math.max(Math.abs(a[h][0] - a[h + 1][0]), Math.abs(a[h][1] -
                                a[h + 1][1]))) { const f = t.greatCircle(a[h], a[h + 1]); f.length && a.splice(h + 1, 0, ...f) }
                        } static toString(a) { const { name: h, rotation: f } = a || {}; return [h, f && f.join(",")].join(";") } constructor(a = {}) {
                            this.hasGeoProjection = this.hasCoordinates = !1; this.maxLatitude = 90; this.options = a; const { name: h, projectedBounds: f, rotation: c } = a; this.rotator = c ? this.getRotator(c) : void 0; const e = h ? t.registry[h] : void 0; e && (this.def = new e(a)); const { def: b, rotator: d } = this; b && (this.maxLatitude = b.maxLatitude || 90, this.hasGeoProjection = !0); d &&
                                b ? (this.forward = a => b.forward(d.forward(a)), this.inverse = a => d.inverse(b.inverse(a))) : b ? (this.forward = a => b.forward(a), this.inverse = a => b.inverse(a)) : d && (this.forward = d.forward, this.inverse = d.inverse); this.bounds = "world" === f ? b && b.bounds : f
                        } lineIntersectsBounds(a) {
                            const { x1: h, x2: f, y1: c, y2: e } = this.bounds || {}, b = (a, b, d) => { const [c, e] = a; a = b ? 0 : 1; if ("number" === typeof d && c[b] >= d !== e[b] >= d) return a = c[a] + (d - c[b]) / (e[b] - c[b]) * (e[a] - c[a]), b ? [a, d] : [d, a] }; let d, g = a[0]; if (d = b(a, 0, h)) g = d, a[1] = d; else if (d = b(a, 0, f)) g = d,
                                a[1] = d; if (d = b(a, 1, c)) g = d; else if (d = b(a, 1, e)) g = d; return g
                        } getRotator(a) {
                            const h = a[0] * w, f = (a[1] || 0) * w; a = (a[2] || 0) * w; const c = Math.cos(f), e = Math.sin(f), b = Math.cos(a), d = Math.sin(a); if (0 !== h || 0 !== f || 0 !== a) return {
                                forward: a => { var f = a[0] * w + h, g = a[1] * w, m = Math.cos(g); a = Math.cos(f) * m; f = Math.sin(f) * m; g = Math.sin(g); m = g * c + a * e; return [Math.atan2(f * b - m * d, a * c - g * e) / w, Math.asin(m * b + f * d) / w] }, inverse: a => {
                                    var f = a[0] * w, g = a[1] * w, m = Math.cos(g); a = Math.cos(f) * m; f = Math.sin(f) * m; g = Math.sin(g); m = g * b - f * d; return [(Math.atan2(f * b + g *
                                        d, a * c + m * e) - h) / w, Math.asin(m * c - a * e) / w]
                                }
                            }
                        } forward(a) { return a } inverse(a) { return a } cutOnAntimeridian(a, g) {
                            const f = [], c = [a]; a.forEach((b, d) => { let c = a[d - 1]; if (!d) { if (!g) return; c = a[a.length - 1] } const e = c[0]; var u = b[0]; (-90 > e || 90 < e) && (-90 > u || 90 < u) && 0 < e !== 0 < u && (u = l((180 - (e + 360) % 360) / ((u + 360) % 360 - (e + 360) % 360), 0, 1), f.push({ i: d, lat: c[1] + u * (b[1] - c[1]), direction: 0 > e ? 1 : -1, previousLonLat: c, lonLat: b })) }); if (f.length) if (g) {
                                if (1 === f.length % 2) { var e = f.slice().sort((a, b) => Math.abs(b.lat) - Math.abs(a.lat))[0]; A(f, e) } for (var b =
                                    f.length - 2; 0 <= b;) { var d = f[b].i, h = x(180 + .000001 * f[b].direction), p = x(180 - .000001 * f[b].direction); d = a.splice(d, f[b + 1].i - d, ...t.greatCircle([h, f[b].lat], [h, f[b + 1].lat], !0)); d.push(...t.greatCircle([p, f[b + 1].lat], [p, f[b].lat], !0)); c.push(d); b -= 2 } if (e) for (d = 0; d < c.length; d++) {
                                        const { direction: a, lat: f } = e; b = c[d]; p = b.indexOf(e.lonLat); if (-1 < p) {
                                            d = (0 > f ? -1 : 1) * this.maxLatitude; var k = x(180 + .000001 * a); h = x(180 - .000001 * a); const c = t.greatCircle([k, f], [k, d], !0); for (k += 120 * a; -180 < k && 180 > k; k += 120 * a)c.push([k, d]); c.push(...t.greatCircle([h,
                                                d], [h, e.lat], !0)); b.splice(p, 0, ...c); break
                                        }
                                    }
                            } else for (e = f.length; e--;)b = a.splice(f[e].i, a.length, [x(180 + .000001 * f[e].direction), f[e].lat]), b.unshift([x(180 - .000001 * f[e].direction), f[e].lat]), c.push(b); return c
                        } path(a) {
                            const { bounds: h, def: f, rotator: c } = this, e = [], b = "Polygon" === a.type || "MultiPolygon" === a.type, d = this.hasGeoProjection, l = !f || !1 !== f.antimeridianCutting, p = l ? c : void 0, n = l ? f || this : this; let m; h && (m = [[h.x1, h.y1], [h.x2, h.y1], [h.x2, h.y2], [h.x1, h.y2]]); const r = a => {
                                a = a.map(a => {
                                    if (l) {
                                        p && (a = p.forward(a));
                                        let b = a[0]; .000001 > Math.abs(b - 180) && (b = 180 > b ? 179.999999 : 180.000001); a = [b, a[1]]
                                    } return a
                                }); let c = [a]; d && (t.insertGreatCircles(a), l && (c = this.cutOnAntimeridian(a, b))); c.forEach(a => {
                                    if (!(2 > a.length)) {
                                        var c = !1, u = !1, f = a => { c ? e.push(["L", a[0], a[1]]) : (e.push(["M", a[0], a[1]]), c = !0) }, v = !1, p = !1, r = a.map(a => { a = n.forward(a); a.outside ? v = !0 : p = !0; Infinity === a[1] ? a[1] = 1E10 : -Infinity === a[1] && (a[1] = -1E10); return a }); if (l) {
                                            b && r.push(r[0]); if (v) {
                                                if (!p) return; if (m) if (b) r = k(r, m); else if (h) {
                                                    g(r, m).forEach(a => { c = !1; a.forEach(f) });
                                                    return
                                                }
                                            } r.forEach(f)
                                        } else for (let e = 0; e < r.length; e++) { const g = a[e], h = r[e]; if (h.outside) u = !0; else { if (b && !w) { var w = g; a.push(g); r.push(h) } u && q && (b && d ? t.greatCircle(q, g).forEach(a => f(n.forward(a))) : c = !1); f(h); var q = g; u = !1 } }
                                    }
                                })
                            }; "LineString" === a.type ? r(a.coordinates) : "MultiLineString" === a.type ? a.coordinates.forEach(a => r(a)) : "Polygon" === a.type ? (a.coordinates.forEach(a => r(a)), e.length && e.push(["Z"])) : "MultiPolygon" === a.type && (a.coordinates.forEach(a => { a.forEach(a => r(a)) }), e.length && e.push(["Z"])); return e
                        }
                    }
                    t.registry = n; return t
                }); y(a, "Maps/MapView.js", [a["Maps/MapViewOptionsDefault.js"], a["Maps/MapViewInsetsOptionsDefault.js"], a["Extensions/GeoJSON.js"], a["Core/Chart/MapChart.js"], a["Maps/MapUtilities.js"], a["Maps/Projection.js"], a["Core/Utilities.js"]], function (a, n, q, z, k, l, A) {
                    const { topo2geo: g } = q, { maps: x } = z, { boundsFromPath: t, pointInPolygon: h } = k, { addEvent: F, clamp: f, fireEvent: c, isArray: e, isNumber: b, isObject: d, isString: E, merge: p, pick: C, relativeLength: m } = A, r = (a, b) => {
                        const { width: c, height: d } = b; return Math.log(400.979322 /
                            Math.max((a.x2 - a.x1) / (c / 256), (a.y2 - a.y1) / (d / 256))) / Math.log(2)
                    }; class v {
                        static mergeInsets(a, b) { const c = a => { const b = {}; a.forEach((a, c) => { b[a && a.id || `i${c}`] = a }); return b }, d = p(c(a), c(b)); return Object.keys(d).map(a => d[a]) } createInsets() { const a = this.options, b = a.insets; b && b.forEach(b => { b = new G(this, p(a.insetOptions, b)); this.insets.push(b) }) } constructor(d, e) {
                            this.allowTransformAnimation = !0; this.insets = []; this.padding = [0, 0, 0, 0]; this.eventsToUnbind = []; let u, f; if (!(this instanceof G)) {
                                var g = [d.options.chart.map,
                                ...(d.options.series || []).map(a => a.mapData)].map(a => this.getGeoMap(a)); const a = []; g.forEach(b => { if (b && (u || (u = b["hc-recommended-mapview"]), b.bbox)) { const [c, d, e, u] = b.bbox; a.push({ x1: c, y1: d, x2: e, y2: u }) } }); const b = a.length && v.compositeBounds(a); c(d, "beforeMapViewInit", { geoBounds: b }, function () { if (b) { const { x1: a, y1: c, x2: d, y2: e } = b; f = 180 < d - a && 90 < e - c ? { name: "EqualEarth" } : { name: "LambertConformalConic", parallels: [c, e], rotation: [-(a + d) / 2] } } }); this.geoMap = g[0]
                            } this.userOptions = e || {}; d.options.mapView && d.options.mapView.recommendedMapView &&
                                (u = d.options.mapView.recommendedMapView); g = p(a, { projection: f }, u, e); const h = u && u.insets; e = e && e.insets; h && e && (g.insets = v.mergeInsets(h, e)); this.chart = d; this.center = g.center; this.options = g; this.projection = new l(g.projection); this.playingField = d.plotBox; this.zoom = g.zoom || 0; this.minZoom = g.minZoom; this.createInsets(); this.eventsToUnbind.push(F(d, "afterSetChartSize", () => {
                                    this.playingField = this.getField(); if (void 0 === this.minZoom || this.minZoom === this.zoom) this.fitToBounds(void 0, void 0, !1), !this.chart.hasRendered &&
                                        b(this.userOptions.zoom) && (this.zoom = this.userOptions.zoom), this.userOptions.center && p(!0, this.center, this.userOptions.center)
                                })); this.setUpEvents()
                        } fitToBounds(a, b, c = !0, d) {
                            const u = a || this.getProjectedBounds(); if (u) {
                                var f = C(b, a ? 0 : this.options.padding); b = this.getField(!1); f = e(f) ? f : [f, f, f, f]; this.padding = [m(f[0], b.height), m(f[1], b.width), m(f[2], b.height), m(f[3], b.width)]; this.playingField = this.getField(); b = r(u, this.playingField); a || (this.minZoom = b); a = this.projection.inverse([(u.x2 + u.x1) / 2, (u.y2 + u.y1) /
                                    2]); this.setView(a, b, c, d)
                            }
                        } getField(a = !0) { a = a ? this.padding : [0, 0, 0, 0]; return { x: a[3], y: a[0], width: this.chart.plotWidth - a[1] - a[3], height: this.chart.plotHeight - a[0] - a[2] } } getGeoMap(a) { if (E(a)) return x[a] && "Topology" === x[a].type ? g(x[a]) : x[a]; if (d(a, !0)) { if ("FeatureCollection" === a.type) return a; if ("Topology" === a.type) return g(a) } } getMapBBox() {
                            const a = this.getProjectedBounds(), b = this.getScale(); if (a) {
                                const c = this.padding, d = this.projectedUnitsToPixels({ x: a.x1, y: a.y2 }); return {
                                    width: (a.x2 - a.x1) * b + c[1] + c[3],
                                    height: (a.y2 - a.y1) * b + c[0] + c[2], x: d.x - c[3], y: d.y - c[0]
                                }
                            }
                        } getProjectedBounds() {
                            const a = this.projection; var b = this.chart.series.reduce((a, b) => { const c = b.getProjectedBounds && b.getProjectedBounds(); c && !1 !== b.options.affectsMapView && a.push(c); return a }, []), c = this.options.fitToGeometry; return c ? (this.fitToGeometryCache || ("MultiPoint" === c.type ? (c = c.coordinates.map(b => a.forward(b)), b = c.map(a => a[0]), c = c.map(a => a[1]), this.fitToGeometryCache = {
                                x1: Math.min.apply(0, b), x2: Math.max.apply(0, b), y1: Math.min.apply(0, c),
                                y2: Math.max.apply(0, c)
                            }) : this.fitToGeometryCache = t(a.path(c))), this.fitToGeometryCache) : this.projection.bounds || v.compositeBounds(b)
                        } getScale() { return 256 / 400.979322 * Math.pow(2, this.zoom) } getSVGTransform() { const { x: a, y: b, width: c, height: d } = this.playingField, e = this.projection.forward(this.center); var f = this.projection.hasCoordinates ? -1 : 1; const g = this.getScale(); f *= g; return { scaleX: g, scaleY: f, translateX: a + c / 2 - e[0] * g, translateY: b + d / 2 - e[1] * f } } lonLatToPixels(a) { if (a = this.lonLatToProjectedUnits(a)) return this.projectedUnitsToPixels(a) } lonLatToProjectedUnits(a) {
                            const b =
                                this.chart, c = b.mapTransforms; if (c) { for (const e in c) if (Object.hasOwnProperty.call(c, e) && c[e].hitZone) { var d = b.transformFromLatLon(a, c[e]); if (d && h(d, c[e].hitZone.coordinates[0])) return d } return b.transformFromLatLon(a, c["default"]) } for (d of this.insets) if (d.options.geoBounds && h({ x: a.lon, y: a.lat }, d.options.geoBounds.coordinates[0])) return a = d.projection.forward([a.lon, a.lat]), a = d.projectedUnitsToPixels({ x: a[0], y: a[1] }), this.pixelsToProjectedUnits(a); a = this.projection.forward([a.lon, a.lat]); if (!a.outside) return {
                                    x: a[0],
                                    y: a[1]
                                }
                        } projectedUnitsToLonLat(a) {
                            var b = this.chart; const c = b.mapTransforms; if (c) { for (const d in c) if (Object.hasOwnProperty.call(c, d) && c[d].hitZone && h(a, c[d].hitZone.coordinates[0])) return b.transformToLatLon(a, c[d]); return b.transformToLatLon(a, c["default"]) } b = this.projectedUnitsToPixels(a); for (var d of this.insets) if (d.hitZone && h(b, d.hitZone.coordinates[0])) return a = d.pixelsToProjectedUnits(b), d = d.projection.inverse([a.x, a.y]), { lon: d[0], lat: d[1] }; d = this.projection.inverse([a.x, a.y]); return {
                                lon: d[0],
                                lat: d[1]
                            }
                        } redraw(a) { this.chart.series.forEach(a => { a.useMapGeometry && (a.isDirty = !0) }); this.chart.redraw(a) } setView(a, d, e = !0, f) {
                            a && (this.center = a); "number" === typeof d && ("number" === typeof this.minZoom && (d = Math.max(d, this.minZoom)), "number" === typeof this.options.maxZoom && (d = Math.min(d, this.options.maxZoom)), b(d) && (this.zoom = d)); var g = this.getProjectedBounds(); if (g) {
                                a = this.projection.forward(this.center); const { x: b, y: c, width: e, height: f } = this.playingField; d = this.getScale(); var h = this.projectedUnitsToPixels({
                                    x: g.x1,
                                    y: g.y1
                                }), u = this.projectedUnitsToPixels({ x: g.x2, y: g.y2 }); g = [(g.x1 + g.x2) / 2, (g.y1 + g.y2) / 2]; if (!this.chart.series.some(a => a.isDrilling)) { const m = h.x, r = u.y; u = u.x; h = h.y; u - m < e ? a[0] = g[0] : m < b && u < b + e ? a[0] += Math.max(m - b, u - e - b) / d : u > b + e && m > b && (a[0] += Math.min(u - e - b, m - b) / d); h - r < f ? a[1] = g[1] : r < c && h < c + f ? a[1] -= Math.max(r - c, h - f - c) / d : h > c + f && r > c && (a[1] -= Math.min(h - f - c, r - c) / d); this.center = this.projection.inverse(a) } this.insets.forEach(a => { a.options.field && (a.hitZone = a.getHitZone(), a.playingField = a.getField()) }); this.render()
                            } c(this,
                                "afterSetView"); e && this.redraw(f)
                        } projectedUnitsToPixels(a) { const b = this.getScale(), c = this.projection.forward(this.center), d = this.playingField; return { x: d.x + d.width / 2 - b * (c[0] - a.x), y: d.y + d.height / 2 + b * (c[1] - a.y) } } pixelsToLonLat(a) { return this.projectedUnitsToLonLat(this.pixelsToProjectedUnits(a)) } pixelsToProjectedUnits(a) { const { x: b, y: c } = a; a = this.getScale(); const d = this.projection.forward(this.center), e = this.playingField; return { x: d[0] + (b - (e.x + e.width / 2)) / a, y: d[1] - (c - (e.y + e.height / 2)) / a } } setUpEvents() {
                            const { chart: a } =
                                this; let c, d, e; const g = g => {
                                    var h = a.pointer.pinchDown, m = this.projection; let { mouseDownX: u, mouseDownY: p } = a; 1 === h.length && (u = h[0].chartX, p = h[0].chartY); if ("number" === typeof u && "number" === typeof p) {
                                        h = `${u},${p}`; const { chartX: v, chartY: k } = g.originalEvent; h !== d && (d = h, c = this.projection.forward(this.center), e = (this.projection.options.rotation || [0, 0]).slice()); h = (h = m.def && m.def.bounds) && r(h, this.playingField) || -Infinity; if ("Orthographic" === m.options.name && (this.minZoom || Infinity) < 1.3 * h) {
                                            if (h = 440 / (this.getScale() *
                                                Math.min(a.plotWidth, a.plotHeight)), e) { m = (u - v) * h - e[0]; h = f(-e[1] - (p - k) * h, -80, 80); const b = this.zoom; this.update({ projection: { rotation: [-m, -h] } }, !1); this.fitToBounds(void 0, void 0, !1); this.zoom = b; a.redraw(!1) }
                                        } else b(v) && b(k) && (m = this.getScale(), m = this.projection.inverse([c[0] + (u - v) / m, c[1] - (p - k) / m * (this.projection.hasCoordinates ? 1 : -1)]), this.setView(m, void 0, !0, !1)); g.preventDefault()
                                    }
                                }; F(a, "pan", g); F(a, "touchpan", g); F(a, "selection", b => {
                                    if (b.resetSelection) this.zoomBy(); else {
                                        const c = b.x - a.plotLeft, d =
                                            b.y - a.plotTop, { y: e, x: f } = this.pixelsToProjectedUnits({ x: c, y: d }), { y: g, x: h } = this.pixelsToProjectedUnits({ x: c + b.width, y: d + b.height }); this.fitToBounds({ x1: f, y1: e, x2: h, y2: g }, void 0, !0, b.originalEvent.touches ? !1 : void 0); /^touch/.test(b.originalEvent.type) || a.showResetZoom(); b.preventDefault()
                                    }
                                })
                        } render() { this.group || (this.group = this.chart.renderer.g("map-view").attr({ zIndex: 4 }).add()) } update(a, c = !0, d) {
                            var e = a.projection; e = e && l.toString(e) !== l.toString(this.options.projection); let f = !1; p(!0, this.userOptions,
                                a); p(!0, this.options, a); "insets" in a && (this.insets.forEach(a => a.destroy()), this.insets.length = 0, f = !0); (e || "fitToGeometry" in a) && delete this.fitToGeometryCache; if (e || f) this.chart.series.forEach(a => { const b = a.transformGroups; a.clearBounds && a.clearBounds(); a.isDirty = !0; a.isDirtyData = !0; if (f && b) for (; 1 < b.length;)(a = b.pop()) && a.destroy() }), e && (this.projection = new l(this.options.projection)), f && this.createInsets(), a.center || !Object.hasOwnProperty.call(a, "zoom") || b(a.zoom) || this.fitToBounds(void 0, void 0,
                                    !1); a.center || b(a.zoom) ? this.setView(this.options.center, a.zoom, !1) : "fitToGeometry" in a && this.fitToBounds(void 0, void 0, !1); c && this.chart.redraw(d)
                        } zoomBy(a, b, c, d) {
                            var e = this.chart; const f = this.projection.forward(this.center); let [g, h] = b ? this.projection.forward(b) : []; if ("number" === typeof a) {
                                a = this.zoom + a; if (c) { const [a, d] = c; c = this.getScale(); b = d - e.plotTop - e.plotHeight / 2; g = f[0] + (a - e.plotLeft - e.plotWidth / 2) / c; h = f[1] + b / c } if ("number" === typeof g && "number" === typeof h) {
                                    e = 1 - Math.pow(2, this.zoom) / Math.pow(2,
                                        a); var m = f[1] - h; f[0] -= (f[0] - g) * e; f[1] += m * e; m = this.projection.inverse(f)
                                } this.setView(m, a, void 0, d)
                            } else this.fitToBounds(void 0, void 0, void 0, d)
                        }
                    } v.compositeBounds = a => { if (a.length) return a.slice(1).reduce((a, b) => { a.x1 = Math.min(a.x1, b.x1); a.y1 = Math.min(a.y1, b.y1); a.x2 = Math.max(a.x2, b.x2); a.y2 = Math.max(a.y2, b.y2); return a }, p(a[0])) }; class G extends v {
                        constructor(a, b) {
                            super(a.chart, b); this.id = b.id; this.mapView = a; this.options = p(n, b); this.allBounds = []; this.options.geoBounds && (a = a.projection.path(this.options.geoBounds),
                                this.geoBoundsProjectedBox = t(a), this.geoBoundsProjectedPolygon = a.map(a => [a[1] || 0, a[2] || 0]))
                        } getField(a = !0) { var c = this.hitZone; if (c) { var d = a ? this.padding : [0, 0, 0, 0]; c = c.coordinates[0]; var e = c.map(a => a[0]); const f = c.map(a => a[1]); c = Math.min.apply(0, e) + d[3]; e = Math.max.apply(0, e) - d[1]; const g = Math.min.apply(0, f) + d[0]; d = Math.max.apply(0, f) - d[2]; if (b(c) && b(g)) return { x: c, y: g, width: e - c, height: d - g } } return super.getField.call(this, a) } getHitZone() {
                            const { chart: a, mapView: b, options: c } = this; var { coordinates: d } = c.field ||
                                {}; if (d) { d = d[0]; if ("percent" === c.units) { const e = "mapBoundingBox" === c.relativeTo && b.getMapBBox() || p(a.plotBox, { x: 0, y: 0 }); d = d.map(a => [m(`${a[0]}%`, e.width, e.x), m(`${a[1]}%`, e.height, e.y)]) } return { type: "Polygon", coordinates: [d] } }
                        } getProjectedBounds() { return v.compositeBounds(this.allBounds) } isInside(a) { const { geoBoundsProjectedBox: b, geoBoundsProjectedPolygon: c } = this; return !!(b && a.x >= b.x1 && a.x <= b.x2 && a.y >= b.y1 && a.y <= b.y2 && c && h(a, c)) } render() {
                            const { chart: a, mapView: b, options: c } = this; var d = c.borderPath ||
                                c.field; if (d && b.group) {
                                    let e = !0; this.border || (this.border = a.renderer.path().addClass("highcharts-mapview-inset-border").add(b.group), e = !1); a.styledMode || this.border.attr({ stroke: c.borderColor, "stroke-width": c.borderWidth }); const f = Math.round(this.border.strokeWidth()) % 2 / 2, g = "mapBoundingBox" === c.relativeTo && b.getMapBBox() || b.playingField; d = (d.coordinates || []).reduce((b, d) => d.reduce((b, d, e) => {
                                        let [h, r] = d; "percent" === c.units && (h = a.plotLeft + m(`${h}%`, g.width, g.x), r = a.plotTop + m(`${r}%`, g.height, g.y));
                                        h = Math.floor(h) + f; r = Math.floor(r) + f; b.push(0 === e ? ["M", h, r] : ["L", h, r]); return b
                                    }, b), []); this.border[e ? "animate" : "attr"]({ d })
                                }
                        } destroy() { this.border && (this.border = this.border.destroy()); this.eventsToUnbind.forEach(a => a()) } setUpEvents() { }
                    } F(z, "afterInit", function () { this.mapView = new v(this, this.options.mapView) }); return v
                }); y(a, "Series/Map/MapSeries.js", [a["Core/Animation/AnimationUtilities.js"], a["Series/ColorMapComposition.js"], a["Series/CenteredUtilities.js"], a["Core/Globals.js"], a["Core/Chart/MapChart.js"],
                a["Series/Map/MapPoint.js"], a["Maps/MapView.js"], a["Core/Series/Series.js"], a["Core/Series/SeriesRegistry.js"], a["Core/Renderer/SVG/SVGRenderer.js"], a["Core/Utilities.js"]], function (a, n, q, z, k, l, A, w, x, t, h) {
                    const { animObject: g, stop: f } = a; ({ noop: a } = z); const { splitPath: c } = k, { seriesTypes: { column: e, scatter: b } } = x, { extend: d, find: E, fireEvent: p, getNestedProperty: C, isArray: m, defined: r, isNumber: v, isObject: G, merge: u, objectEach: B, pick: D, splat: H } = h; class y extends b {
                        constructor() {
                            super(...arguments); this.points =
                                this.options = this.joinBy = this.group = this.data = this.chart = void 0; this.processedData = []
                        } animate(a) { const { chart: b, group: c } = this, d = g(this.options.animation); a ? c.attr({ translateX: b.plotLeft + b.plotWidth / 2, translateY: b.plotTop + b.plotHeight / 2, scaleX: .001, scaleY: .001 }) : c.animate({ translateX: b.plotLeft, translateY: b.plotTop, scaleX: 1, scaleY: 1 }, d) } clearBounds() { this.points.forEach(a => { delete a.bounds; delete a.insetIndex; delete a.projectedPath }); delete this.bounds } doFullTranslate() {
                            return !(!this.isDirtyData &&
                                !this.chart.isResizing && this.hasRendered)
                        } drawMapDataLabels() { w.prototype.drawDataLabels.call(this); this.dataLabelsGroup && this.dataLabelsGroup.clip(this.chart.clipRect) } drawPoints() {
                            const a = this, { chart: b, group: c, transformGroups: d = [] } = this, { mapView: h, renderer: m } = b; h && (this.transformGroups = d, d[0] || (d[0] = m.g().add(c)), h.insets.forEach((a, b) => { d[b + 1] || d.push(m.g().add(c)) }), this.doFullTranslate() && (this.points.forEach(a => {
                                const { graphic: c, shapeArgs: e } = a; a.group = d["number" === typeof a.insetIndex ? a.insetIndex +
                                    1 : 0]; c && c.parentGroup !== a.group && c.add(a.group); e && b.hasRendered && !b.styledMode && (e.fill = this.pointAttribs(a, a.state).fill)
                            }), e.prototype.drawPoints.apply(this), this.points.forEach(c => {
                                const d = c.graphic; if (d) {
                                    const e = d.animate; let f = ""; c.name && (f += "highcharts-name-" + c.name.replace(/ /g, "-").toLowerCase()); c.properties && c.properties["hc-key"] && (f += " highcharts-key-" + c.properties["hc-key"].toString().toLowerCase()); f && d.addClass(f); b.styledMode && d.css(this.pointAttribs(c, c.selected && "select" || void 0));
                                    d.animate = function (c, f, g) { const h = v(c["stroke-width"]) && !v(d["stroke-width"]), m = v(d["stroke-width"]) && !v(c["stroke-width"]); if (h || m) { const e = D(a.getStrokeWidth(a.options), 1) / (b.mapView && b.mapView.getScale() || 1); h && (d["stroke-width"] = e); m && (c["stroke-width"] = e) } return e.call(d, c, f, m ? function () { d.element.removeAttribute("stroke-width"); delete d["stroke-width"]; g && g.apply(this, arguments) } : g) }
                                }
                            })), d.forEach((c, d) => {
                                const e = (0 === d ? h : h.insets[d - 1]).getSVGTransform(), r = D(this.getStrokeWidth(this.options),
                                    1), p = e.scaleX, v = 0 < e.scaleY ? 1 : -1, k = b => { (a.points || []).forEach(a => { const c = a.graphic; let d; c && c["stroke-width"] && (d = this.getStrokeWidth(a.options)) && c.attr({ "stroke-width": d / b }) }) }; if (m.globalAnimation && b.hasRendered && h.allowTransformAnimation) {
                                        const a = Number(c.attr("translateX")), b = Number(c.attr("translateY")), f = Number(c.attr("scaleX")), h = (d, g) => { d = f + (p - f) * g.pos; c.attr({ translateX: a + (e.translateX - a) * g.pos, translateY: b + (e.translateY - b) * g.pos, scaleX: d, scaleY: d * v, "stroke-width": r / d }); k(d) }; d = u(g(m.globalAnimation));
                                        const l = d.step; d.step = function (a) { l && l.apply(this, arguments); h.apply(this, arguments) }; c.attr({ animator: 0 }).animate({ animator: 1 }, d, function () { "boolean" !== typeof m.globalAnimation && m.globalAnimation.complete && m.globalAnimation.complete({ applyDrilldown: !0 }) })
                                    } else f(c), c.attr(u(e, { "stroke-width": r / p })), k(p)
                            }), this.isDrilling || this.drawMapDataLabels())
                        } getProjectedBounds() {
                            if (!this.bounds && this.chart.mapView) {
                                const { insets: a, projection: b } = this.chart.mapView, d = []; (this.points || []).forEach(function (e) {
                                    if (e.path ||
                                        e.geometry) { "string" === typeof e.path ? e.path = c(e.path) : m(e.path) && "M" === e.path[0] && (e.path = t.prototype.pathToSegments(e.path)); if (!e.bounds) { let c = e.getProjectedBounds(b); if (c) { e.labelrank = D(e.labelrank, (c.x2 - c.x1) * (c.y2 - c.y1)); const { midX: b, midY: d } = c; if (a && v(b) && v(d)) { const f = E(a, a => a.isInside({ x: b, y: d })); f && (delete e.projectedPath, (c = e.getProjectedBounds(f.projection)) && f.allBounds.push(c), e.insetIndex = a.indexOf(f)) } e.bounds = c } } e.bounds && void 0 === e.insetIndex && d.push(e.bounds) }
                                }); this.bounds = A.compositeBounds(d)
                            } return this.bounds
                        } getStrokeWidth(a) {
                            const b =
                                this.pointAttrToOptions; return a[b && b["stroke-width"] || "borderWidth"]
                        } hasData() { return !!this.processedXData.length } pointAttribs(a, b) {
                            var c; const { mapView: d, styledMode: f } = a.series.chart, g = f ? this.colorAttribs(a) : e.prototype.pointAttribs.call(this, a, b); let h = this.getStrokeWidth(a.options); if (b) { b = u(this.options.states[b], a.options.states && a.options.states[b] || {}); const d = this.getStrokeWidth(b); r(d) && (h = d); g.stroke = null !== (c = b.borderColor) && void 0 !== c ? c : a.color } h && d && (h /= d.getScale()); c = this.getStrokeWidth(this.options);
                            g.dashstyle && d && v(c) && (h = c / d.getScale()); a.visible || (g.fill = this.options.nullColor); r(h) ? g["stroke-width"] = h : delete g["stroke-width"]; g["stroke-linecap"] = g["stroke-linejoin"] = this.options.linecap; return g
                        } updateData() { return this.processedData ? !1 : super.updateData.apply(this, arguments) } setData(a, b = !0, c, d) { delete this.bounds; super.setData.call(this, a, !1, void 0, d); this.processData(); this.generatePoints(); b && this.chart.redraw(c) } processData() {
                            const a = this.options, b = a.data; var c = this.chart.options.chart;
                            const d = this.joinBy, e = a.keys || this.pointArrayMap, f = [], g = {}; var h = this.chart.mapView; h = h && (G(a.mapData, !0) ? h.getGeoMap(a.mapData) : h.geoMap); var r = this.chart.mapTransforms; (this.chart.mapTransforms = r = c.mapTransforms || h && h["hc-transform"] || r) && B(r, function (a) { a.rotation && (a.cosAngle = Math.cos(a.rotation), a.sinAngle = Math.sin(a.rotation)) }); let p; m(a.mapData) ? p = a.mapData : h && "FeatureCollection" === h.type && (this.mapTitle = h.title, p = z.geojson(h, this.type, this)); const k = this.processedData = []; b && b.forEach(function (c,
                                f) { let h = 0; if (v(c)) k[f] = { value: c }; else if (m(c)) { k[f] = {}; !a.keys && c.length > e.length && "string" === typeof c[0] && (k[f]["hc-key"] = c[0], ++h); for (let a = 0; a < e.length; ++a, ++h)e[a] && "undefined" !== typeof c[h] && (0 < e[a].indexOf(".") ? l.prototype.setNestedProperty(k[f], c[h], e[a]) : k[f][e[a]] = c[h]) } else k[f] = b[f]; d && "_i" === d[0] && (k[f]._i = f) }); if (p) {
                                    this.mapData = p; this.mapMap = {}; for (r = 0; r < p.length; r++)c = p[r], h = c.properties, c._i = r, d[0] && h && h[d[0]] && (c[d[0]] = h[d[0]]), g[c[d[0]]] = c; this.mapMap = g; if (d[1]) {
                                        const a = d[1]; k.forEach(function (b) {
                                            b =
                                            C(a, b); g[b] && f.push(g[b])
                                        })
                                    } if (a.allAreas) { if (d[1]) { const a = d[1]; k.forEach(function (b) { f.push(C(a, b)) }) } const a = "|" + f.map(function (a) { return a && a[d[0]] }).join("|") + "|"; p.forEach(function (b) { d[0] && -1 !== a.indexOf("|" + b[d[0]] + "|") || k.push(u(b, { value: null })) }) }
                                } this.processedXData = Array(k.length)
                        } setOptions(a) { a = w.prototype.setOptions.call(this, a); let b = a.joinBy; null === b && (b = "_i"); b = this.joinBy = H(b); b[1] || (b[1] = b[0]); return a } translate() {
                            const a = this.doFullTranslate(), b = this.chart.mapView, c = b && b.projection;
                            !this.chart.hasRendered || !this.isDirtyData && this.hasRendered || (this.processData(), this.generatePoints(), delete this.bounds, !b || b.userOptions.center || v(b.userOptions.zoom) || b.zoom !== b.minZoom ? this.getProjectedBounds() : b.fitToBounds(void 0, void 0, !1)); if (b) {
                                const d = b.getSVGTransform(); this.points.forEach(function (e) {
                                    const f = v(e.insetIndex) && b.insets[e.insetIndex].getSVGTransform() || d; f && e.bounds && v(e.bounds.midX) && v(e.bounds.midY) && (e.plotX = e.bounds.midX * f.scaleX + f.translateX, e.plotY = e.bounds.midY *
                                        f.scaleY + f.translateY); a && (e.shapeType = "path", e.shapeArgs = { d: l.getProjectedPath(e, c) }); e.projectedPath && !e.projectedPath.length ? e.setVisible(!1) : e.setVisible(!0)
                                })
                            } p(this, "afterTranslate")
                        }
                    } y.defaultOptions = u(b.defaultOptions, {
                        affectsMapView: !0, animation: !1, dataLabels: { crop: !1, formatter: function () { const { numberFormatter: a } = this.series.chart, { value: b } = this.point; return v(b) ? a(b, -1) : "" }, inside: !0, overflow: !1, padding: 0, verticalAlign: "middle" }, linecap: "round", marker: null, nullColor: "#f7f7f7", stickyTracking: !1,
                        tooltip: { followPointer: !0, pointFormat: "{point.name}: {point.value}<br/>" }, turboThreshold: 0, allAreas: !0, borderColor: "#e6e6e6", borderWidth: 1, joinBy: "hc-key", states: { hover: { halo: void 0, borderColor: "#666666", borderWidth: 2 }, normal: { animation: !0 }, select: { color: "#cccccc" } }, legendSymbol: "rectangle"
                    }); d(y.prototype, {
                        type: "map", axisTypes: n.seriesMembers.axisTypes, colorAttribs: n.seriesMembers.colorAttribs, colorKey: n.seriesMembers.colorKey, directTouch: !0, drawDataLabels: a, drawGraph: a, forceDL: !0, getCenter: q.getCenter,
                        getExtremesFromAll: !0, getSymbol: a, isCartesian: !1, parallelArrays: n.seriesMembers.parallelArrays, pointArrayMap: n.seriesMembers.pointArrayMap, pointClass: l, preserveAspectRatio: !0, searchPoint: a, trackerGroups: n.seriesMembers.trackerGroups, useMapGeometry: !0
                    }); n.compose(y); x.registerSeriesType("map", y); ""; return y
                }); y(a, "Series/MapLine/MapLineSeries.js", [a["Series/Map/MapSeries.js"], a["Core/Series/SeriesRegistry.js"], a["Core/Utilities.js"]], function (a, n, q) {
                    const { extend: g, merge: k } = q; class l extends a {
                        constructor() {
                            super(...arguments);
                            this.points = this.options = this.data = void 0
                        } pointAttribs(g, k) { g = a.prototype.pointAttribs.call(this, g, k); g.fill = this.options.fillColor; return g }
                    } l.defaultOptions = k(a.defaultOptions, { lineWidth: 1, fillColor: "none", legendSymbol: "lineMarker" }); g(l.prototype, { type: "mapline", colorProp: "stroke", pointAttrToOptions: { stroke: "color", "stroke-width": "lineWidth" } }); n.registerSeriesType("mapline", l); ""; return l
                }); y(a, "Series/MapPoint/MapPointPoint.js", [a["Core/Series/SeriesRegistry.js"], a["Core/Utilities.js"]], function (a,
                    n) { ({ seriesTypes: { scatter: a } } = a); const { isNumber: g } = n; class z extends a.prototype.pointClass { constructor() { super(...arguments); this.series = this.options = void 0 } isValid() { return !!(this.options.geometry || g(this.x) && g(this.y) || g(this.options.lon) && g(this.options.lat)) } } return z }); y(a, "Series/MapPoint/MapPointSeries.js", [a["Core/Globals.js"], a["Series/MapPoint/MapPointPoint.js"], a["Core/Series/SeriesRegistry.js"], a["Core/Renderer/SVG/SVGRenderer.js"], a["Core/Utilities.js"]], function (a, n, q, z, k) {
                        ({ noop: a } =
                            a); const { seriesTypes: { map: g, scatter: A } } = q, { extend: w, fireEvent: x, isNumber: t, merge: h } = k; class y extends A {
                                constructor() { super(...arguments); this.points = this.options = this.data = this.chart = void 0; this.clearBounds = g.prototype.clearBounds } drawDataLabels() { super.drawDataLabels(); this.dataLabelsGroup && this.dataLabelsGroup.clip(this.chart.clipRect) } projectPoint(a) {
                                    const c = this.chart.mapView; if (c) {
                                        const { geometry: e, lon: b, lat: d } = a; a = e && "Point" === e.type && e.coordinates; t(b) && t(d) && (a = [b, d]); if (a) return c.lonLatToProjectedUnits({
                                            lon: a[0],
                                            lat: a[1]
                                        })
                                    }
                                } translate() {
                                    const a = this.chart.mapView; this.processedXData || this.processData(); this.generatePoints(); this.getProjectedBounds && this.isDirtyData && (delete this.bounds, this.getProjectedBounds()); if (a) {
                                        const c = a.getSVGTransform(), { hasCoordinates: e } = a.projection; this.points.forEach(b => {
                                            let { x: d, y: f } = b; var h = t(b.insetIndex) && a.insets[b.insetIndex].getSVGTransform() || c; const g = this.projectPoint(b.options) || b.properties && this.projectPoint(b.properties); let m; g ? (d = g.x, f = g.y) : b.bounds && (d = b.bounds.midX,
                                                f = b.bounds.midY, h && t(d) && t(f) && (b.plotX = d * h.scaleX + h.translateX, b.plotY = f * h.scaleY + h.translateY, m = !0)); t(d) && t(f) ? m || (h = a.projectedUnitsToPixels({ x: d, y: f }), b.plotX = h.x, b.plotY = e ? h.y : this.chart.plotHeight - h.y) : b.y = b.plotX = b.plotY = void 0; b.isInside = this.isPointInside(b); b.zone = this.zones.length ? b.getZone() : void 0
                                        })
                                    } x(this, "afterTranslate")
                                }
                        } y.defaultOptions = h(A.defaultOptions, { dataLabels: { crop: !1, defer: !1, enabled: !0, formatter: function () { return this.point.name }, overflow: !1, style: { color: "#000000" } }, legendSymbol: "lineMarker" });
                        z.prototype.symbols.mapmarker = (a, c, e, b, d) => { const f = d && "legend" === d.context; f ? (a += e / 2, d = c + b) : d && "number" === typeof d.anchorX && "number" === typeof d.anchorY ? (a = d.anchorX, d = d.anchorY) : (a += e / 2, d = c + b / 2, c -= b); b = f ? b / 3 : b / 2; return [["M", a, d], ["C", a, d, a - b, c + 1.5 * b, a - b, c + b], ["A", b, b, 1, 1, 1, a + b, c + b], ["C", a + b, c + 1.5 * b, a, d, a, d], ["Z"]] }; w(y.prototype, { type: "mappoint", axisTypes: ["colorAxis"], forceDL: !0, isCartesian: !1, pointClass: n, searchPoint: a, useMapGeometry: !0 }); q.registerSeriesType("mappoint", y); ""; return y
                    }); y(a, "Series/Bubble/BubbleLegendDefaults.js",
                        [], function () { return { borderColor: void 0, borderWidth: 2, className: void 0, color: void 0, connectorClassName: void 0, connectorColor: void 0, connectorDistance: 60, connectorWidth: 1, enabled: !1, labels: { className: void 0, allowOverlap: !1, format: "", formatter: void 0, align: "right", style: { fontSize: "0.9em", color: "#000000" }, x: 0, y: 0 }, maxSize: 60, minSize: 10, legendIndex: 0, ranges: { value: void 0, borderColor: void 0, color: void 0, connectorColor: void 0 }, sizeBy: "area", sizeByAbsoluteValue: !1, zIndex: 1, zThreshold: 0 } }); y(a, "Series/Bubble/BubbleLegendItem.js",
                            [a["Core/Color/Color.js"], a["Core/Templating.js"], a["Core/Globals.js"], a["Core/Utilities.js"]], function (a, n, q, z) {
                                const { parse: g } = a, { noop: l } = q, { arrayMax: A, arrayMin: w, isNumber: x, merge: t, pick: h, stableSort: y } = z; class f {
                                    constructor(a, e) { this.options = this.symbols = this.visible = this.selected = this.ranges = this.movementX = this.maxLabel = this.legend = this.chart = void 0; this.setState = l; this.init(a, e) } init(a, e) { this.options = a; this.visible = !0; this.chart = e.chart; this.legend = e } addToLegend(a) {
                                        a.splice(this.options.legendIndex,
                                            0, this)
                                    } drawLegendSymbol(a) { const c = h(a.options.itemDistance, 20), b = this.legendItem || {}, d = this.options; var f = d.ranges, g = d.connectorDistance; if (f && f.length && x(f[0].value)) { y(f, function (a, b) { return b.value - a.value }); this.ranges = f; this.setOptions(); this.render(); a = this.getMaxLabelSize(); var k = this.ranges[0].radius; f = 2 * k; g = g - k + a.width; g = 0 < g ? g : 0; this.maxLabel = a; this.movementX = "left" === d.labels.align ? g : 0; b.labelWidth = f + g + c; b.labelHeight = f + a.height / 2 } else a.options.bubbleLegend.autoRanges = !0 } setOptions() {
                                        const a =
                                            this.ranges, e = this.options, b = this.chart.series[e.seriesIndex], d = this.legend.baseline, f = { zIndex: e.zIndex, "stroke-width": e.borderWidth }, k = { zIndex: e.zIndex, "stroke-width": e.connectorWidth }, l = { align: this.legend.options.rtl || "left" === e.labels.align ? "right" : "left", zIndex: e.zIndex }, m = b.options.marker.fillOpacity, r = this.chart.styledMode; a.forEach(function (c, p) {
                                                r || (f.stroke = h(c.borderColor, e.borderColor, b.color), f.fill = h(c.color, e.color, 1 !== m ? g(b.color).setOpacity(m).get("rgba") : b.color), k.stroke = h(c.connectorColor,
                                                    e.connectorColor, b.color)); a[p].radius = this.getRangeRadius(c.value); a[p] = t(a[p], { center: a[0].radius - a[p].radius + d }); r || t(!0, a[p], { bubbleAttribs: t(f), connectorAttribs: t(k), labelAttribs: l })
                                            }, this)
                                    } getRangeRadius(a) { const c = this.options; return this.chart.series[this.options.seriesIndex].getRadius.call(this, c.ranges[c.ranges.length - 1].value, c.ranges[0].value, c.minSize, c.maxSize, a) } render() {
                                        const a = this.legendItem || {}, e = this.chart.renderer, b = this.options.zThreshold; this.symbols || (this.symbols = {
                                            connectors: [],
                                            bubbleItems: [], labels: []
                                        }); a.symbol = e.g("bubble-legend"); a.label = e.g("bubble-legend-item").css(this.legend.itemStyle || {}); a.symbol.translateX = 0; a.symbol.translateY = 0; a.symbol.add(a.label); a.label.add(a.group); for (const a of this.ranges) a.value >= b && this.renderRange(a); this.hideOverlappingLabels()
                                    } renderRange(a) {
                                        var c = this.options; const b = c.labels; var d = this.chart; const f = d.series[c.seriesIndex], h = d.renderer, g = this.symbols; d = g.labels; const m = a.center, r = Math.abs(a.radius); var k = c.connectorDistance ||
                                            0; const l = b.align, n = c.connectorWidth, w = this.ranges[0].radius || 0, t = m - r - c.borderWidth / 2 + n / 2, q = h.styledMode; k = this.legend.options.rtl || "left" === l ? -k : k; "center" === l && (k = 0, c.connectorDistance = 0, a.labelAttribs.align = "center"); g.bubbleItems.push(h.circle(w, m + ((t % 1 ? 1 : .5) - (n % 2 ? 0 : .5)), r).attr(q ? {} : a.bubbleAttribs).addClass((q ? "highcharts-color-" + f.colorIndex + " " : "") + "highcharts-bubble-legend-symbol " + (c.className || "")).add(this.legendItem.symbol)); g.connectors.push(h.path(h.crispLine([["M", w, t], ["L", w + k, t]],
                                                c.connectorWidth)).attr(q ? {} : a.connectorAttribs).addClass((q ? "highcharts-color-" + this.options.seriesIndex + " " : "") + "highcharts-bubble-legend-connectors " + (c.connectorClassName || "")).add(this.legendItem.symbol)); a = h.text(this.formatLabel(a)).attr(q ? {} : a.labelAttribs).css(q ? {} : b.style).addClass("highcharts-bubble-legend-labels " + (c.labels.className || "")).add(this.legendItem.symbol); c = { x: w + k + c.labels.x, y: t + c.labels.y + .4 * a.getBBox().height }; a.attr(c); d.push(a); a.placed = !0; a.alignAttr = c
                                    } getMaxLabelSize() {
                                        let a,
                                        e; this.symbols.labels.forEach(function (b) { e = b.getBBox(!0); a = a ? e.width > a.width ? e : a : e }); return a || {}
                                    } formatLabel(a) { var c = this.options; const b = c.labels.formatter; c = c.labels.format; const { numberFormatter: d } = this.chart; return c ? n.format(c, a) : b ? b.call(a) : d(a.value, 1) } hideOverlappingLabels() { const a = this.chart, e = this.symbols; !this.options.labels.allowOverlap && e && (a.hideOverlappingLabels(e.labels), e.labels.forEach(function (a, d) { a.newOpacity ? a.newOpacity !== a.oldOpacity && e.connectors[d].show() : e.connectors[d].hide() })) } getRanges() {
                                        const a =
                                            this.legend.bubbleLegend, e = a.options.ranges; let b, d, f = Number.MAX_VALUE, g = -Number.MAX_VALUE; a.chart.series.forEach(function (a) { a.isBubble && !a.ignoreSeries && (d = a.zData.filter(x), d.length && (f = h(a.options.zMin, Math.min(f, Math.max(w(d), !1 === a.options.displayNegative ? a.options.zThreshold : -Number.MAX_VALUE))), g = h(a.options.zMax, Math.max(g, A(d))))) }); b = f === g ? [{ value: g }] : [{ value: f }, { value: (f + g) / 2 }, { value: g, autoRanges: !0 }]; e.length && e[0].radius && b.reverse(); b.forEach(function (a, d) { e && e[d] && (b[d] = t(e[d], a)) });
                                        return b
                                    } predictBubbleSizes() { var a = this.chart, e = a.legend.options, b = e.floating; const d = (e = "horizontal" === e.layout) ? a.legend.lastLineHeight : 0, f = a.plotSizeX, g = a.plotSizeY; var h = a.series[this.options.seriesIndex], m = h.getPxExtremes(); a = Math.ceil(m.minPxSize); m = Math.ceil(m.maxPxSize); const r = Math.min(g, f); h = h.options.maxSize; if (b || !/%$/.test(h)) b = m; else if (h = parseFloat(h), b = (r + d) * h / 100 / (h / 100 + 1), e && g - b >= f || !e && f - b >= g) b = m; return [a, Math.ceil(b)] } updateRanges(a, e) {
                                        const b = this.legend.options.bubbleLegend;
                                        b.minSize = a; b.maxSize = e; b.ranges = this.getRanges()
                                    } correctSizes() { const a = this.legend, e = this.chart.series[this.options.seriesIndex].getPxExtremes(); 1 < Math.abs(Math.ceil(e.maxPxSize) - this.options.maxSize) && (this.updateRanges(this.options.minSize, e.maxPxSize), a.render()) }
                                } ""; return f
                            }); y(a, "Series/Bubble/BubbleLegendComposition.js", [a["Series/Bubble/BubbleLegendDefaults.js"], a["Series/Bubble/BubbleLegendItem.js"], a["Core/Defaults.js"], a["Core/Utilities.js"]], function (a, n, q, z) {
                                function g(a, d, c) {
                                    const b =
                                        this.legend; var e = 0 <= l(this); let h, g; b && b.options.enabled && b.bubbleLegend && b.options.bubbleLegend.autoRanges && e ? (h = b.bubbleLegend.options, e = b.bubbleLegend.predictBubbleSizes(), b.bubbleLegend.updateRanges(e[0], e[1]), h.placed || (b.group.placed = !1, b.allItems.forEach(a => { g = a.legendItem || {}; g.group && (g.group.translateY = null) })), b.render(), this.getMargins(), this.axes.forEach(function (a) { a.visible && a.render(); h.placed || (a.setScale(), a.updateNames(), f(a.ticks, function (a) { a.isNew = !0; a.isNewLabel = !0 })) }), h.placed =
                                            !0, this.getMargins(), a.call(this, d, c), b.bubbleLegend.correctSizes(), t(b, A(b))) : (a.call(this, d, c), b && b.options.enabled && b.bubbleLegend && (b.render(), t(b, A(b))))
                                } function l(a) { a = a.series; let b = 0; for (; b < a.length;) { if (a[b] && a[b].isBubble && a[b].visible && a[b].zData.length) return b; b++ } return -1 } function A(a) {
                                    a = a.allItems; const b = [], c = a.length; let e, f, h = 0; for (f = 0; f < c; f++) {
                                        var g = a[f].legendItem || {}; e = (a[f + 1] || {}).legendItem || {}; g.labelHeight && (a[f].itemHeight = g.labelHeight); if (a[f] === a[c - 1] || g.y !== e.y) {
                                            b.push({ height: 0 });
                                            g = b[b.length - 1]; for (h; h <= f; h++)a[h].itemHeight > g.height && (g.height = a[h].itemHeight); g.step = f
                                        }
                                    } return b
                                } function w(a) { const b = this.bubbleLegend, c = this.options, e = c.bubbleLegend, f = l(this.chart); b && b.ranges && b.ranges.length && (e.ranges.length && (e.autoRanges = !!e.ranges[0].autoRanges), this.destroyItem(b)); 0 <= f && c.enabled && e.enabled && (e.seriesIndex = f, this.bubbleLegend = new n(e, this), this.bubbleLegend.addToLegend(a.allItems)) } function x(a) {
                                    if (a.defaultPrevented) return !1; var b = this.chart; a = this.visible; const c =
                                        this.chart.legend; c && c.bubbleLegend && (this.visible = !a, this.ignoreSeries = a, b = 0 <= l(b), c.bubbleLegend.visible !== b && (c.update({ bubbleLegend: { enabled: b } }), c.bubbleLegend.visible = b), this.visible = a)
                                } function t(a, c) {
                                    const b = a.options.rtl; let d, e, f, h, g = 0; a.allItems.forEach((a, m) => {
                                        h = a.legendItem || {}; if (h.group) {
                                            d = h.group.translateX || 0; e = h.y || 0; if ((f = a.movementX) || b && a.ranges) f = b ? d - a.options.maxSize / 2 : d + f, h.group.attr({ translateX: f }); m > c[g].step && g++; h.group.attr({ translateY: Math.round(e + c[g].height / 2) }); h.y =
                                                e + c[g].height / 2
                                        }
                                    })
                                } const { setOptions: h } = q, { addEvent: y, objectEach: f, wrap: c } = z, e = []; return { compose: function (b, d, f) { z.pushUnique(e, b) && (h({ legend: { bubbleLegend: a } }), c(b.prototype, "drawChartBox", g)); z.pushUnique(e, d) && y(d, "afterGetAllItems", w); z.pushUnique(e, f) && y(f, "legendItemClick", x) } }
                            }); y(a, "Series/Bubble/BubblePoint.js", [a["Core/Series/Point.js"], a["Core/Series/SeriesRegistry.js"], a["Core/Utilities.js"]], function (a, n, q) {
                                ({ seriesTypes: { scatter: { prototype: { pointClass: n } } } } = n); ({ extend: q } = q); class g extends n {
                                    constructor() {
                                        super(...arguments);
                                        this.series = this.options = void 0
                                    } haloPath(g) { return a.prototype.haloPath.call(this, 0 === g ? 0 : (this.marker ? this.marker.radius || 0 : 0) + g) }
                                } q(g.prototype, { ttBelow: !1 }); return g
                            }); y(a, "Series/Bubble/BubbleSeries.js", [a["Series/Bubble/BubbleLegendComposition.js"], a["Series/Bubble/BubblePoint.js"], a["Core/Color/Color.js"], a["Core/Globals.js"], a["Core/Series/SeriesRegistry.js"], a["Core/Utilities.js"]], function (a, n, q, z, k, l) {
                                function g() {
                                    const a = this.len, b = this.chart, c = this.isXAxis, e = c ? "xData" : "yData", f = this.min,
                                    h = this.max - f; let g = 0, m = a, k = a / h, l; this.series.forEach(a => { if (a.bubblePadding && (a.visible || !b.options.chart.ignoreHiddenSeries)) { l = this.allowZoomOutside = !0; const b = a[e]; c && ((a.onPoint || a).getRadii(0, 0, a), a.onPoint && (a.radii = a.onPoint.radii)); if (0 < h) { let c = b.length; for (; c--;)if (d(b[c]) && this.dataMin <= b[c] && b[c] <= this.max) { const d = a.radii && a.radii[c] || 0; g = Math.min((b[c] - f) * k - d, g); m = Math.max((b[c] - f) * k + d, m) } } } }); l && 0 < h && !this.logarithmic && (m -= a, k *= (a + Math.max(0, g) - Math.min(m, a)) / a, [["min", "userMin", g],
                                    ["max", "userMax", m]].forEach(a => { "undefined" === typeof p(this.options[a[0]], this[a[1]]) && (this[a[0]] += a[2] / k) }))
                                } const { parse: w } = q; ({ noop: q } = z); const { series: x, seriesTypes: { column: { prototype: t }, scatter: h } } = k, { addEvent: y, arrayMax: f, arrayMin: c, clamp: e, extend: b, isNumber: d, merge: E, pick: p } = l, C = []; class m extends h {
                                    constructor() { super(...arguments); this.zData = this.yData = this.radii = this.points = this.options = this.minPxSize = this.maxPxSize = this.data = void 0 } static compose(b, c, d, e) {
                                        a.compose(c, d, e); l.pushUnique(C,
                                            b) && (b.prototype.beforePadding = g)
                                    } animate(a) { !a && this.points.length < this.options.animationLimit && this.points.forEach(function (a) { const { graphic: b } = a; b && b.width && (this.hasRendered || b.attr({ x: a.plotX, y: a.plotY, width: 1, height: 1 }), b.animate(this.markerAttribs(a), this.options.animation)) }, this) } getRadii() {
                                        const a = this.zData, b = this.yData, c = []; let d, e, f, h = this.chart.bubbleZExtremes; const { minPxSize: g, maxPxSize: m } = this.getPxExtremes(); if (!h) {
                                            let a = Number.MAX_VALUE, b = -Number.MAX_VALUE, c; this.chart.series.forEach(d => { d.bubblePadding && (d.visible || !this.chart.options.chart.ignoreHiddenSeries) && (d = (d.onPoint || d).getZExtremes()) && (a = Math.min(p(a, d.zMin), d.zMin), b = Math.max(p(b, d.zMax), d.zMax), c = !0) }); c ? (h = { zMin: a, zMax: b }, this.chart.bubbleZExtremes = h) : h = { zMin: 0, zMax: 0 }
                                        } e = 0; for (d = a.length; e < d; e++)f = a[e], c.push(this.getRadius(h.zMin, h.zMax, g, m, f, b && b[e])); this.radii = c
                                    } getRadius(a, b, c, e, f, h) {
                                        const g = this.options, m = "width" !== g.sizeBy, k = g.zThreshold; let l = b - a, r = .5; if (null === h || null === f) return null; if (d(f)) {
                                            g.sizeByAbsoluteValue &&
                                            (f = Math.abs(f - k), l = Math.max(b - k, Math.abs(a - k)), a = 0); if (f < a) return c / 2 - 1; 0 < l && (r = (f - a) / l)
                                        } m && 0 <= r && (r = Math.sqrt(r)); return Math.ceil(c + r * (e - c)) / 2
                                    } hasData() { return !!this.processedXData.length } pointAttribs(a, b) { const c = this.options.marker.fillOpacity; a = x.prototype.pointAttribs.call(this, a, b); 1 !== c && (a.fill = w(a.fill).setOpacity(c).get("rgba")); return a } translate() { super.translate.call(this); this.getRadii(); this.translateBubble() } translateBubble() {
                                        const { data: a, options: c, radii: e } = this, { minPxSize: f } = this.getPxExtremes();
                                        let h = a.length; for (; h--;) { const g = a[h], m = e ? e[h] : 0; "z" === this.zoneAxis && (g.negative = (g.z || 0) < (c.zThreshold || 0)); d(m) && m >= f / 2 ? (g.marker = b(g.marker, { radius: m, width: 2 * m, height: 2 * m }), g.dlBox = { x: g.plotX - m, y: g.plotY - m, width: 2 * m, height: 2 * m }) : (g.shapeArgs = g.plotY = g.dlBox = void 0, g.isInside = !1) }
                                    } getPxExtremes() {
                                        const a = Math.min(this.chart.plotWidth, this.chart.plotHeight); var b = b => { let c; "string" === typeof b && (c = /%$/.test(b), b = parseInt(b, 10)); return c ? a * b / 100 : b }; const c = b(p(this.options.minSize, 8)); b = Math.max(b(p(this.options.maxSize,
                                            "20%")), c); return { minPxSize: c, maxPxSize: b }
                                    } getZExtremes() { var a = this.options; const b = (this.zData || []).filter(d); if (b.length) { const g = p(a.zMin, e(c(b), !1 === a.displayNegative ? a.zThreshold || 0 : -Number.MAX_VALUE, Number.MAX_VALUE)); a = p(a.zMax, f(b)); if (d(g) && d(a)) return { zMin: g, zMax: a } } }
                                } m.defaultOptions = E(h.defaultOptions, {
                                    dataLabels: { formatter: function () { const { numberFormatter: a } = this.series.chart, { z: b } = this.point; return d(b) ? a(b, -1) : "" }, inside: !0, verticalAlign: "middle" }, animationLimit: 250, marker: {
                                        lineColor: null,
                                        lineWidth: 1, fillOpacity: .5, radius: null, states: { hover: { radiusPlus: 0 } }, symbol: "circle"
                                    }, minSize: 8, maxSize: "20%", softThreshold: !1, states: { hover: { halo: { size: 5 } } }, tooltip: { pointFormat: "({point.x}, {point.y}), Size: {point.z}" }, turboThreshold: 0, zThreshold: 0, zoneAxis: "z"
                                }); b(m.prototype, {
                                    alignDataLabel: t.alignDataLabel, applyZones: q, bubblePadding: !0, buildKDTree: q, directTouch: !0, isBubble: !0, pointArrayMap: ["y", "z"], pointClass: n, parallelArrays: ["x", "y", "z"], trackerGroups: ["group", "dataLabelsGroup"], specialGroup: "group",
                                    zoneAxis: "z"
                                }); y(m, "updatedData", a => { delete a.target.chart.bubbleZExtremes }); y(m, "remove", a => { delete a.target.chart.bubbleZExtremes }); k.registerSeriesType("bubble", m); ""; ""; return m
                            }); y(a, "Series/MapBubble/MapBubblePoint.js", [a["Series/Bubble/BubblePoint.js"], a["Core/Series/SeriesRegistry.js"], a["Core/Utilities.js"]], function (a, n, q) {
                                ({ seriesTypes: { map: { prototype: { pointClass: { prototype: n } } } } } = n); ({ extend: q } = q); class g extends a { isValid() { return "number" === typeof this.z } } q(g.prototype, {
                                    applyOptions: n.applyOptions,
                                    getProjectedBounds: n.getProjectedBounds
                                }); return g
                            }); y(a, "Series/MapBubble/MapBubbleSeries.js", [a["Series/Bubble/BubbleSeries.js"], a["Series/MapBubble/MapBubblePoint.js"], a["Core/Series/SeriesRegistry.js"], a["Core/Utilities.js"]], function (a, n, q, y) {
                                const { seriesTypes: { map: { prototype: g }, mappoint: { prototype: l } } } = q, { extend: z, merge: w } = y; class x extends a {
                                    constructor() { super(...arguments); this.points = this.options = this.data = void 0; this.clearBounds = g.clearBounds } searchPoint(a, g) {
                                        return this.searchKDTree({
                                            clientX: a.chartX -
                                                this.chart.plotLeft, plotY: a.chartY - this.chart.plotTop
                                        }, g, a)
                                    } translate() { l.translate.call(this); this.getRadii(); this.translateBubble() } updateParallelArrays(a, g, k) { super.updateParallelArrays.call(this, a, g, k); a = this.processedXData; g = this.xData; a && g && (a.length = g.length) }
                                } x.defaultOptions = w(a.defaultOptions, { lineWidth: 0, animationLimit: 500, joinBy: "hc-key", tooltip: { pointFormat: "{point.name}: {point.z}" } }); z(x.prototype, {
                                    type: "mapbubble", axisTypes: ["colorAxis"], getProjectedBounds: g.getProjectedBounds, isCartesian: !1,
                                    pointArrayMap: ["z"], pointClass: n, processData: g.processData, projectPoint: l.projectPoint, setData: g.setData, setOptions: g.setOptions, updateData: g.updateData, useMapGeometry: !0, xyFromShape: !0
                                }); q.registerSeriesType("mapbubble", x); ""; return x
                            }); y(a, "Series/Heatmap/HeatmapPoint.js", [a["Core/Series/SeriesRegistry.js"], a["Core/Utilities.js"]], function (a, n) {
                                ({ seriesTypes: { scatter: { prototype: { pointClass: a } } } } = a); const { clamp: g, defined: y, extend: k, pick: l } = n; class A extends a {
                                    constructor() {
                                        super(...arguments); this.y =
                                            this.x = this.value = this.series = this.options = void 0
                                    } applyOptions(a, g) { (this.isNull || null === this.value) && delete this.color; super.applyOptions(a, g); this.formatPrefix = this.isNull || null === this.value ? "null" : "point"; return this } getCellAttributes() {
                                        var a = this.series; const k = a.options, n = (k.colsize || 1) / 2, h = (k.rowsize || 1) / 2, q = a.xAxis, f = a.yAxis, c = this.options.marker || a.options.marker; a = a.pointPlacementToXValue(); const e = l(this.pointPadding, k.pointPadding, 0), b = {
                                            x1: g(Math.round(q.len - q.translate(this.x - n, !1, !0,
                                                !1, !0, -a)), -q.len, 2 * q.len), x2: g(Math.round(q.len - q.translate(this.x + n, !1, !0, !1, !0, -a)), -q.len, 2 * q.len), y1: g(Math.round(f.translate(this.y - h, !1, !0, !1, !0)), -f.len, 2 * f.len), y2: g(Math.round(f.translate(this.y + h, !1, !0, !1, !0)), -f.len, 2 * f.len)
                                        };[["width", "x"], ["height", "y"]].forEach(function (a) {
                                            var d = a[0]; a = a[1]; let g = a + "1", h = a + "2"; const m = Math.abs(b[g] - b[h]), k = c && c.lineWidth || 0, l = Math.abs(b[g] + b[h]) / 2; d = c && c[d]; y(d) && d < m && (d = d / 2 + k / 2, b[g] = l - d, b[h] = l + d); if (e) {
                                                if ("x" === a && q.reversed || "y" === a && !f.reversed) g =
                                                    h, h = a + "1"; b[g] += e; b[h] -= e
                                            }
                                        }); return b
                                    } haloPath(a) { if (!a) return []; const { x: g = 0, y: k = 0, width: h = 0, height: l = 0 } = this.shapeArgs || {}; return [["M", g - a, k - a], ["L", g - a, k + l + a], ["L", g + h + a, k + l + a], ["L", g + h + a, k - a], ["Z"]] } isValid() { return Infinity !== this.value && -Infinity !== this.value }
                                } k(A.prototype, { dataLabelOnNull: !0, moveToTopOnHover: !0, ttBelow: !1 }); return A
                            }); y(a, "Series/Heatmap/HeatmapSeries.js", [a["Core/Color/Color.js"], a["Series/ColorMapComposition.js"], a["Core/Globals.js"], a["Series/Heatmap/HeatmapPoint.js"],
                            a["Core/Series/SeriesRegistry.js"], a["Core/Renderer/SVG/SVGRenderer.js"], a["Core/Utilities.js"]], function (a, n, q, y, k, l, A) {
                                const { doc: g } = q, { series: x, seriesTypes: { column: t, scatter: h } } = k, { prototype: { symbols: z } } = l, { clamp: f, extend: c, fireEvent: e, isNumber: b, merge: d, pick: E, defined: p } = A; class C extends h {
                                    constructor() { super(...arguments); this.points = this.options = this.data = this.context = this.colorAxis = this.canvas = void 0; this.valueMin = this.valueMax = NaN } drawPoints() {
                                        const a = this; var b = a.options, c = b.marker || {};
                                        if (b.interpolation) {
                                            const { image: h, chart: k, xAxis: m, yAxis: l, points: n } = a; c = n.length - 1; const { len: r, reversed: v } = m, { len: q, reversed: u } = l, { min: t, max: w } = m.getExtremes(), { min: x, max: y } = l.getExtremes(), [z, A] = [E(b.colsize, 1), E(b.rowsize, 1)]; var d = k.inverted, e = z / 2; b = m.userOptions.minPadding; var g = p(b) && !(0 < b); b = d || g; e = g && e || 0; const [B, G, C] = [t - e, w + 2 * e, t + z].map(b => f(Math.round(m.len - m.translate(b, !1, !0, !1, !0, -a.pointPlacementToXValue())), -m.len, 2 * m.len)), [F, I] = v ? [G, B] : [B, G]; e = r / C / 2 / 2 / 2; d = d ? {
                                                width: r, height: q, x: 0,
                                                y: 0
                                            } : { x: F - e, width: I - e, height: q, y: 0 }; if (!h || a.isDirtyData) {
                                                const f = k.colorAxis && k.colorAxis[0]; e = a.getContext(); if ((g = a.canvas) && e && f) {
                                                    const m = g.width = ~~((w - t) / z) + 1, l = g.height = ~~((y - x) / A) + 1, r = m * l, p = new Uint8ClampedArray(4 * r), q = m - (b && 1 || 0), D = l - 1; b = a => { a = f.toColor(a.value || 0, E(a)).split(")")[0].split("(")[1].split(",").map(a => E(parseFloat(a), parseInt(a, 10))); a[3] = 255 * E(a[3], 1); return a }; const B = v ? a => q - a : a => a, G = u ? a => D - a : a => a, C = (a, b) => Math.ceil(m * G(~~((D - 0) / (y - x) * (y - b - x))) + B(~~((q - 0) / (w - t) * (a - t)))); a.buildKDTree();
                                                    a.directTouch = !1; for (let a = 0; a < r; a++) { const d = n[~~((c - 0) / (p.length - 4) * a * 4)], e = new Uint8ClampedArray(b(d)); p.set(e, 4 * C(d.x, d.y)) } e.putImageData(new ImageData(p, m, l), 0, 0); h ? h.attr(Object.assign(Object.assign({}, d), { href: g.toDataURL() })) : a.image = k.renderer.image(g.toDataURL()).attr(d).add(a.group)
                                                }
                                            } else h.width === d.width && h.height === d.height || h.attr(d)
                                        } else if (c.enabled || a._hasPointMarkers) x.prototype.drawPoints.call(a), a.points.forEach(b => {
                                            b.graphic && (b.graphic[a.chart.styledMode ? "css" : "animate"](a.colorAttribs(b)),
                                                null === b.value && b.graphic.addClass("highcharts-null-point"))
                                        })
                                    } getContext() { const { canvas: a, context: b } = this; if (a && b) b.clearRect(0, 0, a.width, a.height); else return this.canvas = g.createElement("canvas"), this.context = this.canvas.getContext("2d") || void 0; return b } getExtremes() { const { dataMin: a, dataMax: c } = x.prototype.getExtremes.call(this, this.valueData); b(a) && (this.valueMin = a); b(c) && (this.valueMax = c); return x.prototype.getExtremes.call(this) } getValidPoints(a, b) {
                                        return x.prototype.getValidPoints.call(this,
                                            a, b, !0)
                                    } hasData() { return !!this.processedXData.length } init() { super.init.apply(this, arguments); const a = this.options; a.pointRange = E(a.pointRange, a.colsize || 1); this.yAxis.axisPointRange = a.rowsize || 1; z.ellipse = z.circle; a.marker && b(a.borderRadius) && (a.marker.r = a.borderRadius) } markerAttribs(a, b) {
                                        const c = a.shapeArgs || {}; if (a.hasImage) return { x: a.plotX, y: a.plotY }; if (b && "normal" !== b) {
                                            var d = a.options.marker || {}; a = this.options.marker || {}; a = a.states && a.states[b] || {}; d = d.states && d.states[b] || {}; b = (d.width || a.width ||
                                                c.width || 0) + (d.widthPlus || a.widthPlus || 0); a = (d.height || a.height || c.height || 0) + (d.heightPlus || a.heightPlus || 0); return { x: (c.x || 0) + ((c.width || 0) - b) / 2, y: (c.y || 0) + ((c.height || 0) - a) / 2, width: b, height: a }
                                        } return c
                                    } pointAttribs(b, c) {
                                        const e = x.prototype.pointAttribs.call(this, b, c), f = this.options || {}; var g = this.chart.options.plotOptions || {}, h = g.series || {}; const k = g.heatmap || {}; g = b && b.options.borderColor || f.borderColor || k.borderColor || h.borderColor; h = b && b.options.borderWidth || f.borderWidth || k.borderWidth || h.borderWidth ||
                                            e["stroke-width"]; e.stroke = b && b.marker && b.marker.lineColor || f.marker && f.marker.lineColor || g || this.color; e["stroke-width"] = h; c && "normal" !== c && (b = d(f.states && f.states[c], f.marker && f.marker.states && f.marker.states[c], b && b.options.states && b.options.states[c] || {}), e.fill = b.color || a.parse(e.fill).brighten(b.brightness || 0).get(), e.stroke = b.lineColor || e.stroke); return e
                                    } translate() {
                                        const { borderRadius: a, marker: c } = this.options, f = c && c.symbol || "rect", g = z[f] ? f : "rect", h = -1 !== ["circle", "square"].indexOf(g); this.generatePoints();
                                        this.points.forEach(function (c) {
                                            const e = c.getCellAttributes(); let k = Math.min(e.x1, e.x2); var l = Math.min(e.y1, e.y2); let m = Math.max(Math.abs(e.x2 - e.x1), 0), n = Math.max(Math.abs(e.y2 - e.y1), 0); c.hasImage = 0 === (c.marker && c.marker.symbol || f || "").indexOf("url"); h && (l = Math.abs(m - n), k = Math.min(e.x1, e.x2) + (m < n ? 0 : l / 2), l = Math.min(e.y1, e.y2) + (m < n ? l / 2 : 0), m = n = Math.min(m, n)); c.hasImage && (c.marker = { width: m, height: n }); c.plotX = c.clientX = (e.x1 + e.x2) / 2; c.plotY = (e.y1 + e.y2) / 2; c.shapeType = "path"; c.shapeArgs = d(!0, {
                                                x: k, y: l, width: m,
                                                height: n
                                            }, { d: z[g](k, l, m, n, { r: b(a) ? a : 0 }) })
                                        }); e(this, "afterTranslate")
                                    }
                                } C.defaultOptions = d(h.defaultOptions, {
                                    animation: !1, borderRadius: 0, borderWidth: 0, interpolation: !1, nullColor: "#f7f7f7", dataLabels: { formatter: function () { const { numberFormatter: a } = this.series.chart, { value: c } = this.point; return b(c) ? a(c, -1) : "" }, inside: !0, verticalAlign: "middle", crop: !1, overflow: "allow", padding: 0 }, marker: { symbol: "rect", radius: 0, lineColor: void 0, states: { hover: { lineWidthPlus: 0 }, select: {} } }, clip: !0, pointRange: null, tooltip: { pointFormat: "{point.x}, {point.y}: {point.value}<br/>" },
                                    states: { hover: { halo: !1, brightness: .2 } }, legendSymbol: "rectangle"
                                }); c(C.prototype, { axisTypes: n.seriesMembers.axisTypes, colorKey: n.seriesMembers.colorKey, directTouch: !0, getExtremesFromAll: !0, parallelArrays: n.seriesMembers.parallelArrays, pointArrayMap: ["y", "value"], pointClass: y, specialGroup: "group", trackerGroups: n.seriesMembers.trackerGroups, alignDataLabel: t.prototype.alignDataLabel, colorAttribs: n.seriesMembers.colorAttribs, getSymbol: x.prototype.getSymbol }); n.compose(C); k.registerSeriesType("heatmap",
                                    C); ""; ""; return C
                            }); y(a, "masters/modules/map.src.js", [a["Core/Globals.js"], a["Core/Axis/Color/ColorAxis.js"], a["Series/MapBubble/MapBubbleSeries.js"], a["Core/Chart/MapChart.js"], a["Maps/MapView.js"], a["Maps/Projection.js"]], function (a, n, q, y, k, l) { a.ColorAxis = n; a.MapChart = y; a.mapChart = a.Map = y.mapChart; a.MapView = k; a.maps = y.maps; a.Projection = l; n.compose(a.Chart, a.Fx, a.Legend, a.Series); q.compose(a.Axis, a.Chart, a.Legend, a.Series) })
});
//# sourceMappingURL=map.js.map
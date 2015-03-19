(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.isVisible = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
module.exports = exports = isVisible

exports.getStyle = getStyle

var doc = global.document

function isVisible(el, isStrict) {
	if (isElement(el)) {
		el.style.opacity = 'inherit'
		var rawOpacity = getStyle(el, 'opacity')

		var opacity = +rawOpacity
		if (opacity != rawOpacity) {
			opacity = 1 // can not check old browser
		}

		if (opacity > 0.09) {
			var offset = el.getBoundingClientRect()
			if (isPointInElement(el, offset.left, offset.top)) {
				if (!isStrict) return true
				// strict mode
				if (opacity > 0.89) {
					var x = offset.left + el.offsetWidth / 2
					var y = offset.top + el.offsetHeight / 2
					if (isPointInElement(el, x, y)) return true
				}
			}
		}
	}
	return false
}

function getStyle(el, name) {
	if (global.getComputedStyle) {
		return getComputedStyle(el, null)[name]
	}
	if (el.currentStyle) {
		return el.currentStyle[name]
	}
}

function isElement(el) {
	if (el && 1 == el.nodeType) return true
	return false
}

function isPointInElement(el, x, y) {
	var target = doc.elementFromPoint(x, y)
	while (isElement(target)) {
		if (target == el) return true
		target = target.parentNode
	}
	return false
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1])(1)
});
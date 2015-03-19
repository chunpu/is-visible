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

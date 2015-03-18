module.exports = exports = isVisible

var doc = global.document

function isVisible(el, isStrict) {
	var ret = exports.canClick(el, isStrict)
	return ret
}

exports.canClick = function(el, isStrict) {
	if (isElement(el)) {
		el.style.opacity = 'inherit'
		var opacity = getStyle(el, 'opacity') || 1
		if ('inherit' == opacity) {
			opacity = 1 // can not check old browser
		}

		if (opacity > 0.09) {
			var offset = el.getBoundingClientRect()
			if (pointInElement(el, offset.left, offset.top)) {
				if (!isStrict) return true
				// strict mode
				if (opacity > 0.89) {
					var x = offset.left + offset.width / 2
					var y = offset.top + offset.height / 2
					if (pointInElement(el, x, y)) return true
				}
			}
		}
	}
	return false
}

exports.getStyle = getStyle

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

function pointInElement(el, x, y) {
	var target = doc.elementFromPoint(x, y)
	while (isElement(target)) {
		if (target == el) return true
		target = target.parentNode
	}
	return false
}

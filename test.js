var assert = require('assert')
var isVisible = require('./')

var body = global.document.body

function get(id) {
	return document.getElementById(id)
}

describe('is visible', function() {
	it('normal', function() {
		body.innerHTML = '<h1 id="test">foo</h1>'
		var el = get('test')
		assert(isVisible(el))
		assert(isVisible(body))
	})

	it('opacity >= 0.1', function() {
		body.innerHTML = '<h1 id="test" style="opacity: 0.5">foo</h1>'
		var el = get('test')
		assert(isVisible(el))
	})

	it('parent opacity >= 0.1', function() {
		body.innerHTML = '<div style="opacity: 0.5"><h1 id="test">foo</h1></div>'
		var el = get('test')
		assert(isVisible(el))
	})

	it('parent opacity >= 0.9 in strict mode', function() {
		body.innerHTML = '<div style="opacity: 0.9"><h1 id="test">foo</h1></div>'
		var el = get('test')
		//assert(isVisible(el, true))
		assert(isVisible(el, true))
	})

	it('element be covered a little', function() {
		body.innerHTML = '<h1 id="test" style="position: absolute; top: 0; left: 0;" >foo</h1>' +
		'<h1 style="position: absolute; top: 1px; left: 1px; width: 100px; height: 100px">bar</h1>'
		var el = get('test')
		assert(isVisible(el))
	})

})


describe('is not visible', function() {
	it('empty', function() {
		body.innerHTML = '<h1 id="test"></h1>'
		var el = get('test')
		assert(!isVisible(el))
	})

	it('display none', function() {
		body.innerHTML = '<h1 id="test" style="display: none">foo</h1>'
		var el = get('test')
		assert(!isVisible(el))
	})

	it('visibility hidden', function() {
		body.innerHTML = '<h1 id="test" style="visibility: hidden">foo</h1>'
		var el = get('test')
		assert(!isVisible(el))
	})

	it('hidden true', function() {
		body.innerHTML = '<h1 id="test" hidden="true">foo</h1>'
		var el = get('test')
		if ('boolean' == typeof el.hidden) {
			assert(!isVisible(el))
		}
	})

	it('parent display none', function() {
		body.innerHTML = '<div style="display: none">bar<h1 id="test">foo</h1></div>'
		var el = get('test')
		assert(!isVisible(el))
	})

	it('parent visibility hidden', function() {
		body.innerHTML = '<div style="visibility: hidden">bar<h1 id="test">foo</h1></div>'
		var el = get('test')
		assert(!isVisible(el))
	})

	it('parent overflow hidden', function() {
		body.innerHTML = '<div style="overflow: hidden; height: 100px"><h1 id="test" style="margin-top: 200px;">foo</h1></div>'
		var el = get('test')
		assert(!isVisible(el))
	})

	it('element be covered total', function() {
		body.innerHTML = '<h1 id="test" style="margin: 0; position: absolute; top: 1px; left: 1px; z-index: 0; width: 10px; height: 10px">foo</h1>' +
		'<h1 style="margin: 0; position: absolute; top: 0; left: 0; width: 100px; height: 100px; z-index: 100">cover</h1>'
		var el = get('test')
		assert(!isVisible(el))
	})

	it('element be covered too much in strict mode', function() {
		body.innerHTML = '<h1 id="test" style="margin: 0; position: absolute; top: 0; left: 0; width: 100px; height: 100px">foo</h1>' +
		'<h1 style="margin: 0; position: absolute; top: 1px; left: 1px; width: 100px; height: 100px">bar</h1>'
		var el = get('test')
		assert(!isVisible(el, true))
	})

	if (global.getComputedStyle) {
		// only modern browser can check
		it('parent opacity < 0.1', function() {
			body.innerHTML = '<div style="opacity: 0.02"><h1 id="test">foo</h1></div>'
			var el = get('test')
			assert(!isVisible(el))
		})

		it('parent opacity < 0.9 in strict mode', function() {
			body.innerHTML = '<div style="opacity: 0.8"><h1 id="test">foo</h1></div>'
			var el = get('test')
			assert(!isVisible(el, true))
		})
	}

})

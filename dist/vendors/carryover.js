"use strict";

const voidTags = [
	'!doctype', 'area', 'base', 'br', 'col', 'command',
	'embed', 'hr', 'img', 'input', 'keygen', 'link',
	'meta', 'param', 'source', 'track', 'wbr'
]

const clearText = function (str) {
	return str.replace(/(\r?\n|\r)/gmi, " ").replace(/\t/gmi, " ").replace(/\s+/gmi, " ").trim()
}

const clearNullStr = function (str) {
	let arr = str.split("\n"), i = arr.length, buf = "", res = ""
	while (i--) {
		buf = arr[i].replace(/(\r?\n|\r)/gmi, "").replace(/\t/gmi, "").replace(/\s+/gmi, "").trim()
		if (buf && buf !== "") {
			res = "\n" + arr[i] + res
		}
	}
	return res
}

export function carryoverJSON(objJSON) {
	if (objJSON && typeof objJSON === "object") {
		return JSON.stringify(objJSON, null, 4).trim() + "\n"
	}
	return objJSON
}

export function carryoverHTML(text) {
	text = clearText(text)
	let len = text.length
	if (len > 0) {
		text = text.replace(/></gi, '> <')
		text = "  " + text
		let i = 0, pos = 0, buf = "", tabs = "", isClose = false, tNames = []
		const delTag = function () {
			if (tabs.length > 0) {
				tabs = tabs.slice(1)
			}
		}
		const setEnd = function () {
			pos = text.indexOf(">", pos)
			if (pos !== -1) {
				pos++
			}
		}
		const getTagName = function () {
			let n = 0,
				e = pos
			buf = ""
			if (text[pos + 1] === String.fromCharCode(47)) {
				e++
				i = text.indexOf(">", e)
			} else {
				i = text.indexOf(" ", e)
				n = text.indexOf(">", e)
				if ((i < 1) || (n > 0 && n < i)) {
					i = n
				}
			}
			if (i > 0) {
				buf = text.slice(e + 1, i)
				if ((buf[0] === String.fromCharCode(47)) || buf === "<" || buf === ">") {
					buf = text.slice(1)
				}
				buf = clearText(buf).toLowerCase()
			}
		}
		pos = text.indexOf("<" + "", pos)
		if (pos !== -1) {
			pos++
		}
		while (pos > -1) {
			if (isClose === true) {
				setEnd()
				delTag()
				isClose = false
			} else {
				pos = text.indexOf("<" + "", pos)
				if (pos > 0) {
					getTagName()
					i = pos + 1
					if (text[i] && text[i] === String.fromCharCode(47)) {
						i = tNames.length
						if (i > 0) {
							i--
							if (buf == tNames[i]) {
								tNames.pop()
								delTag()
							}
						}
						setEnd()
					} else if (buf && buf !== "") {
						isClose = voidTags.indexOf(buf) !== -1
						if (isClose === false) {
							tNames.push(buf)
						}
						tabs += "\t"
					}
				} else {
					break
				}
			}
			if (pos > -1) {
				buf = text.slice(pos)
				text = text.slice(0, pos) + "\n"
				if (tabs.length > 0) {
					text += tabs
				}
				pos = text.length + 1
				text += buf
			}
		}
		text = clearNullStr(text.replace(/> </gi, '><'))
	}
	text = text.trim() + "\n"
	return text.replace(/\n\n/gmi, "\n");
}
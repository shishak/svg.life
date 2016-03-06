function myFunction() {
	document.getElementById("navigation").classList.toggle("show")
}

function getDisplayType(e) {
	var t = e.currentStyle || window.getComputedStyle(e, "");
	return t.display
}("" == document.location.hash || "#" == document.location.hash) && (document.location.hash = "!home");
var PostToCodepen = function() {
	var e, t, n, o, a, s, l = document.getElementsByClassName("pen"),
		r = function(e) {
			var t = document.createElement("form"),
				n = document.createElement("input"),
				o = document.createElement("button"),
				i = document.createDocumentFragment();
			t.setAttribute("action", "http://codepen.io/pen/define"), t.setAttribute("method", "POST"), t.setAttribute("target", "_blank"), n.setAttribute("type", "hidden"), n.setAttribute("name", "data"), n.setAttribute("value", s), t.appendChild(n), o.setAttribute("class", "codepen"), t.appendChild(o), i.appendChild(t), e.appendChild(i)
		},
		c = function(e) {
			var t = JSON.stringify(e);
			return t = t.replace(/"/g, "&quot;"), t = t.replace(/'/g, "&apos;")
		},
		d = function() {
			for (i = 0, len = l.length; i < len; i++) {
				var d = {
					title: "SVG Icons & Logos by SVG.LIFE",
					description: "More SVG - http://svg.life/",
					css: "svg {width:100vw; height:100vh}"
				};
				e = l[i].getElementsByClassName("data");
				for (var u = 0, p = e.length; p > u; u++) t = e[u], n = t.getAttribute("type"), o = t.firstChild, a = o.innerHTML, a.length > 0 && (d[n] = a);
				s = c(d), r(l[i])
			}
		};
	return {
		please: d
	}
}();
PostToCodepen.please(), document.getElementById("navi").onclick = function() {
		myFunction()
	}, window.onclick = function(e) {
		if (!e.target.matches(".left")) {
			var t, n = document.getElementsByClassName("drawer");
			for (t = 0; t < n.length; t++) {
				var o = n[t];
				o.classList.contains("show") && o.classList.remove("show")
			}
		}
	}, WebFontConfig = {
		google: {
			families: ["Roboto+Mono::latin"]
		}
	},
	function() {
		var e = document.createElement("script");
		e.src = "https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js", e.type = "text/javascript", e.async = "true";
		var t = document.getElementsByTagName("script")[0];
		t.parentNode.insertBefore(e, t)
	}();
for (var svgs = document.querySelectorAll("svg"), i = 0, l = svgs.length; l > i; i++) ! function(e) {
	e.addEventListener("focus", function() {
		console.log("focus:" + e.tabIndex)
	})
}(svgs[i]);
var inputId = "search",
	itemsData = "filter",
	displaySet = !1,
	displayArr = [];
document.getElementById(inputId).onkeyup = function() {
	for (var e = this.value.toLowerCase(), t = document.querySelectorAll("[" + itemsData + "]"), n = 0; n < t.length; n++) displaySet || displayArr.push(getDisplayType(t[n])), t[n].style.display = "none", t[n].getAttribute("filter").indexOf(e) >= 0 && (t[n].style.display = displayArr[n]);
	displaySet = !0
}

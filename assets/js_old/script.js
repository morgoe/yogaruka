/* Modernizr 2.8.3 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-localstorage-touch-shiv-cssclasses-teststyles-prefixes-load
 */
;window.Modernizr=function(a,b,c){function w(a){j.cssText=a}function x(a,b){return w(m.join(a+";")+(b||""))}function y(a,b){return typeof a===b}function z(a,b){return!!~(""+a).indexOf(b)}function A(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:y(f,"function")?f.bind(d||b):f}return!1}var d="2.8.3",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n={},o={},p={},q=[],r=q.slice,s,t=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},u={}.hasOwnProperty,v;!y(u,"undefined")&&!y(u.call,"undefined")?v=function(a,b){return u.call(a,b)}:v=function(a,b){return b in a&&y(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=r.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(r.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(r.call(arguments)))};return e}),n.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:t(["@media (",m.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},n.localstorage=function(){try{return localStorage.setItem(h,h),localStorage.removeItem(h),!0}catch(a){return!1}};for(var B in n)v(n,B)&&(s=B.toLowerCase(),e[s]=n[B](),q.push((e[s]?"":"no-")+s));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)v(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},w(""),i=k=null,function(a,b){function l(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function m(){var a=s.elements;return typeof a=="string"?a.split(" "):a}function n(a){var b=j[a[h]];return b||(b={},i++,a[h]=i,j[i]=b),b}function o(a,c,d){c||(c=b);if(k)return c.createElement(a);d||(d=n(c));var g;return d.cache[a]?g=d.cache[a].cloneNode():f.test(a)?g=(d.cache[a]=d.createElem(a)).cloneNode():g=d.createElem(a),g.canHaveChildren&&!e.test(a)&&!g.tagUrn?d.frag.appendChild(g):g}function p(a,c){a||(a=b);if(k)return a.createDocumentFragment();c=c||n(a);var d=c.frag.cloneNode(),e=0,f=m(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function q(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?o(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function r(a){a||(a=b);var c=n(a);return s.shivCSS&&!g&&!c.hasCSS&&(c.hasCSS=!!l(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||q(a,c),a}var c="3.7.0",d=a.html5||{},e=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g,h="_html5shiv",i=0,j={},k;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",g="hidden"in a,k=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){g=!0,k=!0}})();var s={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:d.shivCSS!==!1,supportsUnknownElements:k,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:r,createElement:o,createDocumentFragment:p};a.html5=s,r(b)}(this,b),e._version=d,e._prefixes=m,e.testStyles=t,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+q.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};


/* Fast Click Initialise */
FastClick.attach(document.body);


/* Google Analytics */
// Initialise
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-63372069-1', 'auto');


/* Instant Click */
InstantClick.on('change', function() {
	ga('send', 'pageview', location.pathname + location.search);
	numPagesVisited++;
	initVisited();
	initExternalLinks();
	animateIn();
	$(window).resize();
});

InstantClick.init();


/* Google Analytics */
// Send an event on page exit, so that time is tracked properly for bounce pages.
var numPagesVisited = 0;
window.onbeforeunload = function(){
	ga('send', 'event', 'time-tracking', 'page-exit');
	if (numPagesVisited === 1)
		ga('send', 'event', 'engagement', 'page-bounce');
}


/* Page Animation */
function animateIn() {
	$('body').removeClass('animate-in');
	$('body')[0].offsetHeight; // force reflow
	$('body').addClass('animateBody--in');
}


/* Initial Animation */
$('html').addClass('animateHeader--in');
animateIn();


/* Revisiting Visited http://joelcalifa.com/blog/revisiting-visited */
function initVisited() {
	if ($('html').hasClass('no-localstorage')) // Safari on Private Mode has no local storage, and so will crash here otherwise.
		return;
	var a = 'visited-'+window.location.pathname;
	localStorage.setItem('visited-'+window.location.pathname,true);
	var links = document.getElementsByTagName('a');
	for (i=0;i<links.length;i++) {   
		var link = links[i];
		if (link.host == window.location.host && localStorage.getItem('visited-' + link.pathname)) {
			link.dataset.visited = true;
		}
	}
}


/* Make all external links open in new tabs */
function initExternalLinks() {
	$(document.links).filter(function() {
	    return this.hostname != window.location.hostname;
	}).attr('target', '_blank');
}


/* Input Label Focus */
$(document)
.on('keyup', 'input, textarea', function() {
	if ($(this).val().length)
		$(this).closest('.m-input-wrapper').addClass('is-notEmpty')
	else
		$(this).closest('.m-input-wrapper').removeClass('is-notEmpty')
})
.on('focus', 'input, textarea', function() {
	$(this).closest('.m-input-wrapper').addClass('is-focused');
})
.on('blur', 'input, textarea', function() {
	$(this).closest('.m-input-wrapper').removeClass('is-focused');
});


/* Contact Me Modal */
function toggleContactModal(action, doState, stateMessage) {
	var btn = $('#contactMe-openModal');
	var modal = $('#contactMe-modal');

	// Offset
	var left = btn[0].offsetLeft + btn.width()/2;
	var top = btn[0].offsetTop + btn.height()/2;
	modal.find('.m-modal-animation').css('margin-left', left).css('margin-top', top);

	if (action === 'open') {
		$("#contactForm-url").val(window.location.pathname); // Set hidden input as URL
		window.history.replaceState({}, '', '/contact/'); // Set URL to /contact to simplify Formsprees
		ga('send', 'pageview', location.pathname + location.search); // Send GA pageview
	} else if (action === 'close') {
		if ($("#contactForm-url").val() === '')
			window.history.replaceState({}, '', '/'); // If URL is home, use /
		else
			window.history.replaceState({}, '', $("#contactForm-url").val()); // Set URL back to what it was
		 // Don't send GA pageview on closing, that would be counting it twice
		$("#contactForm-url").val(''); // Set URL input to blank
	} else if (action === 'page') {
		modal.addClass('is-page');
		setTimeout(function() {
			window.history.replaceState({}, '', '/contact/');
			modal.removeClass('is-page');
		}, 100);
	}

	if (doState === 'success') {
		// If success state, then show the success message
		modal.addClass('is-success');
		modal.find('.m-modal-messageText').html(stateMessage);
		setTimeout(function() { // Then minimise the modal
			modal.removeClass('is-open');
			$('body').removeClass('is-modalOpen'); // Allow body scrolling
		}, 4000);
		setTimeout(function() { // Then remove the success state silently in the background
			modal.removeClass('is-success');
		}, 5000);
	} else {
		// Otherwise, just open/close the modal as usual
		modal.toggleClass('is-open');
		$('body').toggleClass('is-modalOpen'); // Prevent body scrolling
		autosize($('#contactForm-message')); // Initialise autosize plugin
	}
}
$(document).on('click', '#contactMe-openModal, .js-contactMe-openModal', function() {
	toggleContactModal('open');
});
$(document).on('click', '#contactMe-closeModal', function() {
	toggleContactModal('close');
});


/* Formspree Contact Form */
$(document).on('click', '#contactForm-submit', function(e){
	e.preventDefault(); // prevent the form to do the post.

	var contactForm = $("#contactForm")[0],
	inputName = $("#contactForm-name"),
	inputEmail = $("#contactForm-email"),
	inputMessage = $("#contactForm-message"),
	inputURL = $("#contactForm-url"),
	sendButton = $("#contactForm-submit");

	sendButton.attr("data-text", "Sending...");

	var xhr = new XMLHttpRequest();
	xhr.open('POST', '//formspree.io/hello@morgancarter.com.au', true);
	xhr.setRequestHeader("Accept", "application/json")
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")

	xhr.send(
		"name=" + inputName.val() +
		"&email=" + inputEmail.val() +
		"&message=" + inputMessage.val() +
		"&url=" + inputURL.val());

	xhr.onloadend = function (res) {
		if (res.target.status === 200){
			toggleContactModal('close', 'success', 'Thanks for contacting me!<br> I\'ll be in touch within a couple of days.');

			// Clear form values
			inputName.val('').removeClass('is-notEmpty');
			inputEmail.val('').removeClass('is-notEmpty');
			inputMessage.val('').removeClass('is-notEmpty');
		}
		else {
			// toggleContactModal('error', 'Something went wrong. Please double check your details.');
		}
		setTimeout(function() {
			sendButton.attr("data-text", "Submit");	
		}, 1000);
	}
});



/* Redirect from /contact/ to /?contact and open the modal */
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

if (getUrlParameter('contact') === true)
	toggleContactModal('page');



// Hide 'hover to reveal' when secret is shown.
$(document).on('mouseover', '.js-showSecret', function() {
	$(this).parent().addClass('show');
});

// Hide 'hover to reveal' when After is shown.
$(document).on('mouseover', '.js-toggleBeforeAfter', function() {
	$(this).addClass('show');
});
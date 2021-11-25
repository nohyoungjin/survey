$(function() {

	// init


	// on load

	window.onload = new function() { 
		
		$('body').addClass('load')
		
	}

})


// mobile condition

function isMobile() {
    return (/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)
	// return $('html').hasClass('mobile')
}

// os check

function isMacOs() {
    return navigator.platform.indexOf('Mac') > -1
}

// browser check

function isBrowserChrome() {
    return /Chrome/.test(navigator.userAgent)
}

function isBrowserFirefox() {
    return /Firefox/.test(navigator.userAgent)
}
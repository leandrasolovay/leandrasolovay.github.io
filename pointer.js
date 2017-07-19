var stretch = document.getElementById('stretch');
var handimg = document.getElementById('handimg');

window.onscroll = function () {
	stretch.style.height = (110 + (window.scrollY) * .62) + 'px';

	stretch.style.top = (0 + window.scrollY) + 'px';
	handimg.style.height = (110 + (window.scrollY) * .62) + 'px';

}
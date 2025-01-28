let subcriptSwiper;

function initialSubcriptSwiper() {
	subcriptSwiper = new Swiper(".subscript__swiper", {
		loop: false,
		spaceBetween: 10,
		slidesPerView: 2,
	});
}

function destroySubscriptSwiper() {
	if (subcriptSwiper) {
		subcriptSwiper.destroy(true, true);
		subcriptSwiper = null;
	}
}
function remToPixels(rem) {
	return (
		rem * parseFloat(getComputedStyle(document.documentElement).fontSize)
	);
}
function handleSubscriptSwiper() {
	const screenWindow = window.innerWidth;
	const breakpointInPixels = remToPixels(47.9375);
	if (screenWindow <= breakpointInPixels && !subcriptSwiper) {
		initialSubcriptSwiper();
	} else if (screenWindow > breakpointInPixels && subcriptSwiper) {
		destroySubscriptSwiper();
	}
}
handleSubscriptSwiper();

window.addEventListener("resize", handleSubscriptSwiper);

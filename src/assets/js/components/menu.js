function openMenu(menu) {
	menu.classList.add("is-active");
}

function closeMenu(menu) {
	menu.classList.remove("is-active");
}

function lockScroll() {
	document.querySelector("html").classList.add("_fixed");
}

function unlockScroll() {
	document.querySelector("html").classList.remove("_fixed");
}

document.addEventListener("click", (event) => {
	const target = event.target;
	const menu = document.querySelector(".header__menu");
	if (!menu) return;

	if (target.closest(".header__btn-open")) {
		lockScroll();
		openMenu(menu);
	}

	const closeSelectors = [
		".header__menu-close",
		".header__menu-link",
		".header__contact-link",
	];
	if (closeSelectors.some((selector) => target.closest(selector))) {
		unlockScroll();
		closeMenu(menu);
	}
});

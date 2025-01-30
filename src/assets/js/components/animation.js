// sampler animate
const trigerSampler = document.querySelector(".sampler__top");
const samplerBodyText = document.querySelector(".sampler__body-text");
const samplerCounter = document.querySelector(".sampler__counters");

if (trigerSampler) {
	const samplerAnimategroup = gsap.timeline({
		scrollTrigger: {
			trigger: trigerSampler,
			start: "top 90%",
		},
	});

	if (samplerBodyText) {
		samplerAnimategroup.fromTo(
			samplerBodyText,
			{
				x: "-100%",
				opacity: 0,
			},
			{
				x: "0",
				opacity: 1,
				duration: 0.8,
			}
		);
	}
	if (samplerCounter) {
		samplerAnimategroup.fromTo(
			samplerCounter,
			{
				x: "100%",
				opacity: 0,
			},
			{
				x: "0",
				opacity: 1,
				duration: 0.8,
			}
		);
	}
}

const advantagesAnimate = document.querySelectorAll(".advantages__inner");

advantagesAnimate.forEach((row, index) => {
	const img = row.querySelector(".advantages-img");
	const text = row.querySelector(".advantages__top");

	gsap.fromTo(
		img,
		{
			x: index % 2 === 0 ? "100%" : "-100%",
			opacity: 0,
		},
		{
			x: "0",
			opacity: 1,
			duration: 1,
			scrollTrigger: {
				trigger: row,
				start: "top 80%",
			},
		}
	);

	gsap.fromTo(
		text,
		{
			x: index % 2 === 0 ? "-100%" : "100%",
			opacity: 0,
		},
		{
			x: "0",
			opacity: 1,
			duration: 1,
			scrollTrigger: {
				trigger: row,
				start: "top 80%",
			},
		}
	);
});

const circlsImg = document.querySelector(".circls-img");
if (circlsImg) {
	const imgAnim = circlsImg.querySelector("img");
	gsap.fromTo(
		imgAnim,
		{ scale: "0", opacity: 0 },
		{
			scale: "1",
			opacity: 1,
			duration: 0.9,
			scrollTrigger: {
				trigger: circlsImg,
				start: "top 90%",
			},
		}
	);
}

const circsBoxAll = document.querySelectorAll(".circs__box");

circsBoxAll.forEach((box) => {
	gsap.fromTo(
		box,
		{ y: "100%", opacity: 0 },
		{
			y: "0",
			opacity: 1,
			duration: 0.8,
			scrollTrigger: {
				trigger: box,
				start: "top 90%",
			},
		}
	);
});

const serviceBoxAll = document.querySelectorAll(".service__box");

serviceBoxAll.forEach((serviceBox) => {
	gsap.fromTo(
		serviceBox,
		{ scale: "0", opacity: 0 },
		{
			scale: "1",
			opacity: 1,
			duration: 0.8,
			scrollTrigger: {
				trigger: serviceBox,
				start: "top 90%",
			},
		}
	);
});

const subscriptSwiper = document.querySelector(".subscript__swiper");
if (subscriptSwiper) {
	gsap.fromTo(
		subscriptSwiper,
		{
			scale: "1.1",
			opacity: 0,
		},
		{
			scale: "1",
			opacity: 1,
			duration: 1,
			scrollTrigger: {
				trigger: subscriptSwiper,
				start: "top 90%",
			},
		}
	);
}

const favoritesImg = document.querySelector(".favorites__img");
if (favoritesImg) {
	const favoritesImgAnim = favoritesImg.querySelector("img");
	gsap.fromTo(
		favoritesImgAnim,
		{ opacity: 0 },
		{
			opacity: 1,
			duration: 1.2,
			scrollTrigger: {
				trigger: favoritesImg,
				start: "top 90%",
			},
		}
	);
}

const favoritesInner = document.querySelectorAll(".favorites__inner");

favoritesInner.forEach((inner, index) => {
	gsap.fromTo(
		inner,
		{
			x: index % 2 === 0 ? "100%" : "-100%",
			opacity: 0,
		},
		{
			x: "0",
			opacity: 1,
			duration: 1,
			scrollTrigger: {
				trigger: inner,
				start: "top 80%",
			},
		}
	);
});

const suitableInnerAll = document.querySelectorAll(".suitable__inner");

suitableInnerAll.forEach((suiTableinner, index) => {
	gsap.fromTo(
		suiTableinner,
		{
			x: index % 2 === 0 ? "-100%" : "100%",
			opacity: 0,
		},
		{
			x: "0",
			opacity: 1,
			duration: 1,
			scrollTrigger: {
				trigger: suiTableinner,
				start: "top 80%",
			},
		}
	);
});
const reviewsList = document.querySelector(".reviews__list");
if (reviewsList) {
	gsap.fromTo(
		reviewsList,
		{
			opacity: 0,
		},
		{
			opacity: 1,
			duration: 2,
			scrollTrigger: {
				trigger: reviewsList,
				start: "top 80%",
			},
		}
	);
}

const questInnerAll = document.querySelectorAll(".quest__inner");

questInnerAll.forEach((quest) => {
	gsap.fromTo(
		quest,
		{
			y: "100%",
			opacity: 0,
		},
		{
			y: "0",
			opacity: 1,
			duration: 1,
			scrollTrigger: {
				trigger: quest,
				start: "top 80%",
			},
		}
	);
});

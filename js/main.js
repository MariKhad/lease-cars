
const tabItem = document.querySelectorAll('.tabs__btn-item');
const tabContent = document.querySelectorAll('.tabs__content-item');


tabItem.forEach((el) => {
	el.addEventListener('click', openTab);
})

function openTab(evt) {
	const tabTarget = evt.currentTarget;
	const button = tabTarget.dataset.button;
	console.log(button);

	tabItem.forEach((item) => {
		item.classList.remove('tabs__btn-item--active');
	})

	tabTarget.classList.add('tabs__btn-item--active');

	tabContent.forEach((tab) => {
		tab.classList.remove('tabs__content-item--active');
	})

	document.querySelector(`#${button}`).classList.add('tabs__content-item--active');
}


if (document.querySelector('.arrow') !== null) {

	const arrow = document.querySelector('.arrow');
	console.log(arrow);

	window.addEventListener('scroll', function () {
		if ((window.pageYOffset * 2) > window.innerHeight) {
			arrow.classList.add('arrow-show');
		} else {
			arrow.classList.remove('arrow-show');
		}
	})

	arrow.addEventListener('click', function (e) {
		scrollToY(0);
	})

	function scrollToY(pos) {
		window.scrollTo({
			top: pos,
			behavior: "smooth"
		})
	}

	function elemOffsetTop(node) {
		let coords = node.getBoundingClientRect();
		return coords.top + window.pageYOffset;
	}

}

const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu__list');

menuBtn.addEventListener('click', () => {
	menu.classList.toggle('menu__list--active');
});

const swiper = new Swiper('.swiper', {
	// Optional parameters
	loop: true,

	// Navigation arrows
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	effect: 'fade',
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
});

/* 







const menu = document.querySelector('nav');
const links = document.querySelectorAll('.menu-link__inner');
const promo = document.querySelector('.promo__arrow');

menuBtn.addEventListener('click', () => {
menuMobile.classList.toggle('menu--open');
});

menu.addEventListener('click', function (e) {
if (e.target.classList.contains('menu-link__inner')) {
e.preventDefault();

let link = e.target;
scrollToId(link.hash);
}
});

menuMobile.addEventListener('click', function (e) {
if (e.target.classList.contains('menu-link__inner')) {
e.preventDefault();

let link = e.target;
scrollToId(link.hash);
}
});

promo.addEventListener('click', function (e) {
e.preventDefault();
scrollToId('#info');
});

function scrollToId(id) {
let target = document.querySelector(id);
let styles = window.getComputedStyle(target);

if (target !== null) {
let pos = elemOffsetTop(target) - parseFloat(styles.marginTop);
scrollToY(pos);
}
}







window.addEventListener('scroll', function () {
if (window.pageYOffset > window.innerHeight) {
arrow.classList.add('arrow-show');
} else {
arrow.classList.remove('arrow-show');
}
})

arrow.addEventListener('click', function (e) {
scrollToY(0);
})

function scrollToY(pos) {
window.scrollTo({
top: pos,
behavior: "smooth"
})
}

function elemOffsetTop(node) {
let coords = node.getBoundingClientRect();
return coords.top + window.pageYOffset;
}


*/
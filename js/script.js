const menu = document.querySelector('.nav__menu');
const allLinks = document.querySelectorAll('.nav__link');
const burger = document.querySelector('.nav__burger');
const close = document.querySelector('.nav__close');
const shadow = document.querySelector('.nav__shadow');

const showMenu = () => {
	burger.classList.add('hide');
	close.classList.add('show');
	shadow.classList.add('show');
	menu.classList.add('show');
};

const hideMenu = () => {
	close.classList.remove('show');
	burger.classList.remove('hide');
	shadow.classList.remove('show');
	menu.classList.remove('show');
};

burger.addEventListener('click', showMenu);
close.addEventListener('click', hideMenu);
allLinks.forEach((link) => {
	link.addEventListener('click', hideMenu);
});

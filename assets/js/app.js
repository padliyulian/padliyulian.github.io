document.getElementById("year").innerHTML = new Date().getFullYear()

// Navbar Fixed
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#to-top');

    if (window.pageYOffset > fixedNav) {
        portfolioAnimate();
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    } else {
        header.classList.remove('navbar-fixed');
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    }
};

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

// Klik di luar hamburger
window.addEventListener('click', function (e) {
    if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove('hamburger-active');
    navMenu.classList.add('hidden');
    }
});

// Darkmode toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function () {
    if (darkToggle.checked) {
    html.classList.add('dark');
    localStorage.theme = 'dark';
    } else {
    html.classList.remove('dark');
    localStorage.theme = 'light';
    }
});

// pindahkan posisi toggle sesuai mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true;
} else {
    darkToggle.checked = false;
}

function onloadAnimate() {
    document.querySelector('.navbar').classList.add('animated', 'fadeInDown');
    document.querySelector('.about').classList.add('animated', 'fadeInUp');
}

function portfolioAnimate() {
    document.querySelectorAll('.animate-left').forEach((el, i) => {
        el.classList.add('animated','bounceInLeft');
    });

    document.querySelectorAll('.animate-right').forEach((el, i) => {
        el.classList.add('animated','bounceInRight');
    });
}
  
onloadAnimate();
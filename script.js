document.getElementById('menu-btn').addEventListener('click', function() {
    var menu = document.getElementById('mobile-menu');
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
});

// let currentIndex = 0;
// const slider = document.querySelector('.slider');
// const items = document.querySelectorAll('.slider-item');

// setInterval(() => {
//     currentIndex = (currentIndex + 1) % items.length;
//     slider.style.transform = `translateX(-${currentIndex * 100}%)`;
// }, 1110);

function toggleInfoBox(element) {
    element.classList.toggle('active');
}

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
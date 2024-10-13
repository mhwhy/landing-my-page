//      

const menu = document.querySelector('.menu');
const hamburgerMenu = document.querySelector('.hamburger-menu');

menu.addEventListener('click', displayMenu);
hamburgerMenu.addEventListener('click', displayMenu);

const iconBars = document.querySelector('.fa-bars');
const iconClose = document.querySelector('.fa-x');

function displayMenu(){
    if (menu.classList.contains('absolute')) {
        menu.classList.add('hidden')
        iconBars.style.display = 'inline';
        iconClose.style.display = 'none';
        
        
        menu.classList.remove('absolute')
        menu.classList.remove('top-20')
        menu.classList.remove('border')
        menu.classList.remove('w-full')
        menu.classList.remove('left-0')
        menu.classList.remove('divide-y-2')
    } else {
        menu.classList.remove('hidden')
        iconBars.style.display = 'none';
        iconClose.style.display = 'inline';
        menu.classList.add('absolute')
        menu.classList.add('top-28')
        menu.classList.add('border')
        menu.classList.add('w-full')
        menu.classList.add('bg-black')

    }
}


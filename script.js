
const header = document.querySelector('.header');
const headerMenu = document.querySelector('.header-menu');
const close = document.querySelector('.header-close');

headerMenu.addEventListener("click", () => {
    header.classList.add('nav-open');
});

close.addEventListener("click", () => {
    header.classList.add('nav-close');
    setTimeout(() => {
        header.classList.remove('nav-open', 'nav-close');
    }, 400); 
});



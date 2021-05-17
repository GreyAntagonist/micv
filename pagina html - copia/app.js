const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.header__navbar-ul');
    const navLinks = document.querySelectorAll('.header__navbar-li');


    //Toggle Nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        //animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            }
            else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });

        //Burger animation 
        burger.classList.toggle('toggle');
    });


}

navSlide();
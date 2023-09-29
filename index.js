document.addEventListener("DOMContentLoaded", function() {

    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');

            menuBtn.classList.toggle('toggle');
        });
    }

});
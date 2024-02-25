window.addEventListener('scroll', function() {
    let navbar = document.getElementById('navbar');
    let scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
        navbar.classList.add('with-border');
    } else {
        navbar.classList.remove('with-border');
    }
});
window.addEventListener('scroll', () => {
    const backToTop = document.querySelector('.back-to-top');
    if (window.scrollY > 200) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});
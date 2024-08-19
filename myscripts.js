document.querySelector('.navbar-toggle').addEventListener('click', function() {
    const navMenu = document.querySelector('nav ul');
    navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
});

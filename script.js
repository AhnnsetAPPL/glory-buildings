(function(){
  var hamburgerBtn = document.getElementById('hamburger');
  var mobileMenu = document.getElementById('menu-mobile');
  var navbar = document.getElementById('navbar');

  function toggleMobileMenu() {
    mobileMenu.classList.toggle('links-mobile-revealed');
    navbar.classList.toggle('fixed-navigation');
  }

  function sayHello() {
    alert('Hello')
  }

  hamburgerBtn.addEventListener('click', toggleMobileMenu);
})()
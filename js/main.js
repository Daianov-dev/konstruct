document.addEventListener("DOMContentLoaded", function() {
  let menuItems = document.querySelectorAll(".menu__link");

  for (let i = 0; i < menuItems.length; i++) {
      menuItems[i].addEventListener("click", function(event) {
          event.preventDefault();
          let currentActive = document.querySelector(".menu__link.active");

          if (currentActive) {
              currentActive.classList.remove("active");
          }

          this.classList.add("active");
      });
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const header = document.getElementById('stickyHeader');
  const sticky = header.offsetTop;

  window.onscroll = function() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  };
});


document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger');
  const menu = document.getElementById('menu');

  hamburger.addEventListener('click', function() {
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');
  });
});

















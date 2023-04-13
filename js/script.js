$(document).ready(function () {
  var owl = $("#owl-demo");

  owl.owlCarousel({
    items: 3, //10 items above 1000px browser width
    autoPlay: true,
    itemsDesktop: [1000, 3], //5 items between 1000px and 901px
    itemsDesktopSmall: [900, 2], // betweem 900px and 601px
    itemsTablet: [600, 1], //2 items between 600 and 0
    itemsMobile: false, // itemsMobile disabled - inherit from itemsTablet option
  });

  // Custom Navigation Events
  $(".next").click(function () {
    owl.trigger("owl.next");
  });
  $(".prev").click(function () {
    owl.trigger("owl.prev");
  });
});

//javascript code
let menu_btn = document.querySelector(".menu-btn");
let nav = document.querySelector("nav");

menu_btn.onclick = () => {
  nav.classList.toggle("active");
  if (menu_btn.innerText == "X") {
    menu_btn.innerHTML = `<div class="toggle-btn"></div>`;
  } else {
    menu_btn.innerHTML = "X";
  }
};

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  
  


  window.onscroll = function() {myFunction()};


  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      }else{
        link.style.animation = `navLinkFade 0.5s ease forwards`
      }
    });
  });
};

function myFunction() {
  let navbar = document.getElementById('navbar');
  let sticky = navbar.offsetTop;
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

navSlide();

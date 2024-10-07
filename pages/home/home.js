document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navBar = document.querySelector(".nav-bar");
    const scrollUpBtn = document.getElementById("scrollUpBtn");
    const overlay = document.getElementById("overlay");
    
    // Hamburger menu toggle
    hamburger.addEventListener("click", () => {
      navBar.classList.toggle("active");
    });
  
    // Scroll to top button functionality
    window.onscroll = function () {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollUpBtn.style.display = "block";
      } else {
        scrollUpBtn.style.display = "none";
      }
    };
  
    scrollUpBtn.addEventListener("click", () => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });
  
    // Page navigation with overlay effect
    window.navigateTo = function (page) {
      overlay.classList.add("active");
  
      setTimeout(() => {
        window.location.href = `../${page}/${page}.html`;
      }, 500); // Adjust the delay to match the duration of the fadeIn animation
    };
  });
  

  // VISIBILITY SCRIPTING*********************
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom >= 0;
}

function toggleVisibilityOnScroll() {
  const elements = document.querySelectorAll('.about-fbg-wild');
  elements.forEach((element) => {
      if (isInViewport(element)) {
          element.classList.add('visible');
      } else {
          element.classList.remove('visible');
      }
  });
}

window.addEventListener('scroll', toggleVisibilityOnScroll);
document.addEventListener('DOMContentLoaded', toggleVisibilityOnScroll);
// NAVBAR SCRIPTING
hamburger = document.querySelector(".hamburger");
hamburger.onclick = function(){
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
}


// DOWNLOADS SCRIPTING
document.getElementById('downloadButton').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = '../../doc/fwild.pdf';
    link.download = 'fwild.pdf';
    link.click();
});

//TOP BUTTON
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    const scrollUpBtn = document.getElementById("scrollUpBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollUpBtn.style.display = "block";
    } else {
        scrollUpBtn.style.display = "none";
    }
}

document.getElementById('scrollUpBtn').addEventListener('click', function(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
function rmv() {
  document.getElementById("alert").style.width = "0";
  document.getElementById("alert").innerHTML = null;
  document.getElementById("nav1").style.height = "40px"
}


function navDropdown() {
  let x = document.getElementById("navBar");
  if (x.className === "nav") {
    x.className += " responsive";
  } else {
    x.className = "nav";
  }
};



const dropdowns = Array.from(document.getElementsByClassName("dropdown-content"));
const dropdownButtons = Array.from(document.getElementsByClassName('dropbtn'));

let currentDropdown = 0;
let dropdownAmount = 0;

dropdownButtons.forEach(function(dropdownBtn, index) {
  dropdownBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    dropdowns[index].classList.toggle('show');
    currentDropdown = index;
    dropdownAmount++;
    
    if (dropdownAmount > 1) { // closes other dropdowns if more than one is open
      for (let i = 0; i < dropdowns.length; i++) {
        const openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show') && i !== currentDropdown) {
          openDropdown.classList.remove('show');
        }
      }
      dropdownAmount = 1;
    }
  });
});

window.addEventListener('click', function(event) {
  for (let i = 0; i < dropdowns.length; i++) {
    const openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
    dropdownAmount = 0;
  }
});




function openCity(evt, cityName) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("dpt-view");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active3", "");
  }
  document.getElementById(cityName).style.display = "flex";
  evt.currentTarget.className += " active3";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();







let chngbackg = document.getElementById("moreButton");
chngbackg.addEventListener("mouseover", changeBackground);

  function changeBackground() {
    const changeit = document.querySelector(".more");
    chngbackg.style.backgroundColor = "darkblue";
    chngbackg.innerText = "Read More";
    chngbackg.style.color = "white";
    for (let i = 0; i < changeit.length; i++) {
      changeit[i].style.color = "white";
    }
  }  


let footerdropdown = document.querySelector(".showfooter");
let footericon = document.getElementById("footerIcon");

footericon.addEventListener ("click", showMoreFooter)
function showMoreFooter() {
  footerdropdown.classList.toggle("showfooter");
  footericon.classList.toggle("fa-square-minus");
}


let signinalerticon = document.getElementById("signIcon");
let signindropdown = document.getElementById("signAlert");
signinalerticon.addEventListener("click", showSignOption)
function showSignOption() {
  signindropdown.classList.toggle("showed");
  signinalerticon.classList.toggle("fa-xmark");
}





function showSearch() {
  document.getElementById("searchAlert").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('#fas2')) {
    let dropdowns = document.getElementsByClassName("search-alert");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('');
      }
    }
  }
}




let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); 
}



const square = document.querySelector('.information1');
square.classList.remove('information-transition1');

// Create the observer, same as before:
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      square.classList.add('information-transition1');
      return;
    }

    square.classList.remove('information-transition1');
  });
});

observer.observe(document.querySelector('.information-wrapper'));






const square2 = document.querySelector('.information2');
square2.classList.remove('information-transition2');

// Create the observer, same as before:
const observer2 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      square2.classList.add('information-transition2');
      return;
    }

    square2.classList.remove('information-transition2');
  });
});

observer2.observe(document.querySelector('.information-wrapper'));






const square3 = document.querySelector('.information3');
square3.classList.remove('information-transition3');

// Create the observer, same as before:
const observer3 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      square3.classList.add('information-transition3');
      return;
    }

    square3.classList.remove('information-transition3');
  });
});

observer3.observe(document.querySelector('.information-wrapper'));








let topbutton = document.querySelector("#topBtn");
let sidenav = document.querySelector(".quick-menu");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    topbutton.style.display = "block";
  } else {
    topbutton.style.display = "none";
  }
  if (document.body.scrollTop > 3500 || document.documentElement.scrollTop > 3500) {
    sidenav.style.opacity = "0";
  } else {
    sidenav.style.opacity = "1";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; 
}




let slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlides(n) {
  showSlides2(slideIndex2 += n);
}

function currentSlide(n) {
  showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
  let i;
  let slides2 = document.getElementsByClassName("mySlides2");
  let dots2 = document.getElementsByClassName("row-image");
  let captionText2 = document.getElementById("caption2");
  if (n > slides2.length) {slideIndex2 = 1}
  if (n < 1) {slideIndex2 = slides2.length}
  for (i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "none";
  }
  for (i = 0; i < dots2.length; i++) {
    dots2[i].className = dots2[i].className.replace(" active2", "");
  }
  slides2[slideIndex2-1].style.display = "block";
  dots2[slideIndex2-1].className += " active2";
  captionText2.innerHTML = dots2[slideIndex2-1].alt;
};



let buton = document.getElementById("change-img");
let divv = document.getElementById("displayConsultImgType");
let blurs = document.getElementById("sideShow");
let onhover = document.getElementById("appoint");
onhover.addEventListener("mouseover", blurBody);
onhover.addEventListener("mouseout", reblurBody);
buton.addEventListener("mouseover", changeImg);
buton.addEventListener("mouseout", rechangeImg); 

function blurBody() {
  document.querySelector(".main").style.opacity = ".6";
}
function reblurBody() {
  document.querySelector(".main").style.opacity = "1";
}

function changeImg() {
  divv.style.backgroundImage = "url('pic/virtual-consultation.jpg')";
  }

function rechangeImg() {
  divv.style.backgroundImage = "url('pic/Doctor-checking-blood-pressure.jpg')";
  }




function checkCookies() {
  let text = "";

  if (navigator.cookieEnabled == true) {
    text = "This website uses Cookies to enable us serve you better and help us provide you with a better website, by enabling us to monitor which pages you find useful and which you do not. Will you like to continue allowing the Cookies?";
  } else {
     text = "Cookies are not enabled.";
  }
  document.getElementById("demo").innerHTML = text;
}


let cookiesbtn = document.getElementById("cookiesBtn");
cookiesbtn.addEventListener("click", closeit);
let cookiescontainer = document.getElementById("cookies");

function closeit() {
  cookiescontainer.innerHTML = null;
  cookiescontainer.style.width = "0";
  cookiescontainer.style.padding = "0";
}


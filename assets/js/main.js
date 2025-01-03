AOS.init();
let navAnchor = document.querySelectorAll('nav a');
let smallNavigation = document.querySelector("#small-nav");

// **************** navbar cards make ACTIVE ***********************
$.fn.isInViewport = function() {
  let elementTop = $(this).offset().top;
  let elementBottom = elementTop + $(this).outerHeight();

  let viewportTop = $(window).scrollTop();
  let viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};

$(window).on('resize scroll', function() {

    if ($('#home').isInViewport()) {
      $('#home-is-active').addClass('w3-black');
      $('#small-home-is-active').addClass('w3-dark-grey'); 
      $('#my-small-img').css("transition", "all 1s");   
      $('#my-small-img').css("opacity", "0");
    } else {
      $('#home-is-active').removeClass('w3-black');
      $('#home-is-active').addClass('w3-hover-black');
      $('#small-home-is-active').removeClass('w3-dark-grey');
      $('#small-home-is-active').addClass('w3-hover-dark-grey');
      $('#my-small-img').css("transition", "all 2s");
      $('#my-small-img').css("opacity", "1.0");
    }
  
    if ($('#about').isInViewport() && !$('#home').isInViewport()) {
      $('#about-is-active').addClass('w3-black');
      $('#small-about-is-active').addClass('w3-dark-grey');
      $('#home-is-active').removeClass('w3-black');
      $('#home-is-active').addClass('w3-hover-black');
      $('#small-home-is-active').removeClass('w3-dark-grey');
      $('#small-home-is-active').addClass('w3-hover-dark-grey');
      
    } else {
      $('#about-is-active').removeClass('w3-black');
      $('#about-is-active').addClass('w3-hover-black');
      $('#small-about-is-active').removeClass('w3-dark-grey');
      $('#small-about-is-active').addClass('w3-hover-dark-grey');
    }

    if ($('#services').isInViewport()) {
      $('#services-is-active').addClass('w3-black');
      $('#small-services-is-active').addClass('w3-dark-grey');
      $('#about-is-active').removeClass('w3-black');
      $('#about-is-active').addClass('w3-hover-black');
      $('#small-about-is-active').removeClass('w3-dark-grey');
      $('#small-about-is-active').addClass('w3-hover-dark-grey');
    } else {
      $('#services-is-active').removeClass('w3-black');
      $('#services-is-active').addClass('w3-hover-black');
      $('#small-services-is-active').removeClass('w3-dark-grey');
      $('#small-services-is-active').addClass('w3-hover-dark-grey');
    }

    if ($('#portfolio').isInViewport()) {
      $('#portfolio-is-active').addClass('w3-black');
      $('#small-portfolio-is-active').addClass('w3-dark-grey');
      $('#services-is-active').removeClass('w3-black');
      $('#services-is-active').addClass('w3-hover-black');
      $('#small-services-is-active').removeClass('w3-dark-grey');
      $('#small-services-is-active').addClass('w3-hover-dark-grey');
    } else {
      $('#portfolio-is-active').removeClass('w3-black');
      $('#portfolio-is-active').addClass('w3-hover-black');
      $('#small-portfolio-is-active').removeClass('w3-dark-grey');
      $('#small-portfolio-is-active').addClass('w3-hover-dark-grey');
    }

    if ($('#contact').isInViewport()) {
      $('#contact-is-active').addClass('w3-black');
      $('#small-contact-is-active').addClass('w3-dark-grey');
      $('#portfolio-is-active').removeClass('w3-black');
      $('#portfolio-is-active').addClass('w3-hover-black');
      $('#small-portfolio-is-active').removeClass('w3-dark-grey');
      $('#small-portfolio-is-active').addClass('w3-hover-dark-grey');
    } else {
      $('#contact-is-active').removeClass('w3-black');
      $('#contact-is-active').addClass('w3-hover-black');
      $('#small-contact-is-active').removeClass('w3-dark-grey');
      $('#small-contact-is-active').addClass('w3-hover-dark-grey');
    }
    
});
// *****************************************************************************
// Small NAV hidde on/of
let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    smallNavigation.style.top = "0";
  } else {
    smallNavigation.style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}
//  ****************************************************************************
//  Typing...
let typingHead = document.querySelector('#typing-head');
let typingArea = document.querySelector('#typing-area');
let typingLine = document.querySelector('#typing-line');
let counter = 0;
let timeCallStartTyping = 100;
let typingText = typingHead.getAttribute('data-typing').split(",");

(function start() {
  let tempArr = [];
  let text = typingText[counter].split("");
  counter++;
  if (counter == typingText.length) {
    counter = 0;
  }
  
  startTyping()
  function startTyping() {
    let typeLetter = text.shift();
    tempArr.push(typeLetter);
    
    typingArea.innerHTML += typeLetter;

    timeCallStartTyping += Math.floor(Math.random() * 100);
    let loop = setTimeout(startTyping,timeCallStartTyping);
    timeCallStartTyping = 100;
    if (text.length == 0) {
      clearTimeout(loop);
      typingLine.className = 'blinking';
      setTimeout(deleteTyping,2500);
    }
  }

  function deleteTyping() {
    typingLine.classList.remove('blinking');
    tempArr.pop();
    let delText = '';
    for (let i = 0; i < tempArr.length; i++) {
      delText += tempArr[i];
    }
    typingArea.innerHTML = delText;
    let loop = setTimeout(deleteTyping,50);
    if (tempArr.length == 0) {
      clearTimeout(loop);
      setTimeout(start,100);
    }
  }
}
)();
//  ****************************************************************************
// Tooltips
$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
});
//  ****************************************************************************

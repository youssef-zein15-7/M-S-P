const button = document.getElementById('language-toggle');
const content1 = document.getElementById('Home');
const content2 = document.getElementById('About');
const content3 = document.getElementById('Services');
const content4 = document.getElementById('MyWork');
const content5 = document.getElementById('Contact');
const content6 = document.getElementById('Work');
const content7 = document.getElementById('Mohamed');
const content8 = document.getElementById('cm');
const content9 = document.getElementById('sendBtn');


button.addEventListener('click', function() {
    if (document.documentElement.lang === 'en') {
        document.documentElement.lang = 'ar';
        content1.textContent = 'الصفحه الرئيسيه';
        content2.textContent = 'من انا';
        content3.textContent = 'الخدمات';
        content4.textContent = 'اعمالي';
        content5.textContent = 'تواصل معي';
        content7.textContent = 'محمد شرف';
        content8.textContent = 'تواصل معي';
        content9.textContent = 'ارسال';
    } else {
        document.documentElement.lang = 'en';
        content1.textContent = 'Home';
        content2.textContent = 'About';
        content3.textContent = 'Services';
        content4.textContent = 'My Work';
        content5.textContent = 'Contact';
        content7.textContent = 'Mohamed Sharaf';
        content8.textContent = 'Contact Me';
        content9.textContent = 'Send';
    }   
});
    
window.onscroll = function(){
    scrollFunction();
};

function scrollFunction() {
  var mybutton = document.getElementById("ttpbtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function ScrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; 
}
const button = document.getElementById('language-toggle');
const content1 = document.getElementById('Home');
const content2 = document.getElementById('About');
const content3 = document.getElementById('Services');
const content4 = document.getElementById('MyWork');
const content5 = document.getElementById('Contact');
const content6 = document.getElementById('AboutMe');
const content8 = document.getElementById('sharaf');
const content9 = document.getElementById('Egypt');
const content10 = document.getElementById('downloadresume');
const content11 = document.getElementById('WhatIDo');
const content12 = document.getElementById('Full');
const content13 = document.getElementById('Building');
const content14 = document.getElementById('Cyber');
const content15 = document.getElementById('We');
const content16 = document.getElementById('Have');
const content17 = document.getElementById('Open');
const content18 = document.getElementById('Learning');
const content19 = document.getElementById('Work');
const content20 = document.getElementById('Mohamed');
const content21 = document.getElementById('cm');
const content22 = document.getElementById('sendBtn');
const content23 = document.getElementById('mosh');
const content24 = document.getElementById('view');

button.addEventListener('click', function() {
    if (document.documentElement.lang === 'en') {
        document.documentElement.lang = 'ar';
        content1.textContent = 'الصفحه الرئيسيه';
        content2.textContent = 'من انا';
        content3.textContent = 'الخدمات';
        content4.textContent = 'اعمالي';
        content5.textContent = 'تواصل معي';
        content20.textContent = 'محمد شرف';
        content6.textContent = 'ْعَنِّي';
        content8.textContent = 'انا محمد شرف . على مدى السنوات الأربع الماضية، شاركت بنشاط في برمجة الويب. لدي خبرة في تطوير الويب وحلول التجارة الإلكترونية مع القدرة على إدارة دورة حياة تطوير البرامج بأكملها. بناء الواجهة الأمامية والخلفية لموقع أو تطبيق في نفس الوقت. أنا متحمس للغاية ومكرس لتقديم أعلى مستوى ممكن من العمل. تشمل بعض مهاراتي: HTML5 وCSS3 وTwitter Bootstrap وJavaScript وjQuery وPHP وMySQL وألعب حاليًا مع Laravel ومدرب في مجال الأمن السيبراني الأكورديون. أنا متحمس لصنع أشياء رائعة وتعلم شيء جديد كل يوم.'
        content23.textContent = 'صور عني';
        content9.textContent = 'مصر';
        content10.textContent = 'تحميل السيرة الذاتية';
        content11.textContent = 'ما أفعله';
        content12.textContent = 'تطوير المكدس الكامل';
        content13.textContent = 'بناء الواجهة الأمامية والخلفية لموقع أو تطبيق في نفس الوقت.';
        content14.textContent = 'الأمن السيبراني';
        content15.textContent = 'متخصصون في اختبار اختراق المواقع والشبكات بالتعاون مع الشركات والاستشارات.';
        content16.textContent = 'هل لديك أية فكرة؟';
        content17.textContent = 'منفتح لمشاريع وأفكار جديدة وتعلم شيء جديد، تقوده رؤيتك.';
        content18.textContent = 'أهداف';
        content19.textContent = 'اعمالي';
        content21.textContent = 'تواصل معي';
        content22.textContent = 'ارسال';
        content23.textContent = 'صور عني';
        content24.textContent = 'شاهد المزيد';
        
    } else {
        document.documentElement.lang = 'en';
        content1.textContent = 'Home';
        content2.textContent = 'About';
        content3.textContent = 'Services';
        content4.textContent = 'My Work';
        content5.textContent = 'Contact';
        content20.textContent = 'Mohamed Sharaf';
        content6.textContent = 'About Me';
        content8.textContent = 'I am Mohammed Sharaf. For the last 4 years, I have been actively involved in web programming. I have experience in web development and eCommerce solutions with the ability to manage the entire software development life cycle. Building both the front and back end of a site or app at the same time Iam highly motivated and dedicated to delivering the highest possible standard of work. Some of my skills include: HTML5, CSS3, Twitter Bootstrap, JavaScript, jQuery, PHP, MySQL and currently playing around with Laravel and And a trainer in the field of accordion cybersecurity . I am passionate about making cool stuff and learning something new every day.';
        content23.textContent = 'Pictures about me';
        content9.textContent = 'Egypt';
        content10.textContent = 'Download Resume';
        content11.textContent = 'What I Do';
        content12.textContent = 'Full-stack Development';
        content13.textContent = 'Building the front-end and back-end of a site or app at the same time.';
        content14.textContent = 'Cyber security';
        content15.textContent = 'We specialize in website and network penetration testing in cooperation with companies and consultancies.';
        content16.textContent = 'Have you any idea?';
        content17.textContent = 'Open for new projects, ideas, and learning something new, leading by your visions.';
        content18.textContent = 'Learning and solving problems is something that motivates me a lot. With a focus on web and Cyber securit , I strive to create useful and engaging products through live and inter­active design.';
        content19.textContent = 'My Work';
        content21.textContent = 'Contact Me';
        content22.textContent = 'Send';
        content23.textContent = 'Pictures about me';
        content24.textContent = 'view more';
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

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
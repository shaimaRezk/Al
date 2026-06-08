// =======================
// TEXT DATA
// =======================

const content = {

ar: {

heroTitle:
"مجمع البحر سكوير التجاري",

heroSubtitle:
"أوجهة عصرية تجمع بين الهوية المحلية والفرص الاستثمارية الواعدة.",

aboutTitle:
"نبذة عن المشروع",

aboutText:
"مجمع البحر سكوير التجاري هو وجهة متكاملة تجمع بين التسوق والأعمال والخدمات في موقع استراتيجي مميز مع تصميم عصري ومساحات متنوعة تلبي احتياجات المستثمرين والزوار.",

conceptTitle:
"فكرة المشروع",

conceptText:
"تم استلهام تصميم المشروع من الطابع العصري والانسيابية المستوحاة من البحر ليقدم تجربة تجارية متكاملة ومريحة للزوار.",

planTitle:
"المخطط العام",

galleryTitle:
"معرض الصور",

servicesTitle:
"الخدمات والمساحات",

videoTitle:
"فيديو المشروع",

qrTitle:
"رمز الموقع",

contactTitle:
"تواصل معنا"

},

en: {

heroTitle:
"AL-BAHAR SQUARE",

heroSubtitle:
"A modern destination where local identity meets promising investment opportunities",

aboutTitle:
"About Project",

aboutText:
"AL-BAHAR SQUARE is a modern commercial destination that combines shopping, business and services in a strategic location with contemporary architecture and flexible spaces.",

conceptTitle:
"Project Concept",

conceptText:
"The project concept is inspired by modern architecture and elegant commercial spaces to create a premium experience.",

planTitle:
"Master Plan",

galleryTitle:
"Project Gallery",

servicesTitle:
"Services & Areas",

videoTitle:
"Project Video",

qrTitle:
"Location QR Code",

contactTitle:
"Contact Us"

}

}

// =======================
// LANGUAGE FUNCTION
// =======================

function setLanguage(lang){

// hide splash screen

document.getElementById("languageScreen").style.display =
"none";

// show website

document.getElementById("websiteContent").style.display =
"block";

// direction

if(lang === "ar"){

document.documentElement.lang = "ar";

document.body.dir = "rtl";

}else{

document.documentElement.lang = "en";

document.body.dir = "ltr";

}

// =======================
// HERO
// =======================

document.getElementById("heroTitle").innerHTML =
content[lang].heroTitle;

document.getElementById("heroSubtitle").innerHTML =
content[lang].heroSubtitle;

// =======================
// ABOUT
// =======================

document.getElementById("aboutTitle").innerHTML =
content[lang].aboutTitle;

document.getElementById("aboutText").innerHTML =
content[lang].aboutText;

// =======================
// CONCEPT
// =======================

document.getElementById("conceptTitle").innerHTML =
content[lang].conceptTitle;

document.getElementById("conceptText").innerHTML =
content[lang].conceptText;

// =======================
// PLAN
// =======================

document.getElementById("planTitle").innerHTML =
content[lang].planTitle;

// =======================
// GALLERY
// =======================

document.getElementById("galleryTitle").innerHTML =
content[lang].galleryTitle;

// =======================
// SERVICES
// =======================

document.getElementById("servicesTitle").innerHTML =
content[lang].servicesTitle;

// =======================
// VIDEO
// =======================

document.getElementById("videoTitle").innerHTML =
content[lang].videoTitle;

// =======================
// QR
// =======================

document.getElementById("qrTitle").innerHTML =
content[lang].qrTitle;

// =======================
// CONTACT
// =======================

document.getElementById("contactTitle").innerHTML =
content[lang].contactTitle;

// =======================
// NAVIGATION
// =======================

const navLinks =
document.querySelectorAll("nav a");

if(lang === "ar"){

navLinks[0].innerHTML = "نبذة";
navLinks[1].innerHTML = "الفكرة";
navLinks[2].innerHTML = "المخطط";
navLinks[3].innerHTML = "الصور";
navLinks[4].innerHTML = "الخدمات";
navLinks[5].innerHTML = "الفيديو";
navLinks[6].innerHTML = "تواصل";

}else{

navLinks[0].innerHTML = "About";
navLinks[1].innerHTML = "Concept";
navLinks[2].innerHTML = "Plan";
navLinks[3].innerHTML = "Gallery";
navLinks[4].innerHTML = "Services";
navLinks[5].innerHTML = "Video";
navLinks[6].innerHTML = "Contact";

}

const langBtn =
document.getElementById("langBtn");

if(lang === "ar"){

langBtn.innerHTML = "الصفحة الرئيسية";

}else{

langBtn.innerHTML = "Home";

}

const switchBtn =
document.querySelector(".lang-switch");

if(switchBtn){

if(lang === "ar"){

switchBtn.innerHTML = "🌐 اللغة ▼";

}else{

switchBtn.innerHTML = "🌐 Language ▼";

}

}

} // نهاية setLanguage



// =======================
// SHOW LANGUAGE SCREEN
// =======================

function showLanguageScreen(){

document.getElementById("languageScreen").style.display =
"flex";

document.getElementById("websiteContent").style.display =
"none";

window.scrollTo({
top:0,
behavior:"smooth"
});

}



// =======================
// LANGUAGE MENU
// =======================

function toggleLanguageMenu(){

const menu =
document.getElementById("languageMenu");

menu.classList.toggle("show");

}

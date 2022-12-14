// // toggle menu form
// function toggleMenu() {
//     const toggleMenu = document.querySelector('.toggleMenu');
//     const navigation = document.querySelector('.navigation');
//     toggleMenu.classList.toggle('active');
//     navigation.classList.toggle('active')
// }
//
// // toggle contact form
// function toggleContact() {
//     const toggleContact = document.querySelector(".toggleContact");
//     const toggleMenu = document.querySelector(".contactMenu");
//     toggleContact.classList.toggle("c-active");
//     toggleMenu.classList.toggle("c-active");
// }
//
//



//slide show Hme page
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}
showSlides();





// Initialize and add the map
function initMap() {
    // The location of Uluru
    const Saskatoon = { lat: 52.132854, lng: -106.631401 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: Saskatoon,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: Saskatoon,
        map: map,
    });
}

window.initMap = initMap;


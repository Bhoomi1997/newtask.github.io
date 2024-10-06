function toggleDetails(id) {
    var element = document.getElementById(id);
    if (element.style.display === "none" || element.style.display === "") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

/******************************/
const carouselInner = document.getElementById('carouselInner');
const images = carouselInner.getElementsByTagName('img');
let currentIndex = 0;
const totalImages = images.length;

function updateCarousel() {
    const offset = -currentIndex * (images[0].clientWidth + 20); // Account for margin
    carouselInner.style.transform = `translateX(${offset}px)`;
}

function scrollLeft() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalImages - 1; // Loop to last image
    updateCarousel();
}

function scrollRight() {
    currentIndex = (currentIndex < totalImages - 1) ? currentIndex + 1 : 0; // Loop to first image
    updateCarousel();
}

// Auto-scroll every 3 seconds
setInterval(() => {
    scrollRight();
}, 3000);

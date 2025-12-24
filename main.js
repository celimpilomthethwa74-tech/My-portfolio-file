let images = [
    "WhatsApp Image 2025-12-20 at 00.18.25.jpeg",
    "WhatsApp Image 2025-12-20 at 00.18.26.jpeg",
    
];
let index = 0;
const slider = document.getElementById("slider");
slider.src = images[index];
let timer = setInterval(nextImage, 3000);function nextImage() {
    index = (index + 1) % images.length;
    slider.src = images[index];
}
function prevImage() {
    index = (index - 1 + images.length) % images.length;
    slider.src = images[index];
}
document.getElementById("prevBtn").addEventListener("click", function () {
    prevImage();
    resetTimer();
});
document.getElementById("nextBtn").addEventListener("click", function () {
    nextImage();
    resetTimer();
});
function resetTimer() {
    clearInterval(timer);
    timer = setInterval(nextImage, 3000);

}


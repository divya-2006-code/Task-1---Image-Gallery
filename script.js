let images = Array.from(document.querySelectorAll(".gallery-img"));
let visibleImages = [...images];
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

let currentIndex = 0;

/* OPEN LIGHTBOX */
images.forEach((img, index) => {
    img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
        currentIndex = index;
    });
});

/* CLOSE */
document.querySelector(".close").onclick = () => {
    lightbox.style.display = "none";
};

/* NEXT */
document.getElementById("next").onclick = () => {
    currentIndex = (currentIndex + 1) % visibleImages.length;
    lightboxImg.src = visibleImages[currentIndex].src;
};

/* PREVIOUS */
document.getElementById("prev").onclick = () => {
    currentIndex = (currentIndex - 1 + visibleImages.length) % visibleImages.length;
    lightboxImg.src = visibleImages[currentIndex].src;
};

/* FILTER */
function filterImages(category) {
    visibleImages = [];

    images.forEach(img => {
        if (category === "all" || img.dataset.category === category) {
            img.style.display = "block";
            visibleImages.push(img);
        } else {
            img.style.display = "none";
        }
    });
}
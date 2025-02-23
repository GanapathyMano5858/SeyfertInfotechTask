// Main Contant Text Animation Start
const text = "Ganapathy Manohkar";
const typingText = document.querySelector(".typing-text");
let index = 0;

function typeText() {
    if (index < text.length) {
        typingText.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeText, 100); // Adjust speed here (lower = faster)
    } else {
        typingText.style.borderRight = "none"; // Remove cursor after typing
    }
}

window.onload = () => {
    setTimeout(typeText, 500); // Delay before animation starts
};


// Swiper JS Start
var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
    direction: "vertical",
});
// Swiper JS End
// Main Contant Text Animation End

// Footer Start
const linkItems = document.querySelectorAll(".link-item");
const indicator = document.querySelector(".indicator");

// Function to set the indicator position
function updateIndicator(linkItem) {
    const linkRect = linkItem.getBoundingClientRect();
    const footerRect = document.querySelector("footer").getBoundingClientRect();

    // Calculate the center position of the clicked linkItem
    const centerX = linkRect.left + linkRect.width / 2;

    // Adjust indicator to the center of the linkItem
    indicator.style.left = `${centerX - footerRect.left}px`;
}

// Set initial position on page load
document.addEventListener("DOMContentLoaded", () => {
    const activeItem = document.querySelector(".link-item.active");
    if (activeItem) {
        updateIndicator(activeItem);
    }
});

// Update position on click
linkItems.forEach((linkItem) => {
    linkItem.addEventListener("click", () => {
        document.querySelector(".active").classList.remove("active");
        linkItem.classList.add("active");

        updateIndicator(linkItem);
    });
});



// Footer End
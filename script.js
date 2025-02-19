const ball = document.querySelector(".cursor-ball");
const textElements = document.querySelectorAll(".text-anime-style");

document.addEventListener("mousemove", (e) => {
  const { clientX: x, clientY: y } = e;
  ball.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
});

// Cursor Leaves
document.addEventListener("mouseleave", () => {
  ball.style.width = "0";
  ball.style.height = "0";
});

// Cursor Enters
document.addEventListener("mouseenter", () => {
  ball.style.width = "15px";
  ball.style.height = "15px";
});

// Enlarging Cursor hovering
textElements.forEach((text) => {
  text.addEventListener("mouseenter", () => {
    ball.style.width = "55px";
    ball.style.height = "55px";
    ball.style.backgroundColor = "white";
    ball.style.mixBlendMode = "difference";
  });

  text.addEventListener("mouseleave", () => {
    ball.style.width = "15px";
    ball.style.height = "15px";
    ball.style.backgroundColor = "var(--primaryColor)";
    ball.style.mixBlendMode = "normal";
  });
});

const selectBox = document.querySelector(".custom-select");
const icon = document.querySelector(".arrowIcon");

selectBox.addEventListener(
  "focus",
  () => (icon.style.transform = "rotate(180deg)")
);
selectBox.addEventListener(
  "blur",
  () => (icon.style.transform = "rotate(0deg)")
);
selectBox.addEventListener("change", () => {
  icon.style.transform = "rotate(0deg)";
});

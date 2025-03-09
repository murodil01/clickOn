const container = document.getElementById("animation-container");
const colors = ["#FF3CAC", "#784BA0", "#2B86C5", "#46FFB9", "#FF6B6B"];
const circleCount = 15;
const maxRadius = 200;

for (let i = 0; i < circleCount; i++) {
  const circle = document.createElement("div");
  circle.classList.add("circle");
  circle.style.width = `${maxRadius - i * 15}px`;
  circle.style.height = `${maxRadius - i * 15}px`;
  circle.style.borderColor = colors[i % colors.length];
  circle.style.animationDelay = `${i * 0.1}s`;
  container.appendChild(circle);
}

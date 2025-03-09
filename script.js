const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

const particleArray = [];
const colors = ["#ff0066", "#ffcc00", "#00ff99", "#0066ff"];

class Particle {
  constructor() {
    this.x = window.innerWidth / 2;
    this.y = window.innerHeight / 2;
    this.size = Math.random() * 5 + 1;
    this.color = colors[Math.floor(Math.random() * colors.length)];
    this.speedX = (Math.random() - 0.5) * 5;
    this.speedY = (Math.random() - 0.5) * 5;
    this.life = 100;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.size *= 0.95;
    this.life -= 1;
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function handleParticles() {
  for (let i = 0; i < particleArray.length; i++) {
    particleArray[i].update();
    particleArray[i].draw();
    if (particleArray[i].life <= 0 || particleArray[i].size <= 0.2) {
      particleArray.splice(i, 1);
      i--;
    }
  }
}

function createParticles() {
  for (let i = 0; i < 5; i++) {
    particleArray.push(new Particle());
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  createParticles();
  handleParticles();
  requestAnimationFrame(animate);
}

animate();

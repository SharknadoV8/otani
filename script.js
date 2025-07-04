const follower = document.getElementById("follower");
const floatingWords = ["村田玲", "寒河江信二", "西後直樹", "ガイジ"];

document.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;

  follower.style.left = `${x}px`;
  follower.style.top = `${y}px`;

  createTrail(x, y);
});

document.addEventListener("touchstart", (e) => {
  for (const touch of e.touches) {
    createTrail(touch.clientX, touch.clientY);
  }
}, { passive: true });

function createTrail(x, y) {
  const trail = document.createElement("div");
  trail.textContent = "大谷将太郎";
  Object.assign(trail.style, {
    position: "fixed",
    left: `${x}px`,
    top: `${y}px`,
    transform: "translate(-50%, -50%)",
    color: "white",
    fontSize: "1rem",
    opacity: "0.2",
    pointerEvents: "none",
    transition: "opacity 0.5s ease-out",
    zIndex: "40",
  });
  document.body.appendChild(trail);
  setTimeout(() => {
    trail.style.opacity = "0";
    setTimeout(() => trail.remove(), 500);
  }, 50);
}

setInterval(() => {
  const word = floatingWords[Math.floor(Math.random() * floatingWords.length)];
  const el = document.createElement("div");
  el.className = "floating-word";
  el.textContent = word;

  el.style.left = `${Math.random() * 100}%`;
  el.style.top = `${Math.random() * 100}%`;
  el.style.fontSize = `${Math.random() * 1.5 + 1}rem`;
  el.style.animationDuration = `${5 + Math.random() * 5}s`;
  el.style.color = "rgba(255, 255, 255, 0.5)"; 


  document.body.appendChild(el);
  setTimeout(() => el.remove(), 10000);
}, 1200);

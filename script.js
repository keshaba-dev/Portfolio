const bubbleCount = 30;

for (let i = 0; i < bubbleCount; i++) {
  const bubble = document.createElement("div");
  bubble.classList.add("bubble");

  let size = Math.random() * 30 + 10;

  bubble.style.width = size + "px";
  bubble.style.height = size + "px";

  bubble.style.left = Math.random() * 100 + "vw";

  bubble.style.animationDuration = (12 + Math.random() * 10) + "s";
  bubble.style.animationDelay = Math.random() * 10 + "s";

  document.body.appendChild(bubble);
}
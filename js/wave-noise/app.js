// js/mainWaveNoise.js

import { Wave } from "./Wave.js";
import { Noise } from "./Noise.js";
import { Cursor } from "./Cursor.js";

const canvas = document.getElementById("pagecrm_canvas-wave-noise");
if (!canvas) {
  throw new Error("Canvas element not found");
}
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const waves = [];
const noise = new Noise(canvas.width, canvas.height);
const cursor = new Cursor();

const waveSpacing = 30;

for (let i = 0; i < 20; i++) {
  waves.push(new Wave(canvas, ctx, noise, cursor, i * waveSpacing));
}

function animate(time) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  waves.forEach((wave) => wave.update(time));
  requestAnimationFrame(animate);
}

animate();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  noise.updateDimensions(canvas.width, canvas.height);
  waves.forEach((wave) => wave.resize());
});

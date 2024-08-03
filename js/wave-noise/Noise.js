// js/Noise.js

export class Noise {
  constructor(width, height) {
    this.simplex = new SimplexNoise();
    this.width = width;
    this.height = height;
  }

  updateDimensions(width, height) {
    this.width = width;
    this.height = height;
  }

  getNoise(x, y, cursor, time, frequency) {
    const dx = x - cursor.x;
    const dy = y - cursor.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const maxDist = Math.sqrt((this.width / 2) ** 2 + (this.height / 2) ** 2);
    return (
      this.simplex.noise3D(x * frequency, y * frequency, time * 0.0005) *
      (1 - dist / maxDist)
    );
  }
}

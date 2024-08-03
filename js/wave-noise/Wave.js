// js/Wave.js

export class Wave {
  constructor(canvas, ctx, noise, cursor, index) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.noise = noise;
    this.cursor = cursor;
    this.index = index;
    this.points = [];
    this.amplitude = 1000;
    this.frequency = 0.002;
    this.init();
  }

  init() {
    const pointCount = this.canvas.width / 5;
    for (let i = 0; i <= pointCount; i++) {
      this.points.push({
        x: (i / pointCount) * this.canvas.width,
        y: this.canvas.height / 2,
      });
    }
  }

  update(time) {
    this.points.forEach((point, i) => {
      const noiseVal = this.noise.getNoise(
        point.x,
        this.index,
        this.cursor,
        time,
        this.frequency
      );
      point.y = this.canvas.height / 2 + noiseVal * this.amplitude;
    });
    this.draw();
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.moveTo(this.points[0].x, this.points[0].y);
    for (let i = 1; i < this.points.length; i++) {
      this.ctx.lineTo(this.points[i].x, this.points[i].y);
    }
    this.ctx.strokeStyle = "rgba(150, 100, 255, 0.5)";
    this.ctx.stroke();
  }

  resize() {
    this.points = [];
    this.init();
  }
}

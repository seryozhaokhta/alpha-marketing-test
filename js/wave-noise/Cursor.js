// js/Cursor.js

export class Cursor {
  constructor() {
    this.x = 0;
    this.y = 0;
    window.addEventListener("mousemove", this.handleMouseMove.bind(this));
  }

  handleMouseMove(event) {
    this.x = event.clientX;
    this.y = event.clientY;
  }
}

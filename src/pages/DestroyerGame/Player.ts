import img from '../../images/space-ship2.png';

export default class Player {
  x: number;
  y: number;
  dx: number;
  radius: number;
  color: string;

  constructor(x: number, y: number, radius: number, color: string) {
    this.x = x;
    this.y = y;
    this.dx = 0;
    this.radius = radius;
    this.color = color;
  }

  draw(ctx: CanvasRenderingContext2D) {
    // ctx.beginPath();
    // ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    // ctx.fillStyle = this.color;
    // ctx.fill();

    const base_image: HTMLImageElement = new Image();
    base_image.src = img;
    ctx.drawImage(base_image, this.x - 40, this.y - 45, 80, 80);

    if (this.dx < 0) {
      if (this.x - this.radius + this.dx > 0) this.x += this.dx;
    } else if (this.dx > 0) {
      if (this.x + this.radius + this.dx < window.innerWidth) this.x += this.dx;
    }
  }
}

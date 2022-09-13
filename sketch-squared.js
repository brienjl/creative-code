const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [1080,1080],
  pixelsPerInch: 300,
  orientation: 'landscape'
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'CDF0EA';
    context.fillRect(0, 0, width, height);
    context.lineWidth = width * .015;
    context.strokeStyle = '#ECC5FB';
    context.shadowBlur = 50;
    context.shadowColor = "541690";

    const w = width * 0.10;
    const h = height * 0.10;
    const gap = width * 0.03;
    const ix = width * 0.17;
    const iy = height * 0.17;
    const offset = width * 0.02
    let x,y;
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
        
        x = ix + (w + gap) * i;
        y = iy + (h + gap) * j;

        context.beginPath();
        context.rect(x, y, w, h);
        context.stroke();

        if (Math.random() < .5) {
            context.beginPath();
            context.rect( x + offset /2, y + offset /2, w - offset, h - offset );
            context.stroke();
            }
        }
    }
  };
};

canvasSketch(sketch, settings);

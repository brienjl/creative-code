const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080, 1080 ],
  pixelsPerInch: 300
};

//utility functions
function degToRad(degrees) {
  return degrees / 180 * Math.PI;
}

function randomRange(min, max) {
  return Math.random() * (max - min) + min;
}

function randomColor() {
  var letters = '0123456789ABCDEF';
  var color = "#"
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = randomColor();
    context.fillRect(0, 0, width, height);
    context.fillStyle = randomColor();
    const cx = width * 0.5;
    const cy = height * 0.5;
    const w = width * 0.01;
    const h = height * 0.1;
    let x, y;
    const num = 12;
    const radius = width * 0.3;
    
    console.log(context.fillStyle)

    
    
    //draw the clockface
    for (let i = 0; i < num; i++) {
      const slice = degToRad(360 / num);
      const angle = slice * i;

      x = cx + radius * Math.sin(angle)
      y = cy + radius * Math.cos(angle)

      context.save();
      context.translate(x,y);
      context.rotate(-angle);
      context.scale(Math.random() * (7.5-1) + .25, 1);

      context.beginPath();
      context.rect(-w * 0.5, -h * 0.5, w, h);
      context.fill();
      context.restore();

    }
  };
};
canvasSketch(sketch, settings);

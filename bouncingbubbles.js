// Change the text between the quotation marks and run your code to see the name of your favorite language animated!
drawText('this is javascript magic');

// The code below will allow you to interact with the letters
bouncebubbles();

function bouncebubbles() {
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');

    const bubbles = [];

    for (let i = 0; i < 10; i++) {
      bubbles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 20 + 10,
        dx: (Math.random() - 0.5) * 4,
        dy: (Math.random() - 0.5) * 4
      });
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let bubble of bubbles) {
        ctx.beginPath();
        ctx.arc(bubble.x, bubble.y, bubble.radius, 0, 2 * Math.PI);
        ctx.stroke();

        bubble.x += bubble.dx;
        bubble.y += bubble.dy;

        if (bubble.x + bubble.radius > canvas.width || bubble.x - bubble.radius < 0) {
          bubble.dx = -bubble.dx;
        }
        if (bubble.y + bubble.radius > canvas.height || bubble.y - bubble.radius < 0) {
          bubble.dy = -bubble.dy;
        }
      }

      requestAnimationFrame(draw);
    }

    draw();
  }


<template>
  <div id="sketch">
    <canvas id="paint"></canvas>
  </div>
</template>

<script>
export default {
  name: 'DrawTable',
  mounted() {
    const canvas = document.getElementById('paint');
    const ctx = canvas.getContext('2d');
    // const sketch = document.getElementById('sketch');
    // const sketchStyle = getComputedStyle(sketch);
    canvas.width = 500;
    canvas.height = 250;

    const mouse = {
      x: 0, y: 0,
    };

    /* Mouse Capturing Work */
    canvas.addEventListener('mousemove', (e) => {
      /* eslint no-bitwise: [2, { int32Hint: true }] */
      mouse.x = (e.offsetX * canvas.width) / canvas.clientWidth | 0;
      mouse.y = (e.offsetY * canvas.height) / canvas.clientHeight | 0;
    }, false);

    /* Drawing on Paint App */
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';

    ctx.strokeStyle = 'black';
    const onPaint = () => {
      ctx.lineTo(mouse.x, mouse.y);
      ctx.stroke();
    };

    canvas.addEventListener('mousedown', () => {
      ctx.beginPath();
      ctx.moveTo(mouse.x, mouse.y);
      canvas.addEventListener('mousemove', onPaint, false);
    }, false);

    canvas.addEventListener('mouseup', () => {
      canvas.removeEventListener('mousemove', onPaint, false);
    }, false);
  },
};

</script>

<style scoped>

#settings {
  display: block;
  text-align:center;
}

#paint {
  border: 1px solid black;
  background : white;
  margin: 10px auto;
  display: block;
}
</style>

<template>
  <div class="section has-text-centered notification has-background-grey-dark">
    <canvas
      ref="canvas"
      id="dragonBuilder"
      width="400"
      height="450"
      style="border: 0px solid black; border-radius:2px">
    </canvas>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

let tick = 0;
let wait = true;

// animation for now only works with scale 450
// because i am dummy dumb i have to fix this
const SCALE = 450;

const RATIO = 8 / 9;

const ORIGINAL_WIDTH = 800;
const HEIGHT_HEAD = 319;
const HEIGHT_BODY = 328;
const HEIGHT_LEGS = 253;

const CUSTOM_WIDTH = 1 * SCALE * RATIO;
const CUSTOM_HEIGHT = 1 * SCALE;

const width = CUSTOM_WIDTH;
const scaleY = CUSTOM_WIDTH / ORIGINAL_WIDTH;

let currentDrawing;
const ACCELERATION = -0.46;
const BASE_VELOCITY = 20;
let accel = ACCELERATION;
let velocity = BASE_VELOCITY;
let absX = 0;

let xCondition = 400;

export default {
  name: 'DemoBuilderV2',
  data() {
    return {
      id: undefined,
      allUrls: [],
      images: [],
    };
  },

  ready() {
    window.beforeunload = this.leaving;
    window.onblur = this.leaving;
  },

  methods: {
    ...mapActions(['fetchHeads', 'fetchBodies', 'fetchLegs']),
    generatePersona() {
      const headIndex = this.getRandomInt(this.allHeads.length);
      const bodyIndex = this.getRandomInt(this.allBodies.length) + this.allHeads.length;
      const legIndex = this.getRandomInt(this.allLegs.length)
        + this.allBodies.length + this.allHeads.length;
      return { headIndex, bodyIndex, legIndex };
    },

    animate() {
      if (wait) {
        tick += 1;
        if (tick >= 120) {
          wait = false;
          tick = 0;
        }
        this.id = window.requestAnimationFrame(this.animate);
        return;
      }

      this.draw();

      if (absX >= xCondition) {
        if (xCondition === 0) {
          wait = true;
          tick = 0;

          xCondition = 400;
          absX = 0;

          velocity = BASE_VELOCITY;
          accel = ACCELERATION;
        } else {
          currentDrawing = this.generatePersona();
          xCondition = 0;
          absX = -400;
          velocity = BASE_VELOCITY;

          // Il a un petit probleme de calcul qui ne permet pas
          // de retourner exactement à la position initiale
          // on soustrait 0.01 pour m'assurer que ca va venir à la position initiale
          accel = ACCELERATION - 0.02;
        }
      } else {
        velocity += accel;
        absX += velocity;
        if (absX >= xCondition) absX = xCondition;
      }
      this.id = window.requestAnimationFrame(this.animate);
    },

    draw() {
      this.ctx.fillStyle = '#eaeaea';
      this.ctx.fillRect(0, 0, CUSTOM_WIDTH, CUSTOM_HEIGHT);

      this.ctx.drawImage(
        this.images[currentDrawing.headIndex],
        absX,
        0,
        width,
        HEIGHT_HEAD * scaleY,
      );

      this.ctx.drawImage(
        this.images[currentDrawing.bodyIndex],
        -absX,
        HEIGHT_HEAD * scaleY,
        width,
        HEIGHT_BODY * scaleY,
      );

      this.ctx.drawImage(
        this.images[currentDrawing.legIndex],
        absX,
        (HEIGHT_BODY + HEIGHT_HEAD) * scaleY,
        width,
        HEIGHT_LEGS * scaleY,
      );
    },

    getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    },

    loadImage(url) {
      return new Promise((fulfill) => {
        const imageObj = new Image();
        imageObj.onload = () => { fulfill(imageObj); };
        imageObj.src = url;
      });
    },

    loadAllImages() {
      for (let i = 0; i < this.allUrls.length; i += 1) {
        this.images.push(this.loadImage(this.allUrls[i]));
      }

      Promise.all(this.images)
        .then((objImages) => {
          this.images = objImages;

          currentDrawing = this.generatePersona();
          this.draw();

          this.tick = 30; // Run le first transition plus tot
          this.id = window.requestAnimationFrame(this.animate);
        })
        .catch((e) => console.log(e));
    },

    initiateSetup() {
      this.ctx = this.$refs.canvas.getContext('2d');
      this.$refs.canvas.setAttribute('width', CUSTOM_WIDTH);
      this.$refs.canvas.setAttribute('height', CUSTOM_HEIGHT);
      // this.c = document.getElementById('dragonBuilder');
      // this.ctx = this.c.getContext('2d');

      for (let i = 0; i < this.allHeads.length; i += 1) {
        this.allUrls.push(`./assets/images/heads/${this.allHeads[i].id}.png`);
      }
      for (let i = 0; i < this.allBodies.length; i += 1) {
        this.allUrls.push(`./assets/images/bodies/${this.allBodies[i].id}.png`);
      }
      for (let i = 0; i < this.allLegs.length; i += 1) {
        this.allUrls.push(`./assets/images/legs/${this.allLegs[i].id}.png`);
      }

      this.loadAllImages();
    },
  },

  computed: {
    ...mapGetters(['allBodies', 'allHeads', 'allLegs']),
  },

  created() {
    Promise.all([this.fetchHeads(), this.fetchBodies(), this.fetchLegs()]).then(() => {
      this.initiateSetup();
    });
  },

  destroyed() {
    window.cancelAnimationFrame(this.id);
    this.id = undefined;
  },

  mounted() {

  },

  components: {},
};
</script>

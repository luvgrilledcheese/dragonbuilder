<template>
  <div class="section has-text-centered">
    <p class="title is-4 has-text-black-ter">Model Randomiser</p>
    <canvas
      id="dragonBuilder"
      width="400"
      height="450"
      style="border: 0px solid black; border-radius:15px">
    </canvas>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

let tick = 0;
let wait = true;
const ORIGINAL_WIDTH = 800;
const HEIGHT_HEAD = 319;
const HEIGHT_BODY = 328;
const HEIGHT_LEGS = 253;

const CUSTOM_WIDTH = 400;
const CUSTOM_HEIGHT = 450;

const width = CUSTOM_WIDTH;
const scaleY = CUSTOM_WIDTH / ORIGINAL_WIDTH;

let currentDrawing;
let previousDrawing;
let currentOpacity = 1;
let previousOpacity = 0;

export default {
  name: 'DemoCreator',
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
        if (tick >= 60) {
          wait = false;
          tick = 0;
        }
        this.id = window.requestAnimationFrame(this.animate);
        return;
      }

      this.draw();

      currentOpacity += 0.025;
      previousOpacity -= 0.025;

      if (previousOpacity <= 0) {
        previousDrawing.headIndex = currentDrawing.headIndex;
        previousDrawing.bodyIndex = currentDrawing.bodyIndex;
        previousDrawing.legIndex = currentDrawing.legIndex;
        currentDrawing = this.generatePersona();
        currentOpacity = 0;
        previousOpacity = 1;

        wait = true;
      }
      this.id = window.requestAnimationFrame(this.animate);
      //  intervalId = setInterval(this.draw, 16);
    },

    draw() {
      this.ctx.clearRect(0, 0, CUSTOM_WIDTH, CUSTOM_HEIGHT);

      this.ctx.globalAlpha = previousOpacity;
      this.ctx.drawImage(
        this.images[previousDrawing.headIndex],
        0,
        0,
        width,
        HEIGHT_HEAD * scaleY,
      );

      this.ctx.drawImage(
        this.images[previousDrawing.bodyIndex],
        0,
        HEIGHT_HEAD * scaleY,
        width,
        HEIGHT_BODY * scaleY,
      );

      this.ctx.drawImage(
        this.images[previousDrawing.legIndex],
        0,
        (HEIGHT_BODY + HEIGHT_HEAD) * scaleY,
        width,
        HEIGHT_LEGS * scaleY,
      );

      this.ctx.globalAlpha = currentOpacity;
      this.ctx.drawImage(
        this.images[currentDrawing.headIndex],
        0,
        0,
        width,
        HEIGHT_HEAD * scaleY,
      );

      this.ctx.drawImage(
        this.images[currentDrawing.bodyIndex],
        0,
        HEIGHT_HEAD * scaleY,
        width,
        HEIGHT_BODY * scaleY,
      );

      this.ctx.drawImage(
        this.images[currentDrawing.legIndex],
        0,
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
          previousDrawing = this.generatePersona();
          this.draw();

          this.tick = 30; // Run le first transition plus tot
          this.id = window.requestAnimationFrame(this.animate);
        })
        .catch((e) => console.log(e));
    },

    initiateSetup() {
      this.c = document.getElementById('dragonBuilder');
      this.ctx = this.c.getContext('2d');

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

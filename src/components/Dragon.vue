<template>
    <div class="box is-horizontal-center">
      <p class="subtitle is-4 has-text-dark has-text-centered">{{showName}}</p>
      <canvas
        ref="canvas"
        style="border: 0px solid #d0d0d0; border-radius:3px">
      </canvas>
      <br>
      <div class="">
        <!-- <span class="icon has-text-danger">
          <div class="button media-left">
              <i class="fas fa-ban"></i><i>Delete</i>
          </div>
          <div class="button media-right">
              <i class="fas fa-ban"></i><i>Edit</i>
          </div>
        </span> -->
      </div>
    </div>
</template>

<script>
// On peut changer cette valeur pour changer la grandeur des canvas.
let SCALE;

let RATIO;

let CUSTOM_WIDTH;
let CUSTOM_HEIGHT;

let ORIGINAL_WIDTH;
let HEIGHT_HEAD;
let HEIGHT_BODY;
let HEIGHT_LEGS;

let width;
let scaleY;

export default {
  name: 'Dragon',
  props: ['dragon', 'scale', 'isNameVisible'],
  data() {
    return {
      images: [],
      ctx: null,
    };
  },

  computed: {
    showName() {
      if (this.isNameVisible) return this.dragon.name;
      return '';
    },
  },

  methods: {
    loadImage(url) {
      return new Promise((fulfill) => {
        const imageObj = new Image();
        imageObj.onload = () => { fulfill(imageObj); };
        imageObj.src = url;
      });
    },

    loadAllImages() {
      this.images = [];
      this.images.push(this.loadImage(`/assets/images/heads/${this.dragon.headId}.png`));
      this.images.push(this.loadImage(`/assets/images/bodies/${this.dragon.bodyId}.png`));
      this.images.push(this.loadImage(`/assets/images/legs/${this.dragon.legId}.png`));
      Promise.all(this.images)
        .then((objImages) => {
          this.images = objImages;
          this.draw();
        })
        .catch((e) => console.log(e));
    },

    draw() {
      this.ctx.clearRect(0, 0, CUSTOM_WIDTH, CUSTOM_HEIGHT);
      this.ctx.drawImage(
        this.images[0],
        0,
        0,
        width,
        HEIGHT_HEAD * scaleY,
      );

      this.ctx.drawImage(
        this.images[1],
        0,
        HEIGHT_HEAD * scaleY,
        width,
        HEIGHT_BODY * scaleY,
      );

      this.ctx.drawImage(
        this.images[2],
        0,
        (HEIGHT_BODY + HEIGHT_HEAD) * scaleY,
        width,
        HEIGHT_LEGS * scaleY,
      );
    },

    // eslint-disable-next-line no-unused-vars
    redraw(newVal, oldVal) {
      this.loadAllImages();
    },
  },

  created() {
  },

  mounted() {
    // Setup size
    SCALE = this.scale;

    RATIO = 8 / 9;

    CUSTOM_WIDTH = 1 * SCALE * RATIO;
    CUSTOM_HEIGHT = 1 * SCALE;

    ORIGINAL_WIDTH = 800;
    HEIGHT_HEAD = 319;
    HEIGHT_BODY = 328;
    HEIGHT_LEGS = 253;

    width = CUSTOM_WIDTH; // Les images ont tous le meme width
    scaleY = CUSTOM_WIDTH / ORIGINAL_WIDTH; // Les images ont des different heights prédéfinis

    // Get canvas
    this.$refs.canvas.setAttribute('width', CUSTOM_WIDTH);
    this.$refs.canvas.setAttribute('height', CUSTOM_HEIGHT);
    this.ctx = this.$refs.canvas.getContext('2d');

    this.loadAllImages();
  },

  watch: {
    dragon: 'redraw',
    'dragon.headId': 'redraw',
    'dragon.bodyId': 'redraw',
    'dragon.legId': 'redraw',
  },
};
</script>

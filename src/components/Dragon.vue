<template>
    <div class="box is-horizontal-center" @mouseover="hover = true" @mouseleave="hover = false">
      <p class="subtitle is-4 has-text-dark has-text-centered">{{showName}}</p>
      <canvas
        ref="canvas"
        style="border: 0px solid #d0d0d0; border-radius:3px">
      </canvas>
      <br>
        <div ref="dragDelete">
          <p style="text-align: right;" :class="{ active: hover , inactive: !hover }">
            <i class="fas fa-times fa-lg"></i>
          </p>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
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
      hover: false,
    };
  },

  computed: {
    showName() {
      if (this.isNameVisible) return this.dragon.name;
      return '';
    },
  },

  methods: {
    ...mapActions(['deleteDragon']),
    fxRemoveDragon() {
      this.deleteDragon(this.dragon.id).then(() => {
        this.$router.push('/Dragons');
      });
    },
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
    if (this.isNameVisible) {
      this.$refs.dragDelete.addEventListener('click', (e) => {
        e.stopPropagation();
        this.deleteDragon(this.dragon.id);
      });
    } else {
      this.$refs.dragDelete.remove();
    }
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

<style lang="scss" scoped>
.active {
  opacity: 100%;
}

.inactive {
  opacity: 0;
}

.hide {
  display: none;
}

.fa-times {
  color: grey;
}

.fa-times:hover {
  color: red;
}

</style>

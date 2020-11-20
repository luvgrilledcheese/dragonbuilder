<template>
  <div>
    <div class="dropdown" ref="dropdown">
      <div class="dropdown-trigger">
          <button class="button" aria-haspopup="true" aria-controls="dropdown-menu3">
          <span>{{Name}}</span>
          <span class="icon is-small">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
          </span>
          </button>
      </div>
      <div class="dropdown-menu" id="dropdown-menu3" role="menu">
          <div class="dropdown-content">
          <a v-for="part in allPart" v-bind:key="part.Id" class="dropdown-item dragon-part">
            {{part.name}}
          </a>
          <hr class="dropdown-divider">
          <a href="#" class="dropdown-item">
              More
          </a>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DDLPart',
  props: ['Name', 'allParts'],
  methods: {
  },
  created() {
  },
  mounted() {
  },
  components: {
  },
};
</script>

<style scoped>

.hide {
  display: none;
}
.btn {
  border: none;
  background-color: inherit;
}
</style>

<style>
#head .name {
  color:green !important;
}
</style>

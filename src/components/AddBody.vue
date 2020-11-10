<template>
  <div>
      <form @submit.prevent="onSubmit">
          <div class="field" style="margin-top:4%">
            <label class="label" for="name">Name</label>
            <div class="control">
              <input type="text"
              id="name"
              placeholder="Name of the body"
              v-model="name"
              class="input">
            </div>
          </div>
          <div class="control">
            <input type="submit" value="New body" class="button">
          </div>
      </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'AddBody',
  data() {
    return {
      name: '',
    };
  },
  methods: {
    ...mapActions(['addBody']),
    onSubmit() {
      this.addBody({
        name: this.name,
      });
    },
  },
};
</script>

<style scoped>
label {
  color: #363636;
  font-weight: normal;
}
.button {
  color: #f2f6fa;
  background-color: #23A0A9;
  border: none;
}

.button:hover {
  color: white;
  background-color: #2AC0CB;
}
</style>

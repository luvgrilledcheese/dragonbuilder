<template>
  <div class="card">
    <div class="card-image">
      <figure class="image">
        <img
          src="https://via.placeholder.com/1260x600"
          alt="Placeholder image"/>
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4 has-text-centered name">{{ name }}</p>
          <!--<p class="subtitle is-6 has-text-centered">@test</p>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Part',
  props: ['name'],
};
</script>

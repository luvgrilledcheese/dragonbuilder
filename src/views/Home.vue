<template>
  <div class="home">
    <div class="container">
      <h1 class="title is-size-1">Dragon Builder</h1>
      <div class="bd-notification is-success">
        <div class="columns">
          <div class="column">
            <div class="tile is-vertical is-ancestor">
              <div class="tile is-parent">
                <div class="tile is-child">
                  <div class="card">
                    <div class="notification is-info">
                      <p class="has-text-white title card-header-title">
                        Creating the persona of your dreams...
                      </p>
                      <div class="card-content">
                        <div class="content">
                          All the possibilities this application has to offer to
                          create your perfect persona are right here.
                        </div>
                        <div class="content">
                          With this simple application you can simulate and
                          choose the body of your dream. Simply go to the
                          creator tab and start creating some models!
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tile is-parent">
                <div class="tile is-child">
                  <div class="card">
                    <div class="notification is-warning">
                      <p class=" title card-header-title">
                        Suggest your own parts!
                      </p>
                      <div class="card-content">
                        <div class="content">
                          With the help of our administrative section, you can
                          suggest new body part models and help Dragonbuilder
                          have a bigger library
                        </div>
                        <div class="content">
                          Contact us at dragonbuilder.net for more info.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-5">
            <div class="card">
              <DemoBuilderV2 />
            </div>
          </div>
        </div>
        <div class="columns">
          <img class="column" src="../../data/images/user_profile/dragon.jpg"/>
          <p class="future is-two-thirds">The real purpose of the project
            is to realise a library of dragons that can
            generate more models than the ones offered by
            the library by mixing them. Limited ressources like time
            allowed us to create these models themes.
            Here is a hint of what the real models
            would have looked like...
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DemoBuilderV2 from '../components/DemoBuilderV2.vue';
// @ is an alias to /src
export default {
  name: 'Home',
  components: {
    DemoBuilderV2,
  },
};
</script>

<style scoped>
h1 {
  margin-top: 4%;
}
.future{
  width: 50%;
  height: min-content;
  text-align: justify;
  background-color: rgb(50, 151, 219);
  padding: 45px;
  margin: 50px auto;
  border-radius: 5px;
  color: white;
}
</style>

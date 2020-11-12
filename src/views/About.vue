<template>
  <div>
    <div class="container" style="margin-bottom: 10%;">
      <h1 class="title">
        <span class="icon">
          <i class="fas fa-dragon"></i>
        </span>
        About DragonBuilder
        <span class="icon">
          <i class="fas fa-dragon"></i>
        </span>
      </h1>
      <div class="card">
        <div class="card-content">
          <p class="title">[iNFO Pannel]</p>
          <p class="summary">
            “DragonBuilder's est un website pour créer
            des dragons imaginaires créer par des étudiants
            en Informatique de Gestion. Le but de se programme
            est de permettre aux utilisateurs de sortir leur imagination
            dans la création de nouvelles espèces. N'ayez pas peur de
            créer quelque chose hors de l'ordinaire, puisque ce site
            vous pousse à être ORIGINAL :) !”
          </p>
          <p class="subtitle">@Developpers</p>
        </div>
      </div>
      <br />
      <div class="card">
        <div class="card-content">
          <p class="title">[Coordinate]</p>
          <p class="summary">
            Collège de Maisonneuve <br/>
            (514) 254-7131 <br/>
            3800 Sherbrooke St E, Montreal, Quebec H1X 2A2 <br/>
            communic@cmaisonneuve.qc.ca <br/>
            DEC - Technique : Informatique de Gestion <br/>
          </p>
        </div>
      </div>
      <br />
      <div class="card devBlogCustom">
          <p class="title moveLeft">[Developpers blog's]</p>
        <div class="columns is-mobile is-multiline is-centered">
          <div class="column is-narrow" v-bind:key="user.username" v-for="user in users">
            <div class="cardsize card">
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-128x128">
                      <img
                        v-bind:src="require('../../data/images/user_profile/'+user.imgurl)"
                        alt="Placeholder image"
                      />
                    </figure>
                  </div>
                  <div class="media-content">
                    <p class="title is-4">{{user.username}}</p>
                    <p class="subtitle is-6">@{{user.type}}</p>
                  </div>
                </div>
                <div class="content summary">
                  {{user.message}}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="hello navbar is-fixed-bottom">
        <facebook :url="url_facebook" scale="3"></facebook>
        <twitter
          :url="url_twitter"
          title="Check me on Github"
          scale="3"
        ></twitter>
        <pinterest :url="url_pinterest" scale="3"></pinterest>
        <reddit :url="url_reddit" scale="3" title="My Github"></reddit>
        <google :url="url_google" scale="3"></google>
      </div>
    </div>
  </div>
</template>

<script>
import {
  Facebook,
  Twitter,
  Pinterest,
  Reddit,
  Google,
} from 'vue-socialmedia-share';

export default {
  name: 'HelloWorld',
  components: {
    Facebook,
    Twitter,
    Pinterest,
    Reddit,
    Google,
  },
  data() {
    return {
      url_facebook: 'https://facebook.com',
      url_twitter: 'https://twitter.com',
      url_pinterest: 'https://pinterest.com',
      url_reddit: 'https://reddit.com',
      url_google: 'https://google.ca',
      users: [
        {
          username: 'Richi Tan', type: 'Developpers', message: 'Wait.. what am I doing here ? :D', imgurl: 'eikichi_profile.png',
        },
        {
          username: 'Alex Razvan', type: 'Developpers', message: 'Creating this website was a mess, hope you guys enjoy it :D. Be O RI GI NAL!', imgurl: 'duck_profile.jpg',
        },
        {
          username: 'Madhi Krayem', type: 'Developpers', message: 'I wish I couldve go to Super C with my favorite teacher but then I have to sleep Zzz...', imgurl: 'cat_profile.jpg',
        },
        {
          username: 'Franco Huynh', type: 'Developpers', message: 'Im a duck', imgurl: 'paimon_profile.jpg',
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  margin-top: 4%;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 5px;
}
a {
  color: #42b983;
}
.hello {
  background-color: transparent;
}
.hello > span {
  padding: 1em;
  position: relative;
  left: 42%;
  right: 50%;
}

.moveLeft{
  position: relative;
  left: 1.6%;
}

.summary {
  font-size: larger;
  font-weight: bold;
}

.devBlogCustom {
  margin-bottom: 4%;
}
</style>

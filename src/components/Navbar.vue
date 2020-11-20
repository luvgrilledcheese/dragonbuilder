<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-menu is-transparent">
      <div class="navbar-start">
        <router-link to="/" tag="img"
        v-bind:src="require('../../data/images/user_profile/logo.png')"
        class="navbar-item noHover">
        </router-link>
        <router-link to="/Dragons" class="navbar-item noHover">Dragons</router-link>
        <router-link to="/Create" class="navbar-item noHover">Create</router-link>
        <router-link to="/Parts" class="navbar-item noHover">Parts</router-link>
        <router-link to="/About" class="navbar-item noHover">About</router-link>
      </div>
      <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <router-link to="/Admin" class="button"><strong>Admin</strong></router-link>
        </div>
      </div>
    </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
nav {
  background-color: #f2f6fa;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.03), 0 6px 20px 0 rgba(0, 0, 0, 0.03);
}

.button {
  color: #f2f6fa;
  background-color: #197278;
  border: none;
  margin-right: 10px;
}

.button:hover {
  color: white;
  background-color: #23A0A9;
}
.navbar-item:hover{
  color: #EDE6E3;
  background-color: #f2f6fa;
}

a {
  color: #4a4a4a;
  font-size: 1.1em;
  font-weight: bold;
}
a.navbar-item:focus,
a.navbar-item:focus-within,
a.navbar-item:hover,
a.navbar-item.is-active,
.navbar-link:focus,
.navbar-link:focus-within,
.navbar-link:hover,
.navbar-link.is-active {
  background-color: #f2f6fa;
  color: #23A0A9;
}
.router-link-active {
  opacity: 1;
  visibility: visible;
  transition: all 0.25s;
}

img {
  width: 200px;
  align-content: center;
}
</style>

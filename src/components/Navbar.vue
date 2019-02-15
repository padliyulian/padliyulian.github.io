<template>
  <nav>
    <v-toolbar flat color="white">
      <v-toolbar-side-icon class="hidden-md-and-up" />
      <v-toolbar-title>Julian's</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down julian-nav">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/portfolio">Portfolio</router-link>
        <router-link to="/blog">Blog</router-link>
      </v-toolbar-items>
    </v-toolbar>
    <v-divider />
  </nav>
</template>

<script>
export default {
  metaInfo: {
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Fredericka+the+Great"
      }
    ]
  }
};
</script>

<style lang="scss" scoped>
nav {
  font-family: "Fredericka the Great", cursive;

  .julian-nav {
    display: flex;
    align-items: center;
    justify-content: center;

    a {
      text-decoration: none;
      color: black;
      border-bottom: 3px solid white;
      margin: 0 10px;
    }

    a:hover {
      border-bottom: 3px solid teal;
    }
  }
}
</style>

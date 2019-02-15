<template>
  <div class="julian-navbar-container">
    <nav class="julian-navbar">
      <v-toolbar flat color="white">
        <v-toolbar-side-icon
          class="hidden-md-and-up teal--text"
          @click="sideBar"
        />
        <v-toolbar-title class="teal--text">Julian's</v-toolbar-title>
        <v-spacer />
        <v-toolbar-items class="hidden-sm-and-down julian-navbar-list">
          <template v-for="link in links">
            <router-link :to="link.url" :key="link.id">
              {{ link.title }}
            </router-link>
          </template>
        </v-toolbar-items>
      </v-toolbar>
      <v-divider />
    </nav>

    <div class="julian-sidebar">
      <v-navigation-drawer v-model="drawer" absolute temporary>
        <v-list class="pa-1 julian-sidebar-head">
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title class="julian-sidebar-title teal--text">
                Julian's
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
        <v-list class="pt-0" dense>
          <v-divider />
          <v-list-tile
            v-for="link in links"
            :key="link.id"
            @click="linkTo(link.url)"
          >
            <v-list-tile-action>
              <v-icon class="teal--text">
                {{ link.icon }}
              </v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title class="teal--text">
                {{ link.title }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        { title: "Home", icon: "dashboard" },
        { title: "About", icon: "question_answer" }
      ],
      links: [
        {
          id: 1,
          title: "Home",
          icon: "dashboard",
          url: "/"
        },
        {
          id: 2,
          title: "About",
          icon: "person",
          url: "/about"
        },
        {
          id: 3,
          title: "Portfolio",
          icon: "apps",
          url: "/portfolio"
        },
        {
          id: 4,
          title: "Blog",
          icon: "question_answer",
          url: "/blog"
        }
      ]
    };
  },
  metaInfo: {
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Fredericka+the+Great"
      }
    ]
  },
  methods: {
    sideBar() {
      this.drawer = !this.drawer;
    },
    linkTo(url) {
      return this.$router.push(url);
    }
  }
};
</script>

<style lang="scss" scoped>
.julian-navbar-container {
  font-family: "Fredericka the Great", cursive;

  .julian-navbar {
    .julian-navbar-list {
      display: flex;
      align-items: center;
      justify-content: center;

      a {
        text-decoration: none;
        color: teal;
        border-bottom: 3px solid white;
        margin: 0 10px;
      }

      a:hover {
        border-bottom: 3px solid teal;
      }
    }
  }

  .julian-sidebar {
    .julian-sidebar-head {
      .julian-sidebar-title {
        font-size: 1.5em;
      }
    }
  }
}
</style>

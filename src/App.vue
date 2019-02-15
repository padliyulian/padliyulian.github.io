<template>
  <v-app class="julian-container">
    <Navbar />
    <router-view></router-view>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  components: {
    Navbar
  },
  metaInfo: {
    title: `Julian's`
  }
};
</script>

<style></style>

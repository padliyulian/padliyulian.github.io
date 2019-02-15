<template>
  <v-app class="julian-container">
    <Navbar />
    <transition name="fade">
      <router-view></router-view>
    </transition>
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
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style></style>

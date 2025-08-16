<template>
  <v-container class="fill-height d-flex flex-column justify-center align-center">
    <v-icon color="grey" size="96">mdi-alert-circle-outline</v-icon>
    <h1 class="text-h3 mb-2">404 - Page Not Found</h1>
    <p class="text-body-1 mb-4">Sorry, the page you are looking for does not exist.</p>
    <v-btn color="primary" to="/">Go Home</v-btn>
  </v-container>
</template>

<script setup lang="ts">
// No script needed for static 404 page
</script>

<style scoped>
.fill-height {
  min-height: 80vh;
}
</style>

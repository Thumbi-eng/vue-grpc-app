<template>
  <v-app>
    <!-- Top Navbar -->
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>My Vue 3 App</v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- Router Links -->
      <v-btn to="/" variant="text" class="text-white">Home</v-btn>
      <v-btn to="/todo" variant="text" class="text-white">Todo</v-btn>
      <v-btn to="/about" variant="text" class="text-white">About</v-btn>
    </v-app-bar>

    <!-- Routed Pages -->
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup lang="ts"></script>

<template>
  <v-app class="">
    <v-toolbar app class="" color="primary">
      <v-toolbar-title> My todo app </v-toolbar-title>
      <v-spacer></v-spacer>
      <div>
        <v-btn to="/">Home</v-btn>
        <v-btn to="/about">About</v-btn>
        <v-btn to="/todo">Todo</v-btn>
      </div>
    </v-toolbar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

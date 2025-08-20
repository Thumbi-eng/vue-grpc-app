import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Icons
import '@mdi/font/css/materialdesignicons.css'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

import { useTodoStore } from './stores/todo'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: { mdi },
  },
})

const app = createApp(App)

// ✅ create a pinia instance
const pinia = createPinia()
app.use(pinia)
app.use(router)
app.use(vuetify)

// ✅ only now it’s safe to use your store
const todoStore = useTodoStore(pinia)
todoStore.loadTodos()

// persistence
todoStore.$subscribe((mutation, state) => {
  localStorage.setItem('todos', JSON.stringify(state.todos))
})

app.mount('#app')

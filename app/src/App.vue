<template>
  <v-app id="inspire">
    <v-navigation-drawer
      app
      clipped
      v-model="drawer"
    >
    <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6 orange--text" justify="center" align="center">
            DASHBOARD
          </v-list-item-title>
          <v-list-item-subtitle justify="center" align="center">
            View, Add and Remove Stock
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :href="item.href"
          link
        >
          <v-list-item-content>
            <v-btn raised class="orange darken-2 white--text">{{ item.title }}</v-btn>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    
    <v-app-bar clipped-left app class="app">
      <v-icon large class="orange--text" @click="drawer = !drawer"> mdi-chart-bar-stacked </v-icon>
      <v-toolbar-title class="ml-2"> STOCK SYSTEM </v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view> </router-view>
    </v-main>

  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',

  data(){
      return {
         items: [
          { title: 'STOCK LEVELS', href: '/' },
          { title: 'ADD STOCK', href: '/addStock' },
          { title: 'REMOVE STOCK', href: '/removeStrock' }
        ],
        drawer: null
      }
    }
});
</script>

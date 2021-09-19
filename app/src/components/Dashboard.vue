<template>
<v-container>
    <h2 class="orange--text py-4"> STOCK LEVELS </h2>
    <v-card elevation="5" max-width="450">
        <v-card-text>
            <v-list>
              <v-list-item>
                <v-list-item-content>
                  <v-row>
                    <v-col>
                      <v-list-item-title> PRODUCT01 </v-list-item-title>
                      <v-list-item-subtitle class="pt-2"> {{ product1.price }} </v-list-item-subtitle>
                    </v-col>
                    <v-col align="right">
                      <p> {{ product1.item }} </p>
                    </v-col>
                  </v-row>
                </v-list-item-content>
              </v-list-item>
              <v-divider> </v-divider>
              <v-list-item>
                <v-list-item-content>
                  <v-row>
                    <v-col>
                      <v-list-item-title> PRODUCT02 </v-list-item-title>
                      <v-list-item-subtitle class="pt-2"> {{ product2.price }} </v-list-item-subtitle>
                    </v-col>
                    <v-col align="right">
                      <p> {{ product2.item }} </p>
                    </v-col>
                  </v-row>
                </v-list-item-content>
              </v-list-item>
              <v-divider> </v-divider>
              <v-list-item>
                <v-list-item-content>
                  <v-row>
                    <v-col>
                      <v-list-item-title> PRODUCT03 </v-list-item-title>
                      <v-list-item-subtitle class="pt-2"> {{ product3.price }} </v-list-item-subtitle>
                    </v-col>
                    <v-col align="right">
                      <p> {{ product3.item }} </p>
                    </v-col>
                  </v-row>
                </v-list-item-content>
              </v-list-item>
            </v-list>
        </v-card-text>   
    </v-card>
</v-container>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: 'Dashboard',
    data(){
        return{
            product1: {},
            product2: {},
            product3: {}
        }
    },
    mounted(){
        if (localStorage.getItem('product1')) {
        try {
          this.product1 = JSON.parse(localStorage.getItem('product1'));
        } catch(e) {
          localStorage.removeItem('product1');
        }
      }
      if (localStorage.getItem('product2')) {
        try {
          this.product2 = JSON.parse(localStorage.getItem('product2'));
        } catch(e) {
          localStorage.removeItem('product2');
        }
      }
      if (localStorage.getItem('product3')) {
        try {
          this.product3 = JSON.parse(localStorage.getItem('product3'));
        } catch(e) {
          localStorage.removeItem('product3');
        }
      }
    }
})
</script>
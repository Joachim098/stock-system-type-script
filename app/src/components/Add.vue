<template>
<v-container>
    <h2 class="orange--text py-4"> Add Stock </h2>
    <v-card elevation="5" max-width="450">
        <v-card-text>
            <v-row>
                <v-col>
                    <p> Select a Product Code </p>
                    <v-select
                    :items="products"
                    label=" --Select--"
                    color="orange"
                    solo
                    v-model="selectedProduct"
                    ></v-select>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <p> Items Received </p>
                    <v-text-field
                    dense
                    outlined
                    color="orange"
                    type="number"
                    v-model="item"
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <p> Price per Item Received </p>
                    <v-text-field
                    dense
                    outlined
                    color="orange"
                    type="number"
                    v-model="price"
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col align="right">
                    <v-btn raised large block class="black orange--text" v-on:click="add"> ADD STOCK </v-btn>
                </v-col>
            </v-row>
        </v-card-text>   
    </v-card>
</v-container>
</template>

<script lang="ts">
  import Vue from 'vue'
  export default Vue.extend({
    name: 'Add',
    data() {
        return{
            products: [
                'PRODUCT01',
                'PRODUCT02',
                'PRODUCT03'
            ],
            selectedProduct: '',
            item: null,
            price: null,
            product1: {},
            product2: {},
            product3: {},
            sumItem: null,
            sumPrice: null
        }
    },
    methods: {
        check(){
            if(this.selectedProduct == '' || this.item == '' || this.price == ''){
                alert("Please make sure to fill in all the fields")
            }
        },
        add(){
            this.check();
            if (this.selectedProduct == 'PRODUCT01'){
                if (localStorage.getItem('product1')){
                    const item = JSON.parse(localStorage.getItem('product1')).item;
                    const price = JSON.parse(localStorage.getItem('product1')).price;
                
                    this.sumItem = parseInt(item) + parseInt(this.item);
                    this.sumPrice = parseFloat(price) + parseFloat(this.price);
                    let averagePrice = this.sumPrice/2;

                    this.product1 = {
                        item: this.sumItem,
                        price: averagePrice.toFixed(2)
                    };
                    const parsed = JSON.stringify(this.product1);
                    localStorage.setItem('product1', parsed);
                    this.selectedProduct = ''; 
                    this.item = ''; 
                    this.price = '';
                    alert("Stock has been added");
                }
                else if (!localStorage.getItem('product1')){
                    this.product1 = {
                        item: this.item,
                        price: this.price
                    };
                    const parsed = JSON.stringify(this.product1);
                    localStorage.setItem('product1', parsed);
                    this.selectedProduct = ''; 
                    this.item = ''; 
                    this.price = '';
                    alert("Stock has been added");
                }                            
            }
            else if(this.selectedProduct == 'PRODUCT02'){
                if (localStorage.getItem('product2')){
                    const item = JSON.parse(localStorage.getItem('product2')).item;
                    const price = JSON.parse(localStorage.getItem('product2')).price;
                
                    this.sumItem = parseInt(item) + parseInt(this.item);
                    this.sumPrice = parseFloat(price) + parseFloat(this.price);
                    let averagePrice = this.sumPrice/2;

                    this.product2 = {
                        item: this.sumItem,
                        price: averagePrice.toFixed(2)
                    };
                    const parsed = JSON.stringify(this.product2);
                    localStorage.setItem('product2', parsed);
                    this.selectedProduct = ''; 
                    this.item = ''; 
                    this.price = '';
                    alert("Stock has been added");
                }
                else if (!localStorage.getItem('product2')){
                    this.product2 = {
                        item: this.item,
                        price: this.price
                    };
                    const parsed = JSON.stringify(this.product2);
                    localStorage.setItem('product2', parsed);
                    this.selectedProduct = ''; 
                    this.item = ''; 
                    this.price = '';
                    alert("Stock has been added");
                }
            }
            else if (this.selectedProduct == 'PRODUCT03'){
                if (localStorage.getItem('product3')){
                    const item = JSON.parse(localStorage.getItem('product3')).item;
                    const price = JSON.parse(localStorage.getItem('product3')).price;
                
                    this.sumItem = parseInt(item) + parseInt(this.item);
                    this.sumPrice = parseFloat(price) + parseFloat(this.price);
                    let averagePrice:number = this.sumPrice/2;

                    this.product3 = {
                        item: this.sumItem,
                        price: averagePrice.toFixed(2)
                    };
                    const parsed = JSON.stringify(this.product3);
                    localStorage.setItem('product3', parsed);
                    this.selectedProduct = ''; 
                    this.item = ''; 
                    this.price = '';
                    alert("Stock has been added");
                }
                else if (!localStorage.getItem('product3')){
                    this.product3 = {
                        item: this.item,
                        price: this.price
                    };
                    const parsed = JSON.stringify(this.product3);
                    localStorage.setItem('product3', parsed);
                    this.selectedProduct = ''; 
                    this.item = ''; 
                    this.price = '';
                    alert("Stock has been added");
                }
            }
          
        }

    }
  })
</script>

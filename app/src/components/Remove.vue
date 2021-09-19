<template>
<v-container>
    <h2 class="orange--text py-4"> Remove Stock </h2>
    <v-card elevation="5" max-width="450">
        <v-card-text>
            <v-row>
                <v-col>
                    <p> Select a Product Code </p>
                    <v-select
                    :items="products"
                    label=" --Select--"
                    color="orange"
                    v-model="selectedProduct"
                    solo
                    ></v-select>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <p> Buyer EMail Address </p>
                    <v-text-field
                    dense
                    outlined
                    color="orange"
                    type="email"
                    v-model="email"
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <p> Items Bought </p>
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
                <v-col align="right">
                    <v-btn raised large block class="black orange--text" v-on:click="remove"> ITEMS SHIPPED </v-btn>
                </v-col>
            </v-row>
        </v-card-text>   
    </v-card>
</v-container>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: "Remove",
    data(){
        return{
            products: [
                'PRODUCT01',
                'PRODUCT02',
                'PRODUCT03'
            ],
            selectedProduct: '',
            item: null,
            email: null,
            product1: {},
            product2: {},
            product3: {},
            sumItem: null,
            sumPrice: null
        }
    },
    methods:{
        check(){
            if(this.selectedProduct == '' || this.item == '' || this.email == ''){
                alert("Please make sure to fill in all the fields")
            }        
        },
        remove(){
            this.check();
            if (this.selectedProduct == 'PRODUCT01'){
                if (localStorage.getItem('product1')){
                    const item = JSON.parse(localStorage.getItem('product1')).item;
                    const price = JSON.parse(localStorage.getItem('product1')).price;
                    let existing = JSON.parse(localStorage.getItem('product1'));
                    this.sumItem = parseInt(item) - parseInt(this.item);
                    this.sumPrice = parseFloat(price) / parseFloat(this.item);
  
                    existing['email'] = this.email;
                    existing['item'] = this.sumItem;
                    existing['price'] = this.sumPrice.toFixed(2);

                    const email = JSON.parse(localStorage.getItem('product1')).email;
                    if(email === this.email){
                        alert("You can not ship items of this product with the same email\n Please use a different email address");
                    }
                    else{
                        localStorage.setItem('product1', JSON.stringify(existing));
                        this.selectedProduct = ''; 
                        this.item = ''; 
                        this.email = '';
                        alert("Stock has been removed");
                    }       
                }
                else{
                    alert("There are no items available for this product yet");

                } 
            }
            else if (this.selectedProduct == 'PRODUCT02'){
                if (localStorage.getItem('product2')){
                    const item = JSON.parse(localStorage.getItem('product2')).item;
                    const price = JSON.parse(localStorage.getItem('product2')).price;
                    let existing = JSON.parse(localStorage.getItem('product2'));
                    this.sumItem = parseInt(item) - parseInt(this.item);
                    this.sumPrice = parseFloat(price) / parseFloat(this.item);
  
                    existing['email'] = this.email;
                    existing['item'] = this.sumItem;
                    existing['price'] = this.sumPrice.toFixed(2);

                    const email = JSON.parse(localStorage.getItem('product2')).email;
                    if(email === this.email){
                        alert("You can not buy items of this product with the same email\n Please use a different email address");
                    }
                    else{
                        localStorage.setItem('product2', JSON.stringify(existing));
                        this.selectedProduct = ''; 
                        this.item = ''; 
                        this.email = '';
                        alert("Stock has been removed");
                    }       
                }
                else{
                    alert("There are no items available for this product yet");

                } 
            } 
            else if (this.selectedProduct == 'PRODUCT03'){
                if (localStorage.getItem('product3')){
                    const item = JSON.parse(localStorage.getItem('product3')).item;
                    const price = JSON.parse(localStorage.getItem('product3')).price;
                    let existing = JSON.parse(localStorage.getItem('product3'));
                    this.sumItem = parseInt(item) - parseInt(this.item);
                    this.sumPrice = parseFloat(price) / parseFloat(this.item);
  
                    existing['email'] = this.email;
                    existing['item'] = this.sumItem;
                    existing['price'] = this.sumPrice.toFixed(2);

                    const email = JSON.parse(localStorage.getItem('product3')).email;
                    if(email === this.email){
                        alert("You can not buy items of this product with the same email\n Please use a different email address");
                    }
                    else{
                        localStorage.setItem('product3', JSON.stringify(existing));
                        this.selectedProduct = ''; 
                        this.item = ''; 
                        this.email = '';
                        alert("Stock has been removed");
                    }       
                }
                else{
                    this.selectedProduct = ''; 
                    this.item = ''; 
                    this.email = '';
                    alert("There are no items available for this product yet");

                } 
            } 
        } 
    }
})
</script>
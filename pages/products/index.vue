<template>
  <div class="container mx-auto">
    <div class="flex">
      <div class="flex-grow"> 
        <h2 class="text-2xl font-bold mb-4">Wood Flooring</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4" v-if="productList.length > 0">
          <ProductCard v-for="product in productList" :key="product.id" :product="product" />
        </div>
        <div v-else>Loading products...</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useFlooringProductsStore } from '~/stores/flooringProducts.js';
import ProductCard from '~/components/ProductCard.vue';

const store = useFlooringProductsStore();

store.getProducts();

const products = store.products;
const isLoading = store.isLoading;

</script>
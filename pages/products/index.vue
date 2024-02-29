<template>
  <div class="container mx-auto">
    <div class="flex">
      <div class="flex-grow"> 
        <h2 class="text-2xl font-bold mb-4">Wood Flooring</h2>
        <div v-if="isLoading">Loading products...</div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4" v-else-if="products.length > 0">
          <Productcard v-for="product in products" :key="product.id" :product="product" />
        </div>
        <div v-else>No products found.</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useFlooringProductsStore } from '~/stores/flooringProducts.js';
import Productcard from '~/components/Productcard.vue';

const store = useFlooringProductsStore();

onMounted(async () => {
  await store.getProducts();
})

const products = computed(() => store.products); 
console.log('Products:', products.value);
const isLoading = store.isLoading;

</script>
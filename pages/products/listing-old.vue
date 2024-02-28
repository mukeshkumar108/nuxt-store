<template>
  <div class="container mx-auto">
    <div class="flex">
      <aside class="w-full md:max-w-[376px]">
        <Sidefilter />
      </aside>
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
import { ref, onMounted } from '@vue/composition-api';
import axios from 'axios';
import ProductCard from '~/components/ProductCard.vue';
//import SideFilter from '~/components/SideFilter.vue';
import ProductSort from '~/components/ProductSort.vue';

const productList = ref([]);
const config = useRuntimeConfig();

onMounted(async () => {
  try {
    const strapiBaseUrl = config.public.STRAPI_BASE_URL;
    const response = await axios.get(`${strapiBaseUrl}/vs-tests`); // fetch products
    productList.value = response.data.data; 
  } catch (error) { 
    console.error('Error fetching data:', error); // log errors for debugging  
  }
});

</script>
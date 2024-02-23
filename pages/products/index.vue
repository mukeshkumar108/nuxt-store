<template>
  <div class="container mx-auto">
    <div class="flex">
      <aside class="w-full md:max-w-[376px]">
        <SideFilter />
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
import SideFilter from '~/components/SideFilter.vue';

const productList = ref([]);
const config = useRuntimeConfig();

onMounted(async () => {
  try {
    const strapiBaseUrl = config.public.STRAPI_BASE_URL;

    const response = await axios.get(`${strapiBaseUrl}/wood-floorings`); // Fetch products
    productList.value = response.data.data; // Assuming your data is within a 'data' property. Adjust if needed.

  } catch (error) { 
    console.error('Error fetching data:', error); // Log errors for debugging  
  }
});

</script>
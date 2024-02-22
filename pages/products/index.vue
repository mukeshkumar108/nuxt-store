<template>
    <div class="container mx-auto">
      <h2 class="text-2xl font-bold mb-4">Wood Flooring</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4" v-if="productList.length > 0">
        <div class="border p-4" v-for="product in productList" :key="product.id">
          <NuxtLink :to="`/products/${product.id}`"> 
            <img src="https://placehold.co/600x400" width="600" height="400"/>
            <h4>{{ product.attributes.productName }}</h4>
            <p>${{ product.attributes.productPrice }}</p>
          </NuxtLink>
        </div>
      </div>
    </div>
  </template>

<script setup>
import { ref, onMounted } from '@vue/composition-api';
import axios from 'axios';

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
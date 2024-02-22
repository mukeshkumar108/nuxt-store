<template>
    <div class="container mx-auto">
        <div v-if="product">
            <h1 class="text-2xl font-bold mb-4">{{ product.productName }}</h1>
            <p>{{ product.productDesc }}</p>
            <p>£{{ product.productPrice }}/m2</p>
        </div>
        <div v-else>Loading product...</div>
    </div>
  </template>
  
<script setup>
import { ref, onMounted } from '@vue/composition-api';
import axios from 'axios';
const route = useRoute();
const config = useRuntimeConfig();
const product = ref(null);
  
onMounted(async () => {
    try {
        const productId = route.params.id; 
        const strapiBaseUrl = config.public.STRAPI_BASE_URL;
        const response = await axios.get(`${strapiBaseUrl}/wood-floorings/${productId}`);

        console.log('Route params:', route.params); 
        console.log('Product ID:', productId);
        console.log('Strapi response:', response.data);
        product.value = response.data.data.attributes;
  
    } catch (error) { 
        console.error('Error fetching product:', error); 
    }
  });
  </script>
  
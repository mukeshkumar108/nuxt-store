<template>
    <div class="container mx-auto">
        <div v-if="product">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="p-4 bg-gray-100">
                    <img
                        src="https://www.jackeviecollections.com/collections/branston/pitsford-street.jpg"
                        alt="Great product"
                        class="block object-cover h-auto aspect-square w-full"
                        width="300"
                        height="300"
                    />
                </div>
                <div class="p-4 bg-gray-200">
                    <h1 class="text-2xl font-bold mb-4">{{ product.product_name }}</h1>
                    <p>{{ product.product_desc }}</p>
                    <p>£{{ product.product_price }}/m2</p>
                </div>
            </div>
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
        const response = await axios.get(`${strapiBaseUrl}/vs-tests/${productId}`);

        console.log('Route params:', route.params); 
        console.log('Product ID:', productId);
        console.log('Strapi response:', response.data);
        product.value = response.data.data.attributes;
  
    } catch (error) { 
        console.error('Error fetching product:', error); 
    }
  });
  </script>
  
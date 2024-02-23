<template>
    <div class="container mx-auto">
      <h2 class="text-2xl font-bold mb-4">Wood Flooring</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4" v-if="productList.length > 0">
        <div class="border border-neutral-200 rounded-md hover:shadow-lg max-w-[300px]" v-for="product in productList" :key="product.id">
          <NuxtLink :to="`/products/${product.id}`"> 
            <div class="relative">
              <SfLink href="#" class="block">
                <img
                  src="https://www.jackeviecollections.com/collections/branston/pitsford-street.jpg"
                  alt="Great product"
                  class="block object-cover h-auto rounded-md aspect-square"
                  width="300"
                  height="300"
                />
              </SfLink>
              <SfButton
                variant="tertiary"
                size="sm"
                square
                class="absolute bottom-0 right-0 mr-2 mb-2 bg-white ring-1 ring-inset ring-neutral-200 !rounded-full"
                aria-label="Add to wishlist"
              >
                <SfIconFavorite size="sm" />
              </SfButton>
            </div>
            <div class="p-4 border-t border-neutral-200">
              <SfLink href="#" variant="secondary" class="no-underline">{{ product.attributes.productName }}</SfLink>
              <p class="block py-2 font-normal leading-5 typography-text-sm text-neutral-700">
                Lightweight • Non slip • Flexible outsole • Easy to wear on and off
              </p>
              <span class="block pb-2 font-bold typography-text-lg">${{ product.attributes.productPrice }}</span>
            </div>
          </NuxtLink>
        </div>
      </div>
      <div v-else>Loading products...</div>
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
<template>
  <div class="border border-neutral-200 rounded-md hover:shadow-lg max-w-sm p-4">
    <div class="relative">
      <img :src="product.attributes.image || 'https://place-hold.it/300x300/666/fff.png/000'" 
           alt="Product image" 
           class="block object-cover h-auto rounded-md aspect-square w-full" 
           loading="lazy">
    </div>
    <div class="mt-4">
      <h2 class="text-md font-bold">{{ product.attributes.product_name }}</h2>
      <p class="text-gray-600">£{{ product.attributes.product_sell }}/m2</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
/* Additional styling as needed */
</style>

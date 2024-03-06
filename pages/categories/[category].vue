<template>
    <div class="container mx-auto p-4">
      <h1>Products</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <Productcard v-for="product in displayedProducts" :key="product.id" :product="product" />
      </div>
    </div>
  </template>
  
  <script setup>
  import Productcard from '~/components/Productcard.vue';
  import { onMounted, computed } from 'vue';
  import { useAsyncData } from '#app';
  import { useProductsStore } from '~/stores/products';
  
  const productsStore = useProductsStore();
  const route = useRoute();
  const category = route.params.category;
  console.log('Category:', category);

  const { data: products, refresh } = await useAsyncData('products-${category}', () => {
    return productsStore.fetchProductsByCategory(category);
  });
  
  const displayedProducts = computed(() => {
    return productsStore.products;
  });
  
  </script>
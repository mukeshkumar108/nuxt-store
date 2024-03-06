<template>
  <div>
    <h1>Products</h1>
    <div v-for="product in displayedProducts" :key="product.id" class="product">
      <h2>{{ product.attributes.product_name }}</h2>
      <h2>£{{ product.attributes.product_sell }}</h2>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue';
import { useAsyncData } from '#app';
import { useProductsStore } from '~/stores/products';

const productsStore = useProductsStore();

const { data: products, refresh } = await useAsyncData('products', () => {
  return productsStore.fetchProducts();
});

const displayedProducts = computed(() => {
  return productsStore.products;
})

</script>
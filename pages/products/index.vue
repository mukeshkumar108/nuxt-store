<template>
  <div>
    <h1>Products</h1>
    <div v-for="product in products" :key="product.id" class="product">
      <h2>{{ product.attributes.product_name }}</h2>
      <h2>£{{ product.attributes.product_sell }}</h2>
    </div>  
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useAsyncData } from '#app';
import { useProductsStore } from '~/stores/products';

const productsStore = useProductsStore();

const { data: products } = useAsyncData('products', () => {
  return productsStore.fetchProducts().then(() => {
    return productsStore.products.map(product => ({
      id: product.id,
      attributes: product.attributes,
    }));
  });
})
</script>
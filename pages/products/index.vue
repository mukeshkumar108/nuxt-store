<template>
  <div class="container mx-auto p-4">
    <h1>Products</h1>
    <ProductSort @updateSortOrder="handleSortOrderChange" />
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <Productcard v-for="product in displayedProducts" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script setup>
import Productcard from '~/components/Productcard.vue';
import ProductSort from '~/components/ProductSort.vue';
import { onMounted, computed, watch, ref } from 'vue';
import { useAsyncData } from '#app';
import { useProductsStore } from '~/stores/products';

const productsStore = useProductsStore();
const sortOrder = ref('asc');

watch(sortOrder, async (newSortOrder) => {
  await productsStore.fetchAllProducts({ sortOrder: newSortOrder });
}, { immediate: true });

const handleSortOrderChange = (newSortOrder) => {
  sortOrder.value = newSortOrder;
  productsStore.fetchAllProducts(sortOrder.value);
};

const displayedProducts = computed(() => {
  return productsStore.products;
});


</script>
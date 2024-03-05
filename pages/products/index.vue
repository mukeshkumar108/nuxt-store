<template>
  <div>
    <h1>Products</h1>
    <div v-for="product in products" :key="product.id" class="product">
      <h2>{{ product.attributes.product_name }}</h2>
      <h2>£{{ product.attributes.product_sell }}</h2>
    </div>
    <Pagination :currentPage="currentPage" :totalPages="totalPages" @update:currentPage="updateCurrentPage" />  
  </div>
</template>

<script setup>
import Pagination from '~/components/Pagination.vue';
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

const currentPage = ref(1);
const pageSize = ref(12);
const totalPages = computed(() => Math.ceil(products.value.length / pageSize.value));

function updateCurrentPage(newPage) {
  currentPage.value = newPage;
}

</script>
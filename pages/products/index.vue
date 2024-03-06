<template>
  <div>
    <h1>Products</h1>
    <div v-for="product in displayedProducts" :key="product.id" class="product">
      <h2>{{ product.attributes.product_name }}</h2>
      <h2>£{{ product.attributes.product_sell }}</h2>
    </div>
    <Pagination :total-pages="totalPages" :current-page="currentPage" @updatePage="updatePage" />  
  </div>
</template>

<script setup>
import Pagination from '~/components/Pagination.vue';
import { onMounted, computed } from 'vue';
import { useAsyncData } from '#app';
import { useProductsStore } from '~/stores/products';

const productsStore = useProductsStore();
const pageSize = ref(12);
const currentPage = ref(1);

const { data: products } = useAsyncData('products', () => {
  return productsStore.fetchProducts().then(() => {
    return productsStore.products.map(product => ({
      id: product.id,
      attributes: product.attributes,
    }));
  });
})

const displayedProducts = computed(() => {
  const startIndex = (currentPage.value - 1) * pageSize.value;
  const endIndex = startIndex + pageSize.value;
  return productsStore.products.slice(startIndex, endIndex);
})
const totalPages = computed(() => 
  Math.ceil(productsStore.totalProducts / pageSize.value)
);


async function updatePage(newPage) {
  productsStore.currentPage = newPage;
  await productsStore.fetchProducts();
  console.log('productsStore.products after fetch:', productsStore.products)
}
console.log('totalProducts inside index.vue:', productsStore.totalProducts)
console.log('totalPages inside index.vue:', totalPages.value)

</script>
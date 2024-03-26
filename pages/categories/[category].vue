<template>
    <div class="container mx-auto p-4">
      <h1>Products</h1>
      <ProductSort @updateSortOrder="handleSortOrderChange" />
      <div v-if="displayedProducts.length > 0" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <Productcard v-for="product in displayedProducts" :key="product.id" :product="product" />
      </div>
      <p v-else-if="fetchError" class="text-red-500">Error fetching products: {{ fetchError }}</p>
      <p v-else>Loading products...</p>
      <Pagination :totalPages="totalPages" :currentPage="currentPage" @updatePage="changePage" />
    </div>
  </template>
  
<script setup>
import { useRoute, useRouter } from 'vue-router';
import { onMounted, ref, computed, watch } from 'vue';
import ProductSort from '~/components/ProductSort.vue';
import Pagination from '~/components/Pagination.vue';
import Productcard from '~/components/Productcard.vue';
import { useProductsStore } from '~/stores/products';

const route = useRoute();
const router = useRouter();
const productsStore = useProductsStore();
const category = computed (() => route.params.category);
const fetchError = ref(null);
const sortOrder = ref('asc');
const currentPage = ref(1);
const totalPages = computed(() => 
  Math.ceil(productsStore.totalProducts / productsStore.pageSize)
);

const handleSortOrderChange = (newSortOrder) => {
  sortOrder.value = newSortOrder;
  fetchProducts();
}

const changePage = (newPage) => {
  currentPage.value = newPage;
  fetchProducts();
}
const fetchProducts = async () => {
  fetchError.value = null;
  try {
    await productsStore.fetchProductsByCategory({
      category: category.value,
      sortOrder: sortOrder.value,
      page: currentPage.value
    });
  } catch (error) {
    console.error('Error fetching products:', error);
    fetchError.value = 'Error fetching products';
  }
};

watch([category], fetchProducts, { immediate: true });

const displayedProducts = computed(() => 
  productsStore.products
);


</script>

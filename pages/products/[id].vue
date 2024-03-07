<template>
    <div class="container mx-auto p-4" v-if="product">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="p-4 bg-gray-100">
          <img :src="product.attributes.image || 'https://www.jackeviecollections.com/collections/branston/pitsford-street.jpg'"
               alt="Product image"
               class="block object-cover h-auto aspect-square w-full"
               width="300"
               height="300">
        </div>
        <div class="p-4 bg-gray-200">
          <h1 class="text-2xl font-bold mb-4">{{ product.attributes.product_name }}</h1>
          <p class="text-2xl font-bold mb-4">£{{ product.attributes.product_sell }}/m2</p>
          <p>{{ product.attributes.product_desc }}</p>
          <p>This is a test can you see me?</p>
          <p>Stock ID: {{ product.attributes.stock_id }}</p>
          <p>Colour No: {{ product.attributes.colour_no }}</p>
          <p>Brand: {{ product.attributes.product_brand }}</p>
        </div>
      </div>
    </div>
    <div v-else>Loading product...</div>
  </template>
  
  <script setup>
  import axios from 'axios';
  import { useRoute } from 'vue-router';
  import { GET_PRODUCT_DETAILS } from '~/graphql/queries';
  
  const route = useRoute();
  const productId = route.params.id;
  
  const { data: product, error, refresh } = await useAsyncData(`product-details-${productId}`, () => {
    return axios.post('http://localhost:1337/graphql', {
      query: GET_PRODUCT_DETAILS,
      variables: { id: productId },
    })
    .then(response => response.data.data.vsSampleProduct.data)
    .catch(err => console.error(err));
  });
  </script>
  
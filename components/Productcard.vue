<template>
    <div class="border border-neutral-200 rounded-md hover:shadow-lg max-w-[300px]">
      <NuxtLink :to="`/products/${product.id}`"> 
        <div class="relative">
          <SfLink href="#" class="block">
            <img
              :src="product.attributes.image || 'https://www.jackeviecollections.com/collections/branston/pitsford-street.jpg'" 
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
          <h2>
            <SfLink href="#" variant="secondary" class="no-underline">
              {{ product.attributes.product_name }}
            </SfLink>
          </h2>
          <p class="block py-2 font-normal leading-5 typography-text-sm text-neutral-700">
            Lightweight • Non slip • Flexible outsole • Easy to wear on and off
          </p>
          <span class="block pb-2 headline">£{{ product.attributes.product_price }}/m2</span>
        </div>
      </NuxtLink>
    </div>
  </template>
  
  <script setup>
  defineProps({
    product: {
      type: Object,
      required: true,
    },
  });
  </script>
  
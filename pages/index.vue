<template>
  <div class="container mx-auto">
    <div class="flex flex-col md:flex-row flex-wrap gap-6 max-w-[1540px]">
      <div
        v-for="{
          image,
          title,
          subtitle,
          description,
          buttonText,
          backgroundColor,
          reverse,
          titleClass,
          subtitleClass,
        } in displayDetails"
        :key="title"
        :class="[
          'relative flex md:max-w-[1536px] md:[&:not(:first-of-type)]:flex-1 md:first-of-type:w-full',
          backgroundColor,
        ]"
      >
        <a
          class="absolute w-full h-full z-1 focus-visible:outline focus-visible:rounded-lg"
          :aria-label="title"
          href="/products"
        />
        <div :class="['flex justify-between overflow-hidden grow', { 'flex-row-reverse': reverse }]">
          <div class="flex flex-col justify-center items-start p-6 lg:p-10 max-w-1/2">
            <p :class="['uppercase typography-text-xs block font-bold tracking-widest', subtitleClass]">
              {{ subtitle }}
            </p>
            <h2 :class="['mb-4 mt-2 font-bold typography-display-3', titleClass]">
              {{ title }}
            </h2>
            <p class="typography-text-base block mb-4">
              {{ description }}
            </p>
            <SfButton class="!bg-black">{{ buttonText }}</SfButton>
          </div>
          <img :src="image" :alt="title" class="w-1/2 self-end object-contain" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { SfButton } from '@storefront-ui/vue';

const displayDetails = [
  {
    image: 'https://artificial-living.com/cdn/shop/files/30WV-WASHEDOAK_1_1000x.png',
    title: 'Cool Headline',
    subtitle: 'Some subtitle',
    description: 'A descriptive call to action',
    buttonText: 'Discover now',
    reverse: false,
    backgroundColor: 'bg-negative-200',
    titleClass: 'md:typography-display-2',
    subtitleClass: 'md:typography-headline-6',
    descriptionClass: 'md:typography-text-lg',
  },
  {
    image: 'https://artificial-living.com/cdn/shop/files/30WV-WASHEDOAK_1_1000x.png',
    title: 'Cool Headline',
    subtitle: 'Some subtitle',
    description: 'A descriptive call to action',
    buttonText: 'Discover now',
    reverse: true,
    backgroundColor: 'bg-warning-200',
  },
  {
    image: 'https://artificial-living.com/cdn/shop/files/30WV-WASHEDOAK_1_1000x.png',
    title: 'Cool Headline',
    subtitle: 'Some subtitle',
    description: 'A descriptive call to action',
    reverse: false,
    backgroundColor: 'bg-secondary-200',
  },
];
</script>

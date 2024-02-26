<!-- WIP - need to get this working properly! -->
<template>
    <SfSelect v-model="sortOrder" aria-label="Sort by">
        <option v-for="{ id, label, value } in sortOptions" :key="id" :value="value">
            {{ label }}
        </option>
    </SfSelect>
</template>

<script setup>
import { ref, watch, onMounted, computed } from 'vue';
import { SfSelect } from '@storefront-ui/vue';

const emit = defineEmits(['updateSort']);

const props = defineProps({
    products: {
        type: Array,
        required: true,
    }
});

const sortOptions = ref([
    { id: 'asc', label: 'Price low to high', value: 'asc' },
    { id: 'desc', label: 'Price high to low', value: 'desc' },
]);

const sortOrder = ref('asc'); // default to ascending

const sortProducts = computed(() => {
   return [...props.products].sort((a, b) => {
       if (sortOrder.value === 'asc') {
           return a.attributes.product_price - b.attributes.product_price; // ascending
       } else {
           return b.attributes.product_price - a.attributes.product_price; // descending
       }
   });
});

watch (sortOrder, () => {
    emit('updateSort', sortProducts.value);
});

onMounted(() => {
    emit('updateSort', sortProducts.value);
});

</script>
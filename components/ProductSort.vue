<template>
    <select @change="onSortChange" v-model="selectedSortOrder">
        <option value="asc">Price: Low to High</option>
        <option value="desc">Price: High to Low</option>
    </select>
</template>

<script setup>
import {ref, watch, defineEmits } from 'vue';

const emits = defineEmits(['updateSortOrder']);
const selectedSortOrder = ref('asc');

const onSortChange = () => {
    emits('updateSortOrder', selectedSortOrder.value);
};
</script>
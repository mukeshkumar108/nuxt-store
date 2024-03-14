<template>
    <nav aria-label="Pagination">
        <ul class="pagination">
            <li v-if="currentPage > 1" @click="changePage(currentPage - 1)" class="page-item">
                Previous
            </li>
            <li v-if="currentPage < totalPages" @click="changePage(currentPage + 1)" class="page-item">
                Previous
            </li>
        </ul>
    </nav>
</template>

<script setup>

import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    currentPage: Number,
    totalPages: Number
});

const emits = defineEmits(['updatePage']);

function changePage(page) {
    emits('updatePage', page);
}

</script>
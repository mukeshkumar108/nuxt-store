<template>
    <nav aria-label="Pagination">
        <ul class="pagination">
            <li v-if="currentPage > 1" class="page-item" :class="{ disabled: currentPage <= 1 }">
                <a class="page-link" href="#" @click.prevent="goToPage(currentPage - 1)">
                    Previous
                </a>
            </li>
            <li v-if="currentPage < totalPages" class="page-item">
                <a class="page-link" href="#" @click.prevent="goToPage(currentPage + 1)">
                    Next
                </a>
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

function goToPage(page) {
    if (page < 1 || page > props.totalPages) return;
    emits('updatePage', page);
}

</script>
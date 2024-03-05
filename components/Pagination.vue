<template>
    <nav aria-label="Pagination">
        <button v-if="currentPage > 1" @click="goToPage(currentPage - 1)">Previous</button>
        <button v-if="currentPage < totalPages" @click="goToPage(currentPage + 1)">Next</button>
    </nav>
</template>

<script setup>
const props = defineProps({
    currentPage: Number,
    totalPages: Number
});

const emit = defineEmits(['update:currentPage']);

function goToPage(page) {
    emit('update:currentPage', page);
}
</script>
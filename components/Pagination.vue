<template>
    <nav aria-label="Pagination">
        <button v-if="currentPage > 1" @click="goToPage(currentPage - 1)" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Previous
        </button>
        <button v-if="currentPage < totalPages" @click="goToPage(currentPage + 1)" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Next
        </button>
    </nav>
</template>

<script setup>
const props = defineProps({
    currentPage: Number,
    totalPages: Number
});

const emit = defineEmits(['updatePage']);

function goToPage(page) {
    productsStore.currentPage = page;
    emit('updatePage', page);
}

</script>
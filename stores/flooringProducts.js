import { defineStore } from 'pinia';

export const useFlooringProductsStore = defineStore('flooringProducts', {
    state: () => ({
        products: [],
        isLoading: false,
    }),
    actions: {
        async fetchGraphQLProducts(products) {
            store.isLoading = true;
            try {
                store.products = products;
                console.log('Products in store (updated): ', store.products);
            } catch (error) {
                console.error(error);
            } finally {
                store.isLoading = false;
            }
        }
    }
});
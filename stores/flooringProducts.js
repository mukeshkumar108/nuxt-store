import { defineStore } from 'pinia';

export const useFlooringProductsStore = defineStore('flooringProducts', {
    state: () => ({
        products: [],
        isLoading: false,
    }),
    getters: {
        //filtering sorting here
    },
    actions: {
        //fetching products
    }
});
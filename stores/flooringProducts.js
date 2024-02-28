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
        async getProducts() {
            this.isLoading = true;
            try {
                const response = await fetch('http://localhost:1337/graphql', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json', // specify content type
                    },
                    body: JSON.stringify({
                        query: `
                            query {
                                products {
                                    id
                                    product_name
                                    product_price
                                }
                            }
                        `,
                    })
                });
                const data = await response.json();
                this.products = data.data.products;
            } catch (error) {
                console.error(error);
            } finally {
                this.isLoading = false;
            }
        }
    }
});
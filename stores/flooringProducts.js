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
                                vsSampleProducts {
                                    data {
                                        id
                                        attributes {
                                            product_name
                                            product_sell
                                        }
                                    }
                                }
                            }
                        `,
                    })
                });
                const data = await response.json();
                console.log('GraphQL response: (Detail)', JSON.stringify(data, null, 2));
                this.products = data.data.vsSampleProducts.data.map(product => ({
                    id: product.id,
                    product_name: product.attributes.product_name,
                    product_price: product.attributes.product_sell
                }));
                console.log('Products in store: (updated)', this.products);
            } catch (error) {
                console.error(error);
            } finally {
                this.isLoading = false;
            }
        }
    }
});
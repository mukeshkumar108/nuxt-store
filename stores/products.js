import axios from "axios";
import { defineStore } from "pinia";

export const useProductsStore = defineStore('products', {
    state: () => ({
        products: [],
        totalProducts: 0,
        pageSize: 12,
        currentPage: 1
    }),
    actions: {
        async fetchProductsByCategory(category) {
            console.log('Fetching products from GraphQL API...')
            try {
                const response = await axios.post('http://localhost:1337/graphql', {
                    query: `
                        query ProductsByCategory($category: String!) {
                            vsSampleProducts(filters: { product_group: { eq: $category } }, pagination: { limit: 1000 }) {
                                data {
                                    id
                                    attributes {
                                        product_name
                                        product_sell
                                    }
                                }
                                meta {
                                    pagination {
                                        page
                                        pageSize
                                        pageCount
                                        total
                                    }
                                }
                            }
                        }
                    `,
                    variables: {
                        category
                    }
                });
                const data = await response.data;
                console.log('GraphQL response:', response.data);
                this.products = data.data.vsSampleProducts.data;
                console.log('Products in store:', this.products);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        }
    }
});
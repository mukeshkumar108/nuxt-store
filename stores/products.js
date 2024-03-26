import axios from "axios";
import { defineStore } from "pinia";
import { categoryMap } from "~/mappings/categoryMap";

export const useProductsStore = defineStore('products', {
    state: () => ({
        products: [],
        totalProducts: 0,
        pageSize: 12,
        currentPage: 1,
        totalProducts: 0,
    }),
    actions: {
        async fetchProductsByCategory({category, sortOrder = 'asc', page = 1}) {
            console.log('Fetching products from GraphQL API by category...', category);
            const sortQuery = sortOrder === 'desc' ? 'product_sell:desc' : 'product_sell:asc';
            const start = (this.currentPage - 1) * this.pageSize;
            const mappedCategory = categoryMap[category.toLowerCase()] || category;
            
            try {
                const response = await axios.post('http://localhost:1337/graphql', {
                    query: `
                        query ProductsByCategory($category: String!, $start: Int!, $limit: Int!) {
                            vsSampleProducts(
                                filters: { product_group: { eq: $category } }, 
                                sort: "${sortQuery}",
                                pagination: { start: $start, limit: $limit }
                            ) {
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
                        category: mappedCategory,
                        start: start,
                        limit: this.pageSize,
                    }
                });
                const data = await response.data;
                console.log('GraphQL response:', response.data);
                this.products = data.data.vsSampleProducts.data;
                this.currentPage = data.data.vsSampleProducts.meta.pagination.page;
                this.totalProducts = data.data.vsSampleProducts.meta.pagination.total;
                console.log('Products in store:', this.products);
            } catch (error) {
                console.error('Error fetching products by category:', error);
                console.error('Response data:', error.response ? error.response.data : 'No response data');
            }
        },
        async fetchAllProducts({ sortOrder = '', page = 1 }) {
            console.log('Fetching all products from GraphQL API...');
            const sortQuery = sortOrder === 'desc' ? 'product_sell:desc' : 'product_sell:asc';
            const start = (page - 1) * this.pageSize;
            try {
                const response = await axios.post('http://localhost:1337/graphql', {
                    query: `
                        {
                            vsSampleProducts(sort: "${sortQuery}", pagination: { start: ${start}, limit: ${this.pageSize} }) {
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
                });
                const data = await response.data;
                console.log('GraphQL fetchAll response:', response.data);
                this.products = data.data.vsSampleProducts.data;
                this.currentPage = data.data.vsSampleProducts.meta.pagination.page;
                this.totalProducts = data.data.vsSampleProducts.meta.pagination.total;
                console.log('ALL products in store:', this.products);
            } catch (error) {
                console.error('Error fetching all products:', error);
            }
        }
    }
});
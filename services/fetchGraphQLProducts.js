import axios from "axios";

export async function fetchGraphQLProducts() {
    try {
        const response = await axios.post('http://localhost:1337/graphql', {
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
        });

        const data = await response.data;
        return data.data.vsSampleProducts.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
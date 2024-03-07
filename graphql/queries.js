// In graphql/queries.js
export const GET_PRODUCT_DETAILS = `
    query ProductDetails($id: ID!) {
        vsSampleProduct(id: $id) {
            data {
                id
                attributes {
                    product_name
                    product_desc
                    product_sell
                    colour_no
                    product_brand
                    stock_id
                    attr_width
                    attr_depth
                    attr_length_from
                    attr_length_to
                    units_per_pack
                    unit_weight
                }
            }
        }
    }
`;

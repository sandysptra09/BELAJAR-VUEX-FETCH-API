import axios from "axios";

const product = {
    namespaced: true,
    state: {
        products:[],
    },
    getters:{
        getProduct: (state) => state.products,
       
          //   get single product
    getProductById: (state) => (productId) => {
        console.log("Fetching single product by ID:", productId);
        console.log("products:", state.products);
        const product = state.products.find((p) => p.id == productId);
        console.log("Product:", product);
        return product;
      },
    },
    actions:{
        async fetchProduct({commit}) {
            try {
                const dataProduct = await axios.get("https://fakestoreapi.com/products")
                commit('SET_PRODUCTS',dataProduct.data)
            } catch (error) {
                alert('Ada Error')
                console.log(error)
            }
        },

        // get single product
    async fetchSingleProduct({ commit }, productId) {
        try {
          const response = await axios.get(
            `https://fakestoreapi.com/products/${productId}`
          );
          commit("SET_SINGLE_PRODUCT", response.data);
        } catch (error) {
          alert(error);
          console.log(error);
        }
      },

    },
    mutations:{
        SET_PRODUCTS(state, products) {
            state.products = products
        },
        SET_SINGLE_PRODUCT(state, product) {
            state.singleProduct = product;
          },
    }
}

export default product;
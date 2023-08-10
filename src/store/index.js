import { createStore } from "vuex";
import product from "./modules/product";
import category from './modules/category'

const store = createStore({
  state: {
    isLoading: false,
  },
  modules: {
    product,
    category,
  },
});

export default store;



// import { createStore } from "vuex";
// import product from "./modules/product";


// const store = createStore({
//   state: {
//     isLoading: false,
//   },
//   modules:{
//     product
//   }
// });

// export default store;
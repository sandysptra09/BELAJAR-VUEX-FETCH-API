import { createStore } from "vuex";
import product from "./modules/product";
import category from './modules/category'
import auth from "./modules/auth";

const store = createStore({
  state: {
    isLoading: false,
  },
  modules: {
    product,
    category,
    auth,
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
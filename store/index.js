import { asyncGetProducts } from "../common/api";

export const state = ()=>({products: []});

export const mutations = {
  gotProducts(state, payload){
    state.products = payload;
  }
};

export const actions = {
  async fetchProducts(context){
    const products  = await asyncGetProducts();
    context.commit('gotProducts', products);
  }
};

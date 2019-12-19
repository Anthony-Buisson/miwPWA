import { asyncGetProducts } from "../common/api";
import Vuex from 'vuex';

const state = ()=>([]);

const mutations = {
  gotProducts(state, payload){
    state = payload;
  }
};

const actions = {
  async fetchProducts(context){
    const products  = await asyncGetProducts();
    context.commit('gotProducts', products);
  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions
});

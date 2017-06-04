/**
 * Created by bruin on 2017/6/4.
 */
import * as shop from '../../api/shop'

const state = {
    all: []
}

// getters
const getters = {
    allProducts: state => state.all
}

const actions = {
    getAllProducts (state) {
        state.commit(getAllProducts);
    },
    addToCart (state, product) {
        if (product.inventory > 0) {
            state.commit(addToCart, {
                id: product.id
            });
        }
    },

}

// mutations
const mutations = {
    getAllProducts(state){
        state.all = shop._products;
    },

    addToCart(state, { id }) {
        state.all.find(p => p.id === id).inventory--
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
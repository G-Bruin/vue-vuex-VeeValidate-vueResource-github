/**
 * Created by bruin on 2017/6/4.
 */
import * as shop from '../../api/shop'
import * as types from '../types'

const state = {
    all: []
}

// getters
const getters = {
    allProducts: state => state.all
}

const actions = {
    getAllProducts (state) {
        state.commit(types.GET_All_PRODUCTION);
    },
    addToCart (state, product) {
        if (product.inventory > 0) {
            state.commit(types.ADD_TO_CART, {
                id: product.id
            });
        }
    },
    add_to_production(state, product) {
        state.commit(types.ADD_TO_PRODUCTION, {
            id: product.id,
            quantity: product.quantity,
        })

    }
}

// mutations
const mutations = {

    [types.GET_All_PRODUCTION]: (state) => {
        state.all = shop._products;
    },

    [types.ADD_TO_CART]: (state, { id }) => {
        state.all.find(p => p.id === id).inventory--
    },

    [types.ADD_TO_PRODUCTION]: (state, { id }) => {
        const record = state.all.find(p => p.id === id)
        if (record) {
            record.inventory++
        }
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
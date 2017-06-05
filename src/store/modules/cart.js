/**
 * Created by bruin on 2017/6/4.
 */
import * as types from '../types'
import * as shop from '../../api/shop'

const state =  {
    added: [],
    getTotal: 0
};

const getters = {
    cartProducts (state) {
        return state.added
    },
    getTotal (state) {
        let getTotal = 0;
        for(let i = 0; i<state.added.length; i++){
            getTotal = getTotal+state.added[i].quantity;
        }
        return getTotal;
    }
};

const actions = {
    addToCart (state, product) {
        if (product.inventory >= 0) {
            state.commit(types.ADD_TO_CART_MAIN, {
                id: product.id,
                title: product.title,
                price: product.price,
            })
        }
    },



}

const mutations = {
    [types.ADD_TO_CART_MAIN] (state, { id, title,  price}) {
        const record = state.added.find(p => p.id === id)
        if (!record) {
            state.added.push({
                id,
                quantity: 1,
                title,
                price
            })
        } else {
            record.quantity++
        }
        state.getTotal++
    },
}

export default {
    state,
    getters,
    actions,
    mutations
}
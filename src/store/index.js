/**
 * Created by Administrator on 2017/5/15.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './types';
import * as actions from './actions';
import login from './modules/login';
import production from './modules/production';
import cart from './modules/cart';

Vue.use(Vuex)

const store = new Vuex.Store({
    actions,
    modules: {
        login,
        production,
        cart
    },
})
export {store}
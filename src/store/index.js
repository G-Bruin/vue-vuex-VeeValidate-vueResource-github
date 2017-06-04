/**
 * Created by Administrator on 2017/5/15.
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import * as types from './types';
import * as actions from './actions';
import login from './modules/login';
import production from './modules/production';


const store = new Vuex.Store({
    actions,
    modules: {
        login,
        production
    },
})
export {store}
/**
 * Created by Administrator on 2017/5/15.
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import * as types from './types';
import * as actions from './actions';
import login from './modules/login';


const store = new Vuex.Store({
    actions,
    modules: {
        login
    },
})
export {store}
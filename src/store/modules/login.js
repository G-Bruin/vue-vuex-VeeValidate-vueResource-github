/**
 * Created by Administrator on 2017/6/1.
 */
import * as types from '../types';

const state =  {
            token : localStorage.getItem("token") || null,
            title: '',
            todos: 0,
            user:  JSON.parse(localStorage.getItem("token_user")) || {}
        };

const getters = {
    user: state => state.user,
    token: state => state.token,
    title: state => state.title,
    todos: function(state){
        return state.todos
    },
};

const actions = {
    loginSet(state, params) {
        let user = {'money':params.money, 'name': params.name, 'age': params.age};
        let token = "sadasdsad";
        localStorage.token_user = JSON.stringify(user);
        localStorage.token = token;
        state.commit(types.LOGIN, {'user':user, 'token':token});
    },

    logout(state) {
        state.commit(types.LOGOUT);
        console.log('aaaa');
    },

    title(state, data) {
        state.commit(types.TITLE, data);
    }

};

const mutations = {

    [types.LOGIN]: (state, data) => {
        state.user = data.user;
        state.token = data.token;
    },

    [types.LOGOUT]: (state) => {
        state.user = {};
        state.token = null;
        localStorage.removeItem('token');
        localStorage.removeItem('token_user');
    },

    [types.TITLE]: (state, data) => {
        console.log(data)
        state.todos = data;
    },
}

export default {
    state,
    getters,
    actions,
    mutations
}
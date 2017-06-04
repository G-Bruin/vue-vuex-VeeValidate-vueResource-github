/**
 * Created by bruin on 2017/6/4.
 */

const state =  {
    total : 0,
    cart_all: {},
    money: 0
};

const getters = {
    total: state => state.total,
    cart_all: state => state.cart_all,
    money: state => state.money,
};
/**
 * Created by Administrator on 2017/5/15.
 */
import * as types from './types';

export function logout(store){
    store.commit(types.LOGOUT);
}


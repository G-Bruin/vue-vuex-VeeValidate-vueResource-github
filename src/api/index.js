/**
 * Created by Administrator on 2017/5/25.
 */
import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

Vue.http.interceptors.push((request, next) => {
    request.headers.set('X-CSRF-TOKEN', 'TOKEN');
    next((response) => {
        if(!response.ok){
            if(response.data.message){
                alert(response.data.message);
                return false;
            }else{
                alert(response.statusText);
                return false;
            }
        }
    })
});

const apiRequest = function (options) {
    return  Vue.http(options);
}

export default apiRequest ;
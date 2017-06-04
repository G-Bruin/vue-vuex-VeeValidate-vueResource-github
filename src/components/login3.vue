<template xmlns:v-on="http://www.w3.org/1999/xhtml">
    <div>
        <p>phone: <input type="text" v-model="phone" /></p>
        <p>password: <input type="text" v-model="password" /></p>
        <div>
            <input v-validate="'required|email'" :class="{'input': false, 'danger':  (active && errors.has('email'))  }" name="email" v-model="email" type="text" placeholder="Email">
            <p>email is: {{ email }}</p>
            <p>active is: {{ active }}</p>
            <p>todos is: {{ todos }}</p>
            <p>user is: {{ user }}</p>
            <p>token is: {{ token }}</p>
            <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
        </div>
        <input type="submit" value="Submit" v-on:click="counter()"/>
        <button v-on:click="loginSet()" v-show="!token">登录</button>
        <button v-on:click="logout()" v-show="token">退出</button>
    </div>
</template>

<style>
.danger{
   background-color : red;
}
</style>


<script>
//    import apiRequest from '../api/index.js';
    import { mapActions, mapGetters} from 'vuex';

    export default {
        data () {
            return {
                phone: '',
                password: '',
                email: '',
                active: false,
            }
        },
        computed: {
            ...mapGetters({
                todos: 'todos',
                user: 'user',
                token: 'token',
            }),
            total () {
                return 0;
            }
          },
        watch:{
            'email':function(val) {
                $.trim(val) ? this.active = true : this.active = false;
            }
        },
        methods: {
            ...mapActions(['loginSet', 'logout']),  //mapAction 集成分发 Action

            counter: function(){                    //自带方法处理
                let params = {'phone' : this.phone, 'password' : this.password};
                this.$store.dispatch('title')
            },

        }
    }
</script>
<!--apiRequest({-->
<!--'url':'/v1/order/createOrder',-->
<!--'method':'POST',-->
<!--'params': params-->
<!--}).then( (response) => {-->
<!--console.log(response);-->
<!--});-->

<!--computed: {-->
<!--todos () {-->
<!--return this.$store.state.todos-->
<!--},-->
<!--user () {-->
<!--return this.$store.state.user-->
<!--},-->
<!--token () {-->
<!--return this.$store.state.token-->
<!--},-->
<!--},-->

<!--computed: mapState({-->
<!--todos: state => state.todos,-->
<!--user: state => state.user,-->
<!--token: state => state.token,-->
<!--}),-->
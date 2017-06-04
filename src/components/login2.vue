<template>
    <div>
        <div>
            <input v-validate="'required|email'" :class="{'input': false, 'is-danger': errors.has('email') }" name="email" v-model="email" type="text" placeholder="Email">
            <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
        </div>
        <br>
        <!--<div>-->
            <!--<input v-validate="'required|regex: ^([0-9]+)$'" :class="{'input': false, 'is-danger': errors.has('phone') }" name="phone" type="text" placeholder="phone">-->
            <!--<span v-show="errors.has('phone')" class="help is-danger">{{ errors.first('phone') }}</span>-->
        <!--</div>-->
        <!--<br>-->
        <!--<div>-->
            <!--<input v-validate="'required|alpha_dash'"  type="text" name="username" data-vv-as="用户名" placeholder="username"/>-->
            <!--<span v-show="errors.has('username')" class="help is-danger">{{ errors.first('username') }}</span>-->
        <!--</div>-->

        <!--<div>-->
            <!--<input type="password"  v-validate="'required|regex: ^([0-9]+)$'" name="password" data-vv-as=" " placeholder="password"/>-->
            <!--<span v-show="errors.has('password')" class="help is-danger">{{ errors.first('password') }}</span>-->
            <!--<input type="password" v-validate="'confirmed:password'" name="configPassword"  data-vv-as="两次密码输入不一致" placeholder="configPassword"/>-->
            <!--<span v-show="errors.has('configPassword')" class="help is-danger">{{ errors.first('configPassword') }}</span>-->
        <!--</div>-->
        <p>todos is: {{ todos }}</p>
        <p>user is: {{ user }}</p>
    </div>
</template>

<style>
    .is-danger{
         background-color:#d0e4fe;
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
                email:'',
                emailActive : this.email ? true : false,
            }
        },
        computed: {
            ...mapGetters({
                todos: 'todos',
                user: 'user'
            }),
        },
        methods: {
            login: function(){
                let params = {'phone' : this.phone, 'password' : this.password};
//                apiRequest({
//                    'url':'/v1/order/createOrder',
//                    'method':'POST',
//                    'params': params
//                }).then( (response) => {
//                     console.log(response);
//                });
            }
        }
    }
</script>
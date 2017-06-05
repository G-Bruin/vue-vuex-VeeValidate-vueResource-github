<template>
    <div>
        <table class="table table-hover">
            <thead>
            <tr>
                <th>名称</th>
                <th>价格</th>
                <th>数量</th>
            </tr>
            </thead>
            <tbody>

            <tr v-for="p in products">
                <td>{{ p.title }}</td>
                <td>{{ p.price }}</td>
                <td>{{ p.quantity }}</td>
            </tr>
            </tbody>
            <p>Total: {{ total }}</p>
        </table>
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

            }
        },
        computed: {
            ...mapGetters({
                products: 'cartProducts',
            }),
            total () {
              return this.products.reduce((total, p) => {
                return total + p.price * p.quantity
              }, 0)

            }
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
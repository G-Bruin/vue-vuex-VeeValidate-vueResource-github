<template>
    <div>
        <table class="table table-hover">
            <caption>购物车数据</caption>
            <thead>
            <tr>
                <th>名称</th>
                <th>价格</th>
                <th>数量</th>
            </tr>
            </thead>
            <tbody>

            <tr v-for="p in products"  >
                <td>{{ p.title }}</td>
                <td>{{ p.price }}</td>
                <td>{{ p.quantity }}</td>
                <button @click="removeFromCart(p)" class="btn btn-warning">Remove to cart</button>
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
            removeFromCart: function(p){
                if(p.quantity > 0){
                    this.$store.dispatch('removeFromCart', p);   //删除购物车
                    this.$store.dispatch('add_to_production', p);  //将商品重新添加到库
                }
            }
        }
    }
</script>
<template>
    <div>
        <div class="navbar navbar-default navbar-static-top" role="navigation">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span class="sr-only">Toggle navigation</span>
                    </button>
                    <a class="navbar-brand" href="#">Demo</a>
                </div>
                <div class="navbar-collapse collapse">
                    <ul class="nav navbar-nav">
                        <li class="active"><router-link to="/">Home</router-link></li>
                        <li><router-link to="/cart">Cart<span class="navbar-new">{{getTotal}}</span></router-link></li>
                        <li v-show="!token" ><router-link to="/login">Login</router-link></li>
                        <li class="dropdown" v-show="token">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">{{ user.name }}<b class="caret"></b></a>
                            <ul class="dropdown-menu">
                                <li><a href="javascript:;" v-on:click="logout()" >Logout</a></li>
                                <li><router-link  to="/info" >Info</router-link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="container">
            <table class="table table-hover">
                <caption id="aaaa">商品数据</caption>

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
                    <td>{{ p.inventory }}</td>

                    <button :disabled="!p.inventory"
                            @click="addToCart(p)" class="btn btn-info">Add to cart</button>
                </tr>
                </tbody>
            </table>
            <router-view></router-view>
        </div>
    </div>

</template>


<script>
    import { mapActions, mapGetters} from 'vuex';

    export default {
        data () {
            return {
            }
        },
        computed: {
            ...mapGetters({
                user: 'user',
                token: 'token',
                getTotal: 'getTotal',
                products: 'allProducts'
            }),

            approval () {
                this.isApproval = false
            }

          },
        watch:{

        },
        methods: {
//            ...mapActions(['logout']),  //mapAction 集成分发 Action
            logout: function(){
                this.$store.commit('logout');
                this.$router.push({ name: 'login' });
            },
            addToCart: function (p){
                if(!this.token){
                    this.$router.push({ name: 'login' });
                    return;
                }
                this.$store.dispatch('addToCart', p);
            }

        },
        created () {
            this.$store.dispatch('getAllProducts');
        }
    }
</script>


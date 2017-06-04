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
                        <li><router-link to="/cart">Cart<span class="navbar-new">2</span></router-link></li>
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
            }),
          },
        watch:{

        },
        methods: {
//            ...mapActions(['logout']),  //mapAction 集成分发 Action
            logout: function(){
                this.$store.dispatch('logout');
                this.$router.push({ name: 'login' });
            }
        }
    }
</script>


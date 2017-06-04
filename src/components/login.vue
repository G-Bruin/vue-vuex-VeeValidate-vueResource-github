<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <h4>Login</h4>
                <div :class="{'form-group': true, 'has-success':  (name && !errors.has('name')), 'has-error':  errors.has('name') }">
                    <label class="control-label" v-show="errors.has('name')" >{{ errors.first('name') }}</label>
                    <input v-validate="'required|alpha'" :class="{'form-control': true}"  placeholder="please enter name " type="text" class="form-control"  name="name" v-model="name">
                </div>
                <div :class="{'form-group': true, 'has-success':  (age && !errors.has('age')), 'has-error':  errors.has('age') }">
                    <label class="control-label" v-show="errors.has('age')"  >{{ errors.first('age') }}</label>
                    <input  v-validate="'required|numeric'" type="text" :class="{'form-control': true}" name="age" v-model="age" placeholder="please enter age ">
                </div>

                <div :class="{'form-group': true, 'has-success':  (money && !errors.has('money')), 'has-error':  errors.has('money') }">
                    <label class="control-label" v-show="errors.has('money')"  >{{ errors.first('money') }}</label>
                    <input  v-validate="'required|numeric'" type="text" :class="{'form-control': true}" name="money" v-model="money" placeholder="please enter money ">
                </div>
                <button type="submit"  class="btn" :class="[ (money && name && age) ? 'btn-primary' : 'btn-default' ]"  v-on:click="submit">Submit</button>
            </div>
        </div><!-- /.row -->
    </div>
</template>

<script>
    import apiRequest from '../api/index.js';
    import { mapActions, mapGetters} from 'vuex';

    export default {
        data () {
            return {
                name: '',
                age: '',
                money: '',
                active: false,
            }
        },
        watch:{
            'name':function(val) {
                $.trim(val) ? this.active = true : this.active = false;
            }
        },
        methods: {
            //...mapActions(['loginSet']),  //mapAction 集成分发 Action

            submit: function(event){
                let _this = event.currentTarget;
                if($(_this).hasClass('btn-primary')){
                    let params = {'name' : this.name, 'age' : this.age, 'money' : this.money};
                    this.$store.dispatch('loginSet', params);
                    this.$router.push({ name: 'info' });
                }else{
                    console.log('aaaaa');
                }
            }
        }
    }
</script>

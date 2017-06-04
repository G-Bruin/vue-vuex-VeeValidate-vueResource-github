<template>
        <div class="col-md-12">
            name: <p class="text-center">{{user.name}}</p>
            age: <p class="text-center">{{user.age}}</p>
            money: <p class="text-center">{{user.money}}</p>
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
            }),
        },
    }
</script>

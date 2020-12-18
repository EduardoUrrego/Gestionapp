<template>
    <div>
        <h1>Usuarios</h1>
        <router-link to="/usuario/crear">Crear Usuario</router-link>
        <div id="listaUsuarios">
            <item-user v-for="(user,k) in listUsers" v-bind:key="k" :lastname="user.last_name" :name="user.name" :username="user.username">

            </item-user>
          
        </div>
    </div>
</template>
<script>
import axios from "axios";
import ItemUser from '../ItemUser.vue'

export default {
    name: "usuarioListar",
    components: {
        ItemUser
    },
    methods: {
        count(){
            return ++counter
        },
        getUsers() {
            const url = "https://ancient-waters-19804.herokuapp.com/usuario/todos/";
            this.axiosIns.get(url).then((res) => {
                const datApi = res.data;
                this.listUsers = res.data
            })
            .catch((err) => {
                return users
            })
        }
    },
    data(){
        return {
            listUsers: [],
            counter: 0,
            axiosIns: axios.create({
                headers: {
                    "Access-Control-Allow-Origin": "*",
                },
            })
        }
    },
    mounted(){
        this.getUsers();
    }
};
</script>

<template>
    <div>
        <h2>Modulo Usuario - Eliminar</h2>
        <form action="">
            <input id="username" type="text" />
            <button @click="eliminarUsuario">Eliminar Usuario</button>
            <span id="res"></span>
        </form>
        <router-link to="/">Volver</router-link>
    </div>
</template>
<script>
import axios from "axios";
const axiosIns = axios.create({
    headers: {
        "Access-Control-Allow-Origin": "*",
    },
});
export default {
    name: "usuarioEliminar",
    methods: {
        async eliminarUsuario() {
            console.log("entro en funcion");
            const usuario = username.value;
            console.log(usuario);
            let url = `https://ancient-waters-19804.herokuapp.com/usuario/eliminar/${usuario}`;
            axiosIns.delete(url).then((res) => {
                console.log(res);
            });
        },
    },
};
</script>
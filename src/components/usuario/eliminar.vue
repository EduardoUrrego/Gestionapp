<template>
    <div>
        <h2>Modulo Usuario - Eliminar</h2>
        <form action="">
            <input id="username" type="text" />
            <button @click="eliminarUsuario">Eliminar Usuario</button>
            <span id="res"></span>
        </form>
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
            let url = `http://127.0.0.1:8000/usuario/eliminar/${usuario}`;
            axiosIns.delete(url).then((res) => {
                console.log(res);
            });
        },
    },
};
</script>
<template>
    <div class="contendor-mod">
        <h2>Modulo Usuario - Eliminar</h2>
        <form action="">
            <div class="campo-input">
              <input id="username" type="text" v-model="codigo"/>
              <button @click="eliminarUsuario">Eliminar Usuario</button>
              <span id="res"></span>
            </div>  
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
    props: ["username"],
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

<style scoped>
* {
/* outline: 1px solid #7a7adb; */
}
.contendor-mod {
    margin: 50px auto;
    width: 820px;
    padding: 20px;
    border-radius: 4px;
    background-color: #fafaff;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
}
.campo-input {
    margin: 10px 0;
}
.campo-input input {
    width: 100%;
    border-radius: 4px;
}
.contendor-mod label {
    display: block;
    /* width: 100%; */
    /* color: red; */
    /* background-color: #191975; */
}
</style>

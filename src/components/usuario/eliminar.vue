<template>
    <div class="contendor-mod">
        <div class="mod__header">
            <span class="mod__title">Modulo Usuario - Eliminar</span>
        </div>
        <div class="mod__content">
            <div class="campo-input">
                <label for="">username</label>
                <input id="username" type="text" v-model="username" />
            </div>
            <div class="campo-input flow-between">
                <router-link to="/usuario">Volver</router-link>
                <button class="btn" @click="eliminarUsuario">
                    Eliminar Usuario
                </button>
            </div>
            <div class="campo-input">
                <span id="res"></span>
            </div>
        </div>
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

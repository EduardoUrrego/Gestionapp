<template>
    <div class="contendor-mod">
        <h1>modulo crear usuario</h1>
        <form name="crear_usaurio" action="">
            <div class="campo-input">
                <label for=""> Nombre </label>
                <input id="nombre" type="text" />
            </div>
            <div class="campo-input">
                <label for=""> Apellido </label>
                <input id="apellido" type="text" />
            </div>
            <div class="campo-input">
                <label for=""> Usuario </label>
                <input id="usuario" type="text" />
            </div>
            <div class="campo-input">
                <label for=""> Correo Electronico </label>
                <input id="email" type="email" required />
            </div>
            <div class="campo-input">
                <label for=""> Contraseña </label>
                <input id="password" type="password" />
            </div>
            <div class="campo-input flow-between">
                <router-link to="/usuario">Volver</router-link>
                <button class="btn" @click="crearUsuario">Crear Usuario</button>
            </div>
        </form>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "usuarioCrear",
    methods: {
        crearUsuario() {
            const usuarioNuevo = {
                username: usuario.value,
                password: password.value,
                name: nombre.value,
                last_name: apellido.value,
                email: email.value,
            };
            let url =
                "https://ancient-waters-19804.herokuapp.com/usuario/crear";
            axios.post(url, usuarioNuevo).then((res) => {
                console.log(res.data);
            });
        },
    },
};
</script>


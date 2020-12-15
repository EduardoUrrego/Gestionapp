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
            <div class="campo-input">
                <input
                    @click="crearUsuario"
                    form="crear_usaurio"
                    type="button"
                    value="Crear Usuario"
                />
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
            let url = "http://127.0.0.1:8000/usuario/crear";
            axios.post(url, usuarioNuevo).then((res) => {
                console.log(res.data);
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
    width: 350px;
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
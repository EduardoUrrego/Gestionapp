<template>
    <div class="contendor-mod">
        <div class="mod__header">
            <span class="mod__title"> Modulo Usuario - Modificar </span>
        </div>
        <div class="mod__content">
            <div class="campo-input">
                <label for=""> Username: </label>
                <input id="username" type="text" />
            </div>
            <div class="campo-input">
                <label for=""> Contraseña: </label>
                <input type="password" id="password" />
            </div>
            <div class="campo-input">
                <label for=""> Nombre: </label>
                <input id="nombre" type="text" />
            </div>
            <div class="campo-input">
                <label for=""> Apellido: </label>
                <input id="lastname" type="text" />
            </div>
            <div class="campo-input">
                <label for=""> Correo Electronico: </label>
                <input id="email" type="email" />
            </div>
            <div class="campo-input flow-between">
                <router-link to="/usuario">Volver</router-link>
                <button class="btn" @click="modificarUsuario">
                    Modificar Usuario
                </button>
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
    name: "usuarioModificar",
    created: function () {
        this.consultarUsuario();
    },
    methods: {
        async consultarUsuario() {
            let usernameConsulta = this.$route.params.username;
            //let url = `http://127.0.0.1:8000/usuario/${usernameConsulta}`;
            let url = `https://ancient-waters-19804.herokuapp.com/usuario/${usernameConsulta}`;
            if (usernameConsulta != "") {
                let res = await axiosIns.get(url);
                let data = res.data;
                // let res = await fetch(url);
                // let data = await res.json();
                if (data) {
                    username.value = data.username;
                    email.value = data.email;
                    lastname.value = data.last_name;
                    nombre.value = data.name;
                    password.value = data.password;
                } else {
                    alert(
                        `El ${usernameConsulta} no existe en la base de datos`
                    );
                }
            } else {
                alert(
                    "Debe indicar un username a consultar antes de modificar"
                );
            }
        },
        async modificarUsuario() {
            let dataUpdate = {
                username: username.value,
                email: email.value,
                last_name: lastname.value,
                name: nombre.value,
                password: password.value,
            };

            // let url = `http://127.0.0.1:8000/usuario/actualizar`;
            let url = `https://ancient-waters-19804.herokuapp.com/usuario/actualizar`;

            axiosIns.put(url, dataUpdate).then((res) => {
                let status = res.status;
                let statusText = res.statusText;
                if (status == 200 && statusText == "OK") {
                    alert("Usuario modificado");
                } else {
                    alert("Se ha presentado un error en la modificacion");
                }
            });
        },
    },
};
</script>

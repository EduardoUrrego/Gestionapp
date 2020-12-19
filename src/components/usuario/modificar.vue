<template>
    <div class="container-mod">
        <form name="usuario_consultar">
            <div class="">
                <input id="username_consulta" type="text" />
                <input
                    @click="consultarUsuario"
                    type="button"
                    value="Consultar Usuario"
                />
            </div>
        </form>
        <form name="usuario_modificar">
            <div class="">
                <label for="">
                    Username:
                    <input id="username" type="text" />
                </label>
            </div>
            <div class="">
                <label for="">
                    Contraseña:
                    <input id="password" type="text" />
                </label>
            </div>
            <div class="">
                <label for="">
                    Nombre:
                    <input id="nombre" type="text" />
                </label>
            </div>
            <div class="">
                <label for="">
                    Apellido:
                    <input id="lastname" type="text" />
                </label>
            </div>
            <div class="">
                <label for="">
                    Correo Electronico:
                    <input id="email" type="text" />
                </label>
            </div>
            <div>
                <input
                    @click="modificarUsuario"
                    type="button"
                    value="Modificar"
                />
                <input @click="crearUsuario" type="button" value="crear" />
                <input @click="testpost" type="button" value="test" />
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
    name: "usuarioModificar",
    methods: {
        async consultarUsuario() {
            let usernameConsulta = username_consulta.value;
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

            console.log(dataUpdate);

            // let url = `http://127.0.0.1:8000/usuario/actualizar`;
            let url = `https://ancient-waters-19804.herokuapp.com/usuario/actualizar`;

            axiosIns.put(url, dataUpdate).then((res) => {
                console.log(res);
            });

            // fetch(url, {
            //     method: "PUT",
            //     cors: "no-cors",
            //     body: JSON.stringify(dataUpdate),
            // })
            //     .then((res) => {
            //         return res.json();
            //     })
            //     .then((data) => {
            //         console.log(data);
            //     });
        },
        async crearUsuario() {
            let dataUpdate = {
                username: username.value,
                email: email.value,
                last_name: lastname.value,
                name: nombre.value,
                password: password.value,
            };

            let url = `http://127.0.0.1:8000/usuario/crear`;
            // let url = `https://ancient-waters-19804.herokuapp.com/usuario/crear`;
            // axiosIns.put(url, dataUpdate).then((res) => {
            //     console.log(res);
            // });

            fetch(url, {
                method: "POST",
                body: JSON.stringify(dataUpdate),
            })
                .then((res) => {
                    console.log(res);
                    return res.json();
                })
                .then((data) => {
                    console.log(data);
                });
        },
        testpost() {
            let url = `http://127.0.0.1:8000/testpost`;
            let urlp = `http://127.0.0.1:8000/testput`;
            axiosIns.post(url).then((res) => {
                console.log(res.data);
            });
            axiosIns.put(urlp).then((res) => {
                console.log(res.data);
            });
        },
    },
};
</script>

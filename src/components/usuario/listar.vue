<template>
    <div>
        <h1>Usuarios</h1>
        <div id="listaUsuarios"></div>
    </div>
</template>
<script>
import axios from "axios";

const axiosIns = axios.create({
    headers: {
        "Access-Control-Allow-Origin": "*",
    },
});
function getUsers() {
        const url = "https://ancient-waters-19804.herokuapp.com/usuario/todos/";
        axiosIns.get(url).then((res) => {
            const datApi = res.data;
            let htmltext = "";
                for (let user in datApi) {
                    console.log(datApi[user]);

                    htmltext += `<div class="campo-usuario">            
                        <span class="nombre-usuario">${datApi[user].name} ${datApi[user].last_name}</span>
                        <div class="options">
                    <button>editar</button><button>eliminar</button>
                    </div>
                    </div>`;

                    listaUsuarios.innerHTML = htmltext;
                }
        })
        .catch((err) => {
            return users
        })
}
getUsers();
export default {
    name: "usuarioListar",
};
</script>

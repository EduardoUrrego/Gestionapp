<template>
    <div>
        <h1>Usuarios</h1>
        <router-link to="/usuario/crear">Crear Usuario</router-link>
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
                        <span class="nombre-usuario">${datApi[user].name} ${datApi[user].last_name} (${datApi[user].username})</span>
                        <div class="options">
                        
                    <a href="#/usuario/modificar"><button>Editar</button></a>
                    <a href="#/usuario/eliminar"><button>Eliminar</button></a>
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
getUsers();
export default {
    name: "usuarioListar",
};
</script>

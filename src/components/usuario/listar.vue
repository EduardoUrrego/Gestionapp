<template>
    <div>
        <button @click="listarUsuarios">Listar</button>
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
export default {
    name: "usuarioListar",
    methods: {
        listarUsuarios() {
            const url = "http://127.0.0.1:8000/usuario/todos/";
            axiosIns.get(url).then((res) => {
                let data = res.data;
                let htmltext = "";
                for (let user in data) {
                    console.log(data[user]);

                    htmltext += `<div class="campo-usuario">            
                        <span class="nombre-usuario">${data[user].name} ${data[user].last_name}</span>
                        <div class="options">
                    <button>editar</button><button>eliminar</button>
                    </div>
                    </div>`;

                    listaUsuarios.innerHTML = htmltext;
                }
            });
        },
    },
};
</script>
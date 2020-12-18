<template>
    <div class="campo-usuario">
        <div class="cont-nombre">
            <div class="avatar"><img src="" alt="" /></div>
            <span class="nombre-usuario"> {{ buildName }} </span>
        </div>
        <div class="options">
            <a href="#/usuario/modificar"><button>Editar</button></a>
            <a href="#/usuario/eliminar"><button>Eliminar</button></a>
        </div>
    </div>
</template>


<script>
export default {
    name: "ItemUser",
    props: ["name", "lastname", "username"],
    computed: {
        buildName() {
            return this.name + " " + this.lastname + " - " + this.username;
        },
    },
};
</script>
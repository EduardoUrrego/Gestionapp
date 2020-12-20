<template>
    <div class="campo-usuario">
        <div class="cont-nombre">
            <div class="avatar"><img src="" alt="" /></div>
            <span class="nombre-usuario"> {{ buildName }} </span>
        </div>
        <div class="options">
            <router-link :to="'/usuario/modificar/' + username" >
                <button>Editar</button>
            </router-link>
            <router-link :to="'/usuario/eliminar/' + username" >
                <button>Eliminar</button>
            </router-link>
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
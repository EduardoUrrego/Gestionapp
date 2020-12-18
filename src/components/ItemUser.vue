<template>
    <div class="campo-usuario">            
        <span class="nombre-usuario"> {{ buildName }} </span>
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
        buildName(){
            return this.name + this.lastname + this.username;
        }
    }
}
</script>
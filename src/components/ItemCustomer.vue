<template>
    <div class="campo-cliente">
        <div class="cont-nombre">
            <div class="avatar"><img src="" alt="" /></div>
            <span class="nombre-cliente"> {{ buildName }} </span>
        </div>
        <div class="options">
            <router-link :to="'/cliente/modificar/' + codigo" >
                <button>Editar</button>
            </router-link>
            <router-link :to="'/cliente/eliminar/' + codigo" >
                <button>Eliminar</button>
            </router-link>
        </div>
    </div>
</template>


<script>
export default {
    name: "ItemCustomer",
    props: ["name", "lastname", "codigo"],
    computed: {
        buildName() {
            return this.name + " " + this.lastname + " - " + this.codigo;
        },
    },
};
</script>
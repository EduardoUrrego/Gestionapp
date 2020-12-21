<template>
    <div class="contendor-mod">
        <div class="mod__header">
            <span class="mod__title">Inicio GestionApp</span>
        </div>
        <div class="mod__content">
            <div class="opciones-inicio">
                <div class="opcion-inicio">
                    <span class="opcion-titulo">Usuarios</span>
                <router-link to="/usuario">
                    <div class="opcion-imagen"></div>
                </router-link>
                </div>
                
                <div class="opcion-inicio">
                    <span class="opcion-titulo">Clientes</span>
                <router-link to="/cliente">
                    <div class="opcion-imagen"></div>
                </router-link>
                </div>

            </div>

            
            </div>
            
        </div>
    
</template>

<script>


export default {
    name: "Home",
    

    
};
</script>


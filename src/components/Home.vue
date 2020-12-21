<template>
    <div class="contendor-mod">
        <div class="mod__header">
            <span class="mod__title">Inicio GestionApp</span>
        </div>
        <div class="mod__content">
            <div class="opciones-inicio">
                <router-link to="/usuario">
                <div class="opcion-inicio">
                    <span class="opcion-titulo">Usuarios</span>
                    <div class="opcion-imagen imgusuario"></div>
                </div>
                </router-link>
                
                <router-link to="/cliente">
                <div class="opcion-inicio">
                    <span class="opcion-titulo">Clientes</span>
                    <div class="opcion-imagen imgcliente"></div>
                </div>
                </router-link>

            </div>

            
            </div>
            
        </div>
    
</template>

<script>


export default {
    name: "Home",
    

    
};
</script>


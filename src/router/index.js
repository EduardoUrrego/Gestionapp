import Vue from "vue";
import Router from "vue-router";

import usuarioModificar from "@/components/usuario/modificar";
import usuarioCrear from "@/components/usuario/crear";
import usuarioEliminar from "@/components/usuario/eliminar";
import usuarioListar from "@/components/usuario/listar";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/usuario/modificar/:username",
      name: "usuarioModificar",
      props: true,
      component: usuarioModificar
    },
    {
      path: "/usuario/eliminar/:username",
      name: "usuarioEliminar",
      props: true,
      component: usuarioEliminar
    },
    {
      path: "/usuario/crear",
      name: "usuarioCrear",
      component: usuarioCrear
    },
    {
      path: "/",
      name: "usuarioListar",
      component: usuarioListar
    }
  ]
});

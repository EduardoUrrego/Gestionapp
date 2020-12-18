import Vue from "vue";
import Router from "vue-router";

import HelloWorld from "@/components/HelloWorld";
import usuarioModificar from "@/components/usuario/modificar";
import usuarioCrear from "@/components/usuario/crear";
import usuarioEliminar from "@/components/usuario/eliminar";
import usuarioListar from "@/components/usuario/listar";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/usuario/listar",
      name: "usuarioListar",
      component: usuarioListar
    },
    {
      path: "/usuario/modificar",
      name: "usuarioModificar",
      component: usuarioModificar
    },
    {
      path: "/usuario/eliminar",
      name: "usuarioEliminar",
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

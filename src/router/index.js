import Vue from "vue";
import Router from "vue-router";

import usuarioModificar from "@/components/usuario/modificar";
import usuarioCrear from "@/components/usuario/crear";
import usuarioEliminar from "@/components/usuario/eliminar";
import usuarioListar from "@/components/usuario/listar";

import clienteCrear from "@/components/cliente/crear";
import clienteModificar from "@/components/cliente/modificar";

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
      path: "/usuario",
      name: "usuarioListar",
      component: usuarioListar
    },
    {
      path: "/cliente/crear",
      name: "clienteCrear",
      component: clienteCrear
    },
    {
      path: "/cliente/modificar",
      name: "clienteModificar",
      component: clienteModificar
    }
  ]
});

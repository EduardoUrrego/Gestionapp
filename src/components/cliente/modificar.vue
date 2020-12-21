<template>
    <div class="contendor-mod">
        <div class="mod__header">
            <span class="mod__title">Modulo Cliente - Modificar</span>
        </div>
        <div class="mod__content">
            <form name="crear_cliente" action="">
                <div class="campo-input">
                    <label for=""> Codigo </label>
                    <input v-model="codigo" type="text" />
                </div>
                <div class="campo-input">
                    <label for=""> Documento </label>
                    <input v-model="documento" type="text" />
                </div>
                <div class="campo-input-x2">
                    <div class="campo-input">
                        <label for=""> Nombre </label>
                        <input v-model="name" type="text" />
                    </div>
                    <div class="campo-input">
                        <label for=""> Apellido </label>
                        <input v-model="last_name" type="text" />
                    </div>
                </div>
                <div class="campo-input">
                    <label for=""> Correo Electronico </label>
                    <input v-model="email" type="email" />
                </div>
                <div class="campo-input">
                    <label for="">Fecha nacimiento</label>
                    <input type="date" v-model="fecha" />
                </div>
                <div class="campo-input">
                    <label for="">Direccion</label>
                    <input type="text" v-model="direccion" />
                </div>
                <div class="campo-input-x2">
                    <div class="campo-input">
                        <label for="">Telefono</label>
                        <input type="text" v-model="telefono" />
                    </div>
                    <div class="campo-input">
                        <label for="">Celular</label>
                        <input type="text" v-model="celular" />
                    </div>
                </div>
                <div class="campo-input">
                    <label for="">Genero</label>
                    <div class="campo-input-check">
                        <input type="radio" v-model="genero" value="memenino" />
                        <label for="femenino">Femenino</label>
                    </div>
                    <div class="campo-input-check">
                        <input
                            type="radio"
                            v-model="genero"
                            value="masculino"
                        />
                        <label for="masculino">Maculino</label>
                    </div>
                    <div class="campo-input-check">
                        <input type="radio" v-model="genero" value="otro" />
                        <label for="otro">Otro</label>
                    </div>
                </div>

                <div class="campo-input flow-between">
                    <router-link to="/cliente">Volver</router-link>
                    <button class="btn" @click="modificarCliente">
                        Modificar Cliente
                    </button>
                </div>
            </form>
        </div>
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
    name: "clienteModificar",
    data() {
        return {
            codigo_consulta: "",
            codigo: "",
            documento: "",
            name: "",
            last_name: "",
            email: "",
            fecha: "",
            direccion: "",
            telefono: "",
            celular: "",
            genero: "",
        };
    },
     created: function () {
         this.consultarCliente();
    },
    methods: {
        async consultarCliente() {
           // let codigo = this.codigo_consulta;
             let codigo = this.$route.params.codigo;
            // let url = `http://127.0.0.1:8000/customer/${codigo}`;
             let url = `https://ancient-waters-19804.herokuapp.com/customer/${codigo}`;
            if (codigo != "") {
                let res = await axiosIns.get(url);
                let data = res.data;
                // let res = await fetch(url);
                // let data = await res.json();
                if (data) {
                    this.codigo = data.codigo;
                    this.documento = data.documento;
                    this.name = data.name;
                    this.last_name = data.last_name;
                    this.email = data.email;
                    this.fecha = data.fecha;
                    this.direccion = data.direccion;
                    this.telefono = data.telefono;
                    this.celular = data.celular;
                    this.genero = data.genero;
                } else {
                    alert(`El ${codigo} no existe en la base de datos`);
                }
            } else {
                alert("Debe indicar un codigo a consultar antes de modificar");
            }
        },
        async modificarCliente() {
            let dataUpdate = {
                codigo: this.codigo,
                documento: this.documento,
                name: this.name,
                last_name: this.last_name,
                email: this.email,
                fecha: this.fecha,
                direccion: this.direccion,
                telefono: this.telefono,
                celular: this.celular,
                genero: this.genero,
            };

            console.log(dataUpdate);

           // let url = `http://127.0.0.1:8000/customer/actualizar`;
            let url = `https://ancient-waters-19804.herokuapp.com/usuario/actualizar`;

            axiosIns.put(url, dataUpdate).then((res) => {
                console.log(res);
            });
        },
    },
};
</script>

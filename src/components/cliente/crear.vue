<template>
    <div class="contendor-mod">
        <div class="mod__header">
            <span class="mod__title">Modulo Cliente - Crear</span>
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
                        <input
                            id="femenino"
                            type="radio"
                            v-model="genero"
                            value="femenino"
                        />
                        <label for="femenino">Femenino</label>
                    </div>
                    <div class="campo-input-check">
                        <input
                            id="masculino"
                            type="radio"
                            v-model="genero"
                            value="masculino"
                        />
                        <label for="masculino">Maculino</label>
                    </div>
                    <div class="campo-input-check">
                        <input
                            id="otro"
                            type="radio"
                            v-model="genero"
                            value="otro"
                        />
                        <label for="otro">Otro</label>
                    </div>
                </div>
                <div class="campo-input flow-between">
                    <router-link to="/cliente">Volver</router-link>
                    <button
                        class="btn"
                        @click="crearCliente"
                        form="crear_cliente"
                        value="Crear Cliente"
                    >
                        Crear Cliente
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "clienteCrear",
    data() {
        return {
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
    methods: {
        crearCliente() {
            const clienteNuevo = {
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
            // // let url = "https://ancient-waters-19804.herokuapp.com/customer/crear";
            let url = "http://127.0.0.1:8000/customer/crear";
            axios.post(url, clienteNuevo).then((res) => {
                console.log(res.data);
            });
            // console.log(clienteNuevo);
        },
    },
};
</script>




<template>
    <div class="mod-listar-cliente">
        <div class="mod-header">
            <h1 class="mod-title">Clientes</h1>
            <router-link to="/cliente/crear"
                ><button class="link-crear">Crear Cliente</button></router-link
            >

        </div>
                
       
        <div id="listaCliente">
            <item-customer

                v-for="(customer, k) in listCustomers"  


                v-bind:key="k"
                :lastname="customer.last_name"
                :name="customer.name"
                :codigo="customer.codigo"
            >
            </item-customer>
        </div>
    </div>
    

    
    
</template>
<script>
import axios from "axios";

import ItemCustomer from '../ItemCustomer';

export default {
    name: "clienteListar",
    components: {

        
        ItemCustomer

    },
    methods: {
        count() {
            return ++counter;
        },
        getCustomers(){
            // const url =
                // "https://ancient-waters-19804.herokuapp.com/customer/todos/";
                const url="http://127.0.0.1:8000/customer/todos/";


            this.axiosIns
                .get(url)
                .then((res) => {
                    this.listCustomers = res.data;
                    
                })
                .catch((err) => {
                    return costumers;
                });
        },
    },
    data() {
        return {
            listCustomers: [],
            counter: 0,
            axiosIns: axios.create({
                headers: {
                    "Access-Control-Allow-Origin": "*",
                },
            }),
        };
    },
    mounted() {
        this.getCustomers();
    },
};
</script>

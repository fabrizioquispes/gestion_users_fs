<template>
    <div>
        <p>{{ message }}</p>
        <input type="text" v-model="message">
        <button @click="mostrarDatosApi">Buscar Datos API</button>
        <form class="form">
            <h2>Agregar Nuevo Dato</h2>
            <input type="hidden" name="id_user" id="" v-model="newData.id_user" placeholder="Ingrese su id">
            <input type="text" name="name" id="" v-model="newData.name" placeholder="Ingrese su nombre">
            <input type="text" name="email" id="" v-model="newData.email" placeholder="Ingrese su email">
            <input type="text" name="password" id="" v-model="newData.password" placeholder="Ingrese su contraseña">
            <input type="text" name="created_at" id="" v-model="newData.created_at"
                placeholder="Ingrese su fecha de creación">
        </form>
        <button @click="agregarDatosApis">Agregar Datos API</button>
        <button @click="editarDatosApis(this.newData.id_user)">Editar Datos API</button>
        <ul>
            <li v-for="item in apiData" :key="item.id">
                {{ item.name }}
                <button @click="pasarDatosInputs(item)">Editar</button>
                <button @click="eliminarDatosApis(item)">Eliminar</button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: "Hola Mensaje",
            apiData: [], //Almacenamos la api
            newData: {
                id_user: "",
                name: "",
                username: "",
                email: "",
                password: "",
                created_at: ""
            }
        }
    },

    methods: {

        async mostrarDatosApi() {
            await fetch("http://localhost:3000/api/users")
                .then((res) => res.json())
                .then((data) => {
                    this.apiData = data.data;
                })
        },

        async agregarDatosApis() {
            const response = await fetch("http://localhost:3000/api/users/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(this.newData)
            })
                .then((res) => res.json())
                .then((data) => {
                    this.newData = data;
                })
            console.log(response);
        },

        pasarDatosInputs(usuario) {
            this.newData.id_user = usuario.id_user;
            this.newData.name = usuario.name;
            this.newData.username = usuario.username;
            this.newData.email = usuario.email;
            this.newData.password = usuario.password;
            this.newData.created_at = usuario.created_at;
        },

        async editarDatosApis() {
            const response = await fetch(`http://localhost:3000/api/users/update/${this.newData.id_user}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(this.newData) // Envía el objeto usuario en lugar de this.newData
            }).then((res) => res.json())
                .then((data) => {
                    this.newData = data // Actualiza la lista después de la edición
                });
        },

        async eliminarDatosApis(usuario) {
            const confirmacion = window.confirm("¿Está seguro de eliminar el item?");
            console.log(usuario.id_user);
            if (confirmacion) {
                const response = await fetch(`http://localhost:3000/api/users/delete/${usuario.id_user}`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json"
                    },
                }).then((res) => res.json())
                    .then((data) => {
                        console.log(data);
            });
            }
        },
    },
    mounted() {
        this.mostrarDatosApi()
    }
}
</script>


<style scoped>
.form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 10px;
}

.form h2 {
    text-align: center;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
</style>
<template>
    <h2>
        Registrar estudiantes
    </h2>

    <section>
        <form class="formulario" @submit.prevent="this.submit">
            <o-field label="Documento">
            <o-input v-model="form.documento" value="" numeric></o-input>
            </o-field>

            <o-field label="Nombres" variant="info">
            <o-input v-model="form.nombres" value=""></o-input>
            </o-field>

            <o-field label="Telefono" variant="info">
            <o-input v-model="form.telefono" value=""></o-input>
            </o-field>

            <o-field label="Email">
            <o-input v-model="form.email" type="email" value=""> </o-input>
            </o-field>

            <o-field label="Direccion" variant="info">
            <o-input v-model="form.direccion" value=""></o-input>
            </o-field>

            <o-field label="Ciudad" variant="info">
            <o-input v-model="form.ciudad" value=""></o-input>
            </o-field>

            <o-field label="Semestre" variant="info">
            <o-input v-model="form.semestre" value=""></o-input>
            </o-field>

            <o-field label="Creditos acumulados" variant="info">
            <o-input v-model="form.creditos_acumulados" value=""></o-input>
            </o-field>

            <o-button variant="info" native-type="submit">
                Enviar
            </o-button>        
        </form>
    </section>

    <router-link :to="{ name: 'listaEstudiantes' }" style="text-decoration: none;">
        <o-button variant="info" style=" margin-top: 2ch !important;">
            Ver estudiantes registrados
        </o-button>
    </router-link>
</template>

<script>
    export default{

        data(){
            return {
                estudiante: [],
                form: {
                    documento: "",
                    nombres: "",
                    telefono: "",
                    email: "",
                    direccion: "",
                    ciudad: "",
                    semestre: "",
                    creditos_acumulados: ""
                }
            }
        },
        
        mounted() {
            
        },

        methods: {
            submit(){
                var config = {
                method: 'post',
                url: 'http://127.0.0.1:8000/api/estudiante',
                headers: { 
                    'APP_KEY': 'Ke9HAnknaQfYo%EPa7sjG^G3jknZ9ThFANZXgV$t4Nvca%XDy@35VWhwKSP37pTAm4F6CVDHL7$c3v3qBWM4hg7Kx@tsW$pTe9U726UyD&2njqtKnaSHbw9C', 
                    //'Authorization': 'Bearer 1|XP6X8BviZngrXWu8GkEEFV4znR8wio3gu9JZOiTg', 
                    'Content-Type': 'application/json'
                },
                data : this.form
                };
                
                this.axios(config)
                .then(function (res) {
                    if (res.data.response == true) {
                        window.alert("Estudiante registrado")
                    }else{
                        window.alert(res.data.response)
                    }
                })
                .catch(function (error) {
                    window.alert(error)
                });
            }
        },
    }
</script>
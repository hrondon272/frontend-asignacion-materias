<template>
    <h2>
        Editar profesor
    </h2>

    <section>
        <form class="formulario" @submit.prevent="this.submit">
            <o-field>
            <o-input v-model="form.id" ref="inputId" numeric style="display: none;"></o-input>
            </o-field>
            
            <o-field label="Documento">
            <o-input v-model="form.documento" ref="inputDocumento" numeric></o-input>
            </o-field>

            <o-field label="Nombres" variant="info">
            <o-input v-model="form.nombres" ref="inputNombres" value=""></o-input>
            </o-field>

            <o-field label="Telefono" variant="info">
            <o-input v-model="form.telefono" ref="inputTelefono" value=""></o-input>
            </o-field>

            <o-field label="Email">
            <o-input v-model="form.email" ref="inputEmail" type="email" value=""> </o-input>
            </o-field>

            <o-field label="Direccion" variant="info">
            <o-input v-model="form.direccion" ref="inputDireccion" value=""></o-input>
            </o-field>

            <o-field label="Ciudad" variant="info">
            <o-input v-model="form.ciudad" ref="inputCiudad" value=""></o-input>
            </o-field>

            <o-button variant="info" native-type="submit">
                Actualizar
            </o-button>
        </form>
    </section>

    <router-link :to="{ name: 'listaProfesores' }" style="text-decoration: none;">
        <o-button variant="info" style=" margin-top: 2ch !important;">
            Ver profesores registrados
        </o-button>
    </router-link>
</template>

<script>
    export default{

        data(){
            return {
                profesor: [],
                form: {
                    id: "",
                    documento: "",
                    nombres: "",
                    telefono: "",
                    email: "",
                    direccion: "",
                    ciudad: ""
                }
            }
        },

        async mounted() {

            let profesorId = this.$route.params.profesorId;

            var config = {
            method: 'get',
            url: 'http://127.0.0.1:8000/api/profesor/'+profesorId+'',
            headers: {
                'APP_KEY': 'Ke9HAnknaQfYo%EPa7sjG^G3jknZ9ThFANZXgV$t4Nvca%XDy@35VWhwKSP37pTAm4F6CVDHL7$c3v3qBWM4hg7Kx@tsW$pTe9U726UyD&2njqtKnaSHbw9C',
                //'Authorization': 'Bearer 1|XP6X8BviZngrXWu8GkEEFV4znR8wio3gu9JZOiTg',
                'Content-Type': 'application/json'
            },
            data : ''
            };

            let datosProfesor

            await this.axios(config)
            .then(function (res) {
                datosProfesor = res.data.response
            })
            .catch(function (error) {
                window.alert(error)
            });
            this.$data.form.id = datosProfesor.id
            this.$data.form.documento = datosProfesor.documento
            this.$data.form.nombres = datosProfesor.nombres
            this.$data.form.telefono = datosProfesor.telefono
            this.$data.form.email = datosProfesor.email
            this.$data.form.direccion = datosProfesor.direccion
            this.$data.form.ciudad = datosProfesor.ciudad
        },

        methods: {
            submit(){
                var config = {
                method: 'put',
                url: 'http://127.0.0.1:8000/api/profesor/'+this.$data.form.id+'',
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
                        window.alert("Información actualizada")
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
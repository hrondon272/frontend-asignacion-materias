<template>
    <h2>
        Editar estudiante
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

            <o-field label="Semestre" variant="info">
            <o-input v-model="form.semestre" ref="inputSemestre" value=""></o-input>
            </o-field>

            <o-field label="Creditos acumulados" variant="info">
            <o-input v-model="form.creditos_acumulados" ref="inputCreditos" value=""></o-input>
            </o-field>

            <o-button variant="info" native-type="submit">
                Actualizar
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
                    id: "",
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

        async mounted() {

            let estudianteId = this.$route.params.estudianteId;

            var config = {
            method: 'get',
            url: 'http://127.0.0.1:8000/api/estudiante/'+estudianteId+'',
            headers: {
                'APP_KEY': 'Ke9HAnknaQfYo%EPa7sjG^G3jknZ9ThFANZXgV$t4Nvca%XDy@35VWhwKSP37pTAm4F6CVDHL7$c3v3qBWM4hg7Kx@tsW$pTe9U726UyD&2njqtKnaSHbw9C',
                //'Authorization': 'Bearer 1|XP6X8BviZngrXWu8GkEEFV4znR8wio3gu9JZOiTg',
                'Content-Type': 'application/json'
            },
            data : ''
            };

            let datosEstudiante

            await this.axios(config)
            .then(function (res) {
                datosEstudiante = res.data.response})
            .catch(function (error) {
                window.alert(error)
            });
            this.$data.form.id = datosEstudiante.id
            this.$data.form.documento = datosEstudiante.documento
            this.$data.form.nombres = datosEstudiante.nombres
            this.$data.form.telefono = datosEstudiante.telefono
            this.$data.form.email = datosEstudiante.email
            this.$data.form.direccion = datosEstudiante.direccion
            this.$data.form.ciudad = datosEstudiante.ciudad
            this.$data.form.semestre = datosEstudiante.semestre
            this.$data.form.creditos_acumulados = datosEstudiante.creditos_acumulados
        },

        methods: {
            submit(){
                var config = {
                method: 'put',
                url: 'http://127.0.0.1:8000/api/estudiante/'+this.$data.form.id+'',
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
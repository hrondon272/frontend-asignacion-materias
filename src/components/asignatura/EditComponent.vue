<template>
    <h2>
        Editar asignatura
    </h2>

    <section>
        <form class="formulario" @submit.prevent="this.submit">
            <o-field label="Nombre">
            <o-input v-model="form.nombre" value="" numeric></o-input>
            </o-field>

            <o-field label="Descripción" variant="info">
            <o-input v-model="form.descripcion" value=""></o-input>
            </o-field>

            <o-field label="Créditos" variant="info">
            <o-input v-model="form.creditos" value=""></o-input>
            </o-field>

            <o-field label="Área">
            <o-input v-model="form.area" value=""> </o-input>
            </o-field>

            <div class="Field">
                <o-checkbox v-model="form.obligatoria" variant="info">Obligatoria</o-checkbox>
            </div>

            <o-button variant="info" native-type="submit">
                Actualizar
            </o-button>
        </form>
    </section>

    <router-link :to="{ name: 'listaAsignaturas' }" style="text-decoration: none;">
        <o-button variant="info" style=" margin-top: 2ch !important;">
            Ver Asignaturas registradas
        </o-button>
    </router-link>
</template>

<script>
    export default{

        data(){
            return {
                asignatura: [],
                form: {
                    nombre: "",
                    descripcion: "",
                    creditos: "",
                    area: "",
                    obligatoria: ""
                }
            }
        },

        async mounted() {

            let asignaturaId = this.$route.params.asignaturaId;

            var config = {
            method: 'get',
            url: 'http://127.0.0.1:8000/api/asignatura/'+asignaturaId+'',
            headers: {
                'APP_KEY': 'Ke9HAnknaQfYo%EPa7sjG^G3jknZ9ThFANZXgV$t4Nvca%XDy@35VWhwKSP37pTAm4F6CVDHL7$c3v3qBWM4hg7Kx@tsW$pTe9U726UyD&2njqtKnaSHbw9C',
                //'Authorization': 'Bearer 1|XP6X8BviZngrXWu8GkEEFV4znR8wio3gu9JZOiTg',
                'Content-Type': 'application/json'
            },
            data : ''
            };

            let datosAsignatura

            await this.axios(config)
            .then(function (res) {
                datosAsignatura = res.data.response
            })
            .catch(function (error) {
                window.alert(error)
            });
            this.$data.form.id = datosAsignatura.id
            this.$data.form.nombre = datosAsignatura.nombre
            this.$data.form.descripcion = datosAsignatura.descripcion
            this.$data.form.creditos = datosAsignatura.creditos
            this.$data.form.area = datosAsignatura.area
            this.$data.form.obligatoria = datosAsignatura.obligatoria == 1 ? true : false
        },

        methods: {
            submit(){
                var config = {
                method: 'put',
                url: 'http://127.0.0.1:8000/api/asignatura/'+this.$data.form.id+'',
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
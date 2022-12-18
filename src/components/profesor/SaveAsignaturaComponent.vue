<template>
    <h2>
        Agregar asignaturas a profesor
    </h2>

    <section>
        <form class="formulario" @submit.prevent="this.submit">
            <o-field label="Asignatura">
                <o-select v-model="form.asignatura_id" placeholder="Seleccione una asignatura" @change="traerProfesoresDeLaAsignatura">
                    <option v-for="(item, index) in asignaturas" :key="index" :value="item.id">{{ item.nombre }}</option>
                </o-select>
            </o-field>

            <o-button variant="info" native-type="submit" style="margin-top: 12px;">
                Agregar
            </o-button>        
        </form>
    </section>

    <router-link :to="{ name: 'asignaturasProfesor', params: { profesorId: this.$route.params.profesorId } }" style="text-decoration: none; margin-top: 10px !important;">
        <o-button variant="info">
            Ver asignaturas
        </o-button>
    </router-link>
</template>

<script>
    export default{

        data(){
            return {
                asignaturas: [],
                profesores: [],
                form: {
                    asignatura_id: "",
                    profesor_id: ""
                }
            }
        },
        
        mounted() {
            var config = {
                method: 'get',
                url: 'http://127.0.0.1:8000/api/asignatura',
                headers: { 
                    'APP_KEY': 'Ke9HAnknaQfYo%EPa7sjG^G3jknZ9ThFANZXgV$t4Nvca%XDy@35VWhwKSP37pTAm4F6CVDHL7$c3v3qBWM4hg7Kx@tsW$pTe9U726UyD&2njqtKnaSHbw9C', 
                    //'Authorization': 'Bearer 1|XP6X8BviZngrXWu8GkEEFV4znR8wio3gu9JZOiTg', 
                    'Content-Type': 'application/json'
                }
            };

            this.axios(config)
            .then((res) => {
                this.asignaturas = res.data.response
            })
            .catch((error) => {
                console.log(error);
            });
        },

        methods: {
            submit(){
                let profesorId = this.$route.params.profesorId;
                this.$data.form.profesor_id = profesorId

                var config = {
                    method: 'post',
                    url: 'http://127.0.0.1:8000/api/asignacion/1',
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
                        window.alert("Asignatura agregada")
                    }else{
                        window.alert(res.data.response)
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
            }
        },
    }
</script>
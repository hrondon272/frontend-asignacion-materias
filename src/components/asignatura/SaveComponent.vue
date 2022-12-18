<template>
    <h2>
        Registrar asignaturas
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
                Enviar
            </o-button>        
        </form>
    </section>

    <router-link :to="{ name: 'listaAsignaturas' }" style="text-decoration: none;">
        <o-button variant="info" style=" margin-top: 2ch !important;">
            Ver asignaturas registradas
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
        
        mounted() {
            
        },

        methods: {
            submit(){
                var config = {
                method: 'post',
                url: 'http://127.0.0.1:8000/api/asignatura',
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
                        window.alert("Asignatura registrada")
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
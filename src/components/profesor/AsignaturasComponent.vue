<template>
    <h2>
        Asignaturas del profesor
    </h2>

    <router-link :to="{ name: 'SaveAsignaturaProfesor', params: { profesorId: this.$route.params.profesorId } }" style="text-decoration: none;">
        <o-button variant="info">
            Agregar asignatura
        </o-button>
    </router-link>

    <o-table :data="asignaturas.length == 0 ? []: asignaturas">
        <o-table-column Field="nombre" label="ASIGNATURA" numeric v-slot="p">
            {{ p.row.nombre }}
        </o-table-column>
        <o-table-column Field="creditos" label="CREDITOS" string v-slot="p">
            {{ p.row.creditos }}
        </o-table-column>
        <o-table-column Field="accion" label="ACCIÓN" string v-slot="p">
            <div class="odocs-spaced">
                <o-button variant="danger" @click="this.eliminar(p.row.id)">
                    Eliminar
                </o-button>
            </div>
        </o-table-column>
    </o-table>
</template>

<script>
    export default{

        data(){
            return {
                asignaturas: [],
                loading: true
            }
        },
        
        async mounted() {

            let profesorId = this.$route.params.profesorId;

            var config = {
                method: 'get',
                url: 'http://127.0.0.1:8000/api/asignaturasPorProfesor/'+profesorId+'',
                headers: { 
                    'APP_KEY': 'Ke9HAnknaQfYo%EPa7sjG^G3jknZ9ThFANZXgV$t4Nvca%XDy@35VWhwKSP37pTAm4F6CVDHL7$c3v3qBWM4hg7Kx@tsW$pTe9U726UyD&2njqtKnaSHbw9C', 
                    //'Authorization': 'Bearer 1|XP6X8BviZngrXWu8GkEEFV4znR8wio3gu9JZOiTg', 
                    'Content-Type': 'application/json'
                }
            };

            await this.axios(config)
            .then((res) => {
                this.asignaturas = res.data.response
                this.loading = false
            })
            .catch((error) => {
                console.log(error);
            });
        },

        methods: {
            eliminar(id){
                if (confirm("Por favor confirme para continuar")) {
                    var config = {
                    method: 'delete',
                    url: 'http://127.0.0.1:8000/api/asignacion/1',
                    headers: { 
                        'APP_KEY': 'Ke9HAnknaQfYo%EPa7sjG^G3jknZ9ThFANZXgV$t4Nvca%XDy@35VWhwKSP37pTAm4F6CVDHL7$c3v3qBWM4hg7Kx@tsW$pTe9U726UyD&2njqtKnaSHbw9C', 
                        //'Authorization': 'Bearer 1|XP6X8BviZngrXWu8GkEEFV4znR8wio3gu9JZOiTg', 
                        'Content-Type': 'application/json'
                    },
                    data : {'idAsignacion': id}
                    };

                    this.axios(config)
                    .then(function (res) {
                        if (res.data.response == true) {
                            window.alert("Asignatura eliminada")
                            location.reload()
                        }else{
                            window.alert(res.data.response)
                        }
                    })
                    .catch(function (error) {
                        window.alert(error)
                    });
                }
            }
        },        
    }
</script>
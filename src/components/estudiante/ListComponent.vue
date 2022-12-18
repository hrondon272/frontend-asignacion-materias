<template>
    <h2>
        Listado de estudiantes
    </h2>

    <router-link :to="{ name: 'saveEstudiante' }" style="text-decoration: none;">
        <o-button variant="info">
            Registrar estudiante
        </o-button>
    </router-link>

    <o-table :data="estudiantes.length == 0 ? []: estudiantes">
        <o-table-column Field="documento" label="DOCUMENTO" numeric v-slot="p">
            {{ p.row.documento }}
        </o-table-column>
        <o-table-column Field="nombres" label="NOMBRES" string v-slot="p">
            {{ p.row.nombres }}
        </o-table-column>
        <o-table-column Field="telefono" label="TELEFONO" string v-slot="p">
            {{ p.row.telefono }}
        </o-table-column>
        <o-table-column Field="email" label="EMAIL" string v-slot="p">
            {{ p.row.email }}
        </o-table-column>
        <o-table-column Field="direccion" label="DIRECCION" string v-slot="p">
            {{ p.row.direccion }}
        </o-table-column>
        <o-table-column Field="ciudad" label="CIUDAD" string v-slot="p">
            {{ p.row.ciudad }}
        </o-table-column>
        <o-table-column Field="semestre" label="SEMESTRE" string v-slot="p">
            {{ p.row.semestre }}
        </o-table-column>
        <o-table-column Field="creditos_acumulados" label="CREDITOS ACUMULADOS" string v-slot="p">
            {{ p.row.creditos_acumulados }}
        </o-table-column>
        <o-table-column Field="accion" label="ACCIÓN" string v-slot="p">
            <div class="odocs-spaced">
                <router-link :to="{ name: 'editEstudiante', params: { estudianteId: p.row.id } }" style="text-decoration: none;">
                    <o-button variant="warning">
                        Editar
                    </o-button>
                </router-link>
                <o-button variant="danger" @click="this.eliminar(p.row.id)">
                    Eliminar
                </o-button>
                <router-link :to="{ name: 'asignaturasEstudiante', params: { estudianteId: p.row.id } }" style="text-decoration: none;">
                    <o-button variant="info">
                        Ver asignaturas
                    </o-button>
                </router-link>
            </div>
        </o-table-column>
    </o-table>
</template>

<script>
    export default{

        data(){
            return {
                estudiantes: [],
                loading: true
            }
        },
        
        async mounted() {
            var config = {
                method: 'get',
                url: 'http://127.0.0.1:8000/api/estudiante',
                headers: { 
                    'APP_KEY': 'Ke9HAnknaQfYo%EPa7sjG^G3jknZ9ThFANZXgV$t4Nvca%XDy@35VWhwKSP37pTAm4F6CVDHL7$c3v3qBWM4hg7Kx@tsW$pTe9U726UyD&2njqtKnaSHbw9C', 
                    //'Authorization': 'Bearer 1|XP6X8BviZngrXWu8GkEEFV4znR8wio3gu9JZOiTg', 
                    'Content-Type': 'application/json'
                }
            };

            this.axios(config)
            .then((response) => {
                this.estudiantes = response.data.response
                this.loading = false
            })
            .catch((error) => {
                console.log(error);
            });
        },

        methods: {
            eliminar(id){
                console.log(id)
                if (confirm("Por favor confirme para continuar")) {
                    var config = {
                    method: 'delete',
                    url: 'http://127.0.0.1:8000/api/estudiante/'+id+'',
                    headers: { 
                        'APP_KEY': 'Ke9HAnknaQfYo%EPa7sjG^G3jknZ9ThFANZXgV$t4Nvca%XDy@35VWhwKSP37pTAm4F6CVDHL7$c3v3qBWM4hg7Kx@tsW$pTe9U726UyD&2njqtKnaSHbw9C', 
                        //'Authorization': 'Bearer 1|XP6X8BviZngrXWu8GkEEFV4znR8wio3gu9JZOiTg', 
                        'Content-Type': 'application/json'
                    },
                    data : ''
                    };

                    this.axios(config)
                    .then(function (res) {
                        if (res.data.response == true) {
                            window.alert("Estudiante eliminado")
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
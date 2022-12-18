<template>
    <h2>
        Listado de asignaturas
    </h2>

    <router-link :to="{ name: 'saveAsignatura' }" style="text-decoration: none;">
        <o-button variant="info">
            Registrar asignatura
        </o-button>
    </router-link>

    <o-table :data="asignaturas.length == 0 ? []: asignaturas">
        <o-table-column Field="nombre" label="NOMBRE" numeric v-slot="p">
            {{ p.row.nombre }}
        </o-table-column>
        <o-table-column Field="descripcion" label="DESCRIPCIÓN" string v-slot="p">
            {{ p.row.descripcion }}
        </o-table-column>
        <o-table-column Field="creditos" label="CRÉDITOS" string v-slot="p">
            {{ p.row.creditos }}
        </o-table-column>
        <o-table-column Field="area" label="ÁREA" string v-slot="p">
            {{ p.row.area }}
        </o-table-column>
        <o-table-column Field="obligatoria" label="OBLIGATORIA" string v-slot="p">
            {{ p.row.obligatoria == 1 ? 'Obligatoria' : 'Electiva' }}
        </o-table-column>   
        <o-table-column Field="accion" label="ACCIÓN" string v-slot="p">
            <div class="odocs-spaced">
                <router-link :to="{ name: 'editAsignatura', params: { asignaturaId: p.row.id } }" style="text-decoration: none;">
                    <o-button variant="warning">
                        Editar                        
                    </o-button>
                </router-link>
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
            .then((response) => {
                this.asignaturas = response.data.response
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
                    url: 'http://127.0.0.1:8000/api/asignatura/'+id+'',
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
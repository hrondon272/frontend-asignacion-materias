<template>
  <div id="app">
    <h1>Portal universitario</h1>
    <ul>
      <li>
        <router-link :to="{ name: 'listaEstudiantes' }" style="text-decoration: none;">            
          <o-button variant="info">
            Estudiantes
          </o-button>
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'listaProfesores' }" style="text-decoration: none;">            
          <o-button variant="success">
            Profesores
          </o-button>
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'listaAsignaturas' }" style="text-decoration: none;">            
          <o-button variant="info">
            Asignaturas
          </o-button>
        </router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 20px;
  border-bottom: solid 2px #a3a3a3;
  width: 100%;
  max-width: 900px;
  margin: auto;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>


import { createRouter, createWebHashHistory } from 'vue-router'

// Componentes
import ListEstudiantes from './components/estudiante/ListComponent'
import SaveEstudiante from './components/estudiante/SaveComponent'
import EditEstudiante from './components/estudiante/EditComponent'
import AsignaturasEstudiante from './components/estudiante/AsignaturasComponent'
import SaveAsignaturaEstudiante from './components/estudiante/SaveAsignaturaComponent'

import ListProfesores from './components/profesor/ListComponent'
import SaveProfesor from './components/profesor/SaveComponent'
import EditProfesor from './components/profesor/EditComponent'
import AsignaturasProfesor from './components/profesor/AsignaturasComponent'
import SaveAsignaturaProfesor from './components/profesor/SaveAsignaturaComponent'

import ListAsignaturas from './components/asignatura/ListComponent'
import SaveAsignatura from './components/asignatura/SaveComponent'
import EditAsignatura from './components/asignatura/EditComponent'
import WelcomeToSite from './components/WelcomeToSite'

// Configuración
const routes = [
    {   path: '/',
        component: WelcomeToSite
    },
    {   path: '/lista-estudiantes',
        component: ListEstudiantes,
        name: 'listaEstudiantes'
    },
    {   path: '/save-estudiante',
        component: SaveEstudiante,
        name: 'saveEstudiante'
    },
    {   path: '/edit-estudiante/:estudianteId',
        component: EditEstudiante,
        name: 'editEstudiante'
    },
    {   path: '/ver-asignaturas-estudiante/:estudianteId',
        component: AsignaturasEstudiante,
        name: 'asignaturasEstudiante'
    },
    {   path: '/save-asignatura-estudiante/:estudianteId',
        component: SaveAsignaturaEstudiante,
        name: 'SaveAsignaturaEstudiante'
    },
    {   path: '/lista-profesores',
        component: ListProfesores,
        name: 'listaProfesores'
    },
    {   path: '/save-profesor',
        component: SaveProfesor,
        name: 'saveProfesor'
    },
    {   path: '/edit-profesor/:profesorId',
        component: EditProfesor,
        name: 'editProfesor'
    },
    {   path: '/ver-asignaturas-profesor/:profesorId',
        component: AsignaturasProfesor,
        name: 'asignaturasProfesor'
    },
    {   path: '/save-asignatura-profesor/:profesorId',
        component: SaveAsignaturaProfesor,
        name: 'SaveAsignaturaProfesor'
    },
    {   path: '/lista-asignaturas',
        component: ListAsignaturas,
        name: 'listaAsignaturas'
    },
    {   path: '/save-asignatura',
        component: SaveAsignatura,
        name: 'saveAsignatura'
    },
    {   path: '/edit-asignatura/:asignaturaId',
        component: EditAsignatura,
        name: 'editAsignatura'
    },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Registrarse from '../views/Registrarse.vue'
import Vehiculos_ from '../views/Vehiculos_.vue'
import Ingresar from '../views/Ingresar.vue'
import SubirVehiculos from '../views/SubirVehiculos.vue'
import Vehiculos_Comprar from '../views/vehiculo_comprar.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/Registrarse',
    name: 'Registrarse',
    component: Registrarse
  },
  {
    path: '/Vehiculos',
    name: 'Vehiculos',
    component: Vehiculos_
  },
  {
    path: '/Ingresar',
    name: 'Ingresar',
    component: Ingresar
  },
  {
    path: '/Vehiculos/Subir',
    name: 'SubirVehiculos',
    component: SubirVehiculos
  },
  {
    path: '/Vehiculos/Comprar/:id',
    name: 'DetalleVehiculo',
    component: Vehiculos_Comprar
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

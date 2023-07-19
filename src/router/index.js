import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomePage from '../views/HomePage.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/postGastrostomyPlacementFeeding',
    name: 'PostGastrostomyPlacementFeedingProtocol',
    component: () => import('../views/protocols/PostGastrostomyPlacementFeeding.vue')
  },
  {
    path: '/pyloricStenosisPerioperative',
    name: 'PyloricStenosisPerioperativeProtocol',
    component: () => import('../views/protocols/PyloricStenosisPerioperative.vue')
  },
  {
    path: '/perioperativeAppendicitisManagement',
    name: 'PerioperativeAppendicitisManagementProtocol',
    component: () => import('../views/protocols/PerioperativeAppendicitisManagement.vue')
  },
  {
    path: '/postoperativePSARP',
    name: 'PostoperativePSARP',
    component: () => import('../views/protocols/PostoperativePSARP.vue')
  },
  {
    path: '/gastroschisisManagement',
    name: 'GastroSchisisManagement',
    component: () => import('../views/protocols/GastroschisisManagement.vue')
  },
  {
    path: '/managementOfIleocolicIntussusception',
    name: 'ManagementOfIleocolicIntussusception',
    component: () => import('../views/protocols/ManagementOfIleocolicIntussusception.vue')
  },
  {
    path: '/necrotizingEnterocolitis',
    name: 'NecrotizingEnterocolitis',
    component: () => import('../views/protocols/NecrotizingEnterocolitis.vue')
  },
  {
    path: '/infantPerianalAbscess',
    name: 'InfantPerianalAbscess',
    component: () => import('../views/protocols/InfantPerianalAbscess.vue')
  },
  {
    path: '/spontaneousPneumothorax',
    name: 'SpontaneousPneumothorax',
    component: () => import('../views/protocols/SpontaneousPneumothorax.vue')
  },
  {
    path: '/centralLinePlacementinOncologyPatients',
    name: 'CentralLinePlacementinOncologyPatients',
    component: () => import('../views/protocols/CentralLinePlacementinOncologyPatients.vue')
  },
  {
    path: '/centralLineRemovalinOncologyPatients',
    name: 'CentralLineRemovalinOncologyPatients',
    component: () => import('../views/protocols/CentralLineRemovalinOncologyPatients.vue')
  },
  {
    path: '/spontaneousPneumothorax',
    name: 'SpontaneousPneumothorax',
    component: () => import('../views/protocols/SpontaneousPneumothorax.vue')
  },
  {
    path: '/centralLineTroubleshooting',
    name: 'CentralLineTroubleshooting',
    component: () => import('../views/protocols/CentralLineTroubleshooting.vue')
  },
  {
    path: '/ammManagement',
    name: 'AmmManagement',
    component: () => import('../views/protocols/AmmManagement.vue')
  },
  {
    path: '/anesthesiaGuidelinesAMM',
    name: 'AnesthesiaGuidelinesAMM',
    component: () => import('../views/protocols/AnesthesiaGuidelinesAMM.vue')
  },
  {
    path: '/solidOrganInjuryTrauma',
    name: 'SolidOrganInjuryTrauma',
    component: () => import('../views/protocols/SolidOrganInjuryTrauma.vue')
  },
  {
    path: '/abdominalTrauma',
    name: 'AbdominalTrauma',
    component: () => import('../views/protocols/AbdominalTrauma.vue')
  },
  {
    path: '/adolescentECMOCannulation',
    name: 'AdolescentECMOCannulation',
    component: () => import('../views/protocols/AdolescentECMOCannulation.vue')
  },
  {
    path: '/centralLineReplacementAfterCLABSI',
    name: 'CentralLineReplacementAfterCLABSI',
    component: () => import('../views/protocols/CentralLineReplacementAfterCLABSI.vue')
  },
  {
    path: '/apheresisCatheterRecommendations',
    name: 'ApheresisCatheterRecommendations',
    component: () => import('../views/protocols/ApheresisCatheterRecommendations.vue')
  },
  {
    path: '/gastrografinAdhesiveSBO',
    name: 'GastrografinAdhesiveSBO',
    component: () => import('../views/protocols/GastrografinAdhesiveSBO.vue')
  },
  {
    path: '/colonBundle',
    name: 'ColonBundle',
    component: () => import('../views/protocols/ColonBundle.vue')
  },
  {
    path: '/peritonealDialysis',
    name: 'PeritonealDialysis',
    component: () => import('../views/protocols/PeritonealDialysisCatheter.vue')
  },
  {
    path: '/neuroblastomadiagnosis',
    name: 'NeuroBlastomaDiagnosis',
    component: () => import('../views/protocols/NeuroBlastomaDiagnosis.vue')
  },
  {
    path: '/buttonbattery',
    name: 'ButtonBattery',
    component: () => import('../views/protocols/ButtonBattery.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router

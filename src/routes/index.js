// All components mapping with path for internal routes

import { lazy } from 'react'

const Dashboard = lazy(() => import('../pages/protected/Dashboard'))
const Welcome = lazy(() => import('../pages/protected/Welcome'))
const Page404 = lazy(() => import('../pages/protected/404'))
const Blank = lazy(() => import('../pages/protected/Blank'))
const ProfileSettings = lazy(() => import('../pages/protected/ProfileSettings'))
const GettingStarted = lazy(() => import('../pages/GettingStarted'))
const EducationUnits = lazy(() => import('../pages/protected/educationUnit'))
const HealthFacilities = lazy(() => import('../pages/protected/healthFacility'))
const PublicHousings = lazy(() => import('../pages/protected/publicHousing'))
const Malls = lazy(() => import('../pages/protected/mall'))
const Hotels = lazy(() => import('../pages/protected/hotel'))
const Offices = lazy(() => import('../pages/protected/office'))
const Apartements = lazy(() => import('../pages/protected/apartement'))
const UrbanVillages = lazy(() => import('../pages/protected/urbanVillage'))
const Educations = lazy(() => import('../pages/protected/education'))


const routes = [
  {
    path: '/dashboard', // the url
    component: Dashboard, // view rendered
  },
  {
    path: '/welcome', // the url
    component: Welcome, // view rendered
  },
  {
    path: '/settings-profile',
    component: ProfileSettings,
  },
  {
    path: '/getting-started',
    component: GettingStarted,
  },
  {
    path: '/404',
    component: Page404,
  },
  {
    path: '/blank',
    component: Blank,
  },
  {
    path: '/EducationUnit',
    component: EducationUnits,
  },
  {
    path: '/HealthFacility',
    component: HealthFacilities,
  },
  {
    path: '/UrbanVillage',
    component: UrbanVillages,
  },
  {
    path: '/Mall',
    component: Malls,
  },
  {
    path: '/Hotel',
    component: Hotels,
  },
  {
    path: '/Office',
    component: Offices,
  },
  {
    path: '/PublicHousing',
    component: PublicHousings,
  },
  {
    path: '/Apartement',
    component: Apartements,
  },
  {
    path: '/UrbanVillages',
    component: UrbanVillages,
  },
  {
    path: '/Educations',
    component: Educations,
  },
]

export default routes

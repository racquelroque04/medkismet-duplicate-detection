import Vue from 'vue'
import VueRouter from 'vue-router'
// containers
const DefaultContainer = () => import('@/containers/DefaultContainer');
// views
const Home = () => import('@/views/Home');
const Dashboard = () => import('@/views/admin/Dashboard');
const CreateRecord = () => import('@/views/admin/records/Create');
const RecordList = () => import('@/views/admin/records/List');
const UploadRecord = () => import('@/views/admin/records/Upload');

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/admin',
    name: 'DefaultContainer',
    component: DefaultContainer,
    children: [
      {
        path: '/admin/dashboard',
        component: Dashboard
      },
      {
        path: '/admin/records/create',
        component: CreateRecord
      },
      {
        path: '/admin/records/list',
        component: RecordList
      },
      {
        path: '/admin/records/upload',
        component: UploadRecord
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import EntityList from '@/views/EntityList.vue';
import Entity from '@/views/Entity.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  { path: '/entities/:name', name: 'EntityList', component: EntityList },
  { path: '/entities/:name/:title', name: 'Entity', component: Entity }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;

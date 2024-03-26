import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import AboutPage from '../views/AboutPage.vue';
import DashboardPage from '../views/Dashboard.vue';
import UserIndex from '../views/User/Index.vue';
import UserCreate from '../views/User/Create.vue';
import RoleIndex from '../views/Role/Index.vue';
import RoleCreate from '../views/Role/Create.vue';
import CategoryIndex from '../views/Category/Index.vue';
import CategoryCreate from '../views/Category/Create.vue';
import AttributeIndex from '../views/Attribute/Index.vue';
import AttributeCreate from '../views/Attribute/Create.vue';
import ProductIndex from '../views/Product/Index.vue';
import ProductCreate from '../views/Product/Create.vue';
import OrderIndex from '../views/Order/Index.vue';
import PostDetails from '../views/PostDetails.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '/dashboard', component: DashboardPage },
  { path: '/user-list', component: UserIndex },
  { path: '/create-user', component: UserCreate },
  { path: '/role-list', component: RoleIndex },
  { path: '/create-role', component: RoleCreate },
  { path: '/category-list', component: CategoryIndex },
  { path: '/create-category', component: CategoryCreate },
  { path: '/attribute-list', component: AttributeIndex },
  { path: '/create-attribute', component: AttributeCreate },
  { path: '/product-list', component: ProductIndex },
  { path: '/create-product', component: ProductCreate },
  { path: '/order-list', component: OrderIndex },
  { path: '/post/:id',  name: 'PostDetails', component: PostDetails },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

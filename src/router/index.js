import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/frontend/HomePage.vue';
import AboutPage from '../views/frontend/AboutPage.vue';
import LoginPage from '../views/frontend/Auth/Login.vue';
import RegisterPage from '../views/frontend/Auth/Register.vue';
import DashboardPage from '../views/backend/Dashboard/Dashboard.vue';
import UserIndex from '../views/backend/User/Index.vue';
import UserCreate from '../views/backend/User/Create.vue';
import RoleIndex from '../views/backend/Role/Index.vue';
import RoleCreate from '../views/backend/Role/Create.vue';
import CategoryIndex from '../views/backend/Category/Index.vue';
import CategoryCreate from '../views/backend/Category/Create.vue';
import AttributeIndex from '../views/backend/Attribute/Index.vue';
import AttributeCreate from '../views/backend/Attribute/Create.vue';
import ProductIndex from '../views/backend/Product/Index.vue';
import ProductCreate from '../views/backend/Product/Create.vue';
import OrderIndex from '../views/backend/Order/Index.vue';
import PostDetails from '../views/PostDetails.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '/login', component: LoginPage },
  { path: '/register', component: RegisterPage },
  { path: '/dashboard', component: DashboardPage },
  { path: '/dashboard/user-list', component: UserIndex },
  { path: '/dashboard/create-user', component: UserCreate },
  { path: '/dashboard/role-list', component: RoleIndex },
  { path: '/dashboard/create-role', component: RoleCreate },
  { path: '/dashboard/category-list', component: CategoryIndex },
  { path: '/dashboard/create-category', component: CategoryCreate },
  { path: '/dashboard/attribute-list', component: AttributeIndex },
  { path: '/dashboard/create-attribute', component: AttributeCreate },
  { path: '/dashboard/product-list', component: ProductIndex },
  { path: '/dashboard/create-product', component: ProductCreate },
  { path: '/dashboard/order-list', component: OrderIndex },
  { path: '/post/:id',  name: 'PostDetails', component: PostDetails },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

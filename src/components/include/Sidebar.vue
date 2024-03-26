<template>
 <aside id="sidebar" class="sidebar">
    <ul class="sidebar-nav" id="sidebar-nav">
      <li class="nav-item">
        <RouterLink to="/dashboard" class="nav-link">
          <i class="bi bi-grid"></i>
          <span>Dashboard</span>
        </RouterLink>
      </li>
      <!-- End Dashboard Nav -->

      <li class="nav-item">
        <a class="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
          <i class="bi bi-menu-button-wide"></i><span>Role Management</span><i class="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="components-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <RouterLink to="/role-list">
              <i class="bi bi-circle"></i><span>List</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/create-role">
              <i class="bi bi-circle"></i><span>Add</span>
            </RouterLink>
          </li>
        </ul>
      </li>
      <!-- End Role Nav -->

      <li class="nav-item">
        <a class="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="#">
          <i class="bi bi-person"></i><span>User Management</span><i class="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="forms-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <RouterLink to="/user-list">
              <i class="bi bi-circle"></i><span>List</span>
            </RouterLink>
          </li>
          <li>
             <RouterLink to="/create-user">
              <i class="bi bi-circle"></i><span>Add</span>
            </RouterLink>
          </li>
        </ul>
      </li>
      <!-- End User Nav -->

       <li class="nav-item">
        <a class="nav-link collapsed" data-bs-target="#category-nav" data-bs-toggle="collapse" href="#">
          <i class="bi bi-menu-button-wide"></i><span>Category</span><i class="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="category-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <RouterLink to="/category-list">
              <i class="bi bi-circle"></i><span>List</span>
            </RouterLink>
          </li>
          <li>
             <RouterLink to="/create-category">
              <i class="bi bi-circle"></i><span>Add</span>
            </RouterLink>
          </li>
        </ul>
       </li>
      <!-- End Category Nav -->

       <li class="nav-item">
        <a class="nav-link collapsed" data-bs-target="#attribute-nav" data-bs-toggle="collapse" href="#">
          <i class="bi bi-menu-button-wide"></i><span>Attribute</span><i class="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="attribute-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <RouterLink to="/attribute-list">
              <i class="bi bi-circle"></i><span>List</span>
            </RouterLink>
          </li>
          <li>
             <RouterLink to="/create-attribute">
              <i class="bi bi-circle"></i><span>Add</span>
            </RouterLink>
          </li>
        </ul>
       </li>
      <!-- End Attribute Nav -->

      <li class="nav-item">
        <a class="nav-link collapsed" data-bs-target="#product-nav" data-bs-toggle="collapse" href="#">
          <i class="bi bi-menu-button-wide"></i><span>Product</span><i class="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="product-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <RouterLink to="/product-list">
              <i class="bi bi-circle"></i><span>List</span>
            </RouterLink>
          </li>
          <li>
             <RouterLink to="/create-product">
              <i class="bi bi-circle"></i><span>Add</span>
            </RouterLink>
          </li>
        </ul>
       </li>
      <!-- End Product Nav -->

      <li class="nav-item">
        <a class="nav-link collapsed" data-bs-target="#order-nav" data-bs-toggle="collapse" href="#">
          <i class="bi bi-menu-button-wide"></i><span>Order</span><i class="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="order-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <RouterLink to="/order-list">
              <i class="bi bi-circle"></i><span>List</span>
            </RouterLink>
          </li>
        </ul>
       </li>
      <!-- End order Nav -->

    </ul>
  </aside>
</template>







<template>
  <section class="section">
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">User List</h5>
            <DataTable :data="data" class="table">
              <thead>
                <tr>
                  <th>Sl</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Avatar</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
            </DataTable>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
@import 'datatables.net-dt';
</style>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from '@/api/axios';
import { useAuthStore } from "@/stores/auth"; 

import DataTable from 'datatables.net-vue3';
import DataTablesCore from 'datatables.net';
DataTable.use(DataTablesCore);

// Define a reactive variable to store user data
const data = ref([]);

onMounted(async () => {
  try {
    // Retrieve the token from your Pinia auth store
    const token =  useAuthStore().token;
    // Set the default authorization header for Axios requests
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    const response = await axios.get('/users');
    data.value = response.data.original.user.map((user, index) => [
      index + 1, 
      user.name,
      user.email,
      user.email,
      user.email,
      user.email,
     `
        <button @click="viewUser(${user.id})" class="btn btn-info">View</button>
        <button @click="editUser(${user.id})" class="btn btn-primary">Edit</button>
      `,
    ]);
  } catch (error) {
    console.error('Error fetching users:', error);
  }
});
</script>


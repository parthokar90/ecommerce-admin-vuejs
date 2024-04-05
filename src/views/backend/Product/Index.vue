<template>
  <section class="section">
      <div class="row">
        <div class="col-lg-12">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Product List</h5>
              <DataTable :data="data" class="table">
                 <thead>
                    <tr>
                        <th>Sl</th>
                        <th>Thumbnil</th>
                        <th>Product</th>
                        <th>Sell Price</th>
                        <th>Regular Price</th>
                        <th>Category</th>
                        <th>Action</th>
                    </tr>
                </thead>
              </DataTable>
              <!-- End Default Table Example -->
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
import DataTable from 'datatables.net-vue3';
import DataTablesCore from 'datatables.net';
DataTable.use(DataTablesCore);
const data = [
  [1, 2, 3, 4,4,4,4],
];
</script>
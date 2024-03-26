<template>
    <section class="section">
      <div class="row">
        <div class="col-lg-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Edit User</h5>
              <!-- General Form Elements -->
              <form>
                <div class="row mb-3">
                  <label for="inputText" class="col-sm-3 col-form-label">Name</label>
                  <div class="col-sm-9">
                    <input type="text" class="form-control">
                  </div>
                </div>

                <div class="row mb-3">
                  <label for="inputText" class="col-sm-3 col-form-label">Email</label>
                  <div class="col-sm-9">
                    <input type="email" class="form-control">
                  </div>
                </div>

                <div class="row mb-3">
                  <label for="inputText" class="col-sm-3 col-form-label">Password</label>
                  <div class="col-sm-9">
                    <input type="password" class="form-control">
                  </div>
                </div>

                <div class="row mb-3">
                  <label for="inputText" class="col-sm-3 col-form-label">Avatar</label>
                  <div class="col-sm-9">
                    <input type="file" class="form-control">
                  </div>
                </div>

                <div class="row mb-3">
                  <label for="inputText" class="col-sm-3 col-form-label">Role</label>
                  <div class="col-sm-9">
                    <select class="form-control">
                     <option value="">Select</option>
                     <option value="">Admin</option>
                     <option value="">User</option>
                    </select>
                  </div>
                </div>
         
                <div class="row mb-3">
                  <label for="inputText" class="col-sm-3 col-form-label">Address</label>
                  <div class="col-sm-9">
                    <textarea rows="" cols="" class="form-control"></textarea>
                  </div>
                </div>

                <div class="row mb-3">
                  <label for="inputText" class="col-sm-3 col-form-label">Status</label>
                  <div class="col-sm-9">
                    <select class="form-control">
                     <option value="">Select</option>
                     <option value="">Active</option>
                     <option value="">Inactive</option>
                    </select>
                  </div>
                </div>
 
    
                <div class="row mb-3">
                   <div class="col-md-3">
                       <button type="submit" class="btn btn-primary">Update</button>
                    </div>
                </div>

              </form>
              <!-- End General Form Elements -->
            </div>
          </div>

        </div>
      </div>
    </section>
</template>


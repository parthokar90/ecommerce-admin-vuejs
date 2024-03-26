<template>
  <section class="section">
    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Create Role</h5>
            <!-- General Form Elements -->
            <form>
              <div class="row mb-3">
                <label for="inputText" class="col-sm-3 col-form-label"
                  >Name</label
                >
                <div class="col-sm-9">
                  <input type="text" class="form-control" />
                </div>
              </div>

              <div class="row mb-3">
                <label for="inputText" class="col-sm-3 col-form-label"
                  >Permission</label
                >
                <div class="col-sm-9">
                 <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="gridCheck1">
                      <label class="form-check-label" for="gridCheck1">
                        Example checkbox
                      </label>
                    </div>

                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="gridCheck2" checked>
                      <label class="form-check-label" for="gridCheck2">
                        Example checkbox 2
                      </label>
                    </div>
                </div>
              </div>

              <div class="row mb-3">
                <label for="inputText" class="col-sm-3 col-form-label"
                  >Status</label
                >
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

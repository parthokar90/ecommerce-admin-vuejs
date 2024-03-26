<template>
  <section class="section">
    <div class="row">
      <div class="col-lg-8">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Create Product</h5>

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
                >Regular Price</label
              >
              <div class="col-sm-9">
                <input type="text" class="form-control" />
              </div>
            </div>

            <div class="row mb-3">
              <label for="inputText" class="col-sm-3 col-form-label"
                >Sell Price</label
              >
              <div class="col-sm-9">
                <input type="text" class="form-control" />
              </div>
            </div>

             <div class="row mb-3">
              <label for="inputText" class="col-sm-3 col-form-label"
                >Sku</label
              >
              <div class="col-sm-9">
                <input type="text" class="form-control" />
              </div>
            </div>

            <div class="row mb-3">
              <label for="inputText" class="col-sm-3 col-form-label"
                >Desscription</label
              >
              <div class="col-sm-9">
                <textarea class="form-control"></textarea>
              </div>
            </div>

            <!-- Pills Tabs -->
            <ul
              class="nav nav-tabs nav-tabs-bordered d-flex"
              id="borderedTabJustified"
              role="tablist"
            >
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link active"
                  id="pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-home"
                  type="button"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                >
                  Inventory
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                >
                  Varient
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="pills-contact-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-contact"
                  type="button"
                  role="tab"
                  aria-controls="pills-contact"
                  aria-selected="false"
                >
                  Seo
                </button>
              </li>
            </ul>
            <div class="tab-content pt-2" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div class="row mb-3">
                  <label for="inputText" class="col-sm-3 col-form-label"
                    >Stock Quantity</label
                  >
                  <div class="col-sm-9">
                    <input type="number" class="form-control" />
                  </div>
                </div>

                <div class="row mb-3">
                  <label for="inputText" class="col-sm-3 col-form-label"
                    >Alert Quantity</label
                  >
                  <div class="col-sm-9">
                    <input type="number" class="form-control" />
                  </div>
                </div>
              </div>

              <div
                class="tab-pane fade"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <div class="row mb-3">
                  <label for="inputText" class="col-sm-3 col-form-label"
                    >Select Type</label
                  >
                  <div class="col-sm-9">
                    <select class="form-control">
                      <option value="">Select</option>
                      <option value="">Active</option>
                      <option value="">Inactive</option>
                    </select>
                  </div>
                </div>
              </div>

              <div
                class="tab-pane fade"
                id="pills-contact"
                role="tabpanel"
                aria-labelledby="contact-tab"
              >
                <div class="row mb-3">
                  <label for="inputText" class="col-sm-3 col-form-label"
                    >Meta Title</label
                  >
                  <div class="col-sm-9">
                    <input type="text" class="form-control" />
                  </div>
                </div>

                <div class="row mb-3">
                  <label for="inputText" class="col-sm-3 col-form-label"
                    >Desscription</label
                  >
                  <div class="col-sm-9">
                    <textarea class="form-control"></textarea>
                  </div>
                </div>
              </div>
            </div>
            <!-- End Pills Tabs -->

            <!-- End General Form Elements -->
          </div>
        </div>
      </div>

      <div class="col-lg-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Category</h5>
            <div class="row mb-3">
              <select class="form-control">
                <option value="">Select</option>
                <option value="">Active</option>
                <option value="">Inactive</option>
              </select>
            </div>

            <h5 class="card-title">Thumbnil</h5>
            <div class="row mb-3">
              <input type="file" class="form-control" />
            </div>

            <h5 class="card-title">Status</h5>
            <div class="row mb-3">
              <select class="form-control">
                <option value="">Publish</option>
                <option value="">Unpublish</option>
              </select>
            </div>

            <div class="row mb-3">
                <div class="col-md-3">
                  <button type="submit" class="btn btn-primary">Create</button>
                </div>
              </div>

            <!-- End General Form Elements -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>



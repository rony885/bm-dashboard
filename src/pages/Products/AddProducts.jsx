/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

const AddProducts = () => {
  return (
    <div className="container-fluid">
      {/* <!-- start page title --> */}
      <div className="row my-3">
        <div className="col-12">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb bg-light-lighten p-2 mb-0">
              <li class="breadcrumb-item">
                <Link to="/">
                  <i class="uil-home-alt"></i> Home
                </Link>
              </li>
              <li class="breadcrumb-item">Products</li>
              <li class="breadcrumb-item active" aria-current="page">
                Create Product
              </li>
            </ol>
          </nav>
        </div>
      </div>
      {/* <!-- end page title --> */}

      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              {/* ============================== */}
              <div class="row">
                <div class="col-lg-4">
                  <form>
                    <div class="mb-3">
                      <label for="example-select" class="form-label">
                        Type
                      </label>
                      <select class="form-select" id="example-select">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                  </form>
                </div>

                <div class="col-lg-4">
                  <form>
                    <div class="mb-3">
                      <label for="simpleinput" class="form-label">
                        Code
                      </label>
                      <input
                        type="text"
                        id="simpleinput"
                        class="form-control"
                      />
                    </div>
                  </form>
                </div>

                <div class="col-lg-4">
                  <form>
                    <div class="mb-3">
                      <label for="simpleinput" class="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        id="simpleinput"
                        class="form-control"
                      />
                    </div>
                  </form>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-4">
                  <form>
                    <div class="mb-3">
                      <label for="example-select" class="form-label">
                        Category
                      </label>
                      <select class="form-select" id="example-select">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                  </form>
                </div>

                <div class="col-lg-4">
                  <form>
                    <div class="mb-3">
                      <label for="example-select" class="form-label">
                        Sub Category
                      </label>
                      <select class="form-select" id="example-select">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                  </form>
                </div>

                <div class="col-lg-4">
                  <form>
                    <div class="mb-3">
                      <label for="example-select" class="form-label">
                        Brand
                      </label>
                      <select class="form-select" id="example-select">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                  </form>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-6">
                  <form>
                    <div class="mb-3">
                      <label for="example-select" class="form-label">
                        Unit Type
                      </label>
                      <select class="form-select" id="example-select">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                  </form>
                </div>

                <div class="col-lg-6">
                  <form>
                    <div class="mb-3">
                      <label for="example-select" class="form-label">
                        Unit Quantity
                      </label>
                      <select class="form-select" id="example-select">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                  </form>
                </div>

                {/* <div class="col-lg-4">
                  <form>
                    <div class="mb-3">
                      <label for="simpleinput" class="form-label">
                        Tax
                      </label>
                      <input
                        type="text"
                        id="simpleinput"
                        class="form-control"
                      />
                    </div>
                  </form>
                </div> */}
              </div>

              <div class="row">
                <div class="col-lg-4">
                  <form>
                    <div class="mb-3">
                      <label for="simpleinput" class="form-label">
                        Tax
                      </label>
                      <input
                        type="text"
                        id="simpleinput"
                        class="form-control"
                      />
                    </div>
                  </form>
                </div>

                <div class="col-lg-4">
                  <form>
                    <div class="mb-3">
                      <label for="example-select" class="form-label">
                        Tax Method
                      </label>
                      <select class="form-select" id="example-select">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                  </form>
                </div>

                <div class="col-lg-4">
                  <form>
                    <div class="mb-3">
                      <label for="example-select" class="form-label">
                        Color
                      </label>
                      <select class="form-select" id="example-select">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                  </form>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-4">
                  <form>
                    <div class="mb-3">
                      <label for="simpleinput" class="form-label">
                        Alert Quantity
                      </label>
                      <input
                        type="text"
                        id="simpleinput"
                        class="form-control"
                      />
                    </div>
                  </form>
                </div>

                <div class="col-lg-4">
                  <form>
                    <div class="mb-3">
                      <label for="simpleinput" class="form-label">
                        Name Options
                      </label>
                      <input
                        type="text"
                        id="simpleinput"
                        class="form-control"
                      />
                    </div>
                  </form>
                </div>

                <div class="col-lg-4">
                  <form>
                    <div class="mb-3">
                      <label for="example-select" class="form-label">
                        Warranty
                      </label>
                      <select class="form-select" id="example-select">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                  </form>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-6">
                  <form>
                    <div class="mb-3">
                      <label for="example-textarea" class="form-label">
                        Text area
                      </label>
                      <textarea
                        class="form-control"
                        id="example-textarea"
                        rows="5"
                      ></textarea>
                    </div>
                  </form>
                </div>

                <div class="col-lg-6">
                  <form>
                    <div class="mb-3">
                      <label for="example-textarea" class="form-label">
                        Text area
                      </label>
                      <textarea
                        class="form-control"
                        id="example-textarea"
                        rows="5"
                      ></textarea>
                    </div>
                  </form>
                </div>
              </div>

              <div class="text-end">
                <button type="button" class="btn btn-light">
                  Cancel
                </button>

                <button type="button" class="btn btn-info ms-2">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProducts;

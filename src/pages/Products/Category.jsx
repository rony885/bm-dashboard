import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";

const Category = () => {
  return (
    <Wrapper>
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
                  Category
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
                <div className="row mb-2">
                  <div className="col-sm-6">
                    <div className="text-sm-start">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Search..."
                        id="top-search"
                        fdprocessedid="w0b08c7"
                      />
                    </div>
                  </div>

                  <div className="col-sm-6 text-end">
                    <Link
                      to="#"
                      className="btn btn-danger mb-2"
                      data-bs-toggle="modal"
                      data-bs-target="#info-header-modal"
                    >
                      <i className="mdi mdi-plus-circle me-2"></i> Add Category
                    </Link>
                  </div>
                </div>

                <div className="table-responsive">
                  <table
                    className="table table-centered w-100 dt-responsive nowrap"
                    id="products-datatable"
                  >
                    <thead className="table-light">
                      <tr>
                        <th className="all" style={{ width: "20px" }}>
                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="customCheck1"
                            />
                            <label
                              className="form-check-label"
                              for="customCheck1"
                            >
                              &nbsp;
                            </label>
                          </div>
                        </th>
                        <th className="all">Product</th>
                        <th>Category</th>
                        <th>Added Date</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Status</th>
                        <th className="action">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="customCheck3"
                            />
                            <label
                              className="form-check-label"
                              for="customCheck3"
                            >
                              &nbsp;
                            </label>
                          </div>
                        </td>
                        <td>
                          <img
                            src="assets/images/products/product-4.jpg"
                            alt="contact-img"
                            title="contact-img"
                            className="rounded me-3"
                            height="48"
                          />
                          <p className="m-0 d-inline-block align-middle font-16">
                            <Link
                              to="apps-ecommerce-products-details.html"
                              className="text-body"
                            >
                              Biblio Plastic Armchair
                            </Link>
                            <br />
                            <span className="text-warning mdi mdi-star"></span>
                            <span className="text-warning mdi mdi-star"></span>
                            <span className="text-warning mdi mdi-star"></span>
                            <span className="text-warning mdi mdi-star"></span>
                            <span className="text-warning mdi mdi-star-half"></span>
                          </p>
                        </td>
                        <td>Wooden Chairs</td>
                        <td>09/08/2018</td>
                        <td>$8.99</td>

                        <td>1,874</td>
                        <td>
                          <span className="badge bg-success">Active</span>
                        </td>
                        <td className="table-action">
                          <Tooltip title="View" arrow>
                            <Link
                              to="#"
                              className="action-icon"
                              data-bs-toggle="modal"
                              data-bs-target="#view"
                            >
                              <i className="mdi mdi-eye"></i>
                            </Link>
                          </Tooltip>

                          <Tooltip title="Edit" arrow>
                            <Link to="#" className="action-icon">
                              <i className="mdi mdi-square-edit-outline"></i>
                            </Link>
                          </Tooltip>

                          <Tooltip title="Delete" arrow>
                            <Link
                              to="#"
                              className="action-icon"
                              data-bs-toggle="modal"
                              data-bs-target="#danger-alert-modal"
                            >
                              <i className="mdi mdi-delete"></i>
                            </Link>
                          </Tooltip>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========= Add Modal ========= */}
        <div
          id="info-header-modal"
          class="modal fade"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          role="dialog"
          aria-labelledby="info-header-modalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header modal-colored-header bg-info">
                <h4 class="modal-title" id="info-header-modalLabel">
                  Modal Heading
                </h4>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-hidden="true"
                ></button>
              </div>

              <div class="modal-body ps-3 pe-3">
                {" "}
                <div class="row">
                  <div class="col-lg-12">
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

                  <div class="col-lg-6">
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

                  <div class="col-lg-6">
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
                  <div class="col-lg-12">
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

                  <div class="col-lg-12">
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

                  <div class="col-lg-12">
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
              </div>

              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-light"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-info">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ========= View Modal ========= */}
        <div
          id="view"
          class="modal fade"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          role="dialog"
          aria-labelledby="viewLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
              <div class="modal-header modal-colored-header bg-info">
                <h4 class="modal-title" id="viewLabel">
                  Modal Heading
                </h4>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-hidden="true"
                ></button>
              </div>

              <div class="modal-body ps-3 pe-3">
                {" "}
                <div class="row">
                  <div class="col-lg-12">
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

                  <div class="col-lg-6">
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

                  <div class="col-lg-6">
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
                  <div class="col-lg-12">
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

                  <div class="col-lg-12">
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

                  <div class="col-lg-12">
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
              </div>

              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-light"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-info">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ========= Delete Modal ========= */}
        <div
          id="danger-alert-modal"
          class="modal fade"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          role="dialog"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-sm modal-dialog-centered">
            <div class="modal-content modal-filled">
              <div class="modal-header modal-colored-header bg-danger">
                <h4 class="modal-title" id="info-header-modalLabel">
                  Modal Heading
                </h4>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-hidden="true"
                ></button>
              </div>

              <div class="modal-body p-4">
                <div class="text-center">
                  <i class="dripicons-wrong h1"></i>
                  <h4 class="mt-2">Oh snap!</h4>
                  <p class="mt-3">
                    Cras mattis consectetur purus sit amet fermentum. Cras justo
                    odio, dapibus ac facilisis in, egestas eget quam.
                  </p>
                </div>
              </div>

              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-light"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-danger">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .action {
    width: 10% !important;
  }
`;

export default Category;

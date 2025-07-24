/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";

const AllProduct = () => {
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
                  All Product
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
                    <Link to="/create-product" className="btn btn-danger mb-2">
                      <i className="mdi mdi-plus-circle me-2"></i> Create
                      Product
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
                        <th className="action" style={{ width: "85px" }}>
                          Action
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>
                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="customCheck2"
                            />
                            <label
                              className="form-check-label"
                              for="customCheck2"
                            >
                              &nbsp;
                            </label>
                          </div>
                        </td>
                        <td>
                          <img
                            src="assets/images/products/product-1.jpg"
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
                              Amazing Modern Chair
                            </Link>
                            <br />
                            <span className="text-warning mdi mdi-star"></span>
                            <span className="text-warning mdi mdi-star"></span>
                            <span className="text-warning mdi mdi-star"></span>
                            <span className="text-warning mdi mdi-star"></span>
                            <span className="text-warning mdi mdi-star"></span>
                          </p>
                        </td>
                        <td>Aeron Chairs</td>
                        <td>09/12/2018</td>
                        <td>$148.66</td>

                        <td>254</td>
                        <td>
                          <span className="badge bg-success">Active</span>
                        </td>

                        <td className="table-action">
                          <Tooltip title="View" arrow>
                            <Link to="#" className="action-icon">
                              <i className="mdi mdi-eye"></i>
                            </Link>
                          </Tooltip>

                          <Tooltip title="Edit" arrow>
                            <Link to="#" className="action-icon">
                              <i className="mdi mdi-square-edit-outline"></i>
                            </Link>
                          </Tooltip>

                          <Tooltip title="Delete" arrow>
                            <Link to="#" className="action-icon">
                              <i className="mdi mdi-delete"></i>
                            </Link>
                          </Tooltip>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              {/* <!-- end card-body--> */}
            </div>
            {/* <!-- end card--> */}
          </div>
          {/* <!-- end col --> */}
        </div>
        {/* <!-- end row --> */}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .action {
    width: 10% !important;
  }
`;

export default AllProduct;

/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-custom">
      <ul className="list-unstyled topbar-menu float-end mb-0">
        <li className="dropdown notification-list d-lg-none">
          <a
            className="nav-link dropdown-toggle arrow-none"
            data-bs-toggle="dropdown"
            href="#"
            role="button"
            aria-haspopup="false"
            aria-expanded="false"
          >
            <i className="dripicons-search noti-icon"></i>
          </a>
          <div className="dropdown-menu dropdown-menu-animated dropdown-lg p-0">
            <form className="p-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search ..."
                aria-label="Recipient's username"
              />
            </form>
          </div>
        </li>

        <li className="dropdown notification-list d-none d-sm-inline-block">
          <a
            className="nav-link dropdown-toggle arrow-none"
            data-bs-toggle="dropdown"
            href="#"
            role="button"
            aria-haspopup="false"
            aria-expanded="false"
          >
            <i className="dripicons-view-apps noti-icon"></i>
          </a>
          <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated dropdown-lg p-0">
            <div className="p-2">
              <div className="row g-0">
                <div className="col">
                  <a className="dropdown-icon-item" href="#">
                    <img src="assets/images/brands/slack.png" alt="slack" />
                    <span>Slack</span>
                  </a>
                </div>
                <div className="col">
                  <a className="dropdown-icon-item" href="#">
                    <img src="assets/images/brands/github.png" alt="Github" />
                    <span>GitHub</span>
                  </a>
                </div>
                <div className="col">
                  <a className="dropdown-icon-item" href="#">
                    <img
                      src="assets/images/brands/dribbble.png"
                      alt="dribbble"
                    />
                    <span>Dribbble</span>
                  </a>
                </div>
              </div>

              <div className="row g-0">
                <div className="col">
                  <a className="dropdown-icon-item" href="#">
                    <img
                      src="assets/images/brands/bitbucket.png"
                      alt="bitbucket"
                    />
                    <span>Bitbucket</span>
                  </a>
                </div>
                <div className="col">
                  <a className="dropdown-icon-item" href="#">
                    <img src="assets/images/brands/dropbox.png" alt="dropbox" />
                    <span>Dropbox</span>
                  </a>
                </div>
                <div className="col">
                  <a className="dropdown-icon-item" href="#">
                    <img src="assets/images/brands/g-suite.png" alt="G Suite" />
                    <span>G Suite</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </li>

        {/* ======== setting ======== */}
        <li className="notification-list">
          <Link className="nav-link end-bar-toggle" to="#">
            <i className="dripicons-gear noti-icon"></i>
          </Link>
        </li>

        <li className="dropdown notification-list">
          <a
            className="nav-link dropdown-toggle nav-user arrow-none me-0"
            data-bs-toggle="dropdown"
            href="#"
            role="button"
            aria-haspopup="false"
            aria-expanded="false"
          >
            <span className="account-user-avatar">
              <img
                src="assets/images/users/avatar-1.jpg"
                alt="user-image"
                className="rounded-circle"
              />
            </span>
            <span>
              <span className="account-user-name">Dominic Keller</span>
              <span className="account-position">Founder</span>
            </span>
          </a>
          <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated topbar-dropdown-menu profile-dropdown">
            <div className="dropdown-header noti-title">
              <h6 className="text-overflow m-0">Welcome !</h6>
            </div>

            <a href="javascript:void(0);" className="dropdown-item notify-item">
              <i className="mdi mdi-account-circle me-1"></i>
              <span>My Account</span>
            </a>

            <a href="javascript:void(0);" className="dropdown-item notify-item">
              <i className="mdi mdi-account-edit me-1"></i>
              <span>Settings</span>
            </a>

            <a href="javascript:void(0);" className="dropdown-item notify-item">
              <i className="mdi mdi-lifebuoy me-1"></i>
              <span>Support</span>
            </a>

            <a href="javascript:void(0);" className="dropdown-item notify-item">
              <i className="mdi mdi-lock-outline me-1"></i>
              <span>Lock Screen</span>
            </a>

            <a href="javascript:void(0);" className="dropdown-item notify-item">
              <i className="mdi mdi-logout me-1"></i>
              <span>Logout</span>
            </a>
          </div>
        </li>
      </ul>
      <button className="button-menu-mobile open-left disable-btn">
        <i className="mdi mdi-menu"></i>
      </button>

      <div className="app-search dropdown d-none d-lg-block">
        {/* <form>
          <div className="input-group">
            <input
              type="text"
              className="form-control dropdown-toggle"
              placeholder="Search..."
              id="top-search"
            />
            <span className="mdi mdi-magnify search-icon"></span>
            <button className="input-group-text btn-primary" type="submit">
              Search
            </button>
          </div>
        </form> */}

          <div className="page-title-right">
              <form className="d-flex">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control form-control-light"
                    id="dash-daterange"
                  />
                  <span className="input-group-text bg-success border-success text-white">
                    <i className="mdi mdi-calendar-range font-13"></i>
                  </span>
                </div>
                <a href="javascript: void(0);" className="btn btn-success ms-2">
                  <i className="mdi mdi-autorenew"></i>
                </a>
              </form>
            </div>
      </div>
    </div>
  );
};

export default Navbar;

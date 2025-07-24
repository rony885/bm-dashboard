/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const LeftSidebar = () => {
  const location = useLocation(); // Get current URL path
  const [activeMenu, setActiveMenu] = useState("");
  const [activeSubMenu, setActiveSubMenu] = useState("");
  // Sync active menu and submenu with the current URL
  useEffect(() => {
    const path = location.pathname;
    // Define menu mappings based on paths
    const menuMappings = {
      "/": "dashboard",
      // product-catalog
      "/all-products": "product-catalog",
      "/create-product": "product-catalog",
      "/product-update": "product-catalog",
      "/product-price": "product-catalog",
      "/category": "product-catalog",
      "/sub-category": "product-catalog",
      "/brand": "product-catalog",
      "/unit": "product-catalog",
      "/warehouse": "product-catalog",
      // inventory-manager
      "/current-stock": "inventory-manager",
      "/low-stock": "inventory-manager",
      "/all-stock": "inventory-manager",
      "/transfer-stock": "inventory-manager",
      "/price-list": "inventory-manager",
      // sales-ul
      "/sales-list": "sales-ul",
      "/new-sale": "sales-ul",
      "/sale-update": "sales-ul",
      "/sale-view": "sales-ul",
      "/sale-collections": "sales-ul",
      "/customers": "sales-ul",
      "/customer-payments": "sales-ul",
      "/customer-ledger": "sales-ul",
      "/sales-return-list": "sales-ul",
      "/new-sale-return": "sales-ul",
      "/sale-return-update": "sales-ul",
      // purchase-ul
      "/purchases-list": "purchase-ul",
      "/new-purchase": "purchase-ul",
      "/purchase-update": "purchase-ul",
      "/purchase-view": "purchase-ul",
      "/purchases-payments": "purchase-ul",
      "/suppliers": "purchase-ul",
      "/supplier-payments": "purchase-ul",
      "/supplier-ledger": "purchase-ul",
      "/purchases-return-list": "purchase-ul",
      "/new-purchase-return": "purchase-ul",
      "/purchase-return-update": "purchase-ul",
      // expense-tracker
      "/expenses-list": "expense-tracker",
      "/expense-category": "expense-tracker",
      "/expense-sub-category": "expense-tracker",
      // accounts-banking
      "/all-accounts": "accounts-banking",
      "/account-ledger": "accounts-banking",
      "/investment-ledger": "accounts-banking",
      "/fund-transfer": "accounts-banking",
      "/investments": "accounts-banking",
      "/withdraws": "accounts-banking",
      // team-hr
      "/all-employees": "team-hr",
      "/create-employee": "team-hr",
      "/employee-update": "team-hr",
      "/department": "team-hr",
      "/designation": "team-hr",
      // business-reports
      "/report-overview": "business-reports",
      "/sales-report": "business-reports",
      "/sales-due-report": "business-reports",
      "/profit-report": "business-reports",
      "/purchase-report": "business-reports",
      "/purchase-due-report": "business-reports",
      "/expense-report": "business-reports",
      "/investment-report": "business-reports",
      "/transfer-report": "business-reports",
      "/withdraw-report": "business-reports",
      "/product-sales-report": "business-reports",
      "/product-purchase-report": "business-reports",
      "/audit-inspection": "business-reports",
      // app-settings
      "/company-info": "app-settings",
      "/all-users": "app-settings",
      "/utilities": "app-settings",
      "/my-profile": "app-settings",
      "/change-password": "app-settings",
    };
    // Define submenu mappings based on paths
    const subMenuMappings = {
      "/": "",
      // product-catalog
      "/all-products": "all-products",
      "/create-product": "create-product",
      "/product-update": "product-update",
      "/product-price": "product-price",
      "/category": "category",
      "/sub-category": "sub-category",
      "/brand": "brand",
      "/unit": "unit",
      "/warehouse": "warehouse",
      // inventory-manager
      "/current-stock": "current-stock",
      "/low-stock": "low-stock",
      "/all-stock": "all-stock",
      "/transfer-stock": "transfer-stock",
      "/price-list": "price-list",
      // sales-ul
      "/sales-list": "sales-list",
      "/new-sale": "new-sale",
      "/sale-update": "sale-update",
      "/sale-view": "sale-view",
      "/sale-collections": "sale-collections",
      "/customers": "customers",
      "/customer-payments": "customer-payments",
      "/customer-ledger": "customer-ledger",
      "/sales-return-list": "sales-return-list",
      "/new-sale-return": "new-sale-return",
      "/sale-return-update": "sale-return-update",
      // purchase-ul
      "/purchases-list": "purchases-list",
      "/new-purchase": "new-purchase",
      "/purchase-update": "purchase-update",
      "/purchase-view": "purchase-view",
      "/purchases-payments": "purchases-payments",
      "/suppliers": "suppliers",
      "/supplier-payments": "/supplier-payments",
      "/supplier-ledger": "/supplier-ledger",
      "/purchases-return-list": "purchases-return-list",
      "/new-purchase-return": "new-purchase-return",
      "/purchase-return-update": "purchase-return-update",
      // expense-tracker
      "/expenses-list": "expenses-list",
      "/expense-category": "expense-category",
      "/expense-sub-category": "expense-sub-category",
      // accounts-banking
      "/all-accounts": "all-accounts",
      "/account-ledger": "account-ledger",
      "/investment-ledger": "investment-ledger",
      "/fund-transfer": "fund-transfer",
      "/investments": "investments",
      "/withdraws": "withdraws",
      // team-hr
      "/all-employees": "all-employees",
      "/create-employee": "create-employee",
      "/employee-update": "employee-update",
      "/department": "department",
      "/designation": "designation",
      // business-reports
      "/report-overview": "report-overview",
      "/sales-report": "sales-report",
      "/sales-due-report": "sales-due-report",
      "/profit-report": "profit-report",
      "/purchase-report": "purchase-report",
      "/purchase-due-report": "purchase-due-report",
      "/expense-report": "expense-report",
      "/investment-report": "investment-report",
      "/transfer-report": "transfer-report",
      "/withdraw-report": "withdraw-report",
      "/product-sales-report": "product-sales-report",
      "/product-purchase-report": "product-purchase-report",
      "/audit-inspection": "audit-inspection",
      // app-settings
      "/company-info": "company-info",
      "/all-users": "all-users",
      "/utilities": "utilities",
      "/my-profile": "my-profile",
      "/change-password": "change-password",
    };
    // Update active menu and active submenu based on the URL path
    // product
    if (path.startsWith("/product-update")) {
      setActiveMenu("product-catalog");
      setActiveSubMenu("all-products");
    } else if (path.startsWith("/product-price")) {
      setActiveMenu("product-catalog");
      setActiveSubMenu("all-products");
    }
    // sale
    else if (path.startsWith("/sale-view")) {
      setActiveMenu("sales-ul");
      setActiveSubMenu("sales-list");
    } else if (path.startsWith("/sale-update")) {
      setActiveMenu("sales-ul");
      setActiveSubMenu("sales-list");
    } else if (path.startsWith("/customer-payments")) {
      setActiveMenu("sales-ul");
      setActiveSubMenu("customers");
    } else if (path.startsWith("/customer-ledger")) {
      setActiveMenu("sales-ul");
      setActiveSubMenu("customers");
    } else if (path.startsWith("/sale-return-update")) {
      setActiveMenu("sales-ul");
      setActiveSubMenu("sales-return-list");
    }
    // purchase
    else if (path.startsWith("/purchase-view")) {
      setActiveMenu("purchase-ul");
      setActiveSubMenu("purchases-list");
    } else if (path.startsWith("/purchase-update")) {
      setActiveMenu("purchase-ul");
      setActiveSubMenu("purchases-list");
    } else if (path.startsWith("/supplier-payments")) {
      setActiveMenu("purchase-ul");
      setActiveSubMenu("suppliers");
    } else if (path.startsWith("/supplier-ledger")) {
      setActiveMenu("purchase-ul");
      setActiveSubMenu("suppliers");
    } else if (path.startsWith("/purchase-return-update")) {
      setActiveMenu("purchase-ul");
      setActiveSubMenu("purchases-return-list");
    }
    // account
    else if (path.startsWith("/account-ledger")) {
      setActiveMenu("accounts-banking");
      setActiveSubMenu("all-accounts");
    } else if (path.startsWith("/investment-ledger")) {
      setActiveMenu("accounts-banking");
      setActiveSubMenu("all-accounts");
    }
    // employee
    else if (path.startsWith("/employee-update")) {
      setActiveMenu("team-hr");
      setActiveSubMenu("all-employees");
    }
    // default
    else {
      setActiveMenu(menuMappings[path] || "");
      setActiveSubMenu(subMenuMappings[path] || "");
    }
  }, [location.pathname]);
  // Handle submenu toggle (open/close)
  const handleSubMenuToggle = (menu) => {
    setActiveMenu((prevMenu) => (prevMenu === menu ? "" : menu));
  };

  return (
    <div className="leftside-menu">
      {/* LOGO */}
      <Link to="/" className="logo text-center logo-light">
        <span className="logo-lg">
          <img src="/assets/images/logo.png" alt="" height="16" />
        </span>
        <span className="logo-sm">
          <img src="/assets/images/logo_sm.png" alt="" height="16" />
        </span>
      </Link>

      <Link to="/" className="logo text-center logo-dark">
        <span className="logo-lg">
          <img src="/assets/images/logo-dark.png" alt="" height="16" />
        </span>
        <span className="logo-sm">
          <img src="/assets/images/logo_sm_dark.png" alt="" height="16" />
        </span>
      </Link>

      <div className="h-100" id="leftside-menu-container" data-simplebar>
        <ul className="side-nav">
          <li className="side-nav-title side-nav-item">Navigation</li>

          <li
            className={`side-nav-item ${
              activeMenu === "dashboard" ? "menuitem-active" : ""
            }`}
          >
            <Link to="/" className="side-nav-link">
              <i className="uil-home-alt"></i>
              <span className="badge bg-success float-end">4</span>
              <span> Dashboards </span>
            </Link>
          </li>

          <li className="side-nav-title side-nav-item">Products</li>

          <li
            className={`side-nav-item ${
              activeMenu === "product-catalog" ? "menuitem-active" : ""
            }`}
          >
            <Link
              to="#"
              className="side-nav-link"
              onClick={() => handleSubMenuToggle("product-catalog")}
            >
              <i className="uil-store"></i>
              <span> Products </span>
              <span className="menu-arrow"></span>
            </Link>
            <div
              className={`collapse ${
                activeMenu === "product-catalog" ? "show" : ""
              }`}
              id="sidebarEcommerce"
            >
              <ul className="side-nav-second-level">
                <li
                  className={
                    activeSubMenu === "all-products" ? "menuitem-active" : ""
                  }
                >
                  <Link
                    className={activeSubMenu === "all-products" ? "active" : ""}
                    to="/all-products"
                  >
                    All Products
                  </Link>
                </li>
                <li
                  className={
                    activeSubMenu === "create-product" ? "menuitem-active" : ""
                  }
                >
                  <Link
                    className={
                      activeSubMenu === "create-product" ? "active" : ""
                    }
                    to="/create-product"
                  >
                    Create Product
                  </Link>
                </li>

                <li
                  className={
                    activeSubMenu === "category" ? "menuitem-active" : ""
                  }
                >
                  <Link
                    className={activeSubMenu === "category" ? "active" : ""}
                    to="/category"
                  >
                    Category
                  </Link>
                </li>

                <li
                  className={
                    activeSubMenu === "sub-category" ? "menuitem-active" : ""
                  }
                >
                  <Link
                    className={activeSubMenu === "sub-category" ? "active" : ""}
                    to="/sub-category"
                  >
                    Sub Category
                  </Link>
                </li>

                <li
                  className={activeSubMenu === "brand" ? "menuitem-active" : ""}
                >
                  <Link
                    className={activeSubMenu === "brand" ? "active" : ""}
                    to="/brand"
                  >
                    Brand
                  </Link>
                </li>

                <li
                  className={activeSubMenu === "unit" ? "menuitem-active" : ""}
                >
                  <Link
                    className={activeSubMenu === "unit" ? "active" : ""}
                    to="/unit"
                  >
                    Unit
                  </Link>
                </li>

                <li
                  className={
                    activeSubMenu === "warehouse" ? "menuitem-active" : ""
                  }
                >
                  <Link
                    className={activeSubMenu === "warehouse" ? "active" : ""}
                    to="/warehouse"
                  >
                    Warehouse
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          <li
            className={`side-nav-item ${
              activeMenu === "inventory-manager" ? "menuitem-active" : ""
            }`}
          >
            <Link
              to="#"
              className="side-nav-link"
              onClick={() => handleSubMenuToggle("inventory-manager")}
            >
              <i className="uil uil-store"></i>
              <span> Inventory Manager </span>

              <span className="menu-arrow"></span>
            </Link>
            <div
              className={`collapse ${
                activeMenu === "inventory-manager" ? "show" : ""
              }`}
              id="sidebarEcommerce"
            >
              <ul className="side-nav-second-level">
                <li
                  className={
                    activeSubMenu === "current-stock" ? "menuitem-active" : ""
                  }
                >
                  <Link
                    className={
                      activeSubMenu === "current-stock" ? "active" : ""
                    }
                    to="/current-stock"
                  >
                    Current Stock
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          <li className="side-nav-title side-nav-item">Sales</li>

          <li
            className={`side-nav-item ${
              activeMenu === "sales-ul" ? "menuitem-active" : ""
            }`}
          >
            <Link
              to="#"
              className="side-nav-link"
              onClick={() => handleSubMenuToggle("sales-ul")}
            >
              <i className="uil-store"></i>
              <span> Sales </span>
              <span className="menu-arrow"></span>
            </Link>
            <div
              className={`collapse ${activeMenu === "sales-ul" ? "show" : ""}`}
              id="sidebarEcommerce"
            >
              <ul className="side-nav-second-level">
                <li
                  className={
                    activeSubMenu === "sales-list" ? "menuitem-active" : ""
                  }
                >
                  <Link
                    className={activeSubMenu === "sales-list" ? "active" : ""}
                    to="/sales-list"
                  >
                    Sales List
                  </Link>
                </li>
                <li
                  className={
                    activeSubMenu === "new-sale" ? "menuitem-active" : ""
                  }
                >
                  <Link
                    className={activeSubMenu === "new-sale" ? "active" : ""}
                    to="/new-sale"
                  >
                    New Sale
                  </Link>
                </li>

                {/* <li
                  className={
                    activeSubMenu === "sale-update" ? "menuitem-active" : ""
                  }
                >
                  <Link
                    className={activeSubMenu === "sale-update" ? "active" : ""}
                    to="/sale-update"
                  >
                    Sale Update
                  </Link>
                </li>

                <li
                  className={
                    activeSubMenu === "sale-view" ? "menuitem-active" : ""
                  }
                >
                  <Link
                    className={activeSubMenu === "sale-view" ? "active" : ""}
                    to="/sale-view"
                  >
                    Sale View
                  </Link>
                </li> */}

                <li
                  className={
                    activeSubMenu === "sale-collections"
                      ? "menuitem-active"
                      : ""
                  }
                >
                  <Link
                    className={
                      activeSubMenu === "sale-collections" ? "active" : ""
                    }
                    to="/sale-collections"
                  >
                    Sale Collections
                  </Link>
                </li>

                <li
                  className={
                    activeSubMenu === "customers" ? "menuitem-active" : ""
                  }
                >
                  <Link
                    className={activeSubMenu === "customers" ? "active" : ""}
                    to="/customers"
                  >
                    Customers
                  </Link>
                </li>

                {/* <li
                  className={
                    activeSubMenu === "customer-payments"
                      ? "menuitem-active"
                      : ""
                  }
                >
                  <Link
                    className={
                      activeSubMenu === "customer-payments" ? "active" : ""
                    }
                    to="/customer-payments"
                  >
                    Customer Payments
                  </Link>
                </li> */}
              </ul>
            </div>
          </li>
        </ul>

        {/* Help Box */}
        <div className="help-box help-box-light text-center">
          <Link to="#" className="float-end close-btn text-body">
            <i className="mdi mdi-close"></i>
          </Link>
          <img
            src="/assets/images/help-icon.svg"
            height="90"
            alt="Helper Icon"
          />
          <h5 className="mt-3">Unlimited Access</h5>
          <p className="mb-3">
            Upgrade to plan to get access to unlimited reports
          </p>
          <Link to="#" className="btn btn-outline-primary btn-sm">
            Upgrade
          </Link>
        </div>

        <div className="clearfix"></div>
      </div>
    </div>
  );
};

export default LeftSidebar;

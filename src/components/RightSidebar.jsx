/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
// import React from "react";
// import { Link } from "react-router-dom";

// const RightSidebar = () => {
//   return (
//     <>
//       <div className="end-bar">
//         <div className="rightbar-title">
//           <Link to="#" className="end-bar-toggle float-end">
//             <i className="dripicons-cross noti-icon"></i>
//           </Link>
//           <h5 className="m-0">Customization</h5>
//         </div>

//         <div className="rightbar-content h-100" data-simplebar>
//           <div className="p-3">
//             <div className="alert alert-warning" role="alert">
//               <strong>Customize </strong> the overall color scheme, layout
//               width, etc.
//             </div>

//             {/* <!-- Settings --> */}
//             <h5 className="mt-3">Color Scheme</h5>
//             <hr className="mt-1" />

//             <div className="form-check form-switch mb-1">
//               <input
//                 type="checkbox"
//                 className="form-check-input"
//                 name="color-scheme-mode"
//                 value="light"
//                 id="light-mode-check"
//                 checked
//               />
//               <label className="form-check-label" for="light-mode-check">
//                 Light Mode
//               </label>
//             </div>

//             <div className="form-check form-switch mb-1">
//               <input
//                 type="checkbox"
//                 className="form-check-input"
//                 name="color-scheme-mode"
//                 value="dark"
//                 id="dark-mode-check"
//               />
//               <label className="form-check-label" for="dark-mode-check">
//                 Dark Mode
//               </label>
//             </div>

//             <div className="form-check form-switch mb-1">
//               <input
//                 type="checkbox"
//                 className="form-check-input"
//                 name="color-scheme-mode"
//                 value="light"
//                 id="light-mode-check"
//                 checked
//               />
//               <label className="form-check-label" for="light-mode-check">
//                 Semi Dark Mode
//               </label>
//             </div>

//             {/* <!-- Width --> */}
//             <h5 className="mt-4">Width</h5>
//             <hr className="mt-1" />
//             <div className="form-check form-switch mb-1">
//               <input
//                 type="checkbox"
//                 className="form-check-input"
//                 name="width"
//                 value="fluid"
//                 id="fluid-check"
//                 checked
//               />
//               <label className="form-check-label" for="fluid-check">
//                 Fluid
//               </label>
//             </div>
//             <div className="form-check form-switch mb-1">
//               <input
//                 type="checkbox"
//                 className="form-check-input"
//                 name="width"
//                 value="boxed"
//                 id="boxed-check"
//               />
//               <label className="form-check-label" for="boxed-check">
//                 Boxed
//               </label>
//             </div>

//             <div className="d-grid mt-4">
//               <button className="btn btn-primary" id="resetBtn">
//                 Reset to Default
//               </button>
//             </div>
//           </div>
//           {/* <!-- end padding--> */}
//         </div>
//       </div>

//       <div className="rightbar-overlay"></div>
//     </>
//   );
// };

// export default RightSidebar;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const defaultConfig = {
  darkMode: false,
  leftSideBarTheme: "dark", // semi-dark
  layoutBoxed: false, // fluid
  leftSidebarCondensed: false,
  leftSidebarScrollable: false,
  showRightSidebarOnStart: false,
};

const RightSidebar = () => {
  const [config, setConfig] = useState(defaultConfig);

  // ✅ Apply localStorage or defaults on first render
  useEffect(() => {
    const saved = localStorage.getItem("layoutConfig");

    if (saved) {
      const parsed = JSON.parse(saved);
      setConfig(parsed);
      document.body.setAttribute("data-layout-config", JSON.stringify(parsed));
    } else {
      localStorage.setItem("layoutConfig", JSON.stringify(defaultConfig));
      document.body.setAttribute(
        "data-layout-config",
        JSON.stringify(defaultConfig)
      );
    }
  }, []);

  // ✅ Sync changes to localStorage and <body> config
  useEffect(() => {
    localStorage.setItem("layoutConfig", JSON.stringify(config));
    document.body.setAttribute("data-layout-config", JSON.stringify(config));
  }, [config]);

  const setColorScheme = (mode) => {
    if (mode === "light") {
      setConfig({ ...config, darkMode: false, leftSideBarTheme: "light" });
    } else if (mode === "dark") {
      setConfig({ ...config, darkMode: true, leftSideBarTheme: "dark" });
    } else if (mode === "semi-dark") {
      setConfig({ ...config, darkMode: false, leftSideBarTheme: "dark" });
    }
  };

  const setWidth = (boxed) => {
    setConfig({ ...config, layoutBoxed: boxed });
  };

  const resetToDefault = () => {
    setConfig(defaultConfig);
  };

  return (
    <>
      <div className="end-bar">
        <div className="rightbar-title">
          <Link to="#" className="end-bar-toggle float-end">
            <i className="dripicons-cross noti-icon"></i>
          </Link>
          <h5 className="m-0">Customization</h5>
        </div>

        <div className="rightbar-content h-100" data-simplebar>
          <div className="p-3">
            <div className="alert alert-warning" role="alert">
              <strong>Customize</strong> the overall color scheme, layout width,
              etc.
            </div>

            <h5 className="mt-3">Color Scheme</h5>
            <hr className="mt-1" />

            {/* Light Mode */}
            <div className="form-check form-switch mb-1">
              <input
                type="radio"
                className="form-check-input"
                name="color-scheme-mode"
                id="light-mode-check"
                checked={
                  !config.darkMode && config.leftSideBarTheme === "light"
                }
                onChange={() => setColorScheme("light")}
              />
              <label className="form-check-label" htmlFor="light-mode-check">
                Light Mode
              </label>
            </div>

            {/* Dark Mode */}
            <div className="form-check form-switch mb-1">
              <input
                type="radio"
                className="form-check-input"
                name="color-scheme-mode"
                id="dark-mode-check"
                checked={config.darkMode}
                onChange={() => setColorScheme("dark")}
              />
              <label className="form-check-label" htmlFor="dark-mode-check">
                Dark Mode
              </label>
            </div>

            {/* Semi Dark Mode */}
            <div className="form-check form-switch mb-1">
              <input
                type="radio"
                className="form-check-input"
                name="color-scheme-mode"
                id="semi-dark-mode-check"
                checked={!config.darkMode && config.leftSideBarTheme === "dark"}
                onChange={() => setColorScheme("semi-dark")}
              />
              <label
                className="form-check-label"
                htmlFor="semi-dark-mode-check"
              >
                Semi Dark Mode
              </label>
            </div>

            <h5 className="mt-4">Width</h5>
            <hr className="mt-1" />
            <div className="form-check form-switch mb-1">
              <input
                type="radio"
                className="form-check-input"
                name="width"
                id="fluid-check"
                checked={!config.layoutBoxed}
                onChange={() => setWidth(false)}
              />
              <label className="form-check-label" htmlFor="fluid-check">
                Fluid
              </label>
            </div>

            <div className="form-check form-switch mb-1">
              <input
                type="radio"
                className="form-check-input"
                name="width"
                id="boxed-check"
                checked={config.layoutBoxed}
                onChange={() => setWidth(true)}
              />
              <label className="form-check-label" htmlFor="boxed-check">
                Boxed
              </label>
            </div>

            <div className="d-grid mt-4">
              <button className="btn btn-primary" onClick={resetToDefault}>
                Reset to Default
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="rightbar-overlay"></div>
    </>
  );
};

export default RightSidebar;

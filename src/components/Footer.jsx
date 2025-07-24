/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Footer = () => {
  return (
   <footer className="footer">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <script>
                  document.write(new Date().getFullYear());
                </script>
                © Hyper - Coderthemes.com
              </div>
              <div className="col-md-6">
                <div className="text-md-end footer-links d-none d-md-block">
                  <a href="javascript: void(0);">About</a>
                  <a href="javascript: void(0);">Support</a>
                  <a href="javascript: void(0);">Contact Us</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
  )
}

export default Footer

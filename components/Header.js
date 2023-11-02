
import React from 'react';


const Header = () => (
  <div>
    <>

      {/* BEGIN HEADER */}
  <header id="header">
    <div id="top-bar">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <ul id="top-buttons">
              <li>
                <a href="#">
                  <i className="fa fa-sign-in" /> Login
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-pencil-square-o" /> Register
                </a>
              </li>
              <li className="divider" />
              <li>
                <div className="language-switcher">
                  <span>
                    <i className="fa fa-globe" /> English
                  </span>
                  <ul>
                    <li>
                      <a href="#">Deutsch</a>
                    </li>
                    <li>
                      <a href="#">Español</a>
                    </li>
                    <li>
                      <a href="#">Français</a>
                    </li>
                    <li>
                      <a href="#">Português</a>
                    </li>
                  </ul>
                </div>
              </li>
              {/* BOOTSTRAP SEARCH BEGINS

								<li>
								<form id="site-search">
									<span><i class="fa fa-search"></i></span>
									<input type="text" name="q" placeholder="Search">
								</form>	
								</li> 

								BOOTSTRAP SEARCH ENDS */}
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div id="nav-section">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <a href="/" className="nav-logo">
              <img src="images/logo.png" alt="One Ring Rentals" />
            </a>
            {/* BEGIN SEARCH */}
            <div id="sb-search" className="sb-search">
              <form>
                <input
                  className="sb-search-input"
                  placeholder="Search..."
                  type="text"
                  defaultValue=""
                  name="search"
                  id="search"
                />
                <input
                  className="sb-search-submit"
                  type="submit"
                  defaultValue=""
                />
                <i className="fa fa-search sb-icon-search" />
              </form>
            </div>
            {/* END SEARCH */}
            {/* BEGIN MAIN MENU */}
            <nav className="navbar">
              <button id="nav-mobile-btn">
                <i className="fa fa-bars" />
              </button>
              <ul className="nav navbar-nav">
                <li>
                  <a href="#">Find a Rental</a>
                </li>
                <li>
                  <a href="#">List your rental</a>
                </li>
                <li>
                  <a href="#">Regions</a>
                </li>
                <li>
                  <a href="#">Travel Guides</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Regions</a>
                </li>
              </ul>
            </nav>
            {/* END MAIN MENU */}
          </div>
        </div>
      </div>
    </div>
  </header>
</>

  </div>
)
export default Header;

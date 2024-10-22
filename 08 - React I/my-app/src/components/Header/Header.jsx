import React from "react";
import brand from "../../assets/img/brand.png";
import "../Header/styles.css"

// export class Header extends React.Component
export function Header () {
  // render() {
    return (
      <header>
        <nav id="navBar">
          <div className="navBrand">
            <img src={brand} alt="" />
            <h1>Space Flight News</h1>
          </div>

          <ul className="navList">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Trending</a>
            </li>
            <li>
              <a href="/">Categories</a>
            </li>
            <li>
              <a href="/">About Us</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
// }

// export default Header;

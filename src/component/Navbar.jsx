import { useState } from "react";
import zaralogo from "../assets/ZaraLogo.svg";
import chevron from "../assets/chevron-down.svg";
import "../style/Navbar.css";
import Collectiondropdown from "./CollectionDropDown";

function Navbar() {
  const [isDropdownMenu, updateIsDropdownMenu] = useState(false);

  const handleCollectionClick = () => {
    updateIsDropdownMenu(!isDropdownMenu);
  };

  return (
    <nav className="navbar-menu">
      <img className="navbar-menu-logo" src={zaralogo} alt="Zara logo" />
      <ul className="navbar-menu-list">
        <li className="navbar-list-item home">
          <a className="navbar-list-item-link home" href="google.com">
            Home
          </a>
        </li>
        <li
          className="navbar-list-item collection"
          onClick={handleCollectionClick}
        >
          <a className="navbar-list-item-link" href="google.com">
            Collections
          </a>
          <button className="navbar-collection-chevron-btn">
            <img src={chevron} alt="chevron-down" />
          </button>
        </li>
        <li className="navbar-list-item">
          <a className="navbar-list-item-link" href="google.com">
            About
          </a>
        </li>
        <li className="navbar-list-item">
          <a className="navbar-list-item-link" href="google.com">
            Contact
          </a>
        </li>
        <li className="navbar-list-item">
          <a className="navbar-list-item-link" href="google.com">
            Shop
          </a>
        </li>
      </ul>
      {isDropdownMenu && <Collectiondropdown />}
    </nav>
  );
}

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";
import "./App.css";
import { TiShoppingCart } from "react-icons/ti";

function Navbar() {
  useCart();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-success">
      <div className="container mt-4 d-flex justify-content-between">
        <Link className="navbar-brand text-white" to="/">
          MyStore
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/cart">
              <TiShoppingCart style={{ fontSize: "30px", color: "red" }} />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

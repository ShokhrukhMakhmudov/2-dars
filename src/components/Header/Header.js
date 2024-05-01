import { useState } from "react";
import "./header.css";

function Login() {
  console.log("Log in");
}

function Header() {
  const [show, setShow] = useState();

  return (
    <header>
      <div className="container header-container">
        <a href="#" className="logo">
          LOGO
        </a>
        <nav>
          <ul className="list">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>

        {show ? (
          <button
            onClick={() => {
              setShow(false);
            }}
            className="header-btn">
            Log in
          </button>
        ) : (
          <button
            onClick={() => {
              setShow(true);
            }}
            className="header-btn">
            Sign up
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;

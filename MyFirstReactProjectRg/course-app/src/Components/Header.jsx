import React from "react";
import "../css/Header.css";
function Header() {
  return (
    <>
      <div className="header">
        <nav className="header-nav">
          <h1>Kurslarım</h1>
          <ul>
            <li>Anasayfa</li>
            <li>Hakkımda</li>
            <li>İletişim</li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;

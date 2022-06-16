import React from "react";
import { Link } from "react-router-dom";

//icons
import { BsLock, BsHeadset, BsPersonPlus, BsPerson } from "react-icons/bs";

function Header() {
  return (
    <div>
      <div class="logo col-md-6 row">
        <a href="/">
          <img
            src={process.env.PUBLIC_URL + "/img/logo.png"}
            alt="CGV"
            title="CGV"
            width="117px"
          />
          <span>CULTUREPLEX</span>
        </a>
      </div>
      <div class="headerMenus col-md-6">
        <div class="hmList">
          <ul>
            <li>
              <BsLock size="25" />
            </li>
            <li>로그인</li>
          </ul>
          <ul>
            <li>
              <BsPersonPlus size="25" />
            </li>
            <li>회원가입</li>
          </ul>
          <Link to="/myPage">
            <ul>
              <li>
                <BsPerson size="25" />
              </li>
              <li>MY CGV</li>
            </ul>
          </Link>
          <ul>
            <li>
              <BsHeadset size="25" />
            </li>
            <li>고객센터</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;

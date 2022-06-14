import React from "react";
import { BsX, BsLock, BsPersonPlus, BsPerson, BsHeadset } from "react-icons/bs";

function openNav() {
  document.getElementById("sidemenu").style.width = "250px";
}

function closeNav() {
  document.getElementById("sidemenu").style.width = "0";
}

function ReactiveHeader() {
  return (
    <div>
      <div className="menu-bar">
        <button className="openbtn" onClick={openNav}>
          ☰
        </button>
        <div id="sidemenu" className="sidepanel">
          <ul>
            <li class="closebtn" onClick={closeNav}>
              <BsX size="40" />
            </li>
          </ul>
          <ul className="slideMenuEle">
            <li>
              <BsLock size="25" /> &nbsp; 로그인
            </li>
          </ul>
          <ul>
            <li>
              <BsPersonPlus size="25" /> &nbsp; 회원가입
            </li>
          </ul>
          <ul>
            <li>
              <BsPerson size="25" /> &nbsp; MY CGV
            </li>
          </ul>
          <ul>
            <li>
              <BsHeadset size="25" /> &nbsp; 고객센터
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ReactiveHeader;

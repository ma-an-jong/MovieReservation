import React from "react";
import { Link } from "react-router-dom";


function Nav(){

    return(
        <div class="mainMenu row">
            <ul>
                <Link to="/Movies" className="navMenu">
                    <li>์ํ</li>
                </Link>
                <Link to="/Theater" className="navMenu">
                    <li>๊ทน์ฅ</li>
                </Link>
            </ul>
        </div>  
    );
};

export default Nav;
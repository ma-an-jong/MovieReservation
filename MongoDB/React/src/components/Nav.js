import React from "react";
import { Link } from "react-router-dom";


function Nav(){

    return(
        <div class="mainMenu row">
            <ul>
                <Link to="/Movies" className="navMenu">
                    <li>영화</li>
                </Link>
                <Link to="/Theater" className="navMenu">
                    <li>극장</li>
                </Link>
            </ul>
        </div>  
    );
};

export default Nav;
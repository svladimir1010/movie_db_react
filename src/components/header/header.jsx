import React from "react";
import SearchPanel from "./search-panel";
import "./header.css";
import { Link } from 'react-router-dom' 

const Header = () => {

    return (
        <div className="header-cont d-flex ">
            <h3>
                <Link to="/">
                    <img src="https://www.themoviedb.org/assets/2/v4/logos/powered-by-rectangle-green-dcada16968ed648d5eb3b36bbcfdd8cdf804f723dcca775c8f2bf4cea025aad6.svg" />
                </Link>
            </h3>
            <ul className="d-flex">
                <li>
                    <Link to='/all'>Главная</Link>
                </li>
                <li>
                    <Link to='/popular'>Популярное</Link>
                </li>
                <li>
                    <Link to='/kids'>Детям</Link>
                </li>  
            </ul>
            <SearchPanel />
        </div>
    );
};

export default Header;

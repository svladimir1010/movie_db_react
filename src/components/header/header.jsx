import React from "react";
import SearchPanel from "./search-panel";
import "./header.css";

const Header = () => {

    return (
        <div className="header d-flex ">
            <h3>
                <a href="foo">
                    <img src="https://www.themoviedb.org/assets/2/v4/logos/powered-by-rectangle-green-dcada16968ed648d5eb3b36bbcfdd8cdf804f723dcca775c8f2bf4cea025aad6.svg" />
                </a>
            </h3>
            <ul className="d-flex">
                <li>
                    <a href="foo">Все</a>
                    
                </li>
                <li>
                    <a href="foo">Популярное</a>
                </li>
                <li>
                    <a href="foo">Детям</a>
                </li>
                <li>
                    <a href="foo">Аниме</a>
                </li>
            </ul>
            <SearchPanel />
        </div>
    );
};

export default Header;

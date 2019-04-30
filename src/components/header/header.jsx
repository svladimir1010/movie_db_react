import React from "react";
import SearchPanel from "./search-panel";
import "./header.css";
import { Link } from 'react-router-dom' 

const Header = (props) => {
console.log(props)
    return (
        <div className="header-cont d-flex ">
            <h3>
                <Link to="/">
                    <img alt='pic' src="https://www.themoviedb.org/assets/2/v4/logos/powered-by-rectangle-green-dcada16968ed648d5eb3b36bbcfdd8cdf804f723dcca775c8f2bf4cea025aad6.svg" />
                </Link>
            </h3>
            <ul className="d-flex">
                <li>
                   <div><Link to='/all'><span>Home</span></Link></div>
                </li>
                <li>
                   <div><Link to='/popular'><span>Popular</span></Link></div>
                </li>
                <li>
                    <div><Link to='/kids'><span>Kids</span></Link></div>
                </li>  
            </ul>
            
            <SearchPanel {...props}/>
        </div>
    );
};

export default Header;

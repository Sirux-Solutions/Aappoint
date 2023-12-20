import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import links from '../links';
import menus from '../menus';

class Header extends Component {
    

    render() {
        return (

            <header>
                <div className="site-navigation " id="mainmenu-area">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container">
                            <Link to="#" className="navbar-brand">
                                <img src="assets/images/logo-dark.png" alt="Bookhunt" className="img-fluid"/>
                            </Link>

                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMenu" aria-controls="navbarMenu" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="fa fa-bars"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarMenu">
                                
                                <ul className="navbar-nav ms-auto">
                                    <li className="nav-item dropdown">
                                        <Link to="#" className="nav-link dropdown-toggle"  
                                            id="navbar2" role="button" data-toggle="dropdown" aria-haspopup="true" 
                                            aria-expanded="false">Home <i className="fa fa-angle-down"></i>
                                        </Link>
                                        <ul className="dropdown-menu" >
                                            {
                                                links.map((data,index) => (
                                                    
                                                    <Link className="dropdown-item" key={index} to={data.tolink} onClick={() => {window.location.href=data.tolink}}>
                                                        {data.namelink}
                                                    </Link>
                                                ))
                                            }
                                        </ul>
                                    </li>

                                    {
                                        menus.map((menu) => (
                                            <li className="nav-item" key={menu.id}><HashLink to={menu.tomenu}  className="nav-link js-scroll-trigger">{menu.namemenu}</HashLink></li>
                                        ))
                                    }  
                                    
                                </ul>
                            </div>

                            <div className="header-right-info d-none d-lg-block">
                                <ul className="header-socials">
                                    <li><Link to="#"><i className="fab fa-facebook-f" aria-hidden="true" /></Link></li>
                                    <li><Link to="#"><i className="fab fa-twitter" aria-hidden="true" /></Link></li>
                                    <li><Link to="#"><i className="fab fa-linkedin" aria-hidden="true" /></Link></li>
                                    <li><Link to="#"><i className="fab fa-pinterest" aria-hidden="true" /></Link></li>
                                </ul>
                            </div>
                        </div> 
                    </nav>
                </div>
            </header>
         

        );
    }
}

export default Header;

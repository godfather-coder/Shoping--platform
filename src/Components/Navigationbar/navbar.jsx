import React  from "react";
import { Nav, NavLink, NavMenu , }
    from "./Navstyles";
import logo from './btnlg.png'; 

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/" activeStyle>
                    <img className="logo" src={logo}  alt="" />
                    </NavLink>
                    <NavLink to="/category" activeStyle>
                    Category
                    </NavLink>
                    <NavLink to="/prime" activeStyle>
                       Prime
                    </NavLink>
                    <NavLink to="/about" activeStyle>
                        About Us
                    </NavLink>
                    <NavLink to="/contact" activeStyle>
                        Contact Us
                    </NavLink>
                    <NavLink to="/sign-up" activeStyle>
                        <div className="sign">Sign Up</div>
                    </NavLink>
                    <NavLink to="/log-in" activeStyle>
                    <div className="sign1">Log in</div>
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;


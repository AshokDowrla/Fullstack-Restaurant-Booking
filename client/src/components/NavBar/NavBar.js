import React from 'react'
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
import "./NavBar.scss"
const NavBar = () => {
    return (
     
            <Navbar expand="md" className="navigationBar"  >
                <NavbarBrand href="/">RestaurantBooking</NavbarBrand>
                <Nav navbar>
                    <NavItem>
                        <NavLink>Restaurants</NavLink>
                    </NavItem>

                </Nav>
            </Navbar>
        
    )
}



export default NavBar
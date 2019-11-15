import React, { useState } from 'react';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import styled from "styled-components";

import InvitationModal from "components/Modal";

const Content = styled.div`
  height: 100vh;
  background: linear-gradient(233.13deg, rgba(107, 149, 227, 0.8) 0%, rgba(103, 54, 107, 0.8) 100%), #62538B;
`;
const StyledNavbar = styled(Navbar)`
  position: absolute !important;
  width: 100%;
`;

const App = () => {
    const [isOpenNav, setIsOpenNav] = useState(false);
    const [isShownModal, setIsShownModal] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdownSearch = () => toggleDropdownSearch();
    const toggleDropdown = () => setDropdownOpen(prevState => !prevState);
   
    const toggleNav = () => setIsOpenNav(!isOpenNav);
    const toggleModal = () => setIsShownModal(!isShownModal);

    return (
        <div className="App">
            <StyledNavbar color="dark" dark expand="md">
                <NavbarBrand href="/">Name</NavbarBrand>
                <NavbarToggler onClick={toggleNav} />
                <Collapse isOpen={isOpenNav} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink onClick={toggleModal} href="#">Click</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Empty</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Empty</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </StyledNavbar>

            <Content>
                <InvitationModal isOpen={isShownModal} closeModal={toggleModal} />
            </Content>
        </div>
    );
}

export default App;

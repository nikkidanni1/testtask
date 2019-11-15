import React, { useState } from 'react';
import './App.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Modal,
    ModalHeader,
    ModalFooter,
    Button,
    ModalBody,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Input,
    InputGroup,
    InputGroupButtonDropdown
} from 'reactstrap';
import styled from "styled-components";

const Content = styled.div`
  height: 100vh;
  background: linear-gradient(233.13deg, rgba(107, 149, 227, 0.8) 0%, rgba(103, 54, 107, 0.8) 100%), #62538B;
`;
const StyledNavbar = styled(Navbar)`
  position: absolute !important;
  width: 100%;
`;

const StyledModalHeader = styled(ModalHeader)`
  background: linear-gradient(261.43deg, #6B95E3 0%, #6784D0 100%);
  height: 101px;
  font-family: "Open Sans";
  font-weight: normal;
  font-size: 22px;
  color: #FFFFFF; 
  display: flex;
  align-items: center !important;
  border-radius-top-left: 8px !important;
  border-radius-top-right: 8px !important;
  padding-left: 50px !important;
  padding-right: 50px !important;
  border-bottom: none !important;
`;

const StyledModal = styled(Modal)`
  .modal-content {
    background: transparent;
  }
  max-width: 670px !important;
  
`;

const Close = styled.div`
  width: 21px;
  height: 21px;
  position: relative;
  &:before {
    content: "";
    width: 1px;
    height: 100%;
    background-color: #FFFFFF;
    position: absolute;
    transform: rotate(-45deg);
    left: 50%;
  }
  &:after {
    content: "";
    width: 1px;
    height: 100%;
    background-color: #FFFFFF;
    position: absolute;
    transform: rotate(45deg);
    left: 50%;
  }
`;

const StyledModalFooter = styled(ModalFooter)`
  background: #FAFAFA;
  padding-left: 50px !important;
  padding-right: 50px !important;
  display: flex !important;
  justify-content: space-between !important;
`;

const BottomText = styled.div`
  font-family: "Open Sans";
  font-weight: normal;
  font-size: 13px;
  line-height: 18px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
`;

const StyledDropdown = styled(Dropdown)`
  margin-right: 9px;
  
`;

const StyledDropdownToggle = styled(DropdownToggle)`
  width: 101px !important;
  height: 45px !important;
  background: #FFFFFF !important;
  border: 1px solid #DBDBDB !important;
  box-sizing: border-box !important;
  border-radius: 3px !important;
  font-family: "Open Sans" !important;
  font-weight: normal !important;
  font-size: 12px !important;
  line-height: 17px !important;
  color: #757575 !important;
  display: flex !important;
  align-items: center !important;
`;

const Arrow = styled.div`
  width: 5px;
  height: 5px;
  border-bottom: 1px solid #828282;
  border-right: 1px solid #828282;
  margin-left: 12px;
  transform: rotate(45deg);
`;

const PrimaryButtom = styled(Button)`
  width: 160px !important;
  height: 45px !important;
  background: linear-gradient(0deg, rgba(45, 156, 219, 0.56), rgba(45, 156, 219, 0.56)), #AD78C9 !important;
  border-radius: 2.81458px !important;
  border: none !important;
  font-family: "Open Sans" !important;
  font-style: normal !important;
  font-weight: 600 !important;
  font-size: 13px !important;
  line-height: 18px !important;
`;

const StyledModalBody = styled(ModalBody)`
  background: #ffffff;
  padding: 50px 50px 30px!important;
`;

const SearchWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between; 
`;

const StyledInputGroup = styled(InputGroup)`
    width: 400px !important;
`;

const StyledInput  = styled(Input)`
  height: 45px !important;
`;

const App = () => {
    const [isOpenNav, setIsOpenNav] = useState(false);
    const [modal, setModal] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => setDropdownOpen(prevState => !prevState);
    const toggleModal = () => setModal(!modal);
    const toggleNav = () => setIsOpenNav(!isOpenNav);

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
                <StyledModal isOpen={modal} toggle={toggleModal} backdrop={true}>
                    <StyledModalHeader close={<Close />} toggle={toggleModal}>Invite people to project</StyledModalHeader>
                    <StyledModalBody>
                        <SearchWrapper>
                            <StyledInputGroup>
                                <StyledInput />
                                <InputGroupButtonDropdown addonType="append" isOpen={dropdownOpen} toggle={toggleDropdown}>
                                    <DropdownToggle caret>
                                        Button Dropdown
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem header>Header</DropdownItem>
                                        <DropdownItem disabled>Action</DropdownItem>
                                        <DropdownItem>Another Action</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>Another Action</DropdownItem>
                                    </DropdownMenu>
                                </InputGroupButtonDropdown>
                            </StyledInputGroup>
                            <PrimaryButtom>Invite 1 person</PrimaryButtom>
                        </SearchWrapper>
                    </StyledModalBody>
                    <StyledModalFooter>
                        <BottomText>Or share this Project with Public link</BottomText>
                        <ButtonsWrapper>
                            <StyledDropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
                                <StyledDropdownToggle>
                                    Can edit
                                    <Arrow />
                                </StyledDropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem>Some Action</DropdownItem>
                                    <DropdownItem disabled>Action (disabled)</DropdownItem>
                                </DropdownMenu>
                            </StyledDropdown>
                            <PrimaryButtom onClick={toggleModal}>Copy link</PrimaryButtom>
                        </ButtonsWrapper>

                    </StyledModalFooter>
                </StyledModal>
            </Content>
        </div>
    );
}



export default App;

import React, { useState } from 'react';
import styled from "styled-components";
import {
    Modal,
    ModalHeader,
    ModalFooter,
    Button,
    ModalBody,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';

import PersonSearch from "components/PersonSearch";

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
  cursor: pointer;
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

const PrimaryButton = styled(Button)`
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

const InvitationModal = ({ closeModal, isOpen }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => setDropdownOpen(prevState => !prevState);

    return (
        <StyledModal isOpen={isOpen} toggle={closeModal} backdrop={true}>
            <StyledModalHeader close={<Close onClick={closeModal} />} toggle={closeModal}>Invite people to project</StyledModalHeader>
            <StyledModalBody>
                <PersonSearch />
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
                    <PrimaryButton onClick={closeModal}>Copy link</PrimaryButton>
                </ButtonsWrapper>

            </StyledModalFooter>
        </StyledModal>
    );
};

export default InvitationModal;
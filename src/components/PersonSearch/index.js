import React, { useState } from 'react';
import styled from "styled-components";

import {
    Button,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Input,
    InputGroup,
    InputGroupButtonDropdown,
    InputGroupText
} from 'reactstrap';

import Person from "./components/Person";

import SearchIcon from "images/Union.svg";
import Avatar1 from "images/Rectangle 28.8.jpg";
import Avatar2 from "images/Rectangle 28.11.jpg";
import Avatar3 from "images/Rectangle 28.10.jpg";

const SearchWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between; 
`;

const StyledInput = styled(Input)`
    height: 45px !important;
    border-radius: 0px !important;
    box-shadow: none !important;
    padding-left: 0 !important;
    border: 1px solid #ced4da !important;
    border-left: none !important;
    border-right: none !important;
    font-family: "Open Sans" !important;
    font-size: 13px !important;
    z-index: 1 !important;
    ${({ error }) => error && "border-color: red !important;"}
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

const StyledDropdownToggle = styled(DropdownToggle)`
  width: 101px !important;
  height: 45px !important;
  background: #FFFFFF !important;
  border: 1px solid #DBDBDB !important;
  border-left: none !important;
  box-sizing: border-box !important;
  border-radius: 3px !important;
  font-family: "Open Sans" !important;
  font-weight: normal !important;
  font-size: 12px !important;
  line-height: 17px !important;
  color: #757575 !important;
  display: flex !important;
  align-items: center !important;
  position: relative !important;
  border-top-left-radius: 0px !important;
  border-bottom-left-radius: 0px !important;
  ${({ error }) => error && "border-color: red !important;"}
  &:before {
      content: "";
      position: absolute;
      left: 0;
      width: 1px;
      height: 24px;
      background: #DBDBDB;
  }
`;

const StyledInputGroup = styled(InputGroup)`
    width: 400px !important;
    &:before {
        content: "${({ error }) => error}";
        position: absolute;
        z-index: 2;
        color: red;
        font-size: 13px;
        font-family: "Open Sans";
        bottom: -20px;
    }
`;

const Arrow = styled.div`
  width: 5px;
  height: 5px;
  border-bottom: 1px solid #828282;
  border-right: 1px solid #828282;
  margin-left: 12px;
  transform: rotate(45deg);
`;

const StyledInputGroupText = styled(InputGroupText)`
    border-top-right-radius: 0px !important;
    border-bottom-right-radius: 0px !important;
    border-right: none !important;
    box-sizing: border-box !important;
    width: 40px !important;
    background: url(${SearchIcon}) transparent no-repeat !important;
    background-size: 14px 14px !important;
    background-position: center !important;
    ${({ error }) => error && "border-color: red !important;"}
`;

const ListWrapper = styled.div`
    margin-top: 30px;
    height: 150px;
    overflow-y: auto;
    overflow-x: hidden;
    &::-webkit-scrollbar {
        width: 10px;
        display: block; 
    }
`;

const PersonSearch = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [error, setError] = useState("");
    const [inputValue, setInputValue] = useState("")

    const toggleDropdown = () => setDropdownOpen(prevState => !prevState);

    const validate = () => {
        if (inputValue === "") {
            setError("Field is required");
        }
    }

    return (
        <>
            <SearchWrapper>
                <StyledInputGroup error={error} >
                    <StyledInputGroupText error={error} />
                    <StyledInput
                        value={inputValue}
                        error={error}
                        placeholder="Name or email"
                        onChange={(e) => {
                            setInputValue(e.target.value);
                            setError("");
                        }}
                    />
                    <InputGroupButtonDropdown addonType="append" isOpen={dropdownOpen} toggle={toggleDropdown}>
                        <StyledDropdownToggle error={error}>
                            Can edit
                        <Arrow />
                        </StyledDropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>Another Action</DropdownItem>
                            <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                    </InputGroupButtonDropdown>
                </StyledInputGroup>
                <PrimaryButton onClick={validate}>Invite 1 person</PrimaryButton>
            </SearchWrapper>
            <ListWrapper>
                <Person 
                    url={Avatar3} 
                    name="Milan Gladis (Owner)" 
                    link="hello@milangladis.com" 
                    lastActivity="Spent 3h 34mins"
                    buttonText="Transfer ownership"  
                />
                <Person
                    url={Avatar2} 
                    name="Emma Watson (Owner)" 
                    link="emma@watson.com"
                    lastActivity="Spent 3h 34mins"
                    buttonText="Revoke Access" 
                />
                <Person 
                    url={Avatar1} 
                    name="Public link" 
                    link="http://lor.em/l296gdk6"
                    lastActivity=""
                    buttonText="Revoke link" 
                />
                <Person 
                    url={Avatar3} 
                    name="Milan Gladis (Owner)" 
                    link="hello@milangladis.com"
                    lastActivity="Spent 3h 34mins"
                    buttonText="Transfer ownership" 
                />
            </ListWrapper>
        </>
    );
}

export default PersonSearch;
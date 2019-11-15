import React, { useState } from 'react';
import styled from "styled-components";

import {
    Button
} from 'reactstrap';

const Wrapper = styled.div`
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const SecondaryButton = styled(Button)`
    border: 1px solid #DBDBDB !important;
    height: 30px !important;
    padding: 0 10px !important;
    line-height: 30px !important;
    background: transparent !important;
    color: #757575 !important;
    font-family: "Open Sans" !important;
    font-weight: normal !important;
    font-size: 12px !important;
`;

const GroupItems = styled.div`
    display: flex;
    align-items: center;
`;

const Avatar = styled.div`
    width: 30px;
    height: 30px;
    background: url("${({ url }) => url}");
    border-radius: 3px;
    margin-right: 10px;
`;

const TextWrapper = styled.div`
    font-family: Open Sans;
    font-style: normal;
    font-size: 13px;
    line-height: 18px;
    color: #666666;
`;

const PersonLink = styled.div`
    font-weight: 600;
`;

const PersonMail = styled.div`
`;

const LastActivity = styled.div`
    margin-right: 30px;
    font-family: "Open Sans";
    font-weight: normal;
    font-size: 11px;
    color: #BABABA;
`;

const Person = ({ url, name, link, buttonText, lastActivity }) => {
    return (
        <Wrapper>
            <GroupItems>
                <Avatar url={url} />
                <TextWrapper>
                    <PersonLink>{name}</PersonLink>
                    <PersonMail>{link}</PersonMail>
                </TextWrapper>
            </GroupItems>
            <GroupItems>
                <LastActivity>{lastActivity}</LastActivity>
                <SecondaryButton>{buttonText}</SecondaryButton>
            </GroupItems>
        </Wrapper>
    );
}

export default Person;
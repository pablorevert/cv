import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    display: inline-block;
    width: 200px;
    background: ${props => props.theme.palette.background};
    margin: 0 10px 10px 0;
    padding: 10px;
`;

const H2 = styled.h2`
    font-weight: 300;
`;

let CvCard = props =>
    <Div className={"cv-card"} m="30px">
        <H2>{props.value.name}</H2>
    </Div>;

export default CvCard;
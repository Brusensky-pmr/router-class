import React, {FC} from 'react';
import styled from "styled-components";

export const Header: FC = () => {
    return (
        <Container>
            <input type="text" placeholder={"Search..."} />
            <div>
                <span>Name</span>
            </div>
        </Container>
    );
};

const Container = styled.header`
    height: 70px;
    border-bottom: 1px solid black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px;
`;
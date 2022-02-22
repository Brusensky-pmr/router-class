import React, { FC } from "react";
import styled from "styled-components";

export const Header: FC = () => {
    const userName = localStorage.getItem("userName");
    return (
        <Container>
            <input type="text" placeholder={"Search..."} />
            <div>
                <span>{userName}</span>
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
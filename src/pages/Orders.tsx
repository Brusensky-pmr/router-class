import React, { FC } from "react";
import styled from "styled-components";

export const Orders: FC = () => {
    return (
        <Container>
            <h1>History</h1>
            <button>Make order</button>
        </Container>
    );
};

const Container = styled.div`
  padding: 25px;
  position: relative;
  & button {
    position: absolute;
    top: 25px;
    right: 25px;
    height: 40px;
    font-size: 18px;
  }
`;
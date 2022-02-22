import React, { FC } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

export const CardDetail: FC = () => {
    const { id } = useParams<{ id: string }>();
    return (
        <Container>
            <h1>Selected card: {id}</h1>
        </Container>
    );
};

const Container = styled.header`
  padding: 25px;
  border: 1px solid crimson;
`;

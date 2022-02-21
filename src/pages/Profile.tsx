import React, {FC} from 'react';
import styled from "styled-components";

export const Profile: FC = () => {
    return (
        <Container>
            <label htmlFor={"name"}>Name</label>
            <input id={"name"} type="text"/>
            <label htmlFor={"lastname"}>Last name</label>
            <input id={"lastname"} type="text"/>
            <label htmlFor={"email"}>Email</label>
            <input id={"email"} type="email"/>
            <button>Save changes</button>
        </Container>
    );
};

const Container = styled.div`
  padding: 25px;
    display: flex;
  flex-direction: column;
  & * {
    margin-bottom: 10px;
  }
  & button {
    width: 100px;
    align-self: flex-end;
  }
`;
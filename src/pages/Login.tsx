import React, { BaseSyntheticEvent, FC } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const Login: FC = () => {
    const navigate = useNavigate();
    const loginHandler = (event: BaseSyntheticEvent) => {
        event.preventDefault();
        const value = event.target.elements[0].value;
        localStorage.setItem("userName", value);
        navigate("/dashboard");
    };
    return (
        <Container>
            <h1>Login</h1>
            <form onSubmit={loginHandler}>
                <label htmlFor="name">
                    <div>Name</div>
                    <input type="text" required />
                </label>
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
        </Container>
    );
};

const Container = styled.div`
  padding: 50px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  & button {
    width: 100%;
  }
  & > form > * {
    margin: 15px 0;
  }
`;

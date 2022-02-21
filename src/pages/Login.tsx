import React, {FC} from 'react';
import styled from "styled-components";

export const Login: FC = () => {
    return (
        <Container>
            <h1>
                Login
            </h1>
            <div>
                <label htmlFor="name">
                    <div>
                        Name
                    </div>
                    <input type="text"/>
                </label>
                <div>
                    <button>Login</button>
                </div>
            </div>
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
  & > div > * {
    margin: 15px 0;
  }
`;

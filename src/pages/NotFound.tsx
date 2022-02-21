import React, {FC} from 'react';
import styled from "styled-components";

export const NotFound: FC = () => {
    return (
        <StyledCont>
            <div>404</div>
        </StyledCont>
    );
};

const StyledCont = styled.div`
    display: flex;
  justify-content: center;
  padding: 50px;
    height: 100vh;
  & div {
    font-size: 150px;
  }
`;
import React, {FC} from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

export const Sidebar: FC = () => {
    return (
        <Container className={"sidebar"}>
            <ul>
                <li>
                    <Link to={"profile"}>Profile</Link>
                </li>
                <li>
                    <Link to={"dashboard"}>Dashboard</Link>
                </li>
                <li>
                    <Link to={"orders"}>Orders</Link>
                </li>
            </ul>
            <div>
                Logout
            </div>
        </Container>
    );
};

const Container = styled.aside`
  width: 220px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-right: 1px solid black;
  & li {
    margin: 15px 0;
    cursor: pointer;
  }
  & div {
    color: crimson;
    font-size: 18px;
    align-self: center;
    cursor: pointer;
  }
`;
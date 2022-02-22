import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import styled from "styled-components";

export const Layout: FC = () => {
    return (
        <Container>
            <Sidebar />
            <Content className={"layout__content"}>
                <Header />
                <Outlet />
            </Content>
        </Container>
    );
};

const Container = styled.section`
  display: flex;
  height: 100vh;
  width: 100vw;
`;
const Content = styled.section`
  flex: 1;
`;
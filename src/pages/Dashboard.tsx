import React, { FC } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import styled from "styled-components";

export const Dashboard: FC = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <h1>Dashboard</h1>
            <Outlet />
            <CardContainer>
                <div className={"card"} onClick={() => navigate("/dashboard/1")}>
                    <h1>Card Title</h1>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
                        explicabo harum, odio sint suscipit voluptatum?
                    </div>
                </div>
                <div className={"card"} onClick={() => navigate("/dashboard/2")}>
                    <h1>Card Title</h1>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Consectetur, consequuntur ipsa nemo odit ullam velit!
                    </div>
                </div>
                <div className={"card"} onClick={() => navigate("/dashboard/3")}>
                    <h1>Card Title</h1>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                        deleniti dolore fugiat minima nobis vero.
                    </div>
                </div>
                <div className={"card"} onClick={() => navigate("/dashboard/4")}>
                    <h1>Card Title</h1>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
                        dignissimos dolore eveniet obcaecati provident voluptatem.
                    </div>
                </div>
                <div className={"card"} onClick={() => navigate("/dashboard/5")}>
                    <h1>Card Title</h1>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Dignissimos est repudiandae sapiente sed vero voluptas.
                    </div>
                </div>
                <div className={"card"} onClick={() => navigate("/dashboard/6")}>
                    <h1>Card Title</h1>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
                        eveniet libero placeat rem, sed tempora!
                    </div>
                </div>
            </CardContainer>
        </Container>
    );
};

const Container = styled.div`
  width: 650px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
`;
const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .card {
    width: 200px;
    cursor: pointer;
    margin-bottom: 25px;
  }
  .card:hover {
    background: #dedede;
  }
`;

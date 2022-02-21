import React, {FC} from 'react';
import {Route, Routes } from 'react-router-dom';
import {Dashboard} from "./pages/Dashboard";
import {Login} from "./pages/Login";
import {Layout} from "./common/Layout";
import {NotFound} from "./pages/NotFound";
import {Profile} from "./pages/Profile";
import {Orders} from "./pages/Orders";
import {NewOrder} from "./pages/NewOrder";

export const App: FC = () => {
  return (
    <Routes>
        <Route path={"login"} element={<Login />} />
        <Route path={"/"} element={<Layout />}>
            <Route path={"dashboard"} element={<Dashboard />} />
            <Route path={"profile"} element={<Profile />}/>
            <Route path={"orders"} element={<Orders />}>
                <Route path={"create"} element={<NewOrder />} />
            </Route>
        </Route>
        <Route path={"*"} element={<NotFound />}/>
    </Routes>
  );
}

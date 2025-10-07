import * as React from "react";
import "./App.css";
import VplsConfGen from "./VplsConfGen/VplsConfGen";
import EponConfGen from "./EponConfGen/EponConfGen";
import SubnetConfGen from "./subnetConfGen/SubnetConfGen";
import ReplaceSwitchConfig from "./ReplaceSwitchConfig/ReplaceSwitchConfig";
import MacChanger from "./MacChanger/MacChanger";
import L2 from "./L2/L2";
import OnuConfig from "./OnuConfig/OnuConfig";
import { Routes, Route } from "react-router-dom"; 
import Layout from "./Layout";
import SignIn from "./components/SignIn";

function App() {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/" element={<Layout />}>
        <Route path="epon" element={<EponConfGen />} />
        <Route path="subnet" element={<SubnetConfGen />} />
        <Route path="vpls" element={<VplsConfGen />} />
        <Route path="replace-config" element={<ReplaceSwitchConfig />} />
        <Route path="l2" element={<L2 />} />
        <Route path="onu-config" element={<OnuConfig />} />
        <Route path="onu-config" element={<OnuConfig />} />
        <Route path="mac-changer" element={<MacChanger />} />
        {/* <Route
          index
          element={<div>Добро пожаловать! Выберите инструмент в меню.</div>}
        /> */}
      </Route>
    </Routes>
  );
}

export default App;

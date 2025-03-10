import * as React from "react";
import "./App.css";
import VplsConfGen from "./VplsConfGen/VplsConfGen";
import EponConfGen from "./EponConfGen/EponConfGen";
import SubnetConfGen from "./subnetConfGen/SubnetConfGen";
import ReplaceSwitchConfig from "./ReplaceSwitchConfig/ReplaceSwitchConfig";
import L2 from "./L2/L2";
import { Routes, Route } from "react-router";
import Layout from "./Layout";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="epon" element={<EponConfGen />} />
        <Route path="subnet" element={<SubnetConfGen />} />
        <Route path="vpls" element={<VplsConfGen />} />
        <Route path="replace-config" element={<ReplaceSwitchConfig />} />
        <Route path="l2" element={<L2 />} />
      </Route>
    </Routes>
  );
}

export default App;

import * as React from "react";
import "./App.css";
import VplsConfGen from "./VplsConfGen/VplsConfGen.js";
import EponConfGen from "./EponConfGen/EponConfGen.js";
import SubnetConfGen from "./SubnetConfGen/SubnetConfGen.js";
import ReplaceSwitchConfig from "./ReplaceSwitchConfig/ReplaceSwitchConfig.js";
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
      </Route>
    </Routes>
  );
}

export default App;

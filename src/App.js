import * as React from "react";
import "./App.css";
import VplsConfGen from "./VplsConfGen/VplsConfGen";
import EponConfGen from "./eponConfGen/EponConfGen";
import SubnetConfGen from "./subnetConfGen/SubnetConfGen";
import Navigation from "./Navigation/Navigation";
import { Routes, Route } from "react-router";
import Layout from "./Layout";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="epon" element={<EponConfGen />} />
        <Route path="subnet" element={<SubnetConfGen />} />
        <Route path="vpls" element={<VplsConfGen />} />
      </Route>
    </Routes>
  );
}

export default App;

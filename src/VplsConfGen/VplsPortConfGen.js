import React from "react";
import "./VplsPortConfGen.css";
const VplsPortConfGen = (props) => {
  console.log(props.vlanVpls);
  return (
    <div>
      <p>set interfaces {props.portArray} unit {props.vlanVpls} description {props.vlanVplsName}{props.vlanVpls}</p>
      <p>set interfaces {props.portArray} unit {props.vlanVpls} encapsulation vlan-vpls</p>
      <p>set interfaces {props.portArray} unit {props.vlanVpls} vlan-id {props.vlanVpls}</p>
      <p>set interfaces {props.portArray} unit {props.vlanVpls} family vpls</p>
      <p>set routing-instances {props.vlanVplsName}{props.vlanVpls} interface {props.portArray}.{props.vlanVpls}</p>
    </div>
  );
};

export default VplsPortConfGen;




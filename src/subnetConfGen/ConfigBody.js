import React from "react";
import "./Config.css";
const Config = (props) => {
  return (
    <div className="">
      <p>
        set interfaces {props.port} unit {props.vlan} description {props.vlanName}
      </p>
      <p>
        set interfaces {props.port} unit {props.vlan} vlan-id {props.vlan}
      </p>
      <p>
        set interfaces {props.port} unit {props.vlan} family inet mtu 1500
      </p>
      <p>
        set interfaces {props.port} unit {props.vlan} family inet address {props.gateway}/{props.mask}
      </p>
    </div>
  );
};

export default Config;

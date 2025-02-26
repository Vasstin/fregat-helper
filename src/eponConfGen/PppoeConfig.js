import React from "react";
import "./PppoeConfig.css";
const Pppoe_config = (props) => {
  //console.log(props)
  return (
    <div>
      <p>
        interface ePON 0/{props.epon}:{props.count}
      </p>
      <p>epon onu port 1 ctc vlan mode tag {props.eponVlan}</p>
      <p>y</p>
      <p>epon onu port 1 ctc vlan mode tag {props.eponVlan}</p>
      <p>epon onu port 1 ctc loopback detect </p>
      <p>epon onu port 1 ctc notify loopback </p>
      <p>epon sla upstream pir 520000 cir 5000 </p>
      <p>epon sla downstream pir 520000 cir 5000</p>
      {/* <p>exit</p> */}
    </div>
  );
};

export default Pppoe_config;

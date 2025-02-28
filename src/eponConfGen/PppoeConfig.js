import React from "react";
import "./PppoeConfig.css";
const Pppoe_config = (props) => {
  console.log(props);
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
      {props.fullState ? (
        <div>
          <p>epon onu all-port mac address-table dynamic maximum 2</p>
          <p>epon onu all-port mac access-group pppoe</p>
          <p>epon onu all-port storm-control mode 1 threshold 256</p>
          <p>epon fec enable</p>
        </div>
      ) : null}

      <p>epon sla upstream pir 640000 cir 12000 </p>
      <p>epon sla downstream pir 640000 cir 12000</p>
      {/* <p>exit</p> */}
    </div>
  );
};

export default Pppoe_config;

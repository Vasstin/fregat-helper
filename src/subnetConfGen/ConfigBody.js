import React from "react";
import { Box } from "@mui/material";

import "./Config.css";
const Config = (props) => {
  console.log(props.subnetIps);
  return (
    <div className="">
      <pre>
        {`VID ${props.configData.Vlan}, подсеть ${props.subnetIps.network}/${props.configData.Mask}
Настройки для клиента:
ip ${props.subnetIps.ipClient}
mask ${props.subnetIps.mask}
GW ${props.subnetIps.gateway}
dns 
`}
      </pre>
      <p>---------------------------------------</p>
      <p>
        set interfaces {props.configData.Port} unit {props.configData.Vlan}{" "}
        description {props.configData.VlanName}-{props.configData.Vlan}
      </p>
      <p>
        set interfaces {props.configData.Port} unit {props.configData.Vlan}{" "}
        vlan-id {props.configData.Vlan}
      </p>
      <p>
        set interfaces {props.configData.Port} unit {props.configData.Vlan}{" "}
        family inet mtu 1500
      </p>
      <p>
        set interfaces {props.configData.Port} unit {props.configData.Vlan}{" "}
        family inet address {props.subnetIps.gateway}/{props.configData.Mask}
      </p>
      <p>---------------------------------------</p>
      {props.nextHost === "Olt" ? (
        <Box>
          <b>olt-xx</b>
          <p>conf terminal</p>
          <p>vlan {props.configData.Vlan}</p>
          <p>
            name {props.configData.VlanName}-{props.configData.Vlan}
          </p>
          <p>exit</p>
          <p>interface {props.configData.upLinkPort}</p>
          <p>switchport vlan {props.configData.Vlan} tag</p>
          <p>exit</p>
          <p>interface {props.configData.onuPort}</p>
          <p>
            service-port {props.configData.serviceNumber} vport 1 user-vlan{" "}
            {props.configData.Vlan} transparent{" "}
          </p>
          <p>exit</p>
          <p>pon-onu-mng {props.configData.onuPort}</p>
          <p>
            service {props.configData.Vlan} gemport 1 vlan{" "}
            {props.configData.Vlan}
          </p>
          <p>exit</p>
          <p>exit</p>
          <p>wr</p>
        </Box>
      ) : (
        <Box>
          <b>BDCom</b>
          <p>conf</p>
          <p>vlan {props.configData.Vlan}</p>
          <p>
            name {props.configData.VlanName}-{props.configData.Vlan}
          </p>
          <p>exit</p>
          <p>epon onu-config-template {props.configData.Vlan}</p>
          <p>
            cmd-sequence 001 epon onu all-port ctc vlan mode tag{" "}
            {props.configData.Vlan}
          </p>
          <p>cmd-sequence 002 epon onu all-port ctc loopback detect</p>
          <p>cmd-sequence 003 epon onu all-port ctc notify loopback</p>
          <p>
            cmd-sequence 004 epon onu all-port mac address-table dynamic maximum
            2
          </p>
          <p>
            cmd-sequence 005 epon onu all-port storm-control mode 1 threshold
            256
          </p>
          <p>cmd-sequence 006 epon fec enable</p>
          <p>
            cmd-sequence 007 epon sla upstream pir{" "}
            {props.configData.speed * 1024} cir{" "}
            {props.configData.speed <= 5 ? 1024 : 5000}
          </p>
          <p>
            cmd-sequence 008 epon sla downstream pir{" "}
            {props.configData.speed * 1024} cir{" "}
            {props.configData.speed <= 5 ? 1024 : 5000}
          </p>
          <p>exit</p>
          <p>exit</p>
          <p>wr a</p>
        </Box>
      )}
      <p>---------------------------------------</p>
      {props.nextHostSwitch === "Edgecore" ? (
        <Box>
          <b>Edgecore</b>
          <p>conf</p>
          <p>vlan database</p>
          <p>
            vlan {props.configData.Vlan} name {props.configData.VlanName}-
            {props.configData.Vlan} media ethernet
          </p>
          <p>exit</p>
          <p>interface ethernet 1/{props.configData.switchUplink}</p>
          <p>switchport allowed vlan add {props.configData.Vlan} tagged</p>
          <p>exit</p>
          <p>exit</p>
          <p>copy running-config startup-config</p>
          <p>exit</p>
        </Box>
      ) : (
        <Box>
          <b>Dlink</b>
          <p>enable admin</p>
          <p>vfnhtyf</p>
          <p>
            create vlan {props.configData.VlanName}-{props.configData.Vlan} tag{" "}
            {props.configData.Vlan}
          </p>
          <p>
            config vlan vlanid {props.configData.Vlan} add tagged{" "}
            {props.configData.switchUplink}
          </p>
          <p>save</p>
          <p>logo</p>
        </Box>
      )}
    </div>
  );
};

export default Config;

import React from "react";
import { Box } from "@mui/material";

const L2Config = (props) => {
  console.log(props);
  return (
    <Box>
      <b>csw</b>
      <p>
        create vlan {props.configData.VlanName}-{props.configData.Vlan}
      </p>
      <p>
        configure vlan {props.configData.VlanName}-{props.configData.Vlan} tag{" "}
        {props.configData.Vlan}
      </p>
      <p>
        configure vlan {props.configData.VlanName}-{props.configData.Vlan} add
        ports {props.configData.Port}, 24 tagged
      </p>
      <p>
        configure port {props.configData.Port} vlan {props.configData.VlanName}-
        {props.configData.Vlan} limit-learning 3 action stop-learning
      </p>
      <p>
        disable igmp snooping vlan {props.configData.VlanName}-
        {props.configData.Vlan}
      </p>
      <p>
        disable igmp vlan {props.configData.VlanName}-{props.configData.Vlan}
      </p>
      <p>
        disable igmp proxy-query vlan {props.configData.VlanName}-
        {props.configData.Vlan}
      </p>
      <p>save</p>
      <p>---------------------------------------</p>
      <b>core</b>
      <p>
        set interfaces xe-0/0/3 unit {props.configData.Vlan} description{" "}
        {props.configData.VlanName}-{props.configData.Vlan}
      </p>
      <p>
        set interfaces xe-0/0/3 unit {props.configData.Vlan} encapsulation
        vlan-ccc
      </p>
      <p>
        set interfaces xe-0/0/3 unit {props.configData.Vlan} vlan-id{" "}
        {props.configData.Vlan}
      </p>
      <p>
        set protocols l2circuit neighbor {props.configData.brasIp} interface
        xe-0/0/3.{props.configData.Vlan} virtual-circuit-id{" "}
        {props.configData.Vlan}
      </p>
      <p>
        set protocols l2circuit neighbor {props.configData.brasIp} interface
        xe-0/0/3.{props.configData.Vlan} no-control-word
      </p>
      <p>
        set protocols l2circuit neighbor {props.configData.brasIp} interface
        xe-0/0/3.{props.configData.Vlan} mtu 9216
      </p>
      <p>
        set protocols l2circuit neighbor {props.configData.brasIp} interface
        xe-0/0/3.{props.configData.Vlan} encapsulation-type ethernet-vlan
      </p>
      <p>
        set protocols l2circuit neighbor {props.configData.brasIp} interface
        xe-0/0/3.{props.configData.Vlan} ignore-mtu-mismatch
      </p>
      <p>---------------------------------------</p>
      <b>bras</b>
      <p>
        set interfaces {props.configData.nextPort} unit {props.configData.Vlan}{" "}
        description {props.configData.VlanName}-{props.configData.Vlan}
      </p>
      <p>
        set interfaces {props.configData.nextPort} unit {props.configData.Vlan}{" "}
        encapsulation vlan-ccc
      </p>
      <p>
        set interfaces {props.configData.nextPort} unit {props.configData.Vlan}{" "}
        vlan-id {props.configData.Vlan}
      </p>
      <p>
        set protocols l2circuit neighbor {props.configData.coreIp} interface{" "}
        {props.configData.nextPort}.{props.configData.Vlan} virtual-circuit-id{" "}
        {props.configData.Vlan}
      </p>
      <p>
        set protocols l2circuit neighbor {props.configData.coreIp} interface{" "}
        {props.configData.nextPort}.{props.configData.Vlan} no-control-word
      </p>
      <p>
        set protocols l2circuit neighbor {props.configData.coreIp} interface{" "}
        {props.configData.nextPort}.{props.configData.Vlan} mtu 9216
      </p>
      <p>
        set protocols l2circuit neighbor {props.configData.coreIp} interface{" "}
        {props.configData.nextPort}.{props.configData.Vlan} encapsulation-type
        ethernet-vlan
      </p>
      <p>
        set protocols l2circuit neighbor {props.configData.coreIp} interface{" "}
        {props.configData.nextPort}.{props.configData.Vlan} ignore-mtu-mismatch
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
            {props.configData.speed * 1024} cir 5000
          </p>
          <p>
            cmd-sequence 008 epon sla downstream pir{" "}
            {props.configData.speed * 1024} cir 5000
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
          <p>vlan {props.configData.Vlan} name {props.configData.VlanName}-{props.configData.Vlan} media ethernet</p>
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
          <p>create vlan {props.configData.VlanName}-{props.configData.Vlan} tag {props.configData.Vlan}</p>
          <p>config vlan vlanid {props.configData.Vlan} add tagged {props.configData.switchUplink}</p>
          <p>save</p>
          <p>logo</p>
        </Box>
      )}
    </Box>
  );
};

export default L2Config;

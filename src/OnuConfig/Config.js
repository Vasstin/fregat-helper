import { Box } from "@mui/material";
import React from "react";

const Config = (props) => {
  return (
    <Box>
      {props.configType === "Switch" ? (
        <Box>
          <p>conf term</p>
          <p>interface {props.configData.interface}</p>
          <p>description sw-zpk-222</p>
          <p>tcont 1 name fregat profile fregat</p>
          <p>gemport 1 name fregat tcont 1</p>
          <p>switchport mode trunk vport 1</p>
          <p>service-port 1 vport 1 user-vlan 77 transparent</p>
          <p>service-port 2 vport 1 user-vlan 802 transparent</p>
          <p>exit</p>
          <p>pon-onu-mng {props.configData.interface}</p>
          <p>service MANAGE gemport 1 vlan 77</p>
          <p>service PPPoE-802 gemport 1 vlan 802</p>
          <p>vlan port eth_0/1 mode trunk</p>
          <p>vlan port eth_0/1 vlan all</p>
        </Box>
      ) : (
        <Box>
          <p>interface {props.configData.interface}</p>
          <p>description Sverdlova.36d/kv62</p>
          <p>tcont 1 name fregat profile fregat</p>
          <p>gemport 1 name fregat tcont 1</p>
          <p>service-port 1 vport 1 user-vlan 812 vlan 812</p>
          <p>security max-mac-learn 2 vport 1</p>
          <p>pon-onu-mng {props.configData.interface}</p>
          <p>service internet gemport 1 cos 0 vlan 812</p>
          <p>vlan port eth_0/1 mode tag vlan 812</p>
        </Box>
      )}
    </Box>
  );
};

export default Config;

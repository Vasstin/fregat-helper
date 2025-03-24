import { Box } from "@mui/material";
import React from "react";

const Config = (props) => {
  //let vlan = props.configData.interface.split("/")[2].split(":")[0]
  console.log(props)
  return (
    <Box>
      {props.configType === "Switch" ? (
        <Box>
          <p>conf term</p>
          <p>interface {props.configData.interface}</p>
          <p>description {props.configData.desc}</p>
          <p>tcont 1 name fregat profile fregat</p>
          <p>gemport 1 name fregat tcont 1</p>
          <p>switchport mode trunk vport 1</p>
          <p>service-port 1 vport 1 user-vlan 77 transparent</p>
          <p>service-port 2 vport 1 user-vlan {props.vlan} transparent</p>
          <p>exit</p>
          <p>pon-onu-mng {props.configData.interface}</p>
          <p>service MANAGE gemport 1 vlan 77</p>
          <p>service PPPoE-{props.vlan} gemport 1 vlan {props.vlan}</p>
          <p>vlan port eth_0/1 mode trunk</p>
          <p>vlan port eth_0/1 vlan all</p>
        </Box>
      ) : (
        <Box>
          <p>interface {props.configData.interface}</p>
          <p>description {props.configData.desc}</p>
          <p>tcont 1 name fregat profile fregat</p>
          <p>gemport 1 name fregat tcont 1</p>
          <p>service-port 1 vport 1 user-vlan {props.vlan} vlan {props.vlan}</p>
          <p>security max-mac-learn 2 vport 1</p>
          <p>pon-onu-mng {props.configData.interface}</p>
          <p>service internet gemport 1 cos 0 vlan {props.vlan}</p>
          <p>vlan port eth_0/1 mode tag vlan {props.vlan}</p>
        </Box>
      )}
    </Box>
  );
};

export default Config;

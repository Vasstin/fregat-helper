import React from "react";
import { Box, TextField, Typography } from "@mui/material";

const SwitchConfig = (props) => {
  return (
    <Box>
      <p>onu {props.onuId} type zte601 sn {props.serialNumber}</p>
      <p>exit</p>
      <p>interface gpon-onu_1/2/2:{props.onuId}</p>
      <p>description sw-glk-213</p>
      <p>tcont 1 name fregat profile fregat</p>
      <p>gemport 1 name fregat tcont 1</p>
      <p>switchport mode trunk vport 1</p>
      <p>service-port 1 vport 1 user-vlan 77 transparent</p>
      <p>service-port 2 vport 1 user-vlan 806 transparent</p>
      {/* service-port 3 vport 1 user-vlan 3215 transparent  */}
      <p>exit</p>
      <p>pon-onu-mng gpon-onu_1/2/2:{props.onuId}</p>
      <p>service MANAGE gemport 1 vlan 77</p>
      <p>service VLAN806 gemport 1 vlan 806</p>
      {/* service 3215 gemport 1 vlan 3215  */}
      <p>vlan port eth_0/1 mode trunk vlan port eth_0/1 vlan all exit</p>
    </Box>
  );
};

export default SwitchConfig;

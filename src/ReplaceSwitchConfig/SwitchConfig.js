import React from "react";
import { Box } from "@mui/material";

const SwitchConfig = (props) => {
  return (
    <Box>
      <p>config terminal</p>
      <p>interface gpon-olt_{props.interfaceOlt}</p>
      <p>no onu {props.onuId}</p>
      <p>
        onu {props.onuId} type zte601 sn {props.serialNumber}
      </p>
      <p>exit</p>
      {props.interfaceConfig.map((item,index) => (
        <p key={index}>{item}</p>
      ))}
      <p>exit</p>
      {props.ponConfig.map((item,index) => (
        <p key={index}>{item}</p>
      ))}
      <p>exit</p>
    </Box>
  );
};

export default SwitchConfig;

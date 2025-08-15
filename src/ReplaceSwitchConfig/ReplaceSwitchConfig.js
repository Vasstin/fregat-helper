import { Box, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import SwitchConfig from "./SwitchConfig";

const ReplaceSwitchConfig = (props) => {
  const [serialNumber, setSerialNumber] = useState();
  const [onuId, setOnuId] = useState();
  const [interfaceConfig, setInterfaceConfig] = useState([]);
  const [ponConfig, setPonConfig] = useState([]);
  const [interfaceOlt, setInterfaceOlt] = useState();

  let handleChange = (event) => {
    let array = event.target.value.split("\n");
    let onuId = array[0].split(":")[1];
    let index = array.findIndex((item) => item.startsWith("pon-onu-mng"));
    let interfaceConfig = array.slice(0, index);
    let ponConfig = array.slice(index);
    let interfaceOlt = array[0]?.split("_")[1]?.split(":")[0];

    setOnuId(onuId);
    setInterfaceConfig(interfaceConfig);
    setPonConfig(ponConfig);
    setInterfaceOlt(interfaceOlt);
  };
  return (
    <Box>
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
        }}
      >
        Replace onu config
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "1000px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginTop: "20px",
            marginRight: "20px",
            width: "50%",
          }}
        >
          <TextField
            sx={{
              width: "100%",
              marginBottom: "10px",
            }}
            color="primary"
            // name="Enter config"
            // id="outlined-basic"
            // label="Enter config"
            // variant="outlined"
            size="small"
            id="outlined-multiline-flexible"
            label="Enter config"
            multiline
            maxRows={15}
            onChange={(event) => handleChange(event)}
          ></TextField>
          <TextField
            sx={{
              marginBottom: "10px",
            }}
            color="primary"
            name="Serial number"
            id="outlined-basic"
            label="Serial number"
            variant="outlined"
            size="small"
            onChange={(event) => setSerialNumber(event.target.value)}
          ></TextField>
        </Box>
        <Box>
          <SwitchConfig
            serialNumber={serialNumber}
            onuId={onuId}
            interfaceConfig={interfaceConfig}
            ponConfig={ponConfig}
            interfaceOlt={interfaceOlt}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ReplaceSwitchConfig;

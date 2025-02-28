import { Box, TextField, Typography } from "@mui/material";
import React, { use, useState } from "react";
import SwitchConfig from "./SwitchConfig";

const ReplaceSwitchConfig = (props) => {
  const [serialNumber, setSerivalNumber] = useState();
  const [onuId, setOnuId] = useState()

  let handleChange = (event) => {
    let array = event.target.value.split("\n");
    let onuId = array[0].split(":")[1];
    setOnuId(onuId)
    console.log(array);
  };
  console.log(serialNumber);
  return (
    <Box>
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
        }}
      >
        Replace onu config for switch
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
            onChange={(event) => setSerivalNumber(event.target.value)}
          ></TextField>
        </Box>
        <Box>
          <SwitchConfig serialNumber={serialNumber} onuId={onuId}/>
        </Box>
      </Box>
    </Box>
  );
};

export default ReplaceSwitchConfig;

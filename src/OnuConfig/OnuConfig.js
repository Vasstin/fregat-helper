import { Box, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Config from "./Config";

const OnuConfig = (props) => {
  const [configType, setConfigType] = useState();
  const [configData, setConfigData] = useState({});

  let handleConfigData = (event) => {
    setConfigData({
      ...configData,
      [event.target.name]:
        event.target.name === "VlanName"
          ? event.target.value[0]?.toUpperCase() === event.target.value[0]
            ? event.target.value
            : event.target.value?.toUpperCase()
          : event.target.value,
    });
  };
  let handleType = (event) => {
    setConfigType(event.target.value);
  };
  return (
    <Box>
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
        }}
      >
        Onu config
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          width: "1000px",
        }}
      >
        <Box
          sx={{
            display:'flex',
            flexDirection: "column",
            width: "50%",
          }}
        >
          <FormControl>
            <FormLabel
              sx={{
                marginBottom: "10px",
              }}
              id="demo-row-radio-buttons-group-label"
            >
              Type
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              onChange={handleType}
            >
              <FormControlLabel
                value="Switch"
                control={<Radio />}
                label="Switch"
              />
              <FormControlLabel
                value="PPPoE"
                control={<Radio />}
                label="PPPoE"
              />
            </RadioGroup>
          </FormControl>
          <TextField
            sx={{
              marginBottom: "10px",
              width: "250px",
            }}
            color="primary"
            name="interface"
            id="outlined-basic"
            label="Interface"
            variant="outlined"
            size="small"
            onChange={handleConfigData}
          ></TextField>
        </Box>
        <Box
          sx={{
            width: "50%",
          }}
        >
          <Config configData={configData} configType={configType}/>
        </Box>
      </Box>
    </Box>
  );
};

export default OnuConfig;

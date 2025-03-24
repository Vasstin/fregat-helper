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
  const [vlan, setVlan] = useState();

  const handleConfigData = (event) => {
    if (event.target.name === "interface") {
      let data = event.target.value.split("/")[2].split(":")[0];
      let vlan = data < 10 ? "80" + data : "8" + data;
      setVlan(vlan);

      setConfigData({
        ...configData,
        [event.target.name]: event.target.value,
      });
    } else {
      setConfigData({
        ...configData,
        [event.target.name]: event.target.value,
      });
    }
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
            display: "flex",
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
            name="desc"
            id="outlined-basic"
            label="Description"
            variant="outlined"
            size="small"
            onChange={handleConfigData}
          ></TextField>
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
          <Config configData={configData} configType={configType} vlan={vlan} />
        </Box>
      </Box>
    </Box>
  );
};

export default OnuConfig;

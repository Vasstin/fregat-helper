import React, { useState } from "react";
import ConfigBody from "./ConfigBody";
import { Box, TextField, Typography } from "@mui/material";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const SubnetConfGen = (props) => {
  const [nextHostSwitch, setNextHostSwitch] = useState();
  const [configData, setConfigData] = useState({});
  const [nextHost, setNextHost] = useState();

  let handleRadio = (event) => {
    setNextHost(event.target.value);
  };
  let handlRadioSwitch = (event) => {
    setNextHostSwitch(event.target.value);
  };

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

  let nameArray = ["Port", "Vlan", "VlanName", "Gateway", "Mask"];
  return (
    <Box>
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
        }}
      >
        Generate config for Subnet
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "start",
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
          {nameArray.map((item) => (
            <TextField
            sx={{
              marginBottom: "10px",
              width: "250px",
            }}
              color="primary"
              key={item}
              name={item}
              id="outlined-basic"
              label={item}
              variant="outlined"
              size="small"
              onChange={handleConfigData}
            />
          ))}
          <FormControl>
            <FormLabel
              sx={{
                marginBottom: "10px",
              }}
              id="demo-row-radio-buttons-group-label"
            >
              Next host
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              onChange={handleRadio}
            >
              <FormControlLabel value="Olt" control={<Radio />} label="Olt" />
              <FormControlLabel
                value="BDcom"
                control={<Radio />}
                label="BDcom"
              />
            </RadioGroup>
          </FormControl>
          {nextHost === "Olt" ? (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                marginTop: "10px",
                marginRight: "20px",
                width: "50%",
              }}
            >
              <TextField
                sx={{
                  marginBottom: "10px",
                  width: "250px",
                }}
                color="primary"
                name="upLinkPort"
                id="outlined-basic"
                label="Up-link port"
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
                name="onuPort"
                id="outlined-basic"
                label="Onu port"
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
                name="serviceNumber"
                id="outlined-basic"
                label="Service Number"
                variant="outlined"
                size="small"
                onChange={handleConfigData}
              ></TextField>
            </Box>
          ) : (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                marginTop: "10px",
                marginRight: "20px",
                width: "50%",
              }}
            >
              <TextField
                sx={{
                  marginBottom: "10px",
                  width: "250px",
                }}
                color="primary"
                name="speed"
                id="outlined-basic"
                label="Speed"
                variant="outlined"
                size="small"
                onChange={handleConfigData}
              ></TextField>
            </Box>
          )}
          <FormControl>
            <FormLabel
              sx={{
                marginBottom: "10px",
              }}
              id="demo-row-radio-buttons-group-label"
            >
              Next host, switch
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              onChange={handlRadioSwitch}
            >
              <FormControlLabel
                value="Edgecore"
                control={<Radio />}
                label="Edgecore"
              />
              <FormControlLabel
                value="Dlink"
                control={<Radio />}
                label="Dlink"
              />
            </RadioGroup>
          </FormControl>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginTop: "10px",
              marginRight: "20px",
              width: "50%",
            }}
          >
            <TextField
              sx={{
                marginBottom: "10px",
                width: "250px",
              }}
              color="primary"
              name="switchUplink"
              id="outlined-basic"
              label="Switch Uplink"
              variant="outlined"
              size="small"
              onChange={handleConfigData}
            ></TextField>
          </Box>
        </Box>
        <ConfigBody
          configData={configData}
          nextHost={nextHost}
          nextHostSwitch={nextHostSwitch}
        />
      </Box>
    </Box>
  );
};

export default SubnetConfGen;

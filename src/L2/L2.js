import { Box, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import L2Config from "./L2Conig";

const L2 = (props) => {
  let inputCsw = ["VlanName", "Vlan", "Port"];

  const [nextHost, setNextHost] = useState();
  const [configfData, setConfigData] = useState({
    VlanName: "",
    Vlan: "",
    Port: "",
    brasIp: "",
    coreIp: "",
    nextPort: "",
    upLinkPort: "",
    onuPort: "",
  });

  let handleRadio = (event) => {
    setNextHost(event.target.value);
  };

  let handleConfigData = (event) => {
    setConfigData({
      ...configfData,
      [event.target.name]:
        event.target.name === "VlanName"
          ? event.target.value[0]?.toUpperCase() === event.target.value[0]
            ? event.target.value
            : event.target.value?.toUpperCase()
          : event.target.value,
    });
  };

  console.log(configfData);
  return (
    <Box>
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
        }}
      >
        L2 config
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
          <Typography
            sx={{
              marginBottom: "10px",
            }}
          >
            csw-glk-04
          </Typography>
          {inputCsw.map((item, index) => (
            <TextField
              sx={{
                marginBottom: "10px",
                width: "250px",
              }}
              key={index}
              color="primary"
              name={item}
              id="outlined-basic"
              label={item}
              variant="outlined"
              size="small"
              onChange={handleConfigData}
            ></TextField>
          ))}
          <Typography
            sx={{
              marginBottom: "10px",
              marginTop: "10px",
            }}
          >
            core-dp-01
          </Typography>
          <TextField
            sx={{
              marginBottom: "10px",
              width: "250px",
            }}
            color="primary"
            name="brasIp"
            id="outlined-basic"
            label="Bras-xx IP"
            variant="outlined"
            size="small"
            onChange={handleConfigData}
          ></TextField>
          <Typography
            sx={{
              marginBottom: "10px",
              marginTop: "10px",
            }}
          >
            bras-xx-xx
          </Typography>
          {/* <TextField
            sx={{
              marginBottom: "10px",
              width: "250px",
            }}
            color="primary"
            name="coreIp"
            id="outlined-basic"
            label="Core-dp IP"
            variant="outlined"
            size="small"
            onChange={handleConfigData}
          ></TextField> */}
          <TextField
            sx={{
              marginBottom: "10px",
              width: "250px",
            }}
            color="primary"
            name="nextPort"
            id="outlined-basic"
            label="Next port"
            variant="outlined"
            size="small"
            onChange={handleConfigData}
          ></TextField>
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
                marginTop: "20px",
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
            </Box>
          ) : (
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
        </Box>
        <Box>
          <L2Config configData={configfData} nextHost={nextHost}></L2Config>
        </Box>
      </Box>
    </Box>
  );
};

export default L2;

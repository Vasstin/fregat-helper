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

  const handleConfigData = (event) => {
    const { name, value } = event.target;

    if (name === "interface") {
      let obj = {
        oltInterface: "",
        id: "",
        vlan: "",
      };
      const underscoreSplit = value.split("_");
      const slashSplit = value.split("/");

      if (
        underscoreSplit.length > 1 &&
        underscoreSplit[1].includes(":") &&
        slashSplit.length > 2 &&
        slashSplit[2].includes(":")
      ) {
        try {
          obj.oltInterface = underscoreSplit[1].split(":")[0];
          obj.id = underscoreSplit[1].split(":")[1];
          const data = slashSplit[2].split(":")[0];
          obj.vlan = data < 10 ? "80" + data : "8" + data;
        } catch (e) {
          obj.oltInterface = "";
          obj.id = "";
          obj.vlan = "";
        }
      }
      for (const prop in obj) {
        setConfigData((prev) => ({
          ...prev,
          [prop]: obj[prop],
        }));
      }
    }

    setConfigData((prev) => ({
      ...prev,
      [name]: value,
    }));
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
              <FormControlLabel
                value="ZTE_PPPoE"
                control={<Radio />}
                label="ZTE_PPPoE"
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
          <TextField
            sx={{
              marginBottom: "10px",
              width: "250px",
            }}
            color="primary"
            name="onu"
            id="outlined-basic"
            label="Onu"
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
          <Config configData={configData} configType={configType} />
        </Box>
      </Box>
    </Box>
  );
};

export default OnuConfig;

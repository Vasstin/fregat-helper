import {
  Box,
  TextField,
  Typography,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@mui/material";
import React, { useState, useEffect, useMemo } from "react";
//b0a8.6ef1.fff0
const MacChanger = (props) => {
  const [macType, setMacType] = useState();
  const [mac, setMac] = useState("");

  const newMac = useMemo(() => {
    let cleanMac = mac
      .trim()
      .split("")
      .map((item) => (item === "." || item === ":" || item === "-" ? "" : item))
      .join("")
      .toUpperCase();
    if (!macType) return cleanMac;

    switch (macType) {
      case "Bdcom":
        cleanMac = cleanMac
          .split("")
          .map((item, index) =>
            index % 4 === 0 && index !== 0 ? `.${item}` : item
          )
          .join("");
        break;
      case "Bras":
        cleanMac = cleanMac
          .split("")
          .map((item, index) =>
            index % 2 === 0 && index !== 0 ? `:${item}` : item
          )
          .join("");
        break;
      case "Switch":
        cleanMac = cleanMac
          .split("")
          .map((item, index) =>
            index % 2 === 0 && index !== 0 ? `-${item}` : item
          )
          .join("");
        break;
      default:
        return cleanMac;
    }
    return cleanMac;
  }, [mac, macType]);

  const handleChange = (event) => {
    setMac(event.target.value);
  };

  let handleType = (event) => {
    setMacType(event.target.value);
  };

  return (
    <Box>
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
        }}
      >
        Mac Changer
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
            size="small"
            id="outlined-multiline-flexible"
            label="Enter mac"
            multiline
            maxRows={15}
            onChange={(event) => handleChange(event)}
          ></TextField>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            onChange={handleType}
          >
            <FormControlLabel
              value="Bdcom"
              control={<Radio />}
              label="Bdcom (xxxx.xxxx.xxxx)"
            />
            <FormControlLabel
              value="Bras"
              control={<Radio />}
              label="Bras (xx:xx:xx:xx:xx:xx)"
            />

            <FormControlLabel
              value="Switch"
              control={<Radio />}
              label="Switch (xx-xx-xx-xx-xx-xx)"
            />
          </RadioGroup>
        </Box>
        <Box>
          {/* <SwitchConfig
            serialNumber={serialNumber}
            onuId={onuId}
            interfaceConfig={interfaceConfig}
            ponConfig={ponConfig}
            interfaceOlt={interfaceOlt}
          /> */}
        </Box>
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
          }}
        >
          {newMac}
        </Typography>
      </Box>
    </Box>
  );
};

export default MacChanger;

import React, { useState, useEffect } from "react";
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
  const [subnetIps, setSubnetIps] = useState({
    network: "",
    firstHost: "",
    lastHost: "",
    broadcast: "",
    mask: "",
  });

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

  function getSubnetInfo(ip, prefix) {
    const ipToLong = (ip) =>
      ip.split(".").reduce((acc, octet) => (acc << 8) + parseInt(octet), 0) >>>
      0;

    const longToIp = (num) =>
      [24, 16, 8, 0].map((shift) => (num >> shift) & 255).join(".");

    const ipNum = ipToLong(ip);
    const maskNum = prefix === 0 ? 0 : 0xffffffff << (32 - prefix);
    const network = ipNum & maskNum;
    const broadcast = network | (~maskNum >>> 0);
    // Для маленьких подсетей (/31, /32) first/last совпадают с network/broadcast
    const gateway = prefix >= 31 ? network : network + 1;
    const ipClient = prefix >= 31 ? broadcast : broadcast - 1;
    const maskIp = longToIp(maskNum >>> 0);

    return {
      network: longToIp(network),
      gateway: longToIp(gateway),
      ipClient: longToIp(ipClient),
      broadcast: longToIp(broadcast),
      mask: maskIp,
    };
  }

  // Пример:

  useEffect(() => {
    if (configData.Ip && configData.Mask) {
      const info = getSubnetInfo(configData.Ip, parseInt(configData.Mask));
      setSubnetIps(info);
    }
  }, [configData.Ip, configData.Mask]);

  let nameArray = ["Port", "Vlan", "VlanName", "Ip", "Mask"];

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
          subnetIps={subnetIps}
        />
      </Box>
    </Box>
  );
};

export default SubnetConfGen;

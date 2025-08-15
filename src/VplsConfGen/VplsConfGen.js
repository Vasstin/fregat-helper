import React, { useState } from "react";
import VplsPortConfGen from "./VplsPortConfGen";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const VplsConfGen = (props) => {
  const [portArray, setPortArray] = useState([]);
  const [vlanVpls, setVlanVpls] = useState();
  const [vlanVplsName, setVlanVplsName] = useState();
  const [vlanVplsBrasIp, setVlanVplsBrasIp] = useState();

  let newArr = [];
  let getVplsVlanPorts = (event) => {
    let arr = event.split(" ");
    for (let i = 0; i < arr.length; i++) {
      let str = arr[i];
      if (str.slice(0, 2) === "ge" || str.slice(0, 2) === "xe") {
        newArr.push(str);
      }
    }
    return setPortArray(newArr);
  };
  let getVplsVlanId = (event) => {
    return setVlanVpls(event);
  };
  let getVplsVlanName = (event) => {
    return setVlanVplsName(event);
  };
  let getVplsBrasIp = (event) => {
    return setVlanVplsBrasIp(event);
  };

  let nameArray = ["Ports", "VlanName", "VlanID", "Bras IP"];

  let handleChange = (event) => {
    switch (event.target.name) {
      case "Ports":
        getVplsVlanPorts(event.target.value);
        break;
      case "VlanName":
        getVplsVlanName(event.target.value);
        break;
      case "VlanID":
        getVplsVlanId(event.target.value);
        break;
      case "Bras IP":
        getVplsBrasIp(event.target.value);
        break;
      default:
    }
  };
  return (
    <div>
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
        }}
      >
        VPLS
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
          }}
        >
          {nameArray.map((name) => (
            <TextField
              sx={{
                marginBottom: "10px",
              }}
              color="primary"
              name={name}
              id="outlined-basic"
              label={name}
              variant="outlined"
              size="small"
              onChange={(event) => handleChange(event)}
            ></TextField>
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
            }}
          >
            Create VPLS global
          </Typography>
          <p>
            set routing-instances {vlanVplsName}
            {vlanVpls} instance-type vpls
          </p>
          <p>
            set routing-instances {vlanVplsName}
            {vlanVpls} vlan-id {vlanVpls}
          </p>
          <p>
            set routing-instances {vlanVplsName}
            {vlanVpls} protocols vpls encapsulation-type ethernet-vlan
          </p>
          <p>
            set routing-instances {vlanVplsName}
            {vlanVpls} protocols vpls vpls-id {vlanVpls}
          </p>
          <p>
            set routing-instances {vlanVplsName}
            {vlanVpls} protocols vpls no-tunnel-services {vlanVpls}
          </p>
          <p>
            set routing-instances {vlanVplsName}
            {vlanVpls} protocols vpls mtu 9192
          </p>
          <p>
            set routing-instances {vlanVplsName}
            {vlanVpls} protocols vpls neighbor {vlanVplsBrasIp}
          </p>
          {portArray.map((port) => (
            <VplsPortConfGen
              portArray={port}
              vlanVpls={vlanVpls}
              vlanVplsName={vlanVplsName}
            ></VplsPortConfGen>
          ))}
        </Box>
      </Box>
    </div>
  );
};

export default VplsConfGen;

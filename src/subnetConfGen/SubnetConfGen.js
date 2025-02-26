import React, { useState } from "react";
import ConfigBody from "./ConfigBody";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const SubnetConfGen = (props) => {
  const [port, setPort] = useState("");
  const [vlan, setVlan] = useState("");
  const [vlanName, setVlanName] = useState("");
  const [gateway, setGateway] = useState("");
  const [mask, setMask] = useState("");

  let handleChange = (event) => {
    switch (event.target.name) {
      case "Port":
        setPort(event.target.value);
        break;
      case "Vlan":
        setVlan(event.target.value);
        break;
      case "VlanName":
        setVlanName(event.target.value);
        break;
      case "Gateway":
        setGateway(event.target.value);
        break;
      case "Mask":
        setMask(event.target.value);
        break;
      default:
    }
  };

  let nameArray = ["Port", "Vlan", "VlanName", "Gateway", "Mask"];

  return (
    <div>
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
        }}
      >
        Generate config for Subnet
      </Typography>
      <div className="Wrapper">
        
        <div className="InputBox">
          {nameArray.map((item) => (
            <TextField
              sx={{
                marginBottom: "10px",
              }}
              color="primary"
              key={item}
              name={item}
              id="outlined-basic"
              label={item}
              variant="outlined"
              size="small"
              onChange={handleChange}
            />
          ))}
        </div>
        <ConfigBody
          port={port}
          vlan={vlan}
          vlanName={vlanName}
          gateway={gateway}
          mask={mask}
        />
      </div>
    </div>
  );
};

export default SubnetConfGen;

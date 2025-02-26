import React, { useState } from "react";
import VplsPortConfGen from "./VplsPortConfGen";

const VplsConfGen = props => {
  const [portArray, setPortArray] = useState([]);
  const [vlanVpls, setVlanVpls] = useState();
  const [vlanVplsName, setVlanVplsName] = useState();
  const [vlanVplsBrasIp, setVlanVplsBrasIp] = useState();

  let newArr = [];
  let getVplsVlanPorts = (event) => {
    let arr = event.target.value.split(" ");
    for (let i = 0; i < arr.length; i++) {
      let str = arr[i];
      if (str.slice(0, 2) === "ge" || str.slice(0, 2) === "xe") {
        newArr.push(str);
      }
    }
    return setPortArray(newArr);
  };
  let getVplsVlanId = (event) => {
    return setVlanVpls(event.target.value);
  };
  let getVplsVlanName = (event) => {
    return setVlanVplsName(event.target.value);
  };
  let getVplsBrasIp = (event) => {
    return setVlanVplsBrasIp(event.target.value);
  };
  return(
    <div>
        <p>VPLS</p>
        <div>
          <div className="InputBox">
            <lable for="vplsPort">Ports</lable>
            <input
              onChange={(event) => getVplsVlanPorts(event)}
              id="vplsPort"
            ></input>
            <lable for="vplsVlanName">VlanName</lable>
            <input
              onChange={(event) => getVplsVlanName(event)}
              id="vplsVlanName"
            ></input>
            <lable for="vplsVlanId">VlanID</lable>
            <input
              onChange={(event) => getVplsVlanId(event)}
              id="vplsVlanId"
            ></input>
            <lable for="vplsBrasIp">Bras IP</lable>
            <input
              onChange={(event) => getVplsBrasIp(event)}
              id="vplsBrasIp"
            ></input>
          </div>
          <br></br>
          <b>Глобальное создание VPLS</b>
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
        </div>
        {portArray.map((port) => (
          <VplsPortConfGen
            portArray={port}
            vlanVpls={vlanVpls}
            vlanVplsName={vlanVplsName}
          ></VplsPortConfGen>
        ))}
      </div>
  )
};

export default VplsConfGen;

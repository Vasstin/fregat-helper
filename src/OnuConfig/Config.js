import { Box } from "@mui/material";
import React from "react";

const Config = (props) => {
  //let vlan = props.configData.interface.split("/")[2].split(":")[0]
  console.log(props);
  let content;
  switch (props.configType) {
    case "Switch":
      content = (
        <Box>
          <p>conf term</p>
          <p>interface gpon-olt_1/{props.configData.plate}/{props.configData.ports[props.index]}</p>
          <p>
            onu {props.configData.Onuid} type zte601 sn {props.configData.onuSn}
          </p>
          <p>exit</p>
          <p>interface gpon-onu_1/{props.configData.plate}/{props.configData.ports[props.index]}:{props.configData.Onuid}</p>
          <p>description {props.configData.desc}</p>
          <p>tcont 1 name fregat profile fregat</p>
          <p>gemport 1 name fregat tcont 1</p>
          <p>switchport mode trunk vport 1</p>
          <p>service-port 1 vport 1 user-vlan 77 transparent</p>
          <p>
            service-port 2 vport 1 user-vlan {props.configData.vlan} transparent
          </p>
          <p>exit</p>
          <p>pon-onu-mng gpon-onu_1/{props.configData.plate}/{props.configData.ports[props.index]}:{props.configData.Onuid}</p>
          <p>service MANAGE gemport 1 vlan 77</p>
          <p>
            service PPPoE-{props.configData.vlan} gemport 1 vlan{" "}
            {props.configData.vlan}
          </p>
          <p>vlan port eth_0/1 mode trunk</p>
          <p>vlan port eth_0/1 vlan all</p>
        </Box>
      );
      break;
    case "PPPoE":
      content = (
        <Box>
           <p>interface gpon-olt_1/{props.configData.plate}/{props.configData.ports[props.index]}</p>
          <p>
            onu {props.configData.Onuid} type zte601 sn {props.configData.onuSn}
          </p>
          <p>exit</p>
          <p>interface gpon-onu_1/{props.configData.plate}/{props.configData.ports[props.index]}:{props.configData.Onuid}</p>
          <p>description {props.configData.desc}</p>
          <p>tcont 1 name fregat profile fregat</p>
          <p>gemport 1 name fregat tcont 1</p>
          <p>
            service-port 1 vport 1 user-vlan {props.configData.vlan} vlan{" "}
            {props.configData.vlan}
          </p>
          <p>security max-mac-learn 2 vport 1</p>
          <p>exit</p>
          <p>pon-onu-mng gpon-onu_1/{props.configData.plate}/{props.configData.ports[props.index]}:{props.configData.Onuid}</p>
          <p>service internet gemport 1 cos 0 vlan {props.configData.vlan}</p>
          <p>vlan port eth_0/1 mode tag vlan {props.configData.vlan}</p>{" "}
          <p>exit</p>
        </Box>
      );
      break;
    case "ZTE_PPPoE":
      content = (
        <Box>
          {/* <p>config terminal</p> */}
          <p>interface gpon-olt_1/{props.configData.plate}/{props.configData.ports[props.index]}</p>
          <p>
            onu {props.configData.Onuid} type zte601 sn {props.configData.onuSn}
          </p>
          <p>exit</p>
          <p>interface gpon-onu_1/{props.configData.plate}/{props.configData.ports[props.index]}:{props.configData.Onuid}</p>
          {props.configData.desc ? (
            <p>description {props.configData.desc}</p>
          ) : null}
          <p>tcont 1 name fregat profile fregat</p>
          <p>gemport 1 name fregat tcont 1</p>
          <p>
            service-port 1 vport 1 user-vlan {props.configData.vlan} vlan{" "}
            {props.configData.vlan}
          </p>
          <p>security max-mac-learn 2 vport 1</p>
          <p>exit</p>
          <p>pon-onu-mng gpon-onu_1/{props.configData.plate}/{props.configData.ports[props.index]}:{props.configData.Onuid}</p>
          <p>service internet gemport 1 cos 0 vlan {props.configData.vlan}</p>
          <p>vlan port eth_0/1 mode tag vlan {props.configData.vlan}</p>
          <p>exit</p>
        </Box>
      );
      break;
  }
  return <Box>{content}</Box>;
};

export default Config;

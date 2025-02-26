import React, { useState, useEffect } from "react";
import PppoeConfig from "./PppoeConfig";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const EponConfGen = (props) => {
  let [epon, setEpon] = useState(1);
  // const [onuCount, setOnuCount] = useState([]);
  const [onuId, setOnuId] = useState([]);
  const [eponVlan, setEponVlan] = useState(0);

  useEffect(() => {
    switch (epon) {
      case 1:
        setEponVlan(801);
        break;
      case 2:
        setEponVlan(802);
        break;
      case 3:
        setEponVlan(803);
        break;
      case 4:
        setEponVlan(804);
        break;
      case 5:
        setEponVlan(805);
        break;
      case 6:
        setEponVlan(806);
        break;
      case 7:
        setEponVlan(807);
        break;
      case 8:
        setEponVlan(808);
        break;
      case 9:
        setEponVlan(809);
        break;
      case 10:
        setEponVlan(810);
        break;
      case 11:
        setEponVlan(811);
        break;
      case 12:
        setEponVlan(812);
        break;
      case 13:
        setEponVlan(813);
        break;
      case 14:
        setEponVlan(814);
        break;
      case 15:
        setEponVlan(815);
        break;
      case 16:
        setEponVlan(816);
        break;
      default:
        setEponVlan(817);
    }
  }, [epon]);
  let handleEponPort = (event) => {
    setEpon(+event.target.value);
    console.log(onuId.length)
    if (onuId.length > 1) {
      console.log('in first if')
    } else if (onuId.length !== 1) {
      console.log('in second if')
      setOnuId(Array.from({ length: 64 }));
    }
    // if(onuId.length <= 1){
    //   setOnuId(Array.from({ length: 64 }));
    // }
  };

  let getOnuId = (event) => {
    let arr = event.target.value.split(" ");
    let newArr = [];
    arr.forEach((item) => {
      if (item.includes("-")) {
        let innerItem = item.split("-").map(Number);
        for (let i = innerItem[0]; i <= innerItem[1]; i++) {
          newArr.push(i);
        }
      } else {
        newArr.push(Number(item));
      }
    });
    console.log(onuId.length + " in getonuid")
    arr[0] === "" ? setOnuId(Array.from({ length: 64 })) : setOnuId(newArr);
  };
  return (
    <div className="CreateConfig">
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
        }}
      >
        Generate config for epon onu BDCOM
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "800px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <TextField
            name="Epon"
            id="outlined-basic"
            label="Epon"
            variant="outlined"
            sx={{
              marginBottom: "25px",
              width: "250px",
            }}
            color="primary"
            type="number"
            size="small"
            onChange={handleEponPort}
            InputProps={{
              inputProps: {
                max: 16,
                min: 1,
              },
            }}
          />
          <TextField
            name="Onu ID"
            id="outlined-basic"
            label="Onu ID"
            variant="outlined"
            sx={{
              marginBottom: "25px",
              width: "250px",
            }}
            color="primary"
            size="small"
            onChange={getOnuId}
          />
        </Box>
        <div>
          {
            epon === 0 ? (
              <div></div>
            ) : (
              onuId.map((item, index) => (
                <PppoeConfig
                  epon={epon}
                  eponVlan={eponVlan}
                  key={index}
                  count={item || index + 1}
                ></PppoeConfig>
              ))
            )
            // onuId.length === 0 || onuId.length === 1 ? (
            //   onuCount.map((item, index) => (
            //     <PppoeСonfig
            //       epon={epon}
            //       eponVlan={eponVlan}
            //       key={index}
            //       count={index + 1}
            //       test={"onuCount"}
            //     ></PppoeСonfig>
            //   ))
            // ) : (
            //   onuId.map((item, index) => (
            //     <PppoeСonfig
            //       epon={epon}
            //       eponVlan={eponVlan}
            //       key={index}
            //       count={item}
            //     ></PppoeСonfig>
            //   ))
            // )
          }
        </div>
      </Box>
    </div>
  );
};

export default EponConfGen;

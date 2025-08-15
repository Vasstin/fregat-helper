import React from "react";
import Navigation from "./Navigation/Navigation";
import { Outlet } from "react-router";
import { Box, styled } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const Layout = (props) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#343a40",
      },
      // secondary: {
      //   main: "#ffffff",
      // },
      // background: purple,
    },
    typography: {
      fontFamily: "Poppins, sans-serif",
      fontWeightLight: 400,
      fontWeightRegular: 600,
      fontWeightMedium: 700,
      fontWeightBold: 900,
      h3: {
        fontFamily: "Poppins, sans-serif",
        fontSize: "20px",
        fontWeight: 600,
        letterSpacing: "0.05em", // Немного увеличиваем расстояние между буквами
        marginBottom: '50px'
      },
    },
  });

  const Wrapper = styled(Box)({
    margin: "0 auto",
    marginTop: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  });
  return (
    <div>
      <ThemeProvider theme={theme}>
        {/* <CssBaseline /> */}
        <Navigation />
        <Wrapper>
          <Outlet />
        </Wrapper>
      </ThemeProvider>
    </div>
  );
};

export default Layout;

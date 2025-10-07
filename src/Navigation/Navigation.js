import React, { useState, useEffect } from "react"; // 🔑 Добавляем useState и useEffect
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import navLogo from "../img/fregg.png";
import { Link } from "react-router-dom"; // Убедитесь, что это 'react-router-dom'
import styled from "@emotion/styled";

// 🔑 ИМПОРТЫ FIREBASE
import { onAuthStateChanged, signOut } from "firebase/auth";
import auth from "../firebase"; // ПУТЬ К ВАШЕЙ КОНФИГУРАЦИИ

const pages = [
  "subnet",
  "epon",
  "vpls",
  "replace-config",
  "l2",
  "onu-config",
  "mac-changer",
];

const Navigation = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  // 🆕 Состояние для отслеживания авторизации
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false); 

  // 🆕 1. ОТСЛЕЖИВАНИЕ СТАТУСА FIREBASE
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // Устанавливаем true, если user существует, иначе false
      setIsUserLoggedIn(!!user); 
    });
    return () => unsubscribe(); // Очистка подписки при размонтировании
  }, []);

  // 🆕 2. ФУНКЦИЯ ДЛЯ ВЫХОДА
  const handleLogout = async () => {
    try {
      await signOut(auth);
      handleCloseNavMenu(); 
    } catch (error) {
      console.error("Ошибка при выходе:", error);
    }
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  
  // ... (Ваши стили CustomAppBar и LogoLink)
  const CustomAppBar = styled(AppBar)({
    width: "100%",
    backgroundColor: "#343a40",
  });

  const LogoLink = styled(Link)({
    width: "150px",
    paddingTop: "5px",
    textDecoration: "none",
    color: "inherit",
  });
  // ...

  return (
    <CustomAppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <LogoLink to="/">
            <img width={150} src={navLogo} alt="nav-logo" />
          </LogoLink>

          {/* ----- МОБИЛЬНОЕ МЕНЮ (xs: "flex", md: "none") ----- */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
                {/* Ссылки меню */}
                {pages.map((page) => (
                    <Link key={page} to={page} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Button onClick={handleCloseNavMenu} sx={{ display: 'block' }}>
                            {page}
                        </Button>
                    </Link>
                ))}
                {/* 🆕 Кнопка Авторизации/Выхода для мобильного меню */}
                {isUserLoggedIn ? (
                    <Button onClick={handleLogout} sx={{ display: 'block', color: 'error.main' }}>
                        Logout
                    </Button>
                ) : (
                    <Link to="/signin" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Button onClick={handleCloseNavMenu} sx={{ display: 'block' }}>
                            Login
                        </Button>
                    </Link>
                )}
            </Menu>
          </Box>

          {/* ----- ДЕСКТОПНЫЕ ССЫЛКИ (xs: "none", md: "flex") ----- */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Link key={page} to={page} style={{ textDecoration: 'none' }}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              </Link>
            ))}
          </Box>
          
          {/* 🆕 КНОПКА АВТОРИЗАЦИИ/ВЫХОДА (Десктоп) */}
          <Box sx={{ flexGrow: 0 }}>
            {isUserLoggedIn ? (
              // 🔑 Показать Выйти, если авторизован
              <Button onClick={handleLogout} sx={{ my: 2, color: "white", display: "block" }}>
                Logout
              </Button>
            ) : (
               // Показать Войти, если не авторизован
               <Link to="/signin" style={{ textDecoration: 'none' }}>
                  <Button sx={{ my: 2, color: "white", display: "block" }}>
                    Login
                  </Button>
               </Link>
            )}
          </Box>
        </Toolbar>
      </Container>
    </CustomAppBar>
  );
};

export default Navigation;
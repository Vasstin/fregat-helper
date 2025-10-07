import React, { useState, useEffect } from "react"; // 🆕 Добавляем хуки
import Navigation from "./Navigation/Navigation";
import { Outlet, useNavigate } from "react-router-dom"; // 🔑 Используем useNavigate и меняем 'react-router' на 'react-router-dom'
import { Box, styled, CircularProgress } from "@mui/material"; // 🆕 Добавляем CircularProgress для лоадера
import { ThemeProvider, createTheme } from "@mui/material/styles";

// 🆕 Импорты для Firebase
import { onAuthStateChanged } from 'firebase/auth';
import auth from './firebase'; // 🔑 Убедитесь, что путь к firebase.js правильный

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

    // 🆕 Состояния для управления защитой
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate(); // 🔑 Хук для навигации

    useEffect(() => {
        // Подписываемся на изменения состояния авторизации
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // Пользователь авторизован
                setIsAuthenticated(true);
                // Если пользователь случайно зашел на /signin, отправляем его на главную
                if (window.location.pathname === '/signin') {
                    navigate('/', { replace: true });
                }
            } else {
                // Пользователь НЕ авторизован
                setIsAuthenticated(false);
                
                // 🔑 КРИТИЧЕСКИЙ МОМЕНТ: перенаправление на /signin
                // Если пользователь пытается получить доступ к защищенной странице
                if (window.location.pathname !== '/signin') {
                                  console.log("Пользователь не авторизован. Перенаправление на /signin");

                    navigate('/signin', { replace: true });
                }
            }
            setIsLoading(false); // Проверка завершена
        });

        // Отписываемся при размонтировании
        return () => unsubscribe();
    }, [navigate]); // Зависимость от navigate
      if (isLoading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <CircularProgress />
            </Box>
        );
    }
      if (!isAuthenticated) {
        return null;
    }
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Navigation />
        <Wrapper>
          <Outlet />
        </Wrapper>
      </ThemeProvider>
    </div>
  );
};

export default Layout;

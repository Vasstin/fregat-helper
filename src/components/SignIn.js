// src/components/SignIn/SignIn.js

import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Alert,
  Paper,
} from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase"; // Импортируем auth из вашего файла
import { useNavigate } from "react-router-dom"; // 🔑 НОВЫЙ ИМПОРТ

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Сброс предыдущих ошибок
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/", { replace: true });

      // Вход успешен. Firebase сам сохранит сессию.
      // При успешном входе страница обычно перезагружается или происходит редирект.
    } catch (err) {
      // Обработка ошибок, например: 'auth/user-not-found', 'auth/wrong-password'
      console.error("Ошибка входа:", err.code, err.message);

      let userMessage = "Неизвестная ошибка. Попробуйте снова.";
      if (
        err.code === "auth/invalid-credential" ||
        err.code === "auth/user-not-found" ||
        err.code === "auth/wrong-password"
      ) {
        userMessage = "Неверный email или пароль. Проверьте данные.";
      } else if (err.code === "auth/invalid-email") {
        userMessage = "Некорректный формат email.";
      }

      setError(userMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Paper
      elevation={3}
      sx={{ padding: 4, maxWidth: 400, margin: "50px auto" }}
    >
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Login
      </Typography>
      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          color="#343a40"
          margin="normal"
          required
          fullWidth
          label="Email"
          name="email"
          autoComplete="email"
          autoFocus
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
        />
        <TextField
          color="#343a40"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={loading}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2, backgroundColor: "#343a40" }}
          disabled={loading}
        >
          {"Login"}
        </Button>
      </Box>
    </Paper>
  );
}

export default SignIn;

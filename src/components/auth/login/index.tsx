import React, {Fragment} from 'react';
import {Button, TextField, Typography} from "@mui/material";

const LoginPage = () => {
    return (
        <>
            <Typography variant="h2" fontFamily="Popins" textAlign="center">Авторизация</Typography>
            <Typography variant="body1" marginBottom={3} fontFamily="Popins" textAlign="center">Введите ваш логин и пароль</Typography>
            <TextField fullWidth={true} margin="normal" label="Email" variant="outlined" placeholder="Введите ваш email" />
            <TextField fullWidth={true}  margin="normal" label="Password" variant="outlined" placeholder="Введите ваш пароль" />
            <Button variant="contained" sx={{fontFamily:"Popins", marginTop: 2, marginBottom: 2, width: "60%" }}>Войти</Button>
            <Typography variant="body1" sx={{fontFamily:"Popins" }}>У вас нет аккаунта? <span className="incitingText">Регистрация</span></Typography>
        </>
    );
};

export default LoginPage;
import React from 'react';
import {Button, TextField, Typography} from "@mui/material";
import {IPropsRegister} from "../../../common/types/auth";

const RegisterPage: React.FC<IPropsRegister> = (props: IPropsRegister) => {
    const {setEmail, setUserName, setFirstName, setPassword, setRepeatPassword, navigate} = props
    return (
        <>
            <Typography variant="h2" fontFamily="Poppins" textAlign="center">Регистрация</Typography>
            <Typography variant="body1" marginBottom={3} fontFamily="Poppins" textAlign="center">Введите данные для
                регистрации</Typography>
            <TextField
                fullWidth={true}
                margin="normal"
                label="Name"
                variant="outlined"
                placeholder="Введите ваше имя"
                onChange={(e) => {
                    setFirstName(e.target.value)
                }}
            />
            <TextField
                fullWidth={true}
                margin="normal"
                label="Username"
                variant="outlined"
                placeholder="Введите ваш Username"
                onChange={(e) => {
                    setUserName(e.target.value)
                }}
            />
            <TextField
                fullWidth={true}
                margin="normal"
                label="Email"
                variant="outlined"
                placeholder="Введите ваш email"
                onChange={(e) => {
                    setEmail(e.target.value)
                }}
            />
            <TextField
                type="password"
                fullWidth={true}
                margin="normal"
                label="Password"
                variant="outlined"
                placeholder="Введите ваш пароль"
                onChange={(e) => {
                    setPassword(e.target.value)
                }}
            />
            <TextField
                type="password"
                fullWidth={true}
                margin="normal"
                label="Password"
                variant="outlined"
                placeholder="Повторите ваш пароль"
                onChange={(e) => {
                    setRepeatPassword(e.target.value)
                }}
            />
            <Button
                variant="contained"
                sx={{fontFamily: "Poppins", marginTop: 2, marginBottom: 2, width: "60%"}}
                type="submit"
            >
                Регистрация
            </Button>
            <Typography variant="body1" sx={{fontFamily: "Poppins"}}>
                У вас есть аккаунт?
                <span
                    className="incitingText"
                    onClick={() => navigate('/login')}
                >
                    Авторизация
                </span>
            </Typography>
        </>
    );
};

export default RegisterPage;
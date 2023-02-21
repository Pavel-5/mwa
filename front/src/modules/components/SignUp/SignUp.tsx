import { AccountCircle, Check } from "@mui/icons-material";
import { Box, Button, InputAdornment, TextField } from "@mui/material";
import { useState, ChangeEvent } from "react";
import { api } from "../../api";
import { IReqUser } from "../../../interfaces";

export const SignUp = () => {
  const [form, setForm] = useState<IReqUser>({
    username: "",
    password: "",
  });
  const [access, setAccess] = useState<string>("");

  let handlerForm = (e: ChangeEvent<HTMLInputElement>) => {
    setForm((formProps) => ({
      ...formProps,
      [e.target.name]: e.target.value,
    }));
  };

  let handlerSignUp = async () => {
    const resp = await api.registerAccount(form);

    if (resp.statusCode === 200) {
      setAccess("Успешно");
    } else {
      setAccess("Произошла ошибка");
    }
  };

  return (
    <>
      <Box className="auth-header" component="h1">
        Регистрация
      </Box>

      <Box className="reg-wrapper">
        <Box
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
        >
          <TextField
            id="outlined-basic"
            label="Обязательно"
            variant="outlined"
            name="username"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
            type="text"
            onChange={handlerForm}
            required
          />
          {/* <TextField
              id="outlined-email-input"
              label="E-mail"
              type="email"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email />
                  </InputAdornment>
                ),
              }}
            /> */}
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            name="password"
            autoComplete="current-password"
            onChange={handlerForm}
          />
          <Button
            sx={{ m: 1 }}
            variant="outlined"
            type="submit"
            onClick={handlerSignUp}
          >
            <Check /> Регистрироваться
          </Button>
          <h1>{access}</h1>
        </Box>
      </Box>
    </>
  );
};

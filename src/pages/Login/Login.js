import { useFormik } from "formik";
import * as Yup from "yup";
import { initialValues, validationSchema } from "./schemas";
import { Container, Grid, TextField, Button, Box } from "@material-ui/core";
import { useState } from "react";
import { useAuth } from "../../contexts/Auth";
import { useNavigate } from "react-router-dom";
import "./login.styles.css";
import logo from "../../image/logo.png";

const Login = () => {
  const navigate = useNavigate();
  const [wrongPassword, setWrongPassword] = useState(false);
  const { login } = useAuth();

  const handleLogin = ({ username, password }) => {
    console.log(username, password);
    const jwt = login({ username, password }); // jwt sea null o sea distinto de null
    if (!jwt) return setWrongPassword(true);
    setWrongPassword(false);
    navigate("/inicio");
  };

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object(validationSchema),
    onSubmit: ({ username, password }) => {
      handleLogin({ username, password });
    },
  });

  return (
    <Container className="container_login">
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={10} md={5}>
          <form onSubmit={formik.handleSubmit}>
            <img src={logo} className="logo2" alt="logo" width="70" />
            <h1 className="titulo">EL PLANETA MARTE</h1>
            <Box mt={4}>
              <TextField
                type="text"
                name="username"
                label="Usuario"
                onChange={formik.handleChange}
                error={formik.errors.username}
                fullWidth
              />
              {formik?.errors?.username && (
                <span>{formik.errors.username}</span>
              )}
            </Box>
            <Box mt={1}>
              <TextField
                type="password"
                name="password"
                label="Password"
                onChange={formik.handleChange}
                error={formik.errors.password}
                fullWidth
              />
              {formik?.errors?.password && (
                <span>{formik.errors.password}</span>
              )}
            </Box>
            <Box mt={3}>
              <Button
                fullWidth
                type="submit"
                size="small"
                variant="contained"
                color="primary"
              >
                Login
              </Button>
            </Box>
          </form>
          {wrongPassword && <span>Usuario o contraseña incorrectos</span>}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;

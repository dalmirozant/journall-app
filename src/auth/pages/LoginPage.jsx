import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { useDispatch, useSelector } from "react-redux";
import { checkingAuthentication, startGoogleSignIn } from "../../store/auth";
import { useMemo } from "react";

export const LoginPage = () => {
  const { status } = useSelector((state) => state.auth);

  const isAuthenticated = useMemo(() => status === "checking");

  const dispatch = useDispatch();

  const { email, password, onInputChange } = useForm({
    email: "dalmirozant@gmail.com",
    password: "123456",
  });

  const onSubmit = (event) => {
    event.preventDefault();
    console.log({ email, password });
    dispatch(checkingAuthentication({ email, password }));
  };

  const onGoogleSignIn = () => {
    console.log("On GOOGLE Sign In!");
    dispatch(startGoogleSignIn());
  };

  return (
    <AuthLayout title="Login">
      <form onSubmit={onSubmit}>
        <Grid container direction="row">
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@gmail.com"
              name="email"
              value={email}
              onChange={onInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="contraseña"
              name="password"
              value="password"
              onChange={onInputChange}
              fullWidth
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} md={6}>
              <Button
                disabled={isAuthenticated}
                type="submit"
                variant="contained"
                fullWidth
              >
                Login
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Button
                disabled={isAuthenticated}
                variant="contained"
                fullWidth
                onClick={() => onGoogleSignIn()}
              >
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="flex-end">
            <Link component={RouterLink} to="/auth/register/">
              Registrarme
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};

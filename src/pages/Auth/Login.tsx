import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import type { LoginCredentials } from "../../redux/types/types";
import { useLoginMutation } from "../../redux/api/userApiSlice";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "../../redux/features/authSlice";
import { showSnackbar } from "../../redux/features/notificationSlice";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import type { RootState } from "../../redux/store";
import { toggleTextfieldVisibility } from "../../redux/features/textfieldvisibilitySlice";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Loader from "../../components/Loader";

// import { Link } from "react-router-dom";

const Login = () => {
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  const showText = useSelector(
    (state: RootState) => state.textfieldVisibility.showText
  );
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginCredentials>();

  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get("redirect") || "/";

  const token = useSelector((state: RootState) => state.auth.token);

  useEffect(() => {
    if (token) {
      navigate(redirect);
    }
  }, [navigate, redirect, token]);

  const onSubmit = async (data: LoginCredentials) => {
    try {
      const result = await login(data).unwrap();
      dispatch(setCredentials({ token: result.token, number: data.number }));
      navigate(redirect);
      dispatch(
        showSnackbar({
          message: "Login successful! Welcome back.",
          severity: "success",
        })
      );
    } catch (error: unknown) {
      let message = "Login failed.";

      if (error && typeof error === "object" && "data" in error) {
        const err = error as { data?: { message?: string } };
        message = err.data?.message || message;
      } else if (error instanceof Error) {
        message = error.message;
      }

      dispatch(
        showSnackbar({
          message,
          severity: "error",
        })
      );
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "secondary.main",
      }}>
      <Paper elevation={3} sx={{ p: 4, maxWidth: "400px", borderRadius: 2 }}>
        <Typography
          variant="h4"
          align="center"
          color="primary"
          sx={{ mb: 1, fontWeight: "bold" }}>
          Login
        </Typography>
        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="number"
            control={control}
            defaultValue=""
            rules={{ required: "Phone number is required" }}
            render={({ field }) => (
              <TextField
                fullWidth
                label="Phone Number"
                error={!!errors.number}
                helperText={errors.number?.message}
                {...field}
                sx={{ my: 1 }}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            defaultValue=""
            rules={{
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password should of minimum 6 characters",
              },
            }}
            render={({ field }) => (
              <TextField
                fullWidth
                label="Password"
                error={!!errors.password}
                helperText={errors.password?.message}
                type={showText ? "text" : "password"}
                sx={{ my: 1 }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => dispatch(toggleTextfieldVisibility())}>
                        {showText ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                {...field}
              />
            )}
          />
          <Button
            type="submit"
            variant="contained"
            disabled={isLoading}
            fullWidth
            sx={{ my: 2, py: 1.5, borderRadius: 2 }}>
            {isLoading ? "Logging In...." : "LogIn"}
          </Button>
          {isLoading && <Loader />}
        </Box>
        <Typography align="center">
          Don't have an Account?{" "}
          <Link to="/register" style={{ textDecoration: "none" }}>
            Register
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Login;

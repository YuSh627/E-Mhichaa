import { useDispatch, useSelector } from "react-redux";
import { useRegisterMutation } from "../../redux/api/userApiSlice";
import type { RootState } from "../../redux/store";
import { Controller, useForm } from "react-hook-form";
import type { RegisterCredentials } from "../../redux/types/types";
import {
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { toggleTextfieldVisibility } from "../../redux/features/textfieldvisibilitySlice";
import { showSnackbar } from "../../redux/features/notificationSlice";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { setCredentials } from "../../redux/features/authSlice";
import Loader from "../../components/Loader";

const Register = () => {
  const dispatch = useDispatch();

  const [register, { isLoading }] = useRegisterMutation();

  const showText = useSelector(
    (state: RootState) => state.textfieldVisibility.showText
  );

  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterCredentials>({
    defaultValues: {
      username: "",
      firstname: "",
      lastname: "",
      number: "",
      password: "",
      mpin: "",
      role: "USER",
    },
  });
  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get("redirect") || "/";

  const token = useSelector((state: RootState) => state.auth.token);

  useEffect(() => {
    if (token) {
      navigate(redirect);
    }
  }, [navigate, redirect, token]);

  const onSubmit = async (data: RegisterCredentials) => {
    try {
      const result = await register(data).unwrap();
      dispatch(setCredentials({ token: result.token, number: data.number }));
      navigate(redirect);
      dispatch(
        showSnackbar({
          message: "Registration successful! Please login.",
          severity: "success",
        })
      );
      navigate(redirect);
    } catch (error: unknown) {
      let message = "Registration failed.";

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
    <div>
      <Box
        sx={{
          display: "flex",
          height: "100vh",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "secondary.main",
        }}>
        <Paper elevation={3} sx={{ p: 4, maxWidth: "800px", borderRadius: 2 }}>
          <Typography
            variant="h4"
            align="center"
            color="primary"
            sx={{ mb: 1, fontWeight: "bold" }}>
            Register
          </Typography>
          <Box component="form" onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2} sx={{ my: 1 }}>
              <Grid size={{ xs: 12, md: 12 }}>
                <Controller
                  name="username"
                  control={control}
                  rules={{ required: "User Name is required" }}
                  render={({ field }) => (
                    <TextField
                      fullWidth
                      label="User Name"
                      error={!!errors.username}
                      helperText={errors.username?.message}
                      {...field}
                    />
                  )}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Controller
                  name="firstname"
                  control={control}
                  rules={{ required: "First Name is required" }}
                  render={({ field }) => (
                    <TextField
                      fullWidth
                      label="First Name"
                      error={!!errors.firstname}
                      helperText={errors.firstname?.message}
                      {...field}
                    />
                  )}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                {" "}
                <Controller
                  name="lastname"
                  control={control}
                  rules={{ required: "Last Name is required" }}
                  render={({ field }) => (
                    <TextField
                      fullWidth
                      label="Last Name"
                      error={!!errors.lastname}
                      helperText={errors.lastname?.message}
                      {...field}
                    />
                  )}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Controller
                  name="number"
                  control={control}
                  rules={{ required: "Phone number is required" }}
                  render={({ field }) => (
                    <TextField
                      fullWidth
                      label="Phone Number"
                      error={!!errors.number}
                      helperText={errors.number?.message}
                      {...field}
                    />
                  )}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Controller
                  name="password"
                  control={control}
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
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={() =>
                                dispatch(toggleTextfieldVisibility())
                              }>
                              {showText ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      {...field}
                    />
                  )}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Controller
                  name="mpin"
                  control={control}
                  rules={{ required: "MPin is required" }}
                  render={({ field }) => (
                    <TextField
                      fullWidth
                      label="MPin"
                      error={!!errors.mpin}
                      helperText={errors.mpin?.message}
                      {...field}
                    />
                  )}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                {" "}
                <Controller
                  name="role"
                  control={control}
                  rules={{ required: "Role is required" }}
                  render={({ field }) => (
                    <TextField
                      select
                      fullWidth
                      label="Role"
                      error={!!errors.role}
                      helperText={errors.role?.message}
                      {...field}>
                      <MenuItem value="USER">User</MenuItem>
                      <MenuItem value="ADMIN">Admin</MenuItem>
                    </TextField>
                  )}
                />
              </Grid>
            </Grid>

            <Button
              type="submit"
              disabled={isLoading}
              variant="contained"
              fullWidth
              sx={{ my: 2, py: 1.5, borderRadius: 2 }}>
              {isLoading ? "Registering..." : "Register"}
            </Button>
            {isLoading && <Loader />}
          </Box>
          <Typography align="center">
            Already have an Account?{" "}
            <Link to="/login" style={{ textDecoration: "none" }}>
              Login
            </Link>
          </Typography>
        </Paper>
      </Box>
    </div>
  );
};

export default Register;

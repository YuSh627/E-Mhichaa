import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import Emlogo from "../assets/images/Em-logo.png";

const Main = () => {
  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <AppBar sx={{ position: "relative", bgcolor: "white", p: 2 }}>
        <Toolbar>
          <Box sx={{ display: "flex", flexGrow: 1 }}>
            <Box component="img" src={Emlogo} sx={{ width: "6rem" }}></Box>
          </Box>

          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              component={Link}
              to="/login"
              variant="outlined"
              sx={{
                color: "primary.main",
                bgcolor: "white",
                py: 1.5,
                px: 3,
                borderWidth: 3,
                borderColor: "primary.main",
                fontWeight: 600,
              }}
            >
              Login
            </Button>
            <Button
              component={Link}
              to="/register"
              variant="outlined"
              sx={{
                color: "white",
                bgcolor: "primary.main",
                py: 1.5,
                px: 3,
                fontWeight: 600,
              }}
            >
              Register
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Container
        sx={{
          flexGrow: 1,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          <Typography variant="h1" sx={{ color: "white", fontWeight: "bold" }}>
            Sajilo Bhuktani,{" "}
            <Box component="span" sx={{ display: "block" }}>
              Sajilo Jeevan
            </Box>
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              component={Link}
              to="/login"
              variant="outlined"
              sx={{
                color: "white",
                bgcolor: "primary.main",
                py: 1.5,
                px: 3,
                borderWidth: 3,
                borderColor: "white",
                fontWeight: 600,
              }}
            >
              Get started
            </Button>
            <Button
              variant="outlined"
              sx={{
                color: "primary.main",
                bgcolor: "white",
                py: 1.5,
                px: 3,
                fontWeight: 600,
              }}
            >
              About us
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Main;

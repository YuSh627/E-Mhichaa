import {
  AppBar,
  Avatar,
  Box,
  Button,
  Toolbar,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/features/authSlice";
import type { UserCredentials } from "../redux/types/types";
import { getInitials } from "../utils/exports/Function";

interface HeaderProps {
  userData?: UserCredentials;
}

const Header = ({ userData }: HeaderProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      dispatch(logout());
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <AppBar sx={{ py: 2, position: "sticky" }}>
      <Toolbar>
        <Box
          sx={{ display: "flex", flexGrow: 1, alignItems: "center", gap: 2 }}>
          <Avatar
            sx={{
              width: 48,
              height: 48,
              p: 0.5,
              bgcolor: "white",
              fontSize: "20px",
              fontWeight: "bolder",
              color: "primary.main",
              "&.MuiAvatar-root": {
                border: "none",
              },
            }}>
            {getInitials(userData?.userName || "Anynomus")}
          </Avatar>
          <Box>
            <Typography variant="h6" fontWeight="bold">
              {userData?.userName || "Anonymous"}
            </Typography>
            <Typography>{userData?.userPhoneNumber || "Anonymous"}</Typography>
          </Box>
        </Box>
        <Button
          onClick={logoutHandler}
          variant="contained"
          sx={{
            py: 1,
            px: 2,
            bgcolor: "white",
            color: "primary.main",
            fontWeight: "bolder",
          }}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

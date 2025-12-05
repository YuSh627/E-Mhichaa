import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { hideSnackbar } from "../redux/features/notificationSlice";
import type { RootState } from "../redux/store";

const NotificationAlert: React.FC = () => {
  const dispatch = useDispatch();
  const { open, message, severity } = useSelector(
    (state: RootState) => state.snackbar
  );

  return (
    <Snackbar
      open={open}
      autoHideDuration={2000}
      onClose={() => dispatch(hideSnackbar())}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}>
      <Alert
        variant="filled"
        onClose={() => dispatch(hideSnackbar())}
        severity={severity}
        sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default NotificationAlert;

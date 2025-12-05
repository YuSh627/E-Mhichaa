import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { toggleTextfieldVisibility } from "../redux/features/textfieldvisibilitySlice";
import type { UserCredentials } from "../redux/types/types";
import MainBox from "./MainBox";

interface BalanceTabProps {
  userData?: UserCredentials;
}

const BalanceTab = ({ userData }: BalanceTabProps) => {
  const dispatch = useDispatch();
  const showText = useSelector(
    (state: RootState) => state.textfieldVisibility.showText
  );
  return (
    <MainBox>
      <Typography
        sx={{
          display: "inline",
        }}>
        {showText ? `NPR ${userData?.walletBalance}` : "NPR XXXX.XX"}
      </Typography>
      <IconButton
        sx={{ color: "white" }}
        onClick={() => dispatch(toggleTextfieldVisibility())}>
        {showText ? <Visibility /> : <VisibilityOff />}
      </IconButton>
    </MainBox>
  );
};

export default BalanceTab;

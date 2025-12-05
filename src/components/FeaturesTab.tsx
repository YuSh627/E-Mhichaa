import { Box, Grid, IconButton, Typography } from "@mui/material";
import AddCardIcon from "@mui/icons-material/AddCard";
import HistoryIcon from "@mui/icons-material/History";
import SendAndArchiveIcon from "@mui/icons-material/SendAndArchive";
import MainBox from "./MainBox";
import { useNavigate } from "react-router-dom";

const FeaturesTab = () => {
  const navigate = useNavigate();
  return (
    <MainBox justifyContent="center">
      <Grid sx={{ width: "40rem" }} container spacing={4}>
        <Grid size={3}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}>
            <IconButton size="large">
              <AddCardIcon fontSize="large" sx={{ color: "secondary.main" }} />
            </IconButton>
            <Typography>Add Money</Typography>
          </Box>
        </Grid>
        <Grid size={3}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}>
            <IconButton size="large">
              <HistoryIcon
                fontSize="large"
                onClick={() => navigate("/transactionHistory")}
                sx={{ color: "secondary.main" }}
              />
            </IconButton>
            <Typography>Transaction</Typography>
          </Box>
        </Grid>
        <Grid size={3}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}>
            <IconButton size="large" onClick={() => navigate("/sendMoney")}>
              <SendAndArchiveIcon
                fontSize="large"
                sx={{ color: "secondary.main" }}
              />
            </IconButton>
            <Typography>Send Money</Typography>
          </Box>
        </Grid>
        <Grid size={3}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}>
            <IconButton size="large" onClick={() => navigate("/electricBill")}>
              <SendAndArchiveIcon
                fontSize="large"
                sx={{ color: "secondary.main" }}
              />
            </IconButton>
            <Typography>Electric Bill</Typography>
          </Box>
        </Grid>
      </Grid>
    </MainBox>
  );
};

export default FeaturesTab;

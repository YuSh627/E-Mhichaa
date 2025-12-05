import Header from "../components/Header";
import { useUserInfoQuery } from "../redux/api/featuresApiSlice";
import { Box } from "@mui/material";
import Loader from "../components/Loader";
import FeaturesTab from "../components/FeaturesTab";
import BalanceTab from "../components/BalanceTab";
import { setCredentials } from "../redux/features/authSlice";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store";

const Home = () => {
  const dispatch = useDispatch();
  const number = useSelector((state: RootState) => state.auth.number);
  const { data, isLoading } = useUserInfoQuery({ number: number ?? "" });
  dispatch(setCredentials({ userId: data?.userId }));

  return (
    <Box
      sx={{
        bgcolor: "secondary.main",
        minHeight: "100vh",
      }}>
      {isLoading ? (
        <Loader />
      ) : (
        <Box>
          <Header userData={data} />
          <Box
            sx={{
              my: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
            }}>
            <BalanceTab userData={data} />
            <FeaturesTab />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Home;

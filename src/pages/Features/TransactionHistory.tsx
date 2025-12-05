import {
  useTransactionQuery,
  useUserInfoQuery,
} from "../../redux/api/featuresApiSlice";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";

const TransactionHistory = () => {
  const number = useSelector((state: RootState) => state.auth.number);
  const userId = useSelector((state: RootState) => state.auth.userId);
  console.log("userid", userId);
  const { data: userData } = useUserInfoQuery({ number: number ?? "" });
  const { data: transaction } = useTransactionQuery({ id: userId ?? "" });

  console.log("transaction", transaction);
  console.log("userData", userData);
  return <div></div>;
};

export default TransactionHistory;

import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";

const SendMoney = () => {
  const token = useSelector((state: RootState) => state.auth.token);
  const number = useSelector((state: RootState) => state.auth.number);
  
  return <div>SM</div>;
};

export default SendMoney;

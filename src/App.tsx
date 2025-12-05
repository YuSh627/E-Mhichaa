import { Outlet } from "react-router-dom";
import NotificationAlert from "./components/NotificationAlert";

const App = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
      <NotificationAlert />
    </>
  );
};

export default App;

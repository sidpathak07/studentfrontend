import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { UserProvider } from "./Context/UserContext";
import Routess from "./Routes";

function App() {
  return (
    <UserProvider>
      <Routess />
    </UserProvider>
  );
}

export default App;

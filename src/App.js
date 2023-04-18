import Header from "./components/header/index.jsx";
import Main from "./components/main/index.jsx";
import { useToken } from "./hooks/useToken.js";

function App() {
  const [token, deleteToken] = useToken("");

  return (
    <>
      <Header token={token} deleteToken={deleteToken} />
      <Main />
    </>
  );
}

export default App;

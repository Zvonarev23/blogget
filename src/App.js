import Header from "./components/header/index.jsx";
import Main from "./components/main/index.jsx";
import { useToken } from "./hooks/useToken.js";

function App() {
  const [token] = useToken("");

  return (
    <>
      <Header token={token} />
      <Main />
    </>
  );
}

export default App;

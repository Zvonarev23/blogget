import Header from "./components/header/index.jsx";
import Main from "./components/main/index.jsx";
import { TokenContext } from "./context/token-context.js";
import { useToken } from "./hooks/use-token.js";

function App() {
  const [token, deleteToken] = useToken("");

  return (
    <TokenContext.Provider value={{ token, deleteToken }}>
      <Header />
      <Main />
    </TokenContext.Provider>
  );
}

export default App;

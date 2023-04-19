import Header from "./components/header/index.jsx";
import Main from "./components/main/index.jsx";
import { AuthContextProvider } from "./context/auth-context.jsx";
import { PostContextProvider } from "./context/post-context.jsx";
import { TokenContextProvider } from "./context/token-context.jsx";

function App() {
  return (
    <TokenContextProvider>
      <AuthContextProvider>
        <PostContextProvider>
          <Header />
          <Main />
        </PostContextProvider>
      </AuthContextProvider>
    </TokenContextProvider>
  );
}

export default App;

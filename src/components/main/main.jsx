// import style from "./main.module.css";
import Layout from "../layout/index.jsx";
import Tabs from "./tabs/index.jsx";
import List from "./list/index.jsx";

export const Main = () => {
  return (
    <Layout>
      <Tabs />
      <List />
    </Layout>
  );
};

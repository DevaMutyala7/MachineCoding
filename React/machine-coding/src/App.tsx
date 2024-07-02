import { Routes as RoutesList } from "Routes";
import Layout from "./components/Layout";
import ThemeContextprovider from "./contexts/ThemeContext";
import { GlobalStyles } from "./styles/globalStyles";
import { Route, Routes } from "react-router";

const buildRoutes = () => {
  return RoutesList.map((route) => {
    return (
      <Route key={route.id} path={route.path} element={route.component}></Route>
    );
  });
};

export default function App() {
  return (
    <ThemeContextprovider>
      <GlobalStyles />
      <Layout>
        <Routes>{buildRoutes()}</Routes>
      </Layout>
    </ThemeContextprovider>
  );
}

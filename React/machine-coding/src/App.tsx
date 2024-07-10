import { Routes as RoutesList } from "Routes";
import Layout from "./components/Layout";
import { GlobalStyles, theme } from "./styles/globalStyles";
import { Route, Routes } from "react-router";
import { ThemeProvider } from "styled-components";

const buildRoutes = () => {
  return RoutesList.map((route) => {
    return (
      <Route key={route.id} path={route.path} element={route.component}></Route>
    );
  });
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <Routes>{buildRoutes()}</Routes>
      </Layout>
    </ThemeProvider>
  );
}

import Layout from "./components/Layout";
import ThemeContextprovider from "./contexts/ThemeContext";
import { GlobalStyles } from "./styles/globalStyles";

export default function App() {
  return (
    <ThemeContextprovider>
      <GlobalStyles />
      <Layout>
        <h2>This is Main content</h2>
      </Layout>
    </ThemeContextprovider>
  );
}

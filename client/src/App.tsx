import "./App.css";
import MarketingPage from "./pages/MarketingPage";
import { ThemeProvider } from "./components/theme-provider";
function App() {
  return (
    <>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme"  >
        <MarketingPage />
      </ThemeProvider>
    </>
  );
}

export default App;

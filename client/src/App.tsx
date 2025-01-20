import "./App.css";
import MarketingPage from "./pages/MarketingPage";
import { Routes, Route} from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import ProtectedRoute from "./components/ProtectedRoute";
import DocumentsPage from './pages/DocumentsPage';



function App() {
  return (
    <>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme"  >
        <Routes>
        <Route path="/" element={<MarketingPage />} />
        <Route path="/documents" element={<ProtectedRoute>
          <DocumentsPage />
        </ProtectedRoute>} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;

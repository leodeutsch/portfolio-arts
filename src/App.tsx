import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Header } from "./components/common/Header";
import { LanguageProvider } from "./contexts/LanguageContext";
import { About } from "./pages/About";
import { CollectionDetail } from "./pages/CollectionDetail";
import { Collections } from "./pages/Collections";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { GlobalStyles } from "./styles/global";
import { theme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LanguageProvider>
        <Router>
          <GlobalStyles />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/collection/:id" element={<CollectionDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;

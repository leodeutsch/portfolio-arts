import React, { Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Header } from "./components/common/Header";
import { ScrollToTop } from "./components/scrollToTop";
import { LanguageProvider } from "./contexts/LanguageContext";
import { GlobalStyles } from "./styles/global";
import { theme } from "./styles/theme";

const Home = React.lazy(() =>
  import("./pages/Home").then((module) => ({ default: module.Home }))
);
const Series = React.lazy(() =>
  import("./pages/Series").then((module) => ({ default: module.Series }))
);
const SerieDetail = React.lazy(() =>
  import("./pages/SerieDetail").then((module) => ({ default: module.SerieDetail }))
);
const About = React.lazy(() =>
  import("./pages/About").then((module) => ({ default: module.About }))
);
const Contact = React.lazy(() =>
  import("./pages/Contact").then((module) => ({ default: module.Contact }))
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LanguageProvider>
        <Router>
          <GlobalStyles />
          <Header />
          <ScrollToTop />
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/series" element={<Series />} />
              <Route path="/series/:id" element={<SerieDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;

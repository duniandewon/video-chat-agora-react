import { Routes, Route } from "react-router-dom";

import CssBaseline from "@mui/material/CssBaseline";

import HomePage from "./pages/HomePage";
import InconfPage from "./pages/InconfPage";

import PagesLayout from "./components/PagesLayout";

import { UiProvider } from "./context";

function App() {
  return (
    <UiProvider>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<PagesLayout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="/inconf" element={<InconfPage />} />
      </Routes>
    </UiProvider>
  );
}

export default App;

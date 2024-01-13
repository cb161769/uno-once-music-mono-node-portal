import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/public/homepage/HomePage";
import Header from "./components/Header";
import MobileMenu from "./components/MobileMenu";
function App() {
  return (
    <BrowserRouter>
      <MobileMenu />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

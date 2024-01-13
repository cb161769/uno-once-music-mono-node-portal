import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/public/homepage/HomePage";
import Header from "./components/Header";
import MobileMenu from "./components/MobileMenu";
import LoginPage from "./pages/public/login/LoginPage";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className=" w-screen overflow-x-hidden">
        <MobileMenu />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/log-in" element={<LoginPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;

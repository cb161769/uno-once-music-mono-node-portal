import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/public/home-page/HomePage";
import Header from "./components/Header";
import MobileMenu from "./components/MobileMenu";
import LoginPage from "./pages/public/login-page/LoginPage";
import SignupPage from "./pages/public/signup-page/SignupPage";
import ForgotPasswordPage from "./pages/public/forgot-password/ForgotPassword";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className=" w-screen overflow-x-hidden">
        <MobileMenu />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/log-in" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignupPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;

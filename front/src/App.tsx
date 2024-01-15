import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/public/home-page/HomePage";
import Header from "./components/Header";
import MobileMenu from "./components/MobileMenu";
import LoginPage from "./pages/public/login-page/LoginPage";
import SignupPage from "./pages/public/signup-page/SignupPage";
import ForgotPasswordPage from "./pages/public/forgot-password/ForgotPassword";
import { useState } from "react";
import DashboardPage from "./pages/admin/dashboard/DashboardPage";
import Sidebar from "./components/Sidebar";
import { cn } from "./lib/utils";
import StudiosPage from "./pages/admin/studios-page/StudiosPage";
import MembershipsPage from "./pages/admin/memberships-page/MembershipsPage";
import WorkShopsPage from "./pages/admin/workshops-page.tsx/WorkShopsPage";
import EventsPage from "./pages/admin/events-page/EventsPage";
import ReservationsPage from "./pages/admin/reservations-page/ReservationsPage";
import UsersPage from "./pages/admin/users-page/UsersPage";
import AddStudioPage from "./pages/admin/studios-page/AddStudioPage";
function App() {
  const [isLogin] = useState(true);
  return (
    <BrowserRouter>
      {!isLogin && <Header />}
      <main className={cn("w-screen overflow-x-hidden", isLogin && "flex")}>
        {isLogin ? <Sidebar /> : <MobileMenu />}
        <Routes>
          {isLogin ? (
            <>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/studios" element={<StudiosPage />} />
              <Route path="/add-studio" element={<AddStudioPage />} />
              <Route path="/memberships" element={<MembershipsPage />} />
              <Route path="/workshops" element={<WorkShopsPage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/reservations" element={<ReservationsPage />} />
              <Route path="/users" element={<UsersPage />} />
            </>
          ) : (
            <>
              <Route path="/" element={<HomePage />} />
              <Route path="/log-in" element={<LoginPage />} />
              <Route path="/sign-up" element={<SignupPage />} />
              <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            </>
          )}
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;

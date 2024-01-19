import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/public/home-page/HomePage";
import Header from "./components/Header";
import MobileMenu from "./components/MobileMenu";
import LoginPage from "./pages/public/login-page/LoginPage";
import SignupPage from "./pages/public/signup-page/SignupPage";
import ForgotPasswordPage from "./pages/public/forgot-password/ForgotPassword";
import { useContext } from "react";
import DashboardPage from "./pages/admin/dashboard/DashboardPage";
import Sidebar from "./components/Sidebar";
import { cn } from "./lib/utils";
import MembershipsPage from "./pages/admin/memberships-page/MembershipsPage";
import WorkShopsPage from "./pages/admin/workshops-page.tsx/WorkShopsPage";
import EventsPage from "./pages/admin/events-page/EventsPage";
import ReservationsPage from "./pages/admin/reservations-page/ReservationsPage";
import UsersPage from "./pages/admin/users-page/UsersPage";
import { EditorContext } from "./components/EditorContext";
import PowerhousesPage from "./pages/admin/powerhouses-page/Powerhouses";
import InfoPage from "./pages/admin/info-page/InfoPage";
import AddPowerhousesPage from "./pages/admin/powerhouses-page/AddPowerhousesPage";
import InfoPageSection from "./pages/admin/info-page/InfoPageSection";
import InfoPageSectionEdit from "./pages/admin/info-page/InfoPageSectionEdit";
function App() {
  const { isLogin } = useContext(EditorContext);

  return (
    <BrowserRouter>
      {!isLogin && <Header />}
      <main className={cn("w-screen overflow-x-hidden", isLogin && "flex")}>
        {isLogin ? <Sidebar /> : <MobileMenu />}
        <Routes>
          {isLogin ? (
            <>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/powerhouses" element={<PowerhousesPage />} />
              <Route path="/add-powerhouses" element={<AddPowerhousesPage />} />
              <Route path="/memberships" element={<MembershipsPage />} />
              <Route path="/workshops" element={<WorkShopsPage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/reservations" element={<ReservationsPage />} />
              <Route path="/users" element={<UsersPage />} />
              <Route path="/info-page" element={<InfoPage />} />
              <Route path="/info-page-section" element={<InfoPageSection />} />
              <Route
                path="/info-page-section-edit"
                element={<InfoPageSectionEdit />}
              />
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

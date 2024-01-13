import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/public/homepage/HomePage";
import Header from "./components/Header";
import MobileMenu from "./components/MobileMenu";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className=" w-screen overflow-x-hidden">
        <MobileMenu />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;

import { Outlet } from "react-router-dom";
import { Header } from "../components/Header.jsx";
import { Footer } from "../components/Footer.jsx";
import { ScrollProgress } from "../components/ScrollProgress.jsx";
import { MoonCountdown } from "../components/MoonCountdown.jsx";
import { StickyBook } from "../components/StickyBook.jsx";

export function MainLayout() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <MoonCountdown />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <StickyBook />
    </div>
  );
}

export default MainLayout;
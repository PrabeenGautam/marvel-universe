import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";
import ScrollToTop from "../ScrollToTop";

function Layout() {
  return (
    <ScrollToTop>
      <main className="flex min-h-screen flex-col">
        <div className="flex-1">
          <Outlet />
        </div>
        <Footer />
      </main>
    </ScrollToTop>
  );
}

export default Layout;

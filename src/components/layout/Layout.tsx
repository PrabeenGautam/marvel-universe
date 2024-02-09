import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";
import ScrollToTop from "../ScrollToTop";
import Navbar from "../shared/Navbar";

/**
 * Component representing the layout structure of the application. It contains the Navbar, Footer, and the Outlet for rendering child routes.
 */
function Layout() {
  return (
    <ScrollToTop>
      <main className="flex min-h-screen flex-col">
        <Navbar />

        {/* Outlet for rendering child routes */}
        <div className="flex-1">
          <Outlet />
        </div>

        <Footer />
      </main>
    </ScrollToTop>
  );
}

export default Layout;

import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";

function Layout() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
}

export default Layout;

import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";

function Layout() {
  return (
    <main>
      <Outlet />
      <Footer />
    </main>
  );
}

export default Layout;

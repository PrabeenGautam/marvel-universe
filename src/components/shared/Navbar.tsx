import { Link } from "react-router-dom";
import Image from "./Image";

function Navbar() {
  return (
    <nav className="sticky top-0 z-30 bg-black">
      <div className="relative mx-auto w-full max-w-screen-xl px-4 py-5 text-white lg:py-8">
        <Link to="/">
          <Image src="/static/logo.jpg" className="h-10" alt="Marvel Logo" />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;

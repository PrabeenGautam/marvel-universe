import { Link } from "react-router-dom";
import Image from "./Image";

function Navbar() {
  return (
    <nav className="sticky top-0 mt-4 bg-black/50">
      <div className="mx-auto flex w-full max-w-screen-xl flex-wrap items-center justify-between gap-8 p-4 md:py-8">
        <Link to="/">
          <Image src="/static/logo.jpg" className="h-10" alt="Marvel Logo" />
        </Link>

        <ul className="flex items-center text-sm font-medium text-gray-500 dark:text-gray-400">
          <li>
            <Link to="/characters" className="me-4 hover:underline md:me-6">
              Explore Characters
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

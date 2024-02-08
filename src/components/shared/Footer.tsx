import { Link } from "react-router-dom";
import Image from "./Image";

function Footer() {
  const year = new Date().getFullYear();
  const baseURL = import.meta.env.VITE_APP_BASEURL;

  return (
    <footer className="mt-4 bg-black/50">
      <div className="mx-auto w-full max-w-screen-xl p-4 md:py-8">
        <div className="flex flex-wrap items-center justify-between gap-8">
          <Link to="/">
            <Image src="/static/logo.jpg" className="h-10" alt="Marvel Logo" />
          </Link>

          <ul className="flex items-center text-sm font-medium text-gray-500 dark:text-gray-400">
            <li>
              <Link
                to={`${baseURL}/geetsunam`}
                className="me-4 hover:underline md:me-6"
              >
                GeetSunam
              </Link>
            </li>
            <li>
              <Link
                to={`${baseURL}/class-management-system/`}
                className="me-4 hover:underline md:me-6"
              >
                Class Management System
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-500 dark:text-gray-400 sm:text-center">
          © {year}{" "}
          <a href={baseURL} className="hover:underline">
            Prabin Gautam
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;

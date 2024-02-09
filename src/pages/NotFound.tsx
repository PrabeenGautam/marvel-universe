import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <main className="grid place-items-center px-6 py-24 text-white sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-white">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            Page not found
          </h1>

          <p className="mt-6 text-base leading-7">
            Sorry, we couldn’t find the page you’re looking for.
          </p>

          <div className="flex-center mt-10">
            <Link
              to="/"
              className="block rounded-xl bg-primary px-3.5 py-2.5 text-sm font-semibold  hover:bg-red-600"
            >
              Go back home
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

export default NotFound;

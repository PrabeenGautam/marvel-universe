import { Link } from "react-router-dom";

function ServerError() {
  return (
    <>
      <main className="grid min-h-dvh place-items-center px-6 py-24 text-white sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-white">500</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            Server Error
          </h1>

          <p className="mt-6 text-base leading-7">
            Oops! Something went wrong! Please try again later.
          </p>

          <div className="flex-center mt-10">
            <Link
              to="/"
              className="rounded-md bg-black px-6 py-2.5 text-sm font-semibold"
            >
              Retry
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

export default ServerError;

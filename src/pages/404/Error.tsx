const Error = () => {
  return (
    <section className="relative z-10 bg-indigo-800 py-[120px] h-full">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="w-full max-w-md text-center px-4">
            <h2 className="mb-2 text-[50px] font-bold leading-none text-white sm:text-[80px] md:text-[100px]">
              404
            </h2>
            <h4 className="mb-3 text-[22px] font-semibold leading-tight text-white">
              Oops! That page can’t be found
            </h4>
            <p className="mb-8 text-lg text-white">
              The page you are looking for might have been removed.
            </p>
            <a
              href="/"
              className="inline-block rounded-lg border border-white px-8 py-3 text-center text-base font-semibold text-white transition hover:bg-white hover:text-blue-700"
            >
              Go To Home
            </a>
          </div>
        </div>
      </div>

      <div className="absolute left-0 top-0 -z-10 flex h-full w-full items-center justify-between space-x-5 md:space-x-8 lg:space-x-14">
        <div className="h-full w-1/3 bg-gradient-to-t from-white/10 to-transparent"></div>
        <div className="flex h-full w-1/3">
          <div className="h-full w-1/2 bg-gradient-to-b from-white/10 to-transparent"></div>
          <div className="h-full w-1/2 bg-gradient-to-t from-white/10 to-transparent"></div>
        </div>
        <div className="h-full w-1/3 bg-gradient-to-b from-white/10 to-transparent"></div>
      </div>
    </section>
  );
};

export default Error;

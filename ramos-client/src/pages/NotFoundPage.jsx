import Button from '../components/Button';

const NotFoundPage = () => {
  return (
    <div className="flex w-full flex-col gap-6">

      {/* MAIN 404 */}
      <section className="border-y-2 border-zinc-900 bg-blue-900 text-white px-4 py-10 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-yellow-300">
            Error
          </p>

          <h1 className="text-6xl font-bold leading-tight sm:text-7xl">
            DOG NOT FOUND :(
          </h1>

          <p className="mt-4 text-lg leading-7 text-blue-100">
            Page not found. The page you're looking for doesn't exist or has been moved.
          </p>

          <div className="mt-6 flex gap-3">
            <Button to="/"className="mt-4 !bg-yellow-400 !text-black hover:!bg-yellow-800"> 
              Back Home
            </Button>

              <Button to="/products"className="mt-4 !bg-blue-900 !text-white hover:!bg-blue-800"> 

              View Products
            </Button>
          </div>
        </div>
      </section>

      {/* QUICK LINKS */}
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="max-w-3xl">

          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Quick Links
          </p>

          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
            Explore the site
          </h2>
          
          <div className="mt-6 space-y-3">

            <div className="rounded-3xl border-2 border-zinc-900 bg-blue-900 p-4">
              <h3 className="font-semibold text-white">Home</h3>
              <p className="mt-1 text-sm text-white">Return to the homepage</p>
              <Button to="/" className="mt-3 !bg-blue-900 !text-white hover:!bg-blue-900">
                Go Home
              </Button>
            </div>
            
            <div className="rounded-3xl border-2 border-zinc-900 bg-yellow-400 p-4">
              <h3 className="font-semibold text-black">Products</h3>
              <p className="mt-1 text-sm text-black">Browse all featured store items</p>
              <Button to="/products" className="mt-3 !bg-yellow-400 !text-black hover:!bg-yellow-500">
                View Products
              </Button>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default NotFoundPage;
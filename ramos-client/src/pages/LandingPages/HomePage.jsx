import Button from "../../components/Button";
import banner from "../../assets/img/nu_bulldogex_banner.jpg";

// ✅ IMPORT IMAGES
import bag from "../../assets/img/bag.jpg";
import tumbler from "../../assets/img/tumbler.jpg";
import hoodie from "../../assets/img/hoodies.jpg";

const HomePage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      {/* HERO */}
      <section className="relative min-h-[28rem] overflow-hidden border-y-2 border-zinc-900 bg-zinc-900 px-4 py-10 sm:px-6 lg:px-8">
        <img
          src={banner}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-zinc-900/45" />

        <div className="relative z-10 flex min-h-[22rem] items-start justify-end text-right sm:min-h-[24rem]">
          <div className="max-w-xl">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-200">
              Campus Marketplace
            </p>
            <h1 className="text-3xl font-bold leading-tight text-zinc-50 sm:text-4xl">
              Welcome to BulldogEx Shop
            </h1>
            <p className="mt-4 text-sm leading-7 text-zinc-100 sm:text-base">
              Explore campus uniforms, student essentials, and school merch in
              one quick storefront.
            </p>
            <div className="mt-6 flex flex-wrap justify-end gap-3">
              <Button to="/products" className="!bg-blue-900 !text-white hover:!bg-blue-800">
                Shop Now
              </Button>
              <Button to="/about"className="!bg-yellow-400 !text-black hover: !bg-yellow-400" >
                About Store
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-blue-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Store Overview
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
            Quick shopping blocks
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border-2 border-yellow-400 bg-blue-900 p-5">
            <p className="text-2xl font-bold text-yellow-400">08</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white">
              Products
            </p>
          </div>
          <div className="rounded-3xl border-2 border-yellow-400 bg-blue-900   p-5">
            <p className="text-2xl font-bold text-yellow-400">06</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white">
              Categories
            </p>
          </div>
          <div className="rounded-3xl border-2 border-yellow-400 bg-blue-900 p-5">
            <p className="text-2xl font-bold text-yellow-400">24</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white">
              Orders
            </p>
          </div>
          <div className="rounded-3xl border-2 border-yellow-400 bg-blue-900 p-5">
            <p className="text-2xl font-bold text-yellow-400">03</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white">
              Pickup Slots
            </p>
          </div>
        </div>
      </section>

      {/* SIMPLE STORE CARDS */}
      <section className="border-y-2 border-zinc-900 bg-blue-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Shop Sections
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
            Simple store cards
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <article className="rounded-3xl border-2 border-blue-900 bg-white p-4">
            <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-zinc-200 overflow-hidden">
              <img
                src={bag}
                alt="Daily Essentials"
                className="w-full h-full object-cover hover:scale-105 transition"
              />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-zinc-900">
              Daily Essentials
            </h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Bags, tumblers, lanyards, and items used every school day.
            </p>
            <Button
              to="/products"
              variant="primary"
              className="mt-4 !bg-blue-900 !text-white hover:!bg-blue-800"
            >
              View Products
            </Button>
          </article>

          <article className="rounded-3xl border-2 border-blue-900 bg-white p-4">
            <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-zinc-200 overflow-hidden">
              <img
                src={tumbler}
                alt="Study Supplies"
                className="w-full h-full object-cover hover:scale-105 transition"
              />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-zinc-900">
              Study Supplies
            </h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Notes, desk tools, and study kits for class and review weeks.
            </p>
            <Button
              to="/products"
              variant="primary"
              className="mt-4 !bg-blue-900 !text-white hover:!bg-blue-800"
            >
              Shop Supplies
            </Button>
          </article>

          <article className="rounded-3xl border-2 border-blue-900 bg-white p-4">
            <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-zinc-200 overflow-hidden">
              <img
                src={hoodie}
                alt="Campus Apparel"
                className="w-full h-full object-cover hover:scale-105 transition"
              />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-zinc-900">
              Campus Apparel
            </h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Comfortable pieces for class days, commute days, and weekends.
            </p>
            <Button
              to="/products"
              variant="primary"
              className="mt-4 !bg-blue-900 !text-white hover:!bg-blue-800"
            >
              View Apparel
            </Button>
          </article>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

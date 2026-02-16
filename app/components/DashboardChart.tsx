import BlogBarChart from "./BlogBarChart";

const DashboardChart = async ({ user }: { user?: string }) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API}/posts${
      user ? `?user=${user}` : ""
    }`,
    { cache: "no-store" },
  );

  const blogs = await response.json();

  const totalBlogs = blogs.length;

  const countTechnology = blogs.filter(
    ({ category }: { category: string }) => category === "Technology",
  ).length;

  const countCooking = blogs.filter(
    ({ category }: { category: string }) => category === "Cooking",
  ).length;

  const countTravelling = blogs.filter(
    ({ category }: { category: string }) => category === "Travelling",
  ).length;

  const countCoding = blogs.filter(
    ({ category }: { category: string }) => category === "Coding",
  ).length;

  const countTrading = blogs.filter(
    ({ category }: { category: string }) => category === "Trading",
  ).length;

  return (
    <div className="max-w-5xl mx-auto mt-10 space-y-8">
      {/* KPI Card */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-lg">Total Blogs</h2>
        <p className="text-4xl font-bold mt-2">{totalBlogs}</p>
      </div>

      {/* Chart */}
      <BlogBarChart
        data={{
          technology: countTechnology,
          cooking: countCooking,
          travelling: countTravelling,
          coding: countCoding,
          trading: countTrading,
        }}
      />
    </div>
  );
};

export default DashboardChart;

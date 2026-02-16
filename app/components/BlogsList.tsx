
import BlogCard from "../components/BlogCard";

interface Blog {
  userId: number;
  id: string;
  title: string;
  body: string;
  imgUrl: string;
}

const BlogsList = async ({ user,limit,category }: { user?: string |null,limit?:number |null,category?:string|null },) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API}/posts${user ? `?user=${user}` : ""}${category ? `?category=${category}` : ""}`,
  );
  const blogs = await response.json();

  const renderlogs = limit ? blogs.slice(0,limit) : blogs

  if (renderlogs?.length === 0) {
    return (
      <div>
        <p>Please add at least one blog</p>
      </div>
    );
  }

  console.log({category})

  return (
    <div className="mb-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {renderlogs?.length > 0 &&
          renderlogs.toReversed().map((blog: Blog) => (
            <div key={blog.id}>
              <BlogCard
                title={blog.title}
                id={blog.id}
                imgUrl={blog.imgUrl || "https://placehold.net/600x400.png"}
                body={blog.body}
              />
            </div>
          ))}
      </div>
    </div>
  );
};
export default BlogsList;

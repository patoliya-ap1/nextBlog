import BlogCard from "./BlogCard";

interface Blog {
  userId: number;
  id: string;
  title: string;
  category: string;
   body: string;
  imgUrl: string;
}


export default async function RelatedPosts({
  currentBlogId,
  category,
}: {
  currentBlogId: string;
  category: string;
}) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API}/posts`,
    { cache: "no-store" }
  );

  const blogs: Blog[] = await res.json();

  const related = blogs
    .filter(
      (blog) =>
        blog.category === category && blog.id !== currentBlogId
    )
    .slice(0, 3);

  if (related.length === 0) return null;

  return (
    <div className="mt-10">
      <h3 className="text-xl font-semibold mb-4">
        Related Posts
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {related.map((blog) => (
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
}

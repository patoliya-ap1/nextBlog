import Image from "next/image";
import RelatedPosts from "./RelatedPosts";
interface Comment {
  id: string;
  name: string;
  commentText: string;
  createdAt: string;
}

const BlogDetails = async ({ blogID }: { blogID: string }) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API}/posts/${blogID}`,
  );
  const blog = await response.json();

  console.log(blog);

  return (
    <div className="mb-20">
      <div className="relative w-full h-80">
        <Image
          src={blog.imgUrl || "https://placehold.net/600x400.png"}
          alt="post thumbnail"
          fill
          loading="eager"
          className="object-cover rounded-md"
        />
        <div className="absolute p-4 bg-black w-full opacity-70 bottom-0">
          <h2 className="text-slate-100 opacity-100">{blog.title}</h2>
        </div>
      </div>
      <div className="mt-5 wrap-break-word">
        <pre className="text-balance">{blog.body}</pre>
      </div>
      <div>
        <RelatedPosts currentBlogId={blogID} category={blog.category} />
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-8 border-b pb-3">
          Comments ({blog.comments?.length || 0})
        </h3>

        <div className="space-y-6">
          {blog.comments?.map((comment: Comment) => (
            <div
              key={comment?.id}
              className="flex gap-4 p-5 bg-gray-50 rounded-2xl border hover:shadow-md transition-all duration-300"
            >
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-blue-600 text-white font-semibold text-lg shadow">
                  {comment?.name.charAt(0).toUpperCase()}
                </div>
              </div>

              {/* Comment Content */}
              <div className="flex-1">
                <div className="flex justify-between items-center mb-2">
                  <p className="font-semibold text-gray-800 text-sm sm:text-base">
                    {comment.name}
                  </p>

                  <span className="text-xs text-gray-500">
                    {new Date(comment.createdAt).toLocaleDateString()}
                  </span>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {comment.commentText}
                </p>
              </div>
            </div>
          ))}
        </div>

        {blog.comments?.length === 0 && (
          <div className="mt-6 text-center text-gray-500 text-sm">
            No comments yet. Be the first to comment!
          </div>
        )}
      </div>
    </div>
  );
};
export default BlogDetails;

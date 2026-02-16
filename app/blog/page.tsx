import BlogsListContainer from "../components/BlogsListContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "blogs list",
  description: "blogs list for next-blog app",
};

const blog = () => {
  return (
    <div>
      <BlogsListContainer />
    </div>
  );
};
export default blog;

import { Blog } from "@/types";
import LatestBlogCard from "../ui/LatestBlogCard";
import BlogCard from "../ui/BlogCard";

const LatestBlog = ({ blogs }: { blogs: Blog[] }) => {
  return (
    <div>
      <h1 className="text-4xl text-center my-5">
        Latest blog from <span className="text-accent">blogiz</span>
      </h1>
      <p className="text-center text-xl text-gray-400 w-2/4 mx-auto">
        <i>
          Dive into the fascinating world of quantum computing, where unlocking
          unprecedented computational power.
        </i>
      </p>
      <div className="grid grid-cols-2 gap-4 max-w-screen-xl mx-auto my-6">
        {blogs.slice(0, 2).map((blog) => (
          <LatestBlogCard blog={blog} key={blog.id} />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4 max-w-screen-xl mx-auto my-6">
        {blogs.slice(2, 5).map((blog) => (
          <BlogCard blog={blog} key={blog.id} />
        ))}
      </div>
    </div>
  );
};

export default LatestBlog;

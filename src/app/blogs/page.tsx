"use client";
import BlogCard from "@/components/ui/BlogCard";
import { useGetBlogsQuery } from "@/redux/api/baseApi";
import { Blog } from "@/types";

const BlogsPage = () => {
  // const res = await fetch("http://localhost:5000/blogs", {
  //   cache: "no-store",
  // });
  // const blogs = await res.json();

  const {
    data: blogs,
    isLoading,
    isError,
    error,
  } = useGetBlogsQuery(undefined);

  return (
    <div>
      <h1 className="text-4xl text-center mt-8 mb-4">
        All blog from <span className="text-accent">blogiz</span>
      </h1>
      <p className="text-center text-xl text-gray-400 w-2/4 mx-auto">
        <i>
          Dive into the fascinating world of quantum computing, where unlocking
          unprecedented computational power.
        </i>
      </p>
      <div className="grid grid-cols-3 gap-4 max-w-screen-2xl mx-auto">
        {blogs?.map((blog: Blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;

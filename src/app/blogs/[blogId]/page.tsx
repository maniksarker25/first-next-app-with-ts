import BlogDetails from "@/components/ui/BlogDetails";

interface Params {
  blogId: string;
}
const BlogDetailPage = async ({ params }: { params: Params }) => {
  const res = await fetch(`http://localhost:5000/blogs/${params.blogId}`);
  const blog = await res.json();

  return (
    <div className="my-8">
      <BlogDetails blog={blog} />
    </div>
  );
};

export default BlogDetailPage;

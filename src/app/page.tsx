import LatestBlog from "@/components/LatestBlog/LatestBlog";

const HomePage = async () => {
  const res = await fetch("http://localhost:5000/blogs", {
    next: {
      revalidate: 30,
    },
  });
  const blogs = await res.json();

  return (
    <>
      <LatestBlog blogs={blogs} />
    </>
  );
};

export default HomePage;

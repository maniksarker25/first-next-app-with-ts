"use server";

import { Blog } from "@/types";

export const createBlog = async (blogInfo: Blog) => {
  const res = await fetch("http://localhost:5000/blogs", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(blogInfo),
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};

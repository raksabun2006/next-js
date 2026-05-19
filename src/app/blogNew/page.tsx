"use client";

import BlogComponent, { BlogTypeNew } from "@/components/BlogNewComponent";
import React, { useEffect, useState } from "react";

interface ApiResponse {
  posts: BlogTypeNew[];
}

export default function BlogPageNew() {
  const [blog, setBlog] = useState<BlogTypeNew[]>([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_BASE_URL + "/posts"
      );

      const data: ApiResponse = await response.json();
      setBlog(data?.posts || []);
      console.log(data);
    } catch (error) {
      console.error("Failed to fetch posts:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
      {blog.map((post) => (
        <BlogComponent
          key={post.id}
          id={post.id}
          title={post.title}
          body={post.body}
        />
      ))}
    </div>
  );
}
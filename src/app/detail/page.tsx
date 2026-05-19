import React from "react";

interface Post {
  id: number;
  title: string;
  body: string;
}

async function getPost(id: string): Promise<Post> {
  const res = await fetch(`https://dummyjson.com/posts/${id}`);

  return res.json();
}

export default async function BlogDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const post = await getPost(params.id);

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">
        {post.title}
      </h1>

      <p className="text-gray-700 text-lg leading-relaxed">
        {post.body}
      </p>
    </div>
  );
}
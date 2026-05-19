import React from "react";
import Link from "next/link";
import { Card } from "flowbite-react";

export interface BlogTypeNew {
  id: number;
  title: string;
  body: string;
}

export default function BlogComponent({ id, title, body }: BlogTypeNew) {
  return (
    <Link href={`/posts/${id}`} >
      <Card className="max-w-sm cursor-pointer hover:shadow-lg transition-shadow">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>

        <p className="font-normal text-gray-700 dark:text-gray-400 line-clamp-3">
          {body}
        </p>
      </Card>
    </Link>
  );
}
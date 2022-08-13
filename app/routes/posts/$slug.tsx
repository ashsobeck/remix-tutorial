import { marked } from "marked";
import { LoaderFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import type { PostLoaderData } from "~/models/post.server";
import { getValidatedPost } from "~/models/post.server";

export const loader: LoaderFunction = getValidatedPost;

export default function PostSlug() {
  const { post, html } = useLoaderData() as unknown as PostLoaderData;
  return (
    <main className="mx-auto max-w-4xl">
      <h1 className="my-6 border-b-2 text-center text-3xl">
        {post.title}
      </h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </main>
  );
}
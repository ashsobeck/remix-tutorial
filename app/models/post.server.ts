import { Post } from "@prisma/client";
import { json, LoaderFunction } from "@remix-run/node";
import { marked } from "marked";
import invariant from "tiny-invariant";
import { prisma } from "~/db.server";

export type { Post } from "@prisma/client";

export type PostLoaderData = { post: Post; html: string; };

export async function getPosts() {
  return prisma.post.findMany();
}

export async function getPost(slug: string) {
  return prisma.post.findUnique({ where: { slug } });
}

export async function createPost(
  post: Pick<Post, "slug" | "title" | "markdown">
) {
  return prisma.post.create({ data: post })
}

export const getValidatedPost: LoaderFunction = async ({
  params,
}) => {
  invariant(params.slug, `params.slug is required`);

  const post = await getPost(params.slug)
  invariant(post, `Post not found: ${params.slug}`);

  const html = marked(post.markdown)
  return json<PostLoaderData>({ post, html });
};
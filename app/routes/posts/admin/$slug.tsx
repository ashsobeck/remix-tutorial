import type { ActionFunction } from "@remix-run/node";
import { LoaderFunction, json } from "@remix-run/node";
import { Form, useLoaderData, useActionData, useTransition } from "@remix-run/react";
import { marked } from "marked";
import invariant from "tiny-invariant";

import type { Post } from "~/models/post.server";
import { loader } from "~/routes/posts/$slug";

type LoaderData = { post: Post; html: string };

type ActionData = {
  title: null | string;
  slug: null | string;
  markdown: null | string;
} | undefined

export default function EditSlug() {
  const { post, html } = useLoaderData()
}




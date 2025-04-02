import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const posts = await prisma.blogPost.findMany();
    res.json(posts);
  } else if (req.method === "POST") {
    const { title, content } = req.body;
    const post = await prisma.blogPost.create({
      data: { title, content },
    });
    res.json(post);
  }
}

import { useState, useEffect } from "react";

interface BlogPost {
  id: string;
  title: string;
  content: string;
}

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    fetch("/api/blog")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Blog</h1>
      {posts.map((post) => (
        <div key={post.id} className="border p-4 mt-4">
          <h2 className="text-xl">{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

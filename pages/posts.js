// pages/posts.js
import { useEffect, useState } from "react";

export default function PostsPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <main style={{ padding: "2rem" }}>
      <h1>📝 Posts</h1>
      {posts.map((post) => (
        <article key={post.id} style={{ marginBottom: "1rem" }}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </article>
      ))}
    </main>
  );
}

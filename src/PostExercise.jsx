import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
import { getPosts } from "./Services";

function PostExercise() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postData = await getPosts();
        setPosts(postData);
      } catch (error) {
        console.error("Gagal ambil posts:", error.message);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-special-red">
        Post Cards
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            title={post.title}
            body={post.body}
          />
        ))}
      </div>
    </div>
  );
}

export default PostExercise;
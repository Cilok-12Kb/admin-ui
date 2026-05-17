import React, { useState } from "react";
import PostCard from "./PostCard";
import postsData from "/src/assets/postsData.js";

function PostExercise() {
  const [posts] = useState(postsData);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-special-red">
        Post Cards
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            id={post.id}
            userId={post.userId}
            title={post.title}
            body={post.body}
          />
        ))}
      </div>
    </div>
  );
}

export default PostExercise;
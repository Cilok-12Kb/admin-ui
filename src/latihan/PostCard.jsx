import React, { useState } from "react";

function PostCard({ id, userId, title, body }) {
  const [clicked, setClicked] = useState(false);

  return (
    <div
      className="
        group
        bg-white p-6 rounded-lg shadow
        flex flex-col justify-between
        transition-all duration-300

        hover:scale-105
        hover:shadow-lg
        hover:border hover:border-defaultBlack
        hover:bg-special-red/10
      "
    >
      {/* ===== TITLE ===== */}
      <h2 className="text-xl font-semibold text-defaultBlack text-center mb-3 line-clamp-2">
        {title}
      </h2>

      {/* ===== BODY ===== */}
      <p className="text-gray-01 text-center flex-1 text-sm line-clamp-4">
        {body}
      </p>

      {/* ===== OPTIONAL INFO ===== */}
      <div className="text-xs text-gray-02 mt-3 text-center">
        User ID: {userId} | Post ID: {id}
      </div>

      {/* ===== BUTTON ===== */}
      <button
        onClick={() => setClicked(true)}
        className={`
          mt-4 w-full py-2 rounded-md text-white font-medium
          transition-all duration-300

          ${
            clicked
              ? "bg-special-red2 group-hover:bg-special-red"
              : "bg-gray-03 group-hover:bg-gray-02"
          }
        `}
      >
        {clicked ? "Tombol sudah diklik" : "Silakan Klik"}
      </button>
    </div>
  );
}

export default PostCard;
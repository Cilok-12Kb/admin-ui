import React, { useState } from "react";

function PostCard(props) {
  const { id, userId, title, body } = props;
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
        hover:bg-special-red/10"
    >
      <h2 className="text-xl font-semibold text-defaultBlack text-center mb-3">
        {title}
      </h2>

      <p className="text-gray-01 text-center flex-1">
        {body}
      </p>

      <button
        onClick={() => setClicked(true)}
        className={`
          mt-4 w-full py-2 rounded-md text-white
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
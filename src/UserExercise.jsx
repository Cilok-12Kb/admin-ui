import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";
import { getUsers } from "./Services";

function UserExercise() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const userData = await getUsers();
        setUsers(userData);
      } catch (error) {
        console.error("Gagal ambil users:", error.message);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-primary">
        User Cards
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {users.map((user, index) => (
          <UserCard key={index} {...user} />
        ))}
      </div>
    </div>
  );
}

export default UserExercise;
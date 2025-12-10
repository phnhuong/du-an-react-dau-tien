import { useState, useEffect } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("Lỗi:", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>DANH SÁCH NGƯỜI DÙNG</h1>

      {isLoading ? (
        <p style={{ color: "blue" }}>Dang tai du lieu...</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id} style={{ marginBottom: 20, borderBottom: "1px solid #ccc" }}>
              {/* Tên in đậm */}
              <span style={{ fontWeight: "bold" }}>{user.name}</span>
              <br />
              {/* Email màu xám */}
              <span style={{ color: "gray", fontSize: "14px" }}>
                 Email: {user.email}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Users;
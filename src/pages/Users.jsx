import { useState, useEffect } from "react";

function Users() {
  // 1. Kho chứa danh sách người dùng (Ban đầu rỗng)
  const [users, setUsers] = useState([]);

  // 2. Gọi điện lên Server khi trang vừa mở ra
  useEffect(() => {
    // Gọi API lấy danh sách user mẫu
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json()) // Chuyển dữ liệu về dạng JSON
      .then((data) => {
        // Có dữ liệu rồi thì nhét vào kho
        setUsers(data);
      })
      .catch((error) => console.log("Lỗi rồi:", error));
  }, []); // [] nghĩa là chỉ gọi 1 lần khi mới vào trang

  return (
    <div style={{ padding: 20 }}>
      <h1>👥 DANH SÁCH NGƯỜI DÙNG (Từ API)</h1>

      <ul>
        {/* Duyệt qua danh sách và in ra */}
        {users.map((user) => (
          <li key={user.id} style={{ marginBottom: 10 }}>
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;

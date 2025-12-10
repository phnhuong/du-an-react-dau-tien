import { useState, useEffect } from "react";

function Users() {
  // 1. Kho chứa danh sách người dùng (Ban đầu là rỗng)
  const [users, setUsers] = useState([]);

  // 2. Gọi API khi vừa vào trang
  useEffect(() => {
    // Hàm lấy dữ liệu
    const fetchUsers = async () => {
      try {
        // Gọi điện lên server xin dữ liệu
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        
        // Chuyển dữ liệu nhận được thành JSON (để JS hiểu được)
        const data = await response.json();
        
        // Cập nhật vào kho
        setUsers(data);
        console.log("Đã lấy được dữ liệu:", data);
      } catch (error) {
        console.log("Lỗi rồi:", error);
      }
    };

    fetchUsers(); // Chạy hàm này ngay lập tức
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-5">
      <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">
        Danh sách thành viên (Lấy từ API)
      </h2>

      {/* Hiển thị dạng lưới (Grid) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user) => (
          // Thẻ Card từng người dùng
          <div key={user.id} className="bg-white p-4 rounded-lg shadow-md border border-gray-200 hover:shadow-xl transition">
            <h3 className="text-lg font-bold text-gray-800">{user.name}</h3>
            <p className="text-gray-600 text-sm">📧 {user.email}</p>
            <p className="text-gray-500 text-sm">📞 {user.phone}</p>
            <p className="text-blue-500 text-sm mt-2">🌐 {user.website}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;
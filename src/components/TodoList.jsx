import { useState, useEffect } from "react";

function TodoList() {
  // --- PHẦN LOGIC (GIỮ NGUYÊN KHÔNG ĐỔI) ---
  const [danhSach, setDanhSach] = useState(() => {
    const duLieuCu = localStorage.getItem("REACT_TODO_LIST");
    return duLieuCu ? JSON.parse(duLieuCu) : ["Việc mặc định 1", "Việc mặc định 2"];
  });

  const [textNhapVao, setTextNhapVao] = useState("");

  useEffect(() => {
    localStorage.setItem("REACT_TODO_LIST", JSON.stringify(danhSach));
  }, [danhSach]);

  const bamNutThem = () => {
    if (textNhapVao === "") {
      alert("Anh chưa nhập nội dung nào cả! 😅");
      return;
    }
    const danhSachMoi = [...danhSach, textNhapVao];
    setDanhSach(danhSachMoi);
    setTextNhapVao("");
  };

  const xoaCongViec = (indexCanXoa) => {
    const danhSachMoi = danhSach.filter((congViec, i) => i !== indexCanXoa);
    setDanhSach(danhSachMoi);
  };

  // --- PHẦN GIAO DIỆN (DÙNG TAILWIND CSS) ---
  return (
    // w-full max-w-md: Chiều rộng tối đa là khổ trung bình (khoảng 450px)
    // mx-auto: Căn giữa màn hình
    // bg-white: Nền trắng
    // rounded-lg: Bo góc
    // shadow-xl: Đổ bóng đậm
    // p-6: Khoảng cách đệm bên trong
    <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-xl p-6 mt-5">
      
      {/* KHU VỰC NHẬP LIỆU */}
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="Nhập công việc..."
          className="flex-1 border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
          value={textNhapVao}
          onChange={(e) => setTextNhapVao(e.target.value)}
        />
        <button 
          className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
          onClick={bamNutThem}
        >
          Thêm
        </button>
      </div>

      {/* DANH SÁCH */}
      <ul className="space-y-3">
        {danhSach.map((congViec, index) => (
          <li 
            key={index}
            className="flex justify-between items-center bg-gray-50 p-3 rounded border border-gray-100 hover:bg-gray-100 transition"
          >
            <span className="text-gray-800 font-medium">{congViec}</span>
            
            <button 
              className="text-red-500 hover:text-red-700 hover:bg-red-100 p-2 rounded-full transition"
              onClick={() => xoaCongViec(index)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </li>
        ))}
      </ul>
      
      {/* Hiển thị thông báo nếu danh sách trống */}
      {danhSach.length === 0 && (
        <p className="text-center text-gray-400 mt-5">Chưa có công việc nào!</p>
      )}

    </div>
  );
}

export default TodoList;
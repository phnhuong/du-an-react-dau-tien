import { useState, useEffect } from "react"; // Nhớ import useEffect
import "./TodoList.css";

function TodoList() {
  
  // 1. KHAI BÁO STATE (Lấy từ kho ra trước)
  const [danhSach, setDanhSach] = useState(() => {
    const duLieuCu = localStorage.getItem("REACT_TODO_LIST");
    // Nếu có dữ liệu cũ thì lấy, không thì dùng mặc định
    return duLieuCu ? JSON.parse(duLieuCu) : ["Việc mặc định 1", "Việc mặc định 2"];
  });

  const [textNhapVao, setTextNhapVao] = useState("");

  // 2. NGƯỜI GIÁM SÁT (Tự động lưu khi danh sách thay đổi)
  useEffect(() => {
    localStorage.setItem("REACT_TODO_LIST", JSON.stringify(danhSach));
    console.log("Auto Save: Đã lưu vào kho!");
  }, [danhSach]);

  // --- CÁC HÀM XỬ LÝ (GIỮ NGUYÊN) ---
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

  // --- GIAO DIỆN (GIỮ NGUYÊN) ---
  return (
    <div className="todo-container">
      <div className="input-group">
        <input
          type="text"
          placeholder="Nhập công việc..."
          value={textNhapVao}
          onChange={(e) => setTextNhapVao(e.target.value)}
        />
        <button className="add-btn" onClick={bamNutThem}>Thêm</button>
      </div>

      <ul className="todo-list">
        {danhSach.map((congViec, index) => (
          <li key={index}>
            <span>{congViec}</span>
            <button className="delete-btn" onClick={() => xoaCongViec(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";

// Nhập khẩu 3 trang
import Home from "./pages/Home";
import About from "./pages/About";
import Users from "./pages/Users"; // <--- MỚI: Trang lấy API

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      {/* THANH MENU ĐIỀU HƯỚNG */}
      <nav className="p-4 bg-white shadow-sm flex justify-center gap-5 sticky top-0 z-50">
        <Link to="/" className="font-bold text-gray-700 hover:text-blue-600 transition">
          Trang chủ
        </Link>
        
        {/* MỚI: Link sang trang Thành viên */}
        <Link to="/users" className="font-bold text-gray-700 hover:text-blue-600 transition">
          Thành viên
        </Link>

        <Link to="/about" className="font-bold text-gray-700 hover:text-blue-600 transition">
          Giới thiệu
        </Link>
      </nav>

      {/* KHU VỰC THAY ĐỔI NỘI DUNG */}
      <div className="p-5">
        <Routes>
          {/* Định nghĩa các đường dẫn */}
          <Route path="/" element={<Home />} />
          
          {/* MỚI: Đường dẫn cho trang Users */}
          <Route path="/users" element={<Users />} />
          
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
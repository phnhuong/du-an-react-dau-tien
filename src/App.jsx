import './App.css';
import Header from "./components/Header";
import TodoList from "./components/TodoList";
//1.nhập khẩu các trang vừa tạo
import Home from "./pages/Home";
import About from "./pages/About";
import Users from "./pages/Users";
//2.Nhập khẩu bộ công cụ router
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    {/*Phần header luôn hiện ở mọi trang */}
    <Header/>
    {/* THANH MENU ĐIỀU HƯỚNG */}
    {/* Dùng thẻ Link thay cho thẻ a để chuyển trang không bị load lại */}
    <nav className='menu'>
      <Link to="/" className='menu-item'>Trang chủ</Link>
      <Link to="/todo" className='menu-item'>Danh sách việc</Link>
      <Link to="/about" className='menu-item'>Giới thiệu</Link>
      <Link to="/users" className='menu-item'>Người dùng API</Link>
    </nav>
    {/* KHU VỰC THAY ĐỔI NỘI DUNG (CÁC KÊNH) */}
    <div className='main-content'>
      <Routes>
        {/* Nếu đường dẫn là / thì hiện trang Home */}
        <Route path='/' element={<Home/>}/>
        {/* Nếu đường dẫn là /todo thì hiện TodoList */}
        <Route path='/todo' element={<TodoList/>}/>
        {/* Nếu đường dẫn là /about thì hiện trang About */}
        <Route path='/about' element={<About/>}/>
        <Route path='/users' element={<Users/>}/>
      </Routes>

    </div>
    </BrowserRouter>
  )
}
export default App;
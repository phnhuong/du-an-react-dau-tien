//0.import App.css
import "./App.css";
//1.Nhập khẩu mảnh Header vào đây
import Header from "./components/Header";
import TodoList from "./components/TodoList"; //nhập kha63i mảnh mới
function App() {
  return (
    <div>
      {/*2. sử dụng component header như một thẻ html*/}
      <Header />
      {/*lắp mảnh TodoList vào đây */}
      <TodoList />
    </div>
  );
}
export default App;

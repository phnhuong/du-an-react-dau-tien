import TodoList from "../components/TodoList";

function Home() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-center my-5 text-blue-600">
        Danh sách công việc
      </h2>
      <TodoList />
    </div>
  );
}
export default Home;
import Button from "./components/button";
import Todo from "./components/todo";
import Form from "./components/form";

const DATA = [
  { id: "todo-0", task: "Eat" },
  { id: "tod0-1", task: "Sleep" },
  { id: "tod0-2", task: "Rest" },
];
function App() {
  const taskList = DATA.map((todo) => (
    <div key={todo.id}>
      <Todo task={todo.task} id={todo.id} />
    </div>
  ));
  const btnWhite =
    "border border-black p-4 bg-white text-black w-full text-xl font-semibold underline";
  return (
    <div className="bg-gray-300 h-full p-5 font-sans">
      <div
        className={`p-8 flex flex-col items-center justify-center shadow-sm bg-white max-w-2xl  mx-auto`}
      >
        <h1 className="text-3xl font-bold text-center my-2">TodoMatic</h1>
        <Form />
        <div className="w-full flex gap-1 mt-3">
          <Button styles={btnWhite} text="All" />
          <Button styles={btnWhite} text="Active" />
          <Button styles={btnWhite} text="Completed" />
        </div>
        <div className="w-full mt-3 space-y-3">
          <h3 className="text-2xl font-bold">
            {DATA.length} {DATA.length == 1 ? "task" : "tasks"} remaining
          </h3>
          {taskList}
        </div>
      </div>
    </div>
  );
}

export default App;

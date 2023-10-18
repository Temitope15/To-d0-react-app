import Button from "./button";
// eslint-disable-next-line react/prop-types
const Todo = ({ task , id}) => {
  const btnWhite =
    "border border-black p-4 bg-white text-black w-full text-xl font-semibold underline";
  return (
    <>
      <div className="flex gap-3 items-center">
        <input
          type="checkbox"
          name="task"
          id={id}
          className="p-4 bg-white w-7 h-7 cursor-pointer"
        />
        <label htmlFor={id} className="text-left text-xl">
          {" "}
          {task}
        </label>
      </div>
      <div className="flex gap-1 w-full mt-4">
        <Button text="Edit" styles={btnWhite} />
        <Button
          text="Delete"
          styles="bg-red-600 text-white text-xl font-semibold p-4 w-full"
        />
      </div>
    </>
  );
};

export default Todo;

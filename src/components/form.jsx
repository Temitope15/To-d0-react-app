import Button from "./button";
const Form = () => {
  const center = "flex flex-col items-center justify-center";
  return (
    <form className={`${center} w-full mt-4 font-semibold text-xl`}>
      <h2>What needs to be done?</h2>
      <input
        type="text"
        id="to-do"
        placeholder="add to do"
        className="border border-black w-full p-5 m-3  "
      />
      <Button
        styles="border border-black p-4 w-full bg-black text-white text-xl font-semibold focus:border-dashed focus:border-blue-500 focus:border-4 "
        text="Add"
      />
    </form>
  );
};

export default Form;

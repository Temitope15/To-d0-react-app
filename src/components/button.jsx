// const btnWhite =
//     "border border-black p-4 bg-white text-black w-full text-xl font-semibold underline";
//     const btnBlack = "border border-black p-4 w-full bg-black text-white text-xl font-semibold";
//     const btnRed = "bg-red-600 text-white text-xl font-semibold";

// eslint-disable-next-line react/prop-types
const Button = ({ styles, text }) => {
  return (
    <>
      <button className={styles}>{text}</button>
    </>
  );
};

export default Button;

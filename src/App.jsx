function App() {
  const { useState } = React;
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((count) => count + 1);
  };
  const decrement = () => {
    setCount((count) => count - 1);
  };
  return (
    <div
      id="container"
      className="flex flex-col items-center justify-center h-screen"
    >
      <div
        id="wrapper"
        className="flex flex-col justify-center items-center w-[80%] h-[80%] outline rounded-md shadow-2xl mt-12"
      >
        <h1 className="text-8xl m-6" id="counter">
          {count}
        </h1>
        <div className="" id="btns">
          <button
            className="w-24 h-12 outline rounded-md m-2 bg-gray-100 hover:bg-gray-200 transition-all "
            id="increment"
            onClick={increment}
          >
            <h1 className="text-4xl text-green-500">+1</h1>
          </button>
          <button
            className="w-24 h-12 outline rounded-md m-2  hover:bg-gray-200 transition-all "
            id="decrement"
            onClick={decrement}
          >
            <h1 className="text-4xl text-red-500">-1</h1>
          </button>
        </div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

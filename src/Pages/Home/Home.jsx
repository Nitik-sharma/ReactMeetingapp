import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const handleRommJoin = useCallback(() => {
    if (!value) {
      return alert("Please Enter Room Id");
    }
    navigate(`/room/${value}`);
    console.log(value, "hello");
  });
  return (
    <div className=" flex items-center justify-center h-screen bg-gray-900">
      <div>
        <div className=" imput bg-gray-950  px-5 py-6 rounded-md border border-gray-500  shadow-md">
          {/* image div */}
          <div className=" flex items-center justify-center mb-8">
            <img
              className=" w-20  border rounded-full  border-gray-400"
              src="https://cdn-icons-png.flaticon.com/128/11104/11104179.png"
              alt="img"
            />
          </div>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="bg-gray-950  rounded-lg border
                            border-gray-600 py-2 px-2 outline-none w-80 lg:w-96 text-lg text-white mb-5"
            placeholder="Enter Room Code"
          />
          <br />
          <button
            type="button"
            onClick={handleRommJoin}
            className=" bg-gray-900 hover:bg-gray-800 border border-gray-700 text-gray-300 font-bold px-8 py-2 rounded-lg w-full"
          >
            Join Room
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;

import { useState } from "react";

function BgColor(){
    const [color, setColor] = useState("black")

    return (
        <div className="h-screen w-full" style={{backgroundColor:color}}>
      <div className="flex flex-row flex-wrap justify-center ">
        <div className=" px-10  h-10 w-fit flex justify-center bg-white  py-1 my-10 rounded-full">
          <button onClick={() => setColor("green")}  className="bg-green-600 rounded-full mx-1 px-8 py-1 text-white ">
            Green
          </button>

          <button onClick={() => setColor("Red")}  className="bg-red-500 rounded-full mx-2 px-8 py-1 text-white ">
            Red
          </button>
          <button onClick={() => setColor("Black")}  className="bg-black rounded-full mx-2 px-8 py-1 text-white ">
            Black
          </button>

          <button onClick={() => setColor("Blue")}  className="bg-blue-500 rounded-full mx-2 px-8 py-1 text-white ">
            Blue
          </button>
          <button onClick={() => setColor("Yellow")} className="bg-yellow-300 rounded-full mx-2 px-8 py-1 text-white ">
            Yellow
          </button>
          <button onClick={() => setColor("Pink")}  className="bg-pink-300 rounded-full mx-2 px-8 py-1 text-white ">
            Pink
          </button>
          <button onClick={() => setColor("Gray")}  className=" bg-gray-400 rounded-full mx-2 px-8 py-1 text-white ">
            Gray
          </button>
          <button onClick={() => setColor("orange")}  className="bg-orange-300 rounded-full mx-2 px-8 py-1 text-white ">
          Orange
          </button>




        </div>

      </div>
      <div className="flex flex-wrap justify-center p-20">
        <h1 className="text-white text-4xl ">BG-Changer</h1>
      </div>
    </div>
    )
}

export default BgColor;
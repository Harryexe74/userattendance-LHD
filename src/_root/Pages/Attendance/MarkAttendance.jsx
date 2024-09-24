import React, { useEffect, useState } from "react";

function MarkAttendance() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="h-screen flex items-center bg-black justify-center  bg-cover gap-3 bg-center"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/18095413/pexels-photo-18095413/free-photo-of-singapore-city-skyline-at-night.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      }}
    >
      <div className="bg-transparent bg-opacity-80 text-center text-white w-64 border border-white p-4 rounded-lg shadow-2xl">
        <div className="mb-4">
          <img
            src="https://www.mordeo.org/files/uploads/2019/01/Messi-10-Art-Graphics-4K-Ultra-HD-Mobile-Wallpaper-950x1689.jpg"
            alt="Logo"
            className="mx-auto h-20 border border-white shadow-transparent rounded-full w-20 object-cover"
          />
        </div>
        <h2 className="text-[1.2rem] font-semibold mb-2">Faisal Khan</h2>
        <div>
          <p className="text-[1rem] font-semibold">Check Time</p>
          <p className="text-[1rem] font-semibold font-mono">
            {time.toLocaleDateString("en-GB")}{" "}
            {time.toLocaleTimeString("en-GB")}
          </p>
        </div>
        <div className="flex flex-col  items-center text-[1rem] gap-2 mt-5">
          <button className="bg-green-500 w-full text-white  py-1 rounded hover:bg-green-700 transition duration-300">
            CHECK IN
          </button>
          <button className="bg-red-500 w-full text-white px-5 py-1 rounded hover:bg-red-700 transition duration-300">
            CHECK OUT
          </button>
        </div>
      </div>
    </div>
  );
}

export default MarkAttendance;

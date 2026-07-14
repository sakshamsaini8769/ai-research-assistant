import { FaRobot } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="text-center mb-12">

      <div className="flex justify-center">

        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 rounded-full shadow-xl">

          <FaRobot
            size={45}
            className="text-white"
          />

        </div>

      </div>

      <h1 className="mt-8 text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">

        AI Research Assistant

      </h1>

      <p className="mt-5 text-xl text-gray-600">

        Generate Professional Research Reports in Seconds

      </p>

      <p className="mt-2 text-gray-400">

        

      </p>

    </div>
  );
}
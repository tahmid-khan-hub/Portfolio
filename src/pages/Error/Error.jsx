import React, { useEffect } from "react";
import Lottie from "lottie-react";
import ErrorLottie from "../../assets/LottieFiles/error.json"
import { Link } from "react-router";

const ErrorPage = () => {

  useEffect(()=>{document.title = "Portfolio | No Page Found"},[])

  return (
    <>
      <div className="bg-[#e7f9d9] overflow-hidden">
        <div className="flex flex-col items-center justify-center h-screen">
          <div className="w-[412px]">
            <Lottie animationData={ErrorLottie} loop />
          </div>
          <p className="text-center text-2xl my-4">
            Oops! The page you're looking for doesn't exist
          </p>
          <div className="flex">
            <Link className="block mx-auto w-fit" to={`/`}>
              <button className="text-white bg-gradient-to-r from-lime-500 to-lime-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2">
                Home
              </button>
            </Link>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
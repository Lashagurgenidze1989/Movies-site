import logo from "/assets/logo.svg";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex pt-[8rem] items-center justify-center">
      <div className="px-5 flex flex-col items-center">
        <Link to={"/home"}>
          <img src={logo} alt="" />
        </Link>
        <div className="bg-[#161D2F] mt-[7rem] w-[335px] px-5 py-6 rounded-lg">
          <h1 className="text-white text-[1.7rem]">Login</h1>
          <div className="mt-5">
            <input
              className="w-full px-3 pb-2 text-[0.9rem] border-b border-gray-400 focus:outline-none placeholder-gray-500 bg-[#161D2F] text-gray-500"
              type="text"
              name=""
              id=""
              placeholder="Email Address"
            />
            <input
              className="w-full mt-6 px-3 pb-2 text-[0.9rem] border-b focus:outline-none  border-gray-400 placeholder-gray-500 bg-[#161D2F] text-gray-500 "
              type="text"
              name=""
              id=""
              placeholder="Password"
            />
          </div>
          <button className="mt-10 w-full bg-[#FC4747] rounded-md py-2 text-white">
            Login to your account
          </button>
          <p className="mt-5 text-center text-white">
            Don't have an accaount
            <Link to={"/SignUp"}>
              <span className="text-[#FC4747] ml-2 underline">Sign Up</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

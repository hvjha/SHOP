import React, { useContext, useState } from "react";
import logInIcon from "../assest/signin.gif";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import SummaryApi from "../common";
import { toast } from "react-toastify";
import Context from "../context";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate()
  const  {fetchUserDetails,fetchUserAddToCart}= useContext(Context)
  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async(e) =>{
    e.preventDefault();
    const dataResponse = await fetch(SummaryApi.signin.url,{
      method:SummaryApi.signin.method,
      credentials:'include',
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(data)
    })

    const dataApi = await dataResponse.json();
    if(dataApi.success){
      toast.success(dataApi.message)
      navigate("/")
      fetchUserDetails()
      fetchUserAddToCart()
    }
    if(dataApi.error){
      toast.error(dataApi.message)
    }
  }
  return (
    <section id="login">
      <div className="mx-auto container p-4">
        <div className="bg-white p-5 w-full max-w-sm mx-auto">
          <div className="w-20 h-20 mx-auto">
            <img src={logInIcon} alt="login-icons" />
          </div>
          <form className="pt-6 flex flex-col gap-2" onSubmit={handleSubmit}>
            <div className="grid">
              <label>Email:</label>
              <div className="bg-slate-100 p-2 rounded-full">
                <input
                  type="email"
                  placeholder="enter email"
                  name="email"
                  value={data.email}
                  onChange={handleOnChange}
                  className="w-full outline-none bg-transparent"
                  required
                  autoComplete="email"
                />
              </div>
            </div>
            <div>
              <label>Password:</label>
              <div className="bg-slate-100 p-2 rounded-full flex">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="enter password"
                  name="password"
                  value={data.password}
                  onChange={handleOnChange}
                  className="w-full outline-none bg-transparent"
                   required
                  autoComplete="new-password"
                />
                <div
                  className="flex items-center text-2xl cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <span>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                </div>
              </div>
              <Link
                to={"/forgot-password"}
                className="block w-fit ml-auto hover:text-red-600 hover:underline"
              >
                Forgot Password ?
              </Link>
            </div>
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 w-full max-w-[200px] rounded-full hover:scale-110 transition-all mx-auto block mt-5">
              Login
            </button>
          </form>
          <p className="my-5">
            Don't have account ?{" "}
            <Link to="/signup" className="hover:text-red-700">
              SignUp
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;

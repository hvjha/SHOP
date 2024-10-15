import React, { useState } from "react";
import logInIcon from "../assest/signin.gif";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import imageTobase64 from "../helpers/imageTobase64";
import SummaryApi from "../common";
import { toast } from "react-toastify";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    profilePic: "",
  });
  const navigate = useNavigate()
  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleUploadPic = async(e)=>{
    const file = e.target.files[0];
    const imagePic = await imageTobase64(file)
    setData((prev)=>{
        return{
            ...prev,
            profilePic:imagePic
        }
    })
  }
  
  const handleSubmit = async(e) => {
    e.preventDefault();
    if(data.password === data.confirmPassword){
      const dataResponse = await fetch(SummaryApi.signup.url,{
        method:SummaryApi.signup.method,
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
      })
      const dataApi = await dataResponse.json()
      if(dataApi.success){
        toast.success(dataApi.message)
        navigate('/login')
      }
      if(dataApi.error){
        toast.error(dataApi.message)
      }
    }else{
      toast.error("please check password and confirmPassword")
    }
   
  };
  return (
    <section id="signup">
      <div className="mx-auto container p-4">
        <div className="bg-white p-5 w-full max-w-sm mx-auto">
          <div className="w-20 h-20 mx-auto relative overflow-hidden rounded-full">
            <div>
              <img src={data.profilePic || logInIcon} alt="login-icons" />
            </div>
            <form>
                <label>
                <div className="text-xs bg-opacity-80 bg-slate-200 pb-4 pt-2 cursor-pointer text-center absolute bottom-0 w-full">
              Upload Photo
            </div>
            <input type="file" className="hidden" onChange={handleUploadPic} />
                </label>
            </form>
          </div>
          <form className="pt-6 flex flex-col gap-2" onSubmit={handleSubmit}>
            <div>
              <label>Name:</label>
              <div className="bg-slate-100 p-2 rounded-full">
                <input
                  type="text"
                  placeholder="enter Your Name"
                  name="name"
                  value={data.name}
                  onChange={handleOnChange}
                  className="w-full outline-none bg-transparent"
                  required
                />
              </div>
            </div>

            <div>
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
            </div>

            <div>
              <label>Confirm Password:</label>
              <div className="bg-slate-100 p-2 rounded-full flex">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="enter confirm password"
                  name="confirmPassword"
                  value={data.confirmPassword}
                  onChange={handleOnChange}
                  className="w-full outline-none bg-transparent"
                  required
                  autoComplete="new-confirm-password"
                />
                <div
                  className="flex items-center text-2xl cursor-pointer"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  <span>
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </div>
            </div>
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 w-full max-w-[200px] rounded-full hover:scale-110 transition-all mx-auto block mt-5">
              Signup
            </button>
          </form>
          <p className="my-5">
            Already have account ?{" "}
            <Link to="/login" className="hover:text-red-700">
              LogIn
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Signup;

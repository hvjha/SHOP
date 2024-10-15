import React, { useEffect } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link, Outlet, useNavigate } from "react-router-dom";
import ROLE from "../common/role";

const AdminPanel = () => {
  const user = useSelector((store) => store?.user?.user);
  const navigate = useNavigate()
  useEffect(()=>{
    if(user?.role !== ROLE.ADMIN){
      navigate("/");
    }
  },[user])
  return (
    <div className="min-h-[calc(100vh-120px)] md:flex hidden">

      <aside className="bg-white min-h-full w-full max-w-60 customShadow">
        <div className="h-32 flex justify-center items-center flex-col mb-5">
          <div className="text-5xl cursor-pointer relative flex justify-center mt-3">
            {user?.profilePic ? (
              <img
                src={user?.profilePic}
                className="w-20 h-20 rounded-full"
                alt={user?.name}
              />
            ) : (
              <FaRegUserCircle />
            )}
          </div>
          <p className="capitalize text-lg font-semibold">{user?.name}</p>
          <p className="text-sm">{user?.role}</p>
        </div>

        {/* *****navigation**** */}
        <div className="grid">
        <Link to={"all_users"} className="px-4 py-1 hover:bg-slate-100">All Users</Link>
        <Link to={"all_products"} className="px-4 py-1 hover:bg-slate-100">All Products</Link>
        <Link to={"all_orders"} className="px-4 py-1 hover:bg-slate-100">All Orderss</Link>
        </div>
      </aside>
      <main className="w-full h-full p-2">
        <Outlet/>
      </main>
    </div>
  );
};

export default AdminPanel;

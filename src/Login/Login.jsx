import React from "react";
import { Link } from "react-router-dom";
import Navber from "../Header/Navber";

const Login = () => {
  return (
    <div>
      <Navber></Navber>
      <div className="my-10">
        <div className=""></div>
        <div className="card shrink-0 w-2/4 mx-auto w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl font-bold text-center mt-5">
            Login Your Acount
          </h1>
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <Link to="/register" className=" m-10">
            <span> Are you new here? Please </span>
            <span className="font-bold text-blue-600">Register</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

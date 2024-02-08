import { useContext } from "react";
import { Link } from "react-router-dom";
import Navber from "../Header/Navber";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Login = () => {
  const { signInWithEmail } = useContext(AuthContext);

  const loginHandle = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(form, email, password);
    signInWithEmail(email, password)
      .then((result) => {
        console.log(result.user);
        alert(" succesfully login done");
      })
      .catch((error) => {
        console.error(error);
        alert(` please provite valid information " ${error}`);
      });
  };
  return (
    <div>
      <Navber></Navber>
      <div className="my-10">
        <div className=""></div>
        <div className="card shrink-0 w-2/4 mx-auto w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl font-bold text-center mt-5">
            Login Your Acount
          </h1>
          <form onSubmit={loginHandle} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
                name="email"
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
                name="password"
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
            <span>Dont’t Have An Account? </span>
            <span className="font-bold text-blue-600">Register</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

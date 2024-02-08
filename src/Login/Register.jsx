import { Link } from "react-router-dom";
import Navber from "../Header/Navber";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
        alert(error);
      });
  };
  return (
    <div>
      <Navber></Navber>
      <div className="my-10">
        <div className=""></div>
        <div className="card shrink-0 w-2/4 mx-auto w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl font-bold text-center mt-5">Register Now</h1>
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                required
                name="name"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo url</span>
              </label>
              <input
                type="text"
                placeholder="Photo url"
                className="input input-bordered"
                required
                name="photo"
              />
            </div>
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
            </div>
            <div className="flex">
              <input
                className="mr-3"
                type="checkbox"
                name="checkbox"
                required
                id=""
              />
              <p>Accept Term & Conditions</p>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <Link to="/login" className=" m-10">
            <span> Do you have an acount? Please </span>
            <span className="font-bold text-blue-600">Login</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;

import moment from "moment";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="  w-5/6 mx-auto">
      <div className="">
        <img className="mx-auto" src={logo} alt="" />
        <p className="text-center font-Poppins font-light py-2">
          Journalism Without Fear or Favour
        </p>
        <p className="text-center"> {moment().format("dddd, MMMM D YYYY")}</p>
      </div>
      <button className="btn btn-warning text-white">Lastest</button>
    </div>
  );
};

export default Header;

import moment from "moment";
import logo from "../assets/logo.png";
import Marquee from "react-fast-marquee";

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
      <div className="flex items-center">
        <div>
          <button className="btn btn-warning text-white">Lastest</button>
        </div>
        <div>
          <Marquee speed={50} pauseOnHover>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              culpa beatae harum molestiae hic ipsum molestias, dicta dolore
              nulla laborum.
            </p>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Header;

import qZone1 from "../../assets/qZone1.png";
import qZone2 from "../../assets/qZone2.png";
import qZone3 from "../../assets/qZone3.png";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa6";

const RightSide = () => {
  return (
    <div className=" sticky ">
      <div>
        <h1 className="font-bold text-2xl mb-3">Login With</h1>
        <div>
          <button className=" flex items-center rounded justify-center p-3 border w-full mb-2 text-blue-400">
            <FaGoogle></FaGoogle>
            <p className="ml-2"> Login with Google</p>
          </button>
        </div>
        <div>
          <button className=" flex items-center justify-center rounded p-3 mb-3 border w-full  ">
            <FaGithub></FaGithub> <p className="ml-2"> Login with Github</p>
          </button>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-2xl my-5">Find Us On</h1>
        <div>
          <button className=" flex items-center rounded-t-lg justify-center p-3 border w-full ">
            <FaFacebook></FaFacebook>
            <p className="ml-2"> Facebook</p>
          </button>
        </div>
        <div>
          <button className=" flex items-center justify-center p-3  border-x w-full ">
            <FaTwitter></FaTwitter>
            <p className="ml-2"> Twitter</p>
          </button>
        </div>
        <div>
          <button className=" flex items-center rounded-b-lg justify-center p-3 border w-full mb-2 ">
            <FaInstagram></FaInstagram>
            <p className="ml-2"> Instagram</p>
          </button>
        </div>
      </div>
      <div className=" bg-[#F3F3F3] p-5">
        <h1 className="py-3">Q-Zone</h1>
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
      </div>
    </div>
  );
};

export default RightSide;

import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import Navber from "../Header/Navber";
import LeftSide from "./Sidebar/LeftSide";
import RightSide from "./Sidebar/RightSide";

const Home = () => {
  const news = useLoaderData();
  console.log(news);
  return (
    <div className=" w-5/6 mx-auto">
      <Header></Header>
      <Navber></Navber>
      <div className="grid grid-cols-4 gap-3">
        <div className="">
          <LeftSide></LeftSide>
        </div>
        <div className=" col-span-2 border">
          <h1>Dragon News Home</h1>
        </div>
        <div className="">
          <RightSide></RightSide>
        </div>
      </div>
    </div>
  );
};

export default Home;

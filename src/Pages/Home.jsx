import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import Navber from "../Header/Navber";
import LeftSide from "./Sidebar/LeftSide";
import RightSide from "./Sidebar/RightSide";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import NewsCard from "./NewsCard";
import Marquee from "react-fast-marquee";

const Home = () => {
  const authInfo = useContext(AuthContext);
  // console.log(authInfo);
  const news = useLoaderData();
  // console.log(news);
  return (
    <div className=" w-5/6 mx-auto">
      <Header></Header>
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
      <Navber></Navber>
      <div className="grid grid-cols-4 gap-3">
        <div className="">
          <LeftSide></LeftSide>
        </div>
        <div className=" col-span-2  ">
          <h1>Dragon News Home {authInfo.name}</h1>
          <div className="">
            {news.map((card) => (
              <NewsCard key={card._id} card={card}></NewsCard>
            ))}
          </div>
        </div>
        <div className="relative">
          <RightSide></RightSide>
        </div>
      </div>
    </div>
  );
};

export default Home;

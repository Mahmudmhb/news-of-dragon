import { Link, useLoaderData, useParams } from "react-router-dom";
import RightSide from "./Sidebar/RightSide";
import Header from "../Header/Header";
// import { useState } from "react";

const NewsDetails = () => {
  // const [snews, setSnews] = useState([]);
  const news = useLoaderData();
  // console.log(news);
  const { id } = useParams();
  // console.log(id);
  // const prsID = parseInt(id);

  const detailNews = news.find((findnews) => findnews._id === id);
  // console.log(detailNews, id);

  // console.log(detailNews.title);
  const { author, thumbnail_url, _id, title, details, image_url } = detailNews;

  return (
    <div>
      <Header></Header>
      {/* <h1>this is news details page: {detailNews.title}</h1> */}
      <div className="grid grid-cols-4 ">
        <div className="col-span-3 ">
          <h1>Dragon News</h1>
          <div className="p-5 my-5">
            <div className=" bg-base-100 ">
              <figure>
                <img src={image_url} />
              </figure>
              <h2 className="card-title my-3">{title}</h2>

              <p>{details}</p>
            </div>
          </div>
          <Link to="/" className="btn btn-outline">
            All Category is Here
          </Link>
        </div>
        <div>
          <RightSide></RightSide>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;

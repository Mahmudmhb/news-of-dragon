import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NewsCard = ({ card }) => {
  const { author, thumbnail_url, _id, title, details, image_url } = card;
  return (
    <div>
      <div className=" bg-base-100 border p-3 my-5 ">
        <h2 className="card-title mb-3">{title}</h2>
        <figure>
          <img src={image_url} />
        </figure>
        <div className="">
          {details.length > 200 ? (
            <p>
              {details.slice(0, 150)}
              <Link to={`/news/${_id}`} className="text-blue-600 font-bold">
                Read More..
              </Link>
            </p>
          ) : (
            <p>{details}</p>
          )}
          {/* {
                    details.length > 200
                        ? <p>{details.slice(0, 200)} <Link
                            to={`/news/${_id}`}
                            className="text-blue-600 font-bold">Read More...</Link></p>
                        : <p>{details}</p>
                } */}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
NewsCard.propTypes = {
  card: PropTypes.node,
};

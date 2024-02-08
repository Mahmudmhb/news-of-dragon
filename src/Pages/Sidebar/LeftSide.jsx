import React, { useEffect, useState } from "react";

const LeftSide = () => {
  const [categories, setCategoris] = useState([]);
  useEffect(() => {
    const url = "categories.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCategoris(data));
  }, []);
  return (
    <div>
      <h1 className="font-bold mb-8">All Category</h1>
      <div className=" bg-[#e7e7e7] py-3 rounded ">
        <h1 className="font-bold ml-8 ">National News</h1>
      </div>
      <div className="ml-8">
        {categories.map((category) => (
          <div key={category.id}>
            <p className="font-light text-xl py-3">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftSide;

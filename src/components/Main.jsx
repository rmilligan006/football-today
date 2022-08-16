import React, { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "./Carousel";
import { Watch } from "react-loader-spinner";
import NewsTicker, { Directions } from "react-advanced-news-ticker";

const Main = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios("https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/news")
      .then((res) => {
        console.log(res.data.articles);
        setData(res.data.articles);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <div className=" w-full flex flex-col items-center justify-center pt-5 ">
        <p className="pb-3">Today's Scores: Aug 6th </p>
        <NewsTicker
          rowHeight={30}
          maxRows={1}
          speed={600}
          direction={Directions.DOWN}
          duration={3000}
          autoStart={true}
          pauseOnHover={false}
          id="myId"
          className="bg-black text-white w-[250px] text-center"
        >
          <div>Fulham 2 - 2 Liverpool</div>
          <div>Newcastle 2 - 0 Nottingham</div>
          <div>Tottenham 4 - 1 Southampton</div>
          <div>Bournemouth 2 - 0 Aston Villa</div>
          <div>Leeds United 2 - 1 Wolverhampton</div>
          <div>Everton 0 - 1 Chelsea</div>
        </NewsTicker>
        <Carousel />
        <div>
          <h3 className="text-2xl underline-red">Today's News</h3>
          <div>
            <div className="text-center flex items-center justify-center flex-col m-5">
              {loading ? (
                <Watch
                  color="#242F9B"
                  height={180}
                  width={180}
                  className="flex items-center justify-center"
                />
              ) : (
                data?.map((data, index) => (
                  <div key={index} className="m-5 bg-white px-5 py-5">
                    <img src={data.images[0]} alt="" />
                    <p>{data.description}</p>
                    <button className="bg-blue-600 text-white p-2 mt-2 mb-5 rounded-lg hover:bg-red-600 ease-in duration-200">
                      Read more!
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;

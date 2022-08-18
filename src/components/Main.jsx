import React, { useState, useEffect } from "react";
import axios from "axios";

import { Watch } from "react-loader-spinner";

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
      <div className=" w-full h-screen pt-5">
        <div>
          <h3 className="text-2xl font-serif font-semibold w-full bg-white text-center shadow-xl px-2 py-2">
            Today's News
          </h3>
          <div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center py-8 pb-2">
              {loading ? (
                <Watch color="#242F9B" height={180} width={180} />
              ) : (
                data?.map((data, index) => (
                  <div
                    key={index}
                    className="m-5 shadow-md shadow-[#040c16] hover:scale-105 duration-300 bg-[#03568E] rounded-3xl pt-4 text-white"
                  >
                    <img src={data.images[0]?.url} alt="/" className="px-4" />
                    <p className="px-4 py-4">{data.description}</p>
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

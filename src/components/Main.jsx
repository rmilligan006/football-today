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
          <h3 className="text-2xl underline-red text-center pt-5">
            Today's News
          </h3>
          <div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12 text-center py-8 pb-2">
              {loading ? (
                <Watch color="#242F9B" height={180} width={180} />
              ) : (
                data?.map((data, index) => (
                  <div key={index} className="m-5 bg-white px-5 py-5">
                    <img src={data.images[0]?.url} alt="/" className="" />
                    <p>{data.description}</p>
                    
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

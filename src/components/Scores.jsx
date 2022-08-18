import React, { useState, useEffect } from "react";
import axios from "axios";
import { Watch } from "react-loader-spinner";

const Scores = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios(
      "https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/scoreboard"
    )
      .then((res) => {
        console.log(res.data.events);
        setData(res.data.events);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);
  return (
    <div>
      <>
        <div className=" w-full flex flex-col items-center justify-center pt-5 ">
          <p className="text-5xl tracking-widest text-center">Upcoming Games</p>
          <img
            src="https://a.espncdn.com/i/leaguelogos/soccer/500/23.png"
            alt="EPL Logo"
            className="w-[20%]"
          />
          <div>
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
                  data.map((data, index) => (
                    <div key={index} className="w-full">
                      <div className="m-5 bg-white px-5 py-5 text-center w-[60]">
                        <p className="text-2xl tracking-widest">{data.name}</p>

                        <p className="tracking-widest pt-5">{data.date}</p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Scores;

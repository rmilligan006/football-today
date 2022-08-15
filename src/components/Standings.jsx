import React, { useState, useEffect } from "react";

import { Watch } from "react-loader-spinner";
import axios from "axios";

const Standings = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedLeague, setSelectedLeague] = useState("eng.1");
  const [selectedYear, setSelectedYear] = useState("2022");

  useEffect(() => {
    setLoading(true);
    axios(
      `https://api-football-standings.azharimm.site/leagues/${selectedLeague}/standings?season=${selectedYear}`
    )
      .then((res) => {
        console.log(res.data.data.standings);
        setData(res.data.data.standings);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [selectedLeague, selectedYear]);

  return (
    <div>
      <div className="text-center flex items-center justify-center flex-col m-5">
        <div className="bg-gray-100 p-2 rounded-xl shadow-xl">
          <p>
            Legend: W: Wins, L: Loss, Draw: D, P: Points GP: Games Played, F:
            Goals For, A: Goals Against
          </p>
        </div>
        {loading ? (
          <Watch
            color="#242F9B"
            height={180}
            width={180}
            className="flex items-center justify-center"
          />
        ) : (
          data?.map((data, index) => (
            <div key={index} className="m-5">
              <h1>
                <span>
                  {`${index + 1},`}
                  <img
                    src={data.team.logos[0]?.href}
                    alt="Team logos"
                    className="w-[175px]"
                  />
                </span>{" "}
                <div className="text-center">{data.team.displayName}</div>
                <div className="text-center">
                  {data.stats[0].shortDisplayName}: {data.stats[0].value}{" "}
                  {data.stats[1].shortDisplayName}: {data.stats[1].value}{" "}
                  {data.stats[2].shortDisplayName}: {data.stats[2].value}{" "}
                  {data.stats[6].shortDisplayName}: {data.stats[6].value}
                </div>
                <div>
                  <h4>Team Stats:</h4>
                  {data.stats[3].shortDisplayName}: {data.stats[3].value}{" "}
                  {data.stats[4].shortDisplayName}: {data.stats[4].value}{" "}
                  {data.stats[5].shortDisplayName}: {data.stats[5].value}
                </div>
              </h1>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
export default Standings;

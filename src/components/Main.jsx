import React from "react";

import Carousel from "./Carousel";

import NewsTicker, { Directions } from "react-advanced-news-ticker";

const Main = () => {
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
        <h3 className="text-2xl underline-red">Today's News</h3>
      </div>
    </>
  );
};

export default Main;

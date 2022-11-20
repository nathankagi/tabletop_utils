import React, { Fragment, useState } from "react";
import { FiPlusCircle } from "react-icons/fi";

// components
import Card from "./components/Card";
import Tracker from "./components/Tracker";

function App() {
  let [cards, setCards] = useState([]);

  return (
    <Fragment>
      <div className="container">
        <div className="flex w-screen h-screen">
          <Tracker></Tracker>
          <div className="flex flex-row">
            <div className="h-screen w-10">
              <div
                className="flex items-center justify-center h-8 w-8 m-2 shadow-lg bg-white text-slate-800 hover:bg-slate-800 hover:text-white
          rounded-3xl transition-all duration-300 ease-in"
                onClick={() => {
                  return console.log("add card");
                }}
              >
                {<FiPlusCircle size={22}></FiPlusCircle>}
              </div>
            </div>
            <div className="flex flex-wrap m-2 p-2">
              <Card name="test"></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;

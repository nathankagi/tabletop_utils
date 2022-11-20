import React, { Fragment, useState } from "react";
import { FiPlusCircle } from "react-icons/fi";

// components
import Card from "./components/Card";
import Tracker from "./components/Tracker";

function App() {
  return (
    <Fragment>
      <div className="container">
        <div className="flex w-screen h-screen">
          <Tracker></Tracker>
          <CardManager>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </CardManager>
        </div>
      </div>
    </Fragment>
  );
}

let CardManager = () => {
  let [cards, setCards] = useState([]);

  return (
    <>
      <div className="h-20 w-screen">
        <div
          className="flex items-center justify-center h-8 w-8 m-2 shadow-lg bg-white text-slate-800 hover:bg-slate-800 hover:text-white
          rounded-3xl transition-all duration-300 ease-in"
          onClick={() => {
            return console.log("add card");
          }}
        >
          {<FiPlusCircle size={26}></FiPlusCircle>}
        </div>
      </div>
      <div className="flex flex-wrap m-2 p-10">
        {cards.map((card) => {
          <Card key={card}></Card>;
        })}
      </div>
    </>
  );
};

export default App;

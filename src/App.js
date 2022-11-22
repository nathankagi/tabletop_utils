import React, { Fragment, useState } from "react";
import { FiPlusCircle } from "react-icons/fi";

// components
import Card from "./components/Card";
import Tracker from "./components/Tracker";

function App() {
  let [cards, setCards] = useState([]);

  return (
    <Fragment>
      <div className="flex flex-row">
        <Tracker></Tracker>
        <div
          className="flex flex-none items-center justify-center h-8 w-8 m-2 shadow-lg bg-white text-slate-800 hover:bg-slate-800 hover:text-white
          rounded-3xl transition-all duration-300 ease-in"
          onClick={() => {
            setCards([...cards, 1]);
            console.log(cards);
          }}
        >
          {<FiPlusCircle size={22}></FiPlusCircle>}
        </div>
        <div className="flex flex-wrap" style={{ height: "fit-content" }}>
          {cards.map((id) => (
            <Card id={id}></Card>
          ))}
        </div>
      </div>
    </Fragment>
  );
}

export default App;

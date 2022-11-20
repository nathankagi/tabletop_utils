import React, { Fragment, useState } from "react";

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
      <div className="h-10 w-screen">
        <button
          className="p-4"
          onClick={() => {
            return console.log("add card");
          }}
        >
          Add Card
        </button>
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

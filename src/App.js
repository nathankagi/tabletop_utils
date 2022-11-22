import React, { Fragment, useState } from "react";
import { FiPlusCircle, FiTrash2 } from "react-icons/fi";

let nextId = 0;

function App() {
  const [cards, setCards] = useState([]);

  return (
    <Fragment>
      <div className="flex flex-row">
        <Tracker></Tracker>
        <div
          className="icon"
          onClick={() => {
            setCards([
              ...cards,
              { id: nextId++, health: 0, initiative: 0, ac: 0 },
            ]);
          }}
        >
          {<FiPlusCircle size={22}></FiPlusCircle>}
        </div>
        <div className="flex flex-wrap" style={{ height: "fit-content" }}>
          {cards.map((c) => (c ? <Card {...c}></Card> : <></>))}
        </div>
      </div>
    </Fragment>
  );
}

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.handlePropChange = this.handlePropChange.bind(this);
    this.state = { health: "", initiative: "", ac: "" };
  }

  handlePropChange(health) {
    this.setState({ health });
  }

  render() {
    const health = this.state.health;
    return (
      <div className="card">
        <div className="flex flex-row m-2">
          <input className="grow mx-4" defaultValue={this.props.name}></input>
          <div onClick={() => console.log("hello")}>{<FiTrash2 />}</div>
        </div>
        <div className="flex flex-row p-2">
          <Stat
            name="Health"
            value={health}
            onPropChange={this.handlePropChange}
          ></Stat>
          <Stat name="Initiative"></Stat>
          <Stat name="AC"></Stat>
        </div>
      </div>
    );
  }
}

class Stat extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { value: "" };
  }

  handleChange(e) {
    this.props.onPropChange({ value: e.target.value });
  }

  render() {
    const value = this.props.value;
    return (
      <div className="flex flex-col m-2 shadow-sm border-2 border-black">
        <div className="h-4 text-center">{this.props.name}</div>
        <input
          className="w-12 m-2 text-center"
          onChange={this.handleChange}
          value={value}
        ></input>
      </div>
    );
  }
}

function Tracker({ props }) {
  return (
    <div className="tracker">
      <ActiveCard></ActiveCard>
      <TrackerMenuBar></TrackerMenuBar>
      <CardTracker></CardTracker>
    </div>
  );
}

// Top component to display active card
let ActiveCard = ({ props }) => {
  return <>ACTIVE COMPONENT</>;
};

// Menu for controlling tracker
let TrackerMenuBar = () => {
  return (
    <>
      <div>TRACKER MENU BAR</div>
    </>
  );
};

// Ordered list of components
let CardTracker = () => {
  return <>LIST</>;
};

export default App;

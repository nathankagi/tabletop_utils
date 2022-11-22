import { FiMenu } from "react-icons/fi";

const Card = ({ name = "Name", ...props }) => {
  return (
    <div className="card">
      <div className="flex flex-row m-2">
        <input className="grow mx-4" defaultValue={name}></input>
        <div
          onClick={() => {
            return console.log("card menu");
          }}
        >
          {<FiMenu />}
        </div>
      </div>
      <div className="flex flex-row p-2">
        <Stat name="Health"></Stat>
        <Stat name="AC"></Stat>
        <Stat name="Initiative"></Stat>
      </div>
    </div>
  );
};

let Stat = ({ name }) => {
  return (
    <>
      <div className="flex flex-col m-2 shadow-sm border-2 border-black">
        <h1 className="h-4 text-center">{name}</h1>
        <input className="w-12 m-2 text-center"></input>
      </div>
    </>
  );
};

export default Card;

import { FiTrash2 } from "react-icons/fi";

const Card = ({ name = "Name", ...props }) => {
  return (
    <div className="card" onClick={() => console.log({ props })}>
      <div className="flex flex-row m-2">
        <input className="grow mx-4" defaultValue={name}></input>
        <div onClick={() => console.log("hello")}>{<FiTrash2 />}</div>
      </div>
      <div className="flex flex-row p-2">
        <Stat name="Health"></Stat>
        <Stat name="AC"></Stat>
        <Stat name="Initiative"></Stat>
      </div>
    </div>
  );
};

const Stat = ({ name, ...props }) => {
  return (
    <>
      <div className="flex flex-col m-2 shadow-sm border-2 border-black">
        <h1 className="h-4 text-center">{name}</h1>
        <input
          className="w-12 m-2 text-center"
          onChange={(e) => console.log(e.target.value)}
        ></input>
      </div>
    </>
  );
};

export default Card;

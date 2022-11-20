const Card = ({ name = "Name", ...props }) => {
  return (
    <div className="card" onClick={CardClick}>
      <div className="m-2">{name ? name : ""}</div>
      <div className="flex flex-row p-2">
        <input className="w-10 m-2"></input>
        <input className="w-10 m-2"></input>
        <input className="w-10 m-2"></input>
      </div>
    </div>
  );
};

let CardClick = () => {
  console.log("name");
};

export default Card;

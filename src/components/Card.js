const Card = ({ props }) => {
  return (
    <div className="card" onClick={CardClick}>
      Card
    </div>
  );
};

let CardClick = () => {
  console.log("card");
};

export default Card;

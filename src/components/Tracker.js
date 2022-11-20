function Tracker({ props }) {
  return (
    <div className="tracker">
      <ActiveCard></ActiveCard>
      <TrackerMenuBar></TrackerMenuBar>
    </div>
  );
}

// Top component to display active card
let ActiveCard = ({ props }) => {
  return <>ACTIVE COMPONENT</>;
};

// menu for controlling tracker
let TrackerMenuBar = () => {
  return (
    <>
      <div>TRACKER MENU BAR</div>
    </>
  );
};

// Ordered list of components
let CardTracker = () => {
  return <></>;
};

export default Tracker;

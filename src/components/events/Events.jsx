import SectionHeader from "../SectionHeader";
import EventBox from "./EventBox";

const getEvents = async () => {
  const res = await fetch("https://all-data-yuu4.onrender.com/events");
  return res.json();
};

const Events = async () => {
  const events = await getEvents();
  return (
    <section className="section" id="tours">
      <div className="container mx-auto">
        <SectionHeader pretitle="World Tour" title="UpComing Events" />
        {/* event box */}
        <EventBox events={events} />
      </div>
    </section>
  );
};

export default Events;

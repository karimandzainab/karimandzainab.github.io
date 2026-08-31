import { useState } from "react";

import "./App.css";

import InvitationCover from "./components/InvitationCover";
import Countdown from "./components/Countdown";
import Story from "./components/Story";
import WeddingDetails from "./components/WeddingDetails";

function App() {

  const [invitationOpened, setInvitationOpened] = useState(false);

  if (!invitationOpened) {
    return (
      <InvitationCover
        onOpen={() => setInvitationOpened(true)}
      />
    );
  }

  return (
    <div className="invitation">

      <section className="hero">

        <div className="hero-content">

          <p className="pre-title">
            OUR WEDDING DAY
          </p>

          <h1 className="couple">
            Karim
            <span>&</span>
            Zainab
          </h1>

          <div className="ornament">
            <span></span>
            <b>✦</b>
            <span></span>
          </div>

          <div className="date">
            <span className="day">
              11
            </span>

            <div className="month-year">
              <span>SEPTEMBER</span>
              <span>2026</span>
            </div>
          </div>

          <div className="time">
            7:00 PM
          </div>

          <div className="venue">
            ANDALUSIA VENUE
          </div>

        </div>

      </section>

      <Countdown />

      <Story />

      <WeddingDetails />

    </div>
  );
}

export default App;
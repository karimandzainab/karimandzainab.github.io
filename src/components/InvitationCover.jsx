function InvitationCover({ onOpen }) {
  return (
    <section className="invitation-cover">

      <div className="cover-border"></div>

      <div className="cover-decoration cover-top">
        ❦
      </div>

      <div className="cover-content">

        <p className="cover-intro">
          Join Us for the Wedding of
        </p>

        <div className="cover-ornament">
          <span></span>
          <b>✦</b>
          <span></span>
        </div>

        <h1>
          Karim
          <span>&</span>
          Zainab
        </h1>

        <p className="cover-date">
          11 • 09 • 2026
        </p>

        <p className="cover-venue">
          Andalusia Venue
        </p>

        <button
          className="open-invitation"
          onClick={onOpen}
        >
          Open Invitation
        </button>

      </div>

      <div className="cover-decoration cover-bottom">
        ❦
      </div>

    </section>
  );
}

export default InvitationCover;
function WeddingDetails() {
  return (
    <section className="details-section">
      <div className="section-container">
        <p className="section-label">THE CELEBRATION</p>

        <h2>Join us on our special day</h2>

        <div className="details-grid">
          <div className="detail-card">
            <div className="detail-icon">♡</div>
            <h3>Date</h3>
            <p>FRIDAY</p>
            <strong>September 11, 2026</strong>
          </div>

          <div className="detail-card">
            <div className="detail-icon">◷</div>
            <h3>Time</h3>
            <p>WEDDING CELEBRATION</p>
            <strong>7:00 PM</strong>
          </div>

          <div className="detail-card">
            <div className="detail-icon">⌖</div>
            <h3>Venue</h3>
            <p>WE WILL CELEBRATE AT</p>
            <strong>Andalusia Venue</strong>
          </div>
        </div>

        {/* LOCATION */}

        <div className="location-card">
          <div className="location-pin"></div>

          <div className="location-info">
            <p className="location-label">WEDDING LOCATION</p>

            <h3>Andalusia Venue</h3>

            <p>
              We can't wait to celebrate this special day
              with you.
            </p>
          </div>

          <a
            href="https://maps.app.goo.gl/e6F1WNEMqc2vmZsi6"
            target="_blank"
            rel="noopener noreferrer"
            className="directions-button"
          >
            <span>Get Directions</span>
            <span className="button-arrow">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default WeddingDetails;
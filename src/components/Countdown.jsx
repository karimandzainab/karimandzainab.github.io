import { useEffect, useState } from "react";

const WEDDING_DATE = new Date("2026-09-11T19:00:00");

function getTimeRemaining() {
  const difference = WEDDING_DATE.getTime() - Date.now();

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

function Countdown() {
  const [time, setTime] = useState(getTimeRemaining());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="countdown-section">
      <div className="section-container">
        <p className="section-label">THE BIG DAY</p>

        <h2>Counting down to forever</h2>

        <div className="countdown">
          <div className="countdown-item">
            <strong>{String(time.days).padStart(2, "0")}</strong>
            <span>Days</span>
          </div>

          <div className="countdown-separator">:</div>

          <div className="countdown-item">
            <strong>{String(time.hours).padStart(2, "0")}</strong>
            <span>Hours</span>
          </div>

          <div className="countdown-separator">:</div>

          <div className="countdown-item">
            <strong>{String(time.minutes).padStart(2, "0")}</strong>
            <span>Minutes</span>
          </div>

          <div className="countdown-separator">:</div>

          <div className="countdown-item">
            <strong>{String(time.seconds).padStart(2, "0")}</strong>
            <span>Seconds</span>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Countdown;
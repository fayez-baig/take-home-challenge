import "./jobs.css";
const Jobs = ({ title, create_time, subtitle, location, description }) => {
  return (
    <div className="column">
      <h2 className="job-card-title">{title}</h2>
      <p className="job-card-created-time">{create_time}</p>
      <p class="job-card-subtitle__wrapper">
        <span className="job-card-subtitle">{subtitle}</span>
        <span className="job-card-location">
          &nbsp;&nbsp;&nbsp;&nbsp;
          {location}
        </span>
      </p>
      <p className="job-card-description">
        {description}
        <button type="button" className="arrow-btn">
          &#62;
        </button>{" "}
      </p>
    </div>
  );
};
export default Jobs;

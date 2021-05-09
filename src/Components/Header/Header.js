import "./header.css";

const Header = () => {
  return (
    <div className="banner">
      <div className="banner-wrapper">
        <h1 className="banner-title">Juniors make IT work.</h1>
        <p className="banner-subtitle">
          Hire and invest in highly skilled juniors now.
        </p>
        <button type="button" className="banner-btn">
          Post Offer Now
        </button>
      </div>
    </div>
  );
};

export default Header;

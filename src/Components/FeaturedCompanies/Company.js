import BriefcaseIcon from "../../assets/img/icon-briefcase.svg";
const Company = ({ name }) => {
  return (
    <div className="company__wrapper">
      <div className="company-icon-box">
        <img
          className="company-icon"
          src={BriefcaseIcon}
          alt="Briefcase Icon"
        />
      </div>
      <div className="company-title">{name}</div>
    </div>
  );
};
export default Company;

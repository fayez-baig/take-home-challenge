import Company from "./Company";
import "./featuredCompany.css";

const FeaturedCompanies = () => {
  const companies = [
    "Grand Parade",
    "Seargin",
    "DEX Ventures",
    "NBC",
    "SVT SP Zoo",
    "DG Tech",
    "PickSaaS",
    "BlackRose",
    "BlackRose",
  ];
  return (
    <div className="featured-section">
      <h1 className="featured-companies-title">Featured Companies</h1>
      <div className="com">
        {companies.map((item) => (
          <Company name={item} />
        ))}
      </div>
    </div>
  );
};
export default FeaturedCompanies;

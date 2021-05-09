import { useState } from "react";
import Jobs from "./Jobs/Jobs";
import "./jobOffer.css";
const JobOffer = () => {
  const [jobs] = useState([
    {
      title: "Junior Java Developer",
      create_time: "2 hours ago",
      subtitle: "PickSaaS",
      location: "Wrclaw, Polska",
      description: (
        <>
          I am currently looking for a Java Developer. Project for Public Sector
          Location: Wrocław (during the pandemic remote work){" "}
          <span>$ up to PLN 550 net / MD B2B</span>
        </>
      ),
    },
    {},
    {
      title: "Junior Project Manager",
      create_time: "3 hours ago",
      subtitle: "Frontkom",
      location: "Lublin, Polska",
      description:
        "Join us in the Lublin office to build innovative long-term projects. Exciting international clients and partners and a work environment focused on learning and growth awaits you!",
    },
    {},
    {
      title: "Junior Project Manager",
      create_time: "1 day ago",
      subtitle: "Fontkom",
      location: "Lublin, Polska",
      description: (
        <>
          I am currently looking for a Java Developer. Project for Public Sector
          Location: Wrocław (during the pandemic remote work)
          <span> $ up to PLN 550 net / MD B2B</span>
        </>
      ),
    },
  ]);

  return (
    <div className="job-offer">
      <div className="job-offer__wrapper">
        <div className="job-offer__left">Newest Job Offers</div>
        <div className="job-offer__right">View all job offers ➜</div>
      </div>
      <div className="row">
        {jobs.map((job, index) => {
          if (Object.keys(job).length)
            return <Jobs key={`${index}${job.create_time}`} {...job} />;
          else return <div className="border"></div>;
        })}
      </div>
    </div>
  );
};
export default JobOffer;

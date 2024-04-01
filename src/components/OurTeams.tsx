import TeamsImg1 from "../assets/images/team1.jpg";
import TeamsImg2 from "../assets/images/team2.jpg";
import TeamsImg3 from "../assets/images/team3.jpg";
import TeamsImg4 from "../assets/images/team4.jpg";
import TeamsImg5 from "../assets/images/team5.jpg";
import TeamsImg6 from "../assets/images/team6.jpg";
import TeamsImg7 from "../assets/images/team7.jpg";
import TeamsImg8 from "../assets/images/team8.jpg";
import SectionHeader from "./SectionHeader";

const OurTeams = () => {
  const workTeam = [
    {
      id: 1,
      img: TeamsImg1,
      name: "Fred Hanks",
      role: "CEO",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      id: 2,
      img: TeamsImg2,
      name: "Tom Cruise",
      role: "Manager",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      id: 3,
      img: TeamsImg3,
      name: "Hannah Han",
      role: "Director",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      id: 4,
      img: TeamsImg4,
      name: "Matt Damon",
      role: "Designer",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      id: 5,
      img: TeamsImg5,
      name: "Zara Smith",
      role: "Developer",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      id: 6,
      img: TeamsImg6,
      name: "Nancy Drew",
      role: "Developer",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      id: 7,
      img: TeamsImg7,
      name: "Sara Johnson",
      role: "Front-End Developer",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      id: 8,
      img: TeamsImg8,
      name: "Greg Banson",
      role: "Designer",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    }
  ];

  return (
    <>
      <section className="container" id="teams">
        <SectionHeader title="OUR TEAMS" subtitle="-Meet our team-" />
        <div className="row text-center justify-content-center">
          {workTeam.map((team, id) => {
            return (
              <div
                className={`card col-8 col-sm-4 col-md-3 col-lg-2 text-start mb-5 p-0 border-0 mx-4`}
                key={id}
              >
                <img src={team.img} className="card-img-top img-fluid"></img>
                <div className="card-body">
                  <h5 className="card-title m-0">{team.name}</h5>
                  <span>
                    <i>{team.role}</i>
                  </span>
                  <p className="card-text">{team.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default OurTeams;

import AboutImg from "../assets/images/img1.jpg";
import SectionHeader from "./SectionHeader";

const About = () => {
  const ProgressBars = [
    {
      id: 1,
      title: "HTML / CSS / JAVASCRIPT",
      percentage: "55%"
    },
    {
      id: 2,
      title: "RESPONSIVE",
      percentage: "27%"
    },
    {
      id: 3,
      title: "PHOTOSHOP",
      percentage: "34%"
    }
  ];

  return (
    <>
      <section className="container mb-5 pb-5" id="about">
        <SectionHeader title="ABOUT US" subtitle="-Learn more about us-" />
        <div className="row text-center justify-content-center">
          <div className="col-12 col-lg-5">
            <img className="img-fluid" src={AboutImg} />
          </div>
          <div className="col-12 col-lg-5">
            <p className="text-start">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Architecto quibusdam, assumenda ipsa vel placeat mollitia vero
              facilis laborum eius nostrum qui eaque corporis et quaerat commodi
              lorem5
            </p>
            <p className="text-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              repellat a illum odit rerum, quaerat necessitatibus, deleniti eius
              alias, incidunt mollitia voluptatibus obcaecati. Non harum fuga
              voluptas, odit exercitationem veritatis!
            </p>
            {/* Progress Bars */}
            {ProgressBars.map((progress, id) => {
              return (
                <div>
                  <p className="text-start ps-1 pb-0 mb-1">{progress.title}</p>
                  <div
                    key={id}
                    className="progress"
                    role="progressbar"
                    aria-label="Danger example"
                    aria-valuenow={100}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="progress-bar"
                      style={{
                        width: progress.percentage,
                        background: "orange"
                      }}
                    >
                      {progress.percentage}
                    </div>
                  </div>
                </div>
              );
            })}
            {/*  */}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

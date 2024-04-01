import Img1 from "../assets/images/img1.jpg";
import Img2 from "../assets/images/img2.jpg";
import Img3 from "../assets/images/img3.jpg";
import Img4 from "../assets/images/img4.jpg";
import Img5 from "../assets/images/img5.jpg";
import Img6 from "../assets/images/img6.jpg";
import Img7 from "../assets/images/img7.jpg";
import Img8 from "../assets/images/img8.jpg";
import Img9 from "../assets/images/img9.jpg";
import SectionHeader from "./SectionHeader";

import styles from "./OurWorks.module.css"; // Import the CSS Module

const OurWorks = () => {
  const works = [
    { id: 1, img: Img1, title: "Study Hard" },
    { id: 2, img: Img2, title: "Work Hard" },
    { id: 3, img: Img3, title: "Play Hard" },
    { id: 4, img: Img4, title: "Join Us" },
    { id: 5, img: Img5, title: "Learn and grow" },
    { id: 6, img: Img6, title: "Play hard" },
    { id: 7, img: Img7, title: "Lorem" },
    { id: 8, img: Img8, title: "Work and work" },
    { id: 9, img: Img9, title: "Don't stop" }
  ];

  return (
    <section className={styles.background} id="works">
      <div className={`container ${styles.background}`}>
        <SectionHeader title="OUR WORKS" subtitle="-Some of our works-" />
        <div className="row d-flex justify-content-center">
          <div className="image-container text-center col-12 col-lg-10">
            <div className="row d-flex justify-content-center">
              {/* works array of objects */}
              {works.map((work, id) => {
                return (
                  <div className="col-lg-4 col-md-6 col-sm-12" key={id}>
                    <div className="container d-flex justify-content-center  pb-5">
                      <div className={styles.card}>
                        <img
                          className={styles["card-img img-fluid"]}
                          src={work.img}
                          style={{ width: "300px", height: "200px" }}
                          alt=""
                        />
                        <div
                          className={
                            styles["card-img-overlay"] +
                            " d-flex align-items-center justify-content-center"
                          }
                        >
                          <h5 className="card-title text-white text-center my-3 fs-5">
                            {work.title}
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWorks;

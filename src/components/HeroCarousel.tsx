import heroImg1 from "../assets/images/img-hero1.jpg";
import heroImg2 from "../assets/images/img-hero2.jpg";
import heroImg3 from "../assets/images/img-hero3.jpg";

const HeroCarousel = () => {
  const carouselItems = [
    {
      id: 1,
      img: heroImg1,
      title: "The perfect design for your website",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero necessitatibus est tenetur modi, ducimus dignissimos sunt odit magnam nobis veniam!"
    },
    {
      id: 2,
      img: heroImg2,
      title: "Start your future financial plan",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed commodi quo ipsa ullam quos. Non."
    },
    {
      id: 3,
      img: heroImg3,
      title: "Enjoy the difference",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis unde, quo magnam dolores corrupti tempora?"
    }
  ];

  const carouselIndicators = [
    {
      id: 1,
      slideTo: 0,
      current: true,
      label: "Slide 1"
    },
    {
      id: 2,
      slideTo: 1,
      current: false,
      label: "Slide 2"
    },
    {
      id: 3,
      slideTo: 2,
      current: false,
      label: "Slide 3"
    }
  ];

  return (
    <section id="#home" className="hero-block">
      <div id="carouselExampleCaptions" className="carousel slide">
        {/* Carousel Indicators */}
        <div className="carousel-indicators">
          {carouselIndicators.map((indicator, id) => {
            return (
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to={indicator.slideTo}
                className={`${indicator.current ? "active" : ""}`}
                aria-current={indicator.current}
                aria-label={indicator.label}
                key={id}
              ></button>
            );
          })}
        </div>
        {/*  */}
        {/* Carousel Items */}
        <div className="carousel-inner">
          {carouselItems.map((item, id) => {
            return (
              <div
                className={`carousel-item ${id === 0 ? "active" : ""}`}
                key={id}
              >
                <div style={{ position: "relative" }}>
                  <img
                    src={item.img}
                    className="d-block w-100 img-fluid"
                    style={{ position: "relative" }}
                  />
                  <div
                    style={{
                      background: "rgba(0,0,0,0.7)",
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%"
                    }}
                  />
                </div>
                <div className="carousel-caption d-flex h-100 align-items-center justify-content-center flex-column pt-4 pt-lg-5">
                  <h5 className="display-4">{item.title}</h5>
                  <p className="mt-4 w-100 text-center fs-xxl-3 fs-xl-3 fs-lg-3 fs-md-2 fs-sm-2 pb-0 pb-sm-1 pb-md-1 pb-lg-5 d-md-block d-none">
                    {item.content}
                  </p>
                  <button
                    type="button"
                    className="btn btn-primary text-white fs-5 px-5 py-2 d-md-block d-none"
                    style={{ background: "orange", border: "none" }}
                  >
                    Learn more
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        {/*  */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default HeroCarousel;

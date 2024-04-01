import Testimonial1 from "../assets/images/bg-testimonial.jpg";
import SectionHeader from "./SectionHeader";

const ClientTestimonials = () => {
  const ClientTestimonials = [
    {
      id: 1,
      name: "Rocky Johnson",
      position: "CEO",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam aut perspiciatis maxime consequatur quos porro dolorum provident nostrum deleniti neque, debitis assumenda consequuntur doloribus minima quam? Esse corporis quibusdam totam?"
    },
    {
      id: 2,
      name: "Matt Stonie",
      position: "Developer",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam perferendis ex explicabo autem, similique dolore quas, laudantium voluptate maxime earum esse id nobis natus. Necessitatibus suscipit corporis odit."
    },
    {
      id: 3,
      name: "Greg Doucette",
      position: "Designer",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ipsum itaque corporis sequi recusandae repellat nulla amet, animi ipsam. Deserunt architecto adipisci consequatur voluptas aut!"
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
    <>
      <section className="container-fluid p-0" id="testimonials">
        <SectionHeader title="CLIENT TESTIMONIALS" />
        <div className="row mb-3">
          <div id="carouselExampleCaptions2" className="carousel slide">
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
            {/* Client Testimonials */}
            <div className="carousel-inner ">
              {ClientTestimonials.map((item, id) => {
                return (
                  <div
                    className={`carousel-item ${id === 0 ? "active" : ""}`}
                    key={id}
                  >
                    <img
                      src={Testimonial1}
                      className="d-block w-100"
                      style={{ height: "350px", objectFit: "cover" }}
                    ></img>
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
                    <div className="carousel-caption d-flex h-100 align-items-center justify-content-center flex-column pt-5">
                      <h5 className="d-none d-sm-block">CLIENT TESTIMONIALS</h5>
                      <p className="text-secondary d-none d-md-block">
                        -What clients say about us-
                      </p>
                      <p>{item.description}</p>
                      <p className="d-none d-sm-block">- {item.name}</p>
                      <p className="d-none d-md-block">{item.position}</p>
                    </div>
                  </div>
                );
              })}
              {/*  */}

              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions2"
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
                data-bs-target="#carouselExampleCaptions2"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ClientTestimonials;

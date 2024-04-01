import SectionHeader from "./SectionHeader";

const OurServices = () => {
  const services = [
    {
      id: 1,
      title: "Responsive Design",
      icon: "bi bi-chat-left-dots-fill",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
      id: 2,
      title: "Creative Design",
      icon: "bi bi-snow3",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
      id: 3,
      title: "SEO Optimized",
      icon: "bi bi-usb-symbol",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
      id: 4,
      title: "Retina Ready",
      icon: "bi bi-display-fill",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
      id: 5,
      title: "Browser Compatibility",
      icon: "bi bi-trophy-fill",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
      id: 6,
      title: "Customer Support",
      icon: "bi bi-person-fill-check",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content."
    }
  ];

  return (
    <>
      <section className="container mb-5 pb-5" id="services">
        <SectionHeader title="OUR SERVICES" subtitle="-Services we provide-" />
        <div className="mx-auto">
          <div className="grid-container col-12 d-flex justify-content-center">
            <div className="row d-flex justify-content-center gap-4 col-lg-10">
              {/*  */}
              {services.map((service, id) => {
                return (
                  <div
                    key={id}
                    className="card text-start"
                    style={{ width: "18rem" }}
                  >
                    <div className="card-body">
                      <i
                        className={service.icon}
                        style={{ color: "orange" }}
                      ></i>
                      <h5 className="card-title pt-2">{service.title}</h5>
                      <p className="card-text">{service.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            {/*  */}
          </div>
        </div>
      </section>
    </>
  );
};

export default OurServices;

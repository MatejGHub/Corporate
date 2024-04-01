import SectionHeader from "./SectionHeader";

const ContactUs = () => {
  const contactInfo = [
    {
      id: 1,
      icon: "bi bi-envelope-fill",
      text: "hello@domain.com"
    },
    {
      id: 2,
      icon: "bi bi-telephone-fill",
      text: "000-000-000"
    },
    {
      id: 3,
      icon: "bi bi-geo-alt-fill",
      text: "Skofja Loka, Slovenia"
    }
  ];

  return (
    <>
      <section className="container-fluid pb-5" id="contact">
        {/* Title */}
        <SectionHeader title="CONTACT US" subtitle="-Get conntected with us-" />
        {/* Input Form */}
        <div className="row justify-content-center">
          <form className="col-12 col-md-10 col-lg-8 text-center mb-5 pb-5 d-flex flex-column p-0 m-0">
            <div className="mb-3 d-flex col-12 g-2 gap-3 justify-content-center">
              <input
                type="text"
                className="form-control"
                id="InputName"
                aria-describedby="InputName"
                placeholder="Enter your full name"
              ></input>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter your email address"
              ></input>

              <input
                type="text"
                className="form-control"
                id="InputNumber"
                aria-describedby="InputPhoneNumber"
                placeholder="Enter your contact number"
              ></input>
            </div>
            <div>
              <textarea
                className="w-100 rounded-2"
                name=""
                id=""
                cols={20}
                rows={8}
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn px-4 py-2 fs-6"
              style={{ background: "orange", color: "white" }}
            >
              Submit
            </button>
          </form>
        </div>

        {/* Google Maps */}
        <div className="google-map mb-5">
          <iframe
            title="Google Maps Embed API"
            className="w-100"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d345.3954385285583!2d14.30599738368626!3d46.16740078984995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477ac7f5d51d5d25%3A0xbd992fce0d6b5ec6!2zZUtPTE9rYSDigJjFoHRlbWFyamXigJkgKEJpa2UgU2hhcmluZyk!5e0!3m2!1ssl!2ssi!4v1711913657565!5m2!1ssl!2ssi"
            loading="lazy"
            style={{ height: "450px" }}
          ></iframe>
        </div>
        {/* Contact Information */}

        <div className="row w-100 justify-content-center align-items-center">
          <ul className="d-flex flex-column flex-md-row w-100 justify-content-center gap-5 g-5 col-12 text-center">
            {contactInfo.map((contact, id) => {
              return (
                <li
                  className="list d-flex flex-column text-center align-items-center col-12 col-md-2"
                  key={id}
                >
                  <i
                    className={contact.icon}
                    style={{ color: "orange", fontSize: "30px" }}
                  ></i>
                  <p className="fs-5">{contact.text}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default ContactUs;

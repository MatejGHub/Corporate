const Footer = () => {
  return (
    <>
      <section
        className="container-fluid py-5 justify-content-center align-items-center d-flex flex-column"
        style={{ backgroundColor: "orange" }}
      >
        <p style={{ color: "white" }}>@ 2022 Corporate. All rights reserved.</p>
        <div className="icons fs-4">
          <a href="www.facebook.com" style={{ color: "white" }}>
            <i className="bi bi-facebook mx-2"></i>
          </a>
          <a href="www.twitter.com" style={{ color: "white" }}>
            <i className="bi bi-twitter mx-2"></i>
          </a>
          <a href="www.instagram.com" style={{ color: "white" }}>
            <i className="bi bi-instagram mx-2"></i>
          </a>
          <a href="www.linkedin.com" style={{ color: "white" }}>
            <i className="bi bi-linkedin mx-2"></i>
          </a>
        </div>
      </section>
    </>
  );
};

export default Footer;

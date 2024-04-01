import styles from "./NavBar.module.css";

const NavBar = () => {
  const navItems = [
    {
      id: 1,
      title: "Home",
      link: "#home"
    },
    {
      id: 2,
      title: "About",
      link: "#about"
    },
    {
      id: 3,
      title: "Services",
      link: "#services"
    },
    {
      id: 4,
      title: "Works",
      link: "#works"
    },
    {
      id: 5,
      title: "Teams",
      link: "#teams"
    },
    {
      id: 6,
      title: "Testimonials",
      link: "#testimonials"
    },
    {
      id: 7,
      title: "Pricing",
      link: "#pricing"
    },
    {
      id: 8,
      title: "Blog",
      link: "#blog"
    },
    {
      id: 9,
      title: "Contact",
      link: "#contact"
    }
  ];

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white">
        <div className="container">
          <a className={`navbar-brand fw-bold ${styles.navColor}`} href="#">
            Corporate
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {navItems.map((item, id) => {
                return (
                  <li className="nav-item" key={id}>
                    <a
                      className={`nav-link ${item.id === 1 ? "active" : ""}`}
                      aria-current="page"
                      href={item.link}
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;

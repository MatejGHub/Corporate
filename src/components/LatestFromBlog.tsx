import styles from "./LatestFromBlog.module.css";
import blog1 from "../assets/images/blog1.jpg";
import blog2 from "../assets/images/blog2.jpg";
import blog3 from "../assets/images/blog3.jpg";
import SectionHeader from "./SectionHeader";

const LatestFromBlog = () => {
  const blogs = [
    {
      id: 1,
      title: "Coffee Lovers",
      date: "15 Nov 2023",
      img: blog1,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et autem porro libero itaque saepe fuga?"
    },
    {
      id: 2,
      title: "Tips for UI design",
      date: "10 Nov 2023",
      img: blog2,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et autem porro libero itaque saepe fuga?"
    },
    {
      id: 3,
      title: "Beautiful day",
      date: "2 Nov 2023",
      img: blog3,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et autem porro libero itaque saepe fuga?"
    }
  ];

  return (
    <>
      <section
        className={`container-fluid justify-content-center ${styles.background}`}
        id="blog"
      >
        <SectionHeader title="LATEST FROM BLOG" subtitle="-Our blog-" />
        <div className="row justify-content-center mb-5 pb-5">
          {/* Blogs */}
          {blogs.map((blog) => {
            return (
              <div
                className={` col-12 col-lg-3  d-flex justify-content-center align-items-center`}
                key={blog.id}
              >
                <div
                  className={`${styles.background} card pt-2 ps-2 pe-2 mb-2 `}
                  style={{ width: "18rem" }}
                >
                  <img src={blog.img} className="card-img-top"></img>
                  <div className="card-body">
                    <p className="p-0 m-0 mb-2">{blog.date}</p>
                    <h5 className="card-title" style={{ color: "orange" }}>
                      {blog.title}
                    </h5>
                    <p className="card-text">{blog.content}</p>
                    <a
                      href="#"
                      className="btn"
                      style={{ background: "orange", color: "white" }}
                    >
                      Read More <i className="bi bi-caret-right-fill"></i>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
          {/*  */}
        </div>
      </section>
    </>
  );
};

export default LatestFromBlog;

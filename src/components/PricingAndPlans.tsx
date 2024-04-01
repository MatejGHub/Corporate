import styles from "./PricingAndPlans.module.css";
import SectionHeader from "./SectionHeader";
import PricingCard from "./PricingCard";

const PricingAndPlans = () => {
  return (
    <section className="container" id="pricing">
      <SectionHeader title="PRICING AND PLANS" subtitle="-Choose your plan-" />
      <div className="row w-100 d-flex align-items-center justify-content-center g-0 gap-0 mb-5 pb-5">
        <div
          className="col-12 col-sm-10 mb-5 mb-lg-0 col-lg-3 text-center order-1 order-lg-0"
          style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)" }}
        >
          {/* <PricingCard /> */}
          <PricingCard
            title="BASIC"
            price="49.99€"
            features={[
              { feature: "Wireframing", index: 0 },
              { feature: "Virtual Design", index: 1 },
              { feature: "5 pages", index: 2 },
              { feature: "Free hosting", index: 3 },
              { feature: "Support and Assistance", index: 4 }
            ]}
            buttonText="Order now"
          />
          {/*  */}
        </div>
        {/* Premium Pricing Card */}
        <div
          className="col-12 col-sm-10 mb-5 mb-lg-0 col-lg-3 text-center  order-0 order-lg-1"
          style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)" }}
        >
          <ul className="list-group rounded-0">
            <li
              className={`${styles.headerPremiumColor} list-group-item border-0`}
            >
              <p className=" pt-2 m-0 text-secondary fs-3">PREMIUM</p>
              <p className="pb-2 m-0 fw-bold fs-3">149.99€</p>
            </li>
            <li className={`${styles.listGroupColor} list-group-item border-0`}>
              Wireframing
            </li>
            <li className={`list-group-item border-0`}>Virtual Design</li>
            <li className={`${styles.listGroupColor} list-group-item border-0`}>
              15 pages
            </li>
            <li className={`list-group-item border-0`}>Free hosting</li>
            <li className={`${styles.listGroupColor} list-group-item border-0`}>
              Support and Assistance
            </li>
            <li className="list-group-item border-0">
              <button
                type="button"
                className="btn btn-primary text-white rounded-1 fs-5"
                style={{ background: "orange", border: "none" }}
              >
                Order now
              </button>
            </li>
          </ul>
        </div>
        <div
          className="col-12 col-sm-10 mb-5 mb-lg-0 col-lg-3 text-center order-2 order-lg-2"
          style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)" }}
        >
          {/*  */}
          {/* <PricingCard /> */}
          <PricingCard
            title="ELITE"
            price="99.99€"
            features={[
              { feature: "Wireframing", index: 0 },
              { feature: "Virtual Design", index: 1 },
              { feature: "10 pages", index: 2 },
              { feature: "Free hosting", index: 3 },
              { feature: "Support and Assistance", index: 4 }
            ]}
            buttonText="Order now"
          />
          {/*  */}
        </div>
      </div>
    </section>
  );
};

export default PricingAndPlans;

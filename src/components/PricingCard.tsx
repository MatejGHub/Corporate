import styles from "./PricingAndPlans.module.css";

const PricingCard = ({ title, price, features, buttonText }: any) => (
  <ul className="list-group rounded-0">
    <li className={`${styles.headerColor} list-group-item border-0`}>
      <p className="p-0 m-0 text-secondary fs-4">{title}</p>
      <p className="p-0 m-0 fw-bold fs-4">{price}</p>
    </li>
    {features.map(({ feature, index }: any) => (
      <li
        className={`${
          index % 2 === 0 ? styles.listGroupColor : ""
        } list-group-item border-0`}
        key={index}
      >
        {feature}
      </li>
    ))}
    <li className="list-group-item border-0 bg-transparent">
      <button
        type="button"
        className="btn btn-primary text-white rounded-1"
        style={{ background: "orange", border: "none" }}
      >
        {buttonText}
      </button>
    </li>
  </ul>
);

export default PricingCard;

const SectionHeader = ({ title, subtitle }: any) => (
  <div className="row m-0 p-0">
    <div className="col-12 text-center mt-5 mb-5">
      <h2 className="mb-1">{title}</h2>
      <div className="subtitle mt-1 text-secondary">{subtitle}</div>
    </div>
  </div>
);

export default SectionHeader;

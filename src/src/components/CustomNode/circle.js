import { Handle } from "reactflow";

const CustomNode = ({ data }) => {
  const { label, category, icon } = data;
  return (
    <div className="custom-node">
      <Handle type="target" position="left" />
      <div className="icon-container">
        {icon ? <img src={icon} alt={`${category} icon`} /> : null}
      </div>
      <div className="label">{label}</div>
      <Handle type="source" position="right" />
    </div>
  );
};

export default CustomNode;

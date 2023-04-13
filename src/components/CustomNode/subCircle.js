import { Handle, Position } from "reactflow";

const colorArray = ["#E86951", "#FBCF1D", "#22ADAC", "#60A62E"];

function Node() {
  return (
    <div
      className="subnode"
      style={{
        borderColor: `${
          colorArray[Math.floor(Math.random() * colorArray.length)]
        }`,
      }}
    >
      <p>Name</p>
      <Handle type="target" position={Position.Right} id="target-node" />
      <Handle type="source" position={Position.Left} id="source-node" />
    </div>
  );
}

export default Node;

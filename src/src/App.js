// import React, { useCallback } from "react";
// import ReactFlow, {
//   addEdge,
//   Background,
//   useNodesState,
//   useEdgesState,
//   MarkerType,
// } from "reactflow";
// import "reactflow/dist/style.css";

// import FloatingEdge from "./FloatingEdge.js";
// import FloatingConnectionLine from "./FloatingConnectionLine.js";
// import { createNodesAndEdges } from "./utils.js";

// import "./index.css";

// import NodeType from "./components/CustomNode/circle.js";
// import subCircle from "./components/CustomNode/subCircle.js";

// const { nodes: initialNodes, edges: initialEdges } = createNodesAndEdges();

// const edgeTypes = {
//   floating: FloatingEdge,
// };

// const nodeTypes = {
//   circle: NodeType,
//   subCircle: subCircle,
// };

// const NodeAsHandleFlow = () => {
//   const [nodes, , onNodesChange] = useNodesState(initialNodes);
//   const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

//   const onConnect = useCallback(
//     (params) =>
//       setEdges((eds) =>
//         addEdge(
//           {
//             ...params,
//             type: "floating",
//             markerEnd: { type: MarkerType.Arrow },
//           },
//           eds
//         )
//       ),
//     [setEdges]
//   );

//   return (
//     <div className="floatingedges">
//       <ReactFlow
//         nodes={nodes}
//         edges={edges}
//         onNodesChange={onNodesChange}
//         onEdgesChange={onEdgesChange}
//         onConnect={onConnect}
//         fitView
//         edgeTypes={edgeTypes}
//         connectionLineComponent={FloatingConnectionLine}
//         nodeTypes={nodeTypes}
//       >
//         <Background />
//       </ReactFlow>
//     </div>
//   );
// };

// export default NodeAsHandleFlow;

// import ReactFlow, { Background } from "reactflow";

// import "reactflow/dist/style.css";
// import "./index.css";

// import NodeType from "./components/CustomNode/Aboba.js";

// const nodeTypes = {
//   circle: NodeType,
// };

// const nodeName = [
//   "mister",
//   "twister",
//   "aboba",
//   "bober",
//   "aborigen",
//   "apelsin",
//   "aborigen2",
//   "apelsin 4",
// ];

// const initialNodes = [
//   {
//     id: "1",
//     position: { x: 0, y: 0 },
//     data: { label: "1" },
//     type: "circle",
//   },
//   {
//     id: "2",
//     position: { x: -200, y: -200 },
//     data: { label: "2" },
//     type: "circle",
//   },
//   {
//     id: "3",
//     position: { x: 200, y: -100 },
//     data: { label: "3" },
//     type: "circle",
//   },
//   {
//     id: "4",
//     position: { x: 200, y: 100 },
//     data: { label: "4" },
//     type: "circle",
//   },
//   {
//     id: "5",
//     position: { x: -200, y: 100 },
//     data: { label: "5" },
//     type: "circle",
//   },
// ];

// const initialEdges = [
//   { id: "e1-2", type: "straight", source: "1", target: "2" },
//   { id: "e1-3", type: "straight", source: "1", target: "3" },
//   { id: "e1-4", type: "straight", source: "1", target: "4" },
//   { id: "e1-5", type: "straight", source: "1", target: "5" },
// ];

// export default function App() {
//   return (
//     <div style={{ width: "100vw", height: "100vh" }}>
//       <ReactFlow
//         nodes={initialNodes}
//         edges={initialEdges}
//         fitView
//         nodeTypes={nodeTypes}
//       >
//         <Background variant="dots" gap={36} size={2} />
//       </ReactFlow>
//     </div>
//   );
// }

import { useState , useCallback, useEffect } from "react";

import ReactFlow, { useNodesState, useEdgesState, Background, addEdge } from "reactflow";
import { getNodeType, categoryIcons, userIcon, colors } from "./NodeContainer";
import FloatingEdge from "./components/CustomEdge/floatingEdge";

import Sidebar from "./components/Sidebar";

import "reactflow/dist/style.css";
import circle from "./components/CustomNode/circle.js";

import cover from "./assets/cover.png";

  const nodeTypes = {
    circleNode: circle,
  };

  const edgeTypes = {
    floating: FloatingEdge,
  };

const App = () => {

  const [isLoading, setIsLoading] = useState(true)

  let icons = Object.keys(categoryIcons);

  let aboba = Object.values(colors);

  const zeroNode = {
    id: "ZeroNode",
    type: "circleNode",
    data: {},
    position: {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    },
    style: {
      backgroundImage: cover ? `url(${cover})` : `url(${userIcon})`,
    },
  };

  const nodesData = icons.map((node) => {
    const nodeType = getNodeType(node);
    return {
      id: node,
      type: "circleNode",
      position: {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      },
      data: nodeType.data,
      style: nodeType.style,
      targetPosition: nodeType.targetPosition,
      sourcePosition: nodeType.sourcePosition,
    };
  });

  let initialNodes = [zeroNode, ...nodesData];

  const [nodesInfo, setNodesInfo, onNodesChange] = useNodesState(initialNodes);
  const edges = icons.map((item, index) => {
    return {
      id: `edge-${index}`,
      source: "ZeroNode",
      target: item,
      type: "floating",
      style: {
        stroke: aboba[index],
      },
    };
  }
  );

  const [edgesInfo, setEdgesInfo, onEdgesChange] = useEdgesState(edges)

  useEffect(() => {
    setEdgesInfo(edgesInfo)
    setNodesInfo(nodesInfo)
    setIsLoading(false)
  }, [])
  
 
  const onConnect = useCallback((params) => setEdgesInfo((eds) => addEdge(params, eds)), []);

  return (
    <div className="flow">
      {isLoading ? <h1>Hello</h1> : <>
      <ReactFlow
        nodes={nodesInfo}
        edges={edgesInfo}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        onConnect={onConnect}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
      >
        <Background variant="dots" gap={36} size={2} />
      </ReactFlow>

      <Sidebar />
      </>
      
      }
      
    </div>
  );
};

export default App;

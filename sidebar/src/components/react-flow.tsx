import { useCallback, useState } from "react";
import ReactFlow, {
  Node,
  addEdge,
  Edge,
  Connection,
  // ReactFlowProvider,
  applyNodeChanges,
  applyEdgeChanges,
} from "reactflow";
import type { OnConnect, OnEdgesChange, OnNodesChange } from "reactflow";

import CustomNode from "./custom-node";

import "reactflow/dist/style.css";

const initialNodes: Node[] = [
  {
    id: "1",
    type: "input",
    data: { label: "Node 1" },
    position: { x: 250, y: 5 }
  },
  { id: "2", data: { label: "Node 2" }, position: { x: 100, y: 100 } },
  { id: "3", data: { label: "Node 3" }, position: { x: 400, y: 100 } },
  {
    id: "4",
    type: "custom",
    data: { label: "Custom Node" },
    position: { x: 400, y: 200 }
  }
];

const initialEdges: Edge[] = [
  { id: "e1-2", source: "1", target: "2", animated: true },
  { id: "e1-3", source: "1", target: "3" }
];

const nodeTypes = {
  custom: CustomNode
};

const BasicFlow = () => {
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);
  const onNodesChange: OnNodesChange = (changes) => setNodes((nds) => applyNodeChanges(changes, nds));
  const onEdgesChange: OnEdgesChange = (changes) => setEdges((eds) => applyEdgeChanges(changes, eds));
  const onConnect:OnConnect = useCallback((connection: Connection) => setEdges((edges) => addEdge(connection, edges)),[setEdges]);

  return (
    <div className="providerflow" style={{ height: '70vh', width: '500px', backgroundColor: 'white' }}>
            <div className="reactflow-wrapper" style={{ height: '500px' }}>
            {/* <ReactFlowProvider> */}
                <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                nodeTypes={nodeTypes}
                fitView
                >
                </ReactFlow>
                {/* </ReactFlowProvider> */}
            </div>
    </div>
  );
};

export default BasicFlow;

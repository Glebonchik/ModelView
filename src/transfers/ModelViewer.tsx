
import React from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { ModelViewerProps } from "../interfaces/modelViewerProps";

const ModelViewer: React.FC<ModelViewerProps> = ({ url }) => {
  const gltf = useLoader(GLTFLoader, url);

  return <primitive object={gltf.scene} dispose={null} />;
};

export default ModelViewer;
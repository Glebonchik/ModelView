
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useLocation } from "react-router-dom";
import ModelViewer from "../transfers/ModelViewer";

const ViewModel = () => {
  const location = useLocation();
  const fileUrl = location.state?.fileUrl;

  if (!fileUrl) {
    return <div>Файл не найден</div>;
  }

  return (
    <div className="w-screen h-screen">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <ModelViewer url={fileUrl} />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default ViewModel;
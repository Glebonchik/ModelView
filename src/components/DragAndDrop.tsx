
import  { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useNavigate } from "react-router-dom";

const DragAndDrop = () => {
  const navigate = useNavigate();

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0]; 

    if (file) {
      const fileUrl = URL.createObjectURL(file);
      navigate("/view-model", { state: { fileUrl } });
    }
  }, [navigate]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "model/gltf": [".gltf", ".glb"]
    },
  });

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-gray-100">
      <div
        {...getRootProps()}
        className="border-2 border-dashed border-gray-400 rounded-lg p-10 text-center cursor-pointer"
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Перетащите файл сюда...</p>
        ) : (
          <p>Перетащите файл сюда или кликните для выбора</p>
        )}
      </div>
    </div>
  );
};

export default DragAndDrop;
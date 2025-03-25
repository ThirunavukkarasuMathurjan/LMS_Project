import React, { useRef, useState, useEffect } from "react";
import { FaPen, FaEraser, FaPalette, FaMinus, FaPlus, FaTextHeight, FaCircle, FaSquare, FaSave, FaTimes } from "react-icons/fa";

const Whiteboard = ({ fullScreen, onClose }) => {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const [drawing, setDrawing] = useState(false);
  const [tool, setTool] = useState("pen");
  const [lineWidth, setLineWidth] = useState(4);
  const [color, setColor] = useState("#000000");
  const [text, setText] = useState("");
  const [shapes, setShapes] = useState([]);
  const [currentShape, setCurrentShape] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctxRef.current = ctx;

    // Ensure the canvas size is dynamic based on window size
    if (fullScreen) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    } else {
      canvas.width = 600;
      canvas.height = 400;
    }
  }, [fullScreen]);

  const startDrawing = (e) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = tool === "eraser" ? "#ffffff" : color;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    setDrawing(true);
  };

  const draw = (e) => {
    if (!drawing) return;
    const ctx = ctxRef.current;
    ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setDrawing(false);
    ctxRef.current.closePath();
  };

  const handleToolChange = (newTool) => {
    setTool(newTool);
  };

  const handleLineWidthChange = (increment) => {
    setLineWidth((prevSize) => (increment ? prevSize + 1 : prevSize - 1));
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const addText = (e) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.font = "30px Arial";
    ctx.fillStyle = color;
    ctx.fillText(text, e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    setText("");
  };

  const handleShapeChange = (shapeType) => {
    setCurrentShape(shapeType);
  };

  const drawShape = (e) => {
    if (!currentShape) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const startX = e.nativeEvent.offsetX;
    const startY = e.nativeEvent.offsetY;

    const size = 100; // default size for shapes

    ctx.beginPath();
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = color;

    if (currentShape === "circle") {
      ctx.arc(startX, startY, size, 0, Math.PI * 2);
    } else if (currentShape === "square") {
      ctx.rect(startX - size / 2, startY - size / 2, size, size);
    } else if (currentShape === "line") {
      ctx.moveTo(startX - size / 2, startY);
      ctx.lineTo(startX + size / 2, startY);
    }

    ctx.stroke();
    setShapes([...shapes, { type: currentShape, x: startX, y: startY, size }]);
    setCurrentShape(null);
  };

  const downloadWhiteboard = () => {
    const canvas = canvasRef.current;
    const imageUrl = canvas.toDataURL();
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = "whiteboard.png";
    link.click();
  };

  return (
    <div
      className={`${
        fullScreen ? "fixed top-0 left-0 right-0 bottom-0" : "p-4"
      } bg-white w-full h-full flex flex-col items-center justify-center relative`}
    >
      <div className="flex gap-4 mb-4 absolute top-4 left-4 z-10">
        <button onClick={() => handleToolChange("pen")} className="p-2 bg-gray-300 rounded-full shadow-lg hover:bg-gray-400 transition duration-300">
          <FaPen className="text-2xl text-black" />
        </button>
        <button onClick={() => handleToolChange("eraser")} className="p-2 bg-red-300 rounded-full shadow-lg hover:bg-red-400 transition duration-300">
          <FaEraser className="text-2xl text-white" />
        </button>
        <button onClick={() => handleToolChange("color")} className="p-2 bg-green-300 rounded-full shadow-lg hover:bg-green-400 transition duration-300">
          <FaPalette className="text-2xl text-white" />
        </button>
        <button onClick={() => handleToolChange("text")} className="p-2 bg-blue-300 rounded-full shadow-lg hover:bg-blue-400 transition duration-300">
          <FaTextHeight className="text-2xl text-white" />
        </button>
        <button onClick={() => handleShapeChange("circle")} className="p-2 bg-yellow-300 rounded-full shadow-lg hover:bg-yellow-400 transition duration-300">
          <FaCircle className="text-2xl text-black" />
        </button>
        <button onClick={() => handleShapeChange("square")} className="p-2 bg-orange-300 rounded-full shadow-lg hover:bg-orange-400 transition duration-300">
          <FaSquare className="text-2xl text-black" />
        </button>
        <button onClick={() => handleShapeChange("line")} className="p-2 bg-purple-300 rounded-full shadow-lg hover:bg-purple-400 transition duration-300">
          <FaMinus className="text-2xl text-black" />
        </button>
        <button onClick={() => handleLineWidthChange(true)} className="p-2 bg-blue-300 rounded-full shadow-lg hover:bg-blue-400 transition duration-300">
          <FaPlus className="text-2xl text-white" />
        </button>
        <button onClick={() => handleLineWidthChange(false)} className="p-2 bg-blue-300 rounded-full shadow-lg hover:bg-blue-400 transition duration-300">
          <FaMinus className="text-2xl text-white" />
        </button>
      </div>
      {tool === "color" && (
        <input type="color" value={color} onChange={(e) => setColor(e.target.value)} className="absolute top-20 left-4 z-10" />
      )}
      {tool === "text" && (
        <input
          type="text"
          value={text}
          onChange={handleTextChange}
          onBlur={addText}
          placeholder="Enter Text"
          className="absolute top-20 left-4 z-10 p-2 rounded"
        />
      )}
      <canvas
        ref={canvasRef}
        className="border bg-white"
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
        onClick={drawShape}
      />
      <div className="absolute bottom-4 right-4 z-10 flex gap-4">
        <button onClick={downloadWhiteboard} className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600">
          <FaSave className="text-xl" />
        </button>
        <button onClick={onClose} className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600">
          <FaTimes className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default Whiteboard;
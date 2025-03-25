import React, { useRef, useState } from "react";

const Whiteboard = () => {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const [drawing, setDrawing] = useState(false);
  const [tool, setTool] = useState("pencil");
  const [lineWidth, setLineWidth] = useState(2);
  const [color, setColor] = useState("#000000");

  const startDrawing = (e) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctxRef.current = ctx;

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

  return (
    <div className="p-4 bg-white w-full h-full">
      <div className="flex gap-4 mb-2">
        <button onClick={() => setTool("pencil")} className="px-4 py-1 bg-gray-300 rounded">
          Pencil
        </button>
        <button onClick={() => setTool("eraser")} className="px-4 py-1 bg-red-300 rounded">
          Eraser
        </button>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="border rounded"
        />
        <input
          type="range"
          min="1"
          max="10"
          value={lineWidth}
          onChange={(e) => setLineWidth(e.target.value)}
          className="border rounded"
        />
      </div>

      <canvas
        ref={canvasRef}
        width={800}
        height={500}
        className="border bg-gray-200"
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
      ></canvas>
    </div>
  );
};

export default Whiteboard;

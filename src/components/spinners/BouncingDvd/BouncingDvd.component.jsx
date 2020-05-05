import React, { useEffect, useState, useRef } from "react";
import { Container, CanvasContainer } from "./BouncingDvd.styles";
const BouncingDvd = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  useEffect(() => {
    let scale = 0.17;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const imgPath = "https://i.ibb.co/gj6cfG4/dvd-logo.png";
    const img = new Image();
    img.src = imgPath;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    img.onload = () => {
      ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    };
    // setTimeout(() => {
    //   setX((value) => value + 1);
    //   setY((value) => value + 1);
    // }, 1000);
  }, [x, y]);

  const canvasRef = useRef(null);
  return (
    <Container>
      <canvas ref={canvasRef} width={1000} height={1000} />
    </Container>
  );
};
export default BouncingDvd;

import React, { useEffect, useState, useRef } from "react";
import { Container, CanvasContainer } from "./BouncingDvd.styles";
const BouncingDvd = () => {
  let scale = 1.0;
  let logoColor;
  const canvasRef = useRef(null);
  let dvd = {
    x: 300,
    y: 400,
    xSpeed: 8,
    ySpeed: 8,
    img: new Image(),
  };
  useEffect(() => {
    main();
  }, []);
  function vh(v) {
    var h = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0
    );
    return (v * h) / 100;
  }

  const main = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const imgPath = "https://i.ibb.co/9VGZCT8/DVD-LOGO-1.png";
    dvd.img.src = imgPath;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - vh(7);

    // pickColor();
    update();
  };
  const update = () => {
    let ctx;
    setTimeout(() => {
      const canvas = canvasRef.current;
      if (canvas) {
        ctx = canvas.getContext("2d");
        ctx.fillStyle = "#524763";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = logoColor || "#82d8d8";
        ctx.fillRect(
          dvd.x,
          dvd.y,
          dvd.img.width * scale,
          dvd.img.height * scale
        );
        ctx.drawImage(
          dvd.img,
          dvd.x,
          dvd.y,
          dvd.img.width * scale,
          dvd.img.height * scale
        );
        dvd.x += dvd.xSpeed;
        dvd.y += dvd.ySpeed;
        checkHitBox();
        update();
      }
    }, 20);
  };
  const checkHitBox = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      if (dvd.x + dvd.img.width * scale >= canvas.width || dvd.x <= 0) {
        dvd.xSpeed *= -1;

        pickColor();
      }

      if (dvd.y + dvd.img.height * scale >= canvas.height || dvd.y <= 0) {
        dvd.ySpeed *= -1;
        pickColor();
      }
    }
  };
  function pickColor() {
    let r, g, b;
    r = Math.random() * (254 - 0) + 0;
    g = Math.random() * (254 - 0) + 0;
    b = Math.random() * (254 - 0) + 0;

    logoColor = "rgb(" + r + "," + g + ", " + b + ")";
  }

  return (
    <CanvasContainer>
      <canvas id="tv-screen" ref={canvasRef} width={1000} height={1000} />
    </CanvasContainer>
  );
};
export default BouncingDvd;

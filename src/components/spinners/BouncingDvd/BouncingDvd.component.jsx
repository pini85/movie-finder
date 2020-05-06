import React, { useEffect, useState, useRef } from "react";
import { Container, CanvasContainer } from "./BouncingDvd.styles";
const BouncingDvd = () => {
  let scale = 1.17;
  let logoColor;
  const canvasRef = useRef(null);
  let dvd = {
    x: 200,
    y: 300,
    xSpeed: 10,
    ySpeed: 10,
    img: new Image(),
  };
  useEffect(() => {
    main();
  }, []);
  const main = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const imgPath = "https://i.ibb.co/gj6cfG4/dvd-logo.png";
    dvd.img.src = imgPath;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    pickColor();
    update();
  };
  const update = () => {
    setTimeout(() => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = logoColor; //color changes here
      ctx.fillRect(dvd.x, dvd.y, dvd.img.width * scale, dvd.img.height * scale);
      ctx.drawImage(
        dvd.img,
        dvd.x,
        dvd.y,
        dvd.img.width * scale,
        dvd.img.height * scale
      );
      ctx.clearRect(0, 0, dvd.img.width * scale, dvd.img.height * scale);
      dvd.x += dvd.xSpeed;
      dvd.y += dvd.ySpeed;
      checkHitBox();
      update();
    }, 20);
  };
  const checkHitBox = () => {
    const canvas = canvasRef.current;
    if (dvd.x + dvd.img.width * scale >= canvas.width || dvd.x <= 0) {
      console.log("hi");

      dvd.xSpeed *= -1;
      console.log(dvd.xSpeed);

      pickColor();
    }

    if (dvd.y + dvd.img.height * scale >= canvas.height || dvd.y <= 0) {
      dvd.ySpeed *= -1;
      pickColor();
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
    <Container>
      <canvas ref={canvasRef} width={1000} height={1000} />
    </Container>
  );
};
export default BouncingDvd;

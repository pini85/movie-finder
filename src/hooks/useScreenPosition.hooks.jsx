import { useState, useEffect } from "react";

const useScreenPosition = (props) => {
  const [x, setX] = useState(null);
  const [y, setY] = useState(null);
  useEffect(() => {});
  return { x, y };
};
export default useScreenPosition;

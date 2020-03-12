import React, { useEffect } from "react";
import { tmdbApi } from "../../apis/tmdbApi";

const Home = props => {
  useEffect(() => {
    const fetchData = async () => {
      const data = await tmdbApi();
      console.log(data);
    };

    fetchData();
  }, []);
  return <div style={{ background: "var(--primary-color)" }}></div>;
};

export default Home;

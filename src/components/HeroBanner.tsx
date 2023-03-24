import { useState, useEffect } from "react";
import { bannerDsk, bannerMbl, useWindowSize } from ".";

const HeroBanner = () => {
  const { windowWidth } = useWindowSize();
  const [currentSize, setCurrentSize] = useState("");

  useEffect(() => {
    windowWidth <= 768 ? setCurrentSize("mobile") : setCurrentSize("desktop");
  }, [windowWidth]);

  const bannerImg = currentSize === "mobile" ? bannerMbl : bannerDsk;

  return (
    <div className="hero__img">
      <img src={bannerImg} alt="" sizes="(max-width: 768px) 100vw,100vw" />
    </div>
  );
};

export default HeroBanner;

import React, { useEffect, useState } from "react";
import "./section4.scss";
import Arrow from "../arrow/Arrow";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { Pagination } from "swiper/modules";

function Section4() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1300);

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 1300);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const cards = [
    {
      img: "https://printify.com/pfh/assets/legacy/custom-products.png",
      h3: "CREATE",
      h2: "custom products",
      p: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, perferendis.",
    },
    {
      img: "https://printify.com/pfh/assets/legacy/your-products.png",
      h3: "SELL",
      h2: "on your team",
      p: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, perferendis.",
    },
    {
      img: "https://printify.com/pfh/assets/legacy/fullfillment.png",
      h3: "WE HANDLE",
      h2: "fulfillment",
      p: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, perferendis.",
    },
  ];

  const containerVarients = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVarients = {
    hidden: { y: "-100%", opacity: 0 },
    show: { y: "0%", opacity: 1, transition: { duration: 0.5 } },
  };
  return (
    <>
      {isSmallScreen ? (
        <div className="section4">
          <div className="container">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              pagination={true}
              modules={[Pagination]}
              grabCursor={true}
              style={{ width: "100%", height: "100%" }}
            >
              {cards.map((e, i) => (
                <SwiperSlide key={i}>
                  <div className="card">
                    <div className="card-img">
                      <img src={e.img} alt="" />
                    </div>
                    <h3>{e.h3}</h3>
                    <h2>{e.h2}</h2>
                    <p>{e.p}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      ) : (
        <div className="section4">
          <motion.div
            variants={containerVarients}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="container"
          >
            {cards.map((e, i) => (
              <motion.div variants={cardVarients} key={i} className="card">
                <div className="card-img">
                  <img src={e.img} alt="" />
                </div>
                <h3>{e.h3}</h3>
                <h2>{e.h2}</h2>
                <p>{e.p}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      )}

      <Arrow bg={"#fff"} color={"#F7F7F7"} />
    </>
  );
}

export default Section4;

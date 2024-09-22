import React, { useEffect, useState } from "react";
import "./section7.scss";
import Arrow from "../arrow/Arrow";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

function Section7() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1300);

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 1300);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cards = [
    {
      img: "https://plus.unsplash.com/premium_photo-1710911198710-3097c518f0e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfDB8MHx8fDA%3D",
      name: "Robert A",
      link: "Store link",
      para: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero totam voluptatibus praesentium odit similique fugit sed modi tenetur quod sequi debitis, aperiam atque nulla consequuntur asperiores. Possimus iste eaque tempore.",
    },
    {
      img: "https://images.unsplash.com/photo-1533636721434-0e2d61030955?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfDB8MHx8fDA%3D",
      name: "Alex",
      link: "Esty Merchant",
      para: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero totam voluptatibus praesentium odit similique fugit sed modi tenetur quod sequi debitis, aperiam atque nulla consequuntur asperiores. Possimus iste eaque tempore.",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1693000697180-4e285198d71c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGV8ZW58MHwwfDB8fHww",
      name: "Nikki",
      link: "Store link",
      para: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero totam voluptatibus praesentium odit similique fugit sed modi tenetur quod sequi debitis, aperiam atque nulla consequuntur asperiores. Possimus iste eaque tempore.",
    },
    {
      img: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2ZpbGV8ZW58MHwwfDB8fHww",
      name: "Steve",
      link: "Store link",
      para: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero totam voluptatibus praesentium odit similique fugit sed modi tenetur quod sequi debitis, aperiam atque nulla consequuntur asperiores. Possimus iste eaque tempore.",
    },
    {
      img: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGV8ZW58MHwwfDB8fHww",
      name: "Jhon Doe",
      link: "Store link",
      para: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero totam voluptatibus praesentium odit similique fugit sed modi tenetur quod sequi debitis, aperiam atque nulla consequuntur asperiores. Possimus iste eaque tempore.",
    },
  ];

  const variants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: { duration: 1 },
    },
  };

  return (
    <>
      <div className="section7">
        <Swiper
          pagination={true}
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={isSmallScreen ? 1 : 3}
          className="mySwiper"
        >
          {cards.map((e, i) => (
            <SwiperSlide key={i}>
              <motion.div
                variants={variants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="top"
              >
                <div className="img-div">
                  <img src={e.img} alt={e.name} />
                </div>
                <div className="content">
                  <h3>{e.name}</h3>
                  <p>
                    <span>{e.link}</span>
                  </p>
                  <p>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </p>
                </div>
              </motion.div>
              <motion.div
                variants={variants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="bottom"
              >
                <p>{e.para}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Arrow bg={"#fff"} color={"#F7F7F7"} />
    </>
  );
}

export default Section7;

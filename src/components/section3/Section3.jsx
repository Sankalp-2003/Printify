import React, { useEffect, useState } from "react";
import "./section3.scss";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";

function Section3() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1300);

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 1300);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="section3">
      <div className="container">
        <motion.div
          initial={isSmallScreen ? false : { x: -700 }}
          whileInView={isSmallScreen ? false : { x: 0 }}
          viewport={{ once: true }}
          transition={isSmallScreen ? false : { duration: 0.6, delay: 0.5 }}
          className="white-div"
        >
          <motion.div
            initial={isSmallScreen ? false : { y: "120%" }}
            whileInView={isSmallScreen ? false : { y: 0 }}
            viewport={{ once: true }}
            transition={isSmallScreen ? false : { duration: 0.5 }}
            className="content"
          >
            <h1>Easily add your design to a wide range of products</h1>
            <p>
              With our free design tools, you can easily add your custom designs
              to t-shirts, mugs, phone cases, and hundreds of other products.
            </p>
            <p>
              <span>
                All products <FaArrowRight />
              </span>
            </p>
          </motion.div>
        </motion.div>
        <div className="image-div">
          <img
            src="https://plus.unsplash.com/premium_photo-1677431985624-63faa66c2a17?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGdyZWVuJTIwYmFja2dyb3VuZCUyMGltYWdlfGVufDB8fDB8fHww"
            alt=""
          />
        </div>
        <motion.div
          initial={isSmallScreen ? false : { y: "120%" }}
          whileInView={isSmallScreen ? false : { y: 0 }}
          viewport={{ once: true }}
          transition={isSmallScreen ? false : { duration: 0.5 }}
          className="shirt-img"
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRautpBWLfveVOPxiLn1tnPO4crrcDDs2T62w&s"
            alt=""
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Section3;

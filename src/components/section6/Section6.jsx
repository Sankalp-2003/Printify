import React from "react";
import "./section6.scss";
import { motion } from "framer-motion";

function Section6() {
  return (
    <div className="Section6">
      <div className="top">
        <div className="container">
          <h4>Are you a large business looking for custom solutions?</h4>
          <div className="btn">Talk to sales</div>
        </div>
      </div>
      <div className="bottom">
        <div className="box1">
          <h1>Trusted by over 8M sellers around the world</h1>
        </div>
        <div className="box2">
          <motion.p
            initial={{ x: "-100%" }}
            whileInView={{ x: "-0%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Whether you are just getting started or run an enterprise-level
            e-commerce business, we do everything we can to ensure a positive
            merchant experience.
          </motion.p>
        </div>
      </div>
    </div>
  );
}

export default Section6;

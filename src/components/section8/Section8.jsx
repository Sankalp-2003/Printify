import React from "react";
import "./section8.scss";
import { motion } from "framer-motion";

function Section8() {
  return (
    <div className="Section8">
      <motion.div
        initial={{ x: "100%" }}
        whileInView={{ x: "0%" }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="dark-div"
      >
        <motion.div
          initial={{ y: "5%", opacity: 0 }}
          whileInView={{ y: "0%", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="right"
        >
          <div className="content">
            <h1>Make Money, Risk-Free</h1>
            <p>You pay for fulfillment only when you make a sale</p>
            <div className="payment-div">
              <p>
                <span>You sell a t-shirt</span>
                <span>$ 30</span>
              </p>
              <p>
                <span>You pay for its production</span>
                <span>$ 12</span>
              </p>
              <hr />
              <h4>
                <span>Your profit</span>
                <span>$ 18</span>
              </h4>
            </div>
            <div className="btn">Start selling</div>
            <h5>100% Free to use · 900+ Products · Largest print network</h5>
          </div>
        </motion.div>
      </motion.div>
      <div className="img-div">
        <img src="section8_img.png" alt="" />
      </div>
    </div>
  );
}

export default Section8;

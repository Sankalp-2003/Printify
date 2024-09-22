import React from "react";
import "./section5.scss";
import { motion } from "framer-motion";

function Section5() {
  return (
    <div className="section5">
      <div className="top">
        <h1>Connect your store</h1>
        <p>
          Printify easily integrates with major e-commerce platforms and
          marketplaces
        </p>
      </div>
      <div className="bottom">
        <div className="card-container">
          <div className="main-card card">
            <img
              src="https://printify.com/pfh/media/printify-E3TBSF5R.svg"
              alt=""
            />
          </div>
          <motion.div
            initial={{ x: "90%", y: "-90%" }}
            whileInView={{ x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.5, 1, 0.89, 1] }}
            className="small card small1"
          >
            <img
              src="https://printify.com/pfh/media/more-integration-4S3FHLQZ.svg"
              alt=""
            />
          </motion.div>
          <motion.div
            initial={{ x: "-120%", y: "120%" }}
            whileInView={{ x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.5, 1, 0.89, 1] }}
            className="small card small2"
          >
            <img
              src="https://printify.com/pfh/media/big-commerce-EGSGKPYX.svg"
              alt=""
            />
          </motion.div>
          <motion.div
            initial={{ x: "90%", y: "120%" }}
            whileInView={{ x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.5, 1, 0.89, 1] }}
            className="small card small3"
          >
            <img src="https://printify.com/pfh/media/woo-PGFAG65X.svg" alt="" />
          </motion.div>

          <motion.div
            initial={{ x: "90%", y: "-90%" }}
            whileInView={{ x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.5, 1, 0.89, 1] }}
            className="medium card medium1"
          >
            <img src="https://printify.com/pfh/media/wix-MWZCZDTE.svg" alt="" />
          </motion.div>
          <motion.div
            initial={{ x: "-90%", y: "90%" }}
            whileInView={{ x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.5, 1, 0.89, 1] }}
            className="medium card medium2"
          >
            <img
              src="https://printify.com/pfh/media/presta-54F6AYUU.svg"
              alt=""
            />
          </motion.div>
          <motion.div
            initial={{ x: "-200%", y: "200%" }}
            whileInView={{ x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.5, 1, 0.89, 1] }}
            className="medium card medium3"
          >
            <img
              src="https://printify.com/pfh/media/squarespace-FIBF2RIF.svg"
              alt=""
            />
          </motion.div>

          <motion.div
            initial={{ x: "-150%", y: "-90%" }}
            whileInView={{ x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.5, 1, 0.89, 1] }}
            className="big card big1"
          >
            <img
              src="https://printify.com/pfh/media/shopify-3NAPXPBF.svg"
              alt=""
            />
          </motion.div>
          <motion.div
            initial={{ x: "90%", y: "-90%" }}
            whileInView={{ x: 0, y: 0 }}
            transition={{ duration: 1, ease: [0.5, 1, 0.89, 1] }}
            viewport={{ once: true }}
            className="big card big2"
          >
            <img
              src="https://printify.com/pfh/media/etsy-MXXFYORZ.svg"
              alt=""
            />
          </motion.div>
          <motion.div
            initial={{ x: "-90%", y: "-90%" }}
            whileInView={{ x: 0, y: 0 }}
            transition={{ duration: 1, ease: [0.5, 1, 0.89, 1] }}
            viewport={{ once: true }}
            className="big card big3"
          >
            <p>API</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Section5;

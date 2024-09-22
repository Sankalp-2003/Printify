import React from "react";
import "./arrow.scss";
import { VscTriangleDown } from "react-icons/vsc";

function Arrow({ bg, color }) {
  return (
    <div className="arrow" style={{ backgroundColor: bg }}>
      <VscTriangleDown style={{ color: color }} />
    </div>
  );
}

export default Arrow;

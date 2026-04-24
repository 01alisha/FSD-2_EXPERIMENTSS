import React from "react";

function HeavyComponent({ value }) {
  console.log("Rendered HeavyComponent");

  return <h3>Value: {value}</h3>;
}

export default React.memo(HeavyComponent);
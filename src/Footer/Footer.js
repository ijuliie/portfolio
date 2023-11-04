import React from "react";

const Footer = (props) => {
  const { date } = props;
  return <div style={{ textAlign: "center" }}>© {date}</div>;
};

export default Footer;

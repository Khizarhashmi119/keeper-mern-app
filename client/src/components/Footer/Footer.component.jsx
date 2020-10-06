import React from "react";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer>
      <p className="footer-p">
        &copy; Copyright {year} made with ❤ by Mohd. Khizar Hashmi
      </p>
    </footer>
  );
};

export default Footer;

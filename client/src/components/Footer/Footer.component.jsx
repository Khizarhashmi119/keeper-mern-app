import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p className="footer-p">
        &copy; Copyright {currentYear} made with ❤ by Mohd. Khizar Hashmi
      </p>
    </footer>
  );
};

export default Footer;

import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright Kevin Nolan - {currentYear}</p>
    </footer>
  );
}

export default Footer;
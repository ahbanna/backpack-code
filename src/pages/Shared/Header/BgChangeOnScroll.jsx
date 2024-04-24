import React from "react";

const BgChangeOnScroll = () => {
  const [header, setHeader] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };
  window.addEventListener("scroll", changeBackground);


  return (
    <div className={header ? "header-area active" : "header-area"}>
      <header>
        <div className="logo">
          <img src={logoImage} alt="Logo" />
        </div>
        <nav className="navbar">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default BgChangeOnScroll;

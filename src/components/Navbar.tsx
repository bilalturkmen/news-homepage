import { useState, useRef } from "react";
import { logoImg, menuOpen, menuClose } from ".";

interface NavlinkProps {
  links: navLinks[];
}

const headerNavbar = ({ links }: NavlinkProps) => {
  const navRef: any = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const showNavbar = () => {
    navRef.current.classList.toggle("mobile");
    setIsOpen(!isOpen);
  };
  return (
    <nav className="header__nav">
      <img src={logoImg} alt="" width={65} height={40} />
      <div className={`${isOpen ? "mobile__nav--bg" : ""}`} />
      <ul role="list" ref={navRef} aria-expanded="false">
        {links.map(({ url, title }) => (
          <li key={title}>
            <a href={url}>{title}</a>
          </li>
        ))}
        <button
          className="btn btn--close"
          aria-controls="navbarClose"
          aria-label="Close Menu"
          onClick={showNavbar}
        >
          <img src={menuClose} alt="" width={32} height={31} />
        </button>
      </ul>
      <button
        className="btn"
        aria-controls="navbarOpen"
        aria-label="Open Menu"
        onClick={showNavbar}
      >
        <img src={menuOpen} alt="" width={40} height={17} />
      </button>
    </nav>
  );
};

export default headerNavbar;

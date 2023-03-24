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
      <ul ref={navRef} className="menu ">
        {links.map(({ url, title }) => (
          <li key={title}>
            <a href={url} onClick={showNavbar}>
              {title}
            </a>
          </li>
        ))}
        <button
          className="btn btn--close"
          aria-label="Close menu"
          onClick={showNavbar}
        >
          <img src={menuClose} aria-hidden={true} width={32} height={31} />
        </button>
      </ul>
      <button className="btn" aria-label="Open menu" onClick={showNavbar}>
        <img src={menuOpen} aria-hidden={true} width={40} height={17} />
      </button>
    </nav>
  );
};

export default headerNavbar;

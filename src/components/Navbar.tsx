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
      <a href="/">
        <img src={logoImg} alt="" width={65} height={40} />
      </a>
      <div
        className={`${isOpen ? "mobile__nav--bg" : ""}`}
        onClick={showNavbar}
      />
      <div ref={navRef} className="menu ">
        {links.map(({ url, title }) => (
          <a key={title} href={url} onClick={showNavbar}>
            {title}
          </a>
        ))}
        <button
          className="btn btn--close"
          aria-label="Close menu"
          onClick={showNavbar}
        >
          <img src={menuClose} alt="" width={32} height={31} />
        </button>
      </div>
      <button className="btn" aria-label="Open menu" onClick={showNavbar}>
        <img src={menuOpen} alt="" width={40} height={17} />
      </button>
    </nav>
  );
};

export default headerNavbar;

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
      <a href="#" aria-label="go to home page">
        <img src={logoImg} alt="w news logo" width={65} height={40} />
      </a>
      <div
        className={`${isOpen ? "mobile__nav--bg" : ""}`}
        onClick={showNavbar}
      />
      <button
        className="btn"
        aria-label="Open menu"
        onClick={showNavbar}
        aria-controls="menu"
      >
        <img src={menuOpen} alt="" width={40} height={17} />
      </button>
      <div id="menu" role="menu" ref={navRef} className="menu ">
        {links.map(({ url, title }) => (
          <a
            role="menuitem"
            key={title}
            href={url}
            onClick={showNavbar}
            aria-label={`Go to ${title} page`}
          >
            {title}
          </a>
        ))}
        <button
          className="btn btn--close"
          aria-label="Close menu"
          onClick={showNavbar}
          aria-controls="menu"
        >
          <img src={menuClose} alt="" width={32} height={31} />
        </button>
      </div>
    </nav>
  );
};

export default headerNavbar;

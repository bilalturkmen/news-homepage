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
        type="button"
        id="OpenMenu"
        aria-haspopup="true"
        aria-controls="menu2"
        className="btn"
        onClick={showNavbar}
      >
        <img src={menuOpen} alt="" width={40} height={17} />
      </button>
      <ul
        id="menu2"
        role="menu"
        aria-labelledby="OpenMenu"
        ref={navRef}
        className="menu "
      >
        {links.map(({ url, title }) => (
          <li role="none">
            <a role="menuitem" key={title} href={url} onClick={showNavbar}>
              {title}
            </a>
          </li>
        ))}
        <button
          type="button"
          id="CloseMenu"
          aria-controls="menu2"
          className="btn btn--close"
          onClick={showNavbar}
        >
          <img src={menuClose} alt="" width={32} height={31} />
        </button>
      </ul>
    </nav>
  );
};

export default headerNavbar;

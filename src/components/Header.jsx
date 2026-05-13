"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faBagShopping,
  faBookOpen,
  faLayerGroup,
  faCircleQuestion,
  faEnvelope,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import BioCosmeticLogo from "./BioCosmeticLogo";

const navItems = [
  { href: "/", label: "Home", icon: faHouse },
  { href: "/shop", label: "Shop", icon: faBagShopping },
  { href: "/about-us", label: "About Us", icon: faBookOpen },
  { href: "/categories", label: "Categories", icon: faLayerGroup },
  { href: "/faq", label: "FAQ", icon: faCircleQuestion },
  { href: "/contact", label: "Contact", icon: faEnvelope },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  function toggleMenu() {
    setOpen((prev) => !prev);
  }

  function closeMenu() {
    setOpen(false);
  }

  function isActive(href) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  return (
    <>
      <header className="pbHeader">
        <div className="pbContainer pbHeaderInner">
          <BioCosmeticLogo />

          <nav className="pbNav">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={isActive(item.href) ? "active" : ""}
              >
                <FontAwesomeIcon icon={item.icon} />
                {item.label}
              </Link>
            ))}
          </nav>

          <a
            href="https://marykay.com/piyayboutik.com"
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="pbHeaderBtn"
          >
            All Products →
          </a>

          <button
            className={`pbMenuBtn ${open ? "active" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            type="button"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      <div className={`pbMobileMenu ${open ? "open" : ""}`}>
        <div className="pbMobileTop">
            
            <BioCosmeticLogo />

          <button className="pbCloseBtn" onClick={closeMenu} type="button">
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>

        <div className="pbMobileInner">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className={isActive(item.href) ? "active" : ""}
            >
              <FontAwesomeIcon icon={item.icon} />
              {item.label}
            </Link>
          ))}

          <a
            href="https://marykay.com/piyayboutik.com"
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="pbMobileCTA"
          >
            View All products →
          </a>
        </div>
      </div>
    </>
  );
}
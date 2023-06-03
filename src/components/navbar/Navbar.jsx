"use client";
import Link from "next/link";
import styles from "./navbar.module.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Service",
    url: "/service",
  },
  {
    id: 3,
    title: "Location",
    url: "/location",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const NavBar = () => {
  const [openNav, setOpenNav] = useState(false);

  const handleNav = () => {
    setOpenNav(!openNav);
  };

  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        Rehabify
      </Link>
      <DarkModeToggle />
      <ul className={openNav ? styles.standlinks : styles.navlinks}>
        <FaTimes size="2rem" className={styles.close} onClick={handleNav} />
        {links.map((link) => (
          <Link
            key={link.id}
            as={link.url}
            href={link.url}
            className={styles.linkcolor}
          >
            {link.title}
          </Link>
        ))}
      </ul>
      <div className={styles.bars}>
        <FaBars className={styles.icons} size="2rem" onClick={handleNav} />
      </div>
    </nav>
  );
};

export default NavBar;

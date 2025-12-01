import React, { useState } from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";

type LinkType = {
  id: number;
  title: string;
  href: string;
};

type HeaderProps = {
  logo: string;
  links: LinkType[];
};

const Header = ({ logo, links }: HeaderProps) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className={`${styles.wrapper} ${styles.headerWrapper}`}>
        <div className={styles.logoWrapper}>
          <Link href="/">
            <Image
              alt="logo"
              className={styles.logoImg}
              src="/assets/logo.jpg"
              width={100}
              height={250}
            />
          </Link>
            <Link href="/" className={styles.logo}>
              {logo}
            </Link>
        </div>

        <button
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className={styles.burgerBtn}
        >
          <img src="/assets/hamburger-sidebar.svg" alt="burger" />
        </button>

        <nav className={styles.desktopNav}>
          <ul className={styles.nav}>
            {links.map((link) => (
              <li key={link.id}>
                <Link href={link.href} className={styles.navLink}>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <div
        className={`${styles.mobileMenu} ${
          isMobileMenuOpen ? styles.mobileMenuOpen : ""
        }`}
      >
        <nav className={styles.mobileNav}>
          <ul className={styles.nav}>
            {links.map((link) => (
              <li key={link.id}>
                <Link href={link.href} className={styles.navLink}>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;

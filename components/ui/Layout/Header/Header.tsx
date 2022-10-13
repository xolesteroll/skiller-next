import s from "./Header.module.scss";
import logo from "../../../../public/images/skiller-logo-transparent.png";
import Link from "next/link";
import Container from "../../Container/Container";

const Header = () => {
  return (
    <header className={s.header}>
      <Container>
        <div className={s.headerInner}>
          <div className={s.headerLogo}>
            <Link href="/">
              <a>
                <img src={logo.src} alt="main site logo" />
              </a>
            </Link>
          </div>

          <nav className={s.headerNav}>
            <ul className={s.headerNavMenu}>
              <li className={s.headerNavItem}>
                <Link className={s.headerNavLink} href="/">
                  Home
                </Link>
              </li>
              <li className={s.headerNavItem}>
                <Link className={s.headerNavLink} href="/about">
                  About Us
                </Link>
              </li>
              <li className={s.headerNavItem}>
                <Link className={s.headerNavLink} href="/services">
                  Services
                </Link>
              </li>
              <li className={s.headerNavItem}>
                <Link className={s.headerNavLink} href="/main/skills">
                  Skills
                </Link>
              </li>
            </ul>
          </nav>

          <div className={s.headerControls}>
            <ul className={s.headerControlsAuth}>
              <li>
                <Link href="/auth">Sign In / Sign Up</Link>
              </li>
              <li>
                <Link href="/account">My account</Link>
              </li>
              <li>
                <button type="button">Logout</button>
              </li>
            </ul>
          </div>
        </div>
      </Container>
      <div className={s.headerBottom}>
        <p className={s.headerSlogan}>
          <span className={s.headerSloganText}>Skill Matters!!!</span>
        </p>
      </div>
    </header>
  );
};

export default Header;

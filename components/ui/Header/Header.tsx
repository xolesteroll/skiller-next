import s from './Header.module.scss'
import logo from '../../../public/images/skiller-logo-transparent.png'
import Link from "next/link";

const Header = () => {
    return (
        <header className={s.header}>
            <div className="main-container">
                <div className={s.headerInner}>
                    <div className={s.headerLogo}>
                        <img src={logo.src} alt="main site logo"/>
                    </div>

                    <nav className={s.headerNav}>
                        <ul className={s.headerNavMenu}>
                            <li className={s.headerNavItem}>
                                <Link href="/">Home</Link>
                            </li>
                            <li className={s.headerNavItem}>
                                <Link href="/about">About Us</Link>
                            </li>
                            <li className={s.headerNavItem}>
                                <Link href="/services">Services</Link>
                            </li>
                            <li className={s.headerNavItem}>
                                <Link href="/skills">Skills</Link>
                            </li>
                        </ul>
                    </nav>


                    <div className={s.headerControls}>
                        <ul className={s.headerControlsAuth}>
                            <li><Link href="/auth">Sign In / Sign Up</Link></li>
                            <li><Link href="/account">My account</Link></li>
                            <li>
                                <button type="button">Logout</button>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
            <div className={s.headerBottom}>
                {/*<app-header-slogan></app-header-slogan>*/}
            </div>
        </header>


);
}

export default Header
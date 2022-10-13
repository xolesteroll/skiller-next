import React from 'react';
import s from '../../../styles/Nav.module.scss'
import Link from "next/link";
import {useRouter} from "next/router";

const FeedNav = () => {
    const router = useRouter()

    return (
        <nav className={s.nav}>
            <ul className={s.navList}>
                <li className={s.navListItem}>
                    <Link href={`${router.asPath}/explore`} className={s.navListLink}>
                        Explore
                    </Link>
                </li>
                <li className={s.navListItem}>
                    <Link href={`${router.asPath}/skills`} className={s.navListLink}>
                        Skills
                    </Link>
                </li>
                <li className={s.navListItem}>
                    <Link href={`${router.asPath}/deals`} className={s.navListLink}>
                        Deals
                    </Link>
                </li>
                <li className={s.navListItem}>
                    <Link href={`${router.asPath}/account`} className={s.navListLink}>
                        Account
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default FeedNav;
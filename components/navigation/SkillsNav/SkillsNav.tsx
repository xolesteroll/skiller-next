import React from 'react';
import s from '../../../styles/Nav.module.scss'
import Link from "next/link";
import {useRouter} from "next/router";

const SkillsNav = () => {
    const router = useRouter()

    return (
        <nav className={s.nav}>
            <ul className={s.navList}>
                <li className={s.navListItem}>
                    <Link href={`${router.asPath}/my`} className={s.navListLink}>
                        My Skills
                    </Link>
                </li>
                <li className={s.navListItem}>
                    <Link href={`${router.asPath}/add`} className={s.navListLink}>
                        Add Skills
                    </Link>
                </li>
                <li className={s.navListItem}>
                    <Link href={`${router.asPath}/create`} className={s.navListLink}>
                        Create Skills
                    </Link>
                </li>
                <li className={s.navListItem}>
                    <Link href={`${router.asPath}/search`} className={s.navListLink}>
                        Find Skills
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default SkillsNav;
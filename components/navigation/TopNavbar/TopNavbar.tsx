import React, {useEffect, useState} from 'react';

import s from './TopNavbar.module.scss'
import BackBtn from "../BackBtn/BackBtn";

// enum Visibility {
//     show = 'show',
//     hide = 'hide'
// }

type NavbarProps = {
    visibility: string
}

const TopNavbar: React.FC<NavbarProps> = ({visibility = 'show'}) => {
    const [visibilityClass, setVisibilityClass] = useState<string>(visibility)
    const [scrollOffset, setScrollOffset] = useState(0)

    const watchScrollHandler = () => {
        const position = window.scrollY
        if (position > 0 && position > scrollOffset) {
            setVisibilityClass('show')
        }
        if (position > 0 && position < scrollOffset) {
            setVisibilityClass('hide')
        }
        if (position === 0) {
            setVisibilityClass('hide')
        }

        setScrollOffset(position)
        console.log(position)
    }

    useEffect(() => {
        window.addEventListener('scroll', watchScrollHandler, {passive: true})

        if (visibility !== visibilityClass) {
            setVisibilityClass(visibility)
        }

        return () => {
            window.removeEventListener('scroll', watchScrollHandler)
        }
    }, [visibility])

    return (
        <div className={`dynamic-navbar ${s.navbar} ${visibilityClass}`}>
            <BackBtn/>
        </div>
    );
};

export default TopNavbar;
'use client'
import className from 'classnames/bind'
import Style from '@/styles/Header.module.scss'
import { useEffect, useState } from 'react'
import Button from '@/macrocosm/components/Button'


const cx = className.bind(Style)
interface HeaderProps {
    theme: string
}
const Header = ({ theme }: HeaderProps) => {
    const [mode, setMode] = useState<string>(theme);

    const handleTheme = () => {
        const opposite = mode === "light" ? "dark" : "light";
        document.cookie = `theme=${opposite}; expires=Fri, 31 Dec 9999 23:59:59 GMT; Path=/; `;
        document.body.setAttribute('data-theme', opposite);
        setMode(opposite)
    }
    return (
        <div className={cx("header-wrap")}>
            <div className={cx("header-contain")}>
                <Button onClick={handleTheme}>asd</Button>

            </div>

        </div>
    )
}


export default Header
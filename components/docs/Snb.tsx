'use clinet'

import classNames from "classnames/bind"
import Style from '@/styles/Snb.module.scss'
import Link from "next/link"
import Button from "@/macrocosm/components/Button"
const cx = classNames.bind(Style)
interface SubProps {
    tag?: string | string[] | undefined
}
const Snb = ({ tag }: SubProps) => {
    return (
        <div className={cx("snb-wrap")}>
            <nav className={cx('nav-wrap')}>
                <Nav name="전체 게시물" count={90} isActive={!tag} />
                {NavDummy.map(v => <Nav key={v.name} count={v.count} name={v.name} isActive={v.name === tag} />)}
            </nav>
        </div>
    )
}

export default Snb

interface NavProps {
    name: string
    count: number
    isActive?: boolean
}




const Nav = ({ name, count, isActive }: NavProps) => {
    return (
        <Link className={cx("nav-content", isActive && "nav-active")} href={name !== "전체 게시물" ? { query: { tag: name } } : '/docs'}>
            <h3 className={cx("nav-name")}>{name}</h3><span className={cx("nav-count")}>({count})</span>
        </Link>
    )

}

const NavDummy: NavProps[] = [
    { count: 10, name: "리액트" },
    { count: 10, name: "flutter" },
    { count: 10, name: "nextjs" },
    { count: 10, name: "고문" },
    { count: 10, name: "리액트" },
    { count: 10, name: "flutter" },
    { count: 10, name: "nextjs" },
    { count: 10, name: "고문" },

]
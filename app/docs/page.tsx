import Snb from "@/components/docs/Snb"
import classNames from "classnames/bind"
import Style from '@/styles/Docs.module.scss'
const DocsPage = ({ searchParams }: Props) => {
    const cx = classNames.bind(Style)
    return (
        <div className={cx("docs-wrap")}>
            <Snb tag={searchParams.tag} />
            <div className={cx('docs-content')}>
                {searchParams.tag && <div className={cx("tag-content")}><p className={cx('tag-name')}>{searchParams.tag}</p></div>}

            </div>
        </div>

    )
}

export default DocsPage





type Props = {
    searchParams: { [key: string]: string | string[] | undefined }
}
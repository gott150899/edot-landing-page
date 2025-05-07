import clsx from "clsx";
import styles from './TitleBasic.module.scss';

type TitleBasicProps = {
    title: string;
    size?: 's' | 'm' | 'l';
    color?: 'orange' | 'blue'
    textAlign?: 'left' | 'center' | 'right'
}


export default function TitleBasic({ title, size = 'm', color = 'orange', textAlign = 'left' }: TitleBasicProps){
    return(
        <div className={clsx(styles[`tbs__container--align-${textAlign}`])}>
            <span className={
                clsx(
                    styles['tbs__title--base'],
                    styles[`tbs__title--size-${size}`],
                    styles[`tbs__title--color-${color}`]
                )
            }>
                {title}
            </span>
        </div>
    )
}
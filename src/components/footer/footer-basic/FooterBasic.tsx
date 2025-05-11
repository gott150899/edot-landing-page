import { clsx } from 'clsx';
import styles from './FooterBasic.module.scss';
import CONSTANT from '../../../utils/constant';
// import footerBlend from '../../../assets/images/blend.svg';

export default function FooterBasic(){
    return(
        <footer className={clsx(styles['ftb__container'])}>
            <div className={clsx(styles['ftb__blend-background'])}></div>
            <div className={clsx(styles['ftb__wrapper'])}>
                <div className="container">
                    <span className={clsx(styles['ftb__contact--text'])}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae laudantium nesciunt quo temporibus dolorem fuga cupiditate et aliquid, enim autem similique molestias ducimus culpa magnam praesentium iure a voluptas laborum.
                    </span>
                </div>
                <div className={clsx(styles['ftb__divider'])}></div>
                <span className={clsx(styles['ftb__reserved'])}>Copyright © {CONSTANT.INFO.companyName}. All rights reserved.</span>
            </div>
        </footer>
    )
}
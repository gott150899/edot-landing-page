import { clsx } from 'clsx';
import styles from './HeaderBasic.module.scss';
import { useEffect, useState } from 'react';
import CONSTANT from '../../../utils/constant';

export default function HeaderBasic(){
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
          setIsScrolled(window.scrollY > CONSTANT.SCROLL_THRESHOLD);
        };
    
        window.addEventListener('scroll', onScroll);
        onScroll(); // chạy 1 lần khi mount
    
        return () => {
          window.removeEventListener('scroll', onScroll);
        };
    }, []);

    return(
        <header className={clsx(styles.hbs__container, isScrolled && styles.active)}>
            <div className="container">
                <div className={clsx(styles.hbs__wrapper)}>
                    <div>
                        <a href="">Logo</a>
                    </div>
                    <div className={clsx(styles['hbs__right--wrapper'])}>
                        {
                            CONSTANT.HEADER_MENU.map((item, index) => (
                                <a href={item.link} className={clsx(styles['hbs__right--item'], index === 0 && styles.active)} key={index}>{item.text}</a>
                            ))
                        }
                    </div>
                </div>
            </div>
        </header>
    )
}
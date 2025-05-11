import { clsx } from 'clsx';
import styles from './HeaderBasic.module.scss';
import { useEffect, useState } from 'react';
import CONSTANT from '../../../utils/constant';
import { HiOutlineMenu } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';

type HeaderBasicProps = {
    pageRender: 'home' | 'product'
}

export default function HeaderBasic({ pageRender = 'home' }: HeaderBasicProps){
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

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

    useEffect(() => {
        if(menuOpen){
            document.body.style.overflow = 'hidden';
        }else{
            document.body.style.removeProperty('overflow');
        }
    }, [menuOpen])

    return(
        <header className={clsx(
            styles.hbs__container,
            styles[`apply-for-${pageRender}`],
            (isScrolled && pageRender === 'home') && styles.active,
        )}>
            <div className="container">
                <div className={clsx(styles.hbs__wrapper)}>
                    <div>
                        <a href="/">Logo</a>
                    </div>
                    <div className={clsx(styles['hbs__right--wrapper'])}>
                        {
                            CONSTANT.HEADER_MENU.map((item, index) => (
                                <a href={item.link} className={clsx(styles['hbs__right--item'], 'only-show-desktop', index === 0 && styles.active)} key={index}>{item.text}</a>
                            ))
                        }
                        <button type='button' className={clsx(styles['hbs__btn-contact'], 'only-show-desktop')}>Liên hệ</button>
                        <button type='button' className={clsx(styles['hbs__btn-menu'], 'flex-center only-show-mobile')} onClick={() => setMenuOpen(true)}>
                            <HiOutlineMenu color='white' size={28} />
                        </button>
                    </div>
                </div>
            </div>
            <MenuMobile isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
        </header>
    )
}

type MenuMobileProps = {
    isOpen: boolean;
    onClose: () => void;
}

function MenuMobile({ isOpen, onClose }: MenuMobileProps){
    return(
        <AnimatePresence>
            {
                isOpen &&
                <motion.div
                    initial={{ opacity: 0, y: -50 }} // Menu bắt đầu với opacity 0 và y = -50 (ở trên)
                    animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -50 }} // Nếu menu mở, opacity = 1 và y = 0 (xuống từ trên)
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.5 }} // Thời gian hiệu ứng
                    className={clsx(styles['mem__container'], styles['open'])}
                >
                    <div className={clsx(styles['mem__wrapper'])}>
                        <IoClose size={40} className={clsx(styles['mem__btn--close'])} onClick={onClose} />
                        <div>
                            <a href="/">
                                <img src="https://res.ivivu.com/hotelclient/img/logo/logo-goc-ivv.svg" alt="" />
                            </a>
                        </div>
                        <div className={clsx(styles['mem__items--container'])}>
                            <div className={clsx(styles['hbs__right--wrapper'])}>
                                {
                                    CONSTANT.HEADER_MENU.map((item, index) => (
                                        <a href={item.link} className={clsx(styles['hbs__right--item'], index === 0 && styles.active)} key={index} onClick={onClose}>{item.text}</a>
                                    ))
                                }
                                <button type='button' className={clsx(styles['hbs__btn-contact'])}>Liên hệ</button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            }
        </AnimatePresence>
    )
}